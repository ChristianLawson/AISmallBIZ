import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Gift, RotateCcw, Sparkles, Utensils } from "lucide-react";
import { useState } from "react";

const CURRENT_MONTH_INDEX = new Date().getMonth(); // 0-based

const MAY_FOOD_FEATURED = {
  name: "The Purple Felt",
  label: "May 2026 Featured Viral Food Item",
  price: "$11",
  description:
    "Warm ube (purple yam) cream dip served with toasted cinnamon pita chips, fresh strawberries, and honey drizzle. Vivid purple color, sweet-nutty coconut-vanilla flavor: completely unlike anything else on the menu.",
  viralHook:
    "Ube has replaced matcha as the hottest Instagram ingredient of 2026: the purple color photographs beautifully under pool hall lighting and guarantees social media posts.",
  presentationTips: [
    "Serve dip in a small white ramekin so the purple pops against it",
    "Arrange pita chips and strawberries in a fan pattern around the ramekin",
    "Drizzle honey in a spiral on top just before serving",
    "Place on a dark slate board for maximum color contrast",
    'Add a small tent card: "The Purple Felt: May\'s Viral Pick"',
  ],
  trendContext:
    "Major chains including Starbucks, Costa, and Pret a Manger launched ube products this season. Its striking vivid purple color makes it extremely photogenic: the #1 TikTok food trend of 2026.",
};

const ROTATING_SPECIALS = [
  {
    month: "January",
    name: "New Year New Shot",
    description:
      "Layered vodka cranberry with gold shimmer dust, served in a tall shot glass with a gold rim: photogenic and celebratory.",
    type: "cocktail",
    viralHook: "Gold shimmer + layered gradient = instant TikTok content",
  },
  {
    month: "February",
    name: "Love Triangle",
    description:
      "Pink strawberry gin fizz with a fresh heart-shaped strawberry garnish and edible rose petals. Valentine's Day special.",
    type: "cocktail",
    viralHook: "Heart garnish drives Instagram saves: couples photo every time",
  },
  {
    month: "March",
    name: "Lucky Break",
    description:
      "Green apple whiskey sour with gold-green shimmer, served with a four-leaf clover sugar rim. St. Patrick's Day tie-in.",
    type: "cocktail",
    viralHook:
      "Green + gold shimmer is maximally shareable on St. Patrick's Day",
  },
  {
    month: "April",
    name: "Spring Rack",
    description:
      "Fresh cucumber gin and tonic with an Instagrammable spring garnish: cucumber ribbon, edible flower, mint sprig.",
    type: "cocktail",
    viralHook: "Floral garnish drives Pinterest + Instagram saves in spring",
  },
  {
    month: "May",
    name: "Cinco de Sink",
    description:
      "Spicy jalapeño margarita with a tajín rim, fresh lime wheel, and edible flower. Playful pool hall naming.",
    type: "cocktail",
    viralHook:
      "'Spicy' and 'edible flower' are top food hashtag combos on TikTok",
  },
  {
    month: "June",
    name: "Pride Break",
    description:
      "Rainbow layered mocktail using butterfly pea tea gradient: naturally changes color when citrus is added. Very photogenic.",
    type: "mocktail",
    viralHook:
      "Color-changing drinks are the #1 viral mocktail format: every time",
  },
  {
    month: "July",
    name: "Firecracker Fries",
    description:
      "Loaded fries with hot honey drizzle, crispy jalapeños, ranch drizzle, and a tiny sparkler-style toothpick flag. July 4th themed.",
    type: "food",
    viralHook:
      "Hot honey + loaded fries is 2024-2026's most-shared bar food format",
  },
  {
    month: "August",
    name: "Summer Smash",
    description:
      "Frozen watermelon paloma slush in a chilled glass with tajín rim and a fresh watermelon wedge garnish.",
    type: "cocktail",
    viralHook: "Frozen slushes with fresh fruit have massive summer engagement",
  },
  {
    month: "September",
    name: "Fall Classic",
    description:
      "Apple cider whiskey sour with cinnamon foam on top and a dehydrated apple slice: autumn in a glass.",
    type: "cocktail",
    viralHook: "Cinnamon foam + dehydrated fruit = top-tier autumn aesthetic",
  },
  {
    month: "October",
    name: "8-Ball Blackout",
    description:
      "Activated charcoal lemonade + vodka in a black cocktail, garnished with an 8-ball cherry. Halloween-themed pool hall signature.",
    type: "cocktail",
    viralHook:
      "Black cocktails + pool branding = uniquely ownable Halloween content",
  },
  {
    month: "November",
    name: "Gobble Break",
    description:
      "Spiced cranberry bourbon smash with a cinnamon stick, orange peel, and rosemary garnish. Thanksgiving warmth.",
    type: "cocktail",
    viralHook:
      "Cranberry + bourbon is the top Thanksgiving bar content formula",
  },
  {
    month: "December",
    name: "Winter Solstice",
    description:
      "Sparkling elderflower champagne with frozen cranberries and a rosemary sprig: elegant, celebratory, deeply photogenic.",
    type: "cocktail",
    viralHook: "Sparkling drinks + frozen garnish = holiday sharing gold",
  },
];

