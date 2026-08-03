import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

type Promotion = {
  id: number;
  name: string;
  description: string;
  howToPromote: string;
  tag: string;
};

const PROMOTIONS: Promotion[] = [
  {
    id: 1,
    name: "The Executive Refresh",
    description:
      "Express blowout + deep conditioning treatment, 45 minutes. Designed for the busy professional who needs to look polished for back-to-back meetings. Premium finish, no wasted time.",
    howToPromote:
      "Post Monday morning to catch the weekly planning mindset. Caption: ‘Running the week from the boardroom to the boardwalk? We’ve got 45 minutes to make you look the part.’",
    tag: "Express",
  },
  {
    id: 2,
    name: "The CEO Color",
    description:
      "Full highlights + toner + style. The premium transformation package. This is the appointment clients save for, talk about, and refer friends for.",
    howToPromote:
      "Feature the before/after transformation on Instagram Reels. Caption: ‘This is what happens when you stop playing small with your color.’",
    tag: "Transformation",
  },
  {
    id: 3,
    name: "The Brooklyn Balayage",
    description:
      "Lived-in natural color, low maintenance, high impact. The most searched color service in NYC in 2026. No harsh lines, no grow-out anxiety.",
    howToPromote:
      "Target the ‘low maintenance but high standards’ client. Caption: ‘Because you shouldn’t have to think about your roots: just your results.’",
    tag: "Most Searched",
  },
  {
    id: 4,
    name: "The Wellness Wednesday",
    description:
      "Scalp treatment + aromatherapy massage + blowout. Mid-week ritual designed to feel like an hour of true restoration.",
    howToPromote:
      "Post Tuesday afternoon. Caption: ‘Mid-week reset. Because Wednesday deserves more than just getting through it.’",
    tag: "Wellness",
  },
  {
    id: 5,
    name: "The Manhattan Makeover",
    description:
      "Cut + color + style consultation. New client special introducing your salon's full capability.",
    howToPromote:
      "Run as a monthly new client acquisition offer. Feature real transformation stories from first-time clients.",
    tag: "New Clients",
  },
  {
    id: 6,
    name: "The SoHo Sunday",
    description:
      "Couples styling session. Bring a friend, both save. Designed to expand your client base through peer referral.",
    howToPromote:
      "Sunday morning story post: ‘Bring your person. Leave looking incredible. Both of you.’",
    tag: "Referral",
  },
  {
    id: 7,
    name: "The Uptown Updo",
    description:
      "Event and occasion styling for galas, weddings, and business events. Position as the go-to for every important moment.",
    howToPromote:
      "Target LinkedIn-connected professionals. Caption: ‘For the moments that matter: because how you show up says everything.’",
    tag: "Events",
  },
  {
    id: 8,
    name: "The Power Hour",
    description:
      "60-minute express: cut, blowout, and brow shape. For the client who moves at speed and refuses to sacrifice her appearance.",
    howToPromote:
      "Thursday post for the Friday crowd: ‘In 60 minutes, you’ll look like you had three hours. That’s the Power Hour.’",
    tag: "Power Move",
  },
  {
    id: 9,
    name: "The Harlem Renaissance",
    description:
      "Natural texture celebration: curl definition, moisture treatment, and styling. Honoring and elevating natural hair as luxury.",
    howToPromote:
      "Feature the beauty of natural texture unapologetically. Caption: ‘Your curl pattern is not a problem to be managed: it’s a crown to be celebrated.’",
    tag: "Natural Hair",
  },
  {
    id: 10,
    name: "The Green Beauty Treatment",
    description:
      "Organic color + sustainable products only. For the eco-conscious client who refuses to compromise her values for beautiful hair.",
    howToPromote:
      "Feature your Green Circle Salon certification or sustainable product brands. Caption: ‘Beautiful hair shouldn’t cost the earth.’",
    tag: "Eco-Luxury",
  },
  {
    id: 11,
    name: "The Loyalty Luxe",
    description:
      "10th visit reward: complimentary deep treatment + style upgrade. The appointment that turns good clients into evangelists.",
    howToPromote:
      "Automate via your booking system. Send a surprise message at visit 9: ‘Your next appointment is on us: almost. One more visit and your Loyalty Luxe is waiting.’",
    tag: "Retention",
  },
  {
    id: 12,
    name: "The First Impression",
    description:
      "New client package: consultation + cut + style + complimentary product sample. Every new client's first experience should be so good she already has her second appointment before she leaves.",
    howToPromote:
      "This is how you build a full book. Make the first appointment unforgettable and the second appointment inevitable.",
    tag: "First Visit",
  },
];

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Express: {
    bg: "oklch(0.28 0.12 330 / 0.12)",
    color: "oklch(0.28 0.12 330)",
  },
  Transformation: {
    bg: "oklch(0.78 0.12 85 / 0.18)",
    color: "oklch(0.45 0.1 85)",
  },
  "Most Searched": {
    bg: "oklch(0.62 0.1 15 / 0.12)",
    color: "oklch(0.38 0.1 15)",
  },
  Wellness: {
    bg: "oklch(0.55 0.14 150 / 0.12)",
    color: "oklch(0.35 0.12 150)",
  },
  "New Clients": {
    bg: "oklch(0.28 0.12 180 / 0.12)",
    color: "oklch(0.28 0.12 180)",
  },
  Referral: { bg: "oklch(0.28 0.12 330 / 0.1)", color: "oklch(0.35 0.1 330)" },
  Events: { bg: "oklch(0.78 0.12 85 / 0.15)", color: "oklch(0.45 0.1 85)" },
  "Power Move": {
    bg: "oklch(0.62 0.1 15 / 0.12)",
    color: "oklch(0.38 0.1 15)",
  },
  "Natural Hair": {
    bg: "oklch(0.55 0.14 150 / 0.12)",
    color: "oklch(0.35 0.12 150)",
  },
  "Eco-Luxury": {
    bg: "oklch(0.55 0.14 150 / 0.1)",
    color: "oklch(0.30 0.12 150)",
  },
  Retention: {
    bg: "oklch(0.28 0.12 330 / 0.12)",
    color: "oklch(0.28 0.12 330)",
  },
  "First Visit": {
    bg: "oklch(0.78 0.12 85 / 0.18)",
    color: "oklch(0.45 0.1 85)",
  },
};

