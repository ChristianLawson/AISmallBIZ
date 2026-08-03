import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Check,
  FileText,
  MessageSquareReply,
  Search,
  Sparkles,
} from "lucide-react";

/**
 * Accountants AI job guide.
 *
 * Shows how AI tools fit the daily work of an accountant: bookkeeping
 * automation, document processing, and tax research. Plain language, no
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
    title: "Bookkeeping automation",
    body: "AI reads bank and credit card transactions, categorizes them, and flags the ones that need your judgment. You close the books faster and spend your time on the work that actually requires a human.",
    icon: Calculator,
  },
  {
    title: "Document processing",
    body: "Receipts, invoices, and statements come in as images or PDFs. AI pulls the numbers, matches them to the right account, and hands you a clean entry to review.",
    icon: FileText,
  },
  {
    title: "Tax research",
    body: "AI summarizes the relevant code, rulings, and forms for a client situation so you can confirm the answer in minutes instead of digging through references for an hour.",
    icon: Search,
  },
  {
    title: "Client communication",
    body: "AI drafts the email that explains a complex tax position in plain language, so your client understands the answer and you do not rewrite it three times.",
    icon: MessageSquareReply,
  },
];

const PROMPTS = [
  "Categorize these transactions and flag any that look unusual or need my review.",
  "Extract the vendor, date, amount, and tax category from this receipt image.",
  "Summarize the relevant tax rules for this client situation and list the forms they will need.",
  "Draft a plain language email to my client that explains this tax position and what they need to do next.",
];

const CHECKLIST = [
  "Pick one client and run a month of transactions through an AI categorization tool.",
  "Set up document capture for receipts and invoices so they flow into your workflow.",
  "Use AI to draft your next three client emails and review them before sending.",
  "Run one tax research question through AI and verify the answer against your references.",
  "Document which tasks you will let AI handle and which you will always review yourself.",
  "Tell your clients how you use AI and where a human still signs off on every result.",
];

export default function AccountantsGuide() {
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
        data-ocid="accountants_guide.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide
          </span>
          <h1 className="heading-hero text-balance mb-5">AI for Accountants</h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Bookkeeping automation, document processing, and tax research for
            accountants who want to close the books faster and answer clients
            sooner.
          </p>
        </div>
      </section>

      <section
        className="bg-background section-padding-sm"
        data-ocid="accountants_guide.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Accountants spend too many hours on data entry and not enough on the
            judgment clients actually pay for. AI tools can take the routine
            work off your plate so you can close the books faster and answer
            clients sooner. This guide walks through the tasks where AI helps
            the most, gives you prompts you can use today, and ends with a
            checklist you can act on this week.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="accountants_guide.use_cases.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Where AI helps your practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-vibrant p-6 flex flex-col gap-3"
                  data-ocid={`accountants_guide.use_cases.item.${index + 1}`}
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
        data-ocid="accountants_guide.prompts.section"
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
                data-ocid={`accountants_guide.prompts.item.${index + 1}`}
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
        data-ocid="accountants_guide.checklist.section"
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
                data-ocid={`accountants_guide.checklist.item.${index + 1}`}
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
        data-ocid="accountants_guide.cta.section"
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
              data-ocid="accountants_guide.cta.back_to_hub_button"
            >
              <Calculator className="w-4 h-4" aria-hidden="true" />
              Back to all guides
            </Link>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="accountants_guide.cta.ai_training_button"
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
