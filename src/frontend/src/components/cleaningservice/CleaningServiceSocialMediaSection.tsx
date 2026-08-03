import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin, TrendingUp, Users } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    content: "Facebook: share a home organization or cleaning tip",
    detail:
      "'5 things to do before the cleaner arrives that make every clean 30% better.' Helpful, non-promotional content that builds trust with homeowners before they are ready to book. The tip should come from your real experience.",
    format: "Facebook Post",
    color: "oklch(0.45 0.12 240)",
    bg: "oklch(0.45 0.12 240 / 0.08)",
  },
  {
    day: "Tuesday",
    content: "Instagram: before/after kitchen or bathroom transformation",
    detail:
      "Your single highest-performing content type. Shoot the 'before' the moment you arrive and the 'after' when complete. Always get client permission. Add cleaning product names in the caption. These posts get shared to Stories by clients who are proud of their clean home.",
    format: "Instagram Reel or Carousel",
    color: "oklch(0.55 0.14 330)",
    bg: "oklch(0.55 0.14 330 / 0.08)",
  },
  {
    day: "Wednesday",
    content: "Facebook: local neighborhood tip or community resource",
    detail:
      "Share a relevant local resource: a community event, a neighborhood watch tip, or a 'best of' for local businesses. You are a local service: being embedded in the community conversation builds the trust that leads to bookings.",
    format: "Facebook Post",
    color: "oklch(0.45 0.12 240)",
    bg: "oklch(0.45 0.12 240 / 0.07)",
  },
  {
    day: "Thursday",
    content: "Facebook: customer review spotlight",
    detail:
      "Screenshot or quote a 5-star review with the client's first name (get permission). 'Maria said: &lsquo;I came home to the cleanest apartment I have ever seen.&rsquo;' Real words from real clients convert browsers to bookers faster than any promotional copy you write yourself.",
    format: "Facebook Post",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.35 0.12 150 / 0.07)",
  },
  {
    day: "Friday",
    content: "PROMO: Facebook seasonal special or limited offer",
    detail:
      "One clear promotion per week, maximum. 'Book a deep clean this month and get your oven cleaned free.' Add the booking link. Include your phone number. Set an expiry date to create urgency. This is your one promotional post of the week: make it specific and easy to act on.",
    format: "Facebook + Instagram Story",
    color: "oklch(0.48 0.18 40)",
    bg: "oklch(0.48 0.18 40 / 0.08)",
  },
  {
    day: "Saturday",
    content: "Team photo or equipment showcase",
    detail:
      "Show your uniformed team or professional cleaning equipment. 'This is who is coming to your home.' For a service that enters someone's personal space, showing faces and professionalism is trust infrastructure, not vanity.",
    format: "Instagram + Facebook",
    color: "oklch(0.38 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
  },
];

const PLATFORMS = [
  {
    name: "Facebook",
    icon: Users,
    priority: "Primary",
    color: "oklch(0.45 0.12 240)",
    bg: "oklch(0.45 0.12 240 / 0.09)",
    description:
      "Your primary discovery and word-of-mouth platform. Homeowners ages 30-60 search Facebook for local cleaning recommendations, read reviews, and ask community groups. Your Facebook Page is often the first thing a new client checks.",
    tactics: [
      "Local community groups",
      "Before/after post shares",
      "Review showcases",
      "Referral promotions",
    ],
  },
  {
    name: "Instagram",
    icon: Camera,
    priority: "Secondary",
    color: "oklch(0.55 0.14 330)",
    bg: "oklch(0.55 0.14 330 / 0.08)",
    description:
      "Before/after transformation content is cleaning's highest-performing Instagram format. A spotless kitchen reel can reach thousands of local women who are your exact customer. TikTok is now equally powerful: repurpose every Reel there.",
    tactics: [
      "Before/after Reels",
      "Product reveal shots",
      "Team + uniform content",
      "Client testimonial Stories",
    ],
  },
  {
    name: "Nextdoor",
    icon: MapPin,
    priority: "Local Boost",
    color: "oklch(0.45 0.16 140)",
    bg: "oklch(0.45 0.16 140 / 0.08)",
    description:
      "The highest-converting local platform for home services. Nextdoor users are homeowners looking for local recommendations in real time. A single 5-star recommendation on Nextdoor can generate 5-10 inquiries in a week.",
    tactics: [
      "Neighborhood intro post",
      "Seasonal promotions",
      "Respond to cleaning recommendations",
      "Seasonal specials",
    ],
  },
];

