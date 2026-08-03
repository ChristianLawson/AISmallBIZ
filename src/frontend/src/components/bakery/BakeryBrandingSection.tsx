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
    subtitle: "Your origin story is your most powerful marketing asset",
    icon: BookOpen,
    content: (
      <>
        <p className="mb-3">
          Customers at independent bakeries are buying a story as much as a
          croissant. Why did you start this? What is your baking philosophy?
          Where do your suppliers come from? Who taught you to fold dough at
          4am? Appreciated Branding means being transparent and genuine: not
          performative. Your real story, told honestly, is more compelling than
          any ad because it cannot be replicated by a chain or a grocery store.
        </p>
        <p>
          Document your narrative: the first recipe you perfected, the supplier
          relationships you have built, the neighborhood regulars who became
          family. Turn it into content: an "Our Story" section on your Google My
          Business, Instagram bio, and a physical card in the shop. Feature the
          baker's hands, the early morning prep, the suppliers you work with.
          Authenticity in content drives 3x more saves and shares than
          promotional posts.
        </p>
      </>
    ),
    actionItems: [
      "Write your bakery origin story in 150 words: why you started, your baking philosophy, and what makes you different.",
      "Create an 'Our Story' card for every table and takeout bag: one paragraph, one photo of the baker at work.",
      "Film a 60-second '4am at the Bakery' video showing the prep process. Post it and pin it.",
      "Feature one supplier per month on Instagram: the farm where your eggs come from, the mill that grinds your flour.",
    ],
    tafferNote:
      "Taffer always says: 'People do not buy food. They buy a story.' The bakeries that become neighborhood institutions are the ones where customers know the baker's name, their story, and their why. If you are anonymous, you are just a kitchen.",
  },
  {
    title: "Visual Identity",
    subtitle: "The look and feel of a neighborhood gathering place",
    icon: Palette,
    content: (
      <>
        <p className="mb-3">
          The most successful independent cafés have cracked the code that
          Starbucks cannot replicate: they make people feel at home in a way
          that a chain never will. Free wifi, comfortable seating, ambient music
          calibrated for conversation, local art on the walls. Every visual
          decision should ask: does this make someone want to stay longer? The
          bakery that feels like a living room wins. The bakery that feels like
          a transaction counter loses.
        </p>
        <p>
          Your visual identity extends to every touchpoint: the display case
          arrangement, the chalkboard lettering, the Instagram grid, the
          packaging, the staff aprons. Consistency creates recognition.
          Recognition creates trust. Invest in a cohesive aesthetic that
          reflects your story: whether that is rustic farmhouse, modern
          minimalist, or vintage neighborhood charm. Every detail should feel
          intentional.
        </p>
      </>
    ),
    actionItems: [
      "Audit your bakery's visual identity: interior, display case, packaging, Instagram, signage. Does it tell one story?",
      "Upgrade the seating area: add comfortable chairs, local art, and plants. Create reasons to stay, not just buy.",
      "Design consistent packaging: bags, boxes, and stickers that reflect your brand aesthetic and story.",
      "Create a content template for Instagram: consistent framing, colors, and captions that match your brand voice.",
    ],
    tafferNote:
      "Taffer's first move is always the sensory audit. He knows that lighting, scent, and seating determine whether someone stays for 5 minutes or 45. In a bakery, that extra 40 minutes means another coffee, another pastry, and another memory.",
  },
  {
    title: "Customer Experience",
    subtitle: "Your bakery is the neighborhood's gathering place",
    icon: Heart,
    content: (
      <>
        <p className="mb-3">
          A bakery is uniquely positioned: it serves the morning ritual, the
          after-school treat, the weekend celebration. Frame your brand around
          that role: you are not a pastry shop, you are the center of this
          neighborhood's story. Remember not just the name but the usual order,
          the birthday week, the child's name. Starbucks trained baristas to
          remember names: and it moved the business by billions. In a
          neighborhood bakery, the bar is higher.
        </p>
        <p>
          Create a "Neighbors Wall": a rotating display featuring local stories,
          artwork from neighborhood kids, and photos of regulars. Free to
          execute. Priceless for loyalty. Regulars who see themselves reflected
          in your space become ambassadors. Host a monthly "Bake & Chat"
          morning: regulars get a free coffee while a baker explains this
          month's featured item. No charge, 45 minutes, maximum 12 people.
          Waiting list forms within weeks.
        </p>
      </>
    ),
    actionItems: [
      "Create a 'Regulars Log': names, usual orders, birthdays, family members. Review before every shift.",
      "Launch a 'Neighbors Wall': rotating display of local art, photos, and stories. Update monthly.",
      "Host a monthly 'Bake & Chat': 45 minutes, free coffee, baker explains a featured item. Max 12 people.",
      "Implement a 'Regular of the Month' program: feature a regular on Instagram with their story and favorite item.",
    ],
    tafferNote:
      "Taffer says: 'Regulars are your foundation. Everything else is gravy.' A bakery that does not know its regulars by name and order is a bakery that is already being replaced by the one that does. Know them. Remember them. Celebrate them.",
  },
  {
    title: "Brand Voice",
    subtitle: "Speak like a neighbor who happens to bake incredible bread",
    icon: Megaphone,
    content: (
      <>
        <p className="mb-3">
          Your bakery's voice: on the chalkboard, on social media, in emails, in
          how staff greet customers: should sound like a neighbor who happens to
          make incredible croissants. Warm. Knowledgeable. Occasionally playful.
          Never corporate. The moment your Instagram reads like a grocery store
          flyer, you have lost the intimacy that makes an independent bakery
          special. The moment your chalkboard sounds generic, you have lost the
          personality that draws people in.
        </p>
        <p>
          Develop a voice guide: three words that describe how your bakery
          speaks. "Warm, nostalgic, generous." Or "Playful, honest, proud."
          Every caption, every email, every chalkboard special, every price tag
          should pass through that filter. Your voice is what customers remember
          when they recommend you. Make it unmistakably yours.
        </p>
      </>
    ),
    actionItems: [
      "Write a three-word voice guide. Share it with every staff member and post it near the register.",
      "Rewrite your chalkboard specials to sound like a baker describing their favorite creation, not a menu listing.",
      "Audit your last 10 Instagram posts. Do they sound like your bakery, or like any bakery? Adjust accordingly.",
      "Create a 'voice bank' of 15 phrases for staff to use: greetings, product descriptions, and farewells that match your brand.",
    ],
    tafferNote:
      "Taffer rewrites every menu and every sign. He knows that 'Fresh Baked Croissants' is a fact, but 'The Croissant That Will Ruin All Other Croissants For You' is a brand. Words are free. Use them like you use butter: generously.",
  },
  {
    title: "Brand Strategy",
    subtitle: "Every visit confirms the promise you made",
    icon: Target,
    content: (
      <>
        <p className="mb-3">
          Appreciated Branding is not a campaign: it is a commitment. The warm
          greeting on Monday must match Friday at rush hour. The croissant
          quality on day 1 must match month 6. The community feel in week 1 must
          still be there in year 3. Consistency is the only thing that converts
          first-timers into lifers. The bakeries that last 50 years are not
          luckier: they are more systematic.
        </p>
        <p>
          Build an opening checklist and quality SOP: display case standard,
          greeting protocol, item consistency check, social post. What gets
          systemized gets maintained. What gets maintained builds trust. Track
          customer feedback weekly: what are the top 3 compliments and top 3
          complaints? Act on them. Set a 90-day goal: increase repeat customer
          rate by 15% through recognition and consistency systems.
        </p>
      </>
    ),
    actionItems: [
      "Create a one-page 'Bakery Standards' document: food prep, display, service, cleanliness, and greeting protocols.",
      "Implement daily opening and closing checklists that ensure consistency across every shift.",
      "Track customer feedback weekly: top 3 compliments and top 3 complaints. Act on them within 48 hours.",
      "Set a 90-day goal: increase repeat customer rate by 15% through recognition systems and quality consistency.",
    ],
    tafferNote:
      "Taffer's closing advice on every rescue: 'Systems save businesses. Passion starts them, but systems keep them alive.' Your bakery needs systems for the dough, the display, and the experience. Without them, you are gambling with your future.",
  },
];

export function BakeryBrandingSection() {
  return (
    <section id="branding" data-ocid="bakery-guide.branding_section">
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
        Appreciated Branding for Your Bakery
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Reid Holmes&rsquo; Appreciated Branding framework applied to the unique
        opportunity of the neighborhood bakery: with Jon Taffer hospitality
        principles for building a community institution.
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
        businessType="bakery"
        subsections={SUBSECTIONS}
        accentColor="oklch(0.55 0.18 290)"
        accentBg="oklch(0.55 0.18 290 / 0.08)"
        accentBorder="oklch(0.55 0.18 290 / 0.2)"
      />
    </section>
  );
}
