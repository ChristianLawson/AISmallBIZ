import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  Megaphone,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"A safe environment is a profitable environment."',
    detail:
      "Jon Taffer's data is clear: venues where customers feel unsafe have lower dwell time, lower spend, and higher churn. For pizza shops, this means clean restrooms, well-lit entrances, and visible staff. A customer who feels unsafe leaves in 8 minutes. A customer who feels safe stays 35 minutes and orders dessert.",
  },
  {
    quote: '"Pre-shift meetings are non-negotiable."',
    detail:
      "Every shift starts with a 5-minute team briefing: today's specials, any VIP guests, and a reminder of portion control standards. What gets repeated gets done. Taffer's research shows shops with daily pre-shift huddles have 23% higher average tickets.",
  },
  {
    quote: '"The owner is responsible for every failure: no excuses."',
    detail:
      "If your average ticket is under $12, that is an ownership decision: made by inaction. If your food cost is over 28%, that is an ownership decision. The culture you tolerate is the culture you create. Set the standard visibly and relentlessly.",
  },
  {
    quote: '"Lighting is not decoration: it is a business tool."',
    detail:
      "Warm atmospheric lighting extends dwell time by 20-30%. Harsh overhead fluorescents do the opposite. Your lighting investment is a direct revenue lever. Taffer's first move on every rescue: fix the lighting. It costs $500-$1,500 and pays for itself in 2 weeks.",
  },
];

const REVENUE_DIAGNOSTICS = [
  {
    metric: "Average Ticket",
    benchmark: "$12-$18",
    below: "Under $12",
    action: "Train staff on suggestive selling: drinks, sides, desserts",
    icon: DollarSign,
  },
  {
    metric: "Slice-to-Pie Ratio",
    benchmark: "2:1 or higher",
    below: "Under 2:1",
    action: "Promote whole pies with family deals and group discounts",
    icon: TrendingUp,
  },
  {
    metric: "Drink Attach Rate",
    benchmark: "40%+",
    below: "Under 30%",
    action: "Every order gets: 'What would you like to drink?'",
    icon: Users,
  },
  {
    metric: "Labor Cost",
    benchmark: "22-28%",
    below: "Over 30%",
    action: "Audit scheduling: most shops overstaff slow periods",
    icon: Clock,
  },
  {
    metric: "Food Cost",
    benchmark: "Under 28%",
    below: "Over 30%",
    action: "Portion control audit and vendor price comparison",
    icon: TrendingDown,
  },
];

const SPEED_DIAGNOSTICS = [
  {
    stage: "Slice Service",
    target: "Under 3 minutes",
    failure: "Over 3 minutes",
    cause: "Oven temperature inconsistency or understaffing at counter",
    fix: "Pre-slice strategy for peak hours; dedicated slice station",
  },
  {
    stage: "Whole Pie Prep",
    target: "Under 8 minutes",
    failure: "Over 12 minutes",
    cause: "Dough not pre-portioned or toppings station disorganized",
    fix: "Mise en place audit: every topping within arm's reach",
  },
  {
    stage: "Whole Pie Cook",
    target: "6-8 minutes (gas deck)",
    failure: "Over 10 minutes",
    cause: "Oven not at temp or overloaded with too many pies",
    fix: "Oven thermometer calibration; max 4 pies per deck at peak",
  },
  {
    stage: "Phone Orders",
    target: "Answered by 3rd ring",
    failure: "Missed calls or long hold",
    cause: "No dedicated order taker; staff multitasking during rush",
    fix: "Dedicated phone person during peak; online ordering priority",
  },
  {
    stage: "Digital Orders",
    target: "Ready within quoted time",
    failure: "Consistently late",
    cause: "Digital orders mixed with walk-in; no separate prep line",
    fix: "Separate digital prep station; stagger pickup times by 5 min",
  },
];

const ATMOSPHERE_DIAGNOSTICS = [
  {
    check: "Oven visible from entrance?",
    pass: "Yes: instant theater and trust",
    fail: "No: customers cannot see the craft; feels like a factory",
    fix: "Reposition oven or add viewing window. Cost: $500-$2,000",
  },
  {
    check: "Smell of dough and sauce at the door?",
    pass: "Yes: olfactory marketing in action",
    fail: "No: ventilation is pushing smells out the back",
    fix: "Adjust exhaust flow. The smell of baking dough increases appetite by 15%",
  },
  {
    check: "Seating comfort rated 7/10 or higher?",
    pass: "Yes: customers stay longer and spend more",
    fail: "No: hard seats, cramped spacing, or wobbly tables",
    fix: "Add cushions, fix table wobble, increase spacing by 6 inches",
  },
  {
    check: "Music volume under 70 dB?",
    pass: "Yes: conversation is comfortable",
    fail: "No: customers shout, eat faster, leave sooner",
    fix: "Volume limiter or staff training: 'If you have to raise your voice, it is too loud'",
  },
  {
    check: "Lighting warm and layered?",
    pass: "Yes: 2700K-3000K over dining, brighter over prep",
    fail: "No: flat fluorescent lighting creates a cafeteria feel",
    fix: "Replace bulbs, add pendant lights, install dimmers. Cost: $300-$800",
  },
];

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

