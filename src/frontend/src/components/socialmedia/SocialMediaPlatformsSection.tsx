import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Twitter,
} from "lucide-react";

const PLATFORMS = [
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    audiences: ["18-29: 88%", "30-49: 84%", "50-64: 72%", "65+: 62%"],
    gender: "Better for women (83% vs 75% men)",
    content: "Long-form posts, videos, detailed content",
    bestFor: "Local businesses, restaurants, services, retail",
    skip: "B2B-only businesses where customers are not local",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-600",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-pink-200 dark:border-pink-800",
    audiences: ["18-29: 59%", "30-49: 33%", "50-64: 18%", "65+: 8%"],
    gender: "Slightly more women (38% men vs 28% women)",
    content: "Beautiful images, short videos, visual storytelling",
    bestFor: "Fashion, beauty, food, lifestyle, design, wellness",
    skip: "Service businesses with nothing visual to show",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    color: "text-sky-600",
    bg: "bg-sky-50 dark:bg-sky-950/30",
    border: "border-sky-200 dark:border-sky-800",
    audiences: ["18-29: 36%", "30-49: 23%", "50-64: 21%", "65+: 10%"],
    gender: "Equal gender split (24% men / 24% women)",
    content: "Short text, quick updates, conversations, news",
    bestFor: "News commentary, thought leadership, quick updates",
    skip: "Most local brick-and-mortar businesses. Too fast-moving.",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-700",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-300 dark:border-blue-700",
    audiences: ["18-29: 34%", "30-49: 33%", "50-64: 24%", "65+: 20%"],
    gender: "Better for men (31% men vs 27% women)",
    content: "Professional articles, business news, insights",
    bestFor: "B2B services, consultants, professional firms",
    skip: "Consumer-facing local businesses (salon, deli, pool hall)",
  },
  {
    name: "Snapchat",
    icon: MessageSquare,
    color: "text-yellow-600",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-200 dark:border-yellow-800",
    audiences: ["18-29: 56%", "30-49: 20%", "50-64: 9%", "65+: 3%"],
    gender: "Slightly more women",
    content: "Disappearing videos, stories, quick moments",
    bestFor: "Gen Z targeting, entertainment, fashion, nightlife",
    skip: "Businesses serving customers 35+. Very low ROI for most SMBs.",
  },
];

const DECISION_QUESTIONS = [
  {
    q: "Where do my best customers spend time online?",
    hint: "If unsure, ask 3 customers this week.",
  },
  {
    q: "What type of content can I create consistently?",
    hint: "Visual (images/videos)? → Instagram or Facebook. Written? → Twitter or Facebook. Professional? → LinkedIn.",
  },
  {
    q: "How much time do I have per week?",
    hint: "1-2 hrs/week → ONE platform. 3-5 hrs → TWO. 5+ hrs → THREE. Do not pick more than you can maintain.",
  },
  {
    q: "Where are my direct competitors active?",
    hint: "If they are all on Instagram, your customers are probably there too.",
  },
];

export function SocialMediaPlatformsSection() {
  return (
    <section
      id="platform-selection"
      className="py-16 md:py-20 bg-background"
      data-ocid="social-media.platforms_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center">
            <Facebook size={20} className="text-[#6366F1]" />
          </div>
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Section 3
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Choosing the Right Platform (Not All of Them)
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Critical rule:{" "}
          <strong className="text-foreground">
            You should NOT be on every platform.
          </strong>{" "}
          Your customers use specific platforms, and you need to be where{" "}
          <em>they</em> are: not where you are most comfortable.
        </p>

        {/* Taffer */}
        <div className="rounded-xl border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700 p-5 mb-8">
          <div className="flex items-start gap-3">
            <MessageSquare size={18} className="mt-0.5 shrink-0 text-red-600" />
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                Taffer's Diagnosis:
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "Every rescue I have done where the owner says 'we are on
                everything': they are good at nothing. Pick your platform like
                you pick your best employee: one specialist beats three
                generalists every time."
              </p>
            </div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              data-ocid={`social-media.platform.item.${i + 1}`}
              className={`rounded-xl border ${p.border} ${p.bg} p-5 hover:shadow-sm transition-all duration-200`}
            >
              <div className="flex items-center gap-2 mb-3">
                <p.icon size={20} className={p.color} />
                <p className={`text-base font-bold ${p.color}`}>{p.name}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Demographics
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {p.audiences.map((a) => (
                      <span
                        key={a}
                        className="text-xs bg-background/60 dark:bg-black/20 px-2 py-0.5 rounded-full text-foreground/80 border border-background/40"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground/70 text-xs">{p.gender}</p>
                <p>
                  <span className="font-medium text-foreground">Best for:</span>{" "}
                  <span className="text-muted-foreground">{p.bestFor}</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Content:</span>{" "}
                  <span className="text-muted-foreground">{p.content}</span>
                </p>
                <p className="text-xs border-t border-border/40 pt-2 text-muted-foreground">
                  <span className="font-medium text-red-600">Skip if:</span>{" "}
                  {p.skip}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Tree */}
        <h3 className="text-xl font-semibold text-foreground mb-4">
          How to Choose: Ask These 4 Questions in Order
        </h3>
        <div className="space-y-3 mb-8">
          {DECISION_QUESTIONS.map((item, i) => (
            <div
              key={item.q}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 hover:border-[#6366F1]/30 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#E0E7FF] dark:bg-[#1e1b4b]/40 flex items-center justify-center text-sm font-bold text-[#6366F1] shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {item.q}
                </p>
                <p className="text-sm text-muted-foreground">{item.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 p-5">
          <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mb-1">
            Start Here for Most SMBs
          </p>
          <p className="text-sm text-emerald-700 dark:text-emerald-400">
            <strong>Facebook first.</strong> It reaches every age group, has the
            most powerful local advertising tools, and is easiest for beginners
            to manage. Add Instagram in Month 2 if your business is visual. Add
            LinkedIn only if you sell B2B.
          </p>
        </div>
      </div>
    </section>
  );
}
