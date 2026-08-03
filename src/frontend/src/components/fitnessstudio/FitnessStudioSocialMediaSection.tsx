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
    platform: "Instagram",
    type: "Share",
    content:
      "Share a fitness article from a credible source (ACE, NASM, or a respected trainer). Add your take in 1-2 sentences to make it feel personal, not just a repost.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Tue",
    platform: "Instagram",
    type: "Reel",
    content:
      "Class-in-action Reel: 15-30 seconds of your most energetic class moment. No intro, no explanation. Pure atmosphere. Show the joy, not just the workout.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Wed",
    platform: "Facebook",
    type: "Member Spotlight",
    content:
      "Member transformation spotlight: with permission. Focus on how they feel and what changed for them, not just the physical. 'Maria joined 6 months ago. Here is what shifted.'",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    day: "Thu",
    platform: "Instagram",
    type: "Share",
    content:
      "Share a nutrition tip or wellness article from a credible source. Add a simple action item: 'One thing you can try today: ___.' Make it feel personal, not clinical.",
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
      "Weekend class special: announce a featured class, a free trial slot, or a discounted first-month offer. Clear CTA: 'DM us to reserve your spot. Limited to 8 new members.'",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    isPromo: true,
  },
  {
    day: "Sat",
    platform: "Instagram",
    type: "Behind-the-Scenes",
    content:
      "Behind-the-scenes team moment: instructor prep, equipment setup, or a candid between-class moment. Humanizes the brand. Women join communities, not just gyms.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
];

const HASHTAGS = [
  "#FitnessStudio",
  "#WorkoutMotivation",
  "#TransformationTuesday",
  "#NYCFitness",
  "#StrengthTraining",
  "#WomenWhoLift",
  "#BoutiqueGym",
  "#FitnessCommunity",
];

const TAFFER_DIAGNOSES = [
  {
    symptom: "Your Instagram is all stock photos",
    diagnosis:
      "If Taffer walked in and saw your feed, he'd say: 'This is not your gym: this is a catalog.' Stock photos signal that you have nothing real to show. That kills credibility instantly.",
    fix: "Delete the stock photos. Film 5 minutes of one class today. That is 3 real posts worth of content.",
  },
  {
    symptom: "You post transformations without stories",
    diagnosis:
      "Before/after photos with no context feel like advertising. They do not build trust: they just remind people they feel inadequate. That is the opposite of what attracts women.",
    fix: "Lead with the emotional journey: 'She came in terrified. 90 days later she ran her first 5K.' The feeling converts, not the measurement.",
  },
  {
    symptom: "No one from your team appears on camera",
    diagnosis:
      "People join people, not brands. If your instructors are invisible on social media, you are asking strangers to trust a faceless operation. Women especially need to see who is leading the class.",
    fix: "Feature one instructor per week. 30 seconds introducing themselves and their specialty. Builds trust before the first class.",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    role: "PRIMARY",
    why: "Fitness is the most visual category on Instagram. Transformations, class energy, and workout demos outperform all other content types. Women aged 25-40 are the most active fitness content consumers on Instagram: this is where they discover new studios.",
    best: [
      "Transformation stories",
      "Workout demos",
      "Class energy Reels",
      "Instructor spotlights",
    ],
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    frequency: "5-6x/week",
  },
  {
    name: "Facebook",
    role: "SECONDARY",
    why: "Facebook's group and event features make it ideal for community-building: fitness challenges, member milestones, and class schedules. Slightly older demographic (30-50) aligns well with boutique studio membership.",
    best: [
      "Challenges & events",
      "Before/after features",
      "Community building",
      "Class schedules",
    ],
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    frequency: "3-4x/week",
  },
];

