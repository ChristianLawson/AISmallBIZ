/**
 * Static HTML snapshot generator for AISmallBiz (TM).
 *
 * AISmallBiz is a client side rendered React SPA on the Internet Computer.
 * True server side rendering is not possible, so this build time script
 * generates a static HTML snapshot for every public route. Each snapshot
 * contains the route specific title, meta tags, Open Graph data, Twitter card,
 * canonical link, JSON-LD structured data, and a noscript fallback with
 * readable text content describing the page.
 *
 * Crawlers and users with JavaScript disabled receive the full readable text
 * of each page in the initial HTML without JavaScript execution.
 *
 * Snapshots are written to src/frontend/dist/<route-path> as EXTENSIONLESS
 * files during the Vite closeBundle hook (after Vite has emptied and rebuilt
 * dist/), so the IC asset canister serves each snapshot at its matching
 * extensionless URL. The homepage route "/" is skipped entirely because Vite
 * already produces dist/index.html (the SPA entry and aliasing fallback), and
 * overwriting it would destroy the hashed bundle tags Vite emitted. Every
 * other route maps to an EXTENSIONLESS file (for example, /boutique-guide maps
 * to dist/boutique-guide, and /tool-guides/quickbooks maps to
 * dist/tool-guides/quickbooks). Because these files have no extension, the
 * ICP asset canister would default their Content-Type to
 * application/octet-stream, so .ic-assets.json5 sets Content-Type: text/html;
 * charset=utf-8 for each extensionless snapshot file. The extensionless files
 * OVERWRITE any stale extensionless asset keys from prior deploys, which is
 * the primary fix for clean-URL routing.
 *
 * FILESYSTEM CONFLICT EXCEPTION: A POSIX filesystem cannot have both a file
 * and a directory with the same name at the same path. There are two cases:
 *
 *  1. PARENT CONFLICT: If a route's parent path is ALSO a route (for example,
 *     /admin is a route AND /admin/chat-config is a route), then /admin writes
 *     to dist/admin (an extensionless file) and /admin/chat-config cannot also
 *     write to dist/admin/chat-config (an extensionless file) because
 *     dist/admin is already a file, not a directory. The write would fail with
 *     ENOTDIR. To resolve this, any route whose parent path is also in the
 *     route list uses the DIRECTORY-INDEX pattern instead: it writes to
 *     dist/<route>/index.html (for example, /admin/chat-config becomes
 *     dist/admin/chat-config/index.html).
 *
 *  2. HUB CONFLICT: If a route HAS child routes (any route whose path starts
 *     with this route's path plus a slash, for example /ai-job-guides has
 *     children /ai-job-guides/plumbers, /ai-job-guides/restaurants, and so on),
 *     then writing an extensionless file at dist/<route> would make
 *     dist/<route> a file, not a directory. The child routes could not then
 *     nest as dist/<route>/<child>/index.html because mkdir would fail with
 *     ENOTDIR. To resolve this, any route that has child routes also uses the
 *     DIRECTORY-INDEX pattern: it writes to dist/<route>/index.html (for
 *     example, /ai-job-guides becomes dist/ai-job-guides/index.html). This
 *     keeps the hub route servable at its clean URL while letting the children
 *     nest inside it as directories.
 *
 * The directory-index file is served by the ICP asset canister via the
 * enable_aliasing fallback (already set on the catch-all match in
 * .ic-assets.json5) and gets Content-Type text/html from the glob match rule
 * for .html files, so no separate extensionless match entry is needed for it
 * in .ic-assets.json5.
 *
 * CRITICAL: Each snapshot includes the EXACT script and stylesheet tags from
 * the built dist/index.html so the React app boots for human visitors after
 * the crawler-readable meta loads. The generateSnapshots() function reads
 * dist/index.html from disk, extracts every <link rel="stylesheet" ...> tag,
 * every <script type="module" ...> tag, and every other <link> tag in the
 * <head> (preconnect, preload, modulepreload, icon), and injects those exact
 * tags into each snapshot's <head>. The app's client-side router takes over
 * once JS loads and renders the correct route based on the URL.
 *
 * Rules followed in all generated content and comments:
 *  - No em dashes or en dashes.
 *  - No contractions.
 *  - Plain language for a small business owner with no technical background.
 *  - Absolute URLs use https://www.aismallbiz.org.
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { dirname, join, resolve } from "node:path";

export const SOCIAL_CARD_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAIAAADAIuwLAAB3fUlEQVR4nO3dd3wUdf7H8e/M7CabHpLQe++9I0XsBRFEULBi+93pWc9eOPXs5c7zPMvZCygiIgoqvTcB6b2FJJBKCOnJ7sz8/ogXwu4m2V4yr+fjHvcwszPf+exssux7v9/5fqXK0nwBAAAAADAeOdgFAAAAAACCg0AIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBEQgBAAAAwKAIhAAAAABgUARCAAAAADAoAiEAAAAAGBSBEAAAAAAMikAIAAAAAAZFIAQAAAAAgyIQAgAAAIBBmYJdALxi/aZ1sEsIRebr04NdAgAAABAGpMrS/GDXAPcQAt1COAQAAABqQyAMG+RAL5EMAQAAADsEw... (line truncated to 2000 chars)";

const SITE_URL = "https://www.aismallbiz.org";
const SOCIAL_CARD = `${SITE_URL}/assets/generated/social-card.png`;
const LOGO_URL = `${SITE_URL}/assets/generated/social-card.png`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEO_PATH = fileURLToPath(
  new URL("../src/lib/seo.ts", import.meta.url),
);
// Snapshots are written directly into dist/ at the route path using
// EXTENSIONLESS files: each non-home route writes to dist/<route> (for
// example, /boutique-guide -> dist/boutique-guide, /tool-guides/quickbooks ->
// dist/tool-guides/quickbooks) so the IC asset canister serves it at its
// clean URL. Because these files have no extension, .ic-assets.json5 sets
// Content-Type: text/html; charset=utf-8 for each extensionless snapshot
// file (the canister would otherwise default to application/octet-stream).
// The homepage route "/" is skipped entirely because Vite already produces
// dist/index.html (the SPA entry and aliasing fallback), and overwriting it
// would destroy the hashed bundle tags Vite emitted. The extensionless files
// OVERWRITE any stale extensionless asset keys from prior deploys, which is
// the primary fix for clean-URL routing. This directory is the Vite build
// output folder, and this script runs in the closeBundle hook after Vite has
// finished writing dist/, so the snapshots are not overwritten or skipped by
// the Vite public copy step.
//
// FILESYSTEM CONFLICT EXCEPTION: There are two cases.
//
//  1. PARENT CONFLICT: If a route's parent path is also a route (for example,
//     /admin is a route AND /admin/chat-config is a route), the parent writes
//     an extensionless file at dist/<parent>, so dist/<parent> is a file, not
//     a directory. The child route cannot then write dist/<parent>/<child> as
//     an extensionless file (ENOTDIR error) and falls back to the
//     directory-index pattern: dist/<parent>/<child>/index.html.
//
//  2. HUB CONFLICT: If a route has child routes (any route whose path starts
//     with this route's path plus a slash, for example /ai-job-guides has
//     children /ai-job-guides/plumbers and so on), writing an extensionless
//     file at dist/<route> would make dist/<route> a file, not a directory.
//     The child routes could not then nest as dist/<route>/<child>/index.html
//     (ENOTDIR error). The hub route falls back to the directory-index
//     pattern: dist/<route>/index.html.
//
// The directory-index file is served via the enable_aliasing fallback in
// .ic-assets.json5 and gets Content-Type text/html from the glob match rule
// for .html files, so no separate extensionless match entry is needed for it.
const DIST_ROOT = resolve(__dirname, "..", "dist");
const DIST_INDEX_HTML = join(DIST_ROOT, "index.html");

/**
 * Guide routes that emit HowTo or Article structured data. Mirrors the
 * GUIDE_PATHS set in seo.ts so this script can build JSON-LD without importing
 * TypeScript.
 */
