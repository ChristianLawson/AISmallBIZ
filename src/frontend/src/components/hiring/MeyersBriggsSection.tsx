import {
  Briefcase,
  Check,
  Lightbulb,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

/**
 * MBTI Personality-to-Roles Guide
 *
 * All 16 MBTI type cards rendered at once in a responsive grid (4 / 2 / 1).
 * Cards are color-coded by the four MBTI groups (Analysts, Diplomats,
 * Sentinels, Explorers). No click-to-expand: every detail is visible.
 */

type MbtiGroupId = "analysts" | "diplomats" | "sentinels" | "explorers";

interface MbtiGroup {
  id: MbtiGroupId;
  label: string;
  tagline: string;
  /** Hex accent used for the group header band and card top border */
  accent: string;
  /** Soft tint used for card backgrounds and chips */
  tint: string;
  /** Border tint for chips */
  chipBorder: string;
  /** Text color for chips */
  chipText: string;
}

interface MbtiType {
  code: string;
  name: string;
  group: MbtiGroupId;
  traits: string[];
  strengths: string[];
  idealRoles: string[];
  avoidRoles: string[];
  managementTip: string;
}

const GROUPS: MbtiGroup[] = [
  {
    id: "analysts",
    label: "Analysts",
    tagline: "INTJ · INTP · ENTJ · ENTP: Strategic, rational, theoretical",
    accent: "#7C3AED",
    tint: "#F5F3FF",
    chipBorder: "#DDD6FE",
    chipText: "#5B21B6",
  },
  {
    id: "diplomats",
    label: "Diplomats",
    tagline: "INFJ · INFP · ENFJ · ENFP: Empathic, idealistic, collaborative",
    accent: "#059669",
    tint: "#ECFDF5",
    chipBorder: "#A7F3D0",
    chipText: "#065F46",
  },
  {
    id: "sentinels",
    label: "Sentinels",
    tagline: "ISTJ · ISFJ · ESTJ · ESFJ: Practical, traditional, organized",
    accent: "#2563EB",
    tint: "#EFF6FF",
    chipBorder: "#BFDBFE",
    chipText: "#1D4ED8",
  },
  {
    id: "explorers",
    label: "Explorers",
    tagline: "ISTP · ISFP · ESTP · ESFP: Energetic, perceptive, spontaneous",
    accent: "#EA580C",
    tint: "#FFF7ED",
    chipBorder: "#FED7AA",
    chipText: "#C2410C",
  },
];

const TYPES: MbtiType[] = [
  // ── Analysts ──────────────────────────────────────────────
  {
    code: "INTJ",
    name: "The Architect",
    group: "analysts",
    traits: [
      "Independent, imaginative thinker",
      "Decisive and strategically driven",
      "Values competence and rigor",
      "Skeptical of authority and convention",
    ],
    strengths: [
      "Long-range strategic planning",
      "Translating vision into systems",
      "Solving complex, abstract problems",
    ],
    idealRoles: [
      "Operations Director",
      "Product Manager",
      "Business Strategist",
      "Data Analyst",
    ],
    avoidRoles: ["High-touch customer service", "Repetitive front-line retail"],
    managementTip:
      "Give them the destination, not the route: autonomy over method drives their best work.",
  },
  {
    code: "INTP",
    name: "The Logician",
    group: "analysts",
    traits: [
      "Curious, analytical, theoretical",
      "Loves finding patterns and models",
      "Flexible and open-minded",
      "Dislikes routine and bureaucracy",
    ],
    strengths: [
      "Deep technical problem-solving",
      "Innovation and prototyping",
      "Objective, evidence-based analysis",
    ],
    idealRoles: [
      "Software Developer",
      "R&D Specialist",
      "Business Analyst",
      "Systems Engineer",
    ],
    avoidRoles: ["Strict sales quotas", "Rigid administrative roles"],
    managementTip:
      "Pair them with a strong executor: they generate ideas, partners ship them.",
  },
  {
    code: "ENTJ",
    name: "The Commander",
    group: "analysts",
    traits: [
      "Bold, decisive, natural leader",
      "Relentlessly goal-oriented",
      "Confident and articulate",
      "Low tolerance for inefficiency",
    ],
    strengths: [
      "Driving growth and execution",
      "Organizing teams and resources",
      "Making tough calls under pressure",
    ],
    idealRoles: [
      "General Manager",
      "Startup Founder",
      "Sales Director",
      "Operations Lead",
    ],
    avoidRoles: ["Passive support roles", "Pure individual-contributor work"],
    managementTip:
      "Hand them a P&L and a stretch target: they thrive when accountable for outcomes.",
  },
  {
    code: "ENTP",
    name: "The Debater",
    group: "analysts",
    traits: [
      "Quick, inventive, energetic",
      "Loves brainstorming and debate",
      "Spots opportunities others miss",
      "Resists structure and routine",
    ],
    strengths: [
      "Ideation and rapid prototyping",
      "Persuasive pitching",
      "Pivoting strategy on new info",
    ],
    idealRoles: [
      "Marketing Strategist",
      "Business Development Rep",
      "Innovation Lead",
      "Brand Consultant",
    ],
    avoidRoles: ["Detail-heavy compliance work", "Routine bookkeeping"],
    managementTip:
      "Channel their energy with clear deliverables: without a deadline, ideas stay ideas.",
  },

  // ── Diplomats ─────────────────────────────────────────────
  {
    code: "INFJ",
    name: "The Advocate",
    group: "diplomats",
    traits: [
      "Insightful, principled, quiet",
      "Driven by meaning and mission",
      "Deeply empathetic",
      "Plans thoughtfully and follows through",
    ],
    strengths: [
      "Building mission-aligned culture",
      "Coaching and developing people",
      "Long-term vision with care",
    ],
    idealRoles: [
      "HR Manager",
      "Customer Success Lead",
      "Nonprofit Director",
      "Brand Strategist",
    ],
    avoidRoles: ["Aggressive cold-call sales", "Cutthroat trading desks"],
    managementTip:
      "Connect tasks to purpose: they outperform when the 'why' is clear.",
  },
  {
    code: "INFP",
    name: "The Mediator",
    group: "diplomats",
    traits: [
      "Idealistic, empathetic, creative",
      "Values authenticity and harmony",
      "Flexible and open-minded",
      "Sensitive to others' needs",
    ],
    strengths: [
      "Creative storytelling and content",
      "Building inclusive environments",
      "Patient, one-on-one mentoring",
    ],
    idealRoles: [
      "Content Writer",
      "UX Designer",
      "Community Manager",
      "Wellness Coach",
    ],
    avoidRoles: ["Hard-nosed negotiation", "High-volume call centers"],
    managementTip:
      "Protect their energy in large groups: give space for deep, focused work.",
  },
  {
    code: "ENFJ",
    name: "The Protagonist",
    group: "diplomats",
    traits: [
      "Charismatic, inspiring leader",
      "Naturally persuasive and warm",
      "Organized around people",
      "Strong sense of responsibility",
    ],
    strengths: [
      "Leading and motivating teams",
      "Client relationship building",
      "Communicating vision clearly",
    ],
    idealRoles: [
      "Sales Manager",
      "Team Lead",
      "Training & Development",
      "Account Manager",
    ],
    avoidRoles: ["Isolated solo projects", "Pure back-office admin"],
    managementTip:
      "Put them in front of people: they energize teams and win clients alike.",
  },
  {
    code: "ENFP",
    name: "The Campaigner",
    group: "diplomats",
    traits: [
      "Enthusiastic, creative, sociable",
      "Spots connections and possibilities",
      "Emotional and people-oriented",
      "Dislikes rigid structure",
    ],
    strengths: [
      "Networking and partnerships",
      "Creative marketing campaigns",
      "Energizing teams and customers",
    ],
    idealRoles: [
      "Social Media Manager",
      "Event Coordinator",
      "Brand Ambassador",
      "Recruiter",
    ],
    avoidRoles: ["Solitary data entry", "Strict assembly-line work"],
    managementTip:
      "Give variety and human contact: monotony is the fastest way to lose them.",
  },

  // ── Sentinels ─────────────────────────────────────────────
  {
    code: "ISTJ",
    name: "The Logistician",
    group: "sentinels",
    traits: [
      "Practical, factual, reliable",
      "Strong sense of duty",
      "Organized and methodical",
      "Values tradition and stability",
    ],
    strengths: [
      "Reliable execution and follow-through",
      "Maintaining standards and records",
      "Managing budgets and schedules",
    ],
    idealRoles: [
      "Bookkeeper",
      "Inventory Manager",
      "Compliance Officer",
      "Operations Coordinator",
    ],
    avoidRoles: [
      "Vague, fast-changing startups",
      "Improv-heavy creative roles",
    ],
    managementTip:
      "Set clear expectations and processes: they shine when the rules are known.",
  },
  {
    code: "ISFJ",
    name: "The Defender",
    group: "sentinels",
    traits: [
      "Warm, dedicated, supportive",
      "Detail-oriented and observant",
      "Loyal and hardworking",
      "Values harmony and tradition",
    ],
    strengths: [
      "Customer care and retention",
      "Behind-the-scenes reliability",
      "Training and onboarding staff",
    ],
    idealRoles: [
      "Office Manager",
      "Customer Service Lead",
      "HR Coordinator",
      "Healthcare Admin",
    ],
    avoidRoles: ["Aggressive outbound sales", "Constant public speaking"],
    managementTip:
      "Recognize their quiet contributions: appreciation keeps them engaged for years.",
  },
  {
    code: "ESTJ",
    name: "The Executive",
    group: "sentinels",
    traits: [
      "Decisive, organized, direct",
      "Strong sense of order",
      "Natural administrator",
      "Values tradition and efficiency",
    ],
    strengths: [
      "Running day-to-day operations",
      "Enforcing standards and deadlines",
      "Managing large, structured teams",
    ],
    idealRoles: [
      "Store Manager",
      "Project Manager",
      "Facilities Director",
      "Franchise Operator",
    ],
    avoidRoles: ["Open-ended R&D", "Unstructured creative roles"],
    managementTip:
      "Give them authority and clear metrics: they run tight ships when trusted to lead.",
  },
  {
    code: "ESFJ",
    name: "The Consul",
    group: "sentinels",
    traits: [
      "Sociable, popular, caring",
      "Strong sense of community",
      "Organized and conscientious",
      "Values harmony and tradition",
    ],
    strengths: [
      "Front-line customer experience",
      "Team coordination and events",
      "Building loyal customer bases",
    ],
    idealRoles: [
      "Store Supervisor",
      "Event Planner",
      "Front Desk Manager",
      "Community Outreach",
    ],
    avoidRoles: ["Solitary technical work", "Adversarial negotiation"],
    managementTip:
      "Tap their people skills for the front of house: they make customers feel at home.",
  },

  // ── Explorers ─────────────────────────────────────────────
  {
    code: "ISTP",
    name: "The Virtuoso",
    group: "explorers",
    traits: [
      "Practical, observant, hands-on",
      "Loves tools and troubleshooting",
      "Flexible and calm under pressure",
      "Dislikes theory and rules",
    ],
    strengths: [
      "Fixing and optimizing equipment",
      "Crisis troubleshooting",
      "Learning by doing, fast",
    ],
    idealRoles: [
      "Maintenance Technician",
      "Field Service Rep",
      "Production Lead",
      "IT Support Specialist",
    ],
    avoidRoles: ["Long planning meetings", "Pure paperwork roles"],
    managementTip:
      "Hand them a problem and the right tools: then get out of the way.",
  },
  {
    code: "ISFP",
    name: "The Adventurer",
    group: "explorers",
    traits: [
      "Gentle, sensitive, artistic",
      "Lives in the present moment",
      "Flexible and nonconforming",
      "Values personal freedom",
    ],
    strengths: [
      "Visual and creative production",
      "Crafting beautiful customer experiences",
      "Adapting to changing tastes",
    ],
    idealRoles: [
      "Visual Merchandiser",
      "Barista / Pastry Chef",
      "Florist / Stylist",
      "Graphic Designer",
    ],
    avoidRoles: ["Rigid corporate admin", "Aggressive sales floors"],
    managementTip:
      "Offer creative freedom within a clear brief: micromanagement kills their craft.",
  },
  {
    code: "ESTP",
    name: "The Entrepreneur",
    group: "explorers",
    traits: [
      "Energetic, perceptive, bold",
      "Lives for action and results",
      "Reads people and rooms fast",
      "Dislikes theory and planning",
    ],
    strengths: [
      "Closing deals in person",
      "Thinking on their feet",
      "Spotting and seizing opportunities",
    ],
    idealRoles: [
      "Sales Rep",
      "Real Estate Agent",
      "Field Marketer",
      "Negotiator",
    ],
    avoidRoles: ["Slow, analytical desk work", "Long-term solo projects"],
    managementTip:
      "Tie pay to performance and keep things moving: they thrive on momentum.",
  },
  {
    code: "ESFP",
    name: "The Entertainer",
    group: "explorers",
    traits: [
      "Outgoing, friendly, spontaneous",
      "Loves people and the spotlight",
      "Practical and observant",
      "Dislikes long-term planning",
    ],
    strengths: [
      "Hosting and customer engagement",
      "Creating lively, memorable experiences",
      "Adapting to the room instantly",
    ],
    idealRoles: [
      "Restaurant Host / Server",
      "Brand Promoter",
      "Tour Guide",
      "Salon Stylist",
    ],
    avoidRoles: ["Isolated back-office work", "Heavy data analysis"],
    managementTip:
      "Put them where the people are: their energy turns first-timers into regulars.",
  },
];

function GroupHeader({ group }: { group: MbtiGroup }) {
  return (
    <div
      className="rounded-2xl px-5 py-4 mb-6 flex items-center gap-4"
      style={{
        background: `linear-gradient(135deg, ${group.tint} 0%, rgb(var(--card)) 100%)`,
        border: `1px solid ${group.chipBorder}`,
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: group.accent }}
        aria-hidden="true"
      >
        <Sparkles size={20} className="text-white" />
      </div>
      <div className="min-w-0">
        <h3
          className="font-display text-xl font-bold leading-tight"
          style={{ color: group.chipText }}
        >
          {group.label}
        </h3>
        <p className="text-[12.5px] text-muted-foreground mt-0.5 leading-snug">
          {group.tagline}
        </p>
      </div>
    </div>
  );
}

function MbtiCard({
  type,
  group,
  index,
}: { type: MbtiType; group: MbtiGroup; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.4 }}
      data-ocid={`hiring.mbti_guide.card.${type.code.toLowerCase()}`}
      className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col shadow-card hover:shadow-elevated transition-smooth"
      style={{ borderTop: `4px solid ${group.accent}` }}
    >
      {/* Header */}
      <div
        className="px-5 pt-5 pb-4"
        style={{
          background: `linear-gradient(180deg, ${group.tint} 0%, transparent 100%)`,
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span
              className="inline-block font-mono font-bold text-[15px] tracking-wide px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: group.tint,
                color: group.chipText,
                border: `1px solid ${group.chipBorder}`,
              }}
            >
              {type.code}
            </span>
            <h4 className="font-display text-[17px] font-bold text-foreground mt-2 leading-tight">
              {type.name}
            </h4>
          </div>
          <span
            className="text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shrink-0"
            style={{
              backgroundColor: group.tint,
              color: group.chipText,
              border: `1px solid ${group.chipBorder}`,
            }}
          >
            {group.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 flex flex-col gap-4 flex-1">
        {/* Key traits */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Key Traits
          </p>
          <ul className="flex flex-col gap-1.5">
            {type.traits.map((trait) => (
              <li
                key={trait}
                className="flex items-start gap-2 text-[13px] leading-snug text-foreground"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: group.accent }}
                  aria-hidden="true"
                />
                <span className="min-w-0">{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Workplace strengths */}
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <ThumbsUp size={12} style={{ color: group.accent }} />
            Workplace Strengths
          </p>
          <ul className="flex flex-col gap-1.5">
            {type.strengths.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-[13px] leading-snug text-foreground"
              >
                <Check
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: group.accent }}
                />
                <span className="min-w-0">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal roles */}
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <Briefcase size={12} style={{ color: group.accent }} />
            Ideal SMB Roles
          </p>
          <div className="flex flex-wrap gap-1.5">
            {type.idealRoles.map((role) => (
              <span
                key={role}
                className="text-[12px] font-medium px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: group.tint,
                  color: group.chipText,
                  border: `1px solid ${group.chipBorder}`,
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Roles to avoid */}
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <ThumbsDown size={12} className="text-muted-foreground" />
            Roles to Avoid
          </p>
          <div className="flex flex-wrap gap-1.5">
            {type.avoidRoles.map((role) => (
              <span
                key={role}
                className="text-[12px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Management tip */}
        <div
          className="mt-auto rounded-lg p-3 flex items-start gap-2.5"
          style={{
            backgroundColor: group.tint,
            border: `1px solid ${group.chipBorder}`,
          }}
        >
          <Lightbulb
            size={15}
            className="mt-0.5 shrink-0"
            style={{ color: group.accent }}
          />
          <div className="min-w-0">
            <p
              className="text-[11px] font-semibold uppercase tracking-wider mb-0.5"
              style={{ color: group.chipText }}
            >
              Management Tip
            </p>
            <p className="text-[12.5px] leading-snug text-foreground">
              {type.managementTip}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function MeyersBriggsSection() {
  return (
    <section
      id="mbti-guide"
      data-ocid="hiring.mbti_guide.section"
      className="card-guide"
    >
      {/* Section header */}
      <div className="flex items-start gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
          <Users size={20} className="text-[#6366F1]" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-bold text-foreground leading-tight">
            MBTI Personality-to-Roles Guide
          </h2>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Match the right personality type to the right seat on your team. All
            16 types below: color-coded by group, with traits, strengths, ideal
            SMB roles, roles to avoid, and a management tip for each.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mt-5 mb-8">
        {GROUPS.map((g) => (
          <span
            key={g.id}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: g.tint,
              color: g.chipText,
              border: `1px solid ${g.chipBorder}`,
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: g.accent }}
              aria-hidden="true"
            />
            {g.label}
          </span>
        ))}
      </div>

      {/* Groups with their type cards */}
      <div className="flex flex-col gap-10">
        {GROUPS.map((group) => {
          const groupTypes = TYPES.filter((t) => t.group === group.id);
          return (
            <div
              key={group.id}
              data-ocid={`hiring.mbti_guide.group.${group.id}`}
            >
              <GroupHeader group={group} />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {groupTypes.map((type, i) => (
                  <MbtiCard
                    key={type.code}
                    type={type}
                    group={group}
                    index={i}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-[12.5px] text-muted-foreground mt-8 pt-5 border-t border-border leading-relaxed">
        MBTI is a framework for understanding work preferences: not a definitive
        predictor of performance. Use it as one signal alongside skills,
        experience, and references when hiring for your small business.
      </p>
    </section>
  );
}

export default MeyersBriggsSection;
