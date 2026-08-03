import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Info,
  Quote,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ABOUT_ITEMS = [
  {
    id: "about-1",
    question: "What is AISmallBiz™?",
    answer:
      "AISmallBiz™ is a free resource hub created by Christian Lawson to help small and medium business owners use AI, proven strategies, and expert advice to grow their businesses. We provide industry-specific guides, personalized recommendations, and actionable tools: all at no cost.",
  },
  {
    id: "about-2",
    question: "Who created AISmallBiz™?",
    answer:
      "AISmallBiz™ was created by Christian Lawson, author of the Appreciated Branding framework and a business strategy advisor. All guides are based on real case studies and industry research.",
  },
  {
    id: "about-3",
    question: "Is AISmallBiz™ really free?",
    answer:
      "Yes, 100% free. All guides, tools, Q&A sessions, and checklists are available at no charge. Creating an account is optional but gives you personalized recommendations, progress tracking, and dashboard access.",
  },
  {
    id: "about-4",
    question: "Is my business information private?",
    answer:
      "Absolutely. Your business details are stored securely and are never shared or sold to third parties. We use them only to personalize your guide recommendations and action plans.",
  },
];

const BUSINESS_QA = [
  {
    id: "biz-1",
    question: "How do I make my business show up higher on Google?",
    answer: (
      <>
        Optimizing your Google Business Profile is the fastest lever for local
        search visibility: most small businesses ignore it entirely, which means
        even small improvements compound quickly. Ensure your profile is
        complete with accurate hours, photos, and regular posts to signal
        freshness to Google's index. For deeper strategies, visit our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          AI Guides page
        </a>{" "}
        or{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-2",
    question:
      "What is the best way to advertise on social media for a small business?",
    answer: (
      <>
        Start with one platform where your customers actually spend time:
        Instagram for visual products, Facebook for local community reach,
        LinkedIn for B2B. Organic content builds trust; paid ads amplify what is
        already working, not what is not. Browse our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Social Media Guides
        </a>{" "}
        for step-by-step ad strategies, or{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a tailored question
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-3",
    question: "How do I write a business plan?",
    answer: (
      <>
        A strong business plan covers your market opportunity, financial
        projections, operational model, and growth strategy: but it does not
        need to be 50 pages long. Start with a one-page lean canvas, then expand
        each section as needed. Head to our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Business Planning Guides
        </a>{" "}
        for templates backed by Big Four frameworks, or{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        to get personalized help.
      </>
    ),
  },
  {
    id: "biz-4",
    question: "How can AI help my small business?",
    answer: (
      <>
        AI can handle tasks that previously required an entire team: drafting
        marketing copy, analyzing customer reviews, generating social media
        content, answering customer FAQs, and forecasting inventory. The key is
        identifying the three most repetitive tasks in your workflow and finding
        AI tools to automate them first. Explore{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          our AI Tools Guides
        </a>{" "}
        or{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        specific to your business type.
      </>
    ),
  },
  {
    id: "biz-5",
    question: "What branding techniques actually work for small businesses?",
    answer: (
      <>
        Appreciated Branding: a framework developed by Christian Lawson: proves
        that emotional connection, authenticity, and community involvement
        consistently outperform expensive advertising. Remembering customers'
        names, sharing your origin story, and aligning with local values are all
        zero-cost tactics that build lasting loyalty. Read the full{" "}
        <a
          href="/branding"
          className="text-primary underline-offset-4 hover:underline"
        >
          Appreciated Branding guide
        </a>{" "}
        for practical examples.
      </>
    ),
  },
  {
    id: "biz-6",
    question: "How do I improve customer retention?",
    answer: (
      <>
        Retention starts at the first interaction: a warm greeting, a follow-up
        message, or a simple loyalty card signal that customers are valued.
        Beyond that, collect feedback actively and close the loop by showing
        customers you acted on it. For more proven retention strategies, visit
        our{" "}
        <a
          href="/taffer-advice"
          className="text-primary underline-offset-4 hover:underline"
        >
          Business Rescue Guide
        </a>{" "}
        or{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-7",
    question: "How do I get more Google Maps reviews?",
    answer: (
      <>
        Ask every satisfied customer directly after service: either in-person or
        via a follow-up text. Create a short link directly to your Google review
        page (use Google's Place ID tool) and put it on your receipts and
        business cards. For a step-by-step strategy,{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        or visit our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Google Maps guides
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-8",
    question: "What social media platform should a small business prioritize?",
    answer: (
      <>
        For most small businesses, Instagram and Google Business Profile give
        the highest return on time. Instagram for building relationships and
        showcasing your work; Google Business Profile for local search
        visibility and reviews. Pick based on where your specific customers
        already spend time: then ask them directly. Browse our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Social Media guides
        </a>{" "}
        for platform-specific strategies.
      </>
    ),
  },
  {
    id: "biz-9",
    question: "How do I write a one-page business plan?",
    answer: (
      <>
        A one-page business plan covers: (1) What you sell and who you sell it
        to, (2) How you make money (pricing model), (3) Your top 3 marketing
        channels, (4) Your 90-day goals. See our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Business Planning guide
        </a>{" "}
        for a step-by-step template. Also try{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          asking for a personalized plan
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-10",
    question: "I have no budget for marketing: where do I start?",
    answer: (
      <>
        Start with three free channels: Google Business Profile (free listing),
        Instagram (free content), and word-of-mouth referral incentives. These
        three alone can generate consistent customers for a local business with
        zero budget if done consistently. For more zero-budget tactics,{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        or browse our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          marketing guides
        </a>
        .
      </>
    ),
  },
  {
    id: "biz-11",
    question: "What does AI actually do for a small business?",
    answer: (
      <>
        AI can help you: (1) Write your website copy, social posts, and business
        plan first drafts, (2) Analyze your sales patterns and suggest what to
        stock or promote, (3) Answer customer questions 24/7 via chatbot, (4)
        Find the best time to post on social media. AISmallBiz™ helps you
        understand which AI tools fit your business type and how to use them.
        Explore our{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          AI Tools guides
        </a>
        .
      </>
    ),
  },
];

type TabId = "about" | "business";

function AccordionSection({
  items,
  ocidPrefix,
}: {
  items: Array<{ id: string; question: string; answer: React.ReactNode }>;
  ocidPrefix: string;
}) {
  const ids = items.map((i) => i.id);
  const [open, setOpen] = useState<string[]>(ids);
  const allExpanded = open.length === ids.length;

  const toggleAll = () => setOpen(allExpanded ? [] : ids);

  return (
    <>
      <div className="flex justify-end mb-5">
        <button
          type="button"
          onClick={toggleAll}
          data-ocid={`${ocidPrefix}.toggle_all`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <Accordion.Root
        type="multiple"
        value={open}
        onValueChange={setOpen}
        data-ocid={`${ocidPrefix}.accordion`}
        className="space-y-3"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.05 + index * 0.06,
              ease: "easeOut",
            }}
          >
            <Accordion.Item
              value={item.id}
              className="rounded-xl border border-primary/18 bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-200"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  data-ocid={`${ocidPrefix}.question.${index + 1}`}
                  className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer [&[data-state=open]_.chevron]:rotate-180"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-foreground leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="chevron shrink-0 text-muted-foreground transition-transform duration-300 ease-in-out"
                    aria-hidden="true"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div
                  data-ocid={`${ocidPrefix}.answer.${index + 1}`}
                  className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed"
                >
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </motion.div>
        ))}
      </Accordion.Root>
    </>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const tabs: Array<{
    id: TabId;
    label: string;
    icon: typeof Info;
    count: number;
  }> = [
    {
      id: "about",
      label: "About AISmallBiz™",
      icon: Info,
      count: ABOUT_ITEMS.length,
    },
    {
      id: "business",
      label: "Business Q&A",
      icon: HelpCircle,
      count: BUSINESS_QA.length,
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav
        className="bg-background border-b border-border"
        aria-label="Breadcrumb"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link
            to="/"
            className="hover:text-foreground transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-foreground font-medium">FAQ</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-hero-vibrant rounded-2xl px-8 py-12 mb-8 text-center border border-[#6366F1]/15">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="heading-hero mb-3">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers about AISmallBiz™ and common small business
              questions: all in one place.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tabbed content */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-14">
          {/* Tab bar */}
          <div
            data-ocid="faq.tabs"
            className="flex gap-1 border-b border-border mb-8"
          >
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  data-ocid={`faq.tab.${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <TabIcon size={15} />
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab: About AISmallBiz */}
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AccordionSection items={ABOUT_ITEMS} ocidPrefix="faq.about" />
            </motion.div>
          )}

          {/* Tab: Business Q&A */}
          {activeTab === "business" && (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AccordionSection items={BUSINESS_QA} ocidPrefix="faq.business" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Taffer FAQ Section */}
      <section
        className="bg-card border-t border-border"
        data-ocid="faq.taffer_section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#6366F1]/15">
              <AlertTriangle size={20} className="text-[#6366F1]" />
            </div>
            <Badge className="text-xs font-semibold px-3 py-1 rounded-full badge-primary-vibrant">
              Bar Rescue Wisdom
            </Badge>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Jon Taffer's Bottom Line on Business
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
            If you have questions, there are gaps in your communication.
            Taffer's framework for eliminating the need for FAQs entirely.
          </p>

          {/* Hero Taffer quote */}
          <div className="rounded-2xl p-7 mb-8 bg-[#EEF2FF]">
            <AlertTriangle size={28} className="mb-3 text-[#6366F1]" />
            <blockquote className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3 text-[#1e1b4b]">
              &ldquo;FAQs are questions your customers are too polite to say out
              loud. The real question is: why are these things unclear in the
              first place? Fix the root problem.&rdquo;
            </blockquote>
            <p className="text-sm text-[#6366F1]/70">
              : Jon Taffer, Bar Rescue. Applied to your business: every FAQ is a
              symptom of a broken communication somewhere in your operations.
            </p>
          </div>

          {/* Principle cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {(
              [
                {
                  quote: '"Clarity Is a Competitive Advantage"',
                  detail:
                    "If customers are asking it, you are not communicating it. Every FAQ is a symptom of a broken communication somewhere in your business.",
                },
                {
                  quote: '"Excuses Are Not Answers"',
                  detail:
                    "\u2018We\u2019re working on it\u2019 is not an answer. \u2018It will be fixed by Friday\u2019 is an answer. Be specific. Be accountable.",
                },
                {
                  quote: '"Train Your Team Before Your Customers"',
                  detail:
                    "If your staff cannot answer the most common questions, your customers will find someone who can.",
                },
                {
                  quote: '"The Best FAQ Is No FAQ"',
                  detail:
                    "The goal is not a longer FAQ page. It is a business so clear, so reliable, so well-communicated that customers never need to ask.",
                },
              ] as Array<{ quote: string; detail: string }>
            ).map((p) => (
              <Card key={p.quote}>
                <CardContent className="p-5">
                  <blockquote className="font-display text-base font-semibold italic mb-2 text-[#312e81]">
                    {p.quote}
                  </blockquote>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appreciated Branding FAQ Section */}
      <section
        className="bg-muted/20 border-t border-border"
        data-ocid="faq.branding_section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#6366F1]/12">
              <Users2 size={20} className="text-[#6366F1]" />
            </div>
            <Badge className="text-xs font-semibold px-3 py-1 rounded-full badge-primary-vibrant">
              Appreciated Branding
            </Badge>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
            Appreciated Branding: Transparency Builds Trust
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            By Christian Lawson
          </p>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
            How Appreciated Branding principles apply directly to customer
            communication and FAQ design.
          </p>

          {/* Pull quote */}
          <div className="rounded-xl p-5 mb-10 flex items-start gap-4 bg-[#EEF2FF] border border-[#6366F1]/20">
            <Quote size={32} className="shrink-0 text-[#6366F1]/60" />
            <div>
              <p className="font-display text-lg font-semibold italic leading-relaxed text-[#312e81]">
                &ldquo;Every question a customer asks is a gift. It tells you
                exactly where your brand communication has a gap.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Christian Lawson, <em>Appreciated Branding: This Is the Way</em>
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
                  subtitle: "Answer the Question Behind the Question",
                  body: "See what customers are really asking. A question about your return policy is not about policy: it is about whether they can trust you. A question about ingredients is not about ingredients: it is about whether you care about their health. Answer what they mean, not just what they said.",
                  example:
                    "For every FAQ entry, ask: what is the customer really worried about? Address that fear directly in the first sentence.",
                },
                {
                  number: "02",
                  title: "Authenticity",
                  subtitle: "Own Your Mistakes Publicly",
                  body: "Real brands address problems honestly, not defensively. When something went wrong, say so, explain what you did to fix it, and show what you changed. Customers forgive honest businesses. They do not forgive defensive ones.",
                  example:
                    "Add an 'How We Fixed It' section to your most-asked complaint-adjacent FAQ. Turn a weakness into a trust signal.",
                },
                {
                  number: "03",
                  title: "Customer-Centricity",
                  subtitle:
                    "Design Your FAQs for the Customer, Not the Company",
                  body: "Write answers in plain language that empowers, not deflects. If your FAQ answer requires a customer to do five things before they get help, it is not an answer: it is an obstacle. The best FAQ answer is one sentence that completely resolves the question.",
                  example:
                    "Test every FAQ answer by reading it aloud. If it sounds like a legal document, rewrite it in the language your best customer uses.",
                },
                {
                  number: "04",
                  title: "Emotional Connection",
                  subtitle: "Show Personality in Your Answers",
                  body: "FAQ pages can be warm, funny, and human. They do not have to read like legal documents. Your tone in FAQ answers is a brand signal. A cold, formal FAQ says: we are a company. A warm, human FAQ says: we are people who care.",
                  example:
                    "Pick your three most-asked questions and rewrite the answers with personality. Match the tone to how your best staff member would explain it face-to-face.",
                },
                {
                  number: "05",
                  title: "Consistency",
                  subtitle: "Keep Every Answer Current",
                  body: "Outdated FAQs are lies. If your hours changed, your policy changed, or your process changed and your FAQ still shows the old information, you are eroding trust without knowing it. Every outdated answer is a broken promise.",
                  example:
                    "Set a 90-day calendar reminder to review and update your FAQ page. Flag any answer that references specific prices, dates, or policies for priority review.",
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
                data-ocid={`faq.branding_pillar.${p.number}`}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-none w-16 flex items-center justify-center bg-[#6366F1]/8">
                      <span className="font-display text-2xl font-bold rotate-90 tracking-tight text-[#6366F1]/50">
                        {p.number}
                      </span>
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {p.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          : {p.subtitle}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {p.body}
                      </p>
                      <div className="rounded-lg p-3 text-xs bg-[#EEF2FF] border-l-[3px] border-[#6366F1]/40">
                        <strong className="text-[#6366F1]">Apply this:</strong>{" "}
                        <span className="text-muted-foreground">
                          {p.example}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-muted/40 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-muted-foreground mb-4">
              Still have questions? Browse our guides for step-by-step help
              tailored to your business.
            </p>
            <Button asChild data-ocid="faq.browse_guides_link">
              <Link
                to="/guides"
                search={{
                  topic: undefined,
                  businessType: undefined,
                  keyword: undefined,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Browse Guides
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
