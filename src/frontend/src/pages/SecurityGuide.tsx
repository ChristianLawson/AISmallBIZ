import { BackToTop } from "@/components/BackToTop";
import { GuideAuthorFooter } from "@/components/GuideAuthorFooter";
import { Layout } from "@/components/Layout";
import { NYCHelpCallout } from "@/components/NYCHelpCallout";
import { ProgressBar } from "@/components/ProgressBar";
import { SectionQA } from "@/components/SectionQA";
import {
  AlertTriangle,
  CheckSquare,
  KeyRound,
  Lock,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "introduction", label: "Introduction", icon: ShieldCheck },
  { id: "basics", label: "The Basics", icon: Lock },
  { id: "passwords", label: "Passwords & Access", icon: KeyRound },
  { id: "phishing", label: "Spotting Phishing", icon: AlertTriangle },
  { id: "shield-act", label: "New York Law", icon: Scale },
  { id: "breach", label: "If You Have a Breach", icon: Wallet },
  { id: "this-week", label: "Do This Week", icon: CheckSquare },
];

export default function SecurityGuide() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

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
      <ProgressBar />
      <BackToTop sections={SECTIONS.map(({ id, label }) => ({ id, label }))} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="security.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
                <ShieldCheck size={12} />
                Security & Compliance
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
                Free Forever
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-red-100 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800">
                New York SHIELD Act
              </span>
            </div>

            <h1 className="heading-hero text-foreground">
              Security for Small Business{" "}
              <span className="text-gradient-vibrant">What You Actually Need to Do</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable">
              You do not need an IT department. You need to close the doors
              attackers actually walk through, and know what New York law
              requires of you if something goes wrong.
            </p>

            <p className="text-sm text-muted-foreground italic">
              Practical cybersecurity basics plus New York SHIELD Act
              compliance, in plain language. No product to sell you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                { label: "Passwords & Access", id: "passwords" },
                { label: "Spotting Phishing", id: "phishing" },
                { label: "New York SHIELD Act", id: "shield-act" },
                { label: "Breach Notification", id: "breach" },
                { label: "This Week's Checklist", id: "this-week" },
              ].map((tag, i) => (
                <a
                  key={tag.label}
                  href={`#${tag.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(tag.id);
                  }}
                  data-ocid={`security.hero.tag.item.${i + 1}`}
                  className="flex items-center gap-2 text-[15px] px-4 py-2 rounded-full bg-accent-neutral-soft text-accent-neutral border border-accent-neutral-border dark:bg-accent-neutral-soft dark:text-accent-neutral dark:border-accent-neutral-border cursor-pointer transition-colors duration-200 hover:bg-accent-neutral-soft hover:border-accent-neutral dark:hover:bg-accent-neutral-soft dark:hover:border-accent-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neutral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
        aria-label="Guide section navigation"
        data-ocid="security.section_nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                data-ocid={`security.section_nav.item.${i + 1}`}
                className={[
                  "flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium px-3 py-2 rounded-md transition-colors duration-200 shrink-0",
                  activeSection === s.id
                    ? "bg-accent-neutral-soft text-accent-neutral dark:bg-accent-neutral-soft dark:text-accent-neutral"
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

      {/* INTRODUCTION */}
      <section id="introduction" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Security for Small Business
          </h2>
          <p className="text-lg text-muted-readable leading-relaxed mb-4">
            Most small business owners think security is something big
            companies worry about. Then a phishing email costs them twelve
            thousand dollars, or a laptop gets stolen with customer records on
            it, and they find out New York law had requirements they never
            knew existed.
          </p>
          <p className="text-lg text-muted-readable leading-relaxed">
            This guide covers both halves: the practical steps that prevent
            most attacks, and the legal obligations you already have under
            New York law. You can act on the first half this week. The second
            half you need to understand before something goes wrong, not
            after.
          </p>
        </div>
      </section>

      {/* THE BASICS */}
      <section id="basics" className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            The Practical Basics
          </h2>
          <p className="text-muted-readable leading-relaxed mb-6">
            You do not need an IT department. In order of impact, here is
            what actually closes the doors attackers walk through.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Turn on multi-factor authentication everywhere
              </h3>
              <p className="text-muted-readable leading-relaxed">
                This is the single highest-value thing you can do, and it is
                free. Even if someone steals your password, they still cannot
                get in without a code from your phone. Start with email,
                since it is the master key to everything else you own. Then
                do banking, your payment processor, and your point of sale
                system.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Use a password manager
              </h3>
              <p className="text-muted-readable leading-relaxed">
                Reusing the same password across accounts is how one breach
                becomes five. A password manager generates a different
                strong password for every account. It also solves what
                happens when an employee leaves: you revoke their access and
                move on, instead of changing one shared login for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Back up your data, and test the backup
              </h3>
              <p className="text-muted-readable leading-relaxed">
                Ransomware locks your files and demands payment. A working
                backup turns that into a bad afternoon instead of a
                business-ending event. Keep at least one backup that is not
                connected to your main system, and actually test it by
                restoring a file. A backup you have never tested is a guess.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Keep software updated
              </h3>
              <p className="text-muted-readable leading-relaxed">
                Updates close security holes attackers already know about.
                Turn on automatic updates for your operating systems,
                browsers, point of sale system, and website platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Limit who can access what
              </h3>
              <p className="text-muted-readable leading-relaxed">
                Give each person only the access their job requires. Remove
                access the same day someone leaves. This one habit prevents
                a large share of incidents, most of which are careless
                rather than malicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASSWORDS */}
      <section id="passwords" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Passwords and Access
          </h2>
          <p className="text-muted-readable leading-relaxed mb-4">
            Use an authenticator app rather than text messages where you have
            the choice. Text messages can be intercepted through a technique
            called SIM swapping. An app is stronger and takes the same two
            seconds. Pair this with a password manager so every account has
            its own strong password, and you have closed the two most common
            doors attackers use.
          </p>
          <div className="rounded-lg border-l-4 border-accent-neutral bg-muted/40 p-5 mt-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              A true story: when someone leaves
            </p>
            <p className="text-sm text-muted-readable leading-relaxed">
              Carol managed the office of a small building firm for nine
              years, and everybody loved her. When she retired, nobody
              changed a thing. Her email stayed open. Her login to the
              accounting system stayed active. The safe word the team used
              for emergencies about money stayed exactly as it was, because
              Carol was Carol. Seven months later, on an ordinary Wednesday,
              that untouched access became the way someone else got in. The
              lesson is not about Carol, who did nothing wrong. It is that
              the day a person leaves is a security moment, every single
              time, no matter how much you trusted them.
            </p>
          </div>
        </div>
      </section>

      {/* PHISHING */}
      <section id="phishing" className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Spotting Phishing
          </h2>
          <p className="text-muted-readable leading-relaxed mb-4">
            Most successful attacks on small businesses are not sophisticated.
            Someone sends an email that looks like it is from your bank, your
            vendor, or you, and an employee clicks it or wires money.
          </p>
          <p className="text-muted-readable leading-relaxed mb-6">
            The pattern to teach your team: urgency plus a request to change
            payment details is almost always fraud. If a vendor emails saying
            their bank account changed, call them at the number you already
            have on file, never the number in the email.
          </p>

          <div className="rounded-lg border-l-4 border-accent-neutral bg-muted/40 p-5">
            <p className="text-sm font-semibold text-foreground mb-2">
              A true story: the letter that frightens you
            </p>
            <p className="text-sm text-muted-readable leading-relaxed mb-3">
              Hakim owns two small grocery shops and has never been in
              trouble with anyone. An email arrived using his real business
              name and a case number, claiming a discrepancy in his filings
              and threatening enforcement within seventy two hours. He did
              not sleep that night. He did not tell his wife, and he did not
              call his accountant, because he was embarrassed and wanted to
              make it disappear quietly. He called the number in the email.
              A polite man confirmed the case number back to him and offered
              to settle it immediately for eight thousand two hundred
              dollars. Relieved, Hakim paid.
            </p>
            <p className="text-sm text-muted-readable leading-relaxed">
              Nobody borrowed his trust in that attack. They borrowed his
              fear, and fear does something trust never does: it makes
              people act quickly and completely alone. The single most
              useful habit you can build is this: whenever an official
              letter or call makes you afraid, stop, and tell one other
              person before you do anything else. Fear that is spoken out
              loud loses most of its power immediately.
            </p>
          </div>
        </div>
      </section>

      {/* SHIELD ACT */}
      <section id="shield-act" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What New York Law Requires of You
          </h2>
          <p className="text-muted-readable leading-relaxed mb-4">
            New York's SHIELD Act gives small businesses a lighter security
            standard, but there is no small business exemption from breach
            notification at all. If you have a breach, you must notify
            people, regardless of your size.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">
                Does it apply to you?
              </h3>
              <p className="text-sm text-muted-readable leading-relaxed">
                Yes, if you hold computerized private information on New
                York residents. You do not need to be located in New York or
                do business here.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">
                Are you a small business under this law?
              </h3>
              <p className="text-sm text-muted-readable leading-relaxed">
                Yes if you have fewer than 50 employees, under 3 million
                dollars in gross annual revenue for three years, or under 5
                million dollars in total assets.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">
                What counts as private information?
              </h3>
              <p className="text-sm text-muted-readable leading-relaxed">
                Social Security numbers, driver license numbers, financial
                and card numbers, biometrics, and a username or email paired
                with a password. Since March 2025 this also includes medical
                and health insurance information.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">
                Your security duty
              </h3>
              <p className="text-sm text-muted-readable leading-relaxed">
                Reasonable safeguards, scaled to your size and the
                sensitivity of what you hold. The practical basics above
                count toward this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BREACH */}
      <section id="breach" className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            If You Have a Breach: The First Hour
          </h2>
          <p className="text-muted-readable leading-relaxed mb-4">
            Almost anything can be fixed in the first hour, and almost
            nothing in the first week. The difference between a scare and a
            true disaster is rarely whether something bad happened. It is
            what you do in the sixty minutes right after you realize it.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-neutral text-white text-xs font-bold shrink-0 mt-0.5">1</span>
              <p className="text-muted-readable leading-relaxed">
                <span className="font-semibold text-foreground">Say it out loud, immediately.</span> The instinct in that first moment is panic and shame, and both push toward silence. Do the opposite. Tell the people who need to know without wasting a minute on how embarrassing it feels. Speed beats shame.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-neutral text-white text-xs font-bold shrink-0 mt-0.5">2</span>
              <p className="text-muted-readable leading-relaxed">
                <span className="font-semibold text-foreground">Stop the bleeding first.</span> If money is moving, your very first call is to your bank, on their real number, to flag a fraudulent payment and ask them to stop or reverse it. A payment caught in the first hour can often be pulled back. The same payment on the second day is very often gone for good.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-neutral text-white text-xs font-bold shrink-0 mt-0.5">3</span>
              <p className="text-muted-readable leading-relaxed">
                <span className="font-semibold text-foreground">Close the door that was used.</span> If a password was compromised, change it immediately, everywhere you used it. If a password manager kept you to one unique password per account, this step just became far smaller than it would have been otherwise.
              </p>
            </div>
          </div>

          <p className="text-muted-readable leading-relaxed mb-4">
            Beyond the first hour, the law adds specific duties. You must
            notify affected New York residents within 30 days of discovering
            the breach, plus the Attorney General. The law triggers on
            unauthorized access, not just theft, which is a lower bar than
            most owners assume.
          </p>
          <p className="text-muted-readable leading-relaxed">
            Penalties can run up to 5,000 dollars per violation, but
            individuals cannot sue you directly under this law. This
            explanation is not legal advice. If you hold medical or
            financial data, spend an hour with a data privacy lawyer before
            you need one.
          </p>
        </div>
      </section>


      {/* THIS WEEK CHECKLIST */}
      <section id="this-week" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Do This Week
          </h2>
          <ul className="space-y-3">
            {[
              "Turn on multi-factor authentication for email, banking, and payments.",
              "Set up a password manager and stop reusing passwords.",
              "Confirm you have a backup that is not always connected, and test it.",
              "Turn on automatic updates everywhere.",
              "Review who has access to what, and remove access for anyone who has left.",
              "Write down what private information you collect, where it is stored, and who can reach it.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-muted-readable leading-relaxed"
              >
                <CheckSquare
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-neutral"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NYC HELP CALLOUT */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <NYCHelpCallout />
        </div>
      </section>

      {/* SECTION Q&A */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Security Q&A
          </h2>
          <p className="text-muted-foreground mb-6">
            Common questions from small business owners about security and
            New York law.
          </p>
          <SectionQA
            items={[
              {
                q: "Do I really need multi-factor authentication if I have a strong password?",
                a: "Yes. A strong password can still be stolen through phishing or a data breach elsewhere. Multi-factor authentication stops that stolen password from being enough on its own.",
              },
              {
                q: "Does the SHIELD Act apply if my business is not in New York?",
                a: "It can. The law applies based on whether you hold private information on New York residents, not on where your business is located.",
              },
              {
                q: "What if I am not sure whether I count as a small business under the law?",
                a: "Check the three thresholds: fewer than 50 employees, under 3 million dollars in gross annual revenue for three years, or under 5 million dollars in total assets. Meeting any one of them qualifies you.",
              },
              {
                q: "Can I be sued directly if I have a breach?",
                a: "No. The SHIELD Act does not create a private right of action, so individuals cannot sue you directly under this specific law. The Attorney General can still pursue penalties.",
              },
              {
                q: "Is this page legal advice?",
                a: "No. It explains the law in plain language so you know what to ask. If you hold sensitive data, spend an hour with a lawyer who handles data privacy.",
              },
            ]}
          />
        </div>
      </section>

      <GuideAuthorFooter />
    </Layout>
  );
}
