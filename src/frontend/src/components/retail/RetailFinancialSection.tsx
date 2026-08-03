import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

const METRICS = [
  {
    label: "Target Gross Margin",
    value: "50-65%",
    detail:
      "Industry benchmark for specialty retail. Below 45%: audit pricing and COGS immediately.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    label: "Inventory Turnover",
    value: "4-6x",
    detail:
      "Per year. Below 4x: dead stock is costing you cash flow and floor space. Above 6x: reorder faster.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    border: "oklch(0.78 0.12 85 / 0.2)",
  },
  {
    label: "E-Commerce Revenue",
    value: "20-40%",
    detail:
      "Of total revenue. Retailers without e-commerce in 2026 are invisible to 40-60% of their potential market.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
];

const REVENUE_STREAMS = [
  {
    name: "Private Label / Branded Products",
    margin: "60-70%",
    detail:
      "Differentiates from competitors, builds brand equity, and creates products only you can sell.",
    color: "oklch(0.28 0.12 330)",
  },
  {
    name: "E-Commerce",
    margin: "Variable",
    detail:
      "Extends geographic reach, enables 24/7 sales, and has lower overhead per transaction than in-store.",
    color: "oklch(0.45 0.1 85)",
  },
  {
    name: "Styling Services",
    margin: "80-90%",
    detail:
      "Time-based revenue with near-zero COGS. Drives higher purchase intent and dramatically increases basket size.",
    color: "oklch(0.35 0.08 15)",
  },
  {
    name: "Gift Services",
    margin: "70-80%",
    detail:
      "Wrapping, personal notes, concierge gifting. Drives gifting repeat business and word-of-mouth referrals.",
    color: "oklch(0.28 0.12 180)",
  },
  {
    name: "Events & Workshops",
    margin: "High",
    detail:
      "Premium pricing justified by exclusivity. Builds community and generates social content simultaneously.",
    color: "oklch(0.38 0.1 330)",
  },
  {
    name: "Consignment / Local Artisans",
    margin: "Zero inventory risk",
    detail:
      "Community-building, unique product offering, no upfront capital required. Pay only on sale.",
    color: "oklch(0.35 0.12 150)",
  },
  {
    name: "Loyalty Program",
    margin: "Retention asset",
    detail:
      "Reduces acquisition cost by 5-10x. Increases visit frequency and lifetime value without additional ad spend.",
    color: "oklch(0.28 0.12 330)",
  },
  {
    name: "Wholesale Channels",
    margin: "Lower, but volume",
    detail:
      "Volume without retail overhead. Builds brand in markets you do not physically occupy.",
    color: "oklch(0.45 0.1 85)",
  },
];

export function RetailFinancialSection() {
  return (
    <section id="financial" data-ocid="retail-guide.financial_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <DollarSign size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Financial Success Principles
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        NYC retail in 2026 demands four-wall profit discipline. Every square
        foot must earn its rent.
      </p>

      {/* 3 key metrics */}
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-5"
            style={{
              background: m.bg,
              border: `1px solid ${m.border}`,
            }}
            data-ocid={`retail-guide.financial_metric.${m.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: m.color }}
            >
              {m.value}
            </div>
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: m.color }}
            >
              {m.label}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      {/* High-margin revenue streams */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        High-Margin Revenue Streams to Build
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {REVENUE_STREAMS.map((stream) => (
          <div
            key={stream.name}
            className="rounded-xl p-4"
            style={{
              background: "oklch(0.985 0.006 75)",
              border: "1px solid oklch(0.9 0.006 75)",
              borderTop: `3px solid ${stream.color}`,
            }}
            data-ocid={`retail-guide.revenue_stream.${stream.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
          >
            <div
              className="font-semibold text-xs mb-1"
              style={{ color: stream.color }}
            >
              {stream.margin} margin
            </div>
            <div className="font-display font-bold text-sm text-foreground mb-2">
              {stream.name}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {stream.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Four-wall principle */}
      <div
        className="rounded-2xl p-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.9) 0%, oklch(0.22 0.1 30 / 0.88) 100%)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.82 0.14 85)" }}
        >
          The Four-Wall Profit Principle
        </div>
        <p
          className="font-display text-lg font-semibold italic leading-relaxed"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;Nobody is opening showrooms anymore. NYC retail in 2026 demands
          four-wall profit discipline: every square foot of your store must earn
          its rent. Kill the dead zones, kill the slow movers, kill the products
          that don&apos;t tell your brand&apos;s story.&rdquo;
        </p>
      </div>
    </section>
  );
}
