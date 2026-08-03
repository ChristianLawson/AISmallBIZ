import { CheckCircle2, DollarSign, ExternalLink } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your Square account",
    desc: "Sign up at squareup.com with your business details. The free plan includes a point-of-sale app, online store, and invoicing: no monthly fee, just per-transaction pricing.",
  },
  {
    title: "Order or set up your hardware",
    desc: "Use the free Square Point of Sale app on any phone or tablet, or order a Square Reader for contactless and chip payments. For a full counter setup, consider Square Register or Terminal.",
  },
  {
    title: "Build your item library",
    desc: "Add every product or service you sell with photos, descriptions, and prices. Organize items into categories so checkout is fast and your reports are meaningful.",
  },
  {
    title: "Set up your online store",
    desc: "Square Online creates a free e-commerce website synced with your item library. Customers can order for pickup, delivery, or shipping: inventory updates automatically.",
  },
  {
    title: "Explore Square's built-in tools",
    desc: "Use Square Appointments for booking, Square Marketing for email campaigns, and Square Payroll to pay your team. Everything connects to your sales data.",
  },
];

const TIPS = [
  "Enable Square Loyalty to reward repeat customers: it integrates directly at checkout with no extra cards or apps needed.",
  "Use Square's instant transfer to move funds to your bank in minutes instead of 1-2 business days.",
  "Set up low-stock alerts so you never run out of your best-selling items during a rush.",
  "Review the Square Dashboard app daily to spot sales trends, busiest hours, and top-performing staff.",
];

export default function SquareGuide() {
  return (
    <ToolGuideLayout
      title="Square"
      icon={DollarSign}
      description="Square is an all-in-one payment and business management platform built for small businesses. From in-person card readers to online stores, appointments, payroll, and loyalty programs, Square handles the operational side so you can focus on customers."
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
              data-ocid={`square.step.item.${i + 1}`}
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
        href="https://squareup.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="square.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Square
      </a>
    </ToolGuideLayout>
  );
}
