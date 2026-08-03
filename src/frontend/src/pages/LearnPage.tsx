import { BackToTop } from "@/components/BackToTop";
import { Layout } from "@/components/Layout";
import { ProgressBar } from "@/components/ProgressBar";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Camera,
  CheckCircle2,
  Clipboard,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Mail,
  MessageSquare,
  Monitor,
  MousePointerClick,
  PenTool,
  Repeat2,
  Save,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface ScreenshotStep {
  caption: string;
  /** Plain-language description of what the user sees and does. */
  detail: string;
}

interface Tier1Lesson {
  id: string;
  title: string;
  duration: string;
  icon: React.ElementType;
  intro: string;
  steps: ScreenshotStep[];
}

interface Tier2Lesson {
  id: string;
  title: string;
  icon: React.ElementType;
  intro: string;
  /** The prompt the user types into the AI tool. */
  prompt: string;
  /** The finished business output shown as the lesson conclusion. */
  output: string;
}

interface Tier3Topic {
  id: string;
  title: string;
  /** Anchor on the AI Training and Tools page. */
  href: string;
  icon: React.ElementType;
  desc: string;
}

interface Tier {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  /** Lesson ids that belong to this tier. */
  lessonIds: string[];
}

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const TIER1_LESSONS: Tier1Lesson[] = [
  {
    id: "t1-opening-browser",
    title: "Opening a Browser",
    duration: "Under 8 minutes",
    icon: Monitor,
    intro:
      "A browser is the program you use to open websites. It is the front door to the internet. This lesson shows you how to open one and find a website.",
    steps: [
      {
        caption: "Find the browser icon on your computer",
        detail:
          "Look at the bottom of your screen on a Windows computer or the bottom of the screen on a Mac. You will see a small picture, called an icon, shaped like a colored circle or a compass. That is your browser.",
      },
      {
        caption: "Click the icon one time with your left mouse button",
        detail:
          "Move your mouse so the arrow points at the icon. Press the left button once and let go. A window will open on your screen.",
      },
      {
        caption: "Look at the long white box at the top of the window",
        detail:
          "That box is called the address bar. It is where you type the name of a website. It sits at the very top of the window.",
      },
      {
        caption: "Click inside the address bar and type a website name",
        detail:
          "Click once inside the white box. Type a name such as google.com. You do not need to type the words at the start. Just the name and the dot com.",
      },
      {
        caption: "Press the Enter key on your keyboard",
        detail:
          "The Enter key is on the right side of the main part of your keyboard. Press it once. The website will load in a few seconds.",
      },
      {
        caption: "You did it. The website is now open.",
        detail:
          "You see the website on your screen. You can read it, click the blue words to open other pages, or type a new name in the address bar to go somewhere else.",
      },
    ],
  },
  {
    id: "t1-using-email",
    title: "Using Email",
    duration: "Under 9 minutes",
    icon: Mail,
    intro:
      "Email is how you send a written message to a customer or a supplier without picking up the phone. This lesson shows you how to open your email and read a message.",
    steps: [
      {
        caption: "Open your browser and go to your email website",
        detail:
          "Type the name of your email service in the address bar. Common names are gmail.com, outlook.com, or yahoo.com. Press Enter.",
      },
      {
        caption: "Type your email address and your password",
        detail:
          "Your email address is your name, the at sign, and the company name, such as maria at gmail dot com. Your password is the secret word you picked when you signed up. Type both and press Sign In.",
      },
      {
        caption: "Look at the list on the left side of the screen",
        detail:
          "That list shows your folders. The folder named Inbox holds the messages other people sent to you. Click the word Inbox one time.",
      },
      {
        caption: "Click a message in the middle of the screen to read it",
        detail:
          "Each line in the middle is one message. Click any line one time. The full message opens on the right side of the screen.",
      },
      {
        caption: "Press the Reply button to answer the message",
        detail:
          "Look for a button with the word Reply or a curved arrow. Click it once. A new box opens with the sender name already filled in.",
      },
      {
        caption: "Type your answer and press Send",
        detail:
          "Click inside the large white box and type your reply. When you finish, press the Send button at the top or bottom of the box. Your reply is on its way.",
      },
    ],
  },
  {
    id: "t1-saving-file",
    title: "Saving a File",
    duration: "Under 7 minutes",
    icon: Save,
    intro:
      "Saving a file means keeping your work so you can find it again tomorrow. This lesson shows you how to save a document and find it later.",
    steps: [
      {
        caption: "Open the program you used to write your work",
        detail:
          "This could be a word program, a notes program, or a spreadsheet. Open it the same way you opened the browser in the last lesson.",
      },
      {
        caption: "Look at the very top left of the window for the word File",
        detail:
          "Click the word File one time. A short list drops down. The list is called a menu.",
      },
      {
        caption: "Click the word Save or Save As in the menu",
        detail:
          "Click Save As if you see it. A new window opens. This window asks you where to keep the file and what to call it.",
      },
      {
        caption: "Click the word Documents on the left side of the window",
        detail:
          "Documents is a folder that already exists on your computer. It is a safe place to keep your work. Click it one time so it turns blue.",
      },
      {
        caption: "Type a name in the box at the bottom and press Save",
        detail:
          "Click inside the box next to the word Name. Type a name you will remember, such as Price List July. Press the Save button.",
      },
      {
        caption: "Your file is saved. You can close the window.",
        detail:
          "Your work is now kept inside the Documents folder. You can turn off the computer and the file will still be there tomorrow.",
      },
    ],
  },
  {
    id: "t1-copy-paste",
    title: "Copying and Pasting",
    duration: "Under 6 minutes",
    icon: Clipboard,
    intro:
      "Copying and pasting lets you move words from one place to another without typing them again. This lesson shows you the two steps.",
    steps: [
      {
        caption: "Find the words you want to copy",
        detail:
          "Open the document or email that has the words. Look at the words you want to move.",
      },
      {
        caption:
          "Click and hold the left mouse button just before the first word",
        detail:
          "Place your mouse arrow right before the first word. Press and hold the left button. Do not let go yet.",
      },
      {
        caption: "Drag your mouse across the words until they turn blue",
        detail:
          "Keep holding the button. Move your mouse to the right and down. The words turn blue as you move. Stop when you reach the last word you want. Let go of the button.",
      },
      {
        caption: "Hold the Ctrl key and press the C key one time",
        detail:
          "On a Mac, hold the Command key instead of Ctrl. Pressing C copies the blue words. They are now held by your computer, ready to place somewhere new.",
      },
      {
        caption: "Click where you want the words to go",
        detail:
          "Open the second document or click inside a new email. Click once where you want the words to appear. A small blinking line shows the spot.",
      },
      {
        caption: "Hold the Ctrl key and press the V key one time",
        detail:
          "On a Mac, hold Command and press V. The blue words appear at the blinking line. You moved them without typing them again.",
      },
    ],
  },
  {
    id: "t1-filling-form",
    title: "Filling Out a Form",
    duration: "Under 8 minutes",
    icon: ClipboardList,
    intro:
      "A form is a page with empty boxes that asks for your name, your phone number, or other details. This lesson shows you how to fill one in and send it.",
    steps: [
      {
        caption: "Open the website that has the form",
        detail:
          "Forms live on websites such as a city permit page or a supplier order page. Open the website the same way you learned in the first lesson.",
      },
      {
        caption: "Look for the empty boxes on the page",
        detail:
          "Each box has a small label above it or inside it. The label tells you what to type, such as First Name or Phone Number.",
      },
      {
        caption: "Click inside the first box and type your answer",
        detail:
          "Click once inside the box. A blinking line appears. Type the answer that matches the label. Then press the Tab key on your keyboard to move to the next box.",
      },
      {
        caption: "Keep moving down the page with the Tab key",
        detail:
          "The Tab key is on the left side of your keyboard. Press it once to jump to the next box. Fill in each box the same way.",
      },
      {
        caption: "Click any box with a small arrow to pick from a list",
        detail:
          "Some boxes do not let you type. They show a small arrow on the right side. Click the arrow and click the right choice from the list that drops down.",
      },
      {
        caption: "Press the Submit or Send button at the bottom",
        detail:
          "When every box is filled, scroll to the bottom of the page. Click the button that says Submit, Send, or Continue. Your form is sent.",
      },
    ],
  },
  {
    id: "t1-photo-send",
    title: "Taking a Photo and Sending It",
    duration: "Under 9 minutes",
    icon: Camera,
    intro:
      "Your phone camera lets you take a picture of a receipt, a product, or a broken pipe and send it to a customer or a supplier. This lesson shows you the whole path.",
    steps: [
      {
        caption: "Find the camera app on your phone",
        detail:
          "On most phones the camera app is a small picture of a lens on your home screen. Tap it one time to open it.",
      },
      {
        caption: "Point the back of your phone at what you want to photograph",
        detail:
          "Hold the phone steady with both hands. The screen shows what the camera sees. Move closer or farther until the picture looks clear.",
      },
      {
        caption: "Tap the round button at the bottom of the screen one time",
        detail:
          "That button takes the picture. You will hear a small click or see a flash. The picture is now saved on your phone.",
      },
      {
        caption: "Tap the small picture in the corner of the screen",
        detail:
          "A tiny copy of the picture you just took appears in the bottom corner. Tap it one time. The full picture opens.",
      },
      {
        caption: "Tap the Share button, then tap your email or message app",
        detail:
          "The Share button looks like a square with an arrow pointing up. Tap it. A list of apps appears. Tap Mail or Messages to choose where to send the picture.",
      },
      {
        caption: "Type the recipient and a short note, then press Send",
        detail:
          "Type the email address or phone number of the person. Type a short note such as Here is the photo of the part. Press Send. The picture is on its way.",
      },
    ],
  },
];

