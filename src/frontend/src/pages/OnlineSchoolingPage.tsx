import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Heart,
  HelpCircle,
  ListChecks,
  Megaphone,
  Monitor,
  Sparkles,
  Target,
  Users,
  Video,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "define-specialty", label: "Define Your Specialty", icon: Target },
  { id: "articulate-brand", label: "Articulate Your Brand", icon: Sparkles },
  { id: "emotional-outcome", label: "The Emotional Outcome", icon: Heart },
  { id: "choose-format", label: "Choose Your Format", icon: Video },
  { id: "teaching-space", label: "Set Up Your Space", icon: Monitor },
  { id: "price-offering", label: "Price Your Offering", icon: DollarSign },
  { id: "attract-students", label: "Attract Students", icon: Megaphone },
  { id: "deliver-connection", label: "Deliver and Deepen", icon: Users },
  { id: "checklist", label: "Launch Checklist", icon: CheckCircle2 },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const COMPARISON_ROWS = [
  {
    label: "How students learn",
    selfPaced: "On their own schedule, at their own pace",
    liveCohort: "Together with a group, on a shared schedule",
    oneToOne: "Privately with you, scheduled one session at a time",
  },
  {
    label: "Time you invest per student",
    selfPaced: "Low. You record once, students watch many times",
    liveCohort: "Medium. You teach live each week to the whole group",
    oneToOne: "High. You give every minute to one person",
  },
  {
    label: "Price you can charge",
    selfPaced: "Lowest per student. Volume makes it work",
    liveCohort: "Middle. The group experience justifies a higher price",
    oneToOne: "Highest. Personal attention commands a premium",
  },
  {
    label: "Connection you build",
    selfPaced: "Indirect. Students feel it through your recordings",
    liveCohort: "Strong. The group becomes a small community around you",
    oneToOne: "Deepest. You and the student work side by side",
  },
  {
    label: "Best for teaching",
    selfPaced: "Foundations, frameworks, and repeatable skills",
    liveCohort: "Practices that grow with peer feedback and shared progress",
    oneToOne: "Highly personal goals that need a tailored approach",
  },
  {
    label: "How it scales",
    selfPaced: "Scales without limit once the course is built",
    liveCohort: "Scales by cohort. You run a new group when one fills",
    oneToOne: "Scales only with your available hours",
  },
  {
    label: "Effort to launch",
    selfPaced: "High upfront. You build the whole course before launch",
    liveCohort: "Medium. You prepare weekly and teach as you go",
    oneToOne: "Low upfront. You start with one student and one session",
  },
];

