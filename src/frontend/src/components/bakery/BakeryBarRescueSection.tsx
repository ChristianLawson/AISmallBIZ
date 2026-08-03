import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Rescue the experience before you rescue the revenue."',
    detail:
      "Jon Taffer's #1 principle applied to bakeries: if the experience is broken: slow service, uninviting display cases, inattentive staff: no menu upgrade or marketing spend will fix declining sales. The experience is the product.",
  },
  {
    quote: '"Your display case is your first handshake."',
    detail:
      "In a bakery, customers buy with their eyes before they buy with their wallets. A cluttered, poorly lit, or half-empty display case is the equivalent of a dirty bar top: it signals you do not care. Freshness, variety, and visual arrangement are non-negotiable.",
  },
  {
    quote: '"Pre-shift briefings are non-negotiable."',
    detail:
      "Every shift starts with 5 minutes: today's daily special, any out-of-stock items, the featured monthly item, and a reminder about suggestive selling. Staff who know the menu sell 35% more add-ons than staff who guess.",
  },
  {
    quote: '"Speed of service is a revenue multiplier."',
    detail:
      "Morning rush windows at cafés and bakeries are 6-9 minutes at peak. Taffer's data: every 2 minutes added to average transaction time costs 15-20% of peak-hour revenue. Line speed is profit. Optimize the flow before you optimize the menu.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Display Case & Atmosphere",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.08)",
    items: [
      "Display case fully stocked and freshly arranged by 7am every day",
      "Warm lighting inside display case: no harsh fluorescents",
      "Labels on all items with name, allergens, and price: clearly legible",
    ],
  },
  {
    category: "Customer Flow & Speed",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.08)",
    items: [
      "Ordering and payment are separate stations: no bottleneck",
      "Peak-hour staffing plan executed without exception",
      "Mobile or online pre-order option available to reduce queue",
    ],
  },
  {
    category: "Staff Energy & Service",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "Staff greet every customer within 5 seconds of entering",
      "Suggestive selling scripted: always offer the monthly special",
      "Pre-shift briefing completed before every opening shift",
    ],
  },
  {
    category: "Menu & Presentation",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    items: [
      "Monthly viral featured item photographed and posted on day 1",
      "Menu board clean, current, and easy to read from the door",
      "Plating and presentation consistent: every item looks as good as the photo",
    ],
  },
];

export function BakeryBarRescueSection() {
  return (
    <section id="bar-rescue" data-ocid="bakery-guide.bar_rescue_section">
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
        Bar Rescue Principles for Your Bakery
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&rsquo;s no-excuses operational framework, adapted for
        bakeries and cafés where the experience is the product.
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
          &ldquo;Rescue the experience before you rescue the revenue. If people
          don&rsquo;t enjoy being in your space, no promotion will bring them
          back.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. For bakeries: if customers don&rsquo;t feel
          welcomed, charmed, and served with speed: fix that before you change a
          single recipe.
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
        Bakery Rescue Audit: 4-Category Checklist
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
