import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Subscribers "mo:caffeineai-email-marketing/subscribers";
import VerifiedEmails "mo:caffeineai-email-verification/verifiedEmails";
import NewsletterTypes "../types/newsletter";

module {
  // Flattens every subscriber across all newsletter topics into a single list
  // of subscription rows, each carrying the subscriber first name and the
  // topic-level verification status. Used to expose subscription data via OQL.
  public func listSubscriptions(
    emailSubscribers : Subscribers.State,
    verifiedEmails : VerifiedEmails.State,
    subscriberNames : Map.Map<Text, Text>,
  ) : [NewsletterTypes.Subscription] {
    let rows = List.empty<NewsletterTypes.Subscription>();
    var nextId = 0;
    for (topic in Subscribers.listTopics(emailSubscribers).values()) {
      switch (Subscribers.list(emailSubscribers, verifiedEmails, topic.id)) {
        case (?subs) {
          for ((email, verified) in subs.values()) {
            let firstName = switch (subscriberNames.get(email)) {
              case (?n) n;
              case null "";
            };
            rows.add({
              id = nextId;
              email;
              firstName;
              topicId = topic.id;
              topicName = topic.name;
              verified;
            });
            nextId += 1;
          };
        };
        case null {};
      };
    };
    rows.toArray();
  };
};
