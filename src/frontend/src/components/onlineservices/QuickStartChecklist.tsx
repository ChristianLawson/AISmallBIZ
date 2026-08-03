import { Badge } from "@/components/ui/badge";
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";

const CHECKLIST_ITEMS = [
  {
    phase: "Before You Form",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.18)",
    tasks: [
      "Search your business name availability in your state (Secretary of State website)",
      "Check if your preferred domain name is available (GoDaddy or Namecheap)",
      "Decide your business structure: LLC for most local businesses, C-Corp for startups raising capital",
      "Choose your state of formation (your home state for local businesses; Delaware for startups)",
      "Gather required info: business name, address, registered agent, member names",
    ],
  },
  {
    phase: "Formation (Day 1)",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.06)",
    border: "oklch(0.78 0.12 85 / 0.18)",
    tasks: [
      "Form your entity via ZenBusiness, Swyft, Northwest, or Stripe Atlas",
      "Apply for your EIN (included in most formation packages or IRS.gov for free)",
      "Set up registered agent service (included or add-on)",
      "Receive and save your Articles of Organization / Incorporation",
      "Get a certified copy if your bank requires it",
    ],
  },
  {
    phase: "Banking & Payments (Week 1)",
    color: "oklch(0.50 0.14 200)",
    bg: "oklch(0.50 0.14 200 / 0.06)",
    border: "oklch(0.50 0.14 200 / 0.18)",
    tasks: [
      "Open a business bank account (Mercury, Chase, or use Stripe Atlas for bundled banking)",
      "Set up Stripe, Square, or PayPal for payment processing",
      "Order a business debit card and/or business credit card",
      "Never commingle personal and business funds from day one",
      "Set up accounting software (QuickBooks, Wave, or FreshBooks)",
    ],
  },
  {
    phase: "Legal Documents (Week 2)",
    color: "oklch(0.42 0.15 290)",
    bg: "oklch(0.42 0.15 290 / 0.06)",
    border: "oklch(0.42 0.15 290 / 0.18)",
    tasks: [
      "Draft an Operating Agreement (LLC) or Bylaws (Corp): Rocket Lawyer has templates",
      "Create a standard client contract or service agreement via Rocket Lawyer",
      "Set up an NDA template for any vendors or employees with access to sensitive info",
      "Register your trademark with MyCorporation if your brand name is core to the business",
      "Review your state-specific business license requirements",
    ],
  },
  {
    phase: "Talent & Operations (Month 1)",
    color: "oklch(0.45 0.15 145)",
    bg: "oklch(0.55 0.16 145 / 0.06)",
    border: "oklch(0.55 0.16 145 / 0.18)",
    tasks: [
      "Order your logo from Fiverr (search 'minimalist logo' + your industry)",
      "Commission a basic website from Fiverr or build on Squarespace/Wix",
      "Set up Gusto before your first employee or contractor payment",
      "Create social media profiles on Instagram, Facebook, and Google Business Profile",
      "Schedule your compliance calendar reminders (annual reports, state renewals)",
    ],
  },
  {
    phase: "Brand & Marketing (Month 2-3)",
    color: "oklch(0.38 0.1 50)",
    bg: "oklch(0.45 0.12 50 / 0.06)",
    border: "oklch(0.45 0.12 50 / 0.18)",
    tasks: [
      "Define your brand voice, colors, and style guide (even a simple one-pager)",
      "Hire a Fiverr freelancer to build branded social media templates",
      "Set up Google Analytics and Google Search Console for your website",
      "Claim and fully optimize your Google Business Profile (add photos, hours, description)",
      "Post your first 5 pieces of content: introduce yourself, your team, and your story",
    ],
  },
];

export function QuickStartChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalTasks = CHECKLIST_ITEMS.reduce(
    (sum, phase) => sum + phase.tasks.length,
    0,
  );
  const completedTasks = checked.size;
  const progressPct = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section id="checklist" data-ocid="online-services-guide.checklist_section">
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
          Section 7
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Quick-Start Launch Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        30 tasks across 6 phases: from formation to your first marketing push.
        Check off each step as you complete it.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.2)",
        }}
        data-ocid="online-services-guide.checklist_progress"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            {completedTasks} of {totalTasks} tasks completed
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "oklch(0.28 0.12 330)" }}
          >
            {progressPct}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background:
                "linear-gradient(90deg, oklch(0.28 0.12 330) 0%, oklch(0.62 0.22 18) 100%)",
            }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {CHECKLIST_ITEMS.map((phase) => (
          <div
            key={phase.phase}
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${phase.border}` }}
          >
            <div className="px-5 py-3" style={{ background: phase.bg }}>
              <h3
                className="font-display text-sm font-bold uppercase tracking-wide"
                style={{ color: phase.color }}
              >
                {phase.phase}
              </h3>
            </div>
            <div className="divide-y divide-border">
              {phase.tasks.map((task, taskIdx) => {
                const key = `${phase.phase}-${taskIdx}`;
                const isChecked = checked.has(key);
                return (
                  <label
                    key={task}
                    className="flex items-start gap-3 px-5 py-3 cursor-pointer hover:bg-muted/30 transition-colors duration-150 min-h-11"
                    data-ocid={`online-services-guide.checklist_item.${phase.phase.replace(/\s+/g, "_").toLowerCase()}.${taskIdx + 1}`}
                  >
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => toggle(key)}
                      />
                      <div
                        className="w-4.5 h-4.5 rounded border-2 flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: isChecked
                            ? phase.color
                            : "oklch(0.75 0.01 280)",
                          background: isChecked ? phase.color : "transparent",
                          width: "18px",
                          height: "18px",
                        }}
                      >
                        {isChecked && (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            aria-label="Checked"
                            role="img"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: isChecked
                          ? "oklch(0.65 0.01 280)"
                          : "oklch(0.3 0.02 280)",
                        textDecoration: isChecked ? "line-through" : "none",
                      }}
                    >
                      {task}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
