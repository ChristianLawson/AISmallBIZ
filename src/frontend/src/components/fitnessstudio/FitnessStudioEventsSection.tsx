import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Star } from "lucide-react";

const EVENTS = [
  {
    title: "Women-Only Beginner Workshop",
    cadence: "Monthly: first Saturday",
    description:
      "90-minute introductory workshop covering gym equipment basics, form fundamentals, and how to build a beginner workout plan. No experience required. Taught by female instructor.",
    impact:
      "Beginner workshops convert at 78% to paid membership: the highest conversion rate of any studio acquisition event.",
    tips: [
      "Limit to 10 participants for a personal, low-pressure experience",
      "Pair with a healthy smoothie or snack to create a social atmosphere",
      "Follow up personally within 48 hours with a custom 4-week plan",
    ],
  },
  {
    title: "Ladies' Night Workout",
    cadence: "Weekly: recurring anchor event",
    description:
      "High-energy, fun-first class followed by a social hour with healthy bites and a signature mocktail. No judgment, all levels welcome. The recurring event that builds your core community.",
    impact:
      "Recurring events build habit. After 3 consecutive Ladies' Nights, the majority of attendees convert to full membership.",
    tips: [
      "Alternate class formats monthly: dance cardio, strength, yoga: keeps it fresh",
      "Cross-promote with local salons, spas, and women's businesses",
      "Feature a 'WOW moment' each week: a new class format, a surprise guest instructor, a themed playlist",
    ],
  },
  {
    title: "Fitness Challenge (6-Week)",
    cadence: "Quarterly",
    description:
      "Structured 6-week transformation challenge with check-ins, a private member group, and a final celebration event. Focus on non-scale victories: strength, endurance, consistency milestones.",
    impact:
      "Challenges generate the highest engagement and the most user-generated social content of any studio program.",
    tips: [
      "Create a private Facebook or WhatsApp group exclusively for challenge participants",
      "Award prizes focused on consistency and effort, not physical appearance",
      "Document the journey with weekly check-in posts: content goldmine",
    ],
  },
  {
    title: "Charity 5K & Fitness Event",
    cadence: "Annual or bi-annual",
    description:
      "Partner with a women's health charity for a community 5K or fitness fundraiser. Members train together in the lead-up, building community bonds and creating powerful mission-driven content.",
    impact:
      "Charity events generate press coverage, massive social sharing, and deepen member loyalty through shared mission.",
    tips: [
      "Choose a cause genuinely aligned with your members: breast cancer, mental health, postpartum wellness",
      "Use the 8-week training program as a lead-up series: drives new memberships",
      "Feature participant stories and fundraising milestones heavily on social",
    ],
  },
  {
    title: "Member Milestone Celebrations",
    cadence: "Ongoing: monthly recognition",
    description:
      "Publicly celebrate member milestones: 10th class, 1-year anniversary, first pull-up, first 5K completion. Small recognition creates outsized loyalty: this is Appreciated Branding in its simplest form.",
    impact:
      "Members who are recognized publicly are 4x more likely to refer a friend within 30 days of their milestone.",
    tips: [
      "Create a 'Milestone Wall': physical or digital: for all member achievements",
      "Post a personalized Instagram Story for every milestone with member permission",
      "Small gifts (branded water bottle, class credit) amplify the recognition",
    ],
  },
  {
    title: "Brand Ambassador Program",
    cadence: "Ongoing: 3-month commitment",
    description:
      "Select 5-10 passionate female members as brand ambassadors. They receive free or discounted membership in exchange for authentic social content, referrals, and community leadership.",
    impact:
      "Ambassadors generate 8-15x more trusted referral traffic than paid advertising because their content is authentic and peer-to-peer.",
    tips: [
      "Choose members with genuine enthusiasm, not just follower count",
      "Provide clear content brief but give creative freedom: authenticity is the whole point",
      "Feature ambassador stories prominently: they are the human face of your brand",
    ],
  },
];

export function FitnessStudioEventsSection() {
  return (
    <section id="events" data-ocid="fitness-studio-guide.events_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 85 / 0.15)" }}
        >
          <Calendar size={20} style={{ color: "oklch(0.45 0.12 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.14 85 / 0.15)",
            color: "oklch(0.40 0.10 85)",
            border: "1px solid oklch(0.55 0.14 85 / 0.35)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Events &amp; Community Building
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The events and programs that build the community bonds that keep members
        coming back: and referring their friends.
      </p>
      <div className="space-y-5">
        {EVENTS.map((event, i) => (
          <Card
            key={event.title}
            className="hover:border-primary/30 transition-all duration-200"
            data-ocid={`fitness-studio-guide.events.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                <h3 className="font-display font-bold text-base text-foreground">
                  {event.title}
                </h3>
                <div
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shrink-0"
                  style={{
                    background: "oklch(0.55 0.14 85 / 0.12)",
                    color: "oklch(0.40 0.10 85)",
                    border: "1px solid oklch(0.55 0.14 85 / 0.3)",
                  }}
                >
                  <Clock size={11} />
                  {event.cadence}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {event.description}
              </p>
              <div
                className="rounded-lg px-3 py-2 text-xs mb-3"
                style={{
                  background: "oklch(0.55 0.18 290 / 0.07)",
                  border: "1px solid oklch(0.55 0.18 290 / 0.2)",
                }}
              >
                <span style={{ color: "oklch(0.40 0.18 290)" }}>
                  <strong>Impact:</strong> {event.impact}
                </span>
              </div>
              <ul className="space-y-1">
                {event.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <Star
                      size={11}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.55 0.14 85)" }}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
