import { Badge } from "@/components/ui/badge";
import { Share2 } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    type: "80%: Value",
    platform: "LinkedIn",
    action:
      "Share a credible article about entrepreneurship or your specific industry. Add your personal take in 2-3 sentences.",
    color: "oklch(0.42 0.18 264)",
    bg: "oklch(0.42 0.18 264 / 0.07)",
    border: "oklch(0.42 0.18 264 / 0.2)",
  },
  {
    day: "Tuesday",
    type: "80%: Story",
    platform: "LinkedIn",
    action:
      "Announce your business launch. Tell YOUR WHY: why you started, what problem you solve, who you serve. Authentic beats polished.",
    color: "oklch(0.38 0.15 200)",
    bg: "oklch(0.38 0.15 200 / 0.07)",
    border: "oklch(0.38 0.15 200 / 0.2)",
  },
  {
    day: "Wednesday",
    type: "80%: Community",
    platform: "Facebook",
    action:
      "Introduce yourself in a local community group or neighborhood page. Briefly say who you are, what you do, and invite questions: no hard sell.",
    color: "oklch(0.42 0.12 240)",
    bg: "oklch(0.42 0.12 240 / 0.07)",
    border: "oklch(0.42 0.12 240 / 0.2)",
  },
  {
    day: "Thursday",
    type: "80%: Credibility",
    platform: "LinkedIn / Facebook",
    action:
      "Share a resource that helped you start your business: a book, a mentor, a course. This builds credibility and shows you invest in learning.",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
  },
  {
    day: "Friday",
    type: "20%: PROMO",
    platform: "Instagram + Facebook",
    action:
      "Announce your grand opening or launch offer. Use a clear photo, a specific date, and one strong call-to-action. Make it easy to share.",
    color: "oklch(0.38 0.12 25)",
    bg: "oklch(0.38 0.12 25 / 0.07)",
    border: "oklch(0.38 0.12 25 / 0.2)",
  },
  {
    day: "Saturday",
    type: "80%: Behind-the-Scenes",
    platform: "Instagram / Facebook",
    action:
      "Show your setup and preparation. A photo of your workspace, your supplies arriving, your signage going up. Authenticity builds anticipation.",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
  },
];

const PLATFORMS = [
  {
    name: "LinkedIn",
    role: "Professional credibility & network",
    why: "88% of people 25-54 are on LinkedIn. Your first impression with professional contacts, potential partners, and B2B clients starts here.",
    tactics: [
      "Announce your launch with your founding story: the WHY behind the business",
      "Share industry articles with your expert commentary to build authority",
      "Connect with local business owners, potential partners, and your target clients",
    ],
    color: "oklch(0.42 0.18 264)",
    bg: "oklch(0.42 0.18 264 / 0.07)",
    border: "oklch(0.42 0.18 264 / 0.2)",
  },
  {
    name: "Facebook",
    role: "Local awareness & community",
    why: "84% of people 30-49 are on Facebook. Local community groups are where your neighbors discover new businesses. This is your hometown billboard.",
    tactics: [
      "Join local neighborhood groups and introduce your business naturally",
      "Create a Business Page with complete info: hours, location, contact",
      "Post in local buy/sell/trade groups with launch announcements",
    ],
    color: "oklch(0.42 0.12 240)",
    bg: "oklch(0.42 0.12 240 / 0.07)",
    border: "oklch(0.42 0.12 240 / 0.2)",
  },
  {
    name: "Instagram",
    role: "Visual brand building",
    why: "Your brand's visual identity starts here. Before you have customers, you can build an aesthetic: consistent photos, brand colors, and a story that attracts your ideal audience before day one.",
    tactics: [
      "Post behind-the-scenes setup content to build anticipation pre-launch",
      "Establish your visual brand: consistent filter, tone, and aesthetic",
      "Use location tags and launch-specific hashtags to reach local audiences",
    ],
    color: "oklch(0.42 0.14 330)",
    bg: "oklch(0.42 0.14 330 / 0.07)",
    border: "oklch(0.42 0.14 330 / 0.2)",
  },
];

const HASHTAGS = [
  "#NewBusiness",
  "#SmallBusinessLaunch",
  "#Entrepreneur",
  "#OpenForBusiness",
  "#LocalBusiness",
  "#SmallBizOwner",
  "#GrandOpening",
  "#StartupLife",
];

