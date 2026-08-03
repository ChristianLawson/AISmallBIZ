import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckSquare, Megaphone } from "lucide-react";
import { useState } from "react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Walk Your Restaurant Like a Critic Would",
    body: "Arrive at your restaurant before service, walk in through the front door as if you have never been there. What do you smell? Is the host stand staffed and prepared? Are the menus clean? Is the lighting right? Is there music, and is it appropriate? Your host stand IS your first impression. You have 3 seconds before a guest forms their first opinion: and that opinion determines whether they’ll return.",
  },
  {
    number: "02",
    title: "The 3-Second Greeting Rule",
    body: "Every table must be acknowledged within 3 seconds of sitting down. Not served: acknowledged. Eye contact and a word. ‘I’ll be right with you’ is a hospitality act. Leaving a table unacknowledged for 90 seconds is a hospitality failure. Taffer’s rule: a guest who feels ignored becomes a guest who doesn’t return and leaves a 2-star review.",
  },
  {
    number: "03",
    title: "The Saturday Night Stress Test",
    body: "Can your kitchen execute perfectly when you’re at 100% capacity with a 45-minute wait? If the answer is no, you have a systems problem. Every restaurant needs: a clear communication protocol between front and back of house, a manager empowered to make real-time decisions, a recovery protocol for when things go wrong, and a way to turn a 45-minute wait into an experience rather than an inconvenience.",
  },
  {
    number: "04",
    title: "Recovery Is Everything",
    body: "Every restaurant will have a bad service. A cold dish, an overcooked steak, a forgotten order. The question isn’t whether it happens: it’s what happens in the 90 seconds after the complaint. A guest who receives a perfect, immediate, genuine recovery becomes your most loyal customer and your best online review. Taffer’s rule: never let a table leave unhappy. The cost of a free dessert is nothing compared to the cost of a 1-star review seen by 10,000 people.",
  },
];

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
    name: "Host & First Impression",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Host stand staffed 15 minutes before doors open",
        checked: false,
      },
      {
        id: 2,
        task: "Entrance smells clean and inviting: not like cleaning products",
        checked: false,
      },
      {
        id: 3,
        task: "Menus clean, current, and free of damage",
        checked: false,
      },
      {
        id: 4,
        task: "Music at correct volume for time of service",
        checked: false,
      },
    ],
  },
  {
    name: "Kitchen & Operations",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 5,
        task: "Kitchen communication protocol documented and trained",
        checked: false,
      },
      {
        id: 6,
        task: "Opening and closing checklist followed daily without exception",
        checked: false,
      },
      {
        id: 7,
        task: "Saturday night stress test passed: 100% capacity execution rehearsed",
        checked: false,
      },
    ],
  },
  {
    name: "Service Standards",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 8,
        task: "Every table acknowledged within 3 seconds of being seated",
        checked: false,
      },
      { id: 9, task: "Water on every table within 60 seconds", checked: false },
      {
        id: 10,
        task: "Server can describe every dish without hesitation",
        checked: false,
      },
      {
        id: 11,
        task: "45-minute wait turned into an experience, not an inconvenience",
        checked: false,
      },
    ],
  },
  {
    name: "Menu Discipline",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 12,
        task: "Menu reduced to items executed perfectly: fewer is more",
        checked: false,
      },
      {
        id: 13,
        task: "One hero item identified and featured in all marketing",
        checked: false,
      },
      {
        id: 14,
        task: "Food cost calculated for every dish on menu",
        checked: false,
      },
    ],
  },
  {
    name: "Staff & Accountability",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 15,
        task: "Manager empowered to make real-time service decisions",
        checked: false,
      },
      {
        id: 16,
        task: "Every team member knows tonight’s special with full description",
        checked: false,
      },
      {
        id: 17,
        task: "Staff can tell restaurant’s founding story in 60 seconds",
        checked: false,
      },
    ],
  },
  {
    name: "Guest Recovery",
    color: "oklch(0.45 0.18 25)",
    bg: "oklch(0.55 0.2 25 / 0.07)",
    border: "oklch(0.55 0.2 25 / 0.2)",
    items: [
      {
        id: 18,
        task: "Recovery protocol exists: acknowledge, apologize, resolve",
        checked: false,
      },
      {
        id: 19,
        task: "Every team member knows the recovery protocol: no escalation confusion",
        checked: false,
      },
      {
        id: 20,
        task: "Last 5 negative reviews have a personal, genuine response",
        checked: false,
      },
      {
        id: 21,
        task: "No table leaves unhappy: manager circulates before check drop",
        checked: false,
      },
    ],
  },
];

export function RestaurantTafferSection() {
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
    <section id="taffer" data-ocid="restaurant-guide.taffer_section">
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
        Bar Rescue Principles Applied to Your Restaurant
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer’s no-excuses framework, applied directly to NYC restaurant
        operations. Brutal, but effective.
      </p>

      {/* Hero Taffer banner */}
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
          &ldquo;Excuses don&rsquo;t save restaurants. Systems do.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. Applied to restaurants: if your dining room
          is struggling, the problem is systems: and systems can change. These
          four principles apply to every NYC restaurant, regardless of size,
          cuisine, or price point.
        </p>
      </div>

      {/* 4 principles */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {PRINCIPLES.map((p) => (
          <Card key={p.number}>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: "oklch(0.55 0.14 85)" }}
                >
                  {p.number}
                </span>
                <h3
                  className="font-display font-semibold text-sm"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                >
                  {p.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive rescue checklist */}
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        Rescue Checklist: 6-Category Restaurant Audit
      </h3>

      {/* Progress bar */}
      <div className="mb-5">
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
    </section>
  );
}
