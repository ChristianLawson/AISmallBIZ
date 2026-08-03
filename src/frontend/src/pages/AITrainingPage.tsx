import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Image,
  Lightbulb,
  Lock,
  Mail,
  MessageSquare,
  Palette,
  PenTool,
  Play,
  Repeat2,
  Route,
  Settings,
  Share2,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const TOOL_ICONS: Record<string, React.ElementType> = {
  QuickBooks: DollarSign,
  PayPal: DollarSign,
  HubSpot: Users,
  Canva: Palette,
  DocuSign: FileText,
  "Google Workspace": Globe,
  "Microsoft 365": Building2,
  Slack: MessageSquare,
  Square: DollarSign,
  Stripe: DollarSign,
};

const TOOL_PATHS: Record<string, string> = {
  QuickBooks: "/tool-guides/quickbooks",
  PayPal: "/tool-guides/paypal",
  HubSpot: "/tool-guides/hubspot",
  Canva: "/tool-guides/canva",
  DocuSign: "/tool-guides/docusign",
  "Google Workspace": "/tool-guides/google-workspace",
  "Microsoft 365": "/tool-guides/microsoft-365",
  Slack: "/tool-guides/slack",
  Square: "/tool-guides/square",
  Stripe: "/tool-guides/stripe",
};

const SECTIONS = [
  { id: "claude-ai", label: "Claude AI", icon: BrainCircuit },
  { id: "gemini-ai", label: "Google Gemini", icon: Sparkles },
  { id: "make-automation", label: "Make.com Automation", icon: Repeat2 },
  { id: "nyc-courses", label: "NYC Free Courses", icon: GraduationCap },
];

const CONNECTED_TOOLS = [
  "QuickBooks",
  "PayPal",
  "HubSpot",
  "Canva",
  "DocuSign",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Square",
  "Stripe",
];

const CLAUDE_WORKFLOWS = [
  {
    slug: "payroll-planning",
    label: "Payroll planning",
    desc: "Auto-calculate hours, taxes and pay stubs from your time-tracking data.",
  },
  {
    slug: "month-end-close",
    label: "Month-end close",
    desc: "Reconcile accounts and generate a summary report in minutes, not hours.",
  },
  {
    slug: "invoice-chasing",
    label: "Invoice chasing",
    desc: "Draft and schedule polite follow-up emails for overdue invoices automatically.",
  },
  {
    slug: "campaign-management",
    label: "Campaign management",
    desc: "Plan, schedule and track social/email campaigns across all platforms.",
  },
  {
    slug: "lead-triage",
    label: "Lead triage",
    desc: "Score and categorize inbound leads so you call the hottest prospects first.",
  },
  {
    slug: "cash-flow-forecasting",
    label: "Cash-flow forecasting",
    desc: "Project your next 30/60/90-day cash position based on real data.",
  },
  {
    slug: "margin-analysis",
    label: "Margin analysis",
    desc: "Spot which products or services drain profit and fix pricing gaps.",
  },
  {
    slug: "tax-season-organizer",
    label: "Tax-season organizer",
    desc: "Gather receipts, categorize expenses and prep a summary for your accountant.",
  },
  {
    slug: "contract-reviewer",
    label: "Contract reviewer",
    desc: "Highlight risky clauses and flag unusual terms before you sign anything.",
  },
  {
    slug: "content-strategist",
    label: "Content strategist",
    desc: "Generate a 30-day content calendar tailored to your business type.",
  },
  {
    slug: "business-pulse-monitoring",
    label: "Business pulse monitoring",
    desc: "Daily digest of key metrics: revenue, reviews, foot traffic signals.",
  },
];

