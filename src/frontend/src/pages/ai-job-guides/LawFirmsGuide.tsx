import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  FileText,
  MessageSquareReply,
  Scale,
  Sparkles,
} from "lucide-react";

/**
 * Law Firms AI job guide.
 *
 * Shows how AI tools fit the daily work of a law firm: legal research,
 * document review, and contract analysis. Plain language, no contractions,
 * no em dashes or en dashes. Electric Indigo reserved for CTAs and links.
 */

interface UseCase {
  title: string;
  body: string;
  icon: React.ElementType;
}

const USE_CASES: UseCase[] = [
  {
    title: "Legal research",
    body: "AI summarizes the relevant cases, statutes, and rulings for a question and cites them so you can verify. You get to the answer faster and spend your billable hours on judgment.",
    icon: Scale,
  },
  {
    title: "Document review",
    body: "AI reads the production, pulls the relevant documents, and flags the ones that need your attention. You review what matters instead of every page.",
    icon: FileText,
  },
  {
    title: "Contract analysis",
    body: "AI compares a contract against your playbook, flags the clauses that deviate, and suggests the language to push back with. You negotiate from a stronger position.",
    icon: FileText,
  },
  {
    title: "Client communication",
    body: "AI drafts a plain language update for the client that explains the status and the next steps, so you keep clients informed without writing every word yourself.",
    icon: MessageSquareReply,
  },
];

const PROMPTS = [
  "Summarize the relevant cases and statutes for this legal question and cite each one so I can verify.",
  "Review this document production and list the documents that are relevant to the issues in this matter.",
  "Compare this contract against my playbook and flag the clauses that deviate, with suggested pushback language.",
  "Draft a plain language status update for my client that covers what happened, what is next, and what I need from them.",
];

const CHECKLIST = [
  "Run one research question through an AI tool and verify every citation.",
  "Use AI to review your next document production and check the results against your own read.",
  "Compare your next contract against your playbook with AI and review the flagged clauses.",
  "Let AI draft your next three client updates and review them before sending.",
  "Document which AI outputs you will verify yourself and which a junior will review.",
  "Tell your clients how you use AI and where a lawyer still signs off on every result.",
];

export default function LawFirmsGuide() {
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
        data-ocid="law_firms_guide.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide
          </span>
          <h1 className="heading-hero text-balance mb-5">AI for Law Firms</h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Legal research, document review, and contract analysis for law firms
            that want to spend billable hours on judgment, not busywork.
          </p>
        </div>
      </section>

      <section
        className="bg-background section-padding-sm"
        data-ocid="law_firms_guide.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Law firms lose billable hours to research, review, and drafting that
            AI can accelerate. This guide walks through the tasks where AI helps
            the most, gives you prompts you can use today, and ends with a
            checklist you can act on this week. Every AI output still gets
            reviewed by a lawyer, but the busywork shrinks.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="law_firms_guide.use_cases.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Where AI helps your firm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-vibrant p-6 flex flex-col gap-3"
                  data-ocid={`law_firms_guide.use_cases.item.${index + 1}`}
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
        data-ocid="law_firms_guide.prompts.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-section mb-6 text-balance">
            Ready to use prompts
          </h2>
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))] mb-6">
            Copy any of these into your AI tool and replace the bracketed
            details with your own. Start with one prompt, see how it works, then
            add the next. Always verify citations and review every output before
            it leaves the firm.
          </p>
          <ol className="space-y-3">
            {PROMPTS.map((prompt, index) => (
              <li
                key={prompt}
                className="flex items-start gap-3 rounded-[calc(var(--radius)*2)] bg-card border border-border p-4"
                data-ocid={`law_firms_guide.prompts.item.${index + 1}`}
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
        data-ocid="law_firms_guide.checklist.section"
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
                data-ocid={`law_firms_guide.checklist.item.${index + 1}`}
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
        data-ocid="law_firms_guide.cta.section"
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
              data-ocid="law_firms_guide.cta.back_to_hub_button"
            >
              <Scale className="w-4 h-4" aria-hidden="true" />
              Back to all guides
            </Link>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="law_firms_guide.cta.ai_training_button"
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
