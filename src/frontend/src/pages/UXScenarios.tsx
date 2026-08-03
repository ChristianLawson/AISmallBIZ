import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

type UserScenario = {
  initial: string;
  name: string;
  businessType: string;
  age: number;
  location: string;
  goal: string;
  challenge: string;
  action: string;
  result: string;
  resultHighlight: string;
  guides: { label: string; href: string; search?: { topic?: string } }[];
  keyFeature: string;
  color: string;
};

const SCENARIOS: UserScenario[] = [
  {
    initial: "M",
    name: "Maria",
    businessType: "Deli",
    age: 45,
    location: "Brooklyn, NY",
    goal: "More Google Maps visibility",
    challenge:
      "Maria's Brooklyn deli had loyal regulars but struggled to attract new customers searching nearby. Her Google Maps listing had not been updated in 8 months and was buried in local results.",
    action:
      "She followed the NYC Deli Guide's Google Maps section: updated photos, added weekly posts, and used the Q&A feature to answer common questions about her hours and menu.",
    result:
      "Within 3 weeks her listing views jumped and she started receiving calls from new customers who found her through Search and Maps.",
    resultHighlight: "40% more map views in 3 weeks",
    guides: [{ label: "NYC Deli Guide", href: "/deli-guide" }],
    keyFeature: "Google Maps section + Q&A",
    color: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    initial: "K",
    name: "Keisha",
    businessType: "Salon",
    age: 32,
    location: "Harlem, NY",
    goal: "Attract more regular clients",
    challenge:
      "Keisha's Harlem salon ran entirely on word-of-mouth. She knew she needed Instagram but had no content strategy, no consistent posting schedule, and no time to figure it out alone.",
    action:
      "She used the Salon Guide's social media section and followed the Quick Start 7-day plan: batching content on Sundays, using the 3-post formula, and engaging consistently in comments.",
    result:
      "Within 90 days her follower count had grown significantly, and she was booking new clients who found her through Instagram Reels.",
    resultHighlight: "60% Instagram growth in 90 days",
    guides: [{ label: "Salon Guide", href: "/salon-guide" }],
    keyFeature: "Social media 7-day Quick Start plan",
    color: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    initial: "C",
    name: "Carlos",
    businessType: "Restaurant",
    age: 55,
    location: "The Bronx, NY",
    goal: "Fix profitability",
    challenge:
      "Carlos had been running his Bronx restaurant for 12 years, but rising food costs and inconsistent portion control were quietly eating his margins. He knew something was wrong but could not pinpoint it.",
    action:
      "He applied Jon Taffer's accountability principles from the Business Rescue guide and cross-referenced the Restaurant Guide's financial section: implementing a food cost tracking system and tightening his ordering process.",
    result:
      "After 60 days of consistent tracking, he identified and eliminated waste that had been invisible for years, saving over $3,000 per month.",
    resultHighlight: "$3,000/month saved from food waste reduction",
    guides: [
      { label: "Restaurant Guide", href: "/restaurant-guide" },
      { label: "Business Rescue", href: "/taffer-advice" },
    ],
    keyFeature: "Jon Taffer financial accountability framework",
    color: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    initial: "A",
    name: "Amanda",
    businessType: "Retail",
    age: 38,
    location: "SoHo, NY",
    goal: "Cohesive branding & social media",
    challenge:
      "Amanda's SoHo boutique had a beautiful physical space but a disjointed online presence. Her Instagram looked like three different brands, and she had no clear brand story to tell.",
    action:
      "She worked through the Appreciated Branding framework to define her brand voice and values, then used the Retail Guide's content calendar template to plan 12 weeks of cohesive Instagram content.",
    result:
      "She launched a defined brand identity with consistent colors, fonts, and messaging: and had 12 weeks of content ready to post before she even published the first one.",
    resultHighlight: "Defined brand story, 12 weeks of content planned",
    guides: [
      { label: "Retail Guide", href: "/retail-guide" },
      { label: "Appreciated Branding", href: "/branding" },
    ],
    keyFeature: "Appreciated Branding framework + content calendar",
    color: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    initial: "L",
    name: "Lisa",
    businessType: "Beauty Services",
    age: 28,
    location: "Brooklyn, NY",
    goal: "Complete startup roadmap",
    challenge:
      "Lisa was launching a mobile beauty services business but felt completely overwhelmed by how many moving parts needed to come together: legal formation, branding, social media, and her first clients: all at once.",
    action:
      "She followed the Dashboard's Startup Launch Roadmap in sequence: Business Planning → Register Your Business (Online Services) → Build Your Brand (Branding) → Industry Guide → Marketing & Growth.",
    result:
      "Six weeks later she had her LLC formed, a branded Instagram with 200 followers, a Google Maps listing live, and her first 10 paying clients booked.",
    resultHighlight:
      "Launched in 6 weeks with Google Maps, branding, and first 10 clients",
    guides: [
      {
        label: "Business Planning",
        href: "/guides",
        search: { topic: "businessPlanning" },
      },
      {
        label: "Online Services",
        href: "/online-services-guide",
        search: undefined,
      },
      { label: "Appreciated Branding", href: "/branding", search: undefined },
      {
        label: "Social Ads Guide",
        href: "/guides",
        search: { topic: "socialAds" },
      },
    ],
    keyFeature: "Startup Launch Roadmap (all 5 steps)",
    color: "bg-[#6366F1]/12 text-[#6366F1]",
  },
];

