import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Calendar,
  Globe,
  Heart,
  Network,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const STRATEGIES = [
  {
    icon: Globe,
    title: "Women-Inclusive Branding",
    description:
      'Use imagery and copy that reflects diverse women in business. Avoid stock photos of only men in suits. Showcase female client testimonials prominently. Explicit messaging matters: "Built for entrepreneurs of all backgrounds" signals that women belong here.',
    action:
      "Audit your website photos today: replace any imagery that skews male-only. Add one real female client testimonial to your homepage within the week.",
    color: "#475569",
    bg: "rgba(71,85,105,0.07)",
    border: "rgba(71,85,105,0.25)",
  },
  {
    icon: Award,
    title: "Women Entrepreneur Programs",
    description:
      'Create a "Women in Business" pricing tier or package. Offer a free 30-minute strategy call for women-owned businesses. Partner with NAWBO, Ladies Who Launch, and SBA Women-Owned programs to get in front of qualified leads actively seeking services.',
    action:
      "List your business in the SBA Women-Owned Business directory and reach out to one local NAWBO chapter this month.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    icon: Shield,
    title: "Safe Online Community",
    description:
      "Build a private community or forum space where women can ask questions without judgment. A zero-tolerance harassment policy in any community space is non-negotiable. Female community moderators signal safety through representation, not just policy.",
    action:
      "Add a clearly visible community guidelines page and post your harassment policy where it cannot be missed: before the sign-up form, not buried in the footer.",
    color: "#0D9488",
    bg: "rgba(13,148,136,0.07)",
    border: "rgba(13,148,136,0.25)",
  },
  {
    icon: BookOpen,
    title: "Content & Thought Leadership",
    description:
      'Feature women client success stories in your blog and social media. Publish content about challenges women entrepreneurs face: funding gaps, work-life integration, impostor syndrome. Guest posts from women business leaders. A "Women Who Win" monthly spotlight drives organic sharing.',
    action:
      'Launch a "Women Who Win" monthly spotlight on your blog. Interview your first female client this week: their story is your best marketing asset.',
    color: "#B45309",
    bg: "rgba(180,83,9,0.07)",
    border: "rgba(180,83,9,0.25)",
  },
  {
    icon: Calendar,
    title: "Flexible Service Models",
    description:
      "Offer asynchronous service options: mothers, caregivers, and women running multiple roles often cannot do real-time calls on a fixed schedule. Evening and weekend availability, self-paced onboarding, and childcare-friendly scheduling remove the barriers that cause women to choose a competitor instead.",
    action:
      'Add an async intake option to your service packages. A "leave a voice note or video" onboarding path converts clients who can\'t do live calls.',
    color: "#1D4ED8",
    bg: "rgba(29,78,216,0.07)",
    border: "rgba(29,78,216,0.25)",
  },
  {
    icon: Network,
    title: "Female Referral Network",
    description:
      "Create a women's referral program with meaningful incentives: not just a discount, but recognition and community visibility. Partner with women-focused business networks. List your business in women's business directories like HerBusiness, Women's Business Centers, and city-specific women's entrepreneurship groups.",
    action:
      "Identify two women-focused business networks in your city or niche and join or apply to list your services this week.",
    color: "#C2410C",
    bg: "rgba(194,65,12,0.07)",
    border: "rgba(194,65,12,0.25)",
  },
  {
    icon: Heart,
    title: "Authentic Online Presence",
    description:
      "Show the real women behind your business: if you have female team members or founders, feature them. Use inclusive language throughout your website and social media. Celebrate Women's History Month and International Women's Day with real initiatives, not just a social post that goes up and comes down.",
    action:
      'Audit your website copy for gendered defaults ("businessman," "manpower"). Replace with inclusive language. Takes under an hour and signals belonging to half your market.',
    color: "#BE185D",
    bg: "rgba(190,24,93,0.07)",
    border: "rgba(190,24,93,0.25)",
  },
];

