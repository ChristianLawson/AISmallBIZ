import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type PersonaStatus = "new" | "improving";

interface JourneyStep {
  day: string;
  action: string;
  guideSection: string;
  insight: string;
}

interface Persona {
  id: string;
  name: string;
  age: number;
  businessType: string;
  status: PersonaStatus;
  avatarInitial: string;
  accentColor: string;
  challenge: string;
  goal: string;
  quote: string;
  journeySteps: JourneyStep[];
  beforeAfter?: { before: string; after: string };
  quickWin?: string;
  ctaLink: string;
}

const PERSONAS: Persona[] = [
  {
    id: "maria",
    name: "Maria Gonzalez",
    age: 34,
    businessType: "Deli",
    status: "improving",
    avatarInitial: "MG",
    accentColor: "#F59E0B",
    challenge:
      "Maria has run her Brooklyn deli for 3 years but 80% of her customers are men: she wants to attract more women and families.",
    goal: "Increase female and family customer base by 30%",
    quote:
      "I did not know where to start. The women-in-business section gave me a 7-day action plan I could actually use.",
    journeySteps: [
      {
        day: "Day 1",
        action:
          "Discovers the Deli guide and reads the 'Attracting Women' section",
        guideSection: "Attracting Women to Your Deli",
        insight:
          "Learns the #1 complaint (mansplaining) and implements clear store signage within 24 hours",
      },
      {
        day: "Day 3",
        action: "Uses the Google Maps optimization checklist",
        guideSection: "Google Maps Optimization",
        insight:
          "Updates her Google profile with women-friendly attributes and adds new photos of the seating area",
      },
      {
        day: "Day 7",
        action:
          "Plans her first Ladies' Lunch Special using the rotating menu ideas",
        guideSection: "Rotating Specials & Menu Ideas",
        insight:
          "Creates an Instagram post about the special: gets 47 new followers in one day",
      },
      {
        day: "Day 14",
        action: "Reads the Bar Rescue section and audits her store atmosphere",
        guideSection: "Jon Taffer Bar Rescue Principles",
        insight:
          "Rearranges seating for better visibility and comfort: fewer complaints from solo female diners",
      },
      {
        day: "Day 30",
        action: "Implements Reid Holmes Appreciated Branding framework",
        guideSection: "Reid Holmes Appreciated Branding",
        insight:
          "Rebrands her deli as a 'community gathering space': sees 28% increase in female customers",
      },
    ],
    beforeAfter: {
      before: "80% male customers, no Instagram presence, generic ambiance",
      after:
        "52% female customers, 340 Instagram followers, 28% revenue increase",
    },
    ctaLink: "/deli-guide",
  },
  {
    id: "zara",
    name: "Zara Okafor",
    age: 28,
    businessType: "Salon",
    status: "new",
    avatarInitial: "ZO",
    accentColor: "#EC4899",
    challenge:
      "Zara is a trained cosmetologist ready to open her first salon but has no business experience and does not know where to start.",
    goal: "Open a licensed, profitable salon within 60 days",
    quote:
      "The Start New Business guide walked me through every single form. I did not need a lawyer for most of it!",
    journeySteps: [
      {
        day: "Day 1",
        action: "Reads the Start New Business guide from the beginning",
        guideSection: "Step 1: Choose Your Business Structure",
        insight:
          "Decides on LLC over sole proprietor after reading the liability section: applies for EIN online in 10 minutes",
      },
      {
        day: "Day 3",
        action: "Works through the government paperwork table",
        guideSection: "Government Paperwork Checklist",
        insight:
          "Files DBA and state business registration: checks off 4 of 9 required forms",
      },
      {
        day: "Day 7",
        action: "Switches to the Salon guide for industry-specific setup",
        guideSection: "Salon Quick-Start Checklist",
        insight:
          "Discovers she needs a cosmetology establishment license: avoids a costly mistake",
      },
      {
        day: "Day 14",
        action: "Studies the Appreciated Branding section",
        guideSection: "Reid Holmes Appreciated Branding",
        insight:
          "Defines her brand around 'celebrating natural beauty': attracts a loyal Instagram following before opening",
      },
      {
        day: "Day 30",
        action:
          "Uses the Attracting Women strategies to plan her grand opening",
        guideSection: "Attracting Women to Your Salon",
        insight:
          "Books 18 appointments for opening week through a women's network referral",
      },
    ],
    quickWin:
      "Filed all required government paperwork in under 2 weeks using the site's checklist: saved an estimated $800 in legal fees",
    ctaLink: "/salon-guide",
  },
  {
    id: "james",
    name: "James Whitfield",
    age: 52,
    businessType: "Restaurant",
    status: "improving",
    avatarInitial: "JW",
    accentColor: "#10B981",
    challenge:
      "James has owned his Southern restaurant for 8 years but foot traffic has dropped 40% post-COVID and he cannot figure out why.",
    goal: "Recover lost foot traffic and modernize marketing",
    quote:
      "The Bar Rescue section hit me like a gut punch: in the best way. I was doing everything Taffer says not to do.",
    journeySteps: [
      {
        day: "Day 1",
        action: "Reads the Bar Rescue section of the Restaurant guide",
        guideSection: "Jon Taffer Bar Rescue Principles",
        insight:
          "Identifies 3 'stress triggers' in his dining room: fixes lighting and menu clutter the same day",
      },
      {
        day: "Day 3",
        action: "Completes the Google Maps optimization checklist",
        guideSection: "Google Maps & Local SEO",
        insight:
          "Discovers his Google profile has 23 unanswered reviews: responds to all of them within 48 hours",
      },
      {
        day: "Day 7",
        action: "Implements the social media advertising quick-start plan",
        guideSection: "Social Media Advertising",
        insight:
          "Runs first Facebook ad targeting a 5-mile radius: gets 12 table reservations in 3 days",
      },
      {
        day: "Day 14",
        action:
          "Studies the viral food marketing section and redesigns his specials board",
        guideSection: "Viral Marketing & Specials",
        insight:
          "Introduces an Instagrammable 'Southern Loaded Fries' dish: generates 34 organic social posts in one week",
      },
      {
        day: "Day 30",
        action:
          "Applies the Attracting Women section to host a Ladies' Brunch event",
        guideSection: "Attracting Women to Your Restaurant",
        insight:
          "First Ladies' Brunch sells out: 67% of attendees are new customers",
      },
    ],
    beforeAfter: {
      before:
        "40% drop in foot traffic, 23 unanswered reviews, no social media ads",
      after:
        "Foot traffic up 31%, 4.6 Google rating, 2 sold-out brunches per month",
    },
    ctaLink: "/restaurant-guide",
  },
  {
    id: "devon",
    name: "Devon Reyes",
    age: 41,
    businessType: "Retail",
    status: "new",
    avatarInitial: "DR",
    accentColor: "#8B5CF6",
    challenge:
      "Devon is leaving corporate retail management to open his own boutique clothing store but has no idea how to register a business or get permits.",
    goal: "Open a retail boutique legally and profitably within 90 days",
    quote:
      "I managed a store for 12 years but I would never registered a business. The Start New Business guide made it completely clear.",
    journeySteps: [
      {
        day: "Day 1",
        action: "Starts with the Start New Business guide",
        guideSection: "Business Structure Decision Guide",
        insight:
          "Chooses S-Corp over LLC after reading the tax benefits section: consults a CPA based on the 'Do You Need a Lawyer?' checklist",
      },
      {
        day: "Day 5",
        action: "Moves to the Retail guide for industry-specific requirements",
        guideSection: "Retail Quick-Start & Permits",
        insight:
          "Learns he needs a Certificate of Occupancy and seller's permit before opening: starts the applications immediately",
      },
      {
        day: "Day 10",
        action: "Studies Bar Rescue principles applied to retail store design",
        guideSection: "Jon Taffer Bar Rescue Principles for Retail",
        insight:
          "Redesigns his store layout for better traffic flow and impulse purchase zones",
      },
      {
        day: "Day 21",
        action:
          "Implements Appreciated Branding to define his boutique identity",
        guideSection: "Reid Holmes Appreciated Branding",
        insight:
          "Positions his boutique around 'confident everyday fashion for everyone': gets pre-opening email sign-ups",
      },
      {
        day: "Day 60",
        action: "Uses Attracting Women strategies for opening day promotion",
        guideSection: "Attracting Women to Your Retail Store",
        insight:
          "Opening day sees 143 customers: 61% women, exceeding his 50% target",
      },
    ],
    quickWin:
      "Completed all legal registrations and permits in 3 weeks using the government paperwork checklist: opened 2 weeks ahead of schedule",
    ctaLink: "/retail-guide",
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    age: 58,
    businessType: "Pool Hall",
    status: "improving",
    avatarInitial: "MC",
    accentColor: "#F97316",
    challenge:
      "Marcus runs a pool hall with great tables but 95% male clientele: revenue has plateaued and Yelp reviews mention the 'boys club' vibe.",
    goal: "Diversify customer base and increase monthly revenue by 25%",
    quote:
      "The Pool Hall guide is the most specific business advice I have ever gotten. It was written for me.",
    journeySteps: [
      {
        day: "Day 1",
        action: "Reads the Pool Hall guide's Immediate Wins section",
        guideSection: "7-Day Immediate Wins for Pool Halls",
        insight:
          "Prints the harassment policy signage and posts it that same evening: two male regulars leave, three new female customers stay longer",
      },
      {
        day: "Day 3",
        action: "Trains staff using the guide's staff training section",
        guideSection: "Staff Training & Atmosphere",
        insight:
          "Implements 'intervene within 30 seconds' rule for any unwanted behavior: staff morale improves noticeably",
      },
      {
        day: "Day 7",
        action:
          "Plans first Ladies' Pool Night using the guide's event template",
        guideSection: "Women-Only Events & Leagues",
        insight:
          "17 women sign up for the first Ladies' Pool Night within 24 hours of posting on Facebook",
      },
      {
        day: "Day 14",
        action: "Launches the viral food menu items from the Pool Hall guide",
        guideSection: "Viral Food & Drink Menu",
        insight:
          "Loaded Truffle-Parmesan Fries become the most photographed item: 22 Instagram tags in first week",
      },
      {
        day: "Day 30",
        action: "Applies Emotional Branding strategy from the Pool Hall guide",
        guideSection: "Emotional Branding & Community Building",
        insight:
          "Hosts first women's tournament: local news covers it, Facebook page gains 312 new followers",
      },
    ],
    beforeAfter: {
      before: "95% male clientele, revenue plateau, 3-star Yelp average",
      after:
        "38% female customers, 27% revenue increase, 4.4-star Yelp average",
    },
    ctaLink: "/pool-hall-guide",
  },
  {
    id: "priya",
    name: "Priya Nair",
    age: 31,
    businessType: "Online Services",
    status: "new",
    avatarInitial: "PN",
    accentColor: "#06B6D4",
    challenge:
      "Priya is a freelance graphic designer who wants to turn her side hustle into a registered, scalable online design agency.",
    goal: "Register a legitimate online business and land first 3 paying clients within 30 days",
    quote:
      "I was doing everything informally. The Online Services guide plus Start New Business gave me a real roadmap.",
    journeySteps: [
      {
        day: "Day 1",
        action:
          "Reads the Online Services guide overview and Start New Business guide together",
        guideSection: "Online Services Overview & Launch Checklist",
        insight:
          "Realizes she needs to register even for online-only services: files for LLC the same week",
      },
      {
        day: "Day 3",
        action: "Works through the technology stack section",
        guideSection: "Tech Tools for Online Services",
        insight:
          "Sets up a proper invoicing system and contract templates: sends her first formal proposal within 24 hours",
      },
      {
        day: "Day 7",
        action:
          "Uses the social media advertising quick-start for service businesses",
        guideSection: "Social Media Advertising for Online Services",
        insight:
          "Posts a LinkedIn case study using the guide's template: gets 2 inbound leads the same day",
      },
      {
        day: "Day 14",
        action: "Implements Appreciated Branding to define her agency brand",
        guideSection: "Reid Holmes Appreciated Branding for Online Services",
        insight:
          "Rebrands as 'Nair Creative Studio' with a clear positioning statement: website bounce rate drops 40%",
      },
      {
        day: "Day 21",
        action:
          "Discovers the Women's Organizations directory on the Start New Business page",
        guideSection: "Women's Organizations & Resources",
        insight:
          "Joins local Women's Business Center: gets introduced to 2 new clients through their network",
      },
    ],
    quickWin:
      "Landed 3 paying clients in 21 days by combining the Online Services marketing guide with the Women's Organizations network referrals",
    ctaLink: "/online-services-guide",
  },
];

