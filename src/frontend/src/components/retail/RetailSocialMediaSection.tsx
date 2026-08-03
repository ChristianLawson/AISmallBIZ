import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp } from "lucide-react";

const TAFFER_FAILURES = [
  {
    title: "Posting products, not stories",
    desc: "Customers scroll past catalog posts. They stop for people, moments, and emotion.",
  },
  {
    title: "Inconsistent posting schedule",
    desc: "Posting 3 days in a row then going silent for two weeks destroys algorithmic reach and brand trust.",
  },
  {
    title: "No call to action",
    desc: "Every post must tell the customer what to do next: visit, DM, tag a friend, or click the link in bio.",
  },
];

const REID_HOLMES_INSIGHT =
  "Make customers feel like insiders: not audiences. Share what is arriving next week, ask their opinion on new stock, let them vote on the next window display. An insider does not just shop. They advocate.";

const HASHTAG_BANK = [
  "#RetailTherapy",
  "#ShopLocal",
  "#NewArrivals",
  "#BoutiqueFinds",
  "#LocalRetail",
];

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    action: "New arrival announcement: styled photo or unboxing Reel",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    day: "Tuesday",
    action: "'Style this' challenge: show one piece three different ways",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
  },
  {
    day: "Wednesday",
    action:
      "Behind the counter: the story behind a product, a supplier, or a buying decision",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
  {
    day: "Thursday",
    action:
      "Client feature: styled customer (with permission), their story, why they love it",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
  },
  {
    day: "Friday",
    action:
      "Weekend promotion announcement: drive Saturday foot traffic with urgency",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.18)",
  },
  {
    day: "Saturday",
    action:
      "In-store energy: real customers, real moments, community feel. Authentic over polished.",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
  },
  {
    day: "Sunday",
    action:
      "Curated content: mood board, upcoming promotion preview, community share",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
    border: "oklch(0.78 0.12 85 / 0.16)",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    role: "Your primary brand channel",
    tactics: [
      "Product photography for feed: consistent aesthetic, consistent filter",
      "Reels for discovery: new arrivals, styling tips, behind-the-scenes",
      "Stories for community: polls, Q&As, daily life of the store",
    ],
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
  },
  {
    name: "TikTok",
    role: "Discovery and viral potential",
    tactics: [
      "Styling tips and 'get the look' videos",
      "Product reveals and new arrival drops",
      "Behind-the-scenes: buying trips, unpacking, visual merchandising",
    ],
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
  },
  {
    name: "Pinterest",
    role: "Product discovery + styling inspiration",
    tactics: [
      "Styled product boards organized by category",
      "Seasonal lookbooks featuring your inventory",
      "'How to style' pins linking to your e-commerce",
    ],
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
  },
  {
    name: "Google Business",
    role: "Local SEO + conversion",
    tactics: [
      "Weekly posts for featured promotions",
      "Daily photos of new arrivals and styled displays",
      "Respond to every review: builds trust and ranking",
    ],
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
  },
];

export function RetailSocialMediaSection() {
  return (
    <section id="social-media" data-ocid="retail-guide.social_media_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.38 0.1 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.3)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media &amp; Content Strategy
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Your store IS your content studio. Every new arrival, every styled
        customer, every behind-the-scenes moment is content. The question is
        whether you&apos;re capturing it.
      </p>

      {/* Taffer Diagnostic */}
      <div
        className="rounded-xl p-5 mb-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 265 / 0.92), oklch(0.22 0.15 265 / 0.85))",
          border: "1px solid oklch(0.55 0.2 265 / 0.35)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={18} style={{ color: "oklch(0.78 0.18 60)" }} />
          <span
            className="font-bold text-sm"
            style={{ color: "oklch(0.78 0.18 60)" }}
          >
            Taffer Diagnosis: Why Most Retail Social Media Fails to Drive Foot
            Traffic
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {TAFFER_FAILURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg p-3"
              style={{ background: "oklch(0.12 0.08 265 / 0.5)" }}
            >
              <p
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.88 0.06 265)" }}
              >
                {f.title}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.72 0.04 265)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reid Holmes Callout */}
      <div
        className="rounded-xl p-5 mb-6"
        style={{
          background: "oklch(0.55 0.2 265 / 0.08)",
          border: "1px solid oklch(0.55 0.2 265 / 0.25)",
        }}
      >
        <p
          className="text-sm font-semibold mb-1"
          style={{ color: "oklch(0.62 0.2 265)" }}
        >
          Reid Holmes: Appreciated Branding
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{REID_HOLMES_INSIGHT}&rdquo;
        </p>
      </div>

      {/* Hashtag Bank */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-foreground mb-2">
          Retail Hashtag Bank
        </p>
        <div className="flex flex-wrap gap-2">
          {HASHTAG_BANK.map((tag) => (
            <Badge
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.55 0.2 265 / 0.1)",
                color: "oklch(0.62 0.2 265)",
                border: "1px solid oklch(0.55 0.2 265 / 0.25)",
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content engine insight */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.62 0.1 15 / 0.07)",
          border: "1px solid oklch(0.62 0.1 15 / 0.2)",
        }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">
            The Store as Content Engine:
          </strong>{" "}
          Nike SoHo&apos;s reopening was its own viral content campaign. Golden
          Goose&apos;s Con Amore concept generates daily content that money
          can&apos;t buy: real customers, real moments, real personalization.
          These stores generate daily social media content without a marketing
          budget. Your store IS the content. Livestream shopping events,
          influencer meetups, branded content shoots: the store is now a media
          channel.
        </p>
      </div>

      {/* 7-day content calendar */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Your 7-Day Content Calendar
      </h3>
      <div className="space-y-2 mb-10">
        {CONTENT_CALENDAR.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.border}`,
            }}
            data-ocid={`retail-guide.content_day.${day.day.toLowerCase()}`}
          >
            <div
              className="font-display font-bold text-sm w-24 shrink-0 pt-0.5"
              style={{ color: day.color }}
            >
              {day.day}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {day.action}
            </p>
          </div>
        ))}
      </div>

      {/* Platform strategy */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">
        Platform Strategy
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {PLATFORMS.map((p) => (
          <div
            key={p.name}
            className="rounded-xl p-5"
            style={{
              background: p.bg,
              border: `1px solid ${p.border}`,
            }}
            data-ocid={`retail-guide.platform.${p.name.toLowerCase().replace(" ", "_")}`}
          >
            <div
              className="font-semibold text-sm mb-0.5"
              style={{ color: p.color }}
            >
              {p.name}
            </div>
            <div className="text-xs text-muted-foreground mb-3">{p.role}</div>
            <ul className="space-y-1.5">
              {p.tactics.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span
                    className="w-1 h-1 rounded-full mt-2 shrink-0"
                    style={{ background: p.color }}
                  />
                  <span className="text-xs text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Livestream tip */}
      <div
        className="rounded-xl p-5"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.88) 0%, oklch(0.22 0.1 30 / 0.88) 100%)",
        }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.82 0.14 85)" }}
        >
          Livestream Shopping
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.92 0.006 75)" }}
        >
          Feature &apos;The Collab Drop&apos; and &apos;First Look&apos;
          promotions as live shopping events on Instagram and TikTok. These
          events consistently drive 5-10x normal engagement and create urgency
          that static posts cannot. Your most engaged followers will buy in real
          time: and share the event to their audiences.
        </p>
      </div>
    </section>
  );
}
