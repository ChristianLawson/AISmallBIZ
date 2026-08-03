import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckSquare,
  ClipboardCheck,
  Clock,
  DollarSign,
  Lightbulb,
  TrendingDown,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

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
    name: "Week 1: Stop the Bleeding",
    color: ACCENT,
    bg: "oklch(0.65 0.18 65 / 0.07)",
    border: "oklch(0.65 0.18 65 / 0.2)",
    items: [
      {
        id: 1,
        task: "Audit all vendor contracts: renegotiate or switch any supplier charging above-market rates",
      },
      {
        id: 2,
        task: "Cut menu items with food cost over 32% or that sell fewer than 5 per week",
      },
      {
        id: 3,
        task: "Implement portion control: weigh cheese, measure sauce, standardize toppings",
      },
      {
        id: 4,
        task: "Reduce staff hours to match actual traffic patterns: most shops overstaff Tuesday-Thursday",
      },
      {
        id: 5,
        task: "Pause all non-essential spending: decor, equipment, marketing experiments",
      },
      {
        id: 6,
        task: "Collect all outstanding accounts receivable (catering invoices, corporate clients)",
      },
    ],
  },
  {
    name: "Week 2: Menu Reboot",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    items: [
      {
        id: 7,
        task: "Identify your top 5 selling items: these are your anchors. Promote them heavily.",
      },
      {
        id: 8,
        task: "Create one 'signature' specialty pie that costs $4-5 to make and sells for $24-28",
      },
      {
        id: 9,
        task: "Add 2 high-margin sides: garlic knots ($0.40 cost, $5 price) and breadsticks",
      },
      {
        id: 10,
        task: "Design a 'value bundle' that increases average ticket by $4-6 while maintaining 60%+ margin",
      },
      {
        id: 11,
        task: "Remove any item that takes longer than 8 minutes to prep during rush",
      },
      {
        id: 12,
        task: "Photograph every remaining menu item in natural light: update all digital menus",
      },
    ],
  },
  {
    name: "Week 3: Staff Retraining",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 13,
        task: "Hold daily 10-minute pre-shift huddles: specials, upsell targets, portion reminders",
      },
      {
        id: 14,
        task: "Train every counter person to ask: 'Would you like drinks with that?' (40% attach rate)",
      },
      {
        id: 15,
        task: "Role-play complaint handling: acknowledge, apologize, resolve, follow up",
      },
      {
        id: 16,
        task: "Set speed targets: slice service under 3 min, whole pie under 12 min from order to box",
      },
      {
        id: 17,
        task: "Create a 'script' for phone orders: greeting, upsell, confirmation, thank you",
      },
      {
        id: 18,
        task: "Identify and terminate any staff member who is toxic to team morale: one bad apple spoils the pie",
      },
    ],
  },
  {
    name: "Week 4: Customer Reactivation",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 19,
        task: "Launch a 'We Miss You' campaign: email/SMS past customers with 20% off their next visit",
      },
      {
        id: 20,
        task: "Post daily on Instagram and Facebook for 30 days straight: document the turnaround",
      },
      {
        id: 21,
        task: "Host a 'Grand Reopening' event with free samples, live music, and local press invite",
      },
      {
        id: 22,
        task: "Solicit Google reviews from every happy customer: aim for 20 new reviews in 30 days",
      },
      {
        id: 23,
        task: "Partner with one local business for cross-promotion (brewery, gym, bookstore)",
      },
      {
        id: 24,
        task: "Track daily revenue and compare to 30 days prior: celebrate small wins with staff",
      },
    ],
  },
  {
    name: "Ongoing: Systems & Monitoring",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 25,
        task: "Weekly P&L review: food cost, labor cost, average ticket, customer count",
      },
      {
        id: 26,
        task: "Monthly menu analysis: top/bottom performers, margin by item, waste tracking",
      },
      {
        id: 27,
        task: "Quarterly staff performance reviews: speed, accuracy, customer feedback, upsell rate",
      },
      {
        id: 28,
        task: "Annual vendor renegotiation: never accept the first quote, always get 3 bids",
      },
    ],
  },
];

const TURNAROUND_METRICS = [
  {
    metric: "Food Cost %",
    target: "Under 25%",
    redFlag: "Over 30%",
    action: "Portion control + menu simplification + vendor renegotiation",
    icon: Utensils,
  },
  {
    metric: "Labor Cost %",
    target: "22-28%",
    redFlag: "Over 32%",
    action: "Schedule to traffic patterns, not habit. Cut slow-shift overlap.",
    icon: Users,
  },
  {
    metric: "Average Ticket",
    target: "$14-18",
    redFlag: "Under $12",
    action: "Upsell training + bundle creation + high-margin sides promotion",
    icon: DollarSign,
  },
  {
    metric: "Daily Customer Count",
    target: "Growing week-over-week",
    redFlag: "Declining for 3+ weeks",
    action: "Reactivation campaign + social media blitz + local partnerships",
    icon: TrendingUp,
  },
  {
    metric: "Google Rating",
    target: "4.3+ stars",
    redFlag: "Under 4.0 stars",
    action: "Review solicitation + complaint resolution + operational fixes",
    icon: TrendingDown,
  },
];

