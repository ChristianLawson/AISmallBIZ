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
      "Share a coffee trend article from a credible food publication (Eater, Food52, Bon Appétit). Add your take: 'This is why we started doing ___.' Positions you as a neighborhood authority.",
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
      "Pastry-in-progress Reel: the most visually satisfying 15 seconds you can film: laminating dough, piping frosting, glazing a tart. No narration. Just the ASMR beauty of the process.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Wed",
    platform: "Facebook",
    type: "Customer Repost",
    content:
      "Repost a customer's photo (with permission/tag). Caption: 'We love when [Name] visits on Wednesdays ☕️: this is the kind of morning we are here for.' Makes regulars feel celebrated.",
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
      "Share a local food blogger's post or a neighborhood account's content. Tag them. This builds local food community relationships: and they often repost back, extending your reach to their audience.",
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
      "Weekend special or new item announcement: with a photo that makes it impossible not to want it. Limited quantity: 'Only 24 available Saturday morning.' Scarcity drives Saturday foot traffic.",
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
      "Baker at work: 5am flour dusting, stacking trays, pulling fresh loaves. The 'before the world wakes up' aesthetic resonates deeply with café audiences. Honest and beautiful.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
];

const HASHTAGS = [
  "#BakeryLife",
  "#FreshBaked",
  "#CafeVibes",
  "#LocalBakery",
  "#CoffeeLover",
  "#BakeryPhotography",
  "#MorningBun",
  "#NeighborhoodCafe",
];

const TAFFER_DIAGNOSES = [
  {
    symptom: "12 posts from 3 years ago",
    diagnosis:
      "Taffer would say: 'You failed the basics before you opened.' An inactive Instagram in 2026 tells potential customers your business might not even be open. First impressions happen online: before anyone walks through the door.",
    fix: "Post 3x this week: anything fresh. Today's croissants. The display case. Your coffee. Start now, refine later.",
  },
  {
    symptom: "Beautiful product photos, zero personality",
    diagnosis:
      "Neighborhood bakeries compete on feeling, not product. A chain can match your croissant photo. They cannot match your story, your baker's name, or the 5am ritual that makes it real.",
    fix: "Add one human element per week: who made it, when, why you chose this recipe. One sentence turns a product photo into a story.",
  },
  {
    symptom: "No community engagement",
    diagnosis:
      "You are broadcasting, not conversing. Social media rewards reciprocity: every comment you reply to, every local account you engage with, increases your organic reach.",
    fix: "Spend 15 minutes daily: reply to all comments, like and comment on 5 neighborhood accounts, repost 1 customer photo per week.",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    role: "PRIMARY",
    why: "Food photography is the #1 content driver on Instagram. A single croissant photo with warm light and a worn marble counter has more marketing power than a $500 ad. Bakeries have a natural Instagram advantage: use it every single day.",
    best: [
      "Food photography",
      "Process Reels",
      "New item reveals",
      "Morning ambiance shots",
    ],
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    frequency: "5-7x/week",
  },
  {
    name: "Facebook",
    role: "SECONDARY",
    why: "Facebook's event and community features are perfect for bakery regulars who skew 30-60. Daily specials, monthly events, and baking classes perform best here. The neighborhood community feel of Facebook matches the neighborhood feel of your bakery.",
    best: [
      "Daily specials",
      "Community events",
      "Baking class announcements",
      "Customer photos",
    ],
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    frequency: "3-4x/week",
  },
];

