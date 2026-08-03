import { DollarSign, MessageSquare, RefreshCw, Target } from "lucide-react";

const ORGANIC_VS_PAID = [
  {
    label: "Organic (Free)",
    items: [
      "Posts to your current followers",
      "Anyone can view your page",
      "Slower growth but sustainable",
      "No cost (just your time)",
      "Algorithm decides who sees it",
    ],
    color:
      "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    label: "Paid Ads",
    items: [
      "Reaches people who do not follow you",
      "You control who sees it",
      "Faster growth, requires budget",
      "$5-$20/day is a good test budget",
      "You set targeting and audience",
    ],
    color:
      "border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft",
  },
];

const OBJECTIVES = [
  {
    goal: "Get people to your website",
    objective: "Traffic",
    note: "Easiest to track. Best for beginners.",
  },
  {
    goal: "Make a sale",
    objective: "Conversions",
    note: "Requires Facebook Pixel on your website.",
  },
  {
    goal: "Collect email addresses",
    objective: "Leads",
    note: "People fill out a form directly in Facebook.",
  },
  {
    goal: "Build brand awareness",
    objective: "Reach",
    note: "Get your name in front of as many people as possible.",
  },
];

const AD_STEPS = [
  {
    step: 1,
    title: "Choose Your Objective",
    desc: "Ask: what do I want people to DO? For your first ad, always choose 'Traffic' - it is the easiest to measure and optimize.",
  },
  {
    step: 2,
    title: "Select Your Audience",
    desc: "Location (your city, 5-mile radius), Age (your persona's age range +/- 10 years), Interests (related to what you sell). Target audience size: 50K-200K.",
  },
  {
    step: 3,
    title: "Create Your Ad",
    desc: "Headline (25 chars max): benefit or curiosity. Primary text (125 chars): why they should care. High-quality photo of your product/service. CTA button: 'Learn More', 'Book Now', or 'Shop Now'.",
  },
  {
    step: 4,
    title: "Set Budget and Timeline",
    desc: "Start with $5-$10 per day. Run for at least 5 days - do not stop after Day 1. Facebook needs time to 'learn' where to show your ad.",
  },
  {
    step: 5,
    title: "Wait, Then Monitor",
    desc: "First 24-48 hours: Facebook is learning. After 3-5 days: check performance. After 7 days: calculate ROI. Less than $1-3 per click is a good benchmark.",
  },
];

export function SocialMediaAdvertisingSection() {
  return (
    <section
      id="advertising"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.advertising_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <Target size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 8
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Paid Advertising: When and How to Use It
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Organic content builds your foundation. Paid advertising amplifies it.
          Use paid ads to reach beyond your current followers when you have
          something specific to promote and a small daily budget.
        </p>

        {/* Organic vs Paid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {ORGANIC_VS_PAID.map((type) => (
            <div
              key={type.label}
              className={`rounded-xl border ${type.color} p-5`}
            >
              <p className="text-base font-bold text-foreground mb-4">
                {type.label}
              </p>
              <ul className="space-y-2">
                {type.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-accent-neutral mt-0.5 shrink-0">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Prerequisite callout */}
        <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 mb-8">
          <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">
            Before You Run Paid Ads:
          </p>
          <ul className="space-y-1.5">
            {[
              "You have a complete Facebook Business Page (not personal profile)",
              "You have been posting organically for at least 2-3 months",
              "You have a clear goal (traffic, leads, or sales)",
              "You have $5-20/day budget available for testing",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300"
              >
                <span className="shrink-0">&rarr;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Objectives table */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Target size={18} className="text-accent-neutral" />
          Step 1: Choose the Right Objective
        </h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/40">
                {["If you want to...", "Choose This Objective", "Notes"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 py-3"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {OBJECTIVES.map((row, i) => (
                <tr
                  key={row.objective}
                  className={i % 2 === 0 ? "" : "bg-muted/20"}
                >
                  <td className="px-4 py-3 text-sm text-foreground">
                    {row.goal}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral font-semibold">
                      {row.objective}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5-Step Ad Creation */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <DollarSign size={18} className="text-accent-neutral" />
          Your First Facebook Ad: 5 Steps
        </h3>
        <div className="space-y-3 mb-10">
          {AD_STEPS.map((s, i) => (
            <div
              key={s.step}
              data-ocid={`social-media.ad_steps.item.${i + 1}`}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-sm font-bold text-accent-neutral shrink-0">
                {s.step}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  {s.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optimization loop */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <RefreshCw size={18} className="text-accent-neutral" />
          Ad Optimization Feedback Loop
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Create Ad + Set Budget ($5-10/day)",
            "Run for 7 Days (Do not change it)",
            "Did it work? Keep + scale OR diagnose + adjust",
            "Retest for 7 More Days, Then Repeat",
          ].map((step, i) => (
            <div
              key={step}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="w-7 h-7 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-xs font-bold text-accent-neutral mx-auto mb-2">
                {i + 1}
              </div>
              <p className="text-xs text-foreground leading-snug">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border-l-4 border-accent-neutral bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral p-5">
          <div className="flex items-start gap-3">
            <MessageSquare
              size={18}
              className="mt-0.5 shrink-0 text-accent-neutral"
            />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Reid Holmes - Appreciated Branding in Ads:
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "Your paid ad should feel like a gift, not a grab. Lead with the
                customer's benefit, not your product. The ad that says 'Tired of
                back pain? Free 15-min consultation' outperforms 'Buy our
                chiropractic services' every single time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
