import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Audit Your Permits & Licenses",
    action:
      "Identify exactly which mobile permits transfer and which brick-and-mortar permits you need to apply for. Health Department, Fire Department (oven certificate of fitness), signage permits, Certificate of Occupancy, and grease trap approval from DEP.",
    impact:
      "Prevents 3-6 months of permit delays: the #1 reason mobile-to-store transitions fail",
  },
  {
    day: 2,
    title: "Calculate Break-Even Square Footage",
    action:
      "Target 1,200-1,800 sq ft for a slice-and-pie operation, 2,500+ sq ft for full dine-in. Use the rule: rent should be under 8% of projected gross revenue. Map your current truck revenue to projected store revenue with a 40% increase assumption.",
    impact:
      "Ensures you do not sign a lease that will strangle your cash flow before you open",
  },
  {
    day: 3,
    title: "Research 3 Potential Locations",
    action:
      "Use foot-traffic data, competitor density maps, and rent-to-revenue ratios. Count passersby during lunch (11:30 AM-1:30 PM) and dinner (5:30-7:30 PM) on Tuesday, Thursday, and Saturday. Target 150+ passersby per hour at peak.",
    impact:
      "Location is 60% of your success. A great pizza shop in a bad location is a slow death",
  },
  {
    day: 4,
    title: "Price Your Menu for Brick-and-Mortar",
    action:
      'Slice should be 3.5x food cost, whole pie 3.0x, specialty items 4.0x minimum. Cheese slice cost: ~$0.85. Target sell: $3.50. Whole 18" pie cost: ~$6.80. Target sell: $22.00. Document every topping cost and upcharge.',
    impact:
      "Proper pricing on day 4 prevents the panic price hikes that alienate customers later",
  },
  {
    day: 5,
    title: "Post Your First 'From Truck to Store' Story",
    action:
      "Document the journey on Instagram and TikTok. Show your current truck setup, your dream store vision, and your challenges. Build anticipation 6-8 weeks before opening. Authenticity beats polish at this stage.",
    impact:
      "Your truck customers become your store's founding community: free, pre-qualified marketing",
  },
  {
    day: 6,
    title: "Contact NYC SBS for Free Counseling",
    action:
      "Book your appointment online at nyc.gov/business or call 888-SBS-4NYC. Request: permit navigation, financing connections for equipment loans, and legal referral network for lease review. Bring your business plan and projected financials.",
    impact:
      "NYC SBS has helped 5,000+ food businesses navigate permits. Their guidance is free and expert",
  },
  {
    day: 7,
    title: "Draft Your Equipment Priority List",
    action:
      "Tier 1 (must-have before opening): oven, prep tables, walk-in refrigeration. Tier 2 (week 1-2): dough mixer, POS system, shelving. Tier 3 (month 1-2): decor, signage, secondary equipment. Get quotes from 3 vendors per Tier 1 item.",
    impact:
      "Prevents the 'oven arrives in 16 weeks' disaster that delays opening by months",
  },
];

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

export function PizzaShopImmediateWinsSection() {
  return (
    <section
      id="immediate-wins"
      data-ocid="pizzashop-guide.immediate_wins_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: ACCENT_BG }}
        >
          <Zap size={20} style={{ color: ACCENT }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: ACCENT_LIGHT,
            color: ACCENT,
            border: `1px solid ${ACCENT}40`,
          }}
        >
          Section 1: Start Here
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        7-Day Quick Start: Truck to Store
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        One concrete action per day. Do these 7 things and you will be ahead of
        90% of mobile operators who dream of a store but never act. Each day
        builds on the last: by day 7, you have a permit roadmap, a location
        shortlist, a priced menu, a social media strategy, SBS support, and an
        equipment plan.
      </p>

      {/* Intro context card */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Why Most Mobile Operators Fail to Open a Store
        </h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
          The leap from truck to brick-and-mortar is not just about more space:
          it is a fundamentally different business model. A truck has variable
          costs (fuel, permits, commissary). A store has fixed costs (rent,
          utilities, insurance, payroll) that hit regardless of sales. Most
          operators underestimate this shift by 40-60%.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              stat: "65%",
              label: "Underestimate fixed costs",
              detail: "Rent, utilities, and insurance shock",
            },
            {
              stat: "48%",
              label: "Permit delays of 3+ months",
              detail: "Health, fire, and occupancy permits",
            },
            {
              stat: "72%",
              label: "Run out of cash before opening",
              detail: "No 6-month operating reserve",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: `1px solid ${ACCENT}20`,
              }}
            >
              <div
                className="font-display text-2xl font-bold mb-1"
                style={{ color: ACCENT }}
              >
                {item.stat}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[23px] top-0 bottom-0 w-0.5 hidden sm:block"
          style={{ background: `${ACCENT}30` }}
          aria-hidden="true"
        />

        <div className="space-y-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="relative flex gap-5 group"
              data-ocid={`pizzashop-guide.immediate_wins.item.${d.day}`}
            >
              {/* Day bubble */}
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm z-10"
                style={{
                  background: ACCENT,
                  color: "#fff",
                  boxShadow: `0 0 0 4px ${ACCENT_LIGHT}`,
                }}
              >
                Day {d.day}
              </div>

              <Card className="flex-1 border-primary/15 hover:border-primary/35 transition-all duration-200 hover:shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {d.action}
                  </p>
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{
                      background: ACCENT_LIGHT,
                      border: `1px solid ${ACCENT}30`,
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 mt-0.5"
                      style={{ color: ACCENT }}
                    />
                    <span style={{ color: ACCENT }}>
                      <strong>Expected impact:</strong> {d.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Day 7 completion CTA */}
      <div
        className="mt-8 rounded-xl p-5 flex items-start gap-4"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: ACCENT_LIGHT }}
        >
          <CheckCircle2 size={20} style={{ color: ACCENT }} />
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground mb-1">
            After Day 7: What Comes Next
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You now have a permit roadmap, a location shortlist, a priced menu,
            a social media strategy, SBS support, and an equipment plan. The
            next phase is lease negotiation and contractor selection: covered in
            the Mobile-to-Brick Transition section below. Most operators who
            complete this 7-day plan open their store 4-6 months after starting.
            Those who skip it average 12-18 months.
          </p>
        </div>
      </div>
    </section>
  );
}
