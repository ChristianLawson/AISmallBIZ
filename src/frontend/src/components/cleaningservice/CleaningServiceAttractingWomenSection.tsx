import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp } from "lucide-react";

const STATS = [
  {
    stat: "~70%",
    label: "of cleaning business owners in the US are women",
  },
  {
    stat: "80%+",
    label: "of residential cleaning decisions are made by women",
  },
  {
    stat: "#1",
    label:
      "source of new clients is referral: driven primarily by women's social networks",
  },
  {
    stat: "3.7x",
    label:
      "higher client retention when the cleaning staff is female and background-checked",
  },
];

const STRATEGIES = [
  {
    number: "01",
    title: "Market Woman-to-Woman Trust and Safety",
    body: "The cleaning industry is uniquely positioned: both the business owners and the primary clients are predominantly women. Lead with your team's background check policy, bonding status, and insurance certificate in every marketing message. Women hiring a cleaning service are inviting strangers into their home: safety and trust are the purchase decision, not price.",
    action:
      "Add 'Background-Checked, Bonded & Insured' to your Google Business headline, Instagram bio, and any printed material. Offer female-staff-only scheduling as a premium option.",
  },
  {
    number: "02",
    title: "Eco-Friendly / Non-Toxic Products as a Core Differentiator",
    body: "Women with children and pets are the highest-demand segment for non-toxic cleaning products. This is not a niche: it is your fastest-growing client segment. Stock plant-based, fragrance-free, EPA Safer Choice certified products. List every product you use on your website. Clients who care about non-toxic products refer at 4x the rate of standard clients.",
    action:
      "Switch at least your Standard Clean package to non-toxic products and announce it across all platforms this week. Show the product labels in a social post.",
  },
  {
    number: "03",
    title: "Flexible Scheduling for Working Moms and Caregivers",
    body: "Working mothers, caregivers, and women managing households are your core market. Offer early morning (7-8am), evening (after 5pm), and weekend slots. Offer 'while the kids are at school' scheduling windows prominently. Clients who can book around their schedule rather than yours cancel far less frequently.",
    action:
      "Add 'Early morning, evening & weekend appointments available' to your booking page and Google My Business description.",
  },
  {
    number: "04",
    title: "Instagram and TikTok 'Satisfying Clean' Content",
    body: "Cleaning transformation content is among the most-shared categories on both platforms: and women are its primary sharers and viewers. Post weekly before/after reels: dirty oven → sparkling, cluttered bathroom → immaculate. Add audio from popular cleaning content trends. Each viral video functions as a free ad reaching thousands of potential clients in your service area.",
    action:
      "Post one before/after transformation reel this week. Use local location tags, trending audio, and 'satisfying clean' hashtags. Commit to one per week for 60 days.",
  },
  {
    number: "05",
    title: "Referral Programs That Leverage Women's Social Networks",
    body: "Women are the primary drivers of word-of-mouth referrals for home services. A well-structured referral program: 'Give $20, Get $20': travels through neighborhood Facebook groups, Nextdoor, WhatsApp threads, and book clubs faster than any paid campaign. Make the referral card beautiful enough to keep.",
    action:
      "Design a physical referral card with your logo, the offer, and a QR code linking to your booking page. Leave one at the end of every job for the next 90 days.",
  },
  {
    number: "06",
    title: "Network with Women's Business Groups",
    body: "NAWBO (National Association of Women Business Owners), local Women's Business Centers (SBA-funded), and regional women's networking groups are high-value referral sources: especially for commercial cleaning. These organizations recommend trusted women-owned vendors to their members constantly. One connection can generate 10+ commercial referrals.",
    action:
      "Find your nearest NAWBO chapter or Women's Business Center (sba.gov/local-assistance) and attend one event this month. Bring business cards and a special member offer.",
  },
  {
    number: "07",
    title: "Women-Owned Badge and Certification",
    body: "Display your Women-Owned Business status prominently on every profile. The WBENC (Women's Business Enterprise National Council) certification unlocks corporate procurement opportunities and signals credibility to both individual and commercial clients. Even without formal certification, displaying 'Women-Owned & Operated' drives meaningful preference among your core demographic.",
    action:
      "Add 'Women-Owned & Operated' to Google Business Profile, Yelp, Instagram bio, and your website header this week. Explore WBENC certification at wbenc.org.",
  },
];

export function CleaningServiceAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="cleaning-service-guide.attracting_women_section"
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
        Attracting Women: Owners, Employees &amp; Clients
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The cleaning industry is majority women-owned and majority
        women-purchased. Here&rsquo;s how to make that competitive advantage
        work at every level of your business.
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
            data-ocid={`cleaning-service-guide.attracting_women.strategy.${s.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: "oklch(0.62 0.14 330 / 0.08)" }}
                >
                  <span
                    className="font-display font-bold text-xl"
                    style={{ color: "oklch(0.48 0.18 330)" }}
                  >
                    {s.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.body}
                  </p>
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{
                      background: "oklch(0.62 0.14 330 / 0.07)",
                      border: "1px solid oklch(0.62 0.14 330 / 0.2)",
                    }}
                  >
                    <TrendingUp
                      size={12}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.48 0.18 330)" }}
                    />
                    <span style={{ color: "oklch(0.38 0.14 330)" }}>
                      <strong>Action:</strong> {s.action}
                    </span>
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
