import { cn } from "@/lib/utils";
import { TOPIC_COLORS, TOPIC_LABELS } from "@/types";
import type { Topic } from "@/types";

interface TopicBadgeProps {
  topic: Topic;
  size?: "sm" | "md";
  className?: string;
}

export function TopicBadge({ topic, size = "md", className }: TopicBadgeProps) {
  const colors = TOPIC_COLORS[topic];
  const label = TOPIC_LABELS[topic];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        colors.bg,
        colors.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full shrink-0", colors.dot)} />
      {label}
    </span>
  );
}
