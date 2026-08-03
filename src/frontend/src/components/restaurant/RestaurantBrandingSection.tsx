import { BrandingFrameworkDetails } from "@/components/BrandingFrameworkDetails";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Megaphone,
  Palette,
  Target,
  Users,
} from "lucide-react";

const SUBSECTIONS = [
  {
    title: "Brand Story",
    subtitle: "Your story is the reason for the wait",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          The Bungalow built a wait list on the strength of its story: Indian
          and South Asian cultural representation, told through every element of
          the experience. Your restaurant's story: why it exists, where it comes
          from, what it stands for: is not marketing copy. It is the reason
          people choose you over the place next door. In a city with 27,000
          restaurants, story is the only sustainable differentiator.
        </p>
        <p>
          Document your narrative: the chef's journey, the family recipes, the
          neighborhood connection, the mission beyond profit. Turn it into
          content: a framed story at the entrance, a "Meet the Chef" card on
          every table, a video series on Instagram. When diners know your story,
          they do not just eat: they participate. The restaurant that feels like
          a story wins. The restaurant that feels like a menu loses.
        </p>
      </>
    ),
    actionItems: [
      "Write a one-page restaurant story: the chef's journey, the cuisine's origin, and why this neighborhood.",
      "Create a 'Story Wall' at the entrance featuring photos, artifacts, and a timeline of the restaurant's history.",
      "Film a 2-minute 'From Our Kitchen' video showing the sourcing, prep, and philosophy. Post monthly.",
      "Add a story card to every check presenter: one paragraph about a dish's origin or the chef's inspiration.",
    ],
    tafferNote:
      "Taffer says: 'People do not eat at restaurants. They eat at stories.' The restaurants with lines out the door are the ones where the owner is part of the show. If your story is not visible, you are just a kitchen with tables.",
  },
  {
    title: "Visual Identity",
    subtitle: "Design that tells your story before the first bite",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          Every visual element of your restaurant: the menu design, the
          plateware, the lighting, the staff uniforms, the bathroom fixtures:
          communicates your brand before a single word is spoken. The Bungalow's
          design is not decoration; it is narrative. Every pattern, every color,
          every texture reinforces the story of Indian and South Asian cultural
          representation. Your visual identity should do the same.
        </p>
        <p>
          Consistency across channels matters: the Instagram grid, the
          reservation page, the exterior signage, and the interior atmosphere
          should feel like the same restaurant. Invest in professional
          photography. Design a cohesive menu that reads like a story, not a
          spreadsheet. The visual experience is part of the meal: and diners
          judge it before they taste a thing.
        </p>
      </>
    ),
    actionItems: [
      "Audit your restaurant's visual identity: menu, signage, Instagram, interior, staff uniforms. Does it tell one coherent story?",
      "Hire a food photographer for one session. Use those images consistently across all channels for 6 months.",
      "Redesign your menu to read like a narrative: dish descriptions that tell origin stories, not just ingredient lists.",
      "Create a 'visual standards' document: approved fonts, colors, photo filters, and plating guidelines.",
    ],
    tafferNote:
      "Taffer's first move is always the visual audit. He knows that diners decide whether to stay in the first 60 seconds based on what they see, smell, and feel. Your restaurant's visual identity is your first course.",
  },
  {
    title: "Customer Experience",
    subtitle: "Design for the regular, not the visitor",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          Tourists are marketing. Regulars are revenue. Price for locals. Create
          a menu section that never changes, because your regulars count on it.
          Know your 10 most loyal tables by name. The restaurant built for
          tourists closes in Year 2. The restaurant built for regulars is still
          there in Year 20. A table for two on a Tuesday could be a first date,
          a business dinner, a birthday, or a difficult conversation. Train your
          staff to read the table and respond accordingly.
        </p>
        <p>
          Engineer rituals: the weekly special they call ahead for, the birthday
          protocol, the table they always request. These small rituals create
          the emotional infrastructure of loyalty. Log regulars' preferences,
          dietary needs, and special dates. The restaurant that feels like it
          understood the moment becomes irreplaceable. The restaurant that
          treats every table the same becomes forgettable.
        </p>
      </>
    ),
    actionItems: [
      "Identify your 20 most frequent guests. Create a profile for each: preferences, allergies, special dates, favorite table.",
      "Design a 'regulars menu': 3-5 dishes that never change, so loyal customers always have their favorites available.",
      "Train staff on 'table reading': how to identify celebration vs. business vs. romance and adjust service accordingly.",
      "Implement a birthday protocol: complimentary dessert, personalized card, staff sings (or does not: know your guest).",
    ],
    tafferNote:
      "Taffer always says: 'Regulars are your foundation. Everything else is gravy.' A restaurant that does not know its regulars by name is a restaurant that is already failing. Know them. Remember them. Reward them.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a host, not a marketer",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your restaurant's voice: on the menu, on social media, in reservation
          confirmations, in how staff describe dishes: should sound like a
          gracious host welcoming guests into their home. Warm. Knowledgeable.
          Occasionally playful. Never corporate. The moment your Instagram reads
          like a press release, you have lost the intimacy that makes a
          restaurant special. The moment your server sounds scripted, you have
          lost the authenticity that builds regulars.
        </p>
        <p>
          Develop a voice guide: three words that describe how your restaurant
          speaks. "Warm, worldly, generous." Or "Bold, honest, celebratory."
          Every piece of content: from the chalkboard special to the Google
          review reply: should pass through that filter. Your voice is what
          diners remember when they recommend you. Make it unmistakably yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every front-of-house team member.",
      "Rewrite your menu descriptions to sound like a server telling a guest about their favorite dish, not a food critic.",
      "Audit your last 10 social media posts. Do they sound like your restaurant, or like any restaurant? Adjust.",
      "Train servers on dish storytelling: 30-second stories for 5 signature items that match your brand voice.",
    ],
    tafferNote:
      "Taffer rewrites every menu. He knows that 'Grilled Salmon, $28' is a transaction, but 'The salmon our chef's mother made every Sunday: grilled over hardwood, finished with lemon from her garden' is an experience. Words are free. Use them like a chef uses salt.",
  },
  {
    title: "Brand Strategy",
    subtitle: "Consistency is the product",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          "Consistency is the product" (Bruce Bronster). The same dish, executed
          perfectly, every service, by every cook. This is not aspirational: it
          is the baseline. Write the recipes. Document the plating. Run the
          training. Hold the standard. The restaurant that delivers the same
          exceptional experience every single time builds trust. The restaurant
          that varies builds uncertainty: and uncertainty kills loyalty.
        </p>
        <p>
          Build systems for every element of the experience: opening procedures,
          prep standards, service protocols, closing checklists, and quality
          controls. The restaurants that last 30 years are not luckier: they are
          more systematic. Your brand strategy is the collection of systems that
          guarantee the experience you promise, whether it is Tuesday lunch or
          Saturday dinner, whether the owner is in the kitchen or on vacation.
        </p>
      </>
    ),
    actionItems: [
      "Create a 1-page 'Restaurant Standards' card for every team member: recipes, plating, service, cleanliness.",
      "Implement a daily pre-service briefing: 5 minutes to review standards, specials, and VIP guests.",
      "Track consistency metrics: ticket times, complaint rates, return visit rates. Review weekly.",
      "Build a manager-on-duty checklist that covers food quality, service standards, and cleanliness every shift.",
    ],
    tafferNote:
      "Taffer's closing line on every rescue: 'Systems save restaurants. Passion starts them, but systems keep them open.' Your restaurant needs systems for the food, the service, and the experience. Without them, you are hoping. And hope is not a strategy.",
  },
];

