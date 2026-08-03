import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Repeat, Star, TrendingUp, Wifi } from "lucide-react";

const STATS = [
  {
    value: "55%",
    label:
      "of Americans expect to spend MORE dining out in 2026: but guests are more selective than ever",
    source: "National Restaurant Association 2026",
  },
  {
    value: "+35%",
    label:
      "Sales increase at a SoHo boutique restaurant through menu revitalization + hero item + social media strategy",
    source: "SoHo Case Study 2025",
  },
  {
    value: "+40%",
    label:
      "Repeat customer rate at the same SoHo restaurant: with zero increase in seating capacity",
    source: "SoHo Case Study 2025",
  },
  {
    value: "99/100",
    label:
      "Digital presence score at Manhatta: the result of daily, disciplined presence management",
    source: "Digital Presence Audit 2026",
  },
];

const KEY_LESSONS = [
  {
    icon: Star,
    number: "01",
    title: "Great Food Is the Floor, Not the Ceiling",
    quote:
      "“An ‘it’ restaurant is more than just great food: it’s a place where people feel something when they walk in.”",
    attribution: "Lawrence Longo, Prince Street Pizza",
    body: "In 2026’s NYC restaurant market, exceptional food is required to compete, not sufficient to win. The restaurants that close were built to attract, not to attach. No one structured their week around them. They were optional. New York does not forgive optional businesses.",
  },
  {
    icon: Repeat,
    number: "02",
    title: "Habits Over Hype",
    body: "The restaurants winning in 2026 are “boring online and essential in real life.” They design menus for repetition, not surprise. They price for locals, not visitors. They do one thing brilliantly and consistently, and the neighborhood structures its week around them. Hype brings people once. Habit brings them every week.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Consistency Is the Product",
    quote:
      "“If portions drift or execution varies, you lose customer loyalty. People just don’t return.”",
    attribution: "Bruce Bronster, BBianco Hospitality",
    body: "Consistency is not a low bar: it is the highest form of restaurant discipline. The same dish, the same portion, the same experience, every service. This is what turns a guest into a regular.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Story + Food = Attachment",
    body: "Three things every ‘it’ NYC restaurant needs: great food, consistency, and storytelling (Bruce Bronster). The Bungalow restaurant’s story of Indian/South Asian cultural representation is inseparable from its success. The story IS the brand, and the brand IS the reason for the wait list.",
    callout: true,
  },
  {
    icon: Wifi,
    number: "05",
    title: "Digital Excellence Is Non-Negotiable",
    body: "Manhatta scores 99/100 on digital presence. Marseille dominates ‘restaurants near Broadway’ in local search. Video content is now mandatory: TikTok, Instagram Reels, YouTube Shorts. If you’re not posting multiple times per week, you are invisible to an entire demographic that dines out more than any other.",
  },
];

export function RestaurantWhySucceedSection() {
  return (
    <section id="why-succeed" data-ocid="restaurant-guide.why_succeed_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
            border: "1px solid oklch(0.28 0.12 330 / 0.25)",
          }}
        >
          Section 1
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Why Top NYC Restaurants Succeed in 2026
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        The restaurants that thrive share specific, learnable patterns.
        Here&#39;s the complete playbook distilled from NYC&#39;s most
        successful operators.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div
            key={s.value}
            className="p-4 rounded-xl flex flex-col gap-1"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.28 0.12 330 / 0.07) 0%, oklch(0.78 0.12 85 / 0.07) 100%)",
              border: "1px solid oklch(0.28 0.12 330 / 0.12)",
            }}
          >
            <div
              className="font-display text-2xl md:text-3xl font-bold"
              style={{ color: "oklch(0.28 0.12 330)" }}
            >
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground leading-snug">
              {s.label}
            </div>
            <div
              className="text-xs font-medium mt-auto pt-1"
              style={{ color: "oklch(0.55 0.14 85)" }}
            >
              {s.source}
            </div>
          </div>
        ))}
      </div>

      {/* Key lessons */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {KEY_LESSONS.map((lesson) => (
          <Card
            key={lesson.number}
            className="overflow-hidden"
            style={{
              border: lesson.callout
                ? "2px solid oklch(0.78 0.12 85 / 0.5)"
                : undefined,
              background: lesson.callout
                ? "oklch(0.78 0.12 85 / 0.06)"
                : undefined,
            }}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: lesson.callout
                      ? "oklch(0.78 0.12 85 / 0.18)"
                      : "oklch(0.28 0.12 330 / 0.1)",
                  }}
                >
                  <lesson.icon
                    size={16}
                    style={{
                      color: lesson.callout
                        ? "oklch(0.55 0.14 85)"
                        : "oklch(0.28 0.12 330)",
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold font-mono"
                      style={{ color: "oklch(0.55 0.14 85)" }}
                    >
                      {lesson.number}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm">
                      {lesson.title}
                    </h3>
                  </div>
                  {lesson.quote && (
                    <blockquote
                      className="text-xs italic mb-2 pl-2 border-l-2"
                      style={{
                        borderColor: "oklch(0.78 0.12 85)",
                        color: "oklch(0.28 0.12 330)",
                      }}
                    >
                      {lesson.quote}
                      {lesson.attribution && (
                        <span className="block not-italic text-muted-foreground mt-0.5">
                          : {lesson.attribution}
                        </span>
                      )}
                    </blockquote>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.body}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SoHo case study callout */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.08) 0%, oklch(0.62 0.1 15 / 0.06) 100%)",
          border: "1px solid oklch(0.28 0.12 330 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-bold text-base text-foreground">
            SoHo Success Story
          </span>
          <Badge
            style={{
              background: "oklch(0.28 0.12 330)",
              color: "oklch(0.97 0.006 75)",
            }}
          >
            Real Case Study
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A boutique restaurant with no defined brand identity underwent menu
          revitalization, identified one hero item, and launched a consistent
          social media strategy. Result:{" "}
          <strong className="text-foreground">
            35% sales increase and 40% repeat customer rate in 6 months
          </strong>{" "}
          : with zero increase in seating capacity.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            [
              "Step 1",
              "Menu revitalization",
              "Reduced menu to only the items executed perfectly",
            ],
            [
              "Step 2",
              "Hero item identification",
              "One signature dish featured in all marketing",
            ],
            [
              "Step 3",
              "Social media consistency",
              "Daily posting: real food, real people, no filters",
            ],
          ].map(([step, title, desc]) => (
            <div
              key={step}
              className="p-3 rounded-xl"
              style={{ background: "oklch(0.97 0.006 75 / 0.6)" }}
            >
              <div
                className="text-xs font-bold mb-0.5"
                style={{ color: "oklch(0.55 0.14 85)" }}
              >
                {step}
              </div>
              <div
                className="font-semibold text-sm mb-0.5"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {title}
              </div>
              <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* James Beard insight */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.08)",
          border: "1px solid oklch(0.62 0.1 15 / 0.25)",
        }}
      >
        <h3
          className="font-semibold text-base mb-2"
          style={{ color: "oklch(0.35 0.08 15)" }}
        >
          🏆 James Beard Foundation 2026 Insight
        </h3>
        <p className="text-sm text-muted-foreground">
          “Operators prioritizing precision, consistency, and fewer surprises
          are outperforming those chasing trends on every financial metric.” A
          smaller menu with discipline outperforms complex menus on{" "}
          <strong>consistency, speed, morale, margins, and guest trust.</strong>
        </p>
      </div>
    </section>
  );
}
