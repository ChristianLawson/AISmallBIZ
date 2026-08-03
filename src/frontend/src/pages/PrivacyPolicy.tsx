import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Database,
  Eye,
  Lock,
  MessageSquare,
  ShieldCheck,
  Store,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

interface PolicySection {
  id: string;
  icon: typeof Database;
  heading: string;
  body: string;
}

const SECTIONS: PolicySection[] = [
  {
    id: "what-we-collect",
    icon: MessageSquare,
    heading: "What Information We Collect",
    body: "When you ask a question through AISmallBiz, we collect the questions you submit and any details you share about your industry or business type. For example, you might tell us you run a bakery, a salon, or a cleaning service so the answers fit your shop. We do not ask for your name, your home address, your credit card, or your tax ID. If you choose to subscribe to our newsletter, we collect the email address you enter.",
  },
  {
    id: "how-we-use-it",
    icon: Eye,
    heading: "How We Use Your Information",
    body: "We use your questions and business type to give you clear, useful answers and to suggest guides and tools that match your shop. We also review common questions so we can improve the site over time. Your information is never used to send you ads from other companies.",
  },
  {
    id: "data-storage",
    icon: Database,
    heading: "How We Store Your Messages",
    body: "Your questions and any details you share may be stored on the Internet Computer, a secure network built to keep data private. Storing this information helps us give better answers and helps us spot ways to improve the service. You can ask us to remove your history at any time and we will delete it.",
  },
  {
    id: "third-parties",
    icon: ShieldCheck,
    heading: "We Do Not Sell or Share Your Data",
    body: "We never sell your information to anyone. We do not share your questions or business details with third parties for marketing. The only time we may share data is when the law requires it or when we must protect the safety of the site and its users.",
  },
  {
    id: "your-choices",
    icon: UserCheck,
    heading: "Your Choices and Your Rights",
    body: "You can use AISmallBiz without making an account. You can ask a question without giving us your name or email. If you subscribe to the newsletter, you can unsubscribe at any time using the link in every email. You can ask us to show you or delete the questions you have submitted.",
  },
  {
    id: "security",
    icon: Lock,
    heading: "How We Protect Your Information",
    body: "Your data is stored on the Internet Computer, which uses strong encryption to keep information private and secure. We limit access to stored messages to the small team that maintains the site. No system is perfect, but we work hard to keep your trust.",
  },
];

const CONTACT_ITEMS = [
  {
    icon: MessageSquare,
    label: "Ask a Small Business Question",
    description:
      "Submit any small business question and get a clear answer with next steps. Submissions are reviewed once a week.",
    to: "/ask-a-question" as const,
    linkText: "Ask a Question",
  },
  {
    icon: Store,
    label: "Read the About page",
    description:
      "Learn our mission and our People First, Machines Second principle.",
    to: "/about" as const,
    linkText: "About AISmallBiz",
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 badge-primary-vibrant text-[15px] px-3 py-1">
              Privacy Policy
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 heading-display leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We built AISmallBiz to help small business owners, not to mine
              their data. This page explains, in plain language, what
              information we collect and how we use it. No technical background
              required.
            </p>
            <p className="text-sm text-muted-decorative mt-6">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plain language summary */}
      <section className="bg-muted/30 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl bg-card border border-border/60 p-6 sm:p-8"
            data-ocid="privacy.summary.card"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              The Short Version
            </h2>
            <p className="text-foreground leading-relaxed mb-3">
              We collect the questions you ask and the business type you share.
              We use that to give you better answers and to improve the site. We
              never sell your data and we never share it with third parties for
              marketing. You can ask us to delete your submissions at any time.
            </p>
            <p className="text-foreground leading-relaxed">
              Our promise is simple: People First, Machines Second. Your trust
              matters more than any data point.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="space-y-6" data-ocid="privacy.sections.list">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`privacy.sections.item.${i + 1}`}
              >
                <Card className="border-border/60 bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <section.icon size={20} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h2
                          id={section.id}
                          className="font-display text-xl font-bold text-foreground mb-3 scroll-mt-24"
                        >
                          {section.heading}
                        </h2>
                        <p className="text-foreground leading-relaxed">
                          {section.body}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-muted/30 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 heading-display">
              Questions About Your Privacy?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              We want you to feel safe using AISmallBiz. If you have a question
              about this policy or want us to delete your messages, reach out
              any time.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            data-ocid="privacy.contact.list"
          >
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`privacy.contact.item.${i + 1}`}
              >
                <Card className="h-full border-border/60 bg-card card-vibrant">
                  <CardContent className="pt-5 pb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-[15px] text-foreground mb-2 leading-snug">
                      {item.label}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Link
                      to={item.to}
                      onClick={() => window.scrollTo(0, 0)}
                      data-ocid={`privacy.contact.link.${i + 1}`}
                      className="inline-flex items-center gap-1 text-[15px] font-semibold text-primary hover:text-primary/75 transition-colors duration-200 border-b-2 border-primary/30 hover:border-primary pb-0.5"
                    >
                      {item.linkText}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trademark footer note */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-sm text-muted-decorative">
            AISmallBiz (TM) is a registered trademark of Christian Lawson. This
            Privacy Policy may be updated over time. The date above shows when
            it was last reviewed.
          </p>
        </div>
      </section>
    </Layout>
  );
}
