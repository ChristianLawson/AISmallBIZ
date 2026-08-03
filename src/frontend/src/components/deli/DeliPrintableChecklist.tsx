import { Badge } from "@/components/ui/badge";
import { Printer } from "lucide-react";

type Priority = "Do This Week" | "This Month" | "This Quarter";

const CHECKLIST_GROUPS: Array<{
  category: string;
  items: Array<{ text: string; priority: Priority }>;
}> = [
  {
    category: "Operations",
    items: [
      {
        text: "FIFO inventory system implemented and enforced",
        priority: "Do This Week",
      },
      {
        text: "Par level system set up for top 10 perishables",
        priority: "Do This Week",
      },
      {
        text: "Lunch rush protocol drilled: no chaos under pressure",
        priority: "Do This Week",
      },
      {
        text: "Daily pre-shift briefing held (5 min, 5 standards)",
        priority: "Do This Week",
      },
      {
        text: "Food waste tracked weekly: target under 8%",
        priority: "This Month",
      },
    ],
  },
  {
    category: "Branding",
    items: [
      {
        text: "Origin story written and posted on wall or counter",
        priority: "Do This Week",
      },
      {
        text: "Logo and colors consistent on all materials and bags",
        priority: "Do This Week",
      },
      {
        text: "Sandwich board updated with today's specials every morning",
        priority: "Do This Week",
      },
      {
        text: "Staff can tell your deli's story in 60 seconds",
        priority: "This Month",
      },
    ],
  },
  {
    category: "Menu",
    items: [
      {
        text: "Today's special visible from the entrance",
        priority: "Do This Week",
      },
      { text: "Menu cut to 30 hero items maximum", priority: "This Month" },
      {
        text: "Top 3 sellers prominently featured on menu",
        priority: "Do This Week",
      },
      {
        text: "Dietary labels added (vegan, GF, low-cal)",
        priority: "This Month",
      },
      {
        text: "Bottom 10 sellers identified and removed",
        priority: "This Month",
      },
    ],
  },
  {
    category: "Digital",
    items: [
      {
        text: "Google Business Profile fully completed (all fields)",
        priority: "Do This Week",
      },
      {
        text: "15+ photos added to Google Business Profile",
        priority: "Do This Week",
      },
      {
        text: "All Google reviews responded to within 48 hrs",
        priority: "Do This Week",
      },
      {
        text: "Posting cadence: 3x/week minimum on social media",
        priority: "This Month",
      },
      { text: "Google rating at 4.0+ stars", priority: "This Month" },
    ],
  },
  {
    category: "Customer Experience",
    items: [
      {
        text: "Every customer greeted within 30 seconds of entering",
        priority: "Do This Week",
      },
      {
        text: "Top 20 regulars known by name and usual order",
        priority: "This Month",
      },
      {
        text: "Complaint recovery protocol exists and staff knows it",
        priority: "Do This Week",
      },
      { text: "Loyalty punch card launched", priority: "This Month" },
      { text: "Women's event hosted or planned", priority: "This Quarter" },
    ],
  },
  {
    category: "Legal & Compliance",
    items: [
      {
        text: "NYC Food Handler Certification for all food staff",
        priority: "Do This Week",
      },
      {
        text: "Food Service Establishment Permit posted",
        priority: "Do This Week",
      },
      {
        text: "Workers' compensation insurance active",
        priority: "Do This Week",
      },
      { text: "Sales tax registration complete", priority: "Do This Week" },
      { text: "Allergen disclosure notices posted", priority: "This Month" },
      {
        text: "General liability insurance in force",
        priority: "Do This Week",
      },
    ],
  },
];

const PRIORITY_STYLES: Record<Priority, string> = {
  "Do This Week": "bg-red-50 text-red-700 border-red-200",
  "This Month": "bg-amber-50 text-amber-700 border-amber-200",
  "This Quarter": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function DeliPrintableChecklist() {
  const handlePrint = () => window.print();

  return (
    <section
      id="printable-checklist"
      data-ocid="deli-guide.printable_checklist_section"
      className="print:px-0"
    >
      <div className="flex items-center justify-between gap-3 mb-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
            <Printer size={20} className="text-[#6366F1]" />
          </div>
          <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
            Printable Checklist
          </Badge>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          data-ocid="deli-guide.print_checklist_button"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#6366F1] transition-colors duration-200"
        >
          <Printer size={14} />
          Print Checklist
        </button>
      </div>

      <div className="print:block">
        {/* Print header */}
        <div className="hidden print:block mb-6 pb-4 border-b border-gray-300">
          <div className="text-2xl font-bold">
            AISmallBiz™: NYC Deli Rescue Checklist
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Curated by Christian Lawson • Frameworks: Jon Taffer (Bar Rescue) +
            Reid Holmes (Appreciated Branding)
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 print:text-2xl print:hidden">
          NYC Deli Rescue Checklist
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl print:hidden">
          Print this checklist and post it in your deli. Every checked box is a
          step toward a brand your community remembers.
        </p>

        <div className="flex flex-wrap gap-3 mb-8 print:hidden">
          {(["Do This Week", "This Month", "This Quarter"] as Priority[]).map(
            (p) => (
              <div
                key={p}
                className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border ${PRIORITY_STYLES[p]}`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background:
                      p === "Do This Week"
                        ? "#EF4444"
                        : p === "This Month"
                          ? "#F59E0B"
                          : "#10B981",
                  }}
                />
                {p}
              </div>
            ),
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          {CHECKLIST_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-5 print:rounded-none print:border print:p-3"
            >
              <div className="font-display text-base font-bold text-foreground mb-3 pb-2 border-b border-border">
                {group.category}
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded border-2 border-[#6366F1]/40 mt-0.5 shrink-0 print:border-gray-400" />
                    <div className="flex-1">
                      <span className="text-xs text-foreground">
                        {item.text}
                      </span>
                      <span
                        className={`ml-2 text-[10px] px-1.5 py-0.5 rounded border inline-block print:hidden ${PRIORITY_STYLES[item.priority]}`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reid Holmes brand note */}
        <div className="mt-8 rounded-xl border border-[#C7D2FE] bg-[#EEF2FF] p-5 text-center print:mt-6 print:border-gray-300 print:bg-gray-50">
          <p className="text-sm font-semibold text-foreground italic mb-1">
            "Every checked box is a step toward a brand your community
            remembers."
          </p>
          <p className="text-xs text-muted-foreground">
            : Reid Holmes, Appreciated Branding
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          header, nav, footer, .print\\:hidden { display: none !important; }
          body { background: white !important; }
          section { padding: 0 !important; }
        }
      `}</style>
    </section>
  );
}
