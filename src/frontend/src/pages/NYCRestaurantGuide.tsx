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
import { RestaurantAttractingWomenSection } from "@/components/restaurant/RestaurantAttractingWomenSection";
import { RestaurantBrandingSection } from "@/components/restaurant/RestaurantBrandingSection";
import { RestaurantFinancialSection } from "@/components/restaurant/RestaurantFinancialSection";
import { RestaurantGoogleMapsSection } from "@/components/restaurant/RestaurantGoogleMapsSection";
import { RestaurantQA } from "@/components/restaurant/RestaurantQA";
import { RestaurantRescueChecklist } from "@/components/restaurant/RestaurantRescueChecklist";
import { RestaurantSocialMediaSection } from "@/components/restaurant/RestaurantSocialMediaSection";
import { RestaurantSpecials } from "@/components/restaurant/RestaurantSpecials";
import { RestaurantTafferSection } from "@/components/restaurant/RestaurantTafferSection";
import { RestaurantWhySucceedSection } from "@/components/restaurant/RestaurantWhySucceedSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Film,
  Heart,
  MapPin,
  Megaphone,
  Share2,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "why-succeed", label: "Why Succeed", icon: TrendingUp },
  { id: "taffer", label: "Bar Rescue Principles", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  { id: "attracting-women", label: "Attracting Women Diners", icon: Heart },
  { id: "specials", label: "Rotating Specials", icon: UtensilsCrossed },
  { id: "google-maps", label: "Google Maps & SEO", icon: MapPin },
  { id: "social-media", label: "Social Media", icon: Film },
  { id: "financial", label: "Financial Success", icon: DollarSign },
  { id: "checklist", label: "Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: TrendingUp },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Google your restaurant and check your map listing for completeness and accuracy",
  },
  {
    day: 2,
    action:
      "Photograph your top 5 dishes in natural light: no flash, near a window",
  },
  {
    day: 3,
    action:
      "Post a behind-the-scenes kitchen prep video on Instagram and TikTok",
  },
  {
    day: 4,
    action:
      "Reply to your last 5 reviews: positive and negative: within 24 hours",
  },
  {
    day: 5,
    action:
      "Create a Chef's Special for Tuesday this week and price it with strong margin",
  },
  {
    day: 6,
    action:
      "Identify your #1 most profitable menu item and feature it prominently on every table",
  },
  {
    day: 7,
    action:
      "Tell your restaurant's origin story on social media: one post, raw and real",
  },
];

const ACCENT = "#6366F1";

