import { MessageSquare, Share2, TrendingUp, X } from "lucide-react";

const CONTENT_TYPES = [
  {
    label: "Solves a Problem",
    ex: "'5 Ways to Organize Your Home Office' (furniture store)",
    icon: "\uD83D\uDD27",
  },
  {
    label: "Answers a Question",
    ex: "'What is the Difference Between Whole Wheat and White Bread?' (bakery)",
    icon: "\u2753",
  },
  {
    label: "Addresses a Concern",
    ex: "'Is This Supplement Safe?' (wellness business)",
    icon: "\uD83E\uDD1D",
  },
  {
    label: "Relieves a Fear",
    ex: "'First Time at the Gym? Here is What to Expect' (fitness studio)",
    icon: "\uD83D\uDCA1",
  },
  {
    label: "Makes Life Less Challenging",
    ex: "'30-Minute Meal Prep Ideas' (restaurant or meal prep service)",
    icon: "\u2728",
  },
];

const SAMPLE_WEEK = [
  {
    day: "Monday",
    type: "Non-Promo",
    content: "Share helpful article from industry expert",
    pct: "OTHERS' CONTENT",
    color:
      "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
  },
  {
    day: "Tuesday",
    type: "Non-Promo",
    content: "Post your own tip or behind-the-scenes",
    pct: "YOUR CONTENT",
    color:
      "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  },
  {
    day: "Wednesday",
    type: "Non-Promo",
    content: "Share local news or industry update",
    pct: "OTHERS' CONTENT",
    color:
      "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
  },
  {
    day: "Thursday",
    type: "Non-Promo",
    content: "Customer story or testimonial post",
    pct: "YOUR CONTENT",
    color:
      "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  },
  {
    day: "Friday",
    type: "Promotional",
    content: "Sale, special offer, or new product/service",
    pct: "PROMO",
    color:
      "bg-accent-neutral-soft dark:bg-accent-neutral-soft border-accent-neutral-border dark:border-accent-neutral-border",
  },
  {
    day: "Saturday",
    type: "Non-Promo",
    content: "Community post or local share",
    pct: "OTHERS' CONTENT",
    color:
      "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
  },
];

export function SocialMediaAmexRuleSection() {
  return (
    <section
      id="amex-rule"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.amex_rule_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <Share2 size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 4
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          The Amex Rule: 80/20 Content Framework
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          First popularized by American Express's social media team: now used by
          the world's most effective small business accounts.
        </p>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          <strong className="text-foreground">
            80% of your posts should be non-promotional.
          </strong>{" "}
          Of that 80%, share 80% from other sources and 20% from your own
          content. The remaining 20% is where you sell. This ratio keeps your
          audience engaged and trusting: so when you do promote, they listen.
        </p>

        {/* Visual ratio breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 p-5 col-span-2">
            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mb-3">
              80% Non-Promotional Content
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-emerald-100 dark:bg-emerald-900/30 p-3">
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  80%
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Others' Content
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-1">
                  Articles, posts, and resources from industry experts and peers
                </p>
              </div>
              <div className="rounded-lg bg-blue-100 dark:bg-blue-900/30 p-3">
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  20%
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                  Your Own Content
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-500 mt-1">
                  Your blog posts, tips, behind-the-scenes, and insights
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft p-5">
            <p className="text-sm font-bold text-accent-neutral mb-3">
              20% Promotional Content
            </p>
            <p className="text-2xl font-bold text-accent-neutral">20%</p>
            <p className="text-xs text-accent-neutral font-medium mt-1">
              Sales, Offers & CTAs
            </p>
            <p className="text-xs text-muted-readable mt-2">
              Actual promotions, special offers, product features, calls to
              action
            </p>
          </div>
        </div>

        {/* What NOT to do */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <X size={18} className="text-red-500" />
          What NOT to Do (The Common Mistake)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-5">
            <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-3">
              ❌ What Most Owners Do
            </p>
            <div className="space-y-2">
              {[
                "POST: 'Buy our product!'",
                "SILENCE (Nobody cares)",
                "POST: 'SALE THIS WEEKEND ONLY!'",
                "SILENCE (People are annoyed)",
                "GIVE UP",
              ].map((line) => (
                <div
                  key={line}
                  className="text-sm text-foreground/70 flex items-start gap-2"
                >
                  <span className="text-red-400 shrink-0">&bull;</span>
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 p-5">
            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-3">
              ✅ What Actually Works
            </p>
            <div className="space-y-2">
              {[
                "POST: Helpful content, no sell",
                "ENGAGEMENT (People comment, share, save)",
                "POST: More helpful content",
                "REAL RELATIONSHIP (People trust you)",
                "SALE (When they need you, they remember YOU)",
              ].map((line) => (
                <div
                  key={line}
                  className="text-sm text-foreground/70 flex items-start gap-2"
                >
                  <span className="text-emerald-500 shrink-0">&bull;</span>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Types of Value Content */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp size={18} className="text-accent-neutral" />5 Types of
          Value-Driven Content
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {CONTENT_TYPES.map((ct, i) => (
            <div
              key={ct.label}
              data-ocid={`social-media.amex.content_type.item.${i + 1}`}
              className="rounded-xl border border-border bg-card p-5 hover:border-accent-neutral-border transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{ct.icon}</span>
              <p className="text-sm font-bold text-foreground mb-2">
                {ct.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                {ct.ex}
              </p>
            </div>
          ))}
        </div>

        {/* Peanut Head Example */}
        <div className="rounded-xl border-l-4 border-accent-neutral bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral p-5 mb-10">
          <div className="flex items-start gap-3">
            <MessageSquare
              size={18}
              className="mt-0.5 shrink-0 text-accent-neutral"
            />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Real-World Example: @peanut_head (Fall Inspired Snacks)
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                The Peanut Head Instagram account posts gorgeous photos of
                seasonal food: the recipe name, a short description, and{" "}
                <strong>zero sales pitch</strong>. No "BUY OUR SNACKS", no
                discount codes. People follow for inspiration, save the posts,
                share with friends: and when they want to buy,{" "}
                <em>they remember Peanut Head.</em> Your job on social media is
                NOT to sell. Your job is to be helpful, interesting, and worth
                following.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Week */}
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Sample Week (5 Posts per Week)
        </h3>
        <div className="space-y-2">
          {SAMPLE_WEEK.map((day, i) => (
            <div
              key={day.day}
              data-ocid={`social-media.sample_week.item.${i + 1}`}
              className={`flex items-start gap-4 rounded-xl border ${day.color} p-4`}
            >
              <span className="text-sm font-bold text-foreground min-w-[80px]">
                {day.day}
              </span>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {day.pct}
                </span>
                <p className="text-sm text-foreground">{day.content}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${day.type === "Promotional" ? "bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral" : "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400"}`}
              >
                {day.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
