import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function BrandingCrossLink() {
  return (
    <div
      className="mt-8 flex items-center gap-4 p-4 rounded-xl"
      style={{
        background: "oklch(0.28 0.12 330 / 0.06)",
        border: "1px solid oklch(0.28 0.12 330 / 0.2)",
      }}
      data-ocid="guide.branding_cross_link"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">
          <span
            className="font-semibold"
            style={{ color: "oklch(0.28 0.12 330)" }}
          >
            Want to go deeper on branding?
          </span>{" "}
          Read the full Appreciated Branding guide by Reid Holmes: the
          philosophy behind why customers choose brands they love.
        </p>
      </div>
      <Link
        to="/branding"
        data-ocid="guide.branding_full_guide_link"
        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200 hover:opacity-90"
        style={{
          background: "oklch(0.28 0.12 330)",
          color: "oklch(0.97 0.006 75)",
        }}
      >
        Read Appreciated Branding
        <ArrowRight size={12} />
      </Link>
    </div>
  );
}
