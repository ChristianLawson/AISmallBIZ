import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const PROMOTIONS = [
  {
    id: 1,
    name: "The Monday Exclusive",
    tagline: "Scarcity + Urgency",
    description:
      "One product, limited quantity. Announced Sunday night online only. The scarcity creates urgency; the Sunday announcement rewards followers and drives foot traffic Monday morning.",
    howToPromote:
      "Sunday evening Instagram story: 'Tomorrow morning only. Limited pieces. First come, first served. Come early.' No further details: let the mystery drive the traffic.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.18)",
  },
  {
    id: 2,
    name: "The Style Session",
    tagline: "Premium Experience",
    description:
      "Complimentary personal styling consultation, appointment-based. 30-45 minutes, one-on-one. This is the premium experience that justifies premium prices and builds the client relationship that drives lifetime value.",
    howToPromote:
      "Position as an exclusive service, not a desperate discount. 'We have 3 Style Session appointments available this week. DM to book.'",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.18)",
  },
  {
    id: 3,
    name: "The Neighborhood Rate",
    tagline: "Community Loyalty",
    description:
      "Locals-only discount for zip code regulars. Build community loyalty and create a reason for nearby residents to choose you over online or a competitor.",
    howToPromote:
      "Post to your neighborhood Facebook group and local community board. 'If you live in [neighborhood], this is your rate. Always. Show us your zip.'",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.18)",
  },
  {
    id: 4,
    name: "The Collab Drop",
    tagline: "Content + Event + Product",
    description:
      "Monthly local artist or brand collaboration. Limited edition, story-driven. This is content, event, and product launch in one.",
    howToPromote:
      "Build the story for 2 weeks before launch. Feature the artist/brand, their process, their vision. The drop becomes an event.",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.18)",
  },
  {
    id: 5,
    name: "The Behind the Counter",
    tagline: "VIP Invitation-Only",
    description:
      "Private in-store event: meet the maker/designer, hear the story. Invitation-only for your best customers. Limited to 15-20 people.",
    howToPromote:
      "Personal outreach to your top 20 customers. 'We are doing something special and you are invited.' The exclusivity IS the marketing.",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
  },
  {
    id: 6,
    name: "The First Look",
    tagline: "Insider Access",
    description:
      "New arrivals preview for loyalty members, 48 hours before general release. The first to know feel like insiders: and insiders become advocates.",
    howToPromote:
      "Email/SMS your loyalty list: 'New arrivals land Thursday. You get first look Tuesday. In-store only.' Drive foot traffic before launch.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
    border: "oklch(0.78 0.12 85 / 0.15)",
  },
  {
    id: 7,
    name: "The Bundle Story",
    tagline: "Higher Basket Value",
    description:
      "Curated product bundles around a theme: the boardroom look, the Sunday errand run, the weekend away. Bundling increases average order value and does the styling work for the customer.",
    howToPromote:
      "Feature the full bundle as a styled photo on Instagram. Show every piece. Price the bundle with a story, not just a discount.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.06)",
    border: "oklch(0.62 0.1 15 / 0.15)",
  },
  {
    id: 8,
    name: "The Repair & Return",
    tagline: "Sustainability + Goodwill",
    description:
      "Bring in an old item from your brand, get store credit toward new. Sustainability story + new purchase trigger + goodwill.",
    howToPromote:
      "Position around sustainability: 'We believe in making things that last. And when they do not, we make it right.' This is Appreciated Branding in action.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.13)",
  },
  {
    id: 9,
    name: "The Gift Expert",
    tagline: "Gifting Destination",
    description:
      "Seasonal gifting guide + complimentary gift wrapping + personal note service. Turn your store into the go-to gifting destination in your neighborhood.",
    howToPromote:
      "Feature as a service, not a sale. 'We will find the gift. We will wrap it. We will write the note. Just tell us who it is for and what they love.'",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.06)",
    border: "oklch(0.28 0.12 180 / 0.15)",
  },
  {
    id: 10,
    name: "The Content Day",
    tagline: "Creator Partnership",
    description:
      "Invite 5 local creators in for a styled shoot in your store. Share the content, tag each other, build each other's audiences.",
    howToPromote:
      "DM 5 local creators with strong local followings: 'We would love to have you in the store for a shoot. No charge, all content is yours to keep and share.'",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.14)",
  },
  {
    id: 11,
    name: "The Zero Waste Weekend",
    tagline: "Community + Sustainability",
    description:
      "Sustainable products spotlight + recycling/upcycling workshop. Two-day event featuring your most sustainably produced items and an in-store workshop.",
    howToPromote:
      "Partner with a local sustainability organization. Co-promote with them. The partnership amplifies the audience and the credibility.",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.18)",
  },
  {
    id: 12,
    name: "The VIP Saturday",
    tagline: "Top 20% Treatment",
    description:
      "Your top 20% spenders get a private shopping hour before the store opens: 8-10am Saturday. Champagne. First look at new arrivals. No crowds.",
    howToPromote:
      "This is never publicly advertised. Your top customers receive a handwritten note or personal call: 'We are opening early for our best customers this Saturday. You are on the list.'",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.18)",
  },
];

export function RetailPromotions() {
  return (
    <section id="promotions" data-ocid="retail-guide.promotions_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Star size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 4
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Rotating Weekly Promotions
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Feature one of these 12 signature promotions on a rotating weekly basis.
        Each is designed to drive foot traffic, increase basket size, and build
        the kind of loyalty that turns customers into advocates.
      </p>

      {/* Why rotate */}
      <div
        className="grid sm:grid-cols-3 gap-4 mb-8 p-5 rounded-2xl"
        style={{
          background: "oklch(0.78 0.12 85 / 0.07)",
          border: "1px solid oklch(0.78 0.12 85 / 0.2)",
        }}
      >
        {[
          [
            "Novelty",
            "Creates anticipation: loyal customers check in weekly to see what is new",
          ],
          [
            "Scarcity",
            'Limited-time drives urgency: "last day" posts outperform everything else',
          ],
          [
            "Social Buzz",
            "A well-executed weekly promotion is your most powerful organic content",
          ],
        ].map(([title, desc]) => (
          <div key={title}>
            <div
              className="font-semibold text-sm mb-1"
              style={{ color: "oklch(0.45 0.1 85)" }}
            >
              {title}
            </div>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* Promotion cards */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-ocid="retail-guide.promotions_list"
      >
        {PROMOTIONS.map((promo, i) => (
          <Card
            key={promo.id}
            className="overflow-hidden"
            data-ocid={`retail-guide.promotion_card.${i + 1}`}
          >
            <CardContent className="p-0">
              {/* Card header */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{
                  background: promo.bg,
                  borderBottom: `1px solid ${promo.border}`,
                }}
              >
                <span
                  className="font-display font-bold text-xs"
                  style={{ color: promo.color }}
                >
                  #{promo.id} {promo.name}
                </span>
                <Badge
                  className="text-xs py-0"
                  style={{
                    background: promo.bg,
                    color: promo.color,
                    border: `1px solid ${promo.border}`,
                  }}
                >
                  {promo.tagline}
                </Badge>
              </div>
              {/* Card body */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {promo.description}
                </p>
                <div
                  className="rounded-lg p-3 text-xs"
                  style={{
                    background: promo.bg,
                    borderLeft: `3px solid ${promo.color}`,
                  }}
                >
                  <strong style={{ color: promo.color }}>
                    How to promote:
                  </strong>{" "}
                  <span className="text-muted-foreground">
                    {promo.howToPromote}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
