import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, Smartphone, Star, TrendingUp } from "lucide-react";

const STATS = [
  { value: "130+", label: "Years Katz's has operated" },
  { value: "70,000", label: "Lbs of meat served weekly" },
  { value: "$17M", label: "Air rights sold to fund expansion" },
  { value: "1B+", label: "Total views on Prospect Park Deli content" },
];

const KEY_LESSONS = [
  {
    icon: Heart,
    title: "Authentic Emotional Connections",
    body: "The delis that outlast everyone else are not just selling food: they are selling belonging. Customers return because of how your deli makes them feel. Storytelling, warmth, and genuine care create bonds that no coupon can replicate.",
  },
  {
    icon: Building2,
    title: "Own Your Real Estate",
    body: "This is the single most important factor in deli survival. Katz's and Carnegie Deli survived because they own their buildings. Stage Deli and 2nd Avenue Deli closed when rent became untenable. If you are renting, that is your existential risk.",
    callout: true,
  },
  {
    icon: TrendingUp,
    title: "Consistency Is a Competitive Weapon",
    body: "Katz's 30-day slow-cured pastrami, same recipe since 1888. Hand-carved: too tender for a slicer. This unwavering consistency is what earns the devotion of 4,000 customers on their busiest days and inspires guests to fly in from California and overseas.",
  },
  {
    icon: Smartphone,
    title: "Entertainment-First Content",
    body: "Prospect Park Deli's wagyu chopped cheese went viral with 1B+ views across TikTok and YouTube. Their secret? As Yazen Odeh puts it: 'The videos are not really about food: it is about the guest.' Customers flew from Chicago, California, and overseas to visit after watching.",
  },
  {
    icon: Star,
    title: "Menu Architecture: 60/40 Rule",
    body: "The most successful NYC delis run 60-70% proven anchor items plus 30-40% rotating innovation slots. This preserves what regulars love while keeping things fresh. Rotating experiments every 4-8 weeks generate buzz without disrupting core identity.",
  },
];

export function DeliWhySucceedSection() {
  return (
    <section id="why-succeed" data-ocid="deli-guide.why_succeed_section">
      {/* Header */}
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
        Why Top NYC Delis Succeed in 2026
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        The delis that thrive share specific, learnable patterns. Here is the
        complete playbook distilled from NYC's most enduring operators.
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
              className="font-display text-2xl md:text-3xl font-bold"
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
                        ★ Critical
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

      {/* Katz's Deep Dive */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.08) 0%, oklch(0.22 0.08 330 / 0.06) 100%)",
          border: "1px solid oklch(0.28 0.12 330 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display font-bold text-lg text-foreground">
            Case Study: Katz's Deli
          </span>
          <Badge
            style={{
              background: "oklch(0.28 0.12 330)",
              color: "oklch(0.97 0.006 75)",
            }}
          >
            Founded 1888
          </Badge>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ["30-day cure", "Slow-cured pastrami: same process since 1888"],
            ["Hand-carved", "Too tender for a slicer: quality you can taste"],
            [
              "40,000 lbs/wk",
              "Pastrami alone. Plus 20,000 lbs corned beef weekly",
            ],
            [
              "4,000 customers",
              "On peak days. A line before they unlock the door",
            ],
            [
              "$3.3M building",
              "Owned, not rented. Then sold air rights for ~$17M",
            ],
            [
              "National shipping",
              "Ships nationwide via Square: revenue beyond the counter",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-3 rounded-xl"
              style={{ background: "oklch(0.97 0.006 75 / 0.6)" }}
            >
              <div
                className="font-semibold text-sm mb-0.5"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {title}
              </div>
              <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
        <blockquote
          className="mt-6 pl-4 border-l-2 italic text-muted-foreground text-sm"
          style={{ borderColor: "oklch(0.78 0.12 85)" }}
        >
          The real estate lesson is brutal and clear: delis that rent, close.
          Delis that own, survive.
        </blockquote>
      </div>

      {/* Profit Centers callout */}
      <div
        className="mt-6 rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.08)",
          border: "1px solid oklch(0.62 0.1 15 / 0.25)",
        }}
      >
        <h3
          className="font-semibold text-base mb-2"
          style={{ color: "oklch(0.35 0.08 15)" }}
        >
          💡 The Real Profit Centers Are Not the Sandwich
        </h3>
        <p className="text-sm text-muted-foreground">
          Pastrami on rye runs 5-15% margins. The real profits come from{" "}
          <strong>
            latkes, coleslaw, matzo ball soup, Dr. Brown&#39;s sodas, pickle
            platters, and catering
          </strong>{" "}
          : these run 60-70% margins. Your sandwich is the loss leader. Your
          sides and drinks are the business.
        </p>
      </div>
    </section>
  );
}
