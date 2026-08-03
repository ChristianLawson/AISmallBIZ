import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Post Body-Positive & Non-Judgmental Zone Signage",
    action:
      "Put up welcoming, body-positive signs at the entrance, locker rooms, and near every major equipment area. Include a clear anti-harassment policy and a 'No Unsolicited Advice' notice.",
    impact:
      "Immediate trust signal: women report signage is the first thing they notice",
  },
  {
    day: 2,
    title: "Brief All Staff on Inclusive Culture Protocol",
    action:
      "Run a 20-minute team huddle on how to respond to intimidation incidents, how to give advice only when asked, and how to make every member feel welcome regardless of fitness level.",
    impact: "Staff confidence + visible culture enforcement from day one",
  },
  {
    day: 3,
    title: "Launch a Free Trial Class for Women",
    action:
      "Offer one free class to any woman who has never visited. Post it on Instagram and Facebook with 'No experience required: all bodies, all levels.' Create a simple sign-up link.",
    impact:
      "Removes the highest barrier: fear of judgment from being a beginner",
  },
  {
    day: 4,
    title: "Optimize Your Google My Business Profile",
    action:
      "Add photos of diverse members (with permission), update hours, add a description that explicitly mentions women-welcoming environment. Respond to every existing review within 24 hours.",
    impact:
      "40% of local fitness searches happen on Google Maps: this is your storefront",
  },
  {
    day: 5,
    title: "Reach Out to One Women's Organization",
    action:
      "Contact a local women's health group, mom's network, or workplace women's ERG. Offer a group class or facility tour at no cost. Ask them to share it with their members.",
    impact:
      "Opens a referral pipeline to a warm, pre-qualified audience of women",
  },
  {
    day: 6,
    title: "Create a Women-Only Class Slot",
    action:
      "Add at least one recurring women-only class to the schedule: beginner-friendly, taught by a female instructor if possible. Promote it prominently on your website and app.",
    impact:
      "Women-only options increase new female enrollments by an average of 35%",
  },
  {
    day: 7,
    title: "Set Up Email List from Sign-Ins",
    action:
      "Create a simple sign-up sheet (physical and digital) to capture names and emails of members and trial visitors. Offer a first-month discount incentive for signing up.",
    impact: "Your email list is your most valuable long-term marketing asset",
  },
];

export function FitnessStudioImmediateWinsSection() {
  return (
    <section
      id="quickstart"
      data-ocid="fitness-studio-guide.immediate_wins_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.15)" }}
        >
          <Zap size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.12)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.35)",
          }}
        >
          Section 1: Start Here
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        7-Day Immediate Wins Action Plan
      </h2>
      <p className="text-foreground/70 text-lg mb-8 max-w-2xl">
        Seven concrete actions you can execute this week to start attracting
        more women members to your fitness studio. Ordered by highest immediate
        impact.
      </p>

      <div className="relative">
        <div
          className="absolute left-[23px] top-0 bottom-0 w-0.5 hidden sm:block"
          style={{ background: "oklch(0.55 0.18 290 / 0.2)" }}
          aria-hidden="true"
        />
        <div className="space-y-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="relative flex gap-5 group"
              data-ocid={`fitness-studio-guide.immediate_wins.item.${d.day}`}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm z-10"
                style={{
                  background: "oklch(0.55 0.23 285)",
                  color: "#fff",
                  boxShadow: "0 0 0 4px oklch(0.55 0.18 290 / 0.15)",
                }}
              >
                Day {d.day}
              </div>
              <Card className="flex-1 border-primary/15 hover:border-primary/35 transition-all duration-200 hover:shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {d.action}
                  </p>
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{
                      background: "oklch(0.55 0.18 290 / 0.07)",
                      border: "1px solid oklch(0.55 0.18 290 / 0.2)",
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.50 0.22 290)" }}
                    />
                    <span style={{ color: "oklch(0.40 0.18 290)" }}>
                      <strong>Expected impact:</strong> {d.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
