import { BarChart2, MessageSquare, Star, TrendingUp } from "lucide-react";

const KPIS = [
  {
    metric: "Likes",
    icon: Star,
    meaning: "People found it interesting or valuable",
    action: "Create more content like your top-liked posts",
    color:
      "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    iconColor: "text-amber-600",
  },
  {
    metric: "Comments",
    icon: MessageSquare,
    meaning: "People engaged enough to respond: higher indicator than likes",
    action: "Respond to EVERY comment within 24 hours",
    color:
      "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600",
  },
  {
    metric: "Shares",
    icon: TrendingUp,
    meaning:
      "The gold standard. People thought it was valuable enough to share with their network",
    action: "Note what gets shared and create more of exactly that",
    color:
      "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600",
  },
];

const HOW_TO_CHECK = [
  {
    platform: "Facebook",
    steps: [
      "Go to your page",
      "Click 'Insights' in top navigation",
      "Scroll to 'Posts'",
      "See likes, comments, shares, clicks for each post",
    ],
  },
  {
    platform: "Instagram",
    steps: [
      "Go to your profile",
      "Tap 'Insights' (bar chart icon, top right)",
      "Tap 'Total Followers' to see top posts",
      "Each post shows likes, comments, saves, shares",
    ],
  },
  {
    platform: "Twitter / X",
    steps: [
      "Go to your profile",
      "Click 'Analytics' (top right)",
      "See engagement metrics for each tweet",
    ],
  },
];

const MONTHLY_STEPS = [
  {
    step: 1,
    title: "Pull Your Numbers",
    desc: "Open Insights/Analytics. Look at last 30 days. Record: total posts, total engagement, top 3 posts, bottom 3 posts.",
  },
  {
    step: 2,
    title: "Identify the Pattern",
    desc: "What do your top 3 posts share? Same topic? Same posting time? Same type of image? Same caption length?",
  },
  {
    step: 3,
    title: "Identify What Did not Work",
    desc: "Why did the bottom 3 underperform? Wrong topic? Wrong time? Too salesy? Unclear call to action?",
  },
  {
    step: 4,
    title: "Write Down Your Insights",
    desc: "Example: 'Customer testimonials with photos get 3x engagement.' / 'Posts at 6pm perform better than 10am.'",
  },
  {
    step: 5,
    title: "Plan Next Month",
    desc: "Create MORE of what works. Create LESS (or NONE) of what does not. Test ONE new thing per month.",
  },
  {
    step: 6,
    title: "Set New Targets",
    desc: "Example: 'This month we got 500 total engagement. Next month target: 600.' Always 10-15% higher.",
  },
];

const VELOCITY = [
  {
    month: "Month 1",
    posts: "10 posts",
    engagement: "500 engagement",
    avg: "50 per post",
    note: "Learning what works",
  },
  {
    month: "Month 2",
    posts: "10 posts",
    engagement: "750 engagement",
    avg: "75 per post",
    note: "Optimized with insights",
  },
  {
    month: "Month 3",
    posts: "10 posts",
    engagement: "1,000+ engagement",
    avg: "100+ per post",
    note: "Compounding improvement",
  },
];

export function SocialMediaMeasurementSection() {
  return (
    <section
      id="measurement"
      className="py-16 md:py-20 bg-background"
      data-ocid="social-media.measurement_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center">
            <BarChart2 size={20} className="text-[#6366F1]" />
          </div>
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Section 7
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Measure What Works, Stop Guessing
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Many owners post for months without ever looking at data. That is like
          cooking without tasting.{" "}
          <strong className="text-foreground">
            Measuring tells you which content your customers actually care about
          </strong>{" "}
          : and what is a waste of your time.
        </p>

        {/* Taffer */}
        <div className="rounded-xl border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700 p-5 mb-8">
          <div className="flex items-start gap-3">
            <MessageSquare size={18} className="mt-0.5 shrink-0 text-red-600" />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Taffer's Rule:
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "You cannot manage what you do not measure. I walk into every
                bar rescue with the numbers before I walk through the door. If
                you do not know your engagement metrics, you are flying blind.
                Thirty minutes a month reviewing your data is worth more than 30
                extra posts."
              </p>
            </div>
          </div>
        </div>

        {/* 3 KPIs */}
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Only 3 Numbers That Matter
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {KPIS.map((kpi, i) => (
            <div
              key={kpi.metric}
              data-ocid={`social-media.kpi.item.${i + 1}`}
              className={`rounded-xl border ${kpi.color} p-5`}
            >
              <div className="flex items-center gap-2 mb-3">
                <kpi.icon size={20} className={kpi.iconColor} />
                <p className="text-lg font-bold text-foreground">
                  {kpi.metric}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {kpi.meaning}
              </p>
              <p className="text-xs font-semibold text-foreground border-t border-border/40 pt-3">
                → {kpi.action}
              </p>
            </div>
          ))}
        </div>

        {/* How to Check */}
        <h3 className="text-lg font-semibold text-foreground mb-4">
          How to Check Your Metrics on Each Platform
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {HOW_TO_CHECK.map((p) => (
            <div
              key={p.platform}
              className="rounded-xl border border-border bg-card p-4"
            >
              <p className="text-sm font-bold text-foreground mb-3">
                {p.platform}
              </p>
              <ol className="space-y-1.5">
                {p.steps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-[#6366F1] font-bold shrink-0">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Monthly Review Process */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Monthly Review Process (Set a Calendar Reminder)
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Do this on the first Sunday of every month. It takes 30 minutes and
          compounds over time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {MONTHLY_STEPS.map((s, i) => (
            <div
              key={s.step}
              data-ocid={`social-media.monthly_review.item.${i + 1}`}
              className="rounded-xl border border-border bg-card p-4 hover:border-[#6366F1]/30 transition-all duration-200"
            >
              <span className="w-7 h-7 rounded-full bg-[#E0E7FF] dark:bg-[#1e1b4b]/40 flex items-center justify-center text-xs font-bold text-[#6366F1] mb-2">
                {s.step}
              </span>
              <p className="text-sm font-bold text-foreground mb-1">
                {s.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Velocity Table */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp size={18} className="text-[#6366F1]" />
          Engagement Velocity: What Growth Looks Like
        </h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/40">
                {[
                  "Period",
                  "Posts",
                  "Total Engagement",
                  "Average per Post",
                  "What is Happening",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 py-3"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VELOCITY.map((row, i) => (
                <tr
                  key={row.month}
                  className={i % 2 === 0 ? "" : "bg-muted/20"}
                >
                  <td className="px-4 py-3 text-sm font-bold text-[#6366F1]">
                    {row.month}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {row.posts}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {row.engagement}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {row.avg}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Key insight: You do not need more posts. You need{" "}
          <strong className="text-foreground">better posts</strong>. Optimize
          first, increase frequency later.
        </p>
      </div>
    </section>
  );
}
