import { TopicBadge } from "@/components/TopicBadge";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AuthorType, Topic } from "@/types";
import type { Guide } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Star, User } from "lucide-react";
import { useState } from "react";

interface GuideCardProps {
  guide: Guide;
  index?: number;
}

export function GuideCard({ guide, index = 0 }: GuideCardProps) {
  const [saved, setSaved] = useState(false);

  const TOPIC_TAGS: Record<string, string[]> = {
    [Topic.googleMaps]: [
      "Ranking factors",
      "Reviews & reputation",
      "Photo optimization",
    ],
    [Topic.socialAds]: [
      "Content calendar",
      "Ad targeting",
      "Platform strategy",
    ],
    [Topic.businessPlanning]: [
      "Financial projections",
      "Market research",
      "Growth roadmap",
    ],
    [Topic.branding]: ["Brand identity", "Customer connection", "Storytelling"],
    [Topic.techUpgrades]: [
      "Automation tools",
      "Software selection",
      "AI integration",
    ],
  };

  const tags = TOPIC_TAGS[guide.topic] ?? [];
  const lastUpdated = guide.publishedAt
    ? new Date(Number(guide.publishedAt) / 1_000_000).toLocaleDateString(
        "en-US",
        { month: "short", year: "numeric" },
      )
    : "May 2026";

  return (
    <Link
      to="/guides/$id"
      params={{ id: guide.id.toString() }}
      data-ocid={`guide.link.${index + 1}`}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
    >
      <Card
        data-ocid={`guide.item.${index + 1}`}
        className="card-guide group flex flex-col h-full rounded-xl cursor-pointer transition-all duration-200 hover:shadow-neutral hover:border-primary/40"
      >
        <CardHeader className="pb-3 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <TopicBadge topic={guide.topic} />
            <div className="flex items-center gap-2">
              {guide.authorType === AuthorType.community && (
                <Badge variant="outline" className="text-[15px] shrink-0">
                  Community
                </Badge>
              )}
              <button
                type="button"
                aria-label={saved ? "Remove from saved" : "Save this guide"}
                data-ocid={`guide.save_button.${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSaved((s) => !s);
                }}
                className="p-1 rounded-md hover:bg-secondary/15 transition-colors duration-200"
              >
                <Star
                  size={15}
                  style={{
                    color: saved ? "#EAB308" : "rgb(var(--muted-foreground))",
                    fill: saved ? "#EAB308" : "transparent",
                    transition: "fill 0.2s, color 0.2s",
                  }}
                />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-xl leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {guide.title}
            </h3>
            <p className="mt-1 text-[15px] font-medium text-primary flex items-center gap-1">
              Open Guide
              <ArrowRight size={11} className="inline" />
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-2">
          <p className="text-[15px] text-muted-readable line-clamp-3 leading-relaxed mb-3">
            {guide.excerpt}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[15px] font-medium px-2 py-0.5 rounded-full badge-primary-vibrant"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[15px] text-muted-readable">
            <span className="flex items-center gap-1">
              <User size={12} />
              <span className="truncate max-w-24">{guide.authorName}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {Number(guide.readTimeMinutes)} min
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={12} />
              <span className="text-[15px]">Updated {lastUpdated}</span>
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
