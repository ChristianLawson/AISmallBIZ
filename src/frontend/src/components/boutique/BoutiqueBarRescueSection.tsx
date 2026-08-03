import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Stress-test the experience before you spend on advertising."',
    detail:
      "Jon Taffer's #1 rule: do a mystery shopper audit of your own boutique. Walk in as a stranger. How long before staff acknowledge you? How organized are the racks? How do the fitting rooms smell, feel, and look? You cannot market your way out of a broken in-store experience.",
  },
  {
    quote: '"The fitting room is where the sale lives or dies."',
    detail:
      "In a boutique, the fitting room is the equivalent of Taffer's bar top. If the lighting is unflattering, the mirrors are foggy, or there is no hook for bags \u2014 customers leave embarrassed and never return. A $300 fitting room upgrade is the highest-ROI renovation a boutique owner can make.",
  },
  {
    quote: '"Visual merchandising is silent salesmanship."',
    detail:
      "Taffer's systems thinking applied to fashion retail: your displays should tell a complete outfit story from 10 feet away. A hero mannequin at the entrance, a clear color story per section, and monthly rotation of displays keeps the store looking new to repeat visitors and stops foot traffic from the sidewalk.",
  },
  {
    quote: '"A staff that does not know the product cannot sell it."',
    detail:
      "Every staff member must know the story behind your 5 best-sellers, how to style them 3 ways, and what the featured trend item of the month is. Taffer's pre-shift briefing model: 5 minutes before opening, review the day's featured items, any restocked sizes, and an upsell talking point.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Fitting Room Experience",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.08)",
    items: [
      "Warm, flattering lighting in every fitting room \u2014 no harsh overhead fluorescents",
      "Full-length mirrors on two walls \u2014 one front-facing, one angled",
      "Double hooks at different heights for bags, clothes, and accessories",
    ],
  },
  {
    category: "Visual Merchandising",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.08)",
    items: [
      "Hero mannequin at the entrance showcasing the featured monthly trend",
      "Color-cohesive rack sections \u2014 no mixed-color chaos",
      "Window display refreshed at minimum every 2 weeks",
    ],
  },
  {
    category: "Staff & Greeting Protocol",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Every customer acknowledged within 5 seconds of entering \u2014 no exceptions",
      "Staff trained on soft assist language: 'Let me know if I can pull other sizes'",
      "Pre-shift briefing completed: featured item, restocked sizes, upsell talking point",
    ],
  },
  {
    category: "Inventory & Presentation",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    items: [
      "Markdown cadence established \u2014 slow-moving items cleared after 6 weeks",
      "Size runs clearly labeled and consistently maintained on racks",
      "Featured monthly trend item photographed and posted on day 1 of month",
    ],
  },
];

export function BoutiqueBarRescueSection() {
  return (
    <section id="bar-rescue" data-ocid="boutique-guide.bar_rescue_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Megaphone size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bar Rescue Principles for Your Boutique
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&rsquo;s no-excuses operational framework, adapted for
        boutique clothing stores where the fitting room is your bar top and
        visual merchandising is your menu.
      </p>

      {/* Hero Taffer quote */}
      <div
        className="rounded-2xl p-7 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.92) 0%, oklch(0.22 0.1 30 / 0.9) 100%)",
        }}
      >
        <AlertTriangle
          size={28}
          className="mb-3"
          style={{ color: "oklch(0.82 0.14 85)" }}
        />
        <blockquote
          className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;I don&rsquo;t rescue bars. I rescue businesses. And the first
          thing I rescue is the experience &mdash; because without that, nothing
          else works.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          &mdash; Jon Taffer, Bar Rescue. For boutiques: if customers
          don&rsquo;t feel welcome, styled, and respected &mdash; fix that
          before you change a single item on the rack.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.quote}>
            <CardContent className="p-5">
              <blockquote
                className="font-display text-base font-semibold italic mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
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

      {/* 4-Category Audit */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Boutique Rescue Audit &mdash; 4-Category Checklist
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {AUDIT_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-4"
            style={{ background: cat.bg, border: `1px solid ${cat.color}` }}
          >
            <div
              className="font-semibold text-sm mb-3"
              style={{ color: cat.color }}
            >
              {cat.category}
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: cat.color }}
                  />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
