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
    id: "menu-change",
    q: "How often should I change my menu?",
    a: "The James Beard Foundation’s 2026 research is clear: discipline with a smaller menu outperforms frequent menu changes on every metric. Change your menu seasonally (4 times per year) to capture seasonal ingredients and maintain guest interest: but keep your hero items permanent. Your regulars count on them.",
  },
  {
    id: "negative-review",
    q: "How do I handle a negative online review?",
    a: "Respond within 24 hours, every time, without exception. Use this format: acknowledge (never argue), apologize sincerely, explain what you’re doing differently, and invite them back. A well-written response to a 1-star review is read by 10x more people than the review itself: and it demonstrates the culture of your restaurant.",
  },
  {
    id: "food-cost",
    q: "What should my food cost percentage be?",
    a: "Target 28-32% for food cost as a percentage of revenue. If you’re above 35%, audit your portion control, ordering habits, and waste. If you’re below 25%, check whether your prices are too high for your market or whether you’re compromising on quality. The sweet spot for most NYC independents is 30-32%.",
  },
  {
    id: "chain-competition",
    q: "How do I compete with chain restaurants on marketing?",
    a: "You have something chains cannot buy: authenticity, story, and community connection. Your content strategy should be hyper-local: feature your neighborhood, your regulars, your suppliers. ‘This week’s tomatoes came from a farm 80 miles away’ is content no chain restaurant can post. Local storytelling is your competitive advantage.",
  },
  {
    id: "video-2026",
    q: "How important is video content in 2026?",
    a: "Mandatory. Lawrence Longo’s philosophy: ‘social media is the new word-of-mouth.’ If your last Instagram post was a static image, you are invisible on TikTok and Reels: which is where the 25-45 year old dining-out demographic now discovers new restaurants. Commit to one quality Reel or TikTok per day. It will transform your discovery rate within 60 days.",
  },
];

export function RestaurantQA() {
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
      <Accordion
        type="multiple"
        className="space-y-3"
        data-ocid="restaurant-guide.qa_accordion"
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
            data-ocid={`restaurant-guide.qa_item.${i + 1}`}
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

      <div
        className="rounded-xl p-6"
        style={{
          background: "oklch(0.78 0.12 85 / 0.06)",
          border: "1px solid oklch(0.78 0.12 85 / 0.2)",
        }}
        data-ocid="restaurant-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Different Question About Your Restaurant?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask anything: we’ll route it to the right guide or resource.
        </p>
        {submitted ? (
          <div
            className="rounded-lg p-4 text-sm font-medium"
            style={{
              background: "oklch(0.55 0.14 150 / 0.1)",
              color: "oklch(0.3 0.1 150)",
            }}
            data-ocid="restaurant-guide.qa_success_state"
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
              placeholder="e.g. How do I increase my average check size?"
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              data-ocid="restaurant-guide.qa_input"
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
              data-ocid="restaurant-guide.qa_submit_button"
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
