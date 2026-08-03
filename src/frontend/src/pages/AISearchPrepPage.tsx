import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Cloud,
  DollarSign,
  ExternalLink,
  FileText,
  Gauge,
  Globe,
  HelpCircle,
  ListChecks,
  MapPin,
  MessageSquare,
  PenTool,
  Printer,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "what-is-ai-search", label: "What Is AI Search", icon: Search },
  { id: "how-ai-decides", label: "How AI Decides", icon: Gauge },
  { id: "six-steps", label: "6 Steps to Prepare", icon: ListChecks },
  { id: "measure-it", label: "Measure It", icon: RefreshCw },
  { id: "freshness", label: "Freshness", icon: RefreshCw },
  { id: "comparison", label: "AI vs Traditional SEO", icon: Sparkles },
  { id: "agent-era", label: "The Agent Era", icon: Sparkles },
  { id: "checklist", label: "Readiness Checklist", icon: CheckCircle2 },
  { id: "tools", label: "Tools and Resources", icon: Wrench },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const STEPS = [
  {
    num: 1,
    title: "Publish Pricing Content",
    icon: DollarSign,
    paragraphs: [
      "Customers constantly ask AI assistants what things cost. How much does gutter cleaning cost? What should a bathroom remodel run me? If your business has published answers, AI has something to reference. If you have not, AI cites a competitor who has.",
      "You do not need to publish your exact price book. Publish a pricing guide: the typical low end, the typical high end, what drives the price up or down, and what add-ons cost. One guide per major service you offer.",
    ],
    example:
      "Example: Instead of hiding prices, a gutter company publishes Gutter cleaning in Brooklyn typically runs $99 to $250 for a standard two-story home. Price increases with roof height, gutter guards, and heavy debris. That page becomes the answer AI gives.",
    action:
      "Action: Pick your single most-asked service. Publish one pricing guide for it this week. Include the typical range, what changes the price, and what add-ons cost.",
  },
  {
    num: 2,
    title: "Make Your Business Bookable Online",
    icon: BookOpen,
    paragraphs: [
      "AI assistants are beginning to take actions for customers, not just answer questions. A customer can already ask an AI to find and book a restaurant reservation. Home service scheduling, appointment booking, and quote requests are next.",
      "If your business has online scheduling, AI agents will eventually be able to book you directly. If your only contact method is a phone number and a contact form, you will be skipped when a customer says find someone and book it for me.",
    ],
    action:
      "Action: Set up online scheduling through whatever system you use, and confirm the provider is building AI or agent integrations. If they are not, note it as a reason to switch when your contract allows.",
  },
  {
    num: 3,
    title: "Turn Real Customer Questions Into Content",
    icon: MessageSquare,
    paragraphs: [
      "AI systems are trained to ignore generic filler content. Articles like 7 Tips to Get Your Home Ready for Summer are treated as commodity content because any AI could write them. What AI systems reward is specific, real, experience-based content that only your business could produce.",
      "Your best source of that content is already flowing into your business every day: the questions customers actually ask you. Every phone call, email, and job site conversation contains a question someone else will ask an AI tomorrow.",
    ],
    action:
      "Action: Keep a running list of real customer questions. Once a week, answer one of them publicly in plain language, with real numbers and real scenarios. Over a year, that is 50 pieces of content no competitor can copy.",
  },
  {
    num: 4,
    title: "Build Your Knowledge Catalog",
    icon: FileText,
    paragraphs: [
      "Think of a knowledge catalog as the structured, machine-readable version of everything your business knows. It is what AI systems consume to understand who you are, what you do, where you do it, and why you can be trusted.",
    ],
    catalogItems: [
      "Services offered and service areas",
      "Pricing guides (from Step 1)",
      "Frequently asked questions with real answers (from Step 3)",
      "Credentials, licenses, and years of experience",
      "Policies: guarantees, response times, payment terms",
      "Reviews and testimonials",
    ],
    paragraphsAfter: [
      "Your website is the natural home for this. The shift is in how you think about it: your website is no longer a brochure for humans to browse. It is the source of truth that AI systems read on your behalf.",
    ],
    action:
      "Action: Audit your site against the list above. Every missing item is a question AI cannot answer about your business.",
  },
  {
    num: 5,
    title: "Label Your Content So Machines Can Read It",
    icon: Tag,
    paragraphs: [
      "AI systems do not read your website the way a human does. They look for structured labels, called schema markup, that tell them exactly what each piece of content is: a service, a price, a review, a FAQ, a business location, an opening hour.",
      "When you add schema markup, you are handing AI a clean, typed index of your business. Instead of guessing what your page is about, the AI knows with certainty. That certainty is what makes you cite-worthy.",
      "You do not need to write code to add schema. Most modern website platforms and SEO plugins generate it automatically when you fill in standard fields like service name, price, and address. The work is filling in the fields, not writing the markup.",
    ],
    orderedList: [
      "Open your website platform or SEO plugin and find the structured data or schema settings.",
      "Enable schema for the content types you already publish: services, FAQs, reviews, business hours, and pricing.",
      "Fill in the fields for each page. The plugin handles the markup.",
      "Test the result in the Google Rich Results Test. If it reports no errors, your content is now machine-readable.",
    ],
    action:
      "Action: Enable schema markup for services, FAQs, reviews, and business details on your site this week. Run one page through the Google Rich Results Test to confirm it parses cleanly.",
  },
  {
    num: 6,
    title: "Get Verified and Crawlable",
    icon: ShieldCheck,
    paragraphs: [
      "None of the above matters if AI systems cannot find and read your content. Three technical basics make your business visible to the systems doing the reading:",
    ],
    orderedList: [
      "Verify your domain with Google Search Console and Bing Webmaster Tools. This proves you own your site and shows you what gets indexed.",
      "Submit a sitemap so every page you publish is discoverable, not just your homepage.",
      "Check your pages render for crawlers. If your site is built on a modern app platform, confirm that search engines see your actual content, not an empty shell. Paste your URL into a social preview checker; if the preview is blank, crawlers are seeing blank too.",
    ],
    action:
      "Action: These three items take under an hour combined and are free. They are the single highest-leverage hour you can spend on AI search readiness.",
  },
];

