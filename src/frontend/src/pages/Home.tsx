import { PersonaQuiz } from "@/components/PersonaQuiz";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  Ban,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Lock,
  Megaphone,
  Palette,
  Sparkles,
  Star,
  Users,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BUSINESS_TYPES = [
  {
    id: "deli",
    emoji: "🥪",
    label: "Deli",
    topics: ["Google Maps", "Sandwich Specials", "Branding"],
    to: "/deli-guide",
  },
  {
    id: "salon",
    emoji: "💇",
    label: "Salon",
    topics: ["Social Media", "Client Retention", "Pricing Strategy"],
    to: "/salon-guide",
  },
  {
    id: "restaurant",
    emoji: "🍽️",
    label: "Restaurant",
    topics: ["Menu Engineering", "Google Reviews", "Food Waste"],
    to: "/restaurant-guide",
  },
  {
    id: "pool-hall",
    emoji: "🎱",
    label: "Pool Hall",
    topics: ["Inclusive Events", "Atmosphere", "Women's Strategy"],
    to: "/pool-hall-guide",
  },
  {
    id: "fitness-studio",
    emoji: "🏋️",
    label: "Fitness Studio",
    topics: ["Member Retention", "Attracting Women", "Viral Classes"],
    to: "/fitness-studio-guide",
  },
  {
    id: "bakery",
    emoji: "🥐",
    label: "Bakery & Café",
    topics: ["Viral Menu", "Display Case", "Community Events"],
    to: "/bakery-guide",
  },
  {
    id: "retail",
    emoji: "🛍️",
    label: "Retail",
    topics: ["Store Experience", "Promotions", "Loyalty Programs"],
    to: "/retail-guide",
  },
  {
    id: "cleaning-service",
    emoji: "🧹",
    label: "Cleaning Service",
    topics: ["Client Systems", "Attracting Women", "Pricing Strategy"],
    to: "/cleaning-service",
  },
  {
    id: "online-schooling",
    emoji: "🎓",
    label: "Online Schooling",
    topics: [
      "Choosing a Format",
      "Building Curriculum",
      "Launch Checklist",
      "FAQ",
    ],
    to: "/online-schooling",
  },
  {
    id: "boutique",
    emoji: "👗",
    label: "Boutique Clothing Store",
    topics: ["Trend Merchandising", "Loyal Community", "Women-First Strategy"],
    to: "/boutique-guide",
  },
  {
    id: "pizza-shop",
    emoji: "🍕",
    label: "Pizza Shop",
    topics: ["Oven & Equipment", "Menu Engineering", "Mobile-to-Brick"],
    to: "/pizza-shop-guide",
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Maria G.",
    role: "Brooklyn Deli Owner",
    initials: "MG",
    quote:
      "I updated my Google Maps listing using the Deli Guide steps. Within 3 weeks I had 40% more map views and 15 new walk-in customers.",
    stars: 5,
  },
  {
    name: "Keisha W.",
    role: "Harlem Salon Owner",
    initials: "KW",
    quote:
      "The Salon Guide gave me a full year of social media content ideas. My Instagram grew 60% in 90 days.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    role: "Bronx Restaurant Owner",
    initials: "CM",
    quote:
      "I used the Jon Taffer section and realized I was leaving $3,000/month on the table in food waste alone. Fixed in 2 weeks.",
    stars: 5,
  },
];

const WHAT_WE_OFFER = [
  {
    emoji: "📚",
    title: "Industry Guides",
    description:
      "In-depth playbooks for delis, salons, restaurants, and retail. Built with real research and real case studies.",
    link: null as string | null,
    linkLabel: null as string | null,
  },
  {
    emoji: "⚡",
    title: "Actionable Tools",
    description:
      "Checklists, Q&A, and 7-day action plans you can start today. No fluff, just steps that move the needle.",
    link: null as string | null,
    linkLabel: null as string | null,
  },
  {
    emoji: "✍️",
    title: "About Christian Lawson",
    description:
      "Business advisor and site creator. Guides feature Reid Holmes' Appreciated Branding framework, backed by real research and real case studies.",
    link: "/about" as string | null,
    linkLabel: "About the Creator →" as string | null,
  },
];

