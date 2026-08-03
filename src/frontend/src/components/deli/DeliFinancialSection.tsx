import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Package, TrendingUp } from "lucide-react";

const HIGH_MARGIN_ITEMS = [
  {
    item: "House-made lemonade",
    margin: "75-85%",
    note: "Add flavors seasonally",
  },
  {
    item: "Dr. Brown's sodas",
    margin: "65-75%",
    note: "Classic NYC deli pairing",
  },
  { item: "Latkes", margin: "70-80%", note: "Upsell with every sandwich" },
  {
    item: "Coleslaw",
    margin: "72-82%",
    note: "Make in-house, never buy pre-made",
  },
  { item: "Matzo ball soup", margin: "65-78%", note: "High ticket, low cost" },
  {
    item: "Pickle platter",
    margin: "80-90%",
    note: "House-brined = near 90% margin",
  },
  {
    item: "Signature chips",
    margin: "70-80%",
    note: "Branded bags drive repeat sales",
  },
  {
    item: "Catering packages",
    margin: "45-60%",
    note: "Highest absolute revenue item",
  },
];

export function DeliFinancialSection() {
  return (
    <section id="financial" data-ocid="deli-guide.financial_section">
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
            color: "oklch(0.3 0.1 150)",
            border: "1px solid oklch(0.55 0.14 150 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Financial Success for NYC Delis
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The sandwich is the draw. The sides, drinks, and catering are the
        business. Here is how the numbers actually work.
      </p>

      {/* Key financial metrics */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            metric: "28-35%",
            label: "Target food cost ratio",
            note: "Above 35%? Find your waste. Below 28%? Check your quality.",
            color: "oklch(0.35 0.12 150)",
            bg: "oklch(0.55 0.14 150 / 0.08)",
          },
          {
            metric: "5-15%",
            label: "Margin on pastrami on rye",
            note: "Your signature is a loss leader. The sides make the money.",
            color: "oklch(0.45 0.18 25)",
            bg: "oklch(0.55 0.2 25 / 0.08)",
          },
          {
            metric: "60-70%",
            label: "Margin on sides and drinks",
            note: "Latkes, coleslaw, Dr. Brown's, house-made lemonade.",
            color: "oklch(0.45 0.1 85)",
            bg: "oklch(0.78 0.12 85 / 0.1)",
          },
        ].map((item) => (
          <div
            key={item.metric}
            className="rounded-xl p-5"
            style={{
              background: item.bg,
              border: `1px solid ${item.color.replace(")", " / 0.2)")}`,
            }}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: item.color }}
            >
              {item.metric}
            </div>
            <div className="font-semibold text-sm text-foreground mb-1">
              {item.label}
            </div>
            <p className="text-xs text-muted-foreground">{item.note}</p>
          </div>
        ))}
      </div>

      {/* High-margin items table */}
      <Card className="mb-8">
        <CardContent className="p-5">
          <h3 className="font-semibold text-base text-foreground mb-4 flex items-center gap-2">
            <TrendingUp size={16} style={{ color: "oklch(0.35 0.12 150)" }} />
            High-Margin Items Every Deli Should Feature
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid oklch(0.90 0.006 75)",
                  }}
                >
                  <th className="text-left py-2 text-xs font-semibold text-muted-foreground">
                    Item
                  </th>
                  <th className="text-right py-2 text-xs font-semibold text-muted-foreground">
                    Margin
                  </th>
                  <th className="text-right py-2 text-xs font-semibold text-muted-foreground hidden sm:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {HIGH_MARGIN_ITEMS.map((row, i) => (
                  <tr
                    key={row.item}
                    style={{
                      borderBottom:
                        i < HIGH_MARGIN_ITEMS.length - 1
                          ? "1px solid oklch(0.90 0.006 75 / 0.5)"
                          : "none",
                    }}
                  >
                    <td className="py-2.5 text-foreground font-medium text-sm">
                      {row.item}
                    </td>
                    <td className="py-2.5 text-right">
                      <Badge
                        className="text-xs"
                        style={{
                          background: "oklch(0.55 0.14 150 / 0.12)",
                          color: "oklch(0.3 0.1 150)",
                          border: "none",
                        }}
                      >
                        {row.margin}
                      </Badge>
                    </td>
                    <td className="py-2.5 text-right text-xs text-muted-foreground hidden sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Catering */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
              <Package size={14} style={{ color: "oklch(0.35 0.12 150)" }} />
              Catering: The Revenue Multiplier
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Office catering, corporate events, and lunch orders are your
              highest-revenue, most-predictable income stream. One corporate
              account ordering 3x per week is worth more than 30 walk-in
              customers.
            </p>
            <ul className="space-y-1.5">
              {[
                'Build a "Corporate Catering" package with tiered pricing',
                "Target offices within a 5-block radius: door-to-door or email",
                "Create a QR-code order form that texts/emails you directly",
                "Event catering: weddings, bar mitzvahs, office parties",
                "Upsell: pickle platters, coleslaw tubs, Dr. Brown's cases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="text-xs mt-0.5 shrink-0"
                    style={{ color: "oklch(0.35 0.12 150)" }}
                  >
                    ✓
                  </span>
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Real estate */}
        <Card
          style={{
            border: "2px solid oklch(0.78 0.12 85 / 0.4)",
            background: "oklch(0.78 0.12 85 / 0.04)",
          }}
        >
          <CardContent className="p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3">
              ★ The Real Estate Rule: Non-Negotiable
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              This is the single most important long-term financial decision a
              NYC deli owner can make. The math is brutal:
            </p>
            <div className="space-y-2">
              {[
                {
                  label: "Renting",
                  verdict: "Existential risk",
                  detail:
                    "Rent increases 20-40% at lease renewal in prime NYC locations. Stage Deli, 2nd Avenue Deli: forced to close after decades.",
                  bad: true,
                },
                {
                  label: "Owning",
                  verdict: "Survival and scale",
                  detail:
                    "Katz's owns their building ($3.3M purchase) and sold air rights for ~$17M. Carnegie Deli survived decades of Manhattan pressure by owning.",
                  bad: false,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg p-3"
                  style={{
                    background: row.bad
                      ? "oklch(0.55 0.2 25 / 0.08)"
                      : "oklch(0.55 0.14 150 / 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: row.bad
                          ? "oklch(0.45 0.18 25)"
                          : "oklch(0.3 0.1 150)",
                      }}
                    >
                      {row.bad ? "✗" : "✓"} {row.label}
                    </span>
                    <Badge
                      className="text-xs py-0"
                      style={{
                        background: row.bad
                          ? "oklch(0.55 0.2 25 / 0.15)"
                          : "oklch(0.55 0.14 150 / 0.15)",
                        color: row.bad
                          ? "oklch(0.35 0.15 25)"
                          : "oklch(0.3 0.1 150)",
                        border: "none",
                      }}
                    >
                      {row.verdict}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{row.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
