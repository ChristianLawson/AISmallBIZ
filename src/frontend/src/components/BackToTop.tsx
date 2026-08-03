import { cn } from "@/lib/utils";
import { ChevronUp, List } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface GuideSection {
  id: string;
  label: string;
}

interface BackToTopProps {
  sections?: GuideSection[];
}

export function BackToTop({ sections = [] }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2",
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
      ref={menuRef}
    >
      {/* Section jump popover */}
      {sections.length > 0 && menuOpen && (
        <div
          id="back-to-top-section-menu"
          className="bg-card border border-border rounded-lg shadow-lg p-2 min-w-[180px] max-w-[240px] flex flex-col gap-0.5"
          role="menu"
          aria-label="Jump to section"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2 py-1">
            Jump to section
          </p>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              onClick={() => scrollToSection(id)}
              className="text-left text-sm px-2 py-1.5 rounded hover:bg-accent/10 hover:text-[#6366F1] text-foreground transition-colors duration-150 w-full truncate"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Section menu toggle */}
        {sections.length > 0 && (
          <button
            type="button"
            aria-label="Toggle section menu"
            aria-expanded={menuOpen}
            aria-controls="back-to-top-section-menu"
            data-ocid="back-to-top.section_menu_toggle"
            onClick={() => setMenuOpen((o) => !o)}
            className={cn(
              "w-10 h-10 rounded-lg shadow-lg flex items-center justify-center",
              "bg-card border border-border text-foreground",
              "hover:border-[#6366F1] hover:text-[#6366F1] transition-colors duration-200",
            )}
          >
            <List className="w-4 h-4" />
          </button>
        )}

        {/* Back to top button */}
        <button
          type="button"
          aria-label="Back to top"
          data-ocid="back-to-top.button"
          onClick={scrollToTop}
          className={cn(
            "w-10 h-10 rounded-lg shadow-lg flex items-center justify-center",
            "bg-[#6366F1] text-white",
            "hover:bg-[#4f52d1] transition-colors duration-200",
          )}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
