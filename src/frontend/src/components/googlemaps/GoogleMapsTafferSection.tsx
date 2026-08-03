import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Claim Your Listing or Lose It"',
    detail:
      "Your unclaimed Google Business Profile is your competitor's opportunity. Every day you do not own it is a day you are invisible.",
  },
  {
    quote: '"Photos Are Your First Impression"',
    detail:
      "Blurry photos, no photos, stock photos: all tell customers you do not care. If your space looks like effort, post it like effort.",
  },
  {
    quote: '"Reviews Are Your Report Card"',
    detail:
      "You cannot hide from reviews. Respond to every single one: good and bad. Silence is the same as guilt.",
  },
  {
    quote: '"Update or Die"',
    detail:
      "Business hours that have not changed in 2 years. No specials posted. No recent photos. Google penalizes neglect. So do customers.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Profile Completeness",
    color: "oklch(0.35 0.22 280)",
    bg: "oklch(0.35 0.22 280 / 0.08)",
    border: "oklch(0.35 0.22 280 / 0.25)",
    items: [
      "Claimed listing",
      "Complete business name",
      "Correct address",
      "Phone number verified",
      "Website linked",
      "Business category set correctly",
    ],
  },
  {
    category: "Photos & Visual",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    border: "oklch(0.55 0.14 85 / 0.25)",
    items: [
      "10+ quality photos uploaded",
      "Interior + exterior shots",
      "Products/services shown",
      "Photos updated in last 90 days",
      "Team photos added",
    ],
  },
  {
    category: "Reviews & Reputation",
    color: "oklch(0.52 0.22 18)",
    bg: "oklch(0.62 0.1 18 / 0.07)",
    border: "oklch(0.52 0.22 18 / 0.25)",
    items: [
      "Requested reviews from last 10 customers",
      "Responded to all reviews in last 30 days",
      "Average 4.0+ stars",
      "Flagged fake/spam reviews",
    ],
  },
  {
    category: "Posts & Updates",
    color: "oklch(0.45 0.18 185)",
    bg: "oklch(0.45 0.18 185 / 0.07)",
    border: "oklch(0.45 0.18 185 / 0.25)",
    items: [
      "Posted in last 7 days",
      "Special offers listed",
      "Events posted",
      "Holiday hours updated",
      "New menu/products announced",
    ],
  },
  {
    category: "Local SEO",
    color: "oklch(0.55 0.18 55)",
    bg: "oklch(0.78 0.14 55 / 0.07)",
    border: "oklch(0.55 0.18 55 / 0.25)",
    items: [
      "Business description with local keywords",
      "Service areas defined",
      "Attributes filled (parking, accessibility, payments)",
      "Questions answered",
    ],
  },
  {
    category: "Analytics & Tracking",
    color: "oklch(0.42 0.2 245)",
    bg: "oklch(0.42 0.2 245 / 0.07)",
    border: "oklch(0.42 0.2 245 / 0.25)",
    items: [
      "Google Business insights reviewed this month",
      "Click-through rate tracked",
      "Direction requests monitored",
      "Phone call tracking enabled",
    ],
  },
];

export function GoogleMapsTafferSection() {
  return (
    <section id="taffer-maps" data-ocid="googlemaps-guide.taffer_section">
      {/* Section header */}
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
          Jon Taffer
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Jon Taffer on Google Maps: No Excuses
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Bar Rescue discipline applied to your digital front door. If Google
        can&apos;t find you, neither can your customers.
      </p>

      {/* Hero blockquote */}
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
          &ldquo;If your business isn&apos;t showing up on Google Maps, you
          don&apos;t have a business &mdash; you have a secret. And secrets
          don&apos;t pay bills.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          &mdash; Jon Taffer, Bar Rescue. Applied to Google Maps: visibility
          isn&apos;t optional. It&apos;s the price of being in business in 2026.
        </p>
      </div>

      {/* 4 Principle cards */}
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

      {/* 6-Category Audit grid */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Google Maps Rescue Audit &mdash; 6-Category Checklist
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AUDIT_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-4"
            style={{
              background: cat.bg,
              border: `1px solid ${cat.border}`,
            }}
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
