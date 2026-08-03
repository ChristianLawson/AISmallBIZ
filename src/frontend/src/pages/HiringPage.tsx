import { Layout } from "@/components/Layout";
import { BadActorsArticleSection } from "@/components/hiring/BadActorsArticleSection";
import { HiringChecklistSection } from "@/components/hiring/HiringChecklistSection";
import { MeyersBriggsSection } from "@/components/hiring/MeyersBriggsSection";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  ChevronRight,
  ClipboardCheck,
  ShieldAlert,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "mbti-guide", label: "MBTI Personality Guide", icon: Users },
  { id: "bad-actors-article", label: "Spotting Bad Actors", icon: ShieldAlert },
  { id: "hiring-checklist", label: "Hiring Checklist", icon: ClipboardCheck },
];

export default function HiringPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let closest: string | null = null;
      let closestDist = Number.POSITIVE_INFINITY;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - 150);
        if (top <= 150 && dist < closestDist) {
          closestDist = dist;
          closest = section.id;
        }
      }
      if (closest !== null) setActiveSection(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  };

  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-gradient-hero"
        data-ocid="hiring.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Briefcase size={12} />
              Hiring Toolkit 2026
            </span>

            <h1 className="heading-hero text-foreground">
              Hiring: Build a Team That{" "}
              <span className="text-gradient-vibrant">
                Stays &amp; Performs
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[#71717A]">
              You get a practical hiring toolkit that helps you place the right
              person in the right seat and avoid costly bad hires that drain
              payroll and customer trust. Used together, these resources save
              you weeks of trial and error, protect your revenue from a wrong
              fit, and keep your customers served by people who stay.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "MBTI Personality-to-Roles Guide", id: "mbti-guide" },
                {
                  label: "Spotting Bad Actors in Interviews",
                  id: "bad-actors-article",
                },
                { label: "Printable Hiring Checklist", id: "hiring-checklist" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`hiring.hero.tag_pill.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE] cursor-pointer transition-colors duration-200 hover:bg-[#E0E7FF] hover:border-[#6366F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6366F1] opacity-70" />
                  {tag.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <button
                type="button"
                onClick={() => scrollTo("mbti-guide")}
                data-ocid="hiring.hero.cta_primary_button"
                className="button-cta"
              >
                Explore the MBTI Guide
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("hiring-checklist")}
                data-ocid="hiring.hero.cta_secondary_button"
                className="button-cta-gold"
              >
                Jump to the Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-JUMP NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="hiring.section_nav"
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
                data-ocid={`hiring.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-[#EEF2FF] text-[#6366F1]"
                    : "text-zinc-500 hover:text-[#6366F1]",
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
        <div id="mbti-guide">
          <MeyersBriggsSection />
        </div>
        <div id="bad-actors-article">
          <BadActorsArticleSection />
        </div>
        <div id="hiring-checklist">
          <HiringChecklistSection />
        </div>

        {/* CTA */}
        <section
          className="rounded-2xl p-10 text-center bg-[#EEF2FF] border border-[#C7D2FE]"
          data-ocid="hiring.cta_section"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Need Help Hiring for Your Business?
          </h2>
          <p className="text-[#71717A] text-lg mb-6 max-w-2xl mx-auto">
            Ask AISmallBiz&trade; a question about a specific role, candidate,
            or hiring scenario and get a tailored answer.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/ask-a-question"
              onClick={() => window.scrollTo(0, 0)}
              data-ocid="hiring.ask_question_button"
              className="button-cta"
            >
              Ask a Hiring Question
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
