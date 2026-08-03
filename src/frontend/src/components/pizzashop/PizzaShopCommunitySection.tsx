import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Heart,
  Lightbulb,
  MapPin,
  School,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

const STRATEGIES = [
  {
    title: "School Partnerships",
    icon: School,
    description:
      "Local schools are the most underutilized marketing channel for pizza shops. Parents order pizza for fundraisers, sports celebrations, and teacher appreciation events. A single school partnership can generate $2,000-5,000 in annual revenue while building brand loyalty with families.",
    tactics: [
      "Offer 'Spirit Night' fundraisers: 20% of sales go to the school's PTA",
      "Sponsor youth sports teams: jersey logo + post-game pizza party",
      "Create a 'Teacher Tuesday' discount: 15% off with school ID",
      "Deliver free pizza to school staff rooms during parent-teacher conferences",
      "Host end-of-season sports celebrations at your shop (catering + room rental)",
    ],
    metric: "School partnerships increase family visit frequency by 3x",
  },
  {
    title: "Late-Night Slice Culture",
    icon: Utensils,
    description:
      "The late-night slice is a cultural institution in every major city. College students, bar staff, and night-shift workers are hungry at 11pm-2am. Shops that capture this market see 15-25% revenue increases with minimal additional labor cost.",
    tactics: [
      "Stay open until 2am on weekends (Fri-Sat minimum)",
      "Offer 'Night Owl Special': $2 slices after 10pm (still 55% margin)",
      "Partner with nearby bars: 'Show your receipt from The Rusty Anchor, get a free drink with 2 slices'",
      "Hire one counter person + one oven person for late shift: low labor, high volume",
      "Post late-night hours prominently on Google and social media",
    ],
    metric:
      "Late-night sales can add $500-1,200/week with one extra staff member",
  },
  {
    title: "Sports Team Sponsorships",
    icon: Trophy,
    description:
      "Youth and amateur sports sponsorships are hyper-local marketing with measurable ROI. A $500 jersey sponsorship reaches 200+ families who attend games, see your logo, and talk about your brand in the stands.",
    tactics: [
      "Sponsor 3-5 local youth teams per season (soccer, baseball, basketball)",
      "Negotiate: logo on jersey + mention in game announcements + team pizza party",
      "Attend opening day with samples: face-to-face beats any ad",
      "Create a 'Championship Special' for teams that win tournaments",
      "Partner with adult leagues (softball, bowling) for post-game group orders",
    ],
    metric:
      "Each team sponsorship generates 40-60 new customer households per season",
  },
  {
    title: "Neighborhood Events",
    icon: Calendar,
    description:
      "Block parties, street fairs, and community festivals are opportunities to feed 500+ people in a single day. The visibility and goodwill generated from event catering pays dividends for months afterward.",
    tactics: [
      "Set up a mobile oven at street fairs and farmers markets (check permit requirements)",
      "Offer 'Neighborhood Night': 10% off for residents of a specific zip code",
      "Host monthly 'Pizza & Pints' with a local brewery: cross-promote to both audiences",
      "Sponsor community clean-up days: free pizza for volunteers afterward",
      "Create a 'Birthday Club': free personal pie during birthday month (collects emails)",
    ],
    metric:
      "Event participation increases local brand recognition by 60% within 3 months",
  },
];

const PARTNERSHIP_DEEP_DIVE = [
  {
    partner: "Local Breweries",
    benefit: "Cross-promotion to beer enthusiasts who also love pizza",
    action:
      "Create a 'Pizza & Pint' pairing menu. Host joint events. Share each other's social content.",
    roi: "Each brewery partnership drives 15-25 new customers per month",
  },
  {
    partner: "Apartment Complexes",
    benefit: "Direct access to residents who order delivery regularly",
    action:
      "Negotiate lobby flyer placement + resident discount code + move-in welcome package inclusion.",
    roi: "A 200-unit complex can generate $800-1,500/month in delivery orders",
  },
  {
    partner: "Office Buildings",
    benefit: "Lunch catering for 20-100 people, recurring weekly orders",
    action:
      "Drop off sample platters with menus. Offer 'Office Lunch Special': 10% off orders over $100.",
    roi: "One corporate client ordering weekly = $5,000-10,000/year",
  },
  {
    partner: "Food Banks & Shelters",
    benefit: "Community goodwill + tax deductions + staff morale",
    action:
      "Donate unsold slices at closing (not old: just unsold). Document on social media.",
    roi: "Community goodwill translates to word-of-mouth that no ad budget can buy",
  },
];

const RISK_ITEMS = [
  {
    risk: "Overcommitting to Events",
    mitigation:
      "Start with 1 event per month. Track revenue and labor cost. Only scale what is profitable. A 'community presence' that loses money every time is not sustainable.",
  },
  {
    risk: "School Partnership Burnout",
    mitigation:
      "Rotate partnerships annually. Do not promise every school everything. Focus on 2-3 deep relationships rather than 10 shallow ones. Depth drives loyalty.",
  },
  {
    risk: "Late-Night Safety Concerns",
    mitigation:
      "Install security cameras, keep lighting bright, and have two staff minimum for late shifts. Train staff on de-escalation. A safe late-night operation is a profitable one.",
  },
];

