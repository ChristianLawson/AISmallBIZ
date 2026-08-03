import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckSquare,
  ChevronRight,
  Clock,
  MessageSquare,
  Target,
} from "lucide-react";

const WEEKS = [
  {
    week: 1,
    days: "Days 1-7",
    title: "Build Your Foundation",
    color:
      "border-accent-neutral-border dark:border-accent-neutral-border bg-accent-neutral-soft/60 dark:bg-accent-neutral-soft",
    headerColor:
      "bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral",
    tasks: [
      {
        days: "Days 1-3",
        title: "Build Your Customer Persona",
        items: [
          "Identify your top 5 best current customers",
          "Interview 2-3 of them (phone call or quick chat)",
          "Document: age, income, fears, goals, where they hang out online",
          "Give the persona a name and write it down: make it real",
        ],
      },
      {
        days: "Days 4-7",
        title: "Choose Your Platform",
        items: [
          "List where your ideal customer spends time online",
          "Pick ONE platform to start (usually Facebook for most SMBs)",
          "Set up your business page: complete ALL fields",
          "Follow 10 similar businesses to see what they post",
        ],
      },
    ],
  },
  {
    week: 2,
    days: "Days 8-14",
    title: "Find Content + Plan Your Calendar",
    color:
      "border-violet-300 dark:border-violet-700 bg-violet-50/60 dark:bg-violet-950/20",
    headerColor:
      "bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300",
    tasks: [
      {
        days: "Days 8-10",
        title: "Build Your Content Sources",
        items: [
          "Follow 5 industry experts or leaders in your space",
          "Subscribe to 3 industry blogs or newsletters",
          "Save 10 useful articles or posts you could share this month",
          "Bookmark your best sources in a browser folder",
        ],
      },
      {
        days: "Days 11-14",
        title: "Plan Your First Month of Posts",
        items: [
          "Create a simple content calendar (Google Sheets works fine)",
          "Plan 4 weeks of content: minimum 2 posts per week",
          "Mix: 80% helpful content, 20% about your business",
          "Assign dates and times: do not leave it to 'whenever'",
        ],
      },
    ],
  },
  {
    week: 3,
    days: "Days 15-21",
    title: "Start Posting",
    color:
      "border-emerald-300 dark:border-emerald-700 bg-emerald-50/60 dark:bg-emerald-950/20",
    headerColor:
      "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
    tasks: [
      {
        days: "Days 15-17",
        title: "First Posts (Non-Promotional)",
        items: [
          "Post your first piece of shared helpful content",
          "Write an engaging caption using the hook-body-CTA formula",
          "Respond to any comments within 24 hours",
          "Post again on Day 16 and Day 17",
        ],
      },
      {
        days: "Days 18-21",
        title: "Create Your Own Original Content",
        items: [
          "Pick a question your customers ask most frequently",
          "Write a helpful guide or tip (500 words is enough)",
          "Share it on your platform with an engaging caption",
          "End with a question: 'What is your experience with this?'",
        ],
      },
    ],
  },
  {
    week: 4,
    days: "Days 22-30",
    title: "Measure and Adjust",
    color:
      "border-amber-300 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-950/20",
    headerColor:
      "bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300",
    tasks: [
      {
        days: "Days 22-28",
        title: "Track What Works",
        items: [
          "Check your platform insights and analytics",
          "Note which posts got the most engagement",
          "When did they get engagement? What time? What topic?",
          "Write down the pattern: that is your formula",
        ],
      },
      {
        days: "Days 29-30",
        title: "Plan Month 2",
        items: [
          "Review your Week 1-4 data in one sitting",
          "Write down the top 3 things that worked",
          "Plan Month 2 with more of what worked",
          "Commit to continuing: this is a long game",
        ],
      },
    ],
  },
];

