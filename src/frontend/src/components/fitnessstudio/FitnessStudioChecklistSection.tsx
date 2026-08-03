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
    name: "Atmosphere & Signage",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    items: [
      {
        id: 1,
        task: "Body-positive and non-judgmental zone signs posted at entrance and locker rooms",
      },
      {
        id: 2,
        task: "'No Unsolicited Advice' signs visible in studio and weight room",
      },
      {
        id: 3,
        task: "Warm, flattering lighting installed in changing rooms and locker areas",
      },
      {
        id: 4,
        task: "Equipment clean, serviced, and free of 'out of order' signs",
      },
      {
        id: 5,
        task: "Music volume calibrated: energizing but conversation-friendly",
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
        id: 6,
        task: "All instructors trained on inclusive, strength-based coaching language",
      },
      {
        id: 7,
        task: "Pre-class briefing protocol: new members, any members needing support",
      },
      {
        id: 8,
        task: "Front desk trained to greet within 10 seconds and learn member names",
      },
      {
        id: 9,
        task: "Harassment and complaint response protocol documented and trained",
      },
    ],
  },
  {
    name: "Classes & Schedule",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 10,
        task: "At least 2 women-only class slots per week on the schedule",
      },
      {
        id: 11,
        task: "Early morning and lunchtime slots offered for working moms",
      },
      {
        id: 12,
        task: "Monthly beginner workshop scheduled and promoted 2 weeks ahead",
      },
      {
        id: 13,
        task: "Female instructor visible prominently in all class promotion",
      },
    ],
  },
  {
    name: "Events & Community",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      { id: 14, task: "Ladies' Night Workout recurring on weekly schedule" },
      {
        id: 15,
        task: "Quarterly fitness challenge planned with member group and prizes",
      },
      {
        id: 16,
        task: "Member milestone recognition system active (10th class, 1-year, etc.)",
      },
      {
        id: 17,
        task: "Brand ambassador program launched with 5+ active members",
      },
    ],
  },
  {
    name: "Marketing & Growth",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 18,
        task: "Instagram Reels posted 5+ times per week with diverse member content",
      },
      { id: 19, task: "Google My Business optimized and reviewed weekly" },
      {
        id: 20,
        task: "Referral program active with clear incentive structure",
      },
      { id: 21, task: "Email list building from every class sign-in" },
      {
        id: 22,
        task: "At least one local women's organization partnership established",
      },
    ],
  },
  {
    name: "Retention & Metrics",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.06)",
    border: "oklch(0.62 0.1 15 / 0.18)",
    items: [
      { id: 23, task: "Monthly churn rate tracked and below 5%" },
      {
        id: 24,
        task: "30-day win-back email sequence active for lapsed members",
      },
      {
        id: 25,
        task: "Personal outreach protocol for members who miss 2+ consecutive weeks",
      },
      {
        id: 26,
        task: "Post-cancellation survey capturing reasons for every exit",
      },
      { id: 27, task: "Monthly NPS survey sent to all active members" },
    ],
  },
];

export function FitnessStudioChecklistSection() {
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
    <section id="checklist" data-ocid="fitness-studio-guide.checklist_section">
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
        Fitness Studio Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        27 non-negotiable actions across 6 categories. Check them off as you
        complete them.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
        data-ocid="fitness-studio-guide.checklist_progress"
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
                    data-ocid={`fitness-studio-guide.checklist.item.${item.id}`}
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
