import { ExternalLink } from "lucide-react";

const SERVICES = [
  {
    name: "ZenBusiness",
    url: "https://www.zenbusiness.com",
    price: "$0 + state fee",
    speed: "2-3 business days",
    compliance: "✅ Full support",
    stage: "🌱 Startup",
  },
  {
    name: "Rocket Lawyer",
    url: "https://www.rocketlawyer.com",
    price: "From $39.99/mo",
    speed: "3-5 business days",
    compliance: "✅ Legal docs",
    stage: "📈 Growing",
  },
  {
    name: "BizFilings",
    url: "https://www.bizfilings.com",
    price: "From $99 + state",
    speed: "3-5 business days",
    compliance: "✅ Multi-state",
    stage: "🚀 Scaling",
  },
  {
    name: "Northwest",
    url: "https://www.northwestregisteredagent.com",
    price: "$39 + state fee",
    speed: "1-2 business days",
    compliance: "✅ Privacy focus",
    stage: "🌱 Startup",
  },
  {
    name: "MyCorporation",
    url: "https://www.mycorporation.com",
    price: "From $79 + state",
    speed: "3-5 business days",
    compliance: "✅ + Trademark",
    stage: "📈 Growing",
  },
  {
    name: "Swyft Filings",
    url: "https://www.swyftfilings.com",
    price: "$0 + state fee",
    speed: "2 business days",
    compliance: "⚠️ Basic only",
    stage: "🌱 Startup",
  },
  {
    name: "Clerky",
    url: "https://www.clerky.com",
    price: "From $599 flat",
    speed: "3-5 business days",
    compliance: "✅ Startup legal",
    stage: "🚀 Scaling",
  },
  {
    name: "Stripe Atlas",
    url: "https://stripe.com/atlas",
    price: "$500 flat",
    speed: "1-2 weeks",
    compliance: "⚠️ Not primary",
    stage: "🚀 Scaling",
  },
  {
    name: "Gusto",
    url: "https://gusto.com",
    price: "From $40/mo",
    speed: "Same day setup",
    compliance: "✅ HR/payroll",
    stage: "📈 Growing",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com",
    price: "From $5/task",
    speed: "Varies by seller",
    compliance: "❌ Not applicable",
    stage: "🌱 Startup",
  },
];

export function ServiceComparisonTable() {
  return (
    <div
      className="rounded-2xl overflow-hidden mb-12"
      style={{ border: "1px solid oklch(0.28 0.12 330 / 0.18)" }}
      data-ocid="online-services-guide.comparison_table"
    >
      <div
        className="px-6 py-4"
        style={{
          background: "oklch(0.28 0.12 330 / 0.08)",
          borderBottom: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <h3
          className="font-display text-lg font-bold"
          style={{ color: "oklch(0.28 0.12 330)" }}
        >
          Side-by-Side Comparison
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Compare all 10 services at a glance
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr
              style={{
                background: "oklch(0.97 0.005 75)",
                borderBottom: "1px solid oklch(0.90 0.006 75)",
              }}
            >
              <th className="text-left px-4 py-3 font-semibold text-foreground w-32">
                Service
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Starting Price
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Formation Speed
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Compliance Support
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Best For Stage
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((svc, i) => (
              <tr
                key={svc.name}
                style={{
                  background:
                    i % 2 === 0
                      ? "oklch(0.99 0.003 75)"
                      : "oklch(0.97 0.005 75)",
                  borderBottom: "1px solid oklch(0.92 0.004 75)",
                }}
                data-ocid={`online-services-guide.comparison_row.${i + 1}`}
              >
                <td className="px-4 py-3 font-semibold text-foreground">
                  {svc.name}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{svc.price}</td>
                <td className="px-4 py-3 text-muted-foreground">{svc.speed}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {svc.compliance}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{svc.stage}</td>
                <td className="px-4 py-3">
                  <a
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-lg transition-colors duration-200 hover:opacity-80"
                    style={{
                      background: "oklch(0.28 0.12 330 / 0.1)",
                      color: "oklch(0.28 0.12 330)",
                    }}
                    data-ocid={`online-services-guide.comparison_link.${i + 1}`}
                  >
                    Visit <ExternalLink size={10} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