type FilterType = "all" | "new" | "improving";

const STATUS_LABELS: Record<PersonaStatus, string> = {
  new: "New Business",
  improving: "Improving Existing",
};

const STATUS_COLORS: Record<PersonaStatus, string> = {
  new: "bg-emerald-50 text-emerald-700 border-emerald-200",
  improving:
    "bg-accent-neutral-soft text-accent-neutral border-accent-neutral-border",
};

function PersonaAvatar({
  initials,
  accentColor,
  size = "md",
}: {
  initials: string;
  accentColor: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-10 h-10 text-[15px]",
    md: "w-14 h-14 text-lg",
    lg: "w-20 h-20 text-2xl",
  };
  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-display font-bold text-white shrink-0`}
      style={{ backgroundColor: accentColor }}
    >
      {initials}
    </div>
  );
}

function BeforeAfterBox({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border">
      <div className="grid grid-cols-2">
        <div className="bg-destructive/5 p-4 border-r border-border">
          <p className="text-[15px] font-semibold uppercase tracking-wider text-destructive mb-2">
            Before
          </p>
          <p className="text-[15px] text-foreground leading-relaxed">
            {before}
          </p>
        </div>
        <div className="bg-emerald-50 p-4">
          <p className="text-[15px] font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            After
          </p>
          <p className="text-[15px] text-foreground leading-relaxed">{after}</p>
        </div>
      </div>
    </div>
  );
}

function QuickWinBox({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 flex gap-3 items-start">
      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
        <Zap size={16} className="text-emerald-600" />
      </div>
      <div>
        <p className="text-[15px] font-semibold uppercase tracking-wider text-emerald-700 mb-1">
          7-Day Quick Win
        </p>
        <p className="text-[15px] text-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function PersonaDetailPanel({
  persona,
  onClose,
  related,
  onSelectPersona,
}: {
  persona: Persona;
  onClose: () => void;
  related: Persona[];
  onSelectPersona: (p: Persona) => void;
}) {
  const ctaLabel = `Go to ${persona.businessType} Guide`;
  return (
    <motion.div
      key={persona.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      data-ocid={`personas.detail.${persona.id}`}
      className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden"
    >
      {/* Header */}
      <div
        className="relative px-6 sm:px-8 pt-8 pb-6"
        style={{
          background: `linear-gradient(135deg, ${persona.accentColor}12 0%, transparent 60%)`,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          data-ocid={`personas.detail.${persona.id}.close_button`}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-readable hover:text-foreground transition-colors"
          aria-label="Close detail"
        >
          ✕
        </button>
        <div className="flex items-start gap-5">
          <PersonaAvatar
            initials={persona.avatarInitial}
            accentColor={persona.accentColor}
            size="lg"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2 className="font-display font-bold text-2xl text-foreground">
                {persona.name}
              </h2>
              <span className="text-muted-readable text-[15px]">·</span>
              <span className="text-[15px] text-muted-readable">
                Age {persona.age}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge
                className={`text-[15px] border ${STATUS_COLORS[persona.status]}`}
                variant="outline"
              >
                {STATUS_LABELS[persona.status]}
              </Badge>
              <Badge variant="outline" className="text-[15px] border-border">
                {persona.businessType}
              </Badge>
            </div>
            <p className="text-[15px] text-muted-readable leading-relaxed">
              {persona.challenge}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-muted/60 p-4">
          <span className="text-xl leading-none mt-0.5" aria-hidden="true">
            🎯
          </span>
          <div>
            <p className="text-[15px] font-semibold text-muted-readable uppercase tracking-wider mb-0.5">
              Goal
            </p>
            <p className="text-[15px] font-medium text-foreground">
              {persona.goal}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-6 flex flex-col gap-8">
        {/* Journey timeline */}
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-5 flex items-center gap-2">
            <TrendingUp size={18} style={{ color: persona.accentColor }} />
            Their Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <ol className="flex flex-col gap-6">
              {persona.journeySteps.map((step, idx) => (
                <li
                  key={step.day}
                  className="pl-10 relative"
                  data-ocid={`personas.detail.${persona.id}.step.${idx + 1}`}
                >
                  <div
                    className="absolute left-0 top-0.5 w-8 h-8 rounded-full flex items-center justify-center text-white text-[15px] font-bold shadow-sm"
                    style={{ backgroundColor: persona.accentColor }}
                  >
                    {idx + 1}
                  </div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block text-[15px] font-bold px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: persona.accentColor }}
                    >
                      {step.day}
                    </span>
                    <span className="text-[15px] text-muted-readable border border-border rounded-full px-2.5 py-0.5">
                      {step.guideSection}
                    </span>
                  </div>
                  <p className="text-[15px] font-medium text-foreground mb-1">
                    {step.action}
                  </p>
                  <p className="text-[15px] text-muted-readable leading-relaxed flex items-start gap-1.5">
                    <CheckCircle2
                      size={13}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    {step.insight}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Before/After or Quick Win */}
        {persona.beforeAfter && (
          <div>
            <h3 className="font-display font-semibold text-base text-foreground mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-500" />
              Results Comparison
            </h3>
            <BeforeAfterBox
              before={persona.beforeAfter.before}
              after={persona.beforeAfter.after}
            />
          </div>
        )}
        {persona.quickWin && <QuickWinBox text={persona.quickWin} />}

        {/* Quote */}
        <blockquote
          className="border-l-4 pl-5 py-1"
          style={{ borderColor: persona.accentColor }}
        >
          <p className="text-base italic text-foreground leading-relaxed">
            &ldquo;{persona.quote}&rdquo;
          </p>
          <footer className="mt-2 text-[15px] text-muted-readable font-medium">
            : {persona.name}, {persona.businessType} Owner
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="flex justify-center pt-2">
          <Button
            asChild
            size="lg"
            data-ocid={`personas.detail.${persona.id}.cta_button`}
            className="button-cta px-8"
          >
            <Link
              to={persona.ctaLink as "/deli-guide"}
              onClick={() => window.scrollTo(0, 0)}
            >
              {ctaLabel} <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        {/* Related journeys */}
        {related.length > 0 && (
          <div>
            <h3 className="font-display font-semibold text-base text-foreground mb-4 flex items-center gap-2">
              <Users size={16} className="text-muted-readable" />
              Related Journeys
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => onSelectPersona(rel)}
                  data-ocid={`personas.related.${rel.id}`}
                  className="text-left flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <PersonaAvatar
                    initials={rel.avatarInitial}
                    accentColor={rel.accentColor}
                    size="sm"
                  />
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">
                      {rel.name}
                    </p>
                    <p className="text-[15px] text-muted-readable mt-0.5">
                      {rel.businessType} · {STATUS_LABELS[rel.status]}
                    </p>
                    <p className="text-[15px] text-muted-readable mt-1 line-clamp-2 leading-relaxed">
                      {rel.challenge}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function PersonaCard({
  persona,
  onClick,
  index,
}: {
  persona: Persona;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <button
        type="button"
        onClick={onClick}
        data-ocid={`personas.card.${persona.id}`}
        className="w-full text-left bg-card rounded-2xl border border-border p-5 flex flex-col gap-4 hover:border-primary/40 hover:shadow-lg hover:shadow-neutral transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <div className="flex items-start gap-3">
          <PersonaAvatar
            initials={persona.avatarInitial}
            accentColor={persona.accentColor}
            size="md"
          />
          <div className="min-w-0 flex-1">
            <p className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
              {persona.name}
            </p>
            <p className="text-[15px] text-muted-readable mt-0.5">
              Age {persona.age} · {persona.businessType}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            className={`text-[15px] border ${STATUS_COLORS[persona.status]}`}
            variant="outline"
          >
            {STATUS_LABELS[persona.status]}
          </Badge>
          <Badge
            variant="outline"
            className="text-[15px] border-border text-muted-readable"
          >
            {persona.businessType}
          </Badge>
        </div>

        <p className="text-[15px] text-muted-readable leading-relaxed line-clamp-2">
          {persona.challenge}
        </p>

        <div className="flex items-center justify-between pt-1 border-t border-border mt-auto">
          <span
            className="text-[15px] font-semibold"
            style={{ color: persona.accentColor }}
          >
            View journey →
          </span>
          <ArrowRight
            size={14}
            className="text-muted-readable group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
      </button>
    </motion.div>
  );
}

export default function PersonasPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selected, setSelected] = useState<Persona | null>(null);

  const filtered = PERSONAS.filter((p) => {
    if (filter === "new") return p.status === "new";
    if (filter === "improving") return p.status === "improving";
    return true;
  });

  function getRelated(persona: Persona): Persona[] {
    return PERSONAS.filter((p) => p.id !== persona.id).slice(0, 2);
  }

  function handleSelectPersona(p: Persona) {
    setSelected(p);
    setTimeout(() => {
      document
        .getElementById("personas-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div data-ocid="personas.page" className="flex flex-col">
      {/* HERO */}
      <section
        data-ocid="personas.hero.section"
        className="relative bg-muted/30 border-b border-primary/10 py-20 md:py-28 px-4 text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(71,85,105,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[15px] font-semibold mb-6 border border-primary/20 bg-primary/5 text-primary">
            <Users size={14} />
            Owner Stories
          </div>
          <h1 className="font-display font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-tight text-balance mb-5">
            See How Real Business Owners Use AISmallBiz™
          </h1>
          <p className="text-lg md:text-xl text-muted-readable leading-relaxed max-w-2xl mx-auto text-balance">
            Six detailed journeys: from day one to real results. Whether you are
            starting from scratch or fixing what is broken, find the story that
            matches yours.
          </p>
        </motion.div>
      </section>

      {/* FILTER + GRID */}
      <section
        data-ocid="personas.grid.section"
        className="bg-background py-16 md:py-20 px-4"
      >
        <div className="max-w-5xl mx-auto">
          {/* Filter bar */}
          <fieldset
            className="flex flex-wrap gap-2 mb-10 justify-center border-none p-0 m-0"
            aria-label="Filter personas by status"
          >
            {(["all", "new", "improving"] as FilterType[]).map((f) => {
              const labels: Record<FilterType, string> = {
                all: "All Personas",
                new: "New Business",
                improving: "Improving Existing",
              };
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setFilter(f);
                    setSelected(null);
                  }}
                  data-ocid={`personas.filter.${f}`}
                  className={`px-5 py-2.5 rounded-full text-[15px] font-semibold border transition-all duration-200 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background text-muted-readable border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                  aria-pressed={active}
                >
                  {labels[f]}
                </button>
              );
            })}
          </fieldset>

          {/* Persona cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((persona, i) => (
                <PersonaCard
                  key={persona.id}
                  persona={persona}
                  index={i}
                  onClick={() => handleSelectPersona(persona)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Trust note */}
          <div
            data-ocid="personas.trust_note"
            className="text-center text-[15px] text-muted-readable border-t border-border pt-8"
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
              These personas represent real owner archetypes from AISmallBiz™
              community research
            </span>
          </div>
        </div>
      </section>

      {/* DETAIL PANEL */}
      <AnimatePresence>
        {selected && (
          <section
            id="personas-detail"
            data-ocid="personas.detail.section"
            className="bg-muted/30 border-t border-primary/10 py-16 px-4"
          >
            <div className="max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => setSelected(null)}
                data-ocid="personas.detail.back_button"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-muted-readable hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to all personas
              </button>
              <PersonaDetailPanel
                persona={selected}
                onClose={() => setSelected(null)}
                related={getRelated(selected)}
                onSelectPersona={handleSelectPersona}
              />
            </div>
          </section>
        )}
      </AnimatePresence>
    </div>
  );
}
