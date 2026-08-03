import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

const METRICS = [
  {
    label: "Target Food Cost",
    value: "28-32%",
    detail:
      "of revenue. Above 35%: audit waste and portions. Below 25%: check quality.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    label: "Target Labor Cost",
    value: "28-35%",
    detail:
      "of revenue. Premium NYC market commands higher labor: invest in training and retention.",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    border: "oklch(0.78 0.12 85 / 0.25)",
  },
  {
    label: "Bar Program Contribution",
    value: "20-25%",
    detail:
      "of total revenue. A strong cocktail program is your highest-margin menu: 70-80% gross margin vs. 65-70% on food.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
];

const REVENUE_STREAMS = [
  {
    name: "Bar Program",
    margin: "70-80% gross margin",
    detail:
      "vs. 65-70% food margin: a strong cocktail menu is your most profitable menu",
  },
  {
    name: "Catering & Private Events",
    margin: "Premium pricing",
    detail:
      "advance payment, no walk-ins required: multiply your revenue without new seating",
  },
  {
    name: "Prix Fixe Menus",
    margin: "Higher avg. check",
    detail: "faster table turns, lower food waste, easier kitchen execution",
  },
  {
    name: "Merchandise (branded items)",
    margin: "60-70% margin",
    detail: "zero kitchen labor, brand ambassador marketing by customers",
  },
  {
    name: "Chef’s Table / Tasting Menu",
    margin: "Highest ticket",
    detail: "zero discounting, waiting list as social proof",
  },
  {
    name: "Gift Cards",
    margin: "Immediate cash",
    detail: "often unredeemed (40% breakage), new customer acquisition",
  },
  {
    name: "Meal Kits / Take-Home",
    margin: "Brand extension",
    detail:
      "extend the brand beyond the dining room, capture the ‘I want this at home’ moment",
  },
  {
    name: "Subscription / Membership",
    margin: "Predictable revenue",
    detail: "e.g. monthly wine club: loyalty lock-in, reduced acquisition cost",
  },
];

export function RestaurantFinancialSection() {
  return (
    <section id="financial" data-ocid="restaurant-guide.financial_section">
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
        The numbers that separate thriving NYC restaurants from those that close
        in Year 2. Know your benchmarks. Run your costs.
      </p>

      {/* 3-metric grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-5"
            style={{ background: m.bg, border: `1px solid ${m.border}` }}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: m.color }}
            >
              {m.value}
            </div>
            <div
              className="font-semibold text-sm mb-1"
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
        High-Margin Revenue Streams
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {REVENUE_STREAMS.map((stream, i) => (
          <Card
            key={stream.name}
            style={{
              background:
                i % 4 === 0 || i % 4 === 3
                  ? "oklch(0.28 0.12 330 / 0.04)"
                  : "oklch(0.985 0.006 75)",
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
                >
                  <TrendingUp
                    size={12}
                    style={{ color: "oklch(0.55 0.14 85)" }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-foreground">
                      {stream.name}
                    </span>
                    <Badge
                      className="text-xs py-0"
                      style={{
                        background: "oklch(0.78 0.12 85 / 0.18)",
                        color: "oklch(0.45 0.1 85)",
                        border: "none",
                      }}
                    >
                      {stream.margin}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {stream.detail}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* James Beard insight */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.08)",
          border: "1px solid oklch(0.62 0.1 15 / 0.25)",
        }}
      >
        <h3
          className="font-semibold text-base mb-2"
          style={{ color: "oklch(0.35 0.08 15)" }}
        >
          🏆 James Beard Foundation 2026
        </h3>
        <p className="text-sm text-muted-foreground">
          “Operators choosing smaller menus with discipline outperform complex
          menus on every metric: consistency, speed, morale, margins, and guest
          trust.”
        </p>
      </div>
    </section>
  );
}
