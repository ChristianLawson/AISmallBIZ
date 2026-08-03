import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const MARKETING_CHANNELS = [
  {
    channel: "Instagram Reels",
    emoji: "📸",
    strategy:
      "Post workout clips, transformation stories (with permission), member spotlights, and 'first class' reaction content. Reels get 3x the organic reach of static posts. Target hashtags: #WomenWhoLift #FitnessStudio #StrongWomen #BoutiqueGym",
    frequency: "5-7x per week",
  },
  {
    channel: "TikTok Fitness Challenges",
    emoji: "🎵",
    strategy:
      "Launch a monthly fitness challenge with a branded hashtag. 'Can you do 30 days of [Studio Name]?' challenges consistently go viral in local fitness communities. Feature instructors and real member participation: authenticity over production value.",
    frequency: "3-5x per week",
  },
  {
    channel: "Google My Business",
    emoji: "📍",
    strategy:
      "Respond to every review within 24 hours. Post weekly updates (class schedule changes, new offerings, events). Upload photos of real classes with diverse members. Ask every new member to leave a review after their first month: 60% will if asked directly.",
    frequency: "Weekly updates + daily review monitoring",
  },
  {
    channel: "Referral Program",
    emoji: "👥",
    strategy:
      "'Bring a Friend Free Week' once per quarter drives the most cost-effective new member acquisition available. Current members' referrals convert at 65% vs. 12% for cold paid ads. Track every referral source and reward consistently.",
    frequency: "Quarterly campaign + ongoing tracking",
  },
  {
    channel: "Email List Building",
    emoji: "📧",
    strategy:
      "Capture email at every touchpoint: class sign-in, event attendance, free trial. Monthly newsletter: schedule updates, member spotlight, health tip, special offer. Email converts at 4x the rate of social media for local fitness studios.",
    frequency: "Monthly newsletter + event reminders",
  },
  {
    channel: "Local Salon & Spa Partnerships",
    emoji: "💅",
    strategy:
      "Partner with women's salons, spas, and wellness businesses for mutual cross-promotion. Co-host events, exchange flyers, offer bundled discounts. Women who visit these businesses are your exact target demographic: the referral overlap is extraordinary.",
    frequency: "Partnership outreach monthly + ongoing",
  },
];

const AI_TOOLS = [
  {
    tool: "AI Class Scheduling Optimization",
    description:
      "Use AI scheduling tools to predict peak demand by day, time, and class type. Ensure you are never understaffed during high-demand women's classes and never over-scheduled during slow periods.",
  },
  {
    tool: "Member Feedback Analysis",
    description:
      "Feed Google reviews, exit surveys, and social comments into an AI summarizer weekly. Identify patterns in what women specifically praise or flag as problems before they become cancellations.",
  },
  {
    tool: "Retention Prediction",
    description:
      "AI tools can identify at-risk members based on declining visit frequency 3-4 weeks before they cancel. A proactive outreach at this stage retains 30-40% of members who would otherwise leave.",
  },
];

const METRICS = [
  {
    metric: "Female Member Rate",
    target: "60-75% of total active members",
    how: "Track gender in member profiles and new sign-up forms monthly",
  },
  {
    metric: "Class Attendance Consistency",
    target: "3+ visits per week for retained members",
    how: "Scheduling app attendance data; flag members under 1 visit/week for outreach",
  },
  {
    metric: "Monthly Churn Rate",
    target: "Under 5% monthly (boutique studio benchmark)",
    how: "Cancellations ÷ active members × 100; track reason codes on every exit",
  },
  {
    metric: "Referral Conversion Rate",
    target: "65%+ of referred trials become members",
    how: "Track referral source at sign-up; calculate trial-to-paid conversion by channel",
  },
];

export function FitnessStudioMarketingSection() {
  return (
    <section id="marketing" data-ocid="fitness-studio-guide.marketing_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 180 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.28 0.12 180)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 180 / 0.1)",
            color: "oklch(0.28 0.12 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Marketing Your Fitness Studio
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Channel-by-channel marketing strategy built specifically for boutique
        fitness studios targeting women as the primary growth demographic.
      </p>

      {/* Channels */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {MARKETING_CHANNELS.map((ch, i) => (
          <Card
            key={ch.channel}
            className="hover:border-primary/30 transition-all duration-200"
            data-ocid={`fitness-studio-guide.marketing.channel.${i + 1}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
                  style={{ background: "oklch(0.55 0.18 290 / 0.08)" }}
                >
                  {ch.emoji}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[15px] text-foreground">
                    {ch.channel}
                  </h3>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "oklch(0.50 0.22 290)" }}
                  >
                    {ch.frequency}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ch.strategy}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Tools */}
      <div
        className="rounded-xl p-5 mb-10"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.2)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
          <BarChart3 size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
          AI-Powered Studio Tools
        </h3>
        <div className="space-y-3">
          {AI_TOOLS.map((tool) => (
            <div
              key={tool.tool}
              className="rounded-lg p-3"
              style={{
                background: "oklch(0.55 0.18 290 / 0.05)",
                border: "1px solid oklch(0.55 0.18 290 / 0.15)",
              }}
            >
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.40 0.18 290)" }}
              >
                {tool.tool}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Key Metrics to Track Monthly
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {METRICS.map((m) => (
          <div
            key={m.metric}
            className="rounded-xl p-4"
            style={{
              background: "oklch(0.28 0.12 180 / 0.07)",
              border: "1px solid oklch(0.28 0.12 180 / 0.2)",
            }}
          >
            <div
              className="font-semibold text-sm mb-1"
              style={{ color: "oklch(0.28 0.12 180)" }}
            >
              {m.metric}
            </div>
            <div className="font-display font-bold text-base mb-1 text-foreground">
              Target: {m.target}
            </div>
            <p className="text-xs text-muted-foreground">{m.how}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
