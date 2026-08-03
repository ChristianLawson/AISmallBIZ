import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Linkedin,
  MessageSquare,
  TrendingUp,
  Twitter,
} from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    content:
      "LinkedIn: share industry article with 2-3 sentences of your own commentary",
    detail:
      "Do not just reshare. Add your expert POV: 'This trend is impacting X because Y: here is what we are seeing with our clients.' That commentary is what positions you as a thought leader, not the share itself.",
    format: "LinkedIn Post",
    color: "oklch(0.40 0.15 250)",
    bg: "oklch(0.40 0.15 250 / 0.08)",
  },
  {
    day: "Tuesday",
    content: "LinkedIn: your own process insight or client win tip",
    detail:
      "What did you learn from a recent project that others in your industry would benefit from? A 200-word LinkedIn post answering one specific client question builds your search authority and attracts decision-makers.",
    format: "LinkedIn Article or Post",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
  },
  {
    day: "Wednesday",
    content: "Twitter/X: share industry news with brief take",
    detail:
      "Real-time commentary on breaking industry news is Twitter's core value for B2B professionals. 2-3 sentences max. Link to the article. Add your read. This is where you build awareness outside your existing LinkedIn network.",
    format: "Tweet / Thread",
    color: "oklch(0.35 0.08 200)",
    bg: "oklch(0.62 0.1 200 / 0.08)",
  },
  {
    day: "Thursday",
    content: "LinkedIn: anonymized client success story",
    detail:
      "'A marketing agency client came to us with X problem. We did Y. Result: Z.' Never name the client without permission, but the specificity of the result makes this your highest-converting content type. Prospects see themselves in the story.",
    format: "LinkedIn Post",
    color: "oklch(0.28 0.12 150)",
    bg: "oklch(0.28 0.12 150 / 0.07)",
  },
  {
    day: "Friday",
    content: "PROMO: LinkedIn + Facebook service spotlight",
    detail:
      "One clear offer or service focus per week. Not 'we offer everything': pick one specific service, explain the problem it solves, and include a clear CTA: 'Book a 20-minute consultation.' One call-to-action, one landing page, one week.",
    format: "LinkedIn + Facebook",
    color: "oklch(0.48 0.18 300)",
    bg: "oklch(0.48 0.18 300 / 0.08)",
  },
  {
    day: "Saturday",
    content: "Behind-the-scenes your work process",
    detail:
      "Show, do not tell. A screenshot of your project management system, a photo of your workspace, a 30-second video of how you prepare a deliverable. 'How the sausage gets made' content builds trust with B2B decision-makers who want to see rigor.",
    format: "LinkedIn or Instagram Story",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
  },
];

const PLATFORMS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    priority: "Primary",
    color: "oklch(0.40 0.15 250)",
    bg: "oklch(0.40 0.15 250 / 0.09)",
    description:
      "Your single most important platform. B2B decision-makers (ages 30-55) evaluate service providers on LinkedIn before responding to outreach. Your profile is your credibility evidence. Your posts are your ongoing sales conversation.",
    tactics: [
      "Thought leadership articles",
      "Client success posts",
      "Industry commentary",
      "Referral partner connections",
    ],
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    priority: "Secondary",
    color: "oklch(0.35 0.08 200)",
    bg: "oklch(0.35 0.08 200 / 0.08)",
    description:
      "Real-time industry engagement and visibility beyond your existing network. Especially powerful for consultants, coaches, and digital agencies where staying current is part of your value proposition.",
    tactics: [
      "Industry news commentary",
      "Quick tips threads",
      "Replies to industry voices",
      "Trending topic takes",
    ],
  },
  {
    name: "Facebook",
    icon: MessageSquare,
    priority: "Tertiary",
    color: "oklch(0.45 0.12 240)",
    bg: "oklch(0.45 0.12 240 / 0.08)",
    description:
      "Community groups and local business pages where SMB clients spend time. Less discovery, more trust-building. A Facebook Business Page with consistent activity is part of your legitimacy signal.",
    tactics: [
      "Local business group participation",
      "Event announcements",
      "Client testimonial posts",
      "Service page maintenance",
    ],
  },
];

const HASHTAGS = [
  "#OnlineBusiness",
  "#ConsultingServices",
  "#SmallBizTips",
  "#FreelanceLife",
  "#DigitalServices",
  "#B2BMarketing",
  "#ThoughtLeadership",
  "#SmallBusiness",
];

const TAFFER_DIAGNOSES = [
  {
    problem:
      "Your LinkedIn profile says 'I provide services' not 'I solve problems'",
    fix: "Taffer rewrites the menu when it does not communicate value. Rewrite your LinkedIn headline to name the exact pain point you eliminate, not your job title.",
    severity: "Critical",
  },
  {
    problem: "You have not posted in 3+ months",
    fix: "A dead LinkedIn profile tells prospects you are not active: which makes them wonder if your business is, too. One post per week minimum. Content consistency is operational proof.",
    severity: "High",
  },
  {
    problem: "You share posts but never add your own commentary",
    fix: "Sharing without speaking is lurking. The commentary is the proof of expertise. Taffer never just observes: he diagnoses. Your posts should do the same.",
    severity: "Medium",
  },
];

