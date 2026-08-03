import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

const EVENTS = [
  {
    title: "Morning Baking Classes",
    cadence: "First Saturday of every month",
    description:
      "2-hour hands-on class where 8-12 participants learn to make the month's featured item from scratch. Includes all ingredients, an apron, and a box of finished goods to take home.",
    impact:
      "Classes sell out within 48 hours when marketed on Instagram. Attendees become your most loyal regular customers: they feel ownership over the product.",
    tips: [
      "Film the class for social content: student reactions are gold",
      "Offer a 'Book a Private Class' option for bachelorettes, birthdays, and corporate teams",
      "Partner with local wine shops for a 'Bake & Sip' evening edition",
    ],
  },
  {
    title: "Corporate Catering Showcase Events",
    cadence: "Quarterly open house",
    description:
      "Invite local businesses, event planners, and HR managers to a curated tasting event showcasing your catering capabilities. Focus on office meetings, client events, and team celebrations.",
    impact:
      "One corporate catering account can generate as much revenue as 50-100 individual retail customers. This event is your most valuable business development activity.",
    tips: [
      "Reach out to 20 local businesses 3 weeks ahead",
      "Present a catering menu, pricing sheet, and minimum orders upfront",
      "Follow up within 48 hours with a personalized thank-you and quote",
    ],
  },
  {
    title: "Holiday Themed Pop-Ups",
    cadence: "6-8 per year (major holidays)",
    description:
      "Limited-run specialty menus for Valentine's Day, Mother's Day, Easter, Thanksgiving, and Christmas. Pre-order only, with a 2-week pickup window. Creates urgency and ensures zero waste.",
    impact:
      "Holiday pre-orders typically generate 3-5x a typical week's revenue in a single pickup window. The pre-order model eliminates guesswork and waste.",
    tips: [
      "Launch pre-orders 3 weeks before the holiday with a 'limited slots' framing",
      "Feature the box packaging on social: people share holiday box reveals constantly",
      "Offer a 'mystery box' option for regulars who trust your judgment",
    ],
  },
  {
    title: "'Meet the Baker' Evenings",
    cadence: "Monthly",
    description:
      "An informal evening where the baker shares the story behind one specialty item: its origin, technique, and the sourcing decisions behind it. Free to attend, small group, coffee and samples provided.",
    impact:
      "Deepens emotional connection to the product and the baker. Attendees become brand advocates: they share the story with friends and on social media. One of the highest-ROI low-cost events possible.",
    tips: [
      "Keep attendance to 10-15 people maximum: intimacy is the point",
      "Record a short clip for Instagram Stories: 'Behind the recipe' content performs exceptionally well",
      "Offer attendees first access to the next month's class or seasonal item",
    ],
  },
  {
    title: "Charity Bake Sales & Community Fundraisers",
    cadence: "2-3 per year",
    description:
      "Partner with a local school, nonprofit, or community cause for a fundraiser bake sale. Donate 20-30% of proceeds and co-market the event across both organizations' channels.",
    impact:
      "Community involvement is your most powerful earned media. Local news coverage, social shares from the partner organization, and goodwill that drives loyalty are worth far more than the margin donated.",
    tips: [
      "Choose causes that resonate with your core customer base: schools, women's shelters, community gardens",
      "Make it visually special: branded packaging, charity-specific item names",
      "Post the donation check photo and impact story: authenticity drives massive engagement",
    ],
  },
  {
    title: "Local Artist Display Rotation",
    cadence: "Monthly rotation",
    description:
      "Partner with local artists to display their work on your café walls on a rotating monthly basis. Artist promotes the display to their audience; you gain fresh visual content and a reason for regular customers to return.",
    impact:
      "Art partnerships cost nothing, improve the space visually, and bring in new customers from the artist's network every month. The combined social reach is typically 3-10x your own following.",
    tips: [
      "Feature the artist of the month on your Instagram: their story + their work in your space",
      "Host a small opening evening when new art goes up: free coffee, artist Q&A",
      "Prioritize local women artists to reinforce your community values",
    ],
  },
];

export function BakeryEventsSection() {
  return (
    <section id="events" data-ocid="bakery-guide.events_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 85 / 0.15)" }}
        >
          <Calendar size={20} style={{ color: "oklch(0.45 0.1 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 85 / 0.12)",
            color: "oklch(0.40 0.1 85)",
            border: "1px solid oklch(0.55 0.14 85 / 0.35)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Events &amp; Community
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Events transform customers into community members. Each one below has
        been proven to drive retention, word-of-mouth, and recurring revenue.
      </p>
      <div className="space-y-5">
        {EVENTS.map((event, i) => (
          <Card
            key={event.title}
            className="hover:border-primary/30 transition-all duration-200"
            data-ocid={`bakery-guide.events.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-0.5">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} style={{ color: "oklch(0.55 0.14 85)" }} />
                    <span className="text-xs text-muted-foreground">
                      {event.cadence}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {event.description}
              </p>
              <div
                className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs mb-3"
                style={{
                  background: "oklch(0.55 0.18 290 / 0.07)",
                  border: "1px solid oklch(0.55 0.18 290 / 0.18)",
                }}
              >
                <Users
                  size={12}
                  className="shrink-0 mt-0.5"
                  style={{ color: "oklch(0.50 0.22 290)" }}
                />
                <span style={{ color: "oklch(0.40 0.18 290)" }}>
                  <strong>Impact:</strong> {event.impact}
                </span>
              </div>
              <div className="space-y-1">
                {event.tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span style={{ color: "oklch(0.55 0.14 85)" }}>→</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
