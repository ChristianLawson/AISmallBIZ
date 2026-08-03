/**
 * SEO route metadata for AISmallBiz (TM).
 *
 * Every public route has a unique title and a unique description of 140 to 160
 * characters. Titles and descriptions use colons instead of em dashes or en
 * dashes and never use contractions. Each description includes the primary
 * search phrase a small business owner would type.
 *
 * The homepage title and Open Graph title both read
 * "AISmallBiz: Free AI Help for Small Businesses".
 */

export interface RouteMeta {
  /** Title tag text. Unique per route. Uses a colon, never em dashes. */
  title: string;
  /** Meta description. 140 to 160 characters. Unique per route. */
  description: string;
  /** Open Graph title. Unique per route. */
  ogTitle: string;
  /** Open Graph description. 140 to 160 characters. */
  ogDescription: string;
  /** Open Graph type, such as "website" or "article". */
  ogType: string;
  /**
   * JSON-LD structured data. A single object for most routes, an array of
   * objects for routes that emit multiple schemas (such as /ai-search-prep),
   * or null when no schema applies.
   */
  jsonLd: Record<string, unknown> | Record<string, unknown>[] | null;
  /** Canonical route path, such as "/" or "/bakery-guide". */
  path: string;
}

const SITE_URL = "https://www.aismallbiz.org";
const SOCIAL_CARD =
  "https://www.aismallbiz.org/assets/generated/social-card.png";
const LOGO_URL = "https://www.aismallbiz.org/assets/generated/social-card.png";

/** Routes that should emit HowTo or Article structured data. */
const GUIDE_PATHS = new Set<string>([
  "/branding",
  "/hiring",
  "/ai-training",
  "/ai-search-prep",
  "/social-media-guide",
  "/start-your-business",
  "/online-services-guide",
  "/taffer-advice",
  "/deli-guide",
  "/retail-guide",
  "/restaurant-guide",
  "/salon-guide",
  "/pool-hall-guide",
  "/pizza-shop-guide",
  "/fitness-studio-guide",
  "/bakery-guide",
  "/cleaning-service",
  "/boutique-guide",
  "/tool-guides/quickbooks",
  "/tool-guides/paypal",
  "/tool-guides/hubspot",
  "/tool-guides/canva",
  "/tool-guides/docusign",
  "/tool-guides/google-workspace",
  "/tool-guides/microsoft-365",
  "/tool-guides/slack",
  "/tool-guides/square",
  "/tool-guides/stripe",
  "/ai-job-guides",
  "/ai-job-guides/plumbers",
  "/ai-job-guides/restaurants",
  "/ai-job-guides/accountants",
  "/ai-job-guides/dentists",
  "/ai-job-guides/real-estate",
  "/ai-job-guides/contractors",
  "/ai-job-guides/law-firms",
  "/ai-job-guides/insurance-agents",
  "/learn",
  "/online-schooling",
]);

function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AISmallBiz",
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Free AI help for small businesses: guides, workflows, and tools for Google Maps, social media, hiring, and daily operations.",
    sameAs: [SITE_URL],
  };
}

/**
 * The six steps of the AI Search Prep guide, used for the HowTo schema on the
 * /ai-search-prep route. Step names avoid em dashes, en dashes, and
 * contractions.
 */
const AI_SEARCH_PREP_STEPS: string[] = [
  "Step 1 Publish Pricing Content",
  "Step 2 Make Your Business Bookable Online",
  "Step 3 Turn Real Customer Questions Into Content",
  "Step 4 Build Your Knowledge Catalog",
  "Step 5 Label Your Content So Machines Can Read It",
  "Step 6 Get Verified and Crawlable",
];

function buildHowToJsonLd(
  meta: RouteMeta,
  steps?: string[],
): Record<string, unknown> {
  const howTo: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: meta.title,
    description: meta.description,
    url: `${SITE_URL}${meta.path}`,
    image: SOCIAL_CARD,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };
  if (steps && steps.length > 0) {
    howTo.step = steps.map((name, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      url: `${SITE_URL}${meta.path}#step-${index + 1}`,
    }));
  }
  return howTo;
}

/**
 * Build a FAQPage JSON-LD object from an array of question and answer pairs.
 * Each pair becomes a Question with an acceptedAnswer Answer.
 */
