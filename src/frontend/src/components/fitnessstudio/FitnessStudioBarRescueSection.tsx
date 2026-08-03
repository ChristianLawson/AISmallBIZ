import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Rescue the experience before you rescue the revenue."',
    detail:
      "Taffer's core truth applied to fitness studios: if members dread coming in, no marketing spend can fix it. Audit the experience from the parking lot to the shower room before touching your ad budget.",
  },
  {
    quote: '"The owner is responsible for every failure: no excuses."',
    detail:
      "If women do not renew, that is an ownership decision made by inaction. Culture you tolerate is culture you create. The vibe of your studio is entirely in your control.",
  },
  {
    quote: '"Pre-shift meetings are non-negotiable."',
    detail:
      "Every class starts with a 2-minute instructor briefing: today's newcomers, any members needing extra support, energy level check. Staff who arrive prepared create a better member experience every single class.",
  },
  {
    quote: '"Lighting is not decoration: it is a business tool."',
    detail:
      "Flattering, warm lighting in changing rooms and studio spaces directly affects how women feel about returning. Harsh fluorescents in locker rooms is a cancellation trigger. This is a $400 fix with outsized retention ROI.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Atmosphere & First Impression",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.08)",
    items: [
      "Front desk greet within 10 seconds: name basis after second visit",
      "Locker room clean, well-lit with warm lighting, and stocked with basics",
      "Studio music calibrated: energizing but not ear-splitting",
    ],
  },
  {
    category: "Staff Energy & Culture",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.08)",
    items: [
      "Every instructor trained on inclusive language and body-positive coaching cues",
      "No unsolicited advice or comparison to other members: ever",
      "Instructors acknowledge new members visibly and by name during class",
    ],
  },
  {
    category: "Member Retention Tactics",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Milestone recognition: 10th class, 1-year anniversary, first personal record",
      "30-day win-back email sequence for members who have not visited in 2+ weeks",
      "Monthly check-in call or text from a real staff member for at-risk members",
    ],
  },
  {
    category: "Operations & Quality",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    items: [
      "Equipment serviced and spotless: one broken machine is one reason to cancel",
      "Class schedule published 2 weeks ahead: no last-minute cancellations",
      "Waitlist management system active: never leave a waitlisted member uncontacted",
    ],
  },
];

export function FitnessStudioBarRescueSection() {
  return (
    <section
      id="bar-rescue"
      data-ocid="fitness-studio-guide.bar_rescue_section"
    >
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
        Bar Rescue Principles for Your Fitness Studio
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&rsquo;s no-excuses operational framework applied to fitness
        studios: rescue the member experience first, revenue follows.
      </p>

      {/* Hero quote */}
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
          : Jon Taffer, Bar Rescue. Applied to fitness: if your retention rate
          is failing, that&rsquo;s an ownership decision. The culture, the
          atmosphere, the member experience: all of it is yours to fix.
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
        Fitness Studio Rescue Audit: 4-Category Checklist
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
