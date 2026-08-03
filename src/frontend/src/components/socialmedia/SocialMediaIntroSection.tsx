import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const LOYALTY_LOOP = [
  {
    stage: "AWARENESS",
    desc: "I found out you exist",
    color:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
  },
  {
    stage: "CONSIDERATION",
    desc: "I am thinking about buying",
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
  },
  {
    stage: "EVALUATION",
    desc: "I am comparing you to others",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
  },
  {
    stage: "PURCHASE",
    desc: "I bought from you",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  {
    stage: "ADVOCATE",
    desc: "I am telling others",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
  },
  {
    stage: "BOND",
    desc: "I trust your brand",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  },
  {
    stage: "ENJOY",
    desc: "I keep coming back",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
  },
  {
    stage: "ENGAGE",
    desc: "I interact with your content",
    color: "bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",
  },
];

const MARKETING_STAGES = [
  {
    icon: Users,
    label: "AWARENESS",
    sub: "Tell people you exist",
    desc: "Social posts, local hashtags, Google Business mentions",
  },
  {
    icon: CheckCircle2,
    label: "CONSIDERATION",
    sub: "Help them decide",
    desc: "Customer reviews, behind-the-scenes, staff spotlights",
  },
  {
    icon: TrendingUp,
    label: "EVALUATION",
    sub: "Beat the competition",
    desc: "Comparisons, testimonials, unique value posts",
  },
  {
    icon: Zap,
    label: "ADVOCACY",
    sub: "Turn buyers into fans",
    desc: "Tag-a-friend contests, loyalty incentives, shareable moments",
  },
];

export function SocialMediaIntroSection() {
  return (
    <section
      id="introduction"
      className="py-16 md:py-20 bg-background"
      data-ocid="social-media.intro_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <TrendingUp size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 1
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Why Social Media Actually Works for Small Business
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
          Social media marketing is not about posting random updates and hoping
          people buy. It is about{" "}
          <strong className="text-foreground">engagement</strong>: creating
          meaningful conversations that guide strangers to become loyal
          customers who send their friends.
        </p>

        {/* Taffer Diagnosis */}
        <div className="rounded-xl border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700 p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-red-600" />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Jon Taffer's Diagnosis:
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "Most small business owners are on social media, but they are
                doing it wrong. They post when they feel like it, they sell
                instead of serve, and they never measure what works. That is not
                a marketing strategy: that is noise. I have rescued dozens of
                businesses by giving them one rule:{" "}
                <em>stop broadcasting, start connecting.</em>"
              </p>
            </div>
          </div>
        </div>

        {/* Reid Holmes Branding */}
        <div className="rounded-xl border-l-4 border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral-border p-5 mb-10">
          <div className="flex items-start gap-3">
            <MessageSquare
              size={18}
              className="mt-0.5 shrink-0 text-accent-neutral"
            />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Reid Holmes: Appreciated Branding:
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "Every post is a chance to make your customer feel <em>seen</em>
                . Appreciated Branding means your social media does not shout
                'buy from me': it whispers 'we understand you.' The brands that
                master this create communities, not just customers."
              </p>
            </div>
          </div>
        </div>

        {/* Loyalty Loop Visual */}
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-xs font-bold text-accent-neutral">
            ↻
          </span>
          The Loyalty Loop: From Stranger to Brand Advocate
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Your social media strategy should address ALL stages: not just try to
          make the sale.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {LOYALTY_LOOP.map((item, i) => (
            <div key={item.stage} className="relative">
              <div className="rounded-xl p-4 text-center border border-transparent hover:border-accent-neutral-border transition-all duration-200 bg-card">
                <div
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 text-xs font-bold ${item.color}`}
                >
                  {i + 1}
                </div>
                <p className="text-xs font-bold text-foreground mb-1">
                  {item.stage}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {item.desc}
                </p>
              </div>
              {i < LOYALTY_LOOP.length - 1 && (
                <div className="hidden sm:flex absolute -right-1.5 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={12} className="text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4 Stages of Social Marketing */}
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Map Your Social Media to the Loop
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {MARKETING_STAGES.map((s, i) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-5 hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
                  <s.icon size={16} className="text-accent-neutral" />
                </div>
                <span className="text-xs font-bold text-accent-neutral uppercase tracking-wide">
                  {i + 1}
                </span>
              </div>
              <p className="text-sm font-bold text-foreground mb-1">
                {s.label}
              </p>
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {s.sub}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 p-5">
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
            The Real Goal of Social Media
          </p>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">
            When someone is ready to buy what you sell, you want to be the first
            business they remember. Social media is how you{" "}
            <strong>stay top-of-mind</strong>: not by advertising constantly,
            but by consistently being helpful, authentic, and worth following.
          </p>
        </div>
      </div>
    </section>
  );
}
