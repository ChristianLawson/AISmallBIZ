import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ToolGuideLayoutProps {
  title: string;
  icon: LucideIcon;
  description: string;
  children: ReactNode;
}

export function ToolGuideLayout({
  title,
  icon: Icon,
  description,
  children,
}: ToolGuideLayoutProps) {
  return (
    <Layout>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Link
            to="/ai-training"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#6366F1] transition-colors duration-200 mb-6"
            data-ocid="tool-guide.back_link"
          >
            <ArrowLeft size={14} />
            Back to AI Training
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-[#6366F1]" />
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                {title}
              </h1>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            {description}
          </p>

          {children}
        </div>
      </section>
    </Layout>
  );
}
