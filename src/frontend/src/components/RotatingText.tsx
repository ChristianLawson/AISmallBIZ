import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHRASES = [
  "7-Day Quick Start",
  "Truck to Store",
  "Ovens & Equipment",
  "Menu Engineering",
  "Bar Rescue",
  "Appreciated Branding",
  "Women's Strategy",
  "Atmosphere",
];

const CYCLE_MS = 3000;

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        className="flex flex-wrap justify-center gap-2"
        data-ocid="pizzashop-guide.rotating_text.static"
      >
        {PHRASES.map((phrase) => (
          <span
            key={phrase}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold px-3 py-1 rounded-full bg-[#FFF7ED] text-[#D97706] border border-[#FED7AA]"
          >
            {phrase}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative h-10 flex items-center justify-center overflow-hidden"
      data-ocid="pizzashop-guide.rotating_text"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.92 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute whitespace-nowrap font-display text-xl md:text-2xl font-bold text-gradient-vibrant"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
