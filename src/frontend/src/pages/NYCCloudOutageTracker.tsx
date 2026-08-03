import { SectionQA } from "@/components/SectionQA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useFetchProviderHealthStatus,
  useGetProviderStats,
  useListOutages,
} from "@/hooks/useOutages";
import {
  Activity,
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  Cloud,
  ExternalLink,
  Filter,
  Globe,
  MapPin,
  RefreshCw,
  Search,
  Server,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const PROVIDERS = [
  "All Providers",
  "AWS",
  "Azure",
  "Google Cloud",
  "IBM Cloud",
  "Oracle",
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
  "Stripe",
  "Square",
  "PayPal",
  "Venmo",
  "Adyen",
];

const INCIDENT_TYPES = [
  "All Types",
  "Hardware/Cooling Meltdown",
  "Resource Provisioning Failure",
  "Control Plane Failure",
  "AI Platform Outage",
  "DevOps / Control Plane",
  "Cellular Core Routing Collapse",
  "HTTP Traffic Drop (Config Error)",
  "Total Infrastructure Blackout",
  "DNS Management Failure",
  "Authentication Lockout",
  "Database Error Spikes",
  "Network Transit Disruption",
  "Control Plane Flood",
  "Physical Networking Layer Fault",
  "Power Substation Incident",
  "DNS Config Corruption",
  "Anycast Routing Leak",
  "Streaming Ingestion Lag",
  "Kernel Update Crash (Blue Screen)",
  "VPC Instantiation Error",
  "Core Routing Interruption",
  "API Service Degradation",
  "CDN Edge Node Failure",
  "Authentication Service Outage",
  "File Sync Service Disruption",
  "VoIP/Media Server Failure",
  "E-commerce Platform Outage",
  "CRM Data Access Failure",
  "Code Repository Outage",
  "Collaboration Platform Downtime",
];

const QA_ITEMS = [
  {
    q: "How does this tracker help my small business?",
    a: "Knowing when major cloud or ISP outages occur helps you understand why your POS system, website, or delivery app might suddenly stop working. It also helps you choose providers with better uptime track records and plan backup systems.",
  },
  {
    q: "What providers are monitored?",
    a: "We track the major cloud platforms (AWS, Azure, Google Cloud, Oracle, IBM Cloud, DigitalOcean, Linode, Vultr, Rackspace), CDN/edge services (Cloudflare, Fastly), collaboration tools (GitHub, Slack, Zoom, Dropbox), business platforms (Salesforce, Shopify), payment processors (Stripe, Square, PayPal, Venmo, Adyen), and ISP/cellular providers (Verizon, Spectrum, Comcast, AT&T, T-Mobile, CenturyLink) that NYC small businesses depend on daily.",
  },
  {
    q: "How often is the data updated?",
    a: "Historical data is verified from official provider status pages and news reports. Live health status checks run every 5 minutes during business hours.",
  },
  {
    q: "What should I do during an outage?",
    a: "First, check if the outage is confirmed here. If so, switch to offline/backup payment methods, communicate with customers via social media, and document any losses for potential SLA claims.",
  },
  {
    q: "Can I get alerted when an outage happens?",
    a: "Live automated alerting is not available in this version. We recommend bookmarking this page and checking provider status pages directly for real-time updates.",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

// Brand colors are used ONLY for provider badges in the timeline and stats
// sections, where they are clearly decorative labels (not status indicators).
// They are NEVER used as a status dot in the Live Cloud Health grid, because a
// brand-colored dot there would disagree with the box background and the status
// icon, which both derive from isHealthy.
function getProviderColor(provider: string): string {
  const map: Record<string, string> = {
    AWS: "#FF9900",
    Azure: "#0078D4",
    "Google Cloud": "#4285F4",
    Oracle: "#C74634",
    "IBM Cloud": "#054ADA",
    DigitalOcean: "#0069FF",
    Linode: "#00B259",
    Vultr: "#0069FF",
    Rackspace: "#EB0000",
  };
  return map[provider] ?? "#6366F1";
}

// ONE authoritative status level per provider. isHealthy is the single source
// of truth: true = GREEN (operational), false = RED (outage), undefined/null =
// AMBER (degraded or unknown). Every visual status cue in the Live Cloud Health
// grid (box background, status dot, status icon, sort priority) reads from this
// same mapping, so they can never disagree.
type StatusLevel = "red" | "amber" | "green";

function getStatusLevel(isHealthy?: boolean): StatusLevel {
  if (isHealthy === false) return "red";
  if (isHealthy === true) return "green";
  return "amber";
}

// Hardcoded hex status colors. We deliberately do NOT use CSS variables
// (rgb(var(--destructive)) etc.) here because those variable-based inline
// styles were not visually applying in the Live Cloud Health grid. Hardcoded
// hex matches the proven Provider Reliability Breakdown pattern
// (getProviderColor) which renders reliably. Same hex values are used for the
// dot AND the box background tint so they can never disagree.
const STATUS_HEX: Record<StatusLevel, string> = {
  red: "#EF4444",
  amber: "#F59E0B",
  green: "#22C55E",
};

// Subtle tinted box background per status: the solid hex at low alpha over the
// card surface, so the box is clearly color-coded but still readable. Uses an
// 8-digit hex (RRGGBBAA) so it works as a single inline backgroundColor value
// without needing rgba()/CSS-variable interpolation.
const STATUS_BOX_BG: Record<StatusLevel, string> = {
  red: "#EF44441A", // ~10% alpha
  amber: "#F59E0B1A", // ~10% alpha
  green: "#22C55E1A", // ~10% alpha
};

// Status dot color: derived from the SAME isHealthy value as the box and the
// icon, so the dot can never disagree with the box background.
function getStatusDotColor(isHealthy?: boolean): string {
  return STATUS_HEX[getStatusLevel(isHealthy)];
}

// Box background tint for the Live Cloud Health card. Returned as a plain hex
// string (NOT a status-* CSS class) so it survives the cn() merge with Tailwind
// utilities and is applied via inline style, exactly like getProviderColor.
function getStatusBoxBg(isHealthy?: boolean): string {
  return STATUS_BOX_BG[getStatusLevel(isHealthy)];
}

function getStatusIcon(isHealthy?: boolean) {
  switch (getStatusLevel(isHealthy)) {
    case "green":
      return <CheckCircle2 size={16} className="text-emerald-500" />;
    case "red":
      return <XCircle size={16} className="text-red-500" />;
    case "amber":
      return <Activity size={16} className="text-amber-500" />;
  }
}

// Sort priority: RED (active outage) providers ALWAYS cluster at the top row,
// then AMBER (degraded or unknown), then GREEN (operational). Alphabetical
// tiebreak keeps the order stable when multiple providers share a status,
// which makes the multi-RED case render all RED providers in the top row.
function getStatusPriority(isHealthy?: boolean): number {
  switch (getStatusLevel(isHealthy)) {
    case "red":
      return 0;
    case "amber":
      return 1;
    case "green":
      return 2;
  }
}

function formatDuration(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  if (hours === Math.floor(hours)) return `${Math.floor(hours)}h`;
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${h}h ${m}m`;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function NYCCloudOutageTracker() {
  const [providerFilter, setProviderFilter] = useState("All Providers");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [searchQuery, setSearchQuery] = useState("");

  const filter = useMemo(() => {
    const f: { provider?: string; incidentType?: string } = {};
    if (providerFilter !== "All Providers") f.provider = providerFilter;
    if (typeFilter !== "All Types") f.incidentType = typeFilter;
    return f;
  }, [providerFilter, typeFilter]);

  const { data: outages, isLoading: outagesLoading } = useListOutages(filter);
  const { data: stats, isLoading: statsLoading } = useGetProviderStats();
  const { data: health, isLoading: healthLoading } =
    useFetchProviderHealthStatus();

  const filteredOutages = useMemo(() => {
    if (!searchQuery.trim()) return outages;
    const q = searchQuery.toLowerCase();
    return outages.filter(
      (o) =>
        o.provider.toLowerCase().includes(q) ||
        o.incidentType.toLowerCase().includes(q) ||
        o.nycImpactDescription.toLowerCase().includes(q) ||
        o.regionScope.toLowerCase().includes(q),
    );
  }, [outages, searchQuery]);

  const totalDowntime = useMemo(
    () => filteredOutages.reduce((sum, o) => sum + o.durationHours, 0),
    [filteredOutages],
  );

  const avgDuration = useMemo(
    () =>
      filteredOutages.length > 0 ? totalDowntime / filteredOutages.length : 0,
    [filteredOutages, totalDowntime],
  );

  const longestOutage = useMemo(
    () =>
      filteredOutages.length > 0
        ? filteredOutages.reduce((max, o) =>
            o.durationHours > max.durationHours ? o : max,
          )
        : null,
    [filteredOutages],
  );

  // Authoritative RED-first sort for the Live Cloud Health grid.
  // RED (isHealthy === false) providers MUST always appear in the top row,
  // regardless of provider name or alphabetical order, on every load and
  // every refresh. This sort runs on every render of `health`, so even if
  // the upstream hook returns an unsorted array, RED providers are pinned
  // to the top before the grid maps over them. The multi-RED case (two or
  // more providers RED at once) clusters all RED providers in the top row
  // because they share priority 0 and are then ordered alphabetically.
  const sortedHealth = useMemo(() => {
    if (!health) return [];
    return [...health].sort((a, b) => {
      const priorityA = getStatusPriority(a.isHealthy);
      const priorityB = getStatusPriority(b.isHealthy);
      if (priorityA !== priorityB) return priorityA - priorityB;
      // Same status: sort alphabetically by provider name as a stable tiebreak
      return a.provider.localeCompare(b.provider);
    });
  }, [health]);

  const sortedStats = useMemo(() => {
    if (!stats) return [];
    // Sort by status priority (RED > ORANGE > GREEN), then by most recent outage date, then by total outages
    const providerLastOutage: Record<string, string> = {};
    for (const o of outages ?? []) {
      const existing = providerLastOutage[o.provider];
      if (!existing || o.date > existing) {
        providerLastOutage[o.provider] = o.date;
      }
    }

    // Build a health lookup from the current health data so we can sort stats by status too
    const healthMap: Record<string, boolean | undefined> = {};
    for (const h of health ?? []) {
      healthMap[h.provider] = h.isHealthy;
    }

    return [...stats].sort((a, b) => {
      const priorityA = getStatusPriority(healthMap[a.provider]);
      const priorityB = getStatusPriority(healthMap[b.provider]);
      if (priorityA !== priorityB) return priorityA - priorityB;

      const dateA = providerLastOutage[a.provider] ?? "1970-01-01";
      const dateB = providerLastOutage[b.provider] ?? "1970-01-01";
      if (dateA !== dateB) return dateB.localeCompare(dateA);
      return Number(b.totalOutages) - Number(a.totalOutages);
    });
  }, [stats, outages, health]);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Live Cloud Health ────────────────────────────────────────── */}
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={20} className="text-primary" />
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              Live Cloud Health
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5">
            {healthLoading &&
              Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`health-skeleton-${i}-${Date.now()}`}
                  className="h-14 rounded-lg bg-muted animate-pulse"
                />
              ))}
            {!healthLoading &&
              sortedHealth.map((h) => (
                <a
                  key={h.provider}
                  href={h.statusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border p-2 flex items-center justify-between transition-all duration-200 hover:shadow-md cursor-pointer no-underline"
                  style={{ backgroundColor: getStatusBoxBg(h.isHealthy) }}
                  data-ocid={`outage.health.${h.provider.toLowerCase().replace(/\s+/g, "_")}`}
                  aria-label={`${h.provider} status page`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0 ring-2 ring-card"
                      style={{
                        backgroundColor: getStatusDotColor(h.isHealthy),
                      }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {h.provider}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {h.isHealthy === true
                          ? "Operational"
                          : h.isHealthy === false
                            ? "Outage detected"
                            : "Status unknown"}
                      </p>
                      {h.lastCheckedAt && (
                        <p className="text-[10px] text-muted-foreground/80 mt-0.5">
                          Updated{" "}
                          {new Date(h.lastCheckedAt).toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(h.isHealthy)}
                    <ExternalLink size={12} />
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* ── Provider Reliability Breakdown ──────────────────────────────── */}
      <section className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-2 mb-4">
            <Server size={20} className="text-primary" />
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              Provider Reliability Breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsLoading &&
              Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={`stats-skeleton-${i}-${Date.now()}`}
                  className="rounded-xl border bg-card p-4 animate-pulse"
                >
                  <div className="h-4 bg-muted rounded w-1/2 mb-3" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
              ))}
            {!statsLoading &&
              sortedStats.map((s) => (
                <div
                  key={s.provider}
                  className="rounded-xl border bg-card p-4 hover:bg-muted/30 transition-colors"
                  data-ocid={`outage.stats.${s.provider.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{
                          backgroundColor: getProviderColor(s.provider),
                        }}
                      />
                      <span className="font-medium text-foreground">
                        {s.provider}
                      </span>
                    </div>
                    <Badge
                      variant={
                        Number(s.totalOutages) >= 4
                          ? "destructive"
                          : Number(s.totalOutages) >= 2
                            ? "secondary"
                            : "default"
                      }
                    >
                      {Number(s.totalOutages)} outages
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Avg: {formatDuration(s.averageDurationHours)}</span>
                    <span className="truncate max-w-[50%]">
                      {s.mostCommonIncidentType}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* ── Key Metrics ─────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <AlertTriangle size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Total Incidents
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {outagesLoading ? "..." : filteredOutages.length}
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Total Downtime
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {outagesLoading ? "..." : `${Math.round(totalDowntime)}h`}
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Activity size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Avg Duration
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {outagesLoading ? "..." : formatDuration(avgDuration)}
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <ShieldAlert size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Longest Outage
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {outagesLoading || !longestOutage
                ? "..."
                : formatDuration(longestOutage.durationHours)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {longestOutage?.provider}
            </p>
          </div>
        </section>

        {/* ── Filters ───────────────────────────────────────────────────────── */}
        <section className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search outages by provider, type, or impact..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              data-ocid="outage.search_input"
            />
          </div>
          <div className="flex gap-3">
            <Select value={providerFilter} onValueChange={setProviderFilter}>
              <SelectTrigger
                className="w-[180px]"
                data-ocid="outage.provider_filter"
              >
                <Filter size={14} className="mr-2 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PROVIDERS.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger
                className="w-[180px]"
                data-ocid="outage.type_filter"
              >
                <AlertTriangle
                  size={14}
                  className="mr-2 text-muted-foreground"
                />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {INCIDENT_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setProviderFilter("All Providers");
                setTypeFilter("All Types");
                setSearchQuery("");
              }}
              aria-label="Reset filters"
              data-ocid="outage.reset_filters"
            >
              <RefreshCw size={16} />
            </Button>
          </div>
        </section>

        {/* ── Outage Timeline ───────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-primary" />
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              Historical Outage Timeline
            </h2>
            <Badge variant="outline" className="ml-auto text-xs">
              {filteredOutages.length} results
            </Badge>
          </div>

          {outagesLoading && (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`timeline-skeleton-${i}-${Date.now()}`}
                  className="h-24 rounded-lg bg-muted animate-pulse"
                />
              ))}
            </div>
          )}

          {!outagesLoading && filteredOutages.length === 0 && (
            <div className="rounded-xl border bg-card p-8 text-center">
              <Search
                size={32}
                className="mx-auto text-muted-foreground mb-3"
              />
              <p className="text-foreground font-medium">No outages found</p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your filters or search query.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setProviderFilter("All Providers");
                  setTypeFilter("All Types");
                  setSearchQuery("");
                }}
                data-ocid="outage.clear_filters_button"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {!outagesLoading && filteredOutages.length > 0 && (
            <div className="space-y-3">
              {filteredOutages
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
                )
                .map((outage, index) => (
                  <div
                    key={outage.id.toString()}
                    className="rounded-xl border bg-card p-4 sm:p-5 hover:shadow-md transition-all duration-200"
                    data-ocid={`outage.item.${index + 1}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div
                        className="w-1 shrink-0 rounded-full self-stretch"
                        style={{
                          backgroundColor: getProviderColor(outage.provider),
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <Badge
                            variant="outline"
                            className="text-xs font-semibold"
                            style={{
                              borderColor: getProviderColor(outage.provider),
                              color: getProviderColor(outage.provider),
                            }}
                          >
                            {outage.provider}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {outage.date}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {formatDuration(outage.durationHours)}
                          </Badge>
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {outage.incidentType}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          <Globe size={12} className="inline mr-1" />
                          {outage.regionScope}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {outage.nycImpactDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </section>

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-card border rounded-xl">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Cloud size={24} className="text-primary" />
              </div>
              <Badge variant="secondary" className="text-xs font-medium">
                Tools &amp; Resources
              </Badge>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Website Health
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              This page checks whether the tools and websites your business
              depends on are up and running, so you hear about problems before
              your customers do. When a payment processor, booking site, or
              delivery app goes down, every minute offline can cost you sales
              and trust. Use this tracker to see which services are having
              trouble, how long the outages last, and what to do next to keep
              your business running.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                24-month rolling window
              </span>
              <span className="flex items-center gap-1.5">
                <Server size={14} />
                {outages?.length ?? 0} verified incidents
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                NYC-focused impact analysis
              </span>
            </div>
          </div>
        </section>

        {/* ── SMB Action Plan ───────────────────────────────────────────────── */}
        <section className="rounded-xl border bg-muted/30 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert size={18} className="text-primary" />
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              SMB Action Plan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg bg-card border p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <h3 className="text-sm font-semibold text-foreground">
                  Before an Outage
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                <li>Identify your critical cloud dependencies</li>
                <li>
                  Set up offline payment backups (cash, manual card imprinters)
                </li>
                <li>Document failover procedures for staff</li>
                <li>Bookmark provider status pages</li>
              </ul>
            </div>
            <div className="rounded-lg bg-card border p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-amber-500" />
                <h3 className="text-sm font-semibold text-foreground">
                  During an Outage
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                <li>Check this tracker to confirm scope</li>
                <li>Switch to backup systems immediately</li>
                <li>Post updates on social media for customers</li>
                <li>Document downtime for SLA claims</li>
              </ul>
            </div>
            <div className="rounded-lg bg-card border p-4">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw size={16} className="text-primary" />
                <h3 className="text-sm font-semibold text-foreground">
                  After an Outage
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                <li>Review what failed and why</li>
                <li>Update your backup procedures</li>
                <li>Consider multi-provider redundancy</li>
                <li>File SLA credit claims if applicable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Q&A ───────────────────────────────────────────────────────────── */}
        <section>
          <SectionQA items={QA_ITEMS} accentColor="oklch(0.28 0.12 330)" />
        </section>
      </div>
    </div>
  );
}
