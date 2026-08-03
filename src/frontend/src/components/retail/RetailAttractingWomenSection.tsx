import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  CalendarHeart,
  Heart,
  Instagram,
  Megaphone,
  Ruler,
  ShieldCheck,
  Users,
} from "lucide-react";

const STRATEGIES = [
  {
    icon: Ruler,
    title: "Inclusive Sizing & Representation",
    description:
      'Stock all sizes prominently: not hidden in a back corner. Use diverse mannequins and in-store imagery that reflects every body type. Post explicit messaging at your entrance: "All sizes, all bodies, all welcome." Train staff on body-positive language as a baseline service standard.',
    action:
      "Audit your floor this week: are extended sizes merchandised on the same tables and front racks as core sizes, or pushed to the back? Move them forward. Same visibility, same presentation.",
    color: "#475569",
    bg: "rgba(71,85,105,0.07)",
    accent: "rgba(71,85,105,0.35)",
  },
  {
    icon: Heart,
    title: "Women-First Store Design",
    description:
      "Well-lit fitting rooms with flattering lighting, hooks, and full-length mirrors. Install a discreet in-room call button so customers can request help without opening the curtain. Add comfortable seating near fitting areas for companions. Keep aisles stroller-friendly. Ensure your entrance is well-lit and visible: especially for evening hours.",
    action:
      "Walk your store as a first-time female customer: enter alone at 8pm (or simulate it mentally), find a size, try it on, pay. Every friction point you hit is revenue you are currently losing.",
    color: "oklch(0.5 0.14 340)",
    bg: "oklch(0.5 0.14 340 / 0.07)",
    accent: "oklch(0.5 0.14 340 / 0.3)",
  },
  {
    icon: CalendarHeart,
    title: "Women's Shopping Events",
    description:
      'Host a monthly after-hours "Girls\' Shopping Night" with light refreshments. Run a "Women in Business" VIP preview for new arrivals. Offer styling workshops for professional women. Partner with nearby salons, spas, and restaurants to cross-promote: a joint event doubles your reach with zero extra ad spend.',
    action:
      "Book your first after-hours event now: pick a date 3 weeks out, text your top 15 female customers personally (not email blast), and invite each salon or restaurant on the same block to co-promote it.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    accent: "oklch(0.78 0.12 85 / 0.35)",
  },
  {
    icon: Building2,
    title: "Female Staff & Ownership Visibility",
    description:
      'Highlight women in leadership and buying roles both in-store and online. Create "Meet Our Buyer" social content featuring female taste-makers on staff. If your store is woman-owned, display that badge prominently: it is a powerful trust signal with female shoppers, who actively seek out and support women-owned businesses.',
    action:
      'Post a "Meet the Team" feature on Instagram this week spotlighting a female buyer, manager, or owner. Share what she looks for, what she loves, why she works there. Repeat monthly.',
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    accent: "oklch(0.62 0.1 15 / 0.35)",
  },
  {
    icon: ShieldCheck,
    title: "Safe Space Policies",
    description:
      'Post a zero-tolerance harassment policy at your entrance: visible and specific, not vague. Make discreet "ask us for help" cards available near fitting rooms and at the counter so customers can signal discomfort without a scene. Train all floor staff to handle uncomfortable customer interactions swiftly and professionally.',
    action:
      'Print and laminate a policy card this week: "Harassment will not be tolerated. Our staff are trained and empowered to act. If you need us, ask." Place one at the register and one near the fitting rooms.',
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    accent: "oklch(0.28 0.12 180 / 0.3)",
  },
  {
    icon: Megaphone,
    title: "Community & Cause Marketing",
    description:
      "Partner with local women's shelters for clothing drives: it generates press, goodwill, and social content. Donate a percentage of sales during Women's Month (March) to a local women's organization and promote it. Feature women-owned brands and local female designers in your inventory: it differentiates you and tells a story no big box store can tell.",
    action:
      "Identify one women's organization in your borough to partner with this quarter. Reach out this week: most are actively looking for retail partners and will promote the collaboration to their own audience.",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    accent: "oklch(0.28 0.12 330 / 0.3)",
  },
  {
    icon: Instagram,
    title: "Social Media & Influencer Strategy",
    description:
      'Invite local female micro-influencers (5K-50K followers) for exclusive first-look events: their audience trusts them more than any paid ad. Run "Outfit of the Day" challenge campaigns that turn customers into content creators. Design at least one Instagram-worthy display or selfie spot in-store that customers will want to photograph and share organically.',
    action:
      "Find 5 NYC-based female micro-influencers in your neighborhood using Instagram's location tag. DM each with a personal note: not a template: and invite them to your next new arrivals drop. Three will say yes.",
    color: "#475569",
    bg: "rgba(71,85,105,0.06)",
    accent: "rgba(71,85,105,0.3)",
  },
];

export function RetailAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="retail-guide.attracting_women_section"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral/10">
          <Users size={20} className="text-accent-neutral" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-neutral/10 text-accent-neutral border border-accent-neutral-border">
          Women Shoppers
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting Women to Your Retail Store
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        Women are the most powerful consumer force in retail. These seven
        strategies build an environment where they choose your store, return
        repeatedly, and bring their networks.
      </p>

      {/* Stat Callout */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4 bg-accent-neutral-soft border border-accent-neutral-border"
        data-ocid="retail-guide.attracting_women_stat"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral/15">
          <span className="text-xl" aria-hidden="true">
            📊
          </span>
        </div>
        <div>
          <p className="font-display text-lg font-semibold leading-relaxed text-accent-neutral">
            Women make{" "}
            <span className="text-accent-indigo">
              85% of all consumer purchases
            </span>{" "}
            and influence{" "}
            <span className="text-accent-indigo">
              95% of household buying decisions
            </span>
            .
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Retailers that explicitly welcome women see{" "}
            <strong className="text-accent-indigo">
              40% higher basket sizes
            </strong>
            . The most profitable thing your store can do is make women feel
            genuinely welcome.
          </p>
        </div>
      </div>

      {/* Strategy Cards */}
      <div className="space-y-5">
        {STRATEGIES.map((s, i) => (
          <Card
            key={s.title}
            className="overflow-hidden"
            data-ocid={`retail-guide.attracting_women_strategy.${i + 1}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                {/* Icon Column */}
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: s.bg }}
                >
                  <s.icon
                    size={22}
                    style={{ color: s.color }}
                    aria-hidden="true"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.description}
                  </p>
                  {/* Action Block */}
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: s.bg,
                      borderLeft: `3px solid ${s.accent}`,
                    }}
                  >
                    <strong style={{ color: s.color }}>Do this now:</strong>{" "}
                    <span className="text-muted-foreground">{s.action}</span>
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
