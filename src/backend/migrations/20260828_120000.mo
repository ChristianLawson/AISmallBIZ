import Map "mo:core/Map";
import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import UserApproval "mo:caffeineai-user-approval/approval";
import Subscribers "mo:caffeineai-email-marketing/subscribers";
import VerifiedEmails "mo:caffeineai-email-verification/verifiedEmails";

module {
  // Adds the newsletter domain stable state on top of the legacy -> enhanced
  // conversion. OldActor matches the previous migration's NewActor; NewActor
  // adds the topic-based subscriber store, the verified-email store, the
  // subscriber first-name map, and the admin-composed content map. The weekly
  // and monthly topics are seeded here so the scheduled sends have targets.

  // Inline every project type a stable field references; the chain must not
  // import project files.

  // types/profile.mo
  type IndustryType = {
    #deli;
    #salon;
    #retail;
    #restaurant;
    #consulting;
    #poolHall;
    #newBusiness;
    #onlineServices;
    #other;
  };
  type TeamSize = { #solo; #small; #medium };
  type Goal = { #googleMaps; #socialAds; #businessPlanning };
  type SubscriptionTier = { #free; #paid };
  type BusinessProfile = {
    businessName : Text;
    industryType : IndustryType;
    location : Text;
    teamSize : TeamSize;
    goals : [Goal];
    name : ?Text;
    email : ?Text;
    signupDate : ?Int;
    subscriptionTier : ?SubscriptionTier;
  };

  // types/guide.mo
  type Topic = { #googleMaps; #socialAds; #businessPlanning; #branding; #techUpgrades };
  type AuthorType = { #admin; #community };
  type Guide = {
    id : Nat;
    title : Text;
    topic : Topic;
    content : Text;
    authorName : Text;
    authorType : AuthorType;
    businessTypeTags : [Text];
    publishedAt : ?Int;
    isPublished : Bool;
    readTimeMinutes : Nat;
    excerpt : Text;
    recommendedNext : [Nat];
  };

  // types/contribution.mo
  type ContributionStatus = { #pending; #approved; #rejected };
  type Contribution = {
    id : Nat;
    authorPrincipal : Principal;
    authorName : Text;
    title : Text;
    topic : Topic;
    content : Text;
    businessContext : Text;
    status : ContributionStatus;
    submittedAt : Int;
    reviewedAt : ?Int;
    rejectionReason : ?Text;
  };

  // types/outage.mo
  type OutageRecord = {
    id : Nat;
    date : Text;
    provider : Text;
    regionScope : Text;
    durationHours : Float;
    incidentType : Text;
    nycImpactDescription : Text;
  };

  // types/nyc-courses.mo
  type Course = {
    id : Nat;
    title : Text;
    description : Text;
    startDate : Text;
    endDate : Text;
    borough : Text;
    location : Text;
    language : Text;
    registrationUrl : Text;
    contactPhone : Text;
    courseType : Text;
    category : Text;
    isExpired : Bool;
    isNew : Bool;
    addedAt : Int;
    fetchedAt : Int;
    expiresAt : Int;
  };

  // types/newsletter.mo
  type NewsletterContent = {
    subject : Text;
    htmlBody : Text;
  };

  type OldActor = {
    accessControlState : AccessControl.AccessControlState;
    approvalState : UserApproval.UserApprovalState;
    profiles : Map.Map<Principal, BusinessProfile>;
    guides : List.List<Guide>;
    guideState : { var nextGuideId : Nat };
    contributions : List.List<Contribution>;
    contributionState : { var nextContributionId : Nat };
    outages : List.List<OutageRecord>;
    outageState : { var nextOutageId : Nat };
    allProviderNames : [Text];
    courses : List.List<Course>;
    courseState : { var nextCourseId : Nat };
    courseTimerId : { var value : Nat };
    lastCourseFetch : { var value : Int };
  };

  type NewActor = {
    accessControlState : AccessControl.AccessControlState;
    approvalState : UserApproval.UserApprovalState;
    profiles : Map.Map<Principal, BusinessProfile>;
    guides : List.List<Guide>;
    guideState : { var nextGuideId : Nat };
    contributions : List.List<Contribution>;
    contributionState : { var nextContributionId : Nat };
    outages : List.List<OutageRecord>;
    outageState : { var nextOutageId : Nat };
    courses : List.List<Course>;
    courseState : { var nextCourseId : Nat };
    courseTimerId : { var value : Nat };
    lastCourseFetch : { var value : Int };
    emailSubscribers : Subscribers.State;
    verifiedEmails : VerifiedEmails.State;
    subscriberNames : Map.Map<Text, Text>;
    newsletterContent : Map.Map<Nat, NewsletterContent>;
  };

  public func migration(old : OldActor) : NewActor {
    {
      accessControlState = old.accessControlState;
      approvalState = old.approvalState;
      profiles = old.profiles;
      guides = old.guides;
      guideState = old.guideState;
      contributions = old.contributions;
      contributionState = old.contributionState;
      outages = old.outages;
      outageState = old.outageState;
      courses = old.courses;
      courseState = old.courseState;
      courseTimerId = old.courseTimerId;
      lastCourseFetch = old.lastCourseFetch;
      emailSubscribers = Subscribers.new(["weekly", "monthly"]);
      verifiedEmails = VerifiedEmails.new();
      subscriberNames = Map.empty();
      newsletterContent = Map.empty();
    };
  };
};
