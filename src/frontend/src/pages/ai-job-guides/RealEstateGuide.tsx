import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  FileText,
  MessageSquareReply,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/**
 * Real Estate AI job guide.
 *
 * Shows how AI tools fit the daily work of a real estate agent: listing
 * descriptions, lead qualification, and market analysis. Plain language, no
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
    title: "Listing descriptions",
    body: "AI turns your bullet points and a few photos into a polished listing description that highlights what buyers care about. You publish faster and your listings stand out.",
    icon: FileText,
  },
  {
    title: "Lead qualification",
    body: "AI reads incoming inquiries, asks the right follow up questions, and hands you the serious buyers with a summary so you spend your time on the deals that close.",
    icon: MessageSquareReply,
  },
  {
    title: "Market analysis",
    body: "AI pulls comps, days on market, and price trends for a neighborhood and gives you a pricing recommendation you can defend to a seller in plain language.",
    icon: TrendingUp,
  },
  {
    title: "Listing photos and staging",
    body: "AI cleans up listing photos, suggests virtual staging, and flags the shots that do the property justice so your marketing looks sharp without a photographer on call.",
    icon: Building2,
  },
];

const PROMPTS = [
  "Write a listing description for this property using these bullet points and these photos, with a clear opening line and a call to action.",
  "Draft three follow up questions for this lead that help me understand their timeline, budget, and must haves.",
  "Pull comps for this neighborhood and give me a pricing recommendation with the reasoning in plain language.",
  "Review these listing photos and tell me which ones to use, which to retake, and what to fix before publishing.",
];

const CHECKLIST = [
  "Use AI to draft your next three listing descriptions and review them before publishing.",
  "Set up an AI lead qualification flow for your next open house.",
  "Run a market analysis on one neighborhood you list in often.",
  "Let AI review your next set of listing photos before they go live.",
  "Save your best prompts so you can reuse them on the next listing.",
  "Tell your clients how you use AI and where you still make every call.",
];

export default function RealEstateGuide() {
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
        data-ocid="real_estate_guide.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide
          </span>
          <h1 className="heading-hero text-balance mb-5">AI for Real Estate</h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Listing descriptions, lead qualification, and market analysis for
            agents who want to write faster listings and reach the right buyers.
          </p>
        </div>
      </section>

      <section
        className="bg-background section-padding-sm"
        data-ocid="real_estate_guide.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Real estate moves fast and the paperwork never stops. AI tools can
            take the routine work off your plate so you can spend your time with
            clients and on the deals that close. This guide walks through the
            tasks where AI helps the most, gives you prompts you can use today,
            and ends with a checklist you can act on this week.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="real_estate_guide.use_cases.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Where AI helps your business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-vibrant p-6 flex flex-col gap-3"
                  data-ocid={`real_estate_guide.use_cases.item.${index + 1}`}
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
        data-ocid="real_estate_guide.prompts.section"
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
                data-ocid={`real_estate_guide.prompts.item.${index + 1}`}
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
        data-ocid="real_estate_guide.checklist.section"
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
                data-ocid={`real_estate_guide.checklist.item.${index + 1}`}
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
        data-ocid="real_estate_guide.cta.section"
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
              data-ocid="real_estate_guide.cta.back_to_hub_button"
            >
              <Building2 className="w-4 h-4" aria-hidden="true" />
              Back to all guides
            </Link>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="real_estate_guide.cta.ai_training_button"
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
