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
import { SalonAttractingWomenSection } from "@/components/salon/SalonAttractingWomenSection";
import { SalonBrandingSection } from "@/components/salon/SalonBrandingSection";
import { SalonFinancialSection } from "@/components/salon/SalonFinancialSection";
import { SalonGoogleMapsSection } from "@/components/salon/SalonGoogleMapsSection";
import { SalonPromotions } from "@/components/salon/SalonPromotions";
import { SalonQA } from "@/components/salon/SalonQA";
import { SalonRescueChecklist } from "@/components/salon/SalonRescueChecklist";
import { SalonSocialMediaSection } from "@/components/salon/SalonSocialMediaSection";
import { SalonTafferSection } from "@/components/salon/SalonTafferSection";
import { SalonWhySucceedSection } from "@/components/salon/SalonWhySucceedSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Heart,
  MapPin,
  Megaphone,
  MessageCircle,
  Scissors,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "why-succeed", label: "Why Salons Succeed", icon: TrendingUp },
  { id: "taffer", label: "Bar Rescue Principles", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  { id: "attracting-women", label: "Attracting All Women", icon: Heart },
  { id: "promotions", label: "Weekly Promotions", icon: Sparkles },
  { id: "google-maps", label: "Google Maps & SEO", icon: MapPin },
  { id: "social-media", label: "Social Media", icon: TrendingUp },
  { id: "financial", label: "Financial Success", icon: DollarSign },
  { id: "checklist", label: "Salon Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: MessageCircle },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Check and update your Google My Business profile: hours, services, photos",
  },
  { day: 2, action: "Post a before/after photo on Instagram and Google Maps" },
  {
    day: 3,
    action:
      "Create your weekly 'The Executive Refresh' promotion text for social media",
  },
  {
    day: 4,
    action:
      "Ask 3 regular clients to leave a Google review (send them the direct link)",
  },
  {
    day: 5,
    action:
      "Define your salon's 1-sentence brand story: who you serve, what makes you different",
  },
  {
    day: 6,
    action: "Set up your online booking link and add it to your Instagram bio",
  },
  {
    day: 7,
    action: "Post your unique story on social media with your brand hashtag",
  },
];

const ACCENT = "#6366F1";

