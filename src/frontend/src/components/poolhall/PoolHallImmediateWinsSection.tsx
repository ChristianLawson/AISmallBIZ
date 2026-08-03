import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Post Harassment-Free Zone Signage",
    action:
      'Put up "Mansplaining-Free Zone" and anti-harassment signs throughout the hall. Post your 8 house rules clearly at every table and near the bar.',
    impact:
      "Immediate atmosphere shift: women notice it within seconds of entering",
  },
  {
    day: 2,
    title: "Brief All Staff on Harassment Protocol",
    action:
      "Conduct a 20-minute team meeting on how to handle harassment incidents swiftly and professionally. Activate and test all security cameras.",
    impact: "Staff confidence + visible safety enforcement",
  },
  {
    day: 3,
    title: "Upgrade Atmosphere for Comfort",
    action:
      "Swap harsh overhead lights for warm atmospheric lighting. Add comfortable seating in social areas. Remove anything that feels unwelcoming.",
    impact:
      "Women rate comfort and atmosphere as top 2 reasons they stay or leave",
  },
  {
    day: 4,
    title: "Announce Free Pool Lessons on Social",
    action:
      'Post on Instagram, Facebook, and TikTok: free 15-minute pool lessons for women on the first Monday of every month. Use "Women Valued" messaging.',
    impact: "Viral reach + event sign-ups start flowing immediately",
  },
  {
    day: 5,
    title: "Reach Out to One Women's Organization",
    action:
      "Contact a local women's sports club, fitness studio, or community org. Offer a partnership: venue for their events, cross-promotion on social.",
    impact: "Opens a referral pipeline to a warm, pre-qualified audience",
  },
  {
    day: 6,
    title: "Set Up Ladies' Night Event",
    action:
      "Create a recurring Ladies' Night: discounted or free table time, themed cocktails, and a relaxed no-pressure atmosphere. Announce it this week.",
    impact: "Recurring events = recurring revenue and community building",
  },
  {
    day: 7,
    title: "Start Women's League Interest List",
    action:
      "Set up a physical sign-up sheet and a social media form for women interested in a regular league or tournament. Offer early-bird incentives.",
    impact:
      "Tangible demand signal: shows you are serious, builds anticipation",
  },
];

export function PoolHallImmediateWinsSection() {
  return (
    <section
      id="immediate-wins"
      data-ocid="poolhall-guide.immediate_wins_section"
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
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Seven concrete actions you can execute this week to start attracting
        more women players. Ordered by highest immediate impact.
      </p>

      <div className="relative">
        {/* Vertical timeline line */}
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
              data-ocid={`poolhall-guide.immediate_wins.item.${d.day}`}
            >
              {/* Day bubble */}
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