function ScenarioCard({
  scenario,
  index,
}: {
  scenario: UserScenario;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      data-ocid={`ux_scenarios.card.${index + 1}`}
      className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card hover:shadow-elevated transition-smooth"
    >
      {/* Card header */}
      <div className="bg-gradient-warm px-6 pt-6 pb-5">
        <div className="flex items-start gap-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-xl shrink-0 ${
              scenario.color
            } border border-current/20`}
          >
            {scenario.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-bold text-lg text-foreground">
                {scenario.name}
              </h3>
              <span className="text-xs font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                {scenario.businessType}
              </span>
              <span className="text-xs text-muted-foreground">
                Age {scenario.age}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              📍 {scenario.location}
            </p>
            <p className="text-sm font-medium text-primary mt-1">
              Goal: {scenario.goal}
            </p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="px-6 py-5 space-y-4">
        {/* Challenge */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
            The Challenge
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {scenario.challenge}
          </p>
        </div>

        {/* Action */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
            What {scenario.name === "Carlos" ? "He" : "She"} Did
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {scenario.action}
          </p>
        </div>

        {/* Result */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
            The Result
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {scenario.result}
          </p>
        </div>

        {/* Result highlight */}
        <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-success/10 border border-success/25">
          <TrendingUp size={16} className="text-success shrink-0" />
          <p className="text-sm font-bold text-success">
            {scenario.resultHighlight}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 border-t border-border/40 pt-4">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">
              Guides Used
            </p>
            <div className="flex flex-wrap gap-2">
              {scenario.guides.map((g) => (
                <Link
                  key={g.label}
                  to={g.href as string}
                  {...(g.search
                    ? {
                        search: {
                          topic: g.search.topic,
                          businessType: undefined,
                          keyword: undefined,
                        },
                      }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 hover:bg-primary/16 transition-colors duration-200"
                  data-ocid={`ux_scenarios.card.${index + 1}.guide_link`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-primary shrink-0" />
            <p className="text-xs text-muted-foreground">
              Key Feature:{" "}
              <span className="font-medium text-foreground">
                {scenario.keyFeature}
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function UXScenarios() {
  const { login, loginStatus } = useAuth();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-4">
              Real Stories
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4 heading-display">
              How Real Business Owners Use{" "}
              <span className="text-gradient-primary">AISmallBiz™</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We designed every feature of AISmallBiz™ around the real
              challenges of business owners like Maria, Keisha, Carlos, Amanda,
              and Lisa. Here are their stories: and how AISmallBiz™ helps them
              get results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
            data-ocid="ux_scenarios.list"
          >
            {SCENARIOS.map((scenario, index) => (
              <ScenarioCard
                key={scenario.name}
                scenario={scenario}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-premium border-t border-primary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Your Story Starts Here
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Every business owner above started exactly where you are now. Pick
              a guide that matches your challenge and take your first step
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2"
                data-ocid="ux_scenarios.find_guide_button"
              >
                <Link
                  to="/guides"
                  search={{
                    topic: undefined,
                    businessType: undefined,
                    keyword: undefined,
                  }}
                >
                  Find My Guide
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => login()}
                disabled={loginStatus === "logging-in"}
                data-ocid="ux_scenarios.login_button"
              >
                Login for Personalized Advice
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
