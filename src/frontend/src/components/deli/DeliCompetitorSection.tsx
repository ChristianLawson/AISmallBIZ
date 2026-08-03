import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Search, TrendingUp } from "lucide-react";

const STEPS = [
  {
    number: 1,
    title: "Google Maps Audit",
    icon: Search,
    desc: "Search 'deli near [your zip]' on Google Maps. Pull the top 5 competitors. Read every 1-star AND every 5-star review. Extract the 3 most common complaints and the 3 most praised elements. That gap is your competitive opportunity.",
    action:
      "Spend 45 minutes reading competitor reviews. Write down: what are customers upset about? What are they raving about? Where can you beat them?",
  },
  {
    number: 2,
    title: "Menu Gap Analysis",
    icon: Eye,
    desc: "Visit or order from your top 3 competitors. Note what they do not have that customers keep asking for in reviews. Common gaps in NYC delis: dietary-friendly options, fast breakfast, custom orders, catering. That gap is your menu opportunity.",
    action:
      "Order their top 3 items. Photograph the portions. Note the price. Note what is missing. Build your own menu around their weaknesses.",
  },
  {
    number: 3,
    title: "Foot Traffic Signals",
    icon: TrendingUp,
    desc: "Visit each competitor at 8am, 12pm, and 3pm on a weekday. Note: queue length, average wait time, parking availability, demographic of customers. This is Taffer's reconnaissance model: you cannot compete with what you do not understand.",
    action:
      "Do this for 3 days minimum. Track on a simple spreadsheet: Time / Location / Queue Length / Wait Time / Customer Demographic.",
  },
  {
    number: 4,
    title: "Social Media Audit",
    icon: Search,
    desc: "Check their Instagram and Facebook. Note: posting frequency, engagement rate, what content performs best. If a competitor's sandwich video gets 1,200 likes and their store photos get 40: that tells you exactly what to post.",
    action:
      "Screenshot their top 5 posts. What is the format? What is the hook? How can you do the same thing better, with your story and your food?",
  },
  {
    number: 5,
    title: "Pricing Scan",
    icon: TrendingUp,
    desc: "Compare their top 5 items to yours. If you are higher in price, you need a stronger brand story to justify it. If you are lower, you are leaving margin on the table or signaling lower quality. Price is a brand signal.",
    action:
      "Reid Holmes: 'Price is not just a number: it is a statement about who you are and who you serve. Set it intentionally, not by default.'",
  },
];

const RECON_SHEET_HEADERS = [
  "Competitor Name",
  "Google Rating",
  "# of Reviews",
  "Top Complaint",
  "Top Praise",
  "Price (Signature Item)",
  "Peak Queue Length",
  "Social Followers",
  "Posts/Week",
  "Your Advantage",
];

export function DeliCompetitorSection() {
  return (
    <section id="competitor-research" data-ocid="deli-guide.competitor_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <Eye size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Competitor Research
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Taffer's Reconnaissance: Research Your Competition
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Taffer never walks into a rescue blind. He researches first. You should
        too. Here is the 5-step competitor recon process for NYC delis.
      </p>

      <div className="space-y-5 mb-10">
        {STEPS.map((s) => (
          <Card
            key={s.number}
            className="border border-border"
            data-ocid={`deli-guide.competitor_step.${s.number}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {s.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon size={16} className="text-[#6366F1]" />
                    <h3 className="font-display font-bold text-base text-foreground">
                      Step {s.number}: {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                  <div className="rounded-lg bg-[#EEF2FF] border border-[#6366F1]/20 p-3">
                    <div className="text-xs font-bold text-[#6366F1] mb-1">
                      Your Action:
                    </div>
                    <p className="text-xs text-foreground">{s.action}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className="rounded-2xl border border-border bg-muted/30 p-6"
        data-ocid="deli-guide.competitor_recon_sheet"
      >
        <h3 className="font-display text-lg font-bold text-foreground mb-1">
          Printable Competitor Recon Sheet
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Print this and fill it in for each competitor. Do it for your top 3
          before you finalize your positioning.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[#6366F1] text-white">
                {RECON_SHEET_HEADERS.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                  {RECON_SHEET_HEADERS.map((h) => (
                    <td
                      key={h}
                      className="px-3 py-3 border-b border-border text-muted-foreground"
                    >
                      <div className="h-4 border-b border-dashed border-border/50 min-w-16" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 italic">
          Tip: Do this quarterly. Your competitors evolve. So should your
          positioning.
        </p>
      </div>
    </section>
  );
}
