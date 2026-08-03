import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Camera,
  CheckCircle2,
  Clock,
  Facebook,
  Hash,
  Instagram,
  Lightbulb,
  MapPin,
  MessageSquare,
  Share2,
  Star,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

const SAMPLE_WEEK = [
  {
    day: "Mon",
    platform: "Instagram",
    type: "Behind-the-Scenes",
    content:
      "Dough prep at 6am: the stretch, the fold, the proof. Film the process in natural light. No voiceover needed. The tactile satisfaction of dough work is universal content gold. Add text overlay: 'This dough started 24 hours ago.'",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Tue",
    platform: "TikTok",
    type: "Viral Format",
    content:
      "Dough-tossing sequence set to trending audio. Show the full arc: from ball to spinning disc to landing on the peel. TikTok's algorithm favors motion and skill. Tag #PizzaTok #DoughToss. This format consistently hits 10K+ views for pizzerias.",
    icon: Video,
    color: "#000000",
    bg: "bg-neutral-50",
    border: "border-neutral-200",
  },
  {
    day: "Wed",
    platform: "Instagram",
    type: "Product Spotlight",
    content:
      "Macro shot of a fresh pie coming out of the oven: cheese bubbling, crust charring, steam rising. Use a trending audio clip. Post at 11:30am to catch the lunch crowd decision window. The 'pull shot' (lifting the first slice) gets 3x more saves than static photos.",
    icon: Camera,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    day: "Thu",
    platform: "Facebook",
    type: "Community",
    content:
      "Share a local event or partner with a neighborhood business. 'We are donating 10% of Thursday sales to PS 127's arts program.' Community posts build goodwill and get shared 4x more than promotional content. Tag the school and local parent groups.",
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    day: "Fri",
    platform: "Instagram",
    type: "PROMO",
    content:
      "Weekend special announcement: film the special being made, not just a flyer. 'This weekend only: Truffle Honey Ricotta Pie. We made 40. When they are gone, they are gone.' Scarcity drives action. Post at 4pm Friday to capture dinner planning.",
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    isPromo: true,
  },
  {
    day: "Sat",
    platform: "TikTok",
    type: "Action",
    content:
      "Saturday night energy: the oven roaring, pies flying, customers laughing. Show the room full, not empty. Social proof is the most powerful marketing tool. A packed pizzeria on Saturday night makes everyone want to be there next Saturday.",
    icon: Video,
    color: "#000000",
    bg: "bg-neutral-50",
    border: "border-neutral-200",
  },
  {
    day: "Sun",
    platform: "Instagram",
    type: "UGC",
    content:
      "Repost customer content: a family photo, a first-bite reaction, a kids' pizza-making moment. Thank them by name in the caption. User-generated content builds community and costs $0. Create a branded hashtag and feature the best post every Sunday.",
    icon: Users,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
];

const _HASHTAGS = [
  "#PizzaShop",
  "#NYCPizza",
  "#WoodFired",
  "#PizzaLovers",
  "#LocalEats",
  "#SliceOfLife",
  "#PizzaNight",
  "#HandTossed",
];

const TAFFER_DIAGNOSES = [
  {
    symptom: "Your last post was 3 weeks ago",
    diagnosis:
      "You have gone dark. In the food business, a silent social page signals a closed kitchen. Customers assume you are not open or do not care. The algorithm buries inactive accounts within days.",
    fix: "Minimum 5 posts per week. Batch-film on Sunday. Schedule the week ahead. A dead page is a dead business.",
  },
  {
    symptom: "Every post is a menu photo with prices",
    diagnosis:
      "You are running a digital flyer, not a social presence. People do not follow businesses to see ads: they follow for personality, craft, and community. A feed of prices trains customers to shop by cost alone.",
    fix: "80/20 rule: 4 craft/community posts for every 1 promotional post. Show the dough, not the deal.",
  },
  {
    symptom: "No photos of real customers or real moments",
    diagnosis:
      "You are showing people an empty restaurant. The most persuasive content is a packed room, a smiling family, a chef mid-toss. Empty spaces do not sell experiences.",
    fix: "Ask 3 customers per shift for permission to feature them. Real faces outperform stock photos 10:1 on engagement.",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    role: "PRIMARY",
    why: "Instagram is the dominant platform for food discovery in 2026. The visual-first format is perfect for pizza: the cheese pull, the crust char, the steam rising. Reels get 3x the reach of static posts. Your target demographic (25-45, local, food-interested) lives here.",
    best: [
      "Reels of dough prep and oven pulls",
      "Carousel posts of specialty pies",
      "Stories for daily specials and polls",
      "Customer features and UGC reshares",
    ],
    icon: Instagram,
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    frequency: "5-7x/week",
  },
  {
    name: "TikTok",
    role: "GROWTH",
    why: "TikTok's algorithm is the most powerful organic discovery engine for local businesses. A single viral dough-tossing video can reach 100K+ local users. The platform favors authentic, unpolished content: perfect for a busy pizzeria. Gen Z and millennials discover restaurants here first.",
    best: [
      "Dough-tossing and stretching",
      "Oven pull reactions",
      "Behind-the-scenes kitchen chaos",
      "Trending audio + pizza content",
    ],
    icon: Video,
    color: "#000000",
    bg: "bg-neutral-50",
    border: "border-neutral-200",
    frequency: "3-5x/week",
  },
  {
    name: "Facebook",
    role: "COMMUNITY",
    why: "Facebook remains essential for local community building, event promotion, and reaching the 35-55 demographic. Facebook Groups, event pages, and local business recommendations drive serious foot traffic. Your catering and family clientele are here.",
    best: [
      "Event announcements",
      "Community partnerships",
      "Catering promotions",
      "Local group engagement",
    ],
    icon: Facebook,
    color: "#1877F2",
    bg: "bg-blue-50",
    border: "border-blue-200",
    frequency: "3-4x/week",
  },
];

const LOCAL_SEO_TACTICS = [
  {
    title: "Google Business Profile Mastery",
    icon: MapPin,
    content:
      "Post a photo of today's special every single morning. Update hours for holidays. Respond to every review within 24 hours. Add attributes: 'Outdoor seating,' 'Wheelchair accessible,' 'Free Wi-Fi.' These small actions compound into top-3 local search placement.",
    metric: "Businesses that post weekly get 2.8x more direction requests",
  },
  {
    title: "Review Management Protocol",
    icon: Star,
    content:
      "Respond to every review: positive and negative: within 24 hours. For negative reviews: acknowledge, apologize, invite offline resolution. Never argue publicly. A thoughtful response to a 1-star review can convert readers into customers who trust your integrity.",
    metric:
      "87% of consumers read responses to negative reviews before visiting",
  },
  {
    title: "Local Hashtag Strategy",
    icon: Hash,
    content:
      "Use 3-5 hashtags per post. Mix broad (#Pizza, #Foodie) with niche (#WoodFiredPizza, #NYCSlices) and local (#BrooklynEats, #AstoriaFood). Local hashtags have lower competition but higher intent: the people searching them are hungry and nearby.",
    metric: "Local hashtags drive 3x higher engagement than broad tags",
  },
];

const CONTENT_TIPS = [
  {
    title: "The Cheese Pull Shot",
    detail:
      "The single most engaging pizza photo: lift a slice slowly, capture the cheese stretch in 4K. This shot gets 5x more saves than any other pizza content. Film it fresh from the oven: the stretch is best in the first 60 seconds.",
  },
  {
    title: "Dough Prep Time-Lapse",
    detail:
      "24-hour dough proof compressed into 15 seconds. Show the transformation from rough mix to silky ball. Add text: 'This dough started yesterday.' Time-lapse content signals craft and patience: two qualities customers pay premium for.",
  },
  {
    title: "First-Bite Reactions",
    detail:
      "Film a customer's genuine first bite. The eyes widening, the involuntary 'mmm,' the reaching for a second slice. Authentic reactions are the most shareable content in food. Always ask permission and offer a discount for their next visit.",
  },
  {
    title: "The ' imperfections' Aesthetic",
    detail:
      "Do not hide the char. Do not smooth the crust. The leopard-spotted cornicione, the uneven sauce distribution, the hand-torn basil: these are signs of artisanal craft. Perfectly round, perfectly uniform pizza looks corporate. Imperfection looks handmade.",
  },
];

export function PizzaShopSocialMediaSection() {
  return (
    <section
      id="social-media"
      className="space-y-14"
      data-ocid="pizzashop-guide.social_media_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_BG }}
          >
            <Share2 size={20} style={{ color: ACCENT }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Social Media Strategy
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Pizza Shop Social Media: From Invisible to Irresistible
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          The pizza shops dominating social media in 2026 are not spending on
          ads : they are documenting craft. Reid Holmes' principle applies
          perfectly: every post is a <em>personal invitation</em> to experience
          something authentic. A wood-fired oven, a dough toss, a cheese pull:
          these are the moments that make someone drive across town.
        </p>
      </div>

      {/* Taffer Diagnosis */}
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: "oklch(0.98 0.01 25 / 1)",
          borderColor: "oklch(0.75 0.12 25 / 0.3)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <AlertCircle size={18} style={{ color: "oklch(0.55 0.18 25)" }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Taffer's Diagnosis: Why Your Pizza Shop's Social Media Is Invisible
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Jon Taffer does not walk past problems: he names them. Three common
          social media failures he'd call out in a struggling pizzeria:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {TAFFER_DIAGNOSES.map((d, i) => (
            <div
              key={d.symptom}
              className="rounded-xl p-5 bg-card border border-border space-y-3"
              data-ocid={`pizzashop-guide.social_media.diagnosis.${i + 1}`}
            >
              <div className="flex items-start gap-2">
                <AlertCircle
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.55 0.18 25)" }}
                />
                <p className="font-semibold text-foreground text-[15px]">
                  &ldquo;{d.symptom}&rdquo;
                </p>
              </div>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                <span className="font-semibold text-foreground">
                  Diagnosis:
                </span>{" "}
                {d.diagnosis}
              </p>
              <div
                className="rounded-lg p-3 text-[13px]"
                style={{ background: ACCENT_LIGHT }}
              >
                <span className="font-semibold" style={{ color: ACCENT }}>
                  Fix:{" "}
                </span>
                <span className="text-muted-foreground">{d.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Selection */}
      <div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Your Platform Playbook
        </h3>
        <p className="text-muted-foreground mb-6">
          You do not need to be everywhere. You need to dominate where your
          customers discover food. For pizza shops, that is visual-first
          platforms.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}
              data-ocid={`pizzashop-guide.social_media.platform.${p.name.toLowerCase()}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <p.icon size={24} style={{ color: p.color }} />
                  <span className="font-display text-xl font-bold text-foreground">
                    {p.name}
                  </span>
                </div>
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{
                    background:
                      p.role === "PRIMARY"
                        ? ACCENT
                        : p.role === "GROWTH"
                          ? "oklch(0.55 0.14 150)"
                          : "oklch(0.65 0.12 290)",
                  }}
                >
                  {p.role}
                </span>
              </div>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
                {p.why}
              </p>
              <div className="mb-3">
                <p className="text-[13px] font-semibold text-foreground mb-2">
                  Best for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.best.map((b) => (
                    <span
                      key={b}
                      className="text-[12px] px-2 py-1 rounded-md bg-card border border-border text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Frequency:
                </span>{" "}
                {p.frequency}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Tips */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Camera size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Instagram-Worthy Pizza Photography
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          The difference between a photo that gets 50 likes and one that gets
          5,000 is not the camera: it is the moment. Here are the four content
          formats that consistently perform for pizzerias:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {CONTENT_TIPS.map((tip, i) => (
            <div
              key={tip.title}
              className="rounded-xl p-5 bg-card border border-border space-y-2"
              data-ocid={`pizzashop-guide.social_media.content_tip.${i + 1}`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} style={{ color: ACCENT }} />
                <p className="font-semibold text-foreground text-[14px]">
                  {tip.title}
                </p>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {tip.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Week */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Clock size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Sample Week: Plug-and-Play Content Calendar
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          80% craft/community content, 20% promotional. This ratio is the
          difference between a page people follow and one they mute. Batch-film
          on Sunday, schedule for the week.
        </p>
        <div className="space-y-3">
          {SAMPLE_WEEK.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-xl border p-4 flex gap-4 items-start ${item.bg} ${item.border}`}
              data-ocid={`pizzashop-guide.social_media.week.${i + 1}`}
            >
              <div className="w-12 shrink-0 text-center">
                <p className="text-[13px] font-bold text-foreground">
                  {item.day}
                </p>
                <item.icon
                  size={16}
                  className="mx-auto mt-1"
                  style={{ color: item.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[13px] font-semibold text-foreground">
                    {item.platform}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      item.isPromo
                        ? "bg-amber-100 text-amber-700 border border-amber-300"
                        : "bg-card border border-border text-muted-foreground"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local SEO */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <MapPin size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Local SEO & Review Management
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Social media builds desire. Local SEO captures intent. When someone
          searches "pizza near me" at 7pm on a Friday, your Google Business
          Profile is the difference between a new customer and a missed
          opportunity.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {LOCAL_SEO_TACTICS.map((tactic, i) => (
            <Card
              key={tactic.title}
              data-ocid={`pizzashop-guide.social_media.seo.${i + 1}`}
            >
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <tactic.icon size={16} style={{ color: ACCENT }} />
                  <h4 className="font-semibold text-sm text-foreground">
                    {tactic.title}
                  </h4>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {tactic.content}
                </p>
                <div
                  className="rounded-lg p-2 text-[12px] font-medium"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}
                >
                  {tactic.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Reid Holmes Framing */}
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          borderColor: `${ACCENT}40`,
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Users size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Reid Holmes: Every Post Is a Personal Invitation
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Document, do not advertise",
              body: "A photo of dough being stretched at 6am says more than any menu photo. Real moments build real trust. Your regulars are your best marketing team: you just need to ask permission to feature them.",
            },
            {
              title: "Reply within 2 hours",
              body: "Every comment and DM is a customer who raised their hand. A quick reply closes the loop and signals a real person runs this page. Algorithms reward it. Customers remember it.",
            },
            {
              title: "Show the process, not just the product",
              body: "The 24-hour dough proof. The wood stacking. The oven temperature check. Process content signals craft and justifies premium pricing. Customers pay more for what they understand.",
            },
          ].map((tip, i) => (
            <div
              key={tip.title}
              className="rounded-xl p-4 bg-card border border-border space-y-2"
              data-ocid={`pizzashop-guide.social_media.reid_tip.${i + 1}`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} style={{ color: ACCENT }} />
                <p className="font-semibold text-foreground text-[14px]">
                  {tip.title}
                </p>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Metrics */}
      <div
        className="rounded-2xl border p-6 md:p-8"
        style={{
          background: "oklch(0.98 0.01 65 / 1)",
          borderColor: "oklch(0.75 0.12 65 / 0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Realistic Growth Milestones
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Month 1",
              metric: "100-200 new followers",
              action:
                "Post consistently, engage every comment, ask customers to tag you",
            },
            {
              label: "Month 3",
              metric: "First viral Reel (10K+ views)",
              action:
                "Dough-tossing or cheese-pull content reaches non-followers",
            },
            {
              label: "Month 6",
              metric: "Social drives 25% of walk-ins",
              action:
                "Ask new customers 'How did you hear about us?': track it religiously",
            },
          ].map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl bg-card border border-border p-4 space-y-2"
              data-ocid={`pizzashop-guide.social_media.milestone.${i + 1}`}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: ACCENT }}
              >
                {m.label}
              </span>
              <p className="font-semibold text-foreground text-[15px]">
                {m.metric}
              </p>
              <p className="text-[13px] text-muted-foreground">{m.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tip */}
      <div
        className="rounded-xl border-l-4 p-5"
        style={{
          borderLeftColor: ACCENT,
          background: ACCENT_LIGHT,
        }}
      >
        <div className="flex items-start gap-3">
          <Lightbulb
            size={18}
            className="mt-0.5 shrink-0"
            style={{ color: ACCENT }}
          />
          <div>
            <p className="font-semibold text-foreground mb-1">
              The One Metric That Matters Most
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Track <strong>saves</strong> on Instagram and{" "}
              <strong>shares</strong> on Facebook: not likes. Saves and shares
              mean someone found your content valuable enough to return to or
              show a friend. That is the signal that precedes a real customer.
              When your saves-per-post average above 15, start a $20/day paid ad
              campaign boosting your best-saved content to a 5-mile radius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
