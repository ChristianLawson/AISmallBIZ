import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"A safe environment is a profitable environment."',
    detail:
      "Jon Taffer's data is clear: venues where customers feel unsafe have lower dwell time, lower spend, and higher churn. Your anti-harassment policy is not idealism: it is a revenue strategy.",
  },
  {
    quote: '"Pre-shift meetings are non-negotiable."',
    detail:
      "Every shift starts with a 5-minute team briefing: today's specials, any VIP guests, and a reminder of the harassment policy. What gets repeated gets done.",
  },
  {
    quote: '"The owner is responsible for every failure: no excuses."',
    detail:
      "If women do not feel welcome, that is an ownership decision: made by inaction. The culture you tolerate is the culture you create. Set the standard visibly and relentlessly.",
  },
  {
    quote: '"Lighting is not decoration: it is a business tool."',
    detail:
      "Warm atmospheric lighting extends dwell time by 20-30%. Harsh overhead fluorescents do the opposite. Your lighting investment is a direct revenue lever.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Safety & Signage",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.08)",
    items: [
      "Anti-harassment signs visible at every table: not just the entrance",
      "8 house rules posted prominently: laminated, eye-level",
      "Security cameras active and visible: deterrence is 80% of the job",
    ],
  },
  {
    category: "Staff Accountability",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.08)",
    items: [
      "Every staff member trained on harassment response within 60 seconds",
      "Pre-shift policy reminder: non-negotiable daily practice",
      "Incident log maintained and reviewed weekly by ownership",
    ],
  },
  {
    category: "Atmosphere & Revenue",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Warm atmospheric lighting: no harsh overhead fluorescents",
      "Comfortable lounge seating in social areas near tables",
      "Music volume calibrated for conversation, not overpowering",
    ],
  },
  {
    category: "Event Operations",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    items: [
      "Ladies' Night recurring schedule set and published 2 weeks ahead",
      "Free lesson slots pre-booked: no walk-in chaos at the door",
      "Event staffing planned for peak capacity: never understaffed",
    ],
  },
];

export function PoolHallTafferSection() {
  return (
    <section id="taffer" data-ocid="poolhall-guide.taffer_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Megaphone size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bar Rescue Principles for Your Pool Hall
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer's no-excuses operational framework, adapted for pool halls
        targeting a gender-inclusive customer base.
      </p>

      {/* Hero Taffer quote */}
      <div
        className="rounded-2xl p-7 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.92) 0%, oklch(0.22 0.1 30 / 0.9) 100%)",
        }}
      >
        <AlertTriangle
          size={28}
          className="mb-3"
          style={{ color: "oklch(0.82 0.14 85)" }}
        />
        <blockquote
          className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;I don&rsquo;t rescue bars. I rescue owners. The bar is just the
          symptom.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. For pool halls: if women aren&rsquo;t coming
          back, that&rsquo;s an ownership decision. Culture you tolerate is
          culture you create.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.quote}>
            <CardContent className="p-5">
              <blockquote
                className="font-display text-base font-semibold italic mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {p.quote}
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 4-Category Audit */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Pool Hall Rescue Audit: 4-Category Checklist
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {AUDIT_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-4"
            style={{
              background: cat.bg,
              border: `1px solid ${cat.color}`,
            }}
          >
            <div
              className="font-semibold text-sm mb-3"
              style={{ color: cat.color }}
            >
              {cat.category}
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: cat.color }}
                  />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
