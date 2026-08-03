export function GuideAuthorFooter() {
  return (
    <div
      className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 rounded-xl text-xs text-muted-foreground"
      style={{
        background: "oklch(0.97 0.006 75 / 0.7)",
        border: "1px solid oklch(0.90 0.006 75)",
      }}
      data-ocid="guide.author_footer"
    >
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: "oklch(0.28 0.12 330 / 0.15)",
            color: "oklch(0.28 0.12 330)",
          }}
        >
          CL
        </div>
        <span>
          <span className="font-semibold text-foreground">
            Authored by Christian Lawson
          </span>{" "}
          | Based on real case studies and industry research
        </span>
      </div>
      <span
        className="shrink-0 font-medium"
        style={{ color: "oklch(0.28 0.12 330)" }}
      >
        Last Updated: May 2026
      </span>
    </div>
  );
}
