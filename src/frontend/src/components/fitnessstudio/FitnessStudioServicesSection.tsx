import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Dumbbell, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

const CURRENT_MONTH_INDEX = new Date().getMonth(); // 0-based

const JUNE_FEATURED = {
  name: "Pilates Reformer Small Groups",
  label: "June 2026 Featured Class Spotlight",
  badge: "Trending Now",
  description:
    "Intimate reformer sessions of 4-6 members led by a certified female instructor. Full-body resistance work using the reformer machine builds lean strength, improves posture, and is completely beginner-friendly. The fastest-growing fitness format among women 25-45 in 2026.",
  viralHook:
    "Reformer Pilates is the #1 fitness trend on TikTok and Instagram in 2026: short-form 'first reformer class' reaction videos consistently hit 500K+ views. Every new member is a content opportunity.",
  presentationTips: [
    "Photograph the reformer machines in natural light before class for a clean, premium aesthetic",
    "Encourage members to share their first class experience with your studio tagged",
    "Create a 'Before & After Posture' content series: extremely shareable in women's wellness communities",
    "Offer a 3-class intro pack priced to minimize first-try friction ($39-49)",
    "Feature real member testimonials in stories within 48 hours of their first class",
  ],
  trendContext:
    "Pilates reformer searches are up 320% year-over-year. Boutique reformer studios are the fastest-growing fitness segment globally in 2025-2026. Small-group format commands premium pricing ($30-50/class) vs. floor pilates.",
};

const ROTATING_SPECIALS = [
  {
    month: "January",
    name: "New Year Reset: 30-Day Challenge",
    description:
      "A structured 30-session challenge combining HIIT, strength, and recovery. Participants check in daily and earn milestone badges.",
    type: "challenge",
    viralHook:
      "New year challenges with visible progress tracking drive massive Instagram accountability posts",
  },
  {
    month: "February",
    name: "Partner Yoga & Strength",
    description:
      "Couples and friends class combining partner yoga stretches with paired resistance exercises. Valentine's Day tie-in, all genders welcome.",
    type: "class",
    viralHook:
      "Partner workout content is the highest-shared fitness format on Valentine's week",
  },
  {
    month: "March",
    name: "Spring Into Strength",
    description:
      "8-week progressive strength training program for beginners: barbell basics, form clinics, confidence building in the weight room.",
    type: "program",
    viralHook:
      "'Women lifting for the first time' content gets enormous engagement and drives word-of-mouth",
  },
  {
    month: "April",
    name: "Outdoor Bootcamp Series",
    description:
      "Weekend morning classes held outdoors: park or rooftop. Combines cardio, bodyweight, and community energy. No gym required.",
    type: "class",
    viralHook:
      "Outdoor fitness content in spring light performs 3x better than indoor shots: free marketing",
  },
  {
    month: "May",
    name: "Dance Cardio Fiesta",
    description:
      "High-energy Latin-inspired dance cardio class: no experience needed, pure fun. Themed monthly around a different dance style.",
    type: "class",
    viralHook:
      "Dance workout videos are the top-viewed fitness content format on TikTok: every class is a Reel",
  },
  {
    month: "June",
    name: "Pilates Reformer Small Groups",
    description:
      "Intimate reformer sessions of 4-6 with certified female instructor. Full-body resistance, posture improvement, beginner-friendly.",
    type: "class",
    viralHook:
      "#ReformerPilates is the #1 fitness hashtag growth trend of 2026: every session is shareable content",
  },
  {
    month: "July",
    name: "Summer Shred Camp",
    description:
      "4-week intensive combining metabolic conditioning and nutrition guidance. Morning and evening sessions for working moms.",
    type: "program",
    viralHook:
      "Body transformation progress content drives the highest summer fitness engagement",
  },
  {
    month: "August",
    name: "Hot Yoga Immersion Week",
    description:
      "Daily hot yoga classes (105°F) for one focused week. Promotes detox, flexibility, and mental clarity. Perfect pre-fall reset.",
    type: "class",
    viralHook:
      "Hot yoga content drives curious 'would I survive?' engagement: huge trial driver",
  },
  {
    month: "September",
    name: "Back-to-Routine Strength Reset",
    description:
      "6-week foundational strength program designed for women returning after summer. Progressive overload, measurable gains tracked weekly.",
    type: "program",
    viralHook:
      "'Back to routine' content is September's highest-engagement fitness theme",
  },
  {
    month: "October",
    name: "Halloween Horror HIIT",
    description:
      "Spooky-themed high-intensity interval training: costume-friendly class, horror-movie soundtrack, themed warm-ups. Major social media event.",
    type: "class",
    viralHook:
      "Halloween fitness classes with costumes generate massive organic social reach every year",
  },
  {
    month: "November",
    name: "Gratitude Flow Yoga",
    description:
      "Thanksgiving-week restorative yoga series focused on mindfulness, gratitude, and stress relief during the holiday season.",
    type: "class",
    viralHook:
      "Wellness and gratitude content peaks in November: aligns perfectly with audience values",
  },
  {
    month: "December",
    name: "Year-End Celebration Class",
    description:
      "High-energy party-themed fitness class to close out the year: upbeat playlist, milestone recognition, community celebration.",
    type: "class",
    viralHook:
      "Year-end celebration content creates powerful emotional connection and member loyalty",
  },
];

