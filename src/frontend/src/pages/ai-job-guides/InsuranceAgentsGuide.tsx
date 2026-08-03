import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ClipboardList,
  MessageSquareReply,
  Shield,
  Sparkles,
} from "lucide-react";

/**
 * Insurance Agents AI job guide.
 *
 * Shows how AI tools fit the daily work of an insurance agent: quoting,
 * risk assessment, and claims processing. Plain language, no contractions,
 * no em dashes or en dashes. Electric Indigo reserved for CTAs and links.
 */

interface UseCase {
  title: string;
  body: string;
  icon: React.ElementType;
}

const USE_CASES: UseCase[] = [
  {
    title: "Quoting",
    body: "AI reads the applicant details, pulls the carrier rules, and builds a quote in minutes. You answer the prospect while they are still on the phone.",
    icon: Shield,
  },
  {
    title: "Risk assessment",
    body: "AI reviews the application and the loss history, then flags the risks you need to underwrite carefully. You write better business and avoid surprises at renewal.",
    icon: ClipboardList,
  },
  {
    title: "Claims processing",
    body: "AI reads the first notice of loss, pulls the policy, and drafts the response so your team can move the claim forward without the manual data entry.",
    icon: ClipboardList,
  },
  {
    title: "Client communication",
    body: "AI drafts the renewal letter, the coverage explanation, and the follow up, so your clients hear from you more often without you writing every word.",
    icon: MessageSquareReply,
  },
];

const PROMPTS = [
  "Read this applicant detail and build a quote using these carrier rules, with the coverage options and the monthly premium.",
  "Review this application and loss history and flag the risks I should underwrite carefully.",
  "Read this first notice of loss, pull the relevant policy, and draft the response to the claimant.",
  "Draft a renewal letter for this client that explains the changes, the new premium, and what they need to do.",
];

const CHECKLIST = [
  "Run your next quote through an AI tool and compare it to your manual number.",
  "Use AI to review one renewal book and flag the risks before you bind.",
  "Let AI draft your next three claim responses and review them before sending.",
  "Set up an AI draft for your renewal letters for the next 30 days.",
  "Document which AI outputs you will review and which a junior will review.",
  "Tell your clients how you use AI and where you still make every underwriting call.",
];

export default function InsuranceAgentsGuide() {
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
        data-ocid="insurance_agents_guide.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide
          </span>
          <h1 className="heading-hero text-balance mb-5">
            AI for Insurance Agents
          </h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Quoting, risk assessment, and claims processing for insurance agents
            who want to quote faster and serve policyholders with fewer delays.
          </p>
        </div>
      </section>

      <section
        className="bg-background section-padding-sm"
        data-ocid="insurance_agents_guide.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Insurance agents lose time to data entry and follow up that keeps
            them away from clients. AI tools can take the routine work off your
            plate so you can quote faster and serve policyholders with fewer
            delays. This guide walks through the tasks where AI helps the most,
            gives you prompts you can use today, and ends with a checklist you
            can act on this week.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="insurance_agents_guide.use_cases.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Where AI helps your agency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-vibrant p-6 flex flex-col gap-3"
                  data-ocid={`insurance_agents_guide.use_cases.item.${index + 1}`}
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
        data-ocid="insurance_agents_guide.prompts.section"
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
                data-ocid={`insurance_agents_guide.prompts.item.${index + 1}`}
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
        data-ocid="insurance_agents_guide.checklist.section"
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
                data-ocid={`insurance_agents_guide.checklist.item.${index + 1}`}
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
        data-ocid="insurance_agents_guide.cta.section"
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
              data-ocid="insurance_agents_guide.cta.back_to_hub_button"
            >
              <Shield className="w-4 h-4" aria-hidden="true" />
              Back to all guides
            </Link>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="insurance_agents_guide.cta.ai_training_button"
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
