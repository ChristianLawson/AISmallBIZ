import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Create Professional Online Profiles",
    action:
      "Set up or fully optimize Google Business Profile, Yelp, and NextDoor for your service area. Add photos of your team in uniform, equipment, and completed jobs. Write a keyword-rich description mentioning your neighborhood. Enable messaging so potential clients can contact you instantly.",
    impact:
      "Google Business Profile drives 70-80% of new local service discovery: this is your highest-ROI free marketing channel",
  },
  {
    day: 2,
    title: "Complete Your Safety & Insurance Checklist",
    action:
      "Confirm you have general liability insurance (minimum $1M), workers' comp if you have employees, and bonding. Display your insurance certificate on your website. Post 'Licensed, Bonded & Insured' on every profile and your vehicle. This is the #1 trust signal for new clients.",
    impact:
      "Clients rank insurance verification as their top criterion when choosing a cleaning service: above price and reviews",
  },
  {
    day: 3,
    title: "Set Up a Simple Online Booking System",
    action:
      "Install a free or low-cost booking tool (Jobber, Housecall Pro, or Square Appointments). Create a booking link and add it to every profile and social account. Clients who can book online without a phone call convert at 3x the rate of call-only services.",
    impact:
      "Online booking reduces no-shows by 40% and increases booking completion rate significantly vs. phone-only",
  },
  {
    day: 4,
    title: "Define Your Service Packages & Pricing",
    action:
      "Create 3 clear tiers: Standard Clean, Deep Clean, and Move-In/Move-Out. Add an Eco-Friendly option as an upgrade. Write out exactly what each includes. Post it publicly: clients who see transparent pricing are 60% more likely to book without a call. Add a 'Recurring Client' discount of 10-15%.",
    impact:
      "Transparent pricing eliminates the #1 friction point in cleaning service booking and reduces price-objection cancellations",
  },
  {
    day: 5,
    title: "Launch a Simple Referral Program",
    action:
      "Create a 'Give $20, Get $20' referral offer. Print cards to leave at every completed job. Mention it verbally at checkout. Women's social networks (neighborhood apps, Facebook groups, WhatsApp threads) are the #1 driver of cleaning service referrals: this program taps directly into that.",
    impact:
      "Referral clients have a 37% higher retention rate and 25% higher lifetime value than clients from paid ads",
  },
  {
    day: 6,
    title: "First Community Outreach Post",
    action:
      "Post on NextDoor introducing your service with a neighborhood-specific offer (e.g., 'First-time clients in [Neighborhood Name] get 15% off this month'). Join local Facebook community groups and introduce yourself. Post a before/after photo from a recent job: visually compelling transformations drive enormous engagement in community groups.",
    impact:
      "NextDoor generates higher-quality local leads for cleaning services than any paid platform: and it is free",
  },
  {
    day: 7,
    title: "Request Your First 3 Reviews",
    action:
      "Contact your 3 most satisfied existing clients by text: not email: and send a direct link to your Google Business Profile review page. A simple message: 'I am working on growing [Business Name]: would you mind leaving a quick Google review? It only takes 2 minutes.' Respond to every review you receive within 24 hours.",
    impact:
      "Every additional Google review increases click-through rates by 3-7%. Moving from 0 to 10 reviews doubles booking conversion rate",
  },
];

export function CleaningServiceImmediateWinsSection() {
  return (
    <section
      id="quickstart"
      data-ocid="cleaning-service-guide.immediate_wins_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.15)" }}
        >
          <Zap size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.12)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.35)",
          }}
        >
          Section 1: Start Here
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        7-Day Immediate Wins Action Plan
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        One concrete action per day. Do these 7 things and you&rsquo;ll be ahead
        of 90% of your cleaning service competitors.
      </p>

      <div className="relative">
        <div
          className="absolute left-[23px] top-0 bottom-0 w-0.5 hidden sm:block"
          style={{ background: "oklch(0.55 0.18 290 / 0.2)" }}
          aria-hidden="true"
        />
        <div className="space-y-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="relative flex gap-5 group"
              data-ocid={`cleaning-service-guide.immediate_wins.item.${d.day}`}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm z-10"
                style={{
                  background: "oklch(0.55 0.23 285)",
                  color: "#fff",
                  boxShadow: "0 0 0 4px oklch(0.55 0.18 290 / 0.15)",
                }}
              >
                Day {d.day}
              </div>
              <Card className="flex-1 border-primary/15 hover:border-primary/35 transition-all duration-200 hover:shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {d.action}
                  </p>
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{
                      background: "oklch(0.55 0.18 290 / 0.07)",
                      border: "1px solid oklch(0.55 0.18 290 / 0.2)",
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.50 0.22 290)" }}
                    />
                    <span style={{ color: "oklch(0.40 0.18 290)" }}>
                      <strong>Expected impact:</strong> {d.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
