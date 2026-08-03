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
import { BoutiqueAttractingWomenSection } from "@/components/boutique/BoutiqueAttractingWomenSection";
import { BoutiqueBarRescueSection } from "@/components/boutique/BoutiqueBarRescueSection";
import { BoutiqueBrandingSection } from "@/components/boutique/BoutiqueBrandingSection";
import { BoutiqueChecklistSection } from "@/components/boutique/BoutiqueChecklistSection";
import { BoutiqueEventsSection } from "@/components/boutique/BoutiqueEventsSection";
import { BoutiqueImmediateWinsSection } from "@/components/boutique/BoutiqueImmediateWinsSection";
import { BoutiqueMarketingSection } from "@/components/boutique/BoutiqueMarketingSection";
import { BoutiqueMerchandiseSection } from "@/components/boutique/BoutiqueMerchandiseSection";
import { BoutiqueQASection } from "@/components/boutique/BoutiqueQASection";
import { BoutiqueSocialMediaSection } from "@/components/boutique/BoutiqueSocialMediaSection";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  Heart,
  HelpCircle,
  Megaphone,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "quickstart", label: "7-Day Quick Start", icon: Zap },
  { id: "menu", label: "Merchandise & Trends", icon: ShoppingBag },
  { id: "bar-rescue", label: "Bar Rescue", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Star },
  { id: "attracting-women", label: "Attracting Women", icon: Heart },
  { id: "events", label: "Events & Community", icon: Calendar },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "social-media", label: "Social Media", icon: BarChart3 },
  { id: "checklist", label: "Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: MessageCircle },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Set up Instagram and TikTok Shop accounts with shopping features enabled so every post links directly to a purchase",
  },
  {
    day: 2,
    action:
      "Define your niche and ideal customer in writing: size-inclusive, sustainable, quiet luxury, or local designer focus",
  },
  {
    day: 3,
    action:
      "Source 3 hero items to photograph and post today with natural lighting, multiple angles, and location tags",
  },
  {
    day: 4,
    action:
      "Reach out to 5 local micro-influencers (2K to 20K followers) with a personal note and a gifted item offer",
  },
  {
    day: 5,
    action:
      "Launch a Grand Opening flash sale or giveaway with a 48-hour countdown to drive urgency and new followers",
  },
  {
    day: 6,
    action:
      "Join 3 to 5 local women's business networks and introduce yourself with an exclusive member discount offer",
  },
  {
    day: 7,
    action:
      "Set up your Google Business Profile with 10+ photos, keyword-rich description, and request your first reviews",
  },
];

const ACCENT = "#6366F1";

