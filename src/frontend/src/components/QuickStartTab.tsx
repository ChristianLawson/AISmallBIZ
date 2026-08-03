import { useState } from "react";

interface DayAction {
  day: number;
  action: string;
}

interface QuickStartTabProps {
  days: DayAction[];
  accentColor?: string;
}

export function QuickStartTab({
  days,
  accentColor = "oklch(0.28 0.12 330)",
}: QuickStartTabProps) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: `${accentColor.replace(")", " / 0.05)").replace("oklch", "oklch")}`,
        border: `1px solid ${accentColor.replace(")", " / 0.18)")}`,
      }}
      data-ocid="guide.quickstart_panel"
    >
      <div className="mb-5">
        <h3
          className="font-display text-xl font-bold mb-1"
          style={{ color: accentColor }}
        >
          Your 7-Day Quick Start Plan
        </h3>
        <p className="text-[15px] text-[#09090B]">
          One concrete action per day. Do these 7 things and you will be ahead
          of 90% of your competitors.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {days.map((item) => (
          <div
            key={item.day}
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{ background: "oklch(0.98 0.005 75 / 0.85)" }}
            data-ocid={`guide.quickstart_day.${item.day}`}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[15px] shrink-0"
              style={{
                background: `${accentColor.replace(")", " / 0.15)")}`,
                color: accentColor,
              }}
            >
              {item.day}
            </div>
            <div className="min-w-0">
              <div
                className="text-[15px] font-semibold mb-0.5"
                style={{ color: accentColor }}
              >
                Day {item.day}
              </div>
              <p className="text-[15px] text-[#71717A] leading-relaxed">
                {item.action}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
