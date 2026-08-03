import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const PRESET_QA = [
  {
    id: "rotate",
    q: "How often should I rotate my sandwich specials?",
    a: "Every 4-8 weeks is the sweet spot. Too fast (weekly) and customers cannot become fans of a specific special. Too slow (quarterly) and the novelty wears off. A 4-8 week rotation generates enough repeat visits to build a following while still feeling fresh. Seasonal rotations (summer, fall, holiday) layer naturally on top of this base cadence.",
  },
  {
    id: "google",
    q: "What is the #1 thing killing my Google Maps ranking?",
    a: "Not updating your Google Business Profile regularly. Google's algorithm re-evaluates your listing daily, and inactivity is treated as a negative signal. The single highest-ROI action you can take is posting a photo of today's special every morning. That one daily action: 60 seconds of effort: directly improves your local search visibility and can mean 10-30 more customers per week.",
  },
  {
    id: "foodcost",
    q: "How much should food cost as a percentage of revenue?",
    a: "Target 28-35% food cost ratio. If you are above 35%, you have a waste or sourcing problem: audit your FIFO system, check what is being thrown out, and renegotiate with suppliers. If you are below 28%, check your quality. The danger zone is spending so little on ingredients that you compromise what makes your deli worth visiting. Most legendary NYC delis run 30-33%.",
  },
  {
    id: "katz",
    q: "How did Katz's Deli survive 130+ years?",
    a: "Five factors, all compounding over time: (1) Real estate ownership: they own their building, which insulated them from the rent hikes that killed dozens of competitors. (2) Uncompromising quality: 30-day slow-cured pastrami, same recipe since 1888, hand-carved because it is too tender for a slicer. (3) Consistency: 4,000 customers on peak days know exactly what they are getting. (4) Cultural nostalgia: Katz's is a New York institution; visiting is part of the NYC experience. (5) Smart revenue expansion: national shipping via Square turned a local deli into a national brand. Own your building, obsess over quality, and never stop telling your story.",
  },
  {
    id: "social",
    q: "What social media content performs best for a deli?",
    a: "Behind-the-scenes prep videos and sandwich-stacking content consistently outperform everything else. The sound of the slicer, the stack getting impossibly tall, the first cut revealing the layers: these are inherently watchable. Prospect Park Deli's wagyu chopped cheese amassed 1B+ views this way. The formula: film the craft, not the menu. Show the technique, the ingredients arriving, the 5am setup, the rush. And most importantly: capture customer reactions. Authentic delight is the most shareable content a deli can produce.",
  },
];

export function DeliQA() {
  const [customQ, setCustomQ] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!customQ.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setCustomQ("");
  };

  return (
    <div className="space-y-8">
      {/* Pre-written Q&A */}
      <Accordion
        type="multiple"
        className="space-y-3"
        data-ocid="deli-guide.qa_accordion"
      >
        {PRESET_QA.map((item, i) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.28 0.12 330 / 0.15)",
              background: "oklch(0.985 0.006 75)",
            }}
            data-ocid={`deli-guide.qa_item.${i + 1}`}
          >
            <AccordionTrigger
              className="px-5 py-4 hover:no-underline text-left"
              style={{ color: "oklch(0.22 0.02 50)" }}
            >
              <span className="flex items-start gap-3">
                <MessageCircle
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "oklch(0.28 0.12 330)" }}
                />
                <span className="font-semibold text-sm">{item.q}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <div className="pl-7">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Custom question form */}
      <div
        className="rounded-xl p-6"
        style={{
          background: "oklch(0.78 0.12 85 / 0.06)",
          border: "1px solid oklch(0.78 0.12 85 / 0.2)",
        }}
        data-ocid="deli-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Different Question About Your Deli?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask anything: we will route it to the right guide or resource.
        </p>
        {submitted ? (
          <div
            className="rounded-lg p-4 text-sm font-medium"
            style={{
              background: "oklch(0.55 0.14 150 / 0.1)",
              color: "oklch(0.3 0.1 150)",
            }}
            data-ocid="deli-guide.qa_success_state"
          >
            ✓ Question received! Check our{" "}
            <a href="/ask-a-question" className="underline">
              Ask a Question
            </a>{" "}
            page for a full answer.
          </div>
        ) : (
          <div className="flex gap-3">
            <Input
              value={customQ}
              onChange={(e) => setCustomQ(e.target.value)}
              placeholder="e.g. How do I get more catering orders?"
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              data-ocid="deli-guide.qa_input"
            />
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!customQ.trim()}
              className="gap-2 shrink-0"
              style={{
                background: "oklch(0.28 0.12 330)",
                color: "oklch(0.97 0.006 75)",
              }}
              data-ocid="deli-guide.qa_submit_button"
            >
              <Send size={14} />
              Ask
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
