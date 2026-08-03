import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb: shows path context, e.g. Home > Guides > NYC Deli Guide
 * Usage:
 *   <Breadcrumb items={[
 *     { label: "Guides", to: "/guides" },
 *     { label: "NYC Deli Guide" },
 *   ]} />
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-1 text-sm text-muted-foreground",
        className,
      )}
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary transition-colors duration-200 min-h-[1.75rem]"
        data-ocid="breadcrumb.home_link"
        aria-label="Home"
      >
        <Home size={13} />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1">
            <ChevronRight
              size={13}
              className="text-muted-foreground/50"
              aria-hidden="true"
            />
            {isLast || !item.to ? (
              <span
                className={cn(
                  "font-medium",
                  isLast ? "text-foreground" : "text-muted-foreground",
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:text-primary transition-colors duration-200"
                data-ocid={`breadcrumb.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
