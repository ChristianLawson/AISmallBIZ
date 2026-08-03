import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  INDUSTRY_BRANDING_DATA,
  INDUSTRY_KEYS,
} from "@/data/industryBrandingData";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  Loader2,
  MessageSquare,
  Quote,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BUSINESS_TYPE_PILLS = INDUSTRY_KEYS.map((key) => ({
  value: key,
  label: INDUSTRY_BRANDING_DATA[key].label,
  emoji: INDUSTRY_BRANDING_DATA[key].emoji,
}));

interface AnswerResult {
  topic: string;
  answer: string;
  links: Array<{ label: string; to: string; description: string }>;
  related?: string[];
}

const TOPIC_MAP: Array<{
  keywords: string[];
  types?: string[];
  topic: string;
  answer: string;
  links: AnswerResult["links"];
}> = [
  {
    keywords: [
      "google maps",
      "maps",
      "local search",
      "google listing",
      "gmb",
      "google business",
      "google review",
      "reviews",
    ],
    topic: "Google Maps Optimization",
    answer:
      "Your Google Business Profile is one of the most powerful free marketing tools available. 99% of small businesses do not know their Google Maps listing is indexed daily: and if you have not updated it recently, Google will lower your search ranking. To maximize visibility: claim and verify your profile, update your hours and photos monthly, respond to every review (positive and negative), add your products/services with descriptions, and post weekly updates. Businesses that actively manage their profile appear in the top 3 'local pack' results: the prime real estate in local search.",
    links: [
      {
        label: "Business Guides",
        to: "/guides",
        description: "Step-by-step local SEO guides",
      },
      {
        label: "Ask More Questions",
        to: "/ask-a-question",
        description: "Get personalized answers",
      },
      {
        label: "Business Rescue Tips",
        to: "/taffer-advice",
        description: "Tough-love advice for operations",
      },
    ],
  },
  {
    keywords: [
      "deli",
      "sandwich",
      "deli menu",
      "food waste",
      "deli staff",
      "deli special",
      "sub",
      "pastrami",
      "deli systems",
      "deli hours",
      "cross train",
      "prep sheet",
      "run a deli",
      "80 hours",
    ],
    types: ["deli"],
    topic: "NYC Deli Success Strategies",
    answer:
      "Top NYC delis succeed through three pillars: legendary sandwiches (rotating weekly specials keep regulars coming back), Google Maps dominance (your listing is viewed 1,000+ times/month in NYC), and Appreciated Branding: making customers feel like regulars from day one. For food waste: implement FIFO (first in, first out) inventory, prep only 70% of estimated daily need, and turn overstock into daily specials. Staffing tip: cross-train every employee on three stations minimum. A deli that cannot run without the owner is a liability, not a business.",
    links: [
      {
        label: "NYC Deli Guide",
        to: "/deli-guide",
        description: "Complete NYC deli success playbook",
      },
      {
        label: "Google Maps Guide",
        to: "/guides",
        description: "Rank #1 in your neighborhood",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Operational turnaround strategies",
      },
    ],
  },
  {
    keywords: [
      "salon",
      "booking",
      "stylist",
      "hair",
      "beauty",
      "nail",
      "spa",
      "appointment",
      "client retention salon",
      "cancellation",
      "no show",
      "waitlist",
      "last minute",
      "cancellation policy",
    ],
    types: ["salon"],
    topic: "Salon Growth & Branding",
    answer:
      "Top NYC salons grow through Instagram mastery (before/after Reels get 5x organic reach), Google Business Profile reviews (ask every client right after payment: strike while they are happy), and rebooking at checkout (the #1 retention lever most salons ignore). For booking: switch to online booking immediately: salons that offer online booking see 30% more appointments. Pricing tip: raise prices 10% annually rather than 30% every few years. Clients accept gradual increases but resist sticker shock.",
    links: [
      {
        label: "Salon Guide",
        to: "/salon-guide",
        description: "Complete NYC salon success playbook",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a brand clients love",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your salon's operations",
      },
    ],
  },
  {
    keywords: [
      "restaurant",
      "profitability",
      "menu pricing",
      "food cost",
      "table turn",
      "reservation",
      "kitchen",
      "chef",
      "dining",
      "portion control",
      "vendor",
      "waste tracking",
      "menu engineering",
      "control food costs",
    ],
    types: ["restaurant"],
    topic: "Restaurant Profitability",
    answer:
      "Restaurant success in 2026 is about three metrics: food cost (keep it under 28%), labor cost (under 35%), and guest frequency. Menu engineering is your #1 profit lever: identify your Stars (high profit, high popularity) and push them with placement, photos, and staff recommendations. For social media: video content of your kitchen, chef specials, and behind-the-scenes is the highest-ROI content format. Google Maps tip: respond to every review within 2 hours: restaurants in the top 3 local pack get 70% of walk-in traffic.",
    links: [
      {
        label: "Restaurant Guide",
        to: "/restaurant-guide",
        description: "Complete NYC restaurant playbook",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Jon Taffer's restaurant turnaround",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build emotional loyalty",
      },
    ],
  },
  {
    keywords: [
      "retail",
      "inventory",
      "stock",
      "store",
      "boutique",
      "merchandise",
      "shop",
      "local seo retail",
      "window display",
      "average order value",
      "aov",
      "bundling",
      "upsell",
      "impulse items",
      "boutique stand out",
      "personal styling",
      "trunk show",
    ],
    types: ["retail"],
    topic: "Retail Growth Strategies",
    answer:
      "Physical retail wins in 2026 when it is worth visiting: create an experience, not just a transaction. Top NYC retailers use three strategies: The Collab Drop (limited-edition collabs with local artists or makers drive urgency and press), The VIP Saturday (exclusive early access for loyalty members), and Instagram Content Days (professional-looking content shot in-store pulls organic traffic). Inventory tip: use 80/20: 20% of your SKUs generate 80% of revenue. Ruthlessly cut slow-movers and double down on winners.",
    links: [
      {
        label: "Retail Guide",
        to: "/retail-guide",
        description: "Complete NYC retail success playbook",
      },
      {
        label: "Google Maps Tips",
        to: "/guides",
        description: "Local SEO for retail",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Brand techniques that work",
      },
    ],
  },
  {
    keywords: [
      "llc",
      "incorporate",
      "formation",
      "business formation",
      "register",
      "start a business",
      "first clients",
      "startup",
      "launch",
      "new business",
      "brand name",
      "entity",
    ],
    types: ["startup"],
    topic: "Starting Your Business",
    answer:
      "The fastest path to legitimacy: Form your LLC through ZenBusiness or Stripe Atlas ($0-$49), open a business bank account (Relay is free for small businesses), and get your Google Business Profile live immediately: even before you have a website. For your first clients: reach out to your 50 closest contacts personally, offer a founding-customer discount (not free: never free), and ask each client for one referral and one Google review. Your brand name tip: choose something you can own a .com and Google Business Profile for: check both before committing.",
    links: [
      {
        label: "Online Services Guide",
        to: "/online-services-guide",
        description: "Best tools to launch your business",
      },
      {
        label: "Business Planning",
        to: "/guides",
        description: "Build your business plan",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Brand from day one",
      },
    ],
  },
  {
    keywords: [
      "social media",
      "instagram",
      "facebook",
      "tiktok",
      "twitter",
      "linkedin",
      "advertise",
      "advertising",
      "ads",
      "paid social",
    ],
    topic: "Social Media Advertising",
    answer:
      "Social media advertising delivers the best ROI for small businesses when done right. Facebook and Instagram ads let you target by zip code, age, interests, and even competitor audiences: for as little as $5/day. Start with a 'Traffic' campaign to drive website visits, then retarget visitors with a 'Conversion' campaign. For organic content: post 3-5 times per week, use Reels/short video (they get 3x more reach than static posts), respond to comments within 1 hour, and always include a clear call to action. TikTok is now essential for businesses targeting under-40 customers.",
    links: [
      {
        label: "Browse All Guides",
        to: "/guides",
        description: "In-depth marketing guides",
      },
      {
        label: "Branding Strategies",
        to: "/branding",
        description: "Build a brand that resonates",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your marketing approach",
      },
    ],
  },
  {
    keywords: [
      "business plan",
      "business planning",
      "strategy",
      "plan",
      "funding",
      "investor",
      "loan",
      "sba",
    ],
    topic: "Business Planning",
    answer:
      "A strong business plan is your roadmap to success and your ticket to funding. The Big Four accounting firms back a proven structure: Executive Summary (the hook), Company Description, Market Analysis (who are your customers?), Organization & Management, Product/Service Line, Marketing & Sales Strategy, Financial Projections (3-year), and Funding Requirements. Keep it concise: 15-20 pages max. Lead with your financials when presenting to investors or banks. For small businesses seeking SBA loans, your local SCORE chapter offers free mentorship and business plan review. Update your plan every 6 months as your business grows.",
    links: [
      {
        label: "Business Guides",
        to: "/guides",
        description: "Detailed business planning resources",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Operational strategy tips",
      },
      {
        label: "FAQ",
        to: "/faq",
        description: "Common business questions answered",
      },
    ],
  },
  {
    keywords: [
      "branding",
      "brand",
      "logo",
      "identity",
      "design",
      "colors",
      "visual",
      "appreciated",
    ],
    topic: "Branding & Brand Identity",
    answer:
      "Appreciated Branding is about creating emotional connections with customers: not just selling products. In 2026's crowded marketplace, consumers are exposed to over 10,000 marketing messages daily, so authenticity wins. Your brand needs 5 core elements: Empathy (understand customer pain points), Authenticity (be genuine and transparent), Customer-Centricity (put their needs first), Emotional Connection (build relationships based on shared values), and Consistency (deliver on your promises every time). Small businesses have a natural advantage: they can build personal relationships that large corporations cannot replicate. Start with your story: why did you start this business? That is your brand foundation.",
    links: [
      {
        label: "Appreciated Branding",
        to: "/branding",
        description: "Full guide by Christian Lawson",
      },
      {
        label: "Browse Guides",
        to: "/guides",
        description: "More branding resources",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your brand perception",
      },
    ],
  },
  {
    keywords: [
      "ai",
      "artificial intelligence",
      "automation",
      "technology",
      "tools",
      "software",
      "tech",
      "ai tools",
      "chatgpt",
      "claude",
      "canva ai",
      "save time",
      "repetitive tasks",
      "automate",
      "zapier",
      "calendly",
    ],
    topic: "AI & Technology for Small Business",
    answer:
      "AI is no longer just for large corporations: it is the great equalizer for small businesses. Start with these high-impact AI tools: ChatGPT or Claude for writing product descriptions, emails, and social media content (saves 5-10 hours/week); Canva AI for instant professional graphics; Google's AI tools in your Business Profile for auto-generated responses to reviews; QuickBooks AI for expense categorization and forecasting. For customer service, a simple contact form or FAQ page on your website can capture leads and answer common questions around the clock. The key is to start with one tool, master it, then add another: do not try to automate everything at once.",
    links: [
      {
        label: "Tech Guides",
        to: "/guides",
        description: "AI tools for every business type",
      },
      {
        label: "FAQ",
        to: "/faq",
        description: "AI in the workplace explained",
      },
      {
        label: "Branding with AI",
        to: "/branding",
        description: "AI-enhanced brand strategies",
      },
    ],
  },
  {
    keywords: [
      "cloud",
      "cloud services",
      "point of sale",
      "pos",
      "square",
      "stripe",
      "quickbooks",
      "freshbooks",
      "hubspot",
      "zoho",
      "google workspace",
      "bookkeeping software",
      "crm",
    ],
    topic: "Cloud Services for Small Business",
    answer:
      "Most small businesses need four cloud services to operate smoothly. A point of sale and payments platform such as Square or Stripe handles transactions. A bookkeeping platform such as QuickBooks Online or FreshBooks gives you real time financials. A customer relationship tool such as HubSpot Free or Zoho tracks every lead and repeat customer. A file storage and collaboration platform such as Google Workspace or Microsoft 365 covers documents, photos, and email. Choose tools that integrate with each other to avoid manual data entry. Start on free or low cost tiers and upgrade only when a clear bottleneck appears.",
    links: [
      {
        label: "Online Services Guide",
        to: "/online-services-guide",
        description: "Best cloud tools for small business",
      },
      {
        label: "Tech Guides",
        to: "/guides",
        description: "Cloud and software guides",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your operations with the right tools",
      },
    ],
  },
  {
    keywords: [
      "post frequency",
      "how often post",
      "what content works",
      "reels",
      "tiktok",
      "short video",
      "organic reach",
      "engagement",
      "content calendar",
    ],
    topic: "Social Media Content Strategy",
    answer:
      "Aim for three to five posts per week on your primary platform, with at least two short form videos such as Reels or TikToks, because video earns roughly three times the organic reach of static images. Mix four content types: behind the scenes moments that humanize your business, customer spotlights with permission, quick tips that solve a real problem, and a clear offer or promotion. Post when your audience is active, often late morning and early evening. Reply to every comment within one hour to signal to the algorithm that your content sparks conversation.",
    links: [
      {
        label: "Advertising & Marketing Guides",
        to: "/guides",
        description: "Social media content guides",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a brand that resonates",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your marketing approach",
      },
    ],
  },
  {
    keywords: [
      "website speed",
      "website security",
      "https",
      "update website",
      "fast website",
      "squarespace",
      "shopify",
      "wordpress",
      "website maintenance",
      "fresh content",
    ],
    topic: "Website Management Basics",
    answer:
      "Focus on four fundamentals to keep your website working for you. Speed: compress every image, enable caching, and aim for a load time under three seconds on a phone, because Google ranks fast sites higher. Security: use HTTPS, enable automatic updates for your platform, and use a managed host or a reputable builder such as Squarespace, Shopify, or WordPress with a security plugin. Easy updates: keep your hours, menu, services, and photos on a single page you can edit in under five minutes. Fresh content: add a new blog post or announcement at least once a quarter so Google and customers see an active business.",
    links: [
      {
        label: "Website & SEO Guides",
        to: "/guides",
        description: "Website optimization guides",
      },
      {
        label: "Google Maps Tips",
        to: "/guides",
        description: "Local SEO strategies",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Make your site stand out",
      },
    ],
  },
  {
    keywords: [
      "brand strategy",
      "positioning",
      "brand personality",
      "brand promise",
      "memorable brand",
      "brand pillars",
      "brand audit",
    ],
    topic: "Brand Strategy Fundamentals",
    answer:
      "A memorable brand strategy rests on three pillars. Positioning: write one sentence that says who you serve, what problem you solve, and why you are different. Personality: pick three adjectives that describe how your business should feel, then audit every touchpoint, from signage to email tone, against those words. Promise: state the one experience every customer can count on every time, such as a sandwich ready in five minutes or a stylist who listens first. Document all three on a single page, share it with your team, and review it every six months as your business grows.",
    links: [
      {
        label: "Appreciated Branding",
        to: "/branding",
        description: "Full guide by Christian Lawson",
      },
      {
        label: "Browse Guides",
        to: "/guides",
        description: "More branding resources",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your brand perception",
      },
    ],
  },
  {
    keywords: [
      "nyc",
      "new york city",
      "nyc resources",
      "small business services",
      "score",
      "bid",
      "business improvement district",
      "chamber of commerce",
      "nyc permits",
      "nyc licensing",
    ],
    topic: "NYC Small Business Resources",
    answer:
      "New York City offers several free or low cost resources for small business owners. NYC Small Business Services provides free business courses, one on one coaching, and assistance with licensing and permits. The local SCORE chapter pairs you with an experienced mentor for free business plan review. Business Improvement Districts offer marketing grants, streetscape improvements, and neighborhood events that drive foot traffic. The public library system hosts free workshops on marketing, finance, and technology. Connect with your local chamber of commerce for networking and supplier introductions. Use these services early, before problems arise, to avoid costly mistakes.",
    links: [
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Plan and grow your NYC business",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Operational turnaround strategies",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a brand that fits your neighborhood",
      },
    ],
  },
  {
    keywords: [
      "pool hall",
      "pool",
      "billiards",
      "entertainment venue",
      "table fees",
      "leagues",
      "bar revenue",
      "arcade",
    ],
    topic: "Pool Hall & Entertainment Venue Profitability",
    answer:
      "Profit in a pool hall comes from food, drinks, and time based table fees, not from the tables themselves. Set a clear hourly rate per table with a minimum charge, and use a simple timer system so staff do not give away free time. Build a beverage and snack menu with at least a 70 percent gross margin, and train staff to upsell on every table. Host weekly leagues and tournaments to fill slow weeknights, and charge a small entry fee that includes table time. Maintain tables and cues meticulously, because worn felt and broken cues drive regulars to competitors. Track revenue per table per hour to find your most profitable times and staff accordingly.",
    links: [
      {
        label: "Business Rescue Strategies",
        to: "/taffer-advice",
        description: "Turnaround strategies for venues",
      },
      {
        label: "Browse Guides",
        to: "/guides",
        description: "Operations and marketing guides",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a venue brand regulars love",
      },
    ],
  },
  {
    keywords: [
      "fitness",
      "gym",
      "studio",
      "membership",
      "personal training",
      "challenge",
      "referral program",
      "free class",
      "corporate rates",
    ],
    topic: "Fitness Studio & Gym Growth",
    answer:
      "Grow memberships with a four part playbook. Offer a low friction intro, such as a free first class or a seven day pass, that removes the biggest barrier to trying your studio. Build a referral program that rewards existing members for every new member they bring, because referred members stay longer and spend more. Run a six week challenge with a clear start and end date, public progress tracking, and a celebration at the finish, which creates urgency and social proof. Partner with nearby offices and residential buildings to offer corporate or resident rates that fill your daytime hours.",
    links: [
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Plan and grow your fitness business",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a community brand",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your studio operations",
      },
    ],
  },
  {
    keywords: [
      "bakery",
      "baked goods",
      "pricing bakery",
      "food cost bakery",
      "bread",
      "pastry",
      "flour",
      "butter",
      "day old",
    ],
    topic: "Bakery Pricing & Profitability",
    answer:
      "Price every baked good using a simple food cost formula. Calculate the exact ingredient cost per item, then divide by your target food cost percentage, typically 25 to 30 percent for bakeries, to get the menu price. Add a labor allowance for mixing, baking, and finishing, and round to a clean retail price. Track ingredient prices monthly and adjust recipes or prices when a key input, such as butter or flour, jumps more than 15 percent. Sell day old items at a small discount rather than throwing them away, and use surplus ingredients in a daily special to recover cost and reduce waste.",
    links: [
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Pricing and cost control guides",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Operational turnaround tips",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build a bakery brand customers love",
      },
    ],
  },
  {
    keywords: [
      "cleaning",
      "cleaning business",
      "cleaning service",
      "residential cleaning",
      "move out cleaning",
      "cleaning clients",
      "cleaning checklist",
    ],
    topic: "Cleaning Business Growth",
    answer:
      "Build a stable client base with a clear offer and consistent delivery. Define a specific service, such as recurring residential cleaning or move out turnover for apartments, rather than offering everything. Price by the job or by the hour with a minimum visit, and quote every prospect the same way to avoid confusion. Use a simple checklist for every clean so quality stays consistent regardless of which team member does the work. Ask every satisfied client for a Google review and a referral within 24 hours of the service, because word of mouth is the lowest cost and highest converting channel for cleaning businesses.",
    links: [
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Plan and grow your service business",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Operational tips for service businesses",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build trust with a clean brand",
      },
    ],
  },
  {
    keywords: [
      "online services",
      "online business",
      "virtual assistant",
      "freelance",
      "service business",
      "no budget",
      "carrd",
      "start online",
    ],
    topic: "Starting an Online Services Business",
    answer:
      "Start an online services business with what you already have. Pick one service you can deliver well, such as social media management, bookkeeping, or virtual assistance, and define the exact outcome you provide. Build a simple one page website using a free tool such as Carrd or Google Sites, and set up a free Google Business Profile even if you work from home. Reach out personally to 50 people in your network, explain your offer, and ask for one introduction each. Use free tiers of Calendly for booking, Stripe or PayPal for payments, and a free email platform for your first 500 subscribers. Reinvest your first revenue into a paid domain and a professional email address before anything else.",
    links: [
      {
        label: "Online Services Guide",
        to: "/online-services-guide",
        description: "Best tools to launch online",
      },
      {
        label: "Business Planning",
        to: "/guides",
        description: "Build your service business plan",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Brand your online service",
      },
    ],
  },
  {
    keywords: [
      "first steps",
      "10 steps",
      "ten steps",
      "start a business",
      "ein",
      "licenses",
      "permits",
      "llc formation",
      "business checklist",
    ],
    topic: "First Steps to Start a New Business",
    answer:
      "Follow these ten steps in order to start a new business the right way. Validate your idea by talking to 20 potential customers before you spend money. Choose a business name and check the domain, the Google Business Profile, and social handles. Form your LLC through ZenBusiness or Stripe Atlas. Open a separate business bank account the same day. Get a federal Employer Identification Number from the IRS. Apply for any local licenses or permits your city requires. Set up a Google Business Profile. Build a simple one page website. Launch with a founding customer offer to your network. Ask every early customer for a Google review and a referral to build social proof from day one.",
    links: [
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Step by step startup guides",
      },
      {
        label: "Online Services Guide",
        to: "/online-services-guide",
        description: "Tools to launch your business",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Brand from day one",
      },
    ],
  },
  {
    keywords: [
      "ai search",
      "voice assistant",
      "voice search",
      "alexa",
      "google ai",
      "ai overview",
      "structured data",
      "faq page",
      "schema",
    ],
    topic: "Preparing for AI Search & Voice Assistants",
    answer:
      "AI search and voice assistants reward clear, structured, and authoritative information. Write your business description in plain sentences that answer who, what, where, and when, because AI models pull from this text. Keep your Google Business Profile fully updated with hours, services, and photos, because it is a primary source for AI answers. Add a frequently asked questions page on your website with questions phrased the way people speak, such as what are your hours today. Earn mentions and links from reputable local sources, because AI systems weight trusted references. Update your content quarterly so the information AI surfaces about your business stays accurate.",
    links: [
      {
        label: "Website & SEO Guides",
        to: "/guides",
        description: "AI search and SEO guides",
      },
      {
        label: "Google Maps Tips",
        to: "/guides",
        description: "Local SEO for AI search",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build authority AI can trust",
      },
    ],
  },
  {
    keywords: [
      "cash flow",
      "cash reserve",
      "receivables",
      "payables",
      "invoicing",
      "money",
      "run out of money",
      "financials",
      "budget",
    ],
    topic: "Cash Flow Management",
    answer:
      "Cash flow, not profit, is what keeps a business alive. Track three numbers every week: cash on hand, receivables due in the next 30 days, and payables due in the next 30 days. Invoice immediately after delivering a product or service, and offer a small discount, such as 2 percent, for payment within 10 days. Negotiate longer payment terms with your vendors while keeping your customer terms short. Build a cash reserve equal to at least one month of fixed expenses before you invest in growth. Review your cash flow statement weekly, and act the moment a gap appears, not after the bills are overdue.",
    links: [
      {
        label: "Business Rescue Strategies",
        to: "/taffer-advice",
        description: "Cash flow turnaround strategies",
      },
      {
        label: "Business Planning Guides",
        to: "/guides",
        description: "Financial planning guides",
      },
      {
        label: "FAQ",
        to: "/faq",
        description: "Common finance questions answered",
      },
    ],
  },
  {
    keywords: [
      "marketing",
      "promote",
      "promotion",
      "reach",
      "audience",
      "customers",
      "attract",
      "leads",
      "traffic",
    ],
    topic: "Marketing Strategy",
    answer:
      "Effective marketing for small businesses comes down to 3 pillars: Be Found (SEO + Google Maps), Be Known (consistent social media presence), and Be Trusted (reviews + testimonials). Your marketing budget should allocate roughly: 40% to Google/local SEO, 30% to social media advertising, 20% to email marketing (highest ROI at $42 per $1 spent), and 10% to local community involvement. The biggest mistake small businesses make is inconsistency: posting once a month will not build an audience. Aim for daily engagement: respond to comments, share behind-the-scenes content, and always ask satisfied customers to leave a Google review immediately after their visit.",
    links: [
      {
        label: "Browse All Guides",
        to: "/guides",
        description: "Full marketing strategy guides",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build your brand identity",
      },
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Fix your marketing problems",
      },
    ],
  },
  {
    keywords: [
      "website",
      "web",
      "online presence",
      "seo",
      "search engine",
      "google ranking",
      "domain",
    ],
    topic: "Website & Online Presence",
    answer:
      "Your website is your digital storefront: open 24/7. For small businesses, focus on 4 must-haves: Speed (Google ranks fast sites higher: aim for under 3 seconds load time), Mobile-First (60% of searches are on phones), Clear CTAs (every page needs one action: call, book, buy), and Trust Signals (reviews, certifications, team photos). For Google ranking: create a Google Business Profile, get listed in local directories (Yelp, BBB), build local backlinks by partnering with neighboring businesses, and write blog posts answering questions your customers actually ask. Update your website content at minimum quarterly: Google notices fresh content.",
    links: [
      {
        label: "Guides Library",
        to: "/guides",
        description: "Website optimization guides",
      },
      {
        label: "Google Maps Tips",
        to: "/guides",
        description: "Local SEO strategies",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Make your site stand out",
      },
    ],
  },
  {
    keywords: [
      "customer",
      "retention",
      "loyalty",
      "repeat",
      "service",
      "satisfaction",
      "experience",
      "review",
    ],
    topic: "Customer Retention & Experience",
    answer:
      "Acquiring a new customer costs 5-7x more than retaining an existing one. Customer retention is your most profitable strategy. Start with these proven tactics: Personalization (remember names, preferences, and order history: even a simple notes app works for small businesses), Follow-up (send a thank-you text or email within 24 hours of a purchase), Loyalty Programs (a simple stamp card increases repeat visits by 30%), Proactive Communication (notify customers of new products, sales, or changes before they find out on their own), and Problem Resolution (when something goes wrong, fix it fast and add a bonus: customers who had a problem resolved perfectly become your best advocates).",
    links: [
      {
        label: "Business Rescue",
        to: "/taffer-advice",
        description: "Customer experience strategies",
      },
      {
        label: "Branding Guide",
        to: "/branding",
        description: "Build emotional connections",
      },
      {
        label: "Browse Guides",
        to: "/guides",
        description: "Retention strategy resources",
      },
    ],
  },
];

