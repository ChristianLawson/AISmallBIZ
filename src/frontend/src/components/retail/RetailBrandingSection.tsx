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
    subtitle: "She is not just shopping: she has a story",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          A customer trying on a blazer before a job interview, buying a gift
          for a difficult conversation, treating herself after a hard month.
          When your staff and brand recognize the emotional context behind a
          purchase, the store becomes more than a store. The SoHo boutique that
          grew 210% did so by defining who she was and who she was for:
          "considered accessories for considered women." Your brand identity is
          not your logo: it is the consistent expression of who you are and why
          you exist.
        </p>
        <p>
          Document your brand story: why you opened this store, what you believe
          about your customers, what gap you saw in the market. Turn it into a
          narrative that every staff member can tell in 30 seconds. When
          customers know your story, they do not just buy: they advocate.
          Authenticity is the only sustainable competitive advantage in retail.
        </p>
      </>
    ),
    actionItems: [
      "Write your brand identity statement: 'We are [what] for [who].' Share it with every staff member.",
      "Create a 'Our Story' display near the entrance: photos, founder quote, and mission in 50 words or less.",
      "Train every staff member to tell your origin story in 30 seconds. Practice until it is natural.",
      "Audit every buying decision, display choice, and piece of content against your brand identity statement.",
    ],
  },
  {
    title: "Visual Identity",
    subtitle: "The aesthetic that makes her want to stay",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          Golden Goose serves coffee, wraps gifts by hand, and personalizes
          every sneaker. These are not profit centers: they are experience
          investments. The $4 coffee creates a 30-minute visit. The gift wrap
          becomes a memory. The personalization becomes a story she tells. Your
          visual identity: the store layout, the lighting, the displays, the
          packaging: should make her want to stay longer, browse deeper, and
          remember the feeling.
        </p>
        <p>
          Consistency across channels is non-negotiable: the same visual
          aesthetic, the same service standard, the same story, whether she
          finds you on Instagram, on Google, or in person. The moment the
          in-store experience does not match the online promise, you have broken
          trust. Audit your Instagram, your website, and your store window in
          the same sitting. Do they tell the same story?
        </p>
      </>
    ),
    actionItems: [
      "Audit your Instagram, website, and store window in one sitting. Do they tell the same story? Fix any disconnect this week.",
      "Design a signature in-store experience moment: handwritten receipt note, tissue paper fold, or personal text when her item arrives.",
      "Create a visual standards guide: approved colors, fonts, photo filters, and display principles.",
      "Upgrade your packaging: the unboxing experience is part of the product. Invest in bags, tissue, and stickers that reflect your brand.",
    ],
  },
  {
    title: "Customer Experience",
    subtitle: "Build the experience she will tell three people about",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          She is not just shopping: she is having an experience. The boutique
          that wins is the one that makes her feel seen, understood, and styled.
          Log customer preferences, track sizes, remember what they have bought
          before. When a new arrival matches a customer's profile, text them
          personally. This practice, done consistently, turns one-time shoppers
          into lifelong clients.
        </p>
        <p>
          Design your welcome moment: what do they see, hear, and smell in the
          first 10 seconds? What does the first staff interaction say? Is the
          answer "you belong here" or "can I help you find something?" Build the
          welcome ritual and train every team member to deliver it. The store
          she drives past her neighborhood to visit is the one that made her
          feel something the others did not.
        </p>
      </>
    ),
    actionItems: [
      "Implement a simple CRM note for every repeat customer: what she bought, what she mentioned, what she was looking for.",
      "Design your welcome ritual: the first 10 seconds of every visit. Train every team member to deliver it consistently.",
      "Create a 'fitting room experience': flattering lighting, a full-length mirror, a place to sit, and a staff member who checks in.",
      "Send a personal text (not automated) when a new arrival matches a customer's profile. No discount required.",
    ],
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a stylist, not a salesperson",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your boutique's voice: on social media, in emails, on tags, in how
          staff talk to customers: should sound like a stylish friend who
          happens to curate an incredible store. Warm. Knowledgeable. Never
          pushy. The moment your Instagram sounds like a department store
          catalog, you have lost the intimacy that makes a boutique special. The
          moment your staff sounds like they are working on commission, you have
          lost the trust that builds loyalty.
        </p>
        <p>
          Develop a voice guide: three words that describe how your boutique
          speaks. "Curated, warm, confident." Or "Playful, honest, inclusive."
          Every caption, every email, every price tag, every fitting room
          conversation should pass through that filter. Your voice is what
          customers remember when they describe your store to a friend. Make it
          unmistakably yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every staff member and post it in the stockroom.",
      "Rewrite your product descriptions to sound like a friend recommending a favorite piece, not a catalog listing.",
      "Audit your last 10 social media posts. Do they sound like your boutique, or like any boutique? Adjust.",
      "Train staff on consultation language: how to suggest without selling, how to compliment without flattery.",
    ],
  },
  {
    title: "Brand Strategy",
    subtitle: "From store to brand people belong to",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Omnichannel consistency is not a technology problem: it is a brand
          discipline problem. The same visual aesthetic, the same service
          standard, the same story, whether she finds you on Instagram, on
          Google, or in person. The boutique that delivers the same feeling
          across every channel builds trust. The boutique that varies by channel
          builds confusion: and confused customers do not return.
        </p>
        <p>
          Build systems for consistency: a visual standards document, a service
          protocol, a content calendar, and a customer feedback loop. Track what
          works: which posts drive visits, which experiences drive referrals,
          which products drive repeat purchases. The boutique that measures and
          adjusts survives. The boutique that guesses does not.
        </p>
      </>
    ),
    actionItems: [
      "Create a brand standards document: visual identity, voice guide, service protocol, and content calendar.",
      "Track key metrics monthly: foot traffic, conversion rate, average transaction value, repeat customer rate.",
      "Implement a quarterly customer survey: 3 questions max. Act on the feedback within 30 days.",
      "Set a 90-day goal: increase repeat customer rate by 20% through personalization and consistency systems.",
    ],
  },
];

export function RetailBrandingSection() {
  return (
    <section id="branding" data-ocid="retail-guide.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <Users size={20} style={{ color: "oklch(0.38 0.1 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.3)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding for Your Store
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes' Appreciated Branding framework, applied to NYC retail
        stores: turning transactional shoppers into brand advocates.
      </p>

      {/* Pull quote */}
      <div
        className="rounded-xl p-5 mb-10 flex items-start gap-4"
        style={{
          background: "oklch(0.62 0.1 15 / 0.07)",
          border: "1px solid oklch(0.62 0.1 15 / 0.2)",
        }}
      >
        <Quote
          size={32}
          className="shrink-0"
          style={{ color: "oklch(0.62 0.1 15 / 0.4)" }}
        />
        <div>
          <p
            className="font-display text-lg font-semibold italic leading-relaxed"
            style={{ color: "oklch(0.28 0.08 15)" }}
          >
            &ldquo;In retail, Appreciated Branding is the difference between a
            store someone visits and a brand someone belongs to. One is
            transactional. The other is a relationship.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="retail"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.28 0.12 330)"
        accentBg="oklch(0.28 0.12 330 / 0.07)"
        accentBorder="oklch(0.28 0.12 330 / 0.2)"
      />
    </section>
  );
}
