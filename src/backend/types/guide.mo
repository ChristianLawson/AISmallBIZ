import Common "common";

module {
  public type Topic = {
    #googleMaps;
    #socialAds;
    #businessPlanning;
    #branding;
    #techUpgrades;
  };

  public type AuthorType = {
    #admin;
    #community;
  };

  public type Guide = {
    id : Common.GuideId;
    title : Text;
    topic : Topic;
    content : Text;
    authorName : Text;
    authorType : AuthorType;
    businessTypeTags : [Text];
    publishedAt : ?Common.Timestamp;
    isPublished : Bool;
    readTimeMinutes : Nat;
    excerpt : Text;
    recommendedNext : [Common.GuideId];
  };

  public type GuideInput = {
    title : Text;
    topic : Topic;
    content : Text;
    authorName : Text;
    businessTypeTags : [Text];
    readTimeMinutes : Nat;
    excerpt : Text;
    recommendedNext : [Common.GuideId];
  };

  public type GuideFilter = {
    topic : ?Topic;
    businessTypeTag : ?Text;
    keyword : ?Text;
  };

  public type AdminStats = {
    totalPublished : Nat;
    pendingContributions : Nat;
    recentGuides : [Guide];
  };
};
