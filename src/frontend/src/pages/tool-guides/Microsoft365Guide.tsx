import { Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Choose your Microsoft 365 plan",
    desc: "Visit microsoft.com/microsoft-365/business. The Business Basic plan ($6/user/month) includes web versions of Word, Excel, PowerPoint, Outlook, and Teams. Business Standard adds desktop apps.",
  },
  {
    title: "Set up your business domain email",
    desc: "Add your domain in the Microsoft Admin Center and verify ownership. Create user mailboxes like you@yourcompany.com and configure Outlook on desktop and mobile.",
  },
  {
    title: "Organize files in SharePoint and OneDrive",
    desc: "Store personal work files in OneDrive and team files in SharePoint. Set permissions so only the right people can access sensitive documents like payroll or contracts.",
  },
  {
    title: "Start using Microsoft Teams",
    desc: "Create a Team for your business and channels for each department or project. Teams replaces group text chains with threaded, searchable conversations.",
  },
  {
    title: "Explore Excel and Power BI for reporting",
    desc: "Use Excel templates for budgets, inventory, and sales tracking. Connect to Power BI for visual dashboards that update automatically from your data.",
  },
];

const TIPS = [
  "Use Microsoft Bookings to let customers schedule appointments online: integrates directly with your Outlook calendar.",
  "Enable Microsoft Defender for Business to protect all company devices from malware and phishing.",
  "Set up retention policies in the Compliance Center so emails and files are kept as long as legally required.",
  "Use Power Automate to create simple workflows like 'When a new lead email arrives, add them to my CRM and send a welcome message.'",
];

export default function Microsoft365Guide() {
  return (
    <ToolGuideLayout
      title="Microsoft 365"
      icon={Building2}
      description="Microsoft 365 bundles professional email, Office apps, cloud storage, and team collaboration into one subscription. It is ideal for small businesses that rely on Word, Excel, and Outlook: or need advanced security and compliance features."
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
              data-ocid={`microsoft-365.step.item.${i + 1}`}
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
        href="https://www.microsoft.com/microsoft-365/business"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="microsoft-365.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Microsoft 365 Business
      </a>
    </ToolGuideLayout>
  );
}
