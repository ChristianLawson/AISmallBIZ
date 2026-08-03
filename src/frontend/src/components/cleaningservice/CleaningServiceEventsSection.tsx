import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

const EVENTS = [
  {
    name: "Free Neighborhood Cleaning Day",
    timing: "Quarterly",
    description:
      "Pick one highly visible public space or donate a full clean to a community member in need. Post before/after photos, tag the neighborhood, and notify NextDoor in advance. Community PR that generates 10-20x the reach of a paid ad at a fraction of the cost.",
    outcome:
      "Organic NextDoor and Instagram mentions from neighbors who witness it",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.07)",
  },
  {
    name: "Real Estate Agent Partnership Events",
    timing: "Monthly outreach",
    description:
      "Host a 30-minute breakfast or coffee for local real estate agents introducing your move-in/move-out cleaning service. Offer a commission structure ($25-50 per referral booked). Real estate agents refer cleaning services constantly: the relationships you build in one quarter can generate years of recurring referrals.",
    outcome:
      "1 active realtor partner generates an average of 3-8 move-in/out jobs per month",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.07)",
  },
  {
    name: "Green Clean Awareness Month",
    timing: "April (Earth Month) & September",
    description:
      "Promote your eco-friendly products and non-toxic cleaning protocols with a themed campaign. Offer 'Green Clean Upgrade' for free for all new bookings during the month. Document your product ingredients and environmental impact in a social post series. Environmental positioning drives premium pricing and attracts your highest-LTV client segment.",
    outcome:
      "Eco-positioning converts premium clients who stay 2-3x longer than price-shopper clients",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.55 0.14 120 / 0.07)",
  },
  {
    name: "Spring Cleaning Special",
    timing: "March-April",
    description:
      "Your highest-demand seasonal window. Launch a 'Spring Deep Clean Package' at 15% off for the first 20 bookings. Promote on NextDoor 3 weeks in advance. Send to your email list. Partner with a local organization for charitable spring cleaning PR. Spring booking momentum can fill your calendar for 2-3 months of recurring clients.",
    outcome:
      "Spring is typically a 40-60% increase in demand for deep cleans: capitalize before competitors",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
  },
  {
    name: "Corporate Wellness Cleaning Partnership",
    timing: "Ongoing: quarterly outreach",
    description:
      "Reach out to local HR managers and office managers about workplace wellness and cleaning protocols. Commercial accounts are 4-6x the revenue of residential. A single medium-sized office generates the equivalent of 4-6 weekly residential clients. Host a '15-Minute Office Clean Demo' at a local co-working space to generate leads.",
    outcome:
      "One commercial account often generates $800-2,400/month in recurring revenue",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.06)",
  },
  {
    name: "Charity Clean for Shelters or Schools",
    timing: "Holiday season & spring",
    description:
      "Partner with a local women's shelter, domestic violence resource center, or elementary school to provide a complimentary deep clean. Document the process (with facility permission). Post on social media and tag the organization. This generates authentic goodwill content with higher engagement than any promotional post: and cements your community standing.",
    outcome:
      "Charity clean posts consistently outperform promotional content by 5-10x in shares and comments",
    color: "oklch(0.48 0.18 330)",
    bg: "oklch(0.62 0.14 330 / 0.06)",
  },
];

export function CleaningServiceEventsSection() {
  return (
    <section id="events" data-ocid="cleaning-service-guide.events_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.45 0.14 150 / 0.15)" }}
        >
          <Calendar size={20} style={{ color: "oklch(0.35 0.16 150)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.45 0.14 150 / 0.12)",
            color: "oklch(0.30 0.14 150)",
            border: "1px solid oklch(0.45 0.14 150 / 0.35)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Events &amp; Community Outreach
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Cleaning services grow fastest through community trust and strategic
        partnerships. These six events build both.
      </p>

      <div className="space-y-4">
        {EVENTS.map((event, i) => (
          <div
            key={event.name}
            className="rounded-xl p-5"
            style={{
              background: event.bg,
              border: `1px solid ${event.color}40`,
            }}
            data-ocid={`cleaning-service-guide.events.item.${i + 1}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-bold text-base text-foreground">
                {event.name}
              </h3>
              <Badge
                className="text-xs"
                style={{
                  background: event.bg,
                  color: event.color,
                  border: `1px solid ${event.color}50`,
                }}
              >
                {event.timing}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {event.description}
            </p>
            <div
              className="flex items-start gap-2 text-xs rounded-lg px-3 py-2"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: `1px solid ${event.color}30`,
              }}
            >
              <ExternalLink
                size={12}
                className="shrink-0 mt-0.5"
                style={{ color: event.color }}
              />
              <span style={{ color: event.color }}>
                <strong>Expected outcome:</strong> {event.outcome}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
