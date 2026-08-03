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
import { CleaningServiceAttractingWomenSection } from "@/components/cleaningservice/CleaningServiceAttractingWomenSection";
import { CleaningServiceBarRescueSection } from "@/components/cleaningservice/CleaningServiceBarRescueSection";
import { CleaningServiceBrandingSection } from "@/components/cleaningservice/CleaningServiceBrandingSection";
import { CleaningServiceChecklistSection } from "@/components/cleaningservice/CleaningServiceChecklistSection";
import { CleaningServiceEventsSection } from "@/components/cleaningservice/CleaningServiceEventsSection";
import { CleaningServiceImmediateWinsSection } from "@/components/cleaningservice/CleaningServiceImmediateWinsSection";
import { CleaningServiceMarketingSection } from "@/components/cleaningservice/CleaningServiceMarketingSection";
import { CleaningServicePackagesSection } from "@/components/cleaningservice/CleaningServicePackagesSection";
import { CleaningServiceQASection } from "@/components/cleaningservice/CleaningServiceQASection";
import { CleaningServiceSocialMediaSection } from "@/components/cleaningservice/CleaningServiceSocialMediaSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Calendar,
  CheckSquare,
  ChevronRight,
  HelpCircle,
  Megaphone,
  Package,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "quickstart", label: "7-Day Quick Start", icon: Zap },
  { id: "services", label: "Services & Packages", icon: Package },
  { id: "bar-rescue", label: "Bar Rescue", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Star },
  { id: "attracting-women", label: "Attracting Women", icon: Users },
  { id: "events", label: "Events & Community", icon: Calendar },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "social-media", label: "Social Media", icon: BarChart3 },
  { id: "checklist", label: "Rescue Checklist", icon: CheckSquare },
  { id: "qa", label: "Q&A", icon: HelpCircle },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Set up or fully optimize Google Business Profile, Yelp, and NextDoor: add photos of your team in uniform and 3 completed jobs",
  },
  {
    day: 2,
    action:
      "Confirm general liability insurance ($1M), bonding, and workers' comp are active: display 'Licensed, Bonded & Insured' on every profile",
  },
  {
    day: 3,
    action:
      "Install an online booking system (Jobber, Housecall Pro, or Square Appointments) and add the booking link to every profile",
  },
  {
    day: 4,
    action:
      "Create 3 clear service tiers (Standard, Deep Clean, Move-In/Out) with transparent pricing and an eco-friendly upgrade option",
  },
  {
    day: 5,
    action:
      "Launch a Give $20 / Get $20 referral program: print cards and leave one at every job this week",
  },
  {
    day: 6,
    action:
      "Post a neighborhood introduction on NextDoor and your primary Facebook community group with a first-time client offer",
  },
  {
    day: 7,
    action:
      "Text your 3 most satisfied clients a direct link to your Google review page: respond to every review within 24 hours",
  },
];

const ACCENT = "#6366F1";