const GUIDE_PATHS = new Set([
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

/**
 * Parse the ROUTE_SEEDS array out of seo.ts. The script reads the source file
 * as text and extracts each seed object with a regex, so it does not need a
 * TypeScript compiler. This keeps the snapshot generator fast and dependency
 * free.
 *
 * @returns {Array<{path:string,title:string,description:string,ogTitle:string,ogDescription:string,ogType:string}>}
 */
function parseRouteSeeds() {
  const source = readFileSync(SEO_PATH, "utf8");
  const seeds = [];
  const seedRegex =
    /\{\s*path:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*ogTitle:\s*"([^"]+)",\s*ogDescription:\s*"([^"]+)",\s*ogType:\s*"([^"]+)",\s*\}/g;
  let match;
  while ((match = seedRegex.exec(source)) !== null) {
    seeds.push({
      path: match[1],
      title: match[2],
      description: match[3],
      ogTitle: match[4],
      ogDescription: match[5],
      ogType: match[6],
    });
  }
  if (seeds.length === 0) {
    throw new Error(
      "No route seeds found in seo.ts. Check that ROUTE_SEEDS still uses the expected object shape.",
    );
  }
  return seeds;
}

/**
 * The six HowTo steps for the /ai-search-prep guide. Mirrors the step list
 * used by the runtime SeoMeta layer. No contractions, no em dashes, no en
 * dashes.
 */
const AI_SEARCH_PREP_HOWTO_STEPS = [
  {
    name: "Publish Pricing Content",
    text: "Publish honest pricing ranges and what drives the price up or down so AI systems have a reference point for your services.",
  },
  {
    name: "Make Your Business Bookable Online",
    text: "Add online booking, scheduling, or request forms so AI assistants can send customers straight to a page where they can act.",
  },
  {
    name: "Turn Real Customer Questions Into Content",
    text: "Write down the real questions customers ask and publish clear, specific answers as pages or posts on your site.",
  },
  {
    name: "Build Your Knowledge Catalog",
    text: "Create a catalog of pages that covers each service, price range, location, and common question so machines can cite you as the source.",
  },
  {
    name: "Label Your Content So Machines Can Read It",
    text: "Add schema markup to your service and FAQ pages so search engines and AI assistants can read and cite your content correctly.",
  },
  {
    name: "Get Verified and Crawlable",
    text: "Verify your domain in Google Search Console, submit your sitemap, and confirm the technical checks pass so your pages are discoverable.",
  },
];

/**
 * The nine FAQ question and answer pairs for the /ai-search-prep guide.
 * Mirrors the AI_SEARCH_PREP_FAQ constant in seo.ts. Verbatim questions and
 * answers. No contractions, no em dashes, no en dashes.
 */
const AI_SEARCH_PREP_FAQ = [
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
    question:
      "Do I need to pay an agency $1,500 to $2,000 a month for this?",
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
 * The nine FAQ question and answer pairs for the /online-schooling guide.
 * Mirrors the ONLINE_SCHOOLING_FAQ constant in seo.ts. Verbatim questions
 * and answers. No contractions, no em dashes, no en dashes.
 */
const ONLINE_SCHOOLING_FAQ = [
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

/**
 * Build the HowTo JSON-LD for the /ai-search-prep guide with six steps.
 * @param {{title:string,description:string}} meta
 * @returns {object}
 */
function buildAiSearchPrepHowToJsonLd(meta) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: meta.title,
    description: meta.description,
    url: `${SITE_URL}/ai-search-prep`,
    image: SOCIAL_CARD,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    step: AI_SEARCH_PREP_HOWTO_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1} ${step.name}`,
      text: step.text,
    })),
  };
}

/**
 * Build the Article JSON-LD for the /ai-search-prep guide.
 * @param {{title:string,description:string}} meta
 * @returns {object}
 */
function buildAiSearchPrepArticleJsonLd(meta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/ai-search-prep`,
    },
  };
}

