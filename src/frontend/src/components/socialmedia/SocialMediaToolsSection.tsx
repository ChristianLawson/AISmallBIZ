import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare,
  Settings,
  Table,
  TrendingUp,
} from "lucide-react";

const TOOLS = [
  {
    name: "Buffer",
    tag: "Best for Beginners",
    tagColor:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    free: "3 accounts · 10 posts/month",
    paid: "$5-$35/month",
    platforms: "Facebook, Instagram, Twitter, LinkedIn",
    verdict:
      "Extremely simple. Shows best times to post. Perfect starting point.",
    link: "buffer.com",
  },
  {
    name: "Hootsuite",
    tag: "Best for Multi-Platform",
    tagColor: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
    free: "3 accounts · 30 posts/month",
    paid: "$49+/month",
    platforms: "All major platforms",
    verdict:
      "See all platforms in one dashboard. Monitor mentions. Track competitor activity.",
    link: "hootsuite.com",
  },
  {
    name: "Sprout Social",
    tag: "Best Analytics",
    tagColor:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
    free: "30-day trial",
    paid: "$99+/month",
    platforms: "All major platforms",
    verdict:
      "Beautiful analytics dashboards. Best for agencies or growing teams. Overkill for most solo SMBs.",
    link: "sproutsocial.com",
  },
  {
    name: "Caffeine.ai (your platform)",
    tag: "Already Included",
    tagColor:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
    free: "Included with AISmallBiz",
    paid: "See pricing page",
    platforms: "Integrated with your site",
    verdict:
      "Schedule posts, manage your content calendar, track what is working: without leaving your business platform.",
    link: "caffeine.ai",
  },
];

const SCHEDULER_STEPS = [
  {
    step: 1,
    title: "Plan your month on paper first",
    desc: "Open a Google Sheet or notepad. Write down every post for the next 4 weeks: topic, platform, date, time. Do not touch the scheduler yet.",
    icon: "📋",
  },
  {
    step: 2,
    title: "Set up your scheduler account",
    desc: "Create a free Buffer or Hootsuite account. Connect your Facebook and Instagram pages. This takes about 10 minutes.",
    icon: "⚙️",
  },
  {
    step: 3,
    title: "Enter all posts for the week at once",
    desc: "Batch all 7 posts in one sitting. Set different times for each one: do not post everything at 9am.",
    icon: "✍️",
  },
  {
    step: 4,
    title: "Let it run automatically",
    desc: "The platform posts at the scheduled times: even while you are serving customers, cooking, or sleeping. Nothing to do.",
    icon: "🚀",
  },
  {
    step: 5,
    title: "Check engagement the next morning",
    desc: "Spend 5 minutes every morning responding to comments on yesterday's posts. Even automated content needs a human to follow up.",
    icon: "💬",
  },
  {
    step: 6,
    title: "Review and repeat weekly",
    desc: "Every Sunday, look at last week's metrics. Which posts performed best? Use that to plan next week. This is your feedback loop.",
    icon: "🔄",
  },
];

const TRACKER_COLUMNS = [
  { col: "DATE", example: "Jun 3", note: "When you posted" },
  { col: "PLATFORM", example: "Facebook", note: "Which platform" },
  {
    col: "POST TYPE",
    example: "Blog link",
    note: "Helpful/Promo/Behind-scenes",
  },
  { col: "LIKES", example: "25", note: "Thumbs up count" },
  { col: "COMMENTS", example: "4", note: "Responses received" },
  { col: "SHARES", example: "2", note: "How many people shared it" },
  { col: "TOTAL ENG.", example: "31", note: "Sum of above three" },
  {
    col: "NOTES",
    example: "Customer testimonial",
    note: "What made it work or fail",
  },
];

