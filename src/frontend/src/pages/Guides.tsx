import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { TopicBadge } from "@/components/TopicBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useGuides } from "@/hooks/useGuides";
import {
  ALL_BUSINESS_TYPES,
  INDUSTRY_LABELS,
  type IndustryType,
  TOPIC_LABELS,
  Topic,
} from "@/types";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  BookOpen,
  Dumbbell,
  MapPin,
  Scissors,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Target,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const ALL_TOPICS = Object.values(Topic);
const ALL_INDUSTRIES = ALL_BUSINESS_TYPES.map((bt) => bt.key as IndustryType);

const BUSINESS_TYPE_ICON: Record<string, React.ElementType> = {
  deli: MapPin,
  salon: Scissors,
  restaurant: UtensilsCrossed,
  "pool-hall": Target,
  retail: ShoppingBag,
  "fitness-studio": Dumbbell,
  bakery: Sparkles,
  "cleaning-service": Star,
  "online-schooling": BookOpen,
  boutique: ShoppingBag,
  "pizza-shop": UtensilsCrossed,
};

const BUSINESS_TYPE_DESCRIPTION: Record<string, string> = {
  deli: "The complete playbook for running a top-tier NYC deli in 2026.",
  salon: "The complete guide to running a successful NYC salon in 2026.",
  restaurant: "Everything NYC restaurant operators need to succeed in 2026.",
  "pool-hall":
    "Attract women players, build a thriving community, and grow your pool hall with immediate wins.",
  retail: "The definitive guide for NYC retail store owners in 2026.",
  "fitness-studio":
    "Member retention, attracting women, and viral class strategies for fitness studios.",
  bakery:
    "Viral menu items, display case mastery, and community events for bakeries and cafes.",
  "cleaning-service":
    "Launch or grow your cleaning business with a proven system.",
  "online-schooling":
    "Compare self-paced, live cohort, and one-to-one formats with a 28-step launch checklist and FAQ.",
  boutique: "Open or grow a fashion boutique that builds loyal customers.",
  "pizza-shop":
    "The complete playbook for mobile pizza truck and oven owners transitioning to a thriving brick-and-mortar pizza shop.",
};

const BUSINESS_TYPE_PREREQ: Record<string, string | null> = {
  deli: null,
  salon: "Read Business Planning first",
  restaurant: "Read Business Planning first",
  "pool-hall": null,
  retail: "Read Business Planning first",
  "fitness-studio": null,
  bakery: null,
  "cleaning-service": null,
  "online-schooling": null,
  boutique: null,
  "pizza-shop": "Read Business Planning first",
};

const INDUSTRY_GUIDE_CARDS = ALL_BUSINESS_TYPES.map((bt) => {
  const key = bt.key;
  const to =
    key === "cleaning-service" || key === "online-schooling"
      ? `/${key}`
      : (`/${key}-guide` as const);
  return {
    to,
    label: `${bt.label} Guide`,
    description: BUSINESS_TYPE_DESCRIPTION[key],
    icon: BUSINESS_TYPE_ICON[key] ?? Star,
    color: "bg-accent-neutral/10 text-accent-neutral" as const,
    featured: true as const,
    prereq: BUSINESS_TYPE_PREREQ[key] ?? null,
  };
});

