import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  BarChart3,
  Lightbulb,
  Quote,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users2,
  Utensils,
} from "lucide-react";

const COMPLAINT_STATS = [
  {
    rank: "#1",
    label: "Mansplaining",
    desc: "Unsolicited advice from men, even when women are skilled players. Women report this is the single biggest deterrent.",
  },
  {
    rank: "#2",
    label: "Intimidating Atmosphere",
    desc: "Male-dominated spaces, unclear etiquette, and perceptions of unsafe environments deter first-time visitors.",
  },
  {
    rank: "#3",
    label: "Harassment",
    desc: "Inappropriate comments, sexual jokes, and unwanted advances.",
  },
  {
    rank: "#4",
    label: "Hostile Reactions",
    desc: "Some men react poorly to losing to women, leading to verbal abuse or aggressive behavior.",
  },
  {
    rank: "#5",
    label: "Safety Concerns",
    desc: "Intentional distractions, tampering with drinks, and physical contact discourage women from playing.",
  },
];

const LEAGUE_STATS = [
  {
    value: "20%+",
    label: "APA Leagues",
    detail: "Female participation rates above 20% in APA leagues",
  },
  {
    value: "<5 women",
    label: "BCA Leagues",
    detail: "Some BCA leagues have fewer than 5 women among 48 players",
  },
  {
    value: "30-50%",
    label: "Texas Leagues",
    detail: "Texas pool leagues report the highest female participation",
  },
  {
    value: "95% men",
    label: "Minnesota Leagues",
    detail: "Minnesota leagues are approximately 95% male",
  },
  {
    value: "Bars Win",
    label: "Bars vs. Pool Halls",
    detail:
      "Women play in bars with familiar groups far more than pool halls: replicate the bar's safety feeling",
  },
];

const GOALS = [
  "Increase female participation to 30-50% within 12 months",
  "Create a safe, inclusive, and welcoming environment for all women",
  "Build a strong community of female players through leagues, tournaments, and training opportunities",
];

const SIGNAGE_RULES = [
  "Treat Everyone with Respect",
  "Harassment Will Not Be Tolerated",
  "Only Give Advice if Asked",
  "Be Mindful of Personal Space",
  "Aggressive Behavior Will Not Be Tolerated",
  "No Unsolicited Advice or Advances",
  "No Drinks or Sitting on Pool Tables",
  "Be a Good Sport, Be an Adult",
  "Keep the Space Clean and Tidy",
];

const FOOD_ITEMS = [
  {
    name: "Loaded Truffle-Parmesan Fries",
    desc: "House-made whipped feta dip on the side. Replace standard gourmet fries with this Instagram-ready upgrade.",
    tag: "Most Shared",
  },
  {
    name: "Charcuterie & Snack Boards",
    desc: "Colorful, fresh ingredients with customizable dips: hummus, guacamole. Maximum photo opportunity.",
    tag: "#Instagrammable",
  },
  {
    name: "Gochugaru-Spiced Peanut Noodles / Kimchi Sliders",
    desc: "Bold Asian-fusion flavors and fermented ingredients trending across social media.",
    tag: "Trending",
  },
  {
    name: "8-Ball Cake Pops / Layered Chocolate Crunch Cake",
    desc: "Pool-themed viral desserts: visually distinct, shareable, and uniquely ownable.",
    tag: "Viral Dessert",
  },
];

const DRINK_ITEMS = [
  {
    name: '"The Cue Ball Spritz"',
    desc: "Signature mocktail with unique glassware, vibrant color, and a pool-themed name.",
  },
  {
    name: "Instagrammable Signature Cocktails",
    desc: "Unique glassware, vibrant colors, garnishes, low-calorie options: designed to be photographed.",
  },
  {
    name: "Kombucha on Tap",
    desc: "Probiotic-rich, wellness-forward, appeals to Gen Z trends. Feature prominently.",
  },
  {
    name: "Specialty Coffee",
    desc: "Lattes, cappuccinos: creates an all-day social atmosphere beyond just evenings.",
  },
];

