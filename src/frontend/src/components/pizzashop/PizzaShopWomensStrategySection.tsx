import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  BarChart3,
  Heart,
  Lightbulb,
  Quote,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users2,
  Utensils,
  Venus,
} from "lucide-react";

const COMPLAINT_STATS = [
  {
    rank: "#1",
    label: "Restroom Cleanliness",
    desc: "73% of women rank restroom cleanliness as a top-3 factor in choosing a casual dining spot. It signals overall operational standards.",
  },
  {
    rank: "#2",
    label: "Uncomfortable Seating",
    desc: "Hard stools, cramped spacing, and wobbly tables drive women away. Comfortable seating with back support is non-negotiable.",
  },
  {
    rank: "#3",
    label: "Lack of Lighter Options",
    desc: "A menu with only pizza feels exclusionary. Women want salads, gluten-free options, and half-pie choices.",
  },
  {
    rank: "#4",
    label: "Overly Loud Environment",
    desc: "Sports-bar volume and aggressive decor make women feel unwelcome. Conversational noise level is essential.",
  },
  {
    rank: "#5",
    label: "Poor Lighting & Safety",
    desc: "Dim entrances, unclear sightlines, and isolated seating areas create safety concerns that override food quality.",
  },
];

const GOALS = [
  "Create a pizza shop where women feel safe, comfortable, and genuinely welcomed",
  "Increase female customer share to 45-55% within 12 months (industry average is 35%)",
  "Build a family-friendly reputation that drives group orders and catering revenue",
];

const SAFETY_RULES = [
  "Well-lit entrance and parking area with clear sightlines",
  "Clean, well-stocked restrooms checked every 30 minutes",
  "Female staff visible behind the counter and in management",
  "No aggressive or exclusionary decor, signage, or music",
  "Clear pathways and uncluttered floors throughout the dining area",
  "Security cameras visible for deterrence and staff safety",
  "Staff trained to assist any customer who feels uncomfortable",
];

const FOOD_ITEMS = [
  {
    name: "The Garden Goddess Salad",
    desc: "Mixed greens, roasted vegetables, goat cheese, balsamic glaze. A substantial salad that feels like a meal, not an afterthought.",
    tag: "Most Ordered",
  },
  {
    name: "Gluten-Free Cauliflower Crust",
    desc: "Crispy, flavorful, and indistinguishable from regular crust to non-GF diners. Served on a branded GF plate.",
    tag: "Dietary Inclusive",
  },
  {
    name: "Half-Pie 'Date Night' Special",
    desc: "Two half-pies, one salad, and two drinks for $28. Perfect for couples who want variety without waste.",
    tag: "Smart Value",
  },
  {
    name: "Vegan Margherita with Cashew Mozz",
    desc: "House-made cashew mozzarella, San Marzano tomatoes, fresh basil. So good that non-vegans order it.",
    tag: "Viral Favorite",
  },
];

const DRINK_ITEMS = [
  {
    name: "The Brooklyn Spritz",
    desc: "Signature mocktail with blood orange, prosecco, and a rosemary sprig. Vibrant color, Instagram-worthy garnish.",
  },
  {
    name: "House-Made Lemonades",
    desc: "Regular, strawberry-basil, and lavender. Fresh, not powdered. Served in mason jars with paper straws.",
  },
  {
    name: "Local Craft Beer Flight",
    desc: "Four 4-oz pours from neighborhood breweries. Rotates monthly. Supports local and drives discovery.",
  },
  {
    name: "Specialty Coffee & Dessert Pairing",
    desc: "Espresso with a mini cannoli or affogato. Creates an all-day social atmosphere beyond just lunch and dinner.",
  },
];

const MARKETING_PLAN = [
  {
    icon: TrendingUp,
    title: "Social Media Campaigns",
    desc: "Promote family meal deals, date night specials, and behind-the-scenes content. Highlight real families and diverse groups enjoying your pizza.",
  },
  {
    icon: Users2,
    title: "Local Partnerships",
    desc: "Collaborate with parent groups, fitness studios, and women's organizations. Cross-promote events and catering.",
  },
  {
    icon: Star,
    title: "In-House Advertising",
    desc: "Table tents promoting family deals, loyalty program, and catering. Menu boards with photos of lighter options.",
  },
  {
    icon: Target,
    title: "Group Incentives",
    desc: "Book club discount: 15% off for groups of 6+. Mom's morning out: free coffee with any pie before 11 AM.",
  },
  {
    icon: BarChart3,
    title: "Email & SMS Marketing",
    desc: "Build a list from in-store signups. Send weekly specials, event invites, and birthday rewards. Segment by family vs. individual.",
  },
];

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