export function SocialMediaToolsSection() {
  return (
    <section
      id="tools"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.tools_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <Settings size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 9
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Tools to Make Social Media Manageable
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          You do not need ten tools. You need one scheduler, one tracker, and a
          30-minute weekly routine. Everything else is noise.
        </p>

        {/* Taffer callout */}
        <div className="rounded-xl border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-red-600" />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Jon Taffer: Measure Everything Like a Bar Rescue Audit
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "When I walk into a bar, the first thing I look at is not the
                drinks menu: it is the numbers. Revenue per seat. Cost per pour.
                Social media is no different. If you are not tracking what is
                working, you are flying blind. Every post is data. Every
                engagement metric is a signal. Treat your social media like a
                daily operations report."
              </p>
            </div>
          </div>
        </div>

        {/* Reid Holmes callout */}
        <div className="rounded-xl border-l-4 border-accent-neutral bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral p-5 mb-10">
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
                "Tools should serve relationships, not replace them. Scheduling
                software is not permission to go dark: it is permission to be
                consistent. Your customers do not care what app posted it. They
                care that you showed up."
              </p>
            </div>
          </div>
        </div>

        {/* ── Free Tools Callout Box ── */}
        <div
          data-ocid="social-media.free_tools_callout"
          className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6 mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Clock size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                Free Tools: Auto-Post Your Content
              </h3>
              <p className="text-sm text-muted-foreground">
                Write once, post everywhere, on a schedule: even while you
                sleep.
              </p>
            </div>
          </div>

          <p className="text-[15px] text-muted-readable leading-relaxed mb-4">
            Auto-publishing means you write your social media posts ahead of
            time, pick the days and times they should go live, and the tool
            posts them for you automatically. You do not need to stop cooking,
            serving customers, or driving to your next job just to post online.
          </p>

          <div className="space-y-4 mb-5">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-[15px]">
                  Buffer: Free Plan
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  3 social channels (e.g., Facebook, Instagram, Twitter). 10
                  scheduled posts per channel. No credit card needed. Perfect
                  for beginners.
                </p>
                <a
                  href="https://buffer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-media.free_tools.buffer_link"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4 mt-1"
                >
                  Visit Buffer <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950/40 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} className="text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-[15px]">
                  Later: Free Tier
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  1 social set (e.g., Instagram + Facebook + Twitter). 10 posts
                  per social profile per month. Visual drag-and-drop calendar.
                  Great for image-heavy businesses.
                </p>
                <a
                  href="https://later.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-media.free_tools.later_link"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4 mt-1"
                >
                  Visit Later <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} className="text-violet-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-[15px]">
                  Hootsuite: Free Tier
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  2 social accounts. 5 scheduled posts at a time. Unified inbox
                  to see comments and messages in one place. Good for keeping an
                  eye on what people are saying about you.
                </p>
                <a
                  href="https://hootsuite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-media.free_tools.hootsuite_link"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4 mt-1"
                >
                  Visit Hootsuite <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card border border-border p-4">
            <p className="text-sm font-semibold text-foreground mb-1">
              Your Action Step This Week
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set aside 30 minutes on Sunday to write and schedule your posts
              for the week. Pick one free tool above, sign up with your email,
              connect one social account, and schedule three posts. That is it.
              You are now ahead of 90% of small businesses.
            </p>
          </div>
        </div>

        {/* ── Scheduling Tools Comparison ── */}
        <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
          <Clock size={18} className="text-accent-neutral" />
          Scheduling Tools Comparison
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              data-ocid={`social-media.tools.tool.item.${i + 1}`}
              className="rounded-xl border border-border bg-card p-5 hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <p className="text-base font-bold text-foreground">
                  {tool.name}
                </p>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${tool.tagColor}`}
                >
                  {tool.tag}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={13}
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Free:</strong>{" "}
                    {tool.free}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp
                    size={13}
                    className="text-accent-neutral shrink-0"
                  />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Paid:</strong>{" "}
                    {tool.paid}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings
                    size={13}
                    className="text-muted-foreground shrink-0"
                  />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Platforms:</strong>{" "}
                    {tool.platforms}
                  </span>
                </div>
                <p className="border-t border-border/50 pt-2 text-muted-foreground leading-relaxed">
                  {tool.verdict}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── How to Use a Scheduler ── */}
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
          <Clock size={18} className="text-accent-neutral" />
          How to Use a Scheduler: 6-Step Process
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          From zero to automated in under an hour. Follow these steps in order.
        </p>

        <div className="space-y-3 mb-12">
          {SCHEDULER_STEPS.map((s) => (
            <div
              key={s.step}
              data-ocid={`social-media.tools.scheduler.item.${s.step}`}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-lg shrink-0">
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground mb-1">
                  <span className="text-accent-neutral mr-1">
                    Step {s.step}:
                  </span>
                  {s.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Google Sheets Tracker ── */}
        <div className="rounded-xl border border-border bg-card p-6 mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Table size={17} className="text-accent-neutral" />
            Your Free Social Media Tracker (Google Sheets)
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            No fancy tools required. Copy this column structure into a Google
            Sheet. Update it once a week. Patterns emerge in 30 days.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {TRACKER_COLUMNS.map((c) => (
                    <th
                      key={c.col}
                      className="text-left text-xs font-bold text-accent-neutral uppercase tracking-wide pb-3 pr-4 whitespace-nowrap"
                    >
                      {c.col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  {TRACKER_COLUMNS.map((c) => (
                    <td
                      key={c.col}
                      className="py-2.5 pr-4 text-muted-foreground whitespace-nowrap"
                    >
                      {c.example}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2.5 pr-4 text-muted-foreground">Jun 4</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Instagram
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Before/After
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">62</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">11</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">7</td>
                  <td className="py-2.5 pr-4 font-semibold text-foreground">
                    80
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Visual, relatable
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 text-muted-foreground">Jun 5</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Facebook
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Promo post
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">8</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">0</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">0</td>
                  <td className="py-2.5 pr-4 font-semibold text-red-500">8</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">
                    Too salesy: skip
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {TRACKER_COLUMNS.map((c) => (
              <div key={c.col} className="text-xs">
                <span className="font-semibold text-foreground">{c.col}:</span>{" "}
                <span className="text-muted-foreground">{c.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Taffer Rule ── */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
            <BarChart3 size={16} className="text-accent-neutral" />
            The Taffer Rule: If You are Not Tracking It, You Cannot Fix It
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Track weekly",
                desc: "Spend 10 minutes every Sunday pulling your engagement numbers. Pretend it is your weekly POS report.",
                color: "text-accent-neutral",
                bg: "bg-accent-neutral-soft dark:bg-accent-neutral-soft",
              },
              {
                label: "Find the pattern",
                desc: "After 4 weeks, your top 3 posts will have something in common. That is your formula. Repeat it.",
                color: "text-emerald-600",
                bg: "bg-emerald-50 dark:bg-emerald-950/30",
              },
              {
                label: "Cut what fails",
                desc: "If a content type consistently underperforms, kill it. Do not sentimentalize bad tactics. That is how businesses die.",
                color: "text-red-600",
                bg: "bg-red-50 dark:bg-red-950/20",
              },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-4 ${item.bg}`}>
                <p className={`text-sm font-bold mb-1 ${item.color}`}>
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
