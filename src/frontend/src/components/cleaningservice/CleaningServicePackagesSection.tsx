import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Leaf, Package, Star } from "lucide-react";

const PACKAGES = [
  {
    name: "Standard Clean",
    price: "$120-$180",
    frequency: "Weekly or bi-weekly",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
    border: "oklch(0.55 0.18 290 / 0.2)",
    includes: [
      "Kitchen: counters, stovetop, sink, exterior appliances",
      "Bathrooms: toilets, tubs, sinks, mirrors",
      "All floors vacuumed and mopped",
      "Dusting of all accessible surfaces",
      "Trash emptied throughout",
      "Bedroom tidying and bed linen straightening",
    ],
    bestFor: "Recurring maintenance clients: the core of your revenue",
  },
  {
    name: "Deep Clean",
    price: "$250-$400",
    frequency: "One-time or quarterly",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
    border: "oklch(0.45 0.14 150 / 0.2)",
    includes: [
      "Everything in Standard Clean",
      "Inside oven, refrigerator, and microwave",
      "Inside all cabinets and drawers",
      "Baseboards, door frames, light switches",
      "Window sills and tracks",
      "Behind and under all furniture and appliances",
    ],
    bestFor: "First-time clients: converts 65% to recurring standard clean",
  },
  {
    name: "Move-In / Move-Out",
    price: "$300-$500",
    frequency: "One-time",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    includes: [
      "Full deep clean of empty property",
      "Inside all appliances, cabinets, and closets",
      "All windows interior cleaned",
      "Garage sweep (if applicable)",
      "Touch-up walls and light fixtures",
      "Deposit-protection standard: documented with photos",
    ],
    bestFor: "Real estate agent partnerships: recurring referral source",
  },
  {
    name: "Commercial Clean",
    price: "$200-$800/visit",
    frequency: "Daily or weekly",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    includes: [
      "Office common areas and workstations",
      "Restrooms fully sanitized",
      "Kitchen and break room",
      "Trash removal and recycling",
      "Floor care (vacuum, mop, or buff)",
      "Specialized sanitization protocols available",
    ],
    bestFor: "Highest-margin service: 1 commercial account = 4-6 residential",
  },
];

const ADD_ONS = [
  { name: "Interior Window Washing", price: "+$60-$120" },
  { name: "Organizing Service (per room)", price: "+$75-$150" },
  { name: "Eco-Friendly Upgrade", price: "+$25-$40" },
  { name: "Fridge Interior Deep Clean", price: "+$45" },
  { name: "Oven Deep Clean", price: "+$50" },
  { name: "Laundry (wash + fold)", price: "+$35-$55" },
];

const BEFORE_AFTER_TIPS = [
  "Photograph the dirtiest point first: viewers need contrast to appreciate the transformation",
  "Use consistent angles: same position before and after creates the most compelling comparison",
  "Film a 10-15 second speed-clean reel: oven-to-sparkling transformations consistently go viral",
  "Caption with specifics: 'This oven had not been cleaned in 2 years: 45 minutes later' drives massive engagement",
  "Post on Instagram Reels and TikTok: cleaning transformation content averages 5-10x normal engagement",
];

export function CleaningServicePackagesSection() {
  return (
    <section id="services" data-ocid="cleaning-service-guide.packages_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.45 0.14 150 / 0.15)" }}
        >
          <Package size={20} style={{ color: "oklch(0.35 0.16 150)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.45 0.14 150 / 0.12)",
            color: "oklch(0.30 0.14 150)",
            border: "1px solid oklch(0.45 0.14 150 / 0.35)",
          }}
        >
          Section 2
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Services, Packages &amp; Pricing
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Four core service tiers, six add-ons, and the social media
        transformation strategy that turns every job into free marketing.
      </p>

      {/* Package grid */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-xl p-5"
            style={{ background: pkg.bg, border: `1px solid ${pkg.border}` }}
            data-ocid={`cleaning-service-guide.package.${pkg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="font-display font-bold text-base text-foreground">
                  {pkg.name}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {pkg.frequency}
                </span>
              </div>
              <span
                className="font-display font-bold text-lg shrink-0"
                style={{ color: pkg.color }}
              >
                {pkg.price}
              </span>
            </div>
            <ul className="space-y-1.5 mb-4">
              {pkg.includes.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: pkg.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="text-xs font-medium rounded-lg px-3 py-2"
              style={{ color: pkg.color, background: "rgba(255,255,255,0.6)" }}
            >
              💡 {pkg.bestFor}
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Star size={18} style={{ color: "oklch(0.55 0.23 285)" }} />
        Add-On Services
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {ADD_ONS.map((addon) => (
          <Card key={addon.name}>
            <CardContent className="p-4">
              <div className="font-medium text-sm text-foreground mb-1">
                {addon.name}
              </div>
              <div
                className="font-bold text-sm"
                style={{ color: "oklch(0.50 0.22 290)" }}
              >
                {addon.price}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Eco-friendly callout */}
      <div
        className="rounded-2xl p-6 mb-10 flex items-start gap-4"
        style={{
          background: "oklch(0.45 0.14 150 / 0.08)",
          border: "1px solid oklch(0.45 0.14 150 / 0.25)",
        }}
      >
        <Leaf
          size={24}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.35 0.16 150)" }}
        />
        <div>
          <h4 className="font-display font-bold text-base text-foreground mb-1">
            Eco-Friendly / Non-Toxic Upgrade
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use only plant-based, fragrance-free, non-toxic cleaning products.
            This is your highest-demand upgrade: especially for families with
            children, pets, and chemical sensitivities. Display product
            ingredient lists on your website and quote sheets. Women with
            families are the primary requesters of non-toxic cleaning: it\'s a
            key differentiator against franchise competitors.
          </p>
        </div>
      </div>

      {/* Before/after social strategy */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Camera size={18} style={{ color: "oklch(0.50 0.22 290)" }} />
        Instagrammable Before &amp; After: Your Free Marketing Engine
      </h3>
      <p className="text-muted-foreground text-sm mb-4 max-w-2xl">
        Cleaning transformations are among the highest-performing content
        categories on TikTok and Instagram. Every job is a potential viral
        moment: if you document it right.
      </p>
      <div className="space-y-2">
        {BEFORE_AFTER_TIPS.map((tip, i) => (
          <div
            key={tip}
            className="flex items-start gap-3 text-sm"
            data-ocid={`cleaning-service-guide.before_after_tip.${i + 1}`}
          >
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs"
              style={{ background: "oklch(0.55 0.23 285)", color: "#fff" }}
            >
              {i + 1}
            </span>
            <span className="text-muted-foreground leading-relaxed pt-0.5">
              {tip}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
