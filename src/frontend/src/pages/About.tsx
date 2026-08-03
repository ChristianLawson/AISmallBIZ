import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Brain,
  Building2,
  ExternalLink,
  Flame,
  Globe,
  Layers,
  Lightbulb,
  Megaphone,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const BORDER_COLORS = [
  "border-l-[#6366F1]",
  "border-l-[#6366F1]",
  "border-l-[#6366F1]",
  "border-l-[#6366F1]",
  "border-l-[#6366F1]",
  "border-l-[#6366F1]",
];

const CREDENTIALS = [
  {
    title: "Artificial Intelligence",
    period: "2013-2025",
    icon: Brain,
    institutions: [
      "Caltech: Machine Learning I",
      "Stanford: Machine Learning II (Andrew Ng)",
      "MIT: AI (Patrick Winston)",
      "UC Berkeley: Artificial Intelligence",
      "Saylor Academy: Advanced AI",
      "Stanford / DeepLearning.AI: Deep Learning Specialization",
      "Google: Generative AI Leadership",
    ],
  },
  {
    title: "Data Science & Statistics",
    period: "2016-2023",
    icon: TrendingUp,
    institutions: [
      "Columbia University: Data Science for Executives (IoT, Statistical Thinking, ML)",
      "Johns Hopkins: Executive Data Science Specialization (5 courses)",
      "MIT: Data Science & Statistics MicroMasters",
    ],
  },
  {
    title: "IoT: Internet of Things",
    period: "2018-2021",
    icon: Globe,
    institutions: [
      "Intel: IoT Foundations",
      "EIT (European Institute of Technology)",
      "Yonsei University: Emergent Technologies (2018) & Analytics (2019)",
      "Waseda University: System Architecture (2020)",
      "Microsoft: IoT Analytics (2019)",
      "Curtain University: 6-course Master's-level IoT program (2021)",
      "Blockchain Alliance: IoT & Blockchain (2019)",
    ],
  },
  {
    title: "Blockchain",
    period: "2018-2023",
    icon: Shield,
    institutions: [
      "IBM: Blockchain Essentials",
      "iTech: Blockchain Essentials, Deep Fundamentals & Business MasterClass",
      "Blockchain Council: Certified Blockchain Expert (2018)",
      "Blockchain Council: Certified Blockchain Architect (2023)",
      "Caltech: Quantum Cryptography (~2021)",
    ],
  },
  {
    title: "Business & Leadership",
    period: "2018-2024",
    icon: Building2,
    institutions: [
      "Columbia University: Compressed MBA (Chris Haroun, 2018)",
      "Johns Hopkins: Executive Data Science Leadership",
      "Yale School of Management: Leading Supply Chain Innovation (2024)",
    ],
  },
  {
    title: "Systems Engineering & Operations",
    period: "Career-long",
    icon: Layers,
    institutions: [
      "Windows Server, Exchange, Active Directory, PowerShell, Citrix, SCCM",
      "AWS, Azure, GCP: multi-cloud architecture",
      "Splunk, Elastic, Linux / Red Hat",
      "25+ years in production environments",
    ],
  },
];

const IMPACT_STATS = [
  {
    number: "$200M+",
    label: "Saved annually for NYC municipal agencies",
    colorClass: "text-[#6366F1]",
    bgClass: "bg-[#6366F1] text-white",
  },
  {
    number: "27%",
    label: "Reduction in crime through public safety data analytics",
    colorClass: "text-[#6366F1]",
    bgClass: "bg-[#6366F1] text-white",
  },
  {
    number: "100K hrs",
    label:
      "Police and public time saved per year (tow truck notification system)",
    colorClass: "text-[#6366F1]",
    bgClass: "bg-[#6366F1] text-white",
  },
  {
    number: "$30K",
    label: "Value of automating one repetitive 10-minute task per day",
    colorClass: "text-[#6366F1]",
    bgClass: "bg-[#6366F1] text-white",
  },
];

