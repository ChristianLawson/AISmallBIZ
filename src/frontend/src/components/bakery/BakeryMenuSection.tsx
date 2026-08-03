import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Gift, RotateCcw, Sparkles, Utensils } from "lucide-react";
import { useState } from "react";

const CURRENT_MONTH_INDEX = new Date().getMonth();

const JUNE_FOOD_FEATURED = {
  name: "Pistachio Cream Croissant",
  label: "June 2026 Featured Viral Item",
  price: "$7",
  description:
    "Buttery laminated croissant filled with pistachio cream pastry crème, topped with crushed pistachios, a dusting of powdered sugar, and a drizzle of pistachio oil. The rich green color contrasts beautifully against the golden pastry: a guaranteed stop-the-scroll photo every time.",
  viralHook:
    "The pistachio trend exploded from Dubai viral chocolate onto croissants across TikTok in 2025-2026. Pistachio pastries have become the #1 most-saved bakery content format worldwide: visually stunning, premium-feeling, and immediately recognizable.",
  presentationTips: [
    "Serve on a white ceramic plate with a light dusting of powdered sugar around it",
    "Place two or three on a dark slate board for hero shots",
    "Film the 'crack' of the croissant: the lamination reveal is extremely shareable",
    "Top with a single whole pistachio and a small edible flower for upscale appeal",
    'Tag as "June Only" with a small handwritten card beside the display case item',
  ],
  trendContext:
    "Following the Dubai chocolate pistachio viral moment, pistachio cream fillings swept European and American bakeries. Chains including Starbucks and major pastry groups added pistachio launches in 2025-2026. Independent bakeries offering it now capture massive organic search and social traffic.",
};

const ROTATING_SPECIALS = [
  {
    month: "January",
    name: "Matcha Tahini Croissant",
    description:
      "Flaky croissant with matcha cream filling and tahini glaze. Earthy, rich, and visually arresting with the green-gold contrast.",
    type: "pastry",
    viralHook:
      "Matcha + tahini combination is a top food blogger formula: unexpected but immediately photogenic",
  },
  {
    month: "February",
    name: "Strawberry Rose Tart",
    description:
      "Heart-shaped vanilla custard tart topped with macerated strawberries, edible rose petals, and a raspberry glaze. Valentine's Day showpiece.",
    type: "pastry",
    viralHook:
      "Heart-shaped pastries + edible flowers drive massive Valentine's Day sharing: every single year",
  },
  {
    month: "March",
    name: "Earl Grey London Fog Cake",
    description:
      "Three-layer cake infused with Earl Grey, lavender cream cheese frosting, and candied lemon. Sophisticated, fragrant, deeply photogenic.",
    type: "cake",
    viralHook:
      "Tea-infused cake content performs extremely well on Pinterest and Instagram during spring transition",
  },
  {
    month: "April",
    name: "Lemon Ricotta Almond Tart",
    description:
      "Bright citrus tart with ricotta cream, toasted almonds, and fresh lemon zest. Spring freshness in every bite: vibrant yellow visual.",
    type: "pastry",
    viralHook:
      "Bright yellow lemon desserts are spring's most-shared bakery format: universally appealing",
  },
  {
    month: "May",
    name: "Ube Custard Danish",
    description:
      "Flaky Danish pastry with vivid purple ube custard filling, coconut glaze, and toasted coconut flakes. Instagram-stopping purple color.",
    type: "pastry",
    viralHook:
      "Ube's vibrant purple is 2025-2026's most-photographed food color: chains scrambled to add it",
  },
  {
    month: "June",
    name: "Pistachio Cream Croissant",
    description:
      "Laminated croissant with pistachio pastry crème, crushed pistachios, and pistachio oil drizzle. The TikTok pastry of 2026.",
    type: "pastry",
    viralHook:
      "Pistachio croissants exploded from the Dubai chocolate trend: most-saved bakery content of 2026",
  },
  {
    month: "July",
    name: "Peach Cardamom Galette",
    description:
      "Rustic free-form galette with fresh summer peaches, cardamom-spiced frangipane, and honey drizzle. Summer simplicity at its best.",
    type: "pastry",
    viralHook:
      "Rustic galettes with fresh stone fruit are summer's most-shared bakery photo format",
  },
  {
    month: "August",
    name: "Blackberry Lavender Scone",
    description:
      "British-style scone with fresh blackberries, lavender sugar glaze, and clotted cream. Deep purple and lavender visual palette.",
    type: "pastry",
    viralHook:
      "Lavender + berry combination consistently outperforms all other summer scone content on saves",
  },
  {
    month: "September",
    name: "Apple Cinnamon Cruffin",
    description:
      "Croissant-muffin hybrid with spiced apple filling, cinnamon sugar crust, and caramel drizzle. The quintessential fall bake.",
    type: "pastry",
    viralHook:
      "Cruffins are the #1 autumn viral pastry format: apple + cinnamon drives massive fall engagement",
  },
  {
    month: "October",
    name: "Pumpkin Spice Choux",
    description:
      "Choux pastry filled with pumpkin spice crème pâtissière, topped with orange glaze and a gold leaf accent. Halloween-autumn showpiece.",
    type: "pastry",
    viralHook:
      "Pumpkin spice choux is a premium alternative to PSL drinks: high photo value, lower competition",
  },
  {
    month: "November",
    name: "Brown Butter Pecan Tart",
    description:
      "Rich brown butter custard tart with candied pecans, bourbon caramel drizzle, and fleur de sel. Thanksgiving elegance.",
    type: "pastry",
    viralHook:
      "Brown butter + pecan is the top Thanksgiving bakery content formula across all platforms",
  },
  {
    month: "December",
    name: "Cardamom Cranberry Stollen",
    description:
      "Traditional German stollen with cardamom, dried cranberries, marzipan center, and powdered sugar snowfall finish. Holiday showpiece.",
    type: "bread",
    viralHook:
      "Holiday stollen content spikes massively on Pinterest in December: highest bakery search volume of the year",
  },
];

