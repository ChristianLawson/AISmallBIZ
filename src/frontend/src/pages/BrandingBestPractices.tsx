import { IndustryCard } from "@/components/IndustryCard";
import { Layout } from "@/components/Layout";
import {
  INDUSTRY_BRANDING_DATA,
  INDUSTRY_KEYS,
} from "@/data/industryBrandingData";
import {
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  Heart,
  Lightbulb,
  PenLine,
  Quote,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const KEY_ELEMENTS = [
  {
    icon: Heart,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/15",
    title: "Empathy",
    description: "Understanding and addressing customer pain points.",
  },
  {
    icon: Shield,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Authenticity",
    description: "Being genuine, transparent, and true to your brand values.",
  },
  {
    icon: Users,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Customer-Centricity",
    description:
      "Putting the customer's needs and desires at the center of your business strategy.",
  },
  {
    icon: Sparkles,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/12",
    title: "Emotional Connection",
    description: "Building relationships based on shared values and emotions.",
  },
  {
    icon: Star,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/15",
    title: "Consistency",
    description:
      "Delivering on your promises and maintaining a consistent brand experience.",
  },
];

const WHY_CRITICAL = [
  {
    num: "01",
    title: "Consumer Overload",
    body: "Consumers are exposed to over 10,000 marketing messages every day, leading to 'ad fatigue.' Traditional advertising methods, which rely on interrupting consumers, are increasingly ineffective. People are tuning out ads, skipping commercials, and using ad blockers. To capture attention, businesses must offer something more, something that resonates emotionally and provides real value.",
  },
  {
    num: "02",
    title: "Values-Driven Consumption",
    body: "Millennials and Gen Z, who now dominate the consumer market, prioritize values over price. They want to support brands that align with their beliefs, whether it is sustainability, social justice, or community involvement. Appreciated Branding allows businesses to connect with these consumers on a deeper level, fostering loyalty and advocacy.",
  },
  {
    num: "03",
    title: "The Decline of Traditional Advertising",
    body: "The effectiveness of traditional advertising is declining as consumers become more skeptical and discerning. Businesses that rely solely on ads to sell their products will struggle to compete. Appreciated Branding offers an alternative by focusing on building trust and emotional connections.",
  },
  {
    num: "04",
    title: "The Rise of AI and Automation",
    body: "While AI and automation have revolutionized marketing, they have also made it feel impersonal. Appreciated Branding humanizes the customer experience, helping businesses stand out in a world dominated by algorithms and data-driven campaigns.",
  },
  {
    num: "05",
    title: "The Importance of Loyalty",
    body: "In 2026, customer loyalty is more important than ever. Acquiring new customers is expensive, and businesses that fail to build emotional connections will struggle to retain their existing customers. Appreciated Branding fosters loyalty by making customers feel valued and understood.",
  },
];

const CHALLENGES = [
  {
    icon: Zap,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/12",
    title: "Resource Constraints",
    description:
      "Small businesses may lack the resources to invest in sophisticated marketing tools or large-scale campaigns.",
  },
  {
    icon: TrendingUp,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/10",
    title: "Scaling Personalization",
    description:
      "Medium and enterprise businesses may struggle to maintain a personal touch as they grow.",
  },
  {
    icon: Shield,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/12",
    title: "Authenticity",
    description:
      "Customers can easily detect insincerity. Businesses must ensure that their efforts are genuine and align with their values.",
  },
  {
    icon: AlertTriangle,
    color: "text-[#6366F1]",
    bg: "bg-[#6366F1]/12",
    title: "Measuring Impact",
    description:
      "Unlike traditional advertising, Appreciated Branding's impact can be harder to quantify, making it challenging to justify the investment.",
  },
];

const CRUSHING_IT_PRINCIPLES = [
  {
    icon: Target,
    title: "Intent",
    description:
      "Understand your why and focus on the legacy you want to leave, not just the money you want to make.",
  },
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "Be unapologetically yourself, because audiences connect with real people, not polished personas.",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description:
      "Genuine excitement for your work fuels the persistence required to keep showing up every single day.",
  },
  {
    icon: Clock,
    title: "Patience",
    description:
      "Overnight success is a myth, so embrace the long game and trust that consistent effort compounds over time.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Execute on ideas quickly and overcome the trap of overthinking that keeps most people from ever starting.",
  },
  {
    icon: TrendingUp,
    title: "Work Ethic",
    description:
      "Hustle is the price of entry, so be willing to outwork everyone around you to earn your audience.",
  },
  {
    icon: Eye,
    title: "Attention",
    description:
      "Know where attention is focused at any given moment and understand the trends that shape how people consume content.",
  },
  {
    icon: PenLine,
    title: "Content",
    description:
      "Content is the currency of the digital age, so create regularly and engage genuinely with the people who respond.",
  },
];

