import { SectionQA } from "@/components/SectionQA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Beef,
  Calculator,
  ChartPie,
  ChefHat,
  DollarSign,
  Leaf,
  Pizza,
  Scale,
} from "lucide-react";

const ACCENT = "oklch(0.65 0.18 65)";

export function PizzaShopMenuSection() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <ChefHat size={20} className="text-primary" />
        </div>
        <div>
          <Badge
            variant="secondary"
            className="mb-1 bg-primary/10 text-primary border-primary/20"
          >
            Menu Engineering
          </Badge>
          <h2 className="font-display text-xl font-bold text-foreground">
            Menu, Margins &amp; Pricing Strategy
          </h2>
        </div>
      </div>

      <p className="text-[15px] text-muted-foreground leading-relaxed">
        Pizza is a high-margin business when engineered correctly. This section
        breaks down topping costs, slice vs. whole pie economics, specialty
        pricing, and the menu psychology that drives the most profitable
        pizzerias in America.
      </p>

      {/* Topping Cost-Margin Analysis */}
      <Card className="border-border/60 shadow-subtle">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Scale size={16} className="text-primary" />
            <h3 className="font-display font-semibold text-[15px] text-foreground">
              Topping Cost &amp; Margin Analysis
            </h3>
          </div>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Food cost for pizza should run 20-25%. Here is the real math on a
            18" cheese pizza sold at $18:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-lg bg-muted/40 p-3 text-center">
              <p className="text-[12px] text-muted-foreground uppercase tracking-wide">
                Dough
              </p>
              <p className="font-display font-bold text-[16px] text-foreground">
                $0.80
              </p>
              <p className="text-[12px] text-muted-foreground">4.4%</p>
            </div>
            <div className="rounded-lg bg-muted/40 p-3 text-center">
              <p className="text-[12px] text-muted-foreground uppercase tracking-wide">
                Sauce
              </p>
              <p className="font-display font-bold text-[16px] text-foreground">
                $0.60
              </p>
              <p className="text-[12px] text-muted-foreground">3.3%</p>
            </div>
            <div className="rounded-lg bg-muted/40 p-3 text-center">
              <p className="text-[12px] text-muted-foreground uppercase tracking-wide">
                Cheese
              </p>
              <p className="font-display font-bold text-[16px] text-foreground">
                $2.40
              </p>
              <p className="text-[12px] text-muted-foreground">13.3%</p>
            </div>
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-center">
              <p className="text-[12px] text-primary uppercase tracking-wide">
                Total Food Cost
              </p>
              <p className="font-display font-bold text-[16px] text-foreground">
                $3.80
              </p>
              <p className="text-[12px] text-primary font-medium">21.1%</p>
            </div>
          </div>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            <strong>Gross margin:</strong> $14.20 (78.9%) per cheese pie. Each
            topping adds $0.50-1.50 in cost but $2-3 in price: making specialty
            pies your highest-margin items.
          </p>
        </CardContent>
      </Card>

      {/* Slice vs Whole Pie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Pizza size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Slice Economics
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <DollarSign
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Price point:</strong> $3.50-5.00 per slice in most
                  markets. NYC averages $3.75; premium markets hit $5-6.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Margin:</strong> Slices often have lower margin
                  (60-65%) due to waste, but drive volume and foot traffic.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Combo strategy:</strong> "2 slices + drink for $8"
                  bundles increase average ticket by 40% while reducing
                  perceived cost.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Waste control:</strong> Pre-sell whole pies into
                  slices during lunch rush. Unsold slices after 2 hours =
                  compost, not customers.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <ChartPie size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Whole Pie Strategy
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Calculator
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Family size:</strong> 18" pie at $22-28 feeds 3-4.
                  Position as "dinner for the family" to increase perceived
                  value.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Upsell path:</strong> "Add breadsticks for $4" or
                  "Upgrade to stuffed crust for $3": 30% of customers say yes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Online ordering:</strong> Whole pies dominate
                  delivery. Charge $2-3 delivery fee; it barely covers costs but
                  frames the pie price as "the real cost."
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Loyalty math:</strong> "Buy 9, get 1 free" costs you
                  one pie but locks in $180+ in repeat revenue.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Specialty & Dietary Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Beef size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Protein Toppings
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Pepperoni is the #1 seller (35% of all pizzas). Sausage, bacon,
              and chicken follow. Cost: $0.80-1.50 per pie. Price add: $2-3.
              Margin boost: +8-12%.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Pro tip:</strong> Pre-cook meats to reduce grease and
              improve coverage. Raw sausage = soggy center and customer
              complaints.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Vegetarian &amp; Vegan
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              22% of millennials order vegetarian options. Vegan cheese costs 2x
              dairy but commands a $3-4 premium. Plant-based meat toppings
              (Beyond, Impossible) add $2.50 cost but $4-5 price.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Pro tip:</strong> Label clearly. "Vegan" and "gluten-free"
              are trust-based claims: one mistake destroys credibility.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <ChefHat size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Specialty Pies
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              "Signature" or "chef's choice" pies justify $24-32 pricing. Use
              premium ingredients (truffle oil, burrata, prosciutto) that cost
              $3-5 but signal $8-12 in value.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Pro tip:</strong> Rotate one seasonal specialty monthly.
              It drives Instagram content, repeat visits, and press coverage.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Menu Psychology */}
      <Card className="border-primary/20 bg-primary/[0.03] shadow-subtle">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <ChartPie size={16} className="text-primary" />
            <h3 className="font-display font-semibold text-[15px] text-foreground">
              Menu Psychology for Pizza Shops
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Anchor Pricing</p>
              <p>
                Place your most expensive specialty pie ($28-32) at the top of
                the menu. It makes your $18 cheese pie feel like a bargain. 60%
                of customers will order the mid-tier option ($20-24): exactly
                where your margin is highest.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                The "Supreme" Effect
              </p>
              <p>
                A "supreme" or "everything" pie with 6+ toppings costs only
                $1.50 more than a 2-topping but sells for $4-5 more. It is your
                highest-margin item. Feature it prominently with a photo.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Bundle Framing</p>
              <p>
                "Family Feast: 2 large pies + breadsticks + 4 drinks for $45"
                sounds like a deal. Actual cost: $18. Margin: 60%. But customers
                feel they "won": and you moved 2 pies instead of 1.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">The "Add-On" Trap</p>
              <p>
                Ranch dressing, extra cheese, dipping sauces: each costs
                $0.20-0.50 but sells for $1-2. These "micro-transactions" add
                5-8% to your average ticket with zero additional labor.
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
            q: "What is the ideal food cost percentage for a pizzeria?",
            a: "20-25% for food cost is the industry sweet spot. Under 20% usually means you are skimping on quality (customers notice). Over 28% means your pricing is too low or your portion control is sloppy. Track weekly, not monthly: cheese prices fluctuate and dough waste adds up fast.",
          },
          {
            q: "Should I offer by-the-slice or whole pies only?",
            a: "If you are in a high-foot-traffic area (downtown, college, transit hub), slices are essential: they drive volume and visibility. If you are in a residential or family area, whole pies dominate dinner and delivery. The most profitable shops do both: slices at lunch (11am-3pm), whole pies at dinner (4pm-close).",
          },
          {
            q: "How do I price gluten-free and vegan options?",
            a: "Price them at a $3-5 premium over standard, but be transparent about why ('specialty crust costs more to produce'). Never treat them as an afterthought: dedicate a prep area and clearly mark them. The gluten-free/vegan customer is loyal and vocal; win them and they bring friends.",
          },
          {
            q: "What is the most profitable item on a pizza menu?",
            a: "Breadsticks and garlic knots. They cost $0.40-0.60 to make and sell for $4-6. They are pure margin, require no additional equipment, and have a 70%+ attachment rate when offered at checkout. Second place: fountain drinks at 85% margin.",
          },
        ]}
      />
    </div>
  );
}
