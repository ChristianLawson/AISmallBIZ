import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Flag, MapPin as RouteMapIcon } from "lucide-react";

const MONTH2 = [
  {
    week: "Week 2",
    tasks: [
      "Hire or identify your second key person (shift lead or assistant manager)",
      "Begin Taffer's daily pre-shift briefing: 5 minutes, 5 standards, every day",
      "Set up par level system for top 10 perishable items",
    ],
  },
  {
    week: "Week 3",
    tasks: [
      "Launch Google Business Profile posting cadence: 3 posts/week",
      "Start actively collecting Google reviews: ask every customer after checkout",
      "Post your origin story as a Google Business update",
    ],
  },
  {
    week: "Week 4",
    tasks: [
      "Launch a loyalty punch card (buy 9, get 1 free)",
      "Train second key person on your top 5 non-negotiable standards",
      "Audit menu: identify bottom 10 sellers for potential removal",
    ],
  },
  {
    week: "Weeks 5-6",
    tasks: [
      "Achieve 10 new Google reviews this month",
      "Review par levels with actual consumption data: adjust",
      "Document first staff compliance check-ins on your 5 standards",
    ],
  },
];

const MONTH3 = [
  {
    week: "Week 7",
    tasks: [
      "Launch first women's networking lunch event (4-6 tables, invite local women's professional group)",
      "Add 2 new signature items based on Month 2 sales data",
      "First paid social ad: $5/day, 1-mile radius, feature your best-performing item",
    ],
  },
  {
    week: "Week 8",
    tasks: [
      "Pitch to one local publication or neighborhood newsletter for a feature story",
      "Pull your first full monthly P&L with Taffer's 4 key ratios",
      "Review and adjust your social content based on Month 2 engagement data",
    ],
  },
  {
    week: "Weeks 9-12",
    tasks: [
      "Track 4 key ratios every week: food cost %, labor cost %, avg ticket size, covers/day",
      "Grow Google rating to 4.2+ with active review management",
      "Run a Month 3 retrospective: what worked, what did not, what is Month 4 priority?",
    ],
  },
];

export function DeliRoadmapSection() {
  return (
    <section id="roadmap-90" data-ocid="deli-guide.roadmap_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <RouteMapIcon size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          90-Day Roadmap
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        After Day 7: Your 90-Day Growth Roadmap
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The 7-Day Quick Start gets you moving. This is what you do for the next
        83 days to build a business that does not need you every minute.
      </p>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              Taffer Phase 2: Build Your Systems (Days 8-37)
            </div>
            <div className="text-sm text-muted-foreground">
              Staff accountability, inventory control, and your digital review
              engine
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {MONTH2.map((block) => (
            <Card key={block.week} className="border border-border">
              <CardContent className="p-5">
                <div className="text-xs font-bold text-[#6366F1] uppercase tracking-wide mb-3">
                  {block.week}
                </div>
                <ul className="space-y-2">
                  {block.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-[#6366F1] mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border border-[#C7D2FE] bg-[#EEF2FF] p-4 flex items-start gap-3">
          <Flag size={16} className="text-[#6366F1] mt-0.5 shrink-0" />
          <div>
            <div className="text-xs font-bold text-[#6366F1] mb-1">
              Reid Holmes: Brand Milestone: Month 2
            </div>
            <p className="text-sm text-foreground">
              By end of Month 2 your brand should have a visible heartbeat:
              consistent reviews coming in, a recognizable posting cadence, and
              staff who can represent you even when you step out. That is brand
              infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              Taffer Phase 3: Brand Growth (Days 38-90)
            </div>
            <div className="text-sm text-muted-foreground">
              Community presence, paid amplification, and your first full P&L
              review
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {MONTH3.map((block) => (
            <Card key={block.week} className="border border-border">
              <CardContent className="p-5">
                <div className="text-xs font-bold text-[#6366F1] uppercase tracking-wide mb-3">
                  {block.week}
                </div>
                <ul className="space-y-2">
                  {block.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-[#6366F1] mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border border-[#C7D2FE] bg-[#EEF2FF] p-4 flex items-start gap-3">
          <Flag size={16} className="text-[#6366F1] mt-0.5 shrink-0" />
          <div>
            <div className="text-xs font-bold text-[#6366F1] mb-1">
              Reid Holmes: Brand Milestone: Month 3
            </div>
            <p className="text-sm text-foreground">
              By Day 90 your deli should have a story people in the neighborhood
              tell each other. A Google rating above 4.2, a women's event on the
              calendar, a featured mention in at least one publication, and a
              P&L you can read and act on. That is not a deli anymore: that is a
              brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
