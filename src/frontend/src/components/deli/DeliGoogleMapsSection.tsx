import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin, Search, Star, TrendingDown } from "lucide-react";

const SEARCH_KEYWORDS = [
  "deli near me",
  "best pastrami near me",
  "NYC deli delivery",
  "lunch spot near me",
  "New York style deli",
  "kosher deli near me",
  "pastrami on rye near me",
  "best sandwich near me",
];

const WEEKLY_ACTIONS = [
  {
    day: "Mon",
    action: "Post a photo of your weekly special",
    impact: "Highest single ROI action you can take",
  },
  {
    day: "Tue",
    action: "Respond to any new reviews: every one",
    impact: "Signals active management to Google's algorithm",
  },
  {
    day: "Wed",
    action: "Check Q&A section and add a new Q&A",
    impact: "Fills keyword gaps competitors miss",
  },
  {
    day: "Thu",
    action: "Update business hours if any change",
    impact: "Outdated hours = lost customers = lower ranking",
  },
  {
    day: "Fri",
    action: 'Post a "Weekend Special" photo update',
    impact: "Friday posts drive Saturday foot traffic",
  },
];

export function DeliGoogleMapsSection() {
  return (
    <section id="google-maps" data-ocid="deli-guide.google_maps_section">
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
            border: "1px solid oklch(0.28 0.12 180 / 0.3)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        NYC Deli Google Maps &amp; Local SEO
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        99% of deli owners do not know this: Google indexes and re-ranks your
        listing every single day. Not updating = being penalized.
      </p>

      {/* Critical alert */}
      <div
        className="rounded-xl p-5 mb-8 flex items-start gap-4"
        style={{
          background: "oklch(0.55 0.2 25 / 0.08)",
          border: "2px solid oklch(0.55 0.2 25 / 0.3)",
        }}
      >
        <TrendingDown
          size={24}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.45 0.18 25)" }}
        />
        <div>
          <h3
            className="font-semibold text-base mb-1"
            style={{ color: "oklch(0.35 0.15 25)" }}
          >
            The #1 Mistake Killing Your Google Maps Ranking
          </h3>
          <p className="text-sm text-muted-foreground">
            Google's algorithm treats inactivity as a signal of poor quality. If
            you have not updated your Google Business Profile in the last 7 days
            : your competitors who post daily are outranking you. Every. Single.
            Day. This is costing you real customers right now.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Optimization checklist */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-base text-foreground mb-4 flex items-center gap-2">
              <Search size={16} style={{ color: "oklch(0.28 0.12 180)" }} />
              Google Business Profile Optimization
            </h3>
            <ul className="space-y-2.5">
              {[
                "Claim and verify your profile (takes 5 minutes, lasts forever)",
                'Set your primary category as "Deli": secondary as "Sandwich shop"',
                "Fill every field: hours, phone, website, description, attributes",
                "Add at least 10 photos: exterior, interior, food, team",
                "Enable messaging so customers can text you directly",
                "Create your first Google Post today with today's special",
                "Add your menu with real prices and item descriptions",
                "Turn on booking/ordering if available in your area",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div
                    className="w-4 h-4 rounded-full border-2 mt-0.5 shrink-0"
                    style={{ borderColor: "oklch(0.28 0.12 180 / 0.4)" }}
                  />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Reviews section */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-base text-foreground mb-4 flex items-center gap-2">
              <Star size={16} style={{ color: "oklch(0.55 0.14 85)" }} />
              Reviews: Get Them, Respond to Them, Use Them
            </h3>
            <div className="space-y-4">
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 180)" }}
                >
                  How to get more reviews
                </div>
                <p className="text-xs text-muted-foreground">
                  Ask every satisfied customer directly: &ldquo;If you enjoyed
                  today, a Google review means the world to us.&rdquo; Put a QR
                  code linking to your review page on every table tent, bag, and
                  receipt. 70% of customers will leave a review if simply asked.
                </p>
              </div>
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 180)" }}
                >
                  How to respond to reviews
                </div>
                <p className="text-xs text-muted-foreground">
                  Respond to every review within 48 hours: positive and
                  negative. For negative ones: acknowledge, apologize, and
                  invite them back. Never argue. Google rewards businesses that
                  engage; it signals you are actively managed.
                </p>
              </div>
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 180)" }}
                >
                  How to use reviews
                </div>
                <p className="text-xs text-muted-foreground">
                  Screenshot 5-star reviews and post them as Instagram stories.
                  Frame them on the wall. Add the best quote to your website
                  homepage. Social proof is the most powerful sales tool you
                  have: and it is free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly action calendar */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.28 0.12 180 / 0.05)",
          border: "1px solid oklch(0.28 0.12 180 / 0.15)",
        }}
      >
        <h3
          className="font-semibold text-base mb-4 flex items-center gap-2"
          style={{ color: "oklch(0.28 0.12 180)" }}
        >
          <Camera size={16} />
          5-Day Google Maps Update Calendar
        </h3>
        <div className="space-y-3">
          {WEEKLY_ACTIONS.map((action) => (
            <div
              key={action.day}
              className="flex items-start gap-4 p-3 rounded-lg"
              style={{ background: "oklch(0.97 0.006 75 / 0.7)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                style={{
                  background: "oklch(0.28 0.12 180 / 0.15)",
                  color: "oklch(0.28 0.12 180)",
                }}
              >
                {action.day}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  {action.action}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {action.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords */}
      <div>
        <h3 className="font-semibold text-base text-foreground mb-3">
          &ldquo;Near Me&rdquo; Keywords Deli Customers Actually Search
        </h3>
        <div className="flex flex-wrap gap-2">
          {SEARCH_KEYWORDS.map((kw) => (
            <Badge
              key={kw}
              className="text-xs py-1.5 px-3 rounded-full"
              style={{
                background: "oklch(0.28 0.12 180 / 0.1)",
                color: "oklch(0.28 0.12 180)",
                border: "1px solid oklch(0.28 0.12 180 / 0.2)",
              }}
            >
              🔍 {kw}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Tip: Use these exact phrases in your Google Business Profile
          description, Q&amp;A section, and Google Posts. This is the keyword
          gap your competitors do not know to fill.
        </p>
      </div>
    </section>
  );
}
