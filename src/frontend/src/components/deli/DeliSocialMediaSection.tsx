import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Video } from "lucide-react";

const CONTENT_CALENDAR = [
  {
    day: "Monday",
    theme: "Behind-the-Scenes Prep",
    idea: "Film yourself or your team prepping at 5-6am. The silence, the craft, the setup. This is the content that earns respect.",
    format: "Reel / TikTok",
  },
  {
    day: "Tuesday",
    theme: "Weekly Special Reveal",
    idea: "This week's rotating special: name, ingredients, story. Film the sandwich being built. Post 24h before it goes on the board.",
    format: "Reel + Story",
  },
  {
    day: "Wednesday",
    theme: "Customer Spotlight",
    idea: "Ask a regular (with permission) why they keep coming back. 30 seconds, candid, real. User-generated content performs 40% better than brand content.",
    format: "Story / Short Video",
  },
  {
    day: "Thursday",
    theme: "Ingredient Story",
    idea: "Where does your pastrami come from? Your bread? Tell the origin story of one ingredient. Connect the product to real people and places.",
    format: "Carousel / Reel",
  },
  {
    day: "Friday",
    theme: "What Are You Getting? Poll",
    idea: "Post your top 3 menu items with a poll: which are you ordering this weekend? Friday engagement drives Saturday foot traffic.",
    format: "Instagram Story Poll",
  },
  {
    day: "Saturday",
    theme: "Action Shots",
    idea: "The rush. The line. The sandwich being handed over. The sizzle of the griddle. The moment of the first bite. Document the energy.",
    format: "Photos + Reels",
  },
  {
    day: "Sunday",
    theme: "Week Recap",
    idea: "Best moments from the week. A thank you to customers. A teaser for next week's special. Build anticipation and community in one post.",
    format: "Carousel",
  },
];

export function DeliSocialMediaSection() {
  return (
    <section id="social-media" data-ocid="deli-guide.social_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.14 85 / 0.12)" }}
        >
          <TrendingUp size={20} style={{ color: "oklch(0.45 0.12 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Social Media for NYC Delis
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Prospect Park Deli proved it: 1B+ views, customers flying in from
        Chicago, California, and overseas. Here is exactly how they did it.
      </p>

      {/* Prospect Park Deli case study */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.08) 0%, oklch(0.78 0.12 85 / 0.08) 100%)",
          border: "1px solid oklch(0.78 0.12 85 / 0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Video size={20} style={{ color: "oklch(0.45 0.1 85)" }} />
          <span className="font-semibold text-foreground">
            Case Study: Prospect Park Deli: 1 Billion Views
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div
              className="font-medium text-sm mb-2"
              style={{ color: "oklch(0.28 0.12 330)" }}
            >
              What went viral
            </div>
            <p className="text-sm text-muted-foreground">
              A wagyu chopped cheese made on video. Simple concept,
              extraordinary execution. The combination of premium ingredients,
              skilled technique, and entertainment turned a sandwich into a
              1-billion-view moment. Customers started flying in from Chicago,
              California, and overseas just to experience it in person.
            </p>
          </div>
          <div>
            <div
              className="font-medium text-sm mb-2"
              style={{ color: "oklch(0.28 0.12 330)" }}
            >
              The philosophy behind it
            </div>
            <blockquote
              className="text-sm italic font-medium leading-relaxed"
              style={{ color: "oklch(0.35 0.08 50)" }}
            >
              &ldquo;You cannot have dull moments, bland moments, or a moment
              where somebody will swipe away. The videos are not really about
              food: it is about the guest.&rdquo;
            </blockquote>
            <p className="text-xs text-muted-foreground mt-2">
              : Yazen Odeh, Prospect Park Deli
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            ["1B+", "Total views across platforms"],
            ["3 States", "Customers flew from CA, IL & more"],
            ["0", "Ad spend: all organic content"],
          ].map(([val, label]) => (
            <div
              key={val}
              className="text-center p-3 rounded-xl"
              style={{ background: "oklch(0.97 0.006 75 / 0.7)" }}
            >
              <div
                className="font-display text-xl font-bold"
                style={{ color: "oklch(0.45 0.1 85)" }}
              >
                {val}
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content tips */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3">
              Content That Goes Viral for Delis
            </h3>
            <ul className="space-y-2">
              {[
                "Slicing the pastrami: the sound, the technique, the craft",
                "The sandwich stack: layer by layer, taller than expected",
                "The sizzle of the griddle: sensory content converts best",
                "Behind-the-scenes: 5am prep, bread delivery, brining the meat",
                "Customer reactions on first bite: authentic and unscripted",
                "The owner explaining the origin of a recipe",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="text-xs mt-0.5 shrink-0"
                    style={{ color: "oklch(0.45 0.1 85)" }}
                  >
                    ▶
                  </span>
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-sm text-foreground mb-3">
              Platform Strategy for 2026
            </h3>
            <div className="space-y-3">
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                >
                  Instagram + TikTok (primary)
                </div>
                <p className="text-xs text-muted-foreground">
                  These are your deli's primary growth channels in 2026. Reels
                  and TikTok videos are the highest-reach formats available to a
                  local business without an ad budget. Post here first, daily if
                  possible.
                </p>
              </div>
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                >
                  Influencer partnerships on a deli budget
                </div>
                <p className="text-xs text-muted-foreground">
                  Personality matters more than follower count. A local food
                  creator with 8,000 engaged followers will outperform a
                  celebrity with 800,000 distant ones. Invite them in, feed them
                  well, let them create naturally.
                </p>
              </div>
              <div>
                <div
                  className="font-medium text-xs uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                >
                  User-generated content
                </div>
                <p className="text-xs text-muted-foreground">
                  Your regulars are your best marketing team. Create a hashtag.
                  Put a sign asking customers to tag you. Reshare every post.
                  This is free word-of-mouth at scale.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly content calendar */}
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
          <Calendar size={18} style={{ color: "oklch(0.45 0.1 85)" }} />
          Weekly Content Calendar for Your Deli
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CONTENT_CALENDAR.map((day, i) => (
            <div
              key={day.day}
              className="rounded-xl p-4"
              style={{
                background:
                  i % 2 === 0
                    ? "oklch(0.78 0.12 85 / 0.07)"
                    : "oklch(0.28 0.12 330 / 0.05)",
                border: "1px solid oklch(0.90 0.006 75)",
              }}
              data-ocid={`deli-guide.social_calendar.${i + 1}`}
            >
              <div
                className="font-bold text-xs mb-1"
                style={{
                  color:
                    i % 2 === 0 ? "oklch(0.45 0.1 85)" : "oklch(0.28 0.12 330)",
                }}
              >
                {day.day}
              </div>
              <div className="font-semibold text-xs text-foreground mb-1">
                {day.theme}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {day.idea}
              </p>
              <div
                className="mt-2 text-xs font-medium"
                style={{ color: "oklch(0.62 0.1 15 / 0.7)" }}
              >
                {day.format}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