const BEYOND_MONTHS = [
  {
    period: "Month 2",
    color: "text-accent-neutral",
    bg: "bg-accent-neutral-soft dark:bg-accent-neutral-soft",
    border: "border-accent-neutral-border dark:border-accent-neutral-border",
    tasks: [
      "Continue same platform: do not jump yet",
      "Increase posting to 4-5 times per week",
      "Add a second platform only if the first is working",
      "Start commenting on other accounts' posts (not just your own)",
    ],
  },
  {
    period: "Month 3",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    tasks: [
      "Test paid ads with a $5/day budget for 7 days",
      "Start building an email list from social followers",
      "Analyze which content drives actual in-store or online sales",
      "Increase ad budget only on what proved to work in 7-day test",
    ],
  },
  {
    period: "Months 4-6",
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    tasks: [
      "Consider a 3rd platform only if you have genuine bandwidth",
      "Scale advertising budget on proven campaigns",
      "Host a social media event, contest, or challenge",
      "Integrate social media with your email and website",
    ],
  },
];

const TROUBLESHOOTING = [
  {
    problem: "'I have been posting a month and nobody's engaging'",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-950/20",
    border: "border-red-200 dark:border-red-800",
    taffer: "Diagnose first. Do not change your platform, change your content.",
    causes: [
      {
        cause: "Wrong platform",
        fix: "Ask 3 customers this week: 'What social media do you use?' Go where they are.",
      },
      {
        cause: "Too promotional",
        fix: "Flip to 80/20 immediately. Post 4 helpful pieces before your next promo.",
      },
      {
        cause: "Bad timing",
        fix: "Check analytics. When do people engage? Move your posting time there.",
      },
      {
        cause: "No call-to-action",
        fix: "End every post with a question or explicit invitation to respond.",
      },
      {
        cause: "Not engaging back",
        fix: "Comment on 5 other accounts' posts daily. Engagement is a two-way street.",
      },
    ],
  },
  {
    problem: "'I am posting but people are not buying'",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    taffer:
      "This is normal. Social media builds trust before it builds revenue. Patience is a tactic.",
    causes: [
      {
        cause: "Months 1-2",
        fix: "Building awareness. Growing followers. Do not expect sales yet: this is normal.",
      },
      {
        cause: "Months 2-3",
        fix: "Building trust. People are reading your content. Sales start to trickle in.",
      },
      {
        cause: "Month 3+",
        fix: "Conversions begin: repeat customers, referrals, brand recognition paying off.",
      },
    ],
  },
  {
    problem: "'I do not have time for this'",
    icon: Calendar,
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "border-violet-200 dark:border-violet-800",
    taffer:
      "Time is an excuse, not a strategy. Here is how to run social media in 60 minutes a week.",
    causes: [
      {
        cause: "Start with ONE post/week",
        fix: "One great post beats five mediocre ones. Quality over quantity: always.",
      },
      {
        cause: "Use a scheduler",
        fix: "Batch-create 4 weeks of content in one Sunday session. Let software post while you work.",
      },
      {
        cause: "Outsource execution",
        fix: "Hire someone $10-$15/hr to schedule posts you write. You own strategy, they handle logistics.",
      },
      {
        cause: "It gets easier",
        fix: "Month 1: 2 hrs/week. Month 2: 1.5 hrs/week. Month 3+: 1 hr/week. The routine compounds.",
      },
    ],
  },
];

const BOOKS = [
  {
    title: "Jab, Jab, Jab, Right Hook",
    author: "Gary Vaynerchuk",
    tagline: "How to Tell Your Story in a Noisy Social World",
    why: "The definitive guide to the 80/20 content rule. Vaynerchuk breaks down exactly what kinds of 'jabs' (helpful content) earn you the right to throw the 'right hook' (ask for the sale). Platform-by-platform examples.",
    color: "border-accent-neutral-border dark:border-accent-neutral-border",
    badge:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
  },
  {
    title: "Ultimate Guide to Facebook Advertising",
    author: "Perry Marshall",
    tagline: "How to Access 1 Billion Potential Customers in 10 Minutes",
    why: "The most practical Facebook Ads manual written for non-marketers. Covers audience targeting, ad creative, budget optimization, and the exact campaign structure that works for small local businesses.",
    color: "border-violet-200 dark:border-violet-800",
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  },
];

const AUDIT_CHECKLIST = [
  {
    category: "Profile Health",
    items: [
      "Profile picture current and clear",
      "Bio / description complete and compelling",
      "Website link / call-to-action button current",
      "Hours and contact info updated",
    ],
  },
  {
    category: "Content Quality",
    items: [
      "Following 80/20 rule (80% helpful, 20% promo)",
      "Responding to comments within 24 hours",
      "Posting at least 1× per week consistently",
      "Using relevant, niche hashtags",
    ],
  },
  {
    category: "Engagement",
    items: [
      "Commenting on 5+ other accounts per week",
      "Tracking top-performing posts",
      "Noting what is working and what is not",
      "Audience is growing month over month",
    ],
  },
  {
    category: "Next Week Plan",
    items: [
      "7 posts planned for next week",
      "Content sources already identified",
      "Best posting times confirmed in analytics",
      "Ready to respond and engage daily",
    ],
  },
];

