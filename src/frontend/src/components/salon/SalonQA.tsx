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
    q: "How often should I rotate my weekly promotions?",
    a: "Feature each promotion for one full week, then rotate to the next. Keep a 12-week calendar so every promotion gets featured once per quarter. Announce next week's promotion every Friday to build anticipation and drive advance bookings.",
  },
  {
    id: "reviews",
    q: "How do I get more Google reviews from clients?",
    a: "The most effective method: hand your phone to a happy client while they are still in the chair. Show them the Google review link. Make it a ritual: every stylist, every appointment. Reviews requested in-person convert at 3× the rate of follow-up email requests.",
  },
  {
    id: "retail",
    q: "What is a realistic retail sales target?",
    a: "Industry benchmark: retail should represent 15-20% of total service revenue. If you are doing $10,000/month in services, target $1,500-2,000 in retail. Start by training every stylist to mention 2 products used during every service: not as a sales pitch, but as education.",
  },
  {
    id: "retention",
    q: "How do I prevent a top stylist from leaving and taking clients?",
    a: "Three-part strategy: (1) Equity or revenue sharing for top performers. (2) Client relationship ownership at the salon level: every client record is the salon's asset, not the individual stylist's. (3) Culture investment: when team members feel valued, respected, and growing, they do not leave.",
  },
  {
    id: "branding",
    q: "How long before Appreciated Branding shows measurable results?",
    a: "Nick Mirabella's research shows average ticket increases appear within 6-8 weeks of implementing consistent branding changes. Full revenue impact (new client referrals, retention improvement) typically materializes at the 3-6 month mark. The first thing you will notice: fewer price objections.",
  },
];

export function SalonQA() {
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
        data-ocid="salon-guide.qa_accordion"
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
            data-ocid={`salon-guide.qa_item.${i + 1}`}
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
        data-ocid="salon-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Different Question About Your Salon?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask anything about branding, bookings, staff, or growth.
        </p>
        {submitted ? (
          <div
            className="rounded-lg p-4 text-sm font-medium"
            style={{
              background: "oklch(0.55 0.14 150 / 0.1)",
              color: "oklch(0.3 0.1 150)",
            }}
            data-ocid="salon-guide.qa_success_state"
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
              placeholder="e.g. How do I build a waitlist for new clients?"
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              data-ocid="salon-guide.qa_input"
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
              data-ocid="salon-guide.qa_submit_button"
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
