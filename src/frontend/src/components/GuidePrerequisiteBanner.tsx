import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

export function GuidePrerequisiteBanner() {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl mb-8"
      style={{
        background: "oklch(0.55 0.14 220 / 0.08)",
        border: "1px solid oklch(0.55 0.14 220 / 0.25)",
      }}
      data-ocid="guide.prerequisite_banner"
    >
      <Info
        size={16}
        style={{ color: "oklch(0.42 0.12 220)", flexShrink: 0 }}
      />
      <p className="text-sm text-muted-foreground">
        <span className="font-medium" style={{ color: "oklch(0.42 0.12 220)" }}>
          New to business planning?
        </span>{" "}
        Read our{" "}
        <Link
          to="/guides"
          search={{
            topic: undefined,
            businessType: undefined,
            keyword: undefined,
          }}
          className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: "oklch(0.42 0.12 220)" }}
          data-ocid="guide.prerequisite_banner_link"
        >
          Business Planning Guide
        </Link>{" "}
        first for the essential foundations.
      </p>
    </div>
  );
}