const COMPARISON_ROWS = [
  {
    label: "What customers do",
    traditional: "Type keywords, click links",
    ai: "Ask questions, get answers",
  },
  {
    label: "What drives visibility",
    traditional: "Keywords and backlinks",
    ai: "Trusted, specific content and data",
  },
  {
    label: "What your content is for",
    traditional: "Rankings and traffic",
    ai: "Training AI to cite you as the authority",
  },
  {
    label: "How customers find you",
    traditional: "Search, then website, then lead",
    ai: "AI answers, then AI recommends, then AI books",
  },
  {
    label: "Core digital asset",
    traditional: "Your website as a brochure",
    ai: "Your website as a knowledge catalog",
  },
  {
    label: "Winning content",
    traditional: "Keyword-optimized articles",
    ai: "Real answers to real customer questions with real numbers",
  },
  {
    label: "Technical layer",
    traditional: "Sitemaps and meta tags",
    ai: "Schema markup and machine-readable data",
  },
  {
    label: "Measurement",
    traditional: "Rankings and click-through rate",
    ai: "Mentions, citations, and agent referrals",
  },
  {
    label: "Freshness",
    traditional: "Helpful but not critical",
    ai: "A quiet ranking factor that compounds over time",
  },
  {
    label: "Competitive advantage",
    traditional: "Best-looking, highest-converting site",
    ai: "Most complete, most trustworthy data",
  },
];

