import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import AccessControl "mo:caffeineai-authorization/access-control";
import EmailClient "mo:caffeineai-email/emailClient";
import Subscribers "mo:caffeineai-email-marketing/subscribers";
import VerifiedEmails "mo:caffeineai-email-verification/verifiedEmails";
import NewsletterTypes "../types/newsletter";

mixin (
  accessControlState : AccessControl.AccessControlState,
  emailSubscribers : Subscribers.State,
  verifiedEmails : VerifiedEmails.State,
  subscriberNames : Map.Map<Text, Text>,
  newsletterContent : Map.Map<Nat, NewsletterTypes.NewsletterContent>,
) {
  // --- Newsletter signup ---
  // Public anonymous signup from the footer/homepage form. Maps the chosen
  // frequency to the weekly/monthly topics, records the subscriber first name
  // for personalization, and sends a click-to-verify email. The subscriber
  // receives no newsletter until they confirm ownership of the address.
  public shared func subscribeToNewsletter(firstName : Text, email : Text, frequency : NewsletterTypes.Frequency) : async () {
    let weeklyId = Subscribers.getTopicId(emailSubscribers, "weekly") ?? Runtime.trap("Weekly topic not found");
    let monthlyId = Subscribers.getTopicId(emailSubscribers, "monthly") ?? Runtime.trap("Monthly topic not found");
    switch (frequency) {
      case (#weekly) { ignore Subscribers.add(emailSubscribers, weeklyId, email) };
      case (#monthly) { ignore Subscribers.add(emailSubscribers, monthlyId, email) };
      case (#both) {
        ignore Subscribers.add(emailSubscribers, weeklyId, email);
        ignore Subscribers.add(emailSubscribers, monthlyId, email);
      };
    };
    subscriberNames.add(email, firstName);
    let result = await EmailClient.sendVerificationEmail(
      "no-reply",
      [email],
      "Confirm your newsletter subscription",
      "Hello " # firstName # ",<br><br>Thank you for subscribing to our newsletter. Please <a href=\"{{VERIFICATION_URL}}\">click here</a> to confirm your email address. You will not receive any newsletters until you confirm your subscription.<br><br>Best regards,<br>The Team",
    );
    switch (result) {
      case (#ok) {};
      case (#err(error)) { Runtime.trap("Failed to send verification email: " # error) };
    };
  };

  // --- Admin: newsletter content ---
  public shared ({ caller }) func setNewsletterContent(topicId : Nat, subject : Text, htmlBody : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can set newsletter content");
    };
    newsletterContent.add(topicId, { subject; htmlBody });
  };

  public query ({ caller }) func getNewsletterContent(topicId : Nat) : async ?NewsletterTypes.NewsletterContent {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view newsletter content");
    };
    newsletterContent.get(topicId);
  };

  // --- Admin: topic management ---
  public query func listNewsletterTopics() : async [Subscribers.Topic] {
    Subscribers.listTopics(emailSubscribers);
  };

  public shared ({ caller }) func addNewsletterTopic(name : Text) : async Nat {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can add newsletter topics");
    };
    Subscribers.addTopic(emailSubscribers, name);
  };

  public shared ({ caller }) func renameNewsletterTopic(topicId : Nat, newName : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can rename newsletter topics");
    };
    if (not Subscribers.renameTopic(emailSubscribers, topicId, newName)) {
      Runtime.trap("Failed to rename newsletter topic");
    };
  };

  public shared ({ caller }) func removeNewsletterTopic(topicId : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can remove newsletter topics");
    };
    Subscribers.removeTopic(emailSubscribers, topicId);
    newsletterContent.remove(topicId);
  };

  // --- Admin: subscriber view ---
  public query ({ caller }) func listNewsletterSubscribers(topicId : Nat) : async [(Text, Bool)] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view newsletter subscribers");
    };
    switch (Subscribers.list(emailSubscribers, verifiedEmails, topicId)) {
      case (?subs) subs;
      case null [];
    };
  };

  // --- Scheduled sends (invoked by recurring timers in main.mo) ---
  public shared func sendWeeklyNewsletter() : async () {
    await sendNewsletterForTopicName("weekly");
  };

  public shared func sendMonthlyNewsletter() : async () {
    await sendNewsletterForTopicName("monthly");
  };

  func sendNewsletterForTopicName(topicName : Text) : async () {
    let topicId = Subscribers.getTopicId(emailSubscribers, topicName) ?? Runtime.trap("Topic not found: " # topicName);
    let content = newsletterContent.get(topicId) ?? Runtime.trap("No newsletter content set for topic: " # topicName);
    let recipientEmails = Subscribers.verified(emailSubscribers, verifiedEmails, topicId) ?? [];
    if (recipientEmails.size() == 0) { return };
    let finalHtmlBody = if (content.htmlBody.contains(#text "{{UNSUBSCRIBE_URL}}")) {
      content.htmlBody;
    } else {
      content.htmlBody # "<br><br>To unsubscribe from this newsletter <a href=\"{{UNSUBSCRIBE_URL}}\">click here</a>";
    };
    let recipients = recipientEmails.filterMap(func(email) {
      switch (subscriberNames.get(email)) {
        case (?firstName) { ?{ email; substitutions = ?[("NAME", firstName)] } };
        case null { ?{ email; substitutions = null } };
      };
    });
    let result = await EmailClient.sendMarketingEmail(topicId, "no-reply", recipients, content.subject, finalHtmlBody);
    switch (result) {
      case (#ok) {};
      case (#err(error)) { Runtime.trap("Failed to send newsletter: " # error) };
    };
  };
}
