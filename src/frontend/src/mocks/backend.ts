import type { backendInterface } from "../backend";
import type { Principal } from "@icp-sdk/core/principal";
import {
  UserRole,
  type OutageRecord,
  type ProviderHealthStatus,
  type ProviderStats,
  type Course,
  type Guide,
  type Contribution,
  type AdminStats,
  type BusinessProfile,
  type UserApprovalInfo,
  type Result,
  type GuideFilter,
  type OutageFilter,
  type GuideInput,
  type ContributionInput,
  type TransformationInput,
  type TransformationOutput,
  type ContributionId,
  type GuideId,
  Frequency,
  type NewsletterContent,
  type Topic__1,
  type _CaffeineEmailUnsubscribeResult,
} from "../backend";

// ApprovalStatus is referenced by the backend (UserApproval.ApprovalStatus) but
// is not emitted into the generated backend.d.ts bindings. Define a local type
// alias so this mock type-checks; the mock never instantiates it as a value.
type ApprovalStatus = { pending: null } | { approved: null } | { rejected: null };

// ─── Mock backend for visual QA of the Cloud Health dashboard ─────────────
// Returns realistic data so the Live Cloud Health grid, Historical Outage
// Timeline, and Provider Reliability Breakdown render with real content.
// Includes a mix of RED / AMBER / GREEN statuses to verify RED-at-top sort.

const ALL_PROVIDERS = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle",
  "IBM Cloud",
  "DigitalOcean",
  "Linode",
  "Vultr",
  "Rackspace",
  "Cloudflare",
  "Verizon",
  "Comcast",
  "AT&T",
  "T-Mobile",
  "CenturyLink",
  "Fastly",
  "GitHub",
  "Slack",
  "Zoom",
  "Dropbox",
  "Salesforce",
  "Shopify",
  "CrowdStrike",
  "Spectrum",
];

const STATUS_URLS: Record<string, string> = {
  AWS: "https://health.aws.amazon.com/health/status",
  Azure: "https://azure.status.microsoft/en-us/status",
  "Google Cloud": "https://status.cloud.google.com/",
  Oracle: "https://ocistatus.oraclecloud.com/",
  "IBM Cloud": "https://cloud.ibm.com/status",
  DigitalOcean: "https://status.digitalocean.com/",
  Linode: "https://status.linode.com/",
  Vultr: "https://status.vultr.com/",
  Rackspace: "https://rackspace.service-now.com/system_status",
  Cloudflare: "https://www.cloudflarestatus.com/",
  Verizon: "https://www.verizon.com/support/service-outages/",
  Comcast: "https://status.xfinity.com/",
  "AT&T": "https://www.att.com/support/service-outages/",
  "T-Mobile": "https://www.t-mobile.com/support/coverage-network/status-map",
  CenturyLink: "https://www.lumen.com/help/en-us/status.html",
  Fastly: "https://www.fastlystatus.com/",
  GitHub: "https://www.githubstatus.com/",
  Slack: "https://status.slack.com/",
  Zoom: "https://status.zoom.us/",
  Dropbox: "https://status.dropbox.com/",
  Salesforce: "https://status.salesforce.com/",
  Shopify: "https://status.shopify.com/",
  CrowdStrike: "https://status.crowdstrike.com/",
  Spectrum: "https://status.spectrum.com/",
};

// Mix of statuses: AWS = RED (outage), Azure = AMBER (unknown), rest = GREEN.
// This lets visual QA verify RED sorts to the top and AMBER follows.
function buildHealth(): ProviderHealthStatus[] {
  const now = Date.now();
  return ALL_PROVIDERS.map((provider, index) => {
    let isHealthy: boolean | undefined;
    if (provider === "AWS") isHealthy = false; // RED
    else if (provider === "Azure") isHealthy = undefined; // AMBER
    else isHealthy = true; // GREEN
    return {
      provider,
      statusUrl: STATUS_URLS[provider] ?? "https://example.com/status",
      isHealthy,
      lastCheckedAt: new Date(now - index * 60 * 1000).toISOString(),
      errorMessage: provider === "AWS" ? "Elevated error rates in us-east-1" : undefined,
    };
  });
}

