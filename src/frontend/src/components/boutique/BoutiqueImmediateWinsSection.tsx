import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Set Up Instagram & TikTok Shop Accounts Today",
    action:
      "Create or fully optimize your Instagram and TikTok accounts. Enable Instagram Shopping and TikTok Shop features so every post can link directly to a purchase. Use a clean logo, a keyword-rich bio with your niche (size-inclusive NYC boutique, sustainable fashion, quiet luxury), and link to your store or online shop.",
    impact:
      "Boutiques with shopping-enabled social accounts convert 38% more followers into customers within the first 30 days",
  },
  {
    day: 2,
    title: "Define Your Niche & Ideal Customer",
    action:
      "Answer three questions in writing: Who is your ideal customer (age, lifestyle, values)? What makes your boutique different (size-inclusive, sustainable, local designers, quiet luxury)? What emotion should someone feel walking out with a bag from your store? Pin this to your register. It drives every buying and marketing decision.",
    impact:
      "Boutiques with a clear niche convert 2.4x more foot traffic into purchases than general fashion stores",
  },
  {
    day: 3,
    title: "Source & Photograph 3 Hero Items",
    action:
      "Identify the 3 most visually striking, on-trend pieces in your current inventory. Photograph each on a model or mannequin in natural light from 3 angles. Post one today, schedule the others. These hero items become your social media anchors and define your aesthetic to attract the right customer.",
    impact:
      "Professional product photography increases click-through rates by 94% compared to casual phone shots",
  },
  {
    day: 4,
    title: "Reach Out to 5 Local Micro-Influencers",
    action:
      "Find 5 local Instagram or TikTok creators with 2K to 20K followers who match your boutique aesthetic. DM each with a personal note offering a free item in exchange for a post or story feature. Micro-influencers drive 7x higher engagement than macro-influencers for local boutiques.",
    impact:
      "A single micro-influencer post in your local area can drive 50 to 200 new followers and 20 to 80 in-store visitors",
  },
  {
    day: 5,
    title: "Launch a Grand Opening Flash Sale or Giveaway",
    action:
      "Run a 48-hour giveaway: follow your account, tag a friend, and share the post for a chance to win $100 store credit. Simultaneously, offer a 20% Grand Opening discount for the first 50 customers to create urgency and fill your loyalty program immediately.",
    impact:
      "Giveaways increase Instagram followers 70% faster than standard content campaigns",
  },
  {
    day: 6,
    title: "Join Local Women's Business Networks",
    action:
      "Search for your city's women's business associations, female entrepreneur Facebook groups, and local chamber of commerce women's committees. Join 3 to 5 groups today. Introduce yourself, share your boutique story, and offer an exclusive member discount.",
    impact:
      "Women-owned boutiques that actively participate in local business networks see 40% higher repeat customer rates",
  },
  {
    day: 7,
    title: "Set Up Google Business Profile",
    action:
      "Claim or create your Google Business Profile with accurate hours, address, phone, and website. Upload 10+ photos including your storefront, interior, fitting rooms, and best merchandise displays. Write a keyword-rich description. Request reviews from your first customers.",
    impact:
      "Google Maps is responsible for 60 to 70% of new boutique discovery and is your highest-ROI free marketing channel",
  },
];

export function BoutiqueImmediateWinsSection() {
  return (
    <section id="quickstart" data-ocid="boutique-guide.immediate_wins_section">
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
          Section 1 &mdash; Start Here
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        7-Day Immediate Wins Action Plan
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        One concrete action per day. Do these 7 things and you&rsquo;ll be ahead
        of 90% of your boutique competitors.
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
              data-ocid={`boutique-guide.immediate_wins.item.${d.day}`}
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