const TIER2_LESSONS: Tier2Lesson[] = [
  {
    id: "t2-customer-email",
    title: "Write a Customer Email",
    icon: Mail,
    intro:
      "You will use a free AI tool such as Google Gemini or Anthropic Claude to write a friendly email to a customer who asked about your hours. You type one short sentence and the AI writes the whole email for you.",
    prompt:
      "Write a friendly short email to a customer named James who asked if we are open on Saturday. Tell him we are open Saturday from 9 am to 5 pm. Sign it from Maria at Maria Bakery.",
    output:
      "Subject: We are open Saturday\n\nHi James,\n\nThank you for asking. We are open this Saturday from 9 am to 5 pm, and we would love to see you. Our fresh sourdough comes out of the oven at 8 am, so come early for the best loaves.\n\nLet me know if you would like to set aside anything.\n\nWarm regards,\nMaria\nMaria Bakery",
  },
  {
    id: "t2-social-post",
    title: "Create a Social Post",
    icon: Share2,
    intro:
      "You will ask the AI to write a short social media post about a sale. The AI gives you a ready to paste post with a friendly tone and a clear call to action.",
    prompt:
      "Write a short friendly Facebook post for Maria Bakery announcing a 20 percent off sale on all bread this Friday only. Add two emojis and a line that tells people to come early.",
    output:
      "Fresh bread alert. This Friday only, every loaf at Maria Bakery is 20 percent off. Our oven runs all morning, so come early for the warm sourdough, the country rye, and the olive ciabatta. Tag a friend who loves fresh bread. See you Friday. 🥖🍞",
  },
  {
    id: "t2-pricing-question",
    title: "Answer a Pricing Question",
    icon: TrendingUp,
    intro:
      "A customer asked how much a custom birthday cake costs. You will ask the AI to write a clear answer that gives a price range and explains what changes the price, so you do not have to guess on the spot.",
    prompt:
      "A customer asked how much a custom birthday cake for 20 people costs. Write a clear friendly reply that gives a price range of 80 to 140 dollars and explains that the size, the design, and the fillings change the price. Sign it from Maria at Maria Bakery.",
    output:
      "Hi,\n\nThank you for thinking of us for your birthday. A custom cake for 20 people runs from 80 to 140 dollars. The final price depends on three things: the size of the cake, the complexity of the design, and the fillings you choose. A simple buttercream cake sits at the lower end, and a fondant cake with hand piped flowers sits at the higher end.\n\nTell me the theme and the flavors you like, and I will send you an exact quote the same day.\n\nWarm regards,\nMaria\nMaria Bakery",
  },
  {
    id: "t2-review-reply",
    title: "Reply to a Customer Review",
    icon: MessageSquare,
    intro:
      "A customer left a three star review saying the bread was great but the line was long. You will ask the AI to write a polite reply that thanks them and explains the fix, so every review gets a professional answer.",
    prompt:
      "Write a polite short reply to a Google review that gave Maria Bakery three stars. The customer said the bread was delicious but the wait in line was too long. Thank them, apologize for the wait, and tell them we now open a second register on weekend mornings. Sign it from Maria.",
    output:
      "Hi, thank you for the kind words about the bread and for taking the time to share this. I am sorry the line was long when you visited. We heard the same feedback from a few neighbors, so we now open a second register every Saturday and Sunday morning to move the line faster. We hope to see you again soon, and we hope the wait is shorter.\n\nWith gratitude,\nMaria",
  },
  {
    id: "t2-simple-schedule",
    title: "Build a Simple Schedule",
    icon: ClipboardList,
    intro:
      "You need a weekly baking schedule so you know what to bake each morning. You will ask the AI to build the schedule for you based on a few facts about your shop. The AI gives you a ready to use table.",
    prompt:
      "Build a simple weekly baking schedule for Maria Bakery. We open at 7 am Tuesday through Sunday and we are closed Monday. Bake sourdough every day, ciabatta Tuesday Thursday Saturday, and brioche Friday and Sunday. Present it as a clear table.",
    output:
      "Weekly Baking Schedule\n\nTuesday: Sourdough, Ciabatta\nWednesday: Sourdough\nThursday: Sourdough, Ciabatta\nFriday: Sourdough, Brioche\nSaturday: Sourdough, Ciabatta\nSunday: Sourdough, Brioche\nMonday: Closed, no baking\n\nStart the sourdough mix at 4 am so it is ready when the doors open at 7 am.",
  },
];

