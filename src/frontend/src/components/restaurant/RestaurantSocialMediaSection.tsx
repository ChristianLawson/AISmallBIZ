import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Instagram, MessageSquare, TrendingUp } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Mon",
    label: "Monday",
    content: "Behind-the-scenes prep",
    detail:
      "Market delivery, mise en place, team briefing. The unglamorous work that makes everything else possible.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    day: "Tue",
    label: "Tuesday",
    content: "This week\u2019s featured special",
    detail:
      "Show the dish being made. Not the finished plate \u2014 the process. The cut, the sear, the plate.",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
  },
  {
    day: "Wed",
    label: "Wednesday",
    content: "Chef/team story",
    detail:
      "Who\u2019s cooking tonight and why they love it. Faces and stories build the emotional connection that turns followers into reservations.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
  },
  {
    day: "Thu",
    label: "Thursday",
    content: "\u201cBook your weekend\u201d",
    detail:
      "Availability push with a reason to visit. Not \u2018we\u2019re open\u2019 \u2014 \u2018here\u2019s why Saturday night at our table is different.\u2019",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
  },
  {
    day: "Fri",
    label: "Friday",
    content: "The Saturday Showstopper reveal",
    detail:
      "Highest-production video of the week. This is your content investment day. Film it properly. Light it well. Make it stop the scroll.",
    color: "oklch(0.45 0.14 330)",
    bg: "oklch(0.45 0.14 330 / 0.08)",
  },
  {
    day: "Sat",
    label: "Saturday",
    content: "Real-time dining room energy",
    detail:
      "Packed tables, happy guests, full bar. Capture the atmosphere \u2014 FOMO is a more powerful booking driver than any discount.",
    color: "oklch(0.55 0.2 25)",
    bg: "oklch(0.55 0.2 25 / 0.07)",
  },
  {
    day: "Sun",
    label: "Sunday",
    content: "The week in review + next week teaser",
    detail:
      "Celebrate the week. Thank your guests. Build anticipation for next week. \u2018Here\u2019s what\u2019s coming\u2019 posts consistently drive Monday night bookings.",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "oklch(0.55 0.14 330)",
    bg: "oklch(0.55 0.14 330 / 0.08)",
    focus:
      "Beautiful food photography + Reels for discovery. Your most curated presence \u2014 every post should be something you\u2019d frame.",
  },
  {
    name: "TikTok",
    icon: Film,
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.08)",
    focus:
      "Behind the scenes + storytelling. Raw, authentic, unfiltered. This is where your next 100 regulars are finding you right now.",
  },
  {
    name: "Google Business",
    icon: MessageSquare,
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    focus:
      "Posts for SEO. Every post here improves your local search ranking. Think of it as your Google advertising \u2014 for free.",
  },
  {
    name: "Yelp",
    icon: TrendingUp,
    color: "oklch(0.55 0.2 25)",
    bg: "oklch(0.55 0.2 25 / 0.08)",
    focus:
      "Reputation management + owner responses. Respond to every review. Your response is read by 10x more people than the original review.",
  },
];

export function RestaurantSocialMediaSection() {
  return (
    <section
      id="social-media"
      data-ocid="restaurant-guide.social_media_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 330 / 0.12)" }}
        >
          <Film size={20} style={{ color: "oklch(0.45 0.14 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 330 / 0.1)",
            color: "oklch(0.35 0.1 330)",
            border: "1px solid oklch(0.55 0.14 330 / 0.25)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media &amp; Video Content Strategy
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Video content is no longer optional for restaurants in 2026. Here’s the
        exact system NYC’s best use.
      </p>

      {/* Video mandate callout */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.92) 0%, oklch(0.22 0.1 30 / 0.9) 100%)",
        }}
      >
        <Film
          size={24}
          className="mb-3"
          style={{ color: "oklch(0.82 0.14 85)" }}
        />
        <p
          className="font-display text-lg font-bold mb-2"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          Video content is no longer optional for restaurants in 2026.
        </p>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          TikTok, Instagram Reels, and YouTube Shorts are where your next 100
          regulars are finding you. If you’re not posting video multiple times
          per week, you are invisible to the demographic that dines out most.
        </p>
      </div>

      {/* Lawrence Longo quote */}
      <blockquote
        className="mb-8 pl-5 border-l-4 py-2"
        style={{ borderColor: "oklch(0.78 0.12 85)" }}
      >
        <p
          className="font-display text-base italic font-semibold mb-1"
          style={{ color: "oklch(0.22 0.02 50)" }}
        >
          &ldquo;People eat with their eyes, but the taste and experience need
          to back up the photo.&rdquo;
        </p>
        <cite
          className="text-sm not-italic"
          style={{ color: "oklch(0.55 0.14 85)" }}
        >
          : Lawrence Longo, Prince Street Pizza. A post becomes a repeat
          customer only when the experience delivers.
        </cite>
      </blockquote>

      {/* 7-day content calendar */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        7-Day Content Calendar
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {CONTENT_CALENDAR.map((day) => (
          <div
            key={day.day}
            className="rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`restaurant-guide.content_calendar.${day.day.toLowerCase()}`}
          >
            <div
              className="font-bold text-xs tracking-wider uppercase mb-1"
              style={{ color: day.color }}
            >
              {day.label}
            </div>
            <div
              className="font-semibold text-sm mb-1.5"
              style={{ color: "oklch(0.22 0.02 50)" }}
            >
              {day.content}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {day.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Prince Street Pizza case study */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.28 0.12 330 / 0.07) 0%, oklch(0.78 0.12 85 / 0.07) 100%)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-bold text-base text-foreground">
            Case Study: Prince Street Pizza
          </span>
          <Badge
            style={{
              background: "oklch(0.28 0.12 330)",
              color: "oklch(0.97 0.006 75)",
            }}
          >
            SoHo, NYC
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Lawrence Longo’s “social media is the new word-of-mouth” philosophy
          turned a SoHo pizza window into a cultural institution with lines
          around the block. Their content strategy: real food, real people, no
          filters, consistent posting every day. The result: a restaurant that
          people travel from across the city: and the country: to visit.
        </p>
      </div>

      {/* Platform strategy */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Platform Strategy
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {PLATFORMS.map((platform) => (
          <Card key={platform.name}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: platform.bg }}
                >
                  <platform.icon size={16} style={{ color: platform.color }} />
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm mb-1"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {platform.focus}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
