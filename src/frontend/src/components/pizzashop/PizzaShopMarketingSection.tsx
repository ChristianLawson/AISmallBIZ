import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  Gift,
  Lightbulb,
  Megaphone,
  Package,
  Phone,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

const GRAND_OPENING_TACTICS = [
  {
    phase: "Pre-Opening (4 weeks before)",
    icon: Rocket,
    actions: [
      "Announce on social media with countdown posts. Show oven installation, staff training, menu testing.",
      "Invite local food bloggers and influencers for a soft opening. Feed them well. Let them create.",
      "Place 'Coming Soon' banners on your storefront. List opening date prominently.",
      "Run a 'First 100 Customers' promotion: free slice or discount for the first 100 through the door.",
      "Partner with a local charity: donate a portion of opening week sales.",
    ],
    goal: "Build anticipation and collect email/SMS signups",
  },
  {
    phase: "Opening Week",
    icon: Megaphone,
    actions: [
      "Ribbon-cutting ceremony with local officials or community leaders. Photo op for press and social.",
      "Daily specials: 'Monday Margherita Madness,' 'Tuesday Truffle Treat.' Create urgency with limited quantities.",
      "Live music or local DJ on Friday/Saturday night. Turn opening week into an event.",
      "Collect every customer's email and phone number. Offer 10% off next visit for signup.",
      "Document everything on social media. Stories, Reels, live streams. This is your content goldmine.",
    ],
    goal: "Maximize foot traffic and data collection",
  },
  {
    phase: "Post-Opening (Weeks 2-8)",
    icon: Target,
    actions: [
      "Send a 'Thank you for visiting' email with a 15% off coupon for their next visit.",
      "Analyze opening week data: What sold out? What sat? Adjust menu and inventory immediately.",
      "Launch loyalty program. Simple punch card or app-based. 'Buy 9, get 1 free' is proven.",
      "Solicit Google reviews from happy customers. 50 reviews in the first month signals legitimacy.",
      "Refine operations based on feedback. Fix what broke during the rush before it becomes permanent.",
    ],
    goal: "Convert opening-week visitors into regulars",
  },
];

const LOYALTY_PROGRAMS = [
  {
    name: "The Punch Card",
    description:
      "Classic, low-tech, effective. 'Buy 9 slices, get 1 free.' Cost to you: one slice. Value to customer: feeling rewarded. 73% of customers prefer simple punch cards over app-based programs.",
    bestFor: "Slice shops, high-frequency lunch spots",
    cost: "$0.05 per card + one free slice per 10",
  },
  {
    name: "Digital Loyalty App",
    description:
      "Square, Toast, and Clover all offer built-in loyalty programs. Customers earn points per dollar spent. Redeem for free items. You get customer data, visit frequency, and average ticket analytics.",
    bestFor: "Full-service pizzerias, delivery-focused shops",
    cost: "$50-100/month platform fee",
  },
  {
    name: "VIP Club",
    description:
      "Monthly subscription: $25/month for a free large pie, 20% off all orders, and early access to specials. Creates predictable recurring revenue and locks in your best customers.",
    bestFor: "Shops with strong regular base",
    cost: "One free pie per month + discount margin",
  },
  {
    name: "Referral Program",
    description:
      "'Give $5, Get $5.' Existing customer gets $5 credit for every new customer they refer. New customer gets $5 off first order. Word-of-mouth at scale.",
    bestFor: "All pizza shops: lowest cost acquisition channel",
    cost: "$5 per new customer acquired",
  },
];