const HASHTAGS = [
  "#CleaningService",
  "#HomeClean",
  "#BeforeAndAfter",
  "#HouseCleaning",
  "#NYCCleaning",
  "#CleanHome",
  "#ProfessionalCleaning",
  "#CleaningTips",
];

export function CleaningServiceSocialMediaSection() {
  return (
    <section
      id="social-media"
      data-ocid="cleaning-service-guide.social_media_section"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 330 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.55 0.14 330)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 330 / 0.1)",
            color: "oklch(0.55 0.14 330)",
            border: "1px solid oklch(0.55 0.14 330 / 0.25)",
          }}
        >
          Social Media Strategy
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media for Cleaning Services
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Facebook is your primary platform for local discovery and word-of-mouth.
        Instagram is your visual proof engine. Nextdoor is your neighborhood
        trust builder. Each platform has a specific job.
      </p>

      {/* Taffer Banner */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "oklch(0.28 0.12 30 / 0.06)",
          border: "1px solid oklch(0.28 0.12 30 / 0.2)",
        }}
        data-ocid="cleaning-service-guide.social_taffer_banner"
      >
        <div className="flex items-start gap-3 mb-4">
          <Camera
            size={22}
            style={{ color: "oklch(0.55 0.18 30)" }}
            className="shrink-0 mt-0.5"
          />
          <div>
            <p className="font-display text-base font-bold text-foreground italic">
              &ldquo;Before/after photos are your most powerful diagnostic tool
              &mdash; show the problem and the fix. That single image is your
              entire sales argument. &rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &mdash; Jon Taffer framework applied to cleaning businesses
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Taffer always shows the problem before the solution. For a cleaning
          business, the before photo IS the problem your client has right now.
          The after photo is the transformation you deliver. Post these together
          and you have told a complete, convincing story in two images.
        </p>
      </div>

      {/* Platform breakdown */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Platform Priority
      </h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {PLATFORMS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="rounded-xl p-5"
              style={{
                background: p.bg,
                border: `1px solid ${p.color.replace(")", " / 0.2)")}`,
              }}
              data-ocid={`cleaning-service-guide.social_platform.${p.name.toLowerCase().replace(" ", "-")}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={16} style={{ color: p.color }} />
                <span className="font-bold text-sm text-foreground">
                  {p.name}
                </span>
                <Badge
                  className="text-[10px] ml-auto font-semibold"
                  style={{
                    background: p.color.replace(")", " / 0.15)"),
                    color: p.color,
                  }}
                >
                  {p.priority}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {p.description}
              </p>
              <ul className="space-y-1">
                {p.tactics.map((t) => (
                  <li key={t} className="text-xs flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Reid Holmes insight */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{
          background: "oklch(0.45 0.12 240 / 0.06)",
          border: "1px solid oklch(0.45 0.12 240 / 0.18)",
        }}
        data-ocid="cleaning-service-guide.social_reid_insight"
      >
        <p className="font-display text-base font-semibold italic text-foreground mb-2">
          &ldquo;Clients who feel safe recommending you to their neighbors are
          your best marketing asset &mdash; they&rsquo;re more credible than any
          ad you will ever run.&rdquo;
        </p>
        <p className="text-xs text-muted-foreground">
          &mdash; Reid Holmes, Appreciated Branding. A Nextdoor post by a
          satisfied neighbor reaches people who already trust that neighbor.
          That borrowed trust converts at 5&times; the rate of cold advertising.
          Make every client a potential advocate by making the experience worth
          sharing.
        </p>
      </div>

      {/* 7-day calendar */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Sample Week Content Calendar
      </h3>
      <div className="space-y-2 mb-10">
        {CONTENT_CALENDAR.map((day) => (
          <div
            key={day.day}
            className="flex items-start gap-4 rounded-xl p-4"
            style={{
              background: day.bg,
              border: `1px solid ${day.color.replace(")", " / 0.2)")}`,
            }}
            data-ocid={`cleaning-service-guide.social_calendar.${day.day.toLowerCase()}`}
          >
            <div className="w-28 shrink-0">
              <div className="font-bold text-xs" style={{ color: day.color }}>
                {day.day}
              </div>
              <div
                className="text-[10px] mt-0.5"
                style={{ color: day.color, opacity: 0.75 }}
              >
                {day.format}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                {day.content}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {day.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hashtags */}
      <div className="mb-8">
        <h3 className="font-display text-lg font-bold text-foreground mb-3">
          Core Hashtags for Cleaning Services
        </h3>
        <div className="flex flex-wrap gap-2">
          {HASHTAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-lg"
              style={{
                background: "oklch(0.55 0.14 330 / 0.08)",
                color: "oklch(0.55 0.14 330)",
                border: "1px solid oklch(0.55 0.14 330 / 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Before/After tactics box */}
      <div
        className="rounded-xl p-5 mb-8 grid sm:grid-cols-2 gap-5"
        style={{
          background: "oklch(0.55 0.14 330 / 0.05)",
          border: "1px solid oklch(0.55 0.14 330 / 0.15)",
        }}
      >
        <div>
          <div
            className="font-semibold text-sm mb-2"
            style={{ color: "oklch(0.55 0.14 330)" }}
          >
            Shooting a Perfect Before/After
          </div>
          <ul className="space-y-1.5">
            {[
              "Same angle, same lens: consistency makes the difference obvious",
              "Natural lighting where possible: avoid harsh overhead shadows",
              "Wipe the lens before shooting: smudges ruin the 'after' payoff",
              "Include a scale reference (a hand, a product) for context",
            ].map((tip) => (
              <li key={tip} className="text-xs flex items-start gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                  style={{ background: "oklch(0.55 0.14 330)" }}
                />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className="font-semibold text-sm mb-2"
            style={{ color: "oklch(0.45 0.12 240)" }}
          >
            Caption Formula That Converts
          </div>
          <ul className="space-y-1.5">
            {[
              "Open with the problem: 'This oven had not been touched in 6 months'",
              "Name what you used: 'Baking soda paste + 45 minutes of focus'",
              "Invite engagement: 'Is your oven overdue? Drop a 🙋 below'",
              "End with booking link or phone number: always",
            ].map((tip) => (
              <li key={tip} className="text-xs flex items-start gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                  style={{ background: "oklch(0.45 0.12 240)" }}
                />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Case Study */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "oklch(0.45 0.16 140 / 0.15)" }}
            >
              <TrendingUp size={16} style={{ color: "oklch(0.35 0.14 140)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-foreground">
                  Cleaning Service Social Win
                </span>
                <Badge
                  style={{
                    background: "oklch(0.45 0.16 140 / 0.12)",
                    color: "oklch(0.35 0.14 140)",
                  }}
                >
                  Case Study
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Queens-based residential cleaning service posted one Instagram
                before/after reel every Tuesday for 3 months. No paid ads, no
                influencer partnerships. By week 12 they had{" "}
                <strong>4,200 local followers</strong>, a{" "}
                <strong>waitlist of 23 clients</strong>, and referrals
                accounting for 60% of all new bookings. The before/after format
                did the work a sales page never could &mdash; it showed results,
                not promises.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
