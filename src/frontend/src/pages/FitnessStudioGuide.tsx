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
import { FitnessStudioAttractingWomenSection } from "@/components/fitnessstudio/FitnessStudioAttractingWomenSection";
import { FitnessStudioBarRescueSection } from "@/components/fitnessstudio/FitnessStudioBarRescueSection";
import { FitnessStudioBrandingSection } from "@/components/fitnessstudio/FitnessStudioBrandingSection";
import { FitnessStudioChecklistSection } from "@/components/fitnessstudio/FitnessStudioChecklistSection";
import { FitnessStudioEventsSection } from "@/components/fitnessstudio/FitnessStudioEventsSection";
import { FitnessStudioImmediateWinsSection } from "@/components/fitnessstudio/FitnessStudioImmediateWinsSection";
import { FitnessStudioMarketingSection } from "@/components/fitnessstudio/FitnessStudioMarketingSection";
import { FitnessStudioQASection } from "@/components/fitnessstudio/FitnessStudioQASection";
import { FitnessStudioServicesSection } from "@/components/fitnessstudio/FitnessStudioServicesSection";
import { FitnessStudioSocialMediaSection } from "@/components/fitnessstudio/FitnessStudioSocialMediaSection";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  Dumbbell,
  Heart,
  Megaphone,
  MessageCircle,
  Share2,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "quickstart", label: "7-Day Quick Start", icon: Zap },
  { id: "services", label: "Classes & Services", icon: Dumbbell },
  { id: "bar-rescue", label: "Bar Rescue", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Users },
  { id: "attracting-women", label: "Attracting Women", icon: Heart },
  { id: "events", label: "Events & Community", icon: Calendar },
  { id: "social-media", label: "Social Media", icon: Share2 },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "checklist", label: "Rescue Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: MessageCircle },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Post body-positive and non-judgmental zone signage at the entrance, locker rooms, and weight room: specific rules, not vague posters",
  },
  {
    day: 2,
    action:
      "Brief all staff and instructors on inclusive coaching language and harassment response protocols",
  },
  {
    day: 3,
    action:
      "Launch a free trial class for women with a simple sign-up link: 'No experience required, all bodies welcome'",
  },
  {
    day: 4,
    action:
      "Optimize your Google My Business profile with photos of diverse members and a women-welcoming description",
  },
  {
    day: 5,
    action:
      "Reach out to one local women's health organization, mom's group, or women's ERG and offer a free group class",
  },
  {
    day: 6,
    action:
      "Add at least one women-only class slot to the recurring weekly schedule: promote it prominently",
  },
  {
    day: 7,
    action:
      "Start your email list: sign-up sheet at every class sign-in, with a first-month discount incentive",
  },
];

const ACCENT = "#6366F1";

