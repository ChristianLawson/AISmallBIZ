import { BackToTop } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { GuidePrerequisiteBanner } from "@/components/GuidePrerequisiteBanner";
import { GuideTabToggle } from "@/components/GuideTabToggle";
import { Layout } from "@/components/Layout";
import { PremiumGate } from "@/components/PremiumGate";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickStartTab } from "@/components/QuickStartTab";
import { RecommendedToolsBox } from "@/components/RecommendedToolsBox";
import { SectionQA } from "@/components/SectionQA";
import { ChoosingServiceSection } from "@/components/onlineservices/ChoosingServiceSection";
import { FormationServicesSection } from "@/components/onlineservices/FormationServicesSection";
import { HRPayrollSection } from "@/components/onlineservices/HRPayrollSection";
import { OnlineAttractingWomenSection } from "@/components/onlineservices/OnlineAttractingWomenSection";
import { OnlineServicesIntroSection } from "@/components/onlineservices/OnlineServicesIntroSection";
import { OnlineServicesQA } from "@/components/onlineservices/OnlineServicesQA";
import { OnlineServicesSocialMediaSection } from "@/components/onlineservices/OnlineServicesSocialMediaSection";
import { ProTipsSection } from "@/components/onlineservices/ProTipsSection";
import { QuickStartChecklist } from "@/components/onlineservices/QuickStartChecklist";
import { ServiceComparisonTable } from "@/components/onlineservices/ServiceComparisonTable";
import { ServiceFinderQuiz } from "@/components/onlineservices/ServiceFinderQuiz";
import { StartupFintechSection } from "@/components/onlineservices/StartupFintechSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  Globe,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  Quote,
  Rocket,
  Share2,
  Users,
  Users2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NYCHelpCallout } from "../components/NYCHelpCallout";

const SECTIONS = [
  { id: "why-online", label: "Why Online Services", icon: Globe },
  { id: "formation", label: "Formation & Legal", icon: Building2 },
  { id: "fintech", label: "Startup & Fintech", icon: CreditCard },
  { id: "hr-payroll", label: "HR & Payroll", icon: Users },
  { id: "choosing", label: "Choosing the Right Service", icon: HelpCircle },
  { id: "pro-tips", label: "Pro Tips & Savings", icon: Lightbulb },
  { id: "attracting-women", label: "Attracting Women Clients", icon: Users2 },
  { id: "social-media", label: "Social Media", icon: Share2 },
  { id: "checklist", label: "Quick-Start Checklist", icon: ClipboardCheck },
  { id: "qa", label: "Q&A", icon: MessageCircle },
];

