import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";

const CURRENT_MONTH_INDEX = new Date().getMonth();

const JUNE_FEATURED = {
  name: "Cherry Cola Deep Burgundy Slip Dress",
  label: "June 2026 Featured Trend Item",
  priceRange: "$68 to $148",
  description:
    "A sleek, bias-cut midi slip dress in deep burgundy and cherry cola tones. Satin or charmeuse fabric, adjustable spaghetti straps, subtle cowl neckline. The Cherry Cola color trend is the #1 fashion color story of June 2026 on TikTok and Pinterest, replacing millennial pink as the decade's defining hue.",
  viralHook:
    "Cherry Cola tones (deep burgundy, wine, dark cherry) have exploded across TikTok fashion content in 2026. The aesthetic merges old-money sensibility with modern femininity. It photographs beautifully under warm lighting and pairs with both casual and elevated looks.",
  stylingTips: [
    "Style with gold jewelry and cream blazer for a quiet luxury office look",
    "Pair with white sneakers and a mini bag for casual TikTok styling content",
    "Layer over a fitted white long-sleeve tee for transitional weather",
    "Display on a warm-toned wooden hanger with a burgundy mood board behind it",
    "Film a 3 ways to wear the Cherry Cola dress TikTok for extremely shareable content",
  ],
  trendContext:
    "Cherry Cola is the dominant color trend tracked by WGSN, Pantone trend forecasters, and TikTok fashion analysts for Q2 to Q3 2026. Brands from Zara to Staud have launched burgundy collections. Independent boutiques that carry it now capture massive organic search traffic and social saves.",
};

const ROTATING_TRENDS = [
  {
    month: "January",
    name: "Quiet Luxury White Shirt Collection",
    description:
      "Oversized poplin button-downs in crisp white and ivory. The Row-inspired basics that photograph beautifully and sell year-round.",
    trend:
      "Quiet luxury is the anti-fast-fashion movement driving high-AOV boutique sales",
  },
  {
    month: "February",
    name: "Valentine's Red Satin Pieces",
    description:
      "Red satin cami tops, slip skirts, and wrap dresses. The perennial February sell-through champion for boutiques.",
    trend:
      "Valentine's red drives the highest boutique conversion rate of the year every single year",
  },
  {
    month: "March",
    name: "Spring Floral Midi Dresses",
    description:
      "Romantic floral prints on flowing midi silhouettes. Cottage-core meets modern femininity and Pinterest's most-saved spring format.",
    trend:
      "Floral midi dresses are spring's top-selling boutique category. Stock 3 weeks early",
  },
  {
    month: "April",
    name: "Linen Co-ord Sets",
    description:
      "Matching linen blazer-and-trouser or shorts co-ords in cream, sage, and terracotta. Minimal, elevated, and infinitely outfittable.",
    trend:
      "Co-ord sets are the #1 fashion format driving outfit inspo saves on Pinterest in spring 2026",
  },
  {
    month: "May",
    name: "Coastal Grandmother Linen",
    description:
      "Relaxed linen pants, loose-fit cotton tops, and woven accessories in sand, off-white, and sky blue. The aesthetic that took over TikTok.",
    trend:
      "Coastal grandmother content outperforms all other fashion aesthetics on saves-per-post on Instagram",
  },
  {
    month: "June",
    name: "Cherry Cola Slip Dress",
    description:
      "Deep burgundy bias-cut slip dresses in satin and charmeuse. The #1 color trend on TikTok and Pinterest for Q2 2026.",
    trend:
      "Cherry Cola tones are tracking as the color of 2026 across every major trend forecaster",
  },
  {
    month: "July",
    name: "Mesh & Sheer Overlay Tops",
    description:
      "Sheer mesh tops over satin camisoles and flutter-sleeve organza blouses. The barely-there trend driving maximum engagement in summer.",
    trend:
      "Sheer and mesh layering content is TikTok's highest-performing summer fashion format of 2026",
  },
  {
    month: "August",
    name: "Transitional Knit Cardigans",
    description:
      "Oversized, chunky-knit open-front cardigans in neutral and caramel tones. The end-of-summer hero piece.",
    trend:
      "August cardigan content peaks in Pinterest saves as shoppers begin planning fall wardrobes",
  },
  {
    month: "September",
    name: "Chocolate Brown Head-to-Toe",
    description:
      "Monochromatic chocolate brown looks in trousers, blazers, and boots in the same warm brunette tone. Minimalist fall royalty.",
    trend:
      "Chocolate brown monochrome is fall 2026's emerging power aesthetic tracked by Vogue Business",
  },
  {
    month: "October",
    name: "Velvet Party Pieces",
    description:
      "Velvet slip dresses, tailored velvet blazers, and velvet headbands. The event-season hero material with the best tactile photography.",
    trend:
      "Velvet is October's perennial top-seller in boutiques. Start promoting it the first week",
  },
  {
    month: "November",
    name: "Holiday Party Sequin Minis",
    description:
      "Micro-sequin mini dresses in gold, silver, and champagne. The product category with the highest boutique sell-through of the year in November.",
    trend:
      "Holiday party dress content hits peak TikTok engagement in early November. Promote before competitors",
  },
  {
    month: "December",
    name: "Luxe Faux Fur Coats",
    description:
      "Statement faux fur coats in ivory, cognac, and leopard print. The Instagram fashion moment of the season.",
    trend:
      "Faux fur coat try-on content is December's most-saved fashion format and drives massive gift guide traffic",
  },
];

