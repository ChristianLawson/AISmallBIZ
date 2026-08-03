import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Camera,
  Handshake,
  Heart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const STAT = {
  value: "85%",
  label: "of consumer purchasing decisions are made by women",
  impact:
    "Delis that make women feel welcome and safe see 30-40% more repeat visits and significantly higher per-visit spend.",
};

const STRATEGIES = [
  {
    icon: ShieldCheck,
    title: "Safe & Welcoming Environment",
    description:
      "Post clear anti-harassment signage at the counter and restrooms. Train every staff member to intervene swiftly and professionally. Women dining alone: especially on lunch breaks: need to feel that management has their back. A deli that feels safe is a deli women return to.",
    action:
      'Post signage: "Harassment of any kind will not be tolerated. Management takes action immediately." Make it visible: not buried in fine print.',
  },
  {
    icon: Users,
    title: "Women's Networking Lunch Events",
    description:
      'Host a monthly "Ladies Who Lunch" networking meetup: open to women business owners, entrepreneurs, and professionals in the neighborhood. Pair it with a prix-fixe power lunch menu. Women\'s book clubs, startup meetups, and wellness groups are always looking for a warm, welcoming venue.',
    action:
      'First event: reach out to 3 local women-owned businesses and co-host a "Women in Business Lunch." Split the promotion effort and double the reach.',
  },
  {
    icon: Sparkles,
    title: "Female-Friendly Menu Options",
    description:
      "Clearly label every vegan, vegetarian, gluten-free, and low-calorie option. Build a dedicated Power Lunch section: grain bowls, colorful salad bowls, and lean protein wraps that are both nutritious and visually stunning. These are Instagram-worthy by design: and women are your most powerful social media amplifiers.",
    action:
      "Create a Power Lunch daily special: grain bowl or hearty salad with house dressing and sparkling water for $16. Feature it on your Instagram Stories every weekday morning.",
  },
  {
    icon: Heart,
    title: "Female Staff Visibility",
    description:
      "Hiring and visibly promoting women in counter, management, and catering coordinator roles signals inclusion before a word is spoken. When women see women running the operation: taking orders, directing the kitchen, owning the space: the environment immediately feels more welcoming. It is also your most authentic marketing asset.",
    action:
      'Feature a "Meet the Team" post on Instagram monthly that spotlights a female staff member. Let her recommend her favorite menu item. Authenticity converts.',
  },
  {
    icon: Handshake,
    title: "Community Partnerships",
    description:
      "Partner with 2-3 nearby women-owned businesses: a salon, a boutique, a yoga studio. Cross-promote events, offer joint loyalty discounts, and co-sponsor a local women's sports team. When a neighboring business recommends your deli to their customers, trust transfers instantly.",
    action:
      "Approach one women-owned salon or boutique within two blocks. Propose a mutual discount card: 10% off their services with a deli receipt; 10% off your deli with their receipt.",
  },
  {
    icon: Camera,
    title: "Marketing to Women on Social Media",
    description:
      "Women are the dominant force on Instagram, Pinterest, and TikTok. Feature women entrepreneurs who regularly lunch at your deli. Launch a Tag Us in Your Power Lunch campaign: reshare every tagged post. The grain bowl that photographs well is not a coincidence; it is a marketing decision baked into plating.",
    action:
      "Start the campaign this week: DM 5 regular female customers and ask them to tag your deli handle in their next lunch post. Offer a free cookie as a thank-you. Reshare every single one.",
  },
  {
    icon: Building2,
    title: "Emotional Branding: The Third Place",
    description:
      "Position your deli as the businesswoman's third place: not home, not the office, but a warm and dependable in-between. The morning coffee at the counter. The weekly lunch meeting in the back booth. The quick Friday treat before the weekend. Delis that earn this status become part of people's daily identity: and that kind of loyalty is priceless.",
    action:
      "Reserve one booth or corner table as the Power Lunch Spot: add a small table tent that reads: NYC's best deals are made right here. Create a physical destination with an emotional story.",
  },
];

export function DeliAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="deli-guide.attracting_women_section"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral/10">
          <Heart size={20} className="text-accent-neutral" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-neutral/10 text-accent-neutral border border-accent-neutral-border">
          Section 4
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting Women to Your NYC Deli
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        Women are the most powerful demographic in food and dining decisions.
        Here is how to make your deli the obvious choice for every
        businesswoman, local, and group lunch in your neighborhood.
      </p>

      {/* Stat Callout */}
      <div
        className="rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-accent-neutral-soft border border-accent-neutral-border"
        data-ocid="deli-guide.attracting_women_stat"
      >
        <div className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl bg-accent-neutral/10 text-accent-neutral">
          {STAT.value}
        </div>
        <div>
          <p className="font-semibold text-foreground text-base">
            {STAT.label}
          </p>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {STAT.impact}
          </p>
        </div>
      </div>

      {/* Strategy Cards */}
      <div className="space-y-4">
        {STRATEGIES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="overflow-hidden"
              data-ocid={`deli-guide.attracting_women_strategy.${i + 1}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div className="flex-none w-16 flex items-center justify-center bg-accent-neutral-soft">
                    <Icon size={22} className="text-accent-neutral" />
                  </div>
                  <div className="flex-1 p-5">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div className="rounded-lg p-3 text-xs bg-accent-neutral-soft border-l-[3px] border-accent-neutral-border">
                      <strong className="text-accent-neutral">
                        Do this now:{" "}
                      </strong>
                      <span className="text-muted-foreground">{s.action}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom pull-quote */}
      <div className="mt-8 rounded-xl p-6 text-center bg-accent-neutral-soft border border-accent-neutral-border">
        <Megaphone size={28} className="mx-auto mb-3 text-accent-neutral" />
        <p className="font-display text-lg font-semibold italic leading-relaxed max-w-2xl mx-auto text-accent-neutral">
          &ldquo;A deli that feels safe, seen, and welcoming to women does not
          just win women&apos;s business: it wins the neighborhood.&rdquo;
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          : Appreciated Branding applied to NYC Deli Operations
        </p>
      </div>
    </section>
  );
}
