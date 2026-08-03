import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed } from "lucide-react";

const SPECIALS = [
  {
    id: 1,
    day: "Monday",
    name: "The Monday Revival",
    description:
      "Prix fixe comfort menu. 3 courses, $45, available Monday only. Neighborhood locals pricing: no tourist markup. Designed to make your slowest night feel like a community ritual.",
    promote:
      "Post Sunday evening: ‘Monday is for the neighborhood. 3 courses. $45. No fuss. All comfort. Limited seats.’",
    tag: "Prix Fixe",
    tagColor: "oklch(0.28 0.12 330)",
    tagBg: "oklch(0.28 0.12 330 / 0.12)",
  },
  {
    id: 2,
    day: "Tuesday",
    name: "The Chef’s Tuesday",
    description:
      "Whatever the chef is obsessed with this week. Limited seats, announced Monday night only. No menu: trust us. This is the reservation people fight for.",
    promote:
      "Monday evening Instagram story: ‘Tomorrow, Chef is cooking what he actually wants to eat. 12 seats. First come, first served. No menu. Just trust.’",
    tag: "Chef’s Table",
    tagColor: "oklch(0.55 0.14 85)",
    tagBg: "oklch(0.78 0.12 85 / 0.15)",
  },
  {
    id: 3,
    day: "Wednesday",
    name: "The Midweek Wine Down",
    description:
      "Natural wine pairing + seasonal small plates. Wednesday only. Position as the mid-week ritual for the guest who takes food seriously.",
    promote:
      "Post Wednesday morning: ‘Your Wednesday needs this more than another meeting. Natural wine. Seasonal plates. No agenda.’",
    tag: "Wine Pairing",
    tagColor: "oklch(0.35 0.08 15)",
    tagBg: "oklch(0.62 0.1 15 / 0.12)",
  },
  {
    id: 4,
    day: "Thursday",
    name: "The Borough Brunch",
    description:
      "Rotating borough-inspired brunch menu. Brooklyn one week, Queens the next, Bronx, Staten Island, Manhattan. A 5-week rotating celebration of NYC’s culinary diversity.",
    promote:
      "Build a content series: ‘This Sunday: Brooklyn’ with each borough’s food story told on social.",
    tag: "NYC Rotating",
    tagColor: "oklch(0.28 0.12 180)",
    tagBg: "oklch(0.28 0.12 180 / 0.1)",
  },
  {
    id: 5,
    day: "Friday",
    name: "The Friday Night Story",
    description:
      "Featured dish with a full narrative: where it came from, why the chef is making it, what it means. Printed as a one-page insert on every Friday table.",
    promote:
      "Post Thursday: ‘Friday’s featured dish comes with a story. And a reason to come back.’",
    tag: "Storytelling",
    tagColor: "oklch(0.45 0.14 330)",
    tagBg: "oklch(0.45 0.14 330 / 0.1)",
  },
  {
    id: 6,
    day: "Saturday",
    name: "The Saturday Showstopper",
    description:
      "The most photogenic, most shareable dish of the week. Designed specifically for social media. The food that stops the scroll.",
    promote:
      "Post Friday evening: ‘Tomorrow’s showstopper is ready. Come for the taste. Stay for the photo. 📸’: let the dish do the talking.",
    tag: "Social-First",
    tagColor: "oklch(0.55 0.2 25)",
    tagBg: "oklch(0.55 0.2 25 / 0.1)",
  },
  {
    id: 7,
    day: "Sunday",
    name: "The Sunday Family Feast",
    description:
      "Large-format sharing menu. Designed for groups and families. Sunday only. Advance booking required.",
    promote:
      "Post Saturday afternoon: ‘Sunday is for sharing. Large-format feast menu. Pre-order by noon. Feeds 4-6 people. Designed for the kind of Sunday that makes memories.’",
    tag: "Family Style",
    tagColor: "oklch(0.28 0.12 330)",
    tagBg: "oklch(0.28 0.12 330 / 0.1)",
  },
  {
    id: 8,
    day: "Seasonal",
    name: "The Seasonal Hero",
    description:
      "One ingredient, five preparations. Spring asparagus, summer tomatoes, fall squash, winter citrus. A chef’s love letter to the season.",
    promote:
      "Turn this into an educational content series: ‘What’s in season and why it’s on our menu this week.’",
    tag: "Seasonal",
    tagColor: "oklch(0.35 0.12 150)",
    tagBg: "oklch(0.55 0.14 150 / 0.1)",
  },
  {
    id: 9,
    day: "Always",
    name: "The Neighborhood Regular",
    description:
      "Loyalty special only for guests who’ve visited 5+ times. Not listed on the menu. Known only to regulars.",
    promote:
      "Do not advertise this publicly. Tell it to your regulars in person. The exclusivity IS the marketing.",
    tag: "Loyalty Only",
    tagColor: "oklch(0.55 0.14 85)",
    tagBg: "oklch(0.78 0.12 85 / 0.12)",
  },
  {
    id: 10,
    day: "Event",
    name: "The Kitchen Collab",
    description:
      "Guest chef from another NYC restaurant. One night only. Limited seats. This is the event that generates press, social media buzz, and new customer acquisition.",
    promote:
      "Announce 2 weeks in advance. Cross-promote with the guest chef’s social media. Sell tickets in advance.",
    tag: "Guest Chef",
    tagColor: "oklch(0.28 0.12 180)",
    tagBg: "oklch(0.28 0.12 180 / 0.1)",
  },
  {
    id: 11,
    day: "Weekly",
    name: "The Zero Waste Special",
    description:
      "Made entirely from what would otherwise be discarded: vegetable tops, bread heels, citrus peels, off-cuts. The sustainability story told through the most creative dish of the week.",
    promote:
      "Tell the story of what would have been wasted. People respect the creativity and the commitment.",
    tag: "Sustainability",
    tagColor: "oklch(0.35 0.12 150)",
    tagBg: "oklch(0.55 0.14 150 / 0.1)",
  },
  {
    id: 12,
    day: "Monthly",
    name: "The Cultural Feature",
    description:
      "Monthly rotating cuisine spotlight. Senegalese, Peruvian, Georgian, Filipino, Ethiopian, Colombian. A deep dive into one culinary culture, researched and executed with respect.",
    promote:
      "Partner with a community organization from that culture. Make it a cultural event, not just a menu change.",
    tag: "Cultural",
    tagColor: "oklch(0.45 0.14 330)",
    tagBg: "oklch(0.45 0.14 330 / 0.1)",
  },
];