export default function FitnessStudioGuide() {
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
        data-ocid="fitness-studio-guide.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Target size={12} />
              Fitness Studio Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              The Fitness Studio Playbook: Attract More Women &amp; Build a{" "}
              <span className="text-gradient-vibrant">Thriving Community</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a 7-day action plan, June 2026 trending classes, Jon
              Taffer&rsquo;s rescue principles, and Appreciated Branding adapted
              for boutique fitness studios. Following this playbook grows your
              membership, fills empty class slots, and turns first-time visitors
              into loyal regulars who refer their friends.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "7-Day Immediate Wins Plan", id: "quickstart" },
                { label: "12 Monthly Class Spotlights", id: "services" },
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
                  data-ocid={`fitness-studio-guide.hero.tag.item.${i + 1}`}
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
        data-ocid="fitness-studio-guide.section_nav"
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
                data-ocid={`fitness-studio-guide.section_nav.item.${i + 1}`}
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
            <FitnessStudioImmediateWinsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Day 1 action has the biggest impact on attracting women?",
                  a: "The signage. Women report that specific, visible rules, 'No Unsolicited Advice' and 'All Bodies Welcome', are the first thing they notice and the strongest signal that your studio is genuinely different. Vague 'be nice' posters do not move the needle. Specific signs with real rules do.",
                },
                {
                  q: "How quickly will I see results from the 7-day plan?",
                  a: "The free trial class announcement (Day 3) typically generates sign-ups within 24 to 48 hours if you tag local women's groups and use 'No experience required' language. Google My Business optimization (Day 4) affects search visibility within 1 to 2 weeks. The email list (Day 7) compounds in value over months, so start it immediately.",
                },
              ]}
            />

            {/* Section 2: Services */}
            <FitnessStudioServicesSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Is Pilates Reformer really worth the equipment investment?",
                  a: "Yes. At the boutique level, reformer pilates commands $35 to $50 per session vs. $15 to $20 for floor classes. A 6-machine studio with 4 small-group sessions daily generates $840 to $1,200 per day from the reformer room alone. The equipment pays for itself within 3 to 6 months at typical boutique occupancy rates. More importantly, it is the format women are actively searching for in 2026, so demand already exists.",
                },
                {
                  q: "How do I launch the monthly rotating class spotlight?",
                  a: "Photograph or video the class on the first day of the month and post immediately across all channels. Use 'This Month Only' language, because scarcity increases enrollment by 25 to 40% compared to open-ended promotions. Track enrollment and adjust based on which months drive the most new trials vs. renewals.",
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
                    to your fitness studio: from diagnosing the member
                    experience to executing a rapid culture turnaround.
                  </p>
                }
              >
                <FitnessStudioBarRescueSection />
              </PremiumGate>
            </div>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which Taffer principle should I implement first for a fitness studio?",
                  a: "The instructor energy audit. Walk through every class you offer and observe whether your instructors make new members feel welcomed and seen. Taffer's 'visible accountability' principle says what is modeled consistently by leadership becomes the culture. One instructor who makes beginners feel judged undoes every sign you put on the wall.",
                },
                {
                  q: "What would Taffer say about locker room quality?",
                  a: "'The bathroom tells me everything about how you run your business.' In fitness studios, the locker room is the equivalent. If the lighting is harsh, the floors are grimy, or there are no basics stocked, women notice immediately. A $400 locker room refresh (warm bulbs, clean mats, basic amenities) is one of the highest-ROI changes you can make.",
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
                    lasting member loyalty through genuine emotional connection
                    and community identity.
                  </p>
                }
              >
                <FitnessStudioBrandingSection />
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I make my studio's community feel authentic vs. just marketing?",
                  a: "Authenticity is proven through repeated action, not announcements. Month 1: signage up, instructor language trained, welcoming protocol active. Month 3: first women's challenge with a private group. Month 6: ambassador program launched, milestones being publicly celebrated. Patagonia did not build trust with one sustainability post: they built it with decades of consistent action. Your community is built the same way.",
                },
                {
                  q: "Should I market the women-welcoming angle aggressively?",
                  a: "Let the environment speak first. The most powerful signal is a woman posting: 'I finally found a gym where I do not feel judged.' That earns you more trust than any ad campaign. Create the experience, then ask members to share it. The ambassador program formalizes this: but it only works if the experience is real.",
                },
              ]}
            />

            {/* Section 5: Attracting Women */}
            <FitnessStudioAttractingWomenSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the fastest way to shift the gender ratio in my studio?",
                  a: "Three simultaneous actions: (1) Add one women-only class this week and promote it with 'No experience required' messaging. (2) Post on Instagram specifically about your non-judgmental environment: this content is highly shareable among women. (3) Reach out to one local women's organization for a group free trial. These three together typically produce visible change within 4 to 6 weeks.",
                },
                {
                  q: "How do I make the weight room less male-dominated without alienating male members?",
                  a: "Frame it as an expansion, not a takeover. 'Women's barbell basics' is a new offering, not a takeover of existing equipment. Scheduling women-only hours during off-peak times (early morning, late morning) preserves peak times for everyone. Post 'No Unsolicited Advice' signage as a general rule for all members: not women-specific. Most male members will have no objection to this framing, and those who do are not the customer base you are optimizing for.",
                },
              ]}
            />

            {/* Section 6: Events */}
            <FitnessStudioEventsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How many women do I need before launching a challenge program?",
                  a: "Minimum 12 for a meaningful cohort experience. Run free trial weeks and beginner workshops first. When 12+ women have attended multiple times, they have enough connection with each other to make the challenge community feel real. Launching with fewer than 8 makes the private group feel empty: a challenge requires social proof within the group to work.",
                },
                {
                  q: "Can I charge for the women's beginner workshops?",
                  a: "Charge a small deposit ($15-25) to prevent no-shows, but keep the effective cost near free for the first 2-3 workshops while you build attendance. Once you have a waitlist: meaning demand exceeds supply: price to $35-49 per session. Your ROI from beginner workshops is the 78% membership conversion rate, not the workshop fee.",
                },
              ]}
            />

            {/* Section 7: Social Media */}
            <FitnessStudioSocialMediaSection />

            {/* Section 8: Marketing */}
            <FitnessStudioMarketingSection />
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the minimum social media effort for a fitness studio to grow?",
                  a: "Four posts per week minimum: Monday (this week's class spotlight or event announcement), Wednesday (member story or instructor feature), Friday (weekend class schedule or Ladies' Night preview), Sunday (motivation or behind-the-scenes). Batch film on one day. Total time: 90 minutes per week if you are disciplined about it. Reels outperform static posts 3 to 1: prioritize short video over graphics.",
                },
                {
                  q: "When should I start running paid social ads?",
                  a: "Only after organic content is consistently getting 20+ saves and shares. Then put $20 to $30 per day behind your top-performing post targeting women 24 to 45 in a 3-mile radius. Amplifying content that already works organically costs a fraction of creating demand from scratch. Do not advertise until you have proof of what resonates.",
                },
              ]}
            />

            {/* Section 8: Checklist */}
            <FitnessStudioChecklistSection />

            {/* Section 9: Q&A */}
            <section id="qa" data-ocid="fitness-studio-guide.qa_section">
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
                Fitness Studio Q&amp;A
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Real answers to the questions fitness studio owners ask most.
              </p>
              <FitnessStudioQASection />
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
          data-ocid="fitness-studio-guide.cta_section"
        >
          <BarChart3
            size={36}
            className="mx-auto mb-4"
            style={{ color: "oklch(0.50 0.22 290)" }}
          />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Transform Your Fitness Studio?
          </h2>
          <p className="text-[#71717A] mb-6 max-w-xl mx-auto">
            Start with Day 1 of the Quick Start plan. Post the signage today:
            the culture shift begins immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                setActiveTab("quickstart");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="fitness-studio-guide.cta.quickstart_button"
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
