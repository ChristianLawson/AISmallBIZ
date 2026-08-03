import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, DollarSign, Sparkles, TrendingUp, Users } from "lucide-react";

const STATS = [
  {
    value: "$127→$183",
    label: "Avg ticket jump in 14 months (Nick Mirabella)",
  },
  { value: "70%", label: "Revenue from top 20% of clients" },
  { value: "10,000+", label: "Marketing messages consumers see daily" },
  {
    value: "20-30%",
    label: "Profit margin on retail products: zero extra time",
  },
];

const KEY_LESSONS = [
  {
    icon: DollarSign,
    title: "Premium Branding = Premium Pricing",
    body: '"Good stylist" is no longer enough. Nick Mirabella\'s 30 years coaching salon owners reveals one truth: premium branding is what lets you charge what you are worth. The average ticket at coached salons jumped from $127 to $183 in 14 months with zero new clients added.',
    callout: true,
  },
  {
    icon: Users,
    title: "Know Your 20%",
    body: "20% of clients generate nearly 70% of revenue. Identify your ideal client, design every touchpoint for them, and protect that relationship fiercely. The rest of your marketing will follow.",
    callout: false,
  },
  {
    icon: Sparkles,
    title: "The Lifestyle Economy",
    body: "Consumers now value convenience, personalization, and high-tech experiences above all. Top salons in 2026 offer holistic wellness (mind/body/hair), science-backed treatments, and multisensory hospitality-inspired experiences.",
    callout: false,
  },
  {
    icon: TrendingUp,
    title: "Digital Twin = Physical Success",
    body: "Your online reputation is more important than your physical shopfront in 2026. When someone searches 'balayage near me,' they see your Google Business Profile first: not Instagram, not Yelp.",
    callout: false,
  },
  {
    icon: Award,
    title: "Retention Is Revenue",
    body: "Automated win-back campaigns, 'We miss you Sarah' messages, and pre-booking habits (never let a client leave without their next appointment) are the single biggest ROI drivers for salons. Staff retention = brand retention: when a master stylist leaves, they take their clients.",
    callout: false,
  },
];

const REAL_EXAMPLES = [
  { name: "Rita Hazan", insight: "Personalized color consultations" },
  { name: "MindBodyHair", insight: '"Mind, body, hair" philosophy' },
  { name: "Rescue Spa", insight: "Science-driven clean beauty" },
  { name: "Drybar", insight: "Membership model: democratizing luxury" },
  {
    name: "Green Circle Salons",
    insight: "Sustainability as business requirement",
  },
];

export function SalonWhySucceedSection() {
  return (
    <section id="why-succeed" data-ocid="salon-guide.why_succeed_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
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
        Why Top NYC Salons Succeed in 2026
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        The salons that thrive share specific, learnable patterns: backed by
        decades of real coaching data and research.
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div
            key={s.value}
            className="text-center p-4 rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.28 0.12 330 / 0.07) 0%, oklch(0.78 0.12 85 / 0.07) 100%)",
              border: "1px solid oklch(0.28 0.12 330 / 0.12)",
            }}
          >
            <div
              className="font-display text-xl md:text-2xl font-bold leading-tight"
              style={{ color: "oklch(0.28 0.12 330)" }}
            >
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Key Lessons */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {KEY_LESSONS.map((lesson) => (
          <Card
            key={lesson.title}
            className="overflow-hidden"
            style={{
              border: lesson.callout
                ? "2px solid oklch(0.78 0.12 85 / 0.5)"
                : undefined,
              background: lesson.callout
                ? "oklch(0.78 0.12 85 / 0.06)"
                : undefined,
            }}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: lesson.callout
                      ? "oklch(0.78 0.12 85 / 0.18)"
                      : "oklch(0.28 0.12 330 / 0.1)",
                  }}
                >
                  <lesson.icon
                    size={16}
                    style={{
                      color: lesson.callout
                        ? "oklch(0.55 0.14 85)"
                        : "oklch(0.28 0.12 330)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {lesson.callout && (
                      <span
                        className="inline-block text-xs font-bold px-2 py-0.5 rounded mr-2"
                        style={{
                          background: "oklch(0.78 0.12 85 / 0.2)",
                          color: "oklch(0.45 0.1 85)",
                        }}
                      >
                        ★ Research-Backed
                      </span>
                    )}
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.body}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real Examples */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.62 0.1 15 / 0.06) 0%, oklch(0.28 0.12 330 / 0.04) 100%)",
          border: "1px solid oklch(0.62 0.1 15 / 0.2)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          NYC Salons Leading the Way
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {REAL_EXAMPLES.map((ex) => (
            <div
              key={ex.name}
              className="p-3 rounded-xl"
              style={{ background: "oklch(0.985 0.006 75 / 0.8)" }}
            >
              <div
                className="font-semibold text-sm mb-0.5"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {ex.name}
              </div>
              <div className="text-xs text-muted-foreground">{ex.insight}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Retail margin alert */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.08)",
          border: "1px solid oklch(0.62 0.1 15 / 0.25)",
        }}
      >
        <h3
          className="font-semibold text-base mb-2"
          style={{ color: "oklch(0.35 0.08 15)" }}
        >
          💰 Margin Alert: The Hidden Revenue You&apos;re Ignoring
        </h3>
        <p className="text-sm text-muted-foreground">
          Retail products carry{" "}
          <strong>20-30% profit margin with ZERO extra service time</strong>.
          Most salons ignore this revenue entirely. A client who buys $50/month
          in retail products is worth $600/year in near-pure profit: without
          booking another appointment.
        </p>
      </div>
    </section>
  );
}
