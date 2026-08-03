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

const ACCENT = "#D97706";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

const PRESET_QA = [
  {
    id: "transition",
    q: "How do I transition from a mobile pizza truck to a brick-and-mortar shop?",
    a: "The transition requires three parallel tracks: (1) Permits & Zoning: Mobile food permits do not transfer. You will need a new food service establishment permit, certificate of occupancy, and potentially a liquor license. Start this process 6 months before your target opening. (2) Financial Planning: A brick-and-mortar requires 3x the capital of a truck. Budget $80K-150K for buildout, $20K for first-month operating expenses, and $30K emergency reserve. (3) Operational Shift: Truck operations are lean by necessity: one person, multi-tasking, tight space. A shop needs role specialization: dough prep, oven management, counter service, delivery. Hire for the shop you want, not the truck you had. The biggest mistake truck owners make: assuming their truck success guarantees shop success. The economics are completely different.",
  },
  {
    id: "oven",
    q: "Wood-fired, gas deck, or conveyor: which oven should I choose?",
    a: "It depends on your concept and volume. Wood-fired (Neapolitan style): $8K-25K, 90-second cook time, requires skilled operation, creates theater and aroma. Best for artisanal shops charging $18-28 per pie. Gas deck: $5K-15K, 6-8 minute cook, easier to operate, consistent results. Best for NY-style shops doing 100+ pies/day. Conveyor: $12K-30K, 5-7 minute cook, lowest skill requirement, highest throughput. Best for high-volume delivery shops. Most successful transitions start with gas deck (versatile, forgiving) and upgrade to wood-fired once cash flow stabilizes. Never buy used ovens without a technician inspection: a cracked deck or failing burner costs more than a new unit.",
  },
  {
    id: "foodcost",
    q: "What is the ideal food cost percentage for a pizzeria?",
    a: "20-25% is the industry sweet spot for pizza. Here is the breakdown on an $18 cheese pie: dough $0.80 (4.4%), sauce $0.60 (3.3%), cheese $2.40 (13.3%) = total $3.80 (21.1%). Gross margin: $14.20 (78.9%). Under 20% usually means you are skimping on quality: customers notice thin cheese and skimpy sauce. Over 28% means your pricing is too low or your portion control is sloppy. Track weekly, not monthly. Cheese prices fluctuate with dairy markets, and dough waste adds up fast. One simple fix: buy block cheese and shred in-house. Pre-shredded cheese contains cellulose (anti-caking agent) that costs 15-20% more and melts poorly.",
  },
  {
    id: "slice",
    q: "Should I offer by-the-slice or whole pies only?",
    a: "If you are in a high-foot-traffic area (downtown, college, transit hub), slices are essential: they drive volume, visibility, and cash flow. A slice shop can do 300-500 slices per day at $3.50-5.00 each. If you are in a residential or family area, whole pies dominate dinner and delivery. The most profitable shops do both: slices at lunch (11am-3pm) for volume, whole pies at dinner (4pm-close) for margin. The key insight: slices have lower margin (60-65%) due to waste, but they create the 'always busy' perception that drives whole pie orders. A customer who sees a line for slices assumes the whole pies must be worth trying too.",
  },
  {
    id: "staffing",
    q: "How many staff do I need for a 1,000 sq ft pizza shop?",
    a: "Minimum viable staffing: 2 people for slow shifts (one dough/prep, one oven/counter), 3-4 for peak (dinner, weekends). A typical schedule: Owner/manager works 50-60 hours/week covering gaps. Hire 1 full-time dough/prep person (comes in 6am-2pm), 2-3 part-time counter/oven staff for rushes, 1 delivery driver (if doing in-house delivery). Labor cost should run 22-28% of revenue. The most common mistake: overstaffing slow periods out of fear of being caught short. Use your POS data to schedule precisely: if Tuesday lunch averages 25 customers, you need 2 people, not 3. Every unnecessary labor hour is $15-20 off your bottom line.",
  },
  {
    id: "delivery",
    q: "Should I use DoorDash/Uber Eats or build my own delivery?",
    a: "Use third-party platforms for discovery, not dependency. Their 15-30% commission destroys margins on a $18 pie. The strategy: list on platforms to reach new customers, but include a flyer in every bag offering 10% off for direct orders. Build your own channel through: (1) Google Business Profile with direct ordering link, (2) Simple website with online ordering (Square, Toast, Slice), (3) SMS marketing to past customers. Over 12-18 months, shift from 80% third-party / 20% direct to 20% third-party / 80% direct. The shops that survive long-term own their customer relationships. Platforms own the customer: and can raise commissions or delist you at any time.",
  },
  {
    id: "social",
    q: "What social media content performs best for pizza shops?",
    a: "Four formats dominate: (1) The Cheese Pull: lift a slice slowly, capture the stretch. This gets 5x more saves than any other pizza content. (2) Dough Prep Time-Lapse: 24-hour proof compressed to 15 seconds. Signals craft and patience. (3) First-Bite Reactions: genuine customer reactions to their first bite. Authentic delight is the most shareable content. (4) Oven Pulls: the moment a pie comes out, cheese bubbling, crust charring. Post at 11:30am to catch the lunch decision window. The rule: document the process, not just the product. A photo of dough being stretched at 6am says more than any menu photo.",
  },
  {
    id: "rescue",
    q: "My pizza shop is losing money. What is the first thing I should fix?",
    a: "Jon Taffer's framework: stop the bleeding, then rebuild. Week 1: Audit your P&L. If food cost is over 30%, fix portion control immediately. If labor is over 32%, cut hours to match actual traffic. If rent is over 10% of revenue, renegotiate or consider relocating. Week 2: Simplify your menu to your top 5 sellers plus 2 high-margin sides. Remove anything with food cost over 32% or that sells fewer than 5 per week. Week 3: Retrain staff on upselling and speed. A counter person who asks 'Would you like drinks with that?' increases average ticket by $2.50 with zero additional cost. Week 4: Reactivate past customers with a 'We Miss You' campaign. The customers who loved you once will come back if you give them a reason.",
  },
];