export function RestaurantSpecials() {
  return (
    <section id="specials" data-ocid="restaurant-guide.specials_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <UtensilsCrossed size={20} style={{ color: "oklch(0.35 0.08 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.25)",
          }}
        >
          Section 4
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Rotating Weekly Specials
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Feature one of these 12 signature specials on a rotating weekly basis.
        Each is designed to drive covers, increase spend per head, and create
        the content and word-of-mouth that keeps your dining room full.
      </p>

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-ocid="restaurant-guide.specials_list"
      >
        {SPECIALS.map((s, i) => (
          <div
            key={s.id}
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.90 0.006 75)",
              background: "oklch(0.985 0.006 75)",
            }}
            data-ocid={`restaurant-guide.special_card.${i + 1}`}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ background: s.tagBg }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wide"
                style={{ color: s.tagColor }}
              >
                {s.day}
              </span>
              <Badge
                className="text-xs py-0"
                style={{
                  background: s.tagBg,
                  color: s.tagColor,
                  border: `1px solid ${s.tagColor.replace(")", " / 0.3)").replace("oklch(", "oklch(")})`,
                }}
              >
                {s.tag}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-sm text-foreground mb-2 leading-snug">
                #{s.id}: {s.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {s.description}
              </p>
              <div
                className="rounded-lg p-3"
                style={{
                  background: "oklch(0.28 0.12 330 / 0.05)",
                  border: "1px solid oklch(0.28 0.12 330 / 0.1)",
                }}
              >
                <div
                  className="text-xs font-semibold mb-1"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                >
                  How to promote:
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  {s.promote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