const SUBSTACK_TOPICS = [
  {
    icon: Zap,
    title: "AI Adoption & Workforce Empowerment",
    description:
      "How to sell AI to the people who actually use it. Including his flagship post using AI as Fire, the Loom, and the Wheel: fear before transformation.",
    colorClass: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    icon: Building2,
    title: "NYC Government Innovation & Blockchain",
    description:
      "The CityWide Asset Ledger. The tow truck 911 fix. Practical, massive impact. Classic Christian.",
    colorClass: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    icon: Lightbulb,
    title: "The Future of AI, AGI & Technology Critique",
    description:
      "From near-future fiction warnings about AGI to why the cloud giants are heading toward disruption. Thought-provoking, occasionally alarming.",
    colorClass: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    icon: Brain,
    title: "Human Intelligence & Self-Development",
    description:
      "On emotional intelligence, metacognition, the neuroscience of optimism, and why going analog sometimes beats going digital.",
    colorClass: "bg-[#6366F1]/12 text-[#6366F1]",
  },
  {
    icon: Megaphone,
    title: "Business Strategy & Branding",
    description:
      "Appreciated Branding by Reid Holmes: the framework behind this site. Plus how Apple accidentally helped build China's tech ecosystem.",
    colorClass: "bg-[#6366F1]/12 text-[#6366F1]",
  },
];

