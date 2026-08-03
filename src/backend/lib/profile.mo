import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Types "../types/profile";

module {
  public func getProfile(
    profiles : Map.Map<Principal, Types.BusinessProfile>,
    caller : Principal,
  ) : ?Types.BusinessProfile {
    profiles.get(caller);
  };

  public func saveProfile(
    profiles : Map.Map<Principal, Types.BusinessProfile>,
    caller : Principal,
    input : Types.BusinessProfile,
  ) : () {
    profiles.add(caller, input);
  };
};
