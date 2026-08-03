import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CHANNELS = [
  {
    channel: "Instagram: Behind the Bake Reels",
    priority: "#1 Priority",
    description:
      "Film 30-60 second reels showing the lamination process, items coming out of the oven, the display case being arranged each morning. No editing required: raw, authentic bakery footage consistently outperforms produced content.",
    tactics: [
      "Post at 7am on weekdays (peak café discovery time)",
      "Use location tag + 3-5 neighborhood hashtags on every post",
      "Repost any customer post that features your products within 24 hours",
    ],
    metric:
      "Save rate and location tag views are your KPIs: saves signal intent to visit",
  },
  {
    channel: "TikTok: Croissant Lamination & Process Videos",
    priority: "Fastest Growth",
    description:
      "Bakery process content is TikTok's #1 food category. The croissant lamination fold, the dough sheeting, the oven reveal: these videos routinely hit 100k-1M views for small bakeries with under 1,000 followers.",
    tactics: [
      "Film vertically, natural light, no filter: authenticity outperforms production",
      "Add ASMR audio when possible: butter folding and oven sounds drive watch time",
      "Post at 6am and 6pm: highest bakery content engagement windows",
    ],
    metric:
      "Watch time % and shares are your TikTok KPIs: shares equal free reach",
  },
  {
    channel: "Google My Business: Daily Specials",
    priority: "Highest ROI",
    description:
      "Update your Google My Business profile every morning with today's featured item and photo. Google Posts show up directly in Maps and Search results: this is free prime-location advertising.",
    tactics: [
      "Post a photo of the daily special before 8am every day",
      "Respond to every review within 24 hours: especially negative ones",
      "Enable the 'Order Online' feature if you offer pre-orders",
    ],
    metric:
      "Direction requests and call clicks in GMB dashboard are your key metrics",
  },
  {
    channel: "Yelp: Review Management",
    priority: "Critical",
    description:
      "Yelp drives a disproportionate share of first-time bakery visits. A well-managed Yelp profile with 4.5+ stars and regular owner responses converts searchers into customers more reliably than any paid advertising.",
    tactics: [
      "Respond to every review: positive and negative: within 48 hours",
      "Add your monthly special to the Yelp menu section",
      "Use Yelp's free 'Check-In Offer' to incentivize first visits",
    ],
    metric:
      "Yelp search impressions and profile views tell you your discovery volume",
  },
  {
    channel: "Neighborhood Facebook Groups",
    priority: "High Local Impact",
    description:
      "Every neighborhood has active Facebook groups where residents share recommendations. A post from a real customer in those groups reaches thousands of hyper-local potential customers. Encourage and facilitate this.",
    tactics: [
      "Ask your most enthusiastic regulars to post in local groups after a great visit",
      "Join the groups yourself and participate authentically: no promotional spam",
      "Post your monthly special announcement in community groups with a personal note",
    ],
    metric:
      "Referral traffic and 'I saw you in the neighborhood group' comments are your signals",
  },
  {
    channel: "Email List: Weekly Specials",
    priority: "Highest Lifetime Value",
    description:
      "Your email list is the only marketing channel you own. Build it with a counter sign-up and QR code. Send one email every Monday: this week's special, any events, and one behind-the-scenes tidbit. Short, visual, personal.",
    tactics: [
      "Offer a free cookie or 10% off for first-time sign-ups at the counter",
      "Send every Monday morning at 7am: the week's first decision window",
      "Keep emails short: one featured item, one event, one photo",
    ],
    metric:
      "Open rate target: 35%+ for local food businesses. Above 40% means your content is exceptional",
  },
];

export function BakeryMarketingSection() {
  return (
    <section id="marketing" data-ocid="bakery-guide.marketing_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 180 / 0.1)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.35 0.1 180)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 180 / 0.1)",
            color: "oklch(0.30 0.1 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Marketing Your Bakery
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Six channels that drive bakery discovery, retention, and word-of-mouth:
        ranked by ROI and effort.
      </p>
      <div className="space-y-5">
        {CHANNELS.map((c, i) => (
          <Card
            key={c.channel}
            className="hover:border-primary/30 transition-all duration-200"
            data-ocid={`bakery-guide.marketing.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                <h3 className="font-display font-bold text-base text-foreground">
                  {c.channel}
                </h3>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-bold shrink-0"
                  style={{
                    background: "oklch(0.55 0.18 290 / 0.1)",
                    color: "oklch(0.45 0.18 290)",
                    border: "1px solid oklch(0.55 0.18 290 / 0.25)",
                  }}
                >
                  {c.priority}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {c.description}
              </p>
              <div className="space-y-1 mb-3">
                {c.tactics.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span style={{ color: "oklch(0.50 0.22 290)" }}>→</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div
                className="rounded px-3 py-2 text-xs"
                style={{
                  background: "oklch(0.28 0.12 180 / 0.07)",
                  borderLeft: "2px solid oklch(0.28 0.12 180 / 0.4)",
                  color: "oklch(0.30 0.1 180)",
                }}
              >
                📊 <strong>Measure:</strong> {c.metric}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
