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
import { RetailAttractingWomenSection } from "@/components/retail/RetailAttractingWomenSection";
import { RetailBrandingSection } from "@/components/retail/RetailBrandingSection";
import { RetailFinancialSection } from "@/components/retail/RetailFinancialSection";
import { RetailGoogleMapsSection } from "@/components/retail/RetailGoogleMapsSection";
import { RetailPromotions } from "@/components/retail/RetailPromotions";
import { RetailQA } from "@/components/retail/RetailQA";
import { RetailRescueChecklist } from "@/components/retail/RetailRescueChecklist";
import { RetailSocialMediaSection } from "@/components/retail/RetailSocialMediaSection";
import { RetailTafferSection } from "@/components/retail/RetailTafferSection";
import { RetailWhySucceedSection } from "@/components/retail/RetailWhySucceedSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  MapPin,
  Megaphone,
  Share2,
  ShoppingBag,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "why-succeed", label: "Why Top Retailers Succeed", icon: TrendingUp },
  { id: "taffer", label: "Bar Rescue Principles", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  {
    id: "attracting-women",
    label: "Attracting Women Shoppers",
    icon: ShoppingBag,
  },
  { id: "promotions", label: "Rotating Promotions", icon: Star },
  { id: "google-maps", label: "Google Maps & SEO", icon: MapPin },
  { id: "social-media", label: "Social Media", icon: TrendingUp },
  { id: "financial", label: "Financial Success", icon: DollarSign },
  { id: "checklist", label: "Retail Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: Users },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Photograph your top 5 products in natural light: near a window, no flash",
  },
  {
    day: 2,
    action:
      "Update your Google Maps listing with fresh product photos and any new hours",
  },
  {
    day: 3,
    action:
      "Write a 1-sentence brand value statement: what you stand for, who you serve",
  },
  {
    day: 4,
    action:
      "Post a 'behind the scenes' story showing how you curate and select products",
  },
  {
    day: 5,
    action:
      "Identify your top 3 customer personas: name them, describe their lives and needs",
  },
  {
    day: 6,
    action:
      "Plan this month's VIP Saturday event: theme, exclusive offers, email invite list",
  },
  {
    day: 7,
    action:
      "Create your Instagram content theme for the next 4 weeks: 4 themes, 1 per week",
  },
];

const ACCENT = "#6366F1";

