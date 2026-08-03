import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Cloud,
  Compass,
  GraduationCap,
  Hammer,
  MapPin,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

interface PainCard {
  title: string;
  body: string;
  to: string;
  icon: React.ElementType;
  cta: string;
}

const PAIN_CARDS: PainCard[] = [
  {
    title: "Pick the Right Tool for the Job",
    body: "Compare the software small businesses rely on for payments, scheduling, design, and team chat. Find the tool that fits your shop and your budget.",
    to: "/tool-guides",
    icon: Wrench,
    cta: "Browse Tool Guides",
  },
  {
    title: "Get Found by AI Search",
    body: "Over half of searches now end without a click. Walk through the six steps that make your business the one AI systems cite and recommend.",
    to: "/ai-search-prep",
    icon: Search,
    cta: "Open the AI Search Prep Guide",
  },
  {
    title: "Grow a Home Service Business",
    body: "Apply the AI Search Prep playbook to home service work. Pricing transparency, online booking, and a knowledge catalog built for your trade.",
    to: "/home-services",
    icon: Hammer,
    cta: "Read the Home Service Playbook",
  },
  {
    title: "Train Your Team on AI",
    body: "Short lessons, prompts, and practice tasks that build real confidence using AI in your shop. Start with the basics and work up to daily use.",
    to: "/learn",
    icon: GraduationCap,
    cta: "Start Learning",
  },
  {
    title: "Show Up on Social Media",
    body: "Build a content calendar, write posts, run ads, and reply to customers with AI help. A step by step plan to grow followers and sales.",
    to: "/social-media-guide",
    icon: Megaphone,
    cta: "Open the Social Media Guide",
  },
  {
    title: "Build a Brand People Remember",
    body: "Logo, voice, colors, and messaging. Use AI help to draft a brand kit your customers recognize and trust the moment they see it.",
    to: "/branding",
    icon: Palette,
    cta: "Read the Branding Guide",
  },
  {
    title: "Keep Your Website Online",
    body: "Check whether the websites and tools your business relies on are up or down. See clear status, impact, and next steps so you stay open.",
    to: "/cloud-monitoring",
    icon: Cloud,
    cta: "Check Website Health",
  },
  {
    title: "Find NYC Small Business Resources",
    body: "Permits, funding, training, and local help for New York City owners. Use AI help to apply for the right programs for your shop.",
    to: "/nyc-resources",
    icon: MapPin,
    cta: "Browse NYC Resources",
  },
  {
    title: "I want to teach my specialty online",
    body: "Turn what you know into online lessons people love. The connection you create and the confidence students feel afterward are what they pay for and what they tell their friends about.",
    to: "/online-schooling",
    icon: Users,
    cta: "Open the Online Schooling Guide",
  },
];

export default function StartHerePage() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="start-here.hero.section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Compass size={12} />
              Start Here
            </span>
            <h1 className="heading-hero text-foreground">
              <span className="text-gradient-vibrant">Start Here</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))]">
              You know your business needs help with AI, but you do not know
              where to begin. Pick the card that matches what you are feeling
              right now. Each one takes you straight to the guide that solves
              it.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINT CARD GRID */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="start-here.cards.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_CARDS.map((card, index) => (
              <div
                key={card.title}
                data-ocid={`start-here.cards.item.${index + 1}`}
                className="card-guide flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center shrink-0">
                    <card.icon
                      size={20}
                      className="text-[rgb(var(--accent-neutral))]"
                    />
                  </div>
                  <h2 className="heading-section text-xl text-foreground pt-1">
                    {card.title}
                  </h2>
                </div>
                <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed mb-6 flex-1">
                  {card.body}
                </p>
                <Link
                  to={card.to}
                  data-ocid={`start-here.cards.cta_button.${index + 1}`}
                  className="button-cta inline-flex items-center gap-2 self-start"
                >
                  {card.cta}
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="start-here.closing.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="card-guide text-center"
            data-ocid="start-here.closing.card"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center">
                <Sparkles
                  size={22}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
            </div>
            <h2 className="heading-section text-foreground mb-4">
              Still Not Sure Where to Begin?
            </h2>
            <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed mb-8">
              If you are unsure which guide to read first, start with the AI
              Search Prep guide. It is the foundation every other guide on this
              site builds on. Once your business is findable and cite worthy in
              AI search, the work in every other guide compounds faster.
            </p>
            <Link
              to="/ai-search-prep"
              data-ocid="start-here.closing.cta_button"
              className="button-cta inline-flex items-center gap-2"
            >
              <BookOpen size={15} />
              Read the AI Search Prep Guide
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
