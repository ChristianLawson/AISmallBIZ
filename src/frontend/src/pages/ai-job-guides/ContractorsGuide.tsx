import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ClipboardList,
  HardHat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/**
 * Contractors AI job guide.
 *
 * Shows how AI tools fit the daily work of a contractor: estimating,
 * project scheduling, and safety compliance. Plain language, no
 * contractions, no em dashes or en dashes. Electric Indigo reserved for
 * CTAs and links.
 */

interface UseCase {
  title: string;
  body: string;
  icon: React.ElementType;
}

const USE_CASES: UseCase[] = [
  {
    title: "Estimating and bids",
    body: "AI reads the plans, pulls the materials, and builds a line item estimate you can defend. You bid faster and you do not leave money on the table.",
    icon: ClipboardList,
  },
  {
    title: "Project scheduling",
    body: "AI maps the trades, the dependencies, and the weather, then tells you where the schedule is at risk. You catch delays before they cost you.",
    icon: CalendarClock,
  },
  {
    title: "Safety compliance",
    body: "AI turns your site notes and photos into the daily reports and the safety checklists you need, so the paperwork does not eat your night.",
    icon: ShieldCheck,
  },
  {
    title: "Client updates",
    body: "AI drafts a plain language update for the owner from your site notes, so they know what happened this week without a long phone call.",
    icon: HardHat,
  },
];

const PROMPTS = [
  "Read these plans and give me a line item estimate with materials, labor, and a total.",
  "Map the trades and dependencies for this project and flag the schedule risks.",
  "Turn these site notes and photos into a daily report and a safety checklist.",
  "Draft a weekly update for the owner that covers what we did, what is next, and any decisions we need from them.",
];

const CHECKLIST = [
  "Run your next bid through an AI estimate and compare it to your usual number.",
  "Map one active project in an AI scheduling tool and look for the risks.",
  "Use AI to draft your daily reports for a week and review them before sending.",
  "Set up an AI draft for your weekly owner updates.",
  "Save your best prompts so you can reuse them on the next job.",
  "Tell your crew and your clients how you use AI and where you still sign off.",
];

export default function ContractorsGuide() {
  return (
    <Layout>
      <BackToTop
        sections={[
          { id: "use-cases", label: "Where AI helps" },
          { id: "prompts", label: "Ready to use prompts" },
          { id: "checklist", label: "This week checklist" },
        ]}
      />

      <section
        className="bg-hero-vibrant section-padding"
        data-ocid="contractors_guide.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide
          </span>
          <h1 className="heading-hero text-balance mb-5">AI for Contractors</h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Estimating, project scheduling, and safety compliance for
            contractors who want accurate bids, on time work, and clean
            compliance records.
          </p>
        </div>
      </section>

      <section
        className="bg-background section-padding-sm"
        data-ocid="contractors_guide.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Contractors juggle bids, schedules, and paperwork that pull them off
            the site. AI tools can take the routine work off your plate so you
            can focus on the build. This guide walks through the tasks where AI
            helps the most, gives you prompts you can use today, and ends with a
            checklist you can act on this week.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="contractors_guide.use_cases.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Where AI helps your crew
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-vibrant p-6 flex flex-col gap-3"
                  data-ocid={`contractors_guide.use_cases.item.${index + 1}`}
                >
                  <span
                    className="shrink-0 w-10 h-10 rounded-full bg-[rgba(99,102,241,0.08)] text-[#6366F1] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-[rgb(var(--foreground))] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="prompts"
        className="bg-muted/40 section-padding-sm scroll-mt-24"
        data-ocid="contractors_guide.prompts.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-section mb-6 text-balance">
            Ready to use prompts
          </h2>
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))] mb-6">
            Copy any of these into your AI tool and replace the bracketed
            details with your own. Start with one prompt, see how it works, then
            add the next.
          </p>
          <ol className="space-y-3">
            {PROMPTS.map((prompt, index) => (
              <li
                key={prompt}
                className="flex items-start gap-3 rounded-[calc(var(--radius)*2)] bg-card border border-border p-4"
                data-ocid={`contractors_guide.prompts.item.${index + 1}`}
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-[rgba(99,102,241,0.1)] text-[#6366F1] text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-readable))]">
                  {prompt}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="checklist"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="contractors_guide.checklist.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-section mb-6 text-balance">
            Your checklist for this week
          </h2>
          <ul className="space-y-3">
            {CHECKLIST.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3"
                data-ocid={`contractors_guide.checklist.item.${index + 1}`}
              >
                <span
                  className="shrink-0 w-6 h-6 rounded-full bg-[rgba(99,102,241,0.1)] text-[#6366F1] flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-[1rem] leading-[1.65] text-[rgb(var(--text-readable))]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="bg-background section-padding"
        data-ocid="contractors_guide.cta.section"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-section mb-4 text-balance">
            Ready to put AI to work?
          </h2>
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))] mb-8 text-balance">
            Start with one task from the list above. If you are new to AI tools,
            the AI Training and Tools guide walks you through the basics before
            you dive in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/ai-job-guides"
              className="button-cta-gold w-full sm:w-auto"
              data-ocid="contractors_guide.cta.back_to_hub_button"
            >
              <HardHat className="w-4 h-4" aria-hidden="true" />
              Back to all guides
            </Link>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="contractors_guide.cta.ai_training_button"
            >
              AI Training and Tools
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