const PERMANENT_SERVICES = [
  {
    category: "Strength",
    emoji: "🏋️",
    name: "Women's Strength Training",
    description:
      "Barbell and dumbbell programming designed specifically for women: progressive overload, form coaching, measurable strength gains.",
    why: "Strength training for women is the fastest-growing fitness category: up 45% in participation since 2023",
  },
  {
    category: "Cardio",
    emoji: "🔥",
    name: "Functional Fitness HIIT",
    description:
      "High-intensity intervals using functional movements: kettlebells, battle ropes, box jumps. 45-minute total-body sessions.",
    why: "Functional fitness tops 2026 fitness trend reports: equipment-free options keep it accessible",
  },
  {
    category: "Mind-Body",
    emoji: "🧘",
    name: "Hot Yoga & Pilates",
    description:
      "Heated yoga (90-105°F) for flexibility and detox, plus mat pilates for core strength. Calming counterpart to high-intensity offerings.",
    why: "Mind-body classes retain members 30% longer than cardio-only offerings: vital for lifetime value",
  },
  {
    category: "Dance",
    emoji: "💃",
    name: "Dance Cardio",
    description:
      "Latin, hip-hop, and pop-choreographed cardio: fun-first fitness that disguises the workout. No experience required.",
    why: "Dance cardio has the highest first-timer conversion rate of any group fitness class",
  },
  {
    category: "Recovery",
    emoji: "🛁",
    name: "Stretch & Recovery Sessions",
    description:
      "Deep stretching, foam rolling, and mobility work. Essential complement to high-intensity programming and a major member retention tool.",
    why: "Members who use recovery services cancel at half the rate of those who do not: it is a retention tool, not an add-on",
  },
  {
    category: "Personal",
    emoji: "🎯",
    name: "1-on-1 Personal Training",
    description:
      "Individual coaching sessions with certified trainers. Goal-setting, personalized programming, accountability check-ins.",
    why: "Personal training upsells generate 35-50% of boutique studio revenue despite serving 15-20% of members",
  },
];

const TYPE_COLOR: Record<string, string> = {
  class: "oklch(0.55 0.23 285)",
  program: "oklch(0.45 0.14 150)",
  challenge: "oklch(0.55 0.14 85)",
};

