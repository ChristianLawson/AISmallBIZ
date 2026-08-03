import {
  AlertTriangle,
  Ear,
  Heart,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

/**
 * Full verbatim article by Christian Lawson, originally published on Substack.
 * Renders the complete "How to Spot Bad Actors in Interviews" guide with
 * question categories, listening tests, verification methods, and a closing
 * word. Warning signs are rendered as visually distinct amber/red callouts.
 */
const ARTICLE_URL =
  "https://christianlawson.substack.com/p/how-to-spot-bad-actors-in-interviews";

type QuestionCategory = {
  id: string;
  name: string;
  goal: string;
  questions: string[];
  listenFor: string[];
  warningSigns: string[];
};

type ListeningTest = {
  id: string;
  name: string;
  body: string;
};

const QUESTION_CATEGORIES: QuestionCategory[] = [
  {
    id: "empathy",
    name: "Empathy",
    goal: "Does this person actually feel what others feel: or do they perform it?",
    questions: [
      "Tell me about a time a coworker was struggling. What did you do?",
      "Describe a moment you let someone down. How did you handle it?",
      "When have you changed your mind about someone you initially misjudged?",
    ],
    listenFor: [
      "Specific names, specific moments, specific emotions.",
      "Hesitation that feels like genuine reflection, not performance.",
      "Ownership of the impact on the other person: not just the outcome.",
    ],
    warningSigns: [
      "Vague, abstract answers with no real people in them.",
      "They cast themselves as the hero of every story.",
      "They describe others' pain without any emotional texture.",
    ],
  },
  {
    id: "accountability",
    name: "Accountability",
    goal: "Do they own their failures: or do failures happen to them?",
    questions: [
      "Tell me about a project that failed. What was your role in that failure?",
      "What is a decision you made that you would undo? Why?",
      "When have you delivered hard feedback to someone above you?",
    ],
    listenFor: [
      'Use of "I" instead of "we" when describing mistakes.',
      "Clear articulation of what they learned: not just what went wrong.",
      "Comfort with discomfort. They do not flinch when describing failure.",
    ],
    warningSigns: [
      "Every failure was someone else's fault.",
      "They describe themselves as the victim of circumstance.",
      "They have never made a decision they regret. (That is a lie.)",
    ],
  },
  {
    id: "ethics",
    name: "Ethics",
    goal: "Where are their lines: and do they hold when it costs them something?",
    questions: [
      "Tell me about a time you disagreed with a leadership decision on ethical grounds. What did you do?",
      "Have you ever reported a concern about a colleague? Walk me through it.",
      "What is a boundary you have refused to cross, even when it cost you?",
    ],
    listenFor: [
      "A clear sense of personal principle: not just company policy.",
      "Willingness to name the cost of doing the right thing.",
      "Specific situations, not hypothetical philosophy.",
    ],
    warningSigns: [
      'They frame every ethical call as "nuanced" and decline to take a side.',
      "They have never encountered an ethical conflict. (Unlikely.)",
      'They describe whistleblowing or reporting as "dramatic" or "naive."',
    ],
  },
  {
    id: "teamwork",
    name: "Teamwork",
    goal: "Do they make the people around them better: or do they consume them?",
    questions: [
      "Tell me about a teammate you found difficult. How did you work with them?",
      "Describe a time you took on work that was not yours. Why?",
      "When have you publicly credited someone else for a win you contributed to?",
    ],
    listenFor: [
      "Respect for former teammates, even the difficult ones.",
      "Curiosity about other people's work, not just their own.",
      "Comfort with shared credit and shared blame.",
    ],
    warningSigns: [
      "They describe teammates as obstacles, incompetents, or enemies.",
      "Every story centers their own contribution.",
      "They have never worked under someone they admired. (Red flag.)",
    ],
  },
  {
    id: "pattern",
    name: "Pattern",
    goal: "Is this behavior consistent across contexts: or is it a costume?",
    questions: [
      "You have worked at three companies. What was the same about your experience at each?",
      "What is a conflict you have had more than once in your career? What is the common thread?",
      "If I called your last three managers, what would they agree on about you?",
    ],
    listenFor: [
      "Self-awareness about recurring patterns in their own behavior.",
      "Ability to describe themselves from the outside.",
      "Consistency between how they describe themselves and how they describe others' perceptions.",
    ],
    warningSigns: [
      "Every workplace was toxic. Every boss was unreasonable. Every team was the problem.",
      "They describe themselves completely differently than their references would.",
      "They have no pattern: because they have no self-awareness.",
    ],
  },
  {
    id: "values",
    name: "Values",
    goal: "What do they actually care about: and does it match what you care about?",
    questions: [
      "What is a principle you hold that most people in your field do not?",
      "Tell me about a time you turned down work that conflicted with your values.",
      "What is something you believe that would be unpopular to say out loud here?",
    ],
    listenFor: [
      "Conviction. They have thought about this before you asked.",
      "Willingness to disagree with the room.",
      'Values that are specific, not generic ("hard work," "integrity").',
    ],
    warningSigns: [
      "They tell you what they think you want to hear.",
      "Their values shift depending on who is asking.",
      "They have no principles that would be inconvenient to hold.",
    ],
  },
];

const LISTENING_TESTS: ListeningTest[] = [
  {
    id: "story-vs-feeling",
    name: "Story vs. Feeling",
    body: 'Bad actors tell stories. Honest people describe feelings. When someone recounts a conflict, listen for whether they tell you what happened (the narrative) or what it felt like (the experience). People who only narrate events: without ever naming an emotion: are often distancing themselves from accountability. Real reflection sounds like: "I was embarrassed. I didn\'t know what to say. I wish I\'d handled it differently." Performance sounds like: "And then they said this, and then I said that, and then the meeting ended."',
  },
  {
    id: "too-smooth",
    name: "Too Smooth",
    body: "If every answer arrives fully formed, perfectly structured, and suspiciously free of hesitation: be wary. Real memory is messy. People pause, backtrack, correct themselves. A candidate who never stumbles is often a candidate who is rehearsed rather than remembered. The smoothest answer is rarely the most honest one. Look for the moments where they have to think. That is where the real person lives.",
  },
  {
    id: "charm-thermometer",
    name: "Charm Thermometer",
    body: "Charm is not a skill. Charm is a tool. The question is what it is being used for. Some people are warm because they are generous. Some people are warm because warmth opens doors they want to walk through. Watch what happens when charm does not work: when you push back, when you ask a hard follow-up, when you do not laugh at the joke. Generous people stay warm. Manipulative people get cold, fast.",
  },
  {
    id: "grandiosity",
    name: "Grandiosity",
    body: "Listen for scale. Does everything they describe sound epic? Every project was transformational. Every role was pivotal. Every contribution was singular. Real work is mostly ordinary. People who inflate their impact are often hiding the gap between what they claimed and what they did. The most competent people I have hired tend to describe their work in modest, specific terms. The least competent describe it in superlatives.",
  },
  {
    id: "curiosity",
    name: "Curiosity",
    body: "Do they ask about you? About the team? About the work? Or is the entire interview a one-way performance? Bad actors often treat interviews as stages. Honest people treat them as conversations. Curiosity is hard to fake over a full hour: eventually, a self-centered person runs out of questions and starts talking about themselves again. Watch for the moment the curiosity drops.",
  },
  {
    id: "treatment-of-others",
    name: "Treatment of Others",
    body: "How do they talk about people who are not in the room? Former bosses. Former teammates. The receptionist on the way in. The waiter at the lunch interview. The way someone speaks about absent people is the way they will speak about you when you are absent. This is one of the most reliable signals you have. Use it.",
  },
];

const VERIFICATION_METHODS = [
  {
    title: "Use multiple interviewers",
    body: "One person can be charmed. Five people rarely all are. Have the candidate talk to people across roles, levels, and teams. Bad actors calibrate their performance to the audience: multiple interviewers make that calibration visible. Compare notes afterward. Where the stories diverge is where the truth lives.",
  },
  {
    title: "Do real reference checks",
    body: 'Not the references they gave you. Those are pre-screened. Find their former managers on LinkedIn. Find peers. Find people who left the company around the same time they did. Ask one question: "Would you work with this person again?" The pause before the answer tells you more than the answer itself.',
  },
  {
    title: "Watch them work",
    body: "Resumes are marketing. Interviews are performance. Work is truth. Give them a real problem: not a puzzle, not a brainteaser, a real piece of the job: and watch how they approach it. Do they ask clarifying questions? Do they name what they do not know? Do they push back on the framing? The way someone works reveals what no interview can.",
  },
  {
    title: "Trust repeating concerns",
    body: "If one reference mentions something, it might be a one-off. If three references mention the same thing: even in different words: it is a pattern. Patterns are predictive. Listen for the through-line across references, across interviews, across the candidate's own stories. The pattern is the person.",
  },
  {
    title: "Take your time",
    body: "Urgency is the friend of every bad actor. The pressure to fill a role is the pressure that lets a bad hire through. Slow down. Sleep on it. Run a second round. Ask the question you forgot to ask. The cost of a bad hire is always higher than the cost of a delayed one. Always.",
  },
];

const CATEGORY_ICONS: Record<string, typeof Heart> = {
  empathy: Heart,
  accountability: ShieldCheck,
  ethics: Scale,
  teamwork: Users,
  pattern: Target,
  values: ShieldAlert,
};

export function BadActorsArticleSection() {
  return (
    <section
      id="bad-actors-article"
      data-ocid="hiring.bad_actors.section"
      className="card-guide !p-0 overflow-hidden"
    >
      {/* Article header */}
      <div className="bg-gradient-hero px-6 sm:px-10 py-10 border-b border-border">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
            <ShieldAlert size={22} className="text-[#6366F1]" />
          </div>
          <div className="min-w-0">
            <span className="badge-primary-vibrant inline-block mb-1">
              Interview Guide
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              How to Spot Bad Actors in Interviews
            </h2>
          </div>
        </div>
        <p className="text-[15px] sm:text-base leading-relaxed text-[#3f3f46] max-w-3xl">
          A field guide to the questions, listening tests, and verification
          methods that surface dishonesty before it costs you. The most
          expensive mistake a hiring manager can make is not the candidate they
          rejected: it is the one they did not see clearly.
        </p>
      </div>

      {/* Article body */}
      <article className="px-6 sm:px-10 py-10 space-y-12 text-[#09090B]">
        {/* Intro */}
        <div className="space-y-4 text-[15px] sm:text-base leading-[1.75] max-w-3xl">
          <p>
            Most hiring advice focuses on what to ask. This guide focuses on
            what to listen for. The difference matters. A question is just an
            opening. The answer: its texture, its specificity, its
            inconsistencies: is where the truth lives.
          </p>
          <p>
            Bad actors do not reveal themselves by what they say. They reveal
            themselves by how they say it, what they skip, and how they treat
            people who are not in the room. The six question categories below
            are designed to surface those signals. The six listening tests teach
            you how to read them. The verification methods tell you what to do
            once the interview is over.
          </p>
        </div>

        {/* Question categories */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              The Six Question Categories
            </h3>
            <p className="text-[15px] text-[#52525b] leading-relaxed max-w-3xl">
              Each category has a goal, three questions, what to listen for, and
              the warning signs that should stop you.
            </p>
          </div>

          {QUESTION_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] ?? Target;
            return (
              <div
                key={cat.id}
                id={`bad-actors-${cat.id}`}
                data-ocid={`hiring.bad_actors.category.item.${idx + 1}`}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                {/* Category header */}
                <div className="flex items-start gap-4 px-6 sm:px-8 py-6 border-b border-border bg-muted/30">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#6366F1]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-xl font-bold text-foreground">
                      {idx + 1}. {cat.name}
                    </h4>
                    <p className="text-[15px] text-[#52525b] mt-1 leading-relaxed">
                      <span className="font-semibold text-foreground">
                        Goal:
                      </span>{" "}
                      {cat.goal}
                    </p>
                  </div>
                </div>

                {/* Category body */}
                <div className="px-6 sm:px-8 py-6 space-y-6">
                  {/* Questions */}
                  <div>
                    <h5 className="text-[13px] font-semibold uppercase tracking-wide text-[#6366F1] mb-3">
                      The Questions
                    </h5>
                    <ol className="space-y-3">
                      {cat.questions.map((q, qi) => (
                        <li
                          key={`${cat.id}-q-${qi}`}
                          data-ocid={`hiring.bad_actors.${cat.id}.question.item.${qi + 1}`}
                          className="flex gap-3 text-[15px] leading-relaxed text-foreground"
                        >
                          <span className="font-mono text-[#6366F1] font-semibold shrink-0">
                            {qi + 1}.
                          </span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* What to listen for */}
                  <div className="rounded-xl border border-[#C7D2FE] bg-[#EEF2FF]/60 px-5 py-5">
                    <h5 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#4338CA] mb-3">
                      <Ear size={14} />
                      What to Listen For
                    </h5>
                    <ul className="space-y-2.5">
                      {cat.listenFor.map((item, li) => (
                        <li
                          key={`${cat.id}-l-${li}`}
                          data-ocid={`hiring.bad_actors.${cat.id}.listen_for.item.${li + 1}`}
                          className="flex gap-2.5 text-[15px] leading-relaxed text-[#1e1b4b]"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6366F1] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning signs: visually distinct amber/red callout */}
                  <div
                    data-ocid={`hiring.bad_actors.${cat.id}.warning_signs`}
                    className="rounded-xl border border-[#fecaca] bg-[#fef2f2] px-5 py-5"
                  >
                    <h5 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#b91c1c] mb-3">
                      <AlertTriangle size={14} />
                      Warning Signs
                    </h5>
                    <ul className="space-y-2.5">
                      {cat.warningSigns.map((sign, si) => (
                        <li
                          key={`${cat.id}-w-${si}`}
                          data-ocid={`hiring.bad_actors.${cat.id}.warning_signs.item.${si + 1}`}
                          className="flex gap-2.5 text-[15px] leading-relaxed text-[#7f1d1d]"
                        >
                          <AlertTriangle
                            size={16}
                            className="text-[#dc2626] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Listening tests */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Six Listening Tests
            </h3>
            <p className="text-[15px] text-[#52525b] leading-relaxed max-w-3xl">
              Questions open the door. Listening tests tell you what to watch
              for once it is open.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {LISTENING_TESTS.map((test, idx) => (
              <div
                key={test.id}
                data-ocid={`hiring.bad_actors.listening_test.item.${idx + 1}`}
                className="rounded-2xl border border-border bg-card px-6 py-6 transition-smooth hover:border-[#C7D2FE] hover:shadow-card"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="font-mono text-sm font-semibold text-[#6366F1]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {test.name}
                  </h4>
                </div>
                <p className="text-[15px] leading-[1.75] text-[#3f3f46]">
                  {test.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification methods */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Verification Methods
            </h3>
            <p className="text-[15px] text-[#52525b] leading-relaxed max-w-3xl">
              The interview is one signal. These five methods are how you
              confirm it.
            </p>
          </div>

          <div className="space-y-4">
            {VERIFICATION_METHODS.map((m, idx) => (
              <div
                key={m.title}
                data-ocid={`hiring.bad_actors.verification.item.${idx + 1}`}
                className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border bg-muted/30 px-6 py-5"
              >
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-mono text-sm font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <h4 className="font-display text-base font-bold text-foreground leading-tight">
                    {m.title}
                  </h4>
                </div>
                <p className="text-[15px] leading-[1.75] text-[#3f3f46] sm:flex-1">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final word */}
        <div
          id="bad-actors-final-word"
          data-ocid="hiring.bad_actors.final_word"
          className="rounded-2xl border border-[#C7D2FE] bg-gradient-hero px-6 sm:px-10 py-10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            A Final Word
          </h3>
          <div className="space-y-4 text-[15px] sm:text-base leading-[1.8] text-[#1e1b4b] max-w-3xl">
            <p>
              You will not catch every bad actor. No process is perfect. But you
              can dramatically reduce the odds against you by treating hiring as
              a craft rather than a checkbox.
            </p>
            <p>
              The candidates who look best on paper and sound best in the room
              are not always the best candidates. Sometimes the best candidate
              is the one who paused before answering, who named a real failure,
              who described a difficult teammate with respect, who asked you a
              question that made you think.
            </p>
            <p>
              Hire for character first. Skills can be taught. Character, at this
              stage in someone's career, is mostly set. The cost of hiring
              someone you cannot trust is paid in sleep, in morale, in the good
              people who leave because of the bad ones.
            </p>
            <p className="font-medium text-foreground">
              Slow down. Listen carefully. Trust the pattern. The right hire is
              worth the wait.
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div
          data-ocid="hiring.bad_actors.attribution"
          className="rounded-xl border border-border bg-muted/40 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#6366F1] text-white flex items-center justify-center font-display font-bold shrink-0">
            CL
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] text-foreground">
              Article by <span className="font-semibold">Christian Lawson</span>
              , originally published on Substack.
            </p>
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hiring.bad_actors.attribution.link"
              className="text-[14px] text-[#6366F1] hover:text-[#4338CA] underline underline-offset-2 break-words transition-colors duration-200"
            >
              Read the original article on Substack
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default BadActorsArticleSection;
