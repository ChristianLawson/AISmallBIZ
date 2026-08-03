import { BackToTop } from "@/components/BackToTop";
import { BrandingCrossLink } from "@/components/BrandingCrossLink";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { GuidePrerequisiteBanner } from "@/components/GuidePrerequisiteBanner";
import { GuideTabToggle } from "@/components/GuideTabToggle";
import { Layout } from "@/components/Layout";
import { PremiumGate } from "@/components/PremiumGate";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickStartTab } from "@/components/QuickStartTab";
import { RecommendedToolsBox } from "@/components/RecommendedToolsBox";
import { SectionQA } from "@/components/SectionQA";
import { DeliAttractingWomenSection } from "@/components/deli/DeliAttractingWomenSection";
import { DeliBrandingSection } from "@/components/deli/DeliBrandingSection";
import { DeliBudgetSection } from "@/components/deli/DeliBudgetSection";
import { DeliCaseStudySection } from "@/components/deli/DeliCaseStudySection";
import { DeliCompetitorSection } from "@/components/deli/DeliCompetitorSection";
import { DeliFailureScenariosSection } from "@/components/deli/DeliFailureScenariosSection";
import { DeliFinancialSection } from "@/components/deli/DeliFinancialSection";
import { DeliGoogleMapsSection } from "@/components/deli/DeliGoogleMapsSection";
import { DeliHiringSection } from "@/components/deli/DeliHiringSection";
import { DeliLegalSection } from "@/components/deli/DeliLegalSection";
import { DeliPrintableChecklist } from "@/components/deli/DeliPrintableChecklist";
import { DeliQA } from "@/components/deli/DeliQA";
import { DeliRealNumbersSection } from "@/components/deli/DeliRealNumbersSection";
import { DeliRescueChecklist } from "@/components/deli/DeliRescueChecklist";
import { DeliRoadmapSection } from "@/components/deli/DeliRoadmapSection";
import { DeliSandwichSpecials } from "@/components/deli/DeliSandwichSpecials";
import { DeliSocialMediaSection } from "@/components/deli/DeliSocialMediaSection";
import { DeliTafferSection } from "@/components/deli/DeliTafferSection";
import { DeliVideoEmbedSection } from "@/components/deli/DeliVideoEmbedSection";
import { DeliWhySucceedSection } from "@/components/deli/DeliWhySucceedSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Eye,
  Heart,
  MapPin,
  Megaphone,
  Play,
  Printer,
  Sandwich,
  Scale,
  Share2,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "why-succeed", label: "Why Top Delis Succeed", icon: TrendingUp },
  { id: "taffer", label: "Bar Rescue Principles", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  { id: "attracting-women", label: "Attracting Women", icon: Heart },
  { id: "sandwiches", label: "Rotating Specials", icon: Sandwich },
  { id: "google-maps", label: "Google Maps & SEO", icon: MapPin },
  { id: "social-media", label: "Social Media", icon: TrendingUp },
  { id: "financial", label: "Financial Success", icon: DollarSign },
  { id: "benchmarks", label: "Real Numbers", icon: BarChart3 },
  { id: "failure-scenarios", label: "Failure Scenarios", icon: Eye },
  { id: "roadmap-90", label: "90-Day Roadmap", icon: MapPin },
  { id: "budget-breakdown", label: "Budget Breakdown", icon: DollarSign },
  { id: "hiring-staffing", label: "Hiring & Staffing", icon: Briefcase },
  { id: "legal-compliance", label: "Legal & Compliance", icon: Scale },
  { id: "competitor-research", label: "Competitor Research", icon: Eye },
  { id: "video-library", label: "Video Library", icon: Play },
  { id: "printable-checklist", label: "Printable Checklist", icon: Printer },
  { id: "case-study", label: "Case Study", icon: BookOpen },
  { id: "checklist", label: "Deli Rescue Checklist", icon: ClipboardCheck },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Audit your Google Maps listing: verify all info is complete and accurate",
  },
  {
    day: 2,
    action:
      "Add 3 new menu photos to Google Maps (exterior, top sandwich, team)",
  },
  {
    day: 3,
    action: "Post your first social media story showing a sandwich being made",
  },
  {
    day: 4,
    action:
      "Check and respond to your last 5 Google reviews (positive and negative)",
  },
  {
    day: 5,
    action: "Write one 'About Us' sentence that tells your deli's origin story",
  },
  {
    day: 6,
    action:
      "Implement one Taffer rule: post your operations procedures visibly for staff",
  },
  {
    day: 7,
    action:
      "Share your origin story on social media: why this deli, why this neighborhood",
  },
];

