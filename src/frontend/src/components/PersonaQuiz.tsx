import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Sparkles,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type QuestionId = "stage" | "business" | "challenge" | "team" | "customers";

interface Question {
  id: QuestionId;
  text: string;
  options: { value: string; label: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "stage",
    text: "What stage is your business in?",
    options: [
      { value: "new", label: "Just starting out" },
      { value: "growing", label: "Growing an existing business" },
      { value: "turnaround", label: "Turning around a struggling business" },
    ],
  },
  {
    id: "business",
    text: "What is your main type of business?",
    options: [
      { value: "deli", label: "Deli" },
      { value: "salon", label: "Salon" },
      { value: "restaurant", label: "Restaurant" },
      { value: "pool-hall", label: "Pool Hall" },
      { value: "retail", label: "Retail" },
      { value: "fitness-studio", label: "Fitness Studio" },
      { value: "bakery", label: "Bakery & Café" },
      { value: "cleaning-service", label: "Cleaning Service" },
      { value: "boutique", label: "Boutique Clothing Store" },
    ],
  },
  {
    id: "challenge",
    text: "What is your biggest challenge right now?",
    options: [
      { value: "attract", label: "Attracting new customers" },
      { value: "loyalty", label: "Keeping customers loyal" },
      { value: "standout", label: "Standing out from competition" },
      { value: "operations", label: "Managing operations" },
      { value: "scratch", label: "Getting started from scratch" },
    ],
  },
  {
    id: "team",
    text: "How many people work in your business?",
    options: [
      { value: "solo", label: "Just me" },
      { value: "small", label: "2-5 people" },
      { value: "medium", label: "6+ people" },
    ],
  },
  {
    id: "customers",
    text: "What matters most to your customers?",
    options: [
      { value: "food_atmosphere", label: "Great food & atmosphere" },
      { value: "look_feel", label: "Looking and feeling great" },
      { value: "deals_products", label: "Great deals and products" },
      { value: "convenience", label: "Convenience and expertise" },
      { value: "fun_community", label: "Fun and community" },
    ],
  },
];

interface PersonaResult {
  id: string;
  name: string;
  business: string;
  emoji: string;
  reason: string;
  anchor: string;
}

const PERSONAS: PersonaResult[] = [
  {
    id: "maria",
    name: "Maria Gonzalez",
    business: "NYC Deli Owner",
    emoji: "🥪",
    reason:
      "You are launching a deli from scratch: Maria's journey from idea to opening day maps exactly to your path.",
    anchor: "#persona-maria",
  },
  {
    id: "sandra",
    name: "Sandra Williams",
    business: "Salon Owner",
    emoji: "💇",
    reason:
      "You are in personal services and focused on client retention and brand refresh: Sandra's 5-year journey shows the way.",
    anchor: "#persona-sandra",
  },
  {
    id: "james",
    name: "James Okafor",
    business: "Restaurant Owner",
    emoji: "🍽️",
    reason:
      "You are running a restaurant and need to boost foot traffic and revenue: James cracked this same challenge.",
    anchor: "#persona-james",
  },
  {
    id: "derrick",
    name: "Derrick Thompson",
    business: "Pool Hall Owner",
    emoji: "🎱",
    reason:
      "Your entertainment venue needs a fresh strategy to attract a broader audience: Derrick's playbook is your blueprint.",
    anchor: "#persona-derrick",
  },
  {
    id: "priya",
    name: "Priya Patel",
    business: "Retail Store Owner",
    emoji: "🛍️",
    reason:
      "You are opening a retail business with zero prior experience: Priya started exactly where you are and built something thriving.",
    anchor: "#persona-priya",
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    business: "Fitness Studio Owner",
    emoji: "🏋️",
    reason:
      "You are building a fitness community from the ground up: Jordan's member-retention and viral-class strategies will fast-track your growth.",
    anchor: "#persona-jordan",
  },
  {
    id: "sam",
    name: "Sam Rivera",
    business: "Bakery & Café Owner",
    emoji: "🥐",
    reason:
      "You are turning your passion for baking into a neighborhood staple: Sam's story of viral menu items and community events is your guide.",
    anchor: "#persona-sam",
  },
  {
    id: "taylor",
    name: "Taylor Brooks",
    business: "Cleaning Service Owner",
    emoji: "🧹",
    reason:
      "You are building trust and systems in a service business: Taylor's client-first approach and referral systems will scale your operation.",
    anchor: "#persona-taylor",
  },
  {
    id: "alex",
    name: "Alex Chen",
    business: "Boutique Clothing Store Owner",
    emoji: "👗",
    reason:
      "You are curating a fashion destination with loyal fans: Alex's trend-merchandising and women-first strategy built a thriving boutique.",
    anchor: "#persona-alex",
  },
];

type Answers = Partial<Record<QuestionId, string>>;

