import Common "common";

module {
  public type CourseId = Nat;

  public type Course = {
    id : CourseId;
    title : Text;
    description : Text;
    startDate : Text;
    endDate : Text;
    borough : Text;
    location : Text;
    language : Text;
    registrationUrl : Text;
    contactPhone : Text;
    courseType : Text;
    category : Text;
    isExpired : Bool;
    isNew : Bool;
    addedAt : Common.Timestamp;
    fetchedAt : Common.Timestamp;
    expiresAt : Common.Timestamp;
  };

  public type CourseFilter = {
    category : ?Text;
    language : ?Text;
    location : ?Text;
  };
};