const MOCK_OUTAGES: OutageRecord[] = [
  {
    id: BigInt(1),
    provider: "AWS",
    date: "2026-06-10",
    durationHours: 28.0,
    regionScope: "US-East-1 (N. Virginia)",
    incidentType: "Hardware/Cooling Meltdown",
    nycImpactDescription:
      "Data center overheating caused catastrophic cascading server shutdowns. Impaired thousands of NYC fintech apps, e-commerce stores, and logistics systems relying on standard East Coast pools.",
  },
  {
    id: BigInt(2),
    provider: "Azure",
    date: "2026-04-24",
    durationHours: 6.5,
    regionScope: "East US / Global",
    incidentType: "Resource Provisioning Failure",
    nycImpactDescription:
      "Critical issues in cluster management prevented NYC small businesses from deploying new cloud instances or scaling existing web apps on Azure Front Door.",
  },
  {
    id: BigInt(3),
    provider: "Google Cloud",
    date: "2026-03-03",
    durationHours: 19.0,
    regionScope: "US-East / Multi-Region",
    incidentType: "Control Plane Failure",
    nycImpactDescription:
      "Widespread OCI authentication drops. Heavy disruptions across local corporate enterprise Resource Planning (ERP) tools and NetSuite instances.",
  },
  {
    id: BigInt(4),
    provider: "Google Cloud",
    date: "2026-02-27",
    durationHours: 2.0,
    regionScope: "Global / API",
    incidentType: "AI Platform Outage",
    nycImpactDescription:
      "Vertex AI and Gemini API endpoints threw consecutive 5xx errors. Directly broke automated customer service chatbots and local SaaS features utilizing LLMs.",
  },
  {
    id: BigInt(5),
    provider: "Azure",
    date: "2026-02-02",
    durationHours: 4.5,
    regionScope: "Multi-Region (US-East heavy)",
    incidentType: "DevOps / Control Plane",
    nycImpactDescription:
      "Deployment pipelines failed globally. Engineering teams across New York tech firms were unable to ship software patches or manage Kubernetes clusters.",
  },
  {
    id: BigInt(6),
    provider: "IBM Cloud",
    date: "2026-01-14",
    durationHours: 8.0,
    regionScope: "USA (NYC Epicenter)",
    incidentType: "Cellular Core Routing Collapse",
    nycImpactDescription:
      "Massive cellular data failure pushing iPhones into 'SOS Mode'. NYC small businesses lost cellular card processors, delivery dispatch tools, and standard local point-of-sale systems.",
  },
  {
    id: BigInt(7),
    provider: "DigitalOcean",
    date: "2025-11-18",
    durationHours: 5.0,
    regionScope: "Global Edge / NYC PoP",
    incidentType: "HTTP Traffic Drop (Config Error)",
    nycImpactDescription:
      "A rogue bot-management configuration update knocked roughly 28% of global HTTP web requests offline. Hit high-density media, publishing, and financial sites stationed in Manhattan instantly.",
  },
  {
    id: BigInt(8),
    provider: "Oracle",
    date: "2025-10-30",
    durationHours: 0.5,
    regionScope: "Global / OCI",
    incidentType: "Total Infrastructure Blackout",
    nycImpactDescription:
      "A brief but absolute total drop in connectivity across Oracle Cloud nodes, triggering quick automated alerts and failover alarms in data centers.",
  },
  {
    id: BigInt(9),
    provider: "AWS",
    date: "2025-10-20",
    durationHours: 15.0,
    regionScope: "US-East-1",
    incidentType: "DNS Management Failure",
    nycImpactDescription:
      "Internal network routing issues broke DynamoDB tables and standard domain resolution, locking consumer applications and payment processors out of cloud storage.",
  },
  {
    id: BigInt(10),
    provider: "IBM Cloud",
    date: "2025-08-12",
    durationHours: 2.5,
    regionScope: "Global Core",
    incidentType: "Authentication Lockout",
    nycImpactDescription:
      "Severity One core security outage that locked administrators entirely out of their CLI consoles, delaying all emergency database updates across localized hybrid infrastructures.",
  },
  {
    id: BigInt(11),
    provider: "Google Cloud",
    date: "2025-07-18",
    durationHours: 4.0,
    regionScope: "US-East-4 (N. Virginia)",
    incidentType: "Database Error Spikes",
    nycImpactDescription:
      "High elevated error rates hitting AlloyDB and backend connection layers, lagging analytical microservices operating for East Coast regional platforms.",
  },
  {
    id: BigInt(12),
    provider: "Google Cloud",
    date: "2025-06-12",
    durationHours: 3.5,
    regionScope: "Global Backbone",
    incidentType: "Network Transit Disruption",
    nycImpactDescription:
      "Cascading network failure impacting major visual/audio web properties like Spotify and Snapchat, causing massive digital workspace lag for NYC remote teams.",
  },
  {
    id: BigInt(13),
    provider: "IBM Cloud",
    date: "2025-06-02",
    durationHours: 14.0,
    regionScope: "Multi-Region / UI",
    incidentType: "Control Plane Flood",
    nycImpactDescription:
      "Automated system retries accidentally flooded login systems following minor router maintenance, completely taking down dashboard control tools for half a day.",
  },
  {
    id: BigInt(14),
    provider: "Azure",
    date: "2025-01-08",
    durationHours: 50.0,
    regionScope: "East US 2",
    incidentType: "Physical Networking Layer Fault",
    nycImpactDescription:
      "Hardware failures inside a primary East Coast facility caused slow data retrieval and packet loss over a grueling 50-hour window for un-replicated local storage assets.",
  },
  {
    id: BigInt(15),
    provider: "Azure",
    date: "2024-12-26",
    durationHours: 3.0,
    regionScope: "South Central US / Transit",
    incidentType: "Power Substation Incident",
    nycImpactDescription:
      "Power grid flickers disrupted backup generator transfers during the holiday shopping rush, affecting cross-regional database queries originating from NYC retail backends.",
  },
  {
    id: BigInt(16),
    provider: "Azure",
    date: "2024-11-13",
    durationHours: 5.5,
    regionScope: "Global Storage Core",
    incidentType: "DNS Config Corruption",
    nycImpactDescription:
      "Corrupted pointer files dropped active links to cloud-hosted storage blocks, rendering large-scale data modeling and Databricks clusters inaccessible to financial quants.",
  },
  {
    id: BigInt(17),
    provider: "DigitalOcean",
    date: "2024-09-16",
    durationHours: 2.0,
    regionScope: "Global Transit / Edge",
    incidentType: "Anycast Routing Leak",
    nycImpactDescription:
      "Traffic was incorrectly funneled away from optimal nodes, forcing New York City end-users to experience steep latency penalties and gateway time-out errors.",
  },
  {
    id: BigInt(18),
    provider: "AWS",
    date: "2024-07-30",
    durationHours: 7.0,
    regionScope: "US-East-1",
    incidentType: "Streaming Ingestion Lag",
    nycImpactDescription:
      "A core failure within AWS Kinesis choked real-time data streaming pipelines, causing major telemetry gaps for modern small-business monitoring apps.",
  },
  {
    id: BigInt(19),
    provider: "IBM Cloud",
    date: "2024-07-19",
    durationHours: 24.0,
    regionScope: "Global Impact",
    incidentType: "Kernel Update Crash (Blue Screen)",
    nycImpactDescription:
      "While not a cloud hosting failure, a security patch crashed 8.5 million host Windows systems. Paralyzed flights out of JFK/LaGuardia, froze banking terminals, and downed local retail systems.",
  },
  {
    id: BigInt(20),
    provider: "Google Cloud",
    date: "2024-05-16",
    durationHours: 4.0,
    regionScope: "Global VPC Layer",
    incidentType: "VPC Instantiation Error",
    nycImpactDescription:
      "Newly spun up virtual server instances failed to generate active network links, blocking instant scaling defenses for platforms fighting organic regional traffic spikes.",
  },
  {
    id: BigInt(21),
    provider: "Oracle",
    date: "2024-04-24",
    durationHours: 1.0,
    regionScope: "Global Backbone",
    incidentType: "Core Routing Interruption",
    nycImpactDescription:
      "Brief routing issue causing temporary access drops to regional enterprise cloud environments.",
  },
  {
    id: BigInt(22),
    provider: "Linode",
    date: "2025-11-05",
    durationHours: 3.5,
    regionScope: "US-East (Newark)",
    incidentType: "Network Transit Disruption",
    nycImpactDescription:
      "Linode's Newark datacenter experienced network congestion causing slow API responses and intermittent SSH access for NYC-based dev teams and deployed apps.",
  },
  {
    id: BigInt(23),
    provider: "Vultr",
    date: "2025-10-12",
    durationHours: 2.0,
    regionScope: "New York (NJ)",
    incidentType: "CDN Edge Node Failure",
    nycImpactDescription:
      "Vultr's NJ datacenter suffered a hypervisor failure that forced unplanned reboots of cloud compute instances, disrupting local SaaS startups and e-commerce sites.",
  },
  {
    id: BigInt(24),
    provider: "Rackspace",
    date: "2025-09-18",
    durationHours: 8.0,
    regionScope: "US-East / Multi-Region",
    incidentType: "Control Plane Failure",
    nycImpactDescription:
      "Rackspace managed cloud control plane experienced authentication and provisioning failures, leaving NYC customers unable to spin up new servers or manage existing ones.",
  },
  {
    id: BigInt(25),
    provider: "Cloudflare",
    date: "2025-08-05",
    durationHours: 1.5,
    regionScope: "Global Edge / NYC PoP",
    incidentType: "CDN Edge Node Failure",
    nycImpactDescription:
      "Cloudflare edge node failure in Manhattan caused cached content delivery slowdowns for NYC media and publishing sites relying on edge caching.",
  },
  {
    id: BigInt(26),
    provider: "GitHub",
    date: "2025-07-22",
    durationHours: 4.0,
    regionScope: "Global",
    incidentType: "Code Repository Outage",
    nycImpactDescription:
      "GitHub Actions and repository access were degraded globally. NYC development teams could not deploy code, run CI/CD pipelines, or access source control for half a business day.",
  },
  {
    id: BigInt(27),
    provider: "Slack",
    date: "2025-06-30",
    durationHours: 2.5,
    regionScope: "Global",
    incidentType: "Collaboration Platform Downtime",
    nycImpactDescription:
      "Slack messaging and file sharing went offline globally. NYC remote teams and small businesses relying on Slack for customer support and internal coordination were left without communication channels.",
  },
  {
    id: BigInt(28),
    provider: "Zoom",
    date: "2025-05-15",
    durationHours: 3.0,
    regionScope: "Global",
    incidentType: "VoIP/Media Server Failure",
    nycImpactDescription:
      "Zoom media servers experienced cascading failures, preventing NYC consultants, fitness studios, and salons from hosting virtual client sessions and online classes.",
  },
  {
    id: BigInt(29),
    provider: "Dropbox",
    date: "2025-04-10",
    durationHours: 5.0,
    regionScope: "Global",
    incidentType: "File Sync Service Disruption",
    nycImpactDescription:
      "Dropbox sync and sharing services were disrupted. NYC creative agencies and small businesses could not access shared design files, contracts, or invoices stored in Dropbox.",
  },
  {
    id: BigInt(30),
    provider: "Salesforce",
    date: "2025-03-08",
    durationHours: 6.5,
    regionScope: "US-East / NA0 Instance",
    incidentType: "CRM Data Access Failure",
    nycImpactDescription:
      "Salesforce NA0 instance in the US-East region suffered database connectivity issues. NYC sales teams and service businesses could not access customer records, leads, or pipeline data.",
  },
  {
    id: BigInt(31),
    provider: "Shopify",
    date: "2025-02-20",
    durationHours: 2.0,
    regionScope: "Global",
    incidentType: "E-commerce Platform Outage",
    nycImpactDescription:
      "Shopify checkout and admin panel experienced intermittent failures. NYC retail and boutique stores using Shopify for online sales lost transactions and could not process orders.",
  },
  {
    id: BigInt(32),
    provider: "CrowdStrike",
    date: "2025-01-15",
    durationHours: 1.0,
    regionScope: "Global",
    incidentType: "Authentication Service Outage",
    nycImpactDescription:
      "CrowdStrike Falcon authentication services were briefly unavailable, preventing NYC businesses from accessing endpoint protection dashboards.",
  },
  {
    id: BigInt(33),
    provider: "Fastly",
    date: "2024-12-10",
    durationHours: 1.5,
    regionScope: "Global Edge",
    incidentType: "CDN Edge Node Failure",
    nycImpactDescription:
      "Fastly edge node failure caused brief content delivery disruptions for NYC media sites and e-commerce platforms.",
  },
  {
    id: BigInt(34),
    provider: "Verizon",
    date: "2024-11-22",
    durationHours: 3.0,
    regionScope: "NYC Metro",
    incidentType: "Network Transit Disruption",
    nycImpactDescription:
      "Verizon fiber cuts in the NYC metro area disrupted business internet for hundreds of small businesses across Manhattan and Brooklyn.",
  },
  {
    id: BigInt(35),
    provider: "Comcast",
    date: "2024-10-05",
    durationHours: 2.0,
    regionScope: "NYC Metro",
    incidentType: "Network Transit Disruption",
    nycImpactDescription:
      "Comcast business internet outage affected NYC retail POS systems and restaurant ordering platforms for several hours.",
  },
  {
    id: BigInt(36),
    provider: "AT&T",
    date: "2024-08-18",
    durationHours: 4.0,
    regionScope: "US-East",
    incidentType: "Cellular Core Routing Collapse",
    nycImpactDescription:
      "AT&T cellular core routing issues caused widespread mobile data outages across NYC, impacting delivery apps and mobile payment systems.",
  },
];

