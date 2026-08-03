import { CheckCircle2, DollarSign, ExternalLink } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Sign up for a QuickBooks account",
    desc: "Visit quickbooks.intuit.com and choose the plan that fits your business. The Simple Start plan covers invoicing, expense tracking, and basic reporting for most small businesses.",
  },
  {
    title: "Connect your bank accounts",
    desc: "Link your business checking and credit cards so transactions flow in automatically. This saves hours of manual data entry every month.",
  },
  {
    title: "Set up your chart of accounts",
    desc: "Customize income and expense categories to match your business. A restaurant might track food costs, labor, and rent separately; a retail shop might track inventory and cost of goods sold.",
  },
  {
    title: "Create your first invoice",
    desc: "Use QuickBooks' built-in templates to send professional invoices. Set up recurring invoices for repeat customers to automate billing.",
  },
  {
    title: "Run your first profit & loss report",
    desc: "Go to Reports → Profit & Loss to see exactly where your money is going. Review this monthly to spot trends and catch issues early.",
  },
];

const TIPS = [
  "Turn on automatic mileage tracking in the mobile app to capture every deductible mile.",
  "Use the QuickBooks Payments add-on to let customers pay invoices online: funds deposit in 1-2 business days.",
  "Schedule weekly time to categorize uncategorized transactions: 15 minutes keeps your books clean.",
  "Invite your accountant with read-only access so they can pull reports without interrupting your workflow.",
];

export default function QuickBooksGuide() {
  return (
    <ToolGuideLayout
      title="QuickBooks"
      icon={DollarSign}
      description="QuickBooks is the most popular accounting software for small businesses. It handles invoicing, expense tracking, payroll, and tax prep: all in one place. Whether you run a deli, salon, or retail shop, clean books are the foundation of every smart business decision."
    >
      {/* Step-by-step */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#6366F1]" />
          Getting Started in 5 Steps
        </h2>
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              data-ocid={`quickbooks.step.item.${i + 1}`}
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

      {/* CTA */}
      <a
        href="https://quickbooks.intuit.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="quickbooks.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit QuickBooks
      </a>
    </ToolGuideLayout>
  );
}
