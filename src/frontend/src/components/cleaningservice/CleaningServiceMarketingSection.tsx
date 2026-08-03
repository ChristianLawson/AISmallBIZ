import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const CHANNELS = [
  {
    channel: "Before/After Reels (Instagram & TikTok)",
    roi: "Highest ROI",
    roiColor: "oklch(0.45 0.14 150)",
    description:
      "Post one before/after cleaning transformation reel per week. Ovens, bathrooms, kitchens, and refrigerators drive the highest engagement. Use trending audio and 'satisfying clean' hashtags. Cleaning content consistently ranks among TikTok's most-shared categories: you do not need a following to go local-viral.",
    cost: "Free: phone camera is sufficient",
    action:
      "Commit to one reel per week for 60 days. Track which rooms drive the most saves and shares.",
  },
  {
    channel: "NextDoor Advertising",
    roi: "Highest Local Quality",
    roiColor: "oklch(0.50 0.22 290)",
    description:
      "NextDoor is the single highest-quality lead source for residential cleaning services. Neighborhood-specific advertising means every click is from someone within your service area. Post free updates, respond to service recommendations, and run paid neighborhood ads for $50-150/month. NextDoor leads convert at 2-3x the rate of Google Search for residential services.",
    cost: "$0 organic / $50-150/month paid",
    action:
      "Post a neighborhood introduction on NextDoor today. Set up a paid ad for your primary service area for $50/month.",
  },
  {
    channel: "Google Local Services Ads",
    roi: "Highest Paid Conversion",
    roiColor: "oklch(0.55 0.14 85)",
    description:
      "Google Local Services Ads (LSA) are pay-per-lead, not pay-per-click: you only pay when someone calls or messages you directly. For cleaning services, LSA is the highest-converting paid channel. The 'Google Guaranteed' badge increases trust and booking rate significantly. CPL (cost per lead) typically runs $15-35 for house cleaning.",
    cost: "$15-35 per qualified lead (pay-per-lead model)",
    action:
      "Set up Google Local Services Ads at ads.google.com/local-services-ads: verification takes 1-2 weeks.",
  },
  {
    channel: "Referral Program: Give $20, Get $20",
    roi: "Best Client LTV",
    roiColor: "oklch(0.38 0.1 330)",
    description:
      "Referral clients have the highest retention rate and lifetime value of any acquisition channel. Structure: referring client gets $20 off their next booking; new client gets $20 off their first booking. Print physical cards and leave them at every job. Mention it verbally at checkout. Women's social networks amplify referral programs faster than any other demographic.",
    cost: "$40 per referred booking: self-funding from client LTV",
    action:
      "Print 200 referral cards this week. Leave one at every job for 90 days and track referral source at booking.",
  },
  {
    channel: "Seasonal Promotions",
    roi: "Revenue Acceleration",
    roiColor: "oklch(0.48 0.18 330)",
    description:
      "Spring Deep Clean (March-April), Back-to-School Fresh Start (August), Holiday Clean (November), and Post-Holiday Reset (January) are your four seasonal windows. Launch each promotion 3 weeks in advance. Email your list, post on all platforms, and add a countdown to your booking page. Seasonal urgency drives 25-40% higher booking rates than evergreen promotions.",
    cost: "Labor cost only: no additional marketing spend required",
    action:
      "Map all four seasonal promotions in your calendar now and schedule email drafts 3 weeks before each.",
  },
  {
    channel: "Property Manager Partnerships",
    roi: "Highest Volume Potential",
    roiColor: "oklch(0.45 0.14 150)",
    description:
      "Property managers need reliable cleaning for tenant turnovers, which happen constantly. One active property manager relationship can generate 5-15 turn-clean jobs per month at $150-350 each. Approach: introduce yourself in person with a one-page service sheet, an insurance certificate copy, and a first-job discount. Follow up monthly.",
    cost: "Time investment: no upfront cost",
    action:
      "Identify 5 property management companies in your service area. Visit each with your service sheet and insurance certificate this week.",
  },
  {
    channel: "Email Newsletter with Cleaning Tips",
    roi: "Best Retention Tool",
    roiColor: "oklch(0.50 0.22 290)",
    description:
      "Send a monthly email to your client list with 3 practical cleaning tips, your seasonal special, and one team spotlight. Clients who receive regular value from you before they need a service switch request cancel at half the rate of clients who only hear from you at billing time. Keep it short: 5 minutes to read maximum.",
    cost: "Free (Mailchimp free tier handles up to 500 contacts)",
    action:
      "Set up a Mailchimp or ConvertKit free account today. Import your current client list and schedule the first email for this month.",
  },
];

export function CleaningServiceMarketingSection() {
  return (
    <section
      id="marketing"
      data-ocid="cleaning-service-guide.marketing_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.25)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Marketing Strategy
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Seven channels ranked by ROI: from the free before/after reel that can
        go local-viral to the paid Google LSA that converts at the highest rate
        of any paid channel.
      </p>

      <div className="space-y-4">
        {CHANNELS.map((ch, i) => (
          <Card
            key={ch.channel}
            data-ocid={`cleaning-service-guide.marketing.channel.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-base text-foreground">
                  {ch.channel}
                </h3>
                <Badge
                  className="text-xs font-semibold"
                  style={{
                    background: `${ch.roiColor}18`,
                    color: ch.roiColor,
                    border: `1px solid ${ch.roiColor}40`,
                  }}
                >
                  {ch.roi}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {ch.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <div
                  className="text-xs rounded-lg px-3 py-1.5"
                  style={{
                    background: "oklch(0.55 0.18 290 / 0.07)",
                    color: "oklch(0.40 0.18 290)",
                    border: "1px solid oklch(0.55 0.18 290 / 0.2)",
                  }}
                >
                  <strong>Cost:</strong> {ch.cost}
                </div>
                <div
                  className="text-xs rounded-lg px-3 py-1.5"
                  style={{
                    background: "oklch(0.45 0.14 150 / 0.07)",
                    color: "oklch(0.30 0.14 150)",
                    border: "1px solid oklch(0.45 0.14 150 / 0.2)",
                  }}
                >
                  <strong>Action:</strong> {ch.action}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Priority matrix */}
      <div
        className="mt-10 rounded-2xl p-6"
        style={{
          background: "oklch(0.55 0.18 290 / 0.05)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
          <h3 className="font-display font-bold text-base text-foreground">
            Where to Start: Month 1 Priority Stack
          </h3>
        </div>
        <ol className="space-y-2">
          {[
            {
              num: 1,
              text: "Week 1: Set up NextDoor post + Google Business Profile optimization (free, immediate)",
            },
            {
              num: 2,
              text: "Week 2: Film and post your first before/after transformation reel",
            },
            {
              num: 3,
              text: "Week 3: Print and distribute referral cards to existing clients",
            },
            {
              num: 4,
              text: "Week 4: Apply for Google Local Services Ads verification",
            },
          ].map((step) => (
            <li
              key={step.text}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs"
                style={{ background: "oklch(0.55 0.23 285)", color: "#fff" }}
              >
                {step.num}
              </span>
              {step.text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