const TIER3_TOPICS: Tier3Topic[] = [
  {
    id: "t3-claude",
    title: "Anthropic Claude for Small Business",
    href: "/ai-training#claude-ai",
    icon: BrainCircuit,
    desc: "Connect the tools you already use and run real business workflows automatically. Claude handles payroll, invoicing, and customer replies while you run the floor.",
  },
  {
    id: "t3-gemini",
    title: "Google Gemini for Daily Tasks",
    href: "/ai-training#gemini-ai",
    icon: Sparkles,
    desc: "Write marketing copy, create product images, summarize long documents, and draft customer replies in plain English. No setup, no integrations, just open your browser.",
  },
  {
    id: "t3-make",
    title: "Make.com Social Media Automation",
    href: "/ai-training#make-automation",
    icon: Repeat2,
    desc: "Write your posts once in a spreadsheet and let Make publish them on schedule across LinkedIn, Facebook, Instagram, and more. Set it once and post forever.",
  },
  {
    id: "t3-nyc",
    title: "NYC SBS Digital Marketing Series",
    href: "/ai-training#nyc-courses",
    icon: GraduationCap,
    desc: "Six free courses from NYC Small Business Services covering strategy, content, websites, SEO, email, and social media. Free, in person, and offered in Spanish, Chinese, and Russian.",
  },
];

