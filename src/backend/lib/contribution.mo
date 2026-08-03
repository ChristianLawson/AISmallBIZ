import List "mo:core/List";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Types "../types/contribution";
import Common "../types/common";

module {
  public func submit(
    contributions : List.List<Types.Contribution>,
    state : { var nextContributionId : Nat },
    caller : Principal,
    input : Types.ContributionInput,
  ) : Types.Contribution {
    let id = state.nextContributionId;
    state.nextContributionId += 1;
    let c : Types.Contribution = {
      id;
      authorPrincipal = caller;
      authorName = input.authorName;
      title = input.title;
      topic = input.topic;
      content = input.content;
      businessContext = input.businessContext;
      status = #pending;
      submittedAt = Time.now();
      reviewedAt = null;
      rejectionReason = null;
    };
    contributions.add(c);
    c;
  };

  public func listPending(
    contributions : List.List<Types.Contribution>,
  ) : [Types.Contribution] {
    contributions.filter(func(c : Types.Contribution) : Bool { c.status == #pending }).toArray();
  };

  public func listByAuthor(
    contributions : List.List<Types.Contribution>,
    author : Principal,
  ) : [Types.Contribution] {
    contributions.filter(func(c : Types.Contribution) : Bool {
      Principal.equal(c.authorPrincipal, author);
    }).toArray();
  };

  public func approve(
    contributions : List.List<Types.Contribution>,
    id : Common.ContributionId,
  ) : ?Types.Contribution {
    var approved : ?Types.Contribution = null;
    contributions.mapInPlace(func(c : Types.Contribution) : Types.Contribution {
      if (c.id == id and c.status == #pending) {
        let updated : Types.Contribution = {
          c with
          status = #approved;
          reviewedAt = ?Time.now();
        };
        approved := ?updated;
        updated;
      } else c;
    });
    approved;
  };

  public func reject(
    contributions : List.List<Types.Contribution>,
    id : Common.ContributionId,
    reason : ?Text,
  ) : Bool {
    var found = false;
    contributions.mapInPlace(func(c : Types.Contribution) : Types.Contribution {
      if (c.id == id and c.status == #pending) {
        found := true;
        {
          c with
          status = #rejected;
          reviewedAt = ?Time.now();
          rejectionReason = reason;
        };
      } else c;
    });
    found;
  };

  public func pendingCount(
    contributions : List.List<Types.Contribution>,
  ) : Nat {
    contributions.filter(func(c : Types.Contribution) : Bool { c.status == #pending }).size();
  };
};
