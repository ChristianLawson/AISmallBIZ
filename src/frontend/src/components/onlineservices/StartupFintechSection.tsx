import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CreditCard, ExternalLink } from "lucide-react";

const STRIPE_ATLAS_SERVICES = [
  "Delaware C-Corp formation (VC-standard structure)",
  "U.S. Employer Identification Number (EIN)",
  "U.S. business bank account (via Mercury)",
  "Stripe payments: accept credit cards globally from day one",
  "Equity & cap table setup via Clerky integration",
  "R&D tax credit intro and startup legal templates",
];

const STRIPE_ATLAS_BENEFITS = [
  "Available to founders in 140+ countries",
  "One-time $500 fee covers the full package",
  "Directly connected to Stripe's global payments infrastructure",
  "The fastest path from idea to a legally operating U.S. business",
  "Backed by Stripe: the payments platform processing $1T+ annually",
  "Equity templates designed for VC fundraising from day one",
];

const WHO_ITS_FOR = [
  {
    label: "International Founders",
    body: "Non-U.S. entrepreneurs who need a U.S. entity to access American investors, enterprise customers, and payment processors.",
  },
  {
    label: "Digital Product Businesses",
    body: "SaaS, apps, and subscription businesses that need to accept payments globally with minimal friction from day one.",
  },
  {
    label: "VC-Track Startups",
    body: "Founders planning to raise from U.S. investors who require a Delaware C-Corp with standard equity documentation.",
  },
  {
    label: "Remote-First Companies",
    body: "Distributed teams that want the operational simplicity of one platform handling formation, banking, and payment infrastructure.",
  },
];

export function StartupFintechSection() {
  return (
    <section id="fintech" data-ocid="online-services-guide.fintech_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.50 0.14 200 / 0.12)" }}
        >
          <CreditCard size={20} style={{ color: "oklch(0.50 0.14 200)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.50 0.14 200 / 0.1)",
            color: "oklch(0.50 0.14 200)",
            border: "1px solid oklch(0.50 0.14 200 / 0.25)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Startup &amp; Fintech Tools
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Stripe Atlas is in a category of its own: it&apos;s not just formation,
        it&apos;s your complete financial infrastructure for an online business.
      </p>

      {/* Stripe Atlas Hero Card */}
      <Card
        className="overflow-hidden mb-10"
        style={{ border: "1px solid oklch(0.50 0.14 200 / 0.25)" }}
        data-ocid="online-services-guide.stripe_atlas_card"
      >
        <CardContent className="p-0">
          <div
            className="px-6 py-5"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.18 0.1 200 / 0.9) 0%, oklch(0.22 0.06 260 / 0.88) 100%)",
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(0.50 0.14 200 / 0.25)",
                      color: "oklch(0.82 0.1 200)",
                      border: "1px solid oklch(0.50 0.14 200 / 0.4)",
                    }}
                  >
                    Fintech
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(0.78 0.12 85 / 0.2)",
                      color: "oklch(0.92 0.12 85)",
                      border: "1px solid oklch(0.78 0.12 85 / 0.35)",
                    }}
                  >
                    Formation
                  </span>
                </div>
                <h3
                  className="font-display text-2xl font-bold"
                  style={{ color: "oklch(0.97 0.006 75)" }}
                >
                  Stripe Atlas
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "oklch(0.80 0.01 200)" }}
                >
                  Form a company, open a bank account, and start accepting
                  payments globally: all in one platform.
                </p>
              </div>
              <a
                href="https://stripe.com/atlas"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="online-services-guide.stripe_atlas_link"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:opacity-80 shrink-0"
                style={{
                  background: "oklch(0.50 0.14 200)",
                  color: "oklch(0.98 0.005 75)",
                }}
              >
                Visit Stripe Atlas <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
                Services Offered
              </p>
              <ul className="space-y-2">
                {STRIPE_ATLAS_SERVICES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      size={13}
                      className="mt-0.5 shrink-0"
                      style={{ color: "oklch(0.50 0.14 200)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
                Key Benefits
              </p>
              <ul className="space-y-2">
                {STRIPE_ATLAS_BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      size={13}
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
            className="px-6 py-4 border-t"
            style={{ borderColor: "oklch(0.50 0.14 200 / 0.2)" }}
          >
            <p className="text-sm font-semibold text-foreground mb-3">
              Who It&apos;s For
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {WHO_ITS_FOR.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-3"
                  style={{
                    background: "oklch(0.50 0.14 200 / 0.06)",
                    border: "1px solid oklch(0.50 0.14 200 / 0.15)",
                  }}
                >
                  <p className="text-xs font-bold text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Context callout */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.50 0.14 200 / 0.06)",
          border: "1px solid oklch(0.50 0.14 200 / 0.18)",
        }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">
            The Stripe Atlas Advantage:{" "}
          </span>
          While other formation services stop at filing paperwork, Stripe Atlas
          continues through banking and payments. For any business that collects
          money online, this end-to-end integration eliminates the most
          time-consuming part of launching: waiting for a business bank account.
          The combination of Delaware incorporation + Mercury bank account +
          Stripe payments is the standard infrastructure stack for modern online
          businesses.
        </p>
      </div>
    </section>
  );
}
