import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Quote } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Empathy",
    subtitle: "See Your Listing Through Their Eyes",
    body: "Before anything else, pretend you do not know your business exists. Search for what you do in your neighborhood. What comes up? Is your listing the one that makes someone feel confident enough to visit? Empathy means designing your Google presence for the person who has never heard of you.",
    example:
      "Search your business category + your neighborhood right now. If your listing does not appear in the top 3, that is your first action item.",
  },
  {
    number: "02",
    title: "Authenticity",
    subtitle: "Real Photos, Real Story",
    body: "Appreciated Branding demands honesty. Your Google Maps photos should show your actual space, your actual team, your actual products. Customers who feel surprised when they arrive: in a bad way: will never come back. Customers who feel it matches or exceeds what they saw online become your most loyal advocates.",
    example:
      "Replace every stock photo with a real one this week. A smartphone photo of your real space beats a perfect studio shot of someone else's.",
  },
  {
    number: "03",
    title: "Customer-Centricity",
    subtitle: "Every Review Is a Gift",
    body: "In Appreciated Branding, the customer's experience is the brand. Reviews are your customers giving you free market research. The business that responds thoughtfully to a 1-star review: and actually fixes the problem: earns more trust than the business with 100 unchallenged 5-star reviews.",
    example:
      "Set a 48-hour rule: respond to every new review within 48 hours. Thank the positive, acknowledge and act on the negative.",
  },
  {
    number: "04",
    title: "Emotional Connection",
    subtitle: "Posts That Make People Feel Something",
    body: "Your Google Business Profile lets you post. Most businesses ignore this. The ones that do not: and post content with warmth, personality, and genuine moments: build emotional memory. A customer who feels something about your business does not just return. They tell people.",
    example:
      "Post one personal story or milestone per month alongside your offers and updates. One human moment beats ten promotional posts.",
  },
  {
    number: "05",
    title: "Consistency",
    subtitle: "Every Detail Sends a Signal",
    body: "Your business name spelled three different ways across Google, Yelp, and your website. Your hours wrong on one platform. Your phone number outdated in one place. Each inconsistency costs you a customer and costs Google confidence in your listing. Appreciated Branding means owning every touchpoint: and Google Maps is your most important one.",
    example:
      "Run a full audit: Google Business Profile, Apple Maps, Yelp, Facebook. Every detail should match exactly. This takes 2 hours and could be worth thousands.",
  },
];

export function GoogleMapsBrandingSection() {
  return (
    <section id="branding-maps" data-ocid="googlemaps-guide.branding_section">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 18 / 0.12)" }}
        >
          <MapPin size={20} style={{ color: "oklch(0.45 0.18 18)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 18 / 0.1)",
            color: "oklch(0.38 0.14 18)",
            border: "1px solid oklch(0.62 0.1 18 / 0.3)",
          }}
        >
          Appreciated Branding
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding: Your Google Maps Presence Is Your Brand
      </h2>
      <p className="text-muted-foreground text-lg mb-1 max-w-2xl">
        By Reid Holmes &mdash; <em>Appreciated Branding: This Is The Way</em>
      </p>

      {/* Pull quote */}
      <div
        className="rounded-xl p-5 mb-10 mt-4 flex items-start gap-4"
        style={{
          background: "oklch(0.62 0.1 18 / 0.07)",
          border: "1px solid oklch(0.62 0.1 18 / 0.2)",
        }}
      >
        <Quote
          size={32}
          className="shrink-0"
          style={{ color: "oklch(0.62 0.1 18 / 0.4)" }}
        />
        <div>
          <p
            className="font-display text-lg font-semibold italic leading-relaxed"
            style={{ color: "oklch(0.28 0.08 18)" }}
          >
            &ldquo;Your Google Maps listing isn&apos;t a directory entry &mdash;
            it&apos;s the first impression 73% of your customers will ever see.
            Make them feel something.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &mdash; Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      {/* 5 Pillars */}
      <div className="space-y-5">
        {PILLARS.map((p) => (
          <Card
            key={p.number}
            className="overflow-hidden"
            data-ocid={`googlemaps-guide.branding_pillar.${p.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
                {/* Number badge sidebar */}
                <div
                  className="flex-none w-16 flex items-center justify-center"
                  style={{ background: "oklch(0.28 0.12 330 / 0.08)" }}
                >
                  <span
                    className="font-display text-2xl font-bold rotate-90 tracking-tight"
                    style={{ color: "oklch(0.28 0.12 330 / 0.5)" }}
                  >
                    {p.number}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {p.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      &mdash; {p.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {p.body}
                  </p>
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: "oklch(0.62 0.1 18 / 0.07)",
                      borderLeft: "3px solid oklch(0.62 0.1 18 / 0.4)",
                    }}
                  >
                    <strong style={{ color: "oklch(0.38 0.14 18)" }}>
                      Apply this:
                    </strong>{" "}
                    <span className="text-muted-foreground">{p.example}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
