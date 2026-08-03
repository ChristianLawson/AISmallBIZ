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
    name: "Safety & Signage",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    items: [
      {
        id: 1,
        task: "Anti-harassment signs posted at every table: not just the entrance",
      },
      {
        id: 2,
        task: "8 house rules posted, laminated, at eye-level in at least 3 locations",
      },
      { id: 3, task: "Security cameras active, visible, and recently tested" },
      {
        id: 4,
        task: "Incident response protocol written and distributed to all staff",
      },
    ],
  },
  {
    name: "Staff Training",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    items: [
      {
        id: 5,
        task: "Every staff member trained on harassment response within 60 seconds",
      },
      {
        id: 6,
        task: "Pre-shift policy reminder is a non-negotiable daily practice",
      },
      {
        id: 7,
        task: "Female staff hired or recruiting in progress: bartender, manager, or coach",
      },
      {
        id: 8,
        task: "Incident log maintained and reviewed weekly by ownership",
      },
    ],
  },
  {
    name: "Events & Lessons",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 9,
        task: "Ladies' Night scheduled, promoted, and recurring on the calendar",
      },
      {
        id: 10,
        task: "Free 15-min pool lessons sign-up sheet active: physical and digital",
      },
      {
        id: 11,
        task: "Women's league interest list started: minimum 8 names before launching",
      },
      {
        id: 12,
        task: "First women-only tournament date set on the 3-month calendar",
      },
    ],
  },
  {
    name: "Atmosphere",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 13,
        task: "Warm atmospheric lighting installed over each table (2700K-3000K)",
      },
      {
        id: 14,
        task: "Comfortable lounge seating added near tables for spectators",
      },
      {
        id: 15,
        task: "Music volume calibrated for conversation during social hours",
      },
    ],
  },
  {
    name: "Marketing",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 16,
        task: "Instagram, TikTok, and Facebook pages active with women-focused content",
      },
      {
        id: 17,
        task: "At least one women's organization partnership established",
      },
      { id: 18, task: "Email/SMS list building started from event sign-ups" },
      {
        id: 19,
        task: "Monthly special photographed and posted before end of first day",
      },
    ],
  },
  {
    name: "Menu & Revenue",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.06)",
    border: "oklch(0.62 0.1 15 / 0.18)",
    items: [
      {
        id: 20,
        task: "Cue Ball Spritz and Break Shot Lemonade on menu and photographed",
      },
      {
        id: 21,
        task: "8-Ball Truffles or Cue Ball Cake Pops available for photo-worthy desserts",
      },
      {
        id: 22,
        task: "Monthly rotating special implemented and posted for current month",
      },
      {
        id: 23,
        task: "Branded take-home trinkets (8-ball coasters or cue charms) ordered and in stock",
      },
    ],
  },
];

export function PoolHallRescueChecklist() {
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
    <section id="checklist" data-ocid="poolhall-guide.checklist_section">
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
          Section 9
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Pool Hall Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        23 non-negotiable actions across 6 categories. Check them off as you
        complete them.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
        data-ocid="poolhall-guide.checklist_progress"
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
                    data-ocid={`poolhall-guide.checklist.item.${item.id}`}
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
