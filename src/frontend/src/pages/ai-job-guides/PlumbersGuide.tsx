import { BackToTop, type GuideSection } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { SectionQA } from "@/components/SectionQA";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  ListChecks,
  PhoneCall,
  Printer,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Plumbers AI guide page.
 *
 * Long form guide showing how AI tools fit the daily work of a plumbing
 * business. Follows the AISmallBiz style guide: no contractions, no em dashes,
 * no en dashes. Electric Indigo (#6366F1) is reserved for CTAs, links, and
 * checklist accents. Long form reading sections are dark text on light
 * backgrounds.
 */

const ACCENT = "#6366F1";

const SECTIONS: GuideSection[] = [
  { id: "why-ai", label: "Why AI matters" },
  { id: "five-ways", label: "5 ways AI helps" },
  { id: "tools", label: "Tools to know" },
  { id: "getting-started", label: "Getting started" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "checklist", label: "Printable checklist" },
  { id: "faq", label: "FAQ" },
];

const FIVE_WAYS = [
  {
    icon: PhoneCall,
    title: "AI phone answering and after-hours dispatch",
    body: "An AI phone agent can answer every call after hours, capture the customer name and address, and text the on-call plumber so no job goes to voicemail. It can also triage emergencies, schedule non-urgent work for the next business day, and quote a basic service window without waking you up for a leaky faucet.",
  },
  {
    icon: ClipboardList,
    title: "AI-assisted estimate writing",
    body: "Paste the job description and a parts list into a tool like ChatGPT and it can draft a line-item estimate with labor, materials, and a clear scope of work in under a minute. You review the numbers, adjust the markup, and send a professional quote that used to take thirty minutes to write by hand.",
  },
  {
    icon: Wrench,
    title: "AI inventory and parts ordering predictions",
    body: "AI tools inside field service software can review your recent jobs and predict which fittings, valves, and water heaters you will need next week. They flag low stock before you run out and can even draft a purchase order to your supplier so you stop making emergency parts runs.",
  },
  {
    icon: CheckCircle2,
    title: "AI customer review replies and follow-up reminders",
    body: "AI can draft polite, specific replies to every Google and Yelp review in your brand voice, then queue them for your approval. It can also send an automatic follow-up text two weeks after a job asking if everything is still working and reminding the customer to schedule their annual inspection.",
  },
  {
    icon: Lightbulb,
    title: "AI marketing content for local SEO",
    body: 'AI can write service area pages for every town you cover, each one optimized for the phrase "plumber near me" and the specific services you offer there. It can also draft monthly blog posts about frozen pipes, water heater maintenance, and seasonal tips that keep your website fresh and help you rank above competitors.',
  },
];

const TOOLS = [
  {
    name: "ServiceTitan",
    href: "https://www.servicetitan.com",
    desc: "Plumbing business management and dispatch for shops that want to schedule, invoice, and track jobs in one place.",
  },
  {
    name: "Housecall Pro",
    href: "https://www.housecallpro.com",
    desc: "Scheduling and invoicing for plumbing shops that need online booking, dispatch, and payment processing built in.",
  },
  {
    name: "Jobber",
    href: "https://getjobber.com",
    desc: "Field service management for plumbers who want quotes, scheduling, and client communication in a single app.",
  },
  {
    name: "Google Business Profile AI suggestions",
    href: "https://www.google.com/business",
    desc: "AI-assisted local SEO that suggests posts, photo captions, and updates to keep your plumbing listing ranking on Google Maps.",
  },
  {
    name: "ChatGPT",
    href: "https://chat.openai.com",
    desc: "Draft estimates, customer emails, and follow-up messages from a job description and parts list in plain language.",
  },
  {
    name: "Jasper",
    href: "https://www.jasper.ai",
    desc: "Marketing copy for service area pages, seasonal promotions, and social posts that target local plumbing searches.",
  },
];

const STEPS = [
  {
    title: "Pick one repetitive task to automate first",
    body: "List the tasks that eat your evenings: returning missed calls, writing estimates, ordering parts, replying to reviews. Choose the single task that takes the most time and has the clearest steps. Do not try to automate everything at once.",
  },
  {
    title: "Choose a tool that fits that task",
    body: "Match the task to the tool. Phone answering needs an AI phone agent or a service platform with after-hours dispatch. Estimate writing needs a chat tool like ChatGPT. Inventory needs a field service platform with AI forecasting. Pick one tool and ignore the rest for now.",
  },
  {
    title: "Document your current process before you set up the tool",
    body: "Write down the exact steps you follow today for the chosen task, including the words you say on the phone and the fields you include on an estimate. The AI can only follow a process you can describe. If you cannot document it, the AI cannot do it.",
  },
  {
    title: "Set up the tool with your business details",
    body: "Add your service area, hours, pricing structure, parts suppliers, and brand voice to the tool. The more context you give the AI, the less you have to correct later. Save your common job types and standard markups so the tool can reuse them.",
  },
  {
    title: "Run the tool in shadow mode for two weeks",
    body: "Let the AI draft the estimate or the review reply, but still send the final version yourself. Compare the AI output to what you would have written. Note where it is wrong, vague, or off-brand, and adjust your instructions until the drafts need only minor edits.",
  },
  {
    title: "Train your team on the new workflow",
    body: "Show your dispatcher, office staff, and any partner plumbers exactly when to use the AI tool and when to handle the task by hand. Write a one-page guide that says who clicks what, who reviews the output, and who sends the final version to the customer.",
  },
  {
    title: "Measure results after thirty days",
    body: "Track three numbers: hours saved per week, customer response time, and estimate turnaround. If the tool is not saving time or improving service after thirty days, switch tools or switch tasks. AI should make the work easier, not add a layer of software to manage.",
  },
  {
    title: "Expand to a second task only after the first one works",
    body: "Once the first task runs smoothly and your team trusts the workflow, repeat the process for the next repetitive task. Most plumbing shops can automate three to five tasks within ninety days if they go one at a time instead of all at once.",
  },
];

const MISTAKES = [
  {
    title: "Automating before documenting the current process",
    body: "If you cannot write down the exact steps you follow to write an estimate or answer a call, the AI cannot follow them either. Map the process on paper first, then teach the tool. Skipping this step is the number one reason AI projects fail in small shops.",
  },
  {
    title: "Ignoring customer data privacy",
    body: "Plumbing customers share names, addresses, and details about their homes. Never paste a customer's full contact information into a public AI chat. Use tools that keep data inside your account, and train your team to remove personal details before they generate any draft.",
  },
  {
    title: "Over-relying on AI for code compliance",
    body: "AI can summarize plumbing code, but it cannot pull a permit or sign off on an inspection. Always confirm code requirements with your local authority and your own license. Treat AI code answers as a starting point for your research, never as the final word.",
  },
  {
    title: "Skipping human review of AI estimates",
    body: "An AI estimate that is ten percent low on labor can wipe out your profit on a job. Always review the labor hours, parts markup, and scope before you send the quote. The AI drafts fast, but the numbers are still your responsibility.",
  },
  {
    title: "Switching tools every month",
    body: "Every new tool has a learning curve, and your team loses trust each time you switch. Pick one tool per task, commit to it for at least ninety days, and only switch if you can point to a specific failure. Constant switching costs more than it saves.",
  },
];

const CHECKLIST_ITEMS = [
  "Document the steps for one repetitive task before choosing any AI tool",
  "Choose a single tool that fits that task and ignore the rest for now",
  "Add your service area, hours, pricing, and brand voice to the tool",
  "Run the tool in shadow mode for two weeks before sending AI output to customers",
  "Train your dispatcher and office staff on the new workflow with a one-page guide",
  "Set up an AI phone agent or after-hours dispatch so no call goes to voicemail",
  "Use AI to draft estimates, then review labor, parts markup, and scope before sending",
  "Reply to every Google and Yelp review within twenty-four hours using AI drafts",
  "Publish one service area page per town you cover using AI-assisted local SEO copy",
  "Measure hours saved, response time, and estimate turnaround after thirty days",
];

const FAQ_ITEMS = [
  {
    q: "Will AI replace my dispatcher?",
    a: "No. AI handles the repetitive parts of dispatch: answering after-hours calls, capturing job details, and scheduling non-urgent work. Your dispatcher still handles complex scheduling, customer relationships, and judgment calls. Most plumbing shops use AI to support the dispatcher, not to replace the role.",
  },
  {
    q: "Is my customer data safe with AI tools?",
    a: "It depends on the tool. Reputable field service platforms keep customer data inside your account and publish a privacy policy. Public chat tools do not, so never paste a customer's full name, address, or phone number into them. Train your team to remove personal details before generating any draft.",
  },
  {
    q: "How much does it cost to add AI to a plumbing business?",
    a: "Most plumbing shops spend between twenty and two hundred dollars per month on AI tools. A chat tool for estimate drafts starts around twenty dollars per user. Field service platforms with AI features range from one hundred to three hundred dollars per month depending on team size.",
  },
  {
    q: "Do I need to be technical to use AI in my plumbing business?",
    a: "No. The tools are built for owners and office staff, not developers. If you can write a clear email, you can write a prompt. The harder part is documenting your current process and training your team, which is plumbing knowledge, not technical knowledge.",
  },
  {
    q: "Will AI help with emergency calls?",
    a: "Yes. An AI phone agent can answer emergency calls at two in the morning, ask the right questions to confirm it is a true emergency, and text the on-call plumber with the address and the problem. For non-urgent calls, it can schedule the job for the next business day so you are not woken up for a dripping faucet.",
  },
  {
    q: "Which AI task should a plumber automate first?",
    a: "Start with the task that takes the most time and has the clearest steps. For most plumbing shops that is either after-hours phone answering or estimate writing. Both are repetitive, both happen every day, and both have a measurable payoff in saved hours and faster customer response.",
  },
];

export default function PlumbersGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let best: string | null = null;
      let closest = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closest) {
          closest = dist;
          best = section.id;
        }
      }
      if (best !== null) setActiveSection(best);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="plumbers_guide.hero.section"
      >
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <span className="badge-accent-vibrant inline-flex items-center gap-1.5 mb-6">
            <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
            AI Job Guide: Plumbers
          </span>
          <h1 className="heading-hero text-balance mb-5">AI for Plumbers</h1>
          <p className="text-hero-subtle max-w-3xl mx-auto text-balance">
            Practical AI tools that fit the daily work of a plumbing shop, from
            after-hours dispatch to estimate writing, so you spend less time on
            the phone and more time on the job.
          </p>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="plumbers_guide.section_nav"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`plumbers_guide.section_nav.item.${i + 1}`}
                className={[
                  "whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[rgba(99,102,241,0.10)] text-[#6366F1]"
                    : "text-[rgb(var(--text-muted-readable))] hover:text-[#6366F1]",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">
        {/* WHY AI MATTERS */}
        <section
          id="why-ai"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.why_ai.section"
        >
          <h2 className="heading-section mb-4 text-balance">
            Why AI matters for plumbers
          </h2>
          <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
            Plumbing is a phone-call business. The shop that answers first wins
            the job, and the shop that returns a clear estimate fastest closes
            the deal. AI helps you answer every call, even after hours, so no
            emergency goes to voicemail. It helps you turn a job description
            into a line-item estimate in minutes instead of half an hour. And it
            helps you follow up with every customer so a one-time repair becomes
            an annual maintenance relationship.
          </p>
        </section>

        {/* FIVE WAYS */}
        <section
          id="five-ways"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.five_ways.section"
        >
          <h2 className="heading-section mb-6 text-balance">
            5 ways AI helps plumbers
          </h2>
          <ol className="space-y-5">
            {FIVE_WAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="card-guide"
                  data-ocid={`plumbers_guide.five_ways.item.${i + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-10 h-10 rounded-full bg-[rgba(99,102,241,0.10)] text-[#6366F1] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-[rgb(var(--foreground))] mb-1.5 leading-snug">
                        <span className="text-[#6366F1] mr-2">{i + 1}.</span>
                        {item.title}
                      </h3>
                      <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* TOOLS BENTO GRID */}
        <section
          id="tools"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.tools.section"
        >
          <h2 className="heading-section mb-6 text-balance">
            Tools plumbers should know
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((tool, i) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`plumbers_guide.tools.card.${i + 1}`}
                className="card-vibrant p-5 flex flex-col gap-3 group rounded-[calc(var(--radius)*2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-[rgb(var(--foreground))] leading-snug">
                    {tool.name}
                  </h3>
                  <ExternalLink
                    className="w-4 h-4 shrink-0 text-[#6366F1] transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-[0.875rem] leading-[1.65] text-[rgb(var(--text-muted-readable))] flex-1">
                  {tool.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[#6366F1]">
                  Visit site
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* GETTING STARTED */}
        <section
          id="getting-started"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.getting_started.section"
        >
          <h2 className="heading-section mb-6 text-balance">
            Step-by-step: getting started with AI in plumbing
          </h2>
          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4"
                data-ocid={`plumbers_guide.getting_started.item.${i + 1}`}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-display text-base font-bold text-[rgb(var(--foreground))] mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* COMMON MISTAKES */}
        <section
          id="mistakes"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.mistakes.section"
        >
          <h2 className="heading-section mb-6 text-balance">
            Common mistakes to avoid
          </h2>
          <div className="space-y-4">
            {MISTAKES.map((m, i) => (
              <div
                key={m.title}
                className="card-guide"
                data-ocid={`plumbers_guide.mistakes.item.${i + 1}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="w-5 h-5 shrink-0 text-[#6366F1] mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-[rgb(var(--foreground))] mb-1 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                      {m.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRINTABLE CHECKLIST */}
        <section
          id="checklist"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.checklist.section"
        >
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <h2 className="heading-section text-balance">
              Printable AI adoption checklist
            </h2>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#6366F1] border border-[#6366F1]/40 rounded-lg px-4 py-2 hover:bg-[rgba(99,102,241,0.08)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
              data-ocid="plumbers_guide.checklist.print_button"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              Print checklist
            </button>
          </div>
          <ul className="card-guide space-y-3">
            {CHECKLIST_ITEMS.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3"
                data-ocid={`plumbers_guide.checklist.item.${i + 1}`}
              >
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 shrink-0 cursor-pointer accent-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-1"
                  style={{ accentColor: ACCENT }}
                  data-ocid={`plumbers_guide.checklist.checkbox.${i + 1}`}
                  aria-label={item}
                />
                <label
                  htmlFor={`plumbers-checklist-${i + 1}`}
                  className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-readable))] cursor-pointer"
                >
                  <span id={`plumbers-checklist-${i + 1}`} className="sr-only">
                    {item}
                  </span>
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-32"
          data-ocid="plumbers_guide.faq.section"
        >
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-[#6366F1]" aria-hidden="true" />
            <h2 className="heading-section text-balance">
              Frequently asked questions
            </h2>
          </div>
          <SectionQA items={FAQ_ITEMS} accentColor={ACCENT} />
        </section>

        <GuideAuthorFooter />

        {/* CLOSING CTA */}
        <section
          className="border-t border-border pt-10"
          data-ocid="plumbers_guide.cta.section"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ListChecks
                className="w-5 h-5 text-[#6366F1]"
                aria-hidden="true"
              />
              <h2 className="heading-section text-balance">
                Keep going with AI
              </h2>
            </div>
            <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))] mb-6 text-balance">
              You have a clear plan for plumbing. Explore more profession
              guides, or build your AI skills first with AI Training and Tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/ai-job-guides"
                className="button-cta w-full sm:w-auto"
                style={{ background: ACCENT, color: "#fff" }}
                data-ocid="plumbers_guide.cta.explore_guides_button"
              >
                Explore more guides
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/ai-training"
                className="button-cta w-full sm:w-auto"
                style={{ background: ACCENT, color: "#fff" }}
                data-ocid="plumbers_guide.cta.ai_training_button"
              >
                AI Training and Tools
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
