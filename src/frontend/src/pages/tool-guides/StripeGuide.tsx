import { CheckCircle2, DollarSign, ExternalLink } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your Stripe account",
    desc: "Sign up at stripe.com. Stripe is developer-friendly but also offers no-code options. Verify your business details to start accepting live payments.",
  },
  {
    title: "Set up Stripe Payments",
    desc: "Use Stripe's prebuilt checkout page or Payment Links to start accepting credit cards immediately: no website integration required for simple use cases.",
  },
  {
    title: "Connect Stripe to your online store",
    desc: "If you use Shopify, WooCommerce, or Squarespace, install the Stripe plugin in minutes. Payments flow directly into your Stripe dashboard.",
  },
  {
    title: "Configure payouts and reporting",
    desc: "Set your payout schedule (daily, weekly, or manual). Use Stripe's reporting tools to reconcile transactions, handle refunds, and prepare tax documents.",
  },
  {
    title: "Explore advanced features",
    desc: "Set up subscriptions for recurring billing, invoicing for B2B clients, and Stripe Tax to automatically calculate and collect sales tax.",
  },
];

const TIPS = [
  "Use Stripe's test mode to simulate transactions before going live: practice refunds, disputes, and failed payments safely.",
  "Enable Stripe Radar to block fraudulent transactions automatically using machine learning.",
  "Set up webhook notifications so your other tools (CRM, accounting) update instantly when a payment succeeds or fails.",
  "Review Stripe's transparent fee structure: 2.9% + 30¢ per transaction for cards, with volume discounts available.",
];

export default function StripeGuide() {
  return (
    <ToolGuideLayout
      title="Stripe"
      icon={DollarSign}
      description="Stripe is a powerful payment platform used by millions of businesses worldwide. It handles online payments, subscriptions, invoicing, and fraud prevention with clean APIs and transparent pricing. Whether you run an e-commerce store or a service business, Stripe gets you paid securely."
    >
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#6366F1]" />
          Getting Started in 5 Steps
        </h2>
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              data-ocid={`stripe.step.item.${i + 1}`}
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

      <div className="rounded-xl border border-border bg-card p-6 mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <ExternalLink size={18} className="text-[#6366F1]" />
          Pro Tips for Small Business Owners
        </h2>
        <ul className="space-y-3">
          {TIPS.map((tip) => (
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

      <a
        href="https://stripe.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="stripe.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Stripe
      </a>
    </ToolGuideLayout>
  );
}
