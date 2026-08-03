import List "mo:core/List";
import GuideTypes "../types/guide";
import ProfileTypes "../types/profile";

module {
  // Map a Goal to its corresponding Topic
  func goalToTopic(goal : ProfileTypes.Goal) : GuideTypes.Topic {
    switch goal {
      case (#googleMaps) #googleMaps;
      case (#socialAds) #socialAds;
      case (#businessPlanning) #businessPlanning;
    };
  };

  public func getRecommendations(
    guides : List.List<GuideTypes.Guide>,
    profile : ProfileTypes.BusinessProfile,
  ) : [GuideTypes.Guide] {
    let industryText = switch (profile.industryType) {
      case (#deli) "deli";
      case (#salon) "salon";
      case (#retail) "retail";
      case (#restaurant) "restaurant";
      case (#consulting) "consulting";
      case (#poolHall) "poolHall";
      case (#newBusiness) "newBusiness";
      case (#onlineServices) "onlineServices";
      case (#other) "other";
    };
    let goalTopics = profile.goals.map(goalToTopic);

    // Priority 1: topic matches goal AND businessTypeTags includes industryType
    let primary = guides.filter(func(g : GuideTypes.Guide) : Bool {
      if (not g.isPublished) return false;
      let topicMatch = goalTopics.find(func(t : GuideTypes.Topic) : Bool { t == g.topic }) != null;
      if (not topicMatch) return false;
      g.businessTypeTags.find(func(tag : Text) : Bool { tag == industryText or tag == "all" }) != null;
    });

    if (primary.size() > 0) {
      return primary.toArray();
    };

    // Fallback: topic matches goal only
    let secondary = guides.filter(func(g : GuideTypes.Guide) : Bool {
      if (not g.isPublished) return false;
      goalTopics.find(func(t : GuideTypes.Topic) : Bool { t == g.topic }) != null;
    });
    secondary.toArray();
  };
};