export function FitnessStudioSocialMediaSection() {
  return (
    <section
      id="social-media"
      className="space-y-14"
      data-ocid="fitness-studio-guide.social_media_section"
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
          Fitness Studio Social Media: Build a Community, Not Just a Following
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Reid Holmes' core insight: members post because they{" "}
          <em>feel part of something</em>: not because you asked them to. Your
          job is to build a feed so full of genuine community energy that
          sharing it becomes natural. That is the content flywheel.
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
            Taffer's Diagnosis: If Your Gym's Instagram Is All Stock Photos, You
            have Already Lost
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Three social media failures Taffer would diagnose immediately: and the
          fast fix for each:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {TAFFER_DIAGNOSES.map((d, i) => (
            <div
              key={d.symptom}
              className="rounded-xl p-5 bg-card border border-border space-y-3"
              data-ocid={`fitness-studio-guide.social_media.diagnosis.${i + 1}`}
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
          Platform Priorities for Fitness Studios
        </h3>
        <p className="text-muted-foreground mb-6">
          Instagram leads, Facebook supports. Here is why: and exactly what to
          post on each.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}
              data-ocid={`fitness-studio-guide.social_media.platform.${p.name.toLowerCase()}`}
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
          80% community/value content, 20% promotional. Be the fitness voice
          your audience trusts: so when you do promote, they are already
          listening.
        </p>
        <div className="space-y-3">
          {SAMPLE_WEEK.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-xl border p-4 flex gap-4 items-start ${item.bg} ${item.border}`}
              data-ocid={`fitness-studio-guide.social_media.week.${i + 1}`}
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
            Reid Holmes: Members Post Because They Feel Part of Something
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Celebrate milestones publicly",
              body: "First class completed, first 5K run, first pull-up: post it with their permission. Nothing creates belonging faster than a studio that publicly celebrates your wins. That post gets shared to their entire network.",
            },
            {
              title: "Turn instructors into personalities",
              body: "Your instructors are your brand ambassadors. One 30-second intro video per instructor: their style, their specialty, their why. Women choosing a studio want to know who they will be in a room with.",
            },
            {
              title: "Make the private group feel elite",
              body: "A members-only Facebook group creates belonging and reduces churn. Post challenge updates, milestone call-outs, and early class access exclusively there. Exclusivity equals loyalty.",
            },
          ].map((tip, i) => (
            <div
              key={tip.title}
              className="rounded-xl p-4 bg-card border border-border space-y-2"
              data-ocid={`fitness-studio-guide.social_media.reid_tip.${i + 1}`}
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
              { label: "Age", value: "25-45" },
              { label: "Identity", value: "Health-motivated, goal-driven" },
              {
                label: "Primary platform",
                value: "Instagram for discovery, Facebook for community",
              },
              {
                label: "Core desire",
                value: "Feel capable, supported, and not judged",
              },
              {
                label: "Content they share",
                value: "Milestones, transformation journeys, community wins",
              },
              {
                label: "Best posting time",
                value: "Mon 6am, Wed 12pm, Fri 5pm",
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
            3-5 per post. Mix community hashtags with your specific class type
            for targeted reach.
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
            Add your neighborhood:{" "}
            <span className="font-medium">#BrooklynFitness</span> or{" "}
            <span className="font-medium">#UpperWestSideGym</span> for local
            discovery.
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
              metric: "100-200 new followers",
              action:
                "Reels outperform static posts 3:1: post one class Reel per week minimum",
            },
            {
              label: "Month 3",
              metric: "First transformation post goes wide",
              action:
                "Member milestone content shared by their network reaches 2K+ impressions",
            },
            {
              label: "Month 6",
              metric: "Social drives 25% of new trials",
              action:
                "Track with a simple intake question: 'How did you find us?' at first class",
            },
          ].map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl bg-card border border-border p-4 space-y-2"
              data-ocid={`fitness-studio-guide.social_media.milestone.${i + 1}`}
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
              The Reels Formula That Converts for Fitness Studios
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              The highest-converting Reel structure: (1) 3 seconds of your most
              energetic class moment: no text, no intro. (2) Cut to a calm shot
              of the same member after class: smiling, sweaty, proud. (3) One
              line of text overlay: &ldquo;This is what 30 minutes looks
              like.&rdquo; No voiceover needed. This format drives saves,
              shares, and DMs from women who want to try your studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
