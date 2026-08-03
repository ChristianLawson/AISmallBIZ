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
    subtitle: "Personalized styling rooted in genuine care",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          Reid Holmes' Appreciated Branding framework is built on making
          customers feel genuinely seen and valued. In a boutique, this means
          keeping a simple customer profile: their size, their go-to colors,
          what they bought last time, and upcoming events they are shopping for.
          When a new arrival matches a customer's profile, text them. This
          practice, done consistently, turns one-time shoppers into lifelong
          clients. Your story: why you curate what you curate, who you exist
          for, what gap you saw: is the emotional foundation that makes clients
          choose you over the department store.
        </p>
        <p>
          Document your narrative: the moment you realized there was no store
          for "her," the first piece you ever sold, the client who became a
          friend. Turn it into content: a "Our Story" card at the register, a
          founder feature on Instagram, a video walkthrough of your buying
          process. When customers know your story, they do not just shop: they
          invest. Authenticity is the only sustainable advantage in fashion
          retail.
        </p>
      </>
    ),
    actionItems: [
      "Write your boutique origin story in 150 words: why you started, who you serve, and what makes your curation special.",
      "Create a customer profile system: size, color preferences, purchase history, upcoming occasions. Update after every visit.",
      "Send a personal text (not automated) when a new arrival matches a customer's profile. No discount required.",
      "Film a 60-second 'How We Buy' video showing your curation process. Post it and pin it.",
    ],
  },
  {
    title: "Visual Identity",
    subtitle: "The aesthetic that makes her feel seen",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          Your boutique's visual identity: the store layout, the lighting, the
          displays, the fitting rooms, the packaging, the Instagram grid: should
          make every customer feel like the store was designed for her. A
          rotating in-store display featuring photos of real customers wearing
          pieces from your boutique is the most powerful trust signal you can
          create. It shows body diversity, age diversity, and styling
          versatility. New customers see people like themselves in the clothes,
          and imagining themselves in the outfit becomes easy.
        </p>
        <p>
          Consistency across channels matters: the same aesthetic, the same
          story, the same feeling whether she finds you on Instagram, on Google,
          or walking past your window. Invest in professional photography that
          reflects your actual customers, not models. Design packaging that
          feels like a gift: because every purchase should feel like one. The
          visual experience is part of the product.
        </p>
      </>
    ),
    actionItems: [
      "Create a 'Community Wall' near the fitting rooms: 8-12 photos of real customers wearing your pieces. Rotate quarterly.",
      "Audit your Instagram grid: does it reflect your actual customers' diversity, or an idealized version? Adjust.",
      "Upgrade your packaging: tissue paper, stickers, handwritten note, and a branded bag that feels like a gift.",
      "Design a consistent visual look for all marketing: social media, email, in-store signage, and website.",
    ],
  },
  {
    title: "Customer Experience",
    subtitle: "The experience she will tell three people about",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          A handwritten card with a first purchase is the single highest-ROI
          retention action a boutique can execute. In a world of automated email
          sequences and social media ads, a physical handwritten note is so rare
          it creates a memorable moment. Research shows customers who receive a
          handwritten card after a purchase are 40% more likely to return within
          90 days. Keep cards and stamps at the register. Write 3 sentences:
          acknowledge the specific item they bought, say why you thought it
          would suit them, and invite them to a future event. It takes 90
          seconds and generates a social media story more often than you would
          expect.
        </p>
        <p>
          Early access to new capsule collection arrivals, a 24-hour window
          before anything is posted on social, makes your loyal customers feel
          like VIPs. The invitation is the reward, not just the discount. Email
          your top 50 customers the night before any new arrival drop: "You are
          getting first access at 6pm tonight before it goes on Instagram." No
          discount required. The exclusivity alone drives purchases and social
          posts.
        </p>
      </>
    ),
    actionItems: [
      "Keep handwritten cards and stamps at the register. Write 3 sentences after every first purchase.",
      "Create a VIP early access list: top 50 customers get 24-hour first look at new arrivals. No discount needed.",
      "Design a fitting room experience: flattering lighting, full-length mirror, comfortable seating, and a staff check-in.",
      "Host a monthly 'Styling Evening' for top customers: private shopping, styling tips, and first access to new pieces.",
    ],
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a stylist who knows her, not a store that needs her",
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
    subtitle: "From shoppers to ambassadors",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding's highest expression is when customers
          voluntarily tell others about your boutique, not because you paid
          them, but because they feel so valued they cannot help it. The Style
          Advocate program formalizes this: invite your 10 to 15 most loyal
          customers to be featured style ambassadors with exclusive perks in
          exchange for authentic social content about your store. Invite your
          top advocates to a private Ambassador Evening before a new collection
          drops. They get first pick, you get authentic content from 10 to 15
          real people. No follower count requirement. Genuine enthusiasm and
          real-life style diversity matter more than reach.
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
      "Launch a Style Advocate program: invite 10-15 top customers to be ambassadors with exclusive perks.",
      "Host a quarterly Ambassador Evening: private shopping, first access, and content creation opportunity.",
      "Track key metrics monthly: foot traffic, conversion rate, average transaction value, repeat customer rate.",
      "Set a 90-day goal: increase referral rate by 30% through advocacy programs and personalized experiences.",
    ],
  },
];

export function BoutiqueBrandingSection() {
  return (
    <section id="branding" data-ocid="boutique-guide.branding_section">
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
          Section 4
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding for Your Boutique
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes&rsquo; Appreciated Branding framework applied to boutique
        retail &mdash; personalizing the experience so deeply that customers
        don&rsquo;t just come back, they bring their friends.
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
            &ldquo;Appreciated Branding is about demonstrating genuine care for
            customers, solving their problems, and aligning with their values.
            It&rsquo;s about showing customers that they matter &mdash; not just
            for their wallets but as individuals.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &mdash; Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="boutique"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.55 0.18 290)"
        accentBg="oklch(0.55 0.18 290 / 0.08)"
        accentBorder="oklch(0.55 0.18 290 / 0.2)"
      />
    </section>
  );
}
