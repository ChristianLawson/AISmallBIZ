import { BackToTop } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { GuidePrerequisiteBanner } from "@/components/GuidePrerequisiteBanner";
import { GuideTabToggle } from "@/components/GuideTabToggle";
import { Layout } from "@/components/Layout";
import { NYCHelpCallout } from "@/components/NYCHelpCallout";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickStartTab } from "@/components/QuickStartTab";
import { RecommendedToolsBox } from "@/components/RecommendedToolsBox";
import { SectionQA } from "@/components/SectionQA";
import { SocialMedia30DayPlan } from "@/components/socialmedia/SocialMedia30DayPlan";
import { SocialMediaAdvertisingSection } from "@/components/socialmedia/SocialMediaAdvertisingSection";
import { SocialMediaAmexRuleSection } from "@/components/socialmedia/SocialMediaAmexRuleSection";
import { SocialMediaByBusinessSection } from "@/components/socialmedia/SocialMediaByBusinessSection";
import { SocialMediaContentCreationSection } from "@/components/socialmedia/SocialMediaContentCreationSection";
import { SocialMediaIntroSection } from "@/components/socialmedia/SocialMediaIntroSection";
import { SocialMediaMeasurementSection } from "@/components/socialmedia/SocialMediaMeasurementSection";
import { SocialMediaPersonaSection } from "@/components/socialmedia/SocialMediaPersonaSection";
import { SocialMediaPlatformSetupSection } from "@/components/socialmedia/SocialMediaPlatformSetupSection";
import { SocialMediaPlatformsSection } from "@/components/socialmedia/SocialMediaPlatformsSection";
import { SocialMediaToolsSection } from "@/components/socialmedia/SocialMediaToolsSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Calendar,
  CheckSquare,
  ChevronRight,
  DollarSign,
  Settings,
  Share2,
  Store,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "introduction", label: "Introduction", icon: Share2 },
  { id: "customer-personas", label: "Customer Personas", icon: Users },
  { id: "platform-selection", label: "Platforms", icon: Target },
  { id: "amex-rule", label: "80/20 Rule", icon: BarChart3 },
  { id: "content-creation", label: "Content Creation", icon: Calendar },
  { id: "platform-setup", label: "Platform Setup", icon: Settings },
  { id: "measurement", label: "Measurement", icon: TrendingUp },
  { id: "advertising", label: "Advertising", icon: DollarSign },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "by-business-type", label: "By Business Type", icon: Store },
  { id: "action-plan", label: "30-Day Plan", icon: CheckSquare },
];

export default function SocialMediaGuide() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const handleScroll = () => {
      let bestSection: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closestDist) {
          closestDist = dist;
          bestSection = section.id;
        }
      }
      if (bestSection !== null) setActiveSection(bestSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="social-media.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
                <Share2 size={12} />
                Social Media Marketing
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
                ✓ NYC SBS Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-red-100 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800">
                🔥 Taffer Approved
              </span>
            </div>

            <h1 className="heading-hero text-foreground">
              Social Media Marketing{" "}
              <span className="text-gradient-vibrant">for Small Business</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable">
              You get a step-by-step plan to bring in more customers through
              social media without hiring help. That matters because a steady
              stream of posts and reviews turns casual followers into paying
              regulars, which grows your sales week after week.
            </p>

            <p className="text-sm text-muted-foreground italic">
              Built from the official NYC Small Business Services curriculum,
              Taffer's diagnosis-first method, and Reid Holmes' Appreciated
              Branding principles. For All 11 AISmallBiz (TM) Business Types
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "Customer Personas", id: "customer-personas" },
                { label: "Platform Strategy", id: "platform-selection" },
                { label: "80/20 Content Rule", id: "amex-rule" },
                {
                  label: "Facebook & Instagram Setup",
                  id: "platform-setup",
                },
                { label: "Paid Advertising", id: "advertising" },
                { label: "30-Day Action Plan", id: "action-plan" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`social-media.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:bg-accent-neutral-soft dark:text-accent-neutral dark:border-accent-neutral-border cursor-pointer transition-colors duration-200 hover:bg-accent-neutral-soft hover:border-accent-neutral dark:hover:bg-accent-neutral-soft dark:hover:border-accent-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-neutral opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Guide section navigation"
        data-ocid="social-media.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`social-media.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral"
                    : "text-zinc-500 hover:text-accent-neutral dark:text-zinc-400 dark:hover:text-accent-neutral",
                ].join(" ")}
              >
                <s.icon size={12} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT SECTIONS: alternating bg for visual zone separation */}
      <SocialMediaIntroSection />
      <section id="customer-personas" className="bg-muted/30">
        <SocialMediaPersonaSection />
      </section>
      <SocialMediaPlatformsSection />
      <section id="amex-rule" className="bg-muted/30">
        <SocialMediaAmexRuleSection />
      </section>
      <SocialMediaContentCreationSection />
      <section id="platform-setup" className="bg-muted/30">
        <SocialMediaPlatformSetupSection />
      </section>
      <SocialMediaMeasurementSection />
      <section id="advertising" className="bg-muted/30">
        <SocialMediaAdvertisingSection />
      </section>
      <SocialMediaToolsSection />
      <SocialMediaByBusinessSection />
      <SocialMedia30DayPlan />

      {/* NYC HELP CALLOUT */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <NYCHelpCallout />
        </div>
      </section>

      {/* SECTION Q&A */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Social Media Marketing Q&A
          </h2>
          <p className="text-muted-foreground mb-6">
            Common questions from small business owners getting started with
            social media.
          </p>
          <SectionQA
            items={[
              {
                q: "How much time should I spend on social media each week?",
                a: "Most small businesses see results with just 2-3 hours per week when using the 80/20 rule consistently.",
              },
              {
                q: "Which platform should I start with?",
                a: "Start with Facebook if you serve all ages, Instagram if you are visual/product-based, or LinkedIn if you serve other businesses.",
              },
              {
                q: "How long before I see results?",
                a: "Typically 3-6 months of consistent posting before you see meaningful engagement growth. Paid ads can accelerate this to 2-4 weeks.",
              },
              {
                q: "Do I need to hire a social media manager?",
                a: "Not at first. Use scheduling tools like Buffer to batch your content once a week. Hire help when your budget exceeds $2,000/month on ads.",
              },
              {
                q: "Is the Amex Rule (80/20) really that important?",
                a: "Yes: accounts that post 80% helpful content and only 20% promotional content get 3-5x more engagement than purely promotional accounts.",
              },
            ]}
          />
        </div>
      </section>

      <GuideAuthorFooter />
    </Layout>
  );
}
