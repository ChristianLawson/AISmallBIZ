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
import RotatingText from "@/components/RotatingText";
import { SectionQA } from "@/components/SectionQA";
import { PizzaShopAtmosphereSection } from "@/components/pizzashop/PizzaShopAtmosphereSection";
import { PizzaShopBrandingSection } from "@/components/pizzashop/PizzaShopBrandingSection";
import { PizzaShopCommunitySection } from "@/components/pizzashop/PizzaShopCommunitySection";
import { PizzaShopEquipmentSection } from "@/components/pizzashop/PizzaShopEquipmentSection";
import { PizzaShopImmediateWinsSection } from "@/components/pizzashop/PizzaShopImmediateWinsSection";
import { PizzaShopMarketingSection } from "@/components/pizzashop/PizzaShopMarketingSection";
import { PizzaShopMenuSection } from "@/components/pizzashop/PizzaShopMenuSection";
import { PizzaShopQA } from "@/components/pizzashop/PizzaShopQA";
import { PizzaShopRescueChecklist } from "@/components/pizzashop/PizzaShopRescueChecklist";
import { PizzaShopSocialMediaSection } from "@/components/pizzashop/PizzaShopSocialMediaSection";
import { PizzaShopTafferSection } from "@/components/pizzashop/PizzaShopTafferSection";
import { PizzaShopTransitionSection } from "@/components/pizzashop/PizzaShopTransitionSection";
import { PizzaShopWomensStrategySection } from "@/components/pizzashop/PizzaShopWomensStrategySection";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  Flame,
  Heart,
  Lightbulb,
  Megaphone,
  MessageCircle,
  Pizza,
  Share2,
  Target,
  TrendingUp,
  Truck,
  Utensils,
  Venus,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "immediate-wins", label: "7-Day Quick Start", icon: Zap },
  { id: "transition", label: "Truck to Store", icon: Truck },
  { id: "ovens", label: "Ovens & Equipment", icon: Flame },
  { id: "menu", label: "Menu Engineering", icon: Utensils },
  { id: "taffer", label: "Bar Rescue", icon: Megaphone },
  { id: "branding", label: "Appreciated Branding", icon: Target },
  { id: "womens-strategy", label: "Women's Strategy", icon: Venus },
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
      "Audit your current permits and licenses: identify exactly which mobile permits transfer and which brick-and-mortar permits you need to apply for",
  },
  {
    day: 2,
    action:
      "Calculate your break-even square footage: target 1,200-1,800 sq ft for a slice-and-pie operation, 2,500+ sq ft for full dine-in",
  },
  {
    day: 3,
    action:
      "Research 3 potential locations using foot-traffic data, competitor density, and rent-to-revenue ratios (target rent under 8% of projected revenue)",
  },
  {
    day: 4,
    action:
      "Price your menu for brick-and-mortar: slice should be 3.5x food cost, whole pie 3.0x, specialty items 4.0x minimum",
  },
  {
    day: 5,
    action:
      "Post your first 'From Truck to Store' story on Instagram/TikTok: document the journey, build anticipation",
  },
  {
    day: 6,
    action:
      "Contact NYC SBS for free business counseling and permit navigation: book your appointment online or call 888-SBS-4NYC",
  },
  {
    day: 7,
    action:
      "Draft your equipment list with priority tiers: Tier 1 (oven, prep tables, refrigeration), Tier 2 (dough mixer, POS), Tier 3 (decor, signage)",
  },
];

const ACCENT = "#D97706";