const MOCK_STATS: ProviderStats[] = [
  { provider: "AWS", totalOutages: BigInt(3), averageDurationHours: 16.67, mostCommonIncidentType: "Hardware/Cooling Meltdown" },
  { provider: "Azure", totalOutages: BigInt(5), averageDurationHours: 13.9, mostCommonIncidentType: "DNS Config Corruption" },
  { provider: "Google Cloud", totalOutages: BigInt(4), averageDurationHours: 3.38, mostCommonIncidentType: "Network Transit Disruption" },
  { provider: "Oracle", totalOutages: BigInt(2), averageDurationHours: 0.75, mostCommonIncidentType: "Control Plane Failure" },
  { provider: "IBM Cloud", totalOutages: BigInt(3), averageDurationHours: 11.5, mostCommonIncidentType: "Control Plane Flood" },
  { provider: "DigitalOcean", totalOutages: BigInt(2), averageDurationHours: 3.5, mostCommonIncidentType: "HTTP Traffic Drop (Config Error)" },
  { provider: "Linode", totalOutages: BigInt(1), averageDurationHours: 3.5, mostCommonIncidentType: "Network Transit Disruption" },
  { provider: "Vultr", totalOutages: BigInt(1), averageDurationHours: 2.0, mostCommonIncidentType: "CDN Edge Node Failure" },
  { provider: "Rackspace", totalOutages: BigInt(1), averageDurationHours: 8.0, mostCommonIncidentType: "Control Plane Failure" },
  { provider: "Cloudflare", totalOutages: BigInt(1), averageDurationHours: 1.5, mostCommonIncidentType: "CDN Edge Node Failure" },
  { provider: "GitHub", totalOutages: BigInt(1), averageDurationHours: 4.0, mostCommonIncidentType: "Code Repository Outage" },
  { provider: "Slack", totalOutages: BigInt(1), averageDurationHours: 2.5, mostCommonIncidentType: "Collaboration Platform Downtime" },
  { provider: "Zoom", totalOutages: BigInt(1), averageDurationHours: 3.0, mostCommonIncidentType: "VoIP/Media Server Failure" },
  { provider: "Dropbox", totalOutages: BigInt(1), averageDurationHours: 5.0, mostCommonIncidentType: "File Sync Service Disruption" },
  { provider: "Salesforce", totalOutages: BigInt(1), averageDurationHours: 6.5, mostCommonIncidentType: "CRM Data Access Failure" },
  { provider: "Shopify", totalOutages: BigInt(1), averageDurationHours: 2.0, mostCommonIncidentType: "E-commerce Platform Outage" },
  { provider: "CrowdStrike", totalOutages: BigInt(1), averageDurationHours: 1.0, mostCommonIncidentType: "Authentication Service Outage" },
  { provider: "Fastly", totalOutages: BigInt(1), averageDurationHours: 1.5, mostCommonIncidentType: "CDN Edge Node Failure" },
  { provider: "Verizon", totalOutages: BigInt(1), averageDurationHours: 3.0, mostCommonIncidentType: "Network Transit Disruption" },
  { provider: "Comcast", totalOutages: BigInt(1), averageDurationHours: 2.0, mostCommonIncidentType: "Network Transit Disruption" },
  { provider: "AT&T", totalOutages: BigInt(1), averageDurationHours: 4.0, mostCommonIncidentType: "Cellular Core Routing Collapse" },
  { provider: "T-Mobile", totalOutages: BigInt(0), averageDurationHours: 0, mostCommonIncidentType: "None" },
  { provider: "CenturyLink", totalOutages: BigInt(0), averageDurationHours: 0, mostCommonIncidentType: "None" },
  { provider: "Spectrum", totalOutages: BigInt(0), averageDurationHours: 0, mostCommonIncidentType: "None" },
];