const PERMANENT_ITEMS = [
  {
    category: "Food",
    emoji: "🍟",
    name: "Loaded Truffle-Parmesan Fries",
    description:
      "Crispy fries tossed in truffle oil, shaved parmesan, chives, served with house-made whipped feta dip.",
    why: "Whipped feta + truffle fries trend drove millions of saves in 2024-2025",
  },
  {
    category: "Food",
    emoji: "🥩",
    name: "Kimchi Sliders",
    description:
      "Mini wagyu beef sliders with kimchi slaw and gochugaru aioli on brioche buns.",
    why: "Korean-fusion bar food is the fastest-growing category on social food content",
  },
  {
    category: "Food",
    emoji: "🧀",
    name: "Charcuterie & Snack Board",
    description:
      "Colorful board with cured meats, cheeses, seasonal fruit, hummus, and customizable dips. High photo value.",
    why: "Boards = guaranteed Instagram posts: customers photograph before eating",
  },
  {
    category: "Dessert",
    emoji: "🎱",
    name: "8-Ball Truffles & Cue Ball Cake Pops",
    description:
      "Dark chocolate truffles hand-rolled as 8-balls, and white cake pops styled as cue balls. Pool-themed, shareable.",
    why: "Branded themed desserts are the #1 most-photographed item category",
  },
  {
    category: "Cocktail",
    emoji: "🥂",
    name: "The Cue Ball Spritz",
    description:
      "White/cream colored signature cocktail: elderflower liqueur, prosecco, lychee: in elegant glassware. Low-calorie.",
    why: "Signature white cocktails consistently outperform colorful drinks for repost rate",
  },
  {
    category: "Mocktail",
    emoji: "🍋",
    name: "Break Shot Lemonade",
    description:
      "Layered citrus mocktail with a natural blue-to-yellow gradient: butterfly pea tea, fresh lemon, citrus foam.",
    why: "Photogenic gradient mocktails are top-3 most-shared non-alcoholic bar content",
  },
  {
    category: "Health",
    emoji: "🫧",
    name: "Kombucha on Tap",
    description:
      "Rotating seasonal kombucha on draft: ginger lemon, raspberry hibiscus, or seasonal flavor.",
    why: "Gen Z wellness trend: 41% of Gen Z prefer non-alcoholic options at bars",
  },
  {
    category: "Coffee",
    emoji: "☕",
    name: "Specialty Lattes & Cappuccinos",
    description:
      "House espresso drinks: lavender oat latte, classic cappuccino, seasonal specials. Creates all-day social atmosphere.",
    why: "Coffee service extends daytime hours and attracts women who are not drinking",
  },
];

const TYPE_COLOR: Record<string, string> = {
  cocktail: "oklch(0.55 0.23 285)",
  mocktail: "oklch(0.45 0.14 150)",
  food: "oklch(0.55 0.14 85)",
};