/**
 * Build the FAQPage JSON-LD for the /ai-search-prep guide with nine question
 * and answer pairs.
 * @returns {object}
 */
function buildAiSearchPrepFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AI_SEARCH_PREP_FAQ.map((pair) => ({
      "@type": "Question",
      name: pair.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: pair.answer,
      },
    })),
  };
}

/**
 * Build the Article JSON-LD for the /online-schooling guide.
 * @param {{title:string,description:string}} meta
 * @returns {object}
 */
function buildOnlineSchoolingArticleJsonLd(meta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AISmallBiz",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/online-schooling`,
    },
  };
}

/**
 * Build the FAQPage JSON-LD for the /online-schooling guide with nine
 * question and answer pairs.
 * @returns {object}
 */
function buildOnlineSchoolingFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ONLINE_SCHOOLING_FAQ.map((pair) => ({
      "@type": "Question",
      name: pair.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: pair.answer,
      },
    })),
  };
}

/**
 * Build JSON-LD structured data for a route, mirroring buildJsonLdFor in
 * seo.ts. Returns a single object for most routes, or an array of objects
 * for /ai-search-prep which emits three blocks: HowTo, Article, and FAQPage,
 * and for /online-schooling which emits two blocks: Article and FAQPage.
 * @param {string} path
 * @param {{title:string,description:string}} meta
 * @returns {object|object[]|null}
 */
function buildJsonLdFor(path, meta) {
  if (path === "/") {
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
  if (path === "/ai-search-prep") {
    return [
      buildAiSearchPrepHowToJsonLd(meta),
      buildAiSearchPrepArticleJsonLd(meta),
      buildAiSearchPrepFaqJsonLd(),
    ];
  }
  if (path === "/online-schooling") {
    return [
      buildOnlineSchoolingArticleJsonLd(meta),
      buildOnlineSchoolingFaqJsonLd(),
    ];
  }
  if (GUIDE_PATHS.has(path)) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: meta.title,
      description: meta.description,
      url: `${SITE_URL}${path}`,
      image: SOCIAL_CARD,
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: "AISmallBiz",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
    };
  }
  return null;
}

/**
 * Escape a string for safe use inside an HTML text node or attribute value.
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Convert a route path to the snapshot file path on disk.
 *
 * The homepage route "/" returns null to signal that no snapshot should be
 * written: Vite already produces dist/index.html (the SPA entry and aliasing
 * fallback), and overwriting it would destroy the hashed bundle tags Vite
 * emitted. Every other route maps to an EXTENSIONLESS file (no .html suffix)
 * at the same relative path. The IC asset canister serves these extensionless
 * files at their clean URLs, and .ic-assets.json5 sets Content-Type: text/html;
 * charset=utf-8 for each one (the canister would otherwise default to
 * application/octet-stream). The extensionless files OVERWRITE any stale
 * extensionless asset keys from prior deploys, which is the primary fix for
 * clean-URL routing.
 *
 * FILESYSTEM CONFLICT RESOLUTION: A POSIX filesystem cannot have both a file
 * and a directory with the same name at the same path. There are two cases:
 *
 *  1. PARENT CONFLICT: If a route's parent path is ALSO a route (for example,
 *     /admin is a route AND /admin/chat-config is a route), then /admin writes
 *     to dist/admin (an extensionless file) and /admin/chat-config cannot also
 *     write to dist/admin/chat-config (an extensionless file) because
 *     dist/admin is already a file, not a directory. The write would fail
 *     with ENOTDIR. To resolve this, any route whose parent path is also in
 *     the route list uses the DIRECTORY-INDEX pattern instead: it writes to
 *     dist/<route>/index.html (for example, /admin/chat-config becomes
 *     admin/chat-config/index.html).
 *
 *  2. HUB CONFLICT: If a route HAS child routes (any route whose path starts
 *     with this route's path plus a slash, for example /ai-job-guides has
 *     children /ai-job-guides/plumbers, /ai-job-guides/restaurants, and so
 *     on), then writing an extensionless file at dist/<route> would make
 *     dist/<route> a file, not a directory. The child routes could not then
 *     nest as dist/<route>/<child>/index.html because mkdir would fail with
 *     ENOTDIR. To resolve this, any route that has child routes also uses the
 *     DIRECTORY-INDEX pattern: it writes to dist/<route>/index.html (for
 *     example, /ai-job-guides becomes ai-job-guides/index.html).
 *
 * The directory-index file is served by the ICP asset canister via the
 * enable_aliasing fallback (already set on the catch-all match in
 * .ic-assets.json5) and gets Content-Type text/html from the glob match rule
 * for .html files, so no separate extensionless match entry is needed for it
 * in .ic-assets.json5.
 *
 *  - "/" returns null (skip; Vite owns dist/index.html)
 *  - "/boutique-guide" becomes "boutique-guide" (extensionless)
 *  - "/tool-guides/quickbooks" becomes "tool-guides/quickbooks" (extensionless;
 *    /tool-guides is not a route, so no conflict)
 *  - "/admin" becomes "admin" (extensionless)
 *  - "/admin/chat-config" becomes "admin/chat-config/index.html"
 *    (directory-index, because /admin is also a route)
 *  - "/ai-job-guides" becomes "ai-job-guides/index.html"
 *    (directory-index, because /ai-job-guides has child routes such as
 *    /ai-job-guides/plumbers; an extensionless file at dist/ai-job-guides
 *    would block those children from nesting as
 *    dist/ai-job-guides/<child>/index.html with ENOTDIR)
 *  - "/guides/$id" is skipped (dynamic route, no concrete URL to snapshot)
 *
 * @param {string} routePath
 * @param {Set<string>} routePathSet The set of all non-home, non-dynamic route
 *   paths (each starting with "/"). Used to detect parent/child conflicts
 *   where a route's parent path is also a route.
 * @returns {string|null}
 */
