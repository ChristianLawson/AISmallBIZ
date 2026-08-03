import { Badge } from "@/components/ui/badge";
import { AlertCircle, MapPin } from "lucide-react";

const KEYWORDS = [
  "hair salon near me",
  "balayage NYC",
  "highlights near me",
  "haircut [neighborhood] NYC",
  "natural hair salon NYC",
  "blowout bar NYC",
  "color correction NYC",
  "bridal hair NYC",
];

const DAILY_ACTIONS = [
  {
    day: "Monday",
    action:
      "Upload 1 new photo to Google Business Profile (before/after or product shot)",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    day: "Tuesday",
    action:
      "Respond to any unanswered reviews: positive AND negative, personally",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
  },
  {
    day: "Wednesday",
    action:
      "Post a Google Business Profile update or this week's featured promotion",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
  },
  {
    day: "Thursday",
    action:
      "Verify all booking links work + check your profile for accuracy (hours, phone, address)",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.08)",
  },
  {
    day: "Friday",
    action:
      'Check your position: search "hair salon [your neighborhood]": who ranks above you and why?',
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
  },
];

export function SalonGoogleMapsSection() {
  return (
    <section id="google-maps" data-ocid="salon-guide.google_maps_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 180 / 0.12)" }}
        >
          <MapPin size={20} style={{ color: "oklch(0.28 0.12 180)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 180 / 0.1)",
            color: "oklch(0.28 0.12 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.25)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Google Maps &amp; Local SEO for Salons
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Your Google Business Profile is re-indexed every day. What you do (or
        don&apos;t do) today directly impacts who finds you tomorrow.
      </p>

      {/* Critical alert */}
      <div
        className="rounded-xl p-5 mb-8 flex items-start gap-4"
        style={{
          background: "oklch(0.55 0.2 25 / 0.08)",
          border: "2px solid oklch(0.55 0.2 25 / 0.35)",
        }}
      >
        <AlertCircle
          size={22}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.45 0.18 25)" }}
        />
        <div>
          <p
            className="font-semibold text-sm mb-1"
            style={{ color: "oklch(0.35 0.16 25)" }}
          >
            Daily Re-Indexing: This Is Not Optional
          </p>
          <p className="text-sm text-muted-foreground">
            Google re-indexes your Google Business Profile every single day. If
            you haven&apos;t updated it recently: a new photo, a new post, a
            review response: your ranking drops. This is the #1 free marketing
            action you can take. 60 seconds per day can mean 10-30 more clients
            per week.
          </p>
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-8">
        <h3 className="font-display text-xl font-bold text-foreground mb-3">
          8 High-Value Search Keywords for NYC Salons
        </h3>
        <div className="flex flex-wrap gap-2">
          {KEYWORDS.map((kw) => (
            <span
              key={kw}
              className="text-sm px-3 py-1.5 rounded-full font-medium"
              style={{
                background: "oklch(0.28 0.12 330 / 0.08)",
                color: "oklch(0.28 0.12 330)",
                border: "1px solid oklch(0.28 0.12 330 / 0.2)",
              }}
            >
              {kw}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Use these phrases in your Google Business Profile description, posts,
          and photo captions.
        </p>
      </div>

      {/* 5-day action plan */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Your 5-Day Weekly Action Plan
      </h3>
      <div className="space-y-3 mb-8">
        {DAILY_ACTIONS.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`salon-guide.google_maps_day.${day.day.toLowerCase()}`}
          >
            <div
              className="font-bold text-xs w-20 shrink-0 pt-0.5"
              style={{ color: day.color }}
            >
              {day.day}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {day.action}
            </p>
          </div>
        ))}
      </div>

      {/* Pro tip */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.78 0.12 85 / 0.08)",
          border: "1px solid oklch(0.78 0.12 85 / 0.25)",
        }}
      >
        <h3
          className="font-semibold text-sm mb-2"
          style={{ color: "oklch(0.45 0.1 85)" }}
        >
          ⭐ Pro Tip: The In-Chair Review Method
        </h3>
        <p className="text-sm text-muted-foreground">
          Ask every happy client to leave a Google review{" "}
          <strong>before they leave the chair</strong>. Hand them your phone.
          Show them the link. Make it a ritual: every stylist, every
          appointment. Reviews requested in-person convert at 3× the rate of
          follow-up emails.
        </p>
      </div>
    </section>
  );
}
