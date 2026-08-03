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
    subtitle: "Position the pool hall as a symbol for women in sport",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          Use storytelling to frame your pool hall not as a game venue, but as a
          space where women master a traditionally male-dominated skill. Nike
          built an empire on this formula: it works just as powerfully at the
          local level. Your pool hall's story is not about tables and cues; it
          is about empowerment, community, and the women who found their place
          here.
        </p>
        <p>
          Document the real stories: the first woman who joined your league, the
          regular who brings her daughter every Saturday, the tournament that
          changed someone's confidence. Turn these into content: a "She Breaks
          the Rack" campaign featuring real women players on your social,
          in-venue photos, and event marketing. Their stories are your most
          powerful brand asset because they cannot be replicated by any
          competitor.
        </p>
      </>
    ),
    actionItems: [
      "Interview 5 women regulars. Document their stories: how they started, what the league means to them, their favorite moment.",
      "Launch a 'She Breaks the Rack' campaign: feature one woman player per week on social media and in-venue displays.",
      "Create a 'Wall of Women' in your pool hall: photos and quotes from female regulars, league champions, and first-timers.",
      "Film a 2-minute documentary-style video about your women's league. Post it and use it in local outreach.",
    ],
    tafferNote:
      "Taffer always says: 'You do not sell drinks. You sell a feeling.' In a pool hall, you do not sell table time. You sell belonging, mastery, and community. Your story is the feeling.",
  },
  {
    title: "Visual Identity",
    subtitle: "Design that says 'you belong here' before a word is spoken",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          The visual identity of your pool hall: the lighting, the decor, the
          signage, the staff attire, the social media grid: sends a message
          before a single word is spoken. Honeycomb amber votive glass and
          battery tea candles create a visually stunning, warm ambiance.
          Customers associate that warm glow with positive emotions, reinforcing
          their connection to the venue. The environment becomes part of the
          brand identity.
        </p>
        <p>
          Every visual decision should ask: does this make women feel welcome,
          safe, and celebrated? The signage, the bathroom cleanliness, the
          lighting level, the music volume, the artwork on the walls. A pool
          hall that looks and feels like a community gathering place will
          attract a community. One that looks like a dive bar will attract dive
          bar customers. Design intentionally.
        </p>
      </>
    ),
    actionItems: [
      "Audit your venue's visual identity through a woman's eyes: lighting, decor, signage, cleanliness, artwork. Fix the top 3 issues this month.",
      "Implement warm, flattering lighting at every table. Avoid harsh fluorescents that create an unwelcoming atmosphere.",
      "Curate the music playlist: inclusive, upbeat, and at a volume that allows conversation. Update monthly.",
      "Design a consistent visual look for all marketing: social media, flyers, in-venue signage, and league materials.",
    ],
    tafferNote:
      "Taffer's first move on every rescue is the lighting. He knows that harsh lighting makes people feel exposed, and warm lighting makes them feel safe. Your pool hall's lighting is your first impression. Make it count.",
  },
  {
    title: "Customer Experience",
    subtitle: "Leagues create belonging: belonging creates loyalty",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          The most powerful Appreciated Branding happens inside a league. When
          players feel wanted, supported, and celebrated: they become advocates.
          Your league is not a product; it is a community. Frame it that way
          from day one. Name your women's league something empowering. Create a
          group chat or private social group. Celebrate every milestone : first
          win, first tournament, first year member. Small recognition = massive
          retention.
        </p>
        <p>
          Anti-harassment must feel real, not performative. Patagonia built its
          brand on genuine environmental commitment: not marketing spin. Your
          inclusivity policy works the same way. If the signs are up but the
          culture is not there, women will sense it within minutes and never
          return. Train staff relentlessly, enforce policies visibly, and share
          real stories of women who feel safe and welcome here. Authentic safety
          is your competitive moat.
        </p>
      </>
    ),
    actionItems: [
      "Name your women's league something empowering and memorable. Create a logo and identity for it.",
      "Start a private group chat or social group for league members. Post weekly: tips, celebrations, upcoming events.",
      "Train all staff on inclusivity and anti-harassment protocols. Role-play scenarios. Make it real, not checkbox.",
      "Celebrate every milestone publicly: first win, first tournament, anniversary of joining. Recognition drives retention.",
    ],
    tafferNote:
      "Taffer says: 'Culture is not what you say. It is what you allow.' If you have a zero-tolerance policy but never enforce it, women know. And they leave. And they tell their friends. Culture is built through action, not posters.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a community leader, not a venue manager",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your pool hall's voice: on social media, in league communications, on
          signage, in how staff talk to players: should sound like a community
          leader who happens to run a great venue. Inclusive. Encouraging.
          Occasionally playful. Never exclusionary. The moment your marketing
          sounds like a sports bar, you have lost the community feeling that
          makes a league special.
        </p>
        <p>
          Develop a voice guide: three words that describe how your pool hall
          speaks. "Welcoming, empowering, fun." Or "Inclusive, competitive,
          supportive." Every post, every email, every announcement, every
          in-venue sign should pass through that filter. Your voice is what
          players remember when they recruit a friend. Make it unmistakably
          yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every staff member and league organizer.",
      "Audit your last 10 social media posts. Do they sound inclusive and empowering, or generic? Rewrite as needed.",
      "Create a 'League Update' email template that matches your brand voice. Send it weekly during season.",
      "Train staff on inclusive language: how to greet new players, how to handle conflicts, how to celebrate wins.",
    ],
    tafferNote:
      "Taffer rewrites every sign and every menu. He knows that 'Ladies Night' sounds like a gimmick, but 'Women's League: Where Champions Start' sounds like a mission. Words shape perception. Choose them like you choose your cues.",
  },
  {
    title: "Brand Strategy",
    subtitle: "Every visit confirms the promise you made",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding is a commitment, not a campaign. The welcoming
          atmosphere on Monday must match Friday. The safety enforcement at 8pm
          must match 11pm. The league experience in month 1 must match month 12.
          Consistency is what converts first-timers into regulars and regulars
          into advocates. Build SOPs for every shift: lighting level, music
          volume, signage check, greeting protocol, incident response.
          Consistency at scale is a system: not magic.
        </p>
        <p>
          The Planned Loss Strategy amplifies your brand: branded 8-ball
          coasters and mini cue charms sent home with food orders. Customers
          photograph them and post: your brand identity spreads organically. At
          $2 per item, the cost is negligible next to the loyalty it creates.
          The most powerful marketing is often counterintuitive. Emotional
          connection, perceived exclusivity, and reverse psychology turn
          occasional visitors into loyal advocates.
        </p>
      </>
    ),
    actionItems: [
      "Build SOPs for every shift: lighting, music, signage, greeting, incident response. Post them in the staff area.",
      "Implement the Planned Loss Strategy: branded take-home items (coasters, cue charms) that customers 'borrow' and post about.",
      "Track league retention: how many members return season to season? Set a 90-day improvement target.",
      "Create a mystery shopper program: have a friend visit unannounced and grade the experience. Adjust based on feedback.",
    ],
    tafferNote:
      "Taffer's closing advice: 'Systems save businesses. Passion starts them, but systems keep them alive.' Your pool hall needs systems for the experience, the safety, and the community. Without them, you are hoping. And hope does not fill tables.",
  },
];

export function PoolHallBrandingSection() {
  return (
    <section id="branding" data-ocid="poolhall-guide.branding_section">
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
        Appreciated Branding for Your Pool Hall
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes' Appreciated Branding framework applied to the specific
        challenge of building a gender-inclusive pool hall community: with Jon
        Taffer hospitality principles for creating a venue people do not just
        visit, they belong to.
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
        businessType="poolhall"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.55 0.18 290)"
        accentBg="oklch(0.55 0.18 290 / 0.08)"
        accentBorder="oklch(0.55 0.18 290 / 0.2)"
      />
    </section>
  );
}
