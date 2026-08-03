import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, RotateCcw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Answer = string;

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string; emoji: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "business_type",
    text: "What type of business do you run?",
    options: [
      { value: "food", label: "Food & Dining", emoji: "🍽️" },
      { value: "beauty", label: "Beauty & Wellness", emoji: "💇" },
      { value: "retail", label: "Retail & Shopping", emoji: "🛍️" },
      { value: "online", label: "Online / Digital", emoji: "💻" },
      { value: "starting", label: "I am just starting out", emoji: "🚀" },
    ],
  },
  {
    id: "challenge",
    text: "What is your biggest challenge right now?",
    options: [
      { value: "customers", label: "Getting more customers", emoji: "👥" },
      {
        value: "competition",
        label: "Standing out from competition",
        emoji: "⭐",
      },
      { value: "operations", label: "Managing operations", emoji: "⚙️" },
      { value: "branding", label: "Building my brand", emoji: "✨" },
      { value: "all", label: "All of the above", emoji: "💪" },
    ],
  },
  {
    id: "experience",
    text: "How long have you been in business?",
    options: [
      { value: "starting", label: "Just starting", emoji: "🌱" },
      { value: "under2", label: "Less than 2 years", emoji: "📈" },
      { value: "2to5", label: "2-5 years", emoji: "🏆" },
      { value: "5plus", label: "5+ years", emoji: "🎯" },
    ],
  },
];

interface GuideResult {
  title: string;
  description: string;
  emoji: string;
  route: string;
}

function getRecommendation(answers: Record<string, Answer>): GuideResult {
  const bizType = answers.business_type;

  if (bizType === "food") {
    return {
      title: "NYC Deli Guide",
      emoji: "🥪",
      description:
        "Master Google Maps ranking, daily specials, and foot traffic: built for NYC food businesses using Jon Taffer's rescue playbook.",
      route: "/deli-guide",
    };
  }
  if (bizType === "beauty") {
    return {
      title: "Salon & Beauty Guide",
      emoji: "💇",
      description:
        "Grow your client list, nail social media, and build a brand that clients return to: strategies designed for beauty professionals.",
      route: "/salon-guide",
    };
  }
  if (bizType === "retail") {
    return {
      title: "Retail Guide",
      emoji: "🛍️",
      description:
        "Optimize your store experience, run effective promotions, and build lasting customer loyalty: everything a modern retailer needs.",
      route: "/retail-guide",
    };
  }
  if (bizType === "online") {
    return {
      title: "Online Services Guide",
      emoji: "💻",
      description:
        "Scale your digital business with SEO, content strategy, and automation: built for service providers and digital entrepreneurs.",
      route: "/online-services-guide",
    };
  }
  if (bizType === "starting") {
    return {
      title: "Restaurant Guide",
      emoji: "🍽️",
      description:
        "From business plan to opening day: get the step-by-step playbook used by successful restaurateurs, powered by Jon Taffer principles.",
      route: "/restaurant-guide",
    };
  }
  // Fallback: recommend based on challenge
  const challenge = answers.challenge;
  if (challenge === "branding") {
    return {
      title: "Salon & Beauty Guide",
      emoji: "💇",
      description:
        "Grow your brand with strategies that combine Appreciated Branding methodology with real-world case studies.",
      route: "/salon-guide",
    };
  }
  return {
    title: "NYC Deli Guide",
    emoji: "🥪",
    description:
      "Start with our most popular guide: packed with tactics for any local business ready to grow.",
    route: "/deli-guide",
  };
}

export function GuideQuiz() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [direction, setDirection] = useState<1 | -1>(1);
  const isDone = currentStep >= QUESTIONS.length;
  const recommendation = isDone ? getRecommendation(answers) : null;

  function handleSelect(questionId: string, value: string) {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);
    setDirection(1);
    setTimeout(() => setCurrentStep((s) => s + 1), 220);
  }

  function handleReset() {
    setDirection(-1);
    setAnswers({});
    setCurrentStep(0);
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -30 }),
  };

  return (
    <section
      data-ocid="home.quiz.section"
      className="bg-background py-16 md:py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground">
            Answer 3 quick questions and we will point you to the right guide.
          </p>
        </motion.div>

        <div
          data-ocid="home.quiz.panel"
          className="rounded-2xl border border-border/80 bg-card shadow-elevated overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(71,85,105,0.08)" }}
        >
          {/* Progress bar */}
          {!isDone && (
            <div className="px-6 pt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                  Step {currentStep + 1} of {QUESTIONS.length}
                </span>
                <div className="flex gap-1.5">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i.toString()}
                      className="h-1.5 rounded-full transition-all duration-300 bg-accent-neutral"
                      style={{
                        width: i === currentStep ? "24px" : "8px",
                        opacity: i <= currentStep ? 1 : 0.25,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Question / Result panel */}
          <div className="px-6 pb-6 pt-4 min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              {!isDone ? (
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                    {QUESTIONS[currentStep].text}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {QUESTIONS[currentStep].options.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        data-ocid={`home.quiz.option.${opt.value}`}
                        onClick={() =>
                          handleSelect(QUESTIONS[currentStep].id, opt.value)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-smooth
                          border-border bg-background text-foreground
                          hover:border-primary hover:bg-primary/5 hover:text-primary
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        style={{ minHeight: "52px" }}
                      >
                        <span
                          className="text-xl shrink-0 w-7 text-center"
                          aria-hidden="true"
                        >
                          {opt.emoji}
                        </span>
                        <span className="leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center text-center gap-5"
                  data-ocid="home.quiz.result"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-accent-neutral/10">
                    {recommendation?.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                      Your recommended guide
                    </p>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {recommendation?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                      {recommendation?.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Button
                      type="button"
                      data-ocid="home.quiz.take_me_button"
                      className="gap-2 font-semibold px-6 rounded-lg bg-accent-indigo hover:bg-accent-indigo text-white"
                      onClick={() => {
                        navigate({
                          to: recommendation!.route as "/deli-guide",
                        });
                        window.scrollTo(0, 0);
                      }}
                    >
                      Take me to my guide
                      <ArrowRight size={16} />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      data-ocid="home.quiz.start_over_button"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                      onClick={handleReset}
                    >
                      <RotateCcw size={14} />
                      Start over
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
