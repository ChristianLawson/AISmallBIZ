import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";

const TIMELINE = [
  {
    phase: "Before",
    label: "Kosher King in Crisis",
    color: "#EF4444",
    bg: "#FEF2F2",
    border: "#FECACA",
    stats: [
      { label: "Annual Revenue", value: "$420K", trend: "down" },
      { label: "Google Rating", value: "3.1 stars", trend: "down" },
      { label: "Menu Items", value: "87 items", trend: "down" },
      { label: "Women Customers", value: "~12%", trend: "down" },
    ],
    narrative:
      "Kosher King Deli in the Bronx. Family-owned, 12 years old. Revenue has dropped 40% in 3 years. The owner, Marco Goldstein, is behind the counter from 6am to 8pm every day: and the deli still struggles. Google rating: 3.1 stars. Zero social media. The menu board lists 87 items. Women customers are rare. The few who come in do not come back.",
    tafferQuote:
      '"I do not see a deli. I see an owner who is exhausted and a business that has no identity. There is nothing here that tells me why I should choose this place over the one down the block."',
    reidInsight:
      "No brand story. No visual identity. No reason to choose them. Customers cannot describe what makes Kosher King special: because nothing is positioned to be special.",
  },
  {
    phase: "Week 1",
    label: "Taffer Arrives",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
    stats: [
      { label: "Menu Items Cut", value: "87 → 30", trend: "up" },
      { label: "Owner at Peak Hours", value: "Every day", trend: "up" },
      { label: "Staff Briefings", value: "Started Day 1", trend: "up" },
      { label: "Procedures Posted", value: "5 standards", trend: "up" },
    ],
    narrative:
      "Taffer's diagnosis is immediate: menu bloat (87 items means nothing is fresh and service is slow), owner absent during peak hours, zero accountability system for staff. Week 1 decisions: slash the menu to 30 hero items, Marco works every peak shift for 30 days, 5 non-negotiable standards posted in the kitchen, daily pre-shift briefing starts immediately.",
    tafferQuote:
      '"87 items is not a menu. It is an apology. You are telling customers you do not know who you are. Pick 30 things and be the best at them."',
    reidInsight:
      "Clarity is a brand strategy. A focused menu tells customers exactly what Kosher King is about. It is the first step toward a brand that can be described, shared, and remembered.",
  },
  {
    phase: "Month 1",
    label: "Reid Holmes Repositions",
    color: "#6366F1",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    stats: [
      { label: "Brand Tagline", value: "Since 1987", trend: "up" },
      { label: "Origin Story", value: "On the wall", trend: "up" },
      { label: "Women's Event", value: "Launched", trend: "up" },
      { label: "New Google Reviews", value: "+18 reviews", trend: "up" },
    ],
    narrative:
      "Reid Holmes repositions the brand: 'The Bronx's Original Kosher Deli: Since 1987.' A new origin story panel goes on the wall: black-and-white photos of Marco's father opening the deli in 1987, the old neighborhood, the original sandwich board. A Women's Wednesday lunch event is launched: 4 tables reserved, a local women's professional network is invited. First event: 11 attendees, 6 become regulars.",
    tafferQuote:
      '"You have a story. You just never told it. That story on the wall does more for your brand than any sign you could buy."',
    reidInsight:
      "'The Bronx's Original Kosher Deli: Since 1987' is not just a tagline. It is a claim of authenticity, history, and community belonging. It is a reason to choose Kosher King that no competitor can copy.",
  },
  {
    phase: "Month 3",
    label: "The Turnaround",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    stats: [
      { label: "Google Rating", value: "4.3 stars", trend: "up" },
      { label: "Women Customers", value: "+35%", trend: "up" },
      { label: "Revenue Recovery", value: "+28%", trend: "up" },
      { label: "After 90 Days", value: "+15% vs. baseline", trend: "up" },
    ],
    narrative:
      "By Day 90: Google rating climbed from 3.1 to 4.3 stars. Women customers up 35%: Women's Wednesday now has a waiting list. Revenue recovered 28% from its lowest point. After the full 90 days, revenue is not just back to baseline: it is 15% above the three-year high.",
    tafferQuote:
      '"Marco didn\'t need a new building. He needed to own what he already had. The story was there. The food was there. We just built a system around it."',
    reidInsight:
      "Appreciated Branding at work: a community now describes Kosher King as 'The Bronx original,' 'where they know your name,' and 'the best place for a business lunch.' That is not marketing. That is a brand.",
  },
];

export function DeliCaseStudySection() {
  return (
    <section id="case-study" data-ocid="deli-guide.case_study_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <TrendingUp size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Case Study
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        The Rescue of Kosher King Deli
      </h2>
      <p className="text-muted-foreground text-lg mb-3 max-w-2xl">
        The Bronx, NY. 12 years old. Revenue down 40%. This is the turnaround
        story.
      </p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 italic">
        <BookOpen size={14} />
        <span>
          Fictional case study illustrating real Taffer + Reid Holmes frameworks
          applied to a NYC deli rescue.
        </span>
      </div>

      <div className="space-y-8">
        {TIMELINE.map((phase, idx) => (
          <div
            key={phase.phase}
            className="relative"
            data-ocid={`deli-guide.case_study_phase.${idx + 1}`}
          >
            {idx < TIMELINE.length - 1 && (
              <div
                className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block"
                aria-hidden="true"
              />
            )}
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 z-10"
                style={{ background: phase.color }}
              >
                {phase.phase === "Before"
                  ? "0"
                  : phase.phase === "Week 1"
                    ? "W1"
                    : phase.phase === "Month 1"
                      ? "M1"
                      : "M3"}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    className="text-xs font-semibold px-3 py-1"
                    style={{
                      background: phase.bg,
                      color: phase.color,
                      border: `1px solid ${phase.border}`,
                    }}
                  >
                    {phase.phase}
                  </Badge>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {phase.label}
                  </h3>
                  {idx > 0 && (
                    <ArrowRight size={16} className="text-muted-foreground" />
                  )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {phase.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border p-3 text-center"
                      style={{
                        background: phase.bg,
                        borderColor: phase.border,
                      }}
                    >
                      <div
                        className="font-display text-lg font-bold"
                        style={{ color: phase.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="border border-border mb-3">
                  <CardContent className="p-5">
                    <p className="text-sm text-foreground leading-relaxed">
                      {phase.narrative}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-3">
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: phase.bg,
                      border: `1px solid ${phase.border}`,
                    }}
                  >
                    <div
                      className="text-xs font-bold mb-2 uppercase tracking-wide"
                      style={{ color: phase.color }}
                    >
                      Taffer Says
                    </div>
                    <p className="text-xs text-foreground italic">
                      {phase.tafferQuote}
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted/40 border border-border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={12} className="text-muted-foreground" />
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        Reid Holmes Insight
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      {phase.reidInsight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
