import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CHANNELS = [
  {
    rank: "#1",
    channel: "TikTok Get Ready With Me & Outfit Styling",
    roi: "Highest ROI",
    roiColor: "oklch(0.45 0.14 150)",
    description:
      "GRWM (Get Ready With Me) videos and outfit styling content is the single highest-performing format for boutiques on TikTok in 2026. Show a customer or staff member building an outfit from your current inventory. Use trending audio. No production quality required. Authenticity outperforms polish every time for boutique content.",
    actions: [
      "Post 2 to 3 TikToks per week minimum. Consistency beats virality as a strategy",
      "Reply to comments asking where is that top from with a link in bio",
      "Use trending audio within 24 hours of it appearing in the TikTok sounds library",
    ],
  },
  {
    rank: "#2",
    channel: "Instagram Reels with Trending Audio",
    roi: "High ROI",
    roiColor: "oklch(0.50 0.22 290)",
    description:
      "Instagram Reels with trending audio are your discovery mechanism. The algorithm surfaces them to non-followers who match your audience demographic. Repurpose your best TikTok content directly to Reels (remove TikTok watermark first). Outfit transitions, styling 3 ways formats, and fitting room try-ons consistently outperform static product posts by 5 to 10x.",
    actions: [
      "Enable Instagram Shopping so every Reel links to a product page",
      "Post Stories daily with 2 to 3 slides about today's featured item",
      "Run a monthly what we just received haul video. Your most loyal followers wait for these",
    ],
  },
  {
    rank: "#3",
    channel: "Pinterest Seasonal Look Boards",
    roi: "Compounding ROI",
    roiColor: "oklch(0.48 0.18 330)",
    description:
      "Pinterest drives high-intent search traffic to boutiques. Women on Pinterest are actively planning outfits, not passively scrolling. Create boards for each season and key occasions (Wedding Guest Looks, Work Wardrobe, Summer Vacation). Pin consistently, use keyword-rich descriptions, and link every pin to a product page on your website. Pinterest traffic compounds over months.",
    actions: [
      "Create 4 seasonal boards today and pin 10 products to each",
      "Use 3 to 5 relevant keyword phrases in every pin description",
      "Enable Pinterest Shopping to tag shoppable products directly",
    ],
  },
  {
    rank: "#4",
    channel: "Email List: Weekly New In Drops",
    roi: "$42 per $1 spent",
    roiColor: "oklch(0.55 0.14 85)",
    description:
      "Email marketing delivers the highest return on investment of any marketing channel at $42 for every $1 spent. Send every Monday morning: New arrivals this week, a featured styling tip, and a limited promotion. Subject lines with the specific item name outperform generic subject lines. Build your list with a 10% first-purchase discount for sign-ups.",
    actions: [
      "Start a Mailchimp or Klaviyo free account today",
      "Add a sign-up form to your website and a QR code at the register",
      "Send your first email this Monday with the top 5 new items",
    ],
  },
  {
    rank: "#5",
    channel: "Referral Program: Give $15, Get $15",
    roi: "Very High ROI",
    roiColor: "oklch(0.28 0.12 180)",
    description:
      "A simple referral discount is the most cost-efficient customer acquisition tool for boutiques. When a loyal customer refers a friend, both receive a $15 store credit. The referred customer's first purchase typically exceeds $75, making the $15 acquisition cost far below any paid channel. Promote it in your loyalty emails, on your receipt, and with a small card in every bag.",
    actions: [
      "Create a referral card to include in every purchase bag",
      "Add referral language to your email footer",
      "Announce the program with a dedicated Instagram post",
    ],
  },
  {
    rank: "#6",
    channel: "Google Shopping Ads + Local Search",
    roi: "Moderate-High ROI",
    roiColor: "oklch(0.38 0.1 330)",
    description:
      "Google Shopping ads target women actively searching for the exact items you carry. Local search campaigns with boutique near me keywords drive foot traffic from nearby customers who have purchase intent right now. Start with a $10 to $20 per day budget and scale what converts. Combined with a strong Google My Business profile, you capture both browse and buy-now intent.",
    actions: [
      "Set up Google Merchant Center and connect your product feed",
      "Run a 2-week test campaign on your 5 best-selling items at $15 per day",
      "Add Google My Business Posts twice weekly with featured items",
    ],
  },
  {
    rank: "#7",
    channel: "Local Fashion Blogger & Micro-Influencer Partnerships",
    roi: "High ROI (local)",
    roiColor: "oklch(0.55 0.23 285)",
    description:
      "Local micro-influencers with 2K to 20K followers in your city drive 7x higher engagement than national macro-influencers for boutique retail. A $200 gifted item to the right local creator can result in $2,000 to $5,000 in new sales, not because of follower count, but because of local trust. Look for creators whose aesthetic matches your boutique's identity, not just their numbers.",
    actions: [
      "Identify 5 local creators using Instagram's location search and boutique hashtags",
      "Send a genuine DM mentioning what you love about their style",
      "Offer one item gifted per month. Ask only for honest content if they love it",
    ],
  },
];

export function BoutiqueMarketingSection() {
  return (
    <section id="marketing" data-ocid="boutique-guide.marketing_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 85 / 0.15)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.45 0.12 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 85 / 0.12)",
            color: "oklch(0.40 0.1 85)",
            border: "1px solid oklch(0.55 0.14 85 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Marketing Your Boutique in 2026
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Ranked by ROI &mdash; start with channel #1 and build from there. These
        are the 7 channels driving boutique growth right now, from free to paid.
      </p>

      <div className="space-y-5">
        {CHANNELS.map((ch, i) => (
          <Card
            key={ch.channel}
            className="hover:shadow-md transition-all duration-200"
            data-ocid={`boutique-guide.marketing.channel.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center text-center"
                  style={{
                    background: ch.roiColor.replace(")", " / 0.1)"),
                    border: `1.5px solid ${ch.roiColor}`,
                  }}
                >
                  <span
                    className="font-display font-bold text-base leading-none"
                    style={{ color: ch.roiColor }}
                  >
                    {ch.rank}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-base text-foreground">
                      {ch.channel}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: ch.roiColor.replace(")", " / 0.1)"),
                        color: ch.roiColor,
                      }}
                    >
                      {ch.roi}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {ch.description}
                  </p>
                  <div
                    className="rounded-lg p-3"
                    style={{
                      background: "oklch(0.55 0.14 85 / 0.06)",
                      border: "1px solid oklch(0.55 0.14 85 / 0.18)",
                    }}
                  >
                    <p className="text-xs font-semibold text-foreground mb-1.5">
                      Action steps:
                    </p>
                    <ul className="space-y-1">
                      {ch.actions.map((action) => (
                        <li
                          key={action}
                          className="text-xs text-muted-foreground flex items-start gap-1.5"
                        >
                          <span style={{ color: "oklch(0.45 0.12 85)" }}>
                            &rsaquo;
                          </span>
                          {action}
                        </li>
                      ))}
                    </ul>
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
