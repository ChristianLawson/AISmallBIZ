import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const STRATEGIES = [
  {
    title: "Partner with Women's Organizations",
    emoji: "🤝",
    description:
      "Reach out to local women's sports clubs, fitness studios, sororities, and professional women's networks. Offer your venue for their events in exchange for cross-promotion.",
    examples: [
      "Women's running clubs → post-run Ladies' Night offer",
      "Yoga studios → cross-promote stress-relief billiards sessions",
      "Women's business networks → corporate Ladies' Night packages",
    ],
  },
  {
    title: "Hire Female Staff & Coaches",
    emoji: "👩‍🏫",
    description:
      "Female bartenders, managers, and pool coaches make the space feel genuinely inclusive: not performatively so. A skilled female pool instructor is your single most powerful staff hire for this initiative.",
    examples: [
      "Post on local women's sports Facebook groups for pool instructors",
      "Contact APA or BCA leagues to find female certified coaches",
      "Highlight female staff on social: their stories build credibility",
    ],
  },
  {
    title: "Social Media Strategy for Women",
    emoji: "📱",
    description:
      "Feature women players on Instagram, TikTok, and Facebook. Real women's stories outperform promotional content 5:1 on engagement. Testimonials, skill progression clips, and event recaps are your best-performing content types.",
    examples: [
      "'Player of the Month' feature on Instagram",
      "TikTok: 60-second lesson clips with female instructor",
      "Facebook event pages for every Ladies' Night: share to local women's groups",
    ],
  },
  {
    title: "Incentives for Women",
    emoji: "🎁",
    description:
      "Discounts, free game nights, and group incentives lower the barrier to a first visit. The first visit is the hardest: once women come once in a safe environment, 68% return within 2 weeks.",
    examples: [
      "Women play free on Ladies' Night (first visit)",
      "Bring 3 friends = your game is free",
      "Monthly 'Women\u2019s Pass': unlimited Ladies' Nights for $25/month",
    ],
  },
];

const RISK_ITEMS = [
  {
    risk: "Resistance from Traditional Customers",
    mitigation:
      "Proactive education: frame inclusivity as good for business, not political. Post a welcoming statement that respects all players while setting clear behavioral standards. Most regulars appreciate a better-managed, more profitable venue.",
  },
  {
    risk: "Negative Reviews After Policy Enforcement",
    mitigation:
      "Have a crisis response protocol: acknowledge promptly, explain your policy professionally, never escalate publicly. A business that enforces clear policies professionally almost always wins the public perception battle.",
  },
];

export function PoolHallCommunitySection() {
  return (
    <section id="community" data-ocid="poolhall-guide.community_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <Heart size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.3)",
          }}
        >
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Community Outreach & Incentives
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Build partnerships and incentive structures that turn one-time visitors
        into loyal community members.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {STRATEGIES.map((s, i) => (
          <Card
            key={s.title}
            className="hover:border-primary/35 transition-all duration-200"
            data-ocid={`poolhall-guide.community.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <h3 className="font-display font-bold text-base text-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: "oklch(0.50 0.22 290)" }}
                    >
                      →
                    </span>
                    {ex}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Analysis */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.05)",
          border: "1px solid oklch(0.62 0.1 15 / 0.18)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          Risk Analysis & Mitigation
        </h3>
        <div className="space-y-4">
          {RISK_ITEMS.map((r) => (
            <div key={r.risk}>
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.38 0.1 15)" }}
              >
                ⚠️ Risk: {r.risk}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                <strong style={{ color: "oklch(0.35 0.08 15)" }}>
                  Mitigation:
                </strong>{" "}
                {r.mitigation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