const DEFAULT_ANSWER: AnswerResult = {
  topic: "Small Business Strategy",
  answer:
    "Great question! Running a successful small business requires focusing on the fundamentals: know your customers deeply, deliver consistent quality, market where your customers actually are, and review your numbers every week. The most successful small business owners we have seen share 3 traits: they ask for help early (not after things go wrong), they invest in their online presence, and they never stop learning. Browse our guides library for detailed resources on every aspect of running your business: from Google Maps optimization to business planning, branding, and using AI tools.",
  links: [
    {
      label: "Browse All Guides",
      to: "/guides",
      description: "Comprehensive business resources",
    },
    {
      label: "Business Rescue",
      to: "/taffer-advice",
      description: "Tough-love operational advice",
    },
    {
      label: "Branding Guide",
      to: "/branding",
      description: "Build your brand identity",
    },
    { label: "FAQ", to: "/faq", description: "Common questions answered" },
  ],
};

function getAnswer(question: string, businessType: string): AnswerResult {
  const q = question.toLowerCase();
  // Try type-specific match first
  if (businessType && businessType !== "general") {
    for (const topic of TOPIC_MAP) {
      if (
        topic.types?.includes(businessType) &&
        topic.keywords.some((kw) => q.includes(kw))
      ) {
        return { topic: topic.topic, answer: topic.answer, links: topic.links };
      }
    }
    // Try type-specific topic by type keyword alone
    for (const topic of TOPIC_MAP) {
      if (topic.types?.includes(businessType)) {
        return { topic: topic.topic, answer: topic.answer, links: topic.links };
      }
    }
  }
  // General keyword match
  for (const topic of TOPIC_MAP) {
    if (topic.keywords.some((kw) => q.includes(kw))) {
      return { topic: topic.topic, answer: topic.answer, links: topic.links };
    }
  }
  return DEFAULT_ANSWER;
}

