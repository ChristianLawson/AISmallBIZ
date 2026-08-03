import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Know Your Numbers or Close Your Doors"',
    detail:
      "If you cannot tell me your food cost, your labor cost, and your margin in the next 30 seconds, you are flying blind. Numbers are not optional. They are oxygen.",
  },
  {
    quote: '"Your Concept Is Not Your Differentiator"',
    detail:
      "Everybody thinks their idea is special. The market does not care about your idea. It cares about your execution. A mediocre concept executed brilliantly beats a brilliant concept executed poorly every single time.",
  },
  {
    quote: '"Plan for Failure First"',
    detail:
      "The most successful businesses plan for what goes wrong: equipment breaks, suppliers fail, slow seasons hit. What is your contingency? If you do not have one, you are one bad week from disaster.",
  },
  {
    quote: '"Accountability Is Non-Negotiable"',
    detail:
      "Every plan needs dates, names, and consequences. Without accountability, a business plan is just a document nobody reads. Who owns each goal? By when? What happens if they do not deliver?",
  },
];

const CHECKLIST_ITEMS = [
  {
    category: "Financial Foundation",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.08)",
    items: [
      "12-month revenue projection",
      "Break-even analysis complete",
      "Cash flow model built",
      "Funding sources identified",
      "Emergency reserve of 3 months expenses",
    ],
  },
  {
    category: "Market Analysis",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Target customer defined with demographics",
      "Competitive analysis done",
      "Pricing strategy validated",
      "Market size estimated",
      "Geographic territory defined",
    ],
  },
  {
    category: "Operations Plan",
    color: "oklch(0.38 0.1 25)",
    bg: "oklch(0.62 0.1 15 / 0.08)",
    items: [
      "Daily/weekly/monthly procedures written",
      "Supplier agreements in place",
      "Staffing plan with job descriptions",
      "Technology stack identified",
      "Location/lease evaluated",
    ],
  },
  {
    category: "Marketing Strategy",
    color: "oklch(0.35 0.1 200)",
    bg: "oklch(0.28 0.12 200 / 0.08)",
    items: [
      "Brand identity defined",
      "Marketing budget allocated",
      "Customer acquisition channels selected",
      "Content calendar created",
      "Social media strategy documented",
    ],
  },
  {
    category: "Legal & Compliance",
    color: "oklch(0.45 0.1 55)",
    bg: "oklch(0.72 0.1 55 / 0.08)",
    items: [
      "Business structure chosen (LLC/Corp)",
      "Licenses and permits identified",
      "Insurance coverage reviewed",
      "Contracts with key vendors/employees",
      "IP protection considered",
    ],
  },
  {
    category: "Growth Milestones",
    color: "oklch(0.35 0.1 240)",
    bg: "oklch(0.55 0.12 240 / 0.08)",
    items: [
      "90-day goals set",
      "1-year targets defined",
      "3-year vision articulated",
      "KPIs tracked weekly",
      "Monthly board/advisor review scheduled",
    ],
  },
];

export function BusinessPlanningTafferSection() {
  return (
    <section id="taffer" data-ocid="business-planning.taffer_section">
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
          Business Planning
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Jon Taffer on Business Planning: No Plan, No Future
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&rsquo;s no-excuses framework from Bar Rescue, applied to
        business planning. Before you open your doors, own your numbers, own
        your plan, own your accountability.
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
          &ldquo;A business without a plan isn&rsquo;t a business &mdash;
          it&rsquo;s a wish. And wishes don&rsquo;t pay your rent, your staff,
          or your vendors.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          &mdash; Jon Taffer, Bar Rescue. Applied to business planning: a plan
          isn&rsquo;t a nice-to-have. It&rsquo;s your operating system.
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

      {/* Business Planning Audit */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Business Planning Audit &mdash; Taffer&rsquo;s 6-Category Checklist
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
            data-ocid={`business-planning.checklist.${cat.category.toLowerCase().replace(/[\s&/]+/g, "_")}`}
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
