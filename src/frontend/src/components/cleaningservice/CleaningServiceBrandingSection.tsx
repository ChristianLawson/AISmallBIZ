import { BrandingFrameworkDetails } from "@/components/BrandingFrameworkDetails";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  Heart,
  Megaphone,
  Palette,
  Star,
  Target,
} from "lucide-react";

const SUBSECTIONS = [
  {
    title: "Brand Story",
    subtitle: "Trust built through transparency and genuine care",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          A cleaning service enters people's most private spaces: their homes.
          The companies that grow through referral rather than ads are the ones
          that treat every client as if they are the only client. That is
          Appreciated Branding: systemic, genuine appreciation built into every
          touchpoint from booking to post-visit follow-up. Your story: why you
          started, what you believe about cleanliness and care, who your team
          members are: builds the trust that makes clients invite you back into
          their lives.
        </p>
        <p>
          Document your narrative: the moment you realized cleaning is care
          work, the team members who make it possible, the clients who became
          family. Share behind-the-scenes content: your team at work (with
          permission), your product choices and why they matter, your community
          involvement. When clients know your story, they do not just book: they
          advocate. In an industry built on trust, transparency is your most
          powerful marketing tool.
        </p>
      </>
    ),
    actionItems: [
      "Write your company story in 150 words: why you started, what you believe, and who you serve.",
      "Create a 'Meet Our Team' series: feature one cleaner per month with their photo, story, and specialty.",
      "Document your product choices: why you use eco-friendly products, what they are, and how they protect families.",
      "Share community involvement: partner with a local charity and document it (with permission) on social media.",
    ],
  },
  {
    title: "Visual Identity",
    subtitle: "Professional presence that builds confidence",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          In the cleaning industry, visual identity is about trust signals. A
          professional website, branded uniforms, clean vehicles, and consistent
          marketing materials tell clients "we take our business seriously"
          before a single word is spoken. The cleaning service that shows up in
          a branded van with uniformed staff builds instant credibility. The one
          that shows up in an unmarked car with casual clothes raises questions
          : even if the cleaning is identical.
        </p>
        <p>
          Your visual identity extends to every touchpoint: the booking
          confirmation email, the reminder text, the invoice design, the
          thank-you card, the social media grid. Consistency across channels
          builds recognition. Recognition builds trust. Invest in a cohesive
          look that reflects your professionalism: a simple logo, a consistent
          color palette, and photography that shows your team at their best.
        </p>
      </>
    ),
    actionItems: [
      "Audit your visual identity: website, vehicles, uniforms, invoices, social media. Does it look professional and consistent?",
      "Invest in branded uniforms and vehicle decals. The cost is minimal; the trust signal is massive.",
      "Hire a photographer for one session: team photos, before/after shots (with permission), and workspace images.",
      "Design consistent templates for all client communications: booking confirmations, reminders, invoices, and follow-ups.",
    ],
  },
  {
    title: "Customer Experience",
    subtitle: "Make every client feel genuinely valued: not just serviced",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          Leave a handwritten or printed card after every first visit thanking
          the client by name and noting one specific thing you noticed about
          their home. This 30-second action generates more word-of-mouth than
          any ad. Reid Holmes' Appreciated Branding principle: people remember
          how you made them feel, not what you cleaned. Remember client
          preferences without being asked: preferred products, areas of
          particular attention, pets' names, whether they prefer you to be there
          or not.
        </p>
        <p>
          Send a text 24 hours after every job: "Hi [Name], just checking in:
          how did everything look? We want to make sure everything was perfect."
          Clients who receive this text leave reviews at 4x the rate of those
          who do not. It also surfaces issues before they become cancellations.
          Celebrate 6-month and 1-year anniversaries with a gesture: a free
          add-on service, a handwritten note, or a small gift card to a local
          coffee shop. This costs $15-25 and generates retention worth
          $600-1,200 per year per client.
        </p>
      </>
    ),
    actionItems: [
      "Print 50 thank-you cards with your logo. Leave one after every first visit for 30 days and track referrals.",
      "Add a 'Client Notes' field to every booking record: preferences, pets, attention areas. Update within 24 hours of every job.",
      "Set up a 24-hour follow-up text template. Make it sound personal, not automated.",
      "Create a 'Client Anniversary' reminder for 6 months and 12 months from each first booking. Send a small gesture.",
    ],
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a trusted professional, not a service provider",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your cleaning service's voice: in emails, on the phone, in texts, on
          social media: should sound like a trusted professional who happens to
          care deeply about your home. Warm. Reliable. Detail-oriented. Never
          apologetic about your prices or your boundaries. The moment your
          communication sounds like you are begging for business, you have lost
          the confidence that justifies premium pricing. The moment it sounds
          corporate and cold, you have lost the personal touch that drives
          referrals.
        </p>
        <p>
          Develop a voice guide: three words that describe how your service
          speaks. "Warm, professional, thorough." Or "Friendly, reliable,
          meticulous." Every email, every text, every phone call, every social
          post should pass through that filter. Your voice is what clients
          remember when they recommend you to a neighbor. Make it unmistakably
          yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every team member.",
      "Rewrite your website copy to sound like a conversation with a trusted advisor, not a sales pitch.",
      "Audit your last 10 client emails and texts. Do they match your voice guide? Adjust as needed.",
      "Create scripts for common interactions: booking, rescheduling, follow-up, and complaint resolution that match your voice.",
    ],
  },
  {
    title: "Brand Strategy",
    subtitle: "From service provider to trusted household partner",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          The cleaning services that grow through referral rather than ads are
          the ones that systematize appreciation. Build SOPs for every
          touchpoint: booking confirmation, pre-visit reminder, arrival
          greeting, cleaning protocol, departure checklist, 24-hour follow-up,
          and anniversary recognition. What gets systemized gets maintained.
          What gets maintained builds trust. The service that delivers the same
          exceptional experience every single time becomes a household habit,
          not a one-time purchase.
        </p>
        <p>
          Track what matters: client retention rate, referral rate, average
          client lifetime value, and complaint resolution time. Set quarterly
          improvement targets. The service that measures and adjusts survives.
          The service that guesses does not. Your strategy is simple: be so
          consistently excellent that clients never consider switching: and so
          genuinely appreciated that they cannot help but tell their friends.
        </p>
      </>
    ),
    actionItems: [
      "Create a 'Service Standards' document covering every touchpoint from booking to follow-up.",
      "Track key metrics monthly: retention rate, referral rate, average client lifetime value, complaint resolution time.",
      "Implement a quarterly client survey: 3 questions max. Act on feedback within 30 days.",
      "Set a 90-day goal: increase referral rate by 25% through appreciation systems and consistent quality.",
    ],
  },
];