export function SocialMedia30DayPlan() {
  return (
    <section
      id="action-plan"
      className="py-16 md:py-20 bg-background"
      data-ocid="social-media.action_plan_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <CheckSquare size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 11
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Your 30-Day Social Media Action Plan
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-6 leading-relaxed">
          Stop planning, start doing. This is your week-by-week execution
          roadmap. Taffer's rule: diagnose first, then execute with precision:
          no guessing, no randomness.
        </p>

        {/* 3x Rule mindset callout */}
        <div
          className="rounded-2xl border-2 border-accent-neutral bg-accent-neutral-soft dark:bg-accent-neutral-soft p-6 mb-10"
          data-ocid="social-media.action_plan.3x_rule"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-neutral flex items-center justify-center shrink-0 text-white font-black text-lg">
              3×
            </div>
            <div>
              <p className="font-display font-bold text-xl text-foreground mb-2">
                The 3× Rule: From NYC Small Business Services
              </p>
              <p className="text-base text-foreground/90 leading-relaxed mb-4">
                "To get the most out of this course, invest{" "}
                <strong className="text-accent-neutral">
                  3 times the time and effort after this course
                </strong>{" "}
                as you do in it."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    label: "In the course",
                    value: "1×",
                    desc: "Learn the frameworks, tools, and strategy",
                    color:
                      "bg-background dark:bg-accent-neutral-soft border-accent-neutral-border dark:border-accent-neutral-border",
                  },
                  {
                    label: "After the course",
                    value: "3×",
                    desc: "Apply, test, measure, and adjust in your real business",
                    color: "bg-accent-neutral/10 border-accent-neutral-border",
                  },
                  {
                    label: "The result",
                    value: "∞",
                    desc: "Compounding returns: each month you improve faster than the last",
                    color:
                      "bg-background dark:bg-accent-neutral-soft border-accent-neutral-border dark:border-accent-neutral-border",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border p-4 ${item.color}`}
                  >
                    <p className="text-2xl font-black text-accent-neutral mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 weekly phases */}
        <div className="space-y-6 mb-14">
          {WEEKS.map((week) => (
            <div
              key={week.week}
              data-ocid={`social-media.action_plan.week.item.${week.week}`}
              className={`rounded-2xl border-2 p-6 ${week.color}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-full ${week.headerColor}`}
                >
                  Week {week.week} · {week.days}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {week.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {week.tasks.map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="text-xs font-semibold text-accent-neutral uppercase tracking-wide mb-1">
                      {phase.days}
                    </p>
                    <p className="text-sm font-bold text-foreground mb-3">
                      {phase.title}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-0.5 w-4 h-4 rounded border-2 border-accent-neutral-border shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Beyond Month 1 */}
        <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
          <ChevronRight size={18} className="text-accent-neutral" />
          Beyond Month 1: The Long-Game Roadmap
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {BEYOND_MONTHS.map((m) => (
            <div
              key={m.period}
              className={`rounded-xl border p-5 ${m.border} ${m.bg}`}
            >
              <p className={`text-sm font-bold mb-3 ${m.color}`}>{m.period}</p>
              <ul className="space-y-2">
                {m.tasks.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <ChevronRight
                      size={13}
                      className={`mt-0.5 shrink-0 ${m.color}`}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Troubleshooting ── */}
        <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
          <AlertTriangle size={18} className="text-red-600" />
          Troubleshooting: When It is Not Working
        </h3>

        <div className="space-y-6 mb-14">
          {TROUBLESHOOTING.map((item, i) => (
            <div
              key={item.problem}
              data-ocid={`social-media.troubleshooting.item.${i + 1}`}
              className={`rounded-xl border p-6 ${item.border} ${item.bg}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <item.icon
                  size={18}
                  className={`mt-0.5 shrink-0 ${item.color}`}
                />
                <div>
                  <p className="text-base font-bold text-foreground mb-1">
                    {item.problem}
                  </p>
                  <p className="text-sm text-foreground/70 italic">
                    Taffer: "{item.taffer}"
                  </p>
                </div>
              </div>
              <div className="space-y-2 pl-7">
                {item.causes.map((c) => (
                  <div
                    key={c.cause}
                    className="flex gap-3 rounded-lg bg-card border border-border p-3"
                  >
                    <span
                      className={`text-sm font-semibold shrink-0 ${item.color}`}
                    >
                      {c.cause}:
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {c.fix}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Quick Reference Templates ── */}
        <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
          <Target size={18} className="text-accent-neutral" />
          Quick Reference Templates
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {/* Content Calendar Template */}
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-base font-bold text-foreground mb-1">
              📅 Content Calendar Template
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Copy this into Google Sheets. Fill in once per week.
            </p>
            <div className="space-y-3 text-sm">
              {[
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
              ].map((day, i) => (
                <div
                  key={day}
                  className="grid grid-cols-2 gap-2 border-b border-border/40 pb-2"
                >
                  <div>
                    <p className="text-xs font-bold text-accent-neutral">
                      {day}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {i === 4 ? "📢 PROMO (20%)" : "📚 Helpful (80%)"}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs text-muted-foreground">
                      Platform: ___________
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Time: ___________
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Topic: ___________
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Audit Checklist */}
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-base font-bold text-foreground mb-1">
              ✅ Weekly Social Media Audit
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Run this every Sunday. Takes 10 minutes.
            </p>
            <div className="space-y-4">
              {AUDIT_CHECKLIST.map((cat) => (
                <div key={cat.category}>
                  <p className="text-xs font-bold text-accent-neutral uppercase tracking-wide mb-2">
                    {cat.category}
                  </p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-0.5 w-3 h-3 rounded border border-accent-neutral-border shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Metrics Review */}
          <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
            <p className="text-base font-bold text-foreground mb-1">
              📊 Monthly Metrics Review Template
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Do this on the first Sunday of every month. Set a recurring
              calendar reminder.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {[
                { label: "Total Posts", placeholder: "Count: ___" },
                {
                  label: "Total Engagement",
                  placeholder: "Likes + Comments + Shares: ___",
                },
                {
                  label: "Top Post Topic",
                  placeholder: "What was it about: ___",
                },
                {
                  label: "Bottom Post Topic",
                  placeholder: "What did not work: ___",
                },
                {
                  label: "Best Posting Time",
                  placeholder: "When did people engage: ___",
                },
                { label: "What Worked", placeholder: "Pattern found: ___" },
                { label: "What Did not Work", placeholder: "Cut this: ___" },
                {
                  label: "Next Month Target",
                  placeholder: "Engagement goal: ___",
                },
              ].map((field) => (
                <div key={field.label} className="bg-muted/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-accent-neutral mb-1">
                    {field.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {field.placeholder}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Book Recommendations ── */}
        <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
          <BookOpen size={18} className="text-accent-neutral" />
          Recommended Reading
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {BOOKS.map((book) => (
            <div
              key={book.title}
              className={`rounded-xl border-2 bg-card p-6 hover:shadow-sm transition-all duration-200 ${book.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0 text-2xl">
                  📖
                </div>
                <div className="min-w-0">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${book.badge} mb-2 inline-block`}
                  >
                    Recommended
                  </span>
                  <p className="text-base font-bold text-foreground leading-tight mb-0.5">
                    {book.title}
                  </p>
                  <p className="text-xs text-accent-neutral font-medium mb-2">
                    by {book.author}
                  </p>
                  <p className="text-xs italic text-muted-foreground mb-3">
                    {book.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="rounded-xl border-l-4 border-accent-neutral bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral p-5">
          <div className="flex items-start gap-3">
            <MessageSquare
              size={18}
              className="mt-0.5 shrink-0 text-accent-neutral"
            />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                The Only Commitment You Need to Make
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Pick ONE thing from this guide to start this week: not ten, not
                five, <em>one</em>. Build your persona. Set up your page. Find
                your first 10 pieces of content. Whatever step you are on, take
                the next one. That is the entire system.
                <span className="font-semibold text-foreground">
                  {" "}
                  People First, Machines Second.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