export function buildFaqPageJsonLd(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Build an Article JSON-LD object from a route meta. Uses the current build
 * date for datePublished and dateUpdated, and the canonical URL for
 * mainEntityOfPage.
 */
export function buildArticleJsonLd(meta: RouteMeta): Record<string, unknown> {
  const canonical = `${SITE_URL}${meta.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: { "@type": "Organization", name: "AISmallBiz" },
    publisher: { "@type": "Organization", name: "AISmallBiz" },
    datePublished: "2026-07-13",
    dateUpdated: "2026-07-13",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };
}

/**
 * The nine FAQ question and answer pairs for the /ai-search-prep route. The
 * answers are verbatim from the spec and avoid contractions, em dashes, and en
 * dashes. Used by buildFaqPageJsonLd to emit FAQPage schema.
 */
export const AI_SEARCH_PREP_FAQ: { question: string; answer: string }[] = [
  {
    question: "Do I have to publish my exact prices?",
    answer:
      "No. Publish honest ranges and what drives the price up or down. AI systems need a reference point, not your price book. A range with context beats silence every time, and silence hands the citation to a competitor.",
  },
  {
    question: "Will this replace my regular SEO work?",
    answer:
      "It builds on it. The technical foundations overlap: crawlable pages, verified domains, sitemaps, and clear service pages all still matter. What changes is the content strategy: specific answers to real questions instead of keyword-stuffed articles, and a machine-readable layer on top.",
  },
  {
    question: "I am a very small business. Does this really apply to me?",
    answer:
      "It applies most to you. Large companies have agencies handling this. Right now most small businesses have not started, which means early movers get cited as the local authority before the space gets crowded. AI assistants cite the clearest public answers, not the biggest advertising budgets, and a two-person shop that publishes honest pricing can outrank a franchise that publishes nothing.",
  },
  {
    question: "How long before this matters?",
    answer:
      "It already does. Over half of searches end without a click today, and AI assistants answer commercial questions millions of times a day. The agent-booking layer arrives over the next one to two years. The content and catalog work you do now compounds the entire way.",
  },
  {
    question: "What is schema markup going to cost me?",
    answer:
      "Usually nothing but a sentence. If a web person manages your site, the request in Step 5 is a small task for them. If you use a modern website builder, the feature is typically built in and free. Verify with the free Rich Results Test either way.",
  },
  {
    question:
      "I published my pricing guide a month ago and AI assistants still do not mention my business. Did it fail?",
    answer:
      "No. Discovery takes time, and different assistants update at different speeds. Keep publishing weekly answers, confirm the technical checks in Step 6 pass, and check again monthly. Consistency over months wins this, not any single page.",
  },
  {
    question: "How often should I update what I have already published?",
    answer:
      "Touch every important page at least twice a year, and immediately when prices or services change. Freshness is a trust signal, and a one-line dated note such as 'Reviewed January 2026, prices current' costs nothing.",
  },
  {
    question: "Do I need to pay an agency $1,500 to $2,000 a month for this?",
    answer:
      "No. Everything in this guide can be done yourself for free. The main investment is consistency: publishing real answers regularly, keeping your information complete and current, and spending fifteen minutes a month checking whether the machines mention you. If your business later grows to the size agencies serve, you will hire one from a position of knowledge instead of fear.",
  },
  {
    question: "What is the single fastest thing I can do today?",
    answer:
      "Verify your domain in Google Search Console and submit your sitemap. Under an hour, free, and it makes everything else you publish discoverable.",
  },
];

/**
 * The FAQ question and answer pairs for the /online-schooling route. The
 * answers follow the site rules: no contractions, no em dashes, no en dashes.
 * Used by buildFaqPageJsonLd to emit FAQPage schema.
 */
export const ONLINE_SCHOOLING_FAQ: { question: string; answer: string }[] = [
  {
    question: "Do I need to be a trained teacher to teach my specialty online?",
    answer:
      "No. You need to know your specialty and care about the people you teach. Customers pay for the connection you create and the confidence they feel afterward, not for a teaching certificate. A clear plan, honest answers, and steady practice are what make lessons land.",
  },
  {
    question: "What equipment do I need to start teaching online?",
    answer:
      "A device with a working camera and microphone, a quiet space, and a stable internet connection. You can begin with what you already own and upgrade as you go. Good lighting and clear audio matter more than expensive gear, and both can be improved for free.",
  },
  {
    question: "How do I price online lessons in my specialty?",
    answer:
      "Start with honest ranges and explain what moves the price up or down. Group sessions, one to one coaching, and short workshops can each carry a different rate. Publish your ranges openly so students can decide, and so AI search systems can cite you as the clear local answer.",
  },
  {
    question: "Which platform should I use to deliver my lessons?",
    answer:
      "Pick the one your students already use. Video calls, simple booking pages, and a place to share notes are enough to begin. The platform matters less than the experience you create, and you can move to a better tool once you know what your students actually need.",
  },
  {
    question: "How do I find students for my online specialty lessons?",
    answer:
      "Publish real answers to the questions your students ask, share honest pricing, and make it easy to book. Ask happy students for reviews and referrals. The connection you build in each lesson is what brings people back and what they tell their friends about.",
  },
  {
    question: "What makes students stay with me instead of a bigger course?",
    answer:
      "The way you make them feel. A big course can hand out information, but only you can hand someone confidence. When a student finishes a lesson feeling seen, capable, and a little braver, that is the moment they choose you again and tell someone else to do the same.",
  },
  {
    question: "How often should I update my online teaching content?",
    answer:
      "Review your important pages at least twice a year, and right away when your prices, schedule, or services change. A short dated note such as 'Reviewed July 2026, prices current' costs nothing and tells students and search systems that your information is trustworthy.",
  },
  {
    question: "Can I teach my specialty online if my work is hands on?",
    answer:
      "Yes. Many hands on specialties teach beautifully online through demos, guided practice, and follow along sessions. You do not have to replace the in person experience. You extend it, reach more people, and give students a way to start before they ever meet you in person.",
  },
  {
    question: "What is the single fastest thing I can do today to start?",
    answer:
      "Write down the three questions your students ask most often and publish clear answers on a single page. Under an hour, free, and it gives AI search systems a real reason to send people to you instead of a generic course.",
  },
];

function buildJsonLdFor(
  path: string,
  meta: RouteMeta,
): Record<string, unknown> | Record<string, unknown>[] | null {
  if (path === "/") return buildOrganizationJsonLd();
  if (path === "/ai-search-prep") {
    return [
      buildHowToJsonLd(meta, AI_SEARCH_PREP_STEPS),
      buildArticleJsonLd(meta),
      buildFaqPageJsonLd(AI_SEARCH_PREP_FAQ),
    ];
  }
  if (path === "/online-schooling") {
    return [buildArticleJsonLd(meta), buildFaqPageJsonLd(ONLINE_SCHOOLING_FAQ)];
  }
  if (GUIDE_PATHS.has(path)) return buildHowToJsonLd(meta);
  return null;
}

interface RouteSeed {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
}

const ROUTE_SEEDS: RouteSeed[] = [
  {
    path: "/",
    title: "AISmallBiz: Free AI Help for Small Businesses",
    description:
      "Free AI help for small businesses: practical guides, workflows, and tools for Google Maps, social media, hiring, and daily operations. Start today.",
    ogTitle: "AISmallBiz: Free AI Help for Small Businesses",
    ogDescription:
      "Free AI help for small businesses: practical guides, workflows, and tools for Google Maps, social media, hiring, and daily operations.",
    ogType: "website",
  },
  {
    path: "/guides",
    title: "AISmallBiz: AI Guides for Small Business Owners",
    description:
      "Browse AI guides for small business owners: Google Maps, social media, hiring, branding, and tool tutorials. Find the right guide for your business today.",
    ogTitle: "AISmallBiz: AI Guides for Small Business Owners",
    ogDescription:
      "Browse AI guides for small business owners: Google Maps, social media, hiring, branding, and tool tutorials for every kind of shop.",
    ogType: "website",
  },
  {
    path: "/start-here",
    title: "AISmallBiz: Start Here",
    description:
      "Pick your biggest business problem and get the free guide that solves it. Software costs, AI search, hiring, social media, branding, and more. All free, no logins.",
    ogTitle: "Start Here | AISmallBiz",
    ogDescription:
      "Pick your biggest problem. Get the free guide that solves it. No logins, no fees, no catch.",
    ogType: "website",
  },
  {
    path: "/guides/$id",
    title: "AISmallBiz: AI Guide Details for Small Businesses",
    description:
      "Read a detailed AI guide for small businesses with step by step actions, examples, and prompts you can copy. Apply AI help to your business right now.",
    ogTitle: "AISmallBiz: AI Guide Details for Small Businesses",
    ogDescription:
      "Read a detailed AI guide for small businesses with step by step actions, examples, and prompts you can copy and apply today.",
    ogType: "article",
  },
  {
    path: "/workflows/$slug",
    title: "AISmallBiz: AI Workflows for Small Businesses",
    description:
      "Follow a ready made AI workflow for small businesses: prompts, steps, and checklists for marketing, operations, and customer service. Run it in minutes.",
    ogTitle: "AISmallBiz: AI Workflows for Small Businesses",
    ogDescription:
      "Follow a ready made AI workflow for small businesses: prompts, steps, and checklists for marketing, operations, and customer service.",
    ogType: "article",
  },
  {
    path: "/dashboard",
    title: "AISmallBiz: Your Small Business AI Dashboard",
    description:
      "Open your small business AI dashboard: saved guides, in progress workflows, and recommended next steps. Track your AI progress in one place.",
    ogTitle: "AISmallBiz: Your Small Business AI Dashboard",
    ogDescription:
      "Open your small business AI dashboard: saved guides, in progress workflows, and recommended next steps in one place.",
    ogType: "website",
  },
  {
    path: "/onboarding",
    title: "AISmallBiz: Onboarding for Small Business Owners",
    description:
      "Get started with AISmallBiz in minutes: answer a few questions about your small business and receive a personalized AI plan, guides, and workflows.",
    ogTitle: "AISmallBiz: Onboarding for Small Business Owners",
    ogDescription:
      "Get started with AISmallBiz in minutes: answer a few questions and receive a personalized AI plan, guides, and workflows.",
    ogType: "website",
  },
  {
    path: "/admin",
    title: "AISmallBiz: Admin Panel for Site Managers",
    description:
      "Manage AISmallBiz content, guides, and chat configuration from the admin panel. Review submissions, update prompts, and keep the site fresh.",
    ogTitle: "AISmallBiz: Admin Panel for Site Managers",
    ogDescription:
      "Manage AISmallBiz content, guides, and chat configuration from the admin panel for site managers.",
    ogType: "website",
  },
  {
    path: "/contribute",
    title: "AISmallBiz: Contribute AI Guides for Small Businesses",
    description:
      "Contribute your own AI guide, workflow, or tip for small business owners. Share what worked for your shop and help other owners grow with AI help.",
    ogTitle: "AISmallBiz: Contribute AI Guides for Small Businesses",
    ogDescription:
      "Contribute your own AI guide, workflow, or tip for small business owners and help other shops grow with AI help.",
    ogType: "website",
  },
  {
    path: "/faq",
    title: "AISmallBiz: FAQ for Small Business AI Help",
    description:
      "Read answers to common questions about AI help for small businesses: what it costs, how it works, privacy, and which guides to start with today.",
    ogTitle: "AISmallBiz: FAQ for Small Business AI Help",
    ogDescription:
      "Read answers to common questions about AI help for small businesses: cost, how it works, privacy, and which guides to start with.",
    ogType: "website",
  },
  {
    path: "/taffer-advice",
    title: "AISmallBiz: Bar and Restaurant Advice from Jon Taffer",
    description:
      "Apply Jon Taffer style advice to your bar or restaurant: turnaround tips, menu engineering, and service fixes. Use AI help to act on each step today.",
    ogTitle: "AISmallBiz: Bar and Restaurant Advice from Jon Taffer",
    ogDescription:
      "Apply Jon Taffer style advice to your bar or restaurant: turnaround tips, menu engineering, and service fixes with AI help.",
    ogType: "article",
  },
  {
    path: "/branding",
    title: "AISmallBiz: Branding Guide for Small Businesses",
    description:
      "Build a strong brand for your small business: logo, voice, colors, and messaging. Use AI help to draft a brand kit customers remember and trust.",
    ogTitle: "AISmallBiz: Branding Guide for Small Businesses",
    ogDescription:
      "Build a strong brand for your small business: logo, voice, colors, and messaging with AI help to draft a brand kit.",
    ogType: "article",
  },
  {
    path: "/ask-a-question",
    title: "AISmallBiz: Ask a Small Business Question",
    description:
      "Ask any small business question and get a clear answer with next steps. Free AI help for owners, no signup required. Submissions reviewed weekly.",
    ogTitle: "AISmallBiz: Ask a Small Business Question",
    ogDescription:
      "Ask any small business question and get a clear answer with next steps. Free AI help for owners, no signup required.",
    ogType: "website",
  },
  {
    path: "/deli-guide",
    title: "AISmallBiz: NYC Deli Guide with AI Help",
    description:
      "Run a better NYC deli with AI help: menu pricing, Google Maps listings, inventory, and customer loyalty. Step by step actions for deli owners today.",
    ogTitle: "AISmallBiz: NYC Deli Guide with AI Help",
    ogDescription:
      "Run a better NYC deli with AI help: menu pricing, Google Maps listings, inventory, and customer loyalty for deli owners.",
    ogType: "article",
  },
  {
    path: "/retail-guide",
    title: "AISmallBiz: NYC Retail Guide with AI Help",
    description:
      "Grow your NYC retail shop with AI help: foot traffic, Google Maps, inventory, and seasonal promotions. Practical steps for retail owners right now.",
    ogTitle: "AISmallBiz: NYC Retail Guide with AI Help",
    ogDescription:
      "Grow your NYC retail shop with AI help: foot traffic, Google Maps, inventory, and seasonal promotions for retail owners.",
    ogType: "article",
  },
  {
    path: "/restaurant-guide",
    title: "AISmallBiz: NYC Restaurant Guide with AI Help",
    description:
      "Run a thriving NYC restaurant with AI help: reservations, reviews, menu engineering, and staff scheduling. Step by step actions for restaurant owners.",
    ogTitle: "AISmallBiz: NYC Restaurant Guide with AI Help",
    ogDescription:
      "Run a thriving NYC restaurant with AI help: reservations, reviews, menu engineering, and staff scheduling for owners.",
    ogType: "article",
  },
  {
    path: "/online-services-guide",
    title: "AISmallBiz: Online Services Guide for Small Business",
    description:
      "Offer online services for your small business: booking, payments, delivery, and support. Use AI help to set up each channel and reach more customers.",
    ogTitle: "AISmallBiz: Online Services Guide for Small Business",
    ogDescription:
      "Offer online services for your small business: booking, payments, delivery, and support with AI help to reach more customers.",
    ogType: "article",
  },
  {
    path: "/salon-guide",
    title: "AISmallBiz: NYC Salon Guide with AI Help",
    description:
      "Fill more chairs at your NYC salon with AI help: online booking, Google Maps, reviews, and rebooking campaigns. Step by step actions for salon owners.",
    ogTitle: "AISmallBiz: NYC Salon Guide with AI Help",
    ogDescription:
      "Fill more chairs at your NYC salon with AI help: online booking, Google Maps, reviews, and rebooking campaigns for owners.",
    ogType: "article",
  },
  {
    path: "/pool-hall-guide",
    title: "AISmallBiz: Pool Hall Guide with AI Help",
    description:
      "Run a busy pool hall with AI help: leagues, events, Google Maps, and promotions. Practical steps to grow league nights and weekend traffic today.",
    ogTitle: "AISmallBiz: Pool Hall Guide with AI Help",
    ogDescription:
      "Run a busy pool hall with AI help: leagues, events, Google Maps, and promotions to grow league nights and weekend traffic.",
    ogType: "article",
  },
  {
    path: "/pizza-shop-guide",
    title: "AISmallBiz: Pizza Shop Guide with AI Help",
    description:
      "Grow your pizza shop with AI help: delivery, Google Maps, upsells, and loyalty. Step by step actions to increase orders and repeat customers today.",
    ogTitle: "AISmallBiz: Pizza Shop Guide with AI Help",
    ogDescription:
      "Grow your pizza shop with AI help: delivery, Google Maps, upsells, and loyalty to increase orders and repeat customers.",
    ogType: "article",
  },
  {
    path: "/fitness-studio-guide",
    title: "AISmallBiz: Fitness Studio Guide with AI Help",
    description:
      "Fill more classes at your fitness studio with AI help: scheduling, trials, Google Maps, and member retention. Step by step actions for studio owners.",
    ogTitle: "AISmallBiz: Fitness Studio Guide with AI Help",
    ogDescription:
      "Fill more classes at your fitness studio with AI help: scheduling, trials, Google Maps, and member retention for owners.",
    ogType: "article",
  },
  {
    path: "/bakery-guide",
    title: "AISmallBiz: Bakery Guide with AI Help",
    description:
      "Run a profitable bakery with AI help: preorders, Google Maps, custom cakes, and wholesale. Step by step actions to grow bakery sales starting today.",
    ogTitle: "AISmallBiz: Bakery Guide with AI Help",
    ogDescription:
      "Run a profitable bakery with AI help: preorders, Google Maps, custom cakes, and wholesale to grow bakery sales.",
    ogType: "article",
  },
  {
    path: "/cleaning-service",
    title: "AISmallBiz: Cleaning Service Guide with AI Help",
    description:
      "Grow your cleaning service with AI help: scheduling, quotes, Google Maps, and reviews. Step by step actions to win more recurring clients today.",
    ogTitle: "AISmallBiz: Cleaning Service Guide with AI Help",
    ogDescription:
      "Grow your cleaning service with AI help: scheduling, quotes, Google Maps, and reviews to win more recurring clients.",
    ogType: "article",
  },
  {
    path: "/boutique-guide",
    title: "AISmallBiz: Boutique Guide with Google Maps for Boutiques",
    description:
      "Use Google Maps for boutiques and AI help to attract shoppers: listings, photos, posts, and reviews. Step by step actions for boutique owners today.",
    ogTitle: "AISmallBiz: Boutique Guide with Google Maps for Boutiques",
    ogDescription:
      "Use Google Maps for boutiques and AI help to attract shoppers: listings, photos, posts, and reviews for boutique owners.",
    ogType: "article",
  },
  {
    path: "/start-your-business",
    title: "AISmallBiz: Start Your Business Guide with AI Help",
    description:
      "Start your business with AI help: name, plan, licenses, banking, and launch. Step by step actions to open your doors and land your first customers.",
    ogTitle: "AISmallBiz: Start Your Business Guide with AI Help",
    ogDescription:
      "Start your business with AI help: name, plan, licenses, banking, and launch to open your doors and land first customers.",
    ogType: "article",
  },
  {
    path: "/ux-scenarios",
    title: "AISmallBiz: Small Business UX Scenarios and Examples",
    description:
      "Explore small business UX scenarios with AI help: real examples for shops, salons, and restaurants. See how owners use AI to fix everyday problems.",
    ogTitle: "AISmallBiz: Small Business UX Scenarios and Examples",
    ogDescription:
      "Explore small business UX scenarios with AI help: real examples for shops, salons, and restaurants solving everyday problems.",
    ogType: "website",
  },
  {
    path: "/personas",
    title: "AISmallBiz: Small Business Owner Personas",
    description:
      "Meet small business owner personas and see how AISmallBiz helps each one: deli, salon, boutique, and more. Find the AI help that fits your shop.",
    ogTitle: "AISmallBiz: Small Business Owner Personas",
    ogDescription:
      "Meet small business owner personas and see how AISmallBiz helps each one: deli, salon, boutique, and more.",
    ogType: "website",
  },
  {
    path: "/about",
    title: "AISmallBiz: About Free AI Help for Small Businesses",
    description:
      "Learn about AISmallBiz: free AI help for small businesses, built by owners for owners. Read our mission, team, and promise to keep tools free.",
    ogTitle: "AISmallBiz: About Free AI Help for Small Businesses",
    ogDescription:
      "Learn about AISmallBiz: free AI help for small businesses, built by owners for owners, with a promise to keep tools free.",
    ogType: "website",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy: How AISmallBiz Uses Your Data | AISmallBiz",
    description:
      "Read the AISmallBiz Privacy Policy: what information we collect, how we use your questions, how we store data, and why we never sell your data.",
    ogTitle: "Privacy Policy: How AISmallBiz Uses Your Data | AISmallBiz",
    ogDescription:
      "Read the AISmallBiz Privacy Policy: what information we collect, how we use your questions, and why we never sell your data to anyone.",
    ogType: "website",
  },
  {
    path: "/terms",
    title: "AISmallBiz: Terms of Use",
    description:
      "Read the AISmallBiz Terms of Use: the rules for using this free small business AI resource site, accounts, third party tools, and liability limits.",
    ogTitle: "AISmallBiz: Terms of Use",
    ogDescription:
      "Read the AISmallBiz Terms of Use: the rules for using this free small business AI resource site, accounts, and third party tools.",
    ogType: "website",
  },
  {
    path: "/social-media-guide",
    title: "AISmallBiz: Social Media Guide for Small Business",
    description:
      "Master social media for small business with AI help: content calendar, posts, ads, and replies. Step by step actions to grow followers and sales.",
    ogTitle: "AISmallBiz: Social Media Guide for Small Business",
    ogDescription:
      "Master social media for small business with AI help: content calendar, posts, ads, and replies to grow followers and sales.",
    ogType: "article",
  },
  {
    path: "/ai-training",
    title: "AISmallBiz: AI Training for Small Business Owners",
    description:
      "Get AI training for small business owners: short lessons, prompts, and practice tasks. Build confidence using AI help in your shop starting today.",
    ogTitle: "AISmallBiz: AI Training for Small Business Owners",
    ogDescription:
      "Get AI training for small business owners: short lessons, prompts, and practice tasks to build confidence using AI help.",
    ogType: "article",
  },
  {
    path: "/ai-search-prep",
    title: "AISmallBiz: How to Prepare Your Small Business for AI Search",
    description:
      "Over half of searches now end without a click. The complete 6-step guide to getting your small business found, cited, and booked by AI search and AI agents. Free guide, free checklist, no agency required.",
    ogTitle: "How to Prepare Your Small Business for AI Search",
    ogDescription:
      "The complete free 6-step guide to getting found, cited, and booked in the age of AI search and AI agents. Includes a printable 31-point readiness checklist.",
    ogType: "article",
  },
  {
    path: "/online-schooling",
    title: "AISmallBiz: Teach Your Specialty Online",
    description:
      "Teach your specialty online and turn what you know into lessons people love. A practical guide to pricing, platforms, and the connection students come back for.",
    ogTitle: "Teach Your Specialty Online",
    ogDescription:
      "Turn what you know into online lessons people love. A free practical guide to pricing, platforms, and the connection that keeps students coming back.",
    ogType: "article",
  },
  {
    path: "/hiring",
    title: "AISmallBiz: Hiring Guide for Small Business Owners",
    description:
      "Use this hiring guide for small business owners: job posts, interviews, offers, and onboarding. AI help to hire the right people for your shop.",
    ogTitle: "AISmallBiz: Hiring Guide for Small Business Owners",
    ogDescription:
      "Use this hiring guide for small business owners: job posts, interviews, offers, and onboarding with AI help to hire right.",
    ogType: "article",
  },
  {
    path: "/nyc-resources",
    title: "AISmallBiz: NYC Resources for Small Business Owners",
    description:
      "Find NYC resources for small business owners: permits, funding, training, and local help. Use AI help to apply for the right programs for your shop.",
    ogTitle: "AISmallBiz: NYC Resources for Small Business Owners",
    ogDescription:
      "Find NYC resources for small business owners: permits, funding, training, and local help with AI help to apply.",
    ogType: "website",
  },
  {
    path: "/cloud-outage-tracker",
    title: "AISmallBiz: Website Health for Small Business",
    description:
      "Check if the websites and tools your small business relies on are up or down. See clear status, impact, and next steps so you can stay open and keep selling.",
    ogTitle: "AISmallBiz: Website Health for Small Business",
    ogDescription:
      "Check if the websites and tools your small business relies on are up or down. See clear status and next steps to stay open.",
    ogType: "website",
  },
  {
    path: "/cloud-monitoring",
    title: "AISmallBiz: Website Health for Small Business",
    description:
      "Check if the websites and tools your small business relies on are up or down. See clear status, impact, and next steps so you can stay open and keep selling.",
    ogTitle: "AISmallBiz: Website Health for Small Business",
    ogDescription:
      "Check if the websites and tools your small business relies on are up or down. See clear status and next steps to stay open.",
    ogType: "website",
  },
  {
    path: "/tool-guides/quickbooks",
    title: "AISmallBiz: QuickBooks Guide for Small Business",
    description:
      "Use QuickBooks for your small business with AI help: setup, invoicing, expenses, and reports. Step by step actions to keep clean books starting today.",
    ogTitle: "AISmallBiz: QuickBooks Guide for Small Business",
    ogDescription:
      "Use QuickBooks for your small business with AI help: setup, invoicing, expenses, and reports to keep clean books.",
    ogType: "article",
  },
  {
    path: "/tool-guides/paypal",
    title: "AISmallBiz: PayPal Guide for Small Business",
    description:
      "Accept payments with PayPal for your small business with AI help: setup, invoicing, refunds, and fees. Step by step actions to get paid faster today.",
    ogTitle: "AISmallBiz: PayPal Guide for Small Business",
    ogDescription:
      "Accept payments with PayPal for your small business with AI help: setup, invoicing, refunds, and fees to get paid faster.",
    ogType: "article",
  },
  {
    path: "/tool-guides/hubspot",
    title: "AISmallBiz: HubSpot Guide for Small Business",
    description:
      "Use HubSpot for your small business with AI help: contacts, deals, email, and service. Step by step actions to organize customers and close more sales.",
    ogTitle: "AISmallBiz: HubSpot Guide for Small Business",
    ogDescription:
      "Use HubSpot for your small business with AI help: contacts, deals, email, and service to organize customers and close sales.",
    ogType: "article",
  },
  {
    path: "/tool-guides/canva",
    title: "AISmallBiz: Canva Guide for Small Business",
    description:
      "Design marketing with Canva for your small business with AI help: posts, flyers, menus, and logos. Step by step actions to look pro without a designer.",
    ogTitle: "AISmallBiz: Canva Guide for Small Business",
    ogDescription:
      "Design marketing with Canva for your small business with AI help: posts, flyers, menus, and logos to look pro.",
    ogType: "article",
  },
  {
    path: "/tool-guides/docusign",
    title: "AISmallBiz: DocuSign Guide for Small Business",
    description:
      "Send contracts with DocuSign for your small business with AI help: templates, signing, and storage. Step by step actions to close deals faster today.",
    ogTitle: "AISmallBiz: DocuSign Guide for Small Business",
    ogDescription:
      "Send contracts with DocuSign for your small business with AI help: templates, signing, and storage to close deals faster.",
    ogType: "article",
  },
  {
    path: "/tool-guides/google-workspace",
    title: "AISmallBiz: Google Workspace Guide for Small Business",
    description:
      "Set up Google Workspace for your small business with AI help: email, calendar, drive, and docs. Step by step actions to get your team working online.",
    ogTitle: "AISmallBiz: Google Workspace Guide for Small Business",
    ogDescription:
      "Set up Google Workspace for your small business with AI help: email, calendar, drive, and docs to get your team online.",
    ogType: "article",
  },
  {
    path: "/tool-guides/microsoft-365",
    title: "AISmallBiz: Microsoft 365 Guide for Small Business",
    description:
      "Set up Microsoft 365 for your small business with AI help: email, teams, files, and security. Step by step actions to get your staff productive today.",
    ogTitle: "AISmallBiz: Microsoft 365 Guide for Small Business",
    ogDescription:
      "Set up Microsoft 365 for your small business with AI help: email, teams, files, and security to get staff productive.",
    ogType: "article",
  },
  {
    path: "/tool-guides/slack",
    title: "AISmallBiz: Slack Guide for Small Business Teams",
    description:
      "Use Slack for your small business team with AI help: channels, messages, and integrations. Step by step actions to keep your staff in sync starting today.",
    ogTitle: "AISmallBiz: Slack Guide for Small Business Teams",
    ogDescription:
      "Use Slack for your small business team with AI help: channels, messages, and integrations to keep your staff in sync.",
    ogType: "article",
  },
  {
    path: "/tool-guides/square",
    title: "AISmallBiz: Square Guide for Small Business",
    description:
      "Take payments with Square for your small business with AI help: register, online, invoicing, and inventory. Step by step actions to sell anywhere today.",
    ogTitle: "AISmallBiz: Square Guide for Small Business",
    ogDescription:
      "Take payments with Square for your small business with AI help: register, online, invoicing, and inventory to sell anywhere.",
    ogType: "article",
  },
  {
    path: "/tool-guides/stripe",
    title: "AISmallBiz: Stripe Guide for Small Business",
    description:
      "Accept online payments with Stripe for your small business with AI help: checkout, subscriptions, and payouts. Step by step actions to get paid online.",
    ogTitle: "AISmallBiz: Stripe Guide for Small Business",
    ogDescription:
      "Accept online payments with Stripe for your small business with AI help: checkout, subscriptions, and payouts to get paid.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides",
    title: "AISmallBiz: AI Job Guides for Every Profession",
    description:
      "Detailed AI adoption guides for plumbers, restaurants, accountants, dentists, real estate, contractors, law firms, and insurance agents.",
    ogTitle: "AISmallBiz: AI Job Guides for Every Profession",
    ogDescription:
      "Detailed AI adoption guides for plumbers, restaurants, accountants, dentists, real estate, contractors, law firms, and insurance agents.",
    ogType: "website",
  },
  {
    path: "/ai-job-guides/plumbers",
    title: "AISmallBiz: AI for Plumbers",
    description:
      "How plumbers can use AI tools for scheduling, customer service, estimating, and marketing.",
    ogTitle: "AISmallBiz: AI for Plumbers",
    ogDescription:
      "How plumbers can use AI tools for scheduling, customer service, estimating, and marketing.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/restaurants",
    title: "AISmallBiz: AI for Restaurants",
    description:
      "How restaurants can use AI for menu optimization, reservations, inventory, and customer engagement.",
    ogTitle: "AISmallBiz: AI for Restaurants",
    ogDescription:
      "How restaurants can use AI for menu optimization, reservations, inventory, and customer engagement.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/accountants",
    title: "AISmallBiz: AI for Accountants",
    description:
      "How accountants can use AI for bookkeeping automation, document processing, tax research, and client communication.",
    ogTitle: "AISmallBiz: AI for Accountants",
    ogDescription:
      "How accountants can use AI for bookkeeping automation, document processing, tax research, and client communication.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/dentists",
    title: "AISmallBiz: AI for Dentists",
    description:
      "How dentists can use AI for imaging analysis, appointment scheduling, patient communication, and treatment planning.",
    ogTitle: "AISmallBiz: AI for Dentists",
    ogDescription:
      "How dentists can use AI for imaging analysis, appointment scheduling, patient communication, and treatment planning.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/real-estate",
    title: "AISmallBiz: AI for Real Estate",
    description:
      "How real estate agents can use AI for listing descriptions, lead qualification, market analysis, and virtual staging.",
    ogTitle: "AISmallBiz: AI for Real Estate",
    ogDescription:
      "How real estate agents can use AI for listing descriptions, lead qualification, market analysis, and virtual staging.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/contractors",
    title: "AISmallBiz: AI for Contractors",
    description:
      "How contractors can use AI for estimating, project scheduling, safety compliance, and client communication.",
    ogTitle: "AISmallBiz: AI for Contractors",
    ogDescription:
      "How contractors can use AI for estimating, project scheduling, safety compliance, and client communication.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/law-firms",
    title: "AISmallBiz: AI for Law Firms",
    description:
      "How law firms can use AI for legal research, document review, contract analysis, and client intake.",
    ogTitle: "AISmallBiz: AI for Law Firms",
    ogDescription:
      "How law firms can use AI for legal research, document review, contract analysis, and client intake.",
    ogType: "article",
  },
  {
    path: "/ai-job-guides/insurance-agents",
    title: "AISmallBiz: AI for Insurance Agents",
    description:
      "How insurance agents can use AI for quoting, risk assessment, claims processing, and client communication.",
    ogTitle: "AISmallBiz: AI for Insurance Agents",
    ogDescription:
      "How insurance agents can use AI for quoting, risk assessment, claims processing, and client communication.",
    ogType: "article",
  },
  {
    path: "/learn",
    title: "AISmallBiz: Learn Computer Basics and AI Step by Step",
    description:
      "Learn computer basics and AI step by step with free lessons for small business owners. Build confidence using AI tools in your shop starting today.",
    ogTitle: "AISmallBiz: Learn Computer Basics and AI Step by Step",
    ogDescription:
      "Learn computer basics and AI step by step with free lessons for small business owners. Build confidence using AI tools in your shop starting today.",
    ogType: "article",
  },
];

function buildRouteMeta(seed: RouteSeed): RouteMeta {
  const base: RouteMeta = {
    title: seed.title,
    description: seed.description,
    ogTitle: seed.ogTitle,
    ogDescription: seed.ogDescription,
    ogType: seed.ogType,
    jsonLd: null,
    path: seed.path,
  };
  base.jsonLd = buildJsonLdFor(seed.path, base);
  return base;
}

/** Metadata for every public route, keyed by route path. */
export const ROUTE_META: Record<string, RouteMeta> = Object.fromEntries(
  ROUTE_SEEDS.map((seed) => [seed.path, buildRouteMeta(seed)]),
);

const HOME_META: RouteMeta = ROUTE_META["/"];

/**
 * Returns the metadata for a given path. Falls back to homepage metadata when
 * the path is unknown or is a dynamic segment placeholder like "/guides/$id".
 */
export function getRouteMeta(path: string): RouteMeta {
  if (ROUTE_META[path]) return ROUTE_META[path];
  if (path.startsWith("/guides/")) return ROUTE_META["/guides/$id"];
  if (path.startsWith("/workflows/")) return ROUTE_META["/workflows/$slug"];
  return HOME_META;
}

/**
 * Returns JSON-LD as a string for injection into a script tag. When the route
 * has multiple schemas (such as /ai-search-prep), the value is a JSON array.
 * Returns an empty string when no schema applies to the path.
 */
export function getPageJsonLd(path: string): string {
  const meta = getRouteMeta(path);
  if (!meta.jsonLd) return "";
  return JSON.stringify(meta.jsonLd);
}

/** Absolute canonical URL for a route path. */
export function getCanonicalUrl(path: string): string {
  const meta = getRouteMeta(path);
  return `${SITE_URL}${meta.path}`;
}

/** Absolute URL of the branded social card image. */
export function getSocialCardUrl(): string {
  return SOCIAL_CARD;
}

export { GUIDE_PATHS, SITE_URL };
