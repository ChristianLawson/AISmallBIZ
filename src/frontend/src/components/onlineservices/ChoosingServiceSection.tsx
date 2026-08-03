import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const SCENARIOS = [
  {
    scenario:
      "Starting a local service business (restaurant, salon, retail, deli)",
    recommendation: "ZenBusiness or Swyft Filings",
    reason:
      "Affordable, fast LLC formation with ongoing compliance support. You do not need a C-Corp or VC-ready structure: an LLC protects you and is much simpler.",
    avoid:
      "Stripe Atlas (overkill for a local business), Clerky (built for tech startups)",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.18)",
  },
  {
    scenario: "Solo freelancer or consultant (designer, marketer, coach)",
    recommendation: "Northwest Registered Agent + Fiverr (for client work)",
    reason:
      "NW Registered Agent protects your home address and provides excellent support. Fiverr lets you outsource tasks outside your expertise without overhead.",
    avoid:
      "Gusto (unnecessary until you hire employees), Stripe Atlas (unless you want U.S. banking)",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
    border: "oklch(0.78 0.12 85 / 0.18)",
  },
  {
    scenario: "Tech startup planning to raise angel or venture capital",
    recommendation: "Stripe Atlas or Clerky",
    reason:
      "Both handle Delaware C-Corp formation with VC-standard equity documents. Stripe Atlas adds banking + payments. Clerky is better if you are already using a different bank.",
    avoid:
      "ZenBusiness or Swyft (LLC structure will not work for VC fundraising)",
    color: "oklch(0.50 0.14 200)",
    bg: "oklch(0.50 0.14 200 / 0.06)",
    border: "oklch(0.50 0.14 200 / 0.18)",
  },
  {
    scenario: "E-commerce or online subscription business",
    recommendation: "Stripe Atlas + Gusto (when you hire)",
    reason:
      "Stripe Atlas gives you the payment infrastructure to accept money globally from day one. Add Gusto when you bring on your first W-2 employee.",
    avoid:
      "BizFilings (better for compliance-heavy industries, not pure e-commerce)",
    color: "oklch(0.55 0.16 145)",
    bg: "oklch(0.55 0.16 145 / 0.06)",
    border: "oklch(0.55 0.16 145 / 0.18)",
  },
  {
    scenario:
      "Business needing legal documents, contracts, and attorney access",
    recommendation: "Rocket Lawyer",
    reason:
      "The only platform with on-demand attorney consultations, not just document templates. If you need an employment agreement, NDA, or lease reviewed, Rocket Lawyer beats DIY templates.",
    avoid:
      "None of the other services offer attorney access at this price point",
    color: "oklch(0.42 0.15 290)",
    bg: "oklch(0.42 0.15 290 / 0.06)",
    border: "oklch(0.42 0.15 290 / 0.18)",
  },
  {
    scenario:
      "Business scaling to multiple states or needing trademark protection",
    recommendation: "BizFilings + MyCorporation",
    reason:
      "BizFilings handles multi-state registered agent filings and compliance. MyCorporation adds trademark registration to protect your brand as you expand.",
    avoid:
      "ZenBusiness or Swyft (adequate for single-state but limited for multi-state scaling)",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
  },
];

export function ChoosingServiceSection() {
  return (
    <section id="choosing" data-ocid="online-services-guide.choosing_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.12)" }}
        >
          <HelpCircle size={20} style={{ color: "oklch(0.45 0.1 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.1)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.25)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Choosing the Right Service
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        No single platform is best for everyone. Here&apos;s the decision guide
        : matched to your actual situation, not a generic comparison chart.
      </p>

      <div className="space-y-5">
        {SCENARIOS.map((item, idx) => (
          <Card
            key={item.scenario}
            className="overflow-hidden"
            style={{ border: `1px solid ${item.border}` }}
            data-ocid={`online-services-guide.scenario.${idx + 1}`}
          >
            <CardContent className="p-0">
              <div className="px-5 py-4" style={{ background: item.bg }}>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: item.color }}
                >
                  Scenario {idx + 1}
                </p>
                <h3 className="font-display text-base font-bold text-foreground">
                  {item.scenario}
                </h3>
              </div>
              <div className="p-5 space-y-3">
                <div
                  className="rounded-lg p-3"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: item.color }}
                  >
                    Recommended
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {item.recommendation}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
                <div
                  className="rounded-lg p-3"
                  style={{
                    background: "oklch(0.96 0.006 50 / 0.5)",
                    border: "1px solid oklch(0.88 0.01 50)",
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1 text-muted-foreground">
                    Skip / Avoid
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.avoid}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
