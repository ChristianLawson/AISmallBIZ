import { SectionQA } from "@/components/SectionQA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Armchair,
  Flame,
  Lightbulb,
  Music,
  Paintbrush,
  Sofa,
  Users,
  Volume2,
} from "lucide-react";

const ACCENT = "oklch(0.65 0.18 65)";

export function PizzaShopAtmosphereSection() {
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
            Atmosphere
          </Badge>
          <h2 className="font-display text-xl font-bold text-foreground">
            Dining Room &amp; Customer Experience
          </h2>
        </div>
      </div>

      <p className="text-[15px] text-muted-foreground leading-relaxed">
        In the pizza business, the oven is your stage. The smell of baking
        dough, the sight of flames, and the theater of the pie-to-plate journey
        are competitive advantages no chain can replicate. This section covers
        layout, lighting, seating, and sensory design that turns first-timers
        into regulars.
      </p>

      {/* Open Kitchen & Oven Focal Point */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                The Oven as Focal Point
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Lightbulb
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Visibility:</strong> Position the oven so 70%+ of
                  seated customers can see it. The fire and dough-tossing are
                  free entertainment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Counter seating:</strong> Add 4-6 stools facing the
                  oven. Solo diners and pizza enthusiasts will wait for these
                  seats.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Aroma engineering:</strong> Ensure the hood vents
                  slightly into the dining area (not all out). The smell of
                  baking pizza increases appetite and dwell time by 15%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Clean sightlines:</strong> The kitchen must be
                  spotless. Customers judge hygiene by what they can see. No
                  clutter, no dirty towels visible.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Seating Flow &amp; Layout
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Armchair
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Entry to order:</strong> Customers should see the menu
                  within 3 seconds of entering. Place the register or counter
                  10-15 ft from the door to create a natural queue.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Armchair
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Table spacing:</strong> 24" between chair backs
                  minimum. 30" for comfort. Crowded tables = faster turnover but
                  lower satisfaction.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Armchair
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Mix of seating:</strong> 60% standard tables, 30%
                  booths (families love booths), 10% communal (singles and
                  groups).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Armchair
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Pickup zone:</strong> Separate waiting area for to-go
                  orders. Do not make dine-in customers stand next to a crowd of
                  delivery drivers.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Lighting, Music, Decor */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Lighting Design
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Warm, dim lighting (2700K) makes pizza look more appetizing and
              creates intimacy. Avoid fluorescent: it makes cheese look greasy
              and the space feel institutional.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Layers:</strong> Pendant lights over tables (task),
              recessed cans for ambient (dimmed to 60%), and LED strip under
              counters (accent). The oven fire provides natural focal lighting.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Music size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Music &amp; Sound
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Volume: 70-75 dB during lunch (energetic, fast turnover). 60-65 dB
              during dinner (conversation-friendly). Genre: classic rock, indie,
              or Italian-American standards: never Top 40 on repeat.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Acoustics:</strong> Hard surfaces (tile, brick) amplify
              noise. Add acoustic panels behind the oven or fabric-covered
              booths to absorb sound. A loud pizzeria drives away families.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Paintbrush size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Decor &amp; Branding
              </h3>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Exposed brick, reclaimed wood, and vintage pizza memorabilia
              create authenticity. But avoid clutter: every item should tell a
              story about your brand, not just "look rustic."
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong>Local connection:</strong> Frame photos of your truck's
              journey, your first customers, or local landmarks. It signals
              community roots and gives customers something to talk about.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Comfort & Dwell Time */}
      <Card className="border-primary/20 bg-primary/[0.03] shadow-subtle">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sofa size={16} className="text-primary" />
            <h3 className="font-display font-semibold text-[15px] text-foreground">
              Comfort, Dwell Time &amp; Turnover Balance
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Lunch Rush (11am-3pm)
              </p>
              <p>
                Goal: 30-45 minute table turn. Harder chairs, brighter lights,
                faster music. No tablecloths. Counter service if possible. This
                is your volume play: maximize covers, not check average.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Dinner Service (4pm-10pm)
              </p>
              <p>
                Goal: 60-90 minute turn. Softer seating, dimmer lights, slower
                music. Table service with upsell opportunities (wine, desserts).
                This is your margin play: maximize check average, not covers.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                The "Third Place" Effect
              </p>
              <p>
                Offer free Wi-Fi, comfortable corner seating, and outlets. A
                customer who works from your shop for 2 hours buys 2-3 drinks
                and a slice. That is $12-15 revenue from a seat that would
                otherwise be empty mid-afternoon.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                Kids &amp; Families
              </p>
              <p>
                High chairs, a small "kids' corner" with pizza-themed coloring
                sheets, and a "make your own pizza" kids' menu item ($8-10, cost
                $2.50) turn families into weekly regulars. Parents remember who
                made their Tuesday night easier.
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
            q: "How much should I spend on dining room design?",
            a: "Budget $15-30 per square foot for dining room buildout. A 1,000 sq ft dining room = $15K-30K. Prioritize: lighting first (transforms everything), seating second, decor third. You can upgrade decor over time; bad lighting kills the vibe from day one.",
          },
          {
            q: "Should I offer table service or counter service?",
            a: "Counter service for lunch and slice shops (faster, lower labor cost). Table service for dinner and full-service pizzerias (higher check average, better tips). Many successful shops do hybrid: order at counter, food delivered to table, pay at counter on exit.",
          },
          {
            q: "How do I handle the noise from a wood-fired oven?",
            a: "Wood-fired ovens are loud (fans, crackling, door opening). Position the oven against a shared wall (not the dining room wall). Add a partial glass partition: customers see the fire but the noise is dampened. Acoustic ceiling tiles in the dining area help too.",
          },
          {
            q: "What is the most underrated atmosphere investment?",
            a: "Restroom quality. Customers judge your kitchen hygiene by your restroom. A clean, well-lit restroom with good soap and paper towels signals 'we care about details.' A dirty restroom undoes every positive impression from the pizza. Budget $2-4K for a quality restroom renovation.",
          },
        ]}
      />
    </div>
  );
}