export function RestaurantBrandingSection() {
  return (
    <section id="branding" data-ocid="restaurant-guide.branding_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.62 0.1 15 / 0.12)" }}
        >
          <Users size={20} style={{ color: "oklch(0.35 0.08 15)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.62 0.1 15 / 0.1)",
            color: "oklch(0.35 0.08 15)",
            border: "1px solid oklch(0.62 0.1 15 / 0.25)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Appreciated Branding for Your Restaurant
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The restaurants that last in New York are not just feeding people: they
        are providing an experience that people build their lives around. With
        Jon Taffer hospitality principles for operators who want to build an
        institution.
      </p>

      {/* Reid Holmes pull quote */}
      <div
        className="rounded-2xl p-7 mb-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.28 0.12 330 / 0.08) 0%, oklch(0.78 0.12 85 / 0.08) 100%)",
          border: "1px solid oklch(0.28 0.12 330 / 0.18)",
        }}
      >
        <blockquote
          className="font-display text-lg md:text-xl italic font-semibold leading-relaxed mb-3"
          style={{ color: "oklch(0.22 0.02 50)" }}
        >
          &ldquo;The restaurants that last in New York are not just feeding
          people. They are providing an experience that people build their lives
          around. That is Appreciated Branding at its highest expression.&rdquo;
        </blockquote>
        <cite
          className="text-sm not-italic font-semibold"
          style={{ color: "oklch(0.55 0.14 85)" }}
        >
          : Reid Holmes, Appreciated Branding
        </cite>
      </div>

      <BrandingFrameworkDetails
        businessType="restaurant"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.28 0.12 330)"
        accentBg="oklch(0.28 0.12 330 / 0.08)"
        accentBorder="oklch(0.28 0.12 330 / 0.2)"
      />

      {/* Attribution */}
      <div
        className="mt-8 rounded-xl p-4 text-center"
        style={{
          background: "oklch(0.28 0.12 330 / 0.05)",
          border: "1px solid oklch(0.28 0.12 330 / 0.12)",
        }}
      >
        <p className="text-xs text-muted-foreground">
          Appreciated Branding framework by{" "}
          <a
            href="https://christianlawson.substack.com/p/appreciated-branding-this-way-of"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "oklch(0.28 0.12 330)" }}
          >
            Reid Holmes on Substack
          </a>{" "}
          : Adapted for NYC restaurant operators, 2026.
        </p>
      </div>
    </section>
  );
}
