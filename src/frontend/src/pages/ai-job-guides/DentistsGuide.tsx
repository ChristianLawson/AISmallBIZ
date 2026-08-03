import { BackToTop } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { SectionQA } from "@/components/SectionQA";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  ListChecks,
  MessageSquare,
  Printer,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { type ElementType, useEffect, useState } from "react";

/**
 * AI for Dentists guide page.
 *
 * Long form profession guide following the AISmallBiz guide pattern: hero,
 * sticky section nav, plain language sections, bento grid of real tools,
 * numbered getting started steps, common mistakes, printable checklist, FAQ
 * accordion (SectionQA), author footer, and a closing CTA.
 *
 * Style rules enforced: no contractions, no em dashes, no en dashes. Electric
 * Indigo (#6366F1) is reserved for CTAs, links, checklist accents, and section
 * accent icons. Long form text stays dark on light for reading.
 */

const INDIGO = "#6366F1";
const INDIGO_SOFT = "rgba(99, 102, 241, 0.08)";
const INDIGO_BORDER = "rgba(99, 102, 241, 0.25)";

interface SectionMeta {
  id: string;
  label: string;
  icon: ElementType;
}

const SECTIONS: SectionMeta[] = [
  { id: "why-ai", label: "Why AI Matters", icon: Sparkles },
  { id: "five-ways", label: "5 Ways AI Helps", icon: ListChecks },
  { id: "tools", label: "Tools to Know", icon: Stethoscope },
  { id: "getting-started", label: "Getting Started", icon: ClipboardList },
  { id: "mistakes", label: "Mistakes to Avoid", icon: AlertTriangle },
  { id: "checklist", label: "Checklist", icon: CheckCircle2 },
  { id: "faq", label: "FAQ", icon: MessageSquare },
];

const FIVE_WAYS = [
  {
    icon: ScanLine,
    title: "AI dental imaging analysis for cavity and lesion detection",
    body: "AI imaging tools review bitewings and panoramic films and flag suspicious areas so you can confirm or rule out decay faster. They catch early interproximal lesions that are easy to miss on a quick look, which helps you treat smaller problems before they become larger ones. The dentist still makes the final call, but the AI gives you a consistent second pass on every image.",
  },
  {
    icon: CalendarClock,
    title:
      "AI appointment scheduling and reminder automation to reduce no-shows",
    body: "AI scheduling tools fill open chairs by suggesting the best times for each patient and sending reminders through text or email at the right moment. They also follow up with patients who have not confirmed, which cuts no-show rates without adding work for your front desk. Your team stays in control of the calendar while the AI handles the repetitive follow-up.",
  },
  {
    icon: MessageSquare,
    title: "AI patient communication and post-op follow-up",
    body: "AI messaging tools send clear post-op instructions, check on healing, and answer common questions so patients feel supported after they leave the chair. They can also route unusual replies to a staff member for a human response. This keeps patients informed and reduces the after-hours phone calls that pull your team away from chairside work.",
  },
  {
    icon: FileText,
    title: "AI treatment plan presentation and case acceptance support",
    body: "AI presentation tools turn your treatment plan into clear visuals and plain language summaries that help patients understand what you recommend and why. They can also estimate costs and insurance coverage up front, which removes a major reason patients delay saying yes. Patients who understand the plan and the price are more likely to accept treatment.",
  },
  {
    icon: ShieldCheck,
    title: "AI insurance claim processing and denial prediction",
    body: "AI claim tools review claims before you submit them and flag missing information or codes that often trigger denials. Some tools predict which claims are likely to be denied so your team can fix issues first. This means faster payments and fewer reworked claims, which keeps your revenue cycle moving without extra staff hours.",
  },
];

const TOOLS = [
  {
    name: "Pearl",
    url: "https://www.hellopearl.com",
    blurb:
      "AI dental imaging analysis that flags caries and lesions on bitewings and panoramics for dentist review.",
  },
  {
    name: "VideaHealth",
    url: "https://videa.ai",
    blurb:
      "Caries detection AI that highlights suspicious areas on dental X-rays so you can confirm decay sooner.",
  },
  {
    name: "Weave",
    url: "https://www.getweave.com",
    blurb:
      "Patient communication and reminder automation that cuts no-shows and keeps post-op follow-up consistent.",
  },
  {
    name: "Dental Intelligence",
    url: "https://www.dentalintel.com",
    blurb:
      "Practice analytics that show production, case acceptance, and scheduling gaps so you can act on real numbers.",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    blurb:
      "Drafts patient education content and post-op instructions in plain language you can review and send.",
  },
  {
    name: "NexHealth",
    url: "https://www.nexhealth.com",
    blurb:
      "Online scheduling and patient experience platform that fills chairs and keeps reminders flowing automatically.",
  },
];

