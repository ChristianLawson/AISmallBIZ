import { CheckCircle2, MessageSquare, RefreshCw, User } from "lucide-react";

const DEMO_PERSONA = {
  name: "Sarah",
  age: 38,
  family: "Married, 2 kids",
  income: "$85K household",
  job: "Healthcare worker (nursing)",
  location: "Suburb, 30 min from downtown",
  goals: [
    "Healthy family on a budget",
    "Feel less stressed",
    "Find reliable local businesses",
  ],
  fears: ["Spending too much", "Wasting time", "Disappointing her family"],
  platforms: ["Facebook", "Instagram"],
  behavior:
    "Researches online before buying. Shops 1-2x per week. Follows local community pages.",
};

const BUILD_STEPS = [
  {
    step: 1,
    title: "Look at Your Best Current Customers",
    desc: "Who are they? What do they buy most? Why did they choose you over competitors? What problem are they trying to solve?",
    fields: [
      "Top 5 best customers",
      "Most common purchase",
      "Why they chose you",
    ],
  },
  {
    step: 2,
    title: "Document Their Demographics (Hard Facts)",
    desc: "Age range, gender, income level, education, location, job type.",
    fields: ["Age range", "Income level", "Location", "Job/occupation"],
  },
  {
    step: 3,
    title: "Document Their Psychographics (Soft Facts)",
    desc: "What are their main fears? What problems keep them up at night? What do they value most?",
    fields: [
      "Biggest fear",
      "Main goals",
      "What they value",
      "What they avoid",
    ],
  },
  {
    step: 4,
    title: "Give Your Persona a Name and Story",
    desc: 'Make it real. A named persona is something you can actually use when writing content. "Would Sarah share this post?" is a powerful filter.',
    fields: [
      "First name",
      "Short backstory sentence",
      "Their biggest concern about your business type",
    ],
  },
];