export default function PizzaShopGuide() {
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
        data-ocid="pizzashop-guide.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url('/assets/generated/pizza-shop-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Pizza size={14} />
              Pizza Shop Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              From Pizza Truck to Brick-and-Mortar: The Complete{" "}
              <span className="text-gradient-vibrant">Pizza Shop Playbook</span>
            </h1>

            <RotatingText />

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a complete, step-by-step playbook for moving your mobile
              pizza truck into a profitable brick-and-mortar store. Following it
              protects your revenue, saves you months of permit and equipment
              delays, and grows a loyal customer base from day one.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                "7-Day Truck-to-Store Plan",
                "Oven & Equipment Deep-Dive",
                "Slice Economics & Margin Analysis",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#FFF7ED] text-[#92400E] border border-[#FED7AA]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] opacity-70" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="pizzashop-guide.section_nav"
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
                data-ocid={`pizzashop-guide.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[#FFF7ED] text-[#D97706]"
                    : "text-zinc-500 hover:text-[#D97706]",
                ].join(" ")}
              >
                <s.icon size={14} />
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
            <PizzaShopImmediateWinsSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "Which day 1 action has the biggest impact?",
                  a: "The permit audit. Most mobile operators fail because they assume their mobile permits transfer. They do not. Knowing exactly what you need: health department, fire department, signage permits, occupancy certificates: saves 3-6 months of delays.",
                },
                {
                  q: "How quickly can I realistically open a store?",
                  a: "With proper planning: 4-6 months from lease signing to opening day. Without planning: 12-18 months. The difference is permit navigation, contractor scheduling, and equipment lead times. A wood-fired oven can have a 16-week lead time.",
                },
              ]}
            />

            {/* Section 2: Mobile-to-Brick Transition */}
            <section
              id="transition"
              data-ocid="pizzashop-guide.transition_section"
            >
              <PizzaShopTransitionSection />
            </section>

            {/* Section 3: Pizza Oven & Equipment */}
            <div id="ovens">
              <PremiumGate
                sectionTitle="Pizza Ovens & Equipment"
                teaserContent={
                  <p>
                    Wood-fired, gas, or conveyor? The oven you choose defines
                    your pizza, your labor costs, and your customer experience.
                    Unlock the complete equipment breakdown including ROI
                    analysis and vendor recommendations.
                  </p>
                }
              >
                <section data-ocid="pizzashop-guide.ovens_section">
                  <PizzaShopEquipmentSection />
                </section>
              </PremiumGate>
            </div>

            {/* Section 4: Menu Engineering */}
            <div id="menu">
              <PremiumGate
                sectionTitle="Pizza-Specific Menu Engineering"
                teaserContent={
                  <p>
                    Slice economics, topping margin analysis, and specialty
                    pizza strategy. Unlock the math that turns flour and cheese
                    into profit.
                  </p>
                }
              >
                <section data-ocid="pizzashop-guide.menu_section">
                  <PizzaShopMenuSection />
                </section>
              </PremiumGate>
            </div>

            {/* Section 5: Taffer Diagnostics */}
            <PizzaShopTafferSection />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the #1 Taffer metric for a new pizza shop?",
                  a: "Average ticket value. A pizza shop cannot survive on slice volume alone. If your average ticket is under $12, you are leaving 30-40% of revenue on the table. Train every staff member to ask: 'Would you like a drink with that?' and 'Any garlic knots or dessert today?'",
                },
                {
                  q: "How do I apply Taffer's 'three deep' rule to pizza?",
                  a: "Taffer's 'three deep' means having three revenue streams at all times. For pizza: (1) walk-in slice sales, (2) whole pie pickup/delivery, (3) catering or events. If any one stream drops, the other two carry you. Most failing shops rely on just one.",
                },
              ]}
            />

            {/* Section 6: Appreciated Branding */}
            <div id="branding">
              <PremiumGate
                sectionTitle="Appreciated Branding Deep-Dive"
                teaserContent={
                  <p>
                    Reid Holmes' Appreciated Branding methodology applied to
                    pizza shop identity, signage, and customer perception. Build
                    a brand people do not just recognize: they love.
                  </p>
                }
              >
                <section data-ocid="pizzashop-guide.branding_section">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245, 158, 11, 0.12)" }}
                    >
                      <Target size={20} style={{ color: "#D97706" }} />
                    </div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Appreciated Branding for Pizza Shops
                  </h2>
                  <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                    Your brand is not your logo. It is the feeling customers get
                    when they walk in, smell the dough, and see your oven. Reid
                    Holmes' framework helps you build that feeling
                    intentionally.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3">
                        The Four Pillars
                      </h3>
                      <ul className="space-y-3 text-[15px] text-[#71717A]">
                        <li>
                          <strong className="text-foreground">
                            Consistency:
                          </strong>{" "}
                          Every pie should taste the same on day 1 and day 100.
                          Your dough recipe is your brand promise.
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Authenticity:
                          </strong>{" "}
                          Tell your truck-to-store story everywhere. People root
                          for the underdog who made it.
                        </li>
                        <li>
                          <strong className="text-foreground">
                            Recognition:
                          </strong>{" "}
                          Your oven, your sauce smell, your box design: make
                          them unmistakable.
                        </li>
                        <li>
                          <strong className="text-foreground">Emotion:</strong>{" "}
                          Pizza is comfort food. Design every touchpoint to feel
                          like coming home.
                        </li>
                      </ul>
                    </div>
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3">
                        Signage & Visual Identity
                      </h3>
                      <ul className="space-y-2 text-[15px] text-[#71717A]">
                        <li>
                          Hand-painted sign over digital: artisan credibility
                        </li>
                        <li>Window decals showing your oven in action</li>
                        <li>
                          Menu board with real food photography, not stock
                        </li>
                        <li>Box design that customers photograph and share</li>
                        <li>Staff uniforms that match your brand colors</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </PremiumGate>
            </div>
            <BrandingCrossLink />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How do I make my pizza shop brand feel authentic vs. corporate?",
                  a: "Show the process, not just the product. Post dough prep at 6 AM. Share your sauce recipe's origin story. Introduce your team by name. Corporate brands hide the kitchen; authentic brands celebrate it. Your mobile truck story is your superpower: no chain can replicate that journey.",
                },
                {
                  q: "What is the most underrated branding element for pizza shops?",
                  a: "The box. A well-designed pizza box is a mobile billboard, a social media prop, and a customer keepsake. Invest in custom box design with your story, your social handles, and a QR code for reordering. The box outlasts the pizza by hours: sometimes days on a refrigerator.",
                },
              ]}
            />

            {/* Section 7: Women's Strategy */}
            <section
              id="womens-strategy"
              data-ocid="pizzashop-guide.womens_section"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <Venus size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Women's Strategy for Pizza Shops
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Women make 85% of household food purchasing decisions. A pizza
                shop that welcomes women wins families, groups, and repeat
                orders.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Safety & Comfort
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Well-lit entrance and parking area</li>
                    <li>Clear sightlines from street to counter</li>
                    <li>Clean, well-stocked restrooms (non-negotiable)</li>
                    <li>Female staff visible behind the counter</li>
                    <li>No aggressive or exclusionary decor</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Menu Appeal
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Salad and lighter options (not just pizza)</li>
                    <li>Gluten-free and vegan alternatives</li>
                    <li>Half-pie options for smaller groups</li>
                    <li>Family meal deals that feel like value</li>
                    <li>Fresh, visible ingredients (not hidden prep)</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Atmosphere
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Comfortable seating with back support</li>
                    <li>Conversational noise level (not sports-bar loud)</li>
                    <li>Clean, uncluttered tables and floors</li>
                    <li>Family-friendly without being child-only</li>
                    <li>Artisan vibe over sports-bar aesthetic</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Marketing
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Mom-focused social content (easy weeknight dinners)</li>
                    <li>Group ordering incentives for book clubs, teams</li>
                    <li>Loyalty program with family-friendly rewards</li>
                    <li>Partnerships with local parent groups</li>
                    <li>Catering packages for school events and fundraisers</li>
                  </ul>
                </div>
              </div>
            </section>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the #1 thing that makes women choose one pizza shop over another?",
                  a: "Cleanliness. Not just the dining area: the restroom, the counter, the staff uniforms. A 2024 hospitality study found that 73% of women rank restroom cleanliness as a top-3 factor in choosing a casual dining spot. It signals overall operational standards.",
                },
                {
                  q: "Should I market specifically to women or keep it neutral?",
                  a: "Market to families and groups, which naturally includes women as decision-makers. Avoid 'pinkwashing': women see through performative marketing. Instead, show real families, real groups, real diverse customers enjoying your pizza. Authentic representation beats targeted messaging.",
                },
              ]}
            />

            {/* Section 8: Atmosphere */}
            <section
              id="atmosphere"
              data-ocid="pizzashop-guide.atmosphere_section"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <Lightbulb size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Atmosphere & Design
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                The best pizza shops sell an experience, not just food. The oven
                is your stage. The seating is your theater. Design both
                intentionally.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Open Kitchen Layout
                  </h3>
                  <p className="text-[15px] text-[#71717A] mb-3">
                    Position your oven so customers see the dough toss, the
                    sauce spread, and the cheese melt. The open kitchen builds
                    trust, creates theater, and justifies premium pricing.
                  </p>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Oven visible within 5 seconds of entering</li>
                    <li>Prep counter as a performance stage</li>
                    <li>Clean, organized mise en place on display</li>
                    <li>Pizzaiolo uniform that signals professionalism</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Seating Flow
                  </h3>
                  <p className="text-[15px] text-[#71717A] mb-3">
                    Design for three customer modes: quick slice (5 min), casual
                    dine (30 min), and group gathering (60+ min). Each needs
                    different seating and spacing.
                  </p>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>High-top counters for quick slice customers</li>
                    <li>Banquette seating for families and groups</li>
                    <li>Communal table for solo diners and laptop users</li>
                    <li>Waiting area that does not block the entrance</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Lighting
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Warm white (2700K-3000K) over the dining area</li>
                    <li>Brighter task lighting over prep and counter</li>
                    <li>Accent lighting on the oven as focal point</li>
                    <li>Dimmer controls for lunch vs. dinner ambiance</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Music & Sound
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Volume under 70 dB for conversation comfort</li>
                    <li>Italian-American classics during lunch rush</li>
                    <li>Indie/alt during dinner for younger crowd</li>
                    <li>No sports audio unless it is a game-day event</li>
                  </ul>
                </div>
              </div>
            </section>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How much does atmosphere actually affect sales?",
                  a: "Hospitality research shows that warm lighting and comfortable seating increase average dwell time by 25-35%, which directly increases per-visit spend. A customer who stays 10 minutes longer orders dessert or a second drink 40% of the time. Atmosphere is not decoration: it is revenue engineering.",
                },
                {
                  q: "Should I design for Instagram or for comfort?",
                  a: "Both. The most Instagrammable spots are also the most comfortable: they just happen to photograph well. A beautiful oven, warm lighting, and artisan details look great on camera AND feel great in person. Design for real experience first; the social media content follows naturally.",
                },
              ]}
            />

            {/* Section 9: Community */}
            <section
              id="community"
              data-ocid="pizzashop-guide.community_section"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <Heart size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Community & Local Marketing
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Pizza is the ultimate community food. The shop that becomes a
                neighborhood institution outlasts every trend.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    School & Youth Partnerships
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Pizza fundraiser nights (20% back to school)</li>
                    <li>Sports team sponsorships with logo on jerseys</li>
                    <li>Student discount with valid school ID</li>
                    <li>Graduation party catering packages</li>
                    <li>Teacher appreciation week specials</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Late-Night Slice Culture
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Stay open until 2 AM on weekends (if zoning allows)</li>
                    <li>$2 slice special 11 PM-close</li>
                    <li>Partner with nearby bars for cross-promotion</li>
                    <li>Delivery to dorms and late-shift workers</li>
                    <li>Security presence for safety and order</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Neighborhood Events
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Monthly 'Meet the Maker' pizza-making demo</li>
                    <li>Annual block party with free slices for residents</li>
                    <li>Local artist showcase on your walls</li>
                    <li>Charity slice days (100% to local cause)</li>
                    <li>Neighborhood loyalty card (10th pie free)</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Sports & Team Culture
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Game-day specials during major sports events</li>
                    <li>Team catering with 15% group discount</li>
                    <li>Score prediction contests for free pies</li>
                    <li>Local team watch parties with big screen</li>
                    <li>Post-game victory celebration packages</li>
                  </ul>
                </div>
              </div>
            </section>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "What is the ROI on school fundraiser nights?",
                  a: "Low immediate profit, massive long-term return. A fundraiser night might only break even on food costs, but you gain 50-100 new families who now know your location, your quality, and your community values. The lifetime value of a family that orders twice a month exceeds $1,200/year. One fundraiser night can acquire 20-30 of those families.",
                },
                {
                  q: "How do I balance late-night crowd with family-friendly daytime?",
                  a: "Separate the experiences without separating the brand. Daytime: bright, family-focused, quick service. Nighttime: dimmer, music up, slice-focused. The same staff can pivot with a 30-minute transition. Post your late-night hours clearly so families know when to visit and when to avoid.",
                },
              ]}
            />

            {/* Section 10: Social Media */}
            <section
              id="social-media"
              data-ocid="pizzashop-guide.social_media_section"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <Share2 size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Social Media Strategy
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Pizza is the most photogenic food on earth. Your social media
                should make people hungry before they finish scrolling.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Instagram-Worthy Content
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Cheese pull shots (slow-motion video)</li>
                    <li>Oven fire and dough toss behind-the-scenes</li>
                    <li>Before/after of specialty monthly pizzas</li>
                    <li>Customer reaction shots (with permission)</li>
                    <li>Story highlights: Menu, Process, Reviews, Events</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    TikTok & Short-Form Video
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Dough-tossing tutorials and fails</li>
                    <li>"Day in the life of a pizza shop owner" series</li>
                    <li>Speed challenges: 60-second pie prep</li>
                    <li>Customer taste-test reactions</li>
                    <li>Truck-to-store transition documentary</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Local SEO & Reviews
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Claim and optimize Google Business Profile</li>
                    <li>Respond to every review within 24 hours</li>
                    <li>Post weekly updates with photos to GBP</li>
                    <li>Encourage reviews with table tent cards</li>
                    <li>Use location tags on every post</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Review Management
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Thank every positive review by name</li>
                    <li>Address negative reviews with solution, not defense</li>
                    <li>Share best reviews as Stories with gratitude</li>
                    <li>Train staff to mention reviews during service</li>
                    <li>Monthly review audit with team feedback</li>
                  </ul>
                </div>
              </div>
            </section>
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "How often should I post on social media?",
                  a: "Minimum 3 posts per week: Monday (menu feature or weekly special), Wednesday (behind-the-scenes process content), Friday (weekend preview or customer feature). Batch your content creation on Sunday: film 3-4 videos, take 10-15 photos, write captions in one 90-minute session.",
                },
                {
                  q: "What is the best platform for a pizza shop?",
                  a: "Instagram for food photography and local discovery. TikTok for viral reach and younger demographics. Google Business Profile for local search dominance: this is where hungry people actually find you. Facebook is declining for under-40 audiences but still useful for event promotion and parent groups.",
                },
              ]}
            />

            {/* Section 11: Marketing */}
            <section
              id="marketing"
              data-ocid="pizzashop-guide.marketing_section"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <TrendingUp size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Marketing & Growth
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Beyond social media: the marketing tactics that drive
                consistent, measurable growth for pizza shops.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Grand Opening Strategy
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>
                      Soft opening: friends, family, and truck regulars only
                    </li>
                    <li>Free slice for first 100 customers on opening day</li>
                    <li>Local food blogger and influencer invitations</li>
                    <li>Press release to neighborhood blogs and papers</li>
                    <li>Grand opening week: 20% off all whole pies</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Loyalty & Retention
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Digital punch card: 10th slice free</li>
                    <li>Birthday free slice with email capture</li>
                    <li>Family meal deal: 2 pies + salad + drinks for $45</li>
                    <li>"Pizza of the Month Club" subscription</li>
                    <li>Referral program: $5 credit for both parties</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Catering & B2B
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Office lunch packages (10-50 people)</li>
                    <li>School event catering with healthy options</li>
                    <li>Party room rental for birthdays and celebrations</li>
                    <li>Corporate account discounts for repeat orders</li>
                    <li>Wedding and event pizza bars (trending in 2026)</li>
                  </ul>
                </div>
                <div className="card-guide">
                  <h3 className="font-semibold text-foreground mb-3">
                    Delivery & Digital
                  </h3>
                  <ul className="space-y-2 text-[15px] text-[#71717A]">
                    <li>Own your ordering: website first, apps second</li>
                    <li>
                      Third-party delivery (DoorDash, Uber Eats) for reach
                    </li>
                    <li>Mark up app menu prices 15-20% to cover fees</li>
                    <li>SMS marketing for flash specials and weather deals</li>
                    <li>Email list for monthly newsletter with coupons</li>
                  </ul>
                </div>
              </div>
            </section>
            <RecommendedToolsBox />
            <SectionQA
              accentColor={ACCENT}
              items={[
                {
                  q: "When should I start paid advertising?",
                  a: "After your organic social is consistently getting engagement (20+ saves/shares per post). Then put $15-25/day behind your top-performing content with hyper-local targeting (3-mile radius). Never run paid ads before organic is working: you will amplify content that does not convert.",
                },
                {
                  q: "What is the best customer acquisition channel for a new pizza shop?",
                  a: "Word of mouth from your existing truck customers. Announce your store opening to your truck's email list and social followers 6 weeks in advance. Offer them an exclusive 'founding customer' discount. Your mobile regulars are your cheapest, highest-converting acquisition channel.",
                },
              ]}
            />

            {/* Section 12: Rescue Checklist */}
            <div id="checklist">
              <PremiumGate
                sectionTitle="Rescue Checklist"
                teaserContent={
                  <p>
                    The 30-day turnaround plan for struggling pizza shops. Cost
                    cutting, menu reboot, staff retraining, and customer
                    win-back: the complete rescue framework.
                  </p>
                }
              >
                <section data-ocid="pizzashop-guide.checklist_section">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245, 158, 11, 0.12)" }}
                    >
                      <ClipboardCheck size={20} style={{ color: "#D97706" }} />
                    </div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    30-Day Rescue Checklist
                  </h2>
                  <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                    For pizza shops in trouble. Week 1: stop the bleeding. Week
                    2: fix the fundamentals. Week 3: relaunch. Week 4: stabilize
                    and grow.
                  </p>

                  <div className="space-y-6">
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#F59E0B]/15 text-[#D97706] text-xs font-bold flex items-center justify-center">
                          1
                        </span>
                        Week 1: Stop the Bleeding
                      </h3>
                      <ul className="space-y-2 text-[15px] text-[#71717A]">
                        <li>Audit all expenses: cut anything non-essential</li>
                        <li>Reduce menu to top 8 sellers (80/20 rule)</li>
                        <li>Renegotiate with suppliers or find alternatives</li>
                        <li>Implement daily cash flow tracking</li>
                        <li>
                          Talk to your landlord about rent relief or deferment
                        </li>
                      </ul>
                    </div>
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#F59E0B]/15 text-[#D97706] text-xs font-bold flex items-center justify-center">
                          2
                        </span>
                        Week 2: Fix the Fundamentals
                      </h3>
                      <ul className="space-y-2 text-[15px] text-[#71717A]">
                        <li>Retrain staff on portion control and speed</li>
                        <li>Clean and repair every visible surface</li>
                        <li>
                          Audit food cost per item: adjust pricing if needed
                        </li>
                        <li>Fix oven temperature consistency issues</li>
                        <li>Implement pre-shift huddles with clear goals</li>
                      </ul>
                    </div>
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#F59E0B]/15 text-[#D97706] text-xs font-bold flex items-center justify-center">
                          3
                        </span>
                        Week 3: Relaunch
                      </h3>
                      <ul className="space-y-2 text-[15px] text-[#71717A]">
                        <li>Announce "We Are Back" campaign on all channels</li>
                        <li>Offer "Comeback Special": 25% off for one week</li>
                        <li>
                          Reach out to lost customers with personal messages
                        </li>
                        <li>Host a free slice hour for first 50 customers</li>
                        <li>Invite local food bloggers and reviewers</li>
                      </ul>
                    </div>
                    <div className="card-guide">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#F59E0B]/15 text-[#D97706] text-xs font-bold flex items-center justify-center">
                          4
                        </span>
                        Week 4: Stabilize & Grow
                      </h3>
                      <ul className="space-y-2 text-[15px] text-[#71717A]">
                        <li>Measure daily sales vs. pre-rescue baseline</li>
                        <li>
                          Reintroduce 2-3 new menu items based on customer
                          feedback
                        </li>
                        <li>
                          Launch loyalty program to lock in returning customers
                        </li>
                        <li>Schedule monthly financial review going forward</li>
                        <li>Document lessons learned for future prevention</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </PremiumGate>
            </div>

            {/* Section 13: Q&A */}
            <section id="qa" data-ocid="pizzashop-guide.qa_section">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <MessageCircle size={20} style={{ color: "#D97706" }} />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Pizza Shop Q&amp;A
              </h2>
              <p className="text-[#71717A] text-lg mb-8 max-w-2xl">
                Real answers to the questions pizza shop owners ask most.
              </p>

              <div className="space-y-4">
                {[
                  {
                    q: "How much does it cost to open a pizza shop from a truck?",
                    a: "$75,000-$150,000 for a 1,500 sq ft slice-and-pie shop. Breakdown: security deposit and first month rent ($15-25K), equipment ($35-65K), build-out and permits ($15-30K), opening inventory and marketing ($5-10K), and 3-month operating reserve ($15-30K).",
                  },
                  {
                    q: "Should I offer delivery or focus on pickup and dine-in?",
                    a: "Start with pickup and dine-in. Delivery adds complexity (drivers, insurance, bags) and thin margins due to app fees. Once you are profitable on in-store sales, add delivery through third-party apps with marked-up menu prices. Never launch delivery before your in-store operation is flawless.",
                  },
                  {
                    q: "What is the ideal labor cost percentage for a pizza shop?",
                    a: "22-28% of gross sales. A slice-focused shop can run leaner (22-24%) because of simpler service. A full dine-in shop needs more staff (26-28%). If you are over 30%, audit scheduling: most pizza shops overstaff during slow periods and understaff during rushes.",
                  },
                  {
                    q: "How do I compete with the big chains?",
                    a: "Do not compete on price or convenience. Compete on quality, story, and community. Chains cannot match your truck origin story, your hand-tossed dough, or your neighborhood relationships. Emphasize what they cannot replicate: authenticity, customization, and local connection.",
                  },
                  {
                    q: "What is the #1 mistake new pizza shop owners make?",
                    a: "Trying to be everything to everyone. A menu with 25+ items confuses customers, slows service, and increases waste. Start with 8-10 excellent items. Master them. Expand only when customers ask for specific items repeatedly. Focus beats breadth every time.",
                  },
                  {
                    q: "How do I know if my location is right?",
                    a: "Count foot traffic during lunch (11:30 AM-1:30 PM) and dinner (5:30-7:30 PM) on Tuesday, Thursday, and Saturday. Target 150+ passersby per hour during peak. Check competitor density: one pizza shop per 8,000 residents is healthy. Verify parking availability for pickup customers.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl border border-border bg-card p-5"
                    data-ocid={`pizzashop-guide.qa_item.${item.q.slice(0, 20)}`}
                  >
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <span className="text-[#D97706] font-bold shrink-0">
                        Q:
                      </span>
                      {item.q}
                    </h3>
                    <p className="text-[15px] text-[#71717A] leading-relaxed flex items-start gap-2">
                      <span className="text-[#D97706] font-bold shrink-0">
                        A:
                      </span>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <GuideAuthorFooter />
          </>
        )}

        {/* CTA Footer */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.06) 100%)",
            border: "1px solid rgba(245, 158, 11, 0.2)",
          }}
          data-ocid="pizzashop-guide.cta_section"
        >
          <BarChart3
            size={36}
            className="mx-auto mb-4"
            style={{ color: "#D97706" }}
          />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Open Your Pizza Shop?
          </h2>
          <p className="text-[#71717A] mb-6 max-w-xl mx-auto">
            Start with Day 1 of the Quick Start plan. Audit your permits today:
            the rest follows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                setActiveTab("quickstart");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="pizzashop-guide.cta.quickstart_button"
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
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
