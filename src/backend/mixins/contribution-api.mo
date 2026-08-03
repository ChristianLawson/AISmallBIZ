import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import ContributionTypes "../types/contribution";
import GuideTypes "../types/guide";
import Common "../types/common";
import ContributionLib "../lib/contribution";
import GuideLib "../lib/guide";

mixin (
  accessControlState : AccessControl.AccessControlState,
  contributions : List.List<ContributionTypes.Contribution>,
  guideContribState : { var nextContributionId : Nat },
  guides : List.List<GuideTypes.Guide>,
  guideState : { var nextGuideId : Nat },
) {
  // Logged-in user submits
  public shared ({ caller }) func submitContribution(input : ContributionTypes.ContributionInput) : async ContributionTypes.Contribution {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Login required");
    };
    ContributionLib.submit(contributions, guideContribState, caller, input);
  };

  // User views own contributions
  public query ({ caller }) func getMyContributions() : async [ContributionTypes.Contribution] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Login required");
    };
    ContributionLib.listByAuthor(contributions, caller);
  };

  // Admin queue
  public query ({ caller }) func listPendingContributions() : async [ContributionTypes.Contribution] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContributionLib.listPending(contributions);
  };

  // Admin approve - auto-publishes contribution as a community guide
  public shared ({ caller }) func approveContribution(id : Common.ContributionId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    switch (ContributionLib.approve(contributions, id)) {
      case (?c) {
        let excerpt = if (c.businessContext.size() > 0) c.businessContext else c.title;
        let input : GuideTypes.GuideInput = {
          title = c.title;
          topic = c.topic;
          content = c.content;
          authorName = c.authorName;
          businessTypeTags = ["all"];
          readTimeMinutes = 5;
          excerpt;
          recommendedNext = [];
        };
        let g = GuideLib.createGuide(guides, guideState, input, #community);
        ignore GuideLib.setPublished(guides, g.id, true);
        true;
      };
      case null false;
    };
  };

  // Admin reject
  public shared ({ caller }) func rejectContribution(id : Common.ContributionId, reason : ?Text) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    ContributionLib.reject(contributions, id, reason);
  };
};