const SUCCESS_STORIES = [
  {
    name: "Di Fara Pizza, Brooklyn",
    lesson:
      "Dom DeMarco built a 50-year institution by knowing every regular by name. The shop became a destination not because of marketing, but because of relentless community presence. When he passed, the neighborhood mourned like family.",
    takeaway: "Community is built one customer at a time, over decades.",
  },
  {
    name: "Frank Pepe's, New Haven",
    lesson:
      "Frank Pepe's did not expand aggressively: they let demand come to them. The original location on Wooster Street became a pilgrimage site. Their community marketing was simply being the best version of themselves every single day.",
    takeaway: "Excellence is the best community marketing strategy.",
  },
  {
    name: "Lombardi's, NYC",
    lesson:
      "America's first pizzeria survived 100+ years by becoming part of the neighborhood fabric. They sponsored Little Italy festivals, hosted family celebrations, and treated every customer like a guest in their home.",
    takeaway: "Heritage and community are inseparable in the pizza business.",
  },
];

export function PizzaShopCommunitySection() {
  return (
    <section
      id="community"
      className="space-y-14"
      data-ocid="pizzashop-guide.community_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_BG }}
          >
            <Heart size={20} style={{ color: ACCENT }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Community & Local Marketing
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Community & Local Marketing: Become the Neighborhood's Living Room
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          The most successful pizza shops in America are not just restaurants:
          they are community institutions. Di Fara's, Frank Pepe's, Lombardi's:
          these names survived generations because they became part of the
          neighborhood's identity. This section covers the partnerships, events,
          and cultural positioning that turn a pizza shop into a community
          landmark.
        </p>
      </div>

      {/* Core Strategies */}
      <div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Four Pillars of Community Marketing
        </h3>
        <p className="text-muted-foreground mb-6">
          These four strategies work together. A school partnership drives
          families. Families become regulars. Regulars bring friends. Friends
          post on social media. The cycle compounds.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {STRATEGIES.map((s, i) => (
            <Card
              key={s.title}
              className="hover:border-primary/35 transition-all duration-200"
              data-ocid={`pizzashop-guide.community.item.${i + 1}`}
            >
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: ACCENT_LIGHT }}
                  >
                    <s.icon size={18} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <ul className="space-y-1.5">
                  {s.tactics.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span
                        className="mt-0.5 shrink-0"
                        style={{ color: ACCENT }}
                      >
                        →
                      </span>
                      {ex}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg p-2 text-[12px] font-medium"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}
                >
                  {s.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnership Deep Dive */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Users size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Strategic Partnerships That Drive Revenue
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Partnerships are not charity: they are revenue channels with
          measurable ROI. Each partnership below includes the negotiation
          framework and expected return.
        </p>
        <div className="space-y-3">
          {PARTNERSHIP_DEEP_DIVE.map((p, i) => (
            <div
              key={p.partner}
              className="rounded-xl p-5 bg-card border border-border"
              data-ocid={`pizzashop-guide.community.partnership.${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: ACCENT_LIGHT }}
                >
                  <MapPin size={18} style={{ color: ACCENT }} />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold text-foreground">{p.partner}</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Benefit:
                    </span>{" "}
                    {p.benefit}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Action:
                    </span>{" "}
                    {p.action}
                  </p>
                  <div
                    className="rounded-lg p-2 text-[12px] font-medium inline-block"
                    style={{ background: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {p.roi}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, rgba(245, 158, 11, 0.06) 100%)`,
          borderColor: `${ACCENT}40`,
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Heart size={18} style={{ color: ACCENT }} />
          <h3 className="font-display text-xl font-bold text-foreground">
            Lessons from Legendary Pizza Shops
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {SUCCESS_STORIES.map((story, i) => (
            <div
              key={story.name}
              className="rounded-xl p-4 bg-card border border-border space-y-2"
              data-ocid={`pizzashop-guide.community.story.${i + 1}`}
            >
              <p className="font-semibold text-foreground text-[14px]">
                {story.name}
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {story.lesson}
              </p>
              <div
                className="rounded-lg p-2 text-[12px] font-medium"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                {story.takeaway}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Analysis */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "oklch(0.62 0.1 15 / 0.05)",
          border: "1px solid oklch(0.62 0.1 15 / 0.18)",
        }}
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">
          Risk Analysis & Mitigation
        </h3>
        <div className="space-y-4">
          {RISK_ITEMS.map((r, i) => (
            <div
              key={r.risk}
              data-ocid={`pizzashop-guide.community.risk.${i + 1}`}
            >
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.38 0.1 15)" }}
              >
                ⚠️ Risk: {r.risk}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                <strong style={{ color: "oklch(0.35 0.08 15)" }}>
                  Mitigation:
                </strong>{" "}
                {r.mitigation}
              </p>
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
              The Community Flywheel
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Community marketing is not a campaign: it is a flywheel. One
              school partnership leads to 20 families. Those families post on
              social media. Their friends see it. Those friends visit. Some
              become regulars. Regulars bring colleagues. Colleagues order
              catering. Catering feeds offices. Office workers become regulars.
              The cycle never ends: but it starts with one genuine relationship.
              Pick one school, one sports team, or one neighborhood event. Go
              deep, not wide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
