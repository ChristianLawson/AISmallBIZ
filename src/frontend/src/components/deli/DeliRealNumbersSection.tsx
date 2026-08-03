import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, BarChart3, DollarSign, TrendingUp } from "lucide-react";

const STAT_CARDS = [
  {
    label: "NYC Deli Annual Revenue",
    value: "$400K - $1.2M",
    sub: "Median high-volume deli: ~$750K/yr",
    icon: DollarSign,
    accent: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    label: "Average Lunch Ticket",
    value: "$12 - $18",
    sub: "Breakfast ticket: $8-$12",
    icon: TrendingUp,
    accent: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    label: "Gross Margin: Prepared Foods",
    value: "65 - 72%",
    sub: "Hot sandwiches, soups, platters",
    icon: BarChart3,
    accent: "#10B981",
    bg: "#ECFDF5",
  },
  {
    label: "Gross Margin: Packaged Goods",
    value: "40 - 55%",
    sub: "Chips, drinks, pre-packed items",
    icon: BarChart3,
    accent: "#F59E0B",
    bg: "#FFFBEB",
  },
];

const BENCHMARK_ROWS = [
  {
    metric: "Food Cost %",
    target: "28-32%",
    warning: "33-38%",
    danger: "39%+",
    tafferNote: "Above 35% and you are working for your suppliers.",
  },
  {
    metric: "Labor Cost %",
    target: "28-35%",
    warning: "36-40%",
    danger: "41%+",
    tafferNote: "Overstaffing at slow hours is a silent margin killer.",
  },
  {
    metric: "Prime Cost (Food + Labor)",
    target: "56-65%",
    warning: "66-72%",
    danger: "73%+",
    tafferNote:
      "If prime cost exceeds 65%, nothing else matters until you fix it.",
  },
  {
    metric: "Occupancy Cost %",
    target: "8-12%",
    warning: "13-17%",
    danger: "18%+",
    tafferNote:
      "NYC rents are brutal. Negotiate hard and model this before you sign.",
  },
  {
    metric: "Net Profit %",
    target: "10-15%",
    warning: "5-9%",
    danger: "Under 5%",
    tafferNote: "Under 5% net and you have a job, not a business.",
  },
];

const LIFT_SCENARIOS = [
  { revenue: 400000, monthly: 3333 },
  { revenue: 600000, monthly: 5000 },
  { revenue: 750000, monthly: 6250 },
  { revenue: 1000000, monthly: 8333 },
];

export function DeliRealNumbersSection() {
  return (
    <section id="benchmarks" data-ocid="deli-guide.benchmarks_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <BarChart3 size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Real Numbers
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Deli Benchmarks That Actually Matter
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Taffer does not care about feelings: he cares about numbers. Every
        metric below is a performance target. If you are below it, fix it now.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STAT_CARDS.map((s) => (
          <Card
            key={s.label}
            className="border-0 shadow-sm"
            style={{ background: s.bg }}
          >
            <CardContent className="p-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${s.accent}20` }}
              >
                <s.icon size={18} style={{ color: s.accent }} />
              </div>
              <div className="font-display text-2xl font-bold text-foreground mb-1">
                {s.value}
              </div>
              <div className="text-xs font-semibold text-foreground mb-0.5">
                {s.label}
              </div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        The 5 Key Ratio Benchmarks
      </h3>
      <div className="overflow-x-auto rounded-xl border border-border mb-10">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Metric
              </th>
              <th className="text-center px-4 py-3 font-semibold text-emerald-700">
                Target
              </th>
              <th className="text-center px-4 py-3 font-semibold text-amber-700">
                Warning
              </th>
              <th className="text-center px-4 py-3 font-semibold text-red-700">
                Danger
              </th>
              <th className="text-left px-4 py-3 font-semibold text-[#6366F1]">
                Taffer Says
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {BENCHMARK_ROWS.map((row) => (
              <tr
                key={row.metric}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-foreground">
                  {row.metric}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                    {row.target}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
                    {row.warning}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700">
                    {row.danger}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground italic">
                  {row.tafferNote}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rounded-2xl p-6 mb-10 border border-[#6366F1]/30"
        style={{
          background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)",
        }}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center shrink-0">
            <AlertTriangle size={18} className="text-white" />
          </div>
          <div>
            <div className="font-display text-lg font-bold text-foreground mb-1">
              Taffer's "Audit Your Numbers" Protocol
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Every week, before you do anything else, pull these 4 numbers:
              food cost %, labor cost %, average ticket size, covers per day. If
              any number is outside target range, that is your only priority
              until it is fixed. Everything else is noise.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Food Cost % (target: 28-32%)",
                "Labor Cost % (target: 28-35%)",
                "Avg Ticket Size (target: $12-18 lunch)",
                "Covers/Day (track week-over-week)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[#6366F1]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        What a 10% Revenue Lift Means in Real Dollars
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LIFT_SCENARIOS.map((s) => (
          <div
            key={s.revenue}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <div className="text-sm text-muted-foreground mb-1">
              If your deli does
            </div>
            <div className="font-display text-xl font-bold text-foreground mb-3">
              ${(s.revenue / 1000).toFixed(0)}K/yr
            </div>
            <div className="h-px bg-border mb-3" />
            <div className="text-xs text-muted-foreground mb-1">
              +10% = extra
            </div>
            <div className="font-display text-2xl font-bold text-[#6366F1]">
              +${s.monthly.toLocaleString()}/mo
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              (+${(s.revenue * 0.1).toLocaleString()}/yr)
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
