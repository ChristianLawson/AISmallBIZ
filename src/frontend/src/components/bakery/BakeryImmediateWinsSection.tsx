import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const DAYS = [
  {
    day: 1,
    title: "Photograph Your Display Case & Post Today",
    action:
      "Take stunning overhead and side-angle shots of your display case. Post on Instagram with location tags and relevant hashtags. Your display case is your #1 marketing asset: show it off before the morning rush.",
    impact:
      "Google Maps photo views spike within 48 hours; new foot traffic follows within the week",
  },
  {
    day: 2,
    title: "Set Up or Fully Optimize Your Google My Business",
    action:
      "Claim or update your Google My Business profile: add today's hours, upload 10+ photos (exterior, display case, best items), write a keyword-rich description. Enable Q&A and respond to any reviews.",
    impact:
      "Google Maps is responsible for 60-80% of new bakery customer discovery: this is your most valuable free marketing channel",
  },
  {
    day: 3,
    title: "Post a 'Behind the Bake' Reel",
    action:
      "Film a 30-60 second reel showing the croissant lamination process, a loaf coming out of the oven, or morning pastry assembly. No editing required: raw, authentic bakery footage performs extremely well.",
    impact:
      "Behind-the-scenes bakery content averages 3-5x the engagement of product-only posts",
  },
  {
    day: 4,
    title: "Create a Monthly Rotating Special Board",
    action:
      "Design a physical chalkboard and digital graphic for your June featured item (Pistachio Cream Croissant). Post it on all channels. Train all staff to mention it at every transaction.",
    impact:
      "'Limited time' framing increases order rate for featured items by 25-40%",
  },
  {
    day: 5,
    title: "Reach Out to One Women's Organization for Partnership",
    action:
      "Contact a local women's business group, mommy-and-me class, yoga studio, or book club. Offer to host their next gathering: provide complimentary pastries for the first visit in exchange for social media posts.",
    impact:
      "Women drive 70-80% of bakery purchasing decisions: community partnerships deliver high-quality referrals",
  },
  {
    day: 6,
    title: "Launch a Loyalty Stamp Card or Digital Loyalty Program",
    action:
      "Create a simple 'Buy 9, get 1 free' stamp card or set up Square Loyalty or Toast Loyalty. Train staff to offer it to every new customer. Loyalty program members spend 40% more per year.",
    impact:
      "Loyalty programs are the single highest-ROI retention tool for cafes and bakeries",
  },
  {
    day: 7,
    title: "Set Up Email List with First-Visit Offer",
    action:
      "Add a sign-up sheet at the counter and a QR code linking to a simple form. Offer a free cookie or 10% off for joining. Send a welcome email with your weekly specials every Monday morning.",
    impact:
      "Email marketing delivers $42 for every $1 spent: the highest ROI of any marketing channel",
  },
];

export function BakeryImmediateWinsSection() {
  return (
    <section id="quickstart" data-ocid="bakery-guide.immediate_wins_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.15)" }}
        >
          <Zap size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.12)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.35)",
          }}
        >
          Section 1: Start Here
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        7-Day Immediate Wins Action Plan
      </h2>
      <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
        One concrete action per day. Do these 7 things and you&rsquo;ll be ahead
        of 90% of your bakery competitors.
      </p>

      <div className="relative">
        <div
          className="absolute left-[23px] top-0 bottom-0 w-0.5 hidden sm:block"
          style={{ background: "oklch(0.55 0.18 290 / 0.2)" }}
          aria-hidden="true"
        />
        <div className="space-y-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="relative flex gap-5 group"
              data-ocid={`bakery-guide.immediate_wins.item.${d.day}`}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm z-10"
                style={{
                  background: "oklch(0.55 0.23 285)",
                  color: "#fff",
                  boxShadow: "0 0 0 4px oklch(0.55 0.18 290 / 0.15)",
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
                      background: "oklch(0.55 0.18 290 / 0.07)",
                      border: "1px solid oklch(0.55 0.18 290 / 0.2)",
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.50 0.22 290)" }}
                    />
                    <span style={{ color: "oklch(0.40 0.18 290)" }}>
                      <strong>Expected impact:</strong> {d.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
