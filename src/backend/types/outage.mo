import Common "common";

module {
  public type OutageRecord = {
    id : Common.OutageId;
    date : Text;
    provider : Text;
    regionScope : Text;
    durationHours : Float;
    incidentType : Text;
    nycImpactDescription : Text;
  };

  public type ProviderStats = {
    provider : Text;
    totalOutages : Nat;
    averageDurationHours : Float;
    mostCommonIncidentType : Text;
  };

  public type OutageFilter = {
    provider : ?Text;
    startDate : ?Text;
    endDate : ?Text;
    incidentType : ?Text;
  };

  public type ProviderHealthStatus = {
    provider : Text;
    statusUrl : Text;
    isHealthy : ?Bool;
    lastCheckedAt : ?Text;
    errorMessage : ?Text;
  };
};
