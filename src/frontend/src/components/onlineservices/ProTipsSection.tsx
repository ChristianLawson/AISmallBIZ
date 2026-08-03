import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const TIPS = [
  {
    number: "01",
    title: "Do not Over-Buy on Day One",
    body: "Start with the most affordable tier. ZenBusiness $0 plan and Northwest Registered Agent's flat fee are both excellent starting points. Upselling happens in Year 2 when you actually know what you need: not at signup when everything feels urgent.",
    saving: "Save $200-$500 at launch",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
  },
  {
    number: "02",
    title: "Use the Same Registered Agent for All States",
    body: "If you expand to multiple states, use one registered agent service (Northwest or BizFilings) for all of them. Managing separate agents in California, Texas, and New York is a compliance nightmare. Bundle pricing also cuts costs by 20-40%.",
    saving: "Save 20-40% on multi-state fees",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.05)",
  },
  {
    number: "03",
    title: "Apply for EIN Before Opening a Bank Account",
    body: "Your EIN (Employer Identification Number) is required to open a business bank account. ZenBusiness, BizFilings, and most formation services include EIN applications. Do not try to open a bank account with just an LLC filing number: you will hit a wall.",
    saving: "Avoid 1-2 week delays at banking",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.05)",
  },
  {
    number: "04",
    title: "Use Fiverr for Your First Logo: Not Your Brand System",
    body: "Fiverr is exceptional for getting a professional logo at $50-$150. But do not use it to build your entire brand identity. Use the logo as a starting point, then build your full brand system (colors, typography, voice) yourself or with a dedicated brand designer once you have revenue.",
    saving: "Save $1,000-$5,000 vs agencies",
    color: "oklch(0.38 0.1 50)",
    bg: "oklch(0.45 0.12 50 / 0.05)",
  },
  {
    number: "05",
    title: "Set Up Gusto Before Your First Hire, Not After",
    body: "The worst time to set up payroll is your employee's first week. Configure Gusto before you make an offer: have the onboarding portal ready, direct deposit connected, and tax info filed. Your first employee's experience sets the tone for your culture.",
    saving: "Avoid first-week payroll panic",
    color: "oklch(0.45 0.15 145)",
    bg: "oklch(0.55 0.16 145 / 0.05)",
  },
  {
    number: "06",
    title: "Trademark Your Name Before You Need To",
    body: "Once you have revenue and brand recognition, register your trademark through MyCorporation or a trademark attorney. The window when competitors can copy your name and legally force you to rebrand is the year you do not register. $350 federal filing is the cheapest insurance you will buy.",
    saving: "Avoid $10,000-$50,000 rebrand costs",
    color: "oklch(0.42 0.15 290)",
    bg: "oklch(0.42 0.15 290 / 0.05)",
  },
  {
    number: "07",
    title: "Use Rocket Lawyer for Your First Employee Agreement",
    body: "Employment agreements, IP assignment clauses, and offer letters drafted with attorney review are worth every penny of Rocket Lawyer's subscription. One poorly worded employment clause can cost 100x the subscription price in legal disputes. Document everything from day one.",
    saving: "Avoid costly employment disputes",
    color: "oklch(0.50 0.14 200)",
    bg: "oklch(0.50 0.14 200 / 0.05)",
  },
];

export function ProTipsSection() {
  return (
    <section id="pro-tips" data-ocid="online-services-guide.pro_tips_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Lightbulb size={20} style={{ color: "oklch(0.55 0.18 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.12)",
            color: "oklch(0.45 0.14 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.3)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Pro Tips &amp; Cost Savings
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Hard-won lessons from founders who used these platforms: what to buy,
        what to skip, and where to save real money.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {TIPS.map((tip) => (
          <Card
            key={tip.number}
            className="overflow-hidden"
            data-ocid={`online-services-guide.pro_tip.${tip.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-14 flex items-center justify-center"
                  style={{ background: tip.bg }}
                >
                  <span
                    className="font-display text-xl font-bold rotate-90 tracking-tight"
                    style={{ color: tip.color, opacity: 0.6 }}
                  >
                    {tip.number}
                  </span>
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {tip.body}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: tip.bg,
                      color: tip.color,
                      border: `1px solid ${tip.color}40`,
                    }}
                  >
                    <Lightbulb size={10} />
                    {tip.saving}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