export default function NYCRetailGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quickstart" | "full">(
    "quickstart",
  );

  useEffect(() => {
    const handleScroll = () => {
      let closestId: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      const OFFSET = 150;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - OFFSET);
        if (top <= OFFSET + 80 && dist < closestDist) {
          closestDist = dist;
          closestId = section.id;
        }
      }
      if (closestId !== null) setActiveSection(closestId);
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
        data-ocid="retail-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url('/assets/generated/nyc-retail-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <ShoppingBag size={12} />
              NYC Retail Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The NYC Retail Playbook: Build, Run &amp; Grow a{" "}
              <span className="text-gradient-vibrant">Legendary Store</span> in
              2026
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a step-by-step plan to bring more shoppers into your store
              and turn them into loyal regulars, so your revenue grows without
              you working longer hours. These strategies come from NYC&apos;s
              top-performing boutiques, Jon Taffer&apos;s accountability
              principles, and Appreciated Branding, all backed by the data
              behind what makes physical retail win in 2026.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "SoHo Boutique: 210% Growth", id: "why-succeed" },
                { label: "Nike SoHo Reopening 2026", id: "promotions" },
                { label: "12 Rotating Promotions", id: "promotions" },
              ].map((pill, i) => (
                <a
                  key={pill.label}
                  href={`#${pill.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(pill.id);
                  }}
                  data-ocid={`retail-guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70" />
                  {pill.label}
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
        data-ocid="retail-guide.section_nav"
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
                data-ocid={`retail-guide.section_nav.item.${i + 1}`}
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
              <RetailWhySucceedSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Why is physical retail growing again in NYC?",
                  a: "Experience. Amazon sells the product: but it cannot sell the feeling of discovering something beautiful in a well-curated shop. Retailers who lean into sensory experience, human connection, and curation are winning against e-commerce.",
                },
                {
                  q: "How important is foot traffic vs. online presence for a boutique?",
                  a: "Both are critical and they feed each other. Online presence (Google Maps, Instagram) drives people to the store. In-store experience drives social shares that grow online presence. The loop is the strategy.",
                },
              ]}
            />
            <div id="taffer">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer's Bar Rescue framework applies to
                    your retail store: from diagnosing failures to executing a
                    rapid turnaround plan.
                  </p>
                }
              >
                <RetailTafferSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What retail operations standard should I set first?",
                  a: "The greeting within 10 seconds. Taffer's retail data shows customers who are not acknowledged within 10 seconds of entering are 40% more likely to leave without buying. Train this as a non-negotiable.",
                },
                {
                  q: "How do I hold part-time staff accountable to service standards?",
                  a: "Mystery shop your own store once per month. Record what you find. Review with the team in a non-punitive way: 'Here is what great looks like, here is what happened, here is how we improve.'",
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
                <RetailBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I brand a store that carries other people's products?",
                  a: "Brand the curation. The story is not the products: it is your taste, your judgment, your selection process. 'We travel to 12 countries annually to curate only what we would keep in our own homes' is a powerful brand story that has nothing to do with the products themselves.",
                },
                {
                  q: "Should my retail brand be personal (my name) or concept-driven?",
                  a: "Concept-driven brands scale better and sell for more. 'The Edit Room' is acquirable. 'Jennifer's Boutique' is personal. Build for the business you want to have in 10 years, not the one you have today.",
                },
              ]}
            />
            <div id="attracting-women">
              <RetailAttractingWomenSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Why do women specifically choose one retailer over another?",
                  a: "Safety, inclusivity, and feeling seen. A woman who feels welcomed, represented in your sizing and imagery, and respected by your staff will drive past three competitors to come back to you. The physical experience you create is your unfair advantage over every online store.",
                },
                {
                  q: "How do I start attracting more female customers without overhauling my whole store?",
                  a: "Start with one immediate signal: move extended sizes to the front, post a safe space policy at the door, or reach out personally to your top 15 female customers about a private shopping night. One change done this week beats a full plan done next quarter.",
                },
              ]}
            />
            <div id="promotions">
              <RetailPromotions />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I run a VIP Saturday without it feeling forced?",
                  a: "Invite-only is the key. Text your top 20 customers personally. Not an email blast: a text. 'I am setting aside some exclusive new arrivals for VIP clients this Saturday before we open to the public. Interested?' 95% say yes.",
                },
                {
                  q: "What promotions should I never run?",
                  a: "Sitewide percentage discounts. They train customers to wait for sales, devalue your brand, and attract bargain hunters who never return at full price. Promote experiences and exclusivity instead: never broad discounts.",
                },
              ]}
            />
            <div id="google-maps">
              <RetailGoogleMapsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I update my Google Maps listing?",
                  a: "Weekly. Add a new product photo every Monday: it signals active inventory and Google rewards the update with a ranking boost. Link your Instagram to the profile and turn on messaging.",
                },
                {
                  q: "A competitor has more Google reviews than us. How do we catch up?",
                  a: "Run a single 2-week sprint: have every staff member personally ask every customer who expresses happiness to leave a review. Put the QR code in every bag and at the register. Most stores close the gap within 30 days.",
                },
              ]}
            />
            <div id="social-media">
              <RetailSocialMediaSection />
              <RecommendedToolsBox />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What Instagram content works best for retail stores?",
                  a: "'New arrival' unboxing videos, behind-the-scenes buying trips, styled flat lays with natural light, and customer styling moments (with permission). Authenticity over polish: real and relatable beats perfect and sterile.",
                },
                {
                  q: "Should I invest in Instagram ads or organic growth?",
                  a: "Organic first, always. Master what content your audience responds to organically, then put $15-25/day behind your best-performing posts to hyper-local ZIP codes. Ads amplify what works: they cannot fix what does not.",
                },
              ]}
            />
            <div id="financial">
              <RetailFinancialSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is a healthy gross margin for a NYC retail boutique?",
                  a: "55-65% gross margin is the target for a profitable NYC boutique. Below 50% and you are likely to struggle with rent and labor. Track margin by product category: your accessories probably subsidize your core apparel.",
                },
                {
                  q: "When should I mark down slow-moving inventory?",
                  a: "After 90 days in-store at full price. Markdown to 30% off at day 91, 50% off at day 120. Dead inventory kills cash flow. Better to recover 50 cents on the dollar and redeploy that capital into product that sells.",
                },
              ]}
            />
            <div id="checklist">
              <RetailRescueChecklist />
            </div>
          </>
        )}

        {/* Q&A */}
        <section id="qa" data-ocid="retail-guide.qa_section">
          <div className="text-center mb-10">
            <span className="badge-primary-vibrant mb-3 inline-block">
              Questions &amp; Answers
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Retail Owner FAQs
            </h2>
            <p className="text-[#71717A] mt-2 max-w-xl mx-auto">
              Have a question specific to retail? Find quick answers below.
            </p>
          </div>
          <RetailQA />
        </section>

        {/* Author Attribution */}
        <GuideAuthorFooter />

        {/* Share & Back CTA */}
        <section
          className="rounded-2xl border border-border bg-muted/30 px-8 py-8 text-center"
          data-ocid="retail-guide.share_section"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="retail-guide.share_button"
              onClick={() => {
                const shareData = {
                  title: "NYC Retail Playbook 2026",
                  text: "Build and grow a legendary NYC retail store with this comprehensive guide.",
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
              data-ocid="retail-guide.back_to_guides_link"
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
          data-ocid="retail-guide.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Ready to Build Your Legendary Store?
          </h2>
          <p className="text-[#71717A] text-lg mb-6 max-w-2xl mx-auto">
            Use AISmallBiz™ to get a personalized action plan tailored to your
            specific store, neighborhood, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#6366F1] hover:bg-[#6366F1] text-white"
              data-ocid="retail-guide.get_plan_button"
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
