import { BrandingFrameworkDetails } from "@/components/BrandingFrameworkDetails";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Megaphone,
  Palette,
  Quote,
  Target,
  Users,
} from "lucide-react";

const SUBSECTIONS = [
  {
    title: "Brand Story",
    subtitle: "Your truck-to-store journey is your superpower",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          Use storytelling to frame your pizza shop not as a restaurant, but as
          the culmination of a journey. Every mobile pizza operator has a story:
          the early mornings, the broken-down truck, the loyal customers who
          followed them from street corner to street corner. That story is your
          most powerful brand asset because no chain can replicate it.
        </p>
        <p>
          Document the real stories: the first customer who tracked your truck
          on social media, the regular who drove 20 minutes for your slice, the
          rainy night when you sold out in an hour. Turn these into content: a
          &ldquo;From Truck to Store&rdquo; campaign featuring real customers,
          behind-the-scenes dough prep at 5 AM, and the moment you signed the
          lease. Their stories are your most powerful brand asset because they
          cannot be replicated by any competitor.
        </p>
      </>
    ),
    actionItems: [
      "Interview 5 of your most loyal truck customers. Document their stories: how they found you, their favorite pizza, what they are most excited about for the store.",
      "Launch a 'From Truck to Store' campaign: feature one customer story per week on social media and in-store displays.",
      "Create a 'Wall of Gratitude' in your shop: photos and quotes from truck regulars who supported your journey.",
      "Film a 2-minute documentary-style video about your truck-to-store journey. Post it and use it in local outreach and press releases.",
    ],
    tafferNote:
      "Taffer always says: 'You do not sell drinks. You sell a feeling.' In a pizza shop, you do not sell slices. You sell the feeling of discovering something special: the secret spot that became a neighborhood institution. Your story is the feeling.",
  },
  {
    title: "Visual Identity",
    subtitle: "Design that says 'authentic' before a word is spoken",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          The visual identity of your pizza shop: the oven, the signage, the box
          design, the staff uniforms, the social media grid: sends a message
          before a single word is spoken. A wood-fired oven visible from the
          street is a billboard that says "authentic." A hand-painted sign says
          "artisan." A custom box with your story says "we care about details."
        </p>
        <p>
          Every visual decision should ask: does this reinforce our
          truck-to-store story? The signage, the menu board, the box design, the
          staff attire. A pizza shop that looks like a chain will be treated
          like a chain. One that looks like a labor of love will be treated like
          a destination. Design intentionally.
        </p>
      </>
    ),
    actionItems: [
      "Audit your shop's visual identity through a first-time customer's eyes: signage, entrance, menu board, box design, staff uniforms. Fix the top 3 issues this month.",
      "Invest in custom pizza box design with your story, social handles, and a QR code for reordering. The box outlasts the pizza by hours.",
      "Implement warm, flattering lighting over the dining area. Avoid harsh fluorescents that create a cafeteria atmosphere.",
      "Design a consistent visual look for all marketing: social media, flyers, in-store signage, and catering materials.",
    ],
    tafferNote:
      "Taffer's first move on every rescue is the lighting. He knows that harsh lighting makes people feel exposed, and warm lighting makes them feel safe. Your pizza shop's lighting is your first impression. Make it count.",
  },
  {
    title: "Customer Experience",
    subtitle: "Consistency turns first-timers into regulars",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          The most powerful Appreciated Branding happens in the details. When
          the dough tastes the same on day 1 and day 100, you have built trust.
          When the staff greets regulars by name, you have built belonging. When
          the box arrives with a handwritten thank-you note, you have built
          loyalty. These details cost pennies and create customers for life.
        </p>
        <p>
          Anti-chain sentiment is real, not performative. Patagonia built its
          brand on genuine environmental commitment: not marketing spin. Your
          authenticity works the same way. If the story is on the wall but the
          pizza is inconsistent, customers will sense it within one bite and
          never return. Train staff relentlessly, document your recipes, and
          share real stories of customers who feel at home here. Authentic
          quality is your competitive moat.
        </p>
      </>
    ),
    actionItems: [
      "Document your dough recipe with gram-level precision. Train every pizzaiolo to follow it exactly. Consistency is your brand promise.",
      "Start a loyalty program that rewards visits, not just dollars. 'Your 10th slice is on us' feels more personal than points.",
      "Train all staff on greeting protocols: every customer gets a genuine welcome, regulars get acknowledged by name.",
      "Add a small surprise to every 10th order: a free garlic knot, a sticker, a handwritten note. Small gestures create massive loyalty.",
    ],
    tafferNote:
      "Taffer says: 'Culture is not what you say. It is what you allow.' If you have a quality standard but never enforce it, customers know. And they leave. And they tell their friends. Culture is built through action, not posters.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a neighborhood institution, not a restaurant manager",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your pizza shop's voice: on social media, in box copy, on signage, in
          how staff talk to customers: should sound like a neighborhood
          institution that happens to make great pizza. Warm. Proud.
          Occasionally playful. Never corporate. The moment your marketing
          sounds like a chain, you have lost the authenticity that makes a
          neighborhood pizza shop special.
        </p>
        <p>
          Develop a voice guide: three words that describe how your shop speaks.
          &ldquo;Warm, proud, real.&rdquo; Or &ldquo;Authentic, welcoming,
          unpretentious.&rdquo; Every post, every box, every sign, every
          in-venue announcement should pass through that filter. Your voice is
          what customers remember when they recommend you to a friend. Make it
          unmistakably yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every staff member. Post it in the prep area.",
      "Audit your last 10 social media posts. Do they sound authentic and warm, or generic? Rewrite as needed.",
      "Create a 'Weekly Special' announcement template that matches your brand voice. Use it consistently.",
      "Train staff on inclusive language: how to greet new customers, how to handle complaints, how to celebrate regulars.",
    ],
    tafferNote:
      "Taffer rewrites every sign and every menu. He knows that 'Pizza and Wings' sounds like a commodity, but 'Nonna's Recipe, Hand-Tossed Daily' sounds like a mission. Words shape perception. Choose them like you choose your flour.",
  },
  {
    title: "Brand Strategy",
    subtitle: "Every visit confirms the promise you made",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding is a commitment, not a campaign. The quality on
          Monday must match Friday. The welcome at 11 AM must match 11 PM. The
          pizza in month 1 must match month 12. Consistency is what converts
          first-timers into regulars and regulars into advocates. Build SOPs for
          every shift: dough prep, sauce portioning, oven temp, greeting
          protocol, box presentation. Consistency at scale is a system: not
          magic.
        </p>
        <p>
          The Planned Loss Strategy amplifies your brand: branded stickers,
          temporary tattoos, or mini pizza keychains sent home with orders.
          Customers photograph them and post: your brand identity spreads
          organically. At $0.50 per item, the cost is negligible next to the
          loyalty it creates. The most powerful marketing is often
          counterintuitive. Emotional connection, perceived exclusivity, and
          small surprises turn occasional visitors into loyal advocates.
        </p>
      </>
    ),
    actionItems: [
      "Build SOPs for every shift: dough prep, sauce, oven temp, greeting, box presentation. Post them in the prep area.",
      "Implement the Planned Loss Strategy: branded take-home items (stickers, magnets) that customers collect and post about.",
      "Track customer retention: how many first-timers return within 30 days? Set a 90-day improvement target.",
      "Create a mystery shopper program: have a friend visit unannounced and grade the experience. Adjust based on feedback.",
    ],
    tafferNote:
      "Taffer's closing advice: 'Systems save businesses. Passion starts them, but systems keep them alive.' Your pizza shop needs systems for the dough, the service, and the experience. Without them, you are hoping. And hope does not fill seats.",
  },
];

