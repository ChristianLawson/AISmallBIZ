import { Badge } from "@/components/ui/badge";
import { CheckSquare, ClipboardCheck } from "lucide-react";

type CheckItem = {
  id: number;
  task: string;
};

type Category = {
  name: string;
  color: string;
  bg: string;
  border: string;
  items: CheckItem[];
};

const CHECKLIST_CATEGORIES: Category[] = [
  {
    name: "Operations",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Counters and all food-contact surfaces wiped down and sanitized every 30 minutes during service",
      },
      {
        id: 2,
        task: "FIFO (First In, First Out) inventory system followed for all proteins, breads, and produce",
      },
      {
        id: 3,
        task: "Lunch rush protocol written, trained, and drilled: every staff member knows their role",
      },
    ],
  },
  {
    name: "Branding",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 4,
        task: "Logo, colors, and fonts are consistent across bags, menus, signage, and all social profiles",
      },
      {
        id: 5,
        task: "Sandwich board updated every morning with today's specials before doors open",
      },
      {
        id: 6,
        task: "Active social media presence: minimum 3 posts per week on Instagram or TikTok",
      },
    ],
  },
  {
    name: "Menu",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 7,
        task: "Today's specials visible from the entrance: positioned before the ordering counter",
      },
      {
        id: 8,
        task: "Weekly rotating special announced 24 hours in advance on social and in-store",
      },
      {
        id: 9,
        task: "Top 3 best-selling items prominently featured with photos on the menu board",
      },
      {
        id: 10,
        task: "High-margin sides (latkes, coleslaw, pickle platter) featured alongside every sandwich",
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
        id: 11,
        task: "Google Business Profile updated with a new photo or post in the last 7 days",
      },
      {
        id: 12,
        task: "All Google reviews have received a personal response within 48 hours",
      },
      {
        id: 13,
        task: "Profile photos are current: show today's menu items, not last year's food",
      },
      {
        id: 14,
        task: "Business hours, phone, website, and delivery links are accurate and up-to-date",
      },
    ],
  },
  {
    name: "Customer Experience",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 15,
        task: "Every customer greeted by name or warmly acknowledged within 30 seconds of entering",
      },
      {
        id: 16,
        task: "Top 20 regulars known by name: and their usual order, automatically",
      },
      {
        id: 17,
        task: "Complaint recovery protocol defined: acknowledge, apologize, resolve, follow up",
      },
    ],
  },
  {
    name: "Staff Training",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 18,
        task: "Every team member can tell the story of your deli: origin, values, what makes it special",
      },
      {
        id: 19,
        task: "Every team member knows today's rotating special and can describe it with enthusiasm",
      },
      {
        id: 20,
        task: "Return and complaint policy known by all staff: no confusion, no escalation needed",
      },
    ],
  },
];

export function DeliRescueChecklist() {
  return (
    <section id="checklist" data-ocid="deli-guide.checklist_section">
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
        Deli Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        20 non-negotiable actions across 6 categories. Run this audit on your
        deli every Monday morning. If any box is unchecked, fix it before you
        open.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CHECKLIST_CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${cat.border}` }}
            data-ocid={`deli-guide.checklist_category.${cat.name.toLowerCase().replace(" ", "_")}`}
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
                  {cat.items.length} items
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2.5"
                  data-ocid={`deli-guide.checklist_item.${item.id}`}
                >
                  <CheckSquare
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: cat.color }}
                  />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Print/download CTA */}
      <div
        className="mt-6 rounded-xl p-4 flex items-center justify-between gap-4"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Pro tip:</strong> Print this
          checklist and laminate it. Post it in your back-of-house. Run it every
          Monday morning before doors open.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth"
          style={{
            background: "oklch(0.28 0.12 330)",
            color: "oklch(0.97 0.006 75)",
          }}
          data-ocid="deli-guide.print_checklist_button"
        >
          Print Checklist
        </button>
      </div>
    </section>
  );
}
