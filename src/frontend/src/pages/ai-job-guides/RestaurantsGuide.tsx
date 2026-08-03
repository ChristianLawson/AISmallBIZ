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
  CheckSquare,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  ListChecks,
  Megaphone,
  MessageSquareText,
  Printer,
  Sparkles,
  Star,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";
import { type ElementType, useEffect, useState } from "react";

/**
 * AI for Restaurants guide page.
 *
 * Long form guide for restaurant owners who want to fit AI into daily
 * operations: menu engineering, reservations, inventory, reviews, and
 * marketing. Follows the AISmallBiz guide page pattern: Layout + ProgressBar +
 * BackToTop + hero (bg-hero-vibrant) + sticky section nav + sections +
 * SectionQA + GuideAuthorFooter + CTA.
 *
 * Style rules enforced throughout:
 *  - No contractions.
 *  - No em dashes or en dashes. Colons separate clauses.
 *  - Electric Indigo (#6366F1) reserved for CTAs, links, and checklist accents.
 *  - Dark on light reading for long form text.
 */

const ACCENT = "#6366F1";

interface SectionMeta {
  id: string;
  label: string;
  icon: ElementType;
}

const SECTIONS: SectionMeta[] = [
  { id: "why-ai", label: "Why AI matters", icon: Sparkles },
  { id: "five-ways", label: "5 ways AI helps", icon: UtensilsCrossed },
  { id: "tools", label: "Tools to know", icon: ClipboardList },
  { id: "getting-started", label: "Getting started", icon: ListChecks },
  { id: "mistakes", label: "Common mistakes", icon: AlertTriangle },
  { id: "checklist", label: "Printable checklist", icon: CheckSquare },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const FIVE_WAYS: { title: string; body: string; icon: ElementType }[] = [
  {
    title: "AI menu engineering and pricing optimization",
    body: "AI reviews your point of sale data to find which dishes sell well and which drag down margins. It then suggests price nudges, portion tweaks, and items to retire so the menu earns more per table without raising prices across the board.",
    icon: UtensilsCrossed,
  },
  {
    title: "AI reservation and waitlist management with smart seating",
    body: "AI reservation tools seat guests based on table size, expected dwell time, and server load. They predict no shows, fill cancellations from the waitlist, and turn tables faster during peak hours without rushing guests.",
    icon: CalendarClock,
  },
  {
    title: "AI inventory forecasting to reduce food waste",
    body: "AI forecasts demand using sales history, day of week, weather, and local events. It tells you how much of each ingredient to prep and order so you throw away less food and avoid running out of popular dishes on a busy night.",
    icon: Trash2,
  },
  {
    title: "AI customer review monitoring and auto reply",
    body: "AI watches Google, Yelp, and TripAdvisor for new reviews and drafts a polite reply you can approve in one click. It flags negative reviews fast so you can respond the same day and protect your reputation.",
    icon: MessageSquareText,
  },
  {
    title: "AI marketing and social media content for specials and events",
    body: "AI drafts captions, hashtags, and image ideas for your specials, happy hours, and events. You get a week of posts in minutes and keep your feed active even when the kitchen keeps you busy.",
    icon: Megaphone,
  },
];

interface ToolCard {
  name: string;
  url: string;
  what: string;
}

const TOOLS: ToolCard[] = [
  {
    name: "OpenTable",
    url: "https://www.opentable.com",
    what: "Reservations and guest data that fill tables and track regulars.",
  },
  {
    name: "Toast",
    url: "https://pos.toasttab.com",
    what: "POS and restaurant management that ties sales to inventory.",
  },
  {
    name: "TouchBistro",
    url: "https://www.touchbistro.com",
    what: "POS with analytics that shows what sells and what to drop.",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    what: "Menu descriptions and marketing copy written in seconds.",
  },
  {
    name: "Canva Magic Design",
    url: "https://www.canva.com",
    what: "Social media graphics for specials and events without a designer.",
  },
  {
    name: "Otter.ai",
    url: "https://otter.ai",
    what: "Meeting and staff training transcription you can search later.",
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Identify your biggest operational pain",
    body: "Pick the one problem that costs you the most time or money each week. Common picks are no shows, food waste, slow table turns, or unanswered reviews. Name it before you choose any tool.",
  },
  {
    title: "Pick one AI tool that targets that pain",
    body: "Match the pain to a single tool from the list above. Do not buy a suite. If waste is the pain, start with inventory forecasting. If reviews are the pain, start with review monitoring.",
  },
  {
    title: "Pilot the tool with one shift or one week",
    body: "Run the tool on one dinner service or one full week. Watch what improves and what breaks. Keep notes so you can decide whether to roll it out or try something else.",
  },
  {
    title: "Train your staff before the pilot starts",
    body: "Spend thirty minutes showing staff how the tool works and why it helps. Answer their questions up front. A tool your team does not trust will sit unused no matter how good it is.",
  },
  {
    title: "Measure waste or time saved in real numbers",
    body: "Track food cost percentage, table turn time, or review response time before and after the pilot. Real numbers tell you whether the tool earned its keep or needs to go.",
  },
  {
    title: "Decide to expand, adjust, or stop",
    body: "Review the numbers with your manager or head chef. If the pilot worked, expand to more shifts. If it did not, adjust the setup or drop the tool and try the next pain point.",
  },
  {
    title: "Add a second tool only after the first runs smoothly",
    body: "Wait until the first tool is part of the daily routine before you add another. Stacking tools too fast confuses staff and hides which one is actually helping.",
  },
];

const MISTAKES: { title: string; body: string }[] = [
  {
    title: "Automating reservations before fixing your no show policy",
    body: "AI can fill your book, but it cannot fix a weak no show policy. Set a deposit or confirmation rule first, then let AI manage the waitlist on top of a policy that already works.",
  },
  {
    title: "Skipping staff training on new tools",
    body: "Tools that no one understands get ignored or used wrong. Train every server, host, and cook before the pilot and again after the first week of real use.",
  },
  {
    title: "Over relying on AI for food safety",
    body: "AI can flag dates and forecast demand, but it cannot smell spoiled food or check a holding temperature. A human must always confirm food safety decisions, every shift.",
  },
  {
    title: "Neglecting the personal touch in customer replies",
    body: "Auto replies save time, but a generic reply can feel cold. Edit each draft so regulars hear your voice, and add a personal note for reviews that mention a person by name.",
  },
  {
    title: "Chasing every new tool at once",
    body: "Trying five tools in one month overwhelms staff and hides which one helped. Run one pilot at a time, measure it, and only then decide what to try next.",
  },
];

const CHECKLIST: { label: string; id: string }[] = [
  {
    label: "List your top three operational pains and rank them by cost.",
    id: "r1",
  },
  {
    label: "Pick one AI tool that targets your most expensive pain.",
    id: "r2",
  },
  {
    label: "Run a one shift or one week pilot with that single tool.",
    id: "r3",
  },
  {
    label: "Train every staff member on the tool before the pilot starts.",
    id: "r4",
  },
  {
    label: "Record food cost percentage before and after the pilot.",
    id: "r5",
  },
  {
    label: "Record average table turn time before and after the pilot.",
    id: "r6",
  },
  {
    label: "Set a no show policy before turning on AI reservation tools.",
    id: "r7",
  },
  { label: "Approve every AI drafted review reply before it posts.", id: "r8" },
  {
    label: "Schedule a weekly review of AI tool results with your manager.",
    id: "r9",
  },
  {
    label: "Add a second tool only after the first runs smoothly for a month.",
    id: "r10",
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Will AI replace my host staff?",
    a: "No. AI handles the busywork of seating, waitlists, and reminders so your hosts can greet guests and solve problems. The host still runs the door. The tool just hands them a better plan.",
  },
  {
    q: "Is AI too expensive for a small restaurant?",
    a: "Most tools in this guide have a free tier or a low monthly plan. Start with one tool on a free plan, measure the savings, and only upgrade when the tool pays for itself.",
  },
  {
    q: "How do I keep customer data safe?",
    a: "Use tools that store data on their own servers and never paste guest details into public AI chats. Read the tool privacy policy, turn on two factor login, and train staff not to share login access.",
  },
  {
    q: "Will AI help with food cost control?",
    a: "Yes. AI inventory forecasting compares sales history to your orders and flags where you overbuy. It also suggests smaller prep quantities for slow nights so you waste less and keep food cost down.",
  },
  {
    q: "Do I need internet at my restaurant?",
    a: "Most AI tools need an internet connection to sync reservations and reviews. If your connection drops often, pick tools with an offline mode for the POS and sync them when service returns.",
  },
  {
    q: "Can AI write my menu descriptions?",
    a: "Yes. Tools like ChatGPT draft descriptions from your ingredients and style. You review and edit each one so the menu still sounds like your restaurant, not a robot.",
  },
];

export default function RestaurantsGuide() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      let best: string | null = null;
      let closest = Number.POSITIVE_INFINITY;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closest) {
          closest = dist;
          best = s.id;
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

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="restaurants_guide.hero.section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <UtensilsCrossed size={12} aria-hidden="true" />
              AI Job Guide for Restaurants
            </span>
            <h1 className="heading-hero text-foreground text-balance">
              AI for Restaurants
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))] text-balance">
              Practical AI that fits the daily rhythm of a restaurant: fuller
              tables, less waste, faster replies, and a menu that earns more per
              cover.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "5 ways AI helps", id: "five-ways" },
                { label: "Tools to know", id: "tools" },
                { label: "Printable checklist", id: "checklist" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`restaurants_guide.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70"
                    aria-hidden="true"
                  />
                  {tag.label}
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
        data-ocid="restaurants_guide.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;
              const active = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  data-ocid={`restaurants_guide.section_nav.item.${i + 1}`}
                  className={[
                    "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                    active
                      ? "bg-[#EEF2FF] text-[#6366F1]"
                      : "text-zinc-500 hover:text-[#6366F1]",
                  ].join(" ")}
                >
                  <Icon size={12} aria-hidden="true" />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* WHY AI MATTERS */}
        <section
          id="why-ai"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.why_ai.section"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <Sparkles
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              Why AI matters for restaurants
            </h2>
          </div>
          <div className="max-w-3xl prose-line-height">
            <p className="text-[1.0625rem] leading-[1.75] text-[rgb(var(--text-readable))]">
              Restaurants run on thin margins and small teams, so every saved
              hour and every saved ingredient counts. AI fits the daily
              operation by spotting which dishes earn their place on the menu,
              seating guests in the right order, forecasting how much food to
              prep, and answering reviews before they cost you a regular. It
              does the repetitive work that pulls owners and managers away from
              the floor, so the human side of hospitality stays front of house.
            </p>
          </div>
        </section>

        {/* FIVE WAYS */}
        <section
          id="five-ways"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.five_ways.section"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <UtensilsCrossed
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              5 ways AI helps restaurants
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FIVE_WAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-vibrant p-6 rounded-[calc(var(--radius)*2)]"
                  data-ocid={`restaurants_guide.five_ways.item.${i + 1}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span
                      className="shrink-0 w-9 h-9 rounded-full bg-[rgba(99,102,241,0.08)] text-[#6366F1] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* TOOLS */}
        <section
          id="tools"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.tools.section"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <ClipboardList
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              Tools restaurants should know
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((tool, i) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`restaurants_guide.tools.card.${i + 1}`}
                className="card-vibrant p-6 rounded-[calc(var(--radius)*2)] flex flex-col gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {tool.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[#6366F1] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))] flex-1">
                  {tool.what}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#6366F1] mt-1"
                  data-ocid={`restaurants_guide.tools.link.${i + 1}`}
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
        </section>

        {/* GETTING STARTED */}
        <section
          id="getting-started"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.getting_started.section"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <ListChecks
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              Step by step: getting started with AI in restaurants
            </h2>
          </div>
          <ol className="space-y-4 max-w-3xl">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="card-vibrant p-5 rounded-[calc(var(--radius)*2)] flex gap-4"
                data-ocid={`restaurants_guide.getting_started.item.${i + 1}`}
              >
                <span
                  className="shrink-0 w-9 h-9 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))]">
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
          className="scroll-mt-24"
          data-ocid="restaurants_guide.mistakes.section"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <AlertTriangle
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              Common mistakes to avoid
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {MISTAKES.map((m, i) => (
              <article
                key={m.title}
                className="card-vibrant p-6 rounded-[calc(var(--radius)*2)]"
                data-ocid={`restaurants_guide.mistakes.item.${i + 1}`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <Star
                    size={16}
                    className="text-[#6366F1] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-bold text-foreground leading-snug">
                    {m.title}
                  </h3>
                </div>
                <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))]">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PRINTABLE CHECKLIST */}
        <section
          id="checklist"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.checklist.section"
        >
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(99,102,241,0.10)" }}
              >
                <CheckSquare
                  size={20}
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                />
              </div>
              <h2 className="heading-section text-foreground">
                Printable checklist
              </h2>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              data-ocid="restaurants_guide.checklist.print_button"
              className="button-cta-gold inline-flex items-center gap-2"
            >
              <Printer size={16} aria-hidden="true" />
              Print this checklist
            </button>
          </div>
          <p className="text-[0.9375rem] leading-[1.65] text-[rgb(var(--text-muted-readable))] mb-6 max-w-3xl">
            Tick each action as you complete it. Print the page to keep a copy
            by the host stand or in the kitchen office.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
            {CHECKLIST.map((item, i) => {
              const isChecked = !!checked[item.id];
              return (
                <li
                  key={item.id}
                  className="card-vibrant p-4 rounded-[calc(var(--radius)*2)] flex items-start gap-3"
                  data-ocid={`restaurants_guide.checklist.item.${i + 1}`}
                >
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={isChecked}
                    onChange={() => toggle(item.id)}
                    data-ocid={`restaurants_guide.checklist.checkbox.${i + 1}`}
                    className="checklist-print-item mt-1 w-5 h-5 rounded border-border accent-[#6366F1] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    style={{ accentColor: ACCENT }}
                  />
                  <label
                    htmlFor={item.id}
                    className="text-[0.9375rem] leading-[1.6] text-[rgb(var(--text-readable))] cursor-pointer select-none"
                  >
                    {item.label}
                  </label>
                </li>
              );
            })}
          </ul>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24"
          data-ocid="restaurants_guide.faq.section"
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.10)" }}
            >
              <HelpCircle
                size={20}
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </div>
            <h2 className="heading-section text-foreground">
              Frequently asked questions
            </h2>
          </div>
          <p className="text-[rgb(var(--text-muted-readable))] text-lg mb-4 max-w-2xl">
            Real answers to the questions restaurant owners ask about AI.
          </p>
          <SectionQA accentColor={ACCENT} items={FAQ_ITEMS} />
        </section>

        <GuideAuthorFooter />

        {/* CLOSING CTA */}
        <section
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.04) 100%)",
            border: "1px solid rgba(99,102,241,0.20)",
          }}
          data-ocid="restaurants_guide.cta.section"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep learning, or build your AI skills
          </h2>
          <p className="text-[rgb(var(--text-muted-readable))] mb-6 max-w-xl mx-auto">
            Browse more profession guides, or start with AI Training and Tools
            to build confidence before you pilot a tool in your restaurant.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/ai-job-guides"
              className="button-cta inline-flex items-center gap-2"
              data-ocid="restaurants_guide.cta.ai_job_guides_button"
            >
              More AI job guides
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/ai-training"
              className="button-cta inline-flex items-center gap-2"
              data-ocid="restaurants_guide.cta.ai_training_button"
            >
              AI Training and Tools
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
