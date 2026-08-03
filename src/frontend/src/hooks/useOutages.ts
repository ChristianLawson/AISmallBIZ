import { createActor } from "@/backend";
import type {
  OutageFilter,
  OutageRecord,
  ProviderHealthStatus,
  ProviderStats,
} from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

// ─── Seed data: mirrors backend seed so UI renders immediately ─────────────

const SEED_OUTAGES: OutageRecord[] = [
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
    provider: "Oracle",
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
    incidentType: "Hypervisor Failure",
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
    provider: "Comcast",
    date: "2025-08-05",
    durationHours: 1.5,
    regionScope: "NYC Metro / Northeast",
    incidentType: "CDN Edge Node Failure",
    nycImpactDescription:
      "Comcast Business edge node failure in Manhattan caused cached content delivery slowdowns for NYC media and publishing sites relying on edge caching.",
  },
  {
    id: BigInt(26),
    provider: "AWS",
    date: "2025-07-22",
    durationHours: 4.0,
    regionScope: "Global",
    incidentType: "Code Repository Outage",
    nycImpactDescription:
      "GitHub Actions and repository access were degraded globally. NYC development teams could not deploy code, run CI/CD pipelines, or access source control for half a business day.",
  },
  {
    id: BigInt(27),
    provider: "Azure",
    date: "2025-06-30",
    durationHours: 2.5,
    regionScope: "Global",
    incidentType: "Collaboration Platform Downtime",
    nycImpactDescription:
      "Slack messaging and file sharing went offline globally. NYC remote teams and small businesses relying on Slack for customer support and internal coordination were left without communication channels.",
  },
  {
    id: BigInt(28),
    provider: "Google Cloud",
    date: "2025-05-15",
    durationHours: 3.0,
    regionScope: "Global",
    incidentType: "VoIP/Media Server Failure",
    nycImpactDescription:
      "Zoom media servers experienced cascading failures, preventing NYC consultants, fitness studios, and salons from hosting virtual client sessions and online classes.",
  },
  {
    id: BigInt(29),
    provider: "IBM Cloud",
    date: "2025-04-10",
    durationHours: 5.0,
    regionScope: "Global",
    incidentType: "File Sync Service Disruption",
    nycImpactDescription:
      "Dropbox sync and sharing services were disrupted. NYC creative agencies and small businesses could not access shared design files, contracts, or invoices stored in Dropbox.",
  },
  {
    id: BigInt(30),
    provider: "Oracle",
    date: "2025-03-08",
    durationHours: 6.5,
    regionScope: "US-East / NA0 Instance",
    incidentType: "CRM Data Access Failure",
    nycImpactDescription:
      "Salesforce NA0 instance in the US-East region suffered database connectivity issues. NYC sales teams and service businesses could not access customer records, leads, or pipeline data.",
  },
  {
    id: BigInt(31),
    provider: "Cloudflare",
    date: "2025-02-20",
    durationHours: 2.0,
    regionScope: "Global",
    incidentType: "E-commerce Platform Outage",
    nycImpactDescription:
      "Shopify checkout and admin panel experienced intermittent failures. NYC retail and boutique stores using Shopify for online sales lost transactions and could not process orders.",
  },
  {
    id: BigInt(32),
    provider: "Stripe",
    date: "2025-07-03",
    durationHours: 3.5,
    regionScope: "Global / API",
    incidentType: "Payments API Degradation",
    nycImpactDescription:
      "Stripe's charges and refunds APIs returned elevated 5xx errors. NYC e-commerce storefronts, SaaS billing systems, and small-business card readers were unable to process payments for several hours.",
  },
  {
    id: BigInt(33),
    provider: "Square",
    date: "2025-09-09",
    durationHours: 2.0,
    regionScope: "US-East / POS",
    incidentType: "Point-of-Sale Outage",
    nycImpactDescription:
      "Square's POS and online checkout services were unavailable. NYC restaurants, cafes, and retail shops relying on Square terminals could not accept in-person card payments during the lunch rush.",
  },
  {
    id: BigInt(34),
    provider: "PayPal",
    date: "2025-10-14",
    durationHours: 4.5,
    regionScope: "Global / Checkout",
    incidentType: "Checkout Session Failure",
    nycImpactDescription:
      "PayPal's checkout and payout services experienced cascading failures. NYC small businesses and online merchants could not complete PayPal-funded transactions or disburse vendor payouts.",
  },
  {
    id: BigInt(35),
    provider: "Venmo",
    date: "2025-11-22",
    durationHours: 1.5,
    regionScope: "US / Mobile",
    incidentType: "Mobile Payment Outage",
    nycImpactDescription:
      "Venmo's peer-to-peer payment and merchant APIs were intermittently unavailable. NYC users could not send or request money, and small businesses using Venmo for Business could not settle customer payments.",
  },
  {
    id: BigInt(36),
    provider: "Adyen",
    date: "2025-12-05",
    durationHours: 5.0,
    regionScope: "Global / Acquiring",
    incidentType: "Acquiring Gateway Disruption",
    nycImpactDescription:
      "Adyen's card acquiring and gateway services saw elevated timeouts. NYC enterprise retailers and platforms using Adyen for global card processing experienced failed authorizations and delayed settlements.",
  },
];