const TIERS: Tier[] = [
  {
    id: "tier-1",
    number: 1,
    title: "Computer Basics",
    subtitle: "Six short lessons, each under 10 minutes, no jargon.",
    icon: Monitor,
    lessonIds: TIER1_LESSONS.map((l) => l.id),
  },
  {
    id: "tier-2",
    number: 2,
    title: "Your First AI Win",
    subtitle: "Five lessons, each ending with a real business output.",
    icon: Sparkles,
    lessonIds: TIER2_LESSONS.map((l) => l.id),
  },
  {
    id: "tier-3",
    number: 3,
    title: "AI for Your Business",
    subtitle: "The advanced track. Links into the AI Training and Tools page.",
    icon: GraduationCap,
    lessonIds: TIER3_TOPICS.map((t) => t.id),
  },
];

const ALL_LESSON_IDS: string[] = TIERS.flatMap((t) => t.lessonIds);

const SECTIONS = TIERS.map((t) => ({
  id: t.id,
  label: `Tier ${t.number}: ${t.title}`,
}));

/* ------------------------------------------------------------------ */
/* Persistence                                                          */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "aismallbiz:learn:progress:v1";

type ProgressMap = Record<string, boolean>;

function loadProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressMap;
    if (typeof parsed !== "object" || parsed === null) return {};
    return parsed;
  } catch {
    return {};
  }
}