export function PizzaShopWomensStrategySection() {
  return (
    <section
      id="womens-strategy"
      data-ocid="pizzashop-guide.womens_strategy_section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: ACCENT_BG }}
        >
          <Venus size={20} style={{ color: ACCENT }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: ACCENT_LIGHT,
            color: ACCENT,
            border: `1px solid ${ACCENT}40`,
          }}
        >
          Women&apos;s Strategy
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Women&apos;s Strategy for Pizza Shops
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        Women make 85% of household food purchasing decisions. A pizza shop that
        welcomes women wins families, groups, and repeat orders. This is not a
        social cause: it is an untapped market opportunity.
      </p>

      {/* HERO STAT BANNER */}
      <div
        className="rounded-2xl p-6 mb-12"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_LIGHT }}
          >
            <BarChart3 size={24} style={{ color: ACCENT }} />
          </div>
          <div>
            <h3
              className="font-display text-xl font-bold mb-1"
              style={{ color: "#92400E" }}
            >
              The Business Case for Women
            </h3>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "#78350F" }}
            >
              <strong>85% of household food purchases</strong> are influenced by
              women. A pizza shop that welcomes women does not just gain female
              customers: it gains families, office groups, book clubs, and
              school events. This is not a social cause. It is a revenue
              strategy.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: The Taffer Diagnosis */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            The Taffer Diagnosis
          </h3>
        </div>
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: "rgba(255, 251, 235, 0.8)",
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <p className="text-[15px] leading-relaxed text-foreground">
            Jon Taffer&apos;s first rule:{" "}
            <strong>
              &ldquo;You can&rsquo;t fix what you won&rsquo;t face.&rdquo;
            </strong>{" "}
            Here&apos;s what the data actually says about why women choose one
            pizza shop over another: and why it&apos;s a{" "}
            <em>fixable problem</em>, not a permanent one.
          </p>
        </div>

        <h4 className="font-semibold text-foreground mb-4 text-[15px] uppercase tracking-wide">
          What Women Are Telling Us: Ranked by Decision Impact
        </h4>
        <div className="space-y-3">
          {COMPLAINT_STATS.map((item) => (
            <Card
              key={item.rank}
              className="overflow-hidden"
              data-ocid={`pizzashop-guide.womens_complaint.item.${item.rank.replace("#", "")}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="flex-none w-14 flex items-center justify-center"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <span
                      className="font-display text-lg font-bold"
                      style={{ color: ACCENT }}
                    >
                      {item.rank}
                    </span>
                  </div>
                  <div className="flex-1 p-4">
                    <p className="font-semibold text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION: Goals */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Goals
          </h3>
        </div>
        <div className="space-y-2">
          {GOALS.map((goal, i) => (
            <div
              key={goal}
              className="flex items-start gap-3 rounded-lg p-4"
              style={{
                background: ACCENT_LIGHT,
                border: `1px solid ${ACCENT}20`,
              }}
              data-ocid={`pizzashop-guide.womens_goal.item.${i + 1}`}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${ACCENT}40` }}
              >
                <span className="text-xs font-bold" style={{ color: "#fff" }}>
                  {i + 1}
                </span>
              </div>
              <p className="text-[15px] text-foreground leading-relaxed">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: 6 Strategies */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            6 Core Strategies
          </h3>
        </div>

        {/* Strategy 1: Safety & Comfort */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.1"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                01
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  Safety &amp; Comfort: The Foundation
                </h4>
                <p className="text-xs text-muted-foreground">
                  Reid Holmes: Appreciated Branding Connection
                </p>
              </div>
            </div>
            <div
              className="rounded-lg p-4 mb-5"
              style={{
                background: ACCENT_LIGHT,
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Reid Holmes teaches</strong> that customers who feel
                genuinely valued become your most powerful advocates. For women,
                that feeling starts with safety and comfort: not marketing.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                [
                  "Well-Lit Environment",
                  "Ensure the entrance, parking area, and pathways are well-lit with clear sightlines from the street. Women assess safety before they assess the menu.",
                ],
                [
                  "Restroom Excellence",
                  "Restrooms must be clean, well-stocked, and checked every 30 minutes. A 2024 hospitality study found 73% of women rank restroom cleanliness as a top-3 factor.",
                ],
                [
                  "Visible Female Staff",
                  "Female staff behind the counter and in management roles send an immediate signal of inclusivity and safety.",
                ],
                [
                  "Welcoming Atmosphere",
                  "Conversational noise level, comfortable seating with back support, and clean, uncluttered spaces. Avoid sports-bar aesthetics.",
                ],
              ].map(([title, body]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <div>
                    <strong className="text-sm text-foreground">
                      {title}:{" "}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      {body}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Safety Charter Card */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(255, 251, 235, 0.8)",
                border: `2px solid ${ACCENT}35`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} style={{ color: ACCENT }} />
                <h5
                  className="font-display font-bold text-[15px]"
                  style={{ color: ACCENT }}
                >
                  The Women&apos;s Comfort Charter: Post These Standards
                </h5>
              </div>
              <ul className="space-y-2">
                {SAFETY_RULES.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: ACCENT_LIGHT }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: ACCENT }}
                      />
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 rounded-lg p-3 text-xs"
                style={{
                  background: "rgba(254, 243, 199, 0.5)",
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <strong className="text-foreground">Taffer Action:</strong>{" "}
                <span className="text-muted-foreground">
                  Train staff to proactively assist any customer who appears
                  uncomfortable. Visible attentiveness is a deterrent and a
                  welcome signal.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 2: Menu Appeal */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.2"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                02
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Menu Appeal: Beyond the Pie
              </h4>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                "Offer substantial salads and lighter options: not token side salads, but meals that stand on their own.",
                "Gluten-free and vegan alternatives that taste as good as the originals. The GF customer brings 3-4 non-GF friends.",
                "Half-pie options for smaller groups and lighter appetites. Reduces waste and increases perceived value.",
                "Family meal deals that feel like genuine value, not upsell traps. '2 pies + salad + drinks for $45' beats '10% off orders over $50'.",
                "Fresh, visible ingredients. Open kitchen layout lets women see the quality before they order.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: "rgba(254, 243, 199, 0.5)",
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <strong className="text-foreground">Taffer says:</strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;When you create a destination food experience, more
                people are drawn to visit: which leads to more social media
                posts and attracts high-follower influencers who provide rave
                reviews and massive free advertising.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 3: Atmosphere */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.3"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                03
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Atmosphere: The Artisan Vibe
              </h4>
            </div>
            <div
              className="rounded-lg p-4 mb-5"
              style={{
                background: "rgba(254, 243, 199, 0.5)",
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <p className="text-sm text-foreground">
                <strong>Taffer insight:</strong>{" "}
                <em>
                  &ldquo;The atmosphere IS your brand promise. If the space
                  feels hostile before anyone opens their mouth, no policy will
                  fix it.&rdquo;
                </em>
              </p>
            </div>
            <ul className="space-y-3 mb-5">
              {[
                "Enhance lighting for a warm, inviting setting: 2700K-3000K over dining, brighter over prep. No harsh fluorescents.",
                "Comfortable seating with back support and adequate spacing. Banquettes for families, high-tops for quick slices.",
                "Conversational noise level under 70 dB. Italian-American classics during lunch, indie/alt during dinner.",
                "Family-friendly without being child-only. Clean, uncluttered tables and floors signal operational excellence.",
                "Artisan vibe over sports-bar aesthetic. Wood, brick, and warm tones. The oven as a focal point, not a TV.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: ACCENT_LIGHT,
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <strong className="text-foreground">Reid Holmes insight:</strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;Your atmosphere IS your brand promise. If the space feels
                unwelcoming before anyone opens their mouth, no menu will fix
                it.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 4: Community Outreach */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.4"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                04
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Community Outreach: Build the Pipeline
              </h4>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                "Partner with local women's organizations, parent groups, and fitness studios. Offer your space for meetings and events.",
                "Use social media to highlight real families and diverse groups enjoying your pizza. Authentic representation beats targeted messaging.",
                "Collaborate with women-focused businesses (salons, boutiques, yoga studios) to cross-promote events and catering.",
                "School fundraiser nights: 20% back to the school. Low immediate profit, massive long-term customer acquisition.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: ACCENT_LIGHT,
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <strong className="text-foreground">
                Appreciated Branding connection:
              </strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;Community partnerships aren&apos;t marketing:
                they&apos;re proof. Every collaboration is a public statement
                that you share these values.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 5: Incentives */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.5"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                05
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Incentives for Women &amp; Families
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                "'Mom's Morning Out': Free coffee with any pie before 11 AM. Drives off-peak traffic and builds loyalty.",
                "Book club discount: 15% off for groups of 6+. Women bring groups; groups bring revenue.",
                "Family meal deal: 2 pies + salad + drinks for $45. Market it as 'Dinner solved.'",
                "Loyalty program with family-friendly rewards: free dessert, kids' pizza party, catering credit.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Strategy 6: Marketing */}
        <Card
          className="mb-5"
          data-ocid="pizzashop-guide.womens_strategy.item.6"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                06
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Marketing: Authentic Representation
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                "Market to families and groups, which naturally includes women as decision-makers. Avoid 'pinkwashing': women see through performative marketing.",
                "Show real families, real groups, real diverse customers enjoying your pizza. Authentic representation beats targeted messaging.",
                "Highlight your lighter options, dietary accommodations, and family deals in all marketing materials.",
                "Partner with local parent bloggers and micro-influencers for genuine, trusted recommendations.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* SECTION: Food & Drink: Viral Menu Strategy */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Utensils size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Food &amp; Drink: The Inclusive Menu Strategy
          </h3>
        </div>
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: "rgba(254, 243, 199, 0.5)",
            border: `1px solid ${ACCENT}30`,
          }}
        >
          <p className="text-sm text-foreground leading-relaxed">
            <strong>Taffer:</strong>{" "}
            <em>
              &ldquo;When you create a destination food-and-drink establishment,
              more people are drawn to visit: which leads to more social media
              posts and attracts high-follower influencers who provide rave
              reviews and massive free advertising.&rdquo;
            </em>
          </p>
        </div>

        <h4 className="font-semibold text-foreground mb-3">
          Menu Highlights for Women &amp; Families
        </h4>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {FOOD_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl p-4"
              style={{
                background: ACCENT_LIGHT,
                border: `1px solid ${ACCENT}20`,
              }}
              data-ocid={`pizzashop-guide.womens_food.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h5 className="font-semibold text-sm text-foreground">
                  {item.name}
                </h5>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background: ACCENT_LIGHT,
                    color: ACCENT,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-foreground mb-3">
          Drink Menu Highlights
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {DRINK_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl p-4"
              style={{
                background: "rgba(254, 243, 199, 0.3)",
                border: `1px solid ${ACCENT}20`,
              }}
              data-ocid={`pizzashop-guide.womens_drink.item.${i + 1}`}
            >
              <h5 className="font-semibold text-sm text-foreground mb-1">
                {item.name}
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: Marketing Plan */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Marketing Plan
          </h3>
        </div>
        <div className="space-y-3">
          {MARKETING_PLAN.map((item, i) => (
            <Card
              key={item.title}
              data-ocid={`pizzashop-guide.womens_marketing.item.${i + 1}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <item.icon size={18} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION: Metrics for Success */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Metrics for Success
          </h3>
        </div>
        <div
          className="rounded-xl p-6"
          style={{
            background: ACCENT_LIGHT,
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Track percentage of female customers monthly (target: 45-55%)",
              "Measure family/group order frequency vs. individual orders",
              "Collect feedback from women customers quarterly via short survey",
              "Monitor restroom cleanliness scores via mystery shopper program",
              "Track repeat visit rate for first-time female customers (target: 60% within 30 days)",
              "Measure average ticket for family orders vs. individual orders",
            ].map((metric, i) => (
              <div
                key={metric}
                className="flex items-start gap-3"
                data-ocid={`pizzashop-guide.womens_metric.item.${i + 1}`}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${ACCENT}40` }}
                >
                  <span className="text-xs font-bold" style={{ color: "#fff" }}>
                    ✓
                  </span>
                </div>
                <p className="text-sm text-foreground">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: Conclusion */}
      <div>
        {/* Pull quote */}
        <div
          className="rounded-2xl p-8 mb-8 text-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
            border: `1px solid ${ACCENT}30`,
          }}
        >
          <Heart
            size={36}
            className="mx-auto mb-4"
            style={{ color: `${ACCENT}60` }}
          />
          <p
            className="font-display text-xl md:text-2xl font-bold italic leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#92400E" }}
          >
            &ldquo;A pizza shop that welcomes women does not just gain female
            customers: it gains families, groups, and a community that returns
            week after week.&rdquo;
          </p>
        </div>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          By addressing the specific concerns and barriers women face,
          implementing inclusive policies, and offering menu options that cater
          to diverse dietary needs, your pizza shop can become a model of
          inclusivity. Women are significantly influential in household food
          purchasing decisions: this influence is a tremendous growth
          opportunity. By fostering an inclusive, welcoming environment, pizza
          shops can tap into an underserved demographic, creating a more diverse
          and vibrant community.
        </p>
        {/* Reid Holmes closing */}
        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{
            background: ACCENT_LIGHT,
            border: `1px solid ${ACCENT}20`,
          }}
        >
          <Quote
            size={28}
            className="shrink-0"
            style={{ color: `${ACCENT}60` }}
          />
          <div>
            <p
              className="font-display text-[15px] font-semibold italic leading-relaxed"
              style={{ color: "#92400E" }}
            >
              &ldquo;Appreciated Branding isn&apos;t about a campaign. It&apos;s
              about creating a space where every customer: especially those who
              have historically felt excluded: leaves feeling genuinely valued.
              That feeling is your most powerful marketing tool.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