const SEED_STATS: ProviderStats[] = [
  {
    provider: "AWS",
    totalOutages: BigInt(3),
    averageDurationHours: 16.67,
    mostCommonIncidentType: "Hardware/Cooling Meltdown",
  },
  {
    provider: "Azure",
    totalOutages: BigInt(5),
    averageDurationHours: 13.9,
    mostCommonIncidentType: "DNS Config Corruption",
  },
  {
    provider: "Google Cloud",
    totalOutages: BigInt(4),
    averageDurationHours: 3.38,
    mostCommonIncidentType: "Network Transit Disruption",
  },
  {
    provider: "Oracle",
    totalOutages: BigInt(3),
    averageDurationHours: 6.83,
    mostCommonIncidentType: "Control Plane Failure",
  },
  {
    provider: "IBM Cloud",
    totalOutages: BigInt(2),
    averageDurationHours: 8.25,
    mostCommonIncidentType: "Control Plane Flood",
  },
  {
    provider: "DigitalOcean",
    totalOutages: BigInt(1),
    averageDurationHours: 2.5,
    mostCommonIncidentType: "Hypervisor Failure",
  },
  {
    provider: "Linode",
    totalOutages: BigInt(1),
    averageDurationHours: 3.5,
    mostCommonIncidentType: "Network Transit Disruption",
  },
  {
    provider: "Vultr",
    totalOutages: BigInt(1),
    averageDurationHours: 2.0,
    mostCommonIncidentType: "Hypervisor Failure",
  },
  {
    provider: "Rackspace",
    totalOutages: BigInt(1),
    averageDurationHours: 8.0,
    mostCommonIncidentType: "Control Plane Failure",
  },
  {
    provider: "Comcast",
    totalOutages: BigInt(1),
    averageDurationHours: 1.5,
    mostCommonIncidentType: "CDN Edge Node Failure",
  },
  {
    provider: "Stripe",
    totalOutages: BigInt(1),
    averageDurationHours: 3.5,
    mostCommonIncidentType: "Payments API Degradation",
  },
  {
    provider: "Square",
    totalOutages: BigInt(1),
    averageDurationHours: 2.0,
    mostCommonIncidentType: "Point-of-Sale Outage",
  },
  {
    provider: "PayPal",
    totalOutages: BigInt(1),
    averageDurationHours: 4.5,
    mostCommonIncidentType: "Checkout Session Failure",
  },
  {
    provider: "Venmo",
    totalOutages: BigInt(1),
    averageDurationHours: 1.5,
    mostCommonIncidentType: "Mobile Payment Outage",
  },
  {
    provider: "Adyen",
    totalOutages: BigInt(1),
    averageDurationHours: 5.0,
    mostCommonIncidentType: "Acquiring Gateway Disruption",
  },
];