const ACCENT = "#6366F1";

export default function NYCDeliGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quickstart" | "full">(
    "quickstart",
  );

  useEffect(() => {
    const handleScroll = () => {
      let closest: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closestDist) {
          closestDist = dist;
          closest = section.id;
        }
      }
      if (closest !== null) setActiveSection(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveTab("full");
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  };

  return (
    <Layout>
      <ProgressBar />
      <BackToTop
        sections={SECTIONS.map((s) => ({ id: s.id, label: s.label }))}
      />
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="deli-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url('/assets/generated/nyc-deli-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <UtensilsCrossed size={12} />
              NYC Deli Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The NYC Deli Playbook: How to Build, Run &amp; Grow a{" "}
              <span className="text-gradient-vibrant">Legendary Deli</span> in
              2026
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a step-by-step playbook to run a more profitable NYC deli
              that keeps customers coming back. These strategies protect your
              revenue, save you time on daily operations, and turn first-time
              visitors into loyal regulars, drawn from Katz&#39;s Deli (130+
              years), Jon Taffer&#39;s Bar Rescue principles, Appreciated
              Branding, and NYC&#39;s fastest-rising deli operators.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "Katz's Deli since 1888", id: "case-study" },
                { label: "Jon Taffer's Rescue Principles", id: "taffer" },
                { label: "12 Rotating Sandwich Specials", id: "sandwiches" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`deli-guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="deli-guide.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  scrollTo(s.id);
                  setActiveSection(s.id);
                }}
                data-ocid={`deli-guide.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[#EEF2FF] text-[#6366F1]"
                    : "text-zinc-500 hover:text-[#6366F1]",
                ].join(" ")}
              >
                <s.icon size={12} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* Prerequisite Banner */}
        <GuidePrerequisiteBanner />

        {/* Quick Start / Full Guide Toggle */}
        <GuideTabToggle
          activeTab={activeTab}
          onChange={setActiveTab}
          accentColor={ACCENT}
        />

        <NYCHelpCallout />

        {activeTab === "quickstart" ? (
          <QuickStartTab days={QUICK_START_DAYS} accentColor={ACCENT} />
        ) : (
          <>
            <div id="why-succeed">
              <DeliWhySucceedSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What separates a legendary deli from a good deli?",
                  a: "Legendary delis have a story people want to be part of. Katz's is not just serving pastrami: it is selling 130 years of New York history. Authenticity, craft, and emotional connection are what make customers come back and tell others.",
                },
                {
                  q: "How important is the owner's presence on the floor?",
                  a: "Critical. Jon Taffer's research shows that owner-present businesses outperform absentee-owned businesses by 30-40% on customer satisfaction scores. Your presence is a marketing asset. Use it.",
                },
              ]}
            />
            <div id="taffer">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer's Bar Rescue framework applies to
                    your deli: from diagnosing failures to executing a rapid
                    turnaround plan.
                  </p>
                }
              >
                <DeliTafferSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle should I implement first?",
                  a: "Start with visible standards. Print your top 5 operating procedures and post them where staff can see them. Taffer calls this 'show-and-tell accountability': what is visible gets done.",
                },
                {
                  q: "My staff does not follow procedures. What would Taffer say?",
                  a: "'If they do not know what is expected, you have not managed: you have hoped.' Define the expectation, demonstrate it, measure it, and reward compliance. Hope is not a management strategy.",
                },
              ]}
            />
            <div id="branding">
              <PremiumGate
                sectionTitle="Appreciated Branding Deep-Dive"
                teaserContent={
                  <p>
                    Reid Holmes' Appreciated Branding methodology builds lasting
                    customer loyalty through genuine emotional connection and
                    brand identity.
                  </p>
                }
              >
                <DeliBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I build brand loyalty as a small deli?",
                  a: 'Start by remembering names. Then remember orders. Then remember occasions ("Happy Birthday" on someone\'s regular day). Small, personal gestures create emotional connections that chain restaurants can never replicate.',
                },
                {
                  q: "Should I charge premium prices or compete on value?",
                  a: "Compete on experience, not price. Customers who choose you because of price will leave when someone is cheaper. Customers who choose you because of how you make them feel are yours for life.",
                },
              ]}
            />
            <div id="attracting-women">
              <DeliAttractingWomenSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the fastest way to signal to women that my deli is welcoming?",
                  a: "Post visible anti-harassment signage at the counter and near the restrooms. It takes 5 minutes and immediately communicates that management enforces respectful behavior. Pair it with warm, attentive service and the message is complete.",
                },
                {
                  q: "What menu changes have the biggest impact on attracting women customers?",
                  a: "Clear dietary labeling (vegan, GF, low-cal) and a dedicated Power Lunch section with grain bowls and salads. Women are more likely to return to a place where they can reliably find healthy, customizable options without having to ask.",
                },
              ]}
            />
            <div id="sandwiches">
              <DeliSandwichSpecials />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I rotate specials?",
                  a: "Weekly rotation is the sweet spot. It is frequent enough to give regulars a reason to return, but predictable enough to build anticipation. Announce it on social media every Monday morning.",
                },
                {
                  q: "Should I keep sold-out specials on the menu?",
                  a: "Absolutely not. Running out of a special is a marketing event: post it on Instagram with 'SOLD OUT' and watch the demand build for next week. But never list something you cannot fulfill.",
                },
              ]}
            />
            <div id="google-maps">
              <DeliGoogleMapsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I update my Google Maps listing?",
                  a: "At a minimum, once per week. Google's algorithm rewards frequent updates with higher local search rankings. Change your hours, add a photo, or post a Google Business update: any activity counts.",
                },
                {
                  q: "My listing has 2-star reviews. What should I do first?",
                  a: "Respond to every review: positive and negative: within 24 hours. A professional, empathetic response to a negative review often impresses new customers more than a 5-star rating.",
                },
              ]}
            />
            <div id="social-media">
              <DeliSocialMediaSection />
            </div>
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "I do not have time to post every day. What is the minimum?",
                  a: "Post three times per week minimum. Tuesday (weekly special reveal), Thursday (ingredient story or behind-the-scenes), Saturday (action shots from the rush). Batch-film content once per week to make it manageable.",
                },
                {
                  q: "Should I run paid social ads for my deli?",
                  a: "Only after you have organic content working. Paying to amplify bad content wastes money. When you have posts that get 20+ saves and shares organically: then put $10-20/day behind them for hyper-local targeting.",
                },
              ]}
            />
            <div id="financial">
              <DeliFinancialSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What food cost percentage should I target?",
                  a: "28-32% is the target range for a profitable NYC deli. Above 35% and you are working for your suppliers. Track it weekly, not monthly: problems compound fast in food service.",
                },
                {
                  q: "When should I raise prices?",
                  a: "When your food cost percentage exceeds 33% for two consecutive weeks, it is time to adjust. Do not wait. A 5-8% price increase on premium items rarely drives customers away: it signals quality.",
                },
              ]}
            />
            <div id="benchmarks">
              <DeliRealNumbersSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the most important financial metric to track weekly?",
                  a: "Food cost percentage. If it creeps above 33% for two consecutive weeks, you have a sourcing or waste problem that needs immediate attention.",
                },
                {
                  q: "What does a 10% revenue lift actually look like in my pocket?",
                  a: "On a $600K/year deli, a 10% lift means $5,000 extra per month. That pays for a part-time manager, a paid social campaign, and still leaves money for reinvestment.",
                },
              ]}
            />
            <div id="failure-scenarios">
              <DeliFailureScenariosSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "I already ran Google Ads and got no results. What now?",
                  a: "Stop the ads. Audit your Google Business Profile against a 15-point checklist. Fix every gap. Then run ads again: but only to a profile that can convert.",
                },
                {
                  q: "My menu has 70 items. How do I decide what to cut?",
                  a: "Pull 90 days of POS data. Sort by units sold. The bottom 30% by volume gets cut first. Then cut anything with a margin below 60%. What remains is your hero menu.",
                },
              ]}
            />
            <div id="roadmap-90">
              <DeliRoadmapSection />
            </div>
            <div id="budget-breakdown">
              <DeliBudgetSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How much should I budget to improve an existing deli?",
                  a: "The highest-ROI improvements: Google profile, menu redesign, social content shoot: can be done for under $1,500. Start there before spending on paid advertising.",
                },
              ]}
            />
            <div id="hiring-staffing">
              <DeliHiringSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "When should I promote someone to manager?",
                  a: "When they are already doing manager tasks without the title. If they are covering for you, making decisions, and the team respects them: give them the title, the pay, and the accountability that comes with it.",
                },
              ]}
            />
            <div id="legal-compliance">
              <DeliLegalSection />
            </div>
            <div id="competitor-research">
              <DeliCompetitorSection />
            </div>
            <div id="video-library">
              <DeliVideoEmbedSection />
            </div>
            <div id="printable-checklist">
              <DeliPrintableChecklist />
            </div>
            <div id="case-study">
              <DeliCaseStudySection />
            </div>
            <div id="checklist">
              <DeliRescueChecklist />
            </div>
          </>
        )}

        {/* Q&A */}
        <section id="qa" data-ocid="deli-guide.qa_section">
          <div className="text-center mb-10">
            <span className="badge-primary-vibrant mb-3 inline-block">
              Questions &amp; Answers
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Deli Owner FAQs
            </h2>
            <p className="text-[#71717A] mt-2 max-w-xl mx-auto">
              Have a question specific to delis? Find quick answers below.
            </p>
          </div>
          <DeliQA />
        </section>

        {/* Author Attribution */}
        <GuideAuthorFooter />

        {/* Share & Back CTA */}
        <section
          className="rounded-2xl border border-border bg-muted/30 px-8 py-8 text-center"
          data-ocid="deli-guide.share_section"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="deli-guide.share_button"
              onClick={() => {
                const shareData = {
                  title: "NYC Deli Playbook 2026",
                  text: "Build and grow a legendary NYC deli with this comprehensive guide.",
                  url: window.location.href,
                };
                if (navigator.share) {
                  navigator.share(shareData);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-[15px] font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Share2 size={16} />
              Share This Guide
            </button>
            <Button
              asChild
              variant="outline"
              data-ocid="deli-guide.back_to_guides_link"
            >
              <Link
                to="/guides"
                search={{
                  topic: undefined,
                  businessType: undefined,
                  keyword: undefined,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                ← Back to All Guides
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-10 text-center bg-[#EEF2FF] border border-[#C7D2FE]"
          data-ocid="deli-guide.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Ready to Build Your Legendary Deli?
          </h2>
          <p className="text-[#71717A] text-lg mb-6 max-w-2xl mx-auto">
            Use AISmallBiz™ to get a personalized action plan tailored to your
            specific deli, neighborhood, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#6366F1] hover:bg-[#6366F1] text-white"
              data-ocid="deli-guide.get_plan_button"
            >
              <Link to="/onboarding" onClick={() => window.scrollTo(0, 0)}>
                Get My Personalized Plan
                <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
