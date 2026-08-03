import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users } from "lucide-react";

const PAY_RATES = [
  {
    role: "Deli Counter Staff",
    range: "$17-$22/hr",
    notes: "NYC minimum $16; top shops pay $20+ to retain good people",
  },
  {
    role: "Sandwich Maker",
    range: "$16-$20/hr",
    notes: "Experienced prep staff command $19-$20 in Manhattan",
  },
  {
    role: "Shift Lead / Key Person",
    range: "$20-$26/hr",
    notes: "Worth every dollar: protects your margins when you are not there",
  },
  {
    role: "Manager",
    range: "$55K-$75K/yr",
    notes: "A real manager who handles vendors, scheduling, and accountability",
  },
  {
    role: "Delivery Driver",
    range: "$18-$22/hr + tips",
    notes:
      "Tips average $4-$8/delivery in NYC; total comp often exceeds $28/hr",
  },
];

const TRAINING_STEPS = [
  {
    step: 1,
    name: "Shadow Day",
    desc: "New hire observes your best staff member for a full shift. No tasks: only observation and questions. Goal: understand the standard before attempting it.",
  },
  {
    step: 2,
    name: "Test Day",
    desc: "New hire performs tasks with direct supervision. You are watching for speed, accuracy, and customer interaction. This is your quality gate: do not skip it.",
  },
  {
    step: 3,
    name: "Solo Day with Owner Audit",
    desc: "New hire runs their station independently while you observe from a distance. Audit against your 5 non-negotiable standards. Pass or re-train: no gray area.",
  },
];

const ACCOUNTABILITY = [
  "Pre-shift briefing held (5 min, 5 standards reviewed)",
  "All staff in uniform, clean, and on time",
  "Stations set up and stocked before doors open",
  "Today's specials known by every counter staff member",
  "Closing duties completed by whoever closes: no shortcuts",
  "Any customer complaint documented and escalated to owner",
  "Inventory flag raised if any item is low before it runs out",
];

const WOMEN_HIRING = [
  {
    point: "Actively recruit female staff for counter and management roles",
    detail:
      "Women customers are significantly more likely to feel welcome when they see female staff. Post openings in women's networking groups, local colleges, and on HerJobs and Women For Hire.",
  },
  {
    point: "Highlight female staff in your social media content",
    detail:
      "One post per month featuring a female team member: her story, her favorite menu item, her role. It signals inclusion and builds trust with women customers.",
  },
  {
    point: "Create a zero-tolerance policy for staff-to-customer harassment",
    detail:
      "Post it visibly. Train on it explicitly. Enforce it immediately. Your female staff's safety is non-negotiable: and they will tell everyone they know if you get it right.",
  },
];

export function DeliHiringSection() {
  return (
    <section id="hiring-staffing" data-ocid="deli-guide.hiring_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <Users size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Hiring & Staffing
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Build the Team Your Deli Deserves
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Taffer's rule: your staff is your brand. One bad hire behind the counter
        can undo 10 years of reputation. Hire deliberately.
      </p>

      <div className="rounded-2xl border border-[#6366F1]/30 bg-[#EEF2FF] p-6 mb-8">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">
          When to Hire: The Revenue Signal
        </h3>
        <p className="text-sm text-foreground mb-3">
          When you are personally covering a role for 20+ hours per week, you
          are not running a business: you are doing a job. That is the signal to
          hire. Every hour you spend behind the counter is an hour you are not
          building systems, managing quality, or growing the business.
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-[#6366F1]">
          <CheckCircle2 size={16} />
          Rule: If you are in an operational role 20+ hrs/week, hiring pays for
          itself within 60 days.
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        NYC Deli Pay Scales (2026)
      </h3>
      <div className="overflow-x-auto rounded-xl border border-border mb-8">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground">
                Role
              </th>
              <th className="text-left px-4 py-3 font-semibold text-[#6366F1]">
                Pay Range
              </th>
              <th className="text-left px-4 py-3 font-semibold text-muted-foreground">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PAY_RATES.map((r) => (
              <tr key={r.role} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">
                  {r.role}
                </td>
                <td className="px-4 py-3 font-bold text-[#6366F1]">
                  {r.range}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {r.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Taffer's 3-Step Staff Training Protocol
      </h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {TRAINING_STEPS.map((s) => (
          <Card key={s.step} className="border border-border">
            <CardContent className="p-5">
              <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm mb-3">
                {s.step}
              </div>
              <div className="font-display font-bold text-base text-foreground mb-2">
                {s.name}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Weekly Staff Accountability Checklist
      </h3>
      <div className="rounded-xl border border-border bg-card p-5 mb-8">
        <ul className="space-y-2.5">
          {ACCOUNTABILITY.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded border-2 border-[#6366F1]/50 mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-muted/30 p-5 mb-8">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
          Reid Holmes: Hire for Values, Train for Skill
        </div>
        <p className="text-sm text-foreground italic">
          "The best deli staff you will ever have did not come from a
          restaurant: they came from a community. Hire someone who cares about
          people first, then teach them your sandwich. You can train technique.
          You cannot train warmth."
        </p>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Women in the Deli: Building an Inclusive Team
      </h3>
      <div className="space-y-4 mb-6">
        {WOMEN_HIRING.map((w) => (
          <div
            key={w.point}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="font-semibold text-foreground text-sm mb-2">
              {w.point}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {w.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
        <div className="font-display text-base font-bold text-red-700 mb-2">
          Taffer's Toxic Staff Rule
        </div>
        <p className="text-sm text-red-700">
          One formal warning, documented in writing. If the behavior repeats:
          they are out. No second chances on behavior that affects the team or
          the customer. The moment you tolerate toxic behavior, you have told
          your entire staff that standards do not matter. The team is the brand.
        </p>
      </div>
    </section>
  );
}
