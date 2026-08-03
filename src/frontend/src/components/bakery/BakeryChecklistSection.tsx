import { Badge } from "@/components/ui/badge";
import { CheckSquare, ClipboardCheck } from "lucide-react";
import { useState } from "react";

type CheckItem = { id: number; task: string };
type Category = {
  name: string;
  color: string;
  bg: string;
  border: string;
  items: CheckItem[];
};

const CHECKLIST_CATEGORIES: Category[] = [
  {
    name: "Display & Atmosphere",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    items: [
      {
        id: 1,
        task: "Display case fully stocked and freshly arranged by 7am daily",
      },
      {
        id: 2,
        task: "Warm showcase lighting installed: no harsh overhead fluorescents",
      },
      {
        id: 3,
        task: "All items clearly labeled with name, allergens, and price",
      },
      {
        id: 4,
        task: "Exterior signage clean, current, and visible from 20 feet away",
      },
      {
        id: 5,
        task: "Music set to conversational volume: creates welcoming ambiance",
      },
    ],
  },
  {
    name: "Staff & Service",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    items: [
      {
        id: 6,
        task: "Every staff member greets customers within 5 seconds of entering",
      },
      {
        id: 7,
        task: "Pre-shift briefing completed before every opening shift",
      },
      {
        id: 8,
        task: "Staff trained on suggestive selling: always offer the monthly special",
      },
      {
        id: 9,
        task: "Incident and feedback log maintained and reviewed weekly",
      },
    ],
  },
  {
    name: "Menu & Viral Items",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 10,
        task: "Monthly rotating special photographed and posted on day 1",
      },
      {
        id: 11,
        task: "Matcha latte, lavender cold brew, and brown sugar boba on menu",
      },
      {
        id: 12,
        task: "Vegan and gluten-free options clearly labeled and available",
      },
      {
        id: 13,
        task: "Monthly featured pastry featured on chalkboard and all social channels",
      },
    ],
  },
  {
    name: "Marketing & Social",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 14,
        task: "Google My Business updated with today's special and photo before 8am",
      },
      {
        id: 15,
        task: "Instagram and TikTok accounts posting 3+ times per week",
      },
      { id: 16, task: "Every customer review responded to within 48 hours" },
      {
        id: 17,
        task: "Email list active: weekly Monday morning specials email sent",
      },
    ],
  },
  {
    name: "Events & Community",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 18,
        task: "Monthly baking class scheduled, promoted, and bookings open",
      },
      {
        id: 19,
        task: "Corporate catering showcase event on quarterly calendar",
      },
      {
        id: 20,
        task: "At least one women's organization partnership established",
      },
      {
        id: 21,
        task: "Local artist display rotation active: this month's artist featured on social",
      },
    ],
  },
  {
    name: "Women-Friendly Experience",
    color: "oklch(0.48 0.18 330)",
    bg: "oklch(0.62 0.14 330 / 0.06)",
    border: "oklch(0.62 0.14 330 / 0.18)",
    items: [
      { id: 22, task: "Stroller-accessible table area designated and signed" },
      {
        id: 23,
        task: "'Women-Owned' badge displayed on GMB, Instagram, and window signage",
      },
      {
        id: 24,
        task: "'Women We Admire' wall or display feature active and rotated quarterly",
      },
      {
        id: 25,
        task: "Loyalty program active: stamp card or digital system at counter",
      },
    ],
  },
];

export function BakeryChecklistSection() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalItems = CHECKLIST_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );
  const checkedCount = checked.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <section id="checklist" data-ocid="bakery-guide.checklist_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <ClipboardCheck size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.25)",
          }}
        >
          Section 8
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bakery Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        25 non-negotiable actions across 6 categories. Check them off as you
        complete them.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
        data-ocid="bakery-guide.checklist_progress"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            {checkedCount} of {totalItems} completed
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "oklch(0.50 0.22 290)" }}
          >
            {progress}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: "oklch(0.55 0.23 285)",
            }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CHECKLIST_CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl p-4"
            style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
          >
            <div
              className="font-semibold text-sm mb-3"
              style={{ color: cat.color }}
            >
              {cat.name}
            </div>
            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-label={`Toggle: ${item.task}`}
                    data-ocid={`bakery-guide.checklist.item.${item.id}`}
                    className="mt-0.5 shrink-0 transition-colors duration-150"
                  >
                    <CheckSquare
                      size={15}
                      style={{
                        color: checked.has(item.id)
                          ? cat.color
                          : "oklch(0.75 0.01 0)",
                      }}
                    />
                  </button>
                  <span
                    className="text-xs text-muted-foreground leading-relaxed"
                    style={{
                      textDecoration: checked.has(item.id)
                        ? "line-through"
                        : undefined,
                      opacity: checked.has(item.id) ? 0.5 : 1,
                    }}
                  >
                    {item.task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
