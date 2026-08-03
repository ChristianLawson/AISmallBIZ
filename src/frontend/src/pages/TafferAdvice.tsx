import { Layout } from "@/components/Layout";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Flame,
  Square,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const BUSINESS_TYPE_PILLS = [
  { value: "general", label: "General", emoji: "🏢" },
  { value: "deli", label: "Deli", emoji: "🥪" },
  { value: "salon", label: "Salon", emoji: "💇" },
  { value: "restaurant", label: "Restaurant", emoji: "🍽️" },
  { value: "retail", label: "Retail", emoji: "🛍️" },
];

const TAFFER_RULES: Record<string, { title: string; quote: string }> = {
  general: {
    title: "Jon Taffer's #1 Rule for All Small Businesses",
    quote:
      "Stop making excuses and start engineering solutions. Every problem in your business is a people problem, a systems problem, or a process problem. Find it. Fix it. Now.",
  },
  deli: {
    title: "Jon Taffer's #1 Rule for Delis",
    quote:
      "Your deli is not a food problem. Nobody walks out of a deli complaining about pastrami. They walk out complaining about slow service, unfriendly staff, or a dirty counter. Fix the operation. The sandwich takes care of itself.",
  },
  salon: {
    title: "Jon Taffer's #1 Rule for Salons",
    quote:
      "Retention is your entire business. If a client does not rebook at checkout, you did not do your job. Great hair is the minimum: the experience is the product.",
  },
  restaurant: {
    title: "Jon Taffer's #1 Rule for Restaurants",
    quote:
      "Stop blaming circumstances and start engineering solutions. A failing restaurant is never a food problem: it is always a people, systems, or process problem. The best chef in the world cannot save a broken operation.",
  },
  retail: {
    title: "Jon Taffer's #1 Rule for Retail",
    quote:
      "If your store is not worth visiting, you do not have a retail business: you have a warehouse. Every square foot of your floor should earn its keep. Experience first, inventory second.",
  },
};

const TAFFER_CHALLENGES: Record<
  string,
  Array<{ day: number; action: string; link?: string }>
