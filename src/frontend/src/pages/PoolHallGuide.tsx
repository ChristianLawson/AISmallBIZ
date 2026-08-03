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
import { PoolHallAtmosphereSection } from "@/components/poolhall/PoolHallAtmosphereSection";
import { PoolHallBrandingSection } from "@/components/poolhall/PoolHallBrandingSection";
import { PoolHallCommunitySection } from "@/components/poolhall/PoolHallCommunitySection";
import { PoolHallEventsSection } from "@/components/poolhall/PoolHallEventsSection";
import { PoolHallImmediateWinsSection } from "@/components/poolhall/PoolHallImmediateWinsSection";
import { PoolHallMarketingSection } from "@/components/poolhall/PoolHallMarketingSection";
import { PoolHallMenuSection } from "@/components/poolhall/PoolHallMenuSection";
import { PoolHallQA } from "@/components/poolhall/PoolHallQA";
import { PoolHallRescueChecklist } from "@/components/poolhall/PoolHallRescueChecklist";
import { PoolHallSocialMediaSection } from "@/components/poolhall/PoolHallSocialMediaSection";
import { PoolHallTafferSection } from "@/components/poolhall/PoolHallTafferSection";
import { PoolHallWomensStrategySection } from "@/components/poolhall/PoolHallWomensStrategySection";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  Heart,
  Lightbulb,
  Megaphone,
  MessageCircle,
  RotateCcw,
  Share2,
  Target,
  TrendingUp,
  Users,
  Users2,
  Utensils,
  Venus,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "immediate-wins", label: "7-Day Quick Start", icon: Zap },
  { id: "menu", label: "Viral Menu", icon: Utensils },
  { id: "taffer", label: "Bar Rescue", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  { id: "womens-strategy", label: "Women's Strategy", icon: Venus },
  { id: "events", label: "Events & Lessons", icon: Calendar },
  { id: "atmosphere", label: "Atmosphere", icon: Lightbulb },
  { id: "community", label: "Community", icon: Heart },
  { id: "social-media", label: "Social Media", icon: Share2 },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "checklist", label: "Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: MessageCircle },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      'Post "Mansplaining-Free Zone" and anti-harassment signage + all 8 house rules clearly at every table',
  },
  {
    day: 2,
    action:
      "Brief all staff on harassment response procedures + activate and test all security cameras",
  },
  {
    day: 3,
    action:
      "Upgrade atmosphere: warm lighting, comfortable seating, music calibrated for conversation",
  },
  {
    day: 4,
    action:
      "Post on Instagram/TikTok/Facebook announcing free 15-min pool lessons for women (first Monday of each month)",
  },
  {
    day: 5,
    action:
      "Reach out to one local women's organization or sports club for a partnership or cross-promotion",
  },
  {
    day: 6,
    action:
      "Set up a recurring Ladies' Night event: discounted or free table time, themed cocktail special, announced this week",
  },
  {
    day: 7,
    action:
      "Create a women's league interest sign-up sheet (physical + digital): offer early-bird discount to first 12 sign-ups",
  },
];

const ACCENT = "#6366F1";