function routeToFilePath(routePath, routePathSet) {
  if (routePath === "/") return null;
  const trimmed = routePath.replace(/^\/+/, "");
  // Detect parent/child filesystem conflict: if the parent path of this route
  // is also a route, then the parent writes an extensionless file at
  // dist/<parent>, which means dist/<parent> is a file, not a directory. We
  // cannot then write dist/<parent>/<child> as an extensionless file because
  // that requires dist/<parent> to be a directory (ENOTDIR error). Fall back
  // to the directory-index pattern: dist/<route>/index.html.
  const lastSlashIndex = routePath.lastIndexOf("/");
  if (lastSlashIndex > 0) {
    const parentPath = routePath.slice(0, lastSlashIndex);
    if (routePathSet.has(parentPath)) {
      return `${trimmed}/index.html`;
    }
  }
  // Detect hub/child filesystem conflict: if this route HAS child routes (any
  // route whose path starts with this route's path plus a slash), then writing
  // an extensionless file at dist/<route> would make dist/<route> a file, not
  // a directory. The child routes could not then nest as
  // dist/<route>/<child>/index.html because mkdir would fail with ENOTDIR.
  // Fall back to the directory-index pattern: dist/<route>/index.html. This
  // keeps the hub route servable at its clean URL while letting the children
  // nest inside it as directories.
  const prefix = routePath + "/";
  for (const otherPath of routePathSet) {
    if (otherPath !== routePath && otherPath.startsWith(prefix)) {
      return `${trimmed}/index.html`;
    }
  }
  return trimmed;
}

/**
 * Extract the script and stylesheet tags from the built dist/index.html so
 * each snapshot can boot the React app for human visitors after the
 * crawler-readable meta loads.
 *
 * Reads dist/index.html from disk (this runs in the closeBundle hook AFTER
 * Vite has written dist/index.html), then extracts the bundle-related
 * <link> tags and every <script type="module" ...> tag from its <head>.
 * This captures the real hashed bundle tags Vite emitted (for example,
 * /assets/index-[hash].js and /assets/index-[hash].css) plus preconnect,
 * preload, modulepreload, and icon links. It does NOT hardcode /src/main.tsx
 * (the dev path), which would be wrong for production snapshots.
 *
 * Route-specific <link> relations (canonical, alternate, prev, next) are
 * excluded because each snapshot already provides its own route-specific
 * canonical and meta. Injecting the homepage canonical from dist/index.html
 * would create a conflicting duplicate canonical link. Only bundle-related
 * link relations are injected: stylesheet, preconnect, preload,
 * modulepreload, icon, manifest, apple-touch-icon, and any other non-meta
 * relation Vite emits.
 *
 * @returns {string} A string of <link> and <script> tags ready to inject
 *   into a snapshot <head>, each on its own line with leading indentation.
 */
function extractBundleTagsFromBuiltIndex() {
  if (!existsSync(DIST_INDEX_HTML)) {
    throw new Error(
      "[generate-snapshots] dist/index.html not found at " + DIST_INDEX_HTML +
        ". This script runs in the closeBundle hook after Vite writes dist/index.html, so the file must exist. " +
        "Check that Vite build completed successfully and that emptyOutDir did not wipe dist/ after this hook.",
    );
  }
  const indexHtml = readFileSync(DIST_INDEX_HTML, "utf8");

  // Pull the <head>...</head> block so we only scan head tags, not body
  // content that might contain stray <link> or <script> strings.
  const headMatch = indexHtml.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) {
    throw new Error(
      "[generate-snapshots] dist/index.html has no <head> block. Cannot extract bundle tags for snapshots.",
    );
  }
  const headContent = headMatch[1];

  // Route-specific link relations that each snapshot already provides for
  // itself. Injecting the homepage version of these from dist/index.html
  // would create conflicting duplicates (for example, two canonical links
  // pointing at different URLs).
  const META_LINK_RELS = new Set([
    "canonical",
    "alternate",
    "prev",
    "next",
    "shortlink",
    "amphtml",
  ]);

  // Match every <link ...> tag (self-closing or with optional attributes).
  // Then filter by rel: keep bundle-related links (stylesheet, preconnect,
  // preload, modulepreload, icon, manifest, apple-touch-icon, etc.) and skip
  // route-specific meta links (canonical, alternate, prev, next).
  const linkRegex = /<link\b[^>]*\/?>/gi;
  // Match every <script type="module" ...></script> tag, including the
  // crossorigin attribute Vite adds. Capture the full tag including its
  // closing </script>. Module scripts may have empty bodies (Vite emits
  // <script type="module" crossorigin src="..."></script>).
  const moduleScriptRegex =
    /<script\b[^>]*\btype\s*=\s*["']module["'][^>]*><\/script>/gi;

  const tags = new Set();
  let linkMatch;
  while ((linkMatch = linkRegex.exec(headContent)) !== null) {
    const tag = linkMatch[0];
    const relMatch = tag.match(/\brel\s*=\s*["']([^"']+)["']/i);
    if (relMatch) {
      const rel = relMatch[1].toLowerCase().trim();
      // A link tag may carry multiple space-separated rel values. Skip the
      // tag only if ALL of its rel values are route-specific meta relations.
      const rels = rel.split(/\s+/);
      const allMeta = rels.every((r) => META_LINK_RELS.has(r));
      if (allMeta) {
        continue;
      }
    }
    tags.add(tag);
  }
  let scriptMatch;
  while ((scriptMatch = moduleScriptRegex.exec(headContent)) !== null) {
    tags.add(scriptMatch[0]);
  }

  if (tags.size === 0) {
    throw new Error(
      "[generate-snapshots] No <link> or <script type=module> tags found in dist/index.html <head>. " +
        "Vite should emit hashed bundle tags here. Check that the build produced a valid index.html.",
    );
  }

  // Sort for deterministic output: links first (preconnect, preload,
  // modulepreload, stylesheet, icon), then module scripts. This matches the
  // order Vite emits them and keeps the snapshot <head> stable across builds.
  const sortedTags = Array.from(tags).sort((a, b) => {
    const aIsScript = a.startsWith("<script");
    const bIsScript = b.startsWith("<script");
    if (aIsScript !== bIsScript) return aIsScript ? 1 : -1;
    return a.localeCompare(b);
  });

  return sortedTags.map((tag) => `    ${tag}`).join("\n");
}