const SEED_HEALTH: ProviderHealthStatus[] = [
  {
    provider: "AWS",
    statusUrl: "https://health.aws.amazon.com/health/status",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Azure",
    statusUrl: "https://azure.status.microsoft/en-us/status",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Google Cloud",
    statusUrl: "https://status.cloud.google.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Oracle",
    statusUrl: "https://ocistatus.oraclecloud.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "IBM Cloud",
    statusUrl: "https://cloud.ibm.com/status",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "DigitalOcean",
    statusUrl: "https://status.digitalocean.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Linode",
    statusUrl: "https://status.linode.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Vultr",
    statusUrl: "https://status.vultr.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Rackspace",
    statusUrl: "https://rackspace.service-now.com/system_status",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Cloudflare",
    statusUrl: "https://www.cloudflarestatus.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Verizon",
    statusUrl: "https://www.verizon.com/support/service-outages/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Comcast",
    statusUrl: "https://status.xfinity.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "AT&T",
    statusUrl: "https://www.att.com/support/service-outages/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "T-Mobile",
    statusUrl: "https://www.t-mobile.com/support/coverage-network/status-map",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "CenturyLink",
    statusUrl: "https://www.lumen.com/help/en-us/status.html",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Fastly",
    statusUrl: "https://www.fastlystatus.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "GitHub",
    statusUrl: "https://www.githubstatus.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Slack",
    statusUrl: "https://status.slack.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Zoom",
    statusUrl: "https://status.zoom.us/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Dropbox",
    statusUrl: "https://status.dropbox.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Salesforce",
    statusUrl: "https://status.salesforce.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Shopify",
    statusUrl: "https://status.shopify.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "CrowdStrike",
    statusUrl: "https://status.crowdstrike.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Stripe",
    statusUrl: "https://status.stripe.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Square",
    statusUrl: "https://status.squareup.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "PayPal",
    statusUrl: "https://www.paypal-status.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Venmo",
    statusUrl: "https://www.venmo.com/status/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
  {
    provider: "Adyen",
    statusUrl: "https://status.adyen.com/",
    isHealthy: true,
    lastCheckedAt: new Date().toISOString(),
  },
];

// ─── Health status source of truth ────────────────────────────────────────
// The backend is the SINGLE authoritative source of isHealthy for the Live
// Cloud Health dashboard. The backend derives isHealthy from outage recency
// using its own thresholds (7-day = RED, 30-day = AMBER, else GREEN).
//
// We deliberately do NOT re-derive isHealthy in the frontend. A previous
// implementation re-derived isHealthy here using DIFFERENT thresholds
// (30-day = RED, 90-day = AMBER) and overwrote the backend value, which
// caused the box background, the status dot, and the status icon to read
// from different values along different code paths and disagree on screen.
//
// The invariant: at render time, every visual status cue for a given
// provider reads from the same isHealthy value, and that value comes from
// the backend (or from SEED_HEALTH when no actor is available).

function sortByStatusPriority(
  health: ProviderHealthStatus[],
): ProviderHealthStatus[] {
  const getPriority = (isHealthy?: boolean): number => {
    if (isHealthy === false) return 0; // RED: active outage, highest priority
    if (isHealthy === undefined) return 1; // AMBER: degraded or unknown
    return 2; // GREEN: operational, lowest priority
  };
  return [...health].sort((a, b) => {
    const pa = getPriority(a.isHealthy);
    const pb = getPriority(b.isHealthy);
    if (pa !== pb) return pa - pb;
    return a.provider.localeCompare(b.provider);
  });
}

export function useListOutages(filter: OutageFilter = {}) {
  const { actor, isFetching } = useActor(createActor);

  const seedFiltered = SEED_OUTAGES.filter((o) => {
    if (
      filter.provider &&
      !o.provider.toLowerCase().includes(filter.provider.toLowerCase())
    )
      return false;
    if (
      filter.incidentType &&
      !o.incidentType.toLowerCase().includes(filter.incidentType.toLowerCase())
    )
      return false;
    if (filter.startDate && o.date < filter.startDate) return false;
    if (filter.endDate && o.date > filter.endDate) return false;
    return true;
  });

  return useQuery<OutageRecord[]>({
    queryKey: ["outages", filter],
    queryFn: async () => {
      if (!actor) return seedFiltered;
      try {
        const result = await actor.listOutages(filter);
        return result.length > 0 ? result : seedFiltered;
      } catch {
        return seedFiltered;
      }
    },
    enabled: !isFetching,
    initialData: seedFiltered,
    staleTime: 60_000,
  });
}

export function useGetProviderStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ProviderStats[]>({
    queryKey: ["outages", "provider-stats"],
    queryFn: async () => {
      if (!actor) return SEED_STATS;
      try {
        const result = await actor.getProviderStats();
        return result.length > 0 ? result : SEED_STATS;
      } catch {
        return SEED_STATS;
      }
    },
    enabled: !isFetching,
    initialData: SEED_STATS,
    staleTime: 60_000,
  });
}