const STATS = [
  { value: "500+", label: "Business owners helped" },
  { value: "10", label: "Industry guides" },
  { value: "100%", label: "Free to access" },
  { value: "Weekly", label: "Updated content" },
];

const TRUST_BAR_ITEMS = [
  { icon: Check, label: "Free Forever" },
  { icon: Lock, label: "Your Data, Your Control" },
  { icon: CreditCard, label: "No Credit Card Required", withBan: true },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "AI Business Guides",
    description:
      "Find the exact guide for your business type. No more guessing.",
    to: "/guides",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks with step-by-step training workflows.",
    to: "/guides",
  },
  {
    icon: Activity,
    title: "Website Health Monitoring",
    description:
      "Check whether the tools your business depends on are up and running.",
    to: "/cloud-monitoring",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Learn to plan and schedule posts with a clear 30-day action plan.",
    to: "/social-media-guide",
  },
  {
    icon: Building2,
    title: "NYC Small Business Resources",
    description: "Find free courses, support centers, and programs near you.",
    to: "/nyc-resources",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    description:
      "Build your brand playbook with interactive worksheets. Skip the consultant.",
    to: "/branding",
  },
  {
    icon: Briefcase,
    title: "AI Job Guides",
    description:
      "Detailed AI adoption guides for plumbers, restaurants, accountants, dentists, real estate, contractors, law firms, and insurance agents.",
    to: "/ai-job-guides",
  },
];

const SOCIAL_PROOF_BADGES = [
  "11+ Business Guides Curated",
  "Built on Open Infrastructure",
  "Zero Data Monetization",
];

const MARQUEE_ITEMS = [
  "✓ 500+ Business Owners",
  "★ Trusted by NYC Delis",
  "★ Salon Pros",
  "★ Restaurant Owners",
  "★ Retailers",
  "★ Online Entrepreneurs",
  "✓ Jon Taffer Principles",
  "✓ Appreciated Branding Framework",
];

const ALL_GUIDES = [
  {
    id: "deli",
    emoji: "🥪",
    title: "NYC Deli Guide",
    description:
      "Google Maps, Sandwich Specials & Branding for neighborhood delis.",
    to: "/deli-guide",
  },
  {
    id: "salon",
    emoji: "💇",
    title: "Salon Guide",
    description:
      "Social Media, Client Retention & Pricing Strategy for beauty pros.",
    to: "/salon-guide",
  },
  {
    id: "restaurant",
    emoji: "🍽️",
    title: "Restaurant Guide",
    description: "Menu Engineering, Google Reviews & Food Waste tactics.",
    to: "/restaurant-guide",
  },
  {
    id: "retail",
    emoji: "🛍️",
    title: "Retail Guide",
    description: "Store Experience, Promotions & Loyalty Programs.",
    to: "/retail-guide",
  },
  {
    id: "pool-hall",
    emoji: "🎱",
    title: "Pool Hall Guide",
    description:
      "Create an inclusive, welcoming billiards venue that attracts women and builds community.",
    to: "/pool-hall-guide",
  },
  {
    id: "fitness-studio",
    emoji: "🏋️",
    title: "Fitness Studio Guide",
    description:
      "Member retention, attracting women, and viral class strategies for fitness studios.",
    to: "/fitness-studio-guide",
  },
  {
    id: "bakery",
    emoji: "🥐",
    title: "Bakery & Café Guide",
    description:
      "Viral menu items, display case mastery, and community events for bakeries and cafes.",
    to: "/bakery-guide",
  },
  {
    id: "cleaning-service",
    emoji: "🧹",
    title: "Cleaning Service Guide",
    description: "Launch or grow your cleaning business with a proven system.",
    to: "/cleaning-service",
  },
  {
    id: "online-schooling",
    emoji: "🎓",
    title: "Online Schooling Guide",
    description:
      "Compare self-paced, live cohort, and one-to-one formats with a 28-step launch checklist and FAQ.",
    to: "/online-schooling",
  },
  {
    id: "boutique",
    emoji: "👗",
    title: "Boutique Clothing Store Guide",
    description: "Open or grow a fashion boutique that builds loyal customers.",
    to: "/boutique-guide",
  },
  {
    id: "pizza-shop",
    emoji: "🍕",
    title: "Pizza Shop Guide",
    description:
      "The complete playbook for mobile pizza truck and oven owners transitioning to a thriving brick-and-mortar pizza shop.",
    to: "/pizza-shop-guide",
  },
] as const;