> = {
  general: [
    {
      day: 1,
      action:
        "Walk your business as a first-time customer. Write down 5 things that would stop you from returning.",
    },
    {
      day: 2,
      action:
        "Pull last month's P&L. Calculate your food/product cost % and labor %. Are they where they need to be?",
    },
    {
      day: 3,
      action:
        "Read every Google review you have received in the past 90 days. Write a response to any unanswered reviews.",
    },
    {
      day: 4,
      action:
        "Write a one-page SOP (standard operating procedure) for your most critical daily task. Have staff review it.",
      link: "/guides",
    },
    {
      day: 5,
      action:
        "Have a 1-on-1 conversation with each team member about their biggest frustration. Do not solve: just listen.",
    },
    {
      day: 6,
      action:
        "Identify your single highest-margin product or service and create a plan to feature it more prominently.",
      link: "/branding",
    },
    {
      day: 7,
      action:
        "Write your 30-day action plan with 3 specific, measurable goals. Post it where your team can see it.",
      link: "/guides",
    },
  ],
  deli: [
    {
      day: 1,
      action:
        "Count your food waste today. Every item thrown out is money in the trash. Set a target of less than 4% waste.",
      link: "/deli-guide",
    },
    {
      day: 2,
      action:
        "Time your counter service. If any customer waits more than 3 minutes at peak, that is your bottleneck.",
    },
    {
      day: 3,
      action:
        "Create this week's rotating special using ingredients you already have. Name it after your neighborhood.",
      link: "/deli-guide",
    },
    {
      day: 4,
      action:
        "Update your Google Business Profile with a photo of today's special. Do this every single morning.",
    },
    {
      day: 5,
      action:
        "Ask 10 customers today: 'What sandwich would you love to see on our menu?' Listen and write it down.",
    },
    {
      day: 6,
      action:
        "Cross-train one employee on a second station. Document the process while you do it.",
      link: "/taffer-advice",
    },
    {
      day: 7,
      action:
        "Calculate your average ticket. Set a goal to increase it by $1.50 through upselling drinks or sides.",
      link: "/deli-guide",
    },
  ],
  salon: [
    {
      day: 1,
      action:
        "Check your rebook rate for last month. If less than 60% of clients rebook at checkout, that is your #1 problem.",
      link: "/salon-guide",
    },
    {
      day: 2,
      action:
        "Post a before/after Reel on Instagram. Tag your location. Respond to every comment within 1 hour.",
    },
    {
      day: 3,
      action:
        "Text 10 clients who have not visited in 90+ days with a personal 'we miss you' message. No discount. Just genuine.",
      link: "/salon-guide",
    },
    {
      day: 4,
      action:
        "Update your Google Business Profile with 3 new photos. Ask a client right after payment for a Google review.",
    },
    {
      day: 5,
      action:
        "Review your pricing. Are you due for a 10% increase? Calculate what that adds annually.",
      link: "/salon-guide",
    },
    {
      day: 6,
      action:
        "Role-play a difficult client scenario with your team. Practice empathy, not scripts.",
      link: "/taffer-advice",
    },
    {
      day: 7,
      action:
        "Create a 'Founding Client' VIP card for your top 20 regulars. Early access, priority booking, name recognition.",
      link: "/salon-guide",
    },
  ],
  restaurant: [
    {
      day: 1,
      action:
        "Calculate your food cost % for the past week. Is it under 28%? If not, that is your turnaround starting point.",
      link: "/restaurant-guide",
    },
    {
      day: 2,
      action:
        "Walk the restaurant as a first-time diner: smell, sound, greeting, cleanliness. Fix the worst thing today.",
    },
    {
      day: 3,
      action:
        "Film a 60-second Reel of your kitchen in action during prep. Post it with a caption about your chef's story.",
      link: "/restaurant-guide",
    },
    {
      day: 4,
      action:
        "Respond to every unanswered Google review. For negatives: acknowledge, apologize, act. No arguing.",
    },
    {
      day: 5,
      action:
        "Identify your 3 highest-margin menu items. Make sure they are featured at top-right and mentioned by staff.",
      link: "/restaurant-guide",
    },
    {
      day: 6,
      action:
        "Calculate your prime cost (food + labor). Target is under 60%. Document it and share with your manager.",
      link: "/taffer-advice",
    },
    {
      day: 7,
      action:
        "Write a one-page 30-day plan: one operational fix, one menu engineering change, one marketing action.",
      link: "/guides",
    },
  ],
  retail: [
    {
      day: 1,
      action:
        "Identify your 10 slowest-moving SKUs. Put them on a clearance table today. Stop letting dead inventory take floor space.",
      link: "/retail-guide",
    },
    {
      day: 2,
      action:
        "Redesign one window display. Use your best-selling item front and center. Change it every 2 weeks.",
    },
    {
      day: 3,
      action:
        "Film a 'New In Today' Instagram Story. Show yourself unboxing or featuring a new arrival. Personal wins.",
      link: "/retail-guide",
    },
    {
      day: 4,
      action:
        "Update your Google Business Profile with store photos. Add your best-selling product as a listed item.",
    },
    {
      day: 5,
      action:
        "Reach out to one complementary local business about a cross-promotion. Even a simple 'refer each other' agreement.",
      link: "/branding",
    },
    {
      day: 6,
      action:
        "Create an invite for a VIP Saturday: your top 20 customers get early access to new arrivals. No public announcement.",
      link: "/retail-guide",
    },
    {
      day: 7,
      action:
        "Review your inventory turn rate. Target: every SKU should turn at least 4x per year. Cut what does not.",
      link: "/retail-guide",
    },
  ],
};

