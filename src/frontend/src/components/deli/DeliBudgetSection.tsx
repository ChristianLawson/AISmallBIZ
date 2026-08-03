import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const STARTUP_COSTS = [
  {
    item: "Commercial Kitchen Equipment (used)",
    low: 8000,
    high: 25000,
    notes: "Slicer, reach-in coolers, sandwich prep table, steam table",
  },
  {
    item: "Lease Deposits (first + last + security)",
    low: 12000,
    high: 45000,
    notes: "Highly variable by NYC borough and neighborhood",
  },
  {
    item: "Build-Out / Renovation",
    low: 15000,
    high: 80000,
    notes: "Counters, flooring, signage, exhaust systems",
  },
  {
    item: "Initial Inventory",
    low: 3000,
    high: 8000,
    notes: "2-week supply of meats, cheeses, produce, bread, drinks",
  },
  {
    item: "Permits & Licenses",
    low: 500,
    high: 2000,
    notes: "DOHMH permit, DBA filing, fire inspection",
  },
  {
    item: "Insurance (first year)",
    low: 2000,
    high: 5000,
    notes: "General liability + workers comp",
  },
  {
    item: "POS System",
    low: 500,
    high: 3000,
    notes: "Toast, Square, or Clover; monthly SaaS fees extra",
  },
  {
    item: "Marketing Launch (first 90 days)",
    low: 1000,
    high: 5000,
    notes: "Signage, social ads, Google optimization, photography",
  },
  {
    item: "Working Capital Reserve",
    low: 10000,
    high: 30000,
    notes: "3 months of operating expenses as a safety net",
  },
];

const IMPROVEMENT_COSTS = [
  {
    item: "Google Business Profile Optimization",
    low: 0,
    high: 500,
    notes: "DIY: free. Hiring a local SEO consultant: $300-$500",
  },
  {
    item: "Menu Redesign & Printing",
    low: 200,
    high: 800,
    notes: "New menu boards and printed menus; Canva or designer",
  },
  {
    item: "Staff Training (Taffer 3-Step)",
    low: 0,
    high: 1000,
    notes: "Owner-led: free. External trainer: $500-$1,000",
  },
  {
    item: "Social Media Content Shoot",
    low: 0,
    high: 500,
    notes: "Phone camera: free. Professional photographer: $300-$500",
  },
  {
    item: "Loyalty Program Setup",
    low: 0,
    high: 200,
    notes: "Punch cards: ~$50. Digital loyalty app: $50-$200/mo",
  },
  {
    item: "Women's Event Launch",
    low: 100,
    high: 500,
    notes: "Light catering, simple decor, printed invites",
  },
  {
    item: "First Paid Social Ad Campaign",
    low: 150,
    high: 600,
    notes: "$5/day x 30 days; plus optional creative design",
  },
];

const fmt = (n: number) => `$${n.toLocaleString()}`;

export function DeliBudgetSection() {
  const startupLow = STARTUP_COSTS.reduce((sum, r) => sum + r.low, 0);
  const startupHigh = STARTUP_COSTS.reduce((sum, r) => sum + r.high, 0);
  const improveLow = IMPROVEMENT_COSTS.reduce((sum, r) => sum + r.low, 0);
  const improveHigh = IMPROVEMENT_COSTS.reduce((sum, r) => sum + r.high, 0);

  return (
    <section id="budget-breakdown" data-ocid="deli-guide.budget_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <DollarSign size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Budget Breakdown
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        NYC Deli Budget Breakdown
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Whether you are opening from scratch or improving an existing operation,
        these are the real numbers. No surprises.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-lg font-bold text-foreground">
                Startup Costs
              </div>
              <Badge className="bg-[#EEF2FF] text-[#6366F1] border border-[#6366F1]/30">
                {fmt(startupLow)} - {fmt(startupHigh)}
              </Badge>
            </div>
            <div className="space-y-3">
              {STARTUP_COSTS.map((r) => (
                <div
                  key={r.item}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-foreground">
                      {r.item}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {r.notes}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#6366F1] whitespace-nowrap">
                    {fmt(r.low)}-{fmt(r.high)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">
                Total Range
              </span>
              <span className="font-display text-lg font-bold text-[#6366F1]">
                {fmt(startupLow)} - {fmt(startupHigh)}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-lg font-bold text-foreground">
                Improvement Costs
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200">
                {fmt(improveLow)} - {fmt(improveHigh)}
              </Badge>
            </div>
            <div className="space-y-3">
              {IMPROVEMENT_COSTS.map((r) => (
                <div
                  key={r.item}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-foreground">
                      {r.item}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {r.notes}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-700 whitespace-nowrap">
                    {fmt(r.low)}-{fmt(r.high)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">
                Total Range
              </span>
              <span className="font-display text-lg font-bold text-emerald-700">
                {fmt(improveLow)} - {fmt(improveHigh)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-2xl border border-[#6366F1]/30 bg-[#EEF2FF] p-5">
        <div className="font-display text-base font-bold text-foreground mb-2">
          Taffer's Budget Rule
        </div>
        <p className="text-sm text-foreground">
          Never open a food business without 3 months of operating expenses in
          reserve. It takes 60-90 days to build the customer base your
          projections assume. If you run out of cash on Day 45, it does not
          matter how good the pastrami is.
        </p>
      </div>
    </section>
  );
}
