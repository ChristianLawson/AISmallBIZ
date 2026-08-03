import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Reactions create reactions." ',
    detail:
      "How the customer feels walking through your door sets everything. Smell, sound, lighting, layout, and cleanliness ARE your brand: before they even order.",
  },
  {
    quote: '"The owner is responsible for every failure: no excuses."',
    detail:
      "Accountability is everything. If your deli has problems, it is because of decisions you made: or did not make. The blame game ends the day you open your doors.",
  },
  {
    quote:
      '"If you are not embarrassed by what you see, you are not looking hard enough."',
    detail:
      "Walk your deli like a customer. Look at the restrooms, the meat case, the sandwich board, the staff posture. You will find things to fix every single time.",
  },
  {
    quote:
      '"Staff training is not optional: every employee is a brand ambassador."',
    detail:
      "Every person behind your counter represents you, your story, your quality. One bad interaction can undo a decade of reputation. Train like your survival depends on it: because it does.",
  },
];

const CHECKLIST_ITEMS = [
  {
    category: "Operations",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
    items: [
      "Counters and equipment visibly clean at all times",
      "FIFO inventory system implemented and enforced",
      "Lunch rush protocol drilled: no chaos under pressure",
    ],
  },
  {
    category: "Branding",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Logo and colors consistent on all materials, bags, and packaging",
      "Sandwich board updated with today's specials every single morning",
      "Social media active minimum 3x per week: every week",
    ],
  },
  {
    category: "Menu",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    items: [
      "Today's special visible from the entrance: not just behind the counter",
      "Rotating special announced and promoted the day before it drops",
      "Top 3 sellers prominently featured: make ordering easy",
      "Staff can describe today's special without checking anything",
    ],
  },
  {
    category: "Digital Presence",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.08)",
    items: [
      "Google Business Profile updated within the last 7 days",
      "10+ reviews responded to: personally, not with a template",
      "Profile photos updated this month with today's specials",
    ],
  },
  {
    category: "Customer Experience",
    color: "oklch(0.45 0.14 330)",
    bg: "oklch(0.62 0.1 15 / 0.05)",
    items: [
      "Every customer greeted within 30 seconds of entering",
      "Top 20 regulars known by name: and their usual order",
      "Recovery protocol exists for complaints: and staff knows it",
    ],
  },
  {
    category: "Staff Training",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    items: [
      "Every staff member can tell the story of your deli in 60 seconds",
      "Every staff member knows today's special and can describe it",
      "Return and complaint policy known by all staff: no escalation confusion",
    ],
  },
];

export function DeliTafferSection() {
  return (
    <section id="taffer" data-ocid="deli-guide.taffer_section">
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
          Section 2
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bar Rescue Principles for Your Deli
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer's no-excuses framework from Bar Rescue, applied directly to
        NYC deli operations. Brutal, but effective.
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
          &ldquo;I do not rescue bars. I rescue owners. The bar is just the
          symptom.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. Applied to delis, this means: if your deli
          is struggling, the problem is decisions: and decisions can change.
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

      {/* Deli Rescue Checklist preview */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Deli Rescue Checklist: Taffer's 6-Category Audit
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHECKLIST_ITEMS.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-4"
            style={{
              background: cat.bg,
              border: `1px solid ${cat.color.replace(")", " / 0.25)")}`,
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