export function SalonPromotions() {
  return (
    <section id="promotions" data-ocid="salon-guide.promotions_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Sparkles size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
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
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        Feature one of these 12 signature promotions on a rotating weekly basis.
        Each is designed to drive bookings, increase average ticket, and build
        client loyalty.
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
            "Anticipation",
            "Clients check in weekly to see what is featured: free engagement",
          ],
          [
            "Scarcity",
            "Limited-time offers create urgency and drive advance bookings",
          ],
          [
            "Social Buzz",
            "A stunning weekly feature is your most powerful content hook",
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

      {/* Promotions grid */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-ocid="salon-guide.promotions_list"
      >
        {PROMOTIONS.map((promo, i) => {
          const tagStyle = TAG_COLORS[promo.tag] ?? {
            bg: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
          };
          return (
            <div
              key={promo.id}
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid oklch(0.90 0.006 75)",
                background: "oklch(0.985 0.006 75)",
              }}
              data-ocid={`salon-guide.promotion_card.${i + 1}`}
            >
              {/* Card header */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ background: tagStyle.bg }}
              >
                <span
                  className="font-display font-bold text-xs"
                  style={{ color: tagStyle.color }}
                >
                  #{promo.id}
                </span>
                <Badge
                  className="text-xs py-0"
                  style={{
                    background: tagStyle.bg,
                    color: tagStyle.color,
                    border: `1px solid ${tagStyle.color.replace(")", " / 0.3)")}`,
                  }}
                >
                  {promo.tag}
                </Badge>
              </div>
              {/* Card body */}
              <div className="p-4">
                <h3 className="font-display font-bold text-sm text-foreground mb-1 leading-snug">
                  {promo.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {promo.description}
                </p>
                <div
                  className="rounded-lg p-2.5 text-xs"
                  style={{
                    background: "oklch(0.28 0.12 330 / 0.05)",
                    borderLeft: "3px solid oklch(0.28 0.12 330 / 0.3)",
                  }}
                >
                  <strong style={{ color: "oklch(0.28 0.12 330)" }}>
                    How to promote:
                  </strong>{" "}
                  <span className="text-muted-foreground">
                    {promo.howToPromote}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rotation guide */}
      <div
        className="mt-8 rounded-xl p-6"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          Your 12-Week Rotation Calendar
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            [
              "Q1 (Weeks 1-4)",
              "Executive Refresh, CEO Color, Brooklyn Balayage, Wellness Wednesday",
            ],
            [
              "Q2 (Weeks 5-8)",
              "Manhattan Makeover, SoHo Sunday, Uptown Updo, Power Hour",
            ],
            [
              "Q3 & Q4 (Weeks 9-12)",
              "Harlem Renaissance, Green Beauty, Loyalty Luxe, First Impression",
            ],
          ].map(([period, promos]) => (
            <div key={period}>
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {period}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {promos}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
