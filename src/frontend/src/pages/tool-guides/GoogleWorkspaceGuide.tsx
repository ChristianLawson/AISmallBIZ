import { CheckCircle2, ExternalLink, Globe } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Set up your Google Workspace account",
    desc: "Visit workspace.google.com and choose the Business Starter plan ($6/user/month). You get a custom business email (@yourcompany.com), Google Drive, Docs, Sheets, and Meet.",
  },
  {
    title: "Connect your domain",
    desc: "Verify ownership of your domain by adding a TXT record at your domain registrar. Google provides step-by-step instructions for GoDaddy, Namecheap, and others.",
  },
  {
    title: "Create shared drives for your team",
    desc: "Set up shared Google Drive folders for Operations, Marketing, Finance, and HR. Control who can view, comment, or edit each folder.",
  },
  {
    title: "Set up Gmail with your business domain",
    desc: "Configure MX records so email to @yourcompany.com lands in Gmail. Enable aliases like support@ and billing@ to route messages to the right people.",
  },
  {
    title: "Use Google Calendar for scheduling",
    desc: "Share your calendar with staff, create booking pages for client appointments, and set up Google Meet links automatically for every meeting.",
  },
];

const TIPS = [
  "Enable 2-Step Verification for all accounts: small businesses are frequent targets for phishing attacks.",
  "Use Google Forms to collect customer feedback, job applications, and event RSVPs: responses feed directly into a spreadsheet.",
  "Set up Google Chat spaces for each department so conversations stay organized and searchable.",
  "Use Google Sheets with built-in formulas to track inventory, sales pipelines, and employee schedules in real time.",
];

export default function GoogleWorkspaceGuide() {
  return (
    <ToolGuideLayout
      title="Google Workspace"
      icon={Globe}
      description="Google Workspace gives small businesses professional email, cloud storage, document collaboration, and video meetings: all under your own domain. It replaces scattered personal accounts with one secure, organized system your whole team can use."
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
              data-ocid={`google-workspace.step.item.${i + 1}`}
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
        href="https://workspace.google.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="google-workspace.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Google Workspace
      </a>
    </ToolGuideLayout>
  );
}
