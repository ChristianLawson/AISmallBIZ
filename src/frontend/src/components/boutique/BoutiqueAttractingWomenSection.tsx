import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp } from "lucide-react";

const STATS = [
  {
    stat: "85%",
    label:
      "of boutique purchases are made by women, the single largest retail demographic",
  },
  {
    stat: "4x",
    label:
      "more likely to recommend a brand to their network compared to male customers",
  },
  {
    stat: "60%",
    label:
      "higher repeat purchase rate in size-inclusive boutiques vs. limited-sizing stores",
  },
  {
    stat: "3.2x",
    label:
      "higher social media sharing rate when content features diverse real customers",
  },
];

const STRATEGIES = [
  {
    number: "01",
    title: "Size Inclusivity as a Primary Commitment, Not an Afterthought",
    body: "Carrying XS through 5X across your hero items is the single most powerful differentiator for a boutique targeting women. Most boutiques stop at XL or 2X and miss 30 to 40% of the female market entirely. Size-inclusive boutiques generate outsized loyalty because women in extended sizes feel genuinely seen rather than accommodated. Display sizing prominently on social media, your website, and in-store signage.",
    action:
      "Audit your current size run this week. Identify your 5 best-sellers and commit to expanding the size range to 4X on all 5 within 60 days.",
  },
  {
    number: "02",
    title: "The Fitting Room Environment Is Your Most Important Marketing",
    body: "Women are keenly aware of fitting room quality because it directly impacts how they feel about their bodies and the shopping experience. Good lighting (warm, flattering, never harsh), full-length mirrors, double hooks, and clean space are not optional. They are the difference between a purchase and a walk-out. Add a small mirror outside fitting rooms so customers can see how an outfit looks in natural store light.",
    action:
      "Walk through your fitting rooms this week as if you have never been in them. Time how long it takes to see yourself fully. Note what does not work. Fix the lighting first. It is the number one fitting room complaint.",
  },
  {
    number: "03",
    title: "Host Women's Networking Events In-Store",
    body: "Your boutique space is a community asset after hours. Monthly Style and Strategy workshops covering personal branding styling, capsule wardrobe building, and dress code decoding attract professional women and create a community identity that goes beyond retail. These events drive word-of-mouth, social content, and loyalty in a way that no discount program can.",
    action:
      "Book one in-store event in the next 4 weeks: a Dress for Your Brand personal styling workshop. 10 to 15 attendees, light refreshments, $25 entry fee applied to purchase. Promote through local women's business networks.",
  },
  {
    number: "04",
    title: "Collaborate with Women-Owned Accessory & Jewelry Brands",
    body: "A boutique that curates women-owned local accessory and jewelry brands creates a complete styling destination. It drives cross-referral traffic, supports the community, and signals your values in a tangible, shoppable way. Feature the brand owner's story alongside their products. The made by a woman for women narrative is a proven sales driver.",
    action:
      "Identify 2 to 3 local women-owned accessory makers. Offer them 6 weeks of in-store display in exchange for social promotion and a small revenue share (typically 30 to 40%).",
  },
  {
    number: "05",
    title: "Buy Local, Support Women as a Core Brand Message",
    body: "If you are women-owned, display it proudly across all touchpoints: Google My Business, Instagram bio, window signage, and website. Women actively choose to spend at women-owned businesses. This is a documented purchasing driver, not decoration. If you are not women-owned but your team and vendors are majority women, lead with that story too.",
    action:
      "Add Women-Owned to your Google My Business categories and Instagram bio today. Schedule a Meet the Owner Instagram story this week.",
  },
  {
    number: "06",
    title: "Content Featuring Real Customers: Diverse Ages, Sizes, Backgrounds",
    body: "TikTok and Instagram content that features real customers in clothes (not just professional models) generates 3.2x higher engagement and 5x higher saves. Women trust women who look like them, not aspirational perfection. A real customer try-on series, filmed in your boutique with permission, is consistently the highest-ROI content format for independent boutiques in 2026.",
    action:
      "Ask 3 customers this week if you can film a quick try-on video with them. Offer a 15% discount on their purchase in exchange. Post one per week for 3 weeks and track the engagement difference vs. your standard product posts.",
  },
  {
    number: "07",
    title: "Women's Business Group Partnerships",
    body: "Local women's business associations, female entrepreneur Facebook groups, and chambers of commerce women's committees are concentrated audiences of your exact target customer. Offer exclusive member discounts, sponsor a meeting with refreshments, and attend events as a vendor or sponsor. These communities amplify word-of-mouth faster than any social media algorithm.",
    action:
      "Join 3 local women's business groups online this week and introduce yourself. Offer an exclusive 15% for members promo code. Attend one in-person event this month.",
  },
];

export function BoutiqueAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="boutique-guide.attracting_women_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.14 330 / 0.12)" }}
        >
          <Heart size={20} style={{ color: "oklch(0.48 0.18 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.14 330 / 0.1)",
            color: "oklch(0.38 0.14 330)",
            border: "1px solid oklch(0.62 0.14 330 / 0.3)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting Women to Your Boutique
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Women are the boutique industry. These 7 strategies are specifically
        designed to make your store the first choice for women in your community
        and to turn them into advocates.
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div
            key={s.stat}
            className="rounded-xl p-4 text-center"
            style={{
              background: "oklch(0.62 0.14 330 / 0.07)",
              border: "1px solid oklch(0.62 0.14 330 / 0.2)",
            }}
          >
            <div
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.48 0.18 330)" }}
            >
              {s.stat}
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Strategies */}
      <div className="space-y-4">
        {STRATEGIES.map((s) => (
          <Card
            key={s.number}
            className="overflow-hidden"
            data-ocid={`boutique-guide.attracting_women.strategy.${s.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: "oklch(0.62 0.14 330 / 0.08)" }}
                >
                  <span
                    className="font-display text-2xl font-bold rotate-90 tracking-tight"
                    style={{ color: "oklch(0.62 0.14 330 / 0.5)" }}
                  >
                    {s.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp
                      size={15}
                      style={{ color: "oklch(0.48 0.18 330)" }}
                    />
                    <h3 className="font-display font-bold text-base text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.body}
                  </p>
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: "oklch(0.62 0.14 330 / 0.07)",
                      borderLeft: "3px solid oklch(0.62 0.14 330 / 0.4)",
                    }}
                  >
                    <strong style={{ color: "oklch(0.38 0.14 330)" }}>
                      This week:
                    </strong>{" "}
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