const CATERING_STRATEGY = [
  {
    title: "Office Lunch Catering",
    icon: Package,
    description:
      "The most reliable catering channel. Offices order 2-4x per month for meetings, celebrations, and team lunches. Average order: $150-400. Margin: 55-65%.",
    tactics: [
      "Create a 'Corporate Lunch Package': 5 large pies + salad + drinks for $120",
      "Deliver sample platters to office buildings with menus and contact info",
      "Offer 'Meeting Monday' discount: 15% off catering orders placed for Monday delivery",
      "Require 24-hour notice for catering orders: protects your kitchen from disruption",
    ],
    metric: "One corporate client = $5,000-15,000/year",
  },
  {
    title: "Event Catering",
    icon: Users,
    description:
      "Birthday parties, graduation celebrations, block parties, and sports team events. Higher volume, higher visibility. Average order: $300-800.",
    tactics: [
      "Offer mobile oven service for outdoor events (check local permit requirements)",
      "Create 'Party Packages': 10 pies + breadsticks + drinks + plates for $250",
      "Partner with event planners and venues as a preferred vendor",
      "Require 50% deposit for events over $500: protects against cancellations",
    ],
    metric: "Event catering can add $2,000-5,000/month during peak season",
  },
  {
    title: "School & Nonprofit Catering",
    icon: Star,
    description:
      "Schools, churches, and nonprofits order regularly for events. Lower margins (45-55%) but high volume and community goodwill.",
    tactics: [
      "Offer nonprofit pricing: 10% off standard catering rates",
      "Create a 'Fundraiser Night': 20% of sales go to the organization",
      "Sponsor school events with pizza donations: builds relationships with families",
      "Require tax-exempt documentation for nonprofit pricing",
    ],
    metric:
      "Nonprofit partnerships generate 40-60 new family customers per event",
  },
];

const DELIVERY_OPTIMIZATION = [
  {
    title: "Third-Party Delivery (DoorDash, Uber Eats, Grubhub)",
    pros: [
      "Instant access to thousands of customers",
      "No marketing spend required",
      "Handles payment processing and customer service",
    ],
    cons: [
      "15-30% commission per order eats margins",
      "You do not own the customer data",
      "Platform controls pricing and promotions",
    ],
    strategy:
      "Use for discovery, not dependency. Include a flyer in every bag: 'Order direct next time for 10% off.' Build your own channel while platforms bring new customers.",
  },
  {
    title: "In-House Delivery",
    pros: [
      "Keep 100% of revenue",
      "Own the customer relationship and data",
      "Control the experience from oven to door",
    ],
    cons: [
      "Hire and manage drivers",
      "Insurance and vehicle costs",
      "Slower initial growth without platform exposure",
    ],
    strategy:
      "Start with a 2-mile radius. Hire 2 drivers for peak hours. Use Square or Toast for order management. Promote heavily on social and Google. The long-term margin advantage is worth the upfront investment.",
  },
];

const MARKETING_BUDGET_FRAMEWORK = [
  {
    tier: "Bootstrap ($0-500/month)",
    focus: "Organic social, Google Business Profile, word-of-mouth",
    tactics: [
      "Daily Instagram/TikTok posts",
      "Google Business Profile optimization",
      "Community partnerships (schools, sports)",
      "Loyalty punch cards",
    ],
    expectedRoi: "5-10 new customers per month",
  },
  {
    tier: "Growth ($500-2,000/month)",
    focus: "Paid social ads, local SEO, email marketing",
    tactics: [
      "$20/day Instagram/Facebook ads targeting 5-mile radius",
      "Email marketing platform (Mailchimp, Klaviyo)",
      "Influencer partnerships (local food creators)",
      "Loyalty app launch",
    ],
    expectedRoi: "20-50 new customers per month",
  },
  {
    tier: "Scale ($2,000-5,000/month)",
    focus: "Multi-channel campaigns, catering sales team, brand partnerships",
    tactics: [
      "Professional photography and video content",
      "Dedicated catering sales outreach",
      "Local radio/podcast sponsorships",
      "Event marketing and pop-ups",
    ],
    expectedRoi: "50-150 new customers per month",
  },
];