const CATEGORIZED_QA: Record<
  string,
  Array<{
    id: string;
    question: string;
    answer: string;
    link: { label: string; to: string };
  }>
> = {
  deli: [
    {
      id: "deli-1",
      question: "How do I reduce food waste in my deli?",
      answer:
        "Implement FIFO (first in, first out) for all perishables, prep to 70% of estimated daily demand, and build a daily 'specials board' from near-expiry ingredients. Track waste by SKU weekly: most delis waste 8-12% of food cost. Cutting waste to 4% can add $20,000-$50,000 to your annual bottom line.",
      link: { label: "NYC Deli Guide", to: "/deli-guide" },
    },
    {
      id: "deli-2",
      question: "What makes a deli sandwich menu successful?",
      answer:
        "Rotating weekly specials with neighborhood-themed names (The Brooklyn Pastrami, The Katz's Tribute) create anticipation and social media content. Keep your core menu tight: 8-12 signature sandwiches max: and introduce one rotating special per week. Offer build-your-own only as upsell, not as default.",
      link: { label: "NYC Deli Guide", to: "/deli-guide" },
    },
    {
      id: "deli-3",
      question: "How do I get more Google Maps visibility for my deli?",
      answer:
        "Post a photo of your daily special every morning on your Google Business Profile. Use keywords like 'best deli near me', 'NYC pastrami', and your neighborhood name in your profile description. Ask every happy customer for a Google review: aim for 50+ reviews with an average of 4.5+ stars to rank in the top 3 local pack.",
      link: { label: "Google Maps Guides", to: "/guides" },
    },
  ],
  salon: [
    {
      id: "salon-1",
      question: "How do I get more salon bookings through Instagram?",
      answer:
        "Post Reels of before/after transformations 3x per week: they get 5x more reach than static photos. Use location tags (#NYCSalon, #BrooklynHair) in every post. Add your booking link in bio and a 'Book Now' story highlight. Respond to every comment within 1 hour: Instagram rewards engagement with reach.",
      link: { label: "Salon Guide", to: "/salon-guide" },
    },
    {
      id: "salon-2",
      question: "What should I charge for salon services?",
      answer:
        "Price based on time + product cost + market rate, not just what competitors charge. Calculate your hourly rate (monthly expenses ÷ available hours), add 40% for profit margin. Raise prices 10% annually: gradual increases are far easier than large jumps. Never discount; offer added-value promotions instead (free treatment with color, not 20% off).",
      link: { label: "Salon Guide", to: "/salon-guide" },
    },
    {
      id: "salon-3",
      question: "How do I get more Google reviews for my salon?",
      answer:
        "Ask at the checkout moment: right as the client is paying and complimenting their look. Have your Google review link as a short URL on your business card and a QR code at the reception desk. Follow up with a text 2 hours after their appointment: 'Hope you are loving your new look! If you have a moment, a Google review means the world to us: [link].'",
      link: { label: "Google Maps Guides", to: "/guides" },
    },
  ],
  restaurant: [
    {
      id: "rest-1",
      question: "How do I improve my restaurant's profitability?",
      answer:
        "Target these three numbers: food cost below 28%, labor below 35%, prime cost (food + labor) below 60%. Menu engineering is your fastest lever: identify high-margin, high-popularity items and feature them prominently. Cut menu items that have under 3% order frequency: they add complexity and cost without revenue.",
      link: { label: "Restaurant Guide", to: "/restaurant-guide" },
    },
    {
      id: "rest-2",
      question: "How do I price my restaurant menu?",
      answer:
        "Use the food cost percentage method: if an item costs $4 to make and you want 28% food cost, price it at $14.30 (round to $14 or $15). Apply psychological pricing: $14.99 feels like a deal; $15 feels premium. Feature your highest-margin items at top-right of menu (the eye's natural landing spot). Update pricing quarterly.",
      link: { label: "Restaurant Guide", to: "/restaurant-guide" },
    },
    {
      id: "rest-3",
      question: "What social media content works for restaurants?",
      answer:
        "In order of effectiveness: (1) Kitchen video/Reels showing prep and plating, (2) Chef story: who they are and why this dish, (3) Before/after plating transformation, (4) Customer celebration moments (birthdays, anniversaries with permission), (5) Daily special announcement. Post at 11am and 5pm when people are deciding where to eat.",
      link: { label: "Restaurant Guide", to: "/restaurant-guide" },
    },
  ],
  retail: [
    {
      id: "retail-1",
      question: "How do I manage inventory more effectively?",
      answer:
        "Apply the 80/20 rule ruthlessly: 20% of your SKUs generate 80% of revenue. Review sales velocity weekly and cut any item that has not sold in 60 days. Use a simple POS like Square to track sell-through rates. Reorder top sellers at 30% stock level. Turn slow-movers into a 'Clearance Table' rather than holding them full-price.",
      link: { label: "Retail Guide", to: "/retail-guide" },
    },
    {
      id: "retail-2",
      question: "How do I drive more foot traffic to my retail store?",
      answer:
        "The three-channel approach: Google Maps (claim and optimize your Business Profile with photos of window displays and new arrivals), Instagram (post new arrivals with location tags, use Stories for 'New In Today' content), and Community (partner with neighboring businesses for cross-promotions). Events: trunk shows, styling nights, local collabs: can generate 3-5x your average daily traffic in a single day.",
      link: { label: "Retail Guide", to: "/retail-guide" },
    },
    {
      id: "retail-3",
      question: "How do I build a strong brand for my retail store?",
      answer:
        "Your store's brand is the feeling customers have the moment they walk in: the smell, the music, the lighting, the way staff greet them. Define 3 adjectives that describe your ideal brand feeling, then audit every touchpoint against those words. Appreciated Branding for retail means making customers feel like insiders: give regulars early access, mention them by name, and make the store feel like their community space.",
      link: { label: "Branding Guide", to: "/branding" },
    },
  ],
  "starting a business": [
    {
      id: "startup-1",
      question: "Should I form an LLC or a corporation?",
      answer:
        "For most small businesses, an LLC is the right choice: pass-through taxation (no double taxation), simpler administration, and liability protection. Use ZenBusiness or Stripe Atlas for fast, affordable formation ($0-$49). Choose a corporation (S-Corp or C-Corp) only if you are seeking venture capital or planning to issue stock. Whatever you choose, open a separate business bank account the same day: never mix personal and business finances.",
      link: { label: "Online Services Guide", to: "/online-services-guide" },
    },
    {
      id: "startup-2",
      question: "How do I get my first clients?",
      answer:
        "Your first 10 clients should come from your existing network. List 50 people who know and respect you, reach out personally (not mass email), explain what you are offering and why you are passionate about it, and offer a 'founding client' rate (20-30% discount, not free). Ask each one for one referral and one Google review. This approach generates clients without any ad spend and builds social proof from day one.",
      link: { label: "Business Planning", to: "/guides" },
    },
    {
      id: "startup-3",
      question: "How do I pick a business name?",
      answer:
        "A great business name is: memorable (2 words or fewer), available (check .com domain + Google Business Profile + social handles before deciding), and ownable (easy to trademark). Avoid generic descriptors ('Best NYC Pizza') and clever misspellings ('Koffee'). The name should tell your story or evoke the feeling you want customers to have. Test it: say it out loud 10 times. If it feels natural, it will work.",
      link: { label: "Branding Guide", to: "/branding" },
    },
  ],
};

