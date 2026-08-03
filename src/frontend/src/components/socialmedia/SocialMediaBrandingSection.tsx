import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Empathy",
    subtitle: "Content That Solves Problems",
    body: "Appreciated Branding on social media means every post asks: does this help the person scrolling? A deli owner posting three tips for keeping lunch fresh at the office connects with their audience. A deli owner posting their third promotional flyer this week does not. Empathy is understanding that your customer's time is precious and your content should earn it.",
    example:
      "For every promotional post, create two educational or entertaining posts. Tips, behind-the-scenes, customer stories, FAQs: content that gives first.",
    tagline: "Stop talking about yourself. Start helping your customers.",
  },
  {
    number: "02",
    title: "Authenticity",
    subtitle: "Show the Real You",
    body: "The photos, the stories, the team moments, the customer reactions: you have a documentary happening every single day in your business. Appreciated Branding says: share it. The Corner Cafe that posts a 30-second video of their baker arriving at 4am becomes a community institution. The one that only posts stock images becomes forgettable.",
    example:
      "Spend 15 minutes this week taking candid photos and videos in your business. Messy, real, human. Post the best one without over-editing it.",
    tagline:
      "The most powerful social media content is already in your business right now.",
  },
  {
    number: "03",
    title: "Customer-Centricity",
    subtitle: "Your Customers Are Your Best Content",
    body: "The most powerful social media strategy for a small business is not a paid ad campaign: it is turning your customers into advocates. Feature them, tag them, celebrate them. When a customer posts about your business and you amplify it, you tell the world: our customers matter to us. That creates emotional loyalty that outlasts any promotion.",
    example:
      "Create a hashtag for your business. Ask customers to use it. Reshare every post that does. Reward the most enthusiastic sharers with a personal thank-you.",
    tagline:
      "User-generated content is the most trusted advertising money cannot buy.",
  },
  {
    number: "04",
    title: "Emotional Connection",
    subtitle: "Tell Stories, Not Prices",
    body: "The businesses that dominate social media are the ones that make people feel something. Not the ones with the biggest budgets. A family-owned restaurant that shares the story of why they opened, what their grandmother's recipe means, what they almost lost during a hard year: that content builds emotional investment that a promotion never can.",
    example:
      "Write your origin story in 150 words. Post it. Then ask your long-term customers to share why they keep coming back.",
    tagline:
      "Nobody shares a price list. Everyone shares a story that moved them.",
  },
  {
    number: "05",
    title: "Consistency",
    subtitle: "Show Up Even When It is Hard",
    body: "Appreciated Branding is built through repeated, reliable proof that you care. Social media consistency is that proof delivered publicly. When you post regularly, respond promptly, and maintain your brand voice even on hard days, you tell your audience: we are still here, we are still committed, we still care. That reliability is the foundation of the emotional connection that drives loyalty.",
    example:
      "Build a 30-day content calendar. Block 20 minutes per day for social media. Consistency at 80% beats perfection at 20% every time.",
    tagline: "Your customers are watching: and so is the algorithm.",
  },
];

export function SocialMediaBrandingSection() {
  return (
    <section id="branding" data-ocid="socialmedia-guide.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <Users size={20} style={{ color: "oklch(0.38 0.1 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.3)",
          }}
        >
          Reid Holmes Framework
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding: Social Media Is Where Your Brand Lives or Dies
      </h2>
      <p className="text-muted-foreground text-lg mb-1 max-w-2xl">
        Reid Holmes' Appreciated Branding framework, applied to social media
        marketing for small businesses.
      </p>
      <p className="text-sm text-muted-foreground mb-6 italic">
        By Reid Holmes &mdash; from{" "}
        <em>Appreciated Branding: This Is The Way</em>
      </p>

      {/* Pull quote */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4"
        style={{
          background: "oklch(0.62 0.1 15 / 0.07)",
          border: "1px solid oklch(0.62 0.1 15 / 0.2)",
        }}
      >
        <Quote
          size={32}
          className="shrink-0"
          style={{ color: "oklch(0.62 0.1 15 / 0.4)" }}
        />
        <div>
          <p
            className="font-display text-lg font-semibold italic leading-relaxed"
            style={{ color: "oklch(0.28 0.08 15)" }}
          >
            &ldquo;In 2026, your social media presence is your brand. It&apos;s
            where customers decide if they trust you before they ever walk
            through your door.&rdquo;
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
            data-ocid={`socialmedia-guide.branding_pillar.${p.number}`}
          >
            <CardContent className="p-0">
              <div className="flex">
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
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {p.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      &mdash; {p.subtitle}
                    </span>
                  </div>
                  <p
                    className="text-xs font-medium italic mb-2"
                    style={{ color: "oklch(0.45 0.18 295)" }}
                  >
                    {p.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {p.body}
                  </p>
                  <div
                    className="rounded-lg p-3 text-xs"
                    style={{
                      background: "oklch(0.62 0.1 15 / 0.07)",
                      borderLeft: "3px solid oklch(0.62 0.1 15 / 0.4)",
                    }}
                  >
                    <strong style={{ color: "oklch(0.35 0.08 15)" }}>
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