const CHECKLIST_GROUPS = [
  {
    name: "Pricing transparency",
    icon: DollarSign,
    items: [
      "A pricing guide exists for every major service",
      "Guides include typical ranges and what changes the price",
      "Pricing pages are public, not gated behind a form",
      "Add-ons and their costs are listed separately",
    ],
  },
  {
    name: "Bookability",
    icon: BookOpen,
    items: [
      "Customers can schedule or request service online without calling",
      "Your scheduling provider has or is building AI or agent integrations",
      "Your booking link is easy to find on your homepage",
    ],
  },
  {
    name: "Content",
    icon: PenTool,
    items: [
      "You maintain a list of real customer questions",
      "You publish at least one real Q&A per week or month",
      "Your content includes specific numbers, scenarios, and outcomes",
      "You have removed or stopped producing generic filler content",
      "Each major service has its own dedicated answer page",
    ],
  },
  {
    name: "Knowledge catalog",
    icon: FileText,
    items: [
      "Services and service areas are clearly listed",
      "Credentials and experience are published",
      "Policies (guarantees, response times) are published",
      "Reviews and testimonials appear on your site, not only on third-party platforms",
      "Business hours and contact methods are easy to find",
      "Pricing guides are linked from your main service pages",
      "FAQ pages answer the questions customers actually ask",
    ],
  },
  {
    name: "Machine readability",
    icon: Tag,
    items: [
      "Schema markup is enabled for services, FAQs, and reviews",
      "Schema markup is enabled for business details (hours, address, phone)",
      "Pages pass the Google Rich Results Test with no errors",
    ],
  },
  {
    name: "Technical visibility",
    icon: ShieldCheck,
    items: [
      "Domain verified in Google Search Console",
      "Domain verified in Bing Webmaster Tools",
      "Sitemap submitted to both",
      "Social preview cards render correctly when your links are shared",
      "Pages render actual content for crawlers, not blank shells",
    ],
  },
  {
    name: "Measurement and maintenance",
    icon: RefreshCw,
    items: [
      "You run a monthly check on whether AI mentions your business",
      "You record mentions, citations, and competitor appearances",
      "You refresh your most important pages at least once a quarter",
      "You remove or update content that is no longer accurate",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I have to publish my exact prices?",
    a: "No. Publish honest ranges and what drives the price up or down. AI systems need a reference point, not your price book. A range with context beats silence every time, and silence hands the citation to a competitor.",
  },
  {
    q: "Will this replace my regular SEO work?",
    a: "It builds on it. The technical foundations overlap: crawlable pages, verified domains, sitemaps, and clear service pages all still matter. What changes is the content strategy: specific answers to real questions instead of keyword-stuffed articles, and a machine-readable layer on top.",
  },
  {
    q: "I am a very small business. Does this really apply to me?",
    a: "It applies most to you. Large companies have agencies handling this. Right now most small businesses have not started, which means early movers get cited as the local authority before the space gets crowded. AI assistants cite the clearest public answers, not the biggest advertising budgets, and a two-person shop that publishes honest pricing can outrank a franchise that publishes nothing.",
  },
  {
    q: "How long before this matters?",
    a: "It already does. Over half of searches end without a click today, and AI assistants answer commercial questions millions of times a day. The agent-booking layer arrives over the next one to two years. The content and catalog work you do now compounds the entire way.",
  },
  {
    q: "What is schema markup going to cost me?",
    a: "Usually nothing but a sentence. If a web person manages your site, the request in Step 5 is a small task for them. If you use a modern website builder, the feature is typically built in and free. Verify with the free Rich Results Test either way.",
  },
  {
    q: "I published my pricing guide a month ago and AI assistants still do not mention my business. Did it fail?",
    a: "No. Discovery takes time, and different assistants update at different speeds. Keep publishing weekly answers, confirm the technical checks in Step 6 pass, and check again monthly. Consistency over months wins this, not any single page.",
  },
  {
    q: "How often should I update what I have already published?",
    a: "Touch every important page at least twice a year, and immediately when prices or services change. Freshness is a trust signal, and a one-line dated note such as 'Reviewed January 2026, prices current' costs nothing.",
  },
  {
    q: "Do I need to pay an agency $1,500 to $2,000 a month for this?",
    a: "No. Everything in this guide can be done yourself for free. The main investment is consistency: publishing real answers regularly, keeping your information complete and current, and spending fifteen minutes a month checking whether the machines mention you. If your business later grows to the size agencies serve, you will hire one from a position of knowledge instead of fear.",
  },
  {
    q: "What is the single fastest thing I can do today?",
    a: "Verify your domain in Google Search Console and submit your sitemap. Under an hour, free, and it makes everything else you publish discoverable.",
  },
];

const STORAGE_KEY = "ai-search-prep-checklist-v2";

function CalloutBox({
  variant,
  icon: Icon,
  title,
  children,
}: {
  variant: "tip" | "warning" | "branding";
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    tip: "border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-600",
    warning:
      "border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-500",
    branding:
      "border-l-4 border-[rgb(var(--accent-neutral-border))] bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 dark:border-[rgb(var(--accent-neutral-border))]",
  };
  const iconColors: Record<string, string> = {
    tip: "text-emerald-600",
    warning: "text-amber-600",
    branding: "text-[rgb(var(--accent-neutral))]",
  };
  return (
    <div className={`rounded-xl p-5 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`mt-0.5 shrink-0 ${iconColors[variant]}`} />
        <div>
          {title && (
            <p className="text-base font-semibold text-foreground mb-1">
              {title}
            </p>
          )}
          <div className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqAccordionItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border border-border bg-card overflow-hidden"
      data-ocid={`ai-search-prep.faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-ocid={`ai-search-prep.faq.toggle.${index + 1}`}
        className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-muted/40 transition-colors duration-200"
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[rgb(var(--accent-neutral))] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  sectionNumber,
  title,
}: {
  icon: React.ElementType;
  sectionNumber: number;
  title: string;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center">
          <Icon size={20} className="text-[rgb(var(--accent-neutral))]" />
        </div>
        <span className="text-sm font-semibold text-[rgb(var(--accent-neutral))] uppercase tracking-wider">
          Section {sectionNumber}
        </span>
      </div>
      <h2 className="heading-section font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
        {title}
      </h2>
    </>
  );
}

export default function AISearchPrepPage() {
  const [activeSection, setActiveSection] = useState<string | null>(
    "what-is-ai-search",
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load checklist state from localStorage on mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(JSON.parse(stored) as Record<string, boolean>);
      }
    } catch {
      // Ignore parse errors and start with an empty checklist.
    }
  }, []);

  // Override the global print body::before title for this page only.
  // The global stylesheet hardcodes a different checklist title; this page
  // adds a body class on mount and removes it on unmount so the print
  // header reads correctly for the AI Search Readiness Checklist.
  useEffect(() => {
    document.body.classList.add("ai-search-prep-page");
    return () => {
      document.body.classList.remove("ai-search-prep-page");
    };
  }, []);

  // Persist checklist state to localStorage whenever it changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // Ignore storage errors (private mode, quota, etc).
    }
  }, [checked]);

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

  const totalItems = CHECKLIST_GROUPS.reduce(
    (sum, g) => sum + g.items.length,
    0,
  );
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* SECTION 1: HERO */}
      <section
        id="hero"
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="ai-search-prep.hero.section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Search size={12} />
              AI Search Readiness for Small Business
            </span>
            <h1 className="heading-hero text-foreground">
              How to Prepare Your Small Business for{" "}
              <span className="text-gradient-vibrant">AI Search</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))]">
              Over half of Google searches now end without a click. Here is how
              to make sure AI still sends customers to you.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("six-steps")}
              data-ocid="ai-search-prep.hero.cta"
              className="button-cta inline-flex items-center gap-2 mt-2"
            >
              <ListChecks size={15} />
              Start the 6 Steps
            </button>
          </div>
        </div>
      </section>

      {/* SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="ai-search-prep.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`ai-search-prep.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[rgb(var(--accent-neutral-soft))] text-[rgb(var(--accent-neutral))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 dark:text-[rgb(var(--accent-neutral))]"
                    : "text-zinc-500 hover:text-[rgb(var(--accent-neutral))] dark:text-zinc-400 dark:hover:text-[rgb(var(--accent-neutral))]",
                ].join(" ")}
              >
                <s.icon size={12} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* SECTION 2: WHAT IS AI SEARCH */}
      <section
        id="what-is-ai-search"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-search-prep.what_is.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Search}
            sectionNumber={2}
            title="What Is AI Search and Why It Matters for Your Business"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              For twenty years, finding a business worked the same way. A
              customer typed keywords into Google, scrolled a list of links,
              clicked a website, and filled out a form or made a call.
            </p>
            <p>
              That model is breaking. Today, 58% of Google searches end with no
              click at all. Customers ask a question, an AI answers it directly,
              and the websites underneath never get visited.
            </p>
            <p>
              Customers are also changing how they ask. Instead of typing HVAC
              repair near me, they ask an AI assistant: My thermostat is on and
              the fan is running, but no cold air is coming out. Why? The AI
              diagnoses the problem, estimates the cost, and recommends who to
              call. All before a single website is opened.
            </p>
            <p>
              This shift has a simple consequence for small businesses: your
              content is no longer competing for a ranking on a results page. It
              is competing to become the source that AI systems trust and cite
              when they answer your customers questions.
            </p>
            <p>
              The businesses that publish clear, specific, honest information
              will get recommended. The businesses that do not will be
              invisible, no matter how good their website looks.
            </p>
            <p>
              The good news: preparing for AI search does not require a big
              budget or an agency. It requires doing six things well.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW AI SYSTEMS DECIDE */}
      <section
        id="how-ai-decides"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-search-prep.how_decides.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Gauge}
            sectionNumber={3}
            title="How AI Systems Decide Which Businesses to Mention"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              When a customer asks an AI assistant a question about a service,
              the AI has to choose which businesses to mention. It does not pick
              at random, and it does not pick based on who has the prettiest
              website. It picks based on four things, and you can influence all
              four.
            </p>
            <p>
              <strong className="text-foreground">First</strong>, the AI looks
              for content that directly answers the question. If a customer asks
              what a kitchen remodel costs, the AI wants a page that says what a
              kitchen remodel costs. Not a page about kitchen remodels in
              general. Not a portfolio of beautiful kitchens. A page with actual
              numbers and actual context. Specificity wins.
            </p>
            <p>
              <strong className="text-foreground">Second</strong>, the AI looks
              for trust signals. It checks whether the business is verified, has
              reviews, has been around long enough to have a track record, and
              is referenced by other sources it considers credible. A business
              with a verified domain, real reviews, and consistent information
              across the web is more likely to be cited than one with none of
              those things.
            </p>
            <p>
              <strong className="text-foreground">Third</strong>, the AI looks
              for machine-readable structure. If your pricing page is just
              paragraphs of text, the AI has to interpret it. If your pricing
              page uses schema markup that labels the service, the price range,
              and the location, the AI can read it with certainty. Certainty
              makes you cite-worthy.
            </p>
            <p>
              <strong className="text-foreground">Fourth</strong>, the AI looks
              for freshness. It would rather cite a pricing guide updated last
              month than one updated two years ago. This is not because old
              content is bad. It is because the AI does not know whether your
              two-year-old prices are still accurate, and it does not want to
              give a customer a wrong number.
            </p>
            <p>
              These four factors are the entire game. Every step in this guide
              maps back to one of them. Publish specific answers (First). Get
              verified and reviewed (Second). Label your content with schema
              (Third). Keep it fresh (Fourth).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: 6 STEPS */}
      <section
        id="six-steps"
        className="py-20 md:py-24 bg-background"
        data-ocid="ai-search-prep.six_steps.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={ListChecks}
            sectionNumber={4}
            title="6 Steps to Prepare Your Small Business for AI Search"
          />
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div
                key={step.num}
                data-ocid={`ai-search-prep.step.item.${step.num}`}
                className="rounded-2xl border border-border bg-card p-7 md:p-10 hover:border-[rgb(var(--accent-neutral-border))] transition-colors duration-200"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-11 h-11 rounded-full bg-[rgb(var(--accent-neutral))] text-white flex items-center justify-center text-lg font-bold shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <step.icon
                        size={18}
                        className="text-[rgb(var(--accent-neutral))]"
                      />
                      <h3 className="text-xl font-bold text-foreground">
                        Step {step.num}: {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 text-base text-[rgb(var(--text-muted-readable))] leading-relaxed pl-0 md:pl-16">
                  {step.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {step.catalogItems && (
                    <ul className="space-y-3 my-5">
                      {step.catalogItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-foreground/90"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.paragraphsAfter?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {step.orderedList && (
                    <ol className="space-y-3 my-5 list-decimal pl-5">
                      {step.orderedList.map((item) => (
                        <li
                          key={item}
                          className="text-foreground/90 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                  {step.example && (
                    <div className="my-5">
                      <CalloutBox
                        variant="branding"
                        icon={Sparkles}
                        title="Example"
                      >
                        {step.example}
                      </CalloutBox>
                    </div>
                  )}
                  {step.action && (
                    <div className="my-5">
                      <CalloutBox variant="tip" icon={ArrowRight} title="">
                        {step.action}
                      </CalloutBox>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MEASURE IT */}
      <section
        id="measure-it"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-search-prep.measure_it.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={RefreshCw}
            sectionNumber={5}
            title="Check Whether AI Actually Mentions You"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              You cannot improve what you do not measure. Once a month, run a
              simple check to see whether AI systems are starting to mention
              your business. It takes about ten minutes and costs nothing.
            </p>
            <p>
              Open ChatGPT, Claude, Gemini, and Google AI Overviews. Ask each
              one the same three questions a real customer would ask about your
              service and your area. For example: Who are the best plumbers in
              Astoria? What should a water heater replacement cost in Queens?
              Which plumber handles emergency calls in Brooklyn?
            </p>
            <p>For each answer, record three things:</p>
            <ul className="space-y-3 my-5">
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Mention</strong>: Did the
                  AI name your business at all?
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Citation</strong>: Did the
                  AI link to or reference a specific page on your site?
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Competition</strong>:
                  Which competitors did the AI mention instead of you?
                </span>
              </li>
            </ul>
            <p>
              Keep a simple spreadsheet. One row per month, one column per AI
              system. Over time you will see patterns. If a competitor starts
              appearing and you do not, look at what they published that you did
              not. If you start appearing after publishing a pricing guide, you
              have proof the work is paying off.
            </p>
            <p>
              Do not expect instant results. AI systems retrain and reindex on
              cycles that take weeks to months. A pricing guide published today
              may not surface in AI answers for 60 to 90 days. The point of the
              monthly check is to see the trend, not the snapshot.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: FRESHNESS */}
      <section
        id="freshness"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-search-prep.freshness.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={RefreshCw}
            sectionNumber={6}
            title="Freshness: The Quiet Ranking Factor"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              AI systems prefer to cite content they believe is current. This is
              not a loud, announced rule. It is a quiet preference that shows up
              in which sources get cited and which ones get passed over.
            </p>
            <p>
              The reason is simple. If a customer asks what a water heater
              replacement costs and the AI cites a page from 2019, the number is
              probably wrong. The AI does not want to give a wrong number. So it
              looks for a page that has been updated recently, or at least
              signals that it is still accurate.
            </p>
            <p>
              You do not need to rewrite your entire site every month. You do
              need a maintenance rhythm that keeps your most important pages
              from going stale. Here is the maintenance guidance:
            </p>
            <ul className="space-y-3 my-5">
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  Refresh your pricing guides at least once a quarter. Update
                  the ranges if they have moved. If they have not, add a note
                  confirming the prices are current as of this month.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  Add new FAQ entries as you collect new real customer
                  questions. A growing FAQ page signals an active business.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  Update your service area pages when you add or drop a
                  neighborhood. Stale service areas confuse both customers and
                  AI systems.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  Remove or update content that is no longer accurate. A page
                  that lists a service you no longer offer is worse than no page
                  at all.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  Republish refreshed pages with a visible last updated date. AI
                  systems read that date. A recent date is a freshness signal.
                </span>
              </li>
            </ul>
            <p>
              Freshness compounds. A site that gets a small refresh every
              quarter signals active maintenance. A site that has not been
              touched in two years signals abandonment. The AI notices the
              difference even if you do not.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPARISON TABLE */}
      <section
        id="comparison"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-search-prep.comparison.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Sparkles}
            sectionNumber={7}
            title="AI Search vs Traditional SEO: What Changed"
          />

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left font-semibold text-foreground p-4 w-1/4">
                    Dimension
                  </th>
                  <th className="text-left font-semibold text-foreground p-4 w-1/3">
                    Traditional SEO
                  </th>
                  <th className="text-left font-semibold text-foreground p-4 w-1/3">
                    AI Search
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    data-ocid={`ai-search-prep.comparison.row.${i + 1}`}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                  >
                    <td className="p-4 font-medium text-foreground align-top">
                      {row.label}
                    </td>
                    <td className="p-4 text-[rgb(var(--text-muted-readable))] align-top">
                      {row.traditional}
                    </td>
                    <td className="p-4 text-foreground/90 align-top">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.label}
                data-ocid={`ai-search-prep.comparison.row.${i + 1}`}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-sm font-semibold text-foreground mb-3">
                  {row.label}
                </p>
                <div className="space-y-2">
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs font-semibold text-[rgb(var(--text-muted-readable))] uppercase tracking-wide mb-1">
                      Traditional SEO
                    </p>
                    <p className="text-sm text-foreground/90">
                      {row.traditional}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 p-3">
                    <p className="text-xs font-semibold text-[rgb(var(--accent-neutral))] uppercase tracking-wide mb-1">
                      AI Search
                    </p>
                    <p className="text-sm text-foreground/90">{row.ai}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed max-w-3xl mt-8">
            The continuity point: the technical foundations of traditional SEO
            are still required. Crawlable pages, verified domains, and sitemaps
            are table stakes. What changed is the content strategy on top of
            that foundation. You are no longer writing for rankings. You are
            writing to become the source AI systems trust and cite.
          </p>
        </div>
      </section>

      {/* SECTION 8: AGENT ERA */}
      <section
        id="agent-era"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-search-prep.agent_era.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Sparkles}
            sectionNumber={8}
            title="The Agent Era: What Is Coming, Honestly"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              The next phase after AI search is AI agents. An agent does not
              just answer a question. It takes an action on the customer behalf.
              A customer will say book me a plumber for tomorrow morning and the
              agent will find a plumber, check availability, and book the
              appointment without the customer opening a single website.
            </p>
            <p>
              This is not hypothetical. Restaurant booking agents already exist.
              Home service and appointment booking agents are rolling out over
              the next one to two years. The businesses that get cited in AI
              search today are the ones that get booked by AI agents tomorrow.
            </p>
            <p>Here is what to do now versus what to ignore:</p>
            <ul className="space-y-3 my-5">
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Do now</strong>: Make your
                  business bookable online. If you only take phone calls, no
                  agent can book you.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Do now</strong>: Publish
                  structured data about your services, hours, and areas. Agents
                  read structured data to decide whether you match a request.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Do now</strong>: Ask your
                  scheduling software provider whether they are building agent
                  integrations. If they are not, that is information you need
                  for your next contract decision.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Ignore for now</strong>:
                  Do not rebuild your website from scratch for agents. The
                  foundations in this guide are what agents need. A clean,
                  structured, crawlable site is agent-ready.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Ignore for now</strong>:
                  Do not pay for agent-specific tools or services that promise
                  to make you agent-ready. The market is too early. The work in
                  this guide is the work.
                </span>
              </li>
            </ul>
            <p>
              The honest summary: the agent era is real and it is coming, but
              the work that prepares you for it is the same work that prepares
              you for AI search today. There is no separate agent strategy to
              buy. Do the six steps. Keep your content fresh. Make yourself
              bookable. The agents will find you.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CHECKLIST */}
      <section
        id="checklist"
        className="py-20 md:py-24 bg-muted/30"
        data-ocid="ai-search-prep.checklist.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={CheckCircle2}
            sectionNumber={9}
            title="Checklist: Is Your Business Ready for AI Search?"
          />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <p className="text-base text-[rgb(var(--text-muted-readable))] max-w-2xl leading-relaxed">
              Thirty-one items across seven categories. Check off what you have
              done. Your progress is saved in your browser so it survives
              reloads.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              data-ocid="ai-search-prep.checklist.print"
              className="button-cta inline-flex items-center gap-2 self-start"
            >
              <Printer size={15} />
              Print Checklist
            </button>
          </div>

          {/* Progress bar */}
          <div
            className="rounded-xl border border-border bg-card p-5 mb-10"
            data-ocid="ai-search-prep.checklist.progress"
          >
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-semibold text-foreground">
                Your readiness score
              </p>
              <p
                className="text-sm font-bold text-[rgb(var(--accent-indigo))]"
                data-ocid="ai-search-prep.checklist.progress_count"
              >
                {checkedCount} / {totalItems}
              </p>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-[rgb(var(--accent-indigo))] transition-[width] duration-300"
                style={{
                  width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 print:grid-cols-1">
            {CHECKLIST_GROUPS.map((group, gi) => (
              <div
                key={group.name}
                data-ocid={`ai-search-prep.checklist.group.${gi + 1}`}
                className="rounded-2xl border border-border bg-card p-7 print:border-black print:bg-white"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <group.icon
                    size={18}
                    className="text-[rgb(var(--accent-neutral))]"
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    return (
                      <li key={item}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={!!checked[key]}
                            onChange={(e) =>
                              setChecked((c) => ({
                                ...c,
                                [key]: e.target.checked,
                              }))
                            }
                            data-ocid={`ai-search-prep.checklist.checkbox.${gi + 1}.${ii + 1}`}
                            className="mt-0.5 w-5 h-5 rounded border-border text-[rgb(var(--accent-indigo))] focus:ring-[rgb(var(--accent-indigo))] shrink-0"
                          />
                          <span className="text-sm text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-150">
                            {item}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CalloutBox
              variant="branding"
              icon={Sparkles}
              title="How to read your score"
            >
              <p className="mb-3">
                <strong className="text-foreground">24 or more checked</strong>:
                You are ahead of almost every small business. Keep your content
                fresh and run the monthly AI mention check to protect your lead.
              </p>
              <p className="mb-3">
                <strong className="text-foreground">16 to 23 checked</strong>:
                Solid foundation. Close the gaps in the lowest-scoring group
                first. Most businesses land here after one pass through the six
                steps.
              </p>
              <p>
                <strong className="text-foreground">Under 16 checked</strong>:
                Start with Step 6 (technical visibility) and Step 1 (pricing).
                They are the fastest wins and they unlock everything else.
              </p>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* SECTION 10: TOOLS AND RESOURCES */}
      <section
        id="tools"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-search-prep.tools.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Wrench}
            sectionNumber={10}
            title="Tools and Resources"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/ai-training"
              data-ocid="ai-search-prep.tools.item.1"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <BookOpen
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  AI Training and Tools
                  <ArrowRight
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Free courses and walkthroughs for Claude, Gemini, Make.com,
                  and NYC SBS training programs.
                </p>
              </div>
            </Link>

            <Link
              to="/home-services"
              data-ocid="ai-search-prep.tools.item.2"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <Wrench
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  The Home Service Business Playbook
                  <ArrowRight
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  A complete playbook for home service businesses preparing for
                  AI search and the agent era.
                </p>
              </div>
            </Link>

            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ai-search-prep.tools.item.3"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <Search
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  Google Search Console
                  <ExternalLink
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Verify your domain and submit your sitemap. Free.
                </p>
              </div>
            </a>

            <a
              href="https://www.bing.com/webmasters"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ai-search-prep.tools.item.4"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <Globe
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  Bing Webmaster Tools
                  <ExternalLink
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Import your Google verification in one click. Free.
                </p>
              </div>
            </a>

            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ai-search-prep.tools.item.5"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <Tag size={18} className="text-[rgb(var(--accent-neutral))]" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  Google Rich Results Test
                  <ExternalLink
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Test whether your schema markup parses cleanly. Free.
                </p>
              </div>
            </a>

            <a
              href="https://www.opengraph.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ai-search-prep.tools.item.6"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <ExternalLink
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  Social preview checkers
                  <ExternalLink
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Test how your links appear when shared (opengraph.xyz or
                  LinkedIn Post Inspector). Free.
                </p>
              </div>
            </a>

            <Link
              to="/cloud-monitoring"
              data-ocid="ai-search-prep.tools.item.7"
              className="group rounded-xl border border-border bg-card p-5 hover:border-[rgb(var(--accent-neutral-border))] hover:shadow-neutral transition-all duration-200 flex items-start gap-4 md:col-span-2"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                <Cloud
                  size={18}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground mb-1 flex items-center gap-1">
                  Cloud Monitoring guide
                  <ArrowRight
                    size={14}
                    className="text-[rgb(var(--accent-indigo))] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </p>
                <p className="text-sm text-[rgb(var(--text-muted-readable))] leading-relaxed">
                  Keep your site online so AI systems can always reach it.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section
        id="faq"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="ai-search-prep.faq.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={HelpCircle}
            sectionNumber={11}
            title="Frequently Asked Questions"
          />
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FaqAccordionItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: CTA */}
      <section
        id="cta"
        className="py-16 md:py-20 bg-background"
        data-ocid="ai-search-prep.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 mb-5">
            <MapPin size={14} className="text-[rgb(var(--accent-indigo))]" />
            <span className="text-sm font-semibold text-[rgb(var(--accent-indigo))] uppercase tracking-wider">
              Start With One Step
            </span>
          </div>
          <h2 className="heading-section font-display font-bold text-3xl md:text-4xl text-foreground mb-5">
            Start With One Step
          </h2>
          <p className="text-base md:text-lg text-[rgb(var(--text-muted-readable))] leading-relaxed max-w-2xl mx-auto mb-8">
            You do not need to do all six steps this week. Pick one. Publish one
            pricing guide. Answer one real customer question. Verify one domain.
            Each step makes your business more visible to the systems your
            customers are already using.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/guides"
              search={{
                topic: undefined,
                businessType: undefined,
                keyword: undefined,
              }}
              data-ocid="ai-search-prep.cta.guides_button"
              className="button-cta inline-flex items-center gap-2"
            >
              <BookOpen size={15} />
              Explore All Guides
            </Link>
            <Link
              to="/home-services"
              data-ocid="ai-search-prep.cta.home_services_button"
              className="button-cta-gold inline-flex items-center gap-2"
            >
              <Wrench size={15} />
              The Home Service Playbook
            </Link>
            <Link
              to="/ai-training"
              data-ocid="ai-search-prep.cta.ai_training_button"
              className="button-cta-gold inline-flex items-center gap-2"
            >
              <Sparkles size={15} />
              AI Training and Tools
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
