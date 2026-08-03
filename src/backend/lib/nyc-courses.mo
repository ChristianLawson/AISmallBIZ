import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Timer "mo:core/Timer";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Types "../types/nyc-courses";
import Common "../types/common";
import OutCall "mo:caffeineai-http-outcalls/outcall";

module {
  let nycOpenDataUrl = "https://data.cityofnewyork.us/resource/de8q-estm.json";

  // Two weeks in nanoseconds
  let twoWeeksNs = 1_209_600_000_000_000;

  public func fetchCourses(
    courses : List.List<Types.Course>,
    state : { var nextCourseId : Nat },
    lastFetchState : { var value : Common.Timestamp },
    transformFn : shared query OutCall.TransformationInput -> async OutCall.TransformationOutput,
  ) : async () {
    let responseText = await OutCall.httpGetRequest(nycOpenDataUrl, [], transformFn);
    let now = Time.now();
    lastFetchState.value := now;

    // Parse the raw JSON text into course records
    // Since Motoko has no native JSON parser, we do a simple text-based extraction
    // of array elements and key-value pairs.
    let rawRecords = extractJsonObjects(responseText);

    for (raw in rawRecords.values()) {
      let title = extractJsonField(raw, "course_title");
      let description = extractJsonField(raw, "course_description");
      let startDate = extractJsonField(raw, "start_date");
      let endDate = extractJsonField(raw, "end_date");
      let borough = extractJsonField(raw, "borough");
      let location = extractJsonField(raw, "location");
      let language = extractJsonField(raw, "language");
      let registrationUrl = extractJsonField(raw, "registration_link");
      let contactPhone = extractJsonField(raw, "contact_phone");
      let courseType = extractJsonField(raw, "course_type");
      let category = extractJsonField(raw, "category");

      if (title != "") {
        // Deduplication: check for existing course by title + startDate
        let existing = courses.toArray().find(func(c : Types.Course) : Bool {
          c.title == title and c.startDate == startDate
        });
        switch (existing) {
          case (?_) {
            // Skip duplicate
          };
          case (null) {
            let id = state.nextCourseId;
            state.nextCourseId += 1;
            // Expiry based on course end date, not fetch date
            let expiresAt = parseDateToTimestamp(endDate) + twoWeeksNs;
            courses.add({
              id;
              title;
              description;
              startDate;
              endDate;
              borough;
              location;
              language;
              registrationUrl;
              contactPhone;
              courseType;
              category;
              isExpired = false;
              isNew = true;
              addedAt = now;
              fetchedAt = now;
              expiresAt;
            });
          };
        };
      };
    };
  };

  // Transform function for HTTP outcalls (passed inline to httpGetRequest)
  // Kept here for reference; actual usage is inline in fetchCourses

  public func getCourses(
    courses : List.List<Types.Course>,
  ) : [Types.Course] {
    courses.toArray();
  };

  public func getUpcomingCourses(
    courses : List.List<Types.Course>,
  ) : [Types.Course] {
    let now = Time.now();
    courses.toArray().filter(func(course : Types.Course) : Bool {
      course.expiresAt > now;
    });
  };

  public func getExpiredCourses(
    courses : List.List<Types.Course>,
  ) : [Types.Course] {
    let now = Time.now();
    let cutoff = now - twoWeeksNs;
    courses.toArray().filter(func(course : Types.Course) : Bool {
      course.expiresAt <= now and course.expiresAt > cutoff;
    });
  };

  public func getLastUpdated(
    lastFetchState : { var value : Common.Timestamp },
  ) : Common.Timestamp {
    lastFetchState.value;
  };

  // Schedule the weekly fetch for Friday at 4pm
  // This must be called from a system function context
  public func scheduleWeeklyFetch(
    timerId : { var value : Nat },
    fetchFn : () -> async (),
  ) : () {
    ignore (timerId, fetchFn);
    // Timer scheduling is done in main.mo actor context
  };

  // Calculate nanoseconds until next Friday at 4pm (16:00)
  public func calculateDelayToFriday4pm(now : Int) : Nat {
    // Seconds per day
    let secondsPerDay = 86_400;
    // Nanoseconds per second
    let nsPerSecond = 1_000_000_000;
    // Current time in seconds since epoch
    let nowSec = now / nsPerSecond;
    // Days since epoch (0 = Thursday Jan 1 1970)
    let daysSinceEpoch = nowSec / secondsPerDay;
    // Day of week: 0=Thursday, 1=Friday, 2=Saturday, 3=Sunday, 4=Monday, 5=Tuesday, 6=Wednesday
    let dayOfWeek = daysSinceEpoch % 7;
    // Current seconds into today
    let secIntoDay = nowSec % secondsPerDay;
    // Target: Friday (day 1) at 16:00:00 = 57600 seconds
    let targetSecIntoDay = 57_600;
    var daysUntilFriday : Int = 0;
    if (dayOfWeek == 1) {
      // Today is Friday
      if (secIntoDay < targetSecIntoDay) {
        // Before 4pm, target is today
        daysUntilFriday := 0;
      } else {
        // After 4pm, target is next Friday
        daysUntilFriday := 7;
      };
    } else if (dayOfWeek < 1) {
      // Thursday (0) or earlier in week — Friday is (1 - dayOfWeek) days away
      daysUntilFriday := 1 - dayOfWeek;
    } else {
      // Saturday (2) through Wednesday (6) — next Friday is (8 - dayOfWeek) days away
      daysUntilFriday := 8 - dayOfWeek;
    };
    let targetSec = (daysSinceEpoch + daysUntilFriday) * secondsPerDay + targetSecIntoDay;
    let delaySec = targetSec - nowSec;
    Int.abs(delaySec * nsPerSecond);
  };

  // Parse a date string "YYYY-MM-DD" into a timestamp (nanoseconds since epoch)
  // Returns 0 if parsing fails
  func parseDateToTimestamp(dateText : Text) : Int {
    let parts = dateText.split(#text("-"));
    let year = switch (parts.next()) {
      case (?y) { switch (Int.fromText(y)) { case (?n) { n }; case (null) { 0 } } };
      case (null) { 0 };
    };
    let month = switch (parts.next()) {
      case (?m) { switch (Int.fromText(m)) { case (?n) { n }; case (null) { 0 } } };
      case (null) { 0 };
    };
    let day = switch (parts.next()) {
      case (?d) { switch (Int.fromText(d)) { case (?n) { n }; case (null) { 0 } } };
      case (null) { 0 };
    };
    if (year == 0 or month == 0 or day == 0) { return 0 };
    // Approximate: days since 1970-01-01
    let daysSinceEpoch = (year - 1970) * 365 + (year - 1969) / 4 - (year - 1901) / 100 + (year - 1601) / 400 + (month - 1) * 30 + day;
    daysSinceEpoch * 86_400 * 1_000_000_000;
  };

  // Extract top-level JSON objects from an array string
  func extractJsonObjects(json : Text) : [Text] {
    let results = List.empty<Text>();
    var depth = 0;
    var start = 0;
    var inString = false;
    var escape = false;
    var i = 0;

    let chars = json.toArray();

    // Find the opening '['
    var arrayStart = 0;
    while (arrayStart < chars.size() and chars[arrayStart] != '[') {
      arrayStart += 1;
    };
    if (arrayStart >= chars.size()) { return [] };

    i := arrayStart + 1;

    while (i < chars.size()) {
      let c = chars[i];
      if (escape) {
        escape := false;
      } else if (c == '\\') {
        escape := true;
      } else if (c == '\u{22}') {
        inString := not inString;
      } else if (not inString) {
        if (c == '{') {
          if (depth == 0) { start := i };
          depth += 1;
        } else if (c == '}') {
          depth -= 1;
          if (depth == 0) {
            let len = i - start + 1;
            let sliceChars = chars.sliceToArray(start, start + len);
            let slice = Text.fromArray(sliceChars);
            results.add(slice);
          };
        };
      };
      i += 1;
    };

    results.toArray();
  };

  // Extract a string field value from a JSON object string
  func extractJsonField(json : Text, field : Text) : Text {
    let quotedField = "\"" # field # "\"";
    // Use Text.contains to check if field exists, then find position manually
    if (not json.contains(#text(quotedField))) {
      return "";
    };
    // Find the position by iterating characters
    var idx : Nat = 0;
    let jsonChars = json.toArray();
    let fieldChars = quotedField.toArray();
    var found = false;
    while (idx + fieldChars.size() <= jsonChars.size() and not found) {
      var match = true;
      var j = 0;
      while (j < fieldChars.size() and match) {
        if (jsonChars[idx + j] != fieldChars[j]) {
          match := false;
        };
        j += 1;
      };
      if (match) {
        found := true;
      } else {
        idx += 1;
      };
    };
    if (not found) { return "" };
    let afterFieldChars = jsonChars.sliceToArray(idx + quotedField.size(), jsonChars.size());
    let afterField = Text.fromArray(afterFieldChars);
    // Skip whitespace and colon
    var pos = 0;
    let afterChars = afterField.toArray();
    while (pos < afterChars.size() and (afterChars[pos] == ' ' or afterChars[pos] == ':' or afterChars[pos] == '\t' or afterChars[pos] == '\n')) {
      pos += 1;
    };
    if (pos < afterChars.size() and afterChars[pos] == '\u{22}') {
      pos += 1;
      var end = pos;
      var escaped = false;
      while (end < afterChars.size()) {
        if (escaped) {
          escaped := false;
        } else if (afterChars[end] == '\\') {
          escaped := true;
        } else if (afterChars[end] == '\u{22}') {
          let valueChars = afterChars.sliceToArray(pos, end);
          return Text.fromArray(valueChars);
        };
        end += 1;
      };
    };
    "";
  };
};