function saveProgress(progress: ProgressMap): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* ignore quota or privacy mode errors */
  }
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function LearnPage() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Load persisted progress on mount.
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // Persist whenever progress changes (after the initial load).
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const isLessonDone = useCallback(
    (id: string): boolean => Boolean(progress[id]),
    [progress],
  );

  const toggleLesson = useCallback((id: string) => {
    setProgress((prev) => {
      const next: ProgressMap = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  }, []);

  const tierCompletion = useMemo(() => {
    return TIERS.map((tier) => {
      const total = tier.lessonIds.length;
      const done = tier.lessonIds.filter((id) => progress[id]).length;
      return { tier, total, done, complete: done === total && total > 0 };
    });
  }, [progress]);

  const overallDone = useMemo(
    () => ALL_LESSON_IDS.filter((id) => progress[id]).length,
    [progress],
  );
  const overallTotal = ALL_LESSON_IDS.length;
  const overallPct =
    overallTotal === 0 ? 0 : Math.round((overallDone / overallTotal) * 100);

  // Determine the next lesson after a given lesson id within the whole ladder.
  const nextLessonId = useCallback((currentId: string): string | null => {
    const idx = ALL_LESSON_IDS.indexOf(currentId);
    if (idx === -1 || idx === ALL_LESSON_IDS.length - 1) return null;
    return ALL_LESSON_IDS[idx + 1];
  }, []);

  const openLesson = useCallback((id: string) => {
    setActiveLessonId(id);
    setActiveStepIndex(0);
    // Scroll the lesson panel into view.
    setTimeout(() => {
      const el = document.getElementById("learn-lesson-panel");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  }, []);

  const closeLesson = useCallback(() => {
    setActiveLessonId(null);
    setActiveStepIndex(0);
  }, []);

  const handleNext = useCallback(
    (currentId: string) => {
      // Mark the current lesson complete when the user advances.
      setProgress((prev) => ({ ...prev, [currentId]: true }));
      const next = nextLessonId(currentId);
      if (next) {
        openLesson(next);
      } else {
        closeLesson();
      }
    },
    [nextLessonId, openLesson, closeLesson],
  );

  const activeTier1Lesson = useMemo(
    () =>
      activeLessonId
        ? (TIER1_LESSONS.find((l) => l.id === activeLessonId) ?? null)
        : null,
    [activeLessonId],
  );
  const activeTier2Lesson = useMemo(
    () =>
      activeLessonId
        ? (TIER2_LESSONS.find((l) => l.id === activeLessonId) ?? null)
        : null,
    [activeLessonId],
  );

  return (
    <Layout>
      <ProgressBar />
      <BackToTop sections={SECTIONS} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="learn.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <GraduationCap size={12} />
              Guided Learning Ladder
            </span>
            <h1 className="heading-hero text-foreground">
              Learn at Your Own Pace.{" "}
              <span className="text-gradient-vibrant">One Step at a Time.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-muted-readable dark:text-zinc-300">
              A numbered path with three tiers. Start with computer basics, earn
              your first real win with AI, then step up to the advanced track.
              Your checkmarks save automatically, so you pick up right where you
              left off.
            </p>

            {/* Overall progress */}
            <div className="w-full max-w-md mt-2">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-semibold text-foreground">
                  Your progress
                </span>
                <span className="font-semibold text-accent-neutral">
                  {overallDone} of {overallTotal} lessons
                </span>
              </div>
              <div
                className="h-2.5 w-full rounded-full bg-muted overflow-hidden"
                role="progressbar"
                tabIndex={0}
                aria-label={`Learning progress: ${overallPct} percent complete`}
                aria-valuenow={overallPct}
                aria-valuemin={0}
                aria-valuemax={100}
                data-ocid="learn.overall_progress"
              >
                <div
                  className="h-full rounded-full bg-accent-neutral transition-all duration-500"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LADDER */}
      <section
        id="tier-1"
        className="py-16 md:py-20 bg-background"
        data-ocid="learn.ladder_section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-3">
              Your Three Tier Path
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Work through one tier at a time. Each tier unlocks the next. You
              can revisit any lesson any time.
            </p>
          </div>

          {/* Vertical path of tiers */}
          <div className="relative">
            {/* connector line down the middle on small screens, left on larger */}
            <div
              className="absolute left-5 sm:left-6 top-2 bottom-2 w-0.5 bg-accent-neutral-border dark:bg-accent-neutral-border"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {tierCompletion.map(
                ({ tier, total, done, complete }, tierIdx) => (
                  <TierNode
                    key={tier.id}
                    tier={tier}
                    total={total}
                    done={done}
                    complete={complete}
                    isLast={tierIdx === TIERS.length - 1}
                    isLessonDone={isLessonDone}
                    onOpenLesson={openLesson}
                    onToggleLesson={toggleLesson}
                    onAdvanceTier={() => {
                      const el = document.getElementById(
                        tierIdx < TIERS.length - 1
                          ? TIERS[tierIdx + 1].id
                          : "learn-completion",
                      );
                      if (el) {
                        const top =
                          el.getBoundingClientRect().top + window.scrollY - 120;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LESSON PANEL */}
      {activeLessonId && (activeTier1Lesson || activeTier2Lesson) && (
        <section
          id="learn-lesson-panel"
          className="py-12 md:py-16 bg-muted/30 border-y border-border"
          data-ocid="learn.lesson_panel"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {activeTier1Lesson && (
              <Tier1LessonView
                lesson={activeTier1Lesson}
                stepIndex={activeStepIndex}
                setStepIndex={setActiveStepIndex}
                isDone={isLessonDone(activeTier1Lesson.id)}
                onToggle={() => toggleLesson(activeTier1Lesson.id)}
                onNext={() => handleNext(activeTier1Lesson.id)}
                onClose={closeLesson}
                hasNext={nextLessonId(activeTier1Lesson.id) !== null}
              />
            )}
            {activeTier2Lesson && (
              <Tier2LessonView
                lesson={activeTier2Lesson}
                isDone={isLessonDone(activeTier2Lesson.id)}
                onToggle={() => toggleLesson(activeTier2Lesson.id)}
                onNext={() => handleNext(activeTier2Lesson.id)}
                onClose={closeLesson}
                hasNext={nextLessonId(activeTier2Lesson.id) !== null}
              />
            )}
          </div>
        </section>
      )}

      {/* COMPLETION */}
      <section
        id="learn-completion"
        className="py-16 md:py-20 bg-background"
        data-ocid="learn.completion_section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 mb-5">
            <Trophy size={28} className="text-accent-neutral" />
          </div>
          <h2 className="heading-section text-foreground mb-3">
            Finish the Ladder, Run Your Business with AI
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            When every lesson is checked off, you have the basics, your first AI
            win, and the advanced track ready. The AI Training and Tools page
            has the deep dives for each advanced topic.
          </p>
          <Link
            to="/ai-training"
            data-ocid="learn.completion.ai_training_link"
            className="button-cta inline-flex items-center gap-2"
          >
            <BrainCircuit size={15} />
            Open AI Training and Tools
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/* ------------------------------------------------------------------ */
/* Tier node                                                            */
/* ------------------------------------------------------------------ */

interface TierNodeProps {
  tier: Tier;
  total: number;
  done: number;
  complete: boolean;
  isLast: boolean;
  isLessonDone: (id: string) => boolean;
  onOpenLesson: (id: string) => void;
  onToggleLesson: (id: string) => void;
  onAdvanceTier: () => void;
}

function TierNode({
  tier,
  total,
  done,
  complete,
  isLessonDone,
  onOpenLesson,
  onToggleLesson,
  onAdvanceTier,
}: TierNodeProps) {
  const Icon = tier.icon;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  // Tier 3 has no expandable lessons; it links out.
  const isTier3 = tier.id === "tier-3";
  const tier3Topics = isTier3 ? TIER3_TOPICS : [];

  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Numbered node on the path line */}
      <div
        className={[
          "absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-bold shrink-0 border-2 transition-colors duration-200",
          complete
            ? "bg-accent-neutral text-white border-accent-neutral"
            : "bg-card text-accent-neutral border-accent-neutral-border dark:border-accent-neutral-border",
        ].join(" ")}
        aria-hidden="true"
      >
        {complete ? <CheckCircle2 size={20} /> : tier.number}
      </div>

      <div
        className={[
          "rounded-2xl border bg-card p-5 sm:p-6 transition-all duration-200",
          complete
            ? "border-accent-neutral-border shadow-sm"
            : "border-border hover:border-accent-neutral-border",
        ].join(" ")}
        data-ocid={`learn.tier.${tier.number}.card`}
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center shrink-0">
            <Icon size={20} className="text-accent-neutral" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-accent-neutral uppercase tracking-wider">
                Tier {tier.number}
              </span>
              {complete && (
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  data-ocid={`learn.tier.${tier.number}.complete_badge`}
                >
                  <CheckCircle2 size={11} /> Tier complete
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mt-0.5">
              {tier.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {tier.subtitle}
            </p>
          </div>
        </div>

        {/* Tier progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-medium text-muted-foreground">
              {done} of {total} lessons done
            </span>
            <span className="font-semibold text-accent-neutral">{pct}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-accent-neutral transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Tier 1 and 2: numbered lesson list with checkmarks and Next */}
        {!isTier3 && (
          <ol className="space-y-2">
            {tier.lessonIds.map((lessonId, i) => {
              const lesson =
                TIER1_LESSONS.find((l) => l.id === lessonId) ??
                TIER2_LESSONS.find((l) => l.id === lessonId);
              if (!lesson) return null;
              const LessonIcon = lesson.icon;
              const doneFlag = isLessonDone(lessonId);
              return (
                <li
                  key={lessonId}
                  data-ocid={`learn.tier.${tier.number}.item.${i + 1}`}
                  className={[
                    "flex items-center gap-3 rounded-xl border p-3 transition-all duration-200",
                    doneFlag
                      ? "border-accent-neutral-border bg-accent-neutral-soft/40 dark:bg-accent-neutral-soft/10"
                      : "border-border bg-background hover:border-accent-neutral-border",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-label={
                      doneFlag
                        ? `Mark ${lesson.title} as not done`
                        : `Mark ${lesson.title} as done`
                    }
                    aria-pressed={doneFlag}
                    data-ocid={`learn.tier.${tier.number}.checkbox.${i + 1}`}
                    onClick={() => onToggleLesson(lessonId)}
                    className={[
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-200 cursor-pointer",
                      doneFlag
                        ? "bg-accent-neutral text-white border-accent-neutral"
                        : "bg-card text-transparent border-accent-neutral-border dark:border-accent-neutral-border hover:border-accent-neutral",
                    ].join(" ")}
                  >
                    {doneFlag ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">
                        {i + 1}
                      </span>
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <LessonIcon
                        size={15}
                        className="text-accent-neutral shrink-0"
                      />
                      <p className="text-sm font-semibold text-foreground truncate">
                        {lesson.title}
                      </p>
                    </div>
                    {"duration" in lesson && (
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Clock size={11} /> {lesson.duration}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenLesson(lessonId)}
                    data-ocid={`learn.tier.${tier.number}.open_button.${i + 1}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-neutral px-3 py-1.5 rounded-lg border border-accent-neutral-border dark:border-accent-neutral-border hover:bg-accent-neutral-soft dark:hover:bg-accent-neutral-soft/40 transition-colors duration-200 shrink-0"
                  >
                    {doneFlag ? "Review" : "Start"}
                    <ArrowRight size={12} />
                  </button>
                </li>
              );
            })}
          </ol>
        )}

        {/* Tier 3: advanced track links */}
        {isTier3 && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              You have the basics and your first AI win. The advanced track
              lives on the AI Training and Tools page. Each topic below links to
              its full section there.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tier3Topics.map((topic, i) => {
                const TopicIcon = topic.icon;
                return (
                  <Link
                    key={topic.id}
                    to={topic.href}
                    data-ocid={`learn.tier.3.link.${i + 1}`}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:border-accent-neutral-border hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center shrink-0">
                      <TopicIcon size={18} className="text-accent-neutral" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {topic.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
                        {topic.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-accent-neutral shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Advance to next tier */}
        {!isTier3 && (
          <div className="mt-4 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onAdvanceTier}
              disabled={!complete}
              data-ocid={`learn.tier.${tier.number}.next_button`}
              className={[
                "w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200",
                complete
                  ? "bg-accent-neutral text-white hover:opacity-90 cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed",
              ].join(" ")}
            >
              {complete ? (
                <>
                  Move to Tier {tier.number + 1}
                  <ArrowRight size={14} />
                </>
              ) : (
                <>
                  Complete all {total} lessons to unlock Tier {tier.number + 1}
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tier 1 lesson view (screenshot walkthrough)                          */
/* ------------------------------------------------------------------ */

interface Tier1LessonViewProps {
  lesson: Tier1Lesson;
  stepIndex: number;
  setStepIndex: (i: number) => void;
  isDone: boolean;
  onToggle: () => void;
  onNext: () => void;
  onClose: () => void;
  hasNext: boolean;
}

function Tier1LessonView({
  lesson,
  stepIndex,
  setStepIndex,
  isDone,
  onToggle,
  onNext,
  onClose,
  hasNext,
}: Tier1LessonViewProps) {
  const Icon = lesson.icon;
  const step = lesson.steps[stepIndex];
  const totalSteps = lesson.steps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const stepPct = Math.round(((stepIndex + 1) / totalSteps) * 100);

  return (
    <div
      className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm"
      data-ocid="learn.lesson.tier1.panel"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center shrink-0">
            <Icon size={22} className="text-accent-neutral" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-accent-neutral uppercase tracking-wider">
              Tier 1 Lesson
            </p>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {lesson.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
              <Clock size={11} /> {lesson.duration}
            </p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close lesson"
          data-ocid="learn.lesson.close_button"
          onClick={onClose}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 shrink-0"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            X
          </span>
        </button>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {lesson.intro}
      </p>

      {/* Step progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-semibold text-foreground">
            Step {stepIndex + 1} of {totalSteps}
          </span>
          <span className="font-semibold text-accent-neutral">{stepPct}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-accent-neutral transition-all duration-300"
            style={{ width: `${stepPct}%` }}
          />
        </div>
      </div>

      {/* Screenshot placeholder with caption */}
      <div
        className="rounded-xl border border-border bg-gradient-to-br from-muted to-background p-6 sm:p-10 mb-5 min-h-[180px] flex flex-col items-center justify-center text-center"
        data-ocid={`learn.lesson.tier1.step.${stepIndex + 1}`}
      >
        <div className="w-14 h-14 rounded-full bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center mb-4">
          <MousePointerClick size={26} className="text-accent-neutral" />
        </div>
        <p className="text-base font-semibold text-foreground mb-2 max-w-md">
          {step.caption}
        </p>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          {step.detail}
        </p>
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-center gap-1.5 mb-5">
        {lesson.steps.map((_, i) => (
          <button
            key={`step-dot-${i + 1}`}
            type="button"
            aria-label={`Go to step ${i + 1}`}
            data-ocid={`learn.lesson.tier1.step_dot.${i + 1}`}
            onClick={() => setStepIndex(i)}
            className={[
              "h-2 rounded-full transition-all duration-200 cursor-pointer",
              i === stepIndex
                ? "w-6 bg-accent-neutral"
                : i < stepIndex
                  ? "w-2 bg-accent-neutral/60"
                  : "w-2 bg-muted-foreground/30",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Footer actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-border">
        <button
          type="button"
          onClick={() => setStepIndex(Math.max(0, stepIndex - 1))}
          disabled={stepIndex === 0}
          data-ocid="learn.lesson.tier1.prev_button"
          className="button-secondary-outline inline-flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>

        <div className="hidden sm:block flex-1" />

        <button
          type="button"
          onClick={onToggle}
          aria-pressed={isDone}
          data-ocid="learn.lesson.tier1.mark_done_button"
          className={[
            "inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border transition-colors duration-200",
            isDone
              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
              : "bg-card text-foreground border-border hover:border-accent-neutral-border",
          ].join(" ")}
        >
          <CheckCircle2 size={15} />
          {isDone ? "Completed" : "Mark as done"}
        </button>

        {isLastStep ? (
          <button
            type="button"
            onClick={onNext}
            data-ocid="learn.lesson.tier1.next_lesson_button"
            className="button-cta inline-flex items-center justify-center gap-2 text-sm"
          >
            {hasNext ? "Next lesson" : "Finish ladder"}
            <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStepIndex(stepIndex + 1)}
            data-ocid="learn.lesson.tier1.next_step_button"
            className="button-cta inline-flex items-center justify-center gap-2 text-sm"
          >
            Next
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tier 2 lesson view (AI prompt + output)                             */
/* ------------------------------------------------------------------ */

interface Tier2LessonViewProps {
  lesson: Tier2Lesson;
  isDone: boolean;
  onToggle: () => void;
  onNext: () => void;
  onClose: () => void;
  hasNext: boolean;
}

function Tier2LessonView({
  lesson,
  isDone,
  onToggle,
  onNext,
  onClose,
  hasNext,
}: Tier2LessonViewProps) {
  const Icon = lesson.icon;

  return (
    <div
      className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm"
      data-ocid="learn.lesson.tier2.panel"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft/40 flex items-center justify-center shrink-0">
            <Icon size={22} className="text-accent-neutral" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-accent-neutral uppercase tracking-wider">
              Tier 2 Lesson
            </p>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {lesson.title}
            </h3>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close lesson"
          data-ocid="learn.lesson.close_button"
          onClick={onClose}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 shrink-0"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            X
          </span>
        </button>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {lesson.intro}
      </p>

      {/* Step 1: the prompt */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-accent-neutral uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <PenTool size={12} /> Step 1: Type this into the AI tool
        </p>
        <div
          className="rounded-xl border border-border bg-muted p-4"
          data-ocid="learn.lesson.tier2.prompt"
        >
          <p className="text-sm text-foreground leading-relaxed font-mono">
            {lesson.prompt}
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Open a free AI tool such as Google Gemini at gemini.google.com or
          Anthropic Claude at claude.ai. Paste the line above into the box and
          press Enter.
        </p>
      </div>

      {/* Step 2: the finished output */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-accent-neutral uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <FileText size={12} /> Step 2: Your finished business output
        </p>
        <div
          className="rounded-xl border-2 border-accent-neutral-border bg-accent-neutral-soft/30 dark:bg-accent-neutral-soft/10 p-4"
          data-ocid="learn.lesson.tier2.output"
        >
          <pre className="text-sm text-foreground leading-relaxed whitespace-pre-wrap font-body">
            {lesson.output}
          </pre>
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          This is the output the AI produces. Copy it, paste it into your email
          or social post, and you have your first real AI win.
        </p>
      </div>

      {/* Footer actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-border">
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={isDone}
          data-ocid="learn.lesson.tier2.mark_done_button"
          className={[
            "inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border transition-colors duration-200",
            isDone
              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
              : "bg-card text-foreground border-border hover:border-accent-neutral-border",
          ].join(" ")}
        >
          <CheckCircle2 size={15} />
          {isDone ? "Completed" : "Mark as done"}
        </button>

        <div className="hidden sm:block flex-1" />

        <button
          type="button"
          onClick={onNext}
          data-ocid="learn.lesson.tier2.next_lesson_button"
          className="button-cta inline-flex items-center justify-center gap-2 text-sm"
        >
          {hasNext ? "Next lesson" : "Finish ladder"}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
