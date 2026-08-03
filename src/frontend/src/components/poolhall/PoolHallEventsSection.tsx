import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

const EVENTS = [
  {
    title: "Free 15-Minute Pool Lessons for Women",
    cadence: "First Monday of every month",
    description:
      "Sign-up slots of 2-4 women per session. Teach stance, grip, aiming, cue ball control, and pool etiquette. Pair with a free drink or appetizer incentive.",
    impact:
      "Removes the biggest barrier to entry: skill intimidation. Beginners who take a lesson return within 2 weeks at 68% rate.",
    tips: [
      "Book sign-ups online + physical sheet at the bar",
      "Pair lessons with themed cocktail-making class for a full experience",
      "Post lesson clips on TikTok: instructor + student content performs extremely well",
    ],
  },
  {
    title: "Ladies' Night",
    cadence: "Weekly: recurring anchor event",
    description:
      "Discounted or free table time for women. Themed cocktails at happy hour pricing. A no-pressure, social atmosphere designed for enjoyment, not competition.",
    impact:
      "Recurring events build habit. After 3 Ladies' Nights, the majority of attendees become regular weekly visitors.",
    tips: [
      "Seasonal themes keep it fresh: spring floral, summer beach, fall harvest",
      "Cross-promote with local salons, fitness studios, women\u2019s groups",
      "Feature a 'WOW moment': a photogenic cocktail or dessert that drives social sharing",
    ],
  },
  {
    title: "Women-Only Tournament",
    cadence: "Quarterly",
    description:
      "Structured competition run by women, for women. Entry fee covers prizes, branded merch, and a post-tournament social event. Open skill levels.",
    impact:
      "Tournaments build skill, community, and prestige. Tournament players become your most loyal ambassadors.",
    tips: [
      "Partner with APA or local pool leagues for structure and credibility",
      "Award branded trophies + 8-ball engraved gifts",
      "Live-stream or document for social content: player reactions are gold",
    ],
  },
  {
    title: "Women\u2019s League",
    cadence: "Weekly: season-based (8-12 weeks)",
    description:
      "Regular competitive league with standings, team names, and end-of-season celebration. Frame it as a community, not just competition.",
    impact:
      "Leagues generate recurring weekly revenue from the same customer base. Season commitment means guaranteed footfall for 8-12 weeks straight.",
    tips: [
      'Name the league something empowering: "The Rack Pack," "Cue Queens," etc.',
      "Create a private social group for league members: community building",
      "Celebrate every milestone: first win, season champion, most improved",
    ],
  },
];

export function PoolHallEventsSection() {
  return (
    <section id="events" data-ocid="poolhall-guide.events_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.45 0.14 150 / 0.15)" }}
        >
          <Calendar size={20} style={{ color: "oklch(0.35 0.12 150)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.45 0.14 150 / 0.1)",
            color: "oklch(0.30 0.10 150)",
            border: "1px solid oklch(0.45 0.14 150 / 0.3)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Women-Only Events & Lessons
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Events are your most powerful tool for building a loyal female customer
        base. Recurring events = recurring revenue.
      </p>

      <div className="space-y-5">
        {EVENTS.map((event, i) => (
          <Card
            key={event.title}
            className="hover:border-primary/35 transition-all duration-200"
            data-ocid={`poolhall-guide.events.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.45 0.14 150 / 0.1)" }}
                >
                  <Users size={20} style={{ color: "oklch(0.35 0.12 150)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Clock
                        size={12}
                        style={{ color: "oklch(0.35 0.12 150)" }}
                      />
                      <span
                        className="text-xs font-medium"
                        style={{ color: "oklch(0.35 0.12 150)" }}
                      >
                        {event.cadence}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div
                    className="rounded-lg px-4 py-2.5 mb-3 text-sm"
                    style={{
                      background: "oklch(0.45 0.14 150 / 0.08)",
                      border: "1px solid oklch(0.45 0.14 150 / 0.2)",
                    }}
                  >
                    <span
                      className="font-semibold text-xs uppercase tracking-wide"
                      style={{ color: "oklch(0.35 0.12 150)" }}
                    >
                      Expected Impact:
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {event.impact}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {event.tips.map((tip) => (
                      <li
                        key={tip}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span
                          className="mt-0.5 shrink-0 text-base leading-none"
                          style={{ color: "oklch(0.45 0.14 150)" }}
                        >
                          •
                        </span>
                        {tip}
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