const SECTIONS = [
  {
    id: "operations",
    relevance: { deli: 1, salon: 2, restaurant: 1, retail: 2, general: 1 },
    icon: ClipboardList,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Operations & Systems",
    subtitle: "If your business runs on chaos, you do not have a business.",
    tips: [
      {
        heading: "Document every process: no exceptions",
        body: "If you cannot write it down, you cannot train it. Create standard operating procedures (SOPs) for opening, closing, customer service, and every repeatable task. A business that depends on one person's memory is a liability.",
      },
      {
        heading: "Eliminate waste before hiring more people",
        body: "More staff does not fix broken systems: it amplifies them. Walk your workflow end-to-end and cut every step that does not directly serve the customer or protect your margin. Waste is silent revenue leakage.",
      },
      {
        heading: "Measure what matters, every single day",
        body: "Revenue, cost of goods, labor percentage, average transaction value. If you are not checking your numbers daily, you are flying blind. Set a 15-minute morning ritual to review yesterday's performance.",
      },
      {
        heading: "Standardize before you delegate",
        body: "You cannot delegate effectively if there is no standard to measure against. Build the system first, then hand it off. That is how you scale without chaos.",
      },
    ],
  },
  {
    id: "customer-experience",
    relevance: { deli: 1, salon: 1, restaurant: 1, retail: 1, general: 2 },
    icon: Star,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Customer Experience",
    subtitle:
      "Your customers have options. Your job is to make sure they do not use them.",
    tips: [
      {
        heading: "The first 30 seconds define everything",
        body: "Greeting, eye contact, cleanliness, smell, sound: customers make a decision about your business before they have even opened their wallet. Audit your first impression today as if you have never been there before.",
      },
      {
        heading: "One bad review undoes ten good ones",
        body: "Respond to every negative review within 24 hours: professionally, specifically, and with a resolution. Do not argue, do not deflect. Own it, fix it, and let the world see you did. That is how you turn a critic into a customer.",
      },
      {
        heading: "Train staff on empathy, not just procedures",
        body: "Scripts alone do not build loyalty. Train your team to read body language, de-escalate frustration, and make customers feel genuinely valued. Role-play difficult scenarios monthly.",
      },
      {
        heading: "Ask for feedback: then actually use it",
        body: "A simple post-visit survey or table card asking 'What could we do better?' shows you care. Read every response. If three customers say the same thing, that is not feedback: that is a mandate.",
      },
    ],
  },
  {
    id: "accountability",
    relevance: { deli: 2, salon: 3, restaurant: 2, retail: 3, general: 3 },
    icon: Target,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Accountability & Leadership",
    subtitle: "The business does not have a problem. You have a problem.",
    tips: [
      {
        heading: "Own your numbers: no excuses",
        body: "Revenue is down? That is your responsibility. Labor costs too high? That is a decision you made. When owners stop blaming the economy, the neighborhood, or their staff and start owning outcomes: that is when businesses turn around.",
      },
      {
        heading: "Hold your team to the standard you set",
        body: "If you tolerate mediocrity, you are endorsing it. Set clear expectations, provide the tools to meet them, and follow through with consequences when they are not met. Consistency in accountability builds team culture.",
      },
      {
        heading: "The owner's attitude is the business's culture",
        body: "Your staff watches how you behave more than they listen to what you say. If you cut corners, they will too. If you show up with energy and pride, so will they. You are the standard.",
      },
      {
        heading: "Invest in your people before they leave",
        body: "High turnover is expensive: financially and emotionally. Recognize performance publicly, offer growth paths, and have honest quarterly conversations. Retention is a strategy, not an accident.",
      },
    ],
  },
  {
    id: "turnaround",
    relevance: { deli: 3, salon: 4, restaurant: 3, retail: 4, general: 4 },
    icon: TrendingUp,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Turning Your Business Around",
    subtitle:
      "A failing business is not a dead business: but the clock is ticking.",
    tips: [
      {
        heading: "Identify your red flags immediately",
        body: "Declining repeat customers, growing cost of goods percentage, staff calling in sick more than once a week, or rising negative reviews: these are flashing warning lights. Name the problem out loud. You cannot fix what you will not face.",
      },
      {
        heading: "Find three quick wins in the first 30 days",
        body: "Change something visible that customers will notice immediately: deep clean the space, fix a broken sign, retrain on greetings, or update your menu board. Quick wins rebuild internal momentum and signal to customers that something has changed.",
      },
      {
        heading: "Build your 30-day action plan today",
        body: "Week 1: Diagnose and document problems. Week 2: Fix operational failures and retrain staff. Week 3: Improve customer touchpoints. Week 4: Measure, adjust, and communicate results to your team. A plan without a timeline is just a wish.",
      },
      {
        heading: "Use AI tools to accelerate the rebuild",
        body: "AI can now help you analyze your reviews, draft your staff training materials, optimize your menu or service pricing, and write your marketing copy: in hours, not weeks. Use the tools available to you. They are not optional anymore.",
      },
    ],
  },
];

