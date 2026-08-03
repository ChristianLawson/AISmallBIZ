import { ArrowRight, Hash, MessageSquare, RefreshCw } from "lucide-react";

const CREATION_STEPS = [
  {
    step: 1,
    label: "Pick a Topic",
    desc: "Choose from your list of questions customers ask most often. What does your persona (Sarah) need to know?",
  },
  {
    step: 2,
    label: "Write Bullet Points",
    desc: "Do not write the full post yet. Jot down 3-5 key points you want to make. This prevents rambling.",
  },
  {
    step: 3,
    label: "Create Your Visual",
    desc: "Take a photo, screenshot, or use Canva (free). A great visual increases engagement by 94% on average.",
  },
  {
    step: 4,
    label: "Write Your Caption",
    desc: "Follow the Hook / Body / CTA / Hashtags formula below. Keep it conversational, not corporate.",
  },
  {
    step: 5,
    label: "Post and Respond",
    desc: "Publish it, then respond to every comment within 24 hours. Engagement invites more engagement.",
  },
];

const HASHTAG_TYPES = [
  {
    type: "Broad",
    ex: "#SmallBusiness (20M+ posts)",
    note: "High reach, but hard to be seen. Use sparingly.",
    bg: "bg-muted",
  },
  {
    type: "Medium",
    ex: "#BrooklynBusiness (100K posts)",
    note: "Good balance of reach and visibility.",
    bg: "bg-accent-neutral-soft dark:bg-accent-neutral-soft",
  },
  {
    type: "Niche",
    ex: "#ParkSlopeEats (5K posts)",
    note: "Your best bet for being found by local, targeted customers.",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

const REPURPOSE_POSTS = [
  {
    day: "Monday",
    action: "Share full article on Facebook",
    type: "Others' Content",
    desc: "Link + engaging caption teasing the top point",
  },
  {
    day: "Wednesday",
    action: "Highlight Point #1 on Instagram",
    type: "Your Visual",
    desc: "Quote card or photo + 'Tip 1 of 5, link in bio'",
  },
  {
    day: "Friday",
    action: "Tweet a key stat from the article",
    type: "Twitter Snippet",
    desc: "One punchy data point + link",
  },
  {
    day: "Next week",
    action: "Customer testimonial about the topic",
    type: "Social Proof",
    desc: "Photo + story + subtle CTA",
  },
];

const CAPTION_PARTS = [
  {
    part: "HOOK",
    desc: "Stop the scroll. Ask a question, state a surprising fact, or create curiosity. First line is everything.",
    color:
      "bg-accent-neutral-soft dark:bg-accent-neutral-soft border-accent-neutral-border dark:border-accent-neutral-border",
  },
  {
    part: "BODY",
    desc: "2-5 sentences of helpful info. Short paragraphs (2 lines max). Easy to read on a phone.",
    color:
      "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  },
  {
    part: "CALL-TO-ACTION",
    desc: "Ask them to engage: 'What do you think?' / 'Tag someone who needs this' / 'Drop a comment below.'",
    color:
      "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
  },
  {
    part: "HASHTAGS",
    desc: "3-5 hashtags: 1 broad, 2 medium, 2 niche. More is not better - relevant is better.",
    color:
      "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
  },
];

export function SocialMediaContentCreationSection() {
  return (
    <section
      id="content-creation"
      className="py-16 md:py-20 bg-background"
      data-ocid="social-media.content_creation_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <RefreshCw size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 5
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Creating Content That Actually Gets Engagement
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Great content follows a repeatable process. Once you learn it,
          creating posts takes 20 minutes instead of 2 hours.
        </p>

        {/* 5-Step Process */}
        <h3 className="text-lg font-semibold text-foreground mb-4">
          The 5-Step Content Creation Process
        </h3>
        <div className="relative mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative z-10">
            {CREATION_STEPS.map((s, i) => (
              <div
                key={s.step}
                className="rounded-xl border border-border bg-card p-4 text-center relative"
              >
                <div className="w-9 h-9 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-sm font-bold text-accent-neutral mx-auto mb-2">
                  {s.step}
                </div>
                <p className="text-sm font-bold text-foreground mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {s.desc}
                </p>
                {i < CREATION_STEPS.length - 1 && (
                  <ArrowRight
                    size={12}
                    className="absolute -right-2 top-5 text-muted-foreground hidden sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Caption Formula */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <MessageSquare size={18} className="text-accent-neutral" />
          The Caption Formula (Use This Every Time)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {CAPTION_PARTS.map((item) => (
            <div
              key={item.part}
              className={`rounded-xl border ${item.color} p-4`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {item.part}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-5 mb-10">
          <p className="text-xs font-bold text-accent-neutral uppercase tracking-wide mb-3">
            Real Caption Example - Coffee Shop
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-foreground">[HOOK]</span>{" "}
              <span className="text-muted-foreground">
                "Ever wondered why your homemade coffee does not taste like
                ours? Here is the secret..."
              </span>
            </p>
            <p>
              <span className="font-semibold text-foreground">[BODY]</span>{" "}
              <span className="text-muted-foreground">
                "It is not just the beans. It is water temp (200 degrees F),
                grind size (medium coarse), brew time (4 min), and quality
                equipment."
              </span>
            </p>
            <p>
              <span className="font-semibold text-foreground">[CTA]</span>{" "}
              <span className="text-muted-foreground">
                "What is your biggest coffee struggle at home? Tell me below!"
              </span>
            </p>
            <p>
              <span className="font-semibold text-foreground">[HASHTAGS]</span>{" "}
              <span className="text-muted-foreground">
                #CoffeeNerd #BrooklynCoffee #ParkSlopeEats
              </span>
            </p>
          </div>
        </div>

        {/* Hashtag Strategy */}
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Hash size={18} className="text-accent-neutral" />
          Smart Hashtag Strategy
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {HASHTAG_TYPES.map((h) => (
            <div
              key={h.type}
              className={`rounded-xl border border-border ${h.bg} p-4`}
            >
              <p className="text-sm font-bold text-foreground mb-1">
                {h.type} Hashtag
              </p>
              <p className="text-xs font-mono text-accent-neutral mb-2">
                {h.ex}
              </p>
              <p className="text-xs text-muted-foreground">{h.note}</p>
            </div>
          ))}
        </div>

        {/* Archestratus Case Study */}
        <div className="rounded-2xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-950/10 p-6 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center shrink-0">
              <span className="text-lg">📚</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                Real NYC Business Case Study
              </span>
              <p className="text-base font-bold text-foreground">
                Archestratus Books &amp; Foods, Brooklyn, NY
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Archestratus is a small independent bookstore and food shop in
            Greenpoint, Brooklyn. Their social media works because they do four
            things right: the same four things the NYC Small Business Services
            digital marketing course highlights as best practice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[
              {
                num: "1",
                label: "Non-Promotional Content",
                desc: "They share book recommendations, food culture stories, and neighborhood events: not 'BUY THIS NOW.' Trust is built before the ask.",
                color:
                  "bg-accent-neutral-soft dark:bg-accent-neutral-soft border-accent-neutral-border dark:border-accent-neutral-border",
              },
              {
                num: "2",
                label: "Unique, Ownable Imagery",
                desc: "Every photo is distinctly theirs: handwritten shelf-talkers, natural light, human hands. Not stock photos. You know it is Archestratus at a glance.",
                color:
                  "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
              },
              {
                num: "3",
                label: "Website Link That Works",
                desc: "Every post with a product or event links back to their actual site. The bridge from social curiosity to real purchase is always there.",
                color:
                  "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
              },
              {
                num: "4",
                label: "Image Matches the Brand",
                desc: "Their warm, literary, slightly eclectic vibe comes through in every visual. Image tone = brand tone = customer expectation. No disconnect.",
                color:
                  "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
              },
            ].map((item) => (
              <div
                key={item.num}
                className={`rounded-xl border p-4 ${item.color}`}
              >
                <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
                  {item.num}
                </div>
                <p className="text-sm font-bold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-100/60 dark:bg-amber-950/20 dark:border-amber-600 p-4">
            <p className="text-sm text-foreground/80 leading-relaxed">
              <strong className="text-foreground">The Lesson:</strong>{" "}
              Archestratus does not have a big budget or a marketing team. They
              have a clear brand identity, consistent visuals, and a discipline
              of being genuinely useful to their audience before asking for
              anything. That is the Appreciated Branding approach: and it works
              for any local business.
            </p>
          </div>
        </div>

        {/* Content Repurposing */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          The Power Move: Create Once, Post Four Times
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Write ONE blog post or article - then get 4 different social posts
          from it. This is efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {REPURPOSE_POSTS.map((p, i) => (
            <div
              key={p.day}
              data-ocid={`social-media.repurpose.item.${i + 1}`}
              className="rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border transition-all duration-200"
            >
              <p className="text-xs font-bold text-accent-neutral uppercase tracking-wide mb-2">
                {p.day}
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                {p.action}
              </p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:border-accent-neutral-border">
                {p.type}
              </span>
              <p className="text-xs text-muted-foreground mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
