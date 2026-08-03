import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, MapPin, Search } from "lucide-react";

const KEYWORDS = [
  "restaurants near me",
  "best [cuisine] NYC",
  "restaurants near [landmark/theater/hotel]",
  "date night restaurant NYC",
  "private dining NYC",
  "restaurant [neighborhood] NYC",
  "brunch [neighborhood] NYC",
  "prix fixe dinner NYC",
];

const WEEKLY_PLAN = [
  {
    day: "Monday",
    short: "Mon",
    action: "New photo to Google Business Profile",
    detail:
      "Post a dish, dining room, or team photo. Fresh content signals active management to Google’s algorithm.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
  },
  {
    day: "Tuesday",
    short: "Tue",
    action: "Respond to all unanswered Google reviews",
    detail:
      "Respond to every review: positive and negative. A well-written response to a 1-star review is read by 10x more people than the review itself.",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
  },
  {
    day: "Wednesday",
    short: "Wed",
    action: "Post a Google Business Profile update",
    detail:
      "This week’s special, an upcoming event, or a chef story. Google surfaces businesses that post regularly.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
  },
  {
    day: "Thursday",
    short: "Thu",
    action: "Verify menu accuracy across all platforms",
    detail:
      "Check Google, Yelp, TripAdvisor: wrong prices or hours kill bookings. One wrong price seen by 100 potential guests costs you real revenue.",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
  },
  {
    day: "Friday",
    short: "Fri",
    action: "Search your cuisine + neighborhood",
    detail:
      "Search ‘[your cuisine] [your neighborhood] restaurant’: who’s above you, and why? Study the top result’s profile and close the gap.",
    color: "oklch(0.45 0.14 330)",
    bg: "oklch(0.45 0.14 330 / 0.07)",
  },
];

export function RestaurantGoogleMapsSection() {
  return (
    <section id="google-maps" data-ocid="restaurant-guide.google_maps_section">
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
        Google Maps &amp; Local SEO for Restaurants
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Your Google Business Profile is re-evaluated every single day.
        Inactivity is a negative signal. Here’s what the best NYC restaurants do
        to stay on top.
      </p>

      {/* Critical alert */}
      <div
        className="rounded-xl p-5 mb-8 flex items-start gap-3"
        style={{
          background: "oklch(0.55 0.2 25 / 0.08)",
          border: "1px solid oklch(0.55 0.2 25 / 0.25)",
        }}
      >
        <AlertCircle
          size={18}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.45 0.18 25)" }}
        />
        <div>
          <p
            className="text-sm font-semibold mb-1"
            style={{ color: "oklch(0.35 0.12 25)" }}
          >
            The Benchmark You’re Competing Against
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Manhatta scores <strong className="text-foreground">99/100</strong>{" "}
            on digital presence. Marseille dominates ‘restaurants near Broadway’
            in search. Le Bernardin’s brand equity is so strong, people search
            by name: not ‘French restaurant NYC’. These are not accidents: they
            are the result of daily, disciplined digital presence management.
          </p>
        </div>
      </div>

      {/* Keywords grid */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Search size={16} style={{ color: "oklch(0.28 0.12 330)" }} />
          <h3 className="font-display font-semibold text-base text-foreground">
            8 High-Value Keywords to Own in Your Market
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {KEYWORDS.map((kw, i) => (
            <div
              key={kw}
              className="px-4 py-3 rounded-lg text-center"
              style={{
                background:
                  i % 2 === 0
                    ? "oklch(0.28 0.12 330 / 0.07)"
                    : "oklch(0.78 0.12 85 / 0.07)",
                border: `1px solid ${
                  i % 2 === 0
                    ? "oklch(0.28 0.12 330 / 0.15)"
                    : "oklch(0.78 0.12 85 / 0.2)"
                }`,
              }}
            >
              <p
                className="text-xs font-semibold"
                style={{
                  color:
                    i % 2 === 0 ? "oklch(0.28 0.12 330)" : "oklch(0.45 0.1 85)",
                }}
              >
                {kw}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5-day weekly action plan */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={16} style={{ color: "oklch(0.28 0.12 330)" }} />
          <h3 className="font-display font-semibold text-base text-foreground">
            5-Day Weekly Action Plan
          </h3>
        </div>
        <div className="space-y-3">
          {WEEKLY_PLAN.map((day) => (
            <div
              key={day.day}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{
                background: day.bg,
                border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
              }}
              data-ocid={`restaurant-guide.google_maps_day.${day.short.toLowerCase()}`}
            >
              <div
                className="shrink-0 w-14 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "oklch(0.97 0.006 75 / 0.8)",
                  border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: day.color }}
                >
                  {day.short}
                </span>
              </div>
              <div className="min-w-0">
                <div
                  className="font-semibold text-sm mb-0.5"
                  style={{ color: day.color }}
                >
                  {day.action}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {day.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation integration tip */}
      <Card>
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.28 0.12 330 / 0.1)" }}
            >
              <MapPin size={14} style={{ color: "oklch(0.28 0.12 330)" }} />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                OpenTable &amp; Resy Integration
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ensure your Google Business Profile links directly to your
                reservation system. Every extra click you force a guest to take
                The path from ‘search’ to ‘reservation confirmed’ should be two
                taps.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
