import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Types "../types/nyc-courses";
import Common "../types/common";
import CourseLib "../lib/nyc-courses";

mixin (
  accessControlState : AccessControl.AccessControlState,
  courses : List.List<Types.Course>,
  state : { var nextCourseId : Nat },
  lastFetchState : { var value : Common.Timestamp },
  timerId : { var value : Nat },
) {
  public shared func fetchCourses() : async () {
    await CourseLib.fetchCourses(courses, state, lastFetchState, transform);
  };

  public shared query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public query func getCourses() : async [Types.Course] {
    CourseLib.getCourses(courses);
  };

  public query func getUpcomingCourses() : async [Types.Course] {
    CourseLib.getUpcomingCourses(courses);
  };

  public query func getExpiredCourses() : async [Types.Course] {
    CourseLib.getExpiredCourses(courses);
  };

  public query func getLastUpdated() : async Common.Timestamp {
    CourseLib.getLastUpdated(lastFetchState);
  };
};