const QUICK_WINS = [
  {
    day: "Day 1",
    action: "Add one real female client testimonial to your homepage",
  },
  {
    day: "Day 2",
    action:
      "Post your community guidelines and anti-harassment policy prominently",
  },
  {
    day: "Day 3",
    action: "List your business in the SBA Women-Owned directory",
  },
  {
    day: "Day 4",
    action: "Add an async intake option to your service packages",
  },
  {
    day: "Day 5",
    action: "Reach out to one NAWBO chapter or women's business network",
  },
  {
    day: "Day 6",
    action: "Audit and update website copy for inclusive language",
  },
  {
    day: "Day 7",
    action: 'Schedule your first "Women Who Win" spotlight interview',
  },
];

export function OnlineAttractingWomenSection() {
  return (
    <section
      id="attracting-women"
      data-ocid="online-services-guide.attracting_women_section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral-soft">
          <Users size={20} className="text-accent-neutral" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border">
          Growth Strategy
        </Badge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Attracting Women Entrepreneurs &amp; Clients
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Women-owned businesses are the fastest-growing segment of
        entrepreneurship. Online services that actively court women clients see{" "}
        <strong className="text-foreground">50% higher referral rates</strong>:
        and the strategies to get there cost almost nothing to implement.
      </p>

      {/* Stat callout */}
      <div className="rounded-2xl p-6 mb-10 bg-accent-neutral-soft border border-accent-neutral-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-none w-14 h-14 rounded-xl bg-background flex items-center justify-center shadow-sm">
            <TrendingUp size={28} className="text-accent-neutral" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-foreground mb-1">
              Women-owned businesses are the fastest-growing segment of
              entrepreneurship
            </p>
            <p className="text-sm text-muted-foreground">
              Online service providers that actively implement inclusive
              practices and women-focused outreach see{" "}
              <strong className="text-accent-indigo">
                50% higher referral rates
              </strong>{" "}
              from their female client base: referrals that bring in more women,
              compounding the effect.
            </p>
          </div>
        </div>
      </div>

      {/* 7-Day Quick Win Strip */}
      <div className="mb-10">
        <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-accent-neutral text-white text-xs flex items-center justify-center font-bold">
            7
          </span>
          7-Day Quick Start: Immediate Actions
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_WINS.map((win, i) => (
            <div
              key={win.day}
              className="rounded-xl p-4 bg-card border border-border"
              data-ocid={`online-services-guide.quick_win.${i + 1}`}
            >
              <div className="text-accent-neutral font-bold text-xs mb-1">
                {win.day}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {win.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy cards */}
      <h3 className="font-display text-xl font-bold text-foreground mb-5">
        7 Core Strategies
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {STRATEGIES.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="overflow-hidden border"
              style={{ borderColor: s.border }}
              data-ocid={`online-services-guide.women_strategy.${s.title.toLowerCase().replace(/\s+/g, "_")}`}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    <Icon size={18} style={{ color: s.color }} />
                  </div>
                  <h4 className="font-display font-bold text-base text-foreground leading-tight pt-1">
                    {s.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {s.description}
                </p>
                <div
                  className="rounded-lg p-3 text-xs"
                  style={{
                    background: s.bg,
                    borderLeft: `3px solid ${s.color}`,
                  }}
                >
                  <strong style={{ color: s.color }}>Take action:</strong>{" "}
                  <span className="text-muted-foreground">{s.action}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Partner organizations callout */}
      <div className="rounded-xl p-6 bg-card border border-border">
        <h4 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
          <Network size={16} className="text-accent-neutral" />
          Key Organizations to Partner With
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              name: "NAWBO",
              desc: "National Assoc. of Women Business Owners: 5,000+ chapters nationwide",
            },
            {
              name: "Ladies Who Launch",
              desc: "Community and programming for women entrepreneurs at every stage",
            },
            {
              name: "SBA Women-Owned",
              desc: "WOSB certification opens federal contracting and credibility",
            },
            {
              name: "HerBusiness",
              desc: "Online community and directory for women-owned service businesses",
            },
            {
              name: "Women's Business Centers",
              desc: "SBA-funded centers in every state offering referrals and resources",
            },
            {
              name: "IFundWomen",
              desc: "Crowdfunding + grants platform exclusively for women entrepreneurs",
            },
          ].map((org) => (
            <div
              key={org.name}
              className="rounded-lg p-3 bg-accent-neutral-soft border border-accent-neutral-border"
            >
              <div className="font-semibold text-sm text-accent-neutral mb-1">
                {org.name}
              </div>
              <p className="text-xs text-muted-foreground">{org.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
