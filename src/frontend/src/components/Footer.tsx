import { Link } from "@tanstack/react-router";
import { MapPin, Shield } from "lucide-react";

import { NewsletterForm } from "@/components/NewsletterForm";

const PRIMARY_LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/start-here" as const, label: "Start Here" },
  { to: "/taffer-advice" as const, label: "Business Rescue" },
  { to: "/branding" as const, label: "Branding" },
  { to: "/cloud-monitoring" as const, label: "Website Health" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/ask-a-question" as const, label: "Ask a Small Business Question" },
  { to: "/ux-scenarios" as const, label: "Success Stories" },
  { to: "/personas" as const, label: "Owner Journeys" },
  { to: "/about" as const, label: "About" },
];

const TOOLS_RESOURCES_LINKS = [
  { to: "/nyc-resources" as const, label: "NYC Resources (FFFree)" },
  { to: "/ai-training" as const, label: "AI Training & Tools" },
  { to: "/learn" as const, label: "Learn" },
];

const GUIDE_LINKS = [
  { to: "/deli-guide" as const, label: "Deli" },
  { to: "/salon-guide" as const, label: "Salon" },
  { to: "/restaurant-guide" as const, label: "Restaurant" },
  { to: "/pool-hall-guide" as const, label: "Pool Hall" },
  { to: "/fitness-studio-guide" as const, label: "Fitness Studio" },
  { to: "/bakery-guide" as const, label: "Bakery & Café" },
  { to: "/retail-guide" as const, label: "Retail" },
  { to: "/start-your-business" as const, label: "Start New Business" },
  { to: "/online-services-guide" as const, label: "Online Services" },
  { to: "/cleaning-service" as const, label: "Cleaning Service" },
  { to: "/boutique-guide" as const, label: "Boutique Clothing Store" },
  { to: "/social-media-guide" as const, label: "Social Media Marketing" },
  { to: "/ai-search-prep" as const, label: "AI Search Prep" },
  { to: "/online-schooling" as const, label: "Online Schooling" },
];

const LEGAL = [
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/ask-a-question" as const },
  { label: "Privacy Policy", to: "/privacy-policy" as const },
  { label: "Terms of Use", to: "/terms" as const },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer data-home-footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Newsletter row */}
        <NewsletterForm variant="footer" />

        {/* 4-column nav grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              aria-label="AISmallBiz home"
              className="flex items-center gap-2 group w-fit focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md">
                <MapPin size={16} className="text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                AI<span className="text-primary-text">SmallBiz</span>
                <sup className="text-[0.55em] align-super text-primary-text">
                  ™
                </sup>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-52 leading-relaxed">
              AI-powered resources for small and medium businesses.
            </p>
            <div className="text-sm text-muted-foreground max-w-52 leading-relaxed">
              <p>
                Questions or suggestions? Email{" "}
                <a
                  href="mailto:AISmallBIZ.Suggestions@gmail.com"
                  className="text-primary-text hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  AISmallBIZ.Suggestions@gmail.com
                </a>
              </p>
              <p className="text-xs text-muted-decorative mt-1">
                Submissions are reviewed once a week.
              </p>
            </div>
            <p className="text-sm text-foreground max-w-52 leading-relaxed">
              We give small business owners free, people-first AI guidance. No
              fees, no jargon, no catch. Our principle is simple: People First,
              Machines Second.
            </p>
            <p className="text-xs text-muted-decorative max-w-52 leading-relaxed flex items-start gap-1.5">
              <Shield size={12} className="mt-0.5 shrink-0 text-primary/60" />
              Your data stays on the Internet Computer: private and secure.
            </p>
          </div>

          {/* Resources column */}
          <nav aria-label="Footer main navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-text mb-4">
              Resources
            </p>
            <ul className="space-y-2.5">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[2rem] flex items-center focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tools & Resources column */}
          <nav aria-label="Footer tools navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-text mb-4">
              Tools & Resources
            </p>
            <ul className="space-y-2.5">
              {TOOLS_RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[2rem] flex items-center focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Guides column */}
          <nav aria-label="Footer guides navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-text mb-4">
              Guides
            </p>
            <ul className="space-y-2.5">
              {GUIDE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[2rem] flex items-center focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-decorative">
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-xs text-muted-decorative">
              AISmallBiz™ is a registered trademark of Christian Lawson.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => window.scrollTo(0, 0)}
                data-ocid={`footer.legal.link.${item.label.toLowerCase().replace(/\s+/g, "_")}`}
                className="text-xs text-muted-decorative hover:text-foreground transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