const CRUSHING_IT_PLATFORMS = [
  {
    name: "Facebook",
    description:
      "Targeted advertising and storytelling that build community around your brand.",
  },
  {
    name: "Instagram",
    description:
      "Visual personal branding through stories and reels that capture attention quickly.",
  },
  {
    name: "Twitter",
    description:
      "Real-time engagement and thought leadership that position you as a voice in your field.",
  },
  {
    name: "YouTube",
    description:
      "Long-form content that documents your journey and lets audiences see the real you.",
  },
  {
    name: "Podcasting",
    description:
      "Intimacy and connection through voice, where listeners feel like they know you personally.",
  },
  {
    name: "LinkedIn",
    description:
      "Professional content and networking that establish your authority in your industry.",
  },
  {
    name: "TikTok",
    description:
      "Creativity and spontaneity that reach younger audiences hungry for authentic moments.",
  },
];

const CRUSHING_IT_STORIES = [
  {
    name: "Lauren Evers",
    label: "The Skinny Confidential",
    story:
      "Lauren transformed beauty blogging into a lifestyle empire by leaning into her unique voice and creating engaging content that felt like a conversation with a trusted friend. Her willingness to share the unfiltered side of her life built a loyal following that grew with her as she expanded into new formats.",
  },
  {
    name: "Rich Roll",
    label: "Ultra-athlete and Podcaster",
    story:
      "A former lawyer turned ultra-athlete and podcaster, Rich let his passion and authenticity guide a complete career transformation. By documenting his journey and speaking openly about his struggles, he attracted an audience that valued honesty over polish and grew a platform on his own terms.",
  },
  {
    name: "John Lee Dumas",
    label: "Entrepreneur on Fire",
    story:
      "John built a million-dollar podcasting business by following Vaynerchuk's advice and focusing relentlessly on his niche. He committed to a daily interview format when no one else was doing it, and that consistency turned a single show into a recognizable brand and a sustainable business.",
  },
];

const CRUSHING_IT_STEPS = [
  {
    title: "Choose Your Niche",
    description:
      "Identify an area you are genuinely passionate about, because passion is what will keep you going when the work gets hard.",
  },
  {
    title: "Select Platforms",
    description:
      "Choose one or two platforms and commit to mastering them instead of trying to be everywhere at once.",
  },
  {
    title: "Create Pillar Content",
    description:
      "Develop in-depth content that showcases your expertise and gives your audience something substantial to learn from.",
  },
  {
    title: "Micro-Content",
    description:
      "Break down your pillar content into smaller pieces tailored for social media so you can stay visible without burning out.",
  },
  {
    title: "Engage with Your Audience",
    description:
      "Respond to comments and feedback to build a real community, because engagement is what turns followers into advocates.",
  },
  {
    title: "Analyze and Adapt",
    description:
      "Study your analytics and pivot based on the data so you can double down on what works and stop wasting effort on what does not.",
  },
  {
    title: "Start with What You Have",
    description:
      "Fancy equipment is not necessary, so focus on consistency over perfection and begin creating with the tools in your pocket.",
  },
];

