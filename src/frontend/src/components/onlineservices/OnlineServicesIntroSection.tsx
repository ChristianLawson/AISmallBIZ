import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const STATS = [
  {
    metric: "73%",
    label: "Cost Reduction",
    detail:
      "Small businesses using online formation services save up to 73% vs hiring a traditional attorney for basic formation tasks.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    metric: "2-5 Days",
    label: "Average Formation Time",
    detail:
      "Online services like ZenBusiness and Swyft Filings can form your LLC or corporation in as little as 48 hours with expedited processing.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
  },
  {
    metric: "10 Services",
    label: "Covered in This Guide",
    detail:
      "From legal formation and HR to payments and freelance talent: these 10 platforms cover virtually every operational need at launch.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
  {
    metric: "$0-$199",
    label: "Starting Price Range",
    detail:
      "Most services have free tiers or low-cost starter plans. You can form an LLC and get compliant for under $200 in most U.S. states.",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
  },
];

const WHY_ITEMS = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Speed to Market: Launch in Days, Not Months",
    body: "In 2026, waiting weeks for a lawyer to form your business is unnecessary. Platforms like ZenBusiness and Swyft Filings automate state filings, registered agent setup, and compliance calendars so you can be operational in days. Every day your business is not legally formed is a day you cannot open a business bank account, sign contracts, or process payments.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    accent: "oklch(0.28 0.12 330 / 0.3)",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Compliance Without the Overwhelm",
    body: "The #1 reason small businesses get fined or dissolved is missing a filing deadline: not bad products or poor service. Services like BizFilings and Northwest Registered Agent send compliance reminders, handle annual reports, and keep your registered agent status current. You focus on running the business; they keep the legal lights on.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.05)",
    accent: "oklch(0.78 0.12 85 / 0.3)",
  },
  {
    number: "03",
    icon: Globe,
    title: "Global Reach From Day One",
    body: "Stripe Atlas changed the game for founders worldwide. Non-U.S. entrepreneurs can now form a Delaware C-Corp, open a U.S. bank account, and start accepting Stripe payments globally: all from one platform. What used to require a U.S. attorney, a U.S. resident, and months of paperwork now takes a weekend.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.05)",
    accent: "oklch(0.62 0.1 15 / 0.3)",
  },
  {
    number: "04",
    icon: Zap,
    title: "Talent and Execution, Instantly",
    body: "Fiverr puts 4+ million freelancers at your fingertips for logos, websites, marketing copy, social content, and more: without hiring full-time staff. Gusto handles your entire payroll, benefits, and onboarding workflow from one dashboard the moment you hire your first employee. The operational infrastructure that once required a full HR department now runs on autopilot.",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.05)",
    accent: "oklch(0.28 0.12 180 / 0.3)",
  },
];

export function OnlineServicesIntroSection() {
  return (
    <section id="why-online" data-ocid="online-services-guide.intro_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <Globe size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
            border: "1px solid oklch(0.28 0.12 330 / 0.25)",
          }}
        >
          Section 1
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Why Use Online Services to Launch?
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The data is clear: founders who leverage specialized online platforms
        launch faster, stay compliant longer, and spend less getting there.
      </p>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-5"
            style={{ background: s.bg, border: `1px solid ${s.border}` }}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: s.color }}
            >
              {s.metric}
            </div>
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: s.color }}
            >
              {s.label}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {s.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Key insight callout */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.9) 0%, oklch(0.22 0.08 330 / 0.88) 100%)",
        }}
      >
        <p
          className="font-display text-xl font-semibold italic text-center leading-relaxed"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;The business owners winning in 2026 aren&apos;t smarter:
          they&apos;re better equipped. The right platforms turn a solo founder
          into a full-stack operation from day one.&rdquo;
        </p>
      </div>

      {/* 4 Why items */}
      <h3 className="font-display text-xl font-bold text-foreground mb-5">
        4 Reasons Online Services Are Non-Negotiable in 2026
      </h3>
      <div className="space-y-4">
        {WHY_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.number}
              className="overflow-hidden"
              data-ocid={`online-services-guide.why_item.${item.number}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="flex-none w-16 flex items-center justify-center"
                    style={{ background: item.bg }}
                  >
                    <span
                      className="font-display text-2xl font-bold rotate-90 tracking-tight"
                      style={{ color: item.color, opacity: 0.6 }}
                    >
                      {item.number}
                    </span>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} style={{ color: item.color }} />
                      <h4 className="font-display font-bold text-base text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
