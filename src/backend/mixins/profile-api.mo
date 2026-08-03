import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import ProfileTypes "../types/profile";
import ProfileLib "../lib/profile";

mixin (
  accessControlState : AccessControl.AccessControlState,
  profiles : Map.Map<Principal, ProfileTypes.BusinessProfile>,
) {
  public query ({ caller }) func getBusinessProfile() : async ?ProfileTypes.BusinessProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    switch (ProfileLib.getProfile(profiles, caller)) {
      case null null;
      case (?p) {
        // Default subscriptionTier to #free for profiles stored before this field existed
        let tier = switch (p.subscriptionTier) {
          case (?t) t;
          case null #free;
        };
        ?{ p with subscriptionTier = ?tier };
      };
    };
  };

  public shared ({ caller }) func saveBusinessProfile(profile : ProfileTypes.BusinessProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    ProfileLib.saveProfile(profiles, caller, profile);
  };
};
