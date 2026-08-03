interface GuideTabToggleProps {
  activeTab: "quickstart" | "full";
  onChange: (tab: "quickstart" | "full") => void;
  accentColor?: string;
}

export function GuideTabToggle({
  activeTab,
  onChange,
  accentColor = "oklch(0.28 0.12 330)",
}: GuideTabToggleProps) {
  return (
    <div
      className="flex items-center gap-1 p-1 rounded-xl w-fit mb-8 border overflow-x-auto max-w-full"
      role="tablist"
      aria-label="Guide view toggle"
      style={{
        background: `${accentColor.replace(")", " / 0.06)")}`,
        borderColor: `${accentColor.replace(")", " / 0.2)")}`,
      }}
      data-ocid="guide.tab_toggle"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "quickstart"}
        aria-controls="guide-quickstart-panel"
        id="guide-quickstart-tab"
        onClick={() => onChange("quickstart")}
        data-ocid="guide.quickstart_tab"
        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap border-b-2 border-transparent"
        style={{
          background: activeTab === "quickstart" ? accentColor : "transparent",
          color:
            activeTab === "quickstart" ? "oklch(0.97 0.006 75)" : accentColor,
          borderBottomColor:
            activeTab === "quickstart" ? "oklch(0.97 0.006 75)" : "transparent",
        }}
      >
        ⚡ Quick Start (7-Day Plan)
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "full"}
        aria-controls="guide-full-panel"
        id="guide-full-tab"
        onClick={() => onChange("full")}
        data-ocid="guide.full_guide_tab"
        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap border-b-2 border-transparent"
        style={{
          background: activeTab === "full" ? accentColor : "transparent",
          color: activeTab === "full" ? "oklch(0.97 0.006 75)" : accentColor,
          borderBottomColor:
            activeTab === "full" ? "oklch(0.97 0.006 75)" : "transparent",
        }}
      >
        📖 Full Guide
      </button>
    </div>
  );
}
