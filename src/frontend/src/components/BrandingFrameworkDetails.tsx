import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Eye,
  Heart,
  type LucideIcon,
  Megaphone,
  Palette,
  Target,
} from "lucide-react";
import type { ReactNode } from "react";

export interface BrandingSubsectionData {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  content: ReactNode;
  actionItems: string[];
  tafferNote?: string;
}

interface BrandingFrameworkDetailsProps {
  businessType: string;
  subsections: BrandingSubsectionData[];
  accentColor?: string;
  accentBg?: string;
  accentBorder?: string;
}

export function BrandingFrameworkDetails({
  businessType,
  subsections,
  accentColor = "oklch(0.28 0.12 330)",
  accentBg = "oklch(0.28 0.12 330 / 0.07)",
  accentBorder = "oklch(0.28 0.12 330 / 0.2)",
}: BrandingFrameworkDetailsProps) {
  return (
    <div
      className="mt-12 space-y-8"
      data-ocid={`${businessType}-guide.branding_framework_details`}
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          The Appreciated Branding Framework
        </h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
          Five interconnected pillars that transform your {businessType} from a
          transactional business into a brand people genuinely love. Each pillar
          includes actionable steps you can implement this week.
        </p>
      </div>

      {/* Subsections */}
      <div className="space-y-6">
        {subsections.map((subsection, index) => {
          const Icon = subsection.icon;
          return (
            <Card
              key={subsection.title}
              className="overflow-hidden border-0 shadow-subtle"
              data-ocid={`${businessType}-guide.branding_subsection.${index + 1}`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left sidebar with icon and number */}
                  <div
                    className="flex-none md:w-20 p-4 md:p-6 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2"
                    style={{ background: accentBg }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: accentColor,
                        opacity: 0.15,
                      }}
                    >
                      <Icon size={20} style={{ color: accentColor }} />
                    </div>
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: accentColor, opacity: 0.7 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content area */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h4 className="font-display font-bold text-lg text-foreground">
                        {subsection.title}
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        : {subsection.subtitle}
                      </span>
                    </div>

                    <div className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {subsection.content}
                    </div>

                    {/* Action Items */}
                    <div
                      className="rounded-xl p-4"
                      style={{
                        background: accentBg,
                        border: `1px solid ${accentBorder}`,
                      }}
                    >
                      <h5
                        className="text-xs font-bold uppercase tracking-wider mb-3"
                        style={{ color: accentColor }}
                      >
                        Action Steps: Do This Week
                      </h5>
                      <ul className="space-y-2">
                        {subsection.actionItems.map((item, i) => (
                          <li
                            key={`action-${subsection.title}-${i}`}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                              style={{
                                background: accentColor,
                                color: "white",
                                opacity: 0.9,
                              }}
                            >
                              {i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional Taffer Note */}
                    {subsection.tafferNote && (
                      <div
                        className="mt-4 rounded-lg p-3 flex items-start gap-3"
                        style={{
                          background: "oklch(0.55 0.14 85 / 0.08)",
                          border: "1px solid oklch(0.55 0.14 85 / 0.2)",
                        }}
                      >
                        <Megaphone
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: "oklch(0.55 0.14 85)" }}
                        />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <strong style={{ color: "oklch(0.45 0.12 85)" }}>
                            Jon Taffer Insight:
                          </strong>{" "}
                          {subsection.tafferNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