const STEPS = [
  {
    title: "Identify your biggest workflow gap",
    body: "Look at where your practice loses the most time or revenue. Is it no-shows, slow claim payments, case acceptance, or after-hours phone calls? Pick the single gap that hurts the most and start there. AI works best when it solves a problem you can measure.",
  },
  {
    title: "Choose one tool that fits that gap",
    body: "Match the tool to the problem. If no-shows are the issue, start with scheduling and reminder automation. If imaging review slows you down, start with an AI imaging assistant. Resist the urge to buy several tools at once before any of them is working.",
  },
  {
    title: "Pilot with one operatory or hygienist",
    body: "Run the new tool with a single operatory or one hygienist for two to four weeks. Keep the rest of the practice on the old process so you can compare results cleanly. A small pilot shows you what works and what needs adjusting before you commit the whole team.",
  },
  {
    title: "Train your staff on the tool",
    body: "Give your team a short, hands-on training session and a simple one page reference for the new workflow. Let them practice on real cases with you nearby to answer questions. Staff who feel confident with the tool will use it well, while staff who feel rushed will quietly stop using it.",
  },
  {
    title: "Set a baseline before you measure",
    body: "Write down your starting numbers before the pilot begins. Track no-show rate, case acceptance rate, days in accounts receivable, or whatever matches your gap. Without a baseline you cannot tell whether the AI actually helped.",
  },
  {
    title: "Measure no-show or case acceptance changes",
    body: "After the pilot, compare the new numbers to your baseline. Look at no-show rate, case acceptance, claim denial rate, or time saved per day. If the tool moved the metric you targeted, plan a rollout to the rest of the practice. If it did not, figure out why before you expand.",
  },
  {
    title: "Roll out and review monthly",
    body: "Once the pilot proves the value, bring the rest of the team onto the tool with the same training and reference sheet. Check the numbers once a month for the first quarter to make sure the gains hold. Adjust the workflow as your team gets more comfortable.",
  },
];

const MISTAKES = [
  {
    title: "Relying on AI imaging without dentist review",
    body: "AI imaging tools are a second pass, not a replacement for your clinical judgment. Always review every flagged area yourself before you diagnose or plan treatment. Patients trust you, not the software, and you remain responsible for the final call.",
  },
  {
    title: "Automating patient messages without a human touch",
    body: "Automated reminders and follow-ups save time, but patients still want a real person when something feels wrong. Route unusual replies to a staff member and keep personal calls for sensitive conversations. Pure automation can make a dental practice feel cold.",
  },
  {
    title: "Ignoring HIPAA when adopting AI tools",
    body: "Before you send any patient data to an AI tool, confirm it signs a business associate agreement and handles protected health information correctly. A tool that is not HIPAA compliant is a legal risk for your practice. Check this before the pilot, not after.",
  },
  {
    title: "Over-promising AI diagnosis accuracy to patients",
    body: "Patients may hear AI and assume it is perfect. Be honest that AI supports your diagnosis but does not make it. Explain that you review every finding yourself. Over-promising erodes trust the first time the AI and your judgment disagree.",
  },
  {
    title: "Buying several AI tools before any one is working",
    body: "Stacking tools before any single one is integrated creates confusion and wasted spend. Get one tool fully working and measured before you add the next. A practice running one AI tool well beats a practice running four tools poorly.",
  },
];

const CHECKLIST_ITEMS = [
  "I identified the single biggest workflow gap in my practice before choosing a tool",
  "I confirmed the AI tool signs a business associate agreement for HIPAA compliance",
  "I ran a two to four week pilot with one operatory or hygienist before rolling out",
  "I trained my staff with a hands on session and a one page reference sheet",
  "I recorded a baseline no-show rate, case acceptance rate, or claim metric before the pilot",
  "I reviewed the AI imaging flags myself on every patient before diagnosing",
  "I set up automated reminders with a clear path to a human for unusual replies",
  "I measured the pilot results against my baseline before expanding to the whole practice",
  "I scheduled a monthly review of the AI tool metrics for the first quarter",
  "I explained to patients that AI supports my diagnosis but does not replace my judgment",
];