export function SocialMediaPersonaSection() {
  return (
    <section
      id="customer-personas"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.persona_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center">
            <User size={20} className="text-[#6366F1]" />
          </div>
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Section 2
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Know Who You are Talking To Before You Post Anything
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Most small business owners skip this step and jump straight to
          posting. That is a mistake. You cannot create the right message
          without knowing who you are talking to. A{" "}
          <strong className="text-foreground">Customer Persona</strong> is a
          detailed profile of your ideal customer: specific, real, and based on
          actual data.
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
                "I walk into every rescue knowing the customer profile before I
                say a word to the owner. If you do not know who you are serving,
                you are serving no one. Build your persona like your business
                depends on it: because it does."
              </p>
            </div>
          </div>
        </div>

        {/* Build Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {BUILD_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-xl border border-border bg-card p-5 hover:border-[#6366F1]/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#E0E7FF] dark:bg-[#1e1b4b]/40 flex items-center justify-center text-xs font-bold text-[#6366F1]">
                  Step {s.step}
                </span>
              </div>
              <p className="text-base font-semibold text-foreground mb-2">
                {s.title}
              </p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.fields.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Example Personas heading */}
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <User size={18} className="text-[#6366F1]" />
          Real-World Persona Examples
        </h3>

        {/* Davidson Persona: from NYC SBS course */}
        <div className="rounded-2xl border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50/60 dark:bg-emerald-950/10 p-6 mb-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wide">
              NYC SBS Course Example
            </span>
            <span className="text-xs text-muted-foreground italic">
              Used in the official NYC Small Business Services digital marketing
              curriculum
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                  <User size={22} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-foreground">
                    The Davidsons
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Married couple, 2 kids &bull; $85K household income
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Job", value: "Healthcare worker (nursing)" },
                  { label: "Location", value: "Suburb, 30 min from downtown" },
                  { label: "Shops", value: "1-2 times per week" },
                  { label: "Platforms", value: "Facebook & Instagram" },
                  {
                    label: "Behavior",
                    value:
                      "Researches online before buying. Follows local community pages.",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-2 text-sm">
                    <span className="font-medium text-foreground min-w-[80px]">
                      {label}:
                    </span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Their Goals
                </p>
                <ul className="space-y-1">
                  {[
                    "Healthy family on a budget",
                    "Feel less stressed",
                    "Find reliable local businesses they can trust",
                  ].map((g) => (
                    <li
                      key={g}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Their Fears
                </p>
                <ul className="space-y-1">
                  {[
                    "Spending too much",
                    "Wasting time",
                    "Disappointing their family",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-red-400 mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-emerald-200 dark:border-emerald-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg bg-emerald-100/60 dark:bg-emerald-950/30 p-3 text-center">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                Best Platform
              </p>
              <p className="text-sm text-foreground font-semibold">
                Facebook first, then Instagram
              </p>
            </div>
            <div className="rounded-lg bg-emerald-100/60 dark:bg-emerald-950/30 p-3 text-center">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                Content They Love
              </p>
              <p className="text-sm text-foreground font-semibold">
                Budget tips, local business reviews, family wellness
              </p>
            </div>
            <div className="rounded-lg bg-emerald-100/60 dark:bg-emerald-950/30 p-3 text-center">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                Filter Question
              </p>
              <p className="text-sm text-foreground font-semibold">
                "Would this help a busy parent on a budget?"
              </p>
            </div>
          </div>
        </div>

        {/* Example Persona: Sarah */}
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <User size={18} className="text-[#6366F1]" />
          Example Persona: Meet Sarah
        </h3>
        <div className="rounded-2xl border border-[#6366F1]/30 bg-[#EEF2FF]/50 dark:bg-[#1e1b4b]/10 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E0E7FF] dark:bg-[#1e1b4b]/40 flex items-center justify-center">
                  <User size={22} className="text-[#6366F1]" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-foreground">
                    {DEMO_PERSONA.name}, {DEMO_PERSONA.age}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {DEMO_PERSONA.family} &bull; {DEMO_PERSONA.income}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2 text-sm">
                  <span className="font-medium text-foreground min-w-[80px]">
                    Job:
                  </span>
                  <span className="text-muted-foreground">
                    {DEMO_PERSONA.job}
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-medium text-foreground min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-muted-foreground">
                    {DEMO_PERSONA.location}
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-medium text-foreground min-w-[80px]">
                    Platforms:
                  </span>
                  <span className="text-muted-foreground">
                    {DEMO_PERSONA.platforms.join(", ")}
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-medium text-foreground min-w-[80px]">
                    Behavior:
                  </span>
                  <span className="text-muted-foreground">
                    {DEMO_PERSONA.behavior}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Her Goals
                </p>
                <ul className="space-y-1">
                  {DEMO_PERSONA.goals.map((g) => (
                    <li
                      key={g}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Her Fears
                </p>
                <ul className="space-y-1">
                  {DEMO_PERSONA.fears.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-red-400 mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#6366F1]/20">
            <p className="text-sm text-muted-foreground italic">
              "Before writing any post, ask:{" "}
              <strong className="text-foreground">
                Would Sarah find this helpful?
              </strong>{" "}
              If yes, post it. If it is just a sales pitch, rewrite it."
            </p>
          </div>
        </div>

        {/* Validation Loop */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <RefreshCw size={18} className="text-[#6366F1]" />
          Persona Validation Loop
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Create Persona",
            "Ask 3-5 Real Customers If It Matches",
            "Does It Match? Refine If Not",
            "Use Persona to Filter Every Post",
          ].map((step, i) => (
            <div
              key={step}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="w-7 h-7 rounded-full bg-[#E0E7FF] dark:bg-[#1e1b4b]/40 flex items-center justify-center text-xs font-bold text-[#6366F1] mx-auto mb-2">
                {i + 1}
              </div>
              <p className="text-xs text-foreground font-medium leading-snug">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