const CHECKLIST_GROUPS = [
  {
    name: "Define your specialty",
    icon: Target,
    items: [
      "You can name the specific skill or knowledge you teach in one sentence",
      "You can describe who the teaching is for and who it is not for",
      "You have written down the outcome a student reaches by the end",
    ],
  },
  {
    name: "Articulate your brand",
    icon: Sparkles,
    items: [
      "You can state who you are as a teacher in plain language",
      "You can name what makes your teaching distinct from others",
      "Your teaching voice shows up consistently in your descriptions and messages",
    ],
  },
  {
    name: "The emotional outcome",
    icon: Heart,
    items: [
      "You have written down how people feel after they learn from you",
      "You can describe the connection you create with your students",
      "Your enrollment copy leads with the emotional outcome, not the topic list",
    ],
  },
  {
    name: "Choose your format",
    icon: Video,
    items: [
      "You have chosen self-paced, live cohort, or one-to-one as your starting format",
      "Your format matches the skill you teach and the time you have",
      "You can describe what a single lesson or session looks like",
    ],
  },
  {
    name: "Set up your teaching space",
    icon: Monitor,
    items: [
      "You have a quiet, well-lit place to record or teach live",
      "You have a working camera and microphone you have tested",
      "You have a stable internet connection for live sessions",
      "You have chosen where your recordings or sessions will live",
    ],
  },
  {
    name: "Price your offering",
    icon: DollarSign,
    items: [
      "You have set a price tied to the value of the outcome, not the length of the content",
      "You have decided whether you charge once, per cohort, or per session",
      "You can explain your price to a student in one sentence",
    ],
  },
  {
    name: "Attract your first students",
    icon: Megaphone,
    items: [
      "You have told at least ten people in your network what you now teach",
      "You have written one public post describing the emotional outcome",
      "You have asked one former student or peer for an introduction",
      "You have a simple way for someone to ask you for more details",
    ],
  },
  {
    name: "Deliver and deepen the connection",
    icon: Users,
    items: [
      "You have a plan for the first live moment with a new student",
      "You have a follow-up step you send after a lesson or session",
      "You have a way to invite students to continue with you",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I need a big audience before I start teaching online?",
    a: "No. You need a clear specialty and a way to describe how people feel after they learn it. Most owners begin with a handful of people they already know. The connection you create in the first sessions is what brings the next students through word of mouth.",
  },
  {
    q: "Which format should I choose first?",
    a: "Choose the format that matches the skill you teach and the time you have. If your skill has clear foundations anyone can repeat, start with a self-paced course. If your skill grows with feedback and shared progress, start with a live cohort. If your skill needs a tailored approach for each person, start with one-to-one sessions. You can always add another format later.",
  },
  {
    q: "How do I price something that is mostly about how it makes people feel?",
    a: "Price the outcome, not the length of the content. A student is not paying for an hour of video. They are paying for the confidence, the calm, or the new ability they walk away with. State the outcome plainly, set a price that reflects its value to the student, and explain the price in one sentence when asked.",
  },
  {
    q: "What if I am not a natural on camera?",
    a: "You do not need to be. You need to be yourself. Students connect with a real teacher, not a performance. Record in a quiet, well-lit space, test your camera and microphone once, and speak the way you speak in person. The emotional outcome comes from your clarity and care, not from production polish.",
  },
  {
    q: "Do I need a website before I can teach online?",
    a: "You need a place for your teaching to live and a way for students to reach you. That can be a simple page, a platform that hosts courses, or even a way to schedule a single session. Start with the smallest setup that lets one student learn from you. Add more once the first students confirm the connection is real.",
  },
  {
    q: "How do I find my first students without paying for ads?",
    a: "Start with the people who already know you. Tell at least ten people in your network what you now teach and how it helps. Write one public post that leads with the emotional outcome. Ask one former student or peer for an introduction. Word of mouth from a student who felt the outcome is stronger than any paid promotion.",
  },
  {
    q: "What if my specialty feels too small to build a business around?",
    a: "A specific specialty is an advantage, not a limit. The owners who succeed online are the ones who teach something specific to the people who want exactly that. A small, clear specialty lets you describe the outcome in plain language and lets the right students recognize themselves in what you teach.",
  },
  {
    q: "How often should I follow up with students after a lesson?",
    a: "Follow up once shortly after the lesson, then invite them to continue. The follow-up reinforces the emotional outcome while it is still fresh. The invitation gives the student a clear next step with you. You do not need a complex system. A genuine message and a clear next step are what deepen the connection.",
  },
  {
    q: "What is the single most important thing to get right?",
    a: "The emotional outcome. If you can describe how people feel after they learn your specialty, and you can deliver that feeling consistently, everything else follows. The format, the price, and the outreach all serve that one connection. Get the outcome right and the rest becomes a series of practical choices.",
  },
];

const STORAGE_KEY = "online-schooling-checklist-v1";

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
      data-ocid={`online-schooling.faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-ocid={`online-schooling.faq.toggle.${index + 1}`}
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

export default function OnlineSchoolingPage() {
  const [activeSection, setActiveSection] = useState<string | null>(
    "define-specialty",
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
  useEffect(() => {
    document.body.classList.add("online-schooling-page");
    return () => {
      document.body.classList.remove("online-schooling-page");
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
        data-ocid="online-schooling.hero.section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <BookOpen size={12} />
              AISmallBiz: Teach Your Specialty Online
            </span>
            <h1 className="heading-hero text-foreground">
              How to Teach Your{" "}
              <span className="text-gradient-vibrant">Specialty Online</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))]">
              A general path for any owner who wants to teach what they know on
              the internet, built around the connection you create and how
              people feel after they have learned from you.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("define-specialty")}
              data-ocid="online-schooling.hero.cta"
              className="button-cta inline-flex items-center gap-2 mt-2"
            >
              <ListChecks size={15} />
              Start the Guide
            </button>
          </div>
        </div>
      </section>

      {/* SECTION NAV */}
      <nav
        className="sticky top-16 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-card"
        aria-label="Section navigation"
        data-ocid="online-schooling.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`online-schooling.section_nav.item.${i + 1}`}
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

      {/* SECTION 1: DEFINE YOUR SPECIALTY */}
      <section
        id="define-specialty"
        className="py-16 md:py-20 bg-background"
        data-ocid="online-schooling.define_specialty.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Target}
            sectionNumber={1}
            title="Define Your Specialty"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              Before you teach anything online, you need to name the specific
              skill or knowledge you teach. Not a broad field. Not a category.
              The specific thing someone comes to you to learn.
            </p>
            <p>
              A broad answer like I teach cooking is hard to sell because it
              competes with everyone. A specific answer like I teach home cooks
              how to make consistent sourdough bread in a home oven is easy to
              sell because the right student recognizes themselves immediately.
            </p>
            <p>
              The same is true for any specialty. A bookkeeper might teach small
              business owners how to read their own monthly statements. A
              contractor might teach homeowners how to spot the early signs of
              water damage. A yoga teacher might teach desk workers how to
              release shoulder tension in ten minutes a day. The narrower the
              specialty, the clearer the promise.
            </p>
            <p>
              Write your specialty in one sentence. Name the skill or knowledge.
              Name who it is for. Name the outcome they reach by the end. If you
              cannot fit it in one sentence, it is still too broad.
            </p>
            <div className="my-5">
              <CalloutBox variant="branding" icon={Sparkles} title="Example">
                Instead of I teach photography, write I teach new parents how to
                take natural portraits of their children with the camera they
                already own. The second version tells the student exactly what
                they will learn and exactly who it is for.
              </CalloutBox>
            </div>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Write your specialty in one sentence. Name the skill,
                name who it is for, and name the outcome. Read it back. If a
                stranger would know what you teach, you have it right.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARTICULATE YOUR BRAND */}
      <section
        id="articulate-brand"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="online-schooling.articulate_brand.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Sparkles}
            sectionNumber={2}
            title="Articulate Your Brand"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              Your brand as a teacher is not a logo or a color palette. It is
              the answer to two questions: who are you, and what makes your
              teaching distinct from everyone else who teaches the same
              specialty.
            </p>
            <p>
              Students choose a teacher, not just a topic. Two people can teach
              the same skill and the student will choose the one whose presence,
              story, or approach feels right to them. Your job is to make that
              choice easy by stating who you are in plain language.
            </p>
            <p>
              Start with who you are. Write a short paragraph about your
              relationship to your specialty. How did you learn it. Why do you
              keep doing it. What do you wish someone had told you when you
              started. This is not a resume. It is the human story that makes a
              stranger trust you enough to learn from you.
            </p>
            <p>
              Then name what makes your teaching distinct. Maybe you teach in
              plain language with no jargon. Maybe you teach through short
              repeated practices instead of long lectures. Maybe you teach with
              patience and no judgment because you remember how hard it was to
              start. Whatever it is, name it. That distinct quality is your
              brand.
            </p>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Write one paragraph about who you are as a teacher and
                one sentence about what makes your teaching distinct. Keep both
                honest and specific. Read them aloud. If they sound like you,
                they are ready.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE EMOTIONAL OUTCOME */}
      <section
        id="emotional-outcome"
        className="py-20 md:py-24 bg-background"
        data-ocid="online-schooling.emotional_outcome.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Heart}
            sectionNumber={3}
            title="The Emotional Outcome"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              This is the centerpiece of everything in this guide. The topic you
              teach is the surface. The emotional outcome is the sell. When you
              can describe how people feel after they have learned your
              specialty, you have something no competitor can copy.
            </p>
            <p>
              People do not sign up for a course. They sign up for the way they
              want to feel on the other side of it. A home cook does not want a
              sourdough lesson. They want the quiet pride of pulling a loaf they
              made out of their own oven. A desk worker does not want a shoulder
              routine. They want to end the day without the familiar ache. The
              owner who can name that feeling and deliver it is the owner who
              fills their teaching.
            </p>
            <p>
              Describe the emotional outcome in plain language. Write down how
              people feel after they have learned from you. Do they feel
              confident. Do they feel calm. Do they feel capable in a way they
              did not before. Do they feel seen. The feeling is the promise. The
              lessons are how you keep it.
            </p>
            <p>
              This is also the connection that helps everyone. The student gets
              the feeling they came for. You get the satisfaction of watching
              someone change. And the people around that student get the version
              of them that the teaching produced. A confident home cook feeds
              their family. A calm desk worker is kinder to their colleagues.
              The outcome ripples outward from the moment of teaching.
            </p>
            <p>
              Lead with the emotional outcome in everything you write about your
              teaching. Your enrollment page should open with how the student
              will feel, not with a list of lessons. Your outreach should
              describe the feeling, not the topic. When the feeling is clear,
              the right students recognize themselves and the wrong ones move
              on. That self selection is what makes the connection real.
            </p>
            <div className="my-5">
              <CalloutBox
                variant="branding"
                icon={Heart}
                title="The sell, stated plainly"
              >
                People do not buy the topic. They buy the feeling on the other
                side of learning it. Name that feeling. Promise it. Deliver it.
                That is the entire offer.
              </CalloutBox>
            </div>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Write one sentence describing how people feel after they
                learn your specialty. Then write one sentence describing the
                connection you create with them in the process. These two
                sentences are the heart of your enrollment copy.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHOOSE YOUR ONLINE FORMAT */}
      <section
        id="choose-format"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="online-schooling.choose_format.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Video}
            sectionNumber={4}
            title="Choose Your Online Format"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed mb-8">
            <p>
              There are three formats that work for almost any specialty you
              could teach online. Each one creates a different kind of
              connection and asks a different amount of your time. Choose the
              one that matches the skill you teach and the life you have.
            </p>
            <p>
              You do not have to pick one forever. Most owners start with one
              format and add another once they know what their students respond
              to. The goal is to start, not to have the perfect system on day
              one.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left font-semibold text-foreground p-4 w-1/5">
                    Dimension
                  </th>
                  <th className="text-left font-semibold text-foreground p-4 w-1/4">
                    Self-Paced Course
                  </th>
                  <th className="text-left font-semibold text-foreground p-4 w-1/4">
                    Live Cohort
                  </th>
                  <th className="text-left font-semibold text-foreground p-4 w-1/4">
                    One-to-One Sessions
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    data-ocid={`online-schooling.comparison.row.${i + 1}`}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                  >
                    <td className="p-4 font-medium text-foreground align-top">
                      {row.label}
                    </td>
                    <td className="p-4 text-[rgb(var(--text-muted-readable))] align-top">
                      {row.selfPaced}
                    </td>
                    <td className="p-4 text-[rgb(var(--text-muted-readable))] align-top">
                      {row.liveCohort}
                    </td>
                    <td className="p-4 text-foreground/90 align-top">
                      {row.oneToOne}
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
                data-ocid={`online-schooling.comparison.row.${i + 1}`}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-sm font-semibold text-foreground mb-3">
                  {row.label}
                </p>
                <div className="space-y-2">
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs font-semibold text-[rgb(var(--text-muted-readable))] uppercase tracking-wide mb-1">
                      Self-Paced Course
                    </p>
                    <p className="text-sm text-foreground/90">
                      {row.selfPaced}
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs font-semibold text-[rgb(var(--text-muted-readable))] uppercase tracking-wide mb-1">
                      Live Cohort
                    </p>
                    <p className="text-sm text-foreground/90">
                      {row.liveCohort}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 p-3">
                    <p className="text-xs font-semibold text-[rgb(var(--accent-neutral))] uppercase tracking-wide mb-1">
                      One-to-One Sessions
                    </p>
                    <p className="text-sm text-foreground/90">{row.oneToOne}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed max-w-3xl mt-8">
            The continuity point: every format can deliver the emotional outcome
            you defined in the previous section. The format changes how the
            connection feels, not whether it happens. Choose the one that lets
            you be fully present for your students, because presence is what
            creates the feeling they came for.
          </p>
        </div>
      </section>

      {/* SECTION 5: SET UP YOUR TEACHING SPACE */}
      <section
        id="teaching-space"
        className="py-16 md:py-20 bg-background"
        data-ocid="online-schooling.teaching_space.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Monitor}
            sectionNumber={5}
            title="Set Up Your Teaching Space"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              You do not need a studio. You need a quiet, well-lit place where
              you can be heard and seen clearly. The basics matter more than the
              equipment, because the basics are what let the connection come
              through.
            </p>
            <p>
              The same setup works whether you record lessons ahead of time or
              teach live. The goal in both cases is for the student to forget
              the technology and focus on you. Here is what to get right.
            </p>
            <ul className="space-y-3 my-5">
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Light</strong>: Face a
                  window or a simple lamp so your face is lit from the front.
                  Avoid sitting with a bright window behind you, which turns you
                  into a silhouette.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Sound</strong>: Use any
                  microphone that is closer to you than the room. A simple
                  earbud mic or a small USB microphone both work. The goal is
                  for your voice to be clear and free of echo.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Camera</strong>: Use the
                  camera you already own, whether it is built into your laptop
                  or a phone on a small stand. Position it at eye level so you
                  look directly at your students.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Connection</strong>: For
                  live sessions, use a wired connection or sit close to your
                  router. A stable connection keeps you present instead of
                  frozen.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Where it lives</strong>:
                  Choose one place for your recordings or live sessions to live.
                  It can be a course platform, a video library, or a simple
                  scheduling tool. Pick one and keep it simple.
                </span>
              </li>
            </ul>
            <p>
              Test the whole setup once before you teach anyone. Record a short
              clip, watch it back, and listen for clarity. If you can hear
              yourself and see yourself clearly, your students will too. That is
              the entire standard.
            </p>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Set up your space this week. Test your light, your mic,
                and your camera with one short recording. Watch it back. When it
                feels like you, your teaching space is ready.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICE YOUR OFFERING */}
      <section
        id="price-offering"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="online-schooling.price_offering.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={DollarSign}
            sectionNumber={6}
            title="Price Your Offering"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              Price the emotional outcome, not the length of the content. A
              student is not paying for an hour of video or a number of
              sessions. They are paying for the confidence, the calm, or the new
              ability they walk away with. Your price should reflect the value
              of that outcome to the student.
            </p>
            <p>
              There are three pricing models that fit the three formats. Each
              one ties the price to a different kind of value.
            </p>
            <ul className="space-y-3 my-5">
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Self-paced course</strong>
                  : Charge once for access. The price reflects the value of the
                  outcome the student reaches by the end. Volume makes this
                  work, so the price per student is lower but the course can
                  serve many students over time.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">Live cohort</strong>:
                  Charge per cohort. The price reflects the outcome plus the
                  shared experience of reaching it with a group. The group
                  connection justifies a higher price than the same content
                  delivered alone.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/90">
                <CheckCircle2
                  size={16}
                  className="text-[rgb(var(--accent-neutral))] shrink-0 mt-1"
                />
                <span>
                  <strong className="text-foreground">
                    One-to-one sessions
                  </strong>
                  : Charge per session or per package. The price reflects the
                  outcome plus your personal attention to one person. Personal
                  attention commands the highest price because it is the most
                  direct path to the feeling the student wants.
                </span>
              </li>
            </ul>
            <p>
              When you set your price, be able to explain it in one sentence.
              The explanation should point to the outcome, not the inputs. A
              sentence like this covers six lessons and two live calls is an
              input explanation. A sentence like this gets you to the point
              where you can read your own statements with confidence is an
              outcome explanation. The second one is what makes a student say
              yes.
            </p>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Set one price for your first offering. Tie it to the
                value of the outcome, choose the model that matches your format,
                and write one sentence that explains the price to a student.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ATTRACT YOUR FIRST STUDENTS */}
      <section
        id="attract-students"
        className="py-16 md:py-20 bg-background"
        data-ocid="online-schooling.attract_students.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Megaphone}
            sectionNumber={7}
            title="Attract Your First Students"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              You do not need a marketing budget to find your first students.
              You need a clear outcome and the willingness to tell people about
              it. The first students almost always come from the people who
              already know you and the people they know.
            </p>
            <p>
              Start with your existing network. Tell at least ten people what
              you now teach and how it helps. Be specific about the emotional
              outcome. The goal is not to sell to these ten people. It is to
              give them the words to recognize someone who needs what you teach
              and send that person to you.
            </p>
            <p>
              Then write one public post that leads with the feeling. Describe
              how people feel after they learn your specialty. Do not list the
              lessons. Do not explain the format. Describe the outcome in plain
              language and invite anyone who recognizes themselves to reach out.
              One honest post reaches more of the right people than a polished
              campaign that hides the feeling.
            </p>
            <p>
              Ask one former student or peer for an introduction. A single warm
              introduction from someone who can vouch for you is worth more than
              a hundred cold messages. Choose someone who has seen you teach or
              who has felt the outcome you describe, and ask them to connect you
              with one person who needs it.
            </p>
            <p>
              Make it easy to say yes. Have a simple way for someone to ask you
              for more details. A reply, a message, a short call. Remove every
              step that does not need to be there. The student who reaches out
              is already interested. Your job is to meet them where they are.
            </p>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: This week, tell ten people in your network what you
                teach, write one public post about the emotional outcome, and
                ask one former student or peer for a single introduction.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DELIVER AND DEEPEN THE CONNECTION */}
      <section
        id="deliver-connection"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="online-schooling.deliver_connection.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={Users}
            sectionNumber={8}
            title="Deliver and Deepen the Connection"
          />
          <div className="space-y-5 max-w-3xl text-base text-[rgb(var(--text-muted-readable))] leading-relaxed">
            <p>
              The moment of teaching is where the emotional outcome is created
              or lost. Everything before it is preparation. Everything after it
              is whether the connection lasts. Both matter, and both are in your
              hands.
            </p>
            <p>
              Plan the first live moment with a new student, whether that is a
              live cohort session, a one-to-one call, or the first lesson a
              student opens. The first moment sets the tone for everything that
              follows. Start by acknowledging the student and the outcome they
              came for. Make it clear they are in the right place and that you
              see them. That single act of recognition is the beginning of the
              connection.
            </p>
            <p>
              Teach the way you described your teaching in the brand section. If
              you said you teach with patience, be patient. If you said you
              teach in plain language, keep the jargon out. The student signed
              up for the version of you that you promised. Being that version is
              how you deliver the feeling.
            </p>
            <p>
              After the lesson or session, follow up once. A genuine message
              that reinforces the emotional outcome while it is still fresh is
              what turns a single lesson into a relationship. Reference what the
              student did or learned. Name the feeling you want them to carry.
              Keep it short and honest.
            </p>
            <p>
              Then invite them to continue. Give the student a clear next step
              with you. The next step can be the next lesson, the next session,
              the next cohort, or simply a way to stay in touch. A student who
              felt the outcome and is offered a next step will often take it.
              That is how the connection deepens and how your teaching grows.
            </p>
            <div className="my-5">
              <CalloutBox variant="tip" icon={ArrowRight} title="">
                Action: Write a short plan for your first live moment, a
                follow-up message template you can send after a lesson, and one
                clear next step you will offer every student who finishes.
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CHECKLIST */}
      <section
        id="checklist"
        className="py-20 md:py-24 bg-background"
        data-ocid="online-schooling.checklist.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={CheckCircle2}
            sectionNumber={9}
            title="Launch Checklist: Are You Ready to Teach Online?"
          />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <p className="text-base text-[rgb(var(--text-muted-readable))] max-w-2xl leading-relaxed">
              Twenty-eight items across eight categories. Check off what you
              have done. Your progress is saved in your browser so it survives
              reloads.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              data-ocid="online-schooling.checklist.print"
              className="button-cta inline-flex items-center gap-2 self-start"
            >
              <BookOpen size={15} />
              Print Checklist
            </button>
          </div>

          {/* Progress bar */}
          <div
            className="rounded-xl border border-border bg-card p-5 mb-10"
            data-ocid="online-schooling.checklist.progress"
          >
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-semibold text-foreground">
                Your readiness score
              </p>
              <p
                className="text-sm font-bold text-[rgb(var(--accent-indigo))]"
                data-ocid="online-schooling.checklist.progress_count"
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
                data-ocid={`online-schooling.checklist.group.${gi + 1}`}
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
                            data-ocid={`online-schooling.checklist.checkbox.${gi + 1}.${ii + 1}`}
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
                <strong className="text-foreground">22 or more checked</strong>:
                You are ready to teach. Your specialty is clear, your outcome is
                named, and your space is set. Open enrollment for your first
                students.
              </p>
              <p className="mb-3">
                <strong className="text-foreground">14 to 21 checked</strong>:
                Close the gaps in the lowest scoring group first. Most owners
                land here after one pass through the sections. The emotional
                outcome and the format are the two groups that unlock the rest.
              </p>
              <p>
                <strong className="text-foreground">Under 14 checked</strong>:
                Start with Section 1 (define your specialty) and Section 3 (the
                emotional outcome). They are the foundation everything else
                stands on, and they cost nothing to write.
              </p>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section
        id="faq"
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="online-schooling.faq.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            icon={HelpCircle}
            sectionNumber={10}
            title="Frequently Asked Questions"
          />
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FaqAccordionItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: CTA */}
      <section
        id="cta"
        className="py-16 md:py-20 bg-background"
        data-ocid="online-schooling.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 mb-5">
            <Heart size={14} className="text-[rgb(var(--accent-indigo))]" />
            <span className="text-sm font-semibold text-[rgb(var(--accent-indigo))] uppercase tracking-wider">
              Start With the Feeling
            </span>
          </div>
          <h2 className="heading-section font-display font-bold text-3xl md:text-4xl text-foreground mb-5">
            Start With the Feeling
          </h2>
          <p className="text-base md:text-lg text-[rgb(var(--text-muted-readable))] leading-relaxed max-w-2xl mx-auto mb-8">
            You do not need to do everything in this guide this week. Start with
            the emotional outcome. Write one sentence about how people feel
            after they learn your specialty. That sentence is the seed of
            everything else you will build.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/guides"
              search={{
                topic: undefined,
                businessType: undefined,
                keyword: undefined,
              }}
              data-ocid="online-schooling.cta.guides_button"
              className="button-cta inline-flex items-center gap-2"
            >
              <BookOpen size={15} />
              Explore All Guides
            </Link>
            <Link
              to="/start-here"
              data-ocid="online-schooling.cta.start_here_button"
              className="button-cta-gold inline-flex items-center gap-2"
            >
              <Sparkles size={15} />
              Start Here
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
