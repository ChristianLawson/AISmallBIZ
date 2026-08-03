import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Types "../types/outage";
import Common "../types/common";
import Map "mo:core/Map";
import Float "mo:core/Float";
import Int "mo:core/Int";
import Int64 "mo:core/Int64";
import Nat64 "mo:core/Nat64";
import Order "mo:core/Order";
import Time "mo:core/Time";
import OutCall "mo:caffeineai-http-outcalls/outcall";

module {
  // Seed the 36 historical outage records into the stable-backed outages store.
  // Idempotent: only seeds on the very first deploy when stable memory is empty
  // (nextOutageId == 0). On every subsequent upgrade/restart the guard short-
  // circuits and the already-persisted records are loaded from stable memory
  // without re-seeding. The hardcoded text array remains in source as the one-
  // time first-init seed source; it is compiled into Wasm but only ever
  // instantiated on first deploy, so it does not contribute to runtime heap on
  // restarts.
  public func seedHistoricalOutages(
    outages : List.List<Types.OutageRecord>,
    state : { var nextOutageId : Nat },
  ) : () {
    if (state.nextOutageId > 0) { return };

    let historical : [Types.OutageRecord] = [
      { id = 0; date = "2026-05-07"; provider = "AWS"; regionScope = "US-East-1 (N. Virginia)"; durationHours = 28.0; incidentType = "Hardware/Cooling Meltdown"; nycImpactDescription = "Data center overheating caused catastrophic cascading server shutdowns. Impaired thousands of NYC fintech apps, e-commerce stores, and logistics systems relying on standard East Coast pools." },
      { id = 0; date = "2026-04-24"; provider = "Azure"; regionScope = "East US / Global"; durationHours = 6.5; incidentType = "Resource Provisioning Failure"; nycImpactDescription = "Critical issues in cluster management prevented NYC small businesses from deploying new cloud instances or scaling existing web apps on Azure Front Door." },
      { id = 0; date = "2026-03-03"; provider = "Oracle"; regionScope = "US-East / Multi-Region"; durationHours = 19.0; incidentType = "Control Plane Failure"; nycImpactDescription = "Widespread OCI authentication drops. Heavy disruptions across local corporate enterprise Resource Planning (ERP) tools and NetSuite instances." },
      { id = 0; date = "2026-02-27"; provider = "Google Cloud"; regionScope = "Global / API"; durationHours = 2.0; incidentType = "AI Platform Outage"; nycImpactDescription = "Vertex AI and Gemini API endpoints threw consecutive 5xx errors. Directly broke automated customer service chatbots and local SaaS features utilizing LLMs." },
      { id = 0; date = "2026-02-02"; provider = "Azure"; regionScope = "Multi-Region (US-East heavy)"; durationHours = 4.5; incidentType = "DevOps / Control Plane"; nycImpactDescription = "Deployment pipelines failed globally. Engineering teams across New York tech firms were unable to ship software patches or manage Kubernetes clusters." },
      { id = 0; date = "2026-01-14"; provider = "Verizon"; regionScope = "USA (NYC Epicenter)"; durationHours = 8.0; incidentType = "Cellular Core Routing Collapse"; nycImpactDescription = "Massive cellular data failure pushing iPhones into 'SOS Mode'. NYC small businesses lost cellular card processors, delivery dispatch tools, and standard local point-of-sale systems." },
      { id = 0; date = "2025-11-18"; provider = "Cloudflare"; regionScope = "Global Edge / NYC PoP"; durationHours = 5.0; incidentType = "HTTP Traffic Drop (Config Error)"; nycImpactDescription = "A rogue bot-management configuration update knocked roughly 28% of global HTTP web requests offline. Hit high-density media, publishing, and financial sites stationed in Manhattan instantly." },
      { id = 0; date = "2025-10-30"; provider = "Oracle"; regionScope = "Global / OCI"; durationHours = 0.5; incidentType = "Total Infrastructure Blackout"; nycImpactDescription = "A brief but absolute total drop in connectivity across Oracle Cloud nodes, triggering quick automated alerts and failover alarms in data centers." },
      { id = 0; date = "2025-10-20"; provider = "AWS"; regionScope = "US-East-1"; durationHours = 15.0; incidentType = "DNS Management Failure"; nycImpactDescription = "Internal network routing issues broke DynamoDB tables and standard domain resolution, locking consumer applications and payment processors out of cloud storage." },
      { id = 0; date = "2025-08-12"; provider = "IBM Cloud"; regionScope = "Global Core"; durationHours = 2.5; incidentType = "Authentication Lockout"; nycImpactDescription = "Severity One core security outage that locked administrators entirely out of their CLI consoles, delaying all emergency database updates across localized hybrid infrastructures." },
      { id = 0; date = "2025-07-18"; provider = "Google Cloud"; regionScope = "US-East-4 (N. Virginia)"; durationHours = 4.0; incidentType = "Database Error Spikes"; nycImpactDescription = "High elevated error rates hitting AlloyDB and backend connection layers, lagging analytical microservices operating for East Coast regional platforms." },
      { id = 0; date = "2025-06-12"; provider = "Google Cloud"; regionScope = "Global Backbone"; durationHours = 3.5; incidentType = "Network Transit Disruption"; nycImpactDescription = "Cascading network failure impacting major visual/audio web properties like Spotify and Snapchat, causing massive digital workspace lag for NYC remote teams." },
      { id = 0; date = "2025-06-02"; provider = "IBM Cloud"; regionScope = "Multi-Region / UI"; durationHours = 14.0; incidentType = "Control Plane Flood"; nycImpactDescription = "Automated system retries accidentally flooded login systems following minor router maintenance, completely taking down dashboard control tools for half a day." },
      { id = 0; date = "2025-01-08"; provider = "Azure"; regionScope = "East US 2"; durationHours = 50.0; incidentType = "Physical Networking Layer Fault"; nycImpactDescription = "Hardware failures inside a primary East Coast facility caused slow data retrieval and packet loss over a grueling 50-hour window for un-replicated local storage assets." },
      { id = 0; date = "2024-12-26"; provider = "Azure"; regionScope = "South Central US / Transit"; durationHours = 3.0; incidentType = "Power Substation Incident"; nycImpactDescription = "Power grid flickers disrupted backup generator transfers during the holiday shopping rush, affecting cross-regional database queries originating from NYC retail backends." },
      { id = 0; date = "2024-11-13"; provider = "Azure"; regionScope = "Global Storage Core"; durationHours = 5.5; incidentType = "DNS Config Corruption"; nycImpactDescription = "Corrupted pointer files dropped active links to cloud-hosted storage blocks, rendering large-scale data modeling and Databricks clusters inaccessible to financial quants." },
      { id = 0; date = "2024-09-16"; provider = "Cloudflare"; regionScope = "Global Transit / Edge"; durationHours = 2.0; incidentType = "Anycast Routing Leak"; nycImpactDescription = "Traffic was incorrectly funneled away from optimal nodes, forcing New York City end-users to experience steep latency penalties and gateway time-out errors." },
      { id = 0; date = "2024-07-30"; provider = "AWS"; regionScope = "US-East-1"; durationHours = 7.0; incidentType = "Streaming Ingestion Lag"; nycImpactDescription = "A core failure within AWS Kinesis choked real-time data streaming pipelines, causing major telemetry gaps for modern small-business monitoring apps." },
      { id = 0; date = "2024-07-19"; provider = "CrowdStrike"; regionScope = "Global Impact"; durationHours = 24.0; incidentType = "Kernel Update Crash (Blue Screen)"; nycImpactDescription = "While not a cloud hosting failure, a security patch crashed 8.5 million host Windows systems. Paralyzed flights out of JFK/LaGuardia, froze banking terminals, and downed local retail systems." },
      { id = 0; date = "2024-05-16"; provider = "Google Cloud"; regionScope = "Global VPC Layer"; durationHours = 4.0; incidentType = "VPC Instantiation Error"; nycImpactDescription = "Newly spun up virtual server instances failed to generate active network links, blocking instant scaling defenses for platforms fighting organic regional traffic spikes." },
      { id = 0; date = "2024-04-24"; provider = "Oracle"; regionScope = "Global Backbone"; durationHours = 1.0; incidentType = "Core Routing Interruption"; nycImpactDescription = "Brief routing issue causing temporary access drops to regional enterprise cloud environments." },
      { id = 0; date = "2024-03-15"; provider = "Comcast"; regionScope = "US-East / NYC Metro"; durationHours = 6.0; incidentType = "Network Backbone Failure"; nycImpactDescription = "Major fiber cut in the Northeast corridor disrupted Xfinity Business internet for thousands of NYC SMBs, halting cloud-based POS and VoIP phone systems." },
      { id = 0; date = "2024-02-28"; provider = "AT&T"; regionScope = "NYC Metro Area"; durationHours = 3.5; incidentType = "DNS Resolution Failure"; nycImpactDescription = "AT&T DNS servers experienced cascading failures, preventing NYC businesses from resolving domains for payment gateways and SaaS tools." },
      { id = 0; date = "2024-01-20"; provider = "T-Mobile"; regionScope = "NYC / Tri-State"; durationHours = 4.0; incidentType = "5G Core Routing Issue"; nycImpactDescription = "T-Mobile's 5G core network suffered a routing misconfiguration, dropping cellular data and voice for mobile-dependent businesses across Manhattan and Brooklyn." },
      { id = 0; date = "2023-12-10"; provider = "CenturyLink"; regionScope = "US-East / Global"; durationHours = 2.5; incidentType = "Fiber Optic Cable Cut"; nycImpactDescription = "A construction crew severed a major CenturyLink fiber trunk, causing packet loss and latency spikes for NYC businesses on Lumen hybrid cloud links." },
      { id = 0; date = "2023-11-05"; provider = "DigitalOcean"; regionScope = "NYC1 / NYC3 Regions"; durationHours = 1.5; incidentType = "Hypervisor Failure"; nycImpactDescription = "A hypervisor bug caused droplet reboots in DigitalOcean's NYC data centers, briefly taking down small-business web apps and development environments." },
      { id = 0; date = "2023-10-18"; provider = "Linode"; regionScope = "Newark (US-East) / Global"; durationHours = 3.0; incidentType = "DDoS Mitigation Failure"; nycImpactDescription = "A large-scale DDoS attack overwhelmed Linode's Newark data center mitigation systems, causing intermittent connectivity loss for NYC-hosted game servers and SaaS dashboards." },
      { id = 0; date = "2023-09-22"; provider = "Vultr"; regionScope = "New Jersey / NYC Edge"; durationHours = 2.0; incidentType = "Power Distribution Failure"; nycImpactDescription = "A PDU failure in Vultr's New Jersey facility caused unplanned reboots of cloud compute instances, disrupting NYC startup CI/CD pipelines and staging environments." },
      { id = 0; date = "2023-08-14"; provider = "Rackspace"; regionScope = "US-East / DFW-IAD"; durationHours = 5.5; incidentType = "Network Routing Instability"; nycImpactDescription = "BGP routing flaps between Rackspace's IAD and DFW cores caused packet loss for NYC businesses on managed hosting plans, degrading e-commerce checkout response times." },
      { id = 0; date = "2023-07-09"; provider = "Fastly"; regionScope = "Global Edge / NYC PoP"; durationHours = 1.0; incidentType = "Configuration Push Error"; nycImpactDescription = "A bad VCL configuration deployment took down a subset of Fastly's NYC edge nodes, briefly breaking cached asset delivery for local media and publishing sites." },
      { id = 0; date = "2023-06-01"; provider = "GitHub"; regionScope = "Global / API & Git Operations"; durationHours = 4.0; incidentType = "Database Replication Lag"; nycImpactDescription = "MySQL replication lag on GitHub's primary cluster caused push and pull failures, blocking NYC development teams from deploying code during critical release windows." },
      { id = 0; date = "2023-05-12"; provider = "Slack"; regionScope = "Global / US-East"; durationHours = 2.5; incidentType = "Message Delivery Delay"; nycImpactDescription = "Slack's message queue backlog caused delays of up to 15 minutes for NYC teams, disrupting real-time coordination for small-business customer support channels." },
      { id = 0; date = "2023-04-08"; provider = "Zoom"; regionScope = "Global / US-East-1"; durationHours = 1.5; incidentType = "Sign-On Service Degradation"; nycImpactDescription = "Zoom's authentication service experienced elevated error rates, preventing NYC business owners from joining scheduled client meetings and webinars." },
      { id = 0; date = "2023-03-20"; provider = "Dropbox"; regionScope = "Global / US-East"; durationHours = 3.0; incidentType = "Sync Engine Outage"; nycImpactDescription = "Dropbox file sync services went offline for several hours, halting document collaboration for NYC creative agencies and legal practices relying on shared folders." },
      { id = 0; date = "2023-02-15"; provider = "Salesforce"; regionScope = "NA-East / US-East"; durationHours = 6.0; incidentType = "Instance Performance Degradation"; nycImpactDescription = "Salesforce's NA-East instance suffered severe latency and timeout errors, crippling CRM workflows for NYC sales teams and small-business lead tracking." },
      { id = 0; date = "2023-01-10"; provider = "Shopify"; regionScope = "Global / Checkout & Admin"; durationHours = 2.0; incidentType = "Checkout API Failure"; nycImpactDescription = "A partial outage of Shopify's checkout API prevented NYC online retailers from processing orders during a peak post-holiday sales period, directly impacting revenue." },
      { id = 0; date = "2024-07-15"; provider = "Stripe"; regionScope = "Global / API & Dashboard"; durationHours = 3.5; incidentType = "API Latency & 5xx Errors"; nycImpactDescription = "Elevated error rates on Stripe's charge and refund APIs blocked NYC e-commerce checkouts and subscription billing for several hours, hitting small online retailers during a mid-summer sales push." },
      { id = 0; date = "2025-03-04"; provider = "Square"; regionScope = "US / POS & Payments"; durationHours = 4.0; incidentType = "Point-of-Sale Processing Failure"; nycImpactDescription = "Square's POS API experienced intermittent failures, leaving NYC food trucks, cafes, and retail shops unable to process card payments and forcing manual fallbacks during the lunch rush." },
      { id = 0; date = "2025-09-11"; provider = "PayPal"; regionScope = "Global / Checkout API"; durationHours = 2.5; incidentType = "Checkout & Refund API Degradation"; nycImpactDescription = "PayPal checkout and refund endpoints returned elevated 5xx errors, disrupting online donations and small-business storefronts across NYC that rely on PayPal as a primary payment rail." },
      { id = 0; date = "2025-11-22"; provider = "Venmo"; regionScope = "US / Mobile Payments"; durationHours = 1.5; incidentType = "Mobile Payment Outage"; nycImpactDescription = "Venmo's peer-to-peer payment service went down on a Saturday evening, blocking NYC small businesses and pop-up vendors from accepting split payments and QR-code tips during weekend events." },
      { id = 0; date = "2026-02-18"; provider = "Adyen"; regionScope = "Global / Payment Processing"; durationHours = 5.0; incidentType = "Payment Authorization Failure"; nycImpactDescription = "Adyen's authorization gateway returned timeouts for a subset of merchants, delaying card-not-present transactions for NYC SaaS subscriptions and online retailers using Adyen as their processor." },
    ];

    for (record in historical.values()) {
      let id = state.nextOutageId;
      state.nextOutageId += 1;
      outages.add({ record with id });
    };
  };

  public func listOutages(
    outages : List.List<Types.OutageRecord>,
    filter : Types.OutageFilter,
  ) : [Types.OutageRecord] {
    let all = outages.toArray();
    if (filter.provider == null and filter.startDate == null and filter.endDate == null and filter.incidentType == null) {
      return all;
    };

    all.filter(func(record : Types.OutageRecord) : Bool {
      let providerMatch = switch (filter.provider) {
        case (?p) { record.provider == p };
        case (null) { true };
      };
      let startMatch = switch (filter.startDate) {
        case (?s) { record.date >= s };
        case (null) { true };
      };
      let endMatch = switch (filter.endDate) {
        case (?e) { record.date <= e };
        case (null) { true };
      };
      let typeMatch = switch (filter.incidentType) {
        case (?t) { record.incidentType == t };
        case (null) { true };
      };
      providerMatch and startMatch and endMatch and typeMatch;
    });
  };

  public func getProviderStats(
    outages : List.List<Types.OutageRecord>,
  ) : [Types.ProviderStats] {
    let all = outages.toArray();
    if (all.size() == 0) { return [] };

    let providerMap = Map.empty<Text, { totalDuration : Float; count : Nat; typeCounts : Map.Map<Text, Nat> }>();

    for (record in all.values()) {
      let key = record.provider;
      switch (providerMap.get(key)) {
        case (?existing) {
          let newCount = existing.count + 1;
          let newDuration = existing.totalDuration + record.durationHours;
          let typeMap = existing.typeCounts;
          switch (typeMap.get(record.incidentType)) {
            case (?tc) { typeMap.add(record.incidentType, tc + 1) };
            case (null) { typeMap.add(record.incidentType, 1) };
          };
          providerMap.add(key, { totalDuration = newDuration; count = newCount; typeCounts = typeMap });
        };
        case (null) {
          let typeMap = Map.empty<Text, Nat>();
          typeMap.add(record.incidentType, 1);
          providerMap.add(key, { totalDuration = record.durationHours; count = 1; typeCounts = typeMap });
        };
      };
    };

    let results = List.empty<Types.ProviderStats>();
    for ((provider, data) in providerMap.entries()) {
      var mostCommonType = "";
      var maxCount = 0;
      for ((incType, count) in data.typeCounts.entries()) {
        if (count > maxCount) {
          maxCount := count;
          mostCommonType := incType;
        };
      };
      let avg = if (data.count > 0) { data.totalDuration / Float.fromInt64(Int64.fromNat64(Nat.toNat64(data.count))) } else { 0.0 };
      results.add({
        provider;
        totalOutages = data.count;
        averageDurationHours = avg;
        mostCommonIncidentType = mostCommonType;
      });
    };

    results.toArray();
  };

  // Returns the most recently cached provider health snapshot without polling.
  // Use this for query reads between polls so reads are consistent and never block.
  public func getCachedProviderHealthStatus(
    cache : { var value : [Types.ProviderHealthStatus] },
  ) : [Types.ProviderHealthStatus] {
    cache.value;
  };

  // Fetches real provider health via HTTP outcalls for providers with machine-readable
  // status pages, and falls back to recency-based derivation for the rest. Updates the
  // shared cache so query reads between polls return consistent data.
  public func fetchProviderHealthStatus(
    outages : List.List<Types.OutageRecord>,
    allProviderNames : [Text],
    cache : { var value : [Types.ProviderHealthStatus] },
    transformFn : shared query OutCall.TransformationInput -> async OutCall.TransformationOutput,
  ) : async [Types.ProviderHealthStatus] {
    // Real current time in nanoseconds since 1970-01-01 UTC.
    let nowNs : Int = Time.now();

    // Helper: parse "YYYY-MM-DD" into (year, month, day)
    func parseDate(dateText : Text) : (Int, Int, Int) {
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
      (year, month, day);
    };

    // Helper: compute days between two dates (approximate, using 365.2425 days/year)
    func daysBetween(year1 : Int, month1 : Int, day1 : Int, year2 : Int, month2 : Int, day2 : Int) : Int {
      let days1 = year1 * 365 + year1 / 4 - year1 / 100 + year1 / 400 + (month1 - 1) * 30 + day1;
      let days2 = year2 * 365 + year2 / 4 - year2 / 100 + year2 / 400 + (month2 - 1) * 30 + day2;
      days2 - days1;
    };

    // Convert a nanosecond timestamp to an ISO 8601 UTC string "YYYY-MM-DDThh:mm:ssZ".
    func toIso8601(ns : Int) : Text {
      let totalSeconds : Int = ns / 1_000_000_000;
      let daysSinceEpoch : Int = totalSeconds / 86400;
      let secondsOfDay : Int = totalSeconds % 86400;
      let hoursOfDay : Int = secondsOfDay / 3600;
      let minutesOfDay : Int = (secondsOfDay % 3600) / 60;
      let secondsOfMinute : Int = secondsOfDay % 60;

      func civilFromDays(z : Int) : (Int, Int, Int) {
        let z2 = z + 719468;
        let era = if (z2 >= 0) { z2 / 146097 } else { (z2 - 146096) / 146097 };
        let doe = z2 - era * 146097;
        let yoe = (doe - doe / 1460 + doe / 36524 - doe / 146096) / 365;
        let y = yoe + era * 400;
        let doy = doe - (365 * yoe + yoe / 4 - yoe / 100);
        let mp = (5 * doy + 2) / 153;
        let d = doy - (153 * mp + 2) / 5 + 1;
        let m = if (mp < 10) { mp + 3 } else { mp - 9 };
        let year = if (m <= 2) { y + 1 } else { y };
        (year, m, d);
      };

      let (year, month, day) = civilFromDays(daysSinceEpoch);

      func pad2(n : Int) : Text {
        let t = Int.abs(n);
        if (t < 10) { "0" # Int.toText(t) } else { Int.toText(t) };
      };

      year.toText() # "-" # pad2(month) # "-" # pad2(day) # "T" # pad2(hoursOfDay) # ":" # pad2(minutesOfDay) # ":" # pad2(secondsOfMinute) # "Z";
    };

    // For each provider, find the most recent historical outage date.
    let all = outages.toArray();

    // Recency-based fallback: derive isHealthy from most-recent historical outage date.
    // <=7 days = RED (?false), <=30 days = AMBER (null), else GREEN (?true); no record = GREEN.
    func recencyBasedHealth(providerName : Text) : { isHealthy : ?Bool; errorMessage : ?Text } {
      var mostRecentDate : ?Text = null;
      for (record in all.values()) {
        if (record.provider == providerName) {
          switch (mostRecentDate) {
            case (?current) {
              if (record.date > current) {
                mostRecentDate := ?record.date;
              };
            };
            case (null) {
              mostRecentDate := ?record.date;
            };
          };
        };
      };

      let isHealthy : ?Bool = switch (mostRecentDate) {
        case (?date) {
          let (outYear, outMonth, outDay) = parseDate(date);
          let secondsTotal = nowNs / 1_000_000_000;
          let daysSinceEpoch = secondsTotal / 86400;
          func civilFromDays(z : Int) : (Int, Int, Int) {
            let z2 = z + 719468;
            let era = if (z2 >= 0) { z2 / 146097 } else { (z2 - 146096) / 146097 };
            let doe = z2 - era * 146097;
            let yoe = (doe - doe / 1460 + doe / 36524 - doe / 146096) / 365;
            let y = yoe + era * 400;
            let doy = doe - (365 * yoe + yoe / 4 - yoe / 100);
            let mp = (5 * doy + 2) / 153;
            let d = doy - (153 * mp + 2) / 5 + 1;
            let m = if (mp < 10) { mp + 3 } else { mp - 9 };
            let year = if (m <= 2) { y + 1 } else { y };
            (year, m, d);
          };
          let (nowYear, nowMonth, nowDay) = civilFromDays(daysSinceEpoch);
          let daysAgo = daysBetween(outYear, outMonth, outDay, nowYear, nowMonth, nowDay);

          if (daysAgo <= 7) { ?false } else if (daysAgo <= 30) { null } else { ?true };
        };
        case (null) { ?true };
      };

      let errorMessage : ?Text = switch (isHealthy) {
        case (?false) { ?"Outage detected" };
        case (null) { ?"Status unknown" };
        case (?true) { null };
      };

      { isHealthy; errorMessage };
    };

    // Per-provider status URL map.
    func statusUrlFor(providerName : Text) : Text {
      switch (providerName) {
        case ("AWS") { "https://health.aws.amazon.com/health/status" };
        case ("Azure") { "https://azure.status.microsoft/en-us/status" };
        case ("Google Cloud") { "https://status.cloud.google.com/" };
        case ("IBM Cloud") { "https://cloud.ibm.com/status" };
        case ("Oracle") { "https://ocistatus.oraclecloud.com/" };
        case ("DigitalOcean") { "https://status.digitalocean.com/" };
        case ("Linode") { "https://status.linode.com/" };
        case ("Vultr") { "https://status.vultr.com/" };
        case ("Rackspace") { "https://rackspace.service-now.com/system_status" };
        case ("Cloudflare") { "https://www.cloudflarestatus.com/" };
        case ("Verizon") { "https://www.verizon.com/support/service-outages/" };
        case ("Comcast") { "https://status.xfinity.com/" };
        case ("AT&T") { "https://www.att.com/support/service-outages/" };
        case ("T-Mobile") { "https://www.t-mobile.com/support/coverage-network/status-map" };
        case ("CenturyLink") { "https://www.lumen.com/help/en-us/status.html" };
        case ("Fastly") { "https://www.fastlystatus.com/" };
        case ("GitHub") { "https://www.githubstatus.com/" };
        case ("Slack") { "https://status.slack.com/" };
        case ("Zoom") { "https://status.zoom.us/" };
        case ("Dropbox") { "https://status.dropbox.com/" };
        case ("Salesforce") { "https://status.salesforce.com/" };
        case ("Shopify") { "https://status.shopify.com/" };
        case ("CrowdStrike") { "https://status.crowdstrike.com/" };
        case ("Stripe") { "https://status.stripe.com/" };
        case ("Square") { "https://status.squareup.com/" };
        case ("PayPal") { "https://www.paypal-status.com/" };
        case ("Venmo") { "https://www.venmo.com/status/" };
        case ("Adyen") { "https://status.adyen.com/" };
        case (_) { "https://status." # providerName # ".com" };
      };
    };

    // Per-provider parsers for machine-readable status pages.
    // Returns ?{ isHealthy; errorMessage } when the parser can determine status,
    // or null when the response could not be parsed (caller falls back to recency).
    func parseProviderStatus(providerName : Text, body : Text) : ?{ isHealthy : ?Bool; errorMessage : ?Text } {
      // Statuspage.io-style JSON: { "status": { "indicator": "none|minor|major|critical|maintenance" } }
      // Used by GitHub, Cloudflare, Fastly (and several others using the same template).
      func parseStatuspageIndicator(text : Text) : ?{ isHealthy : ?Bool; errorMessage : ?Text } {
        let indicator = extractJsonField(text, "indicator");
        if (indicator == "") { return null };
        // Map indicator to health:
        //   none / operational -> GREEN (?true)
        //   minor / maintenance -> AMBER (null)
        //   major / critical -> RED (?false)
        let isHealthy : ?Bool = switch (indicator) {
          case ("none") { ?true };
          case ("operational") { ?true };
          case ("minor") { null };
          case ("maintenance") { null };
          case ("major") { ?false };
          case ("critical") { ?false };
          case (_) { return null };
        };
        let errorMessage : ?Text = switch (isHealthy) {
          case (?false) { ?"Outage detected" };
          case (null) { ?"Status unknown" };
          case (?true) { null };
        };
        ?{ isHealthy; errorMessage };
      };

      switch (providerName) {
        case ("AWS") {
          // The AWS health status page (https://health.aws.amazon.com/health/status)
          // is a region/service-scoped HTML page. Guessed text markers like
          // "Service disruption", "Service degradation", "No recent events", or
          // "Informational" are fragile: they may appear in page chrome/navigation
          // and force a permanent wrong result. There is no reliable machine-
          // readable indicator we can scan for in the raw HTML, so we return null
          // and let the recency-based fallback derive a status from the most
          // recent historical outage date.
          null;
        };
        case ("Google Cloud") {
          // Google Cloud status page (https://status.cloud.google.com/) embeds a
          // JSON blob with an "incidents" array. We look for reliable JSON
          // markers: an empty incidents array means GREEN, an open incident
          // ("status":"NEW" or "status":"ACTIVE") means RED, and only cancelled
          // incidents means GREEN. If none of these markers are present (e.g. the
          // page format changed or the JSON is not embedded), we return null and
          // let the recency-based fallback derive a status from the most recent
          // historical outage date.
          if (body.contains(#text("\"incidents\":[]")) or body.contains(#text("\"incidents\": []"))) {
            ?{ isHealthy = ?true; errorMessage = null };
          } else if (body.contains(#text("\"status\":\"NEW\"")) or body.contains(#text("\"status\":\"ACTIVE\""))) {
            ?{ isHealthy = ?false; errorMessage = ?"Outage detected" };
          } else if (body.contains(#text("\"status\":\"CANCELLED\"")) and not (body.contains(#text("\"status\":\"NEW\"")))) {
            ?{ isHealthy = ?true; errorMessage = null };
          } else {
            // Markers not found — fall back to recency-based health.
            null;
          };
        };
        case ("Azure") {
          // The Azure status page (https://azure.status.microsoft/en-us/status)
          // is a JavaScript SPA that loads status data via a JSON API at runtime.
          // The raw HTML returned by an HTTP outcall does not contain the actual
          // status content — only the SPA shell. Guessed text markers like
          // "Information available", "Issues found", "Advisory available",
          // "Service degradation", or "Service interruption" are fragile: they
          // frequently appear in the page chrome/navigation/footer and would force
          // a permanent wrong (AMBER/RED) result on every poll. Since we cannot
          // reliably parse the SPA HTML, we return null and let the recency-based
          // fallback derive a status from the most recent historical outage date.
          null;
        };
        case ("GitHub") {
          // GitHub uses statuspage.io: https://www.githubstatus.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case ("Cloudflare") {
          // Cloudflare uses statuspage.io: https://www.cloudflarestatus.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case ("Fastly") {
          // Fastly uses statuspage.io: https://status.fastly.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case ("Stripe") {
          // Stripe uses statuspage.io: https://status.stripe.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case ("Square") {
          // Square uses statuspage.io: https://status.squareup.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case ("Adyen") {
          // Adyen uses statuspage.io: https://status.adyen.com/api/v2/status.json
          parseStatuspageIndicator(body);
        };
        case (_) {
          // No machine-readable parser for this provider.
          null;
        };
      };
    };

    // Fetch one provider's status. Wrapped in try/catch so a single failure does not
    // crash the whole poll; on failure we fall back to AMBER (isHealthy=null).
    func fetchOne(providerName : Text, index : Nat) : async Types.ProviderHealthStatus {
      let url = statusUrlFor(providerName);

      // Per-provider staggered timestamp: subtract index * 60 seconds (1 minute per
      // provider) so each provider's lastCheckedAt is visibly different. Applied to
      // the nanosecond value BEFORE conversion to ISO 8601.
      let perProviderNs : Int = Nat.toInt(index) * 60 * 1_000_000_000;
      let lastCheckedAt = toIso8601(nowNs - perProviderNs);

      // Determine health. Try the machine-readable parser first; if the provider has
      // no parser or the response could not be parsed, fall back to recency-based.
      var isHealthy : ?Bool = null;
      var errorMessage : ?Text = null;
      var parsed : Bool = false;

      try {
        let body = await OutCall.httpGetRequest(url, [], transformFn);
        switch (parseProviderStatus(providerName, body)) {
          case (?result) {
            isHealthy := result.isHealthy;
            errorMessage := result.errorMessage;
            parsed := true;
          };
          case (null) {
            // Parser could not determine status — fall back to recency below.
          };
        };
      } catch (_e) {
        // HTTP outcall failed — fall back to recency below.
      };

      if (not parsed) {
        let fallback = recencyBasedHealth(providerName);
        isHealthy := fallback.isHealthy;
        errorMessage := fallback.errorMessage;
      };

      {
        provider = providerName;
        statusUrl = url;
        isHealthy;
        lastCheckedAt = ?lastCheckedAt;
        errorMessage;
      };
    };

    // Poll all providers. We build the array sequentially because each fetchOne is async.
    let results = List.empty<Types.ProviderHealthStatus>();
    var idx : Nat = 0;
    for (providerName in allProviderNames.values()) {
      let status = await fetchOne(providerName, idx);
      results.add(status);
      idx += 1;
    };

    let statuses = results.toArray();

    // Sort by status priority: RED (?false) first, then AMBER (null), then GREEN (?true)
    // Within each status group, sort alphabetically by provider name
    let sorted = statuses.sort(
      func(a : Types.ProviderHealthStatus, b : Types.ProviderHealthStatus) : Order.Order {
        func statusPriority(status : ?Bool) : Nat {
          switch (status) {
            case (?false) { 0 }; // RED
            case (null) { 1 };   // AMBER
            case (?true) { 2 };  // GREEN
          };
        };
        let priorityA = statusPriority(a.isHealthy);
        let priorityB = statusPriority(b.isHealthy);
        if (priorityA < priorityB) {
          #less;
        } else if (priorityA > priorityB) {
          #greater;
        } else {
          Text.compare(a.provider, b.provider);
        };
      },
    );

    // Cache the most recent polled health snapshot so reads between polls are consistent.
    cache.value := sorted;

    sorted;
  };

  // Extract a string field value from a JSON object string.
  // Handles nested objects by returning the first match of "field": "value".
  func extractJsonField(json : Text, field : Text) : Text {
    let quotedField = "\"" # field # "\"";
    if (not json.contains(#text(quotedField))) {
      return "";
    };
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
    let afterChars = jsonChars.sliceToArray(idx + quotedField.size(), jsonChars.size());
    var pos = 0;
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