export function OnlineServicesSocialMediaSection() {
  return (
    <section
      id="social-media"
      data-ocid="online-services-guide.social_media_section"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.40 0.15 250 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.40 0.15 250)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.40 0.15 250 / 0.1)",
            color: "oklch(0.40 0.15 250)",
            border: "1px solid oklch(0.40 0.15 250 / 0.25)",
          }}
        >
          Social Media Strategy
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media for Online Service Businesses
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        LinkedIn is your primary platform: not optional. B2B decision-makers
        check your profile before they respond to your email. Your social
        presence is your pre-sales team running 24/7.
      </p>

      {/* Taffer Diagnosis Banner */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "oklch(0.28 0.12 30 / 0.06)",
          border: "1px solid oklch(0.28 0.12 30 / 0.2)",
        }}
        data-ocid="online-services-guide.social_taffer_banner"
      >
        <div className="flex items-start gap-3 mb-4">
          <Briefcase
            size={22}
            style={{ color: "oklch(0.55 0.18 30)" }}
            className="shrink-0 mt-0.5"
          />
          <div>
            <p className="font-display text-base font-bold text-foreground italic">
              &ldquo;LinkedIn without a strategy is worse than no LinkedIn at
              all &mdash; it just tells potential clients you don&rsquo;t know
              what you&rsquo;re doing online.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &mdash; Jon Taffer framework applied to B2B services
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Taffer diagnoses before he prescribes. For online service businesses,
          the first diagnosis is always the same: is your LinkedIn profile
          generating trust or destroying it? Every post you make either builds
          or erodes your professional credibility. There is no neutral.
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
              data-ocid={`online-services-guide.social_platform.${p.name.toLowerCase().replace(" / ", "-").replace(" ", "-")}`}
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
          background: "oklch(0.40 0.15 250 / 0.06)",
          border: "1px solid oklch(0.40 0.15 250 / 0.18)",
        }}
        data-ocid="online-services-guide.social_reid_insight"
      >
        <p className="font-display text-base font-semibold italic text-foreground mb-2">
          &ldquo;Every post should make potential clients feel you understand
          their problem &mdash; before you ever mention your solution.&rdquo;
        </p>
        <p className="text-xs text-muted-foreground">
          &mdash; Reid Holmes, Appreciated Branding. Empathy before expertise.
          When a decision-maker reads your LinkedIn post and thinks &lsquo;this
          person gets what I&rsquo;m dealing with,&rsquo; your sales
          conversation has already begun.
        </p>
      </div>

      {/* Sample week calendar */}
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
            data-ocid={`online-services-guide.social_calendar.${day.day.toLowerCase()}`}
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

      {/* Hashtags */}
      <div className="mb-8">
        <h3 className="font-display text-lg font-bold text-foreground mb-3">
          Core Hashtags for Online Services
        </h3>
        <div className="flex flex-wrap gap-2">
          {HASHTAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-lg"
              style={{
                background: "oklch(0.40 0.15 250 / 0.08)",
                color: "oklch(0.40 0.15 250)",
                border: "1px solid oklch(0.40 0.15 250 / 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Taffer Profile Audit */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Taffer&rsquo;s LinkedIn Diagnosis: 3 Most Common Failures
      </h3>
      <div className="space-y-3 mb-10">
        {TAFFER_DIAGNOSES.map((d, i) => (
          <Card key={d.problem}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                  style={{
                    background:
                      d.severity === "Critical"
                        ? "oklch(0.55 0.18 30 / 0.15)"
                        : d.severity === "High"
                          ? "oklch(0.55 0.18 60 / 0.15)"
                          : "oklch(0.40 0.15 250 / 0.12)",
                    color:
                      d.severity === "Critical"
                        ? "oklch(0.45 0.18 30)"
                        : d.severity === "High"
                          ? "oklch(0.45 0.18 60)"
                          : "oklch(0.40 0.15 250)",
                  }}
                  data-ocid={`online-services-guide.social_diagnosis.item.${i + 1}`}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {d.problem}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {d.fix}
                  </p>
                  <Badge
                    className="mt-2 text-[10px]"
                    style={{
                      background:
                        d.severity === "Critical"
                          ? "oklch(0.55 0.18 30 / 0.12)"
                          : d.severity === "High"
                            ? "oklch(0.55 0.18 60 / 0.12)"
                            : "oklch(0.40 0.15 250 / 0.1)",
                      color:
                        d.severity === "Critical"
                          ? "oklch(0.45 0.18 30)"
                          : d.severity === "High"
                            ? "oklch(0.45 0.18 60)"
                            : "oklch(0.40 0.15 250)",
                    }}
                  >
                    {d.severity}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success story */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "oklch(0.28 0.12 150 / 0.15)" }}
            >
              <TrendingUp size={16} style={{ color: "oklch(0.28 0.12 150)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-foreground">
                  Online Services Social Win
                </span>
                <Badge
                  style={{
                    background: "oklch(0.28 0.12 150 / 0.12)",
                    color: "oklch(0.28 0.12 150)",
                  }}
                >
                  Case Study
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A NYC-based HR consulting firm posted one&nbsp;
                <strong>Taffer-style diagnosis post</strong> per week on
                LinkedIn for 90 days &mdash; each post naming a specific HR
                mistake and its real-world cost. Result: &nbsp;
                <strong>3 inbound enterprise inquiries</strong> worth $85K
                combined, zero ad spend. The posts positioned the founder as
                someone who already understood the prospect&rsquo;s problem
                before a single sales call.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
