import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Stop Broadcasting, Start Connecting"',
    detail:
      "Every post that is just an ad is a post your followers scroll past. Social media is not a billboard. It is a conversation. If you are not listening, you are losing.",
  },
  {
    quote: '"Consistency Beats Virality"',
    detail:
      "One viral post means nothing if you disappear for three weeks. The businesses that win on social media show up every single day: not perfectly, but consistently.",
  },
  {
    quote: '"Your Metrics Are Your Mirror"',
    detail:
      "If your engagement is low, your content is the problem. Not the algorithm. Not the platform. Your content. Look at the data and fix it.",
  },
  {
    quote: '"Every Platform Has Rules: Learn Them"',
    detail:
      "Posting the same content across Instagram, Facebook, TikTok, and LinkedIn and expecting the same results is laziness. Each platform rewards a different style. Learn the room.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Profile Quality",
    color: "oklch(0.45 0.18 295)",
    bg: "oklch(0.45 0.18 295 / 0.08)",
    border: "oklch(0.45 0.18 295 / 0.25)",
    items: [
      "Profile photos consistent across platforms",
      "Bio clearly states what you do",
      "Website link in bio",
      "Contact info current",
      "Branded cover images",
    ],
  },
  {
    category: "Content Strategy",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    border: "oklch(0.55 0.14 85 / 0.25)",
    items: [
      "Posting schedule defined and maintained",
      "Content mix (educational/entertaining/promotional)",
      "Brand voice consistent",
      "Original content vs. reposts ratio",
    ],
  },
  {
    category: "Engagement",
    color: "oklch(0.58 0.18 25)",
    bg: "oklch(0.62 0.15 25 / 0.08)",
    border: "oklch(0.58 0.18 25 / 0.25)",
    items: [
      "Responding to comments within 24 hours",
      "Replying to DMs",
      "Engaging with followers' content",
      "Using relevant hashtags",
      "Tagging local businesses/community",
    ],
  },
  {
    category: "Platform-Specific",
    color: "oklch(0.45 0.12 180)",
    bg: "oklch(0.45 0.12 180 / 0.08)",
    border: "oklch(0.45 0.12 180 / 0.25)",
    items: [
      "Instagram Reels posted weekly",
      "Facebook events for promotions",
      "TikTok for behind-the-scenes",
      "LinkedIn for B2B",
      "Google Business posts linked",
    ],
  },
  {
    category: "Paid Advertising",
    color: "oklch(0.55 0.14 60)",
    bg: "oklch(0.78 0.12 60 / 0.08)",
    border: "oklch(0.55 0.14 60 / 0.25)",
    items: [
      "Boosted posts targeting local area",
      "Audience defined by demographics",
      "A/B testing ad creative",
      "Tracking cost per click and conversions",
    ],
  },
  {
    category: "Analytics",
    color: "oklch(0.45 0.14 240)",
    bg: "oklch(0.45 0.14 240 / 0.08)",
    border: "oklch(0.45 0.14 240 / 0.25)",
    items: [
      "Weekly metrics review",
      "Best-performing content identified",
      "Follower growth tracked",
      "Reach vs. engagement ratio monitored",
    ],
  },
];

export function SocialMediaTafferSection() {
  return (
    <section id="taffer" data-ocid="socialmedia-guide.taffer_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Megaphone size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Jon Taffer Framework
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Jon Taffer on Social Media: Post with Purpose or Don&apos;t Post at All
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&apos;s no-excuses framework from Bar Rescue, applied directly
        to social media marketing. Brutal, but effective.
      </p>

      {/* Hero Taffer quote */}
      <div
        className="rounded-2xl p-7 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.92) 0%, oklch(0.22 0.1 30 / 0.9) 100%)",
        }}
      >
        <AlertTriangle
          size={28}
          className="mb-3"
          style={{ color: "oklch(0.82 0.14 85)" }}
        />
        <blockquote
          className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;Posting a blurry photo of your lunch and calling it social
          media marketing is like putting a sign on your door that says &apos;we
          don&apos;t really care.&apos; Your customers can tell.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          &mdash; Jon Taffer, Bar Rescue. Applied to social media: if your
          content looks lazy, your brand looks lazy.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.quote}>
            <CardContent className="p-5">
              <blockquote
                className="font-display text-base font-semibold italic mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {p.quote}
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social Media Audit grid */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Social Media Rescue Checklist &mdash; Taffer&apos;s 6-Category Audit
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AUDIT_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-4"
            style={{
              background: cat.bg,
              border: `1px solid ${cat.border}`,
            }}
          >
            <div
              className="font-semibold text-sm mb-3"
              style={{ color: cat.color }}
            >
              {cat.category}
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: cat.color }}
                  />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
