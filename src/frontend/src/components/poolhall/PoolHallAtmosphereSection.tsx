import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const ATMOSPHERE_ITEMS = [
  {
    title: "Warm Atmospheric Lighting",
    icon: "💡",
    description:
      "Replace harsh overhead fluorescents with warm pendant lights over each table (2700K-3000K color temperature). Warm lighting extends dwell time by 20-30%: it is a direct revenue lever.",
    actionable:
      "Budget: $200-800 per table. ROI in increased dwell time within 2-4 weeks.",
  },
  {
    title: "Blacklight Pool Nights",
    icon: "🌈",
    description:
      "Monthly blacklight event: UV lights over neon-painted tables, glow-in-the-dark cue balls, neon cocktails. Creates a uniquely photogenic, totally ownable experience that drives massive social content.",
    actionable:
      "Run quarterly as a ticketed event: charge a premium for the exclusive experience.",
  },
  {
    title: "Comfortable Social Seating",
    icon: "🛋️",
    description:
      "Add lounge seating near tables: couches, bar-height chairs, and small tables for drinks. Women with longer dwell times spend 40% more on average.",
    actionable:
      "Create a 'rail' seating area where spectators can watch comfortably without crowding players.",
  },
  {
    title: "Music Calibrated for Conversation",
    icon: "🎵",
    description:
      "Volume at 65-70dB: loud enough for energy, quiet enough for conversation. Women rank 'noise level' as the #1 reason they choose one bar over another.",
    actionable:
      "Create a playlist mix: upbeat but not aggressive. Avoid heavy bass drops during social hours.",
  },
  {
    title: "Family-Friendly Afternoon Hours",
    icon: "👨‍👩‍👧",
    description:
      "Open to families and beginners during afternoon hours (12pm-5pm). This attracts women who want to learn without a late-night bar atmosphere, and creates a pipeline to evening regulars.",
    actionable:
      "No alcohol service required during family hours: revenue comes from lessons, table time, and food.",
  },
];

export function PoolHallAtmosphereSection() {
  return (
    <section id="atmosphere" data-ocid="poolhall-guide.atmosphere_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Lightbulb size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.12)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.3)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Atmosphere & Environment Upgrades
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Environment is a revenue tool, not decoration. These upgrades directly
        extend dwell time, increase spend per visit, and drive social sharing.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ATMOSPHERE_ITEMS.map((item, i) => (
          <Card
            key={item.title}
            className="hover:border-primary/35 hover:shadow-md transition-all duration-200"
            data-ocid={`poolhall-guide.atmosphere.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3"
                style={{ background: "oklch(0.78 0.12 85 / 0.1)" }}
              >
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {item.description}
              </p>
              <div
                className="rounded-lg px-3 py-2 text-xs"
                style={{
                  background: "oklch(0.78 0.12 85 / 0.08)",
                  borderLeft: "3px solid oklch(0.55 0.14 85 / 0.4)",
                }}
              >
                <span style={{ color: "oklch(0.40 0.1 85)" }}>
                  <strong>Action:</strong> {item.actionable}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