const FAQ_ITEMS = [
  {
    q: "Will AI replace my hygienist?",
    a: "No. AI handles repetitive tasks like imaging review and reminders so your hygienist can spend more time with patients. The clinical work, patient education, and hands on care still need a licensed hygienist. AI is a support tool, not a replacement for your staff.",
  },
  {
    q: "Is AI imaging analysis reliable?",
    a: "AI imaging tools are reliable as a second pass that flags suspicious areas for your review. Studies show they catch early lesions that are easy to miss, but they also produce false positives. You always confirm the final diagnosis yourself, which keeps the AI as a safety net rather than the decision maker.",
  },
  {
    q: "How do I stay HIPAA compliant with AI?",
    a: "Only use AI tools that sign a business associate agreement and handle protected health information correctly. Confirm where patient data is stored, how it is encrypted, and whether the vendor uses your data to train its models. Avoid any tool that cannot answer these questions in writing.",
  },
  {
    q: "Will AI help with insurance claims?",
    a: "Yes. AI claim tools review claims before submission, flag missing codes, and predict which claims are likely to be denied. Fixing issues before submission means faster payments and fewer reworked claims. Your team still submits the claim, but the AI reduces the back and forth with payers.",
  },
  {
    q: "Do patients mind AI messages?",
    a: "Most patients appreciate timely reminders and clear post-op instructions, even when they know a system sent them. The key is to keep a human available for anything unusual or sensitive. Patients object to feeling ignored, not to helpful automated messages that arrive at the right moment.",
  },
  {
    q: "How much does AI cost for a dental practice?",
    a: "Costs vary by tool and practice size. Many imaging and scheduling tools charge a monthly per location or per user fee, and some offer pilot pricing. Start with one tool tied to your biggest gap, measure the return, and expand only when the numbers justify it. Treat AI as an investment with a measurable payoff.",
  },
];

function SectionHeader({
  icon: Icon,
  kicker,
  title,
}: {
  icon: React.ElementType;
  kicker: string;
  title: string;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: INDIGO_SOFT }}
        >
          <Icon size={20} style={{ color: INDIGO }} />
        </div>
        <span
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: INDIGO }}
        >
          {kicker}
        </span>
      </div>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 text-balance">
        {title}
      </h2>
    </>
  );
}