export default function BoutiqueGuide() {
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
        data-ocid="boutique-guide.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Sparkles size={12} />
              Boutique Clothing Store Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The Boutique Clothing Store Guide:{" "}
              <span className="text-gradient-vibrant">
                Trends, Community &amp; Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a complete 7-day action plan that fills your boutique with
              paying local customers, plus monthly trend spotlights, referral
              systems, and Appreciated Branding tactics that turn one visit into
              recurring monthly revenue. Every step is designed to protect your
              time, win repeat shoppers, and grow your boutique without paid
              ads.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "7-Day Immediate Wins Plan", id: "quickstart" },
                { label: "12 Monthly Trend Spotlights", id: "menu" },
                {
                  label: "Women-First Strategy Framework",
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
                  data-ocid={`boutique-guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Button
                className="rounded-lg font-semibold px-6"
                style={{ background: ACCENT }}
                data-ocid="boutique-guide.hero_cta_button"
                onClick={() => scrollTo("quickstart")}
                type="button"
              >
                Start the 7-Day Plan
                <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button
                variant="outline"
                className="rounded-lg font-semibold px-6"
                onClick={() => scrollTo("checklist")}
                data-ocid="boutique-guide.hero_checklist_button"
              >
                Jump to Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="boutique-guide.section_nav"
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
                data-ocid={`boutique-guide.section_nav.item.${i + 1}`}
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
            <BoutiqueImmediateWinsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Day 1 action has the biggest impact for a new boutique?",
                  a: "Setting up Instagram Shopping and TikTok Shop simultaneously. Most boutiques do one or the other and miss half the discovery surface. The combination means your content reaches TikTok's algorithmic discovery engine and Instagram's search-based shopping intent at the same time. A single viral outfit video can drive 200 to 500 profile visits in 24 hours. Without shopping enabled, most of those visitors leave without converting.",
                },
                {
                  q: "How quickly will I see results from the micro-influencer outreach on Day 4?",
                  a: "First responses typically come within 48 to 72 hours. Most micro-influencers with under 10K followers post gifted content within 1 to 2 weeks of receiving the item. The result you should track is not just followers, but the quality of comments on the influencer's post. Are local women asking where the piece is from? Are they following your account after? Those signals tell you whether the partnership is worth repeating.",
                },
              ]}
            />

            {/* Section 2: Merchandise */}
            <BoutiqueMerchandiseSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I decide what the monthly featured trend item should be?",
                  a: "Check TikTok's trending fashion hashtags and Pinterest Predicts trend reports in the last 10 days of each month. Whatever is gaining momentum in the wider fashion world can be your next featured item. The goal is to be first in your neighborhood, not first in the world. The Cherry Cola trend, for example, has been tracked by WGSN since Q4 2025. A boutique that stocks it now captures the organic local search traffic before any competitor does.",
                },
                {
                  q: "Is the Rental Rack worth the operational complexity?",
                  a: "Yes, with conditions. Keep the rental selection to 3 to 5 pieces maximum at $35 to $50 per rental. The primary purpose is not revenue from rentals, but foot traffic. Every rental is an appointment that gets a woman into your store where she sees your full collection. Track how many rental customers make an additional purchase. Most boutiques report 60 to 70% of rental customers also buy something during the visit.",
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
                    to your boutique, from the fitting room stress test to
                    visual merchandising standards that stop foot traffic.
                  </p>
                }
              >
                <BoutiqueBarRescueSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle should I implement first for a boutique?",
                  a: "The mystery shopper audit. Walk into your own store as if you have never been there. Time from the door to the first staff acknowledgment. Look at every rack from 10 feet away. Sit in a fitting room for 5 minutes. Taffer's fundamental insight is that owners stop seeing their own space because familiarity erases the fresh-eyes experience. What a first-time visitor sees is dramatically different from what the owner sees. The audit reveals it.",
                },
                {
                  q: "What would Taffer say about a boutique with beautiful merchandise but low conversion?",
                  a: "The diagnosis is almost always the fitting room or the staff approach. Beautiful merchandise at street level gets people through the door. The fitting room experience and the staff interaction after that determines whether they buy. If conversion is under 20%, do the fitting room audit first. Warm lighting, full-length mirrors, and a staff member who checks in once (not three times) are the three highest-leverage conversion changes a boutique can make.",
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
                    lasting customer loyalty through genuine personal connection
                    and community identity that turns shoppers into advocates.
                  </p>
                }
              >
                <BoutiqueBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How does Appreciated Branding apply specifically to a boutique?",
                  a: "A boutique has a personalization advantage that no e-commerce competitor can match. You can know your customer's name, her size, her upcoming occasion, and her color preferences. Appreciated Branding formalizes that: it turns the natural advantage of a small business into a deliberate system. When a customer gets a text saying the cherry cola dress just came in and it would look incredible on her, that is Appreciated Branding in action. Amazon will never send that text.",
                },
                {
                  q: "Should I start the Style Advocate program from day one or wait until I have established customers?",
                  a: "Wait for at least 90 days and 50 to 100 returning customers. The advocate program requires a genuine track record of loyalty. If you launch it on day 30, you have not yet identified who your real enthusiasts are. In months 3 to 4, the pattern becomes clear: a handful of women have returned 3 or more times, posted about your store unprompted, and brought friends. Those are your founding ambassadors. Starting the program with 5 to 8 deeply loyal customers is far more powerful than starting with 15 occasional visitors.",
                },
              ]}
            />

            {/* Section 5: Attracting Women */}
            <BoutiqueAttractingWomenSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the single fastest change to make a boutique more attractive to women?",
                  a: "The fitting room lighting. This is the change with the fastest payback and the most direct impact on how women feel during the purchase decision moment. Replace any fluorescent or cool-white bulbs with warm LED (2700K to 3000K color temperature). The cost is under $100. The impact on conversion is immediate and documented. Women in focus groups consistently rate warm fitting room lighting as the primary factor in whether they feel good enough about an outfit to purchase it.",
                },
                {
                  q: "How do I handle the size inclusivity expansion without overinvesting in inventory?",
                  a: "Start with your 3 best-selling styles and expand only those to a full size run (XS to 4X). Do not expand all styles at once. Track sell-through by size for 60 days. The data will show you which sizes in which styles turn fastest. Use that data to guide the next buying decision. Extended sizes (3X and 4X) often have lower competition from other boutiques and higher loyalty from customers who find them, making the margin per unit effectively higher once you know which pieces to carry.",
                },
              ]}
            />

            {/* Section 6: Events */}
            <BoutiqueEventsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which event format drives the most direct revenue?",
                  a: "The Girls Night Out private shopping event consistently generates the highest per-visit spend of any boutique event format. The combination of exclusivity (invited guests only), a curated environment (new arrivals they have not seen yet), and a time-limited incentive (10% evening-only discount) creates the ideal purchase psychology. Boutiques report average purchase values 2.5 to 3x higher at these events compared to standard walk-in traffic. The operational cost is minimal (refreshments and staff time). Run this monthly.",
                },
                {
                  q: "How far ahead should I plan events?",
                  a: "Plan the quarterly events (Trunk Show, Charity Fashion Show, Women's Business Group co-hosting) 8 to 12 weeks in advance to allow for partner coordination and promotion. Plan monthly events (Styling Workshop Nights, Girls Night Out) 4 weeks ahead for social promotion. For the Donation Drives, 2 weeks of social promotion is sufficient. The rule: the more your event involves external partners or community organizations, the earlier you need to start. The more it is purely your own customers, the shorter the lead time needed.",
                },
              ]}
            />

            {/* Section 7: Marketing */}
            <BoutiqueMarketingSection />

            {/* Section 7b: Social Media */}
            <div id="social-media">
              <BoutiqueSocialMediaSection />
            </div>
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "If I can only focus on one marketing channel, which should it be?",
                  a: "TikTok, specifically the GRWM and outfit styling format. No other channel delivers the combination of organic discovery reach, low production barrier, and high purchase intent for boutique clothing. A single video showing three ways to wear your featured item, filmed on a phone in your store with trending audio, can reach 10,000 to 100,000 local women who have never heard of your boutique. Once it reaches them, the platform's algorithm keeps serving it to women who engage with similar content. No other channel has that flywheel at zero cost.",
                },
                {
                  q: "How do I make the most of my email list when I am just starting?",
                  a: "Start with a single weekly email: every Monday morning, the 3 to 5 new arrivals from last week with photos and direct links. Subject line format that works: 3 new pieces you need to see (and 1 that will not last the week). Do this consistently for 8 weeks before adding anything else. The open rate on a focused new arrivals email from a boutique owner who knows her customers is typically 35 to 50%, compared to the 15 to 20% industry average. Consistency before complexity is the rule.",
                },
              ]}
            />

            {/* Section 8: Checklist */}
            <BoutiqueChecklistSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the most commonly missed item on this checklist?",
                  a: "The pricing and margin calculator. Most boutique owners set prices by gut feel or by looking at comparable items online. Without a consistent margin calculator, it is nearly impossible to know whether your business is actually profitable until it is too late. Build a simple spreadsheet: wholesale cost, target margin percentage, calculated retail price, and actual selling price. Run every buying decision through it. If a piece cannot be marked up to your target margin and still sell at a competitive price for your market, do not buy it.",
                },
                {
                  q: "How long should it take to complete the full checklist?",
                  a: "The legal and registration items (1 to 4) should be complete before you open. Operations items (5 to 8) require 1 to 2 weeks to set up properly. Store experience items (9 to 12) are ongoing and should be reviewed weekly. Social and digital items (13 to 16) can be set up in one focused weekend. Loyalty and marketing items (17 to 20) take 1 to 2 weeks. Women-first experience items (21 to 24) are ongoing commitments. Total setup time for a new boutique: 3 to 4 weeks before opening day.",
                },
              ]}
            />

            {/* Section 9: Q&A */}
            <BoutiqueQASection />

            <GuideAuthorFooter />
          </>
        )}

        <div className="border-t border-border pt-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Ready to fill your boutique this week?
            </h2>
            <p className="text-muted-foreground mb-6">
              Start with Day 1 of the 7-Day Quick Start plan and have your
              shoppable Instagram and TikTok accounts live by tonight.
            </p>
            <Button
              className="rounded-lg font-semibold px-6"
              style={{ background: ACCENT }}
              data-ocid="boutique-guide.next_step_cta_button"
              onClick={() => scrollTo("quickstart")}
              type="button"
            >
              Start Your 7-Day Plan
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
