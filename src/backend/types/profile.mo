module {
  public type IndustryType = {
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

  public type TeamSize = {
    #solo;
    #small;   // 2–10
    #medium;  // 11–50
  };

  public type Goal = {
    #googleMaps;
    #socialAds;
    #businessPlanning;
  };

  public type SubscriptionTier = {
    #free;
    #paid;
  };

  public type BusinessProfile = {
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
};
