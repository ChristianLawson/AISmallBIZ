import { CheckCircle2, ExternalLink, Users } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Sign up for HubSpot CRM Free",
    desc: "Create your account at hubspot.com. The free CRM includes contact management, deal tracking, email templates, and meeting scheduling: no credit card required.",
  },
  {
    title: "Import your contacts",
    desc: "Upload a CSV of your existing customers, leads, and vendors. HubSpot automatically maps fields like name, email, phone, and company.",
  },
  {
    title: "Create your first pipeline",
    desc: "Set up a sales pipeline with stages like New Lead, Qualified, Proposal Sent, and Closed Won. Drag deals between stages as they progress.",
  },
  {
    title: "Connect your email",
    desc: "Link Gmail or Outlook to HubSpot so every email to a contact is logged automatically. Track opens and clicks to see who is engaged.",
  },
  {
    title: "Set up a simple automation",
    desc: "Create a workflow that sends a welcome email when a new contact is added, or reminds you to follow up 3 days after a proposal is sent.",
  },
];

const TIPS = [
  "Use the HubSpot mobile app to log calls and notes immediately after a customer conversation.",
  "Create email templates for common replies: quotes, follow-ups, and thank-you notes: to save hours every week.",
  "Set up a free meeting link so customers can book time directly on your calendar without the back-and-forth.",
  "Track website visits with HubSpot's tracking code to see which contacts are browsing your pricing page.",
];

export default function HubSpotGuide() {
  return (
    <ToolGuideLayout
      title="HubSpot"
      icon={Users}
      description="HubSpot is a free CRM that helps small businesses manage leads, track deals, and nurture customer relationships. It replaces scattered spreadsheets and sticky notes with one organized system that grows with you."
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
              data-ocid={`hubspot.step.item.${i + 1}`}
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
        href="https://www.hubspot.com/products/crm"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="hubspot.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit HubSpot CRM
      </a>
    </ToolGuideLayout>
  );
}
