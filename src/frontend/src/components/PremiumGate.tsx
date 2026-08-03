import { SubscriptionTier } from "@/backend";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { Link } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface PremiumGateProps {
  children: ReactNode;
  teaserContent: ReactNode;
  sectionTitle: string;
}

export function PremiumGate({
  children,
  teaserContent,
  sectionTitle,
}: PremiumGateProps) {
  const { isAuthenticated, isAdmin } = useAuth();
  const { data: profile } = useProfile();

  const isPaid =
    isAdmin ||
    (profile?.subscriptionTier !== undefined &&
      profile.subscriptionTier === SubscriptionTier.paid);

  if (isPaid) {
    return <>{children}</>;
  }

  return (
    <div data-ocid="premium_gate.section">
      {/* Teaser visible to all */}
      <div className="text-muted-foreground">{teaserContent}</div>

      {/* Lock overlay card */}
      <div
        data-ocid="premium_gate.overlay"
        className="relative mt-4 rounded-2xl overflow-hidden"
        aria-label={`Locked: ${sectionTitle}`}
      >
        {/* Blurred content peek */}
        <div className="blur-sm pointer-events-none select-none opacity-50 p-6 bg-card border border-border rounded-2xl">
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted rounded w-1/2" />
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </div>
        </div>

        {/* Glassmorphism unlock card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            data-ocid="premium_gate.card"
            className="glass-card max-w-sm w-full mx-auto rounded-2xl border border-primary/25 bg-card/80 backdrop-blur-md shadow-elevated p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Lock size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Unlock {sectionTitle}
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              This advanced section is available to paid members. Upgrade to
              access downloadable checklists, templates, and more.
            </p>
            <Link
              to="/dashboard"
              data-ocid="premium_gate.upgrade_link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              <Sparkles size={14} />
              Upgrade to Paid
            </Link>
            {!isAuthenticated && (
              <p className="text-xs text-muted-foreground mt-4">
                Already a member?{" "}
                <Link to="/onboarding" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