export default function PoolHallGuide() {
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
        // We want the section whose top is closest to (but still at or above) 150px
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
    // Switch to the full tab first so the section is mounted, then scroll
    setActiveTab("full");
    setActiveSection(id);
    // Use a small delay to allow React to render the full tab content
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      // Account for sticky header (~64px) + sticky section nav (~48px) + small buffer
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
        data-ocid="poolhall-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url('/assets/generated/pool-hall-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Target size={12} />
              Pool Hall Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The Pool Hall Playbook: Attract More Women &amp; Build a{" "}
              <span className="text-gradient-vibrant">Thriving Community</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a 7-day action plan, a viral menu strategy, Jon
              Taffer&rsquo;s Bar Rescue principles, and Appreciated Branding
              tactics that bring more women through your doors. More customers
              mean fuller tables, longer visits, and higher revenue per night
              without spending on expensive renovations.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "7-Day Immediate Wins Plan", id: "immediate-wins" },
                { label: "12 Monthly Viral Specials", id: "menu" },
                { label: "Women-Only Events Framework", id: "events" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`poolhall-guide.hero.tag.item.${i + 1}`}
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
        data-ocid="poolhall-guide.section_nav"
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
                data-ocid={`poolhall-guide.section_nav.item.${i + 1}`}
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

        <NYCHelpCallout />

        {activeTab === "quickstart" ? (
          <QuickStartTab days={QUICK_START_DAYS} accentColor={ACCENT} />
        ) : (
          <>
            {/* Section 1: Immediate Wins */}
            <PoolHallImmediateWinsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which day 1 action has the biggest impact?",
                  a: "The anti-harassment signage. Women report that visible, specific rules (not vague 'be nice' posters) are the #1 signal that a venue is genuinely different. Post them at every table, not just the entrance.",
                },
                {
                  q: "How quickly will I see results from the 7-day plan?",
                  a: "Social media announcement of free lessons (Day 4) typically drives sign-ups within 24 to 48 hours if you tag local women's groups. Ladies' Night revenue impact is usually visible by week 3 of running it consistently.",
                },
              ]}
            />

            {/* Section 2: Viral Menu */}
            <PoolHallMenuSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which menu item drives the most social posts?",
                  a: "The 8-Ball Truffles and the Cue Ball Spritz consistently outperform all other items because they are uniquely ownable: no other bar has them. Uniqueness plus pool branding equals content nobody can replicate.",
                },
                {
                  q: "How do I launch the rotating monthly special?",
                  a: "Photograph it on day 1 of the month, post on all channels immediately. Announce it as 'This Month Only': scarcity language increases orders by 25 to 40% compared to no time limit. Document sales and adjust based on what drives the most repeat orders.",
                },
              ]}
            />

            {/* Section 3: Taffer */}
            <div id="taffer">
              <PremiumGate
                sectionTitle="Bar Rescue Strategies"
                teaserContent={
                  <p>
                    Discover how Jon Taffer's Bar Rescue framework applies to
                    your pool hall: from diagnosing failures to executing a
                    rapid turnaround plan.
                  </p>
                }
              >
                <PoolHallTafferSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle should I implement first for a pool hall?",
                  a: "Visible safety standards. Post your rules where every customer sees them before picking up a cue. Taffer's 'show-and-tell accountability' principle: what is visible gets done, and what is visible to customers gets believed.",
                },
                {
                  q: "What would Taffer say about the pre-shift safety briefing?",
                  a: "'Non-negotiable.' Taffer's research shows pre-shift briefings reduce incidents by 60% because staff arrive mentally prepared rather than reacting. 5 minutes every shift is your cheapest insurance policy.",
                },
              ]}
            />

            {/* Section 4: Branding */}
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
                <PoolHallBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I make my pool hall's branding feel authentic vs. performative?",
                  a: "Authenticity is proven through repeated action, not a single announcement. The first month you launch: sign goes up, staff is trained, policy is enforced visibly. Month 3: first women's tournament. Month 6: league season 2 launch. Patagonia did not build trust with one campaign: they built it with 40 years of consistent action.",
                },
                {
                  q: "Should I market the 'Women Valued' messaging aggressively?",
                  a: "Let the environment speak, not the marketing. The most powerful testimonial is a woman posting 'I felt completely safe here for the first time in a pool hall.' That earns you more trust than any ad you can buy. Create the experience first, then amplify it.",
                },
              ]}
            />

            {/* Section 4b: Women's Strategy */}
            <PoolHallWomensStrategySection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Where do I start if my pool hall has never had women-focused programming?",
                  a: "Start with the signage. Post the 9-rule Mansplaining-Free Zone Charter at every table before you do anything else. It costs nothing and sends an immediate signal to every customer, existing and new, that the culture here has changed. Then schedule your first Ladies' Pool Night within 30 days.",
                },
                {
                  q: "How do I get my male regulars on board with these changes?",
                  a: "Frame it as business growth, not politics. More women equal more customers equal a fuller room, which is better for everyone. Most regulars respond well when they understand the business logic. Taffer's rule: announce the change confidently, enforce it consistently, and do not argue with people who resist: just continue doing it.",
                },
              ]}
            />

            {/* Section 5: Events */}
            <PoolHallEventsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How many women do I need before launching a league?",
                  a: "8 is the minimum for a viable first season. Run sign-up sheets at 3 consecutive Ladies' Nights. If you do not hit 8 after those 3 nights, the event format needs adjustment, not the league idea. Look at what is keeping women at the 'casual visit' stage and address it.",
                },
                {
                  q: "Can I charge for the free 15-minute lessons?",
                  a: "Not at first. The free lesson is a customer acquisition cost, not a revenue line. Your ROI is the lesson-to-regular conversion rate. At 68% return rate within 2 weeks, every free lesson is worth far more than the $20 to $30 you could charge.",
                },
              ]}
            />

            {/* Section 6: Atmosphere */}
            <PoolHallAtmosphereSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How much does the lighting upgrade actually matter?",
                  a: "It is one of the highest-ROI physical changes you can make. Warm lighting (2700K to 3000K) extends average dwell time by 20 to 30% based on hospitality research. That directly translates to higher per-visit spend: more drinks, more food, more table time. Budget $200 to $800 per table and expect ROI within 4 to 6 weeks.",
                },
                {
                  q: "Should I add a blacklight night right away or build up to it?",
                  a: "Build up to it: blacklight nights work best when you have an established audience to market to. Run it as a ticketed quarterly event starting at month 3. The lead-up content (neon setup shots, cocktail prep) is as valuable as the event itself.",
                },
              ]}
            />

            {/* Section 7: Community */}
            <PoolHallCommunitySection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I approach a women's organization for a partnership?",
                  a: "Lead with value, not a request. 'We would like to host your members for a free Ladies' Night: no cost to your group, we handle everything' is a yes for most organizations. After they experience your venue, cross-promotion follows naturally. Never start with 'promote us to your members.'",
                },
                {
                  q: "What if traditional regulars push back on the new policies?",
                  a: "Frame it as a business decision, not a values debate. 'More women equal more revenue equal better business' is a message most regulars understand. The data from Texas leagues showing 30 to 50% female participation (vs. Minnesota at 5%) makes your case. Those Texas halls are more profitable, not less.",
                },
              ]}
            />

            {/* Section 8: Social Media */}
            <PoolHallSocialMediaSection />

            {/* Section 9: Marketing */}
            <PoolHallMarketingSection />
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the minimum social media effort for this to work?",
                  a: "Three posts per week minimum: Monday (this week's monthly special reveal or event announcement), Wednesday (behind-the-scenes or women player feature), Friday (Ladies' Night preview or tonight's special). Batch film on Sunday. Total time: 90 minutes per week.",
                },
                {
                  q: "When should I start running paid social ads?",
                  a: "Only after organic content is working: meaning posts regularly getting 20 or more saves and shares. Then put $15 to $25 per day behind your top-performing post for hyper-local targeting (3-mile radius, women 21 to 45). Amplifying content that already works costs a fraction of creating demand from scratch.",
                },
              ]}
            />

            {/* Section 9: Checklist */}
            <PoolHallRescueChecklist />

            {/* Section 10: Q&A */}
            <section id="qa" data-ocid="poolhall-guide.qa_section">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
                >
                  <MessageCircle
                    size={20}
                    style={{ color: "oklch(0.50 0.22 290)" }}
                  />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Pool Hall Q&amp;A
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Real answers to the questions pool hall owners ask most.
              </p>
              <PoolHallQA />
            </section>

            <GuideAuthorFooter />
          </>
        )}

        {/* CTA Footer */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 290 / 0.08) 0%, oklch(0.55 0.14 85 / 0.06) 100%)",
            border: "1px solid oklch(0.55 0.18 290 / 0.2)",
          }}
          data-ocid="poolhall-guide.cta_section"
        >
          <BarChart3
            size={36}
            className="mx-auto mb-4"
            style={{ color: "oklch(0.50 0.22 290)" }}
          />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Transform Your Pool Hall?
          </h2>
          <p className="text-[#71717A] mb-6 max-w-xl mx-auto">
            Start with Day 1 of the Quick Start plan. Post the signage today:
            the rest follows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                setActiveTab("quickstart");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="poolhall-guide.cta.quickstart_button"
              size="lg"
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
