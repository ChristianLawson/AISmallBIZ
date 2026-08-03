import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";
import { useState } from "react";

const TAFFER_PRINCIPLES = [
  {
    title: "Walk Your Salon Like a First-Time Client",
    quote:
      "Walk in through your front door right now. What do you smell? Is the music right? Is your reception area polished or cluttered? Is there a candle burning or a mop bucket visible?",
    detail:
      "Your reception area IS your first impression. You have 7 seconds. Taffer's rule: if you would not be proud to sit in your own waiting area, your clients are not either.",
  },
  {
    title: "Staff Is Not Optional: It is Your Brand",
    quote:
      "When a master stylist leaves, they do not just leave. They take their clients, their referrals, and 18 months of brand equity with them.",
    detail:
      "Staff retention is brand retention. Train your team to rebook clients at every appointment. Create a culture of accountability and recognition. Taffer's rule: your weakest staff member defines your reputation, not your best one.",
  },
  {
    title: "The Stress Test: Can You Handle a Fully Booked Saturday?",
    quote:
      "Book your salon to 100% capacity, then observe. Are there systems in place for every scenario?",
    detail:
      "Waiting clients? Late stylists? Product running out? An unhappy client? If you cannot handle Saturday at full capacity without chaos, you have an operations problem: not a business problem. Fix the systems, not the symptoms.",
  },
  {
    title: "Recovery Protocol Is Not Optional",
    quote:
      "Every salon will have an unhappy client. The question is not whether it happens: it is what happens next.",
    detail:
      "A client who receives a perfect recovery becomes your most loyal advocate. A client who leaves unhappy becomes your worst reviewer. Taffer's rule: empower every team member to solve a problem on the spot, without waiting for the owner.",
  },
];

type ChecklistCategory = {
  category: string;
  color: string;
  bg: string;
  items: string[];
};

const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    category: "Ambiance & First Impression",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
    items: [
      "Front door and reception area clean and inviting",
      "Signature scent consistent (candle or diffuser)",
      "Music at the right volume and tone for your brand",
      "All mirrors and surfaces streak-free and polished",
    ],
  },
  {
    category: "Staff & Training",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Every stylist trained to pre-book at every appointment",
      "Weekly team huddle: standards, promos, client feedback",
      "Staff knows today's featured promotion by heart",
      "Performance targets visible: avg ticket, rebooking rate",
    ],
  },
  {
    category: "Client Experience",
    color: "oklch(0.38 0.1 15)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    items: [
      "Every client greeted within 30 seconds of arriving",
      "Client preferences and history logged in booking system",
      "Complimentary drink offered at every appointment",
      "Recovery protocol: every stylist empowered to resolve",
    ],
  },
  {
    category: "Booking Systems",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.08)",
    items: [
      "Online booking link prominent in Instagram bio + Google",
      "Automated confirmation + reminder texts active",
      "No-show policy clear and consistently enforced",
    ],
  },
  {
    category: "Retail & Revenue",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    items: [
      "Retail products displayed at eye level at checkout",
      "Every stylist recommends 2 products used during service",
      "Monthly retail sales tracked per stylist",
      "VIP loyalty tier or membership offer active",
    ],
  },
  {
    category: "Digital Presence",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    items: [
      "Google Business Profile updated with new photo this week",
      "All reviews responded to (positive and negative)",
      "Instagram/TikTok posted minimum 3x this week",
      "Before/after transformation content posted this month",
    ],
  },
];

export function SalonTafferSection() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section id="taffer" data-ocid="salon-guide.taffer_section">
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
        Bar Rescue Principles Applied to Your Salon
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer has rescued over 150 failing bars and restaurants. The
        principles he uses apply directly to salons. Excuses are gone.
        Accountability is everything.
      </p>

      {/* Hero banner */}
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
          &ldquo;I don&apos;t rescue bars. I rescue owners. The bar is just the
          symptom.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. Applied to your salon: if your business is
          struggling, the problem is decisions: and decisions can change today.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.title}>
            <CardContent className="p-5">
              <h3 className="font-display font-bold text-base text-foreground mb-2">
                {p.title}
              </h3>
              <blockquote
                className="text-sm italic mb-2 pl-3"
                style={{
                  color: "oklch(0.28 0.12 330)",
                  borderLeft: "3px solid oklch(0.28 0.12 330 / 0.3)",
                }}
              >
                &ldquo;{p.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive checklist */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Salon Rescue Audit: 6-Category Checklist
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHECKLIST_CATEGORIES.map((cat) => (
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
              {cat.items.map((item, idx) => {
                const key = `${cat.category}-${idx}`;
                return (
                  <li key={item} className="flex items-start gap-2">
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      className="shrink-0 mt-0.5"
                      aria-label={checked.has(key) ? "Uncheck" : "Check"}
                      data-ocid={`salon-guide.taffer_checklist.${cat.category.toLowerCase().replace(/[^a-z0-9]/g, "_")}.${idx + 1}`}
                    >
                      <CheckCircle2
                        size={14}
                        style={{
                          color: checked.has(key)
                            ? cat.color
                            : "oklch(0.80 0.01 75)",
                        }}
                      />
                    </button>
                    <span
                      className="text-xs leading-relaxed"
                      style={{
                        color: checked.has(key)
                          ? "oklch(0.45 0.01 50)"
                          : "oklch(0.55 0.01 50)",
                        textDecoration: checked.has(key)
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
