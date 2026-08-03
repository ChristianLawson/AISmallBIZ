import { Layout } from "@/components/Layout";
import { ToolGuideLayout } from "@/pages/tool-guides/ToolGuideLayout";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileSignature,
  FileText,
  Lightbulb,
  LineChart,
  type LucideIcon,
  Mail,
  Megaphone,
  Receipt,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

interface WorkflowStep {
  title: string;
  desc: string;
}

interface WorkflowContent {
  slug: string;
  label: string;
  icon: LucideIcon;
  description: string;
  steps: WorkflowStep[];
  tips: string[];
  cta: {
    label: string;
    to: string;
    internal: boolean;
  };
}

const WORKFLOWS: WorkflowContent[] = [
  {
    slug: "payroll-planning",
    label: "Payroll planning",
    icon: Wallet,
    description:
      "Auto-calculate hours, taxes, and pay stubs from your time-tracking data so every pay run is accurate and on time.",
    steps: [
      {
        title: "Connect your time-tracking source",
        desc: "Link the tool your team uses to log hours (QuickBooks Time, a Google Sheet, or your POS) so Claude reads raw hours without manual entry.",
      },
      {
        title: "Confirm pay rates and deductions",
        desc: "Tell Claude each employee's hourly rate, salary, and recurring deductions (healthcare, 401k, garnishments) once so it applies them every run.",
      },
      {
        title: "Set your pay schedule",
        desc: "Define weekly, biweekly, or semimonthly cadence. Claude flags the next run date and reminds you two days before approval.",
      },
      {
        title: "Calculate gross-to-net per employee",
        desc: "Claude multiplies hours by rate, applies federal/state/local tax tables, and produces a per-employee gross-to-net breakdown you can review.",
      },
      {
        title: "Generate pay stubs",
        desc: "Claude drafts printable or emailable pay stubs with YTD totals, tax withholdings, and net pay for each employee.",
      },
      {
        title: "Review and approve the run",
        desc: "Scan the summary for anomalies (overtime spikes, missing hours). Approve in one click and Claude logs the run for audit.",
      },
      {
        title: "Sync to your accounting tool",
        desc: "Push the approved payroll journal entry into QuickBooks so your books and bank reconcile automatically.",
      },
    ],
    tips: [
      "Run a one-employee test payroll first to validate tax calculations before going live with the whole team.",
      "Keep a single source of truth for hours: edits in two places cause duplicate pay.",
      "Have Claude flag any employee whose hours jumped more than 25% versus the prior run for a quick sanity check.",
      "Lock the prior pay period once approved so late edits do not silently change historical totals.",
    ],
    cta: {
      label: "Open the QuickBooks guide",
      to: "/tool-guides/quickbooks",
      internal: true,
    },
  },
  {
    slug: "month-end-close",
    label: "Month-end close",
    icon: CalendarClock,
    description:
      "Reconcile accounts and generate a summary report in minutes, not hours, so you start every month with clean books.",
    steps: [
      {
        title: "Pull all account statements",
        desc: "Download bank, credit card, and payment processor statements for the closing month into one folder Claude can read.",
      },
      {
        title: "Reconcile each account",
        desc: "Claude matches statement transactions to your ledger line by line and flags any unmatched items for review.",
      },
      {
        title: "Categorize uncategorized transactions",
        desc: "Claude suggests categories for any uncategorized transactions based on prior months so you only confirm, not type.",
      },
      {
        title: "Review accruals and prepayments",
        desc: "Claude reminds you to record recurring accruals (rent, insurance, subscriptions) and amortize any prepaid expenses for the month.",
      },
      {
        title: "Generate the month-end summary",
        desc: "Claude produces a one-page summary: P&L vs. last month, cash position, top variances, and any items needing your attention.",
      },
      {
        title: "Lock the period",
        desc: "Once approved, Claude locks the closed month so future edits require an explicit adjustment entry.",
      },
    ],
    tips: [
      "Close on the same calendar day every month (e.g., the 5th) so the routine becomes automatic for you and your accountant.",
      "Keep a running 'review later' list during the month so nothing gets lost in the close rush.",
      "Ask Claude to compare each expense category to its 3-month average and explain any swing over 15%.",
      "Save the month-end summary PDF in a dated folder so you can pull a year of reports in seconds at tax time.",
    ],
    cta: {
      label: "Back to AI Training",
      to: "/ai-training",
      internal: true,
    },
  },
  {
    slug: "invoice-chasing",
    label: "Invoice chasing",
    icon: Receipt,
    description:
      "Draft and schedule polite follow-up emails for overdue invoices automatically so cash comes in without awkward calls.",
    steps: [
      {
        title: "Connect your invoicing data",
        desc: "Point Claude at your invoice list (QuickBooks, a Google Sheet, or Stripe exports) so it knows what is outstanding and when it was due.",
      },
      {
        title: "Define your follow-up cadence",
        desc: "Set the sequence: a friendly reminder 3 days before due, a nudge 1 day after, a firmer follow-up at 7 days, and a final notice at 30 days.",
      },
      {
        title: "Set your tone of voice",
        desc: "Tell Claude how you sound (warm, professional, casual) and give it one sample email so every follow-up matches your brand voice.",
      },
      {
        title: "Draft the first reminder set",
        desc: "Claude generates a personalized email per overdue customer with invoice number, amount, due date, and a one-click pay link.",
      },
      {
        title: "Review and schedule",
        desc: "Scan the drafts, tweak any wording, and schedule sends for the right day and time. Claude queues them so you do not have to remember.",
      },
      {
        title: "Track responses and escalate",
        desc: "Claude logs replies, marks invoices paid when customers respond, and escalates anything still open at 30 days to a phone-call task for you.",
      },
    ],
    tips: [
      "Always include a pay link or QR code in the email: friction is the #1 reason invoices sit unpaid.",
      "Send the first reminder before the due date, not after: it cuts overdue rates dramatically.",
      "Personalize the subject line with the customer's name and invoice number for higher open rates.",
      "Keep a 'do not auto-chase' list for key accounts you handle personally.",
    ],
    cta: {
      label: "Open the PayPal guide",
      to: "/tool-guides/paypal",
      internal: true,
    },
  },
  {
    slug: "campaign-management",
    label: "Campaign management",
    icon: Megaphone,
    description:
      "Plan, schedule, and track social and email campaigns across all platforms from one place so nothing slips.",
    steps: [
      {
        title: "Define the campaign goal",
        desc: "Tell Claude what you want (foot traffic, online sales, sign-ups) and the dates so it can shape the plan around a measurable target.",
      },
      {
        title: "Choose your channels",
        desc: "Pick from email, Instagram, Facebook, LinkedIn, or X. Claude recommends the best two or three for your audience and goal.",
      },
      {
        title: "Generate the content calendar",
        desc: "Claude drafts a day-by-day calendar with post copy, image prompts, send times, and a hook for each piece of content.",
      },
      {
        title: "Schedule posts and emails",
        desc: "Push the approved content to Make.com or your scheduler. Claude sets the optimal send time per platform and queues everything.",
      },
      {
        title: "Track performance mid-campaign",
        desc: "Claude pulls open rates, clicks, and engagement mid-flight and flags which posts to boost or repost for better reach.",
      },
      {
        title: "Produce the post-campaign report",
        desc: "At campaign end Claude summarizes results vs. goal, top-performing content, and three concrete takeaways for next time.",
      },
    ],
    tips: [
      "Run one campaign at a time per channel so you can clearly attribute results.",
      "Repurpose your top post from the last campaign as the seed for the next one: momentum compounds.",
      "Always set a single primary metric per campaign (e.g., sign-ups) so 'success' is unambiguous.",
      "Schedule the post-campaign review on your calendar the same day you launch so it does not get skipped.",
    ],
    cta: {
      label: "Back to AI Training",
      to: "/ai-training",
      internal: true,
    },
  },
  {
    slug: "lead-triage",
    label: "Lead triage",
    icon: Users,
    description:
      "Score and categorize inbound leads so you call the hottest prospects first and never lose a ready-to-buy customer.",
    steps: [
      {
        title: "Collect leads in one place",
        desc: "Route every inbound lead (web form, email, DM, call-back request) into a single inbox or sheet Claude can read.",
      },
      {
        title: "Define your scoring criteria",
        desc: "Tell Claude what makes a hot lead for you: budget, timeline, decision-maker, fit with your service. Claude turns it into a scoring rubric.",
      },
      {
        title: "Auto-score every new lead",
        desc: "Claude reads each lead's details, scores it 1-100, and labels it Hot / Warm / Cold based on your rubric.",
      },
      {
        title: "Categorize by next action",
        desc: "Claude tags each lead with the right next step: call today, nurture sequence, follow-up next week, or disqualify.",
      },
      {
        title: "Build the daily call list",
        desc: "Each morning Claude produces a prioritized call list with the lead's name, score, and a one-line opener tailored to their request.",
      },
      {
        title: "Log outcomes and re-score",
        desc: "After each call, log the outcome. Claude updates the score and moves the lead forward, back to nurture, or to closed-won.",
      },
    ],
    tips: [
      "Call Hot leads within 1 hour of arrival: conversion rates drop sharply after that window.",
      "Disqualify ruthlessly early: chasing bad leads costs you the good ones.",
      "Review your scoring rubric monthly and adjust weights based on which leads actually closed.",
      "Keep a short 'lost reason' field on every closed-lost lead so patterns surface over time.",
    ],
    cta: {
      label: "Open the HubSpot guide",
      to: "/tool-guides/hubspot",
      internal: true,
    },
  },
  {
    slug: "cash-flow-forecasting",
    label: "Cash-flow forecasting",
    icon: LineChart,
    description:
      "Project your next 30/60/90-day cash position based on real data so you spot shortfalls weeks before they hit.",
    steps: [
      {
        title: "Pull your current cash position",
        desc: "Claude reads your checking, savings, and reserve balances to establish today's starting cash.",
      },
      {
        title: "List expected inflows",
        desc: "Add confirmed receivables, recurring revenue, and likely sales. Claude weights each by probability so the forecast stays realistic.",
      },
      {
        title: "List expected outflows",
        desc: "Claude pulls payroll, rent, loan payments, vendor invoices, and tax estimates due in the next 90 days.",
      },
      {
        title: "Generate the 30/60/90 forecast",
        desc: "Claude produces a day-by-day cash projection with a low, expected, and high scenario so you see the range, not a single number.",
      },
      {
        title: "Identify risk windows",
        desc: "Claude flags any week where the projected balance dips below your safety floor and explains what is driving the dip.",
      },
      {
        title: "Plan the response",
        desc: "For each risk window Claude suggests options: chase a specific overdue invoice, delay a non-urgent payment, or draw on a credit line.",
      },
    ],
    tips: [
      "Update the forecast weekly: stale forecasts are worse than none because they feel authoritative.",
      "Always model a 'worst case' where your top customer pays 30 days late: that is the scenario that sinks businesses.",
      "Keep a 30-day minimum cash floor written down so 'risk' is a number, not a feeling.",
      "Reconcile the forecast against actuals every month so your assumptions get sharper over time.",
    ],
    cta: {
      label: "Back to AI Training",
      to: "/ai-training",
      internal: true,
    },
  },
  {
    slug: "margin-analysis",
    label: "Margin analysis",
    icon: BarChart3,
    description:
      "Spot which products or services drain profit and fix pricing gaps before they quietly erode your bottom line.",
    steps: [
      {
        title: "Gather revenue and cost data",
        desc: "Claude pulls per-product or per-service revenue and the direct costs (materials, labor, fees) for the last 90 days.",
      },
      {
        title: "Calculate gross margin per item",
        desc: "Claude computes the gross margin % for each product or service and ranks them from most to least profitable.",
      },
      {
        title: "Flag the margin drainers",
        desc: "Claude highlights any item below your target margin and shows whether the issue is price, cost, or volume.",
      },
      {
        title: "Identify the quiet winners",
        desc: "Claude surfaces high-margin items that may be under-promoted so you can lean into what already works.",
      },
      {
        title: "Model pricing or cost fixes",
        desc: "For each drainer Claude models the impact of a price bump, a cost renegotiation, or a bundle so you can choose the least disruptive fix.",
      },
      {
        title: "Set a re-review cadence",
        desc: "Claude schedules a margin re-check every 30 days and tracks whether your fixes actually moved the number.",
      },
    ],
    tips: [
      "Do not kill a low-margin item until you check if it drives traffic to higher-margin ones: bundles matter.",
      "Renegotiate your top three cost inputs every quarter: small wins compound across hundreds of units.",
      "Track margin per channel too: the same product can be profitable on one platform and a loss on another.",
      "Share the margin report with whoever sets prices so decisions are data-driven, not gut-driven.",
    ],
    cta: {
      label: "Back to AI Training",
      to: "/ai-training",
      internal: true,
    },
  },
  {
    slug: "tax-season-organizer",
    label: "Tax-season organizer",
    icon: ClipboardList,
    description:
      "Gather receipts, categorize expenses, and prep a summary for your accountant so tax season is a meeting, not a fire drill.",
    steps: [
      {
        title: "Collect every receipt",
        desc: "Forward email receipts, snap photos of paper receipts, and export card statements. Claude reads them all into one organized list.",
      },
      {
        title: "Categorize each expense",
        desc: "Claude assigns each receipt to the right IRS category (meals, travel, office, supplies) based on vendor and amount.",
      },
      {
        title: "Match receipts to transactions",
        desc: "Claude pairs each receipt with the matching line in your books so nothing is double-counted or missed.",
      },
      {
        title: "Flag deductible vs. non-deductible",
        desc: "Claude marks which expenses are deductible and flags anything that needs special handling (meals at 50%, gifts, vehicle use).",
      },
      {
        title: "Build the accountant summary",
        desc: "Claude produces a clean summary by category with totals, notes on anything unusual, and a list of items needing your accountant's input.",
      },
      {
        title: "Identify missing documentation",
        desc: "Claude lists any transactions over your threshold that lack a receipt so you can chase them down before the deadline.",
      },
      {
        title: "Schedule the accountant meeting",
        desc: "With the summary ready, Claude drafts the email to your accountant with the package attached and a suggested meeting date.",
      },
    ],
    tips: [
      "Capture receipts the day you spend: a 30-second photo saves an hour of hunting in April.",
      "Keep a separate business card so personal and business expenses never mix.",
      "Ask your accountant for their preferred category list up front so Claude tags to their system.",
      "Review the summary in February, not April: a missing receipt found in February is fixable; in April it is a fire.",
    ],
    cta: {
      label: "Open the QuickBooks guide",
      to: "/tool-guides/quickbooks",
      internal: true,
    },
  },
  {
    slug: "contract-reviewer",
    label: "Contract reviewer",
    icon: FileSignature,
    description:
      "Highlight risky clauses and flag unusual terms before you sign anything so you never agree to something you would regret.",
    steps: [
      {
        title: "Upload the contract",
        desc: "Paste the contract text or upload the PDF. Claude reads the full document and structures it clause by clause.",
      },
      {
        title: "Set your review priorities",
        desc: "Tell Claude what matters most to you: payment terms, liability, IP ownership, termination, auto-renewal. Claude weights its review accordingly.",
      },
      {
        title: "Flag risky clauses",
        desc: "Claude highlights clauses that shift unusual risk to you: unlimited liability, broad indemnity, one-sided termination rights.",
      },
      {
        title: "Spot unusual or non-standard terms",
        desc: "Claude compares each clause to common small-business norms and flags anything out of the ordinary for a second look.",
      },
      {
        title: "Generate a plain-English summary",
        desc: "Claude produces a one-page summary of what you are actually agreeing to, in plain English, so you sign with full understanding.",
      },
      {
        title: "Draft redlines and counter-asks",
        desc: "For each risky clause Claude suggests specific edits or counter-language you can send back to the other party.",
      },
    ],
    tips: [
      "Never sign on the first read: even a clean contract deserves a 24-hour pause.",
      "Pay special attention to auto-renewal and termination clauses: they are the most expensive surprises.",
      "Keep a clause library of terms you have agreed to before so Claude can flag anything new against your norms.",
      "For high-value contracts, use Claude's review as a first pass and your lawyer for the final sign-off.",
    ],
    cta: {
      label: "Open the DocuSign guide",
      to: "/tool-guides/docusign",
      internal: true,
    },
  },
  {
    slug: "content-strategist",
    label: "Content strategist",
    icon: FileText,
    description:
      "Generate a 30-day content calendar tailored to your business type so you post consistently without daily brainstorming.",
    steps: [
      {
        title: "Describe your business and audience",
        desc: "Tell Claude what you sell, who you serve, and your voice. Claude uses this to shape every piece of content to your brand.",
      },
      {
        title: "Pick your platforms",
        desc: "Choose where you will post (Instagram, LinkedIn, X, email). Claude tailors format and length to each platform's norms.",
      },
      {
        title: "Set your posting cadence",
        desc: "Decide how often you can realistically post. Claude builds the calendar around your capacity so it is sustainable, not aspirational.",
      },
      {
        title: "Generate the 30-day calendar",
        desc: "Claude produces a day-by-day plan with topic, hook, format, and platform for each post, balanced across educate / promote / engage.",
      },
      {
        title: "Draft the first week of posts",
        desc: "Claude writes full post copy for the first week so you can start immediately while prepping the rest.",
      },
      {
        title: "Schedule and track",
        desc: "Push approved posts to your scheduler. Claude logs what went out and tracks engagement to refine the next 30 days.",
      },
    ],
    tips: [
      "Follow the 80/20 rule: 80% value, 20% promotion. Audiences tune out pure-sell feeds.",
      "Batch-create content one morning per week: it is far more efficient than daily drafting.",
      "Repurpose one strong post into three formats (carousel, short video, email) to multiply reach without extra ideation.",
      "Review what performed best each week and let Claude weight the next calendar toward those themes.",
    ],
    cta: {
      label: "Open the Canva guide",
      to: "/tool-guides/canva",
      internal: true,
    },
  },
  {
    slug: "business-pulse-monitoring",
    label: "Business pulse monitoring",
    icon: TrendingUp,
    description:
      "Get a daily digest of key metrics: revenue, reviews, and foot-traffic signals so you spot issues the day they emerge.",
    steps: [
      {
        title: "Connect your data sources",
        desc: "Link your POS, review platforms (Google, Yelp), and any foot-traffic or analytics tool so Claude can read fresh numbers daily.",
      },
      {
        title: "Choose your pulse metrics",
        desc: "Pick the 5-7 numbers that matter most: daily revenue, transaction count, average ticket, new reviews, rating, foot traffic, online orders.",
      },
      {
        title: "Set your baselines and thresholds",
        desc: "Tell Claude what 'normal' looks like for each metric and the threshold that should trigger an alert.",
      },
      {
        title: "Generate the daily digest",
        desc: "Each morning Claude produces a one-glance digest: today vs. yesterday, vs. same day last week, and any metric outside its normal range.",
      },
      {
        title: "Surface anomalies and likely causes",
        desc: "For any out-of-range metric Claude suggests likely causes (a promo ended, a bad review landed, weather) so you act fast.",
      },
      {
        title: "Track the weekly trend",
        desc: "Every Friday Claude rolls the daily digests into a weekly trend with the direction of each metric and what to watch next week.",
      },
    ],
    tips: [
      "Read the digest at the same time every morning so anomalies get caught within hours, not weeks.",
      "Act on red flags the same day: a one-day revenue dip is a question, a one-week dip is a problem.",
      "Keep your metric list short: 5-7 numbers you will actually look at beat 30 you will ignore.",
      "Compare to the same day last week, not yesterday: day-of-week patterns distort daily comparisons.",
    ],
    cta: {
      label: "Back to AI Training",
      to: "/ai-training",
      internal: true,
    },
  },
];

