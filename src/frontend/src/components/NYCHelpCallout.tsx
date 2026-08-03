import { Link } from "@tanstack/react-router";
import { Building2, ExternalLink, Heart, Phone } from "lucide-react";

/**
 * NYCHelpCallout: shown near the top of every guide page.
 * For women-focused guides (Salon, Boutique, Fitness Studio), pass showWENYC={true}.
 * For the Start New Business guide, use the NYCResourcesSection instead.
 */
export function NYCHelpCallout({
  showWENYC = false,
}: {
  showWENYC?: boolean;
}) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4"
      data-ocid="nyc-help-callout"
    >
      {/* Free NYC Business Help */}
      <div className="flex-1 border-l-4 border-primary bg-[#EEF2FF] rounded-r-xl px-5 py-4 focus-within:ring-2 focus-within:ring-primary/50">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Building2 size={18} className="text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-[16px] text-foreground leading-snug mb-1">
              Free Business Help in NYC
            </h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-3">
              NYC Small Business Services offers free expert help: business
              planning, legal advice, permit assistance, and more. No cost, no
              catch.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/nyc-resources"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:text-primary/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                data-ocid="nyc-help-callout.learn_more_link"
              >
                Explore all NYC programs
                <ExternalLink size={13} />
              </Link>
              <a
                href="tel:888-727-4692"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Call NYC Small Business Services at 888-SBS-4NYC"
                data-ocid="nyc-help-callout.phone_link"
              >
                <Phone size={13} />
                888-SBS-4NYC
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WE NYC: women-focused guides only */}
      {showWENYC && (
        <div
          className="flex-1 border-l-4 border-pink-400 bg-pink-50 rounded-r-xl px-5 py-4 focus-within:ring-2 focus-within:ring-pink-400/50"
          data-ocid="nyc-help-callout.wenyc"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
              <Heart size={18} className="text-pink-500" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-[16px] text-foreground leading-snug mb-1">
                Women Entrepreneurs of NYC (WE NYC)
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-3">
                Free mentorship, training, and resources specifically for women
                business owners in NYC.
              </p>
              <a
                href="https://www.nyc.gov/wenyc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-pink-600 hover:text-pink-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                data-ocid="nyc-help-callout.wenyc_link"
              >
                Explore WE NYC programs
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
