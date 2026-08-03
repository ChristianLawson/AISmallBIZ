import { CheckCircle2, DollarSign, ExternalLink } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your PayPal Business account",
    desc: "Sign up at paypal.com/business with your business email. Verify your identity and link a business bank account for withdrawals.",
  },
  {
    title: "Set up payment buttons on your website",
    desc: "Use PayPal's no-code button builder to add Buy Now, Subscribe, or Donate buttons to your site. Copy the HTML snippet and paste it into any page.",
  },
  {
    title: "Enable PayPal Invoicing",
    desc: "Create and send branded invoices directly from your PayPal dashboard. Customers can pay by card or PayPal balance: no account required for card payers.",
  },
  {
    title: "Turn on PayPal Zettle for in-person sales",
    desc: "Order a free card reader or use the Zettle app to accept tap, chip, and swipe payments at your counter, market stall, or pop-up.",
  },
  {
    title: "Review your Seller Protection settings",
    desc: "Understand what transactions are covered against chargebacks and unauthorized payments. Keep proof of delivery for physical goods.",
  },
];

const TIPS = [
  "Offer PayPal Pay in 4 at checkout: customers split purchases into 4 payments, you get paid upfront.",
  "Use PayPal's built-in shipping labels to save on USPS and UPS rates.",
  "Set up automatic transfers to your bank so cash flow stays predictable.",
  "Download the PayPal Business app to monitor sales and send invoices from your phone.",
];

export default function PayPalGuide() {
  return (
    <ToolGuideLayout
      title="PayPal"
      icon={DollarSign}
      description="PayPal powers online and in-person payments for millions of small businesses. From payment buttons on your website to invoicing and card readers at the counter, PayPal makes it easy to get paid however your customers prefer."
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
              data-ocid={`paypal.step.item.${i + 1}`}
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
        href="https://www.paypal.com/business"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="paypal.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit PayPal Business
      </a>
    </ToolGuideLayout>
  );
}