export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // Show the sticky CTA only after the hero leaves the viewport, and hide it
  // once the footer (data-home-footer) enters the viewport so it does not
  // overlap the footer content.
  useEffect(() => {
    const hero = heroRef.current;
    const footer = document.querySelector("[data-home-footer]");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setShowSticky(true);
        } else {
          setShowSticky(false);
        }
      },
      { threshold: 0 },
    );
    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | null = null;
    if (footer) {
      footerObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setShowSticky(false);
          } else if (entry.boundingClientRect.top > 0) {
            // Footer is below the viewport, so re-evaluate based on hero.
            const heroRect = hero.getBoundingClientRect();
            setShowSticky(heroRect.bottom < 0);
          }
        },
        { threshold: 0 },
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      if (footerObserver) footerObserver.disconnect();
    };
  }, []);

  return (
    <div data-ocid="home.page" className="relative mt-0">
      {/* HERO */}
      <section
        ref={heroRef}
        data-ocid="home.hero.section"
        className="relative bg-hero-vibrant pt-0 pb-24 md:pt-0 md:pb-32 px-2 sm:px-4 text-center"
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-women-business.dim_1200x600.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 pointer-events-none"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto relative w-full max-w-none"
        >
          <div className="inline-flex items-center gap-2 badge-primary-vibrant rounded-full px-4 py-1.5 text-[15px] font-semibold mb-4">
            <Sparkles size={14} />
            AI-Powered Business Guidance
          </div>
          <h1 className="heading-hero mb-5">
            <span className="text-gradient-vibrant">
              Free AI Guidance for Small Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-readable leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
            People First, Machines Second.
          </p>

          {/* Business type selector */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/15 shadow-elevated max-w-xl mx-auto mb-8">
            <p className="text-[15px] font-semibold text-foreground mb-4 font-display">
              What is your business type?
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {BUSINESS_TYPES.map((bt) => (
                <button
                  key={bt.id}
                  type="button"
                  data-ocid={`home.business_type.${bt.id}`}
                  onClick={() => {
                    navigate({ to: bt.to });
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 text-[15px] font-medium transition-smooth border-border bg-background hover:border-primary/50 hover:bg-primary/5 text-foreground"
                >
                  <span>{bt.emoji}</span>
                  {bt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Primary + Secondary CTA */}
          <div className="mt-6 mb-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              size="lg"
              data-ocid="home.hero.cta.primary_button"
              className="button-cta font-semibold text-base px-8"
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
                Explore All Guides
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="home.hero.cta.secondary_button"
              className="button-secondary-outline font-semibold text-base px-8"
            >
              <Link to="/start-here" onClick={() => window.scrollTo(0, 0)}>
                Start Here
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section
        data-ocid="home.trust_bar.section"
        aria-label="Trust signals"
        className="bg-muted/40 border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {TRUST_BAR_ITEMS.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground"
            >
              {item.withBan ? (
                <span className="relative inline-flex" aria-hidden="true">
                  <CreditCard size={18} className="text-primary-text" />
                  <Ban
                    size={18}
                    className="absolute inset-0 text-primary-text"
                    strokeWidth={2.5}
                  />
                </span>
              ) : (
                <item.icon
                  size={18}
                  className="text-primary-text"
                  aria-hidden="true"
                />
              )}
              {item.label}
            </span>
          ))}
        </div>
      </section>
      {/* PERSONA QUIZ */}
      <section className="py-20 md:py-24">
        <PersonaQuiz />
      </section>

      {/* TRUST MARQUEE */}
      <div
        data-ocid="home.marquee.section"
        className="overflow-hidden border-y py-5 bg-accent-neutral-soft border-accent-neutral-border"
      >
        <div className="animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: static marquee items
              key={i}
              className="inline-flex items-center gap-2 px-6 text-[15px] font-semibold whitespace-nowrap text-accent-neutral"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURE GRID */}
      <section
        data-ocid="home.features.section"
        className="bg-muted/30 border-y border-primary/10 py-24 md:py-32 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Everything Your Business Needs
            </h2>
            <p className="text-muted-readable max-w-lg mx-auto">
              Tools, guides, and frameworks, all in one place.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => {
              const isGuides = feat.to === "/guides";
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                >
                  {isGuides ? (
                    <Link
                      to="/guides"
                      search={{
                        topic: undefined,
                        businessType: undefined,
                        keyword: undefined,
                      }}
                      data-ocid={`home.feature.${i + 1}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="card-vibrant flex flex-col gap-4 p-6 h-full group block hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10">
                        <feat.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                          {feat.title}
                        </h3>
                        <p className="text-[15px] text-muted-readable leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      to={feat.to}
                      data-ocid={`home.feature.${i + 1}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="card-vibrant flex flex-col gap-4 p-6 h-full group block hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10">
                        <feat.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                          {feat.title}
                        </h3>
                        <p className="text-[15px] text-muted-readable leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        data-ocid="home.social_proof.section"
        className="bg-background py-24 md:py-32 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Built by Someone Who Cuts Costs for a Living
            </h2>
            <p className="text-muted-readable text-lg leading-relaxed mb-10 text-balance">
              AISmallBiz was created by a business architect with over a decade
              of experience in cost optimization, predictive analytics, and
              efficiency systems. The same principles used to save large
              organizations millions are now free for small businesses.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SOCIAL_PROOF_BADGES.map((badge) => (
                <span
                  key={badge}
                  data-ocid="home.social_proof.badge"
                  className="badge-primary-vibrant"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        data-ocid="home.testimonials.section"
        className="bg-muted/30 border-y border-primary/10 py-24 md:py-28 px-4"
        aria-label="Customer testimonials"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Real Business Owners. Real Results.
            </h2>
            <p className="text-muted-readable">Stories from our community.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`home.testimonial.item.${i + 1}`}
                className="bg-primary rounded-2xl p-6 flex flex-col gap-4 shadow-elevated"
              >
                <div className="text-3xl text-primary-foreground/40 font-display leading-none select-none">
                  &ldquo;
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star
                      // biome-ignore lint/suspicious/noArrayIndexKey: static star count
                      key={s}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-primary-foreground text-[15px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-primary-foreground/15">
                  <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-[15px] text-primary-foreground">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-primary-foreground">
                      {t.name}
                    </p>
                    <p className="text-[15px] text-primary-foreground/70">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS AISMALLBIZ */}
      <section
        data-ocid="home.about.section"
        className="bg-background py-24 md:py-32 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              What Is AISmallBiz™?
            </h2>
            <p className="text-muted-readable max-w-lg mx-auto">
              Everything you need to run, grow, and brand your business, without
              the consultant price tag.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {WHAT_WE_OFFER.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`home.about.item.${i + 1}`}
                className="card-guide flex flex-col gap-3"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-readable leading-relaxed flex-1">
                  {item.description}
                </p>
                {item.link && item.linkLabel && (
                  <Link
                    to={item.link as "/about"}
                    className="text-[15px] font-semibold text-primary hover:underline underline-offset-4 mt-1"
                    onClick={() => window.scrollTo(0, 0)}
                    data-ocid="home.about.creator_link"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND YOUR GUIDE */}
      <section
        data-ocid="home.find_guide.section"
        className="bg-muted/30 border-y border-primary/10 py-24 md:py-28 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Find Your Guide
            </h2>
            <p className="text-muted-readable">
              Pick your industry. Get targeted strategies.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BUSINESS_TYPES.map((bt, i) => (
              <motion.div
                key={bt.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={bt.to}
                  data-ocid={`home.find_guide.${bt.id}_card`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="card-guide flex flex-col items-center text-center gap-2 p-5 h-full hover:border-primary/40 group block"
                >
                  <span className="text-3xl mb-1" aria-hidden="true">
                    {bt.emoji}
                  </span>
                  <h3 className="font-display font-semibold text-[15px] text-foreground group-hover:text-primary transition-colors duration-200">
                    {bt.label}
                  </h3>
                  <ul className="space-y-0.5 mt-1">
                    {bt.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-[15px] text-muted-readable"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL GUIDES */}
      <section
        data-ocid="home.all_guides.section"
        className="bg-background py-24 md:py-32 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Browse All Guides
            </h2>
            <p className="text-muted-readable max-w-lg mx-auto">
              Click any guide to dive straight in. No signup required.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ALL_GUIDES.map((guide, i) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Link
                  to={guide.to}
                  data-ocid={`home.all_guides.${guide.id}_card`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="card-guide flex flex-col gap-4 p-6 h-full group block hover:border-primary/50 hover:shadow-neutral transition-all duration-300"
                >
                  <span className="text-4xl" aria-hidden="true">
                    {guide.emoji}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-[15px] text-muted-readable leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-[15px] font-semibold text-primary mt-1"
                    aria-hidden="true"
                  >
                    Read guide →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        data-ocid="home.stats.section"
        className="bg-stats-vibrant py-16 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-1.5 text-primary-foreground text-center"
            >
              <span className="font-display font-bold text-4xl leading-none">
                {stat.value}
              </span>
              <span className="text-[15px] opacity-80 mt-0.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        data-ocid="home.cta.section"
        className="bg-gradient-premium py-24 md:py-32 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent-foreground mb-6">
            <Sparkles size={30} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-readable text-lg leading-relaxed mb-8 text-balance">
            Sign in to get AI-powered business and technology updates,
            personalized guides, and industry-specific recommendations, all
            tailored to your business type and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              data-ocid="home.cta.signup.primary_button"
              className="font-semibold text-base px-8"
            >
              <Link
                to={isAuthenticated ? "/dashboard" : "/onboarding"}
                onClick={() => window.scrollTo(0, 0)}
              >
                {isAuthenticated
                  ? "Go to My Dashboard"
                  : "Get Free Business Updates"}
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              data-ocid="home.cta.personas.secondary_button"
              className="font-semibold text-base px-8 text-primary hover:bg-primary/5"
            >
              <Link to="/personas" onClick={() => window.scrollTo(0, 0)}>
                <Users size={16} className="mr-2" />
                See Owner Journeys
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              data-ocid="home.cta.browse.secondary_button"
              className="font-semibold text-base px-8 text-primary hover:bg-primary/5"
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
                <ExternalLink size={16} className="mr-2" />
                Explore Guides First
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-8">
            {["Free to use", "No credit card needed", "Private & secure"].map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-[15px] text-muted-readable"
                >
                  <CheckCircle2
                    size={14}
                    className="text-success flex-shrink-0"
                  />
                  {badge}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </section>

      {/* STICKY CTA */}
      {showSticky && (
        <div
          data-ocid="home.sticky_cta.section"
          className="fixed inset-x-0 bottom-0 z-40 pointer-events-none"
          aria-label="Quick navigation"
        >
          {/* Desktop: bottom-right pill */}
          <div className="hidden md:flex justify-end pr-6 pb-6">
            <Button
              asChild
              size="lg"
              data-ocid="home.sticky_cta.primary_button"
              className="button-cta rounded-full shadow-premium pointer-events-auto font-semibold text-base px-6"
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
                Explore All Guides
              </Link>
            </Button>
          </div>
          {/* Mobile: full-width bar */}
          <div className="md:hidden pointer-events-auto">
            <Button
              asChild
              size="lg"
              data-ocid="home.sticky_cta.primary_button"
              className="button-cta w-full rounded-none shadow-premium font-semibold text-base h-14"
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
                Explore All Guides
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
