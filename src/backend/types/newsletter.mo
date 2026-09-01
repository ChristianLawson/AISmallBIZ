module {
  public type Frequency = {
    #weekly;
    #monthly;
    #both;
  };

  public type NewsletterContent = {
    subject : Text;
    htmlBody : Text;
  };

  public type Subscription = {
    id : Nat;
    email : Text;
    firstName : Text;
    topicId : Nat;
    topicName : Text;
    verified : Bool;
  };
};
