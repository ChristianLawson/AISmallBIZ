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
    name: "Legal & Registration",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    items: [
      { id: 1, task: "Business license obtained from your city or county" },
      { id: 2, task: "Sales tax permit registered with your state" },
      {
        id: 3,
        task: "Seller's permit in place if required for wholesale purchasing",
      },
      {
        id: 4,
        task: "Return and exchange policy written and posted visibly in-store",
      },
    ],
  },
  {
    name: "Operations & Technology",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    items: [
      {
        id: 5,
        task: "POS system (Square, Shopify POS, or Lightspeed) installed and trained",
      },
      {
        id: 6,
        task: "Inventory management software configured and sync with online store",
      },
      {
        id: 7,
        task: "Pricing and margin calculator used. Target 50 to 65% markup on cost",
      },
      { id: 8, task: "Supplier and wholesaler contracts reviewed and signed" },
    ],
  },
  {
    name: "Store Experience",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 9,
        task: "Fitting rooms have warm lighting, full-length mirrors, and double hooks",
      },
      {
        id: 10,
        task: "All racks organized by color and size and clearly labeled",
      },
      {
        id: 11,
        task: "Hero mannequin at entrance styled with monthly featured trend item",
      },
      {
        id: 12,
        task: "Staff greeting protocol trained. Every customer acknowledged within 5 seconds",
      },
    ],
  },
  {
    name: "Social & Digital",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 13,
        task: "Instagram Shopping enabled with products tagged and shoppable",
      },
      { id: 14, task: "TikTok Shop account created and linked to inventory" },
      {
        id: 15,
        task: "Google Business Profile claimed with 10 or more photos and accurate hours",
      },
      {
        id: 16,
        task: "Website with online store live (Shopify or Squarespace minimum)",
      },
    ],
  },
  {
    name: "Loyalty & Marketing",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 17,
        task: "Loyalty program platform set up (Square Loyalty, Smile.io, or stamp card)",
      },
      {
        id: 18,
        task: "Email list platform configured (Klaviyo or Mailchimp free tier)",
      },
      {
        id: 19,
        task: "Referral program cards printed and placed in every purchase bag",
      },
      {
        id: 20,
        task: "First micro-influencer partnership established or outreach sent",
      },
    ],
  },
  {
    name: "Women-First Experience",
    color: "oklch(0.48 0.18 330)",
    bg: "oklch(0.62 0.14 330 / 0.06)",
    border: "oklch(0.62 0.14 330 / 0.18)",
    items: [
      {
        id: 21,
        task: "Size-inclusive range (XS to 4X minimum) available on hero items",
      },
      {
        id: 22,
        task: "Women-Owned badge on Google My Business and Instagram bio (if applicable)",
      },
      {
        id: 23,
        task: "Staff styling training completed. Each staff member can style 3 outfits per hero item",
      },
      { id: 24, task: "First in-store event planned and on the calendar" },
    ],
  },
];

export function BoutiqueChecklistSection() {
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
    <section id="checklist" data-ocid="boutique-guide.checklist_section">
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
        Boutique Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        24 non-negotiable actions across 6 categories. Check them off as you
        complete them.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
        data-ocid="boutique-guide.checklist_progress"
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
                    data-ocid={`boutique-guide.checklist.item.${item.id}`}
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
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none"
                    onClick={() => toggle(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle(item.id);
                    }}
                    style={{
                      textDecoration: checked.has(item.id)
                        ? "line-through"
                        : "none",
                      opacity: checked.has(item.id) ? 0.55 : 1,
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
