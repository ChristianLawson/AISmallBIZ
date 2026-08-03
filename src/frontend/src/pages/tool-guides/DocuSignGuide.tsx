import { CheckCircle2, ExternalLink, FileText } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your DocuSign account",
    desc: "Sign up at docusign.com. The free trial lets you send a limited number of envelopes. For ongoing use, the Business Pro plan includes unlimited sending and advanced fields.",
  },
  {
    title: "Upload your first document",
    desc: "Upload a contract, agreement, or form. DocuSign supports PDF, Word, and image files. The document stays private and encrypted.",
  },
  {
    title: "Add signature and date fields",
    desc: "Drag signature, initial, date, and text fields onto the document where signers need to act. Assign each field to the correct recipient.",
  },
  {
    title: "Send for signature",
    desc: "Enter recipient emails, add a personal message, and hit Send. Recipients get an email with a secure link: no DocuSign account needed to sign.",
  },
  {
    title: "Track and manage signed documents",
    desc: "Monitor who has opened, viewed, and signed in real time. Download the completed PDF with an audit trail for your records.",
  },
];

const TIPS = [
  "Save frequently used documents as templates: employment agreements, vendor contracts, and client onboarding forms.",
  "Set automatic reminders so signers who forget get a gentle nudge after 3 and 7 days.",
  "Use bulk send to distribute the same document to dozens of recipients at once: perfect for seasonal staff agreements.",
  "Enable SMS delivery for urgent documents so signers get a text link in addition to email.",
];

export default function DocuSignGuide() {
  return (
    <ToolGuideLayout
      title="DocuSign"
      icon={FileText}
      description="DocuSign replaces paper contracts with legally binding electronic signatures. Small businesses use it for vendor agreements, employee onboarding, client contracts, and lease renewals: saving time, paper, and trips to the printer."
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
              data-ocid={`docusign.step.item.${i + 1}`}
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
        href="https://www.docusign.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="docusign.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit DocuSign
      </a>
    </ToolGuideLayout>
  );
}
