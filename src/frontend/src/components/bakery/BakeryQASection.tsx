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
    id: "pricing",
    q: "How do I price my pastries and baked goods competitively?",
    a: "Use a cost-plus-margin model: calculate raw material cost per item (typically 28-35% of sale price for pastries), add labor time at your hourly rate, add overhead allocation, then add 60-70% margin. For a croissant costing $1.40 in materials + labor, a $4.50-5.50 price is standard in urban markets. Do not price against supermarkets: price against other artisan bakeries and premium cafés. Your craft, sourcing story, and experience justify a premium. If your sell-through rate is above 95% by close, you are underpriced.",
  },
  {
    id: "display",
    q: "How do I make my display case more attractive and sell more?",
    a: "Apply the 'Rule of Three': display items in odd-numbered groupings (3, 5, 7) with height variation using risers. Use warm-toned LED lighting inside the case: it makes everything look warmer and more appetizing. Keep the front row as your highest-margin or monthly featured item. Label everything with handwritten-style cards. Clean the glass every 2 hours during service. The display case is your menu: it should be styled as intentionally as a photo shoot. If it is half-empty or randomly arranged, it signals low quality regardless of what is inside.",
  },
  {
    id: "morning-rush",
    q: "How do I handle the morning rush without sacrificing quality or speed?",
    a: "Optimize before the rush, not during. Mise en place the night before: pre-portioned items, pre-brewed concentrate, pre-labeled bags. Run two distinct stations: ordering and payment on one side, pickup on the other. Pre-write today's specials on a board so customers decide before reaching the counter. The single biggest speed improvement: train staff to always say 'Will that be all?' and hand the item over simultaneously rather than completing payment first, then preparing. Every 30 seconds shaved from average transaction time = 2-3 more customers served at peak.",
  },
  {
    id: "viral",
    q: "How do I create a bakery item that goes viral on social media?",
    a: "Three elements drive bakery virality: (1) Visual drama: dramatic color contrast (vivid purple ube, bright green matcha, deep pistachio), a reveal moment (the croissant crack, the custard pull), or an unexpected size or shape. (2) Story angle: trending ingredient (pistachio in 2026, ube in 2025) or a clear seasonal moment. (3) Low barrier to share: the item must look great in a phone photo taken at counter height, natural light. Test before launching: photograph it yourself and ask: would I stop scrolling for this? If not, rethink the presentation. The item that photographs best sells best.",
  },
  {
    id: "loyalty",
    q: "What is the best loyalty program for a small bakery?",
    a: "Start with a physical stamp card: 'Buy 9 get 1 free.' Simple, zero setup cost, highly effective for bakeries. Once you are above 150 regular customers, move to Square Loyalty, Toast Loyalty, or Lightspeed's loyalty module. Digital programs that send birthday offers and push notifications to phones typically increase visit frequency by 20-35%. The key metric is 'redemption rate': if less than 30% of issued cards are ever redeemed, the program is not working. Common causes: too many stamps required, or the free item is not appealing enough.",
  },
  {
    id: "catering",
    q: "How do I grow a corporate catering business from my bakery?",
    a: "Corporate catering is high-margin, recurring, and predictable: it is the best revenue expansion for an established bakery. Start-up sequence: (1) Create a simple one-page catering menu with 3 tiers (20-30 people, 50-75 people, 100+ people) with per-person pricing. (2) Build a list of 30 local businesses within a 10-minute drive. (3) Deliver a complimentary sample box with your catering menu to each. (4) Follow up once with a phone call: not email: within 48 hours of delivery. First catering order conversion rate from sample delivery: typically 15-25%. One corporate account = $500-2,000/month in recurring revenue.",
  },
  {
    id: "women-market",
    q: "How do I market specifically to women customers?",
    a: "Women drive 70-80% of bakery purchasing decisions. The most effective approaches: (1) Feature women on your social media: your female staff, female suppliers, and female customers (with permission). Women share content featuring other women at 3x the rate of neutral content. (2) Partner with one women's organization per quarter for a hosted event or collaboration: their recommendation carries more trust than any ad. (3) Make your space visibly welcoming: stroller-accessible layout, a 'Women-Owned' badge if applicable, and a community wall celebrating local women. (4) Time your email sends for Tuesday and Wednesday mornings: data shows women are highest-engaged bakery email openers during mid-week morning windows.",
  },
  {
    id: "waste",
    q: "How do I reduce end-of-day waste without running out during service?",
    a: "The 'sell-through rate' is your key metric: aim for 85-95%. Too close to 100% means you are running out and turning customers away (lost revenue). Below 80% means over-production (waste). To optimize: track sell-through by item for 4 weeks, then reduce production of low-performers by 20% and increase high-performers. For end-of-day surplus: (1) 'Last Hour' discount (30-40% off) posted on Instagram Stories at 3pm drives late-day traffic. (2) Partner with a local food bank for regular donation pickups: this also generates goodwill content. (3) Convert day-old bread into croutons, bread pudding, or French toast bake: reduce the waste, add a new menu item.",
  },
];

export function BakeryQASection() {
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
        data-ocid="bakery-guide.qa_accordion"
      >
        {PRESET_QA.map((item, i) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.55 0.18 290 / 0.15)",
              background: "oklch(0.985 0.006 75)",
            }}
            data-ocid={`bakery-guide.qa_item.${i + 1}`}
          >
            <AccordionTrigger
              className="px-5 py-4 hover:no-underline text-left"
              style={{ color: "oklch(0.22 0.02 50)" }}
            >
              <span className="flex items-start gap-3">
                <MessageCircle
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "oklch(0.50 0.22 290)" }}
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

      {/* Custom question */}
      <div
        className="rounded-xl p-6"
        style={{
          background: "oklch(0.55 0.18 290 / 0.05)",
          border: "1px solid oklch(0.55 0.18 290 / 0.2)",
        }}
        data-ocid="bakery-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Question About Your Bakery or Café?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask anything: we&rsquo;ll route it to the right guide or resource.
        </p>
        {submitted ? (
          <div
            className="rounded-lg p-4 text-sm font-medium"
            style={{
              background: "oklch(0.55 0.14 150 / 0.1)",
              color: "oklch(0.3 0.1 150)",
            }}
            data-ocid="bakery-guide.qa_success_state"
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
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="e.g. How do I get more morning rush customers?"
              data-ocid="bakery-guide.qa_input"
              className="flex-1"
            />
            <Button
              onClick={handleSubmit}
              disabled={!customQ.trim()}
              data-ocid="bakery-guide.qa_submit_button"
              size="sm"
            >
              <Send size={14} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
