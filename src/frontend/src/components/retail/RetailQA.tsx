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
    id: "amazon",
    q: "How do I compete with online retailers and Amazon?",
    a: "You do not compete with Amazon on price, convenience, or selection: and you should not try. You compete on what Amazon cannot provide: experience, story, personalization, and community. The SoHo boutique that grew 210% did not beat Amazon. She built a brand that Amazon cannot replicate: a physical, emotional, human experience that her specific customer values more than two-day shipping.",
  },
  {
    id: "ecommerce",
    q: "How important is e-commerce for a physical store?",
    a: "Survival-level important. In 2026, a retailer without e-commerce is invisible to 40-60% of its potential customer base. E-commerce is not a technology decision: it is a distribution decision. Your brand exists in three places simultaneously: physical store, online store, and social media. All three must be consistent and active.",
  },
  {
    id: "window",
    q: "How often should I update my window display?",
    a: "Monthly at minimum. Weekly is best practice for high-foot-traffic locations. Your window display is your outdoor advertising: and unlike a billboard, you can change it every week for free. If your window looks the same as last month, your regular foot traffic has already mentally filtered it out.",
  },
  {
    id: "metrics",
    q: "What should I track to know if my retail business is healthy?",
    a: "Four metrics: (1) Sales per square foot (national average $350, excellent is $500+), (2) Inventory turnover (target 4-6x per year), (3) Average transaction value (track weekly, target 10% growth per quarter), (4) Return customer rate (target 40%+). If all four are trending up, your business is healthy. If any are declining, start there.",
  },
  {
    id: "loyalty",
    q: "How do I build customer loyalty in a physical store?",
    a: "Three proven methods: (1) Recognition: remember names, sizes, preferences. A customer who feels known does not just return, she refers. (2) Exclusivity: VIP shopping hours, first looks, personal outreach. Loyalty is built on feeling special, not just saving money. (3) Story: give her something to tell. The 'Behind the Counter' event, the 'Collab Drop,' the personal note with a gift wrap: these are the moments she tells three friends about.",
  },
];

export function RetailQA() {
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
        data-ocid="retail-guide.qa_accordion"
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
            data-ocid={`retail-guide.qa_item.${i + 1}`}
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
        data-ocid="retail-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Different Question About Your Store?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask anything: we&apos;ll route it to the right guide or resource.
        </p>
        {submitted ? (
          <div
            className="rounded-lg p-4 text-sm font-medium"
            style={{
              background: "oklch(0.55 0.14 150 / 0.1)",
              color: "oklch(0.3 0.1 150)",
            }}
            data-ocid="retail-guide.qa_success_state"
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
              placeholder="e.g. How do I get more foot traffic on slow days?"
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              data-ocid="retail-guide.qa_input"
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
              data-ocid="retail-guide.qa_submit_button"
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
