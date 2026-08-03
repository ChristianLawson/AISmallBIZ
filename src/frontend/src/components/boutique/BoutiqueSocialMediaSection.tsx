import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Layers, TrendingUp } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    content: "Instagram: share a fashion trend article with your take",
    detail:
      "Link to a Vogue, Refinery29, or WGSN-sourced trend piece. Add 2 sentences of your own curation: 'This is why we are stocking Cherry Cola red this month.' You position yourself as a style authority, not just a store.",
    format: "Instagram Post / Link in Bio",
    color: "oklch(0.55 0.14 330)",
    bg: "oklch(0.55 0.14 330 / 0.08)",
  },
  {
    day: "Tuesday",
    content: "Instagram: new arrival flat lay or styled model shot",
    detail:
      "Your most important post of the week. Flat lay on a clean surface (marble, wood, textured linen) or a model shot with natural light. Tag the piece name. Include size range. Add pricing. Always include a way to purchase: link in bio or DM for availability.",
    format: "Instagram Feed Post + Stories",
    color: "oklch(0.48 0.18 300)",
    bg: "oklch(0.48 0.18 300 / 0.08)",
  },
  {
    day: "Wednesday",
    content: "Instagram Story: behind-the-scenes buyer picking items",
    detail:
      "A 15-30 second Story showing you (or your buyer) going through new inventory, commenting on pieces, sharing why you chose each item. 'This silk cami is going to sell out by Friday: here is why I bought 3 colorways.' This is your editorial voice.",
    format: "Instagram Stories (3-5 slides)",
    color: "oklch(0.35 0.08 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
  },
  {
    day: "Thursday",
    content: "Share a fashion blogger post featuring your style aesthetic",
    detail:
      "Reshare content from a style blogger, local fashion creator, or brand whose aesthetic aligns with yours. Add your comment: 'This is exactly the energy we are bringing with our new arrivals.' This builds community and signals your taste level.",
    format: "Instagram Reshare",
    color: "oklch(0.45 0.16 140)",
    bg: "oklch(0.45 0.16 140 / 0.07)",
  },
  {
    day: "Friday",
    content: "PROMO: Instagram weekend sale or exclusive item drop",
    detail:
      "One clear promotional post per week. 'Friday Drop: New arrivals online now + in store this weekend. DM to hold.' Or 'Weekend sale: 20% off dresses through Sunday.' One promotion, one CTA, one clear expiry. Do not dilute it with multiple offers.",
    format: "Instagram Feed + Stories",
    color: "oklch(0.48 0.18 40)",
    bg: "oklch(0.48 0.18 40 / 0.08)",
  },
  {
    day: "Saturday",
    content: "Customer style spotlight: tag them!",
    detail:
      "Repost a customer wearing something from your boutique (always get explicit permission). Tag them. Add 'Tag us in your outfits with #[YourBoutiqueHashtag] for a chance to be featured.' This is the highest-converting social proof format for fashion retail.",
    format: "Instagram Reshare + Story",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    icon: Camera,
    priority: "Primary",
    color: "oklch(0.55 0.14 330)",
    bg: "oklch(0.55 0.14 330 / 0.09)",
    description:
      "Your most important platform. Fashion discovery is visual-first, and Instagram's algorithm surfaces boutique content to fashion-forward women in your geographic area. Consistent, aesthetic posting drives both foot traffic and DM inquiries.",
    tactics: [
      "New arrival flat lays",
      "Customer style spotlights",
      "Behind-the-scenes buying",
      "Stories for time-sensitive drops",
    ],
  },
  {
    name: "Pinterest",
    icon: Layers,
    priority: "Secondary",
    color: "oklch(0.48 0.18 10)",
    bg: "oklch(0.48 0.18 10 / 0.08)",
    description:
      "The highest purchase intent platform in fashion. Women planning outfits, seasons, and wardrobes use Pinterest like a visual wishlist. A well-organized boutique Pinterest with seasonal style boards drives consistent long-tail discovery.",
    tactics: [
      "Seasonal style boards",
      "Outfit inspiration pins",
      "New arrival collections",
      "'Shop the Look' pins with links",
    ],
  },
  {
    name: "Facebook",
    icon: Heart,
    priority: "Community",
    color: "oklch(0.45 0.12 240)",
    bg: "oklch(0.45 0.12 240 / 0.08)",
    description:
      "Events, VIP sale announcements, and community-building for your loyal customers. Facebook Events drives foot traffic to in-store events better than any other platform for the 30-55 demographic in your customer base.",
    tactics: [
      "In-store event announcements",
      "VIP customer groups",
      "Seasonal sale campaigns",
      "Community giveaways",
    ],
  },
];

const HASHTAGS = [
  "#BoutiqueStyle",
  "#ShopLocal",
  "#FashionBoutique",
  "#OOTD",
  "#LocalFashion",
  "#BoutiqueLife",
  "#StyleInspo",
  "#NewArrivals",
];

const PHOTOGRAPHY_TIPS = [
  {
    type: "Flat Lay",
    color: "oklch(0.55 0.14 330)",
    tips: [
      "Shoot from directly above: no angle distortion",
      "Use a textured background (linen, marble, raw wood)",
      "Style with 2-3 complementary accessories max",
      "Shoot in natural window light, morning preferred",
    ],
  },
  {
    type: "On-Model",
    color: "oklch(0.48 0.18 300)",
    tips: [
      "Outdoor natural light always beats indoor artificial",
      "Background should be neutral: you are selling the clothes",
      "Shoot vertical for Instagram feed and Stories",
      "Multiple poses: standing, moving, detail close-up",
    ],
  },
];

