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
import BoolValue "mo:caffeineai-oql/BoolValue";
import Subscribers "mo:caffeineai-email-marketing/subscribers";
import VerifiedEmails "mo:caffeineai-email-verification/verifiedEmails";
import MixinEmailUnsubscribe "mo:caffeineai-email-marketing/unsubscribeMixin";
import MixinEmailVerification "mo:caffeineai-email-verification/verificationMixin";
import NewsletterTypes "types/newsletter";
import NewsletterMixin "mixins/newsletter-api";
import NewsletterLib "lib/newsletter";






  actor {
   // --- Authorization ---
   let accessControlState : AccessControl.AccessControlState;
   include MixinAuthorization(accessControlState);

   // --- User Approval (contribution authors) ---
   let approvalState : UserApproval.UserApprovalState;

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
   let profiles : Map.Map<Principal, ProfileTypes.BusinessProfile>;
   include ProfileMixin(accessControlState, profiles);

  // --- Guides ---
  // The guides List is stable memory under --default-persistent-actors, so the
  // 5 sample guides (and any user-created guides) survive upgrades without
  // re-seeding. seedSampleGuides is idempotent: it only seeds on the very first
  // deploy when stable memory is empty (guides.size() == 0); on every restart
  // or upgrade the guard short-circuits and the persisted guides are loaded
  // directly from stable memory.
   let guides : List.List<GuideTypes.Guide>;
   let guideState : { var nextGuideId : Nat };

   // --- Contributions ---
   // The contributions List is stable memory; user-submitted contributions
   // persist across upgrades without re-seeding.
   let contributions : List.List<ContributionTypes.Contribution>;
   let contributionState : { var nextContributionId : Nat };

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
   let outages : List.List<OutageTypes.OutageRecord>;
   let outageState : { var nextOutageId : Nat };
   // Seed historical outages on first deploy only (idempotent guard inside).
   OutageLib.seedHistoricalOutages(outages, outageState);

   transient let allProviderNames : [Text] = [
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

   // --- Newsletter ---
   // Topic-based newsletter subscriptions (weekly/monthly), verified-email
   // store, subscriber first names for personalization, and admin-composed
   // content per topic. The weekly and monthly topics are seeded by the
   // migration chain; the unsubscribe and verification mixins handle the
   // platform callback links.
   let emailSubscribers : Subscribers.State;
   let verifiedEmails : VerifiedEmails.State;
   let subscriberNames : Map.Map<Text, Text>;
   let newsletterContent : Map.Map<Nat, NewsletterTypes.NewsletterContent>;

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
      // Newsletter topics and subscriptions are private app data: the Data
      // Intelligence agent reads everything while end users never query them
      // directly, so both are controller-only.
      OQL.Entity.manual<Subscribers.Topic>("newsletterTopic", func () = Subscribers.listTopics(emailSubscribers).values(), "NewsletterTopic", "id")
        .sample({ id = 0; name = "" })
        .payload("id", func t = t.id)
        .payload("name", func t = t.name)
        .controllerOnly()
        .build(),
      OQL.Entity.manual<NewsletterTypes.Subscription>("newsletterSubscription", func () = NewsletterLib.listSubscriptions(emailSubscribers, verifiedEmails, subscriberNames).values(), "NewsletterSubscription", "id")
        .sample({ id = 0; email = ""; firstName = ""; topicId = 0; topicName = ""; verified = false })
        .payload("id", func s = s.id)
        .payload("email", func s = s.email)
        .payload("firstName", func s = s.firstName)
        .payload("topicId", func s = s.topicId)
        .payload("topicName", func s = s.topicName)
        .payload("verified", func s = s.verified)
        .controllerOnly()
        .build(),
    ];
  });

   // --- NYC Courses ---
   let courses : List.List<CourseTypes.Course>;
   let courseState : { var nextCourseId : Nat };
   // Timer IDs are invalid after a canister restart, so this is transient and
   // re-initialized on every (re)start. The recurring course-fetch timer is
   // re-scheduled below in the actor init block.
   let courseTimerId : { var value : Nat };
   let lastCourseFetch : { var value : Common.Timestamp };

  include CourseMixin(accessControlState, courses, courseState, lastCourseFetch, courseTimerId);

   // --- Newsletter ---
   // Topic-based newsletter subscriptions (weekly/monthly), verified-email
   // store, subscriber first names for personalization, and admin-composed
   // content per topic. The weekly and monthly topics are seeded by the
   // migration chain; the unsubscribe and verification mixins handle the
   // platform callback links.
   include MixinEmailUnsubscribe(emailSubscribers);
   include MixinEmailVerification(verifiedEmails);
   include NewsletterMixin(accessControlState, emailSubscribers, verifiedEmails, subscriberNames, newsletterContent);

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

  // --- Newsletter scheduled sends ---
  // Weekly newsletter every 7 days and monthly newsletter every 30 days to the
  // verified subscribers of the respective topic. Each send uses the content
  // the admin composed for that topic and personalizes with the subscriber
  // first name plus a per-topic unsubscribe link.
  transient let _weeklyNewsletterTimer = Timer.recurringTimer<system>(#nanoseconds (7 * 24 * 60 * 60 * 1_000_000_000), func() : async () {
    try {
      ignore await sendWeeklyNewsletter();
    } catch (_e) {
      /* ignore failures to keep timer alive */
    };
  });

  transient let _monthlyNewsletterTimer = Timer.recurringTimer<system>(#nanoseconds (30 * 24 * 60 * 60 * 1_000_000_000), func() : async () {
    try {
      ignore await sendMonthlyNewsletter();
    } catch (_e) {
      /* ignore failures to keep timer alive */
    };
  });
};
