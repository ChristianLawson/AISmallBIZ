import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp } from "lucide-react";

const STATS = [
  {
    stat: "70-80%",
    label: "of bakery and café purchases are made or influenced by women",
  },
  {
    stat: "64%",
    label: "of café regulars who visit 3+ times per week are women",
  },
  {
    stat: "3x",
    label: "higher social media sharing rate for female-forward café content",
  },
  {
    stat: "45%",
    label: "of women choose a café based on recommendation from another woman",
  },
];

const STRATEGIES = [
  {
    number: "01",
    title: "Female-Forward Social Media Content",
    body: "Post content that reflects women as your primary audience: showcase female bakers and baristas, feature women-owned supplier partnerships, and share behind-the-scenes content during morning prep. Women share content featuring other women at 3x the rate of neutral content.",
    action:
      "Commit to at least 3 posts per week: one behind-the-bake reel, one product spotlight, one community/person feature.",
  },
  {
    number: "02",
    title: "Women-Owned Business Badge & Certification Display",
    body: "If you are women-owned, display it prominently: on your Google My Business, window signage, Instagram bio, and menu. Women actively seek to support other women-owned businesses: this is a decision driver, not decoration.",
    action:
      "Add 'Women-Owned' to your Google My Business categories and Instagram bio this week. Post about your story.",
  },
  {
    number: "03",
    title: "Partnership with Local Women's Organizations",
    body: "Women's business groups, book clubs, mom groups, fitness studios, and women's networking events are your highest-value marketing partnerships. Offer to cater their first event for free in exchange for social posts and introductions.",
    action:
      "Identify 3 local women's organizations and reach out with a free-pastry-for-your-group offer this week.",
  },
  {
    number: "04",
    title: "Female Entrepreneur & Community Events",
    body: "Host monthly morning events specifically for female entrepreneurs: 'Coffee & Connections' networking breakfasts, 'Bake & Business' workshop mornings, or pop-up events with other women-owned local businesses. Your café becomes a business hub.",
    action:
      "Schedule one 'Women in Business Morning' event per month: 8am, free entry, light pastries included.",
  },
  {
    number: "05",
    title: "Stroller-Friendly, Baby-Welcome Environment",
    body: "Mothers with young children represent one of the highest-frequency café visit demographics: and they are your most powerful word-of-mouth network. Stroller-accessible layout, a small kid's corner with simple snacks, and a genuinely welcoming attitude to nursing make your café their default choice.",
    action:
      "Add a 'Families Welcome' sign, designate a stroller-accessible table section, and add a small kids' treat option to the menu.",
  },
  {
    number: "06",
    title: "Display & Celebrate Women's Achievements",
    body: "Rotate a 'Women We Admire' wall or window display featuring local women business owners, community leaders, or regular customers who have achieved something notable. This signals your values visually: every customer who enters sees it.",
    action:
      "Start with 3 local women, photograph and frame their stories. Rotate quarterly. Post the reveal on social.",
  },
];

export function BakeryAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="bakery-guide.attracting_women_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.14 330 / 0.12)" }}
        >
          <Heart size={20} style={{ color: "oklch(0.48 0.18 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.14 330 / 0.1)",
            color: "oklch(0.38 0.14 330)",
            border: "1px solid oklch(0.62 0.14 330 / 0.3)",
          }}
        >
          Section 5
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting Women to Your Bakery
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Women are the primary decision-makers for bakery and café visits: yet
        most bakeries don&rsquo;t intentionally design for them. Here&rsquo;s
        how to make your space their clear first choice.
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div
            key={s.stat}
            className="rounded-xl p-4 text-center"
            style={{
              background: "oklch(0.62 0.14 330 / 0.07)",
              border: "1px solid oklch(0.62 0.14 330 / 0.2)",
            }}
          >
            <div
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.48 0.18 330)" }}
            >
              {s.stat}
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Strategies */}
      <div className="space-y-4">
        {STRATEGIES.map((s) => (
          <Card
            key={s.number}
            className="overflow-hidden"
            data-ocid={`bakery-guide.attracting_women.strategy.${s.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: "oklch(0.62 0.14 330 / 0.08)" }}
                >
                  <span
                    className="font-display text-2xl font-bold rotate-90 tracking-tight"
                    style={{ color: "oklch(0.62 0.14 330 / 0.5)" }}
                  >
                    {s.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp
                      size={15}
                      style={{ color: "oklch(0.48 0.18 330)" }}
                    />
                    <h3 className="font-display font-bold text-base text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.body}
                  </p>
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: "oklch(0.62 0.14 330 / 0.07)",
                      borderLeft: "3px solid oklch(0.62 0.14 330 / 0.4)",
                    }}
                  >
                    <strong style={{ color: "oklch(0.38 0.14 330)" }}>
                      This week:
                    </strong>{" "}
                    <span className="text-muted-foreground">{s.action}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