export function PizzaShopTafferSection() {
  return (
    <section id="taffer" data-ocid="pizzashop-guide.taffer_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: ACCENT_BG }}
        >
          <Megaphone size={20} style={{ color: ACCENT }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: ACCENT_LIGHT,
            color: ACCENT,
            border: `1px solid ${ACCENT}40`,
          }}
        >
          Section 5: Diagnostics
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Taffer Diagnostics for Pizza Shops
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer's Bar Rescue framework adapted for pizza shops. Three core
        diagnostics: revenue, service speed, and atmosphere: that separate
        thriving shops from struggling ones. Taffer does not fix businesses. He
        fixes owners. These diagnostics are your mirror.
      </p>

      {/* Hero Taffer quote */}
      <div
        className="rounded-2xl p-7 mb-8"
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
          &ldquo;I don&rsquo;t rescue bars. I rescue owners. The bar is just the
          symptom.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "#FDE68A" }}>
          : Jon Taffer, Bar Rescue. For pizza shops: if your average ticket is
          under $12, that is an ownership decision. Culture you tolerate is
          culture you create.
        </p>
      </div>

      {/* Principles grid */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Taffer's Core Principles for Pizza Shops
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.quote}>
            <CardContent className="p-5">
              <blockquote
                className="font-display text-base font-semibold italic mb-2"
                style={{ color: ACCENT }}
              >
                {p.quote}
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Diagnostics */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Revenue Diagnostics
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
          The numbers that tell you if your shop is healthy or hemorrhaging.
          Measure these weekly. Trend them monthly. Act on any metric that is
          outside the benchmark for two consecutive weeks.
        </p>
        <div className="space-y-3">
          {REVENUE_DIAGNOSTICS.map((d, i) => (
            <Card
              key={d.metric}
              data-ocid={`pizzashop-guide.taffer_revenue.item.${i + 1}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="flex-none w-14 flex items-center justify-center"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <d.icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground text-sm">
                        {d.metric}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: ACCENT_LIGHT,
                          color: ACCENT,
                        }}
                      >
                        Target: {d.benchmark}
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
                        {d.below}
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
                        {d.action}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Speed Diagnostics */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Service Speed Diagnostics
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
          Speed is not about rushing: it is about removing friction. Every
          second a customer waits without clarity is a second they reconsider
          their order. Taffer's rule: if a customer waits over 3 minutes for a
          slice without acknowledgment, you have lost them.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {SPEED_DIAGNOSTICS.map((d, i) => (
            <div
              key={d.stage}
              className="rounded-xl p-4"
              style={{
                background: ACCENT_LIGHT,
                border: `1px solid ${ACCENT}30`,
              }}
              data-ocid={`pizzashop-guide.taffer_speed.item.${i + 1}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-foreground">
                  {d.stage}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(34, 197, 94, 0.12)",
                    color: "#16A34A",
                  }}
                >
                  Target: {d.target}
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold shrink-0">FAIL:</span>
                  <span className="text-muted-foreground">{d.failure}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-muted-foreground font-bold shrink-0">
                    Cause:
                  </span>
                  <span className="text-muted-foreground">{d.cause}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="font-bold shrink-0"
                    style={{ color: ACCENT }}
                  >
                    Fix:
                  </span>
                  <span className="text-muted-foreground">{d.fix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Atmosphere Diagnostics */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Atmosphere Diagnostics
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
          Atmosphere is not decoration: it is revenue engineering. Warm lighting
          and comfortable seating increase dwell time by 25-35%, which directly
          increases per-visit spend. A customer who stays 10 minutes longer
          orders dessert or a second drink 40% of the time.
        </p>
        <div className="space-y-3">
          {ATMOSPHERE_DIAGNOSTICS.map((d, i) => (
            <Card
              key={d.check}
              data-ocid={`pizzashop-guide.taffer_atmosphere.item.${i + 1}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <CheckCircle2 size={16} style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground mb-2">
                      {d.check}
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-2 text-xs">
                      <div
                        className="rounded-lg p-2"
                        style={{
                          background: "rgba(34, 197, 94, 0.08)",
                          border: "1px solid rgba(34, 197, 94, 0.25)",
                        }}
                      >
                        <span className="font-bold text-green-700">PASS:</span>{" "}
                        <span className="text-muted-foreground">{d.pass}</span>
                      </div>
                      <div
                        className="rounded-lg p-2"
                        style={{
                          background: "rgba(239, 68, 68, 0.08)",
                          border: "1px solid rgba(239, 68, 68, 0.25)",
                        }}
                      >
                        <span className="font-bold text-red-700">FAIL:</span>{" "}
                        <span className="text-muted-foreground">{d.fail}</span>
                      </div>
                      <div
                        className="rounded-lg p-2"
                        style={{
                          background: ACCENT_LIGHT,
                          border: `1px solid ${ACCENT}30`,
                        }}
                      >
                        <span className="font-bold" style={{ color: ACCENT }}>
                          FIX:
                        </span>{" "}
                        <span className="text-muted-foreground">{d.fix}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* The Three Deep Rule */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <h3 className="font-display text-xl font-bold text-foreground mb-3">
          Taffer's &ldquo;Three Deep&rdquo; Rule for Pizza Shops
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Taffer's &ldquo;three deep&rdquo; means having three revenue streams
          at all times. For pizza shops: (1) walk-in slice sales, (2) whole pie
          pickup/delivery, (3) catering or events. If any one stream drops, the
          other two carry you. Most failing shops rely on just one.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              stream: "Walk-In Slices",
              desc: "Daily cash flow, high frequency, lower ticket",
              pct: "40% of revenue",
            },
            {
              stream: "Whole Pies & Delivery",
              desc: "Family orders, higher ticket, predictable",
              pct: "45% of revenue",
            },
            {
              stream: "Catering & Events",
              desc: "High margin, bulk orders, brand exposure",
              pct: "15% of revenue",
            },
          ].map((s) => (
            <div
              key={s.stream}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: `1px solid ${ACCENT}20`,
              }}
            >
              <div
                className="font-display text-lg font-bold mb-1"
                style={{ color: ACCENT }}
              >
                {s.stream}
              </div>
              <div className="text-xs font-semibold text-foreground mb-1">
                {s.pct}
              </div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