const RESCUE_QA = [
  {
    id: "rq-1",
    question: "Why do most small businesses fail?",
    answer: (
      <>
        Because owners confuse being busy with being productive. Most failures
        trace back to three root causes: no documented systems, no real
        understanding of the numbers, and an owner who refuses to hold
        themselves: and their team: accountable. The product is rarely the
        problem. The operation always is. Head to{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          our Guides
        </a>{" "}
        for a structured business audit.
      </>
    ),
  },
  {
    id: "rq-2",
    question: "How do I know if my business has an operations problem?",
    answer: (
      <>
        Here is the test: can you leave for two weeks and have the business run
        without you? If the answer is no, you have an operations problem. Other
        red flags: staff who do not know the procedure without asking,
        inconsistent customer experiences, and costs that creep up without
        explanation. Document your processes, then measure against them: every
        day.{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        to get a diagnosis specific to your business.
      </>
    ),
  },
  {
    id: "rq-3",
    question: "What does great customer experience actually look like?",
    answer: (
      <>
        It looks like a customer who never has to ask twice. Great experience
        starts in the first 30 seconds: the greeting, the cleanliness, the
        energy of the room. It means your staff can handle a complaint without
        escalating, and a dissatisfied customer leaves feeling heard rather than
        dismissed. Train your team on empathy monthly, not just at onboarding.{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask for a customer experience checklist
        </a>
        .
      </>
    ),
  },
  {
    id: "rq-4",
    question: "How do I hold my team accountable without losing them?",
    answer: (
      <>
        Accountability without clarity is just punishment. Set the standard
        first: in writing, with examples: then follow through consistently.
        People do not leave because of high expectations; they leave because
        expectations are unclear and inconsistently applied. Recognition matters
        too: celebrate the wins publicly as loud as you address the misses
        privately.{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Browse our Leadership Guides
        </a>{" "}
        for proven team management frameworks.
      </>
    ),
  },
  {
    id: "rq-5",
    question: "How do I turn around a struggling business fast?",
    answer: (
      <>
        Stop everything and diagnose first: you cannot fix what you will not
        face. In week one, walk your operation as if you are a first-time
        customer: what is broken, what is embarrassing, what would you never
        accept in someone else's business? Find three visible quick wins you can
        execute in 72 hours. Then build your 30-day plan: diagnose, retrain,
        improve touchpoints, measure.{" "}
        <a
          href="/ask-a-question"
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask a Question
        </a>{" "}
        to build your personalized turnaround plan.
      </>
    ),
  },
  {
    id: "rq-6",
    question: "When should I call it and pivot?",
    answer: (
      <>
        Pivot when the market has clearly moved on and the cost of staying is
        higher than the cost of changing. Do not pivot because you are tired:
        that is quitting. Pivot when data, not emotion, tells you the current
        model is structurally broken. Before you do, ask: have I genuinely
        implemented the right systems? Have I honestly fixed the operations? If
        the answer is no, fix those first.{" "}
        <a
          href="/guides"
          className="text-primary underline-offset-4 hover:underline"
        >
          Explore our Business Planning Guides
        </a>{" "}
        before making the call.
      </>
    ),
  },
];

const STATS = [
  { value: "60%", label: "of small businesses fail in the first 5 years" },
  { value: "80%", label: "of failures are preventable with the right systems" },
  { value: "3×", label: "revenue lift when staff is properly trained" },
  { value: "30", label: "days is all it takes to start a real turnaround" },
];

export default function TafferAdvice() {
  const [businessType, setBusinessType] = useState("general");
  const [openItems, setOpenItems] = useState<string[]>(["operations"]);
  const [checkedDays, setCheckedDays] = useState<number[]>([]);

  const tafferRule = TAFFER_RULES[businessType];
  const challenge =
    TAFFER_CHALLENGES[businessType] ?? TAFFER_CHALLENGES.general;

  // Re-order sections by relevance for selected business type
  const orderedSections = [...SECTIONS].sort(
    (a, b) =>
      (a.relevance[businessType as keyof typeof a.relevance] ?? 99) -
      (b.relevance[businessType as keyof typeof b.relevance] ?? 99),
  );

  const toggleDay = (day: number) => {
    setCheckedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav
        className="bg-background border-b border-border"
        aria-label="Breadcrumb"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <a
            href="/"
            className="hover:text-foreground transition-colors duration-200"
          >
            Home
          </a>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-foreground font-medium">Business Rescue</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-hero-vibrant border-b border-[#6366F1]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-primary-vibrant text-xs font-medium tracking-wide uppercase mb-4">
              <AlertTriangle size={12} />
              Business Rescue
            </span>
            <h1 className="heading-hero mb-4">
              No Excuses.{" "}
              <span className="text-gradient-vibrant">Just Results.</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              You get a clear, step-by-step plan to find what is hurting your
              revenue and fix it in 30 days. That matters because every week you
              wait costs you customers, cash, and the trust of your team. This
              page hands you the systems, accountability, and hard truths that
              turn a struggling business around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-stats-vibrant text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-xs mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Type Selector (NEW) */}
      <section className="bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Select your business type to see the most relevant advice first:
            </p>
            <div
              className="flex flex-wrap gap-2"
              data-ocid="taffer.business_type_selector"
            >
              {BUSINESS_TYPE_PILLS.map((bt) => (
                <button
                  key={bt.value}
                  type="button"
                  data-ocid={`taffer.type_pill.${bt.value}`}
                  onClick={() => setBusinessType(bt.value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                    businessType === bt.value
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <span className="text-base">{bt.emoji}</span>
                  {bt.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jon Taffer's #1 Rule callout (NEW: shows when type selected) */}
      <AnimatePresence mode="wait">
        <motion.section
          key={businessType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.35 }}
          className="bg-background"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-0">
            <div
              className="rounded-xl bg-[#EEF2FF] border-l-4 border-[#6366F1] px-6 py-5 mb-4"
              data-ocid="taffer.rule_callout"
            >
              <div className="flex items-center gap-2 mb-2">
                <Flame size={16} className="text-[#6366F1] shrink-0" />
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wide">
                  {tafferRule.title}
                </span>
              </div>
              <p className="font-display text-lg sm:text-xl font-bold italic text-foreground/90 leading-snug">
                &ldquo;{tafferRule.quote}&rdquo;
              </p>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Intro callout */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 p-5 rounded-xl border-l-4 border-[#6366F1] bg-[#EEF2FF]"
          >
            <Users size={24} className="shrink-0 text-[#6366F1] mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">
                This is not a pep talk. It is a wake-up call.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every business problem has a root cause: and 9 times out of 10,
                it comes back to operations, people, or the owner's mindset. Use
                each section below to audit, identify, and fix what is actually
                broken.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accordion sections: reordered by business type */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <AnimatePresence>
            <Accordion.Root
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              data-ocid="taffer.accordion_list"
              className="space-y-4"
            >
              {orderedSections.map((section, sIdx) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: sIdx * 0.07 }}
                  >
                    <Accordion.Item
                      value={section.id}
                      className="rounded-xl border border-primary/18 bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-200"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger
                          data-ocid={`taffer.section_trigger.${sIdx + 1}`}
                          className="group w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer [&[data-state=open]_.chevron]:rotate-180"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg ${section.bg} flex items-center justify-center shrink-0`}
                          >
                            <Icon size={18} className={section.color} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-display font-bold text-base sm:text-lg text-foreground">
                              {section.title}
                            </div>
                            <div className="text-muted-foreground text-sm mt-0.5 italic">
                              {section.subtitle}
                            </div>
                          </div>
                          <ChevronDown
                            size={20}
                            className="chevron shrink-0 text-muted-foreground transition-transform duration-300 ease-in-out"
                            aria-hidden="true"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                        <div className="px-6 pb-6 pt-0 space-y-4">
                          {section.tips.map((tip, tIdx) => (
                            <motion.div
                              key={tip.heading}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: tIdx * 0.06 }}
                              data-ocid={`taffer.tip.${sIdx + 1}.${tIdx + 1}`}
                              className="flex gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                              <div>
                                <p className="font-semibold text-foreground text-sm">
                                  {tip.heading}
                                </p>
                                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                  {tip.body}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  </motion.div>
                );
              })}
            </Accordion.Root>
          </AnimatePresence>
        </div>
      </section>

      {/* Business Rescue Q&A */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-primary-vibrant text-xs font-medium tracking-wide uppercase mb-4">
              <AlertTriangle size={12} />
              Hard Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Straight answers to the questions owners are afraid to ask.
            </p>
          </motion.div>
          <Accordion.Root
            type="multiple"
            data-ocid="taffer.qa_list"
            className="space-y-3"
          >
            {RESCUE_QA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
              >
                <Accordion.Item
                  value={item.id}
                  className="rounded-xl border border-primary/18 bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-200"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      data-ocid={`taffer.qa.question.${index + 1}`}
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
                      data-ocid={`taffer.qa.answer.${index + 1}`}
                      className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Take the Taffer Challenge (NEW) */}
      <section className="bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-primary-vibrant text-xs font-medium tracking-wide uppercase mb-4">
              <Zap size={12} />
              7-Day Challenge
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Take the Taffer Challenge
            </h2>
            <p className="text-muted-foreground">
              One tough-love action per day for 7 days.
              {businessType !== "general" && (
                <span className="font-semibold text-foreground">
                  {" "}
                  Customized for{" "}
                  {
                    BUSINESS_TYPE_PILLS.find((b) => b.value === businessType)
                      ?.label
                  }
                  .
                </span>
              )}
            </p>
          </motion.div>

          <div className="space-y-3" data-ocid="taffer.challenge_list">
            {challenge.map((item, i) => (
              <motion.div
                key={item.day}
                data-ocid={`taffer.challenge_day.${item.day}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`flex gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  checkedDays.includes(item.day)
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card hover:border-primary/20 hover:bg-muted/20"
                }`}
                onClick={() => toggleDay(item.day)}
              >
                <button
                  type="button"
                  data-ocid={`taffer.challenge_check.${item.day}`}
                  className="shrink-0 mt-0.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDay(item.day);
                  }}
                  aria-label={`Mark day ${item.day} complete`}
                >
                  {checkedDays.includes(item.day) ? (
                    <CheckSquare size={20} className="text-primary" />
                  ) : (
                    <Square size={20} className="text-muted-foreground" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">
                      Day {item.day}
                    </span>
                    {checkedDays.includes(item.day) && (
                      <span className="text-xs text-primary font-medium">
                        ✓ Done
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      checkedDays.includes(item.day)
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {item.action}
                  </p>
                  {item.link && !checkedDays.includes(item.day) && (
                    <a
                      href={item.link}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline underline-offset-4 mt-1.5"
                    >
                      Related guide <ChevronRight size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {checkedDays.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl bg-primary/8 border border-primary/20 px-5 py-4 text-center"
              data-ocid="taffer.challenge_progress"
            >
              <p className="font-semibold text-primary text-sm">
                {checkedDays.length} of 7 days complete
                {checkedDays.length === 7
                  ? ": You have completed the Taffer Challenge! 🏆"
                  : ": Keep going!"}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-muted/40 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Ready to take action?
            </h2>
            <p className="text-muted-foreground mb-6">
              Browse our AI-powered guides tailored to your business type and
              start implementing changes today.
            </p>
            <Link
              to="/guides"
              data-ocid="taffer.browse_guides_link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
              search={{
                topic: undefined,
                businessType: undefined,
                keyword: undefined,
              }}
            >
              Browse Guides
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
