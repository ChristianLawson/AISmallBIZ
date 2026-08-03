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

const INITIAL_CATEGORIES: Category[] = [
  {
    name: "Brand Identity",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Brand identity statement written and shared with all staff ('We are __ for __')",
        checked: false,
      },
      {
        id: 2,
        task: "Visual identity consistent across store, website, Instagram, and packaging",
        checked: false,
      },
      {
        id: 3,
        task: "Brand story visible on website and social media profiles",
        checked: false,
      },
      {
        id: 4,
        task: "Staff able to articulate the brand in one sentence without hesitation",
        checked: false,
      },
    ],
  },
  {
    name: "Store Experience",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 5,
        task: "Window display updated this month: compelling, not cluttered",
        checked: false,
      },
      {
        id: 6,
        task: "Store entrance clear and inviting: 10-second test passed",
        checked: false,
      },
      {
        id: 7,
        task: "Lighting and layout drive customers toward featured products",
        checked: false,
      },
      {
        id: 8,
        task: "Every customer greeted within 30 seconds of entering",
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
        id: 9,
        task: "Google Business Profile updated this week with photo and post",
        checked: false,
      },
      {
        id: 10,
        task: "E-commerce site live with accurate inventory and pricing",
        checked: false,
      },
      {
        id: 11,
        task: "Instagram/TikTok posted minimum 4x this week",
        checked: false,
      },
      {
        id: 12,
        task: "All online reviews responded to: positive and negative",
        checked: false,
      },
    ],
  },
  {
    name: "Inventory & Product",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 13,
        task: "Slow-moving inventory identified and actioned (markdown, bundle, or return)",
        checked: false,
      },
      {
        id: 14,
        task: "Top 20% SKUs by revenue identified and featured prominently on the floor",
        checked: false,
      },
      {
        id: 15,
        task: "New arrivals photographed and posted within 24 hours of landing",
        checked: false,
      },
      {
        id: 16,
        task: "Product stories documented: where it is from, why you bought it, who it is for",
        checked: false,
      },
    ],
  },
  {
    name: "Customer Retention",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 17,
        task: "Loyalty program active and promoted to every customer at checkout",
        checked: false,
      },
      {
        id: 18,
        task: "Top 20% spenders identified and receiving VIP treatment and early access",
        checked: false,
      },
      {
        id: 19,
        task: "Win-back outreach active for customers not seen in 60+ days",
        checked: false,
      },
      {
        id: 20,
        task: "Post-purchase follow-up sent to every first-time customer within 48 hours",
        checked: false,
      },
    ],
  },
];

export function RetailRescueChecklist() {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);

  const toggle = (catIdx: number, itemId: number) => {
    setCategories((prev) =>
      prev.map((cat, ci) =>
        ci === catIdx
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

  const totalChecked = categories.reduce(
    (sum, cat) => sum + cat.items.filter((i) => i.checked).length,
    0,
  );
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <section id="checklist" data-ocid="retail-guide.checklist_section">
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
        Retail Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-2 max-w-2xl">
        20 non-negotiable actions across 5 categories. Run this audit on your
        store every Monday morning.
      </p>

      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="flex-1 h-2 rounded-full overflow-hidden"
          style={{ background: "oklch(0.9 0.006 75)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${totalItems > 0 ? (totalChecked / totalItems) * 100 : 0}%`,
              background: "oklch(0.28 0.12 330)",
            }}
          />
        </div>
        <span
          className="text-xs font-semibold shrink-0"
          style={{ color: "oklch(0.28 0.12 330)" }}
        >
          {totalChecked}/{totalItems} complete
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, ci) => (
          <div
            key={cat.name}
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${cat.border}` }}
            data-ocid={`retail-guide.checklist_category.${ci + 1}`}
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
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggle(ci, item.id)}
                  className="flex items-start gap-2.5 text-left w-full"
                  data-ocid={`retail-guide.checklist_item.${item.id}`}
                >
                  <CheckSquare
                    size={14}
                    className="mt-0.5 shrink-0 transition-colors duration-200"
                    style={{
                      color: item.checked ? cat.color : "oklch(0.75 0.01 50)",
                    }}
                  />
                  <p
                    className="text-xs leading-relaxed transition-colors duration-200"
                    style={{
                      color: item.checked
                        ? "oklch(0.35 0.02 50)"
                        : "oklch(0.5 0.01 50)",
                      textDecoration: item.checked ? "line-through" : "none",
                    }}
                  >
                    {item.task}
                  </p>
                </button>
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
          checklist and laminate it. Post it in your back-of-house or stockroom.
          Run it every Monday morning before the store opens.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth"
          style={{
            background: "oklch(0.28 0.12 330)",
            color: "oklch(0.97 0.006 75)",
          }}
          data-ocid="retail-guide.print_checklist_button"
        >
          Print Checklist
        </button>
      </div>
    </section>
  );
}