const ACCENT = "#D97706";
const ACCENT_BG = "rgba(245, 158, 11, 0.12)";
const ACCENT_LIGHT = "rgba(245, 158, 11, 0.15)";

export function PizzaShopBrandingSection() {
  return (
    <section id="branding" data-ocid="pizzashop-guide.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: ACCENT_BG }}
        >
          <Users size={20} style={{ color: ACCENT }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: ACCENT_LIGHT,
            color: ACCENT,
            border: `1px solid ${ACCENT}40`,
          }}
        >
          Section 6: Branding
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding for Pizza Shops
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes' Appreciated Branding framework applied to the specific
        challenge of building a pizza shop brand that customers do not just
        recognize: they love. With Jon Taffer hospitality principles for
        creating a venue people do not just visit, they belong to.
      </p>

      {/* Pull quote */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4"
        style={{
          background: ACCENT_LIGHT,
          border: `1px solid ${ACCENT}30`,
        }}
      >
        <Quote
          size={32}
          className="shrink-0"
          style={{ color: `${ACCENT}60` }}
        />
        <div>
          <p
            className="font-display text-lg font-semibold italic leading-relaxed"
            style={{ color: "#92400E" }}
          >
            &ldquo;Appreciated Branding is about demonstrating genuine care for
            customers, solving their problems, and aligning with their values.
            It&rsquo;s about showing customers that they matter: not just for
            their wallets but as individuals.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="pizzashop"
        subsections={SUBSECTIONS}
        accentColor={ACCENT}
        accentBg={ACCENT_LIGHT}
        accentBorder={`${ACCENT}40`}
      />
    </section>
  );
}
