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
    id: "intimidation",
    q: "How do I make my weight room feel less intimidating for women?",
    a: "Four immediate changes that work: (1) Post a 'No Unsolicited Advice' sign at the weight room entrance: specific rules carry more weight than vague 'be nice' language. (2) Schedule at least one women-only weight room hour per week: first 30 days drive familiarity. (3) Have a female staff member present and visible during peak hours. (4) Add a brief weight room orientation to your new member onboarding: knowing where everything is removes the biggest source of anxiety. The intimidation is not about the weights: it is about feeling like you are being watched and judged. Remove those signals systematically.",
  },
  {
    id: "female-instructors",
    q: "How do I hire female instructors when the local pool is mostly men?",
    a: "Three proven channels: (1) Post on IDEA FitnessConnect: the largest fitness professional job board: and specify that female candidates are strongly encouraged. (2) Reach out to local yoga and pilates studios directly: many female instructors work independently and want a home studio. (3) Partner with a local fitness certification program or college athletic department: recent female graduates are actively looking for studio placements. For the first hire, prioritize warmth and inclusivity over credentials. A female instructor with strong people skills who makes women feel safe is worth more than a certified specialist who intimidates beginners.",
  },
  {
    id: "retention",
    q: "What is the #1 reason women cancel their fitness studio memberships?",
    a: "According to multiple industry surveys (IHRSA, Mindbody), the #1 reason women cancel is feeling judged: not price, not convenience, not results. This makes your culture your most important retention lever. Specific triggers: feeling watched while exercising (especially in weight rooms), unsolicited advice from other members or staff, instructors who use body-shaming or appearance-based language, and not feeling recognized as a regular member. Fix the culture before you fix anything else. The second most common reason is schedule: flexible timing options for moms and 9-5 workers is a direct retention driver.",
  },
  {
    id: "social-content",
    q: "What fitness content performs best on Instagram and TikTok for attracting women?",
    a: "In order of proven performance: (1) 'First class' reaction content: beginner anxiety-to-confidence transformation in 60 seconds. Gets massive saves and shares because every woman who is nervous about joining sees herself in it. (2) Real member spotlights: not 'transformation' content, but 'I feel stronger and here is why' stories. (3) Instructor personality content: workouts taught by likable, relatable female instructors. The instructor is the product. (4) Behind-the-scenes of what a welcoming studio looks like: show the locker room, the front desk greeting, the member community. Safety and belonging are hugely shareable signals.",
  },
  {
    id: "moms",
    q: "How do I specifically attract moms as members?",
    a: "Four strategies with the highest conversion: (1) Schedule 5:30 AM and 9:15 AM slots: these are the two highest-demand windows for moms (before school drop-off + after drop-off). (2) Partner with a local daycare or offer a kids' supervised space: even 2 hours on weekend mornings is a major differentiator. (3) Create a 'Moms Who Move' community group (WhatsApp or Facebook) tied to your studio: peer community is the single strongest retention driver for this demographic. (4) Market specifically during September (back-to-school energy) and January: moms are most receptive to new fitness commitments in these windows. Paid ads targeting women 28-42 in a 5-mile radius during these months will have your lowest CAC of the year.",
  },
  {
    id: "challenge-program",
    q: "How do I run a fitness challenge that actually generates results and social content?",
    a: "The proven formula: (1) 6 weeks is the optimal length: long enough for visible results, short enough to maintain commitment. 30-day challenges have 40% drop-off by week 3. (2) Weekly check-ins, not just daily goals: reduces guilt from missed days and keeps the group engaged. (3) Create a private group (WhatsApp or Facebook) exclusively for participants: community accountability is what separates finishing from quitting. (4) Non-scale victory focus: celebrate first pull-up, most consistent week, biggest energy improvement: these stories are infinitely more shareable than weight loss content. (5) End with a celebration event: the group photo, the victory dinner, the award moment: this is the content that gets shared and drives the next challenge enrollment.",
  },
  {
    id: "pricing",
    q: "How should I price women-only classes and programs?",
    a: "General guideline: women-only boutique classes command a premium over co-ed equivalents because of the safety and community value they deliver. Reformer pilates in small groups ($35-50/session) should be priced 40-60% above floor pilates. Beginner workshops ($30-45/session) should feel low-risk for first-timers. Monthly memberships ($79-149 at boutique level) should include unlimited women-only class access, not treat it as an add-on. The #1 pricing mistake boutique studios make is underpricing women's programming: it signals lower value and attracts price-sensitive members who churn faster. Price to your brand, not to your fear.",
  },
  {
    id: "google-reviews",
    q: "How do I get more positive Google reviews from female members?",
    a: "Timing and framing are everything. Ask at the emotional high point: after a milestone class, after a challenge completion, after a member thanks you personally. Use this exact language: 'Your experience means everything to us. Would you take 60 seconds to share it on Google? It helps other women find us.' Direct, brief, personal ask. 60% of members will leave a review if asked this way vs. 3-5% from an automated email. Then respond to every review: positive and negative: within 24 hours. A studio owner who engages with reviews demonstrates exactly the culture of care that Appreciated Branding is built on.",
  },
];

export function FitnessStudioQASection() {
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
        data-ocid="fitness-studio-guide.qa_accordion"
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
            data-ocid={`fitness-studio-guide.qa_item.${i + 1}`}
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
        data-ocid="fitness-studio-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Question About Your Fitness Studio?
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
            data-ocid="fitness-studio-guide.qa_success_state"
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
              placeholder="e.g. How do I attract more women to my morning classes?"
              data-ocid="fitness-studio-guide.qa_input"
              className="flex-1"
            />
            <Button
              onClick={handleSubmit}
              disabled={!customQ.trim()}
              data-ocid="fitness-studio-guide.qa_submit_button"
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