const MARKETING_PLAN = [
  {
    icon: TrendingUp,
    title: "Social Media Campaigns",
    desc: "Promote events, lessons, and specials on Instagram, Facebook, and TikTok. Highlight testimonials and photos of women enjoying your pool hall.",
  },
  {
    icon: Users2,
    title: "Local Partnerships",
    desc: "Collaborate with women's groups and businesses to spread the word in the community.",
  },
  {
    icon: Star,
    title: "In-House Advertising",
    desc: "Posters, flyers, and table tents promoting events and specials at every table.",
  },
  {
    icon: Target,
    title: "Word of Mouth",
    desc: "Encourage attendees to bring friends with group incentives: bring 3 friends, play free.",
  },
  {
    icon: BarChart3,
    title: "Email & Text Marketing",
    desc: "Build a mailing list from event attendees. Send updates about upcoming lessons and specials.",
  },
];

const ACCENT = "#6366F1";

export function PoolHallWomensStrategySection() {
  return (
    <section
      id="womens-strategy"
      data-ocid="poolhall-guide.womens_strategy_section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${ACCENT}1A` }}
        >
          <Users2 size={20} style={{ color: ACCENT }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: `${ACCENT}1A`,
            color: "oklch(0.38 0.16 290)",
            border: `1px solid ${ACCENT}40`,
          }}
        >
          Women&apos;s Strategy
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting &amp; Retaining Women: The Full Playbook
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        Based on 22,000+ views and 2,100 community responses: the data is clear.
        Women want to play, and pool halls that make them feel welcome win.
      </p>

      {/* HERO STAT BANNER */}
      <div
        className="rounded-2xl p-6 mb-12"
        style={{
          background: `linear-gradient(135deg, ${ACCENT}14 0%, oklch(0.62 0.1 15 / 0.08) 100%)`,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${ACCENT}20` }}
          >
            <BarChart3 size={24} style={{ color: ACCENT }} />
          </div>
          <div>
            <h3
              className="font-display text-xl font-bold mb-1"
              style={{ color: "oklch(0.30 0.15 290)" }}
            >
              The Business Case for Women
            </h3>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "oklch(0.40 0.10 290)" }}
            >
              <strong>22,000+ views &middot; 2,100 responses</strong> from the
              Reddit Billiards community: the data is clear: women want to play,
              and pool halls that make them feel welcome win. This is not a
              social cause: it&apos;s an untapped market opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Taffer Diagnosis */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            The Taffer Diagnosis
          </h3>
        </div>
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: "oklch(0.97 0.005 290)",
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <p className="text-[15px] leading-relaxed text-foreground">
            Jon Taffer&apos;s first rule:{" "}
            <strong>
              &ldquo;You can&apos;t fix what you won&apos;t face.&rdquo;
            </strong>{" "}
            Here&apos;s what the data actually says about why women avoid pool
            halls: and why it&apos;s a <em>fixable problem</em>, not a permanent
            one.
          </p>
        </div>

        <h4 className="font-semibold text-foreground mb-4 text-[15px] uppercase tracking-wide">
          What Women Are Telling Us: Ranked by Complaint Frequency
        </h4>
        <div className="space-y-3">
          {COMPLAINT_STATS.map((item) => (
            <Card
              key={item.rank}
              className="overflow-hidden"
              data-ocid={`poolhall-guide.womens_complaint.item.${item.rank.replace("#", "")}`}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="flex-none w-14 flex items-center justify-center"
                    style={{ background: `${ACCENT}12` }}
                  >
                    <span
                      className="font-display text-lg font-bold"
                      style={{ color: ACCENT }}
                    >
                      {item.rank}
                    </span>
                  </div>
                  <div className="flex-1 p-4">
                    <p className="font-semibold text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION: The Numbers */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            The Numbers
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
          {LEAGUE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 flex flex-col gap-1"
              style={{
                background: `${ACCENT}0D`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <span
                className="font-display text-2xl font-bold"
                style={{ color: ACCENT }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-foreground">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
        {/* Taffer insight */}
        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{
            background: "oklch(0.97 0.01 50 / 0.7)",
            border: "1px solid oklch(0.75 0.08 50 / 0.4)",
          }}
        >
          <Quote
            size={28}
            className="shrink-0"
            style={{ color: "oklch(0.62 0.12 50 / 0.5)" }}
          />
          <p className="text-[15px] leading-relaxed text-foreground">
            <strong>Taffer&apos;s read:</strong> &ldquo;Your competitors are
            bars. To win, you don&apos;t need to be better at pool: you need to
            be safer and more welcoming.&rdquo;
          </p>
        </div>
      </div>

      {/* SECTION: Goals */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Goals
          </h3>
        </div>
        <div className="space-y-2">
          {GOALS.map((goal, i) => (
            <div
              key={goal}
              className="flex items-start gap-3 rounded-lg p-4"
              style={{
                background: `${ACCENT}0A`,
                border: `1px solid ${ACCENT}20`,
              }}
              data-ocid={`poolhall-guide.womens_goal.item.${i + 1}`}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${ACCENT}25` }}
              >
                <span className="text-xs font-bold" style={{ color: ACCENT }}>
                  {i + 1}
                </span>
              </div>
              <p className="text-[15px] text-foreground leading-relaxed">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: 6 Strategies */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            6 Core Strategies
          </h3>
        </div>

        {/* Strategy 1: Emotional Branding */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.1"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                01
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  Emotional Branding: Building a Shared Identity
                </h4>
                <p className="text-xs text-muted-foreground">
                  Reid Holmes &mdash; Appreciated Branding Connection
                </p>
              </div>
            </div>
            <div
              className="rounded-lg p-4 mb-5"
              style={{
                background: "oklch(0.62 0.1 15 / 0.07)",
                borderLeft: "3px solid oklch(0.62 0.1 15 / 0.5)",
              }}
            >
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Reid Holmes teaches</strong> that customers who feel
                genuinely valued become your most powerful advocates. Emotional
                branding is how you manufacture that feeling at scale.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                [
                  "Storytelling",
                  "Position the pool hall not just as a game venue, but as a safe, welcoming hub that empowers women in a traditionally male-dominated sport. Use campaigns that reflect empowerment and overcoming challenges: like Nike's approach.",
                ],
                [
                  "Authenticity and Shared Values",
                  "Be genuine and transparent in promoting inclusivity and safety. Clear anti-harassment policies must feel authentic to earn loyalty: like Patagonia's sustainability approach.",
                ],
                [
                  "Creating Shared Experiences",
                  "Focus on evoking positive emotions: pride, connection, belonging: through events and a unique atmosphere. This turns patrons into advocates, which is crucial for organic social media promotion.",
                ],
                [
                  "Appreciated Branding through Leagues",
                  "Elevate pool leagues beyond competition. Frame them as a strong, supportive community where players feel wanted, helping each other improve and fostering belonging.",
                ],
              ].map(([title, body]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <div>
                    <strong className="text-sm text-foreground">
                      {title}:{" "}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      {body}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Signage Card */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "oklch(0.97 0.005 290)",
                border: `2px solid ${ACCENT}35`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} style={{ color: ACCENT }} />
                <h5
                  className="font-display font-bold text-[15px]"
                  style={{ color: ACCENT }}
                >
                  Post These Rules: The Mansplaining-Free Zone Charter
                </h5>
              </div>
              <ul className="space-y-2">
                {SIGNAGE_RULES.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${ACCENT}20` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: ACCENT }}
                      />
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 rounded-lg p-3 text-xs"
                style={{
                  background: "oklch(0.92 0.04 50 / 0.4)",
                  borderLeft: "3px solid oklch(0.65 0.12 50 / 0.6)",
                }}
              >
                <strong className="text-foreground">Taffer Action:</strong>{" "}
                <span className="text-muted-foreground">
                  Train staff to handle harassment or inappropriate behavior
                  swiftly and professionally. Ensure security cameras are active
                  and visible staff are present to deter misconduct.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 2: Hire Female Staff */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.2"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                02
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Hire Female Staff
              </h4>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                "Employ women as bartenders, managers, or pool coaches to make the space feel more inclusive.",
                "Highlight skilled female staff members to inspire confidence in female customers.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: "oklch(0.97 0.01 50 / 0.7)",
                borderLeft: "3px solid oklch(0.65 0.12 50 / 0.5)",
              }}
            >
              <strong className="text-foreground">Taffer says:</strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;When women walk in and see a female bartender or coach,
                the psychological safety signal is immediate. This single hire
                changes the room.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 3: Women-Only Events */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.3"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                03
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Host Women-Only Events
              </h4>
            </div>
            <div
              className="rounded-lg p-4 mb-5"
              style={{
                background: "oklch(0.97 0.01 50 / 0.7)",
                borderLeft: "3px solid oklch(0.65 0.12 50 / 0.5)",
              }}
            >
              <p className="text-sm text-foreground">
                <strong>Taffer insight:</strong>{" "}
                <em>
                  &ldquo;Pool Tournaments run by women, for women, will attract
                  more women: and those women bring their friends.&rdquo;
                </em>
              </p>
            </div>
            <ul className="space-y-2 mb-5">
              {[
                "Organize women-only leagues and tournaments: a space to compete and grow skills",
                "Offer free 15-minute pool lessons with a pro once a month to attract beginners",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            {/* Lesson details card */}
            <div
              className="rounded-xl p-5"
              style={{
                background: `${ACCENT}08`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h5 className="font-semibold text-foreground mb-3 text-[15px]">
                Monthly &ldquo;Ladies&apos; Pool Night&rdquo;: Full Event
                Details
              </h5>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  [
                    "Monthly Event",
                    "Host a 'Ladies' Pool Night' with free lessons",
                  ],
                  [
                    "Scheduling",
                    "Sign-ups for 15-minute time slots, groups of 2-4 women per session",
                  ],
                  [
                    "Focus Areas",
                    "Stance, grip, aiming, cue ball control, and pool etiquette",
                  ],
                  [
                    "Incentives",
                    "Free drink or appetizer, or discount on future lessons",
                  ],
                  [
                    "Combine With",
                    "Themed events: Ladies' Night Specials, cocktail-making classes, or lower-priced drinks",
                  ],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: ACCENT }}
                    >
                      {label}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 4: Improve Atmosphere */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.4"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                04
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Improve the Atmosphere
              </h4>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                "Enhance lighting for a more inviting, comfortable setting: warm, atmospheric lighting",
                "Consider innovative ideas: blacklight pool nights, themed evenings",
                "Create a family-friendly or social atmosphere to attract women who may be hesitant about traditional pool halls",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: "oklch(0.62 0.1 15 / 0.07)",
                borderLeft: "3px solid oklch(0.62 0.1 15 / 0.4)",
              }}
            >
              <strong className="text-foreground">Reid Holmes insight:</strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;Your atmosphere IS your brand promise. If the space feels
                hostile before anyone opens their mouth, no policy will fix
                it.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 5: Community Outreach */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.5"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                05
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Community Outreach
              </h4>
            </div>
            <ul className="space-y-3 mb-4">
              {[
                "Partner with local women's organizations or sports clubs to promote your pool hall as a safe and inclusive space",
                "Use social media to highlight stories of successful women players and events",
                "Collaborate with women-focused businesses (fitness studios, salons) to cross-promote events",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{
                background: `${ACCENT}08`,
                borderLeft: `3px solid ${ACCENT}50`,
              }}
            >
              <strong className="text-foreground">
                Appreciated Branding connection:
              </strong>{" "}
              <span className="text-muted-foreground">
                &ldquo;Community partnerships aren&apos;t marketing:
                they&apos;re proof. Every collaboration is a public statement
                that you share these values.&rdquo;
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 6: Incentives */}
        <Card
          className="mb-5"
          data-ocid="poolhall-guide.womens_strategy.item.6"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{ background: `${ACCENT}18`, color: ACCENT }}
              >
                06
              </span>
              <h4 className="font-display font-bold text-lg text-foreground">
                Incentives for Women
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                "Offer discounts or free game nights for women",
                "Provide incentives for women to bring friends or partners: group rates drive new customers",
                "Host seasonal specials featuring themed cocktails and food",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* SECTION: Food & Drink: Viral Menu Strategy */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Utensils size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Food &amp; Drink: The Viral Menu Strategy
          </h3>
        </div>
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: "oklch(0.97 0.01 50 / 0.7)",
            border: "1px solid oklch(0.75 0.08 50 / 0.35)",
          }}
        >
          <p className="text-sm text-foreground leading-relaxed">
            <strong>Taffer:</strong>{" "}
            <em>
              &ldquo;When you create a destination food-and-drink establishment,
              more people are drawn to visit: which leads to more social media
              posts and attracts high-follower influencers who provide rave
              reviews and massive free advertising.&rdquo;
            </em>
          </p>
        </div>

        {/* Planned Loss Strategy */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: `${ACCENT}0A`,
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <h4 className="font-semibold text-foreground mb-2">
            🎯 Planned Loss Strategy
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Include fun, branded, take-home trinkets (mini pool-themed coasters
            or charms) with certain food orders. Encourage customers to
            &ldquo;steal&rdquo; branded items and post them on social media:
            creating an emotional inside joke and free marketing that compounds
            over time.
          </p>
        </div>

        <h4 className="font-semibold text-foreground mb-3">
          Food Menu Highlights
        </h4>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {FOOD_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl p-4"
              style={{
                background: `${ACCENT}08`,
                border: `1px solid ${ACCENT}20`,
              }}
              data-ocid={`poolhall-guide.womens_food.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h5 className="font-semibold text-sm text-foreground">
                  {item.name}
                </h5>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background: `${ACCENT}18`,
                    color: ACCENT,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-foreground mb-3">
          Drink Menu Highlights
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {DRINK_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl p-4"
              style={{
                background: "oklch(0.96 0.02 200 / 0.5)",
                border: "1px solid oklch(0.65 0.1 200 / 0.25)",
              }}
              data-ocid={`poolhall-guide.womens_drink.item.${i + 1}`}
            >
              <h5 className="font-semibold text-sm text-foreground mb-1">
                {item.name}
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: Marketing Plan */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Marketing Plan
          </h3>
        </div>
        <div className="space-y-3">
          {MARKETING_PLAN.map((item, i) => (
            <Card
              key={item.title}
              data-ocid={`poolhall-guide.womens_marketing.item.${i + 1}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${ACCENT}12` }}
                  >
                    <item.icon size={18} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION: Long-Term Enhancements */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Long-Term Business Enhancements
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* AI Tools */}
          <div
            className="rounded-xl p-5"
            style={{
              background: `${ACCENT}08`,
              border: `1px solid ${ACCENT}20`,
            }}
          >
            <h4
              className="font-display font-bold mb-3"
              style={{ color: ACCENT }}
            >
              AI-Powered Operational Tools
            </h4>
            <ul className="space-y-2">
              {[
                "AI-driven inventory management to optimize stock and reduce waste",
                "AI analysis of customer feedback to identify trends and improve service",
                "AI solutions for staff scheduling and workflow optimization",
              ].map((point) => (
                <li
                  key={point}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span className="mt-0.5 shrink-0" style={{ color: ACCENT }}>
                    •
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Risk Analysis */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "oklch(0.97 0.01 50 / 0.7)",
              border: "1px solid oklch(0.75 0.08 50 / 0.35)",
            }}
          >
            <h4
              className="font-display font-bold mb-3"
              style={{ color: "oklch(0.50 0.12 50)" }}
            >
              Risk Analysis & Mitigation
            </h4>
            <p className="text-xs text-muted-foreground mb-2">
              <strong className="text-foreground">Risks:</strong> Resistance
              from traditional customers, negative reviews.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              <strong className="text-foreground">Mitigation:</strong> Proactive
              customer education, robust staff training, crisis management plan.
            </p>
            <div
              className="rounded p-2.5 text-xs"
              style={{
                background: "oklch(0.97 0.01 50 / 0.5)",
                borderLeft: "3px solid oklch(0.65 0.12 50 / 0.5)",
              }}
            >
              <em>
                &ldquo;Every rescue faces resistance from regulars who liked how
                it was. Push through: the new audience you gain outnumbers the
                ones you lose.&rdquo;: Taffer
              </em>
            </div>
          </div>
          {/* Scalability */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "oklch(0.62 0.1 15 / 0.06)",
              border: "1px solid oklch(0.62 0.1 15 / 0.2)",
            }}
          >
            <h4
              className="font-display font-bold mb-3"
              style={{ color: "oklch(0.38 0.1 15)" }}
            >
              Scalability Plan
            </h4>
            <ul className="space-y-2 mb-3">
              {[
                "Roadmap for opening additional locations after initial success",
                "Franchising the inclusive pool hall model",
              ].map((point) => (
                <li
                  key={point}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(0.62 0.1 15)" }}
                  >
                    •
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div
              className="rounded p-2.5 text-xs"
              style={{
                background: "oklch(0.62 0.1 15 / 0.08)",
                borderLeft: "3px solid oklch(0.62 0.1 15 / 0.4)",
              }}
            >
              <em>
                &ldquo;A business that makes women feel genuinely valued
                isn&apos;t just a better pool hall: it&apos;s a replicable
                brand.&rdquo;: Reid Holmes
              </em>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Metrics for Success */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Metrics for Success
          </h3>
        </div>
        <div
          className="rounded-xl p-6"
          style={{
            background: `${ACCENT}08`,
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Track percentage of female participants monthly",
              "Measure growth of women-only leagues and tournaments",
              "Collect feedback from women customers quarterly",
              "Target: 30-50% female participation within 12 months",
            ].map((metric, i) => (
              <div
                key={metric}
                className="flex items-start gap-3"
                data-ocid={`poolhall-guide.womens_metric.item.${i + 1}`}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${ACCENT}25` }}
                >
                  <span className="text-xs font-bold" style={{ color: ACCENT }}>
                    ✓
                  </span>
                </div>
                <p className="text-sm text-foreground">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: Conclusion */}
      <div>
        {/* Pull quote */}
        <div
          className="rounded-2xl p-8 mb-8 text-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}12 0%, oklch(0.62 0.1 15 / 0.08) 100%)`,
            border: `1px solid ${ACCENT}30`,
          }}
        >
          <Quote
            size={36}
            className="mx-auto mb-4"
            style={{ color: `${ACCENT}60` }}
          />
          <p
            className="font-display text-xl md:text-2xl font-bold italic leading-relaxed max-w-2xl mx-auto"
            style={{ color: "oklch(0.28 0.14 290)" }}
          >
            &ldquo;Now is the time to break barriers, challenge stereotypes, and
            make pool a game for everyone.&rdquo;
          </p>
        </div>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          By addressing the specific concerns and barriers women face,
          implementing inclusive policies, and offering incentives such as free
          pool lessons and tailored food and drink options, your pool hall can
          become a model of inclusivity. Women are significantly
          underrepresented in the sport of pool: this disparity is a tremendous
          growth opportunity. By fostering an inclusive, welcoming environment,
          pool halls and leagues can tap into an underserved demographic,
          creating a more diverse and vibrant community.
        </p>
        {/* Reid Holmes closing */}
        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{
            background: "oklch(0.62 0.1 15 / 0.07)",
            border: "1px solid oklch(0.62 0.1 15 / 0.2)",
          }}
        >
          <Quote
            size={28}
            className="shrink-0"
            style={{ color: "oklch(0.62 0.1 15 / 0.4)" }}
          />
          <div>
            <p
              className="font-display text-[15px] font-semibold italic leading-relaxed"
              style={{ color: "oklch(0.28 0.08 15)" }}
            >
              &ldquo;Appreciated Branding isn&apos;t about a campaign. It&apos;s
              about creating a space where every customer: especially those who
              have historically felt excluded: leaves feeling genuinely valued.
              That feeling is your most powerful marketing tool.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
