import { BackToTop } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { GuideTabToggle } from "@/components/GuideTabToggle";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickStartTab } from "@/components/QuickStartTab";
import { RecommendedToolsBox } from "@/components/RecommendedToolsBox";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  DollarSign,
  ExternalLink,
  FileText,
  Heart,
  Lightbulb,
  Rocket,
  Scale,
  Share2,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";
import { StartBizSocialMediaSection } from "../components/retail/StartBizSocialMediaSection";

const SECTIONS = [
  { id: "your-idea", label: "Your Idea", icon: Lightbulb },
  { id: "business-structure", label: "Business Structure", icon: Building2 },
  { id: "register-name", label: "Register Your Name", icon: FileText },
  {
    id: "government-paperwork",
    label: "Government Paperwork",
    icon: ClipboardList,
  },
  { id: "licenses-permits", label: "Licenses & Permits", icon: Shield },
  { id: "banking-finances", label: "Banking & Finances", icon: DollarSign },
  {
    id: "when-you-need-a-lawyer",
    label: "When You Need a Lawyer",
    icon: Scale,
  },
  { id: "women-organizations", label: "Women's Organizations", icon: Heart },
  { id: "opening-day", label: "Opening Day Checklist", icon: Star },
  { id: "social-media", label: "Social Media", icon: Share2 },
];

const QUICK_START_DAYS = [
  {
    day: 1,
    action:
      "Write your business idea in one sentence. Identify your target customer.",
  },
  {
    day: 2,
    action:
      "Research if your business idea already exists locally. Check Google Maps and Yelp.",
  },
  {
    day: 3,
    action:
      "Choose your business structure (most beginners: LLC or sole proprietor: see Section 2 for guidance).",
  },
  {
    day: 4,
    action:
      "Search your state's business name database to confirm your name is available.",
  },
  {
    day: 5,
    action:
      "Apply for your EIN (free at IRS.gov, takes 15 minutes online). You need it even if you have no employees.",
  },
  {
    day: 6,
    action:
      "Open a separate business bank account. Never mix personal and business money.",
  },
  {
    day: 7,
    action:
      "Make a list of every license and permit your business type requires. Start the longest application today.",
  },
];

const PAPERWORK_TABLE = [
  { doc: "EIN", where: "IRS.gov", cost: "Free", time: "15 min online" },
  {
    doc: "LLC Formation",
    where: "Secretary of State",
    cost: "$50-$500",
    time: "1-4 weeks",
  },
  {
    doc: "DBA / Trade Name",
    where: "County Clerk",
    cost: "$10-$50",
    time: "Same day",
  },
  {
    doc: "Sales Tax Permit",
    where: "State Revenue Dept",
    cost: "Free",
    time: "1-2 weeks",
  },
  {
    doc: "Business License",
    where: "City / County",
    cost: "$50-$400/yr",
    time: "1-4 weeks",
  },
  {
    doc: "Annual Report",
    where: "Secretary of State",
    cost: "$25-$500/yr",
    time: "Ongoing",
  },
];

const WOMEN_ORGS = [
  {
    name: "SCORE",
    url: "https://score.org",
    tagline: "Free mentoring from retired executives. 100% free, nationwide.",
    details:
      "One-on-one mentoring, workshops, templates, and online courses. 10,000+ volunteer mentors across the US.",
    badge: "Free",
  },
  {
    name: "Women's Business Centers (WBC)",
    url: "https://sba.gov/local-assistance/find/?type=Women%27s+Business+Center",
    tagline: "SBA-funded. Over 100 centers nationwide.",
    details:
      "Free and low-cost training, counseling, networking, and access to capital. Find your nearest center via the SBA website.",
    badge: "Free / Low-cost",
  },
  {
    name: "NAWBO",
    url: "https://nawbo.org",
    tagline: "National Association of Women Business Owners.",
    details:
      "Advocacy, networking, and education. Local chapters in most major cities: great for contracts, referrals, and community.",
    badge: "Membership",
  },
  {
    name: "Dress for Success",
    url: "https://dressforsuccess.org",
    tagline: "Professional attire and confidence-building programs.",
    details:
      "Free professional clothing and career development for women entering or growing in the workforce.",
    badge: "Free",
  },
  {
    name: "Ladies Who Launch",
    url: "https://ladieswholaunch.com",
    tagline: "Community and resources for women entrepreneurs.",
    details:
      "Bootcamps, workshops, and peer networks for women-owned startups. Strong community for early-stage founders.",
    badge: "Community",
  },
];