export function StartBizSocialMediaSection() {
  return (
    <section id="social-media" data-ocid="start-business.social_media_section">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.42 0.18 264 / 0.1)" }}
        >
          <Share2 size={20} style={{ color: "oklch(0.42 0.18 264)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.42 0.18 264 / 0.1)",
            color: "oklch(0.42 0.18 264)",
            border: "1px solid oklch(0.42 0.18 264 / 0.3)",
          }}
        >
          Section 10
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media for Your Launch
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Your launch social posts are your first impression with hundreds of
        potential customers. Every post you publish before opening day is either
        building trust: or eroding it.
      </p>

      {/* Taffer Diagnostic Callout */}
      <div
        className="rounded-xl p-5 mb-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.16 0.08 25 / 0.9) 0%, oklch(0.2 0.06 40 / 0.9) 100%)",
          border: "1px solid oklch(0.6 0.12 25 / 0.25)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.82 0.14 60)" }}
        >
          Jon Taffer: Diagnose Before You Post
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.92 0.006 75)" }}
        >
          Taffer&apos;s first move when entering any failing bar is diagnosis:
          not action. Apply the same discipline to your social media launch.
          Before posting anything, answer three questions:{" "}
          <strong style={{ color: "oklch(0.95 0.015 80)" }}>
            Who am I trying to reach? What do I want them to feel? What do I
            want them to do?
          </strong>{" "}
          A post without a clear answer to all three is noise. Diagnose your
          content before it goes live: it cannot be unposted.
        </p>
      </div>

      {/* Reid Holmes Callout */}
      <div
        className="rounded-xl p-5 mb-10"
        style={{
          background: "oklch(0.42 0.18 264 / 0.06)",
          border: "1px solid oklch(0.42 0.18 264 / 0.2)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.42 0.18 264)" }}
        >
          Reid Holmes: Appreciated Branding: Your Story, Before Competitors Tell
          It
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Launching is your one chance to define your brand narrative before
          anyone else does. Appreciated Branding means making people feel
          something real: not just showing them a logo. Share your founding
          story authentically: the problem you saw, the moment you decided to
          act, the people you&apos;re building this for. When customers feel
          invested in your origin story, they become advocates before they even
          walk through your door.
        </p>
      </div>

      {/* Platform Strategy */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Platform Strategy for New Businesses
      </h3>
      <div className="space-y-4 mb-10">
        {PLATFORMS.map((p) => (
          <div
            key={p.name}
            className="rounded-xl p-5"
            style={{
              background: p.bg,
              border: `1px solid ${p.border}`,
            }}
            data-ocid={`start-business.social_platform.${p.name.toLowerCase()}`}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div
                  className="font-semibold text-sm mb-0.5"
                  style={{ color: p.color }}
                >
                  {p.name}
                </div>
                <div className="text-xs text-muted-foreground">{p.role}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3 italic">{p.why}</p>
            <ul className="space-y-1.5">
              {p.tactics.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: p.color }}
                  />
                  <span className="text-xs text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 80/20 Amex Rule Explainer */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.42 0.18 264 / 0.05)",
          border: "1px solid oklch(0.42 0.18 264 / 0.15)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color: "oklch(0.42 0.18 264)" }}
        >
          The 80/20 Amex Rule: Your Content Split
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          American Express refined the most effective content ratio in social
          media marketing:{" "}
          <strong className="text-foreground">
            80% value-driven, 20% promotional.
          </strong>{" "}
          Four out of five posts should educate, inspire, or entertain your
          audience with no sales pitch. Only one in five should ask for
          anything. New businesses that launch with this ratio build trust
          faster than businesses that lead with constant promotion.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="rounded-lg p-3 text-center"
            style={{
              background: "oklch(0.42 0.18 264 / 0.08)",
              border: "1px solid oklch(0.42 0.18 264 / 0.2)",
            }}
          >
            <div
              className="text-2xl font-bold font-display mb-0.5"
              style={{ color: "oklch(0.42 0.18 264)" }}
            >
              80%
            </div>
            <div className="text-xs text-muted-foreground">
              Helpful, educational, or storytelling content
            </div>
          </div>
          <div
            className="rounded-lg p-3 text-center"
            style={{
              background: "oklch(0.38 0.12 25 / 0.08)",
              border: "1px solid oklch(0.38 0.12 25 / 0.2)",
            }}
          >
            <div
              className="text-2xl font-bold font-display mb-0.5"
              style={{ color: "oklch(0.38 0.12 25)" }}
            >
              20%
            </div>
            <div className="text-xs text-muted-foreground">
              Promotional content: offers, grand openings, CTAs
            </div>
          </div>
        </div>
      </div>

      {/* 6-Day Sample Week */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Your Launch Week Content Calendar
      </h3>
      <div className="space-y-2 mb-10">
        {CONTENT_CALENDAR.map((item) => (
          <div
            key={item.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
            }}
            data-ocid={`start-business.content_calendar.${item.day.toLowerCase()}`}
          >
            <div className="shrink-0 w-28">
              <div
                className="font-display font-bold text-sm"
                style={{ color: item.color }}
              >
                {item.day}
              </div>
              <div
                className="text-[10px] font-semibold mt-0.5"
                style={{ color: item.color, opacity: 0.75 }}
              >
                {item.type}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                {item.platform}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.action}
            </p>
          </div>
        ))}
      </div>

      {/* Hashtag Bank */}
      <h3 className="font-display text-lg font-bold text-foreground mb-3">
        Launch Hashtag Bank
      </h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {HASHTAGS.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: "oklch(0.42 0.18 264 / 0.08)",
              color: "oklch(0.42 0.18 264)",
              border: "1px solid oklch(0.42 0.18 264 / 0.25)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Consistency Tip */}
      <div
        className="rounded-xl p-5"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 264 / 0.88) 0%, oklch(0.22 0.1 240 / 0.88) 100%)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.82 0.14 85)" }}
        >
          The One Rule for New Business Social Media
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.92 0.006 75)" }}
        >
          Consistency beats perfection. One great post per week for six months
          outperforms five brilliant posts in a single week followed by silence.
          Start with one platform, build your rhythm, then expand. Your audience
          will grow in proportion to your consistency: not your content quality.
          Quality comes with practice. Consistency is a choice you make today.
        </p>
      </div>
    </section>
  );
}