export default function DentistsGuide() {
  const [activeSection, setActiveSection] = useState<string>("why-ai");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

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
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="dentists.hero.section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                background: INDIGO_SOFT,
                color: INDIGO,
                border: `1px solid ${INDIGO_BORDER}`,
              }}
            >
              <Stethoscope size={12} aria-hidden="true" />
              AI Job Guide for Dentists
            </span>
            <h1 className="heading-hero text-foreground text-balance">
              AI for Dentists
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))] text-balance">
              Practical ways AI fits the daily work of a dental practice, from
              imaging review to scheduling, patient communication, and treatment
              planning.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("why-ai")}
              data-ocid="dentists.hero.start_button"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: INDIGO,
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
              }}
            >
              <ListChecks size={15} aria-hidden="true" />
              Start the guide
            </button>
          </div>
        </div>
      </section>

      {/* SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="dentists.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`dentists.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[rgba(99,102,241,0.12)] text-[#6366F1]"
                    : "text-zinc-500 hover:text-[#6366F1] dark:text-zinc-400 dark:hover:text-[#6366F1]",
                ].join(" ")}
              >
                <s.icon size={12} aria-hidden="true" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* WHY AI MATTERS */}
      <section
        id="why-ai"
        className="py-16 md:py-20 bg-background scroll-mt-24"
        data-ocid="dentists.why_ai.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Sparkles}
            kicker="Section 1"
            title="Why AI matters for dentists"
          />
          <div className="space-y-5 text-base text-[rgb(var(--text-muted-readable))] leading-[1.75]">
            <p>
              AI is starting to touch every part of a dental practice, and the
              tools are now practical enough to use on real patients. Imaging
              analysis software reviews X-rays and flags suspicious areas so you
              can confirm decay and lesions faster than a manual pass alone.
            </p>
            <p>
              Scheduling and reminder automation fills open chairs and cuts
              no-shows without adding work for your front desk. Patient
              communication tools send clear post-op instructions and follow up
              on healing, which keeps patients informed after they leave the
              chair.
            </p>
            <p>
              Treatment planning tools turn your recommendations into visuals
              and plain language summaries that help patients understand and
              accept care. Insurance claim tools catch errors before submission,
              which means faster payments and fewer reworked claims.
            </p>
            <p>
              None of these tools replace your clinical judgment. They take the
              repetitive work off your plate so you can spend chairside time on
              the parts that need a dentist.
            </p>
          </div>
        </div>
      </section>

      {/* FIVE WAYS */}
      <section
        id="five-ways"
        className="py-20 md:py-24 bg-muted/30 scroll-mt-24"
        data-ocid="dentists.five_ways.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={ListChecks}
            kicker="Section 2"
            title="5 ways AI helps dentists"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FIVE_WAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`dentists.five_ways.item.${i + 1}`}
                  className="rounded-2xl border border-border bg-card p-7 hover:border-[rgba(99,102,241,0.35)] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: INDIGO_SOFT }}
                    >
                      <Icon size={18} style={{ color: INDIGO }} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section
        id="tools"
        className="py-16 md:py-20 bg-background scroll-mt-24"
        data-ocid="dentists.tools.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Stethoscope}
            kicker="Section 3"
            title="Tools dentists should know"
          />
          <p className="text-base text-[rgb(var(--text-muted-readable))] leading-[1.75] mb-8 max-w-3xl">
            Six real tools that cover the most common dental AI use cases. Each
            card links to the vendor so you can evaluate it for your practice.
            Always confirm HIPAA compliance before you send any patient data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((tool, i) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`dentists.tools.card.${i + 1}`}
                className="card-vibrant p-6 flex flex-col gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))] rounded-[calc(var(--radius)*2)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                    {tool.name}
                  </h3>
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{ background: INDIGO_SOFT, color: INDIGO }}
                    aria-hidden="true"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))] flex-1">
                  {tool.blurb}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold mt-1"
                  style={{ color: INDIGO }}
                  data-ocid={`dentists.tools.link.${i + 1}`}
                >
                  Visit {tool.name}
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section
        id="getting-started"
        className="py-20 md:py-24 bg-muted/30 scroll-mt-24"
        data-ocid="dentists.getting_started.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={ClipboardList}
            kicker="Section 4"
            title="Step by step: getting started with AI in dentistry"
          />
          <ol className="space-y-6">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                data-ocid={`dentists.getting_started.step.${i + 1}`}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shrink-0 text-white"
                    style={{ background: INDIGO }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MISTAKES */}
      <section
        id="mistakes"
        className="py-16 md:py-20 bg-background scroll-mt-24"
        data-ocid="dentists.mistakes.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={AlertTriangle}
            kicker="Section 5"
            title="Common mistakes to avoid"
          />
          <div className="space-y-4">
            {MISTAKES.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`dentists.mistakes.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-5 flex items-start gap-4"
              >
                <AlertTriangle
                  size={18}
                  className="shrink-0 mt-1"
                  style={{ color: INDIGO }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.7] text-[rgb(var(--text-muted-readable))]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section
        id="checklist"
        className="py-20 md:py-24 bg-muted/30 scroll-mt-24"
        data-ocid="dentists.checklist.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={CheckCircle2}
            kicker="Section 6"
            title="Printable checklist for dentists"
          />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <p className="text-base text-[rgb(var(--text-muted-readable))] leading-[1.7] max-w-xl">
              Ten concrete actions a dentist can take to adopt AI the right way.
              Check them off as you go, or print the list for your team.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              data-ocid="dentists.checklist.print_button"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              style={{
                background: INDIGO,
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
              }}
            >
              <Printer size={15} aria-hidden="true" />
              Print checklist
            </button>
          </div>

          {/* Progress */}
          <div className="rounded-xl border border-border bg-card p-5 mb-8 print:hidden">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-semibold text-foreground">
                Your progress
              </p>
              <p className="text-sm font-bold" style={{ color: INDIGO }}>
                {checkedCount} / {totalItems}
              </p>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full transition-[width] duration-300"
                style={{
                  width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%`,
                  background: INDIGO,
                }}
              />
            </div>
          </div>

          <ul
            className="rounded-2xl border border-border bg-card p-7 space-y-4 print:border-black print:bg-white"
            data-ocid="dentists.checklist.list"
          >
            {CHECKLIST_ITEMS.map((item, i) => {
              const key = `c-${i}`;
              return (
                <li key={item}>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={!!checked[key]}
                      onChange={(e) =>
                        setChecked((c) => ({ ...c, [key]: e.target.checked }))
                      }
                      data-ocid={`dentists.checklist.checkbox.${i + 1}`}
                      className="mt-0.5 w-5 h-5 rounded border-border focus:ring-2 focus:ring-[#6366F1] shrink-0"
                      style={{ accentColor: INDIGO }}
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
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-16 md:py-20 bg-background scroll-mt-24"
        data-ocid="dentists.faq.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={MessageSquare}
            kicker="Section 7"
            title="FAQ about AI in dentistry"
          />
          <SectionQA items={FAQ_ITEMS} accentColor={INDIGO} />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="dentists.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
            Keep going with AI
          </h2>
          <p className="text-base md:text-lg text-[rgb(var(--text-muted-readable))] leading-relaxed max-w-2xl mx-auto mb-8">
            Explore more AI job guides or build your AI skills with our
            training. Both are free and written for owners and operators who
            want practical help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/ai-job-guides"
              data-ocid="dentists.cta.job_guides_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: INDIGO,
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
              }}
            >
              <ListChecks size={15} aria-hidden="true" />
              Browse AI job guides
            </Link>
            <Link
              to="/ai-training"
              data-ocid="dentists.cta.ai_training_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: INDIGO,
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
              }}
            >
              <Sparkles size={15} aria-hidden="true" />
              AI training and tools
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12">
            <GuideAuthorFooter />
          </div>
        </div>
      </section>
    </Layout>
  );
}
