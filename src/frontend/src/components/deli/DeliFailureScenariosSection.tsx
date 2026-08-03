import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertOctagon, BookOpen } from "lucide-react";

const SCENARIOS = [
  {
    number: 1,
    title: "Google Ads with No Landing Page",
    symptom: "Spent $500-$2,000 on Google Ads, got clicks, zero new customers.",
    rootCause:
      "You sent paid traffic to a listing with 3 photos, a 3.1-star rating, and no clear reason to choose you. Money thrown into a broken funnel.",
    tafferFix:
      "Kill the ads immediately. Spend 30 days optimizing your Google Business Profile first: complete every field, add 15+ photos, respond to every review. Then run ads to a profile that converts.",
    reidNote:
      "A weak digital presence is a brand that says 'I do not care.' Fix the brand foundation before spending on amplification. Every dollar of ad spend should land on something worth landing on.",
  },
  {
    number: 2,
    title: "Over-Ordering Perishables",
    symptom:
      "Food waste running 35%+. Trash bins full of unsold product every night.",
    rootCause:
      "No par level system. Ordering based on gut feel, not data. Result: margin bleeding out the back door, not the front register.",
    tafferFix:
      "Implement a par level system this week. Track every category daily for 2 weeks. Set par levels based on actual consumption +15% buffer. Review and adjust weekly. Food waste should be under 8%.",
    reidNote:
      "Waste signals incompetence to your entire team. When staff see waste tolerated, they assume nothing is measured. A tight operation is a brand signal: it tells everyone you run a serious kitchen.",
  },
  {
    number: 3,
    title: "Wrong Location Read",
    symptom: "High foot traffic, but the wrong demographic. Nobody buying.",
    rootCause:
      "Signed a lease based on pedestrian count alone without analyzing who those pedestrians are: their income, age, and buying habits do not match your menu or price point.",
    tafferFix:
      "Before signing any lease: do a 5-day traffic audit. Stand outside for 2 hours at 8am, 12pm, and 3pm each day. Count the foot traffic AND assess who they are. Your deli menu must match the neighborhood's demographic reality.",
    reidNote:
      "Your brand must serve the community it is in. A $22 gourmet pastrami sandwich in a working-class neighborhood is not brave: it is disconnected. Know your people before you build for them.",
  },
  {
    number: 4,
    title: "Staff with No Ownership Mentality",
    symptom:
      "The deli runs well when you are there. Everything falls apart when you leave.",
    rootCause:
      "You have never built a system. Staff are doing tasks, not owning outcomes. No accountability structure, no clear standards, no consequence for slipping.",
    tafferFix:
      "Taffer's accountability system: (1) Define 5 non-negotiable standards every shift. (2) Post them visibly. (3) Hold a 5-minute pre-shift briefing every day reviewing them. (4) Celebrate compliance. (5) Address failure immediately, never later.",
    reidNote:
      "Staff who feel trusted become brand advocates. Give your best person a title, a responsibility, and a reason to care. Pride of ownership is contagious: build it intentionally.",
  },
  {
    number: 5,
    title: "Menu Too Large",
    symptom:
      "60+ menu items. Customers take 8 minutes to decide. Half the items are never ordered.",
    rootCause:
      "More items = slower service, more prep complexity, more waste, and no clear identity. A 60-item menu says we cannot make a decision. Customers want guidance, not a novel.",
    tafferFix:
      "Cut to 30 hero items immediately. Run your POS data: what are the bottom 20 sellers? Remove them. What are the top 10? Feature them prominently. A focused menu is faster, cheaper, and more profitable.",
    reidNote:
      "Katz's Deli built a $10M brand on a handful of iconic items. Your menu is a brand statement. 30 items done perfectly beats 60 items done adequately every single time.",
  },
];

export function DeliFailureScenariosSection() {
  return (
    <section
      id="failure-scenarios"
      data-ocid="deli-guide.failure_scenarios_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-50">
          <AlertOctagon size={20} className="text-red-600" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
          Failure Scenarios
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        The 5 Ways NYC Delis Fail: Diagnosed
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Taffer has walked into hundreds of failing businesses. The patterns
        repeat. Know them before they kill your deli.
      </p>

      <div className="space-y-6">
        {SCENARIOS.map((s) => (
          <Card
            key={s.number}
            className="overflow-hidden border-l-4"
            style={{ borderLeftColor: "#6366F1" }}
            data-ocid={`deli-guide.failure_scenario.${s.number}`}
          >
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm shrink-0">
                    #{s.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {s.title}
                      </h3>
                      <Badge className="text-[11px] px-2 py-0.5 bg-red-50 text-red-700 border border-red-200">
                        Taffer Diagnosis
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                        <div className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">
                          Symptom
                        </div>
                        <p className="text-xs text-foreground">{s.symptom}</p>
                      </div>
                      <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                        <div className="text-xs font-bold text-red-700 mb-1 uppercase tracking-wide">
                          Root Cause
                        </div>
                        <p className="text-xs text-foreground">{s.rootCause}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#EEF2FF] border border-[#6366F1]/30 p-4 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertOctagon size={14} className="text-[#6366F1]" />
                    <span className="text-xs font-bold text-[#6366F1] uppercase tracking-wide">
                      Taffer's Fix
                    </span>
                  </div>
                  <p className="text-sm text-foreground">{s.tafferFix}</p>
                </div>
                <div className="rounded-xl bg-muted/40 border border-border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                      Reid Holmes: Brand Recovery
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {s.reidNote}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
