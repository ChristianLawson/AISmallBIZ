import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ExternalLink, Users } from "lucide-react";

const GUSTO_SERVICES = [
  "Full-service payroll (direct deposit, tax filings)",
  "Employee benefits: health, dental, vision, 401(k)",
  "Hiring & onboarding automation",
  "Time tracking and PTO management",
  "Workers' comp insurance administration",
  "Contractor payments (1099s handled automatically)",
];

const GUSTO_BENEFITS = [
  "Automatic federal and state payroll tax filings",
  "Self-onboarding portal for new hires",
  "Benefits administration without an HR department",
  "Integrates with QuickBooks, Xero, and 100+ tools",
  "Loved by 300,000+ small businesses",
  "Simple, clean interface: not enterprise software",
];

const FIVERR_SERVICES = [
  "Logo design, branding kits & brand identity",
  "Website design and development",
  "Social media content creation & management",
  "Video production, editing & motion graphics",
  "Copywriting, SEO, and content marketing",
  "Business plan writing & financial modeling",
];

const FIVERR_BENEFITS = [
  "4+ million vetted freelancers worldwide",
  "Transparent pricing from $5 to enterprise projects",
  "Milestone-based payments protect your budget",
  "Freelancer reviews and portfolio visible before hiring",
  "Quick delivery on one-off tasks (logos, copy, ads)",
  "Business+ tier for priority support and dedicated accounts",
];

export function HRPayrollSection() {
  return (
    <section
      id="hr-payroll"
      data-ocid="online-services-guide.hr_payroll_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.16 145 / 0.12)" }}
        >
          <Users size={20} style={{ color: "oklch(0.45 0.15 145)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.16 145 / 0.1)",
            color: "oklch(0.45 0.15 145)",
            border: "1px solid oklch(0.55 0.16 145 / 0.25)",
          }}
        >
          Section 4
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        HR, Payroll &amp; Talent
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        From your first hire to a full freelance roster: these two platforms
        handle the people side of your business so you can focus on growth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Gusto */}
        <Card
          className="overflow-hidden"
          style={{ border: "1px solid oklch(0.55 0.16 145 / 0.25)" }}
          data-ocid="online-services-guide.gusto_card"
        >
          <CardContent className="p-0">
            <div
              className="px-5 py-4"
              style={{ background: "oklch(0.55 0.16 145 / 0.08)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-2"
                    style={{
                      background: "oklch(0.55 0.16 145 / 0.12)",
                      color: "oklch(0.45 0.15 145)",
                      border: "1px solid oklch(0.55 0.16 145 / 0.3)",
                    }}
                  >
                    HR
                  </span>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: "oklch(0.45 0.15 145)" }}
                  >
                    Gusto
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    The complete people platform for small businesses
                  </p>
                </div>
                <a
                  href="https://gusto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="online-services-guide.gusto_link"
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200 hover:opacity-80 shrink-0"
                  style={{
                    background: "oklch(0.45 0.15 145)",
                    color: "oklch(0.98 0.005 145)",
                  }}
                >
                  Visit <ExternalLink size={10} />
                </a>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">
                  Services Offered
                </p>
                <ul className="space-y-1.5">
                  {GUSTO_SERVICES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle
                        size={12}
                        className="mt-0.5 shrink-0"
                        style={{ color: "oklch(0.45 0.15 145)" }}
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
                  {GUSTO_BENEFITS.map((item) => (
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
              className="px-5 py-3 border-t text-xs text-muted-foreground"
              style={{
                borderColor: "oklch(0.55 0.16 145 / 0.2)",
                background: "oklch(0.55 0.16 145 / 0.04)",
              }}
            >
              <span
                className="font-semibold"
                style={{ color: "oklch(0.45 0.15 145)" }}
              >
                Best for:{" "}
              </span>
              Any business with W-2 employees or contractors that wants payroll
              on autopilot
            </div>
          </CardContent>
        </Card>

        {/* Fiverr */}
        <Card
          className="overflow-hidden"
          style={{ border: "1px solid oklch(0.45 0.12 50 / 0.25)" }}
          data-ocid="online-services-guide.fiverr_card"
        >
          <CardContent className="p-0">
            <div
              className="px-5 py-4"
              style={{ background: "oklch(0.45 0.12 50 / 0.08)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-2"
                    style={{
                      background: "oklch(0.45 0.12 50 / 0.12)",
                      color: "oklch(0.38 0.1 50)",
                      border: "1px solid oklch(0.45 0.12 50 / 0.3)",
                    }}
                  >
                    Freelance
                  </span>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: "oklch(0.38 0.1 50)" }}
                  >
                    Fiverr
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    On-demand freelance talent for every business need
                  </p>
                </div>
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="online-services-guide.fiverr_link"
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200 hover:opacity-80 shrink-0"
                  style={{
                    background: "oklch(0.38 0.1 50)",
                    color: "oklch(0.98 0.005 75)",
                  }}
                >
                  Visit <ExternalLink size={10} />
                </a>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">
                  Services Offered
                </p>
                <ul className="space-y-1.5">
                  {FIVERR_SERVICES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle
                        size={12}
                        className="mt-0.5 shrink-0"
                        style={{ color: "oklch(0.38 0.1 50)" }}
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
                  {FIVERR_BENEFITS.map((item) => (
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
              className="px-5 py-3 border-t text-xs text-muted-foreground"
              style={{
                borderColor: "oklch(0.45 0.12 50 / 0.2)",
                background: "oklch(0.45 0.12 50 / 0.04)",
              }}
            >
              <span
                className="font-semibold"
                style={{ color: "oklch(0.38 0.1 50)" }}
              >
                Best for:{" "}
              </span>
              Businesses needing logo, website, content, or marketing work
              without a full-time hire
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
