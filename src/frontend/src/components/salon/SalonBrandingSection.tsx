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
    subtitle: "Why you became a stylist: and why it matters",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          In an industry built on appearance, the most powerful brand
          differentiator is genuine human story. Why did you become a stylist?
          What drives your craft at 8am on a Saturday? What do you believe about
          beauty that no chain salon would dare say? Your salon's origin story
          is not a bio: it is the emotional foundation that makes clients choose
          you over the Drybar down the street.
        </p>
        <p>
          Share the real journey: the first chair you ever worked, the mentor
          who believed in you, the moment you realized beauty work is confidence
          work. Post behind-the-scenes content. Feature the real team, not stock
          imagery. When clients know your story, they do not just book
          appointments: they invest in your success. Authenticity converts
          better than any ad because it cannot be faked or bought.
        </p>
      </>
    ),
    actionItems: [
      "Write your salon origin story in 200 words: why you started, what you believe, and who you serve.",
      "Create a 'Meet the Team' series on Instagram featuring real stylists with real stories.",
      "Film a 90-second 'Why I Cut Hair' video with your most senior stylist. Post and pin it.",
      "Add a one-paragraph 'Our Story' section to your booking confirmation email.",
    ],
    tafferNote:
      "Taffer always asks owners: 'Why do you exist?' If the answer is 'to make money,' the business is already dying. Your salon exists to make people feel something. That story is your foundation.",
  },
  {
    title: "Visual Identity",
    subtitle: "The aesthetic that makes clients feel at home",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          The best salons become a third place: not home, not work, but the
          place where she exhales. That feeling is engineered through sensory
          design: lighting that flatters, a signature scent that triggers
          memory, a playlist that matches your brand energy, and an interior
          that says "you belong here" before a word is spoken. Drybar built a
          $255M brand on a simple idea: a blowout should feel like a treat, not
          a transaction.
        </p>
        <p>
          Your visual identity extends to every touchpoint: the Instagram grid,
          the booking confirmation page, the product packaging, the robe and
          towel quality. Every visual decision should ask: does this make her
          feel more confident, more relaxed, more herself? Cohesion across all
          channels is what separates a salon from a brand.
        </p>
      </>
    ),
    actionItems: [
      "Define your salon's sensory signature: one signature scent, one playlist, one lighting level. Implement all three this week.",
      "Audit your Instagram grid: does it look like a cohesive brand or a random collection? Create a content template.",
      "Upgrade the waiting area: fresh flowers, curated magazines, a signature beverage. Small touches, massive impact.",
      "Design a consistent look for all client-facing materials: business cards, product bags, appointment cards.",
    ],
    tafferNote:
      "Taffer's first walkthrough always includes the sensory audit. He knows that lighting, scent, and sound determine whether a customer stays for one drink or five. In a salon, they determine whether she books her next appointment before she leaves.",
  },
  {
    title: "Customer Experience",
    subtitle: "The experience IS the product",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          The cut is what she pays for. The experience is why she comes back.
          From the moment she books to the moment she leaves, every interaction
          is part of your brand. The consultation where you really listen. The
          scalp massage that makes her close her eyes. The complimentary drink.
          The way you say goodbye. These are not extras: they are the product.
          The salon that engineers these moments wins. The salon that treats
          them as afterthoughts loses clients to the one that does not.
        </p>
        <p>
          Remember every client's name, preferred stylist, exact products used
          last visit, and birthday. When a client feels truly known, she does
          not just rebook: she refers. Build a CRM habit: log every detail after
          every appointment. This is not extra effort. This IS the service. The
          personal touch is your unfair advantage over every chain.
        </p>
      </>
    ),
    actionItems: [
      "Map your full client journey from first Google search to post-appointment follow-up. Identify every friction point and delight opportunity.",
      "Create a client profile card for every client: name, birthday, products used, preferred stylist, last service. Review before every appointment.",
      "Design a consultation script that ensures every stylist asks the same quality questions every time.",
      "Implement a post-appointment follow-up: personal text 24 hours later, not an automated email.",
    ],
    tafferNote:
      "Taffer says: 'The product gets them in. The experience gets them back.' In a salon, the cut gets them in. The way you make them feel gets them back. And back. And back.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak to her like a friend who happens to be an expert",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your salon's voice should sound like the best friend who also happens
          to be a beauty expert: knowledgeable but never condescending, warm but
          never unprofessional, confident but never arrogant. The moment your
          Instagram sounds like a corporate beauty brand, you have lost the
          intimacy that makes a salon special. The moment your front desk sounds
          scripted, you have lost the authenticity that builds trust.
        </p>
        <p>
          Develop a voice guide: three words that describe how your salon
          speaks. "Warm, expert, empowering." Or "Playful, honest, inclusive."
          Every caption, every email, every phone greeting, every consultation
          should pass through that filter. Your voice is what clients remember
          when they describe your salon to a friend. Make it unmistakably yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every team member and post it in the break room.",
      "Audit your last 10 Instagram captions and 5 email templates. Rewrite any that do not match your voice.",
      "Train front desk staff on a greeting and farewell script that matches your brand voice: then encourage personalization.",
      "Create a 'voice bank' of 20 phrases your stylists can use during consultations that reflect your brand personality.",
    ],
    tafferNote:
      "Taffer rewrites every menu and every sign. He knows that 'Signature Cut & Style' sounds like a salon, but 'The Cut That Makes You Feel Like You Again' sounds like a brand. Words are your cheapest upgrade.",
  },
  {
    title: "Brand Strategy",
    subtitle: "From appointment-based to relationship-based",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          The most common reason clients leave a salon: inconsistency. A great
          experience with one stylist, a mediocre one with another. Standardize
          your consultation process, your product protocols, and your client
          communication so every visit delivers the same premium experience.
          Appreciated Branding is not a campaign: it is a commitment. The warm
          welcome on Tuesday must match Friday. The energy from your best
          stylist must match your newest hire.
        </p>
        <p>
          Build SOPs for every touchpoint: greeting script, pre-class check-in,
          post-class connection, missed-class protocol. The consistency IS the
          brand. Inconsistency is the most common reason boutique salons fail
          after a strong start. Your strategy is simple: systematize excellence
          so thoroughly that it becomes your baseline, not your peak.
        </p>
      </>
    ),
    actionItems: [
      "Create a one-page 'Salon Standards' document every stylist follows: consultation questions, product recommendation protocol, rebooking ritual, farewell script.",
      "Implement a quality check: mystery shop your own salon once a month. Grade every touchpoint.",
      "Track retention metrics: rebooking rate, 90-day return rate, referral rate. Set quarterly improvement targets.",
      "Build a training program for new stylists that covers technical skills AND brand experience standards.",
    ],
    tafferNote:
      "Taffer's final advice on every rescue: 'You cannot manage what you do not measure.' Track your retention, your rebooking rate, and your referral rate. If you do not know the numbers, you do not know your business.",
  },
];

export function SalonBrandingSection() {
  return (
    <section id="branding" data-ocid="salon-guide.branding_section">
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
        Appreciated Branding for Your Salon
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes' Appreciated Branding framework, applied to the world of
        salon ownership: with Jon Taffer hospitality principles for building a
        brand clients do not just visit, they belong to.
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
            &ldquo;Appreciated Branding is about more than just selling services
            : it&apos;s about demonstrating genuine care for clients, solving
            their problems, and aligning with their values.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="salon"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.62 0.1 15)"
        accentBg="oklch(0.62 0.1 15 / 0.07)"
        accentBorder="oklch(0.62 0.1 15 / 0.2)"
      />
    </section>
  );
}
