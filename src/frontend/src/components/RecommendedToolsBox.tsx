import { ExternalLink } from "lucide-react";

const TOOLS = [
  {
    name: "Google My Business",
    href: "https://AFFILIATE_PLACEHOLDER/google-my-business",
    desc: "Boost your local search visibility",
  },
  {
    name: "Square",
    href: "https://AFFILIATE_PLACEHOLDER/square",
    desc: "Payments, POS, and business tools",
  },
  {
    name: "QuickBooks",
    href: "https://AFFILIATE_PLACEHOLDER/quickbooks",
    desc: "Accounting and financial management",
  },
  {
    name: "Canva",
    href: "https://AFFILIATE_PLACEHOLDER/canva",
    desc: "Design marketing materials easily",
  },
  {
    name: "Facebook Ads",
    href: "https://AFFILIATE_PLACEHOLDER/facebook-ads",
    desc: "Reach your ideal customers",
  },
  {
    name: "Toast POS",
    href: "https://AFFILIATE_PLACEHOLDER/toast-pos",
    desc: "Restaurant and retail point-of-sale",
  },
];

export function RecommendedToolsBox() {
  return (
    <div
      className="mt-8 rounded-xl p-5"
      style={{
        background: "oklch(0.55 0.14 85 / 0.06)",
        border: "1px solid oklch(0.55 0.14 85 / 0.2)",
      }}
      data-ocid="guide.recommended_tools"
    >
      <h3
        className="font-semibold text-sm mb-4"
        style={{ color: "oklch(0.40 0.10 85)" }}
      >
        🛠️ Recommended Free Tools
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {TOOLS.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`guide.tool_link.${tool.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors duration-150 group"
            style={{ border: "1px solid oklch(0.55 0.14 85 / 0.15)" }}
          >
            <div className="flex-1 min-w-0">
              <div
                className="font-semibold text-xs mb-0.5 group-hover:underline"
                style={{ color: "oklch(0.40 0.10 85)" }}
              >
                {tool.name}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.desc}
              </p>
            </div>
            <ExternalLink
              size={13}
              className="shrink-0 mt-0.5"
              style={{ color: "oklch(0.55 0.14 85 / 0.6)" }}
            />
          </a>
        ))}
      </div>
      <p className="text-xs text-zinc-400 mt-3 text-center">
        Some links may be affiliate links. We only recommend tools we trust.
      </p>
    </div>
  );
}
