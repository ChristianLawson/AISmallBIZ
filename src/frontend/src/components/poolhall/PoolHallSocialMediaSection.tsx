import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Facebook,
  Hash,
  Instagram,
  Lightbulb,
  Share2,
  TrendingUp,
  Users,
} from "lucide-react";

const SAMPLE_WEEK = [
  {
    day: "Mon",
    platform: "Facebook",
    type: "Share",
    content:
      "Share local entertainment news or billiards association update: community pulse post that positions your hall as the neighborhood's pool authority.",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    day: "Tue",
    platform: "Instagram",
    type: "Behind-the-Scenes",
    content:
      "Behind-the-scenes table setup: felt brushing, ball racking, lighting adjustment. Slow, satisfying process shots. No voiceover needed.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Wed",
    platform: "Facebook",
    type: "Share",
    content:
      "Share from Billiard Congress of America or APA League: tournament results, tips from pros, or industry news. Build credibility by association.",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    day: "Thu",
    platform: "Instagram",
    type: "Customer Spotlight",
    content:
      "Customer spotlight: action shot during a match with permission. Tag them, celebrate their game. 'Meet our Thursday regular, Maria. She is been playing here since Day 1.'",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Fri",
    platform: "Facebook",
    type: "PROMO",
    content:
      "Weekend tournament announcement: times, buy-in, prize pool. Clear CTA: 'Sign up at the bar or DM us to reserve your spot.' Create urgency: limited tables.",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    isPromo: true,
  },
  {
    day: "Sat",
    platform: "Instagram",
    type: "Action Shot",
    content:
      "Tournament or evening action shot: energy, crowd, competitive moments. Warm lighting. Capture the vibe women said was missing from pool halls: safe, fun, social.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
];

const HASHTAGS = [
  "#PoolHall",
  "#Billiards",
  "#8Ball",
  "#LocalSportsBar",
  "#PoolTournament",
  "#LadiesNight",
  "#WomenWhoPlay",
  "#NYC8Ball",
];

const TAFFER_DIAGNOSES = [
  {
    symptom: "Your Facebook page posts twice a month",
    diagnosis:
      "You have gone dark. The algorithm stops showing you to followers within days of inactivity. A dead page signals a dead business.",
    fix: "Minimum 3 posts per week. Batch-film on one day. Schedule the rest.",
  },
  {
    symptom: "Every post is a promotion",
    diagnosis:
      "You are shouting 'BUY BUY BUY' into the void. People do not follow businesses to be sold to: they follow for value and connection.",
    fix: "Apply the 80/20 rule: 4 community/content posts for every 1 promotional post.",
  },
  {
    symptom: "No photos of real customers or real games",
    diagnosis:
      "You are showing people an empty pool hall. The most persuasive content is a packed room with excited players: proof the experience is real.",
    fix: "Ask regulars for permission on game nights. 30 seconds of filming equals 2 posts.",
  },
];

const PLATFORMS = [
  {
    name: "Facebook",
    role: "PRIMARY",
    why: "Pool halls serve a 25-50 age demographic. Facebook reaches all of them: especially for event promotion, community groups, and women's nights. Event RSVPs and tournament sign-ups convert better on Facebook than any other platform.",
    best: [
      "Event announcements",
      "Community posts",
      "Game night RSVPs",
      "Share industry content",
    ],
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    frequency: "4-5x/week",
  },
  {
    name: "Instagram",
    role: "SECONDARY",
    why: "Instagram's visual-first format is perfect for action shots, ambiance, and the aesthetic storytelling that attracts women aged 25-40 who are evaluating whether your venue feels safe and welcoming before they walk in.",
    best: [
      "Behind-the-scenes",
      "Tournament highlights",
      "Ambiance shots",
      "Customer spotlights",
    ],
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    frequency: "3-4x/week",
  },
];

export function PoolHallSocialMediaSection() {
  return (
    <section
      id="social-media"
      className="space-y-14"
      data-ocid="poolhall-guide.social_media_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
          >
            <Share2 size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Social Media Strategy
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Pool Hall Social Media: Turn a Dead Page Into a Full Room
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Most pool halls either have no social presence or post only when they
          want something. Reid Holmes' principle: every post is a{" "}
          <em>personal invitation</em>: not a broadcast. Build a feed that makes
          someone feel like they already belong here before they walk in.
        </p>
      </div>

      {/* Taffer Diagnosis */}
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: "oklch(0.98 0.01 25 / 1)",
          borderColor: "oklch(0.75 0.12 25 / 0.3)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <AlertCircle size={18} style={{ color: "oklch(0.55 0.18 25)" }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Taffer's Diagnosis: Why Your Pool Hall's Facebook Page Feels Dead
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Jon Taffer does not walk past problems: he names them. Three common
          social media failures he'd call out immediately:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {TAFFER_DIAGNOSES.map((d, i) => (
            <div
              key={d.symptom}
              className="rounded-xl p-5 bg-card border border-border space-y-3"
              data-ocid={`poolhall-guide.social_media.diagnosis.${i + 1}`}
            >
              <div className="flex items-start gap-2">
                <AlertCircle
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.55 0.18 25)" }}
                />
                <p className="font-semibold text-foreground text-[15px]">
                  &ldquo;{d.symptom}&rdquo;
                </p>
              </div>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                <span className="font-semibold text-foreground">
                  Diagnosis:
                </span>{" "}
                {d.diagnosis}
              </p>
              <div
                className="rounded-lg p-3 text-[13px]"
                style={{ background: "oklch(0.55 0.18 290 / 0.08)" }}
              >
                <span
                  className="font-semibold"
                  style={{ color: "oklch(0.45 0.22 290)" }}
                >
                  Fix:{" "}
                </span>
                <span className="text-muted-foreground">{d.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Selection */}
      <div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Your Platform Playbook
        </h3>
        <p className="text-muted-foreground mb-6">
          You do not need to be everywhere. You need to be effective where your
          customers actually are.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}
              data-ocid={`poolhall-guide.social_media.platform.${p.name.toLowerCase()}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <p.icon size={24} style={{ color: p.color }} />
                  <span className="font-display text-xl font-bold text-foreground">
                    {p.name}
                  </span>
                </div>
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{
                    background:
                      p.role === "PRIMARY"
                        ? "oklch(0.50 0.22 290)"
                        : "oklch(0.65 0.12 290)",
                  }}
                >
                  {p.role}
                </span>
              </div>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
                {p.why}
              </p>
              <div className="mb-3">
                <p className="text-[13px] font-semibold text-foreground mb-2">
                  Best for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.best.map((b) => (
                    <span
                      key={b}
                      className="text-[12px] px-2 py-1 rounded-md bg-card border border-border text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Frequency:
                </span>{" "}
                {p.frequency}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Week */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <CalendarDays size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Sample Week: Plug-and-Play Content Calendar
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          80% helpful/community content, 20% promotional. This ratio is the
          difference between a page people follow and one they mute.
        </p>
        <div className="space-y-3">
          {SAMPLE_WEEK.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-xl border p-4 flex gap-4 items-start ${item.bg} ${item.border}`}
              data-ocid={`poolhall-guide.social_media.week.${i + 1}`}
            >
              <div className="w-12 shrink-0 text-center">
                <p className="text-[13px] font-bold text-foreground">
                  {item.day}
                </p>
                <item.icon
                  size={16}
                  className="mx-auto mt-1"
                  style={{ color: item.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[13px] font-semibold text-foreground">
                    {item.platform}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      item.isPromo
                        ? "bg-amber-100 text-amber-700 border border-amber-300"
                        : "bg-card border border-border text-muted-foreground"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reid Holmes Framing */}
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.06) 0%, oklch(0.55 0.14 220 / 0.04) 100%)",
          borderColor: "oklch(0.55 0.18 290 / 0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Users size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Reid Holmes: Every Post Is a Personal Invitation
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Write to ONE person",
              body: "Not 'Hey everyone': but 'Hey, if you have never tried pool before, this is your sign.' One specific person reading feels seen. That is the beginning of loyalty.",
            },
            {
              title: "Document, do not advertise",
              body: "A photo of a regular in the middle of a great shot says more than any ad. Real moments build real trust. Your regulars are your best marketing team: you just need to ask permission to feature them.",
            },
            {
              title: "Reply within 2 hours",
              body: "Every comment and DM is a customer who raised their hand. A quick reply closes the loop and signals a real person runs this page. Algorithms reward it. Customers remember it.",
            },
          ].map((tip, i) => (
            <div
              key={tip.title}
              className="rounded-xl p-4 bg-card border border-border space-y-2"
              data-ocid={`poolhall-guide.social_media.reid_tip.${i + 1}`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={14}
                  style={{ color: "oklch(0.50 0.22 290)" }}
                />
                <p className="font-semibold text-foreground text-[14px]">
                  {tip.title}
                </p>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Persona + Hashtags */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users size={16} style={{ color: "oklch(0.50 0.22 290)" }} />
            <h3 className="font-display text-lg font-bold text-foreground">
              Your Audience Persona
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "Age", value: "25-40" },
              { label: "Identity", value: "Local entertainment seeker" },
              {
                label: "Primary platform",
                value: "Facebook for events, Instagram for discovery",
              },
              {
                label: "Biggest concern",
                value: "Is this place safe and welcoming for women?",
              },
              {
                label: "Content they share",
                value: "Fun nights out, social events, local finds",
              },
              {
                label: "Best posting time",
                value: "Thu-Fri 5-8pm, Sat 11am-1pm",
              },
            ].map((row) => (
              <div key={row.label} className="flex gap-3 text-[14px]">
                <span className="font-semibold text-foreground w-36 shrink-0">
                  {row.label}
                </span>
                <span className="text-muted-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Hash size={16} style={{ color: "oklch(0.50 0.22 290)" }} />
            <h3 className="font-display text-lg font-bold text-foreground">
              Hashtag Strategy
            </h3>
          </div>
          <p className="text-muted-foreground text-[13px] mb-4">
            Use 3-5 per post. Mix broad + niche + local for maximum reach
            without getting lost in high-volume tags.
          </p>
          <div className="flex flex-wrap gap-2">
            {HASHTAGS.map((tag) => (
              <span
                key={tag}
                className="text-[13px] px-3 py-1.5 rounded-full border font-medium"
                style={{
                  background: "oklch(0.55 0.18 290 / 0.08)",
                  borderColor: "oklch(0.55 0.18 290 / 0.25)",
                  color: "oklch(0.45 0.22 290)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[12px] text-muted-foreground mt-4">
            Add your city: <span className="font-medium">#NYCPoolHall</span> or{" "}
            <span className="font-medium">#BrooklynBilliards</span> to capture
            local search traffic.
          </p>
        </div>
      </div>

      {/* Growth Metrics */}
      <div
        className="rounded-2xl border p-6 md:p-8"
        style={{
          background: "oklch(0.98 0.01 290 / 1)",
          borderColor: "oklch(0.75 0.12 290 / 0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Realistic Growth Milestones
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Month 1",
              metric: "50-100 new followers",
              action: "Post consistently, engage every comment",
            },
            {
              label: "Month 3",
              metric: "First viral event post",
              action:
                "Tournament or Ladies' Night content reaches 1K+ non-followers",
            },
            {
              label: "Month 6",
              metric: "Social drives 20% of walk-ins",
              action:
                "Ask new customers 'How did you hear about us?': track it",
            },
          ].map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl bg-card border border-border p-4 space-y-2"
              data-ocid={`poolhall-guide.social_media.milestone.${i + 1}`}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.50 0.22 290)" }}
              >
                {m.label}
              </span>
              <p className="font-semibold text-foreground text-[15px]">
                {m.metric}
              </p>
              <p className="text-[13px] text-muted-foreground">{m.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tip */}
      <div
        className="rounded-xl border-l-4 p-5"
        style={{
          borderLeftColor: "oklch(0.50 0.22 290)",
          background: "oklch(0.55 0.18 290 / 0.06)",
        }}
      >
        <div className="flex items-start gap-3">
          <Lightbulb
            size={18}
            className="mt-0.5 shrink-0"
            style={{ color: "oklch(0.50 0.22 290)" }}
          />
          <div>
            <p className="font-semibold text-foreground mb-1">
              The One Metric That Matters Most
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Track <strong>saves</strong> on Instagram and{" "}
              <strong>shares</strong> on Facebook: not likes. Saves and shares
              mean someone found your content valuable enough to return to or
              show a friend. That is the signal that precedes a real customer.
              When your saves-per-post average above 10, start a $15/day paid ad
              campaign boosting your best-saved content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