/**
 * Build a short, plain language summary paragraph for the noscript fallback.
 * The summary uses the page title and description so search engines and users
 * with JavaScript disabled see meaningful text. No em dashes, no contractions.
 * @param {{title:string,description:string,path:string}} meta
 * @returns {string}
 */
function buildNoscriptSummary(meta) {
  const title = meta.title;
  const description = meta.description;
  const isHome = meta.path === "/";
  const isGuide = GUIDE_PATHS.has(meta.path);
  const isDynamic = meta.path.includes("$");

  const lines = [];
  lines.push(`<h1>${escapeHtml(title)}</h1>`);
  lines.push(`<p>${escapeHtml(description)}</p>`);

  if (isHome) {
    lines.push(
      "<p>AISmallBiz (TM) offers free AI help for small business owners. Browse practical guides, ready to run workflows, and tool tutorials for Google Maps, social media, hiring, branding, and daily operations. Ask a Small Business Question and get a clear answer with next steps. No signup is required to start.</p>",
    );
    lines.push(
      "<p>Choose a guide for your kind of shop: deli, retail, restaurant, salon, pool hall, pizza shop, fitness studio, bakery, cleaning service, or boutique. Then run a workflow or ask a small business question for help applying each step to your business.</p>",
    );
  } else if (isDynamic) {
    lines.push(
      "<p>This page shows a specific guide or workflow. Open the same address in a browser with JavaScript enabled to see the full interactive content, prompts, and step by step actions for your small business.</p>",
    );
  } else if (isGuide) {
    lines.push(
      "<p>This guide walks you through each step with plain language, examples, and prompts you can copy. Open the same address in a browser with JavaScript enabled to use the interactive checklist and ask a small business question for help applying the steps to your shop.</p>",
    );
  } else {
    lines.push(
      "<p>Open the same address in a browser with JavaScript enabled to see the full interactive page, tools, and AI help for your small business.</p>",
    );
  }

  lines.push(
    `<p>Visit the homepage at <a href="${SITE_URL}/">${SITE_URL}</a> for more free AI help for small businesses.</p>`,
  );

  return lines.join("\n    ");
}

/**
 * Build the complete HTML snapshot for a single route. The <head> contains
 * the route-specific meta tags (title, description, og:*, twitter:*, JSON-LD,
 * canonical) PLUS the extracted script and stylesheet tags from the built
 * dist/index.html so the React app boots for human visitors after the
 * crawler-readable meta loads. The <body> contains a minimal
 * <div id="root"></div> so the React app can hydrate. The app's client-side
 * router takes over once JS loads and renders the correct route based on the
 * URL.
 * @param {{path:string,title:string,description:string,ogTitle:string,ogDescription:string,ogType:string}} seed
 * @param {string} bundleTags The extracted <link> and <script> tags from
 *   dist/index.html, already indented one per line.
 * @returns {string}
 */
function buildSnapshot(seed, bundleTags) {
  const meta = {
    path: seed.path,
    title: seed.title,
    description: seed.description,
  };
  const canonical = `${SITE_URL}${seed.path}`;
  const jsonLd = buildJsonLdFor(seed.path, meta);
  // buildJsonLdFor returns a single object, an array of objects (for
  // /ai-search-prep which emits HowTo, Article, and FAQPage), or null. Each
  // JSON-LD block is emitted as its own script tag with type
  // application/ld+json so Google Rich Results Test can validate each schema
  // independently.
  const jsonLdBlocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const jsonLdScript = jsonLdBlocks
    .map(
      (block) =>
        `    <script type="application/ld+json">\n      ${JSON.stringify(block)}\n    </script>\n`,
    )
    .join("");

  const noscriptContent = buildNoscriptSummary(meta);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seed.title)}</title>
    <meta name="description" content="${escapeHtml(seed.description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(seed.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(seed.ogDescription)}" />
    <meta property="og:type" content="${escapeHtml(seed.ogType)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(SOCIAL_CARD)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(seed.ogTitle)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seed.ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(seed.ogDescription)}" />
    <meta name="twitter:image" content="${escapeHtml(SOCIAL_CARD)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seed.ogTitle)}" />
${jsonLdScript}${bundleTags}  </head>
  <body>
    <noscript>
      <main>
        <div>
          <strong>AISmallBiz (TM)</strong>
        </div>
        ${noscriptContent}
      </main>
    </noscript>
    <div id="root"></div>
  </body>
