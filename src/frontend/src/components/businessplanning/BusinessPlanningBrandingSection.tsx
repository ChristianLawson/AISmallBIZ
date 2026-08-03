import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Empathy",
    subtitle: "Plan Around Your Customer's Life, Not Your Vision",
    body: "Before writing a single financial projection, Appreciated Branding asks: what does my target customer actually need? What frustrates them about their current options? What would make them feel genuinely helped? A business plan built on deep customer empathy: validated through real conversations, not assumptions: is exponentially more likely to succeed than one built around a product the owner loves.",
    example:
      "Interview 10 potential customers before finalizing your business plan. Ask about frustrations, not preferences. Build their answers into your value proposition.",
  },
  {
    number: "02",
    title: "Authenticity",
    subtitle: "Your Story Is Your Competitive Advantage",
    body: "Two coffee shops. Same espresso. Same neighborhood. Same prices. The one that survives is the one whose story resonates. Why did you start this? What do you believe that your competitors do not? Authenticity in your business plan means building your origin story, your values, and your brand voice into the foundation: not as marketing copy, but as actual operating principles that guide every decision.",
    example:
      "Write your brand story in 200 words. It should answer: who you are, why you started this, what you believe, and who you are doing it for. This becomes your north star.",
  },
  {
    number: "03",
    title: "Customer-Centricity",
    subtitle: "Design Every Process Around the Customer Experience",
    body: "Most business plans design operations for efficiency. Appreciated Branding designs operations for experience. Every process: from how you answer the phone to how you handle a complaint to how you package your product: is a touchpoint. Small businesses that build customer-centric processes into their plan from the beginning do not need to retrofit culture later. It is already baked in.",
    example:
      "For each key business process, ask: how does this feel from the customer's perspective? Redesign the ones that prioritize internal convenience over customer experience.",
  },
  {
    number: "04",
    title: "Emotional Connection",
    subtitle: "Brand Equity Is a Balance Sheet Item",
    body: "Traditional business plans value physical assets and revenue. Appreciated Branding treats brand equity as a financial asset: because it is. A loyal customer base built on emotional connection generates more predictable revenue, higher lifetime value, and lower acquisition costs than any marketing campaign. Build brand-building activities into your business plan with the same seriousness as your financial projections.",
    example:
      "Add a 'brand equity' section to your business plan. Include customer loyalty metrics, referral rate targets, and community engagement goals alongside your financial KPIs.",
  },
  {
    number: "05",
    title: "Consistency",
    subtitle: "Build Systems That Guarantee Your Brand Promise",
    body: "The promise your brand makes: in your marketing, your story, your values: must be delivered consistently by every person in your business every day. This does not happen by accident. It happens through training, culture, and systems. Your business plan should include brand standards, onboarding procedures, and quality checks that make consistent delivery inevitable, not aspirational.",
    example:
      "Write your brand promise in one sentence. Then list the three operational systems that must work perfectly every day to deliver it. Build those systems before you build anything else.",
  },
];

export function BusinessPlanningBrandingSection() {
  return (
    <section id="branding" data-ocid="business-planning.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <Users size={20} style={{ color: "oklch(0.38 0.1 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.3)",
          }}
        >
          Appreciated Branding
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding: Build a Brand Into Your Business Plan From Day One
      </h2>
      <p className="text-muted-foreground text-lg mb-1 max-w-2xl">
        Reid Holmes' Appreciated Branding framework, applied to business
        planning from the ground up.
      </p>
      <p className="text-sm mb-6" style={{ color: "oklch(0.45 0.08 15)" }}>
        By Reid Holmes &mdash; from{" "}
        <em>Appreciated Branding: This Is The Way</em>
      </p>

      {/* Pull quote */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4"
        style={{
          background: "oklch(0.62 0.1 15 / 0.07)",
          border: "1px solid oklch(0.62 0.1 15 / 0.2)",
        }}
      >
        <Quote
          size={32}
          className="shrink-0"
          style={{ color: "oklch(0.62 0.1 15 / 0.4)" }}
        />
        <div>
          <p
            className="font-display text-lg font-semibold italic leading-relaxed"
            style={{ color: "oklch(0.28 0.08 15)" }}
          >
            &ldquo;The businesses that last aren&rsquo;t the ones with the best
            products. They&rsquo;re the ones that built a reason to be loved
            into every decision from day one.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &mdash; Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      {/* 5 Pillars */}
      <div className="space-y-5">
        {PILLARS.map((p) => (
          <Card
            key={p.number}
            className="overflow-hidden"
            data-ocid={`business-planning.branding_pillar.${p.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: "oklch(0.28 0.12 330 / 0.08)" }}
                >
                  <span
                    className="font-display text-2xl font-bold rotate-90 tracking-tight"
                    style={{ color: "oklch(0.28 0.12 330 / 0.5)" }}
                  >
                    {p.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <div className="mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {p.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.38 0.1 15)" }}
                    >
                      {p.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {p.body}
                  </p>
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: "oklch(0.62 0.1 15 / 0.07)",
                      borderLeft: "3px solid oklch(0.62 0.1 15 / 0.4)",
                    }}
                  >
                    <strong style={{ color: "oklch(0.35 0.08 15)" }}>
                      Apply this:
                    </strong>{" "}
                    <span className="text-muted-foreground">{p.example}</span>
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
