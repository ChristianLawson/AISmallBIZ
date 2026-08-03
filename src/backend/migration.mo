// backend/migration.mo
// Explicit migration for the Guide record shape change: the new Guide type
// adds a required `recommendedNext : [GuideId]` field. This migration runs
// once on upgrade, mapping over the persisted guides List and adding
// `recommendedNext = []` to each guide. All other stable fields are passed
// through unchanged. Transient fields (healthCache, healthCheckTimerId,
// _courseFetchTimer) are NOT part of the stable signature and are excluded.
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import UserApproval "mo:caffeineai-user-approval/approval";
import GuideTypes "types/guide";
import ProfileTypes "types/profile";
import ContributionTypes "types/contribution";
import OutageTypes "types/outage";
import CourseTypes "types/nyc-courses";
import Common "types/common";

module {
  // --- Old types (defined inline, mirroring .old/src/backend/types/guide.mo) ---
  // The old Guide type lacks the recommendedNext field.
  public type OldTopic = {
    #googleMaps;
    #socialAds;
    #businessPlanning;
    #branding;
    #techUpgrades;
  };

  public type OldAuthorType = {
    #admin;
    #community;
  };

  public type OldGuide = {
    id : Common.GuideId;
    title : Text;
    topic : OldTopic;
    content : Text;
    authorName : Text;
    authorType : OldAuthorType;
    businessTypeTags : [Text];
    publishedAt : ?Common.Timestamp;
    isPublished : Bool;
    readTimeMinutes : Nat;
    excerpt : Text;
  };

  // --- OldActor: mirrors the previously deployed stable signature ---
  // (see .old/src/backend/dist/backend.most). Field names and types must match
  // the old actor's stable fields exactly. Mutability (`var` vs `let`) is
  // preserved as in the old actor.
  public type OldActor = {
    accessControlState : AccessControl.AccessControlState;
    allProviderNames : [Text];
    approvalState : UserApproval.UserApprovalState;
    contributionState : { var nextContributionId : Nat };
    contributions : List.List<ContributionTypes.Contribution>;
    courseState : { var nextCourseId : Nat };
    courseTimerId : { var value : Nat };
    courses : List.List<CourseTypes.Course>;
    guideState : { var nextGuideId : Nat };
    guides : List.List<OldGuide>;
    lastCourseFetch : { var value : Common.Timestamp };
    outageState : { var nextOutageId : Nat };
    outages : List.List<OutageTypes.OutageRecord>;
    profiles : Map.Map<Principal, ProfileTypes.BusinessProfile>;
  };

  // --- NewActor: mirrors the new actor's stable signature ---
  // The only shape change is guides : List.List<GuideTypes.Guide> (the new
  // Guide type includes recommendedNext). All other fields are passed through.
  public type NewActor = {
    accessControlState : AccessControl.AccessControlState;
    allProviderNames : [Text];
    approvalState : UserApproval.UserApprovalState;
    contributionState : { var nextContributionId : Nat };
    contributions : List.List<ContributionTypes.Contribution>;
    courseState : { var nextCourseId : Nat };
    courseTimerId : { var value : Nat };
    courses : List.List<CourseTypes.Course>;
    guideState : { var nextGuideId : Nat };
    guides : List.List<GuideTypes.Guide>;
    lastCourseFetch : { var value : Common.Timestamp };
    outageState : { var nextOutageId : Nat };
    outages : List.List<OutageTypes.OutageRecord>;
    profiles : Map.Map<Principal, ProfileTypes.BusinessProfile>;
  };

  // Run once on upgrade. Maps over old.guides adding recommendedNext = [] to
  // each guide; passes every other stable field through unchanged. On fresh
  // install this is ignored and the actor's normal initializers run.
  public func run(old : OldActor) : NewActor {
    let guides = old.guides.map<OldGuide, GuideTypes.Guide>(
      func(g : OldGuide) : GuideTypes.Guide {
        {
          id = g.id;
          title = g.title;
          topic = g.topic;
          content = g.content;
          authorName = g.authorName;
          authorType = g.authorType;
          businessTypeTags = g.businessTypeTags;
          publishedAt = g.publishedAt;
          isPublished = g.isPublished;
          readTimeMinutes = g.readTimeMinutes;
          excerpt = g.excerpt;
          recommendedNext = [] : [Common.GuideId];
        };
      },
    );

    {
      accessControlState = old.accessControlState;
      allProviderNames = old.allProviderNames;
      approvalState = old.approvalState;
      contributionState = old.contributionState;
      contributions = old.contributions;
      courseState = old.courseState;
      courseTimerId = old.courseTimerId;
      courses = old.courses;
      guideState = old.guideState;
      guides;
      lastCourseFetch = old.lastCourseFetch;
      outageState = old.outageState;
      outages = old.outages;
      profiles = old.profiles;
    };
  };
};
