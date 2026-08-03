import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import GuideTypes "../types/guide";
import ProfileTypes "../types/profile";
import Common "../types/common";
import GuideLib "../lib/guide";
import RecommendationLib "../lib/recommendation";
import ContributionTypes "../types/contribution";
import ContributionLib "../lib/contribution";

mixin (
  accessControlState : AccessControl.AccessControlState,
  guides : List.List<GuideTypes.Guide>,
  state : { var nextGuideId : Nat },
  profiles : Map.Map<Principal, ProfileTypes.BusinessProfile>,
  contributions : List.List<ContributionTypes.Contribution>,
) {
  // Public - no auth required
  public query func listGuides(filter : GuideTypes.GuideFilter) : async [GuideTypes.Guide] {
    GuideLib.listPublished(guides, filter);
  };

  public query func getGuide(id : Common.GuideId) : async ?GuideTypes.Guide {
    switch (GuideLib.getById(guides, id)) {
      case (?g) { if (g.isPublished) ?g else null };
      case null null;
    };
  };

  public query func getFeaturedGuides() : async [GuideTypes.Guide] {
    GuideLib.getFeatured(guides);
  };

  // Auth required
  public query ({ caller }) func getPersonalizedRecommendations() : async [GuideTypes.Guide] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    switch (profiles.get(caller)) {
      case (?profile) RecommendationLib.getRecommendations(guides, profile);
      case null [];
    };
  };

  // Admin only
  public shared ({ caller }) func createGuide(input : GuideTypes.GuideInput) : async GuideTypes.Guide {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    GuideLib.createGuide(guides, state, input, #admin);
  };

  public shared ({ caller }) func updateGuide(id : Common.GuideId, input : GuideTypes.GuideInput) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    GuideLib.updateGuide(guides, id, input);
  };

  public shared ({ caller }) func deleteGuide(id : Common.GuideId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    GuideLib.deleteGuide(guides, id);
  };

  public shared ({ caller }) func setGuidePublished(id : Common.GuideId, published : Bool) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    GuideLib.setPublished(guides, id, published);
  };

  public query ({ caller }) func getAdminStats() : async GuideTypes.AdminStats {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    GuideLib.getAdminStats(guides, ContributionLib.pendingCount(contributions));
  };
};
