import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Leaf, Sandwich } from "lucide-react";
import { useState } from "react";

const SANDWICHES = [
  {
    id: 1,
    name: "The Lower East Side Legend",
    neighborhood: "Lower East Side",
    ingredients:
      "Slow-cured pastrami, spicy brown mustard, half-sour pickle, toasted rye",
    story:
      "The sandwich that started it all. A nod to the Jewish delis that made the LES what it is: uncompromising, unapologetic, iconic.",
    hook: "The OG",
    heat: false,
    vegan: false,
  },
  {
    id: 2,
    name: "The Bronx Bomber",
    neighborhood: "The Bronx",
    ingredients:
      "Italian dry salami, provolone, roasted peppers, garlic aioli, ciabatta",
    story:
      "Borough pride in every bite. An Italian-American tribute to the Bronx's rich immigrant heritage. Bold. Unapologetic. Hits like a home run.",
    hook: "Borough Pride",
    heat: false,
    vegan: false,
  },
  {
    id: 3,
    name: "The Brooklyn Bridge",
    neighborhood: "Brooklyn",
    ingredients: "Smoked turkey, brie, cranberry spread, arugula, sourdough",
    story:
      "Where classic meets refined. Brooklyn-level sophistication without the pretense. For the customer who wants elevated without losing the deli soul.",
    hook: "Elevated Classic",
    heat: false,
    vegan: false,
  },
  {
    id: 4,
    name: "The Harlem Heat",
    neighborhood: "Harlem",
    ingredients:
      "Pulled jerk chicken, mango slaw, scotch bonnet mayo, brioche bun",
    story:
      "Caribbean-NYC fusion at its finest. Harlem's diaspora culture on a plate. Warning: this one has a kick.",
    hook: "Caribbean Fusion",
    heat: true,
    vegan: false,
  },
  {
    id: 5,
    name: "The West Village Vegan",
    neighborhood: "West Village",
    ingredients:
      "Roasted portobello, sundried tomato tapenade, cashew cream, focaccia",
    story:
      "Proof that plant-based can rule the counter. Rich, satisfying, and unapologetically delicious: even the meat-eaters come back for this one.",
    hook: "Plant-Based Royalty",
    heat: false,
    vegan: true,
  },
  {
    id: 6,
    name: "The Wall Street Club",
    neighborhood: "Financial District",
    ingredients:
      "Roast beef, horseradish cream, crispy onions, Swiss, pretzel roll",
    story:
      "Power lunch, elevated. The sandwich that closes deals. Crispy, savory, satisfying: built for people who do not have time for bad food.",
    hook: "Power Lunch",
    heat: false,
    vegan: false,
  },
  {
    id: 7,
    name: "The SoHo Italiano",
    neighborhood: "SoHo",
    ingredients:
      "Prosciutto di Parma, fresh mozzarella, basil, olive oil drizzle, baguette",
    story:
      "La dolce vita at your counter. Simple ingredients, extraordinary result. This is the sandwich that turns lunch into an experience.",
    hook: "La Dolce Vita",
    heat: false,
    vegan: false,
  },
  {
    id: 8,
    name: "The Uptown Reuben",
    neighborhood: "Upper West Side",
    ingredients: "Corned beef, sauerkraut, Thousand Island, Swiss, marble rye",
    story:
      "The classic, elevated. No apologies. This is what a Reuben should taste like: the version that makes you forget every Reuben you had before.",
    hook: "The Classic",
    heat: false,
    vegan: false,
  },
  {
    id: 9,
    name: "The Chelsea Morning",
    neighborhood: "Chelsea",
    ingredients:
      "Smoked salmon, everything bagel cream cheese, capers, red onion, toasted everything bagel",
    story:
      "NYC breakfast culture in one sandwich. The kind of bagel that makes you feel like a local: even if you flew in from LA to try it.",
    hook: "NYC Breakfast",
    heat: false,
    vegan: false,
  },
  {
    id: 10,
    name: "The Midtown Melt",
    neighborhood: "Midtown",
    ingredients:
      "Turkey, sharp cheddar, tomato, bacon, chipotle mayo, Texas toast",
    story:
      "The weekday workhorse. Built for the lunch crowd that wants something satisfying, fast, and consistently great. The one that keeps them coming back.",
    hook: "The Workhorse",
    heat: false,
    vegan: false,
  },
  {
    id: 11,
    name: "The Queens Fusion",
    neighborhood: "Queens",
    ingredients: "Korean BBQ beef, kimchi slaw, sesame gochujang, brioche",
    story:
      "NYC's diversity on a plate. Queens is the most diverse urban county in the world, and this sandwich celebrates exactly that. East meets Deli.",
    hook: "East Meets Deli",
    heat: true,
    vegan: false,
  },
  {
    id: 12,
    name: "The Staten Island Sunday",
    neighborhood: "Staten Island",
    ingredients:
      "Meatball sub, San Marzano marinara, fresh basil, fresh mozzarella, hero roll",
    story:
      "Sunday dinner, on a roll. The sandwich that tastes like nonna made it. Comfort food elevated: you will need both hands and a pile of napkins.",
    hook: "Sunday Comfort",
    heat: false,
    vegan: false,
  },
];

