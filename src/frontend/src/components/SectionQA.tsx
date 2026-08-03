import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface QAItem {
  q: string;
  a: string;
}

interface SectionQAProps {
  items: QAItem[];
  accentColor?: string;
}

export function SectionQA({
  items,
  accentColor = "oklch(0.28 0.12 330)",
}: SectionQAProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div
      className="mt-6 rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${accentColor.replace(")", " / 0.18)")}`,
        background: `${accentColor.replace(")", " / 0.03)")}`,
      }}
      data-ocid="guide.section_qa"
    >
      <div
        className="px-4 py-2.5 border-b flex items-center gap-2"
        style={{
          borderColor: `${accentColor.replace(")", " / 0.15)")}`,
          background: `${accentColor.replace(")", " / 0.07)")}`,
        }}
      >
        <span
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: accentColor }}
        >
          💬 Quick Q&amp;A
        </span>
      </div>
      {items.map((item) => (
        <div
          key={item.q}
          className="border-b last:border-b-0"
          style={{ borderColor: `${accentColor.replace(")", " / 0.1)")}` }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-black/5 transition-colors duration-150"
            onClick={() => setOpenIndex(openIndex === item.q ? null : item.q)}
            data-ocid={`guide.section_qa_item.${items.indexOf(item) + 1}`}
            aria-expanded={openIndex === item.q}
          >
            <span className="text-sm font-medium text-foreground">
              {item.q}
            </span>
            <ChevronDown
              size={14}
              className="shrink-0 transition-transform duration-200"
              style={{
                color: accentColor,
                transform: openIndex === item.q ? "rotate(180deg)" : "none",
              }}
            />
          </button>
          {openIndex === item.q && (
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