export function PizzaShopMarketingSection() {
  return (
    <section
      id="marketing"
      className="space-y-14"
      data-ocid="pizzashop-guide.marketing_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_BG }}
          >
            <Megaphone size={20} style={{ color: ACCENT }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Marketing Strategy
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Marketing Strategy: From First Slice to Regular Crowd
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Marketing a pizza shop is not about clever slogans: it is about
          systematic customer acquisition. This section covers grand opening
          tactics, loyalty programs, catering, delivery optimization, and budget
          frameworks that turn a new shop into a neighborhood institution.
        </p>
      </div>

      {/* Grand Opening */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Rocket size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Grand Opening Playbook
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Your grand opening is not a party: it is a data collection and
          customer acquisition machine. Every person who walks through the door
          should leave with a reason to return.
        </p>
        <div className="space-y-4">
          {GRAND_OPENING_TACTICS.map((phase, i) => (
            <div
              key={phase.phase}
              className="rounded-xl p-5 bg-card border border-border"
              data-ocid={`pizzashop-guide.marketing.opening.${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: ACCENT_LIGHT }}
                >
                  <phase.icon size={18} style={{ color: ACCENT }} />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      {phase.phase}
                    </h4>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: ACCENT_LIGHT, color: ACCENT }}
                    >
                      {phase.goal}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {phase.actions.map((action) => (
                      <li
                        key={action}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: ACCENT }}
                        >
                          →
                        </span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loyalty Programs */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Gift size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Loyalty Programs That Actually Work
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          A loyal customer is worth 5x a new customer. These four loyalty
          frameworks cover every stage of business growth.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {LOYALTY_PROGRAMS.map((program, i) => (
            <Card
              key={program.name}
              data-ocid={`pizzashop-guide.marketing.loyalty.${i + 1}`}
            >
              <CardContent className="p-5 space-y-3">
                <h4 className="font-semibold text-foreground">
                  {program.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Best for:
                    </span>{" "}
                    {program.bestFor}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Cost:</span>{" "}
                    {program.cost}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Catering */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Package size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Catering: Your Hidden Revenue Stream
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Catering orders are 3-5x the size of individual orders with the same
          labor cost. A single corporate lunch can equal 20 walk-in customers.
        </p>
        <div className="space-y-4">
          {CATERING_STRATEGY.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl p-5 bg-card border border-border"
              data-ocid={`pizzashop-guide.marketing.catering.${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: ACCENT_LIGHT }}
                >
                  <item.icon size={18} style={{ color: ACCENT }} />
                </div>
                <div className="flex-1 space-y-3">
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.tactics.map((tactic) => (
                      <li
                        key={tactic}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: ACCENT }}
                        >
                          →
                        </span>
                        {tactic}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-lg p-2 text-[12px] font-medium inline-block"
                    style={{ background: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {item.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Truck size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Delivery: Third-Party vs. In-House
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Delivery is 30-40% of revenue for most pizza shops. The question is
          not whether to deliver: it is how to deliver profitably.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {DELIVERY_OPTIMIZATION.map((option, i) => (
            <Card
              key={option.title}
              data-ocid={`pizzashop-guide.marketing.delivery.${i + 1}`}
            >
              <CardContent className="p-5 space-y-3">
                <h4 className="font-semibold text-foreground">
                  {option.title}
                </h4>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-green-700">Pros:</p>
                  <ul className="space-y-1">
                    {option.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2
                          size={12}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-red-700">Cons:</p>
                  <ul className="space-y-1">
                    {option.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <AlertCircle
                          size={12}
                          className="mt-0.5 shrink-0 text-red-600"
                        />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg p-3 text-[12px]"
                  style={{ background: ACCENT_LIGHT }}
                >
                  <span className="font-semibold" style={{ color: ACCENT }}>
                    Strategy:{" "}
                  </span>
                  <span className="text-muted-foreground">
                    {option.strategy}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Budget Framework */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Marketing Budget Framework
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Marketing spend should scale with revenue. Start lean, measure
          everything, and double down on what works.
        </p>
        <div className="space-y-3">
          {MARKETING_BUDGET_FRAMEWORK.map((tier, i) => (
            <div
              key={tier.tier}
              className="rounded-xl p-5 bg-card border border-border"
              data-ocid={`pizzashop-guide.marketing.budget.${i + 1}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{tier.tier}</h4>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}
                >
                  {tier.expectedRoi}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-semibold text-foreground">Focus:</span>{" "}
                {tier.focus}
              </p>
              <div className="flex flex-wrap gap-2">
                {tier.tactics.map((tactic) => (
                  <span
                    key={tactic}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tactic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tip */}
      <div
        className="rounded-xl border-l-4 p-5"
        style={{
          borderLeftColor: ACCENT,
          background: ACCENT_LIGHT,
        }}
      >
        <div className="flex items-start gap-3">
          <Lightbulb
            size={18}
            className="mt-0.5 shrink-0"
            style={{ color: ACCENT }}
          />
          <div>
            <p className="font-semibold text-foreground mb-1">
              The Marketing Flywheel
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Great pizza shops do not do marketing: they create experiences
              that market themselves. The cheese pull that gets 10K views. The
              regular who brings 5 friends. The corporate lunch that leads to a
              monthly contract. Every marketing dollar should create an
              experience that generates organic word-of-mouth. Start with the
              product. Make it unforgettable. Then document it. The marketing
              takes care of itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
