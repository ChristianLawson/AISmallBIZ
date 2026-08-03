import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BadgeCheck,
  ExternalLink,
  FileText,
  Gavel,
  Mail,
  RefreshCw,
  Scale,
  ShieldAlert,
  Sparkles,
  Unlock,
  UserX,
} from "lucide-react";
import { motion } from "motion/react";

interface TermsSection {
  id: string;
  icon: typeof FileText;
  heading: string;
  body: string;
}

const SECTIONS: TermsSection[] = [
  {
    id: "acceptance-of-terms",
    icon: Gavel,
    heading: "1. Acceptance of Terms",
    body: 'By accessing or using AISmallBIZ.org (the "Site"), you agree to these Terms of Use. If you do not agree, please do not use the Site.',
  },
  {
    id: "what-this-site-is",
    icon: FileText,
    heading: "2. What This Site Is",
    body: "AISmallBIZ.org is a free resource for small business owners, providing guidance, tool recommendations, and educational content related to AI tools, automation, cloud services, social media, website management, and brand strategy. The Site does not require account creation, login, or registration to access its content.",
  },
  {
    id: "free-forever",
    icon: BadgeCheck,
    heading: "3. Free Forever",
    body: "AISmallBIZ.org is provided free of charge. There is no premium tier, subscription, or paywall. We do not sell access to this content and do not intend to charge for it in the future.",
  },
  {
    id: "no-user-accounts",
    icon: UserX,
    heading: "4. No User Accounts",
    body: "This Site does not require you to create an account to access content. Optional Internet Identity login is available for users who want to receive future business updates and newsletter content. Login is not required to view any guide, tool, or resource on the Site. We do not collect passwords. Any use of the Site is anonymous unless you voluntarily log in or provide information (for example, by emailing us directly).",
  },
  {
    id: "third-party-tools-and-links",
    icon: ExternalLink,
    heading: "5. Third-Party Tools and Links",
    body: "AISmallBIZ.org references and links to third-party AI tools, software platforms, and services. We do not own, control, or guarantee the performance, security, or pricing of any third-party product. Your use of any third-party tool is governed by that provider's own terms and privacy policy, not this one. We are not responsible for any outcome, cost, or issue arising from your use of a third-party tool we mention or recommend.",
  },
  {
    id: "no-professional-advice",
    icon: AlertTriangle,
    heading: "6. No Professional Advice",
    body: "Content on this Site is for general informational and educational purposes only. It does not constitute legal, financial, tax, or professional business advice. You should consult a qualified professional before making business decisions based on anything found on this Site.",
  },
  {
    id: "no-warranty",
    icon: ShieldAlert,
    heading: "7. No Warranty",
    body: 'The Site and its content are provided "as is" without warranties of any kind, express or implied. We do not guarantee that the information is complete, accurate, current, or error-free. Tool recommendations, cost estimates, and time-savings figures are estimates based on general research and are not guaranteed outcomes for your specific business.',
  },
  {
    id: "limitation-of-liability",
    icon: Scale,
    heading: "8. Limitation of Liability",
    body: "To the fullest extent permitted by law, AISmallBIZ.org and its creator are not liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, the Site or any third-party tool referenced on it.",
  },
  {
    id: "intellectual-property",
    icon: Sparkles,
    heading: "9. Intellectual Property",
    body: "The content, design, and original material on this Site are the property of AISmallBIZ.org unless otherwise noted. You may share links to the Site freely. You may not reproduce, republish, or resell substantial portions of the Site's original content without permission.",
  },
  {
    id: "changes-to-the-site-or-these-terms",
    icon: RefreshCw,
    heading: "10. Changes to the Site or These Terms",
    body: "We may update, modify, or discontinue any part of the Site at any time without notice. We may also revise these Terms of Use periodically. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.",
  },
  {
    id: "contact",
    icon: Mail,
    heading: "11. Contact",
    body: "Questions about these Terms can be sent to AISmallBIZ.Suggestions@gmail.com. Submissions are reviewed once a week.",
  },
];

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email the team",
    description:
      "Send questions about these Terms of Use to our team and we will reply as soon as we can.",
    to: "/ask-a-question" as const,
    linkText: "Contact AISmallBiz",
  },
  {
    icon: Unlock,
    label: "Read the Privacy Policy",
    description:
      "Review how AISmallBiz handles your information when you use the Site.",
    to: "/privacy-policy" as const,
    linkText: "Privacy Policy",
  },
];

export default function TermsOfUse() {
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
              Terms of Use
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 heading-display leading-tight">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              These Terms of Use explain the rules for using AISmallBiz. The
              Site is free, requires no account, and is built to help small
              business owners. Please read them before you rely on any guide,
              tool, or recommendation.
            </p>
            <p className="text-sm text-muted-decorative mt-6">
              Last updated:{" "}
              {new Date(2026, 6, 5).toLocaleDateString("en-US", {
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
            data-ocid="terms.summary.card"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              The Short Version
            </h2>
            <p className="text-foreground leading-relaxed mb-3">
              AISmallBiz is free, requires no account, and offers optional login
              for newsletter updates only. We link to third party tools but we
              do not control them. Our content is general information, not
              professional advice, and is provided as is without warranty.
            </p>
            <p className="text-foreground leading-relaxed">
              Our promise is simple: People First, Machines Second. Use the Site
              freely and reach out any time you have a question.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="space-y-6" data-ocid="terms.sections.list">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`terms.sections.item.${i + 1}`}
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
              Questions About These Terms?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              We want you to feel confident using AISmallBiz. If you have a
              question about these Terms or want to learn more about how the
              Site works, reach out any time.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            data-ocid="terms.contact.list"
          >
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`terms.contact.item.${i + 1}`}
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
                      data-ocid={`terms.contact.link.${i + 1}`}
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
            AISmallBiz (TM) is a registered trademark of Christian Lawson. These
            Terms of Use may be updated over time. The date above shows when
            they were last reviewed.
          </p>
        </div>
      </section>
    </Layout>
  );
}