export function DeliSandwichSpecials() {
  return (
    <section id="sandwiches" data-ocid="deli-guide.sandwiches_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Sandwich size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 4
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Rotating Weekly Sandwich Specials System
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
        12 signature specials: one for every NYC borough and neighborhood. Use
        the framework below to rotate, name, story, price, and promote.
      </p>

      {/* Why rotate */}
      <div
        className="grid sm:grid-cols-3 gap-4 mb-8 p-5 rounded-2xl"
        style={{
          background: "oklch(0.78 0.12 85 / 0.07)",
          border: "1px solid oklch(0.78 0.12 85 / 0.2)",
        }}
      >
        {[
          [
            "Novelty",
            "Creates anticipation: regulars check in weekly to see what is new",
          ],
          [
            "Scarcity",
            'Limited-time drives urgency: "last day" posts outperform everything',
          ],
          [
            "Social buzz",
            "A visually stunning weekly special is your most powerful content hook",
          ],
        ].map(([title, desc]) => (
          <div key={title}>
            <div
              className="font-semibold text-sm mb-1"
              style={{ color: "oklch(0.45 0.1 85)" }}
            >
              {title}
            </div>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* Framework */}
      <div className="grid sm:grid-cols-4 gap-3 mb-8">
        {[
          [
            "1. Name it",
            "Every special needs a memorable NYC-neighborhood name",
          ],
          [
            "2. Story it",
            "2-3 sentences on the inspiration, the ingredients, the feeling",
          ],
          [
            "3. Price it",
            "Premium specials should be priced 15-25% above your regular menu",
          ],
          [
            "4. Promote it",
            "Instagram story + chalkboard + text blast = 3x awareness",
          ],
        ].map(([step, desc], i) => (
          <div
            key={step}
            className="p-4 rounded-xl text-center"
            style={{
              background:
                i % 2 === 0
                  ? "oklch(0.28 0.12 330 / 0.07)"
                  : "oklch(0.62 0.1 15 / 0.07)",
              border: `1px solid ${
                i % 2 === 0
                  ? "oklch(0.28 0.12 330 / 0.15)"
                  : "oklch(0.62 0.1 15 / 0.15)"
              }`,
            }}
          >
            <div
              className="font-semibold text-sm mb-1"
              style={{
                color:
                  i % 2 === 0 ? "oklch(0.28 0.12 330)" : "oklch(0.35 0.08 15)",
              }}
            >
              {step}
            </div>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* Sandwich cards grid */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-ocid="deli-guide.sandwich_list"
      >
        {SANDWICHES.map((s, i) => (
          <div
            key={s.id}
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.90 0.006 75)",
              background: "oklch(0.985 0.006 75)",
            }}
            data-ocid={`deli-guide.sandwich_card.${i + 1}`}
          >
            {/* Card header */}
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{
                background: s.heat
                  ? "oklch(0.55 0.2 25 / 0.1)"
                  : s.vegan
                    ? "oklch(0.55 0.14 150 / 0.1)"
                    : "oklch(0.28 0.12 330 / 0.08)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="font-display font-bold text-xs"
                  style={{
                    color: s.heat
                      ? "oklch(0.45 0.18 25)"
                      : s.vegan
                        ? "oklch(0.35 0.12 150)"
                        : "oklch(0.28 0.12 330)",
                  }}
                >
                  {s.neighborhood}
                </span>
                {s.heat && (
                  <Flame size={12} style={{ color: "oklch(0.55 0.2 25)" }} />
                )}
                {s.vegan && (
                  <Leaf size={12} style={{ color: "oklch(0.45 0.15 150)" }} />
                )}
              </div>
              <Badge
                className="text-xs py-0"
                style={{
                  background: "oklch(0.78 0.12 85 / 0.2)",
                  color: "oklch(0.45 0.1 85)",
                  border: "none",
                }}
              >
                {s.hook}
              </Badge>
            </div>
            {/* Card body */}
            <div className="p-4">
              <h3 className="font-display font-bold text-sm text-foreground mb-1 leading-snug">
                #{s.id}: {s.name}
              </h3>
              <p
                className="text-xs font-medium mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {s.ingredients}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.story}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Promotion guide */}
      <div
        className="mt-8 rounded-xl p-6"
        style={{
          background: "oklch(0.28 0.12 330 / 0.06)",
          border: "1px solid oklch(0.28 0.12 330 / 0.15)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          Announcing the Weekly Special: Your 3-Channel Playbook
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            [
              "Instagram Story",
              'Post the day before launch. Photo of the sandwich, name in bold, one line of story. Add a "New tomorrow!" sticker. Reshoot it going live the next morning.',
            ],
            [
              "In-Store Chalkboard",
              "Position at eye level near the entrance, not behind the counter. Write the sandwich name, 2-3 key ingredients, and a one-liner hook. Update it every Monday morning.",
            ],
            [
              "Text Blast",
              'Keep it under 160 characters. Example: "This week @ [Deli]: The Harlem Heat: jerk chicken, mango slaw, scotch bonnet mayo. Hot. Limited qty. Come early."',
            ],
          ].map(([channel, script]) => (
            <div key={channel}>
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {channel}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {script}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