export default function OnlineServicesGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let best: string | null = null;
      let bestDist = Number.POSITIVE_INFINITY;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < bestDist) {
          bestDist = dist;
          best = s.id;
        }
      }
      setActiveSection(best);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 88;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  };

  return (
    <Layout>
      <ProgressBar />
      <BackToTop
        sections={SECTIONS.map((s) => ({ id: s.id, label: s.label }))}
      />
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="online-services-guide.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Rocket size={12} />
              Business Launch Playbook 2026
            </span>

            <h1 className="heading-hero text-foreground">
              Online Services to{" "}
              <span className="text-gradient-vibrant">Launch</span> &amp;{" "}
              <span className="text-accent-neutral">Run</span> Your Business
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable">
              You get a short list of ten trusted online platforms that handle
              forming, funding, staffing, and running your business so you stop
              guessing and stop overspending. Picking the right ones early saves
              you hundreds of hours, avoids costly mistakes, and keeps your
              customers happy from day one.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "10 Vetted Platforms", id: "choosing" },
                { label: "Formation to HR in One Guide", id: "formation" },
                { label: "30-Task Launch Checklist", id: "checklist" },
              ].map((pill, i) => (
                <a
                  key={pill.label}
                  href={`#${pill.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(pill.id);
                  }}
                  data-ocid={`online-services-guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border cursor-pointer transition-colors duration-200 hover:bg-accent-neutral/10 hover:border-accent-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-neutral opacity-70" />
                  {pill.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="online-services-guide.section_nav"
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
                data-ocid={`online-services-guide.section_nav.item.${i + 1}`}
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* Prerequisite Banner */}
        <GuidePrerequisiteBanner />

        {/* 60-Second Service Finder Quiz */}
        <ServiceFinderQuiz />

        {/* Side-by-side Comparison Table */}
        <ServiceComparisonTable />

        <div id="why-online">
          <OnlineServicesIntroSection />
        </div>
        <div id="formation">
          <FormationServicesSection />
        </div>
        <div id="fintech">
          <StartupFintechSection />
        </div>
        <div id="hr-payroll">
          <HRPayrollSection />
        </div>
        <div id="choosing">
          <ChoosingServiceSection />
        </div>
        <div id="pro-tips">
          <ProTipsSection />
        </div>
        <div id="attracting-women">
          <OnlineAttractingWomenSection />
        </div>
        <div id="social-media">
          <OnlineServicesSocialMediaSection />
        </div>
        <div id="checklist">
          <QuickStartChecklist />
        </div>

        {/* Q&A SECTION */}
        <SectionQA
          accentColor="#475569"
          items={[
            {
              q: "Which formation service is best for a first-time founder?",
              a: "ZenBusiness and Northwest Registered Agent are the most founder-friendly. ZenBusiness offers the best balance of price, speed, and ongoing compliance support. Northwest has the best customer service and privacy protection.",
            },
            {
              q: "Should I form an LLC or a Corporation?",
              a: "For most small businesses, an LLC is the right choice. It offers liability protection without the complexity of corporate governance. Choose a Corporation only if you plan to raise venture capital or issue stock options.",
            },
            {
              q: "Do I need a separate business bank account?",
              a: "Yes: and not just for accounting. A separate business account protects your personal assets (piercing the corporate veil is real), makes tax filing easier, and signals professionalism to customers and partners.",
            },
            {
              q: "When should I switch from DIY payroll to a service like Gusto?",
              a: "As soon as you have your first employee or contractor. Payroll mistakes trigger IRS penalties, and the time you spend calculating taxes is time you are not growing your business. Gusto pays for itself in peace of mind.",
            },
            {
              q: "What is the biggest mistake founders make with online services?",
              a: "Choosing based on price alone. The cheapest formation service often lacks ongoing compliance support, which leads to missed filings, penalties, and even dissolution. Invest in quality upfront.",
            },
          ]}
        />

        {/* Taffer Online Services Section */}
        <PremiumGate
          sectionTitle="Bar Rescue Strategies"
          teaserContent={
            <p>
              Discover how Jon Taffer's Bar Rescue framework applies to online
              services: from diagnosing failures to executing a rapid turnaround
              plan.
            </p>
          }
        >
          <section
            id="taffer-launch"
            data-ocid="online-services-guide.taffer_section"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral-soft">
                <AlertTriangle size={20} className="text-accent-neutral" />
              </div>
              <span className="badge-primary-vibrant inline-block">
                Bar Rescue Wisdom
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Jon Taffer on Launching Right: No Shortcuts, No Excuses
            </h2>
            <p className="text-muted-readable text-lg mb-8 max-w-2xl">
              The same principles that rescue failing bars apply to every
              business launch. Get the foundation right before you get loud.
            </p>

            {/* Hero Taffer quote */}
            <div className="rounded-2xl p-7 mb-8 bg-accent-neutral-soft border border-accent-neutral-border">
              <AlertTriangle size={28} className="mb-3 text-accent-neutral" />
              <blockquote className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3 text-foreground">
                &ldquo;Using the right tools to launch your business is not
                optional. It is the difference between building on concrete and
                building on sand.&rdquo;
              </blockquote>
              <p className="text-[15px] text-muted-readable">
                Jon Taffer, Bar Rescue. The tools you choose at launch determine
                whether you have a real business or a liability.
              </p>
            </div>

            {/* Principle cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {(
                [
                  {
                    quote: '"Get Legal Before You Get Loud"',
                    detail:
                      "I have seen more businesses fail from legal problems than from bad products. Form your LLC. Get your contracts. Protect yourself before you market yourself.",
                  },
                  {
                    quote: '"Your Formation Is Your Foundation"',
                    detail:
                      "Choosing the wrong business structure can cost you tens of thousands in taxes and legal fees. This is not the place to cut corners.",
                  },
                  {
                    quote: '"Technology Is Not a Luxury, It Is Infrastructure"',
                    detail:
                      "Businesses that still run on spreadsheets and paper in 2026 are at a structural disadvantage. Invest in the right tools from day one.",
                  },
                  {
                    quote: '"Professional Services Pay for Themselves"',
                    detail:
                      "Gusto for payroll, Stripe Atlas for banking, Rocket Lawyer for contracts, these tools save more money than they cost. The question is not whether you can afford them. It is whether you can afford not to use them.",
                  },
                ] as Array<{ quote: string; detail: string }>
              ).map((p) => (
                <Card key={p.quote} className="bg-card">
                  <CardContent className="p-5">
                    <blockquote className="font-display text-base font-semibold italic mb-2 text-accent-neutral">
                      {p.quote}
                    </blockquote>
                    <p className="text-[15px] text-muted-readable leading-relaxed">
                      {p.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Launch Readiness Audit */}
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Launch Readiness Audit: 6-Category Checklist
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(
                [
                  {
                    category: "Legal Formation",
                    color: "#475569",
                    bg: "rgba(71,85,105,0.07)",
                    items: [
                      "Business entity chosen (LLC/Corp)",
                      "Articles of Organization filed",
                      "EIN obtained",
                      "Operating agreement written",
                      "Registered agent assigned",
                      "Business bank account opened",
                    ],
                  },
                  {
                    category: "Compliance & Permits",
                    color: "#B45309",
                    bg: "rgba(180,83,9,0.06)",
                    items: [
                      "Business license obtained",
                      "Industry-specific permits identified",
                      "Zoning compliance verified",
                      "State/local tax registration complete",
                      "Sales tax nexus identified",
                    ],
                  },
                  {
                    category: "Financial Infrastructure",
                    color: "#C2410C",
                    bg: "rgba(194,65,12,0.06)",
                    items: [
                      "Business checking account separate from personal",
                      "Accounting software set up",
                      "Payroll system selected",
                      "Bookkeeper or CPA identified",
                      "Payment processing enabled",
                    ],
                  },
                  {
                    category: "HR & Staffing",
                    color: "#0D9488",
                    bg: "rgba(13,148,136,0.06)",
                    items: [
                      "Employment contracts template created",
                      "Worker classification determined",
                      "Payroll tax obligations understood",
                      "Benefits structure decided",
                      "Onboarding checklist built",
                    ],
                  },
                  {
                    category: "Digital Presence",
                    color: "#7C3AED",
                    bg: "rgba(124,58,237,0.06)",
                    items: [
                      "Domain name registered",
                      "Business email created",
                      "Google Business Profile claimed",
                      "Social media handles secured",
                      "Website platform chosen",
                    ],
                  },
                  {
                    category: "Protection & Insurance",
                    color: "#1D4ED8",
                    bg: "rgba(29,78,216,0.06)",
                    items: [
                      "General liability insurance obtained",
                      "Professional liability reviewed",
                      "Workers compensation if employees",
                      "Business interruption insurance reviewed",
                      "Trademark or IP protection considered",
                    ],
                  },
                ] as Array<{
                  category: string;
                  color: string;
                  bg: string;
                  items: string[];
                }>
              ).map((cat) => (
                <div
                  key={cat.category}
                  className="rounded-xl p-4"
                  style={{
                    background: cat.bg,
                    border: `1px solid ${cat.color}40`,
                  }}
                >
                  <div
                    className="font-semibold text-[15px] mb-3"
                    style={{ color: cat.color }}
                  >
                    {cat.category}
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: cat.color }}
                        />
                        <span className="text-[15px] text-muted-readable">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </PremiumGate>

        {/* Appreciated Branding Online Services Section */}
        <PremiumGate
          sectionTitle="Appreciated Branding Deep-Dive"
          teaserContent={
            <p>
              Reid Holmes' Appreciated Branding methodology builds lasting
              customer loyalty through genuine emotional connection and brand
              identity.
            </p>
          }
        >
          <section
            id="branding-launch"
            data-ocid="online-services-guide.branding_section"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral-soft">
                <Users2 size={20} className="text-accent-neutral" />
              </div>
              <span className="badge-accent-vibrant inline-block">
                Appreciated Branding
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
              Appreciated Branding: Build Your Brand Identity While You Build
              Your Business
            </h2>
            <p className="text-[15px] text-muted-readable mb-2">
              By Christian Lawson, from{" "}
              <em>Appreciated Branding: This Is The Way</em>
            </p>
            <p className="text-muted-readable text-lg mb-8 max-w-2xl">
              The tools you choose at launch are not just operational decisions,
              they are brand decisions.
            </p>

            {/* Pull quote */}
            <div className="rounded-xl p-5 mb-10 flex items-start gap-4 bg-accent-neutral-soft border border-accent-neutral-border">
              <Quote
                size={32}
                className="shrink-0 text-accent-neutral opacity-40"
              />
              <div>
                <p className="font-display text-lg font-semibold italic leading-relaxed text-foreground">
                  &ldquo;The tools you choose to launch your business say
                  something about your brand. Choose tools that reflect the
                  quality and care you intend to deliver.&rdquo;
                </p>
                <p className="text-[15px] text-muted-readable mt-2">
                  Christian Lawson,{" "}
                  <em>Appreciated Branding: This Is the Way</em>
                </p>
              </div>
            </div>

            {/* 5 Pillars */}
            <div className="space-y-5">
              {(
                [
                  {
                    number: "01",
                    title: "Empathy",
                    subtitle: "Choose Tools Built for Your Customer Journey",
                    body: "Your business tools shape your customer's experience. The payment processor you choose determines how customers pay. The HR system you choose determines how your team is treated. Appreciated Branding says: every operational tool is also a brand tool. Choose platforms (Stripe, Gusto, Rocket Lawyer) that reflect reliability, professionalism, and care.",
                    example:
                      "For each service tool you select, ask: how does this tool affect my customer's or employee's experience? Choose the one that earns more trust.",
                  },
                  {
                    number: "02",
                    title: "Authenticity",
                    subtitle:
                      "Build Legal and Financial Transparency In From the Start",
                    body: "Appreciated Branding begins at formation. A properly structured LLC, clear contractor agreements, and a separate business bank account signal: this is a real business that takes itself seriously. Customers and partners can sense operational discipline, or the absence of it.",
                    example:
                      "Use ZenBusiness or Northwest Registered Agent to form your LLC properly. Do not shortcut the legal foundation. It is the first authentic signal your brand sends.",
                  },
                  {
                    number: "03",
                    title: "Customer-Centricity",
                    subtitle: "Design Your Operations Around Customer Outcomes",
                    body: "Slow payroll means unhappy staff. Unhappy staff means poor customer service. Poor customer service means lost customers. The tools you use to run your business internally have a direct line to your customer experience. Appreciated Branding traces every operational decision back to its effect on the person you serve.",
                    example:
                      "Map your internal operations to your customer experience. Identify one back-office inefficiency that directly impacts your customers and fix it first.",
                  },
                  {
                    number: "04",
                    title: "Emotional Connection",
                    subtitle: "Your Brand Story Starts Before You Open",
                    body: "Why did you choose this structure? Why did you choose this name? What does the domain you registered mean to you? These decisions are the origin story of a brand. Customers who know the real story behind a business, the sacrifices, the choices, the values baked in from day one, connect more deeply than customers who only know the product.",
                    example:
                      "Document your founding decisions and the reasons behind them. These become your origin story content for social media, your About page, and your pitch to investors.",
                  },
                  {
                    number: "05",
                    title: "Consistency",
                    subtitle:
                      "Build Operational Systems That Deliver Your Brand Promise Every Day",
                    body: "A business that pays its staff late, files late, and operates from personal bank accounts will eventually deliver that chaos to its customers. Appreciated Branding requires that the discipline you want to show customers starts inside the business. Gusto for payroll, proper accounting, and clean legal documents are how you operationalize your brand promise.",
                    example:
                      "Set up automated payroll, tax filing reminders, and monthly financial reviews before your first dollar of revenue. Systems first, growth second.",
                  },
                ] as Array<{
                  number: string;
                  title: string;
                  subtitle: string;
                  body: string;
                  example: string;
                }>
              ).map((p) => (
                <Card
                  key={p.number}
                  className="overflow-hidden"
                  data-ocid={`online-services-guide.branding_pillar.${p.number}`}
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="flex-none w-16 flex items-center justify-center bg-accent-neutral-soft">
                        <span className="font-display text-2xl font-bold rotate-90 tracking-tight text-accent-neutral opacity-50">
                          {p.number}
                        </span>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-lg text-foreground">
                            {p.title}
                          </h3>
                          <span className="text-[15px] text-muted-readable">
                            : {p.subtitle}
                          </span>
                        </div>
                        <p className="text-[15px] text-muted-readable leading-relaxed mb-3">
                          {p.body}
                        </p>
                        <div className="rounded-lg p-3 text-[15px] bg-accent-neutral-soft border-l-[3px] border-accent-neutral">
                          <strong className="text-accent-neutral">
                            Apply this:
                          </strong>{" "}
                          <span className="text-muted-readable">
                            {p.example}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </PremiumGate>

        {/* NYC Help Callout */}
        <NYCHelpCallout />

        {/* Author Attribution */}
        <GuideAuthorFooter />

        {/* SHARE & BACK */}
        <section
          className="rounded-2xl border border-border bg-muted/30 px-8 py-8 text-center"
          data-ocid="online-services-guide.share_section"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="online-services-guide.share_button"
              onClick={() => {
                const shareData = {
                  title: "Online Services to Launch Your Business",
                  text: "The 10 best online platforms for forming, funding, and operating your business.",
                  url: window.location.href,
                };
                if (navigator.share) {
                  navigator.share(shareData);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-[15px] font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Share2 size={16} />
              Share This Guide
            </button>
            <Button
              asChild
              variant="outline"
              data-ocid="online-services-guide.back_to_guides_link"
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
                ← Back to All Guides
              </Link>
            </Button>
          </div>
        </section>

        <RecommendedToolsBox />

        {/* CTA */}
        <section
          className="rounded-2xl p-10 text-center bg-accent-neutral-soft border border-accent-neutral-border"
          data-ocid="online-services-guide.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Already registered? Build your growth strategy.
          </h2>
          <p className="text-muted-readable text-lg mb-6 max-w-2xl mx-auto">
            Once your business is formed, the real work begins. Ask a question
            about your next step and get guidance tailored to your launch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-accent-indigo hover:bg-accent-indigo text-white"
              data-ocid="online-services-guide.ask_question_button"
            >
              <Link to="/ask-a-question" onClick={() => window.scrollTo(0, 0)}>
                Ask a Question About Launching My Business
                <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
