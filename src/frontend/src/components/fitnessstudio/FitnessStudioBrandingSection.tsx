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
    subtitle: "Give your members a tribe, not just a gym membership",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          The most successful boutique studios do not sell fitness: they sell
          identity. "I am a [Studio Name] member" becomes part of how people
          describe themselves. Design a brand story, rituals, and insider
          language that creates this tribal feeling from day one. Your origin
          story: why you opened, what you believe about fitness, who you exist
          for: is the emotional foundation that makes members choose you over
          the cheaper chain down the street.
        </p>
        <p>
          Share the real journey: the moment you realized fitness is confidence
          work, the member who changed your perspective, the community that
          formed in your first class. Post behind-the-scenes content. Feature
          real members' fitness journeys on your social channels. Not
          transformations. Not before/afters. The journey: week 1 vs. week 12
          energy levels, confidence shifts, new friendships formed. Authenticity
          converts better than any ad.
        </p>
      </>
    ),
    actionItems: [
      "Write your studio origin story in 200 words: why you started, what you believe, and who you serve.",
      "Create a 'Member Journey' content series: real members sharing their non-scale victories and community connections.",
      "Design insider language: a signature greeting, a class ritual, a member nickname system. Build tribal identity.",
      "Film a 90-second 'Why We Exist' video with your most engaged members. Post and pin it.",
    ],
  },
  {
    title: "Visual Identity",
    subtitle: "The aesthetic that makes her want to show up",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          Nike did not build a trillion-dollar brand selling shoes: they sold
          the feeling of pushing your limits. Your studio sells the feeling of
          becoming someone stronger, more confident, and more capable. Every
          visual touchpoint: the Instagram grid, the studio interior, the
          merchandise, the class photos: should reinforce this emotional
          narrative. The lighting should flatter. The space should energize. The
          photos should make members want to share.
        </p>
        <p>
          Consistency across channels matters: the same energy, the same
          aesthetic, the same story whether she finds you on Instagram, on
          ClassPass, or walking past your window. Invest in professional
          photography of real classes with real members. Design merchandise that
          members want to wear outside the studio: because it is a statement of
          identity, not just a logo.
        </p>
      </>
    ),
    actionItems: [
      "Audit your visual identity: Instagram grid, studio interior, merchandise, website. Does it tell one cohesive story?",
      "Hire a photographer for one class shoot. Use real members, real sweat, real energy. Use these images for 6 months.",
      "Design studio merchandise that members want to wear in public: hoodies, tote bags, water bottles that reflect your brand aesthetic.",
      "Create a 'photo moment' in your studio: a branded wall or mirror where members naturally take post-class selfies.",
    ],
  },
  {
    title: "Customer Experience",
    subtitle: "Make every member feel genuinely wanted",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          Reid Holmes' Appreciated Branding is built on a deceptively simple
          idea: people return to places where they feel valued as individuals. A
          fitness studio that remembers names, celebrates milestones, and checks
          in when someone goes quiet creates the most powerful retention tool
          available. Implement a "We missed you" protocol: any member who misses
          2 weeks gets a personal text from their favorite instructor, not an
          automated email. The personal touch is what Appreciated Branding is
          built on.
        </p>
        <p>
          Map your full member journey from first Google search to post-class
          follow-up. Identify every friction point and every delight
          opportunity. The consultation, the first class experience, the
          post-class high-five, the milestone text, the community event
          invitation. These are not extras: they are the product. The studio
          that engineers belonging wins. The studio that treats fitness as a
          transaction loses members to the one that does not.
        </p>
      </>
    ),
    actionItems: [
      "Implement a 'We missed you' protocol: personal text from their favorite instructor after 2 weeks of absence.",
      "Map the member journey from discovery to 6-month anniversary. Identify 3 friction points and 3 delight opportunities.",
      "Create a 'Wall of Wins': physical or digital: where members post non-scale victories: first pull-up, first 5K, first confident weight room moment.",
      "Host a monthly community event: member brunch, outdoor workout, or charity class. Belonging drives retention.",
    ],
  },
  {
    title: "Brand Voice",
    subtitle:
      "Speak like a coach who believes in her, not a brand that needs her",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your studio's voice: on social media, in class, in emails, on the
          studio walls: should sound like the coach who sees your potential
          before you do. Encouraging. Knowledgeable. Never shaming. The moment
          your marketing uses "get your beach body" language, you have lost the
          body-positive positioning that differentiates boutique studios from
          chains. The moment your instructors say "no excuses," you have lost
          the member who needed to hear "listen to your body" instead.
        </p>
        <p>
          Develop a voice guide: three words that describe how your studio
          speaks. "Empowering, inclusive, honest." Or "Playful, supportive,
          strong." Every caption, every email, every in-class cue, every wall
          quote should pass through that filter. Audit every instructor's verbal
          cues this week. Replace "burn fat" with "build strength." Replace "no
          excuses" with "listen to your body." Language IS the brand at the
          point of experience.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every instructor and post it in the studio.",
      "Audit every instructor's verbal cues in every class this week. Replace shame-based language with strength-based language.",
      "Rewrite your marketing copy to focus on how members feel (strong, capable, confident) rather than how they look.",
      "Create a 'language bank' of 20 phrases instructors can use that reflect your brand voice and values.",
    ],
  },
  {
    title: "Brand Strategy",
    subtitle: "Every class confirms the promise you made",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding is not a campaign: it is a commitment. The warm
          welcome on Tuesday must match Friday. The energy from your best
          instructor must match your newest hire. SOPs for greeting, music,
          cleanliness, and member communication are how you deliver belonging at
          scale. Inconsistency is the most common reason boutique studios fail
          after a strong start. The member who has a great experience with one
          instructor and a mediocre one with another will leave: and tell her
          friends why.
        </p>
        <p>
          Build systems for every touchpoint: greeting script, pre-class
          check-in, post-class connection, missed-class protocol, instructor
          training, and quality standards. Track retention metrics: rebooking
          rate, 90-day return rate, referral rate. Set quarterly improvement
          targets. The studio that measures and adjusts survives. The studio
          that guesses does not.
        </p>
      </>
    ),
    actionItems: [
      "Build SOPs for every touchpoint: greeting, pre-class, post-class, missed-class, and instructor onboarding.",
      "Track retention metrics monthly: rebooking rate, 90-day return rate, referral rate, class attendance trends.",
      "Implement a mystery member program: have a friend take classes unannounced and grade the experience. Adjust.",
      "Set a 90-day goal: increase 90-day retention by 15% through consistency systems and personal outreach.",
    ],
  },
];

export function FitnessStudioBrandingSection() {
  return (
    <section id="branding" data-ocid="fitness-studio-guide.branding_section">
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
        Appreciated Branding for Your Fitness Studio
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes&rsquo; Appreciated Branding methodology applied to the
        specific challenge of building a loyal, community-driven fitness studio.
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
            It&rsquo;s about showing customers that they matter: not just for
            their wallets but as individuals.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="fitness-studio"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.55 0.18 290)"
        accentBg="oklch(0.55 0.18 290 / 0.08)"
        accentBorder="oklch(0.55 0.18 290 / 0.2)"
      />
    </section>
  );
}
