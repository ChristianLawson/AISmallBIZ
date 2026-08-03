import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    content:
      "Behind-the-scenes prep: morning setup, product lineup, team ready",
    format: "Reel or Story",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    day: "Tuesday",
    content:
      "Transformation Tuesday: before/after Reel (always get client permission)",
    format: "Reel",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
  },
  {
    day: "Wednesday",
    content:
      "Educational content: technique explanation, product ingredient breakdown, myth-busting",
    format: "Carousel or Reel",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
  },
  {
    day: "Thursday",
    content:
      "Client spotlight: feature a regular client's story (with permission)",
    format: "Story or Post",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.08)",
  },
  {
    day: "Friday",
    content:
      '"Book This Weekend": last-minute availability + direct booking link in bio',
    format: "Story",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
  },
  {
    day: "Saturday",
    content:
      "In-salon action: real-time styling, the energy of a fully booked Saturday",
    format: "Story / Live",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
  },
  {
    day: "Sunday",
    content:
      "Inspiration + aspiration: mood board, next week's featured promotion preview",
    format: "Carousel",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
  },
];

const FORMAT_GUIDE = [
  {
    format: "Reels (60-90 sec)",
    use: "Transformations: your highest-performing content type",
  },
  {
    format: "Stories",
    use: "Behind the scenes, polls, availability announcements, Q&A",
  },
  {
    format: "Carousels",
    use: "Educational content: technique tips, product guides, before/after comparisons",
  },
  {
    format: "TikTok",
    use: "Repurpose your best Reels: same content, 2× reach",
  },
];

export function SalonSocialMediaSection() {
  return (
    <section id="social-media" data-ocid="salon-guide.social_media_section">
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
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media Strategy for Salons
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        Instagram and TikTok are your primary platforms. Before/after
        transformations are your highest-performing content type. Video is
        mandatory in 2026: static posts alone are no longer sufficient.
      </p>

      {/* Platform callout */}
      <div
        className="rounded-xl p-5 mb-8 grid sm:grid-cols-2 gap-4"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        {FORMAT_GUIDE.map((f) => (
          <div key={f.format}>
            <div
              className="font-semibold text-sm mb-1"
              style={{ color: "oklch(0.28 0.12 330)" }}
            >
              {f.format}
            </div>
            <p className="text-xs text-muted-foreground">{f.use}</p>
          </div>
        ))}
      </div>

      {/* 7-day calendar */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        7-Day Content Calendar
      </h3>
      <div className="space-y-2 mb-10">
        {CONTENT_CALENDAR.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`salon-guide.social_calendar.${day.day.toLowerCase()}`}
          >
            <div className="w-24 shrink-0">
              <div className="font-bold text-xs" style={{ color: day.color }}>
                {day.day}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: day.color, opacity: 0.7 }}
              >
                {day.format}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {day.content}
            </p>
          </div>
        ))}
      </div>

      {/* Case study */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "oklch(0.55 0.14 150 / 0.15)" }}
            >
              <TrendingUp size={16} style={{ color: "oklch(0.35 0.12 150)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-foreground">
                  Salon Social Success Story
                </span>
                <Badge
                  style={{
                    background: "oklch(0.55 0.14 150 / 0.15)",
                    color: "oklch(0.35 0.12 150)",
                  }}
                >
                  Case Study
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Brooklyn-based natural hair salon went from 800 to{" "}
                <strong>47,000 Instagram followers in 8 months</strong> by
                posting one transformation Reel per day. Their waitlist now
                extends 6 weeks. The content cost: <strong>$0</strong>. The
                commitment: 30 minutes per day.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
