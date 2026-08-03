import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * AI Job Guides hub page.
 *
 * Lists eight profession specific AI guides in a bento box grid. Each card
 * links to its own sub page route under /ai-job-guides/<profession>. The hub
 * is a directory, not a guide itself, so it skips the ProgressBar and section
 * nav used by long form guide pages.
 *
 * All copy avoids contractions, em dashes, and en dashes per the AISmallBiz
 * style guide. Electric Indigo (#6366F1) is reserved for CTAs, links, and card
 * link affordances only.
 */

interface ProfessionGuide {
  /** Display name shown as the card title. */
  name: string;
  /** One line description of what the guide covers. */
  description: string;
  /** Sub page route path. */
  path: string;
  /** Lucide icon rendered in the card header. */
  icon: React.ElementType;
}

const PROFESSION_GUIDES: ProfessionGuide[] = [
  {
    name: "Plumbers",
    description:
      "Scheduling, customer service, and estimating for plumbing shops that want to spend less time on the phone and more time on the job.",
    path: "/ai-job-guides/plumbers",
    icon: ArrowRight,
  },
  {
    name: "Restaurants",
    description:
      "Menu optimization, reservations, and inventory for restaurants that want fuller tables, less waste, and smoother service.",
    path: "/ai-job-guides/restaurants",
    icon: ArrowRight,
  },
  {
    name: "Accountants",
    description:
      "Bookkeeping automation, document processing, and tax research for accountants who want to close the books faster and answer clients sooner.",
    path: "/ai-job-guides/accountants",
    icon: ArrowRight,
  },
  {
    name: "Dentists",
    description:
      "Imaging analysis, scheduling, and patient communication for dental practices that want to keep chairs full and patients informed.",
    path: "/ai-job-guides/dentists",
    icon: ArrowRight,
  },
  {
    name: "Real Estate",
    description:
      "Listing descriptions, lead qualification, and market analysis for agents who want to write faster listings and reach the right buyers.",
    path: "/ai-job-guides/real-estate",
    icon: ArrowRight,
  },
  {
    name: "Contractors",
    description:
      "Estimating, project scheduling, and safety compliance for contractors who want accurate bids, on time work, and clean compliance records.",
    path: "/ai-job-guides/contractors",
    icon: ArrowRight,
  },
  {
    name: "Law Firms",
    description:
      "Legal research, document review, and contract analysis for law firms that want to spend billable hours on judgment, not busywork.",
    path: "/ai-job-guides/law-firms",
    icon: ArrowRight,
  },
  {
    name: "Insurance Agents",
    description:
      "Quoting, risk assessment, and claims processing for insurance agents who want to quote faster and serve policyholders with fewer delays.",
    path: "/ai-job-guides/insurance-agents",
    icon: ArrowRight,
  },
];

export default function AIJobGuidesHub() {
  return (
    <Layout>
      <BackToTop />
      {/* Hero */}
      <section
        className="bg-hero-vibrant section-padding"
        data-ocid="ai_job_guides.hero.section"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guides
          </span>
          <h1 className="heading-hero text-balance mb-5">
            AI for Your Profession
          </h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Detailed, plain language guides showing how AI tools fit the daily
            work of eight trades and professions.
          </p>
        </div>
      </section>

      {/* Intro paragraph: dark on light for long form reading */}
      <section
        className="bg-background section-padding-sm"
        data-ocid="ai_job_guides.intro.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Each guide walks through the tasks that fill your workday and shows
            exactly where AI can save you time. You get plain language steps,
            ready to use prompts, and a checklist you can act on this week. The
            guides are written for owners, operators, and solo professionals who
            want practical help, not hype.
          </p>
        </div>
      </section>

      {/* Bento box grid of profession cards */}
      <section
        id="guides-grid"
        className="bg-background section-padding-sm scroll-mt-24"
        data-ocid="ai_job_guides.grid.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-section mb-8 text-balance">
            Choose your profession
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROFESSION_GUIDES.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.path}
                  to={guide.path}
                  className="card-vibrant p-6 flex flex-col gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))] rounded-[calc(var(--radius)*2)]"
                  data-ocid={`ai_job_guides.card.${index + 1}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-[rgb(var(--foreground))] leading-snug">
                      {guide.name}
                    </h3>
                    <span
                      className="shrink-0 w-9 h-9 rounded-full bg-[rgba(99,102,241,0.08)] text-[#6366F1] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))] flex-1">
                    {guide.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#6366F1] mt-1"
                    data-ocid={`ai_job_guides.link.${index + 1}`}
                  >
                    Read the {guide.name} guide
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA: dark on light reading, Electric Indigo on CTAs */}
      <section
        className="bg-background section-padding"
        data-ocid="ai_job_guides.cta.section"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-section mb-4 text-balance">
            Pick a guide, or build your AI skills first
          </h2>
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))] mb-8 text-balance">
            Open any profession guide above to see the tasks AI can take off
            your plate. If you are new to AI tools, start with AI Training and
            Tools to learn the basics before you dive in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#guides-grid"
              className="button-cta-gold w-full sm:w-auto"
              data-ocid="ai_job_guides.cta.explore_guides_button"
            >
              Explore the guides
            </a>
            <Link
              to="/ai-training"
              className="button-cta w-full sm:w-auto"
              data-ocid="ai_job_guides.cta.ai_training_button"
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
