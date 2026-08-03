import { Badge } from "@/components/ui/badge";
import { CheckSquare, ClipboardCheck } from "lucide-react";
import { useState } from "react";

type ChecklistItem = { id: number; task: string; checked: boolean };
type ChecklistCategory = {
  name: string;
  color: string;
  bg: string;
  border: string;
  items: ChecklistItem[];
};

const INITIAL_CHECKLIST: ChecklistCategory[] = [
  {
    name: "Operations",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Kitchen communication protocol documented and trained",
        checked: false,
      },
      {
        id: 2,
        task: "Recovery protocol for unhappy tables: every team member knows what to do",
        checked: false,
      },
      {
        id: 3,
        task: "Opening and closing checklist followed daily without exception",
        checked: false,
      },
      {
        id: 4,
        task: "Manager empowered to make real-time service decisions",
        checked: false,
      },
    ],
  },
  {
    name: "Menu Discipline",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 5,
        task: "Menu reduced to the items you execute perfectly (fewer is more)",
        checked: false,
      },
      {
        id: 6,
        task: "One hero item identified and featured in all marketing",
        checked: false,
      },
      {
        id: 7,
        task: "Food cost calculated for every dish on menu",
        checked: false,
      },
      {
        id: 8,
        task: "Portion control standards documented and enforced",
        checked: false,
      },
    ],
  },
  {
    name: "Brand & Story",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 9,
        task: "Restaurant’s founding story written and available on website + social",
        checked: false,
      },
      {
        id: 10,
        task: "Cultural or community identity clearly expressed in décor, menu, and communication",
        checked: false,
      },
      {
        id: 11,
        task: "Consistent visual identity (colors, fonts, plating aesthetic) across all platforms",
        checked: false,
      },
      {
        id: 12,
        task: "Staff able to tell the restaurant’s story in 60 seconds",
        checked: false,
      },
    ],
  },
  {
    name: "Digital Presence",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 13,
        task: "Google Business Profile updated this week (photo + post)",
        checked: false,
      },
      {
        id: 14,
        task: "All reservation platforms up to date (hours, menu, booking link)",
        checked: false,
      },
      {
        id: 15,
        task: "Video content posted this week (minimum 3x across platforms)",
        checked: false,
      },
      {
        id: 16,
        task: "Last 5 reviews responded to (positive and negative)",
        checked: false,
      },
    ],
  },
  {
    name: "Guest Experience",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 17,
        task: "Every table acknowledged within 3 seconds of sitting",
        checked: false,
      },
      {
        id: 18,
        task: "Regulars tracked in reservation system with preferences noted",
        checked: false,
      },
      {
        id: 19,
        task: "Birthday/anniversary protocol in place and used",
        checked: false,
      },
      {
        id: 20,
        task: "Post-dining follow-up sent to first-time guests",
        checked: false,
      },
    ],
  },
];

export function RestaurantRescueChecklist() {
  const [checklist, setChecklist] =
    useState<ChecklistCategory[]>(INITIAL_CHECKLIST);

  const toggle = (catName: string, itemId: number) => {
    setChecklist((prev) =>
      prev.map((cat) =>
        cat.name === catName
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item,
              ),
            }
          : cat,
      ),
    );
  };

  const totalItems = checklist.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedItems = checklist.reduce(
    (sum, cat) => sum + cat.items.filter((i) => i.checked).length,
    0,
  );
  const percent = Math.round((checkedItems / totalItems) * 100);

  return (
    <section id="checklist" data-ocid="restaurant-guide.checklist_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 330 / 0.12)" }}
        >
          <ClipboardCheck size={20} style={{ color: "oklch(0.28 0.12 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 330 / 0.1)",
            color: "oklch(0.28 0.12 330)",
            border: "1px solid oklch(0.28 0.12 330 / 0.25)",
          }}
        >
          Section 8
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Restaurant Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        20 non-negotiable actions across 5 categories. Run this audit on your
        restaurant before every week of service. If any box is unchecked, fix it
        before you open.
      </p>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm text-muted-foreground">
            {checkedItems} of {totalItems} items complete
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "oklch(0.28 0.12 330)" }}
          >
            {percent}%
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "oklch(0.90 0.006 75)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percent}%`,
              background:
                percent === 100
                  ? "oklch(0.55 0.14 150)"
                  : "oklch(0.28 0.12 330)",
            }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {checklist.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${cat.border}` }}
            data-ocid={`restaurant-guide.checklist_category.${cat.name.toLowerCase().replace(/[\s&]+/g, "_")}`}
          >
            <div className="px-4 py-3" style={{ background: cat.bg }}>
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold text-sm"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: cat.color }}
                >
                  {cat.items.filter((i) => i.checked).length}/{cat.items.length}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2.5 cursor-pointer"
                  data-ocid={`restaurant-guide.checklist_item.${item.id}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(cat.name, item.id)}
                    className="mt-0.5 shrink-0"
                    aria-label={item.checked ? "Uncheck" : "Check"}
                  >
                    <CheckSquare
                      size={14}
                      style={{
                        color: item.checked
                          ? cat.color
                          : "oklch(0.78 0.006 75)",
                      }}
                    />
                  </button>
                  <p
                    className="text-xs leading-relaxed transition-colors duration-150"
                    style={{
                      color: item.checked
                        ? "oklch(0.55 0.008 75)"
                        : "oklch(0.45 0.01 50)",
                      textDecoration: item.checked ? "line-through" : "none",
                    }}
                  >
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Print tip */}
      <div
        className="mt-6 rounded-xl p-4 flex items-center justify-between gap-4"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Pro tip:</strong> Print this
          checklist and post it in your back-of-house. Run it every Monday
          morning before service begins.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth"
          style={{
            background: "oklch(0.28 0.12 330)",
            color: "oklch(0.97 0.006 75)",
          }}
          data-ocid="restaurant-guide.print_checklist_button"
        >
          Print Checklist
        </button>
      </div>
    </section>
  );
}