const GEMINI_WORKFLOWS = [
  {
    label: "Write marketing copy",
    desc: "Generate social posts, email subject lines, and ad headlines in your brand voice: just describe your product and audience.",
    icon: PenTool,
  },
  {
    label: "Create product images",
    desc: "Describe what you need and Gemini generates custom images for flyers, social media, or your website: no design skills required.",
    icon: Image,
  },
  {
    label: "Summarize long documents",
    desc: "Upload contracts, reports, or meeting notes and get instant summaries with key action items highlighted.",
    icon: FileText,
  },
  {
    label: "Draft customer replies",
    desc: "Paste an angry email or review and get a professional, empathetic response ready to send in seconds.",
    icon: MessageSquare,
  },
  {
    label: "Brainstorm business ideas",
    desc: "Stuck on a promotion, product name, or event theme? Gemini generates dozens of creative options instantly.",
    icon: Lightbulb,
  },
  {
    label: "Build a simple website",
    desc: "Describe your business and Gemini can generate HTML, copy, and even image suggestions for a basic landing page.",
    icon: Globe,
  },
];

const MAKE_STEPS = [
  {
    step: 1,
    title: "Create your content queue",
    desc: "Open Google Sheets. Add columns: Post Copy, Platform, Image URL, Scheduled Date, Status. Fill in your posts ahead of time.",
  },
  {
    step: 2,
    title: "Sign up free at Make.com",
    desc: "Go to make.com and create a free account. No credit card needed for the free tier.",
  },
  {
    step: 3,
    title: "Create a scenario with a Schedule trigger",
    desc: "In Make, click 'Create a new scenario.' Add a Schedule module set to run every day at 8 am.",
  },
  {
    step: 4,
    title: "Pull today's posts from Google Sheets",
    desc: "Add a Google Sheets module after the trigger. Filter rows where Status = Ready AND Scheduled Date = Today.",
  },
  {
    step: 5,
    title: "Add a Router to split by platform",
    desc: "Add a Router module. Create separate paths for LinkedIn, Instagram, Facebook, and Twitter/X.",
  },
  {
    step: 6,
    title: "Add publisher modules for each platform",
    desc: "Connect the official social media modules. Each path posts to its platform using your account credentials.",
  },
  {
    step: 7,
    title: "Mark posts as Posted",
    desc: "Add a final Google Sheets module to update Status = Posted so the same content never goes out twice.",
  },
];

const NYC_COURSES = [
  {
    name: "Digital Marketing Strategy",
    tag: "Course 1 of 6",
    desc: "Build your complete digital marketing foundation. Define your audience, set measurable goals, and create a roadmap across all digital channels. The starting point before every other course.",
    icon: Route,
    badge:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
  },
  {
    name: "Content Marketing",
    tag: "Course 2 of 6",
    desc: "Learn how to create, distribute, and measure content that attracts and converts customers. Covers blogs, video, infographics, and the 80/20 content rule used by top brands.",
    icon: BookOpen,
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  },
  {
    name: "Website Optimization",
    tag: "Course 3 of 6",
    desc: "Turn your website into a customer-generating machine. Covers UX, page speed, conversion optimization, calls-to-action, and how to make every visitor more likely to buy.",
    icon: Globe,
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  },
  {
    name: "Search Engine Optimization (SEO)",
    tag: "Course 4 of 6",
    desc: "Get found on Google without paying for ads. Learn keyword research, on-page optimization, local SEO (critical for brick-and-mortar businesses), and link-building fundamentals.",
    icon: TrendingUp,
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  },
  {
    name: "Email Marketing",
    tag: "Course 5 of 6",
    desc: "Build an email list you own and use it to drive repeat business. Covers list building, segmentation, automated drip sequences, subject line writing, and measuring open/click rates.",
    icon: Mail,
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  },
  {
    name: "Social Media Marketing",
    tag: "Course 6 of 6",
    desc: "The complete social media playbook for small businesses: Loyalty Loop, Amex Rule (80/20), platform selection, Facebook setup, paid ads, KPIs, and a 30-Day Action Plan.",
    icon: Share2,
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  },
  {
    name: "FastTrac NewVenture",
    tag: "New Business",
    desc: "Free 10-session entrepreneurship bootcamp. Learn every step to launching a successful business in New York City.",
    icon: Zap,
    badge:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
  },
  {
    name: "FastTrac NewVenture for Women Entrepreneurs",
    tag: "Women-Focused",
    desc: "The same proven curriculum with a focus on the unique opportunities and challenges facing women-owned businesses.",
    icon: Users,
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  },
  {
    name: "FastTrac NewVenture for Women Entrepreneurs 50+",
    tag: "Women 50+",
    desc: "Specialized cohort for women 50 and over ready to launch or re-launch a business on their own terms.",
    icon: Sparkles,
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  },
  {
    name: "FastTrac GrowthVenture",
    tag: "Scale Up",
    desc: "For businesses already running and ready to grow. Create an actionable growth plan and get one-on-one mentoring from experts.",
    icon: ChevronRight,
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  },
  {
    name: "FastTrac GrowthVenture for Female Entrepreneurs",
    tag: "Women-Owned",
    desc: "Must be 51%+ woman-owned, in operation 1+ year with demonstrated sales. Focus on scaling sustainably.",
    icon: Building2,
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  },
  {
    name: "Launch Your Online Business",
    tag: "Digital & E-Commerce",
    desc: "15-hour course developed with SUNY and FIT. Covers digital marketing, branding, website development, Shopify/Amazon setup, and SEO basics. Audit free or pay for a certificate.",
    icon: Award,
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  },
  {
    name: "BE NYC Startup Intensive",
    tag: "Black Entrepreneurs",
    desc: "Free 40-hour intensive program designed specifically for Black entrepreneurs starting or growing a business in NYC.",
    icon: BookOpen,
    badge:
      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
  },
  {
    name: "FastTrac for Cannabis Entrepreneurs",
    tag: "Cannabis Industry",
    desc: "Purpose-built for NYC's emerging legal cannabis industry: licensing, compliance, operations, and brand building.",
    icon: Lightbulb,
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  },
];