export function BoutiqueSocialMediaSection() {
  return (
    <section id="social-media" data-ocid="boutique-guide.social_media_section">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 330 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.55 0.14 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 330 / 0.1)",
            color: "oklch(0.55 0.14 330)",
            border: "1px solid oklch(0.55 0.14 330 / 0.25)",
          }}
        >
          Social Media Strategy
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media for Boutique Clothing Stores
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Instagram is your storefront, your editorial magazine, and your best
        salesperson &mdash; all running 24/7. Fashion is the most visual
        category on social media. Your feed is your first impression.
      </p>

      {/* Taffer Banner */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "oklch(0.28 0.12 30 / 0.06)",
          border: "1px solid oklch(0.28 0.12 30 / 0.2)",
        }}
        data-ocid="boutique-guide.social_taffer_banner"
      >
        <div className="flex items-start gap-3 mb-4">
          <Camera
            size={22}
            style={{ color: "oklch(0.55 0.18 30)" }}
            className="shrink-0 mt-0.5"
          />
          <div>
            <p className="font-display text-base font-bold text-foreground italic">
              &ldquo;If your boutique&rsquo;s Instagram looks like every other
              boutique, you have no differentiation &mdash; and no reason for
              someone to follow you instead of the boutique down the
              street.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &mdash; Jon Taffer framework applied to boutique retail
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Taffer's first question on every rescue is: 'Why should someone choose
          you over everyone else?' Your Instagram must answer that question
          visually in the first 9 posts. Scroll your own grid right now. If it
          does not have a clear point of view, that is the first thing to fix.
        </p>
      </div>

      {/* Platform breakdown */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Platform Priority
      </h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {PLATFORMS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="rounded-xl p-5"
              style={{
                background: p.bg,
                border: `1px solid ${p.color.replace(")", " / 0.2)")}`,
              }}
              data-ocid={`boutique-guide.social_platform.${p.name.toLowerCase().replace(" ", "-")}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={16} style={{ color: p.color }} />
                <span className="font-bold text-sm text-foreground">
                  {p.name}
                </span>
                <Badge
                  className="text-[10px] ml-auto font-semibold"
                  style={{
                    background: p.color.replace(")", " / 0.15)"),
                    color: p.color,
                  }}
                >
                  {p.priority}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {p.description}
              </p>
              <ul className="space-y-1">
                {p.tactics.map((t) => (
                  <li key={t} className="text-xs flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Reid Holmes insight */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.48 0.18 300 / 0.06)",
          border: "1px solid oklch(0.48 0.18 300 / 0.18)",
        }}
        data-ocid="boutique-guide.social_reid_insight"
      >
        <p className="font-display text-base font-semibold italic text-foreground mb-2">
          &ldquo;Fashion is emotional &mdash; your feed should make followers
          feel like insiders. Not customers. Not transactions. People who are in
          on something special.&rdquo;
        </p>
        <p className="text-xs text-muted-foreground">
          &mdash; Reid Holmes, Appreciated Branding. The boutiques that win on
          Instagram don&rsquo;t post products &mdash; they post identity. Your
          grid should make a 28-year-old woman feel that following you means she
          has better taste. That feeling is what drives the purchase.
        </p>
      </div>

      {/* 7-day calendar */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Sample Week Content Calendar
      </h3>
      <div className="space-y-2 mb-10">
        {CONTENT_CALENDAR.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`boutique-guide.social_calendar.${day.day.toLowerCase()}`}
          >
            <div className="w-28 shrink-0">
              <div className="font-bold text-xs" style={{ color: day.color }}>
                {day.day}
              </div>
              <div
                className="text-[10px] mt-0.5"
                style={{ color: day.color, opacity: 0.75 }}
              >
                {day.format}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                {day.content}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {day.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Photography tips */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Photography That Sells
      </h3>
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {PHOTOGRAPHY_TIPS.map((pt) => (
          <div
            key={pt.type}
            className="rounded-xl p-5"
            style={{
              background: pt.color.replace(")", " / 0.06)"),
              border: `1px solid ${pt.color.replace(")", " / 0.18)")}`,
            }}
          >
            <div
              className="font-semibold text-sm mb-3"
              style={{ color: pt.color }}
            >
              {pt.type} Photography
            </div>
            <ul className="space-y-1.5">
              {pt.tips.map((tip) => (
                <li key={tip} className="text-xs flex items-start gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: pt.color }}
                  />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hashtags */}
      <div className="mb-8">
        <h3 className="font-display text-lg font-bold text-foreground mb-3">
          Core Hashtags for Boutiques
        </h3>
        <div className="flex flex-wrap gap-2">
          {HASHTAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-lg"
              style={{
                background: "oklch(0.55 0.14 330 / 0.08)",
                color: "oklch(0.55 0.14 330)",
                border: "1px solid oklch(0.55 0.14 330 / 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "oklch(0.48 0.18 300 / 0.15)" }}
            >
              <TrendingUp size={16} style={{ color: "oklch(0.45 0.18 300)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-foreground">
                  Boutique Social Win
                </span>
                <Badge
                  style={{
                    background: "oklch(0.48 0.18 300 / 0.12)",
                    color: "oklch(0.45 0.18 300)",
                  }}
                >
                  Case Study
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Williamsburg boutique with <strong>no ad budget</strong> grew
                from 2,100 to <strong>18,400 Instagram followers</strong> in 6
                months by posting one customer style spotlight every Saturday
                and one new arrival flat lay every Tuesday. Their Saturday
                tag-a-friend posts consistently reached 3,000+ non-followers per
                post. Foot traffic increased 40% month-over-month. Formula: two
                high-quality posts per week, every week, without exception.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
