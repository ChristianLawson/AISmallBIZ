import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle, ExternalLink } from "lucide-react";

const SERVICES = [
  {
    name: "ZenBusiness",
    url: "https://www.zenbusiness.com",
    category: "Formation",
    stageBadge: "🌱 Startup",
    tagline: "The easiest way to start and run your business",
    services: [
      "LLC, Corporation & nonprofit formation",
      "Registered agent services",
      "Annual compliance reminders",
      "Business banking & credit card setup",
    ],
    benefits: [
      "Packages starting at $0 + state fee",
      "Fast 2-3 business day processing",
      "Dedicated ongoing compliance support",
      "Pairs with their business bank account service",
    ],
    bestFor:
      "First-time founders who want an all-in-one solution at the best price",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.18)",
    badgeColor: "oklch(0.28 0.12 330 / 0.1)",
  },
  {
    name: "Rocket Lawyer",
    url: "https://www.rocketlawyer.com",
    category: "Legal",
    stageBadge: "📈 Growing",
    tagline: "Legal made simple for businesses of all sizes",
    services: [
      "Business formation (LLC, Corp, DBA)",
      "500+ customizable legal document templates",
      "Attorney consultation on-demand",
      "Contract e-signing built in",
    ],
    benefits: [
      "Attorney network for real legal advice",
      "Documents auto-populated with your business info",
      "Subscription model with unlimited document creation",
      "Covers NDA, employment contracts, leases & more",
    ],
    bestFor:
      "Businesses that need ongoing legal documents beyond just formation",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
    border: "oklch(0.78 0.12 85 / 0.18)",
    badgeColor: "oklch(0.78 0.12 85 / 0.1)",
  },
  {
    name: "BizFilings",
    url: "https://www.bizfilings.com",
    category: "Formation",
    stageBadge: "🚀 Scaling",
    tagline: "Comprehensive formation and compliance for serious businesses",
    services: [
      "LLC, C-Corp, S-Corp, nonprofit formation",
      "Registered agent services in all 50 states",
      "Annual report compliance management",
      "EIN & tax ID applications",
    ],
    benefits: [
      "Wolters Kluwer-backed compliance expertise",
      "Automated compliance calendar & reminders",
      "Multi-state business expansion support",
      "Ideal for businesses planning to scale nationally",
    ],
    bestFor:
      "Growing businesses that need multi-state compliance and deep expertise",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.06)",
    border: "oklch(0.62 0.1 15 / 0.18)",
    badgeColor: "oklch(0.62 0.1 15 / 0.1)",
  },
  {
    name: "Northwest Registered Agent",
    url: "https://www.northwestregisteredagent.com",
    category: "Formation",
    stageBadge: "🌱 Startup",
    tagline: "Privacy-first formation with unmatched personal service",
    services: [
      "Business formation in all 50 states",
      "Registered agent: $125/yr flat (transparent pricing)",
      "Privacy protection: redacts personal info from public records",
      "Corporate kit, bylaws, meeting minutes templates",
    ],
    benefits: [
      "No hidden fees: ever",
      "Keeps your personal address off public records",
      "Actual humans answer support phones",
      "Local corporate guides for each state",
    ],
    bestFor:
      "Privacy-conscious founders who want personalized service without upsells",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.06)",
    border: "oklch(0.28 0.12 180 / 0.18)",
    badgeColor: "oklch(0.28 0.12 180 / 0.1)",
  },
  {
    name: "MyCorporation",
    url: "https://www.mycorporation.com",
    category: "Formation",
    stageBadge: "📈 Growing",
    tagline: "From sole prop to corporation: your full formation partner",
    services: [
      "LLC, S-Corp, C-Corp, nonprofit, DBA",
      "Trademark registration & monitoring",
      "Copyright registration assistance",
      "Ongoing compliance management",
    ],
    benefits: [
      "Broadest business structure options (including conversions)",
      "IP protection bundles with trademark + copyright",
      "Simple interface with guided setup wizard",
      "Good for businesses thinking about brand protection early",
    ],
    bestFor:
      "Entrepreneurs who want trademark and IP protection bundled with formation",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    badgeColor: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    name: "Swyft Filings",
    url: "https://www.swyftfilings.com",
    category: "Formation",
    stageBadge: "🌱 Startup",
    tagline: "Fast, affordable business formation without the friction",
    services: [
      "LLC, C-Corp, S-Corp, nonprofit formation",
      "Registered agent services",
      "EIN application processing",
      "Business name availability search",
    ],
    benefits: [
      "Quick 2-business-day standard processing",
      "Easy online wizard: takes under 10 minutes",
      "Competitive pricing across all package tiers",
      "Good mobile-friendly interface for on-the-go founders",
    ],
    bestFor: "Entrepreneurs who want speed and simplicity above all else",
    color: "oklch(0.42 0.15 290)",
    bg: "oklch(0.42 0.15 290 / 0.06)",
    border: "oklch(0.42 0.15 290 / 0.18)",
    badgeColor: "oklch(0.42 0.15 290 / 0.1)",
  },
  {
    name: "Clerky",
    url: "https://www.clerky.com",
    category: "Legal",
    stageBadge: "🚀 Scaling",
    tagline: "Built for startups raising venture capital",
    services: [
      "Delaware C-Corp incorporation (VC-standard)",
      "SAFE agreements & convertible notes",
      "Equity and option grant documentation",
      "Hiring paperwork & NDAs for startups",
    ],
    benefits: [
      "Designed specifically for VC-fundable startups",
      "Documents reviewed by startup attorneys",
      "Affordable flat fees vs. law firm hourly rates",
      "Trusted by 10,000+ YC-backed and funded startups",
    ],
    bestFor:
      "Tech startups and founders planning to raise venture capital or angel investment",
    color: "oklch(0.50 0.14 200)",
    bg: "oklch(0.50 0.14 200 / 0.06)",
    border: "oklch(0.50 0.14 200 / 0.18)",
    badgeColor: "oklch(0.50 0.14 200 / 0.1)",
  },
];