const PERMANENT_ITEMS = [
  {
    category: "Drink",
    emoji: "🍵",
    name: "Matcha Ceremonial Latte",
    description:
      "Ceremonial grade matcha with oat milk, light sweetness. Vibrant green: always photographed.",
    why: "Matcha lattes are the most-posted café drink on Instagram: universal visual appeal",
  },
  {
    category: "Drink",
    emoji: "💜",
    name: "Lavender Cold Brew",
    description:
      "Slow-drip cold brew with lavender simple syrup and oat milk. Pastel purple color drives Instagram saves.",
    why: "Lavender cold brew is the #1 trending café drink of 2025-2026: visual and flavor-forward",
  },
  {
    category: "Drink",
    emoji: "🧋",
    name: "Brown Sugar Oat Boba",
    description:
      "House-made brown sugar syrup with oat milk and tapioca pearls. The Gen Z café staple.",
    why: "Boba drives the highest café social media engagement among 18-35 demographics: period",
  },
  {
    category: "Pastry",
    emoji: "🥐",
    name: "Classic Butter Croissant",
    description:
      "28-layer laminated butter croissant with honeyed butter and house jam on the side.",
    why: "Croissant lamination videos are the most-saved bakery content format on TikTok",
  },
  {
    category: "Bread",
    emoji: "🍞",
    name: "Sourdough Loaf",
    description:
      "Long-fermented sourdough with a crackling crust and open crumb. Sliced tableside on request.",
    why: "Sourdough cross-section shots drive enormous Pinterest and Instagram engagement",
  },
  {
    category: "Sweet",
    emoji: "🎂",
    name: "Mini Layer Cakes (rotating flavors)",
    description:
      "Single-serve 4-inch layer cakes with seasonal flavors. Displayed on tiered stands for visual impact.",
    why: "Mini cake reveals are TikTok's highest-performing bakery format: the 'cut reveal' is irresistible",
  },
  {
    category: "Savory",
    emoji: "🧀",
    name: "Cheese & Herb Scone",
    description:
      "Sharp cheddar, rosemary, and chive scone served warm. Appeals to non-sweet customers.",
    why: "Savory bakery items extend the customer base by 30%: captures the 'not a sweet person' segment",
  },
  {
    category: "Health",
    emoji: "🌿",
    name: "Vegan Almond Croissant",
    description:
      "Vegan laminated croissant with almond paste and sliced almonds. Labeled prominently.",
    why: "Vegan pastry content has 2-3x the shareability of conventional pastry: strong advocacy community",
  },
];

const TYPE_COLOR: Record<string, string> = {
  pastry: "oklch(0.55 0.23 285)",
  cake: "oklch(0.45 0.14 150)",
  bread: "oklch(0.55 0.14 85)",
  drink: "oklch(0.50 0.18 220)",
};