function CalloutBox({
  variant,
  icon: Icon,
  title,
  children,
}: {
  variant: "taffer" | "branding" | "tip" | "warning";
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    taffer:
      "border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700",
    branding:
      "border-l-4 border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral-border",
    tip: "border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-600",
    warning:
      "border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-500",
  };
  const iconColors: Record<string, string> = {
    taffer: "text-red-600",
    branding: "text-accent-neutral",
    tip: "text-emerald-600",
    warning: "text-amber-600",
  };

  return (
    <div className={`rounded-xl p-5 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`mt-0.5 shrink-0 ${iconColors[variant]}`} />
        <div>
          <p className="text-base font-semibold text-foreground mb-1">
            {title}
          </p>
          <div className="text-sm text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AITrainingPage() {
  const [activeSection, setActiveSection] = useState<string | null>(
    "claude-ai",
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
      if (bestSection !== null) setActiveSection(bestSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <Layout>
      {/* NEW TO COMPUTERS BANNER */}
      <section
        className="bg-card border-b border-border"
        data-ocid="ai-training.new_to_computers_banner.section"
        aria-label="New to computers start here banner"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/learn"
            data-ocid="ai-training.new_to_computers_banner.link"
            className="card-vibrant group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-accent-neutral-soft to-secondary/10 dark:from-primary/15 dark:via-accent-neutral-soft dark:to-secondary/15"
          >
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 text-primary shrink-0">
              <Sparkles size={20} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display text-base sm:text-lg font-bold text-foreground leading-snug">
                New to computers? Start here
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Begin with Tier 1 basics and build your confidence before you
                dive into the tools below.
              </p>
            </div>
            <span className="button-cta inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl shrink-0 self-start sm:self-auto">
              Start at Tier 1
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </section>

      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="ai-training.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <BrainCircuit size={12} />
              AI Training &amp; Tools for Small Business
            </span>
            <h1 className="heading-hero text-foreground">
              Learn AI. Automate Your Business.{" "}
              <span className="text-gradient-vibrant">Grow Faster.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable dark:text-zinc-300">
              You get a single hub of ready-to-use AI tools and free training
              that take routine work off your plate so you can serve more
              customers and bring more money through the door. From Anthropic
              Claude's small business platform to free NYC entrepreneur courses,
              every option here is built for owners with no coding and no
              jargon, just results.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "Claude for Small Business", id: "claude-ai" },
                { label: "Google Gemini", id: "gemini-ai" },
                { label: "Make.com Social Automation", id: "make-automation" },
                { label: "NYC Free Courses", id: "nyc-courses" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`ai-training.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:bg-accent-neutral-soft/40 dark:text-accent-neutral dark:border-accent-neutral-border cursor-pointer transition-colors duration-200 hover:bg-accent-neutral-soft hover:border-accent-neutral dark:hover:bg-accent-neutral-soft/70 dark:hover:border-accent-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-neutral opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="ai-training.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`ai-training.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft/40 dark:text-accent-neutral"
                    : "text-zinc-500 hover:text-accent-neutral dark:text-zinc-400 dark:hover:text-accent-neutral",
                ].join(" ")}
              >
                <s.icon size={12} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== SECTION 1: CLAUDE AI ===== */}
      <section
        id="claude-ai"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-training.claude_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft/50 flex items-center justify-center">
              <BrainCircuit size={20} className="text-accent-neutral" />
            </div>
            <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
              Section 1
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Put AI to Work in Your Business Today
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Claude for Small Business is a one-toggle install inside the Claude
            Cowork desktop app. It connects the tools you already use, with no
            coding and no IT department, and runs real business workflows for
            you automatically.
          </p>

          {/* Connected Tools: Link to How-To Guides */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Settings size={17} className="text-accent-neutral" />
              Connected Tools: How-To Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CONNECTED_TOOLS.map((tool, i) => {
                const Icon = TOOL_ICONS[tool] ?? Settings;
                const path = TOOL_PATHS[tool];
                return (
                  <Link
                    key={tool}
                    to={path}
                    data-ocid={`ai-training.claude.tool.item.${i + 1}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border hover:bg-accent-neutral-soft/40 dark:hover:bg-accent-neutral-soft/20 hover:shadow-neutral transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-muted group-hover:bg-accent-neutral/10 dark:group-hover:bg-accent-neutral/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                        <Icon
                          size={18}
                          className="text-muted-foreground group-hover:text-accent-neutral transition-colors duration-200"
                        />
                      </div>
                      <span className="text-sm font-medium truncate text-foreground">
                        {tool}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent-neutral shrink-0">
                      How to Guide
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 11 Workflows bento grid */}
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Zap size={17} className="text-accent-neutral" />
            11 Ready-to-Run Business Workflows
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {CLAUDE_WORKFLOWS.map((wf, i) => (
              <Link
                key={wf.slug}
                to="/workflows/$slug"
                params={{ slug: wf.slug }}
                data-ocid={`ai-training.claude.workflow.item.${i + 1}`}
                className="group rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center text-xs font-bold text-accent-neutral">
                    {i + 1}
                  </span>
                  <p className="text-base font-semibold text-foreground">
                    {wf.label}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {wf.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-neutral">
                  Explore training
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Related resource: AI Job Guides */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Briefcase size={17} className="text-accent-neutral" />
              Related Resource
            </h3>
            <Link
              to="/ai-job-guides"
              data-ocid="ai-training.claude.related.ai_job_guides"
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border hover:bg-accent-neutral-soft/40 dark:hover:bg-accent-neutral-soft/20 hover:shadow-neutral transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-muted group-hover:bg-accent-neutral/10 dark:group-hover:bg-accent-neutral/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Briefcase
                    size={18}
                    className="text-muted-foreground group-hover:text-accent-neutral transition-colors duration-200"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate text-foreground">
                    AI Job Guides
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    Detailed AI adoption guides for eight trades and
                    professions.
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-accent-neutral shrink-0">
                Explore guides
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </span>
            </Link>
          </div>

          {/* Taffer callout */}
          <div className="mb-8">
            <CalloutBox
              variant="taffer"
              icon={MessageSquare}
              title="Jon Taffer says:"
            >
              Stop doing busywork. These workflows handle the paperwork so you
              can run your floor. The best operators use every tool available,
              and right now, AI is the biggest tool you are not using.
            </CalloutBox>
          </div>

          {/* Free courses + SMB Tour */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Play size={18} className="text-accent-neutral" />
                <h3 className="text-base font-semibold text-foreground">
                  FREE: AI Fluency for Small Business
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Co-presented by Anthropic and PayPal. Taught by{" "}
                <strong>real SMB owners</strong>: not academics. Covers which
                business tasks are right for AI, how to start safely, and how to
                use AI ethically without losing your business voice.
              </p>
              <ul className="space-y-1.5">
                {[
                  "Which tasks AI handles best",
                  "How to start safely & ethically",
                  "Taught by real business owners",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-accent-neutral shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users size={18} className="text-accent-neutral" />
                <h3 className="text-base font-semibold text-foreground">
                  Claude SMB Tour: Free Half-Day Workshops
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Free half-day workshops touring cities across the US. Started
                May 14, 2026 in Chicago, with 100 small business leaders per
                stop. Every attendee receives a{" "}
                <strong>1-month Claude Max subscription</strong> included.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2.5 py-1 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral text-xs font-semibold border border-accent-neutral-border dark:border-accent-neutral-border">
                  Free to attend
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                  1-month Max included
                </span>
              </div>
            </div>
          </div>

          {/* Privacy tip */}
          <div className="mb-8">
            <CalloutBox
              variant="warning"
              icon={Shield}
              title="Important Privacy Setting: Do This First"
            >
              Before running real business data through Claude on Pro or Max
              plans, go to{" "}
              <strong>Settings → Privacy → Model improvement</strong> and{" "}
              <strong>toggle it OFF</strong>. This prevents your financial
              records, customer data, and business workflows from being used to
              train future AI models.
            </CalloutBox>
          </div>

          {/* Pricing note */}
          <div className="rounded-xl border border-border bg-card p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <DollarSign size={22} className="text-accent-neutral shrink-0" />
            <div>
              <p className="text-base font-semibold text-foreground mb-0.5">
                Pricing
              </p>
              <p className="text-sm text-muted-foreground">
                Claude for Small Business is included free with{" "}
                <strong>Claude Pro ($20/month)</strong>, Max, or Teams plans.
                The AI Fluency course and SMB Tour workshops are completely
                free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: GOOGLE GEMINI ===== */}
      <section
        id="gemini-ai"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-training.gemini_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
              <Sparkles size={20} className="text-accent-neutral" />
            </div>
            <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
              Section 2
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Google Gemini: AI Made Simple for Your Business
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            Google Gemini is becoming one of the easiest AI tools for small
            business owners to pick up and use right away. No setup, no
            integrations to configure. Just open your browser, describe what you
            need, and Gemini does the work. It writes, designs, summarizes, and
            brainstorms so you can focus on running your business.
          </p>

          {/* Ease-of-use callout */}
          <div className="mb-10">
            <CalloutBox
              variant="branding"
              icon={Zap}
              title="Why Gemini is perfect for busy owners"
            >
              You do not need to install anything, connect accounts, or learn
              complex prompts. Gemini works in any web browser and understands
              plain English. If you can describe what you want, Gemini can
              create it, including marketing copy, images, summaries, replies,
              and more.
            </CalloutBox>
          </div>

          {/* 6 Workflows bento grid */}
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Palette size={17} className="text-accent-neutral" />6 Practical
            Ways to Use Gemini Today
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {GEMINI_WORKFLOWS.map((wf, i) => (
              <div
                key={wf.label}
                data-ocid={`ai-training.gemini.workflow.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-4 hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center text-xs font-bold text-accent-neutral">
                    {i + 1}
                  </span>
                  <p className="text-base font-semibold text-foreground">
                    {wf.label}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing & access */}
          <div className="rounded-xl border border-border bg-card p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <DollarSign size={22} className="text-accent-neutral shrink-0" />
            <div>
              <p className="text-base font-semibold text-foreground mb-0.5">
                Pricing
              </p>
              <p className="text-sm text-muted-foreground">
                Gemini is free to use with a Google account. Gemini Advanced
                (part of Google One AI Premium) adds more powerful models and
                longer conversations for $20/month, but the free tier handles
                most small business tasks easily.
              </p>
            </div>
          </div>

          {/* Pro tip */}
          <div className="mb-8">
            <CalloutBox
              variant="tip"
              icon={Lightbulb}
              title="Pro Tip: Use Gemini with Google Workspace"
            >
              If you already use Gmail, Google Docs, or Google Sheets, Gemini
              integrates directly, summarizing long email threads, drafting
              documents from outlines, and turning spreadsheet data into
              plain-English insights without leaving your workflow.
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: MAKE.COM ===== */}
      <section
        id="make-automation"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-training.make_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
              <Repeat2 size={20} className="text-accent-neutral" />
            </div>
            <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
              Section 3
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Set It Once. Post Forever.
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            Make.com is a free no-code automation tool that connects your
            content to your social media accounts for automatic, scheduled
            posting. Write your posts once in a Google Sheet and Make handles
            the rest, no coding required, no manual copy-paste every day.
          </p>

          {/* Appreciated Branding callout */}
          <div className="mb-10">
            <CalloutBox
              variant="branding"
              icon={Sparkles}
              title="Reid Holmes: Appreciated Branding"
            >
              Consistent, scheduled posting builds brand trust and keeps your
              business top-of-mind, without you being glued to your phone 24/7.
              Your brand becomes reliable before a customer ever walks through
              your door.
            </CalloutBox>
          </div>

          {/* Step-by-step */}
          <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <Bot size={17} className="text-accent-neutral" />
            7-Step Setup Guide (Plain English)
          </h3>
          <div className="space-y-4 mb-10">
            {MAKE_STEPS.map((step) => (
              <div
                key={step.step}
                data-ocid={`ai-training.make.step.item.${step.step}`}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-accent-neutral-border transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-accent-neutral text-white flex items-center justify-center text-base font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-2xl font-bold text-accent-neutral mb-1">
                Free
              </p>
              <p className="text-sm text-muted-foreground">
                1,000 operations/month, enough for ~30 posts/month across 3
                platforms
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-2xl font-bold text-accent-neutral mb-1">
                $9/mo
              </p>
              <p className="text-sm text-muted-foreground">
                Core plan for higher volume, unlimited scenarios, priority
                support
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <Clock size={22} className="text-accent-neutral mx-auto mb-1" />
              <p className="text-2xl font-bold text-accent-neutral mb-1">
                5-10 hrs
              </p>
              <p className="text-sm text-muted-foreground">
                Saved per week once your automation is running
              </p>
            </div>
          </div>

          {/* Platforms */}
          <div className="rounded-xl border border-border bg-card p-5 mb-6">
            <p className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Share2 size={16} className="text-accent-neutral" />
              Platforms Supported
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "LinkedIn",
                "Facebook",
                "Instagram",
                "Twitter / X",
                "Pinterest (advanced)",
                "TikTok (advanced)",
              ].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Pro tip */}
          <div className="mb-8">
            <CalloutBox
              variant="tip"
              icon={Lightbulb}
              title="Pro Tip: Add AI-Generated Captions"
            >
              Connect an OpenAI module inside your Make scenario to
              auto-generate platform-specific captions from a simple topic idea
              in your spreadsheet. One topic line → LinkedIn post, Instagram
              caption, and Tweet, all different, all on-brand.
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: NYC COURSES ===== */}
      <section
        id="nyc-courses"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-training.nyc_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
              <GraduationCap size={20} className="text-accent-neutral" />
            </div>
            <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
              Section 4
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Free Training for NYC Business Owners
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-3 leading-relaxed">
            NYC Small Business Services (SBS) offers completely free courses for
            NYC entrepreneurs to start, operate, and grow their businesses.
            Courses run frequently throughout the year and are available in{" "}
            <strong>Spanish, Chinese, and Russian</strong>. These are the same
            courses trusted by thousands of NYC small business owners every
            year.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-semibold">
              <CheckCircle2 size={13} /> 100% Free
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:border-accent-neutral-border font-semibold">
              <Clock size={13} /> Runs Frequently Year-Round
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:border-accent-neutral-border font-semibold">
              <Lock size={13} /> Register at nyc-business.nyc.gov or call
              888-SBS-4NYC
            </span>
          </div>

          {/* Digital Marketing Series Pathway */}
          <div
            className="rounded-2xl border-2 border-accent-neutral-border bg-accent-neutral-soft/50 dark:bg-accent-neutral-soft/10 p-6 mb-10"
            data-ocid="ai-training.nyc.pathway_section"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-accent-neutral flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-accent-neutral">
                  NYC SBS Digital Marketing Series
                </p>
                <p className="text-base font-bold text-foreground">
                  6-Course Learning Pathway
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              SBS structures their digital marketing training as a 6-course
              progression. Each builds on the last. The Social Media Marketing
              course (Course 6) is most impactful after completing the earlier
              courses, but any course can be taken independently.
            </p>
            <div className="relative">
              {/* connector line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-accent-neutral-border dark:bg-accent-neutral-border hidden sm:block" />
              <div className="space-y-3">
                {[
                  {
                    num: 1,
                    title: "Digital Marketing Strategy",
                    desc: "Foundation: audience, goals, and full-channel roadmap.",
                    color:
                      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral",
                    current: false,
                  },
                  {
                    num: 2,
                    title: "Content Marketing",
                    desc: "Create content that attracts. The 80/20 rule explained.",
                    color:
                      "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
                    current: false,
                  },
                  {
                    num: 3,
                    title: "Website Optimization",
                    desc: "Turn visitors into customers with UX and conversion tactics.",
                    color:
                      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
                    current: false,
                  },
                  {
                    num: 4,
                    title: "Search Engine Optimization (SEO)",
                    desc: "Get found on Google without paying for ads.",
                    color:
                      "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
                    current: false,
                  },
                  {
                    num: 5,
                    title: "Email Marketing",
                    desc: "Build a list you own. Drive repeat business on autopilot.",
                    color:
                      "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
                    current: false,
                  },
                  {
                    num: 6,
                    title: "Social Media Marketing",
                    desc: "Loyalty Loop, Amex Rule, platform setup, ads, KPIs, and 30-Day Plan.",
                    color:
                      "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
                    current: true,
                  },
                ].map((course) => (
                  <div
                    key={course.num}
                    className={`flex items-start gap-4 rounded-xl p-4 border transition-all duration-200 ${
                      course.current
                        ? "border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 shadow-sm"
                        : "border-border bg-card hover:border-accent-neutral-border"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${course.color}`}
                    >
                      {course.num}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-bold text-foreground">
                          {course.title}
                        </p>
                        {course.current && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-indigo text-white">
                            Where AISmallBiz guides you
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {course.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Courses bento grid */}
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <BookOpen size={17} className="text-accent-neutral" />
            All Available Courses
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            These courses run frequently throughout the year. Register early,
            popular sessions fill up fast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {NYC_COURSES.map((course, i) => (
              <div
                key={course.name}
                data-ocid={`ai-training.nyc.course.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-5 hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center shrink-0">
                    <course.icon size={18} className="text-accent-neutral" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0 ${
                      course.badge ??
                      "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral border-accent-neutral-border dark:border-accent-neutral-border"
                    }`}
                  >
                    {course.tag}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground mb-1 leading-snug">
                    {course.name}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Taffer callout */}
          <div className="mb-8">
            <CalloutBox
              variant="taffer"
              icon={MessageSquare}
              title="Jon Taffer says:"
            >
              The best operators never stop learning. These free courses are
              your unfair advantage, and your competitors probably do not know
              they exist. Knowledge is leverage. Use it.
            </CalloutBox>
          </div>

          {/* CTA */}
          <a
            href="https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="ai-training.nyc.browse_button"
            className="button-cta inline-flex items-center gap-2"
          >
            <GraduationCap size={15} />
            Browse NYC Courses
          </a>
        </div>
      </section>
    </Layout>
  );
}