function matchPersona(answers: Answers): PersonaResult {
  const { business } = answers;

  switch (business) {
    case "deli":
      return PERSONAS.find((p) => p.id === "maria")!;
    case "salon":
      return PERSONAS.find((p) => p.id === "sandra")!;
    case "restaurant":
      return PERSONAS.find((p) => p.id === "james")!;
    case "pool-hall":
      return PERSONAS.find((p) => p.id === "derrick")!;
    case "retail":
      return PERSONAS.find((p) => p.id === "priya")!;
    case "fitness-studio":
      return PERSONAS.find((p) => p.id === "jordan")!;
    case "bakery":
      return PERSONAS.find((p) => p.id === "sam")!;
    case "cleaning-service":
      return PERSONAS.find((p) => p.id === "taylor")!;
    case "boutique":
      return PERSONAS.find((p) => p.id === "alex")!;
    default:
      return PERSONAS.find((p) => p.id === "maria")!;
  }
}

export function PersonaQuiz() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<PersonaResult | null>(null);

  const currentQuestion = QUESTIONS[step];
  const totalSteps = QUESTIONS.length;
  const progress = (step / totalSteps) * 100;

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setResult(matchPersona(newAnswers));
    }
  }

  function handleRetake() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  function handleViewJourney(persona: PersonaResult) {
    navigate({ to: "/personas" });
    // Use a short timeout to let the page mount before scrolling to anchor
    setTimeout(() => {
      const el = document.querySelector(persona.anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  }

  return (
    <section
      data-ocid="home.persona_quiz.section"
      className="bg-background border-b border-primary/10 py-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        {/* Toggle button */}
        <motion.button
          type="button"
          data-ocid="home.persona_quiz.toggle"
          onClick={() => setIsOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-4 rounded-2xl border-2 border-primary/20 bg-card px-6 py-5 text-left shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.998 }}
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-neutral/10">
              <Sparkles size={20} className="text-accent-neutral" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-foreground text-base leading-snug">
                Which business owner are you most like?
              </p>
              <p className="text-[15px] text-muted-readable mt-0.5">
                Answer 5 quick questions: we will match you to a real owner
                journey.
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="shrink-0 text-primary"
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.button>

        {/* Collapsible panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="quiz-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="rounded-2xl border border-primary/15 bg-card shadow-sm mt-3 overflow-hidden"
                data-ocid="home.persona_quiz.panel"
              >
                {/* Progress bar */}
                {!result && (
                  <div className="h-1 bg-muted">
                    <motion.div
                      className="h-full bg-primary"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {result ? (
                      /* Result card */
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        data-ocid="home.persona_quiz.result"
                        className="flex flex-col items-center text-center gap-5"
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2 border-primary/20 bg-accent-neutral/10"
                          aria-hidden="true"
                        >
                          {result.emoji}
                        </div>
                        <div>
                          <p className="text-[15px] font-semibold uppercase tracking-widest text-primary mb-1">
                            Your Match
                          </p>
                          <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                            {result.name}
                          </h3>
                          <p className="text-[15px] font-medium text-muted-readable">
                            {result.business}
                          </p>
                        </div>
                        <p className="text-[15px] text-muted-readable leading-relaxed max-w-md">
                          {result.reason}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-1">
                          <Button
                            type="button"
                            size="lg"
                            data-ocid="home.persona_quiz.view_journey_button"
                            onClick={() => handleViewJourney(result)}
                            className="font-semibold text-[15px] px-6 gap-2"
                          >
                            <User size={16} />
                            See {result.name.split(" ")[0]}'s Journey
                            <ChevronRight size={15} />
                          </Button>
                          <button
                            type="button"
                            data-ocid="home.persona_quiz.retake_button"
                            onClick={handleRetake}
                            className="inline-flex items-center gap-2 text-[15px] font-medium text-muted-readable hover:text-primary transition-colors duration-200 justify-center px-4"
                          >
                            <RefreshCw size={14} />
                            Retake Quiz
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      /* Question */
                      <motion.div
                        key={`q-${step}`}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.3 }}
                        data-ocid={`home.persona_quiz.question.${step + 1}`}
                      >
                        <div className="flex items-center gap-2 mb-5">
                          <span className="text-[15px] font-semibold text-primary">
                            Question {step + 1} of {totalSteps}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-xl text-foreground mb-5">
                          {currentQuestion.text}
                        </h3>
                        <div className="flex flex-col gap-2.5">
                          {currentQuestion.options.map((opt, i) => (
                            <motion.button
                              key={opt.value}
                              type="button"
                              data-ocid={`home.persona_quiz.option.${i + 1}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.06, duration: 0.25 }}
                              onClick={() => handleAnswer(opt.value)}
                              className="w-full text-left px-5 py-4 rounded-xl border-2 border-border bg-background text-[15px] font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                              {opt.label}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
