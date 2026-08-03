import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Gift,
  Heart,
  Lightbulb,
  ShieldCheck,
  Star,
  Users,
  Utensils,
} from "lucide-react";

const STRATEGIES = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Create a Safe Dining Environment",
    body: "Women's #1 barrier to returning is discomfort or feeling unseen. Address it directly: install warm ambient lighting, brief your front-of-house staff to check in mid-meal, implement a discreet code word program at the bar, and post a clear anti-harassment policy. Safety is not a women's issue: it is a hospitality standard.",
    callout:
      'Train your entire staff on the code word: a guest who orders a "Guardian Angel" drink is signaling they need help. Handle it swiftly and discreetly.',
    iconColor: "oklch(0.45 0.18 145)",
    iconBg: "oklch(0.45 0.18 145 / 0.1)",
  },
  {
    icon: Users,
    number: "02",
    title: "Host Women-Centered Events & Private Dining",
    body: "Women book group events far more than men: they are the social coordinators of their circles. Create a monthly networking dinner series, a ladies' brunch on the last Sunday of each month, an International Women's Day dinner (March 8), and a book club dinner package with a curated prix fixe menu. Market these as exclusive, not generic.",
    callout:
      "A monthly 'Women Who Lead' networking dinner at $75/head with 20 seats generates $1,500 in guaranteed revenue plus drinks: and turns attendees into weekly regulars.",
    iconColor: "oklch(0.45 0.18 280)",
    iconBg: "oklch(0.45 0.18 280 / 0.1)",
  },
  {
    icon: Star,
    number: "03",
    title: "Spotlight Your Female Chefs & Staff",
    body: 'If you have women in your kitchen or leadership team, they are your most powerful marketing asset. Feature them in your social media content: not as a diversity statement, but as authority and craft. Run "Meet the Chef" evenings where a female chef leads a tasting with story. Women return to restaurants where they see themselves.',
    callout:
      "A 6-part Instagram series profiling your female kitchen team consistently outperforms food photography: expect 2-3× engagement and meaningful new follower growth.",
    iconColor: "oklch(0.55 0.14 85)",
    iconBg: "oklch(0.78 0.12 85 / 0.1)",
  },
  {
    icon: Utensils,
    number: "04",
    title: "Design an Inclusive, Shareable Menu",
    body: "Women control 85% of dining-out decisions. They research before booking, and they share after dining. Your menu must clearly label vegan, vegetarian, gluten-free, and dairy-free options. Include shareable platters designed for groups of four. Design at least three dishes for their visual impact: the photo IS the order for a significant portion of your female guests.",
    callout:
      'A "Signature Sharing Board" priced at $42: designed to photograph beautifully and feed three to four people: becomes your single most Instagram-reposted item and a consistent group-booking driver.',
    iconColor: "oklch(0.35 0.08 15)",
    iconBg: "oklch(0.62 0.1 15 / 0.1)",
  },
  {
    icon: Camera,
    number: "05",
    title: "Build the Instagram Experience",
    body: "The most effective free marketing you have is a room designed to be photographed. Designate one wall or corner as the visual centerpiece: neon signage, a floral backdrop, a textured statement wall. Add warm, flattering lighting that makes every guest look great. Create a signature branded hashtag. Post the user content every single week.",
    callout:
      'Restaurants with a dedicated "photo wall" moment see 40%+ of female guests post within 24 hours of their visit, creating a compounding organic reach that no paid ad can replicate at the same cost.',
    iconColor: "oklch(0.28 0.12 330)",
    iconBg: "oklch(0.28 0.12 330 / 0.1)",
  },
  {
    icon: Heart,
    number: "06",
    title: "Partner with Women's Community Organizations",
    body: "Align your restaurant with causes that matter to women in your neighborhood. Host a quarterly charity dinner where 15% of proceeds go to a local women's shelter or girls' education nonprofit. Partner with women-owned businesses: a nearby salon, fitness studio, or boutique: for cross-promotion packages. March is Women's History Month: own it with a full month of programming.",
    callout:
      "A 'Dine for a Cause' evening generates press, social media reach, and goodwill that money cannot buy. Women are significantly more likely to become loyal customers at businesses they perceive as genuinely community-invested.",
    iconColor: "oklch(0.28 0.12 180)",
    iconBg: "oklch(0.28 0.12 180 / 0.1)",
  },
  {
    icon: Gift,
    number: "07",
    title: "Loyalty Programs & VIP Group Booking Incentives",
    body: "Women are the primary birthday planners, bachelorette organizers, and corporate event bookers in their social and professional circles. Build a VIP program explicitly for groups: a group of six or more receives a complimentary appetizer and a house-made birthday dessert. Create a loyalty card that rewards the 5th visit with a free glass of wine. Make them feel seen before they even sit down.",
    callout:
      "A birthday VIP protocol: personalized card at the table, candle on a complimentary dessert, one-line mention by the server: costs under $4 and generates a social post that reaches their entire network.",
    iconColor: "oklch(0.45 0.14 330)",
    iconBg: "oklch(0.45 0.14 330 / 0.1)",
  },
];

export function RestaurantAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="restaurant-guide.attracting_women_section"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.2 300 / 0.12)" }}
        >
          <Heart size={20} style={{ color: "#6366F1" }} />
        </div>
        <Badge
          className="text-xs font-semibold tracking-wide"
          style={{
            background: "#EEF2FF",
            color: "#6366F1",
            border: "1px solid #C7D2FE",
          }}
        >
          Women-Centered Growth Strategy
        </Badge>
      </div>

      <h2 className="font-display text-3xl font-bold text-foreground mb-1">
        Attracting Women Diners
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Women represent the majority of dining decisions: yet most restaurants
        do nothing deliberate to earn their loyalty. The restaurants that do
        build the most defensible customer base in any neighborhood.
      </p>

      {/* Stat Callout */}
      <div
        className="rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)",
          border: "1px solid #C7D2FE",
        }}
        data-ocid="restaurant-guide.women_stat_callout"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "#6366F1" }}
        >
          <Lightbulb size={22} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-foreground text-base leading-snug">
            Women account for{" "}
            <span style={{ color: "#6366F1" }}>60% of restaurant visits</span>{" "}
            and control{" "}
            <span style={{ color: "#6366F1" }}>
              85% of dining-out decisions
            </span>
            .
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Restaurants known as women-friendly destinations see{" "}
            <strong>35% higher group bookings</strong> and significantly
            stronger repeat customer rates. This is one of the highest-ROI
            positioning moves available to any NYC restaurant.
          </p>
        </div>
      </div>

      {/* Strategy Cards */}
      <div
        className="space-y-6"
        data-ocid="restaurant-guide.women_strategies_list"
      >
        {STRATEGIES.map((s, i) => (
          <Card
            key={s.number}
            className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            data-ocid={`restaurant-guide.women_strategy.item.${i + 1}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: s.iconBg }}
                >
                  <s.icon size={20} style={{ color: s.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: s.iconColor }}
                    >
                      {s.number}
                    </span>
                    <h3 className="font-semibold text-foreground text-base">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {s.body}
                  </p>
                  {s.callout && (
                    <div
                      className="rounded-lg px-4 py-3 text-sm"
                      style={{
                        background: "#EEF2FF",
                        borderLeft: "3px solid #6366F1",
                        color: "#4338CA",
                      }}
                    >
                      <strong>Action: </strong>
                      {s.callout}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