export function BakeryMenuSection() {
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH_INDEX);
  const currentSpecial = ROTATING_SPECIALS[selectedMonth];

  return (
    <section id="menu" data-ocid="bakery-guide.menu_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Utensils size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-[15px] font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 2: Viral Menu
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Viral Bakery &amp; Café Menu
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        Instagrammable items that drive organic social advertising, plus a
        rotating monthly featured item to keep customers coming back.
      </p>

      {/* June 2026 Featured Food Item */}
      {CURRENT_MONTH_INDEX === 5 && (
        <div
          className="rounded-2xl p-6 md:p-8 mb-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.60 0.16 145 / 0.12) 0%, oklch(0.55 0.12 145 / 0.08) 100%)",
            border: "2px solid oklch(0.55 0.16 145 / 0.4)",
          }}
          data-ocid="bakery-guide.menu.featured_food"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.60 0.16 145 / 0.18)" }}
              >
                <Sparkles size={22} style={{ color: "oklch(0.50 0.18 145)" }} />
              </div>
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-widest mb-1"
                  style={{
                    background: "oklch(0.60 0.16 145 / 0.18)",
                    color: "oklch(0.40 0.18 145)",
                    border: "1px solid oklch(0.55 0.16 145 / 0.4)",
                  }}
                >
                  <Sparkles size={14} />
                  {JUNE_FOOD_FEATURED.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {JUNE_FOOD_FEATURED.name}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-wide"
                style={{
                  backgroundColor:
                    "color-mix(in oklch, oklch(0.50 0.18 145) 12%, transparent)",
                  color: "oklch(0.40 0.18 145)",
                  border:
                    "1px solid color-mix(in oklch, oklch(0.50 0.18 145) 30%, transparent)",
                }}
              >
                Pastry
              </span>
              <span
                className="px-3 py-1.5 rounded-full text-[15px] font-bold"
                style={{
                  backgroundColor:
                    "color-mix(in oklch, oklch(0.50 0.18 145) 15%, transparent)",
                  color: "oklch(0.40 0.18 145)",
                  border:
                    "1px solid color-mix(in oklch, oklch(0.50 0.18 145) 30%, transparent)",
                }}
              >
                {JUNE_FOOD_FEATURED.price}
              </span>
            </div>
          </div>
          <p className="text-base text-[#71717A] leading-relaxed mb-4">
            {JUNE_FOOD_FEATURED.description}
          </p>
          <div
            className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px] mb-4"
            style={{
              background: "oklch(0.55 0.14 85 / 0.08)",
              border: "1px solid oklch(0.55 0.14 85 / 0.2)",
            }}
          >
            <Camera
              size={15}
              className="shrink-0 mt-0.5"
              style={{ color: "oklch(0.55 0.14 85)" }}
            />
            <span style={{ color: "oklch(0.40 0.1 85)" }}>
              <strong>Why it goes viral:</strong> {JUNE_FOOD_FEATURED.viralHook}
            </span>
          </div>
          <div
            className="rounded-xl p-4 mb-4"
            style={{
              background: "oklch(0.60 0.16 145 / 0.07)",
              border: "1px solid oklch(0.55 0.16 145 / 0.2)",
            }}
          >
            <p
              className="text-[15px] font-bold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.40 0.18 145)" }}
            >
              📸 Presentation Tips for Maximum Instagram Appeal
            </p>
            <ul className="space-y-1.5">
              {JUNE_FOOD_FEATURED.presentationTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-[15px] text-[#71717A]"
                >
                  <span style={{ color: "oklch(0.50 0.18 145)" }}>✦</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px] italic"
            style={{
              background: "oklch(0.60 0.16 145 / 0.06)",
              border: "1px solid oklch(0.55 0.16 145 / 0.15)",
              color: "oklch(0.40 0.16 145)",
            }}
          >
            🌍 <span>{JUNE_FOOD_FEATURED.trendContext}</span>
          </div>
        </div>
      )}

      {/* Monthly Rotating Special */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.12) 0%, oklch(0.55 0.14 85 / 0.08) 100%)",
          border: "2px solid oklch(0.55 0.18 290 / 0.3)",
        }}
        data-ocid="bakery-guide.menu.featured_special"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.55 0.18 290 / 0.15)" }}
            >
              <RotateCcw size={22} style={{ color: "oklch(0.50 0.22 290)" }} />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-widest mb-1"
                style={{
                  background: "oklch(0.55 0.18 290 / 0.15)",
                  color: "oklch(0.50 0.22 290)",
                  border: "1px solid oklch(0.55 0.18 290 / 0.3)",
                }}
              >
                <RotateCcw size={14} />
                This Month&rsquo;s Special
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {currentSpecial.name}
              </h3>
            </div>
          </div>
          <span
            className="px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-wide"
            style={{
              backgroundColor: `color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type] ?? TYPE_COLOR.pastry} 12%, transparent)`,
              color: TYPE_COLOR[currentSpecial.type] ?? TYPE_COLOR.pastry,
              borderColor: `color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type] ?? TYPE_COLOR.pastry} 30%, transparent)`,
              border: "1px solid",
            }}
          >
            {currentSpecial.type}
          </span>
        </div>
        <p className="text-base text-[#71717A] leading-relaxed mb-4">
          {currentSpecial.description}
        </p>
        <div
          className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px]"
          style={{
            background: "oklch(0.55 0.14 85 / 0.08)",
            border: "1px solid oklch(0.55 0.14 85 / 0.2)",
          }}
        >
          <Camera
            size={15}
            className="shrink-0 mt-0.5"
            style={{ color: "oklch(0.55 0.14 85)" }}
          />
          <span style={{ color: "oklch(0.40 0.1 85)" }}>
            <strong>Why it goes viral:</strong> {currentSpecial.viralHook}
          </span>
        </div>
        <div className="mt-6">
          <p className="text-[15px] text-[#71717A] mb-3 font-medium">
            Preview all 12 monthly rotations:
          </p>
          <div className="flex flex-wrap gap-2">
            {ROTATING_SPECIALS.map((s, i) => (
              <button
                key={s.month}
                type="button"
                onClick={() => setSelectedMonth(i)}
                data-ocid={`bakery-guide.menu.month_tab.${i + 1}`}
                className="px-3 py-1.5 rounded-lg text-[15px] font-medium transition-all duration-200"
                style={{
                  background:
                    selectedMonth === i
                      ? "oklch(0.55 0.23 285)"
                      : "oklch(0.55 0.18 290 / 0.08)",
                  color: selectedMonth === i ? "#fff" : "oklch(0.45 0.14 290)",
                  border:
                    selectedMonth === i
                      ? "1px solid oklch(0.55 0.23 285)"
                      : "1px solid oklch(0.55 0.18 290 / 0.2)",
                  fontWeight: i === CURRENT_MONTH_INDEX ? "700" : undefined,
                }}
              >
                {s.month.slice(0, 3)}
                {i === CURRENT_MONTH_INDEX && " ★"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Planned Loss Strategy */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.2)",
        }}
      >
        <Gift
          size={28}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.50 0.22 290)" }}
        />
        <div>
          <h3 className="font-display font-bold text-lg text-foreground mb-1">
            The Planned Loss Strategy
          </h3>
          <p className="text-[15px] text-[#71717A] leading-relaxed">
            Include branded take-home items: mini recipe cards, branded pastry
            bags, or oven-themed stickers: with orders above a threshold.
            Customers photograph them and post the haul. Each branded bag in a
            social post reaches 300-500 followers. The tiny cost is repaid 100x
            in free advertising. Bonus: your packaging IS your branding.
          </p>
        </div>
      </div>

      {/* Permanent Core Items */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Core Permanent Menu: Always Viral
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {PERMANENT_ITEMS.map((item, i) => (
          <Card
            key={item.name}
            className="hover:border-primary/35 transition-all duration-200"
            data-ocid={`bakery-guide.menu.item.${i + 1}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: "oklch(0.55 0.18 290 / 0.08)" }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="font-display font-semibold text-[15px] text-foreground">
                      {item.name}
                    </h4>
                    <span
                      className="text-[15px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.55 0.18 290 / 0.1)",
                        color: "oklch(0.45 0.14 290)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[15px] text-[#71717A] leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <div
                    className="text-[11px] rounded px-2 py-1"
                    style={{
                      background: "oklch(0.78 0.12 85 / 0.1)",
                      color: "oklch(0.40 0.1 85)",
                      borderLeft: "2px solid oklch(0.55 0.14 85 / 0.4)",
                    }}
                  >
                    📈 {item.why}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