const COST_CUTTING_TACTICS = [
  {
    area: "Ingredients",
    tactics: [
      "Switch to block cheese and shred in-house (saves 15-20% vs. pre-shredded)",
      "Buy flour in 50lb bags instead of 25lb (bulk discount)",
      "Negotiate with 3 suppliers simultaneously: leverage competition",
      "Reduce topping variety: 8 quality toppings beat 20 mediocre ones",
    ],
    savings: "$500-1,500/month",
  },
  {
    area: "Labor",
    tactics: [
      "Cross-train staff: every person can make dough, work the oven, and run the register",
      "Schedule based on sales data, not tradition. Tuesday lunch may need 2 people, not 4.",
      "Use part-time high school students for weekend rushes (lower wage, flexible hours)",
      "Eliminate overtime through better scheduling: overtime is a scheduling failure",
    ],
    savings: "$800-2,000/month",
  },
  {
    area: "Operations",
    tactics: [
      "Fix oven temperature consistency: uneven cooking = waste + remakes",
      "Implement FIFO strictly: food waste is money in the trash",
      "Reduce delivery radius to 3 miles: shorter routes = less gas + faster delivery",
      "Renegotiate waste removal, linen service, and equipment leases annually",
    ],
    savings: "$300-800/month",
  },
];

export function PizzaShopRescueChecklist() {
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
      className="space-y-14"
      data-ocid="pizzashop-guide.checklist_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_BG }}
          >
            <ClipboardCheck size={20} style={{ color: ACCENT }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Rescue Checklist
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          30-Day Pizza Shop Turnaround Plan
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Jon Taffer's rescue methodology adapted for pizza shops: stop the
          bleeding, reboot the menu, retrain the staff, and reactivate
          customers. This 28-item checklist is your daily action plan. Check
          them off as you complete them.
        </p>
      </div>

      {/* Taffer Hero Quote */}
      <div
        className="rounded-2xl p-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(120, 53, 15, 0.92) 0%, rgba(146, 64, 14, 0.9) 100%)",
        }}
      >
        <AlertTriangle
          size={28}
          className="mb-3"
          style={{ color: "#FCD34D" }}
        />
        <blockquote
          className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3"
          style={{ color: "#FEF3C7" }}
        >
          &ldquo;I do not rescue bars. I rescue owners. The bar is just the
          symptom.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "#FDE68A" }}>
          : Jon Taffer, Bar Rescue. For pizza shops: if your food cost is over
          30%, that is an ownership decision. If your staff does not upsell,
          that is a training decision. The culture you tolerate is the culture
          you create.
        </p>
      </div>

      {/* Progress bar */}
      <div
        className="rounded-xl p-4"
        style={{
          background: ACCENT_LIGHT,
          border: `1px solid ${ACCENT}30`,
        }}
        data-ocid="pizzashop-guide.checklist_progress"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            {checkedCount} of {totalItems} completed
          </span>
          <span className="text-sm font-bold" style={{ color: ACCENT }}>
            {progress}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: ACCENT,
            }}
          />
        </div>
      </div>

      {/* Checklist */}
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
                    data-ocid={`pizzashop-guide.checklist.item.${item.id}`}
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
                    className="text-xs text-muted-foreground leading-relaxed"
                    style={{
                      textDecoration: checked.has(item.id)
                        ? "line-through"
                        : undefined,
                      opacity: checked.has(item.id) ? 0.5 : 1,
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

      {/* Turnaround Metrics */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Turnaround Metrics: Know Your Numbers
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          These five metrics tell you if your turnaround is working. Measure
          them weekly. Trend them monthly. Act on any metric outside the target
          for two consecutive weeks.
        </p>
        <div className="space-y-3">
          {TURNAROUND_METRICS.map((m, i) => (
            <Card
              key={m.metric}
              data-ocid={`pizzashop-guide.rescue.metric.${i + 1}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="flex-none w-14 flex items-center justify-center"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <m.icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-sm">
                        {m.metric}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: ACCENT_LIGHT,
                          color: ACCENT,
                        }}
                      >
                        Target: {m.target}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 mb-1">
                      <span
                        className="text-xs font-bold shrink-0"
                        style={{ color: "#DC2626" }}
                      >
                        RED FLAG:
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {m.redFlag}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span
                        className="text-xs font-bold shrink-0"
                        style={{ color: ACCENT }}
                      >
                        ACTION:
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {m.action}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cost Cutting */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <DollarSign size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Cost-Cutting Tactics That Do not Hurt Quality
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Cutting costs does not mean cutting corners. These tactics reduce
          waste and inefficiency while preserving: or even improving: the
          customer experience.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {COST_CUTTING_TACTICS.map((area, i) => (
            <Card
              key={area.area}
              data-ocid={`pizzashop-guide.rescue.cost_cut.${i + 1}`}
            >
              <CardContent className="p-5 space-y-3">
                <h4 className="font-semibold text-foreground">{area.area}</h4>
                <ul className="space-y-2">
                  {area.tactics.map((tactic) => (
                    <li
                      key={tactic}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span
                        className="mt-0.5 shrink-0"
                        style={{ color: ACCENT }}
                      >
                        →
                      </span>
                      {tactic}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg p-2 text-[12px] font-medium"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}
                >
                  Potential savings: {area.savings}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Print/download CTA */}
      <div
        className="rounded-xl p-4 flex items-center justify-between gap-4"
        style={{
          background: ACCENT_LIGHT,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Pro tip:</strong> Print this
          checklist and laminate it. Post it in your back-of-house. Run it every
          Monday morning. The shops that survive are the shops that measure.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-smooth"
          style={{
            background: ACCENT,
            color: "#ffffff",
          }}
          data-ocid="pizzashop-guide.print_checklist_button"
        >
          Print Checklist
        </button>
      </div>
    </section>
  );
}
