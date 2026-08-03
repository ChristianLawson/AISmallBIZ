import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp } from "lucide-react";

const STATS = [
  {
    stat: "67%",
    context:
      "of gym members in the US are women: yet most gyms market predominantly to men",
  },
  {
    stat: "41%",
    context:
      "of women report feeling judged at a gym: the #1 reason they cancel their membership",
  },
  {
    stat: "3x",
    context:
      "higher word-of-mouth referral rate from women who feel genuinely welcomed and respected",
  },
  {
    stat: "35%",
    context:
      "increase in new female enrollments when studios offer at least one women-only class option",
  },
];

const STRATEGIES = [
  {
    title: "Women-Only Class Slots",
    icon: "🧘",
    description:
      "Schedule at least 2-3 women-only sessions per week: beginner-friendly, female instructor preferred. The women-only format removes the intimidation barrier that prevents over 40% of women from trying group fitness.",
    actionSteps: [
      "Survey current female members to identify preferred time slots",
      "Promote women-only classes prominently on your website and scheduling app",
      "Offer a free first session to new female members for these slots",
    ],
  },
  {
    title: "Female Instructors Visible in All Marketing",
    icon: "📣",
    description:
      "Feature female instructors prominently in all social media, website imagery, and promotional materials. Representation signals 'this space is for you' instantly and without words.",
    actionSteps: [
      "Audit all current marketing materials: ensure at least 50% feature women",
      "Feature instructor spotlights monthly on Instagram with their personal fitness story",
      "Hire and promote female instructors into visible leadership positions",
    ],
  },
  {
    title: "Body-Positive Atmosphere Signage",
    icon: "🪧",
    description:
      "Replace weight-loss and aesthetics-focused language everywhere in your studio. Post clear 'No Unsolicited Advice' and 'All Bodies Welcome' signs in locker rooms, studio entrances, and at reception.",
    actionSteps: [
      "Replace 'Get your beach body' marketing with 'Get stronger, feel better' messaging",
      "Post clear house rules: no commenting on others' bodies, no unsolicited fitness advice",
      "Brief all instructors to use strength-based language, never size or appearance-based",
    ],
  },
  {
    title: "Flexible Scheduling for Moms",
    icon: "🕐",
    description:
      "Offer early morning (5:30-6:30 AM), lunchtime, and childcare-hour evening slots. Partner with a local daycare or offer supervised kids' space during peak mom scheduling windows: this alone can double female enrollment.",
    actionSteps: [
      "Add a 5:30 AM class 3 days per week targeted at working moms",
      "Partner with a nearby daycare for a referral program",
      "Create a 'Moms Who Move' social community group tied to your studio",
    ],
  },
  {
    title: "Partner with Women's Health Organizations",
    icon: "🤝",
    description:
      "Reach out to local women's health clinics, OB/GYN practices, postpartum support groups, and women's wellness coaches. These referral partnerships bring a pre-qualified, highly motivated audience.",
    actionSteps: [
      "Create a 'Referred by [Doctor/Org]' discount card to track partnership referrals",
      "Host a free workshop in partnership with a local women's health provider",
      "Join local women in business networks: networking leads to cross-promotion",
    ],
  },
  {
    title: "Celebrate Non-Scale Victories",
    icon: "🏆",
    description:
      "Build a culture that celebrates strength gains, class consistency, and confidence improvements: not weight loss. This reframes your studio as a place of empowerment, not a place of judgment, and creates powerful word-of-mouth.",
    actionSteps: [
      "Create a 'Wall of Wins': physical or digital: featuring member non-scale victories",
      "Shout out member milestones in your email newsletter and Instagram Stories",
      "Run a quarterly 'Strongest Version' campaign with member submissions",
    ],
  },
];

export function FitnessStudioAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="fitness-studio-guide.attracting_women_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <Heart size={20} style={{ color: "oklch(0.50 0.15 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.40 0.12 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.3)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting &amp; Retaining Women Members
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Industry-specific strategies to make your fitness studio the go-to
        destination for women in your community.
      </p>

      {/* Stats row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div
            key={s.stat}
            className="rounded-xl p-4 text-center"
            style={{
              background: "oklch(0.55 0.18 290 / 0.07)",
              border: "1px solid oklch(0.55 0.18 290 / 0.2)",
            }}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: "oklch(0.50 0.22 290)" }}
            >
              {s.stat}
            </div>
            <p className="text-xs text-muted-foreground leading-snug">
              {s.context}
            </p>
          </div>
        ))}
      </div>

      {/* Strategies */}
      <div className="space-y-5">
        {STRATEGIES.map((s, i) => (
          <Card
            key={s.title}
            className="hover:border-primary/30 transition-all duration-200"
            data-ocid={`fitness-studio-guide.attracting_women.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: "oklch(0.62 0.1 15 / 0.1)" }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <ul className="space-y-1">
                    {s.actionSteps.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <TrendingUp
                          size={12}
                          className="shrink-0 mt-0.5"
                          style={{ color: "oklch(0.50 0.22 290)" }}
                        />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
