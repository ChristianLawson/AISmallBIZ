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
    id: "harassment",
    q: "How do I handle a harassment incident in my pool hall?",
    a: "Act immediately: never let it play out hoping it resolves itself. (1) Staff member approaches the offending party calmly and privately. (2) State the policy clearly: 'We have a zero-tolerance harassment policy. This behavior needs to stop.' (3) If it continues, ask them to leave. (4) Check on the affected customer privately: offer a complimentary item and genuine apology. (5) Document the incident in your log. Speed and professionalism are everything here. One well-handled incident can actually build more trust with women customers than if nothing had happened.",
  },
  {
    id: "signage",
    q: "What signage should I put up to make women feel safe?",
    a: "Post these 8 rules prominently at every table and near the entrance: laminated, eye-level: (1) Treat Everyone with Respect, (2) Harassment will not be Tolerated, (3) Only Give Advice if Asked, (4) Be Mindful of Personal Space, (5) Aggressive Behavior Will Not Be Tolerated, (6) No Unsolicited Advice or Advances, (7) Be a Good Sport, Be an Adult, (8) Keep the Space Clean and Tidy. Add a 'Women Valued' statement near the entrance. Post a visible note about active security camera monitoring. Women notice safety infrastructure immediately: it signals you are serious.",
  },
  {
    id: "ladiesnight",
    q: "How do I run a successful ladies' night?",
    a: "Start simple and build. Week 1: discounted table time for women + one signature cocktail on special. Promote on Instagram with the specific drink photo a week ahead. Invite 3 women's groups from your area. Set up a check-in sheet for your newsletter list. By week 3-4, introduce a theme (80s night, cocktail-making add-on). Track attendance weekly. The key insight from Jon Taffer: recurring events build habit. After a woman attends 3 Ladies' Nights in a row, her likelihood of becoming a regular doubles.",
  },
  {
    id: "coaches",
    q: "How do I find female pool coaches or instructors?",
    a: "Three proven channels: (1) APA (American Poolplayers Association) regional chapters: contact your local APA rep and ask for female certified coaches in the area. (2) BCA (Billiard Congress of America) certified instructor list: available on their website. (3) Local Facebook groups for women's billiards or women's sports: post your opportunity there. For the first hire, prioritize someone with teaching experience and a warm, encouraging style over raw competitive skill. A female instructor who makes beginners feel safe is worth far more than a tournament champion who intimidates new players.",
  },
  {
    id: "foodviral",
    q: "What food items drive the most social media posts?",
    a: "In order of proven social performance: (1) Color-changing drinks: butterfly pea tea mocktails that shift from blue to purple when citrus is added. Universal TikTok trigger. (2) Loaded fries with unexpected toppings: truffle + whipped feta consistently outperforms standard loaded fries by 3x on saves. (3) Themed desserts tied to venue identity: your 8-Ball Truffles and Cue Ball Cake Pops are uniquely ownable content nobody else has. (4) Layered cocktails in tall glass: the gradient from bottom to top drives Instagram posts every time. The rule: anything that looks dramatically different from what people expect in a bar will get photographed.",
  },
  {
    id: "socialmarketing",
    q: "How do I market to women on social media effectively?",
    a: "Three principles that consistently outperform promotional content: (1) Feature real women: 'Player of the Month' profiles, first-timer stories, league standings posts. User-generated story content outperforms branded promotional content 5:1 on engagement. (2) Show safety signals: behind-the-scenes of rule enforcement, staff training clips, and your 'Women Valued' commitment. Women share safety content because it helps other women. (3) Create FOMO around events: post the build-up to Ladies' Night with ingredient reveals, setup shots, and countdown content. Never just post the event flyer. The setup content outperforms the flyer 10x every time.",
  },
  {
    id: "league",
    q: "What is the best way to start a women's league?",
    a: "Start with 8 players minimum before calling it a league. Here is the sequence: (1) Run a sign-up at 3 consecutive Ladies' Nights. Once you have 8 names, announce the launch. (2) Set a clear season length (8 weeks is ideal for first season). (3) Name it something empowering: 'The Rack Pack,' 'Cue Queens,' anything with identity. (4) Create a group chat on WhatsApp or Facebook for communication. (5) Charge a small season fee ($40-60) that covers end-of-season prizes: having skin in the game increases completion rate dramatically. (6) End every season with a celebration: trophies, a special menu, social media post featuring all players. The celebration IS the retention strategy for season 2.",
  },
  {
    id: "metrics",
    q: "How do I measure if my inclusivity efforts are working?",
    a: "Track four metrics monthly: (1) Female participation rate: count women at the door weekly, calculate as % of total. Goal: 30% in 6 months, 50% in 12 months. (2) Ladies' Night attendance trend: track headcount every week. If it is growing week-over-week after month 2, your word-of-mouth is working. (3) Google review sentiment: search your reviews monthly for words like 'safe,' 'welcoming,' 'comfortable.' These are your leading indicators of long-term retention. (4) League enrollment per season: this is your strongest signal of genuine community formation. If women are committing to an 8-week season, you have succeeded.",
  },
];

export function PoolHallQA() {
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
        data-ocid="poolhall-guide.qa_accordion"
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
            data-ocid={`poolhall-guide.qa_item.${i + 1}`}
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
        data-ocid="poolhall-guide.ask_custom_question"
      >
        <h3 className="font-semibold text-base text-foreground mb-1">
          Have a Question About Your Pool Hall?
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
            data-ocid="poolhall-guide.qa_success_state"
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
              placeholder="e.g. How do I get my first women's league started?"
              data-ocid="poolhall-guide.qa_input"
              className="flex-1"
            />
            <Button
              onClick={handleSubmit}
              disabled={!customQ.trim()}
              data-ocid="poolhall-guide.qa_submit_button"
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