export default function NYCSalonGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quickstart" | "full">(
    "quickstart",
  );

  useEffect(() => {
    const handleScroll = () => {
      let active: string | null = null;
      let closest = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closest) {
          closest = dist;
          active = section.id;
        }
      }
      if (active) setActiveSection(active);
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
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="salon-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url('/assets/generated/nyc-salon-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Scissors size={12} />
              NYC Salon Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The NYC Salon Guide: Build, Brand &amp; Grow a{" "}
              <span className="text-gradient-vibrant">Thriving Salon</span> in
              2026
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a complete playbook to fill your chairs, raise your
              average ticket, and keep clients coming back. That means more
              revenue per hour, less empty calendar time, and a steady base of
              loyal customers who refer their friends. Built on Jon
              Taffer&apos;s Bar Rescue principles, Reid Holmes&apos; Appreciated
              Branding methodology, and NYC&apos;s highest-performing salons.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "$127\u2192$183 avg ticket jump", id: "financial" },
                { label: "Jon Taffer's Rescue Principles", id: "taffer" },
                { label: "12 Rotating Weekly Promotions", id: "promotions" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`salon-guide.hero.tag.item.${i + 1}`}
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

      {/* STICKY SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="salon-guide.section_nav"
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
                data-ocid={`salon-guide.section_nav.item.${i + 1}`}
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

        <NYCHelpCallout showWENYC />

        {activeTab === "quickstart" ? (
          <QuickStartTab days={QUICK_START_DAYS} accentColor={ACCENT} />
        ) : (
          <>
            <div id="why-succeed">
              <SalonWhySucceedSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What makes the highest-grossing NYC salons different?",
                  a: "They sell transformation, not haircuts. The experience, from booking to blowout, makes clients feel elevated, confident, and understood. That emotional value commands premium pricing.",
                },
                {
                  q: "How important are stylists' personal brands?",
                  a: "Extremely. Drybar proved it: the brand IS the experience, not individual stylists. But for independent salons, a stylist's Instagram following is a measurable client acquisition asset. Encourage it, reward it.",
                },
              ]}
            />
            <div id="taffer">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer's Bar Rescue framework applies to
                    your salon: from diagnosing failures to executing a rapid
                    turnaround plan.
                  </p>
                }
              >
                <SalonTafferSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which salon procedure should I document first?",
                  a: "The client consultation. Every new client interaction should follow the same script: needs assessment, style discussion, product recommendation, booking next appointment before they leave. Consistency is the product.",
                },
                {
                  q: "How do I handle a stylist who ignores procedures?",
                  a: "Document, discuss, and give one formal opportunity to improve. Accountability is not punishment, it is respect. High performers want to be held to high standards. Low performers who will not meet standards hurt everyone.",
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
                <SalonBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I differentiate my salon when there are dozens nearby?",
                  a: "Niche down. 'We specialize in natural hair texture for professional Black women in Manhattan' is 10x more powerful than 'We do all hair types.' The more specific your promise, the more loyal your client base.",
                },
                {
                  q: "Should I use my name as the salon brand?",
                  a: "Only if you plan to stay there forever. If you want to scale, open a second location, or sell the business one day, build a brand identity that exists beyond you personally.",
                },
              ]}
            />
            <div id="attracting-women">
              <SalonAttractingWomenSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I make my salon feel genuinely welcoming to all women, not just a niche?",
                  a: "Start with what is visible: inclusive imagery in your salon and on social media, a clearly posted anti-harassment policy, and pricing by hair length, never gender or texture. Women notice when they see themselves reflected in a space. That is the fastest trust signal you can send.",
                },
                {
                  q: "Is it worth hosting women-only events if I already serve a mostly female clientele?",
                  a: "Yes, because most of your current clients have female friends who do not visit you yet. Women-only events (networking nights, girls' night pampering, styling workshops) give them a reason to bring their circle. One event done right creates 5 to 10 new regulars.",
                },
              ]}
            />
            <div id="promotions">
              <SalonPromotions />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I price weekly promotions without devaluing my services?",
                  a: "Never discount your core services. Promote add-ons (glosses, treatments, scalp massages) instead. Position them as 'this month's featured experience' rather than discounts. Value-add, never value-cut.",
                },
                {
                  q: "What is the best day to run promotions for maximum uptake?",
                  a: "Post Monday, run Tuesday through Thursday. Weekend slots are already filled by regulars. Promotions drive midweek fill, which is where your revenue gaps actually are.",
                },
              ]}
            />
            <div id="google-maps">
              <SalonGoogleMapsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I update my Google Maps listing?",
                  a: "Weekly minimum. Add a before/after photo every Monday. Google rewards active profiles with higher search rankings, inactivity is penalized just as activity is rewarded.",
                },
                {
                  q: "A bad review is hurting my salon's rating. What do I do?",
                  a: "Respond within 24 hours, professionally and empathetically. Never argue. Invite them to call you directly. Then bury it by actively asking your happy clients to leave reviews, 10 five-stars drowns one two-star.",
                },
              ]}
            />
            <div id="social-media">
              <SalonSocialMediaSection />
            </div>
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What content performs best for salons on Instagram?",
                  a: "Before/after transformations (always get permission), time-lapse coloring videos, and client reaction moments. Real, emotional, unscripted content outperforms polished ads by 3 to 5x for local businesses.",
                },
                {
                  q: "Should I invest in TikTok or Instagram for my salon?",
                  a: "Both, but with different content. Instagram converts (people book after seeing your work there). TikTok discovers (new audiences find you). Repurpose the same video to both, it takes 30 extra seconds.",
                },
              ]}
            />
            <div id="financial">
              <SalonFinancialSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is a healthy revenue per stylist per day?",
                  a: "$600 to $900 per day per chair in NYC is the target range for a profitable salon. Below $400 per day and you are subsidizing that chair. Track per-stylist revenue weekly, it is your most important operational metric.",
                },
                {
                  q: "When should I raise service prices?",
                  a: "When you are booked 3 or more weeks in advance, it is time to raise prices. Fully booked at current prices means you are undercharging. A 10 to 15% increase on core services rarely loses loyal clients.",
                },
              ]}
            />
            <div id="checklist">
              <SalonRescueChecklist />
            </div>
          </>
        )}

        {/* Q&A */}
        <section id="qa" data-ocid="salon-guide.qa_section">
          <div className="text-center mb-10">
            <span className="badge-primary-vibrant mb-3 inline-block">
              Questions &amp; Answers
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Salon Owner FAQs
            </h2>
            <p className="text-[#71717A] mt-2 max-w-xl mx-auto">
              Have a question specific to salons? Find quick answers below.
            </p>
          </div>
          <SalonQA />
        </section>

        {/* Author Attribution */}
        <GuideAuthorFooter />

        {/* Share & Back CTA */}
        <section
          className="rounded-2xl border border-border bg-muted/30 px-8 py-8 text-center"
          data-ocid="salon-guide.share_section"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="salon-guide.share_button"
              onClick={() => {
                const shareData = {
                  title: "NYC Salon Playbook 2026",
                  text: "Build and grow a thriving NYC salon with this comprehensive guide.",
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
              data-ocid="salon-guide.back_to_guides_link"
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
          data-ocid="salon-guide.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Ready to Build Your Premier NYC Salon?
          </h2>
          <p className="text-[#71717A] text-lg mb-6 max-w-2xl mx-auto">
            Use AISmallBiz™ to get a personalized action plan tailored to your
            specific salon, neighborhood, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#6366F1] hover:bg-[#6366F1] text-white"
              data-ocid="salon-guide.get_plan_button"
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