const COMMON_QA = [
  {
    id: "cq-1",
    category: "deli",
    question: "How do I get my deli to the top of Google Maps?",
    answer:
      "Post a photo of your daily special every morning on your Google Business Profile. Use keywords like 'best deli near me' and your neighborhood name in your description. Respond to every review. Aim for 50+ reviews with 4.5+ stars to rank in the top 3 local pack: that is where 70% of clicks go.",
    link: { label: "NYC Deli Guide", to: "/deli-guide" },
  },
  {
    id: "cq-2",
    category: "salon",
    question: "What social media platforms should my salon be on?",
    answer:
      "Instagram is non-negotiable for salons: before/after Reels get 5x organic reach. Add a Google Business Profile with photos updated monthly. TikTok is growing fast for the under-35 demographic. Pinterest drives significant appointment traffic for color and styling content. Choose 2 max and post consistently.",
    link: { label: "Salon Guide", to: "/salon-guide" },
  },
  {
    id: "cq-3",
    category: "starting a business",
    question:
      "How do I write a business plan that banks and investors will approve?",
    answer:
      "Lead with your Executive Summary: a 1-page overview with your revenue model and 3-year projections. Follow with Market Analysis, Operations Plan, Marketing Strategy, and Financial Projections (monthly for year 1, quarterly for years 2-3). Banks want to see 20%+ gross margin and a clear path to profitability. Keep it under 20 pages. Have a SCORE mentor review it for free before submitting.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-4",
    category: "general",
    question: "What is Appreciated Branding and how do I implement it?",
    answer:
      "Appreciated Branding, coined by Christian Lawson, is the practice of creating genuine emotional connections with customers: proving your business values and understands them as individuals, not just revenue sources. Implement through 5 principles: Empathy, Authenticity, Customer-Centricity, Emotional Connection, and Consistency. Start by remembering customer names, sharing your origin story on social media, and supporting a local cause that aligns with your values.",
    link: { label: "Read the Full Branding Guide", to: "/branding" },
  },
  {
    id: "cq-5",
    category: "general",
    question: "How can AI save my small business time and money?",
    answer:
      "AI delivers the highest ROI in these areas: Content Creation (ChatGPT writes product descriptions, emails, social posts: saves 8-12 hrs/week), Customer Service (a well-organized FAQ page and contact form handle most common questions), Bookkeeping (QuickBooks AI categorizes expenses and flags anomalies), Design (Canva AI generates professional graphics in minutes). Start with content creation: it is the fastest win.",
    link: { label: "AI Tools & Technology Guides", to: "/guides" },
  },
  {
    id: "cq-6",
    category: "restaurant",
    question: "What would Jon Taffer say is wrong with most restaurants?",
    answer:
      "Taffer's consistent observations: (1) Owners hide in the back: be on the floor daily. (2) No standards: write every process down. (3) Blaming external factors instead of owning results. (4) Poor cost controls: food cost and labor are bleeding profit silently. (5) No marketing: hoping word of mouth is enough is a plan to fail. The first fix is always: get obsessed with your numbers.",
    link: { label: "Business Rescue Strategies", to: "/taffer-advice" },
  },
  {
    id: "cq-7",
    category: "retail",
    question: "How do I get more repeat customers and build loyalty in retail?",
    answer:
      "The loyalty formula: Make it personal, make it easy, make it rewarding. Personal: remember names and past purchases. Easy: loyalty programs should have 5 or fewer steps, digital is better than punch cards. Rewarding: the reward must feel meaningful (a free product, not a 5% discount). Invite loyal customers to exclusive events or early access: make them feel like insiders.",
    link: { label: "Retail Guide", to: "/retail-guide" },
  },
  {
    id: "cq-8",
    category: "general",
    question: "How do I make my website rank higher on Google?",
    answer:
      "(1) Claim and fully optimize your Google Business Profile. (2) Get listed on 10+ local directories (Yelp, BBB, Angi, local chamber). (3) Write blog posts answering questions your customers Google. (4) Get backlinks from local newspapers and partner businesses. (5) Ensure your site loads in under 3 seconds on mobile. Consistent effort over 3-6 months produces results.",
    link: { label: "Website & SEO Guides", to: "/guides" },
  },
  {
    id: "cq-9",
    category: "general",
    question: "What technology should every small business be using in 2026?",
    answer:
      "Non-negotiable tech: Google Business Profile (free, massive ROI), a CRM like HubSpot Free or Zoho, an AI writing tool like ChatGPT or Claude, a social scheduling tool like Buffer or Later, QuickBooks or FreshBooks, and an email marketing platform like Mailchimp (your list is your most valuable asset). Start with the free tiers: you likely do not need premium until you are consistently over $500K revenue.",
    link: { label: "Technology Upgrade Guides", to: "/guides" },
  },
  {
    id: "cq-10",
    category: "general",
    question: "How do I advertise my business on a small budget?",
    answer:
      "With $300-$500/month: Allocate $150 to Google Local Service Ads (pay-per-lead), $100 to Facebook/Instagram retargeting ads, and $50 to boosting your best-performing organic posts. Free tactics that rival paid advertising: consistent Google Business Profile updates, weekly Reels on Instagram, responding to every review, and running a referral program. Track every dollar: if an ad does not generate measurable ROI in 30 days, pause and adjust.",
    link: { label: "Advertising & Marketing Guides", to: "/guides" },
  },
  {
    id: "cq-11",
    category: "general",
    question:
      "Which AI tools should a small business adopt first to save time?",
    answer:
      "Start with three high-impact tools that require no technical skill. Use ChatGPT or Claude to draft product descriptions, email replies, and social posts, which typically saves eight to twelve hours per week. Use Canva AI to produce professional graphics and menu inserts in minutes. Use Google Business Profile AI suggestions to draft quick, polite responses to customer reviews. Master one tool fully before adding the next, and never automate the personal touches that make your business feel human, such as a handwritten thank you note or a phone call from the owner.",
    link: { label: "AI Tools & Technology Guides", to: "/guides" },
  },
  {
    id: "cq-12",
    category: "general",
    question:
      "How do I automate repetitive tasks without losing the personal touch?",
    answer:
      "Map every recurring task for one week, then sort them into three buckets: automate, delegate, and keep personal. Automate the repetitive and rules-based work, such as appointment reminders, review request emails, and inventory reorder alerts, using tools like Zapier, Calendly, and your point of sale. Delegate standardized tasks to trained staff with written checklists. Keep the personal bucket for yourself: greeting regulars by name, resolving complaints, and signing thank you notes. Customers forgive automation when the moments that matter still feel human.",
    link: { label: "Business Rescue Strategies", to: "/taffer-advice" },
  },
  {
    id: "cq-13",
    category: "general",
    question:
      "What cloud services does a small business actually need in 2026?",
    answer:
      "Most small businesses need four cloud services. A point of sale and payments platform such as Square or Stripe for transactions. A bookkeeping platform such as QuickBooks Online or FreshBooks for real time financials. A customer relationship tool such as HubSpot Free or Zoho to track every lead and repeat customer. A file storage and collaboration platform such as Google Workspace or Microsoft 365 for documents, photos, and email. Choose tools that integrate with each other to avoid manual data entry. Start on free or low cost tiers and upgrade only when a clear bottleneck appears.",
    link: { label: "Online Services Guide", to: "/online-services-guide" },
  },
  {
    id: "cq-14",
    category: "general",
    question:
      "How often should I post on social media, and what content works best?",
    answer:
      "Aim for three to five posts per week on your primary platform, with at least two short form videos such as Reels or TikToks, because video earns roughly three times the organic reach of static images. Mix four content types: behind the scenes moments that humanize your business, customer spotlights with permission, quick tips that solve a real problem, and a clear offer or promotion. Post when your audience is active, often late morning and early evening. Reply to every comment within one hour to signal to the algorithm that your content sparks conversation.",
    link: { label: "Advertising & Marketing Guides", to: "/guides" },
  },
  {
    id: "cq-15",
    category: "general",
    question:
      "How do I keep my website fast, secure, and easy to update myself?",
    answer:
      "Focus on four fundamentals. Speed: compress every image, enable caching, and aim for a load time under three seconds on a phone, because Google ranks fast sites higher. Security: use HTTPS, enable automatic updates for your platform, and use a managed host or a reputable builder such as Squarespace, Shopify, or WordPress with a security plugin. Easy updates: keep your hours, menu, services, and photos on a single page you can edit in under five minutes. Fresh content: add a new blog post or announcement at least once a quarter so Google and customers see an active business.",
    link: { label: "Website & SEO Guides", to: "/guides" },
  },
  {
    id: "cq-16",
    category: "general",
    question:
      "How do I build a brand strategy that customers actually remember?",
    answer:
      "A memorable brand strategy rests on three pillars. Positioning: write one sentence that says who you serve, what problem you solve, and why you are different. Personality: pick three adjectives that describe how your business should feel, then audit every touchpoint, from signage to email tone, against those words. Promise: state the one experience every customer can count on every time, such as a sandwich ready in five minutes or a stylist who listens first. Document all three on a single page, share it with your team, and review it every six months as your business grows.",
    link: { label: "Read the Full Branding Guide", to: "/branding" },
  },
  {
    id: "cq-17",
    category: "general",
    question:
      "What NYC resources help small business owners get started and grow?",
    answer:
      "New York City offers several free or low cost resources. NYC Small Business Services provides free business courses, one on one coaching, and assistance with licensing and permits. The local SCORE chapter pairs you with an experienced mentor for free business plan review. Business Improvement Districts offer marketing grants, streetscape improvements, and neighborhood events that drive foot traffic. The public library system hosts free workshops on marketing, finance, and technology. Connect with your local chamber of commerce for networking and supplier introductions. Use these services early, before problems arise, to avoid costly mistakes.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-18",
    category: "deli",
    question: "How do I run a profitable deli without working 80 hours a week?",
    answer:
      "Build systems so the deli runs without you. Write a prep sheet for every shift with quantities and timing. Cross train every employee on at least three stations so a single absence never stops service. Use a simple point of sale that tracks your top sellers, then cut any item that sells fewer than three portions a day. Set fixed opening and closing checklists so quality stays consistent across shifts. Schedule yourself out of the daily line work one shift at a time, and use that freed time to manage inventory, marketing, and finances. A deli that cannot operate without you is a job, not a business.",
    link: { label: "NYC Deli Guide", to: "/deli-guide" },
  },
  {
    id: "cq-19",
    category: "salon",
    question:
      "How do I fill last minute cancellations and protect salon revenue?",
    answer:
      "Build a waitlist of clients who want earlier appointments and text them the moment a slot opens. Set a clear cancellation policy, such as 24 hours notice or a 50 percent fee, and state it on every booking confirmation and reminder. Use automated text reminders 24 hours and 2 hours before each appointment to reduce no shows. Offer a small perk, such as a complimentary add on, to clients who fill a same day opening. Track your no show rate weekly, and after two missed appointments, require a card on file for future bookings.",
    link: { label: "Salon Guide", to: "/salon-guide" },
  },
  {
    id: "cq-20",
    category: "restaurant",
    question:
      "How do I control food costs in my restaurant without cutting quality?",
    answer:
      "Keep food cost below 28 percent of menu price using four levers. Portion control: weigh every protein and use standardized recipes so each plate costs the same. Vendor management: get three quotes for your top ten ingredients and renegotiate every quarter. Waste tracking: log every item thrown away for two weeks to find the biggest leaks, then adjust prep quantities. Menu engineering: feature high margin items with photos and staff recommendations, and cut dishes with under 3 percent order frequency. Review your actual food cost percentage every week, not every month, so problems get caught early.",
    link: { label: "Restaurant Guide", to: "/restaurant-guide" },
  },
  {
    id: "cq-21",
    category: "general",
    question: "How do I run a profitable pool hall or entertainment venue?",
    answer:
      "Profit in a pool hall comes from food, drinks, and time based table fees, not from the tables themselves. Set a clear hourly rate per table with a minimum charge, and use a simple timer system so staff do not give away free time. Build a beverage and snack menu with at least a 70 percent gross margin, and train staff to upsell on every table. Host weekly leagues and tournaments to fill slow weeknights, and charge a small entry fee that includes table time. Maintain tables and cues meticulously, because worn felt and broken cues drive regulars to competitors. Track revenue per table per hour to find your most profitable times and staff accordingly.",
    link: { label: "Business Rescue Strategies", to: "/taffer-advice" },
  },
  {
    id: "cq-22",
    category: "retail",
    question: "How do I increase average order value in my retail store?",
    answer:
      "Raise average order value with three proven tactics. Product bundling: group complementary items at a slight discount, such as a starter kit or a gift set, which lifts total spend without discounting your hero products. Strategic merchandising: place add ons and impulse items within arm's reach of the register and of your top sellers. Staff training: teach every team member to ask one open ended question, such as whether the customer needs anything to go with their selection, and to suggest a specific companion product. Track average order value weekly and reward staff when it rises.",
    link: { label: "Retail Guide", to: "/retail-guide" },
  },
  {
    id: "cq-23",
    category: "general",
    question: "How do I grow a fitness studio or gym membership base quickly?",
    answer:
      "Grow memberships with a four part playbook. Offer a low friction intro, such as a free first class or a seven day pass, that removes the biggest barrier to trying your studio. Build a referral program that rewards existing members for every new member they bring, because referred members stay longer and spend more. Run a six week challenge with a clear start and end date, public progress tracking, and a celebration at the finish, which creates urgency and social proof. Partner with nearby offices and residential buildings to offer corporate or resident rates that fill your daytime hours.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-24",
    category: "general",
    question:
      "How do I price baked goods in a bakery to cover costs and profit?",
    answer:
      "Price every baked good using a simple food cost formula. Calculate the exact ingredient cost per item, then divide by your target food cost percentage, typically 25 to 30 percent for bakeries, to get the menu price. Add a labor allowance for mixing, baking, and finishing, and round to a clean retail price. Track ingredient prices monthly and adjust recipes or prices when a key input, such as butter or flour, jumps more than 15 percent. Sell day old items at a small discount rather than throwing them away, and use surplus ingredients in a daily special to recover cost and reduce waste.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-25",
    category: "general",
    question:
      "How do I find and keep reliable clients for a cleaning business?",
    answer:
      "Build a stable client base with a clear offer and consistent delivery. Define a specific service, such as recurring residential cleaning or move out turnover for apartments, rather than offering everything. Price by the job or by the hour with a minimum visit, and quote every prospect the same way to avoid confusion. Use a simple checklist for every clean so quality stays consistent regardless of which team member does the work. Ask every satisfied client for a Google review and a referral within 24 hours of the service, because word of mouth is the lowest cost and highest converting channel for cleaning businesses.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-26",
    category: "retail",
    question: "How do I make my boutique stand out from larger competitors?",
    answer:
      "A boutique wins by being irreplaceable, not by being cheap. Curate a tight selection of products you can stand behind, and tell the story behind each one on a small card or in person. Offer services the big stores cannot match, such as personal styling appointments, gift wrapping, and local delivery the same day. Host small events, such as trunk shows, maker meet and greets, and styling nights, that turn shopping into a community experience. Train every team member to learn customer names and preferences, because personal recognition is the single advantage a boutique has over a chain.",
    link: { label: "Read the Full Branding Guide", to: "/branding" },
  },
  {
    id: "cq-27",
    category: "starting a business",
    question:
      "How do I start an online services business with almost no budget?",
    answer:
      "Start with what you already have. Pick one service you can deliver well, such as social media management, bookkeeping, or virtual assistance, and define the exact outcome you provide. Build a simple one page website using a free tool such as Carrd or Google Sites, and set up a free Google Business Profile even if you work from home. Reach out personally to 50 people in your network, explain your offer, and ask for one introduction each. Use free tiers of Calendly for booking, Stripe or PayPal for payments, and a free email platform for your first 500 subscribers. Reinvest your first revenue into a paid domain and a professional email address before anything else.",
    link: { label: "Online Services Guide", to: "/online-services-guide" },
  },
  {
    id: "cq-28",
    category: "starting a business",
    question:
      "What are the first 10 steps to start a new business the right way?",
    answer:
      "Follow these ten steps in order. Validate your idea by talking to 20 potential customers before you spend money. Choose a business name and check the domain, the Google Business Profile, and social handles. Form your LLC through ZenBusiness or Stripe Atlas. Open a separate business bank account the same day. Get a federal Employer Identification Number from the IRS. Apply for any local licenses or permits your city requires. Set up a Google Business Profile. Build a simple one page website. Launch with a founding customer offer to your network. Ask every early customer for a Google review and a referral to build social proof from day one.",
    link: { label: "Business Planning Guides", to: "/guides" },
  },
  {
    id: "cq-29",
    category: "general",
    question:
      "How do I prepare my business for AI powered search and voice assistants?",
    answer:
      "AI search and voice assistants reward clear, structured, and authoritative information. Write your business description in plain sentences that answer who, what, where, and when, because AI models pull from this text. Keep your Google Business Profile fully updated with hours, services, and photos, because it is a primary source for AI answers. Add a frequently asked questions page on your website with questions phrased the way people speak, such as what are your hours today. Earn mentions and links from reputable local sources, because AI systems weight trusted references. Update your content quarterly so the information AI surfaces about your business stays accurate.",
    link: { label: "Website & SEO Guides", to: "/guides" },
  },
  {
    id: "cq-30",
    category: "general",
    question:
      "How do I manage cash flow so my business never runs out of money?",
    answer:
      "Cash flow, not profit, is what keeps a business alive. Track three numbers every week: cash on hand, receivables due in the next 30 days, and payables due in the next 30 days. Invoice immediately after delivering a product or service, and offer a small discount, such as 2 percent, for payment within 10 days. Negotiate longer payment terms with your vendors while keeping your customer terms short. Build a cash reserve equal to at least one month of fixed expenses before you invest in growth. Review your cash flow statement weekly, and act the moment a gap appears, not after the bills are overdue.",
    link: { label: "Business Rescue Strategies", to: "/taffer-advice" },
  },
];

