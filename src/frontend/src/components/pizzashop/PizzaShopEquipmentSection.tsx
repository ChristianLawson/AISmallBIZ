import { SectionQA } from "@/components/SectionQA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Flame,
  Gauge,
  Refrigerator,
  Thermometer,
  Timer,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const ACCENT = "oklch(0.65 0.18 65)";

export function PizzaShopEquipmentSection() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Flame size={20} className="text-primary" />
        </div>
        <div>
          <Badge
            variant="secondary"
            className="mb-1 bg-primary/10 text-primary border-primary/20"
          >
            Equipment
          </Badge>
          <h2 className="font-display text-xl font-bold text-foreground">
            Ovens &amp; Kitchen Equipment
          </h2>
        </div>
      </div>

      <p className="text-[15px] text-muted-foreground leading-relaxed">
        Your oven is the heart of your pizzeria: it defines your product, your
        workflow, and your energy costs. This section breaks down every oven
        type, supporting equipment, and financing strategies to equip your
        kitchen without draining your cash reserves.
      </p>

      {/* Oven Types Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Wood-Fired
              </h3>
            </div>
            <div className="space-y-2 text-[14px] text-muted-foreground">
              <p>
                <strong>Best for:</strong> Neapolitan, artisan, high-end
                positioning
              </p>
              <p>
                <strong>Temp:</strong> 700-900°F | <strong>Cook time:</strong>{" "}
                60-90 sec
              </p>
              <p>
                <strong>Cost:</strong> $8,000-25,000 installed
              </p>
              <p>
                <strong>Pros:</strong> Unmatched flavor, Instagram appeal,
                premium pricing
              </p>
              <p>
                <strong>Cons:</strong> High skill curve, wood storage, fire dept
                regulations, inconsistent output
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Gas Deck
              </h3>
            </div>
            <div className="space-y-2 text-[14px] text-muted-foreground">
              <p>
                <strong>Best for:</strong> NY-style, Sicilian, high-volume
                operations
              </p>
              <p>
                <strong>Temp:</strong> 500-650°F | <strong>Cook time:</strong>{" "}
                6-10 min
              </p>
              <p>
                <strong>Cost:</strong> $4,000-12,000 per deck
              </p>
              <p>
                <strong>Pros:</strong> Consistent, faster training, lower fuel
                cost, easier permits
              </p>
              <p>
                <strong>Cons:</strong> Less "theater," higher upfront for
                multiple decks
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Timer size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Conveyor
              </h3>
            </div>
            <div className="space-y-2 text-[14px] text-muted-foreground">
              <p>
                <strong>Best for:</strong> Fast-casual, slice shops, very high
                volume
              </p>
              <p>
                <strong>Temp:</strong> 450-550°F | <strong>Cook time:</strong>{" "}
                4-7 min
              </p>
              <p>
                <strong>Cost:</strong> $6,000-18,000
              </p>
              <p>
                <strong>Pros:</strong> Minimal skill required, consistent
                output, high throughput
              </p>
              <p>
                <strong>Cons:</strong> Lower quality perception, higher energy
                use, maintenance
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supporting Equipment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <UtensilsCrossed size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Prep &amp; Production
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Wrench size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Dough mixer</strong>: 20-qt spiral mixer
                  ($2,500-5,000). Do not buy used; bearings wear out.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Dough sheeter/roller</strong>: $1,500-4,000. Essential
                  for thin-crust styles; skip for hand-tossed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Prep tables</strong>: refrigerated ($3,000-6,000) or
                  ambient ($800-1,500). Get at least 6 ft of workspace.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Proofing boxes</strong>: $200-600.
                  Temperature-controlled proofing improves consistency
                  dramatically.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Refrigerator size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Refrigeration &amp; Storage
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Thermometer
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Walk-in cooler</strong>: $4,000-10,000 installed. Size
                  for 3-4 days of cheese and produce. Used units are fine if
                  compressor is under warranty.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Thermometer
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Reach-in freezers</strong>: $2,000-4,000. Two-door
                  minimum for backup storage and overflow.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Thermometer
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Under-counter fridges</strong>: $1,000-2,500 per unit.
                  Place at each prep station for efficiency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Thermometer
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Dry storage shelving</strong>: $300-800. NSF-rated,
                  rust-resistant for flour, sauce, and supplies.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Financing & Buying Tips */}
      <Card className="border-primary/20 bg-primary/[0.03] shadow-subtle">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-primary" />
            <h3 className="font-display font-semibold text-[15px] text-foreground">
              Financing &amp; Buying Strategy
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Equipment Financing
              </p>
              <p>
                Lease-to-own programs let you pay $200-500/month per major piece
                instead of $10K+ upfront. Many dealers offer 0% for 12 months.
                Keep 3 months of payments in reserve.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Used vs. New</p>
              <p>
                Ovens: buy used (they last 20+ years). Refrigeration: buy new
                (compressors fail). Mixers: buy new (bearings). Prep tables:
                used is fine if stainless is intact.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Total Kitchen Budget
              </p>
              <p>
                For a 1,200 sq ft pizzeria: $35K-60K for full kitchen.
                Prioritize: oven first, walk-in second, mixer third. Everything
                else can be added in months 2-6 as cash flow improves.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Warranty &amp; Service
              </p>
              <p>
                Negotiate 2-year parts warranty on ovens. Find a local oven
                technician before you buy: call them and ask which brands they
                service most. This relationship is worth more than brand
                loyalty.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section Q&A */}
      <SectionQA
        accentColor={ACCENT}
        items={[
          {
            q: "Can I use my truck's portable oven in a brick-and-mortar?",
            a: "Generally no. Portable ovens lack the ventilation hoods, fire suppression, and gas line connections required by building and health codes. Plan to purchase a commercial oven rated for permanent installation. Your truck oven can be sold to recoup 30-50% of its value.",
          },
          {
            q: "How many pizzas per hour can each oven type produce?",
            a: "Wood-fired: 40-60/hour (limited by skill). Gas deck: 30-50/hour per deck (stackable). Conveyor: 80-120/hour. For a slice shop doing lunch rushes, a double-deck gas or conveyor is the safest bet. For dinner-focused artisan pizza, wood-fired with a gas backup is ideal.",
          },
          {
            q: "What is the real cost of a wood-fired oven installation?",
            a: "The oven itself is $8K-25K, but total installed cost often hits $30K-50K. You need: a Type I hood ($5K-10K), fire suppression system ($3K-6K), reinforced floor ($2K-5K), gas line upgrade ($2K-4K), and chimney/venting ($3K-8K). Get a contractor quote before committing.",
          },
          {
            q: "Should I buy or lease my equipment?",
            a: "Lease if cash is tight and you need to preserve working capital. Buy if you have the cash and plan to own long-term. A good middle path: lease the oven (high cost, high risk of obsolescence) and buy refrigeration (lower cost, predictable lifespan).",
          },
        ]}
      />
    </div>
  );
}