export function CleaningServiceBrandingSection() {
  return (
    <section id="branding" data-ocid="cleaning-service-guide.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <Award size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.25)",
          }}
        >
          Section 4: Reid Holmes
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding for Your Cleaning Business
      </h2>
      <p className="text-muted-foreground text-lg mb-2 max-w-2xl">
        Reid Holmes&rsquo; Appreciated Branding framework: make every client
        feel genuinely valued: not just serviced: and they become your most
        powerful marketing channel.
      </p>
      <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
        Framework by{" "}
        <a
          href="https://christianlawson.substack.com/p/appreciated-branding-this-way-of"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
          style={{ color: "oklch(0.50 0.22 290)" }}
        >
          Reid Holmes: Appreciated Branding
        </a>
      </p>

      {/* Hero principle */}
      <div
        className="rounded-2xl p-7 mb-8 flex items-start gap-5"
        style={{
          background: "oklch(0.55 0.18 290 / 0.07)",
          border: "1px solid oklch(0.55 0.18 290 / 0.2)",
        }}
      >
        <Heart
          size={28}
          className="shrink-0 mt-0.5"
          style={{ color: "oklch(0.50 0.22 290)" }}
        />
        <div>
          <h3 className="font-display text-lg font-bold text-foreground mb-2">
            The Core Principle
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A cleaning service enters people&rsquo;s most private spaces: their
            homes. The companies that grow through referral rather than ads are
            the ones that treat every client as if they&rsquo;re the only
            client. That&apos;s Appreciated Branding: systemic, genuine
            appreciation built into every touchpoint from booking to post-visit
            follow-up.
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="cleaning-service"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.50 0.22 290)"
        accentBg="oklch(0.50 0.22 290 / 0.07)"
        accentBorder="oklch(0.50 0.22 290 / 0.2)"
      />
    </section>
  );
}
