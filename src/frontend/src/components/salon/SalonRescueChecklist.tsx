import { Badge } from "@/components/ui/badge";
import { CheckSquare, ClipboardCheck } from "lucide-react";
import { useState } from "react";

type CheckItem = {
  id: number;
  task: string;
  checked: boolean;
};

type Category = {
  name: string;
  color: string;
  bg: string;
  border: string;
  items: CheckItem[];
};

const INITIAL_CHECKLIST: Category[] = [
  {
    name: "Branding",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Defined ideal client profile written down",
        checked: false,
      },
      {
        id: 2,
        task: "Brand story posted on website + social profiles",
        checked: false,
      },
      {
        id: 3,
        task: "Consistent visual identity (logo/colors/fonts) across all platforms",
        checked: false,
      },
      {
        id: 4,
        task: "Staff dress code and brand standards document exists and is followed",
        checked: false,
      },
    ],
  },
  {
    name: "Client Experience",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 5,
        task: "Reception area inspected daily as a first-time client would see it",
        checked: false,
      },
      {
        id: 6,
        task: "Scent, lighting, and music protocol established and consistent",
        checked: false,
      },
      {
        id: 7,
        task: "Every client has notes in booking system (preferences, history, birthday)",
        checked: false,
      },
      {
        id: 8,
        task: "Pre-booking ritual: no client leaves without next appointment",
        checked: false,
      },
    ],
  },
  {
    name: "Staff",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 9,
        task: "Weekly team huddle (standards, promotions, client feedback)",
        checked: false,
      },
      {
        id: 10,
        task: "Individual performance targets (avg ticket, rebooking rate, retail ratio)",
        checked: false,
      },
      { id: 11, task: "Recognition system for top performers", checked: false },
      {
        id: 12,
        task: "Zero-tolerance policy for gossip or negative client interactions",
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
        task: "Google Business Profile updated with new photo this week",
        checked: false,
      },
      {
        id: 14,
        task: "Last 3 reviews responded to (positive and negative)",
        checked: false,
      },
      {
        id: 15,
        task: "Instagram/TikTok posted this week (minimum 3×)",
        checked: false,
      },
      {
        id: 16,
        task: "Online booking link prominent on all platforms + bio",
        checked: false,
      },
    ],
  },
  {
    name: "Retail & Retention",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 17,
        task: "Retail products displayed at eye level at checkout",
        checked: false,
      },
      {
        id: 18,
        task: "Every stylist trained to recommend products used during service",
        checked: false,
      },
      {
        id: 19,
        task: "Win-back campaign active for clients not seen in 90+ days",
        checked: false,
      },
      {
        id: 20,
        task: "Monthly retail sales tracked per stylist",
        checked: false,
      },
    ],
  },
];

export function SalonRescueChecklist() {
  const [checklist, setChecklist] = useState<Category[]>(INITIAL_CHECKLIST);

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
    <section id="checklist" data-ocid="salon-guide.checklist_section">
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
        Salon Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        20 non-negotiable actions across 5 categories. Run this audit every
        Monday morning before your first client arrives.
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
            data-ocid={`salon-guide.checklist_category.${cat.name.toLowerCase().replace(/[\s&]+/g, "_")}`}
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
                  data-ocid={`salon-guide.checklist_item.${item.id}`}
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

      {/* Print CTA */}
      <div
        className="mt-6 rounded-xl p-4 flex items-center justify-between gap-4"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Pro tip:</strong> Print this
          checklist and post it in your break room. Run it every Monday morning
          before doors open.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth"
          style={{
            background: "oklch(0.28 0.12 330)",
            color: "oklch(0.97 0.006 75)",
          }}
          data-ocid="salon-guide.print_checklist_button"
        >
          Print Checklist
        </button>
      </div>
    </section>
  );
}
