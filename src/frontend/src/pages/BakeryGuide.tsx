import { BackToTop } from "@/components/BackToTop";
import { BrandingCrossLink } from "@/components/BrandingCrossLink";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { GuideTabToggle } from "@/components/GuideTabToggle";
import { Layout } from "@/components/Layout";
import { PremiumGate } from "@/components/PremiumGate";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickStartTab } from "@/components/QuickStartTab";
import { RecommendedToolsBox } from "@/components/RecommendedToolsBox";
import { SectionQA } from "@/components/SectionQA";
import { BakeryAttractingWomenSection } from "@/components/bakery/BakeryAttractingWomenSection";
import { BakeryBarRescueSection } from "@/components/bakery/BakeryBarRescueSection";
import { BakeryBrandingSection } from "@/components/bakery/BakeryBrandingSection";
import { BakeryChecklistSection } from "@/components/bakery/BakeryChecklistSection";
import { BakeryEventsSection } from "@/components/bakery/BakeryEventsSection";
import { BakeryImmediateWinsSection } from "@/components/bakery/BakeryImmediateWinsSection";
import { BakeryMarketingSection } from "@/components/bakery/BakeryMarketingSection";
import { BakeryMenuSection } from "@/components/bakery/BakeryMenuSection";
import { BakeryQASection } from "@/components/bakery/BakeryQASection";
import { BakerySocialMediaSection } from "@/components/bakery/BakerySocialMediaSection";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  CheckSquare,
  ChevronRight,
  HelpCircle,
  Megaphone,
  Share2,
  Star,
  TrendingUp,
  Users,
  Utensils,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "quickstart", icon: Zap, label: "7-Day Quick Start" },
  { id: "menu", icon: Utensils, label: "Viral Menu" },
  { id: "bar-rescue", icon: Megaphone, label: "Bar Rescue" },
  { id: "branding", icon: Star, label: "Appreciated Branding" },
  { id: "attracting-women", icon: Users, label: "Attracting Women" },
  { id: "events", icon: Calendar, label: "Events & Community" },
  { id: "social-media", icon: Share2, label: "Social Media" },
  { id: "marketing", icon: TrendingUp, label: "Marketing" },
  { id: "checklist", icon: CheckSquare, label: "Rescue Checklist" },
  { id: "qa", icon: HelpCircle, label: "Q&A" },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Deep clean the display case and reorganize pastry layout for maximum visual appeal: front-face everything, remove anything that looks tired",
  },
  {
    day: 2,
    action:
      "Take 5 Instagram-worthy photos of your best items with natural light: croissants, layer cakes, specialty drinks: and schedule them for the week",
  },
  {
    day: 3,
    action:
      "Set up or update Google My Business with today's specials, accurate hours, and 3 new photos of the interior and display case",
  },
  {
    day: 4,
    action:
      "Post a 30-second 'Behind the Bake' TikTok or Reel showing your most visually satisfying process: laminating dough, piping frosting, glazing pastries",
  },
  {
    day: 5,
    action:
      "Train all staff on the 3-sentence welcome script: greet by name after payment, explain today's special, and offer a sample of the featured item",
  },
  {
    day: 6,
    action:
      "Create a loyalty punch card (10 purchases = 1 free item) and hand one to every customer today: and place a stack at the counter",
  },
  {
    day: 7,
    action:
      "Call one local women's organization, book club, or community group to explore hosting a morning event, baking demo, or private tasting at your café",
  },
];

const ACCENT = "#6366F1";

