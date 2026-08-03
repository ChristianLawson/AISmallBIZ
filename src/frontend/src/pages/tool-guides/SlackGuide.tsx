import { CheckCircle2, ExternalLink, MessageSquare } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your Slack workspace",
    desc: "Sign up at slack.com with your business email. Name your workspace after your business and upload your logo for instant brand recognition.",
  },
  {
    title: "Set up channels for your business",
    desc: "Create channels like #general, #marketing, #operations, and #random. Keep conversations organized so staff know exactly where to post and find information.",
  },
  {
    title: "Invite your team",
    desc: "Send invite links to employees, contractors, and key vendors. Set roles: owners, admins, and members: to control who can manage settings and add new people.",
  },
  {
    title: "Connect your essential apps",
    desc: "Integrate Google Drive, Trello, GitHub, or your CRM so notifications and updates flow directly into the right channels. No more checking ten different apps.",
  },
  {
    title: "Use Slack for customer support (optional)",
    desc: "Set up a shared channel with a key client or use Slack Connect to collaborate with external partners securely without leaving your workspace.",
  },
];

const TIPS = [
  "Pin important messages: store hours, WiFi passwords, and emergency contacts: so new hires find them instantly.",
  "Use threads to reply to messages so channels stay clean and easy to scan.",
  "Set status updates so your team knows when you are in a meeting, on the floor, or out for delivery.",
  "Create automated reminders for recurring tasks like 'Check inventory every Monday at 9am' using Slack's built-in workflow builder.",
];

export default function SlackGuide() {
  return (
    <ToolGuideLayout
      title="Slack"
      icon={MessageSquare}
      description="Slack is a team messaging platform that replaces scattered text messages and email chains with organized, searchable channels. Small businesses use it for daily communication, file sharing, and integrating the other tools they rely on."
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
              data-ocid={`slack.step.item.${i + 1}`}
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
        href="https://slack.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="slack.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Slack
      </a>
    </ToolGuideLayout>
  );
}