const SIGNATURE_OFFERINGS = [
  {
    category: "Trend",
    emoji: "\u2728",
    name: "Quiet Luxury Basics Bar",
    description:
      "A dedicated section of elevated basics: cashmere-blend tees, tailored trousers, silk camis. Timeless, aspirational, high-margin.",
    why: "Quiet luxury is 2026's dominant aesthetic. Customers buying one piece come back for the whole wardrobe",
  },
  {
    category: "Loyalty",
    emoji: "\u{1F4CF}",
    name: "Size-Inclusive Range (XS to 5X)",
    description:
      "Full size run on hero items. Display inclusive sizing prominently on your website, social media, and in-store signage.",
    why: "Size-inclusive boutiques generate 4x more positive word-of-mouth and 60% higher repeat purchase rates",
  },
  {
    category: "Viral",
    emoji: "\u{1F39F}",
    name: "The Rental Rack",
    description:
      "Rent 1 to 3 statement pieces per week (event dresses, statement blazers) for a flat $35 to $50 fee. Foot traffic driver with near-zero inventory cost.",
    why: "Rental rack content drives huge TikTok engagement. The renting this $400 dress for $40 format has millions of views",
  },
  {
    category: "FOMO",
    emoji: "\u{1F5D3}",
    name: "Seasonal Capsule Collection Drops",
    description:
      "6 limited-item seasonal drops per year. Each drop: 8 to 12 curated pieces, announced 72 hours in advance, email list gets first access.",
    why: "Limited drops create urgency that drives email sign-ups, repeat visits, and social sharing. The boutique's secret weapon",
  },
  {
    category: "Trust",
    emoji: "\u267B",
    name: "Sustainable & Secondhand Corner",
    description:
      "Dedicate a curated corner of the store to pre-loved designer pieces and sustainable brands. Price clearly, style beautifully.",
    why: "A visible sustainability section increases brand trust with Gen Z and Millennial shoppers, the two highest-spending boutique demographics",
  },
];

export function BoutiqueMerchandiseSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="menu" data-ocid="boutique-guide.merchandise_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.14 330 / 0.12)" }}
        >
          <ShoppingBag size={20} style={{ color: "oklch(0.48 0.18 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.14 330 / 0.1)",
            color: "oklch(0.38 0.14 330)",
            border: "1px solid oklch(0.62 0.14 330 / 0.3)",
          }}
        >
          Section 2
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Merchandise Strategy &amp; Viral Trend Items
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Monthly rotating trend spotlights, signature offerings that drive
        loyalty, and the 2026 aesthetics dominating boutique sales right now.
      </p>

      {/* June featured */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.1 330 / 0.9) 0%, oklch(0.22 0.12 15 / 0.85) 100%)",
        }}
        data-ocid="boutique-guide.merchandise_featured"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={18} style={{ color: "oklch(0.82 0.14 85)" }} />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.82 0.14 85)" }}
          >
            {JUNE_FEATURED.label}
          </span>
        </div>
        <h3
          className="font-display text-2xl font-bold mb-2"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          {JUNE_FEATURED.name}
        </h3>
        <p className="text-sm mb-3" style={{ color: "oklch(0.85 0.01 75)" }}>
          {JUNE_FEATURED.description}
        </p>
        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: "oklch(1 0 0 / 0.07)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "oklch(0.82 0.14 85)" }}
          >
            Why it goes viral
          </p>
          <p className="text-sm" style={{ color: "oklch(0.85 0.01 75)" }}>
            {JUNE_FEATURED.viralHook}
          </p>
        </div>
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "oklch(0.82 0.14 85)" }}
          >
            Styling &amp; content tips
          </p>
          <ul className="space-y-1.5">
            {JUNE_FEATURED.stylingTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-sm"
                style={{ color: "oklch(0.85 0.01 75)" }}
              >
                <span
                  className="shrink-0 mt-0.5"
                  style={{ color: "oklch(0.82 0.14 85)" }}
                >
                  &rsaquo;
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rotating 12-month specials */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <RotateCcw size={16} style={{ color: "oklch(0.50 0.22 290)" }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            12-Month Rotating Trend Spotlight
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ROTATING_TRENDS.slice(0, showAll ? 12 : 6).map((item, i) => {
            const isCurrent = i === CURRENT_MONTH_INDEX;
            return (
              <div
                key={item.month}
                className="rounded-xl p-4 transition-all duration-200"
                style={{
                  background: isCurrent
                    ? "oklch(0.55 0.18 290 / 0.12)"
                    : "oklch(0.55 0.18 290 / 0.04)",
                  border: isCurrent
                    ? "1.5px solid oklch(0.55 0.18 290 / 0.5)"
                    : "1px solid oklch(0.55 0.18 290 / 0.12)",
                }}
                data-ocid={`boutique-guide.merchandise_rotation.item.${i + 1}`}
              >
                {isCurrent && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest mb-1 block"
                    style={{ color: "oklch(0.50 0.22 290)" }}
                  >
                    This Month
                  </span>
                )}
                <div className="font-semibold text-sm text-foreground mb-0.5">
                  {item.month}: {item.name}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                  {item.description}
                </p>
                <p
                  className="text-xs italic"
                  style={{ color: "oklch(0.50 0.22 290)" }}
                >
                  {item.trend}
                </p>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          className="mt-4 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          style={{
            color: "oklch(0.50 0.22 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.3)",
            background: "oklch(0.55 0.18 290 / 0.06)",
          }}
          data-ocid="boutique-guide.merchandise_show_all_button"
        >
          {showAll ? "Show less" : "See all 12 months"}
        </button>
      </div>

      {/* Signature offerings */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Signature Offerings That Drive Loyalty
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SIGNATURE_OFFERINGS.map((item) => (
          <Card
            key={item.name}
            className="hover:shadow-md transition-all duration-200"
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.emoji}</span>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.62 0.14 330 / 0.1)",
                    color: "oklch(0.38 0.14 330)",
                  }}
                >
                  {item.category}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-foreground mb-1">
                {item.name}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {item.description}
              </p>
              <p
                className="text-xs italic"
                style={{ color: "oklch(0.50 0.22 290)" }}
              >
                {item.why}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
