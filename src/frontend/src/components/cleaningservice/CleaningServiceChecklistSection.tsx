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
    name: "Legal & Insurance Setup",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    items: [
      { id: 1, task: "LLC or sole proprietorship registered with your state" },
      {
        id: 2,
        task: "EIN (Employer Identification Number) obtained from IRS.gov",
      },
      {
        id: 3,
        task: "General liability insurance minimum $1M: certificate on file",
      },
      { id: 4, task: "Surety bond obtained (typical $5,000-10,000 bond)" },
      {
        id: 5,
        task: "Workers' compensation insurance (required if you have employees)",
      },
    ],
  },
  {
    name: "Equipment & Supplies",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    items: [
      {
        id: 6,
        task: "Commercial-grade vacuum cleaner (Miele, Dyson Pro, or equivalent)",
      },
      {
        id: 7,
        task: "Microfiber cloth set: color-coded by area (kitchen, bathroom, general)",
      },
      {
        id: 8,
        task: "Eco-friendly/non-toxic cleaning product inventory stocked",
      },
      {
        id: 9,
        task: "Mop, bucket, and squeegee set: replaced every 6 months",
      },
      { id: 10, task: "Caddy or tote for organizing supplies per job" },
    ],
  },
  {
    name: "Booking & Operations",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 11,
        task: "Online booking system set up (Jobber, Housecall Pro, or Square Appointments)",
      },
      {
        id: 12,
        task: "47-point cleaning checklist created and laminated for every team member",
      },
      { id: 13, task: "Job pricing sheet finalized: 3 tiers plus add-ons" },
      { id: 14, task: "Appointment confirmation and reminder texts automated" },
      {
        id: 15,
        task: "Post-job follow-up text template set up: sent within 1 hour of completion",
      },
    ],
  },
  {
    name: "Staff & Team",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 16,
        task: "Background check completed for every team member: results on file",
      },
      {
        id: 17,
        task: "Branded uniform (shirt + hat minimum) worn on every job",
      },
      {
        id: 18,
        task: "Staff onboarding: 2-hour training on checklist, products, and client communication",
      },
      { id: 19, task: "Complaint resolution protocol documented and trained" },
    ],
  },
  {
    name: "Marketing & Reviews",
    color: "oklch(0.48 0.18 330)",
    bg: "oklch(0.62 0.14 330 / 0.06)",
    border: "oklch(0.62 0.14 330 / 0.18)",
    items: [
      {
        id: 20,
        task: "Google Business Profile complete: 10+ photos, description, hours",
      },
      { id: 21, task: "Yelp and NextDoor business profiles created" },
      {
        id: 22,
        task: "10+ Google reviews: direct link sent to all existing clients",
      },
      {
        id: 23,
        task: "Referral card designed and printed: distributed at every job",
      },
      {
        id: 24,
        task: "Instagram/TikTok accounts posting before/after content weekly",
      },
    ],
  },
  {
    name: "Client Onboarding",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.55 0.14 120 / 0.06)",
    border: "oklch(0.55 0.14 120 / 0.18)",
    items: [
      {
        id: 25,
        task: "Client intake form captures home details, product preferences, and access instructions",
      },
      { id: 26, task: "Service agreement / terms signed before first job" },
      {
        id: 27,
        task: "Insurance certificate available to share with any client on request",
      },
      { id: 28, task: "Thank-you card left after every first visit" },
    ],
  },
];

export function CleaningServiceChecklistSection() {
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
    <section
      id="checklist"
      data-ocid="cleaning-service-guide.checklist_section"
    >
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
        Cleaning Service Rescue Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        28 non-negotiable actions across 6 categories. Check them off as you
        complete them.
      </p>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: "oklch(0.55 0.18 290 / 0.06)",
          border: "1px solid oklch(0.55 0.18 290 / 0.18)",
        }}
        data-ocid="cleaning-service-guide.checklist_progress"
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
                    data-ocid={`cleaning-service-guide.checklist.item.${item.id}`}
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
                    className="text-xs leading-relaxed"
                    style={{
                      color: checked.has(item.id)
                        ? "oklch(0.65 0.01 0)"
                        : "oklch(0.35 0.01 0)",
                      textDecoration: checked.has(item.id)
                        ? "line-through"
                        : "none",
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