export default function NYCRestaurantGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quickstart" | "full">(
    "quickstart",
  );

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

  // Scroll-tracking: highlight active section tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let closest: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Target: section top just above 150px from viewport top
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

  return (
    <Layout>
      <ProgressBar />
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="restaurant-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/generated/nyc-restaurant-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <UtensilsCrossed size={12} />
              NYC Restaurant Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              NYC Restaurant Guide:{" "}
              <span className="text-gradient-vibrant">
                How to Build, Run &amp; Grow
              </span>{" "}
              a Legendary Restaurant in 2026
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a clear, step-by-step plan to bring more diners through
              your door, keep them coming back, and protect your profit margin
              every week. That means steadier revenue, fewer empty seats, and
              more time focused on the food and service your neighborhood loves.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                {
                  label: "Lawrence Longo, Prince Street Pizza",
                  id: "why-succeed",
                },
                { label: "Jon Taffer's Rescue Principles", id: "taffer" },
                { label: "12 Rotating Specials System", id: "specials" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`restaurant-guide.hero.tag.item.${i + 1}`}
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
        data-ocid="restaurant-guide.section_nav"
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
                data-ocid={`restaurant-guide.section_nav.item.${i + 1}`}
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
              <RestaurantWhySucceedSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What makes a NYC restaurant survive long-term?",
                  a: "Consistency above all. Great restaurants are not great because of one amazing meal: they are great because the 100th visit is as good as the first. Consistency is the product customers actually pay for.",
                },
                {
                  q: "How important is neighborhood identity for a restaurant?",
                  a: "Critical. Restaurants that become part of the neighborhood story: celebrating local events, hiring locally, sourcing locally: create emotional bonds that national chains can never buy. Root yourself in your block.",
                },
              ]}
            />
            <div id="taffer">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer's Bar Rescue framework applies to
                    your restaurant: from diagnosing failures to executing a
                    rapid turnaround plan.
                  </p>
                }
              >
                <RestaurantTafferSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the first thing to fix in a struggling restaurant?",
                  a: "The greeting. Taffer's data shows the first 60 seconds determine whether a customer stays, orders enthusiastically, or leaves with a mediocre experience. Train your host as if the whole restaurant depends on it: it does.",
                },
                {
                  q: "Our kitchen ticket times are too slow. Where do I start?",
                  a: "Map every step from order receipt to plate delivery. Taffer's method: identify the single longest step, cut it in half, then move to the next longest. Do not fix everything at once: fix the bottleneck.",
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
                <RestaurantBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I tell my restaurant's story without sounding generic?",
                  a: "Start with the specific moment you decided to open. Not 'I love food': everyone loves food. What specific experience, person, or memory made you believe the world needed your particular restaurant? That is your story.",
                },
                {
                  q: "Should my restaurant have a brand voice on social media?",
                  a: "Absolutely. Your voice should match your dining experience. If you are a casual neighborhood joint, be warm and playful. If you are a fine dining establishment, be refined and aspirational. Inconsistency creates distrust.",
                },
              ]}
            />
            <div id="attracting-women">
              <RestaurantAttractingWomenSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I make women diners feel safe without singling them out?",
                  a: "Build safety into the entire dining experience rather than treating it as a special accommodation. A code word program, discreet staff check-ins, and clear posted policies create a safer environment for everyone. Women notice immediately when it is there: and equally when it is absent.",
                },
                {
                  q: "What is the single highest-ROI move to attract women group bookings?",
                  a: "A monthly women's networking dinner with a prix fixe menu and a hosted intro. It fills 15-20 seats at a premium, guarantees revenue in advance, and converts attendees into regular solo and couple diners. It also creates content, community, and word-of-mouth that no ad budget can match.",
                },
              ]}
            />
            <div id="specials">
              <RestaurantSpecials />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I price rotating specials to maintain margin?",
                  a: "Start with your target food cost (28-33%), price backward. If a special costs $8 to make and your target is 30% food cost, the price is $26.67: round up to $28. Never price specials below your margin floor.",
                },
                {
                  q: "Should rotating specials replace regular menu items?",
                  a: "No: they supplement them. Specials create urgency and give regulars a new reason to visit. Your core menu creates predictability and trust. You need both.",
                },
              ]}
            />
            <div id="google-maps">
              <RestaurantGoogleMapsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I update my Google Maps listing?",
                  a: "At minimum weekly. Post a photo of each week's special: it counts as a listing update and shows potential customers what they would be ordering. Google rewards the activity, and so do customers browsing your profile.",
                },
                {
                  q: "A negative review is dominating my first-page results. What now?",
                  a: "Respond professionally and invite them to return. Then focus on generating new positive reviews: 10 four-stars dilutes one two-star significantly. Ask happy regulars directly, with a QR code linking to your review page.",
                },
              ]}
            />
            <div id="social-media">
              <RestaurantSocialMediaSection />
              <RecommendedToolsBox />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What social media content works best for NYC restaurants?",
                  a: "Process content beats product content. A video of your chef slicing salmon performs better than a photo of the plated dish. People want to see the craft, the kitchen, the story. Show the work.",
                },
                {
                  q: "How do I get food media coverage without a PR budget?",
                  a: "Invite micro-influencers with 2,000-10,000 engaged local followers for a complimentary experience. One honest post from a trusted local voice drives more bookings than a press release. Authenticity is the PR budget.",
                },
              ]}
            />
            <div id="financial">
              <RestaurantFinancialSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is a healthy food cost percentage for a NYC restaurant?",
                  a: "28-33% for full-service restaurants. Fast casual can target 25-30%. Higher-end fine dining can go to 35% if labor and overhead are lower. Track weekly: two bad weeks in a row require immediate menu repricing.",
                },
                {
                  q: "When should I add a service charge vs. traditional tipping?",
                  a: "Service charges improve back-of-house retention significantly. If your kitchen turnover is high, a 20% service charge shared between front and back of house can improve team stability: worth the customer conversation.",
                },
              ]}
            />
            <div id="checklist">
              <RestaurantRescueChecklist />
            </div>
          </>
        )}

        {/* Q&A */}
        <section id="qa" data-ocid="restaurant-guide.qa_section">
          <div className="text-center mb-10">
            <span className="badge-primary-vibrant mb-3 inline-block">
              Questions &amp; Answers
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Restaurant Owner FAQs
            </h2>
            <p className="text-[#71717A] mt-2 max-w-xl mx-auto">
              Have a question specific to restaurants? Find quick answers below.
            </p>
          </div>
          <RestaurantQA />
        </section>

        {/* Author Attribution */}
        <GuideAuthorFooter />

        {/* Share & Back CTA */}
        <section
          className="rounded-2xl border border-border bg-muted/30 px-8 py-8 text-center"
          data-ocid="restaurant-guide.share_section"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="restaurant-guide.share_button"
              onClick={() => {
                const shareData = {
                  title: "NYC Restaurant Playbook 2026",
                  text: "Build and grow a legendary NYC restaurant with this comprehensive guide.",
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
              data-ocid="restaurant-guide.back_to_guides_link"
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
          data-ocid="restaurant-guide.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Ready to Build Your Legendary Restaurant?
          </h2>
          <p className="text-[#71717A] text-lg mb-6 max-w-2xl mx-auto">
            Use AISmallBiz™ to get a personalized action plan tailored to your
            specific restaurant, neighborhood, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#6366F1] hover:bg-[#6366F1] text-white"
              data-ocid="restaurant-guide.get_plan_button"
            >
              <Link to="/onboarding" onClick={() => window.scrollTo(0, 0)}>
                Get My Personalized Plan
                <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />
    </Layout>
  );
}
