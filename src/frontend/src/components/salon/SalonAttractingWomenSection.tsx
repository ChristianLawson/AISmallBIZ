import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Heart,
  MessageCircle,
  Palette,
  Shield,
  Star,
  Tag,
  Users,
} from "lucide-react";

const STRATEGIES = [
  {
    icon: Palette,
    title: "Radical Inclusivity",
    description:
      'Train every stylist for ALL hair types: natural, relaxed, color-treated, fine, thick, curly, coily. Display inclusive imagery throughout the salon and on social media. Lead with explicit messaging: "All hair textures welcome here." Representation in your marketing IS your marketing.',
    apply:
      "Audit your Instagram: does it reflect the diversity of your clientele? Post one natural-hair transformation this week with the caption 'All textures, all welcome.'",
  },
  {
    icon: Shield,
    title: "Safe Space Policies",
    description:
      "Post a visible anti-harassment policy for both staff and clients. Offer women-only treatment rooms on request. Create private consultation spaces for sensitive conversations. Implement a discreet safe word system so any client can signal discomfort without confrontation.",
    apply:
      "Print and frame your Safe Space policy at reception. Train every team member on what to do when a client uses the safe word: practice it in your next staff meeting.",
  },
  {
    icon: Users,
    title: "Women's Community Events",
    description:
      'Host monthly "Girls\' Night Out" pampering evenings. Organize women entrepreneur networking nights at the salon after hours. Partner with local women\u2019s shelters to donate services. Run quarterly self-care workshops (mindfulness, confidence, styling).',
    apply:
      "Book your first 'Girls' Night Out' event for next month. Invite 10 loyal clients and ask each to bring one friend. Offer a complimentary mini-treatment to every guest.",
  },
  {
    icon: Heart,
    title: "Female Empowerment Branding",
    description:
      'Feature stories of local women leaders on your social media every week. Run a "Transformation Tuesday" series spotlighting your clients\u2019 personal journeys. Partner with women-owned businesses (boutiques, fitness studios, coffee shops) for cross-promotions and collaborative events.',
    apply:
      "DM 3 women-owned businesses near you this week about a cross-promotion. A joint 'Women Support Women' post between you gets double the reach at zero cost.",
  },
  {
    icon: Tag,
    title: "Inclusive Pricing & Accessibility",
    description:
      "Price by hair length and texture, never by gender. Offer senior discounts and sliding-scale community rates. Make your pricing board clear and public: no surprises at checkout. Train your team to never upsell without permission. Transparent pricing is a trust signal.",
    apply:
      "Review your menu this week: is every price explainable without awkwardness? If not, simplify it. A client who understands your pricing will never feel tricked: and will return.",
  },
  {
    icon: Award,
    title: "Staff Representation",
    description:
      "Hire stylists who visually and culturally reflect your diverse clientele. Celebrate your female team openly on social media: their stories, skills, and milestones. Ensure women are visible in management and leadership roles. Clients want to see themselves in the people serving them.",
    apply:
      "Feature a 'Meet the Team' Instagram series: one stylist per week. Include their specialty, their story, and what makes them passionate about their craft.",
  },
  {
    icon: MessageCircle,
    title: 'The "Third Place" Experience',
    description:
      "Make your salon the go-to social hub women actively want to spend time in. Curated beverages (herbal teas, sparkling water, lattes). Thoughtfully selected reading material. Calming, flattering ambiance. Wi-Fi. The best salons are not just service providers: they are sanctuaries.",
    apply:
      "Walk your salon as a first-time client right now. What do you smell, hear, and feel in the first 30 seconds? Fix the one thing that does not say 'sanctuary' yet.",
  },
];

export function SalonAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="salon-guide.attracting_women_section"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral/10">
          <Star size={20} className="text-accent-neutral" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-neutral/10 text-accent-neutral border border-accent-neutral-border">
          Attracting & Retaining All Women
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Every Woman Feels Like a VIP
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        Salons already serve women: but the highest-performing salons make every
        woman feel explicitly celebrated, safe, and seen. Here is how to turn
        your salon into the destination all women choose.
      </p>

      {/* Stat callout */}
      <div
        className="rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4 bg-accent-neutral-soft border border-accent-neutral-border"
        data-ocid="salon-guide.attracting_women_stat"
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-accent-neutral/15">
          <Heart size={28} className="text-accent-neutral" />
        </div>
        <div>
          <p className="font-display text-xl font-bold leading-snug text-accent-neutral">
            80% of salon revenue comes from repeat female clients
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Salons that explicitly celebrate all women: diverse hair types, body
            positivity, safe spaces: see{" "}
            <strong className="text-accent-neutral">
              45% higher loyalty rates
            </strong>{" "}
            and significantly more word-of-mouth referrals.
          </p>
        </div>
      </div>

      {/* Strategy cards */}
      <div className="space-y-4">
        {STRATEGIES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="overflow-hidden hover:shadow-md transition-shadow duration-200"
              data-ocid={`salon-guide.attracting_women_strategy.item.${i + 1}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  {/* Left accent stripe */}
                  <div className="flex-none w-14 flex items-center justify-center bg-accent-neutral-soft">
                    <Icon
                      size={22}
                      className="text-accent-neutral"
                      aria-hidden="true"
                    />
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
                        Apply this:
                      </strong>{" "}
                      <span className="text-muted-foreground">{s.apply}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA panel */}
      <div
        className="mt-8 rounded-2xl p-6 text-center bg-accent-neutral-soft border border-accent-neutral-border"
        data-ocid="salon-guide.attracting_women_cta"
      >
        <p className="font-display text-xl font-bold mb-2 text-accent-neutral">
          The most profitable salons do not just serve women: they champion
          them.
        </p>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Pick one strategy from above and implement it this week. Even a single
          visible change: new signage, one inclusive post, one community event :
          signals to every woman who walks in: <em>you belong here</em>.
        </p>
      </div>
    </section>
  );
}