function matchesFilter(o: OutageRecord, filter: OutageFilter): boolean {
  if (filter.provider && !o.provider.toLowerCase().includes(filter.provider.toLowerCase())) return false;
  if (filter.incidentType && !o.incidentType.toLowerCase().includes(filter.incidentType.toLowerCase())) return false;
  if (filter.startDate && o.date < filter.startDate) return false;
  if (filter.endDate && o.date > filter.endDate) return false;
  return true;
}

const EMPTY_RESULT: Result = { hasMore: false, rows: [] };

export const mockBackend: backendInterface = {
  async fetchProviderHealthStatus(): Promise<ProviderHealthStatus[]> {
    return buildHealth();
  },
  async getProviderHealthStatus(): Promise<ProviderHealthStatus[]> {
    return buildHealth();
  },
  async listOutages(filter: OutageFilter = {}): Promise<OutageRecord[]> {
    return MOCK_OUTAGES.filter((o) => matchesFilter(o, filter));
  },
  async getProviderStats(): Promise<ProviderStats[]> {
    return MOCK_STATS;
  },
  async getLastUpdated(): Promise<bigint> {
    return BigInt(Date.now() * 1_000_000);
  },
  // ─── Stubs for methods not used by the Cloud Health dashboard ───────────
  async _initializeAccessControl(): Promise<void> {},
  async approveContribution(_id: ContributionId): Promise<boolean> { return true; },
  async assignCallerUserRole(_user: Principal, _role: UserRole): Promise<void> {},
  async createGuide(_input: GuideInput): Promise<Guide> {
    throw new Error("mock: not implemented");
  },
  async deleteGuide(_id: GuideId): Promise<boolean> { return true; },
  async execute(_qJson: string): Promise<Result> { return EMPTY_RESULT; },
  async fetchCourses(): Promise<void> {},
  async getAdminStats(): Promise<AdminStats> {
    return { totalPublished: BigInt(0), recentGuides: [], pendingContributions: BigInt(0) };
  },
  async getBusinessProfile(): Promise<BusinessProfile | null> { return null; },
  async getCallerUserRole(): Promise<UserRole> { return UserRole.guest; },
  async getCourses(): Promise<Course[]> { return []; },
  async getExpiredCourses(): Promise<Course[]> { return []; },
  async getFeaturedGuides(): Promise<Guide[]> { return []; },
  async getGuide(_id: GuideId): Promise<Guide | null> { return null; },
  async getMyContributions(): Promise<Contribution[]> { return []; },
  async getPersonalizedRecommendations(): Promise<Guide[]> { return []; },
  async getUpcomingCourses(): Promise<Course[]> { return []; },
  async isCallerAdmin(): Promise<boolean> { return true; },
  async isCallerApproved(): Promise<boolean> { return true; },
  async listApprovals(): Promise<UserApprovalInfo[]> { return []; },
  async listGuides(_filter: GuideFilter): Promise<Guide[]> { return []; },
  async listPendingContributions(): Promise<Contribution[]> { return []; },
  async rejectContribution(_id: ContributionId, _reason: string | null): Promise<boolean> { return true; },
  async requestApproval(): Promise<void> {},
  async saveBusinessProfile(_profile: BusinessProfile): Promise<void> {},
  async schema(): Promise<string> { return "{}"; },
  async setApproval(_user: Principal, _status: ApprovalStatus): Promise<void> {},
  async setGuidePublished(_id: GuideId, _published: boolean): Promise<boolean> { return true; },
  async submitContribution(_input: ContributionInput): Promise<Contribution> {
    throw new Error("mock: not implemented");
  },
  async transform(_input: TransformationInput): Promise<TransformationOutput> {
    throw new Error("mock: not implemented");
  },
  async updateGuide(_id: GuideId, _input: GuideInput): Promise<boolean> { return true; },
  // ─── Newsletter stubs ─────────────────────────────────────────────────────
  async _caffeineEmailUnsubscribeFromTopic(_args: {
    recipient_email: string;
    topic_id: number;
  }): Promise<_CaffeineEmailUnsubscribeResult> {
    return { __kind__: "Ok", Ok: {} };
  },
  async _caffeineEmailVerify(_email: string): Promise<void> {},
  async addNewsletterTopic(_name: string): Promise<bigint> { return BigInt(3); },
  async getNewsletterContent(_topicId: bigint): Promise<NewsletterContent | null> {
    return {
      subject: "This Week in Small Business AI",
      htmlBody:
        "<h1>Weekly Small Business Tips</h1><p>Five quick wins to grow your business this week.</p>",
    };
  },
  async listNewsletterSubscribers(_topicId: bigint): Promise<Array<[string, boolean]>> {
    return [
      ["maria@cornerdeli.nyc", true],
      ["james@brightsalon.com", true],
      ["priya@consulting.co", false],
      ["david@retailhub.io", true],
      ["lena@onlineservices.app", false],
    ];
  },
  async listNewsletterTopics(): Promise<Topic__1[]> {
    return [
      { id: BigInt(1), name: "Weekly Small Biz Tips" },
      { id: BigInt(2), name: "Monthly AI Roundup" },
    ];
  },
  async removeNewsletterTopic(_topicId: bigint): Promise<void> {},
  async renameNewsletterTopic(_topicId: bigint, _newName: string): Promise<void> {},
  async sendMonthlyNewsletter(): Promise<void> {},
  async sendWeeklyNewsletter(): Promise<void> {},
  async setNewsletterContent(_topicId: bigint, _subject: string, _htmlBody: string): Promise<void> {},
  async subscribeToNewsletter(_firstName: string, _email: string, _frequency: Frequency): Promise<void> {},
};