export function PizzaShopQA() {
  const [customQ, setCustomQ] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!customQ.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setCustomQ("");
  };

  return (
    <section
      id="qa"
      className="space-y-8"
      data-ocid="pizzashop-guide.qa_section"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: ACCENT_LIGHT }}
          >
            <MessageCircle size={20} style={{ color: ACCENT }} />
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Q&A
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Pizza Shop Q&A
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Real questions from mobile pizza operators transitioning to
          brick-and-mortar. Detailed answers based on industry benchmarks,
          Taffer diagnostics, and lessons from legendary pizzerias.
        </p>
      </div>

      {/* Pre-written Q&A */}
      <Accordion
        type="multiple"
        className="space-y-3"
        data-ocid="pizzashop-guide.qa_accordion"
      >
        {PRESET_QA.map((item, i) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-xl overflow-hidden"
            style={{
              border: `1px solid ${ACCENT}25`,
              background: "oklch(0.985 0.006 75)",
            }}
            data-ocid={`pizzashop-guide.qa_item.${i + 1}`}
          >
            <AccordionTrigger
              className="px-5 py-4 hover:no-underline text-left"
              style={{ color: "oklch(0.22 0.02 50)" }}
            >
              <span className="flex items-start gap-3">
                <MessageCircle
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: ACCENT }}
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
          background: ACCENT_LIGHT,
          border: `1px solid ${ACCENT}30`,
        }}
        data-ocid="pizzashop-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Question About Your Pizza Shop?
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
            data-ocid="pizzashop-guide.qa_success_state"
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
              placeholder="e.g. How do I price gluten-free pizza?"
              data-ocid="pizzashop-guide.qa_input"
              className="flex-1"
            />
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!customQ.trim()}
              className="gap-2 shrink-0"
              style={{
                background: ACCENT,
                color: "#ffffff",
              }}
              data-ocid="pizzashop-guide.qa_submit_button"
            >
              <Send size={14} />
              Ask
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
