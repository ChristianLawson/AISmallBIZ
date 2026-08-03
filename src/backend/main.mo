import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import UserApproval "mo:caffeineai-user-approval/approval";
import ProfileTypes "types/profile";
import GuideTypes "types/guide";
import ContributionTypes "types/contribution";
import ProfileMixin "mixins/profile-api";
import GuideMixin "mixins/guide-api";
import GuideLib "lib/guide";
import ContributionMixin "mixins/contribution-api";
import OutageTypes "types/outage";
import OutageMixin "mixins/outage-api";
import OutageLib "lib/outage";
import Timer "mo:core/Timer";
import CourseTypes "types/nyc-courses";
import CourseMixin "mixins/nyc-courses-api";
import CourseLib "lib/nyc-courses";
import Common "types/common";
import OQL "mo:caffeineai-oql";
import Expose "mo:caffeineai-oql/Expose";
import ListEntity "mo:caffeineai-oql/ListEntity";
import Entity "mo:caffeineai-oql/Entity";
import RecordValue "mo:caffeineai-oql/RecordValue";
import TextValue "mo:caffeineai-oql/TextValue";
import FloatValue "mo:caffeineai-oql/FloatValue";
import NatValue "mo:caffeineai-oql/NatValue";
import Migration "migration";





(with migration = Migration.run) actor {
  // --- Authorization ---
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // --- User Approval (contribution authors) ---
  let approvalState = UserApproval.initState(accessControlState);

  public query ({ caller }) func isCallerApproved() : async Bool {
    AccessControl.hasPermission(accessControlState, caller, #admin) or UserApproval.isApproved(approvalState, caller);
  };

  public shared ({ caller }) func requestApproval() : async () {
    UserApproval.requestApproval(approvalState, caller);
  };

  public shared ({ caller }) func setApproval(user : Principal, status : UserApproval.ApprovalStatus) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.setApproval(approvalState, user, status);
  };

  public query ({ caller }) func listApprovals() : async [UserApproval.UserApprovalInfo] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.listApprovals(approvalState);
  };

  // --- Business Profiles ---
  let profiles = Map.empty<Principal, ProfileTypes.BusinessProfile>();
  include ProfileMixin(accessControlState, profiles);

  // --- Guides ---
  // The guides List is stable memory under --default-persistent-actors, so the
  // 5 sample guides (and any user-created guides) survive upgrades without
  // re-seeding. seedSampleGuides is idempotent: it only seeds on the very first
  // deploy when stable memory is empty (guides.size() == 0); on every restart
  // or upgrade the guard short-circuits and the persisted guides are loaded
  // directly from stable memory.
  let guides = List.empty<GuideTypes.Guide>();
  let guideState = { var nextGuideId = 0 };

  // --- Contributions ---
  // The contributions List is stable memory; user-submitted contributions
  // persist across upgrades without re-seeding.
  let contributions = List.empty<ContributionTypes.Contribution>();
  let contributionState = { var nextContributionId = 0 };

  // Seed sample guides on first deploy only (idempotent guard inside).
  GuideLib.seedSampleGuides(guides, guideState);

  include GuideMixin(accessControlState, guides, guideState, profiles, contributions);
  include ContributionMixin(accessControlState, contributions, contributionState, guides, guideState);

  // --- Outage Tracker ---
  // The outages List is stable memory under --default-persistent-actors, so the
  // 36 historical outage records (and any user-contributed outages) survive
  // upgrades without re-seeding. seedHistoricalOutages is idempotent: it only
  // seeds on the very first deploy when stable memory is empty
  // (nextOutageId == 0); on every restart or upgrade the guard short-circuits
  // and the persisted outages are loaded directly from stable memory.
  let outages = List.empty<OutageTypes.OutageRecord>();
  let outageState = { var nextOutageId = 0 };
  // Seed historical outages on first deploy only (idempotent guard inside).
  OutageLib.seedHistoricalOutages(outages, outageState);

  let allProviderNames : [Text] = [
    "AWS", "Azure", "Google Cloud", "IBM Cloud", "Oracle", "DigitalOcean",
    "Linode", "Vultr", "Rackspace", "Cloudflare", "Verizon", "Comcast",
    "AT&T", "T-Mobile", "CenturyLink", "Fastly", "GitHub", "Slack",
    "Zoom", "Dropbox", "Salesforce", "Shopify", "CrowdStrike",
    "Stripe", "Square", "PayPal", "Venmo", "Adyen",
  ];

  // Cache of the most recent polled provider health snapshot. Updated by
  // fetchProviderHealthStatus on every poll and read by getProviderHealthStatus
  // between polls so query reads are consistent and never block on HTTP outcalls.
  transient let healthCache = { var value : [OutageTypes.ProviderHealthStatus] = [] };

  transient var healthCheckTimerId : Nat = 0;

  include OutageMixin(accessControlState, outages, outageState, allProviderNames, healthCache, transform);

  // --- OQL Data Intelligence ---
  // Exposes the persisted outage records as a queryable entity so the Data
  // Intelligence agent can answer natural-language questions over historical
  // outage data. Provider stats are derived from this same store, so a single
  // `outage` entity covers both. Authorization is controller-only (the default):
  // the agent reads everything while the data stays private to end users.
  include Expose({
    entities = [
      outages.toEntity("outage", "OutageRecord", "id")
        .sample({
          id = 0;
          date = "";
          provider = "";
          regionScope = "";
          durationHours = 0.0;
          incidentType = "";
          nycImpactDescription = "";
        })
        .controllerOnly()
        .build(),
    ];
  });

  // --- NYC Courses ---
  let courses = List.empty<CourseTypes.Course>();
  let courseState = { var nextCourseId = 0 };
  // Timer IDs are invalid after a canister restart, so this is transient and
  // re-initialized on every (re)start. The recurring course-fetch timer is
  // re-scheduled below in the actor init block.
  let courseTimerId = { var value = 0 };
  let lastCourseFetch = { var value = 0 : Common.Timestamp };

  include CourseMixin(accessControlState, courses, courseState, lastCourseFetch, courseTimerId);

  // Schedule weekly fetch for Friday 4pm — must be done in actor context for <system> capability
  transient let _courseFetchTimer = Timer.setTimer<system>(#nanoseconds (CourseLib.calculateDelayToFriday4pm(Time.now())), func() : async () {
    try {
      ignore await fetchCourses();
    } catch (_e) {
      /* ignore failures to keep timer alive */
    };
    // Set recurring timer for every 7 days
    courseTimerId.value := Timer.recurringTimer<system>(#nanoseconds (7 * 24 * 60 * 60 * 1_000_000_000), func() : async () {
      try {
        ignore await fetchCourses();
      } catch (_e) {
        /* ignore failures to keep timer alive */
      };
    });
  });

  // --- Backend recurring health refresh ---
  // Re-invokes fetchProviderHealthStatus every 5 minutes (300 seconds) so the
  // cached health snapshot stays fresh independently of frontend requests. The
  // timer calls the update function asynchronously, so query reads of the cache
  // between refreshes are never blocked. Initialized on canister install/startup.
  healthCheckTimerId := Timer.recurringTimer<system>(#nanoseconds (5 * 60 * 1_000_000_000), func() : async () {
    try {
      ignore await fetchProviderHealthStatus();
    } catch (_e) {
      /* ignore failures to keep timer alive */
    };
  });
};