export default function BakeryGuide() {
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
        data-ocid="bakery-guide.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Utensils size={12} />
              Bakery & Café Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The Bakery & Café Business Guide:{" "}
              <span className="text-gradient-vibrant">
                Viral Menus, Community, & Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a 7-day action plan, trending viral menu items, Jon
              Taffer&rsquo;s rescue principles, and Appreciated Branding adapted
              for bakeries and cafes. Following this playbook fills your display
              case with items customers photograph and share, brings regulars
              back two to five times a week, and turns first-time visitors into
              loyal regulars who refer their friends.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "7-Day Immediate Wins Plan", id: "quickstart" },
                { label: "Monthly Viral Menu Rotations", id: "menu" },
                {
                  label: "Women-First Community Strategy",
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
                  data-ocid={`bakery-guide.hero.tag.item.${i + 1}`}
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
        data-ocid="bakery-guide.section_nav"
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
                data-ocid={`bakery-guide.section_nav.item.${i + 1}`}
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
            {/* Section 1: Immediate Wins */}
            <div id="quickstart">
              <BakeryImmediateWinsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the single fastest win for a struggling bakery on Day 1?",
                  a: "The display case reorganization. A visually compelling case stops foot traffic before any marketing does. Front-face everything, remove stale items, and add a small hand-written daily special card. Customers decide in 8 seconds whether to buy: the case is that decision point.",
                },
                {
                  q: "How quickly can I expect results from the Google My Business update?",
                  a: "Photos upload immediately and improve click-through rates within 48 hours. Search ranking changes take 1-2 weeks. Adding a weekly post with a photo of today's special is the single highest-ROI action on Google My Business: it signals an active, fresh business to the algorithm.",
                },
              ]}
            />

            {/* Section 2: Viral Menu */}
            <div id="menu">
              <BakeryMenuSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I decide what the rotating monthly item should be?",
                  a: "Check TikTok and Instagram's food hashtags in the last 2 weeks of each month. Whatever is gaining momentum in the wider food world: a specific ingredient, dessert format, or flavor profile: can be your next limited item. The goal is to be first in your neighborhood, not first in the world.",
                },
                {
                  q: "Is a viral menu worth the prep complexity?",
                  a: "Only if the item can be made in under 5 minutes per order during a rush. Batch-prep components ahead of time. The photography value and social media word-of-mouth from one viral item can drive more foot traffic than a month of paid advertising: but only if it photographs well and tastes distinctive.",
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
                    to your bakery: from diagnosing the customer experience to
                    executing a rapid atmosphere and operations turnaround.
                  </p>
                }
              >
                <BakeryBarRescueSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle applies most directly to a bakery?",
                  a: "The sensory audit. Taffer walks in as a customer and notes everything he smells, sees, and hears before touching a menu. In a bakery, the smell of fresh bread should hit before the door fully opens: if it does not, you are missing your most powerful marketing tool. The display case arrangement, lighting, and ambient music are all part of the experience before a single transaction happens.",
                },
                {
                  q: "What would Taffer say about a bakery that is busy in the morning but dead after 11am?",
                  a: "'You have a morning business, not a bakery business.' He would restructure the afternoon hours entirely: a different menu focus (lunch items, coffee specials, afternoon pastry drops), a reason to return mid-day (a 2pm fresh-bake announcement), and promotional pricing after 2pm to liquidate morning inventory instead of wasting it.",
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
                    lasting customer loyalty through genuine emotional
                    connection and neighborhood community identity.
                  </p>
                }
              >
                <BakeryBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How does Appreciated Branding apply specifically to a neighborhood bakery?",
                  a: "A bakery has a geographic loyalty advantage that most businesses do not. Your regulars come to you 2-5 times per week. The Appreciated Branding principle: making customers feel genuinely valued, not just transacted: is especially powerful here because the relationship is repeated and personal. Knowing a customer's usual order is an act of appreciation that no chain competitor can replicate.",
                },
                {
                  q: "Should I brand around the owner's story or the product?",
                  a: "Lead with the product: that is what drives the first visit. Build the owner story as the emotional glue that drives loyalty. 'Best croissants in Brooklyn' gets someone in the door. 'Maria has been baking since age 7 and sources her butter from one upstate farm' is why they come back and why they tell people.",
                },
              ]}
            />

            {/* Section 5: Attracting Women */}
            <div id="attracting-women">
              <BakeryAttractingWomenSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Why focus on attracting women specifically for a bakery?",
                  a: "Women make approximately 70-80% of household food purchasing decisions and are the primary drivers of word-of-mouth recommendations in food and hospitality. A bakery that women feel comfortable in, that celebrates women's gatherings, and that actively markets to women's communities will grow faster through organic referral than through paid advertising.",
                },
                {
                  q: "What is the easiest first step to make a bakery more welcoming to women?",
                  a: "Create a physical space for gathering. Two armchairs, a small table, and an inviting corner changes the energy of a transactional space into a social destination. Women linger, bring friends, and return: this is the highest-ROI physical change you can make under $500.",
                },
              ]}
            />

            {/* Section 6: Events */}
            <div id="events">
              <BakeryEventsSection />
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I price a private baking class event?",
                  a: "$45-75 per person for a 90-minute hands-on class covering one signature item (croissants, macarons, sourdough). Minimum 8 participants. Sell the experience: 'make your own croissants and take them home': not just the instruction. Private group bookings for bridal showers, birthdays, and team events can be priced at $65-95/person with a 10-person minimum.",
                },
                {
                  q: "Can a small bakery with limited space host events?",
                  a: "Yes: 6 to 8 participants is the ideal hands-on baking class size anyway. Clear one prep area, set up 3-4 stations, and limit enrollment. The intimacy of a small-group class is actually a premium feature, not a limitation. Market it as an 'exclusive small-group experience' and it commands higher per-person pricing than a large commercial class.",
                },
              ]}
            />

            {/* Section 7: Social Media */}
            <div id="social-media">
              <BakerySocialMediaSection />
            </div>

            {/* Section 8: Marketing */}
            <div id="marketing">
              <BakeryMarketingSection />
            </div>
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What type of content performs best for a bakery on social media?",
                  a: "Process videos: specifically the most visually satisfying moments: laminating croissant dough, pulling sourdough from the oven, piping a rosette. These outperform product photos 4:1 on Reels and TikTok. The 'behind the bake' format works because it is both beautiful and transparent: it builds trust alongside desire. Post one process video per week minimum.",
                },
                {
                  q: "Should I run paid social ads for my bakery?",
                  a: "Only after establishing organic content that consistently gets saves and shares. Start with $20/day targeting women 25-55 within a 2-mile radius on Instagram, boosting your most-saved post. Geo-targeted bakery ads have some of the highest conversion rates in food because the purchase radius is inherently local and the visual content does the selling automatically.",
                },
              ]}
            />

            {/* Section 8: Checklist */}
            <div id="checklist">
              <BakeryChecklistSection />
            </div>

            {/* Section 9: Q&A */}
            <section id="qa" data-ocid="bakery-guide.qa_section">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
                >
                  <HelpCircle
                    size={20}
                    style={{ color: "oklch(0.50 0.22 290)" }}
                  />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Bakery & Café Q&amp;A
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Real answers to the questions bakery and café owners ask most.
              </p>
              <BakeryQASection />
            </section>

            <GuideAuthorFooter />
          </>
        )}

        {/* CTA Footer */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.08) 0%, oklch(0.45 0.14 150 / 0.06) 100%)",
            border: "1px solid oklch(0.55 0.18 290 / 0.2)",
          }}
          data-ocid="bakery-guide.cta_section"
        >
          <BarChart3
            size={36}
            className="mx-auto mb-4"
            style={{ color: "oklch(0.50 0.22 290)" }}
          />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Transform Your Bakery?
          </h2>
          <p className="text-[#71717A] mb-6 max-w-xl mx-auto">
            Start with Day 1 of the Quick Start plan. Clean the display case
            today: the first impression shift begins immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                setActiveTab("quickstart");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="bakery-guide.cta.quickstart_button"
              size="lg"
              style={{ background: ACCENT, color: "#fff" }}
            >
              Start the 7-Day Plan
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