export default function BrandingBestPractices() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav
        className="bg-background border-b border-border"
        aria-label="Breadcrumb"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-[15px] text-[#71717A]">
          <a
            href="/"
            className="hover:text-foreground transition-colors duration-200"
          >
            Home
          </a>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-foreground font-medium">Branding</span>
        </div>
      </nav>

      {/* ── Branding 101: What Is a Brand? ── */}
      <section className="bg-background pt-8 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[15px] font-medium tracking-wide uppercase mb-3">
              <Sparkles size={12} />
              Branding 101
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
              What Is a Brand?
            </h2>
            <p className="text-[#71717A]">
              The basics every small business owner needs to know: in plain
              language.
            </p>
          </motion.div>

          <div className="space-y-8 mb-10">
            {/* What a brand really is */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                A Brand Is Not Just a Logo
              </h3>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                Your brand is how customers{" "}
                <strong className="text-foreground">feel</strong> about your
                business. It is the trust they have in you, the memory they
                carry, and the reason they choose you over the shop down the
                street.
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                Think of it like this: your logo is your face. Your brand is
                your reputation. People recognize your face, but they do
                business with you because of your reputation.
              </p>
            </motion.div>

            {/* Why branding matters */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Why Branding Matters for Your Small Business
              </h3>
              <div className="space-y-3 text-[15px] text-[#71717A] leading-relaxed">
                <p>
                  <strong className="text-foreground">Trust:</strong> When your
                  business looks and sounds the same everywhere, customers feel
                  safe choosing you. A consistent brand tells people you are
                  professional and reliable.
                </p>
                <p>
                  <strong className="text-foreground">Recognition:</strong>{" "}
                  Imagine a customer driving past three coffee shops. They pick
                  yours because they remember your sign, your colors, and the
                  friendly tone of your social posts. That is branding at work.
                </p>
                <p>
                  <strong className="text-foreground">Word-of-mouth:</strong>{" "}
                  People talk about businesses they remember. A clear,
                  consistent brand makes it easy for happy customers to describe
                  you to friends.
                </p>
              </div>
            </motion.div>

            {/* Logo vs Brand */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                The Difference Between a Logo and a Brand
              </h3>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                A <strong className="text-foreground">logo</strong> is a symbol
                : like the golden arches of McDonald's or the apple on your
                iPhone. It is one piece of the puzzle.
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                A <strong className="text-foreground">brand</strong> is the full
                picture: the colors you use, the way you talk to customers, the
                experience people have in your store, and the feeling they get
                when they see your name.
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                <em>Simple analogy:</em> Your logo is your handshake. Your brand
                is the entire conversation that follows.
              </p>
            </motion.div>

            {/* Brand Voice */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Brand Voice: How You Sound to Customers
              </h3>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                Your brand voice is the personality of your business in words.
                Are you friendly and casual, like a neighbor chatting over the
                fence? Or are you polished and professional, like a trusted
                advisor?
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                <strong className="text-foreground">Quick exercise:</strong>{" "}
                Pick three words that describe how you want customers to feel
                when they interact with your business. Examples: warm, honest,
                helpful. Now read your last social media post out loud. Does it
                sound like those three words? If not, adjust it.
              </p>
            </motion.div>

            {/* Brand Colors */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Brand Colors: Why They Matter and How to Pick Yours
              </h3>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                Colors trigger feelings before people even read a word. Red says
                excitement. Blue says trust. Green says health or nature. Yellow
                says energy and optimism.
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                <strong className="text-foreground">
                  How to pick 2-3 colors:
                </strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[15px] text-[#71717A] leading-relaxed mb-3">
                <li>
                  Choose one main color that fits your business type. A bakery
                  might choose warm brown or soft pink. A gym might choose bold
                  red or energetic orange.
                </li>
                <li>
                  Pick a second color that complements it: often a neutral like
                  white, cream, or soft gray.
                </li>
                <li>
                  Add one accent color for buttons, highlights, or sale tags.
                  This should contrast well with your main color.
                </li>
              </ol>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                Use those same 2-3 colors on your website, your social media,
                your receipts, and your storefront. Consistency builds
                recognition.
              </p>
            </motion.div>

            {/* Consistency */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Consistency: Same Colors, Same Tone, Same Message Everywhere
              </h3>
              <p className="text-[15px] text-[#71717A] leading-relaxed mb-3">
                Every place a customer sees your business should feel like the
                same place. If your Facebook page is playful and your website is
                stiff, people get confused. Confused customers do not buy.
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                Check your business card, your website, your storefront sign,
                and your last email. Do they use the same colors? Do they sound
                like the same person wrote them? If not, pick one version you
                like best and update the others to match.
              </p>
            </motion.div>

            {/* Actionable First Steps */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-xl border border-primary/20 bg-primary/5 p-6"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Your First Steps: Do These Today
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[15px] text-[#71717A] leading-relaxed">
                <li>
                  <strong className="text-foreground">Pick 3 words</strong> that
                  describe how you want customers to feel about your business.
                  Write them on a sticky note and put it where you work.
                </li>
                <li>
                  <strong className="text-foreground">Choose 2-3 colors</strong>{" "}
                  and write down their names or hex codes. Use a free tool like
                  Coolors.co if you need help.
                </li>
                <li>
                  <strong className="text-foreground">
                    Write one sentence
                  </strong>{" "}
                  that explains what your business does and who it helps.
                  Example: "We bake fresh bread every morning for busy families
                  who want real food without the hassle."
                </li>
                <li>
                  <strong className="text-foreground">Check one place</strong>{" "}
                  where customers see your business: your Facebook page, your
                  sign, or your website. Update it to match your three words,
                  your colors, and your sentence.
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industry Application Cards (top section) ── */}
      <section className="bg-background pt-8 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[15px] font-medium tracking-wide uppercase mb-3">
              <Sparkles size={12} />
              Apply Appreciated Branding
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
              How to Apply Appreciated Branding to Your Business Type
            </h2>
            <p className="text-[#71717A]">
              Each industry card below includes a tailored Q&amp;A, Brand
              Storytelling Worksheet, and size-specific strategies.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {INDUSTRY_KEYS.map((key, i) => (
              <IndustryCard
                key={key}
                industryKey={key}
                data={INDUSTRY_BRANDING_DATA[key]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Crushing It: Building Your Personal Brand ── */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          {/* Section header */}
          <motion.div
            data-ocid="branding.crushingit.1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-navy/10 text-accent-navy text-2xl sm:text-3xl font-bold tracking-normal normal-case mb-4">
              <Sparkles size={18} />
              Gary Vaynerchuk
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Crushing It: Building Your Personal Brand
            </h2>
            <p className="text-[#71717A] leading-relaxed">
              This section is based on Gary Vaynerchuk's book{" "}
              <em>Crushing It!</em> and explores why personal branding matters
              more than ever in the digital age. When anyone with a smartphone
              can reach a global audience, the businesses and creators who win
              are the ones who show up authentically, consistently, and with
              real intent. The principles below apply whether you run a corner
              bakery, a service business, or a growing online brand.
            </p>
          </motion.div>

          {/* The Importance of Personal Branding */}
          <motion.div
            data-ocid="branding.crushingit.2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-5">
              The Importance of Personal Branding
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">
                    The Digital Landscape
                  </h4>
                </div>
                <p className="text-[15px] text-[#71717A] leading-relaxed">
                  Smartphones and social platforms have democratized media.
                  There are no more gatekeepers standing between you and your
                  audience, which means a single person with a clear message can
                  reach as many people as a major network. That shift is what
                  makes personal branding accessible to every small business
                  owner willing to put in the work.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart size={18} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">
                    Authenticity Over Perfection
                  </h4>
                </div>
                <p className="text-[15px] text-[#71717A] leading-relaxed">
                  Audiences crave realness. People can sense a polished
                  corporate script from a mile away, and they scroll past it.
                  Genuine stories, honest struggles, and a human voice build a
                  loyal following that will stick with you through every pivot,
                  product, and season of your business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Eight Principles of Personal Brand Success */}
          <motion.div
            data-ocid="branding.crushingit.3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              The Eight Principles of Personal Brand Success
            </h3>
            <p className="text-[#71717A] mb-6">
              Eight principles form the foundation of a personal brand that
              lasts.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CRUSHING_IT_PRINCIPLES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    data-ocid={`branding.crushingit.principle.${i + 1}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-xl border border-primary/18 bg-card p-5 hover:shadow-premium hover:border-primary/35 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mb-3">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-[14px] text-[#71717A] leading-snug">
                      {p.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Choosing the Right Platforms */}
          <motion.div
            data-ocid="branding.crushingit.4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              Choosing the Right Platforms
            </h3>
            <p className="text-[#71717A] mb-6">
              Each platform rewards a different style of storytelling.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CRUSHING_IT_PLATFORMS.map((pl, i) => (
                <motion.div
                  key={pl.name}
                  data-ocid={`branding.crushingit.platform.${i + 1}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h4 className="font-semibold text-foreground mb-1.5">
                    {pl.name}
                  </h4>
                  <p className="text-[14px] text-[#71717A] leading-snug">
                    {pl.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-[15px] text-[#71717A] leading-relaxed mt-5 italic">
              A closing note: do not spread yourself too thin. Select one or two
              platforms that align with your strengths and focus on them. Depth
              beats breadth every time when you are building a personal brand.
            </p>
          </motion.div>

          {/* Real-Life Success Stories */}
          <motion.div
            data-ocid="branding.crushingit.5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              Real-Life Success Stories
            </h3>
            <p className="text-[#71717A] mb-6">
              Three people who put these principles to work.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CRUSHING_IT_STORIES.map((s, i) => (
                <motion.div
                  key={s.name}
                  data-ocid={`branding.crushingit.story.${i + 1}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h4 className="font-semibold text-foreground">{s.name}</h4>
                  <p className="text-[13px] text-primary font-medium uppercase tracking-wide mb-3">
                    {s.label}
                  </p>
                  <p className="text-[14px] text-[#71717A] leading-relaxed">
                    {s.story}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-[15px] text-[#71717A] leading-relaxed mt-5 italic">
              There is no single path to success. Each individual must find
              their unique journey, and these stories are meant to inspire, not
              to copy. Your version of crushing it will look like no one else's.
            </p>
          </motion.div>

          {/* Practical Steps to Start Building Your Brand */}
          <motion.div
            data-ocid="branding.crushingit.6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              Practical Steps to Start Building Your Brand
            </h3>
            <p className="text-[#71717A] mb-6">
              Seven actionable steps you can begin this week.
            </p>
            <div className="space-y-4">
              {CRUSHING_IT_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  data-ocid={`branding.crushingit.step.${i + 1}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span className="font-mono text-2xl font-bold text-primary/40 shrink-0 leading-tight pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[15px] text-[#71717A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing pull quote */}
          <motion.div
            data-ocid="branding.crushingit.7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-primary/12 border border-primary/28 px-8 py-8"
          >
            <Quote
              size={28}
              className="text-primary/30 absolute top-6 left-6"
            />
            <div className="flex items-center justify-center gap-2 mb-3">
              <Lightbulb size={18} className="text-primary" />
              <span className="text-[13px] font-medium uppercase tracking-wide text-primary">
                The Core Message
              </span>
            </div>
            <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-snug text-center pl-4">
              It is time to stop scrolling and start building your legacy. The
              tools are in your hands, the audience is waiting, and the only
              thing standing between you and the brand you imagine is the
              decision to begin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author attribution card */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            data-ocid="branding.author_card"
            className="flex items-start gap-4 p-5 rounded-xl bg-card border-l-4 border-[#6366F1] shadow-card"
          >
            <div className="w-12 h-12 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0 font-display font-bold text-[#6366F1] text-base">
              RH
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground">Reid Holmes</p>
              <p className="text-[15px] text-[#71717A]">
                Branding Strategist &amp; Author
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <a
                  href="https://christianlawson.substack.com/p/appreciated-branding-this-way-of"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] text-primary hover:underline underline-offset-4"
                >
                  <ExternalLink size={11} />
                  View on Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero / Attribution */}
      <section className="relative bg-hero-vibrant border-b border-[#6366F1]/20 overflow-hidden mt-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/14 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-primary-vibrant text-[15px] font-medium tracking-wide uppercase mb-5">
              <Sparkles size={12} />
              Appreciated Branding
            </span>
            <h1 className="heading-hero mb-4">
              Appreciated Branding:{" "}
              <span className="text-gradient-vibrant">This is the way...</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/80 mb-5">
              Imagine your profit moving{" "}
              <span className="text-gradient-primary font-bold">76%.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-5 text-base sm:text-lg text-[#71717A] leading-relaxed"
          >
            <p>
              You get a clear way to make customers remember your business and
              come back again. That matters because repeat customers spend more,
              cost less to keep, and tell their friends, which grows your
              revenue without spending more on ads.
            </p>
            <p>
              In the crowded marketplace of 2026, consumers see thousands of
              marketing messages every day. Traditional advertising is no longer
              enough. The brands that succeed are not the ones with the loudest
              voice or the largest budgets, but the ones that create authentic
              emotional connections with their customers.
            </p>
            <p>
              This is where Appreciated Branding comes into play. Appreciated
              Branding is about more than just selling products or services. It
              is about demonstrating genuine care for customers, solving their
              problems, and aligning with their values. It is about showing
              customers that they matter, not just for their wallets but as
              individuals with unique needs, aspirations, and challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Appreciated Branding? */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              What is Appreciated Branding?
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#71717A] leading-relaxed">
              <p>
                Appreciated Branding is the practice of creating meaningful,
                emotional connections with customers by proving that your
                business values and understands them. It is not about flashy
                ads, clever taglines, or even competitive pricing. Instead, it
                is about fostering mutual respect and trust between a brand and
                its customers.
              </p>
              <p>
                This approach stands in stark contrast to traditional
                advertising, which often relies on interruption and persuasion.
                Appreciated Branding focuses on being relevant, helpful, and
                empathetic. It is about creating value for customers by
                addressing their needs, solving their problems, and making their
                lives better in tangible ways.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Key Elements
            </h2>
            <p className="text-[#71717A]">
              The five pillars that define an Appreciated Brand.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {KEY_ELEMENTS.map((el, i) => {
              const Icon = el.icon;
              return (
                <motion.div
                  key={el.title}
                  data-ocid={`branding.key_element.${i + 1}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl border border-primary/18 bg-card p-5 flex gap-4 items-start hover:shadow-premium hover:border-primary/35 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${el.bg} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <Icon size={18} className={el.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {el.title}
                    </h3>
                    <p className="text-[15px] text-[#71717A] leading-snug">
                      {el.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Critical in 2026 */}
      <section className="bg-background border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Why Appreciated Branding is Critical in 2026
            </h2>
          </motion.div>
          <div className="space-y-6">
            {WHY_CRITICAL.map((item, i) => (
              <motion.div
                key={item.num}
                data-ocid={`branding.why_critical.${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-5"
              >
                <span className="font-mono text-2xl font-bold text-primary/30 shrink-0 leading-tight pt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#71717A] leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-background border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Challenges in Implementing Appreciated Branding
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {CHALLENGES.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <motion.div
                  key={ch.title}
                  data-ocid={`branding.challenge.${i + 1}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-primary/15 bg-card p-5 flex gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${ch.bg} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <Icon size={18} className={ch.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {ch.title}
                    </h3>
                    <p className="text-[15px] text-[#71717A] leading-snug">
                      {ch.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-primary-vibrant text-[15px] font-medium tracking-wide uppercase mb-5">
              <TrendingUp size={12} />
              Conclusion
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Appreciated Branding is the Future
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#71717A] leading-relaxed mb-8">
              <p>
                In 2026, Appreciated Branding is not just a strategy; it is a
                necessity. Businesses that fail to adopt this approach will
                struggle to compete in a marketplace where consumers demand more
                than just products or services. They want brands that care,
                understand, and align with their values.
              </p>
              <p>
                Whether you are a small bakery, a mid-sized tech company, or a
                global enterprise, the principles of Appreciated Branding can
                transform your business. By building emotional connections,
                demonstrating care, and aligning with customer values,
                businesses can create loyal customers who see them as
                irreplaceable.
              </p>
            </div>

            <div
              data-ocid="branding.pull_quote"
              className="relative rounded-2xl bg-primary/12 border border-primary/28 px-8 py-8 mb-10"
            >
              <Quote
                size={28}
                className="text-primary/30 absolute top-6 left-6"
              />
              <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-snug text-center pl-4">
                The future belongs to brands that care. The question is: will
                your business rise to the challenge, or will it fade into
                obscurity?
              </p>
            </div>

            {/* About the Author */}
            <div className="rounded-xl bg-muted/40 border border-border px-6 py-5 mb-8">
              <p className="text-[15px] font-semibold text-foreground mb-1">
                About the Author
              </p>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                <strong className="text-foreground">Reid Holmes</strong> is a
                business strategy advisor and author of the Appreciated Branding
                framework.{" "}
                <a
                  href="https://christianlawson.substack.com/p/appreciated-branding-this-way-of"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                  data-ocid="branding.substack_link"
                >
                  Read original article <ExternalLink size={12} />
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/guides"
                data-ocid="branding.explore_guides_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[15px] font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Browse AI Guides
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
