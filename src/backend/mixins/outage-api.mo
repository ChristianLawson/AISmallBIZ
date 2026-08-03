import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import OutageTypes "../types/outage";
import OutageLib "../lib/outage";

mixin (
  accessControlState : AccessControl.AccessControlState,
  outages : List.List<OutageTypes.OutageRecord>,
  state : { var nextOutageId : Nat },
  allProviderNames : [Text],
  healthCache : { var value : [OutageTypes.ProviderHealthStatus] },
  transformFn : shared query OutCall.TransformationInput -> async OutCall.TransformationOutput,
) {
  public query func listOutages(filter : OutageTypes.OutageFilter) : async [OutageTypes.OutageRecord] {
    OutageLib.listOutages(outages, filter);
  };

  public query func getProviderStats() : async [OutageTypes.ProviderStats] {
    OutageLib.getProviderStats(outages);
  };

  // Query read of the cached health snapshot. Returns the most recent poll result
  // without triggering a new poll, so reads between polls are consistent and fast.
  public query func getProviderHealthStatus() : async [OutageTypes.ProviderHealthStatus] {
    OutageLib.getCachedProviderHealthStatus(healthCache);
  };

  // Polls all provider status pages via HTTP outcalls and updates the cache.
  // Safe to call from the recurring backend timer or from the frontend.
  public shared func fetchProviderHealthStatus() : async [OutageTypes.ProviderHealthStatus] {
    await OutageLib.fetchProviderHealthStatus(outages, allProviderNames, healthCache, transformFn);
  };
};
