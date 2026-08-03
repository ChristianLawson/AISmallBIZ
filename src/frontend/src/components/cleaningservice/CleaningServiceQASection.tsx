import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const PRESET_QA = [
  {
    id: "pricing",
    q: "How much should I charge for cleaning services?",
    a: "Pricing varies by market and service type. General benchmarks for 2026: Standard Clean (2-3 bed home) = $120-$180; Deep Clean = $250-$400; Move-In/Move-Out = $300-$500; Commercial (per visit) = $200-$800+. Charge by the job, not by the hour: it protects your revenue when you get faster and signals professionalism. Research 3-5 local competitors on Google and price within 10-15% of the middle of their range when you start. Never compete solely on price: once clients see your quality, professionalism, and background-check policy, they pay for reliability.",
  },
  {
    id: "first-clients",
    q: "How do I get my first clients?",
    a: "Best-in-order sequence: (1) Post on NextDoor with a neighborhood introduction and first-time offer: free or discounted first clean. (2) Tell everyone you know: personal network referrals have the highest conversion and retention of any source. (3) Join local Facebook community groups and post a genuine introduction. (4) Set up a Google Business Profile: even without reviews, it makes you findable. (5) Offer a free first-job to 2-3 neighbors in exchange for honest reviews. Do all five in your first week. Your first 10 clients will define your review profile for years.",
  },
  {
    id: "incorporate",
    q: "Should I incorporate? What structure should I use?",
    a: "For most solo or small cleaning operations, an LLC is the right first choice. It separates your personal assets from the business, is inexpensive to form ($50-$500 depending on state), and provides liability protection. As you grow to $100K+ revenue, consult a CPA about S-Corp election: the self-employment tax savings often justify it. A sole proprietorship works for testing the market, but as soon as you are entering client homes regularly, the liability protection of an LLC is worth the cost. File at your state's Secretary of State website: no lawyer required for a basic LLC filing.",
  },
  {
    id: "insurance",
    q: "Do I need insurance? What kind and how much does it cost?",
    a: "Yes: liability insurance and bonding are non-negotiable before you enter a single client's home. General Liability insurance ($1M minimum) covers property damage and injury claims. Surety bonding ($5,000-$10,000) protects clients if something is stolen or damaged. Together, these typically cost $500-$1,500/year for a solo operator: one of the best investments you will make. If you have employees, workers' compensation is legally required in most states. Display your insurance certificate on your website, in your booking confirmation, and share it with any client who asks. It is a major trust signal and converts hesitant prospects.",
  },
  {
    id: "hiring",
    q: "How do I hire and train cleaning staff?",
    a: "Hiring: post on Indeed, ZipRecruiter, and local Facebook job groups. Be specific in your listing: hourly rate range, hours, required background check. Background checks: use Checkr or HireRight ($30-$50 per check). Never skip this step regardless of how urgently you need help. Training: create a detailed 47-point cleaning checklist and walk through it in-person for 2 hours before the first solo job. Shadow the new hire on their first 2-3 jobs. Establish quality control: supervisor spot-checks 20% of jobs weekly. Staff who are trained with a clear checklist make fewer mistakes and stay longer than staff who learn by watching once.",
  },
  {
    id: "competition",
    q: "How do I compete with large franchise chains like Molly Maid or Merry Maids?",
    a: "You win by doing what they structurally cannot. Large franchises compete on brand recognition and volume: they cannot offer the personalization, flexibility, and community connection that an independent operator can. Your differentiators: (1) Named, background-checked cleaners who clients know personally: franchises rotate anonymous staff. (2) Non-toxic product options that you customize per household. (3) Flexible scheduling including evenings and weekends that franchise operators do not offer. (4) Same-day response and direct communication: clients text you, not a call center. (5) Community relationships through NextDoor and neighborhood groups that national brands cannot replicate. Price yourself within 15% of franchise rates and let your personalization, reliability, and trust do the rest.",
  },
];

export function CleaningServiceQASection() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setQuestion("");
    }
  };

  return (
    <section id="qa" data-ocid="cleaning-service-guide.qa_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <MessageCircle size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.25)",
          }}
        >
          Section 9
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Cleaning Service Q&amp;A
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Six questions every cleaning service owner asks: answered directly.
      </p>

      <Accordion type="single" collapsible className="space-y-3 mb-10">
        {PRESET_QA.map((item, i) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border rounded-xl px-4"
            data-ocid={`cleaning-service-guide.qa.item.${i + 1}`}
          >
            <AccordionTrigger className="text-sm font-semibold text-foreground py-4 hover:no-underline text-left">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Ask a question */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "oklch(0.55 0.18 290 / 0.05)",
          border: "1px solid oklch(0.55 0.18 290 / 0.2)",
        }}
      >
        <h3 className="font-display font-bold text-base text-foreground mb-2">
          Have a question not answered above?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Submit your question and it may be featured in a future update to this
          guide.
        </p>
        {submitted ? (
          <div
            className="rounded-lg px-4 py-3 text-sm font-medium"
            style={{
              background: "oklch(0.45 0.14 150 / 0.1)",
              color: "oklch(0.30 0.14 150)",
              border: "1px solid oklch(0.45 0.14 150 / 0.3)",
            }}
            data-ocid="cleaning-service-guide.qa.success_state"
          >
            Thanks for your question! We\'ll review it and may feature it in a
            future update.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask your cleaning business question..."
              className="flex-1"
              data-ocid="cleaning-service-guide.qa.input"
            />
            <Button
              type="submit"
              disabled={!question.trim()}
              data-ocid="cleaning-service-guide.qa.submit_button"
              style={{ background: "oklch(0.55 0.23 285)", color: "#fff" }}
            >
              <Send size={15} />
              <span className="sr-only">Submit question</span>
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
