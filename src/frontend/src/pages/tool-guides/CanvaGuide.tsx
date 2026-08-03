import { CheckCircle2, ExternalLink, Palette } from "lucide-react";
import { ToolGuideLayout } from "./ToolGuideLayout";

const STEPS = [
  {
    title: "Create your free Canva account",
    desc: "Sign up at canva.com with your business email. The free plan includes thousands of templates, 250,000+ stock images, and 5GB of cloud storage.",
  },
  {
    title: "Browse templates for your business type",
    desc: "Search for 'restaurant menu,' 'salon price list,' or 'retail flyer' to find professionally designed templates. Customize colors and fonts to match your brand.",
  },
  {
    title: "Upload your logo and brand colors",
    desc: "Use the Brand Kit (Pro feature) or simply upload your logo and set your brand colors manually. Consistency makes every design look professional.",
  },
  {
    title: "Design your first social media post",
    desc: "Pick an Instagram or Facebook template, swap in your photo, edit the text, and download as PNG or schedule directly to your social accounts.",
  },
  {
    title: "Explore print-ready designs",
    desc: "Canva can generate print-ready PDFs for business cards, flyers, menus, and signage. Order prints directly through Canva or download and print locally.",
  },
];

const TIPS = [
  "Use Canva's Magic Resize to instantly adapt one design for Instagram, Facebook, and Twitter dimensions.",
  "Save designs in folders by campaign or month so you can reuse and tweak them season after season.",
  "Try Canva's AI image generator to create unique visuals when stock photos do not fit your brand.",
  "Collaborate with team members by sharing a design link: no account required for viewers to comment.",
];

export default function CanvaGuide() {
  return (
    <ToolGuideLayout
      title="Canva"
      icon={Palette}
      description="Canva is a free design platform that lets small business owners create professional graphics without hiring a designer. From social media posts and flyers to menus and business cards, Canva's drag-and-drop editor makes design accessible to everyone."
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
              data-ocid={`canva.step.item.${i + 1}`}
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
        href="https://www.canva.com"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="canva.visit_button"
        className="button-cta inline-flex items-center gap-2"
      >
        <ExternalLink size={15} />
        Visit Canva
      </a>
    </ToolGuideLayout>
  );
}