export default function Guides() {
  const navigate = useNavigate({ from: "/guides" });
  const searchParams = useSearch({ from: "/guides" });

  const [inputValue, setInputValue] = useState(searchParams.keyword ?? "");

  // Sync input when URL keyword changes externally
  useEffect(() => {
    setInputValue(searchParams.keyword ?? "");
  }, [searchParams.keyword]);

  // Debounce keyword → URL
  useEffect(() => {
    const timer = setTimeout(() => {
      const newKeyword = inputValue.trim() || undefined;
      if (newKeyword !== searchParams.keyword) {
        navigate({
          search: (prev) => ({ ...prev, keyword: newKeyword }),
          replace: true,
        });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue, navigate, searchParams.keyword]);

  const selectedTopic = searchParams.topic as Topic | undefined;
  const selectedIndustry = searchParams.businessType as
    | IndustryType
    | undefined;
  const keyword = searchParams.keyword;

  const setTopic = (topic: Topic | undefined) =>
    navigate({
      search: (prev) => ({ ...prev, topic: topic }),
      replace: true,
    });

  const setIndustry = (industry: IndustryType | undefined) =>
    navigate({
      search: (prev) => ({ ...prev, businessType: industry }),
      replace: true,
    });

  const clearAll = () => {
    setInputValue("");
    navigate({
      search: () => ({
        topic: undefined,
        businessType: undefined,
        keyword: undefined,
      }),
      replace: true,
    });
  };

  const [sortBy, setSortBy] = useState<"relevant" | "newest" | "readtime">(
    "relevant",
  );

  const hasFilters = !!(selectedTopic || selectedIndustry || keyword);

  const { data: guides, isLoading } = useGuides({
    topic: selectedTopic,
    keyword: keyword || undefined,
    businessTypeTag: selectedIndustry
      ? INDUSTRY_LABELS[selectedIndustry].toLowerCase()
      : undefined,
  });

  const sortedGuides = guides
    ? [...guides].sort((a, b) => {
        if (sortBy === "newest") {
          return Number(b.publishedAt ?? 0n) - Number(a.publishedAt ?? 0n);
        }
        if (sortBy === "readtime") {
          return Number(a.readTimeMinutes) - Number(b.readTimeMinutes);
        }
        return 0;
      })
    : guides;

  const guideCount = sortedGuides?.length ?? 0;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* First-Time Founders Banner */}
        <Link
          to="/online-services-guide"
          data-ocid="guides.founders_banner"
          className="flex items-center justify-between gap-4 mb-8 px-6 py-4 rounded-2xl group transition-all duration-200 hover:shadow-elevated bg-accent-neutral-soft border border-accent-neutral-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 bg-accent-neutral/10">
              🌱
            </div>
            <div>
              <p className="font-display font-bold text-sm text-accent-neutral">
                Starting a new business?
              </p>
              <p className="text-xs text-muted-readable">
                Our Online Services guide covers everything you need to legally
                form, fund, and operate your business from day one.
              </p>
            </div>
          </div>
          <div className="shrink-0 button-cta text-xs py-2 px-4 whitespace-nowrap">
            Start here →
          </div>
        </Link>

        {/* Page hero */}
        <div className="mb-10">
          <h1 className="heading-hero mb-3 text-left leading-tight">
            Business{" "}
            <span className="relative inline-block">
              Guides
              <span
                className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-secondary"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert knowledge for every stage of your business journey.
          </p>
        </div>

        {/* Industry Guides */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Industry Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRY_GUIDE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.to}
                  to={card.to}
                  data-ocid={`guides.industry.${card.to.replace("/", "").replace("-guide", "")}_card`}
                  className="group relative flex flex-col bg-card border border-primary/18 rounded-xl p-5 hover:border-primary/45 hover:shadow-elevated transition-all duration-200"
                >
                  {card.featured && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold badge-primary-vibrant">
                      <Star size={9} className="fill-secondary" />
                      Featured
                    </span>
                  )}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${card.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-200">
                    {card.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                  {card.prereq && (
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full w-fit bg-accent-neutral/10 text-accent-neutral border border-accent-neutral-border">
                      ℹ️ {card.prereq}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Filters panel */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6 space-y-4">
          {/* Row 1: search + business type + sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <Input
                className="pl-9 pr-9"
                placeholder="Search guides by keyword..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                data-ocid="guides.search_input"
              />
              {inputValue && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setInputValue("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <Select
              value={selectedIndustry ?? "all"}
              onValueChange={(val) =>
                setIndustry(val === "all" ? undefined : (val as IndustryType))
              }
            >
              <SelectTrigger
                className="w-full sm:w-48"
                data-ocid="guides.businesstype.select"
              >
                <SlidersHorizontal
                  size={14}
                  className="mr-1.5 text-muted-foreground shrink-0"
                />
                <SelectValue placeholder="All Business Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Business Types</SelectItem>
                {ALL_INDUSTRIES.map((ind) => (
                  <SelectItem
                    key={ind}
                    value={ind}
                    data-ocid={`guides.businesstype.${ind}_item`}
                  >
                    {INDUSTRY_LABELS[ind]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sortBy}
              onValueChange={(val) => setSortBy(val as typeof sortBy)}
            >
              <SelectTrigger
                className="w-full sm:w-44"
                data-ocid="guides.sort.select"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="relevant"
                  data-ocid="guides.sort.relevant_item"
                >
                  Most Relevant
                </SelectItem>
                <SelectItem value="newest" data-ocid="guides.sort.newest_item">
                  Newest
                </SelectItem>
                <SelectItem
                  value="readtime"
                  data-ocid="guides.sort.readtime_item"
                >
                  Read Time (Short → Long)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Row 2: topic filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              variant={selectedTopic === undefined ? "default" : "outline"}
              size="sm"
              onClick={() => setTopic(undefined)}
              data-ocid="guides.filter.all_tab"
            >
              All Topics
            </Button>
            {ALL_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() =>
                  setTopic(topic === selectedTopic ? undefined : topic)
                }
                data-ocid={`guides.filter.${topic}_tab`}
                className="transition-smooth"
              >
                <TopicBadge
                  topic={topic}
                  size="md"
                  className={`cursor-pointer hover:opacity-80 transition-opacity ${
                    selectedTopic === topic
                      ? "ring-2 ring-offset-1 ring-current"
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Active filter chips */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <span className="text-xs text-muted-foreground font-medium">
              Active filters:
            </span>
            {keyword && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                "{keyword}"
                <button
                  type="button"
                  onClick={() => setInputValue("")}
                  aria-label="Remove keyword filter"
                  className="hover:text-primary/60 transition-colors"
                >
                  <X size={11} />
                </button>
              </span>
            )}
            {selectedTopic && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {TOPIC_LABELS[selectedTopic]}
                <button
                  type="button"
                  onClick={() => setTopic(undefined)}
                  aria-label="Remove topic filter"
                  className="hover:text-primary/60 transition-colors"
                >
                  <X size={11} />
                </button>
              </span>
            )}
            {selectedIndustry && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {INDUSTRY_LABELS[selectedIndustry]}
                <button
                  type="button"
                  onClick={() => setIndustry(undefined)}
                  aria-label="Remove industry filter"
                  className="hover:text-primary/60 transition-colors"
                >
                  <X size={11} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Count row + clear */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-muted-foreground">
            {isLoading ? (
              <Skeleton className="h-4 w-28 inline-block" />
            ) : (
              <span>
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {guideCount}
                </span>{" "}
                {guideCount === 1 ? "guide" : "guides"}
                {hasFilters && " matching your filters"}
              </span>
            )}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors duration-200"
              data-ocid="guides.clear_filters_button"
            >
              <X size={12} /> Clear all filters
            </button>
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="guides.loading_state"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="h-64">
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : sortedGuides && sortedGuides.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedGuides.map((guide, i) => (
              <GuideCard key={guide.id.toString()} guide={guide} index={i} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-24 border border-dashed border-border rounded-2xl bg-muted/20"
            data-ocid="guides.empty_state"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
              <Search className="text-muted-foreground" size={28} />
            </div>
            <h3 className="font-display font-semibold text-foreground text-xl mb-2">
              {hasFilters ? "No guides found" : "No guides yet"}
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              {hasFilters
                ? "Try a different search term or browse all guides."
                : "Expert guides are being prepared. Check back soon."}
            </p>
            {hasFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                data-ocid="guides.clear_filters_empty_button"
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