export function FormationServicesSection() {
  return (
    <section id="formation" data-ocid="online-services-guide.formation_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <Building2 size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
            border: "1px solid oklch(0.28 0.12 330 / 0.25)",
          }}
        >
          Section 2
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Business Formation &amp; Legal Services
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Seven platforms covering every business structure: from solo LLC to
        VC-fundable Delaware C-Corp. Choose based on your speed, budget, and
        legal needs.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((svc, idx) => (
          <Card
            key={svc.name}
            className="overflow-hidden"
            style={{ border: `1px solid ${svc.border}` }}
            data-ocid={`online-services-guide.formation_service.${idx + 1}`}
          >
            <CardContent className="p-0">
              <div className="px-5 py-4" style={{ background: svc.bg }}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: svc.color }}
                  >
                    {svc.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.55 0.14 85 / 0.12)",
                        color: "oklch(0.40 0.10 85)",
                        border: "1px solid oklch(0.55 0.14 85 / 0.25)",
                      }}
                    >
                      {svc.stageBadge}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: svc.badgeColor,
                        color: svc.color,
                        border: `1px solid ${svc.border}`,
                      }}
                    >
                      {svc.category}
                    </span>
                    <a
                      href={svc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`online-services-guide.formation_service_link.${idx + 1}`}
                      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 hover:opacity-80"
                      style={{
                        background: svc.color,
                        color: "oklch(0.98 0.005 75)",
                      }}
                    >
                      Visit <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  {svc.tagline}
                </p>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">
                    Services Offered
                  </p>
                  <ul className="space-y-1.5">
                    {svc.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle
                          size={12}
                          className="mt-0.5 shrink-0"
                          style={{ color: svc.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">
                    Key Benefits
                  </p>
                  <ul className="space-y-1.5">
                    {svc.benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle
                          size={12}
                          className="mt-0.5 shrink-0"
                          style={{ color: "oklch(0.55 0.16 145)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="px-5 py-3 border-t"
                style={{ borderColor: svc.border, background: svc.bg }}
              >
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold" style={{ color: svc.color }}>
                    Best for:{" "}
                  </span>
                  {svc.bestFor}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
