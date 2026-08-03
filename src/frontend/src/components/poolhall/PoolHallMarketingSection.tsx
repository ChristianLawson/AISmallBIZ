import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const MARKETING_CHANNELS = [
  {
    channel: "Instagram",
    emoji: "📸",
    strategy:
      "Women player spotlights, event photos, 8-Ball Blackout content, and the monthly rotating special. Use Reels for maximum organic reach. Target hashtags: #WomenWhoPlay #PoolHallLife #LadiesNight",
    frequency: "5-7x per week",
  },
  {
    channel: "TikTok",
    emoji: "🎵",
    strategy:
      "Lesson clips with female instructor, trick shot content by women players, cocktail preparation videos for monthly specials. Sound-on content performs best here.",
    frequency: "3-5x per week",
  },
  {
    channel: "Facebook",
    emoji: "👥",
    strategy:
      "Event pages for every Ladies' Night and tournament. Share to local women's groups. Facebook Events reach is still strong for local 30+ demographics.",
    frequency: "Event-driven + 3x per week",
  },
  {
    channel: "Email & SMS",
    emoji: "📧",
    strategy:
      "Build a list from lesson sign-ups and Ladies' Night attendees. Monthly newsletter: upcoming events, this month's special, league standings. SMS for same-day reminders.",
    frequency: "Weekly newsletter + event reminders",
  },
];

const AI_TOOLS = [
  {
    tool: "AI Inventory Management",
    description:
      "Use AI tools to optimize bar stock levels based on event schedule and historical data. Reduces waste by 15-25% on average.",
  },
  {
    tool: "Customer Feedback Analysis",
    description:
      "Feed Google reviews and social comments into an AI summarizer weekly. Identify patterns in what women specifically praise or complain about.",
  },
  {
    tool: "Staff Scheduling Optimization",
    description:
      "AI scheduling tools predict peak demand by day and time, ensuring you are never understaffed on Ladies' Night or tournament days.",
  },
];

const METRICS = [
  {
    metric: "Female Participation Rate",
    target: "30-50% of total players",
    how: "Track gender ratio weekly using sign-in data or observation count",
  },
  {
    metric: "Women's League Enrollment",
    target: "12-24 players per season",
    how: "Track sign-ups per season; goal: double each season for first 3 seasons",
  },
  {
    metric: "Ladies' Night Attendance",
    target: "25+ women per weekly event",
    how: "Headcount at door; track growth week-over-week and season-over-season",
  },
  {
    metric: "Customer Satisfaction Score",
    target: "4.5+ Google rating; 80%+ positive sentiment",
    how: "Monthly review audit; survey Ladies' Night attendees quarterly",
  },
];

export function PoolHallMarketingSection() {
  return (
    <section id="marketing" data-ocid="poolhall-guide.marketing_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 180 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.28 0.12 180)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 180 / 0.1)",
            color: "oklch(0.28 0.12 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.3)",
          }}
        >
          Section 8
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Marketing Plan & Success Metrics
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        A channel-by-channel marketing plan targeting women, plus AI-powered
        tools and the metrics that tell you if it&rsquo;s working.
      </p>

      {/* Social Media Channels */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Social Media by Channel
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {MARKETING_CHANNELS.map((ch, i) => (
          <Card
            key={ch.channel}
            className="hover:border-primary/35 transition-all duration-200"
            data-ocid={`poolhall-guide.marketing.channel.${i + 1}`}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl" aria-hidden="true">
                  {ch.emoji}
                </span>
                <h4 className="font-display font-semibold text-base text-foreground">
                  {ch.channel}
                </h4>
                <span
                  className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.28 0.12 180 / 0.1)",
                    color: "oklch(0.28 0.12 180)",
                  }}
                >
                  {ch.frequency}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {ch.strategy}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Tools */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        AI-Powered Operational Tools
      </h3>
      <div
        className="rounded-xl p-5 mb-10"
        style={{
          background: "oklch(0.55 0.18 290 / 0.05)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
      >
        <div className="space-y-4">
          {AI_TOOLS.map((t) => (
            <div key={t.tool} className="flex items-start gap-3">
              <BarChart3
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: "oklch(0.50 0.22 290)" }}
              />
              <div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.40 0.18 290)" }}
                >
                  {t.tool}:
                </span>{" "}
                <span className="text-sm text-muted-foreground">
                  {t.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Metrics for Success
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {METRICS.map((m, i) => (
          <div
            key={m.metric}
            className="rounded-xl p-4"
            style={{
              background: "oklch(0.45 0.14 150 / 0.06)",
              border: "1px solid oklch(0.45 0.14 150 / 0.2)",
            }}
            data-ocid={`poolhall-guide.marketing.metric.${i + 1}`}
          >
            <div
              className="font-display font-bold text-sm mb-1"
              style={{ color: "oklch(0.30 0.10 150)" }}
            >
              {m.metric}
            </div>
            <div
              className="text-lg font-bold font-display mb-1"
              style={{ color: "oklch(0.40 0.14 150)" }}
            >
              {m.target}
            </div>
            <p className="text-xs text-muted-foreground">{m.how}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