export default function About() {
  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="bg-card border-b border-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 badge-primary-vibrant text-[15px] px-3 py-1">
              About Christian Lawson
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 heading-display leading-tight">
              The Tech Guy Who Helps{" "}
              <span className="text-gradient-primary">People</span>, Not Just
              Machines
            </h1>
            <p className="text-lg text-[#71717A] leading-relaxed max-w-3xl mb-8">
              Brooklyn-based AI Engineer, Systems Architect, and Business
              Automation specialist with 25+ years turning complex technology
              into real-world results: from Sydney's largest trading room to NYC
              City Hall.
            </p>
            {/* Stat highlights */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/25"
                data-ocid="about.stat.1"
              >
                <span className="font-display font-bold text-2xl text-[#6366F1]">
                  $200M+
                </span>
                <span className="text-[15px] text-[#71717A] font-medium">
                  saved annually
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20"
                data-ocid="about.stat.2"
              >
                <span className="font-display font-bold text-2xl text-primary">
                  25+ years
                </span>
                <span className="text-[15px] text-[#71717A] font-medium">
                  in tech
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY BANNER */}
      <section
        className="bg-stats-vibrant py-16"
        data-ocid="about.philosophy_banner"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-3 leading-snug">
              "Education is not something you finish!"
            </p>
            <p className="text-primary-foreground/80 font-semibold text-base mb-1">
              : Christian Lawson
            </p>
            <p className="text-primary-foreground/60 text-[15px] italic">
              And his résumé proves it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. WHO IS CHRISTIAN? */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left: Avatar + badges */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start gap-5"
            >
              {/* Animated avatar ring */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6366F1] via-[#818cf8] to-[#6366F1]"
                  style={{ animation: "spin 6s linear infinite" }}
                />
                <div className="relative z-10 w-32 h-32 rounded-3xl bg-card border-4 border-card flex items-center justify-center">
                  <span className="font-display font-bold text-5xl text-gradient-primary">
                    CL
                  </span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                  Christian Lawson
                </h2>
                <p className="text-[#71717A] text-[15px] mb-4">
                  Brooklyn, New York
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                  <Badge className="badge-primary-vibrant text-[15px]">
                    AI Engineer
                  </Badge>
                  <Badge className="badge-primary-vibrant text-[15px]">
                    Systems Architect
                  </Badge>
                  <Badge className="badge-accent-vibrant text-[15px]">
                    Business Automation
                  </Badge>
                </div>
                <a
                  href="https://christianlawson.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary/75 transition-colors duration-200 border-b-2 border-primary/30 hover:border-primary pb-0.5"
                  data-ocid="about.substack_link"
                >
                  <BookOpen size={15} />
                  Read the Substack
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>

            {/* Right: Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-foreground leading-relaxed">
                Christian Lawson started his career in 1997 in Sydney's largest
                trading room at Bankers Trust: the kind of environment where if
                the system went down, someone lost money. Fast. That pressure
                forged a systems thinker who does not just understand
                technology; he understands the cost of getting it wrong.
              </p>
              <p className="text-foreground leading-relaxed">
                Over 25+ years, he moved from hands-on server engineer to
                Solutions Architect at the NYC Mayor's Office of Municipal
                Service Assessment, where his efficiency solutions now save NYC
                over $200 million annually and have contributed to a 27%
                reduction in crime through public safety data analytics. He also
                designed the CityWide Asset Ledger: a 512-bit encrypted private
                blockchain tracking all NYC city assets, securing property
                titles, death certificates, marriage records, and public
                benefits.
              </p>
              <p className="text-foreground leading-relaxed">
                Along the way, he proposed a tow truck notification system for
                the NYPD that would eliminate 40,000 unnecessary 911 calls per
                year: saving approximately 100,000 hours of police and public
                time annually. The math is classic Christian: find the
                inefficiency, quantify the waste, fix it.
              </p>
              <p className="text-foreground leading-relaxed">
                He built AISmallBiz™ because the strategies that work for
                Fortune 500 companies should not be locked behind $50,000
                consulting fees. Small and medium businesses deserve the same
                competitive intelligence: and he intends to give it to them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE LEARNING JOURNEY */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 heading-display">
              A Self-Made Education from the World's Best Institutions
            </h2>
            <p className="text-[#71717A] text-base max-w-2xl mx-auto">
              12 years of continuous self-funded learning. 30+ courses.
              1,200-2,400+ hours outside of a full-time career.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="about.credentials.list"
          >
            {CREDENTIALS.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`about.credentials.item.${i + 1}`}
              >
                <Card
                  className={`h-full border-l-4 ${BORDER_COLORS[i]} bg-card hover:shadow-md transition-smooth`}
                >
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <cred.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[15px] text-foreground leading-tight">
                          {cred.title}
                        </h3>
                        <p className="text-[15px] text-[#71717A]">
                          {cred.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {cred.institutions.map((inst) => (
                        <li
                          key={inst}
                          className="text-[15px] text-[#71717A] leading-relaxed flex items-start gap-1.5"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                          {inst}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT NUMBERS */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 heading-display">
              The Numbers Do Not Lie
            </h2>
            <p className="text-[#71717A] text-base">
              Real impact. Real scale. All applied to real public problems.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="about.impact.list"
          >
            {IMPACT_STATS.map((stat, i) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`about.impact.item.${i + 1}`}
              >
                <div
                  className={`rounded-2xl ${stat.bgClass} border border-border/50 p-6 text-center h-full flex flex-col items-center justify-center gap-2`}
                >
                  <span className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                    {stat.number}
                  </span>
                  <p className="text-[15px] text-white/80 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUBSTACK SECTION */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 heading-display">
              What Christian Writes About
            </h2>
            <p className="text-[#71717A] text-base max-w-2xl mx-auto">
              His Substack covers five territories: all orbiting one conviction:
              technology should serve humanity, not replace it.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
            data-ocid="about.substack_topics.list"
          >
            {SUBSTACK_TOPICS.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`about.substack_topics.item.${i + 1}`}
              >
                <Card className="h-full border-border/60 bg-card card-vibrant">
                  <CardContent className="pt-5 pb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${topic.colorClass}`}
                    >
                      <topic.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-[15px] text-foreground mb-2 leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-[15px] text-[#71717A] leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center"
          >
            <Button
              asChild
              className="button-cta-gold text-[15px] font-semibold px-6 py-2.5 h-auto"
              data-ocid="about.substack_cta"
            >
              <a
                href="https://christianlawson.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Substack
                <ExternalLink size={15} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. CLOSING PHILOSOPHY */}
      <section className="bg-gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/12 flex items-center justify-center">
                <Flame size={22} className="text-primary" />
              </div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 heading-display">
              The Through-Line
            </h2>
            <blockquote className="font-display text-2xl sm:text-3xl font-bold text-gradient-vibrant mb-8 leading-snug">
              "If you cannot better the machines, you should be bettering the
              humans."
            </blockquote>
            <p className="text-foreground leading-relaxed mb-5">
              That is the thesis of every post on his Substack, every efficiency
              system he has built in NYC, and every guide on this site.
              Technology should empower people: not replace them, not overwhelm
              them, and definitely not price them out of competing.
            </p>
            <p className="text-foreground leading-relaxed">
              AISmallBiz™ exists because Christian believes small and medium
              business owners deserve the same strategic tools as the Fortune
              500. The playing field is not level. This site is one way to tilt
              it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spin keyframe for avatar ring */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Layout>
  );
}