const OPENING_CHECKLIST = [
  "Business structure chosen and filed",
  "EIN obtained from IRS.gov (free)",
  "Business bank account opened",
  "All required licenses and permits in hand",
  "Business insurance purchased (general liability at minimum)",
  "Website or social media presence set up",
  "Pricing finalized",
  "Payment method set up (Square, PayPal, Stripe, or cash drawer)",
  "Basic bookkeeping system in place",
  "Emergency fund: 3 months of operating costs saved",
  "Told your network you are open (post on social media, text friends)",
];

const ACCENT = "#475569";

function Callout({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "warning" | "tip";
}) {
  const styles = {
    default: {
      wrapper:
        "bg-accent-neutral-soft dark:bg-accent-neutral-soft border-l-accent-neutral-border",
      text: "text-accent-neutral",
    },
    warning: {
      wrapper: "bg-amber-50 dark:bg-amber-950/30 border-l-amber-500",
      text: "text-amber-900 dark:text-amber-100",
    },
    tip: {
      wrapper: "bg-emerald-50 dark:bg-emerald-950/30 border-l-emerald-500",
      text: "text-emerald-900 dark:text-emerald-100",
    },
  };
  const s = styles[variant];
  return (
    <div
      className={`border-l-4 ${s.wrapper} rounded-r-xl px-5 py-4 text-[15px] ${s.text} leading-relaxed`}
    >
      {children}
    </div>
  );
}