</html>
`;
}

/**
 * Generate all snapshots. Returns a summary of what was written.
 *
 * The homepage route "/" is skipped entirely: Vite already produces
 * dist/index.html (the SPA entry and aliasing fallback), and overwriting it
 * would destroy the hashed bundle tags Vite emitted. Dynamic routes (paths
 * containing "$", such as "/guides/$id" and "/workflows/$slug") are also
 * skipped because they have no concrete URL to snapshot; the SPA runtime
 * handles them client-side via the enable_aliasing fallback.
 *
 * @returns {{count:number,files:string[]}}
 */
export function generateSnapshots() {
  const seeds = parseRouteSeeds();
  const files = [];

  if (!existsSync(DIST_ROOT)) {
    mkdirSync(DIST_ROOT, { recursive: true });
  }

  // Extract the real hashed bundle tags from the built dist/index.html once.
  // This runs in the closeBundle hook AFTER Vite has written dist/index.html,
  // so the file exists and contains the real hashed <link> and <script> tags
  // Vite emitted. Each snapshot injects these exact tags so the React app
  // boots for human visitors after the crawler-readable meta loads.
  const bundleTags = extractBundleTagsFromBuiltIndex();
  console.log(
    "[generate-snapshots] Extracted " +
      bundleTags.split("\n").length +
      " bundle tag(s) from dist/index.html <head> for injection into snapshots.",
  );

  // Build the full list of non-dynamic, non-home route paths once. This set
  // is used by routeToFilePath to detect two kinds of filesystem conflicts:
  //
  //  1. PARENT CONFLICT: if a route's parent path is also a route (for
  //     example, /admin is a route AND /admin/chat-config is a route), the
  //     parent writes an extensionless file at dist/<parent>, so
  //     dist/<parent> is a file, not a directory. The child route then cannot
  //     write dist/<parent>/<child> as an extensionless file (ENOTDIR error)
  //     and must fall back to the directory-index pattern
  //     (dist/<parent>/<child>/index.html).
  //
  //  2. HUB CONFLICT: if a route has child routes (any route whose path
  //     starts with this route's path plus a slash, for example
  //     /ai-job-guides has children /ai-job-guides/plumbers and so on),
  //     writing an extensionless file at dist/<route> would make
  //     dist/<route> a file, not a directory. The child routes could not
  //     then nest as dist/<route>/<child>/index.html (ENOTDIR error). The
  //     hub route falls back to the directory-index pattern
  //     (dist/<route>/index.html).
  const allRoutePaths = seeds
    .map((seed) => seed.path)
    .filter((path) => !path.includes("$") && path !== "/");
  const routePathSet = new Set(allRoutePaths);

  for (const seed of seeds) {
    // Skip the homepage route "/" entirely. Vite already produces
    // dist/index.html (the SPA entry and aliasing fallback), and overwriting
    // it would destroy the hashed bundle tags Vite emitted. The homepage
    // meta is already in dist/index.html because index.html (the Vite source
    // template) carries the homepage title and Organization JSON-LD.
    if (seed.path === "/") {
      continue;
    }
    // Skip dynamic route placeholders (paths containing "$", such as
    // "/guides/$id" and "/workflows/$slug"). These are not real servable URLs:
    // a real URL like "/guides/some-slug" would never match a snapshot file
    // anyway, and the SPA fallback (index.html via enable_aliasing) handles
    // real dynamic URLs by rendering the detail page client-side.
    if (seed.path.includes("$")) {
      continue;
    }
    const relativePath = routeToFilePath(seed.path, routePathSet);
    if (relativePath === null) {
      continue;
    }
    const fullPath = join(DIST_ROOT, relativePath);
    const fileDir = dirname(fullPath);
    // FILESYSTEM CONFLICT GUARD: There are two conflict cases.
    //
    //  1. PARENT CONFLICT: If a route's parent path is also a route (for
    //     example, /admin is a route AND /admin/chat-config is a route), the
    //     parent writes an extensionless file at dist/<parent>, so
    //     dist/<parent> is a file, not a directory. The child route then
    //     cannot create dist/<parent>/<child>/ as a directory (ENOTDIR error)
    //     and cannot write dist/<parent>/<child>/index.html.
    //
    //  2. HUB CONFLICT: If a route has child routes (for example,
    //     /ai-job-guides has children /ai-job-guides/plumbers and so on),
    //     routeToFilePath already routes the hub to the directory-index
    //     pattern (dist/<route>/index.html), so the hub itself does not
    //     create an extensionless file that would block its children. The
    //     children then nest cleanly as dist/<route>/<child>/index.html.
    //
    // We detect the parent conflict case BEFORE attempting mkdir: if any
    // ancestor segment of fileDir is a regular file, the directory-index
    // write is impossible on this POSIX filesystem. We skip the snapshot
    // for this child route and let the SPA fallback (enable_aliasing in
    // .ic-assets.json5) serve it at runtime. This keeps the build green
    // instead of failing on an unresolvable filesystem conflict. The parent
    // route's extensionless file is unaffected.
    let conflictSkipped = false;
    if (!existsSync(fileDir)) {
      try {
        mkdirSync(fileDir, { recursive: true });
      } catch (mkdirError) {
        const msg = mkdirError instanceof Error ? mkdirError.message : String(mkdirError);
        if (msg.includes("ENOTDIR")) {
          console.warn(
            "[generate-snapshots] Skipping snapshot for " + seed.path +
              " (" + fullPath + "): a parent path is an extensionless file, so the directory-index pattern cannot create " + fileDir +
              ". The SPA fallback (enable_aliasing) will serve this route at runtime.",
          );
          conflictSkipped = true;
        } else {
          throw mkdirError;
        }
      }
    }
    if (conflictSkipped) {
      continue;
    }
    const html = buildSnapshot(seed, bundleTags);
    writeFileSync(fullPath, html, "utf8");

    // Post-write verification: re-read the file and confirm it exists and
    // contains the expected title. This catches the failure mode where the
    // write silently produces an empty or partial file, or where a later
    // build step wipes dist/ after this hook runs. If verification fails we
    // throw so the build fails loudly instead of shipping a broken snapshot
    // that the production canister would then serve as the SPA shell.
    let verifiedHtml;
    try {
      verifiedHtml = readFileSync(fullPath, "utf8");
    } catch (verifyReadError) {
      throw new Error(
        "[generate-snapshots] Post-write verification failed: could not re-read " +
          fullPath + " (" + (verifyReadError instanceof Error ? verifyReadError.message : verifyReadError) + ").",
      );
    }
    const expectedTitle = escapeHtml(seed.title);
    if (verifiedHtml.length === 0 || !verifiedHtml.includes(expectedTitle)) {
      throw new Error(
        "[generate-snapshots] Post-write verification failed for " + fullPath +
          ": expected the snapshot to contain the title \"" + seed.title +
          "\". The build will fail to prevent shipping a broken snapshot.",
      );
    }
    // Also verify the snapshot contains at least one bundle tag (a <script
    // type="module"> tag) so the React app can boot. Without these tags the
    // snapshot would be a dead end for human visitors.
    if (!verifiedHtml.includes('<script type="module"')) {
      throw new Error(
        "[generate-snapshots] Post-write verification failed for " + fullPath +
          ": snapshot is missing the <script type=\"module\"> bundle tag. " +
          "The React app would not boot for human visitors. The build will fail to prevent shipping a broken snapshot.",
      );
    }

    files.push(relativePath);
  }

  console.log(
    "[generate-snapshots] Wrote " + files.length + " static HTML snapshots to dist/ at their route paths (extensionless file pattern).",
  );

  // The social card PNG is written to dist/assets/generated/social-card.png
  // so the live site can serve it at /assets/generated/social-card.png.
  //
  // The primary source is the real PNG file at
  // public/assets/generated/social-card.png, read directly with readFileSync.
  // This guarantees valid PNG bytes (the file is verified to start with the
  // PNG magic signature 89504e470d0a1a0a) and does not depend on the
  // integrity of the embedded base64 fallback string.
  //
  // The embedded base64 string is kept as a fallback only for the case where
  // the source file read fails (for example, the public asset was deleted).
  // This makes the write robust against the Caffeine build cache, which can
  // skip copying unchanged public assets into a freshly emptied dist/ folder.
  // Because this code runs in the closeBundle hook (after Vite has finished
  // emptying and writing dist/), the written file survives the build.
  const frontendRoot = resolve(__dirname, "..");
  const socialCardDest = resolve(
    frontendRoot,
    "dist/assets/generated/social-card.png",
  );
  const socialCardSource = resolve(
    frontendRoot,
    "public/assets/generated/social-card.png",
  );
  mkdirSync(dirname(socialCardDest), { recursive: true });

  let socialCardBuffer;
  let socialCardSourceUsed = "file";
  try {
    const sourceBytes = readFileSync(socialCardSource);
    // Validate the PNG magic signature before trusting the source file.
    const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    if (sourceBytes.length < 8 || !sourceBytes.subarray(0, 8).equals(PNG_MAGIC)) {
      throw new Error(
        "Source social card PNG at " + socialCardSource + " is not a valid PNG (magic bytes mismatch).",
      );
    }
    socialCardBuffer = sourceBytes;
  } catch (fileError) {
    console.warn(
      "[generate-snapshots] Could not read source social card PNG from " +
        socialCardSource +
        " (" + (fileError instanceof Error ? fileError.message : fileError) +
        "). Falling back to embedded base64 string.",
    );
    socialCardSourceUsed = "base64-fallback";
    socialCardBuffer = Buffer.from(SOCIAL_CARD_PNG_BASE64, "base64");
    // Validate the fallback buffer too, so we never write a corrupt PNG.
    const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    if (socialCardBuffer.length < 8 || !socialCardBuffer.subarray(0, 8).equals(PNG_MAGIC)) {
      throw new Error(
        "Embedded base64 social card PNG is not a valid PNG (magic bytes mismatch). Both source file and fallback failed.",
      );
    }
  }

  writeFileSync(socialCardDest, socialCardBuffer);
  console.log(
    "[generate-snapshots] Wrote social card PNG (" + socialCardBuffer.length + " bytes, source=" + socialCardSourceUsed + ") to dist/assets/generated/social-card.png",
  );

  // Post-write verification: re-read the file from disk and confirm it is a
  // valid PNG with the expected byte length. This catches the failure mode
  // where the write silently produces an empty or corrupt file, or where a
  // later build step wipes dist/ after this hook runs. If verification fails
  // we throw so the build fails loudly instead of shipping a broken asset
  // that the production canister would then serve as the SPA shell.
  const PNG_MAGIC_VERIFY = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  let verifiedBytes;
  try {
    verifiedBytes = readFileSync(socialCardDest);
  } catch (verifyReadError) {
    throw new Error(
      "[generate-snapshots] Post-write verification failed: could not re-read " +
        socialCardDest + " (" + (verifyReadError instanceof Error ? verifyReadError.message : verifyReadError) + ").",
    );
  }
  if (
    verifiedBytes.length !== socialCardBuffer.length ||
    verifiedBytes.length < 8 ||
    !verifiedBytes.subarray(0, 8).equals(PNG_MAGIC_VERIFY)
  ) {
    throw new Error(
      "[generate-snapshots] Post-write verification failed for " + socialCardDest +
        ": expected " + socialCardBuffer.length + " bytes with PNG magic, got " +
        verifiedBytes.length + " bytes. The build will fail to prevent shipping a broken social card.",
    );
  }
  console.log(
    "[generate-snapshots] Verified social card PNG on disk: " + verifiedBytes.length +
      " bytes, magic bytes 89 50 4e 47 0d 0a 1a 0a OK.",
  );

  // Copy every other file in public/assets/generated/ into
  // dist/assets/generated/ via direct readFileSync/writeFileSync. This bypasses
  // the Vite public copy step entirely, which the Caffeine build cache
  // (dist/.build-checksums.json) can skip when dist/ is freshly emptied. The
  // social-card.png file is skipped here because it is already handled by the
  // logic above (with its own base64 fallback and verification).
  //
  // The two PNG files (social-card.dim_1200x630.png and
  // hero-smb-ai.dim_1200x600.png) get full post-write verification: re-read
  // the dist copy and validate the first 8 bytes are the PNG magic signature
  // 89 50 4e 47 0d 0a 1a 0a. If either is missing, empty, or has wrong magic
  // bytes, throw to fail the build loudly.
  //
  // The 6 JPG files get a simple existence check (file exists and byte length
  // greater than 0). JPG magic bytes are FF D8 FF but full validation is not
  // required for this task.
  const generatedSourceDir = resolve(
    frontendRoot,
    "public/assets/generated",
  );
  const generatedDestDir = resolve(
    frontendRoot,
    "dist/assets/generated",
  );
  mkdirSync(generatedDestDir, { recursive: true });

  const PNG_MAGIC_ASSET = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);
  const PNG_FILES_TO_VERIFY = new Set([
    "social-card.dim_1200x630.png",
    "hero-smb-ai.dim_1200x600.png",
  ]);

  let sourceDirEntries;
  try {
    sourceDirEntries = readdirSync(generatedSourceDir);
  } catch (readDirError) {
    throw new Error(
      "[generate-snapshots] Could not read source asset directory " +
        generatedSourceDir + " (" + (readDirError instanceof Error ? readDirError.message : readDirError) + ").",
    );
  }

  for (const entryName of sourceDirEntries) {
    // Skip the social card PNG since it is already handled above with its own
    // base64 fallback and verification. It is fine if it would be overwritten
    // identically, but skipping avoids a redundant write.
    if (entryName === "social-card.png") {
      continue;
    }

    const sourceAssetPath = join(generatedSourceDir, entryName);
    const destAssetPath = join(generatedDestDir, entryName);

    let assetBuffer;
    try {
      assetBuffer = readFileSync(sourceAssetPath);
    } catch (assetReadError) {
      throw new Error(
        "[generate-snapshots] Could not read source asset " + sourceAssetPath +
          " (" + (assetReadError instanceof Error ? assetReadError.message : assetReadError) + ").",
      );
    }
    if (assetBuffer.length === 0) {
      throw new Error(
        "[generate-snapshots] Source asset " + sourceAssetPath +
          " is empty (0 bytes). The build will fail to prevent shipping a broken asset.",
      );
    }

    writeFileSync(destAssetPath, assetBuffer);

    // Post-write verification for the two priority PNG files: re-read the dist
    // copy and validate the PNG magic signature. Throw to fail the build loudly
    // if the file is missing, empty, or corrupt.
    if (PNG_FILES_TO_VERIFY.has(entryName)) {
      let verifiedAssetBytes;
      try {
        verifiedAssetBytes = readFileSync(destAssetPath);
      } catch (assetVerifyReadError) {
        throw new Error(
          "[generate-snapshots] Post-write verification failed: could not re-read " +
            destAssetPath + " (" + (assetVerifyReadError instanceof Error ? assetVerifyReadError.message : assetVerifyReadError) + ").",
        );
      }
      if (
        verifiedAssetBytes.length !== assetBuffer.length ||
        verifiedAssetBytes.length < 8 ||
        !verifiedAssetBytes.subarray(0, 8).equals(PNG_MAGIC_ASSET)
      ) {
        throw new Error(
          "[generate-snapshots] Post-write verification failed for " + destAssetPath +
            ": expected " + assetBuffer.length + " bytes with PNG magic, got " +
            verifiedAssetBytes.length + " bytes. The build will fail to prevent shipping a broken asset.",
        );
      }
      console.log(
        "[generate-snapshots] Verified PNG asset on disk: " + entryName + " (" +
          verifiedAssetBytes.length + " bytes, magic bytes 89 50 4e 47 0d 0a 1a 0a OK).",
      );
    } else {
      // For the 6 JPG files, a simple existence check is sufficient.
      let jpgCheckBytes;
      try {
        jpgCheckBytes = readFileSync(destAssetPath);
      } catch (jpgVerifyReadError) {
        throw new Error(
          "[generate-snapshots] Post-write existence check failed: could not re-read " +
            destAssetPath + " (" + (jpgVerifyReadError instanceof Error ? jpgVerifyReadError.message : jpgVerifyReadError) + ").",
        );
      }
      if (jpgCheckBytes.length === 0) {
        throw new Error(
          "[generate-snapshots] Post-write existence check failed for " + destAssetPath +
            ": file is empty (0 bytes). The build will fail to prevent shipping a broken asset.",
        );
      }
      console.log(
        "[generate-snapshots] Copied asset " + entryName + " (" + jpgCheckBytes.length + " bytes) to dist/assets/generated/.",
      );
    }
  }

  return { count: files.length, files };
}

// Run when invoked directly via node, not when imported.
const isDirectRun =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectRun) {
  try {
    const { count, files } = generateSnapshots();
    console.log(
      `[generate-snapshots] Wrote ${count} static HTML snapshots to dist/ at their route paths (extensionless file pattern)`,
    );
    for (const file of files) {
      console.log(`  - dist/${file}`);
    }
  } catch (error) {
    console.error(
      "[generate-snapshots] Failed to generate snapshots:",
      error instanceof Error ? error.message : error,
    );
    process.exitCode = 1;
  }
}