function NotFound() {
  return (
    <Layout>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center mx-auto mb-5">
            <Lightbulb size={26} className="text-[#6366F1]" />
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Workflow not found
          </h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We could not find that workflow. Browse all 11 ready-to-run business
            workflows on the AI Training page.
          </p>
          <Link
            to="/ai-training"
            data-ocid="workflow.not_found.back_button"
            className="button-cta inline-flex items-center gap-2"
          >
            <ArrowLeft size={15} />
            Back to AI Training
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default function WorkflowDetailPage() {
  const { slug } = useParams({ from: "/workflows/$slug" });
  const workflow = WORKFLOWS.find((w) => w.slug === slug);

  if (!workflow) return <NotFound />;

  const Icon = workflow.icon;

  return (
    <ToolGuideLayout
      title={workflow.label}
      icon={Icon}
      description={workflow.description}
    >
      {/* Steps */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#6366F1]" />
          How to run this workflow
        </h2>
        <div className="space-y-4">
          {workflow.steps.map((step, i) => (
            <div
              key={step.title}
              data-ocid={`workflow.${workflow.slug}.step.item.${i + 1}`}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-[#6366F1]/30 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-foreground mb-1">
                  {step.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="rounded-xl border border-border bg-card p-6 mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb size={18} className="text-[#6366F1]" />
          Pro tips for this workflow
        </h2>
        <ul className="space-y-3">
          {workflow.tips.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-2.5 text-sm text-foreground/80"
            >
              <CheckCircle2
                size={14}
                className="text-[#6366F1] shrink-0 mt-0.5"
              />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        to={workflow.cta.to}
        data-ocid={`workflow.${workflow.slug}.cta_button`}
        className="button-cta inline-flex items-center gap-2"
      >
        <ArrowRight size={15} />
        {workflow.cta.label}
      </Link>
    </ToolGuideLayout>
  );
}