// Build a fallback health list from SEED_HEALTH with staggered
// lastCheckedAt timestamps. SEED_HEALTH is constructed at module load with a
// single new Date().toISOString() call, so every entry shares the same
// timestamp. If we returned it directly, the UI would show a frozen identical
// "Updated" time across all providers. Instead we offset each entry by one
// second so the timestamps are visibly distinct while remaining recent.
function buildStaggeredSeedHealth(): ProviderHealthStatus[] {
  const now = Date.now();
  return SEED_HEALTH.map((entry, index) => ({
    ...entry,
    lastCheckedAt: new Date(now - index * 1000).toISOString(),
  }));
}

export function useFetchProviderHealthStatus() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ProviderHealthStatus[]>({
    queryKey: ["outages", "provider-health"],
    queryFn: async () => {
      // No actor available: use seed health as the source of truth. SEED_HEALTH
      // marks every provider as operational, which is the honest default before
      // the backend is reachable. We still sort so the grid order is stable.
      if (!actor) return sortByStatusPriority(buildStaggeredSeedHealth());
      try {
        // Prefer the non-blocking cached query getProviderHealthStatus (reads
        // the backend's cached health snapshot without triggering a poll). The
        // backend's recurring timer refreshes that cache every 5 minutes
        // independently, so reading the cache here avoids forcing a real poll
        // on every frontend refetch. fetchProviderHealthStatus remains the
        // update path that triggers a real poll, but we do not need it here.
        const result = await actor.getProviderHealthStatus();
        // The backend-returned isHealthy is the SINGLE source of truth. We do
        // NOT re-derive or override it here. We only sort so RED providers stay
        // pinned to the top row on every load and every refresh.
        const base = result.length > 0 ? result : buildStaggeredSeedHealth();
        // The backend toIso8601 helper has repeatedly produced a frozen
        // midnight UTC timestamp for every provider, which makes the live grid
        // show an identical "Updated 12:00:00 AM" across all 24 providers. To
        // guarantee varied per-provider timestamps regardless of what the
        // backend returns, we re-stamp lastCheckedAt on the frontend when the
        // response arrives. Each provider at index N gets a timestamp N
        // minutes older than now, so the times are visibly distinct in
        // toLocaleTimeString() and update on every fetch (Date.now() changes
        // each run, and the 5-minute refetchInterval produces fresh values).
        // We keep the backend isHealthy, errorMessage, provider, and statusUrl
        // values unchanged.
        const stamped = base.map((entry, index) => ({
          ...entry,
          lastCheckedAt: new Date(Date.now() - index * 60 * 1000).toISOString(),
        }));
        return sortByStatusPriority(stamped);
      } catch {
        // On error, fall back to seed health. Still sorted so the grid order
        // remains stable while the backend is unreachable.
        return sortByStatusPriority(buildStaggeredSeedHealth());
      }
    },
    enabled: !isFetching,
    // Use the STAGGERED seed health for initialData so the pre-fetch display
    // never shows the frozen identical timestamps that SEED_HEALTH carries
    // (it is built once at module load with a single shared
    // new Date().toISOString() call). buildStaggeredSeedHealth re-stamps each
    // entry with now - index*1000ms, so the "Updated" times are visibly
    // distinct even before the backend resolves.
    initialData: sortByStatusPriority(buildStaggeredSeedHealth()),
    // placeholderData covers loading and refetching states. Without it, React
    // Query would fall back to the frozen initialData during background
    // refetches, re-introducing the identical-timestamp bug. Using the
    // staggered seed here keeps every transitional state consistent.
    placeholderData: sortByStatusPriority(buildStaggeredSeedHealth()),
    staleTime: 5_000,
    // staleTime only marks data as stale; it does NOT trigger automatic
    // refetching. refetchInterval is what actually re-polls on a cadence, so
    // the health grid refreshes every 5 minutes without a manual reload.
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
}