export default function StartYourBusinessGuide() {
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
      const offset = 88;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestId: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 150) {
          const dist = Math.abs(top - 150);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = section.id;
          }
        }
      }
      if (closestId !== null) {
        setActiveSection(closestId);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTopSections = SECTIONS.map((s) => ({ id: s.id, label: s.label }));

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={backToTopSections} />
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="start-business.hero_section"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(71,85,105,0.6) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(100,116,139,0.5) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Rocket size={12} />
              Beginner&rsquo;s Complete Guide
            </span>

            <h1 className="heading-hero text-foreground">
              Start Your Business:{" "}
              <span className="text-gradient-vibrant">
                From Idea to Opening Day
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable">
              You get a clear, step-by-step plan that takes you from idea to
              opening day without guesswork. Following it saves you weeks of
              wasted time, protects your personal money from business mistakes,
              and helps you open your doors ready to serve paying customers.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "Plain English, No Jargon", id: "your-idea" },
                {
                  label: "All Government Paperwork",
                  id: "government-paperwork",
                },
                {
                  label: "Women's Organizations Directory",
                  id: "women-organizations",
                },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`start-business.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border cursor-pointer transition-colors duration-200 hover:bg-slate-200 hover:border-accent-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-neutral opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("quickstart");
                  scrollTo("guide-content");
                }}
                data-ocid="start-business.hero.quickstart_button"
                className="button-cta inline-flex items-center gap-2"
              >
                <Rocket size={15} />
                Start 7-Day Plan
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("full");
                  scrollTo("guide-content");
                }}
                data-ocid="start-business.hero.full_guide_button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent-neutral-border text-accent-neutral font-semibold text-[15px] hover:bg-accent-neutral-soft transition-colors duration-200"
              >
                <BookOpen size={15} />
                Read Full Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="start-business.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  scrollTo(s.id);
                  setActiveSection(s.id);
                }}
                data-ocid={`start-business.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-4 py-2 rounded-md transition-colors duration-200 shrink-0 min-w-fit",
                  activeSection === s.id
                    ? "bg-accent-neutral-soft text-accent-neutral"
                    : "text-zinc-500 hover:text-accent-neutral",
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
      <div
        id="guide-content"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20"
      >
        <GuideTabToggle
          activeTab={activeTab}
          onChange={setActiveTab}
          accentColor={ACCENT}
        />

        <NYCHelpCallout />

        {activeTab === "quickstart" ? (
          <QuickStartTab days={QUICK_START_DAYS} accentColor={ACCENT} />
        ) : (
          <div className="space-y-20">
            {/* NYC Resources Prominent Section */}
            <section
              id="nyc-resources-highlight"
              className="rounded-2xl bg-accent-neutral-soft border border-accent-neutral-border px-6 py-8"
              data-ocid="start-business.nyc_resources_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Free NYC Business Resources
                  </h2>
                  <p className="text-[14px] text-muted-foreground mt-0.5">
                    NYC Small Business Services: no cost, no catch. Use these
                    before spending a dollar.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 bg-card rounded-xl border border-border p-4 hover:border-primary/50 hover:shadow-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  data-ocid="start-business.nyc_launch_online_link"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-primary shrink-0" />
                    <span className="font-semibold text-[15px] text-foreground group-hover:text-primary transition-colors">
                      Launch Your Online Business
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-muted-foreground ml-auto shrink-0"
                    />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Free 15-hour course with SUNY/FIT covering digital
                    marketing, branding, website development, e-commerce, and
                    SEO.
                  </p>
                </a>
                <a
                  href="https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 bg-card rounded-xl border border-border p-4 hover:border-primary/50 hover:shadow-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  data-ocid="start-business.nyc_fasttrac_link"
                >
                  <div className="flex items-center gap-2">
                    <Rocket size={16} className="text-primary shrink-0" />
                    <span className="font-semibold text-[15px] text-foreground group-hover:text-primary transition-colors">
                      FastTrac
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-muted-foreground ml-auto shrink-0"
                    />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Business concept and planning program: turn your idea into
                    an actionable business plan with expert guidance.
                  </p>
                </a>
                <a
                  href="https://nyc-business.nyc.gov/nycbusiness/business-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 bg-card rounded-xl border border-border p-4 hover:border-primary/50 hover:shadow-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  data-ocid="start-business.nyc_solutions_centers_link"
                >
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary shrink-0" />
                    <span className="font-semibold text-[15px] text-foreground group-hover:text-primary transition-colors">
                      NYC Business Solutions Centers
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-muted-foreground ml-auto shrink-0"
                    />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Free expert guidance on starting, operating, and growing
                    your business: legal advice, permits, financing, and more.
                  </p>
                </a>
                <a
                  href="https://www.nyc.gov/wenyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 bg-card rounded-xl border border-pink-200 p-4 hover:border-pink-400 hover:shadow-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  data-ocid="start-business.nyc_wenyc_link"
                >
                  <div className="flex items-center gap-2">
                    <Heart size={16} className="text-pink-500 shrink-0" />
                    <span className="font-semibold text-[15px] text-foreground group-hover:text-pink-600 transition-colors">
                      WE NYC
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-muted-foreground ml-auto shrink-0"
                    />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Women Entrepreneurs of NYC: free mentorship, training, and
                    resources specifically for women business owners.
                  </p>
                </a>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <Link
                  to="/nyc-resources"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:text-primary/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  data-ocid="start-business.nyc_resources_see_all_link"
                >
                  See all NYC SBS programs &rarr;
                </Link>
              </div>
            </section>

            {/* SECTION 1: YOUR IDEA */}
            <section
              id="your-idea"
              data-ocid="start-business.your_idea_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Lightbulb size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Your Idea
                </h2>
              </div>
              <div className="space-y-4 text-muted-readable leading-relaxed">
                <p className="text-[15px]">
                  Start with one sentence. Fill in this template:
                </p>
                <Callout>
                  <strong className="text-accent-neutral">
                    &ldquo;I help [who] do [what] so they can [benefit].&rdquo;
                  </strong>
                  <br />
                  Example: &ldquo;I help busy moms find high-quality secondhand
                  kids&rsquo; clothes so they can save money without sacrificing
                  style.&rdquo;
                </Callout>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Validate first",
                      body: "Are people already paying for this? Yes = great sign. Find them on Yelp, Etsy, or Google. Competition is proof there is a market.",
                    },
                    {
                      title: "Read their reviews",
                      body: "Go to your competitors' Google and Yelp reviews. Their 1-star complaints are your roadmap: that is where your opportunity lives.",
                    },
                    {
                      title: "One-page description",
                      body: "You do NOT need a 40-page business plan to start. Write one page: what you sell, who buys it, how you make money, and why you are different.",
                    },
                    {
                      title: "Test before you invest",
                      body: "Can you sell one unit before you spend money? Pre-selling, waitlists, or free pilots validate demand before you risk capital.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <h3 className="font-semibold text-foreground mb-1 text-[15px]">
                        {card.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 2: BUSINESS STRUCTURE */}
            <section
              id="business-structure"
              data-ocid="start-business.business_structure_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Building2 size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Business Structure
                </h2>
              </div>
              <p className="text-muted-readable mb-6 text-[15px] leading-relaxed">
                Plain English, no law degree required. Your structure affects
                your taxes, liability, and paperwork.
              </p>
              <div className="space-y-4">
                {[
                  {
                    type: "Sole Proprietor",
                    best: "Freelancers, service providers just starting out",
                    pros: "Zero paperwork to form. Simplest option possible.",
                    cons: "Your personal assets (house, savings) are at risk if someone sues you.",
                    badge: "Easiest",
                    badgeCls: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    type: "LLC (Limited Liability Company)",
                    best: "Anyone selling products, hiring employees, or signing contracts",
                    pros: "Protects personal assets. Flexible tax treatment. Most popular for small businesses.",
                    cons: "Costs $50-$500 to form depending on your state. Annual fees apply.",
                    badge: "Most Popular",
                    badgeCls: "bg-accent-neutral-soft text-accent-neutral",
                  },
                  {
                    type: "Partnership",
                    best: "Two or more co-owners (friends, family, colleagues)",
                    pros: "Simple to form, flexible profit sharing.",
                    cons: "Both partners can be held liable. ALWAYS get a written partnership agreement: even with family.",
                    badge: "Get a lawyer first",
                    badgeCls: "bg-amber-100 text-amber-700",
                  },
                  {
                    type: "S-Corp or C-Corp",
                    best: "Larger businesses or raising investor money",
                    pros: "Can issue stock, more credibility with investors.",
                    cons: "More complex and expensive. Requires more legal and accounting work.",
                    badge: "Advanced",
                    badgeCls: "bg-[#F3F4F6] text-zinc-600",
                  },
                ].map((s) => (
                  <div
                    key={s.type}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {s.type}
                      </h3>
                      <span
                        className={`text-[15px] font-medium px-2 py-0.5 rounded-full ${s.badgeCls}`}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-[15px] text-accent-neutral font-medium mb-2">
                      Best for: {s.best}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-[15px] text-muted-readable">
                      <div>
                        <span className="text-emerald-600 font-semibold">
                          &#10003;{" "}
                        </span>
                        {s.pros}
                      </div>
                      <div>
                        <span className="text-amber-600 font-semibold">
                          &#9888;{" "}
                        </span>
                        {s.cons}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Callout>
                  <strong>Not sure where to start?</strong> Most first-time
                  business owners form an LLC. It protects your personal assets
                  and is straightforward to set up: most states let you do it
                  online in under an hour.
                </Callout>
              </div>
            </section>

            {/* SECTION 3: REGISTER YOUR NAME */}
            <section
              id="register-name"
              data-ocid="start-business.register_name_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <FileText size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Register Your Name
                </h2>
              </div>
              <div className="space-y-4 text-[15px] text-muted-readable leading-relaxed">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "DBA (Doing Business As)",
                      desc: "Operating under a name different from your legal name. Filed with your county clerk. Usually $10-$50. Required if your business name is different from your own name.",
                    },
                    {
                      title: "LLC Name",
                      desc: "Reserved when you file your LLC with the state. Your LLC name IS your registered business name: no separate DBA needed unless you operate under a different brand.",
                    },
                    {
                      title: "Trademark",
                      desc: "Optional but protects your name nationally. $250-$350 per class at USPTO.gov. Worth it if your brand name is unique and you plan to grow or franchise.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <h3 className="font-semibold text-foreground text-[15px] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground text-[15px] mb-3">
                    Step-by-step name checklist:
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        step: 1,
                        text: 'Search your state\'s business name database (Google "[your state] business name search")',
                      },
                      {
                        step: 2,
                        text: "Check if the domain name is available at GoDaddy, Namecheap, or Google Domains",
                      },
                      {
                        step: 3,
                        text: "Search the trademark database at USPTO.gov to ensure no one owns it nationally",
                      },
                      {
                        step: 4,
                        text: "File your DBA with the county clerk OR file your LLC with the Secretary of State",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/40"
                      >
                        <div className="w-6 h-6 rounded-full bg-accent-neutral-soft text-accent-neutral text-[15px] font-bold flex items-center justify-center shrink-0">
                          {item.step}
                        </div>
                        <p className="text-[15px] text-muted-readable leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: GOVERNMENT PAPERWORK */}
            <section
              id="government-paperwork"
              data-ocid="start-business.government_paperwork_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <ClipboardList size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Government Paperwork
                </h2>
              </div>
              <p className="text-muted-readable text-[15px] mb-6 leading-relaxed">
                Every major document you will need: where to get it, what it
                costs, and how long it takes.
              </p>
              <div className="overflow-x-auto">
                <div className="rounded-xl border border-border overflow-hidden">
                  <table className="w-full text-[15px]">
                    <thead>
                      <tr className="bg-accent-neutral-soft">
                        <th className="text-left px-4 py-3 font-semibold text-[15px] uppercase tracking-wider text-accent-neutral">
                          Document
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[15px] uppercase tracking-wider text-accent-neutral">
                          Where to File
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[15px] uppercase tracking-wider text-accent-neutral">
                          Cost
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[15px] uppercase tracking-wider text-accent-neutral">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PAPERWORK_TABLE.map((row, i) => (
                        <tr
                          key={row.doc}
                          className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                        >
                          <td className="px-4 py-3 font-medium text-foreground text-[15px]">
                            {row.doc}
                          </td>
                          <td className="px-4 py-3 text-muted-readable text-[15px]">
                            {row.where}
                          </td>
                          <td className="px-4 py-3 font-medium text-accent-neutral text-[15px]">
                            {row.cost}
                          </td>
                          <td className="px-4 py-3 text-muted-readable text-[15px]">
                            {row.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-5">
                <Callout variant="tip">
                  <strong>Start with the EIN.</strong> Go to{" "}
                  <a
                    href="https://irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                  >
                    IRS.gov EIN application
                  </a>
                  . It is free, takes 15 minutes, and you will need it for
                  everything else: bank accounts, licenses, taxes.
                </Callout>
              </div>
            </section>

            {/* SECTION 5: LICENSES & PERMITS */}
            <section
              id="licenses-permits"
              data-ocid="start-business.licenses_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Shield size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Licenses &amp; Permits
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "\uD83C\uDFD9\uFE0F",
                      title: "General Business License",
                      desc: 'Most cities require one to legally operate. Search "[your city] business license" to find your local requirements. Typically $50-$400/year.',
                    },
                    {
                      icon: "\uD83C\uDFE0",
                      title: "Home-Based Business Permit",
                      desc: "Working from home? Check your city's zoning rules. Many residential zones restrict business activity, especially if customers visit your home.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-foreground text-[15px] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-muted-readable leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-[15px] mt-6 mb-3">
                  Industry-specific requirements:
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      industry: "Food Business",
                      emoji: "\uD83C\uDF55",
                      reqs: "Food Handler's Permit, Health Department Inspection, possibly a Cottage Food License for home bakers",
                    },
                    {
                      industry: "Salon / Beauty",
                      emoji: "\uD83D\uDC87",
                      reqs: "State cosmetology license required for all operators, plus a facility license for the location",
                    },
                    {
                      industry: "Retail",
                      emoji: "\uD83D\uDECD\uFE0F",
                      reqs: "Seller's permit (to collect sales tax), zoning compliance, and any product-specific certifications",
                    },
                    {
                      industry: "Pool Hall / Bar",
                      emoji: "\uD83C\uDFB1",
                      reqs: "Liquor license (can take 3-6 months: apply EARLY), entertainment permit, and health inspection if food is served",
                    },
                    {
                      industry: "Online Services",
                      emoji: "\uD83D\uDCBB",
                      reqs: "Usually minimal: general business license and any professional certifications for your field",
                    },
                  ].map((item) => (
                    <div
                      key={item.industry}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
                    >
                      <span className="text-xl shrink-0">{item.emoji}</span>
                      <div>
                        <span className="font-semibold text-foreground text-[15px]">
                          {item.industry}:{" "}
                        </span>
                        <span className="text-[15px] text-muted-readable">
                          {item.reqs}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Callout variant="warning">
                  <strong>If you are opening a bar or pool hall:</strong> Start
                  the liquor license application as early as possible: it can
                  take 3-6 months and is often the longest single step in the
                  entire process.
                </Callout>
                <p className="text-[15px] text-muted-readable">
                  Resource:{" "}
                  <a
                    href="https://sba.gov/business-guide/launch-your-business/apply-licenses-permits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-indigo underline font-medium inline-flex items-center gap-1"
                  >
                    SBA License &amp; Permit Finder <ExternalLink size={10} />
                  </a>
                </p>
              </div>
            </section>

            {/* SECTION 6: BANKING & FINANCES */}
            <section
              id="banking-finances"
              data-ocid="start-business.banking_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <DollarSign size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Banking &amp; Finances
                </h2>
              </div>
              <div className="space-y-5">
                <Callout variant="warning">
                  <strong>Rule #1:</strong> The #1 reason small businesses fail
                  is running out of cash, not lack of customers. Track every
                  dollar from day one.
                </Callout>
                <div className="space-y-4">
                  {[
                    {
                      step: "Open a business checking account",
                      detail:
                        "Never use your personal account for business. You need: EIN, business formation documents, photo ID. Recommended: Mercury (free, online), Relay (free for startups), Chase Business, or Bank of America Business.",
                    },
                    {
                      step: "Set up basic bookkeeping",
                      detail:
                        "Free options: Wave (free forever), spreadsheet. Paid: QuickBooks Simple Start ($30/mo). Pick one and use it from day one: backfilling 6 months of records is painful.",
                    },
                    {
                      step: "List every startup cost before you open",
                      detail:
                        "Rent, equipment, inventory, licenses, website, marketing, insurance, utilities. Add 20% buffer for surprises. If the number scares you, start smaller: not later.",
                    },
                    {
                      step: "Separate your salary from business profits",
                      detail:
                        "Decide upfront what you will pay yourself. Do not take money randomly: it makes taxes a nightmare and obscures whether the business is actually profitable.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent-neutral-soft text-accent-neutral text-[15px] font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-[15px] mb-1">
                          {item.step}
                        </h3>
                        <p className="text-[15px] text-muted-readable leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 7: WHEN YOU NEED A LAWYER */}
            <section
              id="when-you-need-a-lawyer"
              data-ocid="start-business.lawyer_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Scale size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  When You Need a Lawyer
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/20 p-5">
                  <h3 className="font-semibold text-red-800 dark:text-red-300 text-[15px] mb-3">
                    You probably need a lawyer if:
                  </h3>
                  <ul className="space-y-1.5">
                    {[
                      "Forming a partnership (always get a written agreement)",
                      "Signing a commercial lease",
                      "You need client or vendor contracts",
                      "Operating in a regulated industry (healthcare, finance, childcare)",
                      "You have received a legal notice or been sued",
                      "Raising money from investors",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[15px] text-red-700 dark:text-red-300"
                      >
                        <span className="mt-0.5 shrink-0">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 p-5">
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 text-[15px] mb-3">
                    You probably do not need a lawyer if:
                  </h3>
                  <ul className="space-y-1.5">
                    {[
                      "You are a sole proprietor freelancer with no employees",
                      "Forming a simple single-member LLC (DIY with LegalZoom or state website)",
                      "You are just testing your idea and have not committed capital yet",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[15px] text-emerald-700 dark:text-emerald-300"
                      >
                        <span className="mt-0.5 shrink-0">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="font-semibold text-foreground text-[15px] mb-3">
                Affordable legal resources:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  {
                    name: "LegalZoom.com",
                    desc: "DIY business formation, contract templates, and registered agent service",
                  },
                  {
                    name: "SCORE.org",
                    desc: "Free lawyer referrals and mentoring for small business owners",
                  },
                  {
                    name: "Law School Clinics",
                    desc: "Many law schools offer free or low-cost legal help to small business owners",
                  },
                  {
                    name: "State Bar Referral Service",
                    desc: 'First consultation often $25-$50. Search "[your state] bar lawyer referral"',
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-lg bg-muted/40 border border-border"
                  >
                    <h4 className="font-semibold text-foreground text-[15px] mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[15px] text-muted-readable">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <Callout>
                A good business lawyer costs $150-$400/hour. For a simple LLC +
                partnership agreement, budget $500-$1,500. That said, most
                first-time sole proprietors and single-member LLC owners never
                need a lawyer in year one.
              </Callout>
            </section>

            {/* SECTION 8: WOMEN'S ORGANIZATIONS */}
            <section
              id="women-organizations"
              data-ocid="start-business.women_orgs_section"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Heart size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Women&rsquo;s Organizations
                </h2>
              </div>
              <p className="text-muted-readable text-[15px] mb-6 leading-relaxed">
                These organizations exist specifically to help women start and
                grow businesses. Most are free. Use them.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {WOMEN_ORGS.map((org, i) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`start-business.women_orgs.item.${i + 1}`}
                    className="group flex flex-col rounded-xl border-2 border-accent-neutral-border bg-card hover:border-accent-neutral hover:shadow-neutral transition-all duration-200 p-5"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-foreground text-[15px] group-hover:text-accent-neutral transition-colors duration-200">
                        {org.name}
                      </h3>
                      <span className="shrink-0 text-[15px] font-medium px-2 py-0.5 rounded-full bg-accent-neutral-soft text-accent-neutral">
                        {org.badge}
                      </span>
                    </div>
                    <p className="text-[15px] text-accent-neutral font-medium mb-2">
                      {org.tagline}
                    </p>
                    <p className="text-[15px] text-muted-readable leading-relaxed flex-1">
                      {org.details}
                    </p>
                    <div className="flex items-center gap-1 mt-3 text-[15px] text-accent-indigo font-semibold">
                      Visit website <ExternalLink size={10} />
                    </div>
                  </a>
                ))}
              </div>
              <Callout>
                <strong>Also worth knowing:</strong> The SBA&rsquo;s{" "}
                <a
                  href="https://sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  8(a) Business Development Program
                </a>{" "}
                helps women and minority-owned businesses secure government
                contracts. If you plan to work with federal agencies, this
                program can be transformative.
              </Callout>
              <div className="mt-4">
                <Callout variant="tip">
                  <strong>State-specific programs:</strong> Every state has its
                  own women&rsquo;s business resources. Search &ldquo;[your
                  state] women business owner resources&rdquo; or visit your
                  state&rsquo;s Small Business Development Center (SBDC). They
                  offer free one-on-one advising.
                </Callout>
              </div>
            </section>

            <StartBizSocialMediaSection />

            {/* SECTION 9: OPENING DAY CHECKLIST */}
            <section
              id="opening-day"
              data-ocid="start-business.opening_day_section"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft flex items-center justify-center">
                  <Star size={20} className="text-accent-neutral" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Opening Day Checklist
                </h2>
              </div>
              <p className="text-muted-readable text-[15px] mb-6">
                Check everything off before you open your doors. Each item
                protects you legally or financially.
              </p>
              <div className="rounded-xl border border-accent-neutral-border bg-card overflow-hidden mb-6">
                {OPENING_CHECKLIST.map((item, i) => (
                  <div
                    key={item}
                    data-ocid={`start-business.opening_checklist.item.${i + 1}`}
                    className={`flex items-center gap-4 px-5 py-4 ${
                      i !== OPENING_CHECKLIST.length - 1
                        ? "border-b border-border"
                        : ""
                    } ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
                  >
                    <div className="w-7 h-7 rounded-full bg-accent-neutral-soft border-2 border-accent-neutral-border flex items-center justify-center shrink-0">
                      <Check size={13} className="text-accent-indigo" />
                    </div>
                    <span className="text-[15px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Callout>
                <strong className="text-base">You are already ahead.</strong>
                <br />
                Most people never start. By reading this far and taking action,
                you have already passed 99% of would-be business owners. The
                first step is the hardest. Take it today.
              </Callout>
            </section>
          </div>
        )}

        <RecommendedToolsBox />

        {/* Cross-link to industry guides */}
        <div className="rounded-2xl bg-accent-neutral-soft border border-accent-neutral-border p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-neutral flex items-center justify-center shrink-0">
              <Users size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                Ready for industry-specific strategies?
              </h3>
              <p className="text-[15px] text-muted-readable mb-4">
                Once you have handled the basics, dive into the guide for your
                specific business type. Each includes Taffer&rsquo;s Bar Rescue
                principles, Appreciated Branding, and a 7-day action plan.
              </p>
              <Link
                to="/guides"
                search={{
                  topic: undefined,
                  businessType: undefined,
                  keyword: undefined,
                }}
                data-ocid="start-business.browse_all_guides_button"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold px-4 py-2 rounded-lg bg-accent-indigo text-white hover:bg-accent-indigo/90 transition-colors duration-200"
              >
                Browse All Guides <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <GuideAuthorFooter />
      </div>
    </Layout>
  );
}