export function BakerySocialMediaSection() {
  return (
    <section
      id="social-media"
      className="space-y-14"
      data-ocid="bakery-guide.social_media_section"
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
          Bakery Social Media: Food Content That Makes People Feel Something
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Reid Holmes' principle: food content that makes people{" "}
          <em>feel something</em> creates loyalty. Not just hunger: belonging,
          nostalgia, warmth. Your Instagram should feel like a letter from a
          neighbor, not a menu from a restaurant chain.
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
            Taffer's Diagnosis: If You Opened a Bakery With 12 Posts From 3
            Years Ago, You are Failing the Basics
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Three common bakery social media failures: each one costing you real
          customers every week:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {TAFFER_DIAGNOSES.map((d, i) => (
            <div
              key={d.symptom}
              className="rounded-xl p-5 bg-card border border-border space-y-3"
              data-ocid={`bakery-guide.social_media.diagnosis.${i + 1}`}
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
          Platform Priorities for Bakeries &amp; Cafés
        </h3>
        <p className="text-muted-foreground mb-6">
          Instagram leads on visuals and discovery. Facebook anchors community
          and repeat regulars. Here is the full case for each:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}
              data-ocid={`bakery-guide.social_media.platform.${p.name.toLowerCase()}`}
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
          80% community/content posts, 20% promotional. Bakery audiences follow
          because they love food and neighborhood community: not because they
          want a daily sale announcement.
        </p>
        <div className="space-y-3">
          {SAMPLE_WEEK.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-xl border p-4 flex gap-4 items-start ${item.bg} ${item.border}`}
              data-ocid={`bakery-guide.social_media.week.${i + 1}`}
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
            Reid Holmes: Food Content That Creates Loyalty
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Sell the feeling, not the product",
              body: "'Fresh croissants' is product language. 'The smell that hits you when you walk in at 8am on a Saturday' is feeling language. One makes you hungry. The other makes you want to be there. Post for the feeling.",
            },
            {
              title: "Your regulars are your social proof",
              body: "A photo of a regular sitting in your window seat with their usual order is more powerful than any promotional graphic. Regulars represent what your best customers look like: and attract more of the same.",
            },
            {
              title: "The origin story compounds",
              body: "Post your bakery's origin story in pieces: why you started, who trained you, what you changed in the recipe, why you chose this neighborhood. Over 6 months, these posts build an emotional archive no competitor can replicate.",
            },
          ].map((tip, i) => (
            <div
              key={tip.title}
              className="rounded-xl p-4 bg-card border border-border space-y-2"
              data-ocid={`bakery-guide.social_media.reid_tip.${i + 1}`}
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
              { label: "Age", value: "25-50" },
              {
                label: "Identity",
                value: "Local regulars, treats seekers, coffee lovers",
              },
              {
                label: "Primary platform",
                value: "Instagram for discovery, Facebook for loyalty",
              },
              {
                label: "Core desire",
                value: "A neighborhood spot that feels like it knows them",
              },
              {
                label: "Content they share",
                value: "Aesthetic food photos, best-in-neighborhood moments",
              },
              {
                label: "Best posting time",
                value: "7-9am daily, Fri-Sat 10am-12pm",
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
            Bakeries thrive on visual hashtags. Mix broad food tags with
            hyper-local neighborhood tags for the best discovery rate.
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
            <span className="font-medium">#WilliamsburgBakery</span> or{" "}
            <span className="font-medium">#ParkSlopeCafe</span> for local foot
            traffic.
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
              metric: "200-400 new followers",
              action:
                "One process Reel per week drives 10x more reach than static photos",
            },
            {
              label: "Month 3",
              metric: "First viral food post",
              action:
                "Limited Saturday item sells out before 10am, creating FOMO content",
            },
            {
              label: "Month 6",
              metric: "Social drives 30% of new regulars",
              action:
                "Ask new customers 'Did you find us on Instagram?': build in-store social proof",
            },
          ].map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl bg-card border border-border p-4 space-y-2"
              data-ocid={`bakery-guide.social_media.milestone.${i + 1}`}
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
              The Bakery Photo Formula That Always Works
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Natural side light + worn wood or marble surface + one pastry +
              steam from coffee = your highest-performing photo every time. No
              ring lights. No artificial backgrounds. The most expensive
              photography setup a bakery needs is an east-facing window and a $0
              cutting board. Film before 9am when the light is best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
