import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const METRICS = [
  {
    label: "Target Avg Ticket",
    value: "$150-$200+",
    sub: "Industry benchmark for premium NYC salons",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    label: "Retail-to-Service Ratio",
    value: "20-30%",
    sub: "Retail as % of total service revenue",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.1)",
  },
  {
    label: "Client Retention Rate",
    value: "70%+",
    sub: "Target rebooking rate across all stylists",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.1)",
  },
];

const REVENUE_STREAMS = [
  {
    stream: "Retail products",
    margin: "40-60%",
    note: "Zero extra service time",
    highlight: true,
  },
  {
    stream: "Express add-ons (glosses, treatments)",
    margin: "65-75%",
    note: "+15 min per ticket",
    highlight: false,
  },
  {
    stream: "Membership / prepaid packages",
    margin: "Cash flow + retention",
    note: "Predictable revenue, higher LTV",
    highlight: false,
  },
  {
    stream: "Gift cards",
    margin: "Often unredeemed",
    note: "Immediate cash + new client acquisition",
    highlight: false,
  },
  {
    stream: "Event / bridal bookings",
    margin: "Premium pricing",
    note: "Advance payment, high-visibility marketing",
    highlight: false,
  },
  {
    stream: "Product bundles (take-home regimen)",
    margin: "+$40-$80",
    note: "Average ticket increase per client",
    highlight: false,
  },
  {
    stream: "VIP loyalty tier",
    margin: "Recurring revenue",
    note: "Built-in retention mechanism",
    highlight: false,
  },
  {
    stream: "Online booking upsell prompt",
    margin: "+15-22%",
    note: "Avg ticket increase from add-on at booking",
    highlight: false,
  },
];

export function SalonFinancialSection() {
  return (
    <section id="financial" data-ocid="salon-guide.financial_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 150 / 0.12)" }}
        >
          <DollarSign size={20} style={{ color: "oklch(0.35 0.12 150)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 150 / 0.1)",
            color: "oklch(0.35 0.12 150)",
            border: "1px solid oklch(0.55 0.14 150 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Financial Success Principles
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Most salon owners work in their business for 20 years and have nothing
        to show for it. These principles change that.
      </p>

      {/* 3 key metrics */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="text-center p-5 rounded-xl"
            style={{
              background: m.bg,
              border: `1px solid ${m.color.replace(")", " / 0.2)")}`,
            }}
          >
            <div
              className="font-display text-2xl md:text-3xl font-bold mb-1"
              style={{ color: m.color }}
            >
              {m.value}
            </div>
            <div className="font-semibold text-sm text-foreground mb-1">
              {m.label}
            </div>
            <div className="text-xs text-muted-foreground">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Revenue streams table */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        High-Margin Revenue Streams
      </h3>
      <div
        className="rounded-xl overflow-hidden mb-8"
        style={{ border: "1px solid oklch(0.28 0.12 330 / 0.15)" }}
      >
        <div
          className="grid grid-cols-3 gap-4 px-4 py-3 text-xs font-semibold"
          style={{
            background: "oklch(0.28 0.12 330 / 0.08)",
            color: "oklch(0.28 0.12 330)",
          }}
        >
          <div>Revenue Stream</div>
          <div>Margin / Increase</div>
          <div>Note</div>
        </div>
        {REVENUE_STREAMS.map((r, i) => (
          <div
            key={r.stream}
            className="grid grid-cols-3 gap-4 px-4 py-3 text-xs"
            style={{
              background: r.highlight
                ? "oklch(0.78 0.12 85 / 0.08)"
                : i % 2 === 0
                  ? "oklch(0.97 0.008 75)"
                  : "oklch(0.985 0.006 75)",
              borderTop: "1px solid oklch(0.90 0.006 75)",
            }}
          >
            <div
              className="font-medium"
              style={{
                color: r.highlight
                  ? "oklch(0.45 0.1 85)"
                  : "oklch(0.32 0.02 50)",
              }}
            >
              {r.stream}
              {r.highlight && (
                <span
                  className="ml-1.5 text-xs font-bold"
                  style={{ color: "oklch(0.45 0.1 85)" }}
                >
                  ★
                </span>
              )}
            </div>
            <div
              className="font-semibold"
              style={{
                color: r.highlight
                  ? "oklch(0.45 0.1 85)"
                  : "oklch(0.35 0.12 150)",
              }}
            >
              {r.margin}
            </div>
            <div className="text-muted-foreground">{r.note}</div>
          </div>
        ))}
      </div>

      {/* Financial principle */}
      <Card>
        <CardContent className="p-6">
          <div
            className="pl-4"
            style={{ borderLeft: "4px solid oklch(0.78 0.12 85 / 0.6)" }}
          >
            <h3 className="font-display font-bold text-base text-foreground mb-2">
              Retail Is Retirement
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most salon owners work in their business for 20 years and have
              nothing to show for it because they never built the retail habit.
              A client spending $50/month on products is worth{" "}
              <strong>$600/year in near-pure profit</strong>: without booking
              another appointment. Multiply that across 100 clients and you have
              a $60,000/year revenue stream that requires zero additional labor.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