export function FitnessStudioServicesSection() {
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH_INDEX);
  const currentSpecial = ROTATING_SPECIALS[selectedMonth];

  return (
    <section id="services" data-ocid="fitness-studio-guide.services_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.45 0.14 150 / 0.15)" }}
        >
          <Dumbbell size={20} style={{ color: "oklch(0.35 0.14 150)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.45 0.14 150 / 0.15)",
            color: "oklch(0.30 0.12 150)",
            border: "1px solid oklch(0.45 0.14 150 / 0.35)",
          }}
        >
          Section 2: Classes &amp; Services
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Classes, Services &amp; Monthly Spotlight
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        Trending fitness offerings with a rotating monthly featured class: plus
        the core services that retain members year-round.
      </p>

      {/* June 2026 Featured Class */}
      {CURRENT_MONTH_INDEX === 5 && (
        <div
          className="rounded-2xl p-6 md:p-8 mb-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.14) 0%, oklch(0.45 0.14 150 / 0.08) 100%)",
            border: "2px solid oklch(0.55 0.18 290 / 0.4)",
          }}
          data-ocid="fitness-studio-guide.services.featured_class"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.55 0.18 290 / 0.18)" }}
              >
                <Sparkles size={22} style={{ color: "oklch(0.50 0.22 290)" }} />
              </div>
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-widest mb-1"
                  style={{
                    background: "oklch(0.55 0.18 290 / 0.18)",
                    color: "oklch(0.40 0.20 290)",
                    border: "1px solid oklch(0.55 0.18 290 / 0.4)",
                  }}
                >
                  <Sparkles size={14} />
                  {JUNE_FEATURED.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {JUNE_FEATURED.name}
                </h3>
              </div>
            </div>
            <span
              className="px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-wide"
              style={{
                backgroundColor:
                  "color-mix(in oklch, oklch(0.55 0.23 285) 12%, transparent)",
                color: "oklch(0.40 0.20 290)",
                border:
                  "1px solid color-mix(in oklch, oklch(0.55 0.23 285) 30%, transparent)",
              }}
            >
              {JUNE_FEATURED.badge}
            </span>
          </div>
          <p className="text-base text-[#71717A] leading-relaxed mb-4">
            {JUNE_FEATURED.description}
          </p>
          <div
            className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px] mb-4"
            style={{
              background: "oklch(0.45 0.14 150 / 0.08)",
              border: "1px solid oklch(0.45 0.14 150 / 0.2)",
            }}
          >
            <Camera
              size={15}
              className="shrink-0 mt-0.5"
              style={{ color: "oklch(0.35 0.14 150)" }}
            />
            <span style={{ color: "oklch(0.30 0.12 150)" }}>
              <strong>Why it goes viral:</strong> {JUNE_FEATURED.viralHook}
            </span>
          </div>
          <div
            className="rounded-xl p-4 mb-4"
            style={{
              background: "oklch(0.55 0.18 290 / 0.07)",
              border: "1px solid oklch(0.55 0.18 290 / 0.2)",
            }}
          >
            <p
              className="text-[15px] font-bold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.40 0.20 290)" }}
            >
              📸 Implementation Tips for Maximum Impact
            </p>
            <ul className="space-y-1.5">
              {JUNE_FEATURED.presentationTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-[15px] text-[#71717A]"
                >
                  <span style={{ color: "oklch(0.50 0.22 290)" }}>✦</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px] italic"
            style={{
              background: "oklch(0.55 0.18 290 / 0.06)",
              border: "1px solid oklch(0.55 0.18 290 / 0.15)",
              color: "oklch(0.40 0.15 290)",
            }}
          >
            🌍 <span>{JUNE_FEATURED.trendContext}</span>
          </div>
        </div>
      )}

      {/* Monthly Spotlight */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.12) 0%, oklch(0.45 0.14 150 / 0.08) 100%)",
          border: "2px solid oklch(0.55 0.18 290 / 0.3)",
        }}
        data-ocid="fitness-studio-guide.services.monthly_spotlight"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.55 0.18 290 / 0.15)" }}
            >
              <RotateCcw size={22} style={{ color: "oklch(0.50 0.22 290)" }} />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[15px] font-bold uppercase tracking-widest mb-1"
                style={{
                  background: "oklch(0.55 0.18 290 / 0.15)",
                  color: "oklch(0.50 0.22 290)",
                  border: "1px solid oklch(0.55 0.18 290 / 0.3)",
                }}
              >
                <RotateCcw size={14} />
                This Month&rsquo;s Featured Class
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {currentSpecial.name}
              </h3>
            </div>
          </div>
          <span
            className="px-3 py-1.5 rounded-full text-[15px] font-bold uppercase tracking-wide"
            style={{
              backgroundColor: `color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type] ?? "oklch(0.55 0.23 285)"} 12%, transparent)`,
              color: TYPE_COLOR[currentSpecial.type] ?? "oklch(0.50 0.22 290)",
              border: `1px solid color-mix(in oklch, ${TYPE_COLOR[currentSpecial.type] ?? "oklch(0.55 0.23 285)"} 30%, transparent)`,
            }}
          >
            {currentSpecial.type}
          </span>
        </div>
        <p className="text-base text-[#71717A] leading-relaxed mb-4">
          {currentSpecial.description}
        </p>
        <div
          className="flex items-start gap-2 rounded-lg px-4 py-3 text-[15px]"
          style={{
            background: "oklch(0.45 0.14 150 / 0.08)",
            border: "1px solid oklch(0.45 0.14 150 / 0.2)",
          }}
        >
          <Camera
            size={15}
            className="shrink-0 mt-0.5"
            style={{ color: "oklch(0.35 0.14 150)" }}
          />
          <span style={{ color: "oklch(0.30 0.12 150)" }}>
            <strong>Why it drives growth:</strong> {currentSpecial.viralHook}
          </span>
        </div>
        {/* Month picker */}
        <div className="mt-6">
          <p className="text-[15px] text-[#71717A] mb-3 font-medium">
            Preview all 12 monthly rotations:
          </p>
          <div className="flex flex-wrap gap-2">
            {ROTATING_SPECIALS.map((s, i) => (
              <button
                key={s.month}
                type="button"
                onClick={() => setSelectedMonth(i)}
                data-ocid={`fitness-studio-guide.services.month_tab.${i + 1}`}
                className="px-3 py-1.5 rounded-lg text-[15px] font-medium transition-all duration-200"
                style={{
                  background:
                    selectedMonth === i
                      ? "oklch(0.55 0.23 285)"
                      : "oklch(0.55 0.18 290 / 0.08)",
                  color: selectedMonth === i ? "#fff" : "oklch(0.45 0.14 290)",
                  border:
                    selectedMonth === i
                      ? "1px solid oklch(0.55 0.23 285)"
                      : "1px solid oklch(0.55 0.18 290 / 0.2)",
                  fontWeight: i === CURRENT_MONTH_INDEX ? "700" : undefined,
                }}
              >
                {s.month.slice(0, 3)}
                {i === CURRENT_MONTH_INDEX && " ★"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Permanent Core Services */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Core Permanent Services: Year-Round Offerings
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {PERMANENT_SERVICES.map((item, i) => (
          <Card
            key={item.name}
            className="hover:border-primary/35 transition-all duration-200"
            data-ocid={`fitness-studio-guide.services.item.${i + 1}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: "oklch(0.55 0.18 290 / 0.08)" }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="font-display font-semibold text-[15px] text-foreground">
                      {item.name}
                    </h4>
                    <span
                      className="text-[15px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.55 0.18 290 / 0.1)",
                        color: "oklch(0.45 0.14 290)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[15px] text-[#71717A] leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <div
                    className="text-[11px] rounded px-2 py-1"
                    style={{
                      background: "oklch(0.45 0.14 150 / 0.1)",
                      color: "oklch(0.30 0.10 150)",
                      borderLeft: "2px solid oklch(0.45 0.14 150 / 0.4)",
                    }}
                  >
                    📈 {item.why}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