export function PoolHallMenuSection() {
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH_INDEX);
  const currentSpecial = ROTATING_SPECIALS[selectedMonth];

  return (
    <section id="menu" data-ocid="poolhall-guide.menu_section">
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
        Viral Food &amp; Drink Menu
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        Instagrammable items that drive free social media advertising, plus a
        rotating monthly special to keep customers coming back.
      </p>

      {/* May 2026 Featured Food Item: above drink specials */}
      {CURRENT_MONTH_INDEX === 4 && (
        <div
          className="rounded-2xl p-6 md:p-8 mb-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.22 315 / 0.14) 0%, oklch(0.55 0.14 330 / 0.08) 100%)",
            border: "2px solid oklch(0.60 0.22 315 / 0.4)",
          }}
          data-ocid="poolhall-guide.menu.featured_food"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.65 0.22 315 / 0.18)" }}
              >
                <Sparkles size={22} style={{ color: "oklch(0.55 0.25 315)" }} />
              </div>
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-widest mb-1"
                  style={{
                    background: "oklch(0.65 0.22 315 / 0.18)",
                    color: "oklch(0.50 0.22 315)",
                    border: "1px solid oklch(0.60 0.22 315 / 0.4)",
                  }}
                >
                  <Sparkles size={14} />
                  {MAY_FOOD_FEATURED.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {MAY_FOOD_FEATURED.name}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-wide"
                style={{
                  backgroundColor:
                    "color-mix(in oklch, oklch(0.55 0.22 315) 12%, transparent)",
                  color: "oklch(0.50 0.22 315)",
                  border:
                    "1px solid color-mix(in oklch, oklch(0.55 0.22 315) 30%, transparent)",
                }}
              >
                Food
              </span>
              <span
                className="px-3 py-1.5 rounded-full text-[15px] font-bold"
                style={{
                  backgroundColor:
                    "color-mix(in oklch, oklch(0.55 0.22 315) 15%, transparent)",
                  color: "oklch(0.45 0.20 315)",
                  border:
                    "1px solid color-mix(in oklch, oklch(0.55 0.22 315) 30%, transparent)",
                }}
              >
                {MAY_FOOD_FEATURED.price}
              </span>
            </div>
          </div>
          <p className="text-base text-[#71717A] leading-relaxed mb-4">
            {MAY_FOOD_FEATURED.description}
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
              <strong>Why it goes viral:</strong> {MAY_FOOD_FEATURED.viralHook}
            </span>
          </div>
          <div
            className="rounded-xl p-4 mb-4"
            style={{
              background: "oklch(0.65 0.22 315 / 0.07)",
              border: "1px solid oklch(0.60 0.22 315 / 0.2)",
            }}
          >
            <p
              className="text-[15px] font-bold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.50 0.22 315)" }}
            >
              📸 Presentation Tips for Maximum Instagram Appeal
            </p>
            <ul className="space-y-1.5">
              {MAY_FOOD_FEATURED.presentationTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-[15px] text-[#71717A]"
                >
                  <span style={{ color: "oklch(0.55 0.25 315)" }}>✦</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px] italic"
            style={{
              background: "oklch(0.65 0.22 315 / 0.06)",
              border: "1px solid oklch(0.60 0.22 315 / 0.15)",
              color: "oklch(0.45 0.15 315)",
            }}
          >
            🌍 <span>{MAY_FOOD_FEATURED.trendContext}</span>
          </div>
        </div>
      )}

      {/* This Month's Special: HERO CALLOUT */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.12) 0%, oklch(0.55 0.14 85 / 0.08) 100%)",
          border: "2px solid oklch(0.55 0.18 290 / 0.3)",
        }}
        data-ocid="poolhall-guide.menu.featured_special"
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
              background:
                TYPE_COLOR[currentSpecial.type] +
                " / 0.12)".replace("oklch", ""),
              color: TYPE_COLOR[currentSpecial.type],
              border:
                `1px solid ${TYPE_COLOR[currentSpecial.type]} / 0.3)`.replace(
                  `${TYPE_COLOR[currentSpecial.type]}`,
                  TYPE_COLOR[currentSpecial.type],
                ),
              backgroundColor: `color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type]} 12%, transparent)`,
              borderColor: `color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type]} 30%, transparent)`,
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

        {/* Month picker */}
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
                data-ocid={`poolhall-guide.menu.month_tab.${i + 1}`}
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
            Include branded take-home trinkets: mini pool cue charms and 8-ball
            coasters: with certain food orders. Customers "steal" them, then
            post them on social media as an inside joke. This creates an
            emotional inside-joke loop: branded items spread organically, each
            one reaching an average of 300-500 followers. The tiny item cost is
            repaid 100x in free advertising.
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
            data-ocid={`poolhall-guide.menu.item.${i + 1}`}
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