export default function CleaningServiceGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"quickstart" | "full">(
    "quickstart",
  );

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
      if (bestSection !== null) {
        setActiveSection(bestSection);
      }
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
        data-ocid="cleaning-service-guide.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Shield size={12} />
              Cleaning Service Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The Cleaning Service Business Guide:{" "}
              <span className="text-gradient-vibrant">
                Trust, Systems &amp; Scalable Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a complete 7-day action plan that fills your booking
              calendar with paying residential clients, plus service packages,
              referral systems, and Appreciated Branding tactics that turn one
              clean into recurring monthly revenue. Every step is designed to
              protect your time, win repeat customers, and grow your cleaning
              business without paid ads.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "7-Day Immediate Wins Plan", id: "quickstart" },
                { label: "Before/After Viral Marketing", id: "marketing" },
                {
                  label: "Women-Owned Business Strategy",
                  id: "attracting-women",
                },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`cleaning-service-guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-1">
              <Button
                asChild
                className="rounded-lg px-6"
                style={{ background: ACCENT, color: "#fff" }}
                data-ocid="cleaning-service-guide.hero.cta_button"
              >
                <Link to="/cleaning-service">
                  Start 7-Day Plan
                  <ChevronRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg px-6"
                onClick={() => scrollTo("checklist")}
                data-ocid="cleaning-service-guide.hero.checklist_button"
              >
                View Rescue Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="cleaning-service-guide.section_nav"
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
                data-ocid={`cleaning-service-guide.section_nav.item.${i + 1}`}
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
        <GuidePrerequisiteBanner />

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
            {/* Section 1: Immediate Wins */}
            <CleaningServiceImmediateWinsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Day 1 action drives the most new bookings for a cleaning service?",
                  a: "Google Business Profile optimization. 70-80% of new residential cleaning clients discover services through Google Maps: and a complete profile with photos of your team, uniform, and completed jobs outranks incomplete competitors immediately. If you do nothing else on Day 1, complete every section of your Google Business Profile and upload 10+ photos.",
                },
                {
                  q: "How quickly will I see results from the 7-day plan?",
                  a: "NextDoor and Google Business Profile changes produce results within 1-2 weeks. The referral program compounds over months: most cleaning businesses report that after 90 days, 40-60% of new bookings come from referrals once the card is consistently distributed. The online booking system produces the fastest behavioral change: clients who can book at 10pm without a phone call convert immediately.",
                },
              ]}
            />

            {/* Section 2: Services & Packages */}
            <CleaningServicePackagesSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Should I offer residential, commercial, or both when starting out?",
                  a: "Start residential: lower barrier to entry, faster bookings, and each satisfied client becomes a referral source. Once you have 10-15 recurring residential clients providing stable baseline revenue, pursue commercial accounts. The commercial deep clean and office cleaning are your highest-margin services, but they require insurance, reliability, and references that are easier to build on a residential foundation first.",
                },
                {
                  q: "Is the eco-friendly upgrade worth the extra product cost?",
                  a: "Yes: for two reasons. First, non-toxic product clients have measurably higher retention and refer at 4x the rate. Second, you can charge $25-40 more per visit for the upgrade. Over a year of recurring visits, that is $600-800 in additional revenue per eco-upgrade client: well above the $5-8 additional product cost per job. Position it as an upgrade option rather than a base offering, and let clients self-select.",
                },
              ]}
            />

            {/* Section 3: Bar Rescue */}
            <div id="bar-rescue">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer&rsquo;s Bar Rescue framework applies
                    to your cleaning business: from conducting a mystery client
                    stress test to building replicable systems that scale.
                  </p>
                }
              >
                <CleaningServiceBarRescueSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle matters most for a solo cleaning operator?",
                  a: "Systems first. Taffer always fixes the operating system before the brand. For a solo operator, your cleaning checklist IS your system: it is what makes your work replicable when you eventually hire, and it is what clients are actually paying for (reliable consistency, not a one-time great clean). Build your 47-point checklist before your next job and follow it without exception.",
                },
                {
                  q: "What would Taffer say about a cleaning service with no online reviews?",
                  a: "'You are invisible.' Taffer's bar rescues always include fixing the digital presence: because a bar with no Google reviews does not exist to new customers. For cleaning services: zero reviews means zero bookings from new clients who find you online. The Day 7 action: texting your best clients a direct review link: is Taffer-level intervention. Do it this week.",
                },
              ]}
            />

            {/* Section 4: Branding */}
            <div id="branding">
              <PremiumGate
                sectionTitle="Appreciated Branding Deep-Dive"
                teaserContent={
                  <p>
                    Reid Holmes&rsquo; Appreciated Branding methodology builds
                    lasting client loyalty through genuine emotional connection
                    : turning satisfied clients into vocal advocates.
                  </p>
                }
              >
                <CleaningServiceBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How does Appreciated Branding apply to a cleaning service specifically?",
                  a: "Cleaning is one of the most intimate services: you enter someone's home, touch their belongings, and work in their private space. The companies that dominate local markets are the ones that make clients feel known, valued, and safe. A personalized thank-you note, remembering that a client has a cat who hides under the bed, or texting a photo of a sparkling kitchen: these are all Appreciated Branding in action. They cost nothing and are worth more than any ad.",
                },
                {
                  q: "How do I scale Appreciated Branding as I get busier?",
                  a: "Systematize the gestures. Use your booking software's notes field to record client preferences and personal details. Set automated anniversary reminders at 6 and 12 months. Pre-print thank-you cards. The gestures must feel personal: but the system behind them is industrial. Patagonia does not write each sustainability post by hand; they build systems that produce authentic communication at scale. You do the same.",
                },
              ]}
            />

            {/* Section 5: Attracting Women */}
            <CleaningServiceAttractingWomenSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I market a cleaning business specifically to women?",
                  a: "Three things that move the needle fastest: (1) Lead every marketing message with background check policy and insurance status: safety and trust are the purchase decision for women hiring a home cleaning service. (2) Post before/after transformation content on Instagram and TikTok: cleaning content is among the most-shared categories among women. (3) Distribute referral cards at every job: women's social networks are the #1 referral channel for home services, and a beautiful Give $20/Get $20 card travels through those networks on its own.",
                },
                {
                  q: "What is the women-only staff option and should I offer it?",
                  a: "Some residential clients: particularly women living alone or with children: specifically request female-only cleaning staff. Offering this as a premium option ($10-20 more per visit) addresses a real safety concern and captures a segment that most male-owned competitors cannot serve. If you are a women-owned business, this is a natural extension of your existing positioning. If you have mixed staff, offering a 'female staff only' scheduling option adds a meaningful differentiator.",
                },
              ]}
            />

            {/* Section 6: Events */}
            <CleaningServiceEventsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the single highest-ROI community event for a cleaning business?",
                  a: "The charity clean. One pro-bono job for a women's shelter, community center, or school generates social media content that outperforms any paid promotional post. The organization shares it with their audience. You share it with yours. The goodwill is permanent: it signals community values to every potential client who sees it. Budget 1 charity clean per quarter and document every one.",
                },
                {
                  q: "How do I approach real estate agents for referral partnerships?",
                  a: "Personal introduction, not email. Show up at a local real estate office with a box of pastries from a local bakery and a one-page service sheet with your insurance certificate attached. Ask to leave 5 business cards at the front desk. Follow up by phone 48 hours later: not email. Agents recommend services to clients constantly and remember people who showed up in person. One active realtor relationship generates more move-in/out jobs than 3 months of Google ads.",
                },
              ]}
            />

            {/* Section 7: Marketing */}
            <CleaningServiceMarketingSection />

            {/* Section 7b: Social Media */}
            <div id="social-media">
              <CleaningServiceSocialMediaSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the fastest marketing win for a cleaning business in 2026?",
                  a: "Post your first before/after reel on TikTok and Instagram this week. Cleaning transformations are TikTok's highest-performing home service content category. A single compelling oven-to-sparkling or bathroom transformation reel with trending audio can reach 5,000-50,000 local views with zero ad spend. The business accounts that post this consistently are fully booked within 60-90 days without spending anything on paid advertising.",
                },
                {
                  q: "How much should I spend on marketing each month?",
                  a: "For the first 6 months: $0-150/month. NextDoor posts are free. Google Business Profile is free. Before/after content costs nothing but time. Your referral program is self-funding. When you are ready to spend: $50/month on NextDoor neighborhood ads and $100-200/month on Google Local Services Ads (pay per lead) is a complete paid marketing stack that most cleaning businesses outgrow before they need to increase it.",
                },
              ]}
            />

            {/* Section 8: Checklist */}
            <CleaningServiceChecklistSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What are the absolute must-haves before taking my first paying client?",
                  a: "Three non-negotiables: (1) General liability insurance: without this, one broken item in a client's home puts your personal assets at risk. (2) A written service agreement: even a one-page document protects both parties. (3) An online booking or scheduling system: this makes you look professional and prevents double-bookings. Everything else can be built as you go, but these three must be in place before your first paid job.",
                },
                {
                  q: "Do I need to form an LLC before starting?",
                  a: "Not strictly required for the first booking, but strongly recommended before you are operating regularly. A sole proprietorship (no filing required) is legally sufficient, but your personal assets are exposed to any business liability claim. An LLC costs $50-$500 to form depending on your state and provides meaningful liability protection. File online at your state's Secretary of State website: you do not need a lawyer for a basic single-member LLC.",
                },
              ]}
            />

            {/* Section 9: Q&A */}
            <CleaningServiceQASection />

            <RecommendedToolsBox />
            <GuideAuthorFooter />

            <div className="border-t border-border pt-10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Ready to fill your booking calendar this week?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Start with Day 1 of the 7-Day Quick Start plan and have your
                  Google Business Profile fully optimized by tonight.
                </p>
                <Button
                  asChild
                  className="rounded-lg px-6"
                  style={{ background: ACCENT, color: "#fff" }}
                  data-ocid="cleaning-service-guide.next_step_cta_button"
                >
                  <Link to="/cleaning-service">
                    Start Your 7-Day Plan
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
