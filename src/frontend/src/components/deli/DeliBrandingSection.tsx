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
    subtitle: "Your origin is your most powerful ingredient",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          Every legendary NYC deli has a story: where the recipes came from, who
          taught the owner to cure pastrami, why this corner and not another.
          Katz's survived 135+ years not because the pastrami is good (though it
          is): but because the story is inseparable from the sandwich. Your
          deli's origin narrative is not marketing copy. It is the reason
          someone chooses you over the chain two blocks away.
        </p>
        <p>
          Document your story: the family recipe, the first location, the
          regular who has been coming for 20 years. Turn it into content: a
          framed photo wall, an "Our Story" card at every table, a 60-second
          video on Instagram. Authenticity converts better than any ad because
          customers in 2026 buy from real people with real stories, not
          anonymous kitchens.
        </p>
      </>
    ),
    actionItems: [
      "Write a one-page origin story: who started the deli, why, and what makes the recipes special.",
      "Create a photo wall or digital display showing the deli's history, family photos, and early days.",
      "Film a 60-second 'day in the life' video showing the 5am prep, the slicer, the bread delivery. Post it weekly.",
      "Add an 'Our Story' card to every takeout bag and table: one paragraph, one photo.",
    ],
    tafferNote:
      "Taffer always says: 'People do not buy food, they buy a story.' The delis that survive in New York are the ones where the owner is part of the product. If your story is not visible, you are just a kitchen.",
  },
  {
    title: "Visual Identity",
    subtitle: "The look, feel, and sensory signature of your deli",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          The best delis are sensory experiences before the first bite. The
          smell of curing meat. The sound of the slicer. The warm lighting that
          makes the pastrami glisten. The vintage photos on the wall that say
          "we have been here forever." These are not decorations: they are
          silent storytellers working for you every minute of every day.
        </p>
        <p>
          Your visual identity extends beyond the interior. The takeout bag, the
          menu design, the Instagram grid, the chalkboard sign on the sidewalk:
          every touchpoint should feel like the same deli. Consistency in visual
          identity is what makes a neighborhood spot feel like an institution.
          Invest in a cohesive color palette, typography, and photography style
          that reflects your story.
        </p>
      </>
    ),
    actionItems: [
      "Audit your deli through the five senses: what does it smell, sound, look, and feel like? Fix the weakest one this week.",
      "Design a consistent takeout bag, menu, and signage using the same color palette and typography.",
      "Curate the wall decor: every photo, sign, and artifact should reinforce your story. Remove anything generic.",
      "Create an Instagram content template with consistent fonts, colors, and framing for all posts.",
    ],
    tafferNote:
      "Taffer's first move on Bar Rescue is always the sensory audit: lighting, smell, sound. He knows customers decide whether to stay in the first 30 seconds based on sensory cues alone. Your deli is no different.",
  },
  {
    title: "Customer Experience",
    subtitle: "The sandwich is secondary; the experience is primary",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          The food has to be excellent: that is the price of entry. But the
          reason customers choose your deli over the one two blocks away is how
          you make them feel. Welcomed. Seen. Like they belong. When Maria gets
          her half-sour pickle with her tuna on rye every Tuesday, and you have
          it ready before she asks: that is Appreciated Branding in action. That
          is why she will never go anywhere else.
        </p>
        <p>
          Engineer the experience from the second they walk in: the greeting,
          the line management, the order-taking ritual, the handoff, the
          goodbye. Every interaction is a brand moment. The deli that feels like
          home wins. The deli that feels like a transaction loses: even if the
          pastrami is better.
        </p>
      </>
    ),
    actionItems: [
      "Implement a 'regulars log': names, usual orders, preferences. Review it before every shift.",
      "Create a greeting protocol: every customer gets acknowledged within 5 seconds of entering.",
      "Design the order-to-handoff flow to minimize wait time and maximize personal interaction.",
      "Add a 'community board' near the entrance: local events, neighborhood news, staff spotlights.",
    ],
    tafferNote:
      "Taffer drills this into every bar owner: 'The product gets them in the door. The experience gets them back.' In a deli, the pastrami gets them in. The way you remember their name gets them back.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a neighbor, not a corporation",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your deli's voice: on social media, on the menu, in the window sign,
          in how staff talk to customers: should sound like a neighbor who
          happens to make incredible sandwiches. Warm. Direct. Occasionally
          funny. Never corporate. The moment your Instagram caption reads like
          it was written by a marketing department, you have lost the
          authenticity that makes a deli special.
        </p>
        <p>
          Develop a simple voice guide: three words that describe how your deli
          speaks. "Warm, witty, unpretentious." Or "Direct, nostalgic, proud."
          Every piece of content: from the chalkboard to the Google review
          reply: should pass through that filter. Your voice is as recognizable
          as your logo, and far more memorable.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide for your deli. Share it with every staff member.",
      "Rewrite your menu descriptions to sound like you are telling a friend about the sandwich, not selling it.",
      "Audit your last 10 Instagram captions. Do they sound like you, or like a brand? Adjust accordingly.",
      "Train staff on greeting and farewell scripts that match your brand voice: then let them personalize.",
    ],
    tafferNote:
      "Taffer always rewrites the menu and the signage first. He knows that language shapes perception. 'World Famous Pastrami' hits different than 'Pastrami Sandwich, $14.' Words are free. Use them.",
  },
  {
    title: "Brand Strategy",
    subtitle: "From neighborhood spot to local institution",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding is not a campaign: it is a commitment. Every
          customer visit is a test. Did the sandwich taste the same as last
          Tuesday? Was the service as warm? Was the deli as clean? Consistency
          at scale is what turns customers into evangelists. It is what makes a
          deli legendary. The strategy is simple: deliver the same exceptional
          experience so reliably that it becomes expected.
        </p>
        <p>
          Build systems, not miracles. SOP checklists for every shift: meat
          prep, cut thickness, condiment portions, greeting protocol,
          cleanliness standard. The delis that last 50 years are not luckier:
          they are more systematic. Your brand strategy is the collection of
          systems that guarantee the experience you promise, every single time.
        </p>
      </>
    ),
    actionItems: [
      "Create a one-page 'Deli Standards' document: food prep, service, cleanliness, and greeting protocols.",
      "Implement daily opening and closing checklists that ensure consistency across every shift.",
      "Track customer feedback weekly: what are the top 3 compliments and top 3 complaints? Act on them.",
      "Set a 90-day goal: increase repeat customer rate by 15% through recognition and consistency systems.",
    ],
    tafferNote:
      "Taffer's closing advice on every rescue: 'Systems save businesses. Passion starts them, but systems keep them alive.' Your deli needs systems for the food, the service, and the experience. Without them, you are gambling.",
  },
];

export function DeliBrandingSection() {
  return (
    <section id="branding" data-ocid="deli-guide.branding_section">
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
        Appreciated Branding for NYC Delis
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes' Appreciated Branding framework, applied to the specific
        world of New York City delis: with Jon Taffer hospitality principles for
        operators who want to build an institution, not just a kitchen.
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
            It&#39;s about showing customers that they matter: not just for
            their wallets but as individuals.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            : Reid Holmes, <em>Appreciated Branding: This Is the Way</em>
          </p>
        </div>
      </div>

      <BrandingFrameworkDetails
        businessType="deli"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.62 0.1 15)"
        accentBg="oklch(0.62 0.1 15 / 0.07)"
        accentBorder="oklch(0.62 0.1 15 / 0.2)"
      />
    </section>
  );
}
