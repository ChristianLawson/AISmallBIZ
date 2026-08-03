import Common "common";
import Guide "guide";

module {
  public type ContributionStatus = {
    #pending;
    #approved;
    #rejected;
  };

  public type Contribution = {
    id : Common.ContributionId;
    authorPrincipal : Principal;
    authorName : Text;
    title : Text;
    topic : Guide.Topic;
    content : Text;
    businessContext : Text;
    status : ContributionStatus;
    submittedAt : Common.Timestamp;
    reviewedAt : ?Common.Timestamp;
    rejectionReason : ?Text;
  };

  public type ContributionInput = {
    authorName : Text;
    title : Text;
    topic : Guide.Topic;
    content : Text;
    businessContext : Text;
  };
};
