import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const STATS = [
  {
    brand: "SoHo Boutique",
    metric: "210%",
    label: "Year-on-Year Growth",
    detail:
      "Zero brand identity → explosive growth after repositioning + e-commerce launch, with zero rent increase.",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    brand: "Nike SoHo",
    metric: "April 2026",
    label: "Flagship Reopening",
    detail:
      "Nike By You customization studio, hand-painted sneakers, local artist partnerships: betting on cities, culture, and physical brand building.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
  },
  {
    brand: "Golden Goose",
    metric: "90%",
    label: "Sales from Sneakers",
    detail:
      "Con Amore concept: coffee, flowers, hand-wrapped gifts, sneaker customization. The brand is built on experience, not just product.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
  {
    brand: "Physical Retail 2026",
    metric: "Strategic",
    label: "Brand Layer",
    detail:
      '"The store is no longer just distribution. It\'s a strategic layer in the brand ecosystem.": Retail analyst, 2026.',
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
  },
];

const LESSONS = [
  {
    number: "01",
    title: "Your Store Is not the Business: Your Brand Is",
    body: 'A SoHo women\'s accessories boutique had no brand identity, no online presence, and declining walk-in traffic. After repositioning with a defined brand ("considered accessories for considered women"), launching e-commerce, and building social presence, they grew 210% year-on-year with zero increase in rent. The owner\'s insight: "My store wasn\'t the business. My brand was."',
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    accent: "oklch(0.28 0.12 330 / 0.3)",
  },
  {
    number: "02",
    title: "Physical Retail Completes Digital: It Does not Compete With It",
    body: "Winning stores create connection, memorable moments, and strengthen the full brand ecosystem. They give customers a reason to stay longer, come back more often, and feel something. Nespresso SoHo: scent stations, digital visuals, RFID fast checkout, coffee speakeasy for community events. The store is a content engine and a loyalty machine.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.05)",
    accent: "oklch(0.78 0.12 85 / 0.3)",
  },
  {
    number: "03",
    title: "The 10-Second Rule",
    body: "A customer decides in 10 seconds whether to stay or leave your store. Your window display is your headline. Your entrance is your promise. Your layout guides the experience. Gymshark NYC turned local customers into mannequins alongside celebrity athletes: 'you belong here' became a physical, in-store reality. That is brand architecture at the retail level.",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.05)",
    accent: "oklch(0.62 0.1 15 / 0.3)",
  },
  {
    number: "04",
    title: "Omnichannel Is Infrastructure, Not a Trend",
    body: "NYC retailers blending physical + digital + social see stronger engagement, better retention, and more resilient operations. Reward cross-channel engagement: buy online, pick up in store, return anywhere. Every touchpoint must feel like the same brand: same aesthetic, same service standard, same story.",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.05)",
    accent: "oklch(0.28 0.12 180 / 0.3)",
  },
  {
    number: "05",
    title: "The Store as Content Engine",
    body: "Nike SoHo reopened with customization studios, hand-painted sneakers, and local artist partnerships. Golden Goose built a retail experience with coffee, flowers, hand-wrapped gifts. These stores generate daily social media content without a marketing budget. Your store IS the content. Livestream shopping events, influencer meetups, branded content shoots: the store is now a media channel.",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    accent: "oklch(0.28 0.12 330 / 0.3)",
  },
];

export function RetailWhySucceedSection() {
  return (
    <section id="why-succeed" data-ocid="retail-guide.why_succeed_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
            border: "1px solid oklch(0.28 0.12 330 / 0.25)",
          }}
        >
          Section 1
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Why Top NYC Retailers Succeed in 2026
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Research-backed case studies from NYC&apos;s highest-performing retail
        stores: from independent boutiques to flagship reopenings.
      </p>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {STATS.map((s) => (
          <div
            key={s.brand}
            className="rounded-xl p-5"
            style={{
              background: s.bg,
              border: `1px solid ${s.border}`,
            }}
          >
            <div
              className="font-display text-3xl font-bold mb-1"
              style={{ color: s.color }}
            >
              {s.metric}
            </div>
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: s.color }}
            >
              {s.label}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {s.detail}
            </p>
            <div
              className="text-xs font-semibold mt-3"
              style={{ color: s.color }}
            >
              {s.brand}
            </div>
          </div>
        ))}
      </div>

      {/* Key insight callout */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.9) 0%, oklch(0.22 0.08 330 / 0.88) 100%)",
        }}
      >
        <p
          className="font-display text-xl font-semibold italic text-center leading-relaxed"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;The retailers closing in 2026 thought their store was their
          business. The retailers winning in 2026 know their brand is their
          business: and the store is where that brand is expressed.&rdquo;
        </p>
      </div>

      {/* 5 Key Lessons */}
      <h3 className="font-display text-xl font-bold text-foreground mb-5">
        5 Key Lessons From NYC&apos;s Top-Performing Retailers
      </h3>
      <div className="space-y-4">
        {LESSONS.map((l) => (
          <Card
            key={l.number}
            className="overflow-hidden"
            data-ocid={`retail-guide.lesson.${l.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: l.bg }}
                >
                  <span
                    className="font-display text-2xl font-bold rotate-90 tracking-tight"
                    style={{ color: l.color, opacity: 0.6 }}
                  >
                    {l.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <h4 className="font-display font-bold text-base text-foreground mb-2">
                    {l.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {l.body}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