const FEATURED_QUESTIONS: Array<{
  id: string;
  question: string;
  category: string;
  businessType?: string;
}> = [
  {
    id: "feat-1",
    question: "How do I get my deli to the top of Google Maps?",
    category: "deli",
    businessType: "deli",
  },
  {
    id: "feat-2",
    question: "How do I get more salon bookings through Instagram?",
    category: "salon",
    businessType: "salon",
  },
  {
    id: "feat-3",
    question: "How do I improve my restaurant's profitability?",
    category: "restaurant",
    businessType: "restaurant",
  },
  {
    id: "feat-4",
    question: "How do I manage inventory more effectively?",
    category: "retail",
    businessType: "retail",
  },
  {
    id: "feat-5",
    question: "Should I form an LLC or a corporation?",
    category: "starting a business",
    businessType: "startup",
  },
  {
    id: "feat-6",
    question: "What is Appreciated Branding and how do I implement it?",
    category: "general",
  },
  {
    id: "feat-7",
    question:
      "How do I manage cash flow so my business never runs out of money?",
    category: "general",
  },
  {
    id: "feat-8",
    question:
      "Which AI tools should a small business adopt first to save time?",
    category: "general",
  },
  {
    id: "feat-9",
    question:
      "What are the first 10 steps to start a new business the right way?",
    category: "starting a business",
    businessType: "startup",
  },
  {
    id: "feat-10",
    question:
      "How do I prepare my business for AI powered search and voice assistants?",
    category: "general",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  deli: "Deli Questions",
  salon: "Salon Questions",
  restaurant: "Restaurant Questions",
  retail: "Retail Questions",
  "starting a business": "Starting a Business",
  general: "General Business",
};

const CATEGORY_ORDER = [
  "deli",
  "salon",
  "restaurant",
  "retail",
  "starting a business",
  "general",
];

const VALID_ROUTES = [
  "/",
  "/guides",
  "/faq",
  "/taffer-advice",
  "/branding",
  "/ask-a-question",
  "/deli-guide",
  "/salon-guide",
  "/restaurant-guide",
  "/retail-guide",
  "/online-services-guide",
] as const;
type ValidRoute = (typeof VALID_ROUTES)[number];

function isSafeRoute(to: string): to is ValidRoute {
  return VALID_ROUTES.includes(to as ValidRoute);
}

function getSuggestedQuestions(input: string): typeof COMMON_QA {
  if (!input.trim()) return [];
  const q = input.toLowerCase();
  return COMMON_QA.filter((item) =>
    item.question
      .toLowerCase()
      .split(" ")
      .some((word) => word.length > 4 && q.includes(word)),
  ).slice(0, 3);
}

function getRelatedQuestions(
  businessType: string,
  excludeId: string,
): typeof COMMON_QA {
  const typeMap: Record<string, string> = {
    deli: "deli",
    salon: "salon",
    restaurant: "restaurant",
    retail: "retail",
    startup: "starting a business",
  };
  const cat = typeMap[businessType] ?? "general";
  const filtered = COMMON_QA.filter(
    (q) =>
      q.id !== excludeId && (q.category === cat || q.category === "general"),
  );
  return filtered.slice(0, 3);
}

export default function AskAQuestion() {
  const [question, setQuestion] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [answer, setAnswer] = useState<AnswerResult | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<typeof COMMON_QA>([]);
  const thinkingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Ordered categories: selected type first, then rest
  const orderedCategories = businessType
    ? [
        ...CATEGORY_ORDER.filter((c) => {
          const typeMap: Record<string, string> = {
            deli: "deli",
            salon: "salon",
            restaurant: "restaurant",
            retail: "retail",
            startup: "starting a business",
          };
          return c === (typeMap[businessType] ?? "general");
        }),
        ...CATEGORY_ORDER.filter((c) => {
          const typeMap: Record<string, string> = {
            deli: "deli",
            salon: "salon",
            restaurant: "restaurant",
            retail: "retail",
            startup: "starting a business",
          };
          return c !== (typeMap[businessType] ?? "general");
        }),
      ]
    : CATEGORY_ORDER;

  useEffect(() => {
    textareaRef.current?.focus();
    return () => {
      if (thinkingTimer.current) clearTimeout(thinkingTimer.current);
    };
  }, []);

  const handleInputChange = (val: string) => {
    setQuestion(val);
    setSuggestions(val.length > 5 ? getSuggestedQuestions(val) : []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setSuggestions([]);
    setIsThinking(true);
    thinkingTimer.current = setTimeout(() => {
      setAnswer(getAnswer(question, businessType));
      setHasSubmitted(true);
      setIsThinking(false);
    }, 700);
  };

  const handleReset = () => {
    setQuestion("");
    setBusinessType("");
    setAnswer(null);
    setHasSubmitted(false);
    setIsThinking(false);
    setSuggestions([]);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handleSuggestionClick = (q: string) => {
    setQuestion(q);
    setSuggestions([]);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav
        className="bg-background border-b border-border"
        aria-label="Breadcrumb"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <a
            href="/"
            className="hover:text-foreground transition-colors duration-200"
          >
            Home
          </a>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-foreground font-medium">
            Ask a Small Business Question
          </span>
        </div>
      </nav>

      {/* Hero + Question Input */}
      <section className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-4">
              <Sparkles size={12} />
              Small Business Answers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Ask a Small Business Question
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select your business type, then ask anything about Google Maps,
              branding, social media, business planning, and more.
            </p>
          </motion.div>

          {/* Featured Questions: visible on load, before any submission */}
          {!hasSubmitted && !isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="mb-8"
              data-ocid="ask.featured_questions"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Featured Questions
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURED_QUESTIONS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    data-ocid={`ask.featured_question.${i + 1}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
                    onClick={() => {
                      setQuestion(item.question);
                      setBusinessType(item.businessType ?? "");
                      setSuggestions([]);
                      setIsThinking(true);
                      thinkingTimer.current = setTimeout(() => {
                        setAnswer(
                          getAnswer(item.question, item.businessType ?? ""),
                        );
                        setHasSubmitted(true);
                        setIsThinking(false);
                      }, 700);
                    }}
                    className="text-left flex flex-col gap-1.5 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 px-4 py-3.5 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">
                        {CATEGORY_LABELS[item.category] ?? item.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.question}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {isThinking ? (
              <motion.div
                key="thinking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-20 gap-5"
                data-ocid="ask.loading_state"
              >
                <Loader2 size={40} className="text-primary animate-spin" />
                <p className="font-display text-lg font-semibold text-foreground">
                  Searching for the best answer...
                </p>
                <p className="text-sm text-muted-foreground">
                  Matching your question to our business knowledge base
                </p>
              </motion.div>
            ) : !hasSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="bg-background rounded-2xl border-2 border-primary/30 shadow-lg p-6 sm:p-8 space-y-6"
              >
                {/* Step 1: Business type pills */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Step 1: Select your business type
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
                    data-ocid="ask.business_type_selector"
                  >
                    {BUSINESS_TYPE_PILLS.map((bt) => (
                      <button
                        key={bt.value}
                        type="button"
                        data-ocid={`ask.type_pill.${bt.value}`}
                        onClick={() =>
                          setBusinessType(
                            bt.value === businessType ? "" : bt.value,
                          )
                        }
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                          businessType === bt.value
                            ? "border-primary bg-primary text-primary-foreground shadow-sm"
                            : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        <span className="text-base">{bt.emoji}</span>
                        {bt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Question textarea */}
                <div className="space-y-2">
                  <label
                    htmlFor="question"
                    className="block text-sm font-semibold text-foreground uppercase tracking-wide"
                  >
                    Step 2: Type your question
                  </label>
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      id="question"
                      data-ocid="ask.question_input"
                      value={question}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="e.g. How do I rank higher on Google Maps?"
                      rows={4}
                      className="w-full rounded-xl border-2 border-input bg-card px-4 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none transition-colors duration-200"
                      required
                      autoComplete="off"
                    />
                    {/* Auto-suggest dropdown */}
                    {suggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 right-0 top-full mt-1 z-10 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                        data-ocid="ask.suggestions_dropdown"
                      >
                        <p className="px-4 pt-3 pb-1 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          Similar questions
                        </p>
                        {suggestions.map((sug, i) => (
                          <button
                            key={sug.id}
                            type="button"
                            data-ocid={`ask.suggestion.${i + 1}`}
                            onClick={() => handleSuggestionClick(sug.question)}
                            className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-primary/8 transition-colors duration-150 border-t border-border/50 flex items-center gap-2"
                          >
                            <Search
                              size={13}
                              className="text-muted-foreground shrink-0"
                            />
                            {sug.question}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  data-ocid="ask.submit_button"
                  className="w-full gap-2 text-base font-semibold py-6"
                  disabled={!question.trim()}
                >
                  <Search size={18} />
                  Get My Answer
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
                data-ocid="ask.answer_panel"
              >
                {/* Topic badge */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb size={16} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {answer?.topic}
                  </span>
                </div>

                {/* Your question */}
                <div className="bg-muted/40 rounded-xl border border-border px-5 py-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Your question
                  </p>
                  <p className="text-foreground font-medium">{question}</p>
                </div>

                {/* Answer */}
                <div className="bg-card rounded-2xl border border-border shadow-card px-6 py-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {answer?.answer}
                  </p>
                </div>

                {/* Jump to section links */}
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    Helpful Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {answer?.links.map((link, i) =>
                      isSafeRoute(link.to) ? (
                        <motion.div
                          key={link.to + link.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.2 + i * 0.08,
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                        >
                          <Link
                            to={link.to as ValidRoute}
                            data-ocid={`ask.helpful_link.${i + 1}`}
                            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-primary/30 px-4 py-3 transition-colors duration-200 group"
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {link.label}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {link.description}
                              </p>
                            </div>
                            <ChevronRight
                              size={16}
                              className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors duration-200"
                            />
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={link.to + link.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.2 + i * 0.08,
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                        >
                          <a
                            href={link.to}
                            data-ocid={`ask.helpful_link.${i + 1}`}
                            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-primary/30 px-4 py-3 transition-colors duration-200 group"
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {link.label}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {link.description}
                              </p>
                            </div>
                            <ChevronRight
                              size={16}
                              className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors duration-200"
                            />
                          </a>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* 3 Related Questions */}
                {businessType && (
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MessageSquare size={16} className="text-primary" />3
                      Related Questions
                    </h3>
                    <div className="space-y-2">
                      {getRelatedQuestions(businessType, "").map((rq, i) => (
                        <motion.button
                          key={rq.id}
                          type="button"
                          data-ocid={`ask.related_question.${i + 1}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.07, duration: 0.3 }}
                          onClick={() => {
                            setQuestion(rq.question);
                            setHasSubmitted(false);
                            setAnswer(null);
                            setIsThinking(true);
                            thinkingTimer.current = setTimeout(() => {
                              setAnswer(getAnswer(rq.question, businessType));
                              setHasSubmitted(true);
                              setIsThinking(false);
                            }, 700);
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200 group"
                        >
                          <ChevronRight
                            size={15}
                            className="text-primary shrink-0"
                          />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {rq.question}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reset */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  data-ocid="ask.reset_button"
                  className="gap-2"
                >
                  <RefreshCw size={15} />
                  Ask Another Question
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Taffer Challenge Callout */}
      <section
        className="bg-card border-b border-border"
        data-ocid="ask.taffer_callout"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="rounded-2xl p-7 bg-[#EEF2FF]">
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={28}
                className="shrink-0 mt-0.5 text-[#6366F1]"
              />
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold mb-3 leading-snug text-[#1e1b4b]">
                  Jon Taffer&apos;s Challenge to You
                </h2>
                <p className="text-base leading-relaxed text-[#6366F1]/80">
                  Asking the right question is the first act of taking control.
                  Most small business owners fail not because they lacked
                  answers , but because they never asked the right question in
                  the first place. Don&apos;t just read the answer.{" "}
                  <strong className="text-[#1e1b4b]">
                    Act on it within 24 hours.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appreciated Branding Callout */}
      <section
        className="bg-muted/20 border-b border-border"
        data-ocid="ask.branding_callout"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="rounded-xl p-6 flex items-start gap-4 bg-[#EEF2FF] border border-[#6366F1]/20">
            <Quote size={28} className="shrink-0 mt-0.5 text-[#6366F1]/50" />
            <div>
              <h2 className="font-display text-xl font-bold mb-2 text-[#312e81]">
                Appreciated Branding Insight
              </h2>
              <p className="text-base leading-relaxed italic text-[#4338ca]">
                Every question you ask about improving your business is an act
                of empathy toward your customers. The fact that you&apos;re here
                , asking, learning, growing , already puts you ahead of 80% of
                small businesses that never question their own approach. Keep
                asking.
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                , Christian Lawson,{" "}
                <em>Appreciated Branding: This Is the Way</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific Q&A bank (detail cards) */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-3">
              <HelpCircle size={12} />
              Industry Q&A
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Questions by Business Type
            </h2>
            <p className="text-muted-foreground">
              Deep-dive answers organized by industry:{" "}
              {businessType
                ? `showing ${BUSINESS_TYPE_PILLS.find((b) => b.value === businessType)?.label ?? businessType} first`
                : "select a business type above to see your industry first"}
              .
            </p>
          </motion.div>

          {orderedCategories.map((cat) => {
            const catQA = CATEGORIZED_QA[cat];
            if (!catQA) return null;
            return (
              <div key={cat} className="mb-8">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <div className="space-y-3">
                  {catQA.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <p className="font-semibold text-foreground mb-2">
                        {item.question}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.answer}
                      </p>
                      {isSafeRoute(item.link.to) ? (
                        <Link
                          to={item.link.to as ValidRoute}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                        >
                          {item.link.label} <ChevronRight size={13} />
                        </Link>
                      ) : (
                        <a
                          href={item.link.to}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                        >
                          {item.link.label} <ChevronRight size={13} />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Q&A Accordion by category */}
      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-3">
              <HelpCircle size={12} />
              Common Questions
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Top Small Business Questions
            </h2>
            <p className="text-muted-foreground">
              Answers to the questions we hear most from small and medium
              business owners.
            </p>
          </motion.div>

          <div className="flex justify-end mb-5">
            <button
              type="button"
              onClick={() =>
                setOpenItems(
                  openItems.length === COMMON_QA.length
                    ? []
                    : COMMON_QA.map((q) => q.id),
                )
              }
              data-ocid="ask.toggle_all_button"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
            >
              {openItems.length === COMMON_QA.length
                ? "Collapse All"
                : "Expand All"}
            </button>
          </div>

          <Accordion.Root
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            data-ocid="ask.common_questions_list"
            className="space-y-3"
          >
            {COMMON_QA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
              >
                <Accordion.Item
                  value={item.id}
                  data-ocid={`ask.common_question.${index + 1}`}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      data-ocid={`ask.common_trigger.${index + 1}`}
                      className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer [&[data-state=open]_.chevron]:rotate-180"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">
                          {CATEGORY_LABELS[item.category] ?? item.category}
                        </span>
                        <span className="font-display font-semibold text-base sm:text-lg text-foreground leading-snug truncate">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        size={20}
                        className="chevron shrink-0 text-muted-foreground transition-transform duration-300 ease-in-out"
                        aria-hidden="true"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div
                      data-ocid={`ask.common_answer.${index + 1}`}
                      className="px-6 pb-6 pt-1 text-muted-foreground leading-relaxed space-y-3"
                    >
                      <p>{item.answer}</p>
                      {isSafeRoute(item.link.to) ? (
                        <Link
                          to={item.link.to as ValidRoute}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors duration-200"
                        >
                          {item.link.label}
                          <ChevronRight size={14} />
                        </Link>
                      ) : (
                        <a
                          href={item.link.to}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors duration-200"
                        >
                          {item.link.label}
                          <ChevronRight size={14} />
                        </a>
                      )}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BookOpen
              size={32}
              className="text-primary mx-auto mb-4 opacity-80"
            />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Explore Our Full Guides Library
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Deep-dive guides on every topic: Google Maps, social media,
              business planning, AI tools, branding, and more.
            </p>
            <Link
              to="/guides"
              search={{
                topic: undefined,
                businessType: undefined,
                keyword: undefined,
              }}
              data-ocid="ask.browse_guides_link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Browse All Guides
              <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
