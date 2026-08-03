import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const KEYWORDS = [
  "boutique near me",
  "[product category] store NYC",
  "women's accessories [neighborhood]",
  "sustainable fashion NYC",
  "gift shop near me",
  "local boutique [neighborhood]",
  "personal styling NYC",
  "[brand/product] retailer NYC",
];

const WEEKLY_PLAN = [
  {
    day: "Monday",
    action:
      "Upload a new photo to your Google Business Profile: new arrival, styled shot, or in-store event from the weekend.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
  },
  {
    day: "Tuesday",
    action:
      "Respond to all unaddressed Google reviews: positive and negative: with a personal, non-templated reply.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
  },
  {
    day: "Wednesday",
    action:
      "Create a Google Business post for this week's featured promotion. Include a photo, a headline, and a CTA.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
  },
  {
    day: "Thursday",
    action:
      "Verify store hours, product categories, and contact info are accurate across Google, Apple Maps, and Yelp.",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
  },
  {
    day: "Friday",
    action:
      "Search '[your product category] [your neighborhood]' on Google. Track your rank week over week in a simple spreadsheet.",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
  },
];

export function RetailGoogleMapsSection() {
  return (
    <section id="google-maps" data-ocid="retail-guide.google_maps_section">
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
            color: "oklch(0.22 0.1 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.25)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Google Maps &amp; Local SEO for Retailers
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        In 2026, your Google Business Profile is often the first and only thing
        a potential customer sees before deciding whether to visit your store.
      </p>

      {/* Key insight */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.28 0.12 180 / 0.07)",
          border: "1px solid oklch(0.28 0.12 180 / 0.2)",
          borderLeft: "4px solid oklch(0.28 0.12 180)",
        }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">
            The online decision happens before the in-store visit.
          </strong>{" "}
          The SoHo boutique that grew 210% invested as much in its digital
          presence as its physical one. A customer searching for you on Google
          has already decided to spend: the question is whether they pick you or
          your competitor. Your Google Business Profile is the difference.
        </p>
      </div>

      {/* Keywords */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        8 High-Value Keywords to Own in Your Neighborhood
      </h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {KEYWORDS.map((kw) => (
          <div
            key={kw}
            className="px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "oklch(0.28 0.12 330 / 0.08)",
              color: "oklch(0.28 0.12 330)",
              border: "1px solid oklch(0.28 0.12 330 / 0.2)",
            }}
          >
            {kw}
          </div>
        ))}
      </div>

      {/* 5-day action plan */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Your 5-Day Weekly Google Action Plan
      </h3>
      <div className="space-y-3 mb-8">
        {WEEKLY_PLAN.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`retail-guide.google_day.${day.day.toLowerCase()}`}
          >
            <div
              className="font-display font-bold text-sm w-24 shrink-0 pt-0.5"
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
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.88) 0%, oklch(0.22 0.1 30 / 0.88) 100%)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.82 0.14 85)" }}
        >
          Pro Tip
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.92 0.006 75)" }}
        >
          Ask every first-time customer to leave a Google review before they
          leave the store. Show them how on your phone. Make it part of your
          service ritual. One review a day = 365 reviews a year = significantly
          higher search ranking and dramatically more first-time customers.
        </p>
      </div>
    </section>
  );
}
