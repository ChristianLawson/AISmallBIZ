import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { TopicBadge } from "@/components/TopicBadge";
import { GoogleMapsBrandingSection } from "@/components/googlemaps/GoogleMapsBrandingSection";
import { GoogleMapsTafferSection } from "@/components/googlemaps/GoogleMapsTafferSection";
import { SocialMediaBrandingSection } from "@/components/socialmedia/SocialMediaBrandingSection";
import { SocialMediaTafferSection } from "@/components/socialmedia/SocialMediaTafferSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGuide, useGuides } from "@/hooks/useGuides";
import { AuthorType, Topic } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Home,
  List,
  MapPin,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function GuideSkeleton() {
  return (
    <div className="space-y-6" data-ocid="guide_detail.loading_state">
      <Skeleton className="h-5 w-28 rounded-full" />
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-px w-full" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="space-y-2 p-4 rounded-xl border border-border/60 bg-card"
        >
          <Skeleton className="h-4 w-20 rounded-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}

function GoogleMapsBanner() {
  return (
    <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <MapPin size={20} className="text-primary-foreground" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-1">
          ⚠️ Did you know?
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Google indexes your Maps listing{" "}
          <strong className="text-foreground">every single day</strong>. If your
          profile hasn&apos;t been updated recently, your search ranking can
          drop: even if you haven&apos;t changed anything else. This guide
          explains exactly what to do.
        </p>
      </div>
    </div>
  );
}

export default function GuideDetail() {
  const { id } = useParams({ from: "/guides/$id" });
  const guideId = BigInt(id);

  const { data: guide, isLoading } = useGuide(guideId);
  const { data: allGuides, isLoading: isLoadingRelated } = useGuides(
    guide ? { topic: guide.topic } : {},
  );
  // Separate unfiltered query used to resolve curated recommendedNext links,
  // which may point to guides in any topic. The sidebar "Related Guides" still
  // uses the topic-filtered allGuides above.
  const { data: allGuidesIndex } = useGuides({});

  const relatedGuides = (allGuides ?? [])
    .filter((g) => g.id !== guideId)
    .slice(0, 3);

  // Resolve curated recommendedNext IDs to full Guide objects, preserving the
  // curated order. Excludes the current guide and any IDs that no longer exist.
  const recommendedNext = useMemo(() => {
    if (!guide?.recommendedNext || guide.recommendedNext.length === 0)
      return [];
    const byId = new Map((allGuidesIndex ?? []).map((g) => [g.id, g]));
    return guide.recommendedNext
      .map((rid) => byId.get(rid))
      .filter(
        (g): g is NonNullable<typeof g> => g !== undefined && g.id !== guideId,
      );
  }, [guide, allGuidesIndex, guideId]);

  const isGoogleMaps = guide?.topic === Topic.googleMaps;
  const isSocialAds = guide?.topic === Topic.socialAds;

  // Estimate read time from content length if not provided
  const readTime = guide ? Number(guide.readTimeMinutes) : 0;

  // Format publish date
  const publishDate =
    guide?.publishedAt != null
      ? new Date(Number(guide.publishedAt) / 1_000_000).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        )
      : "";

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb bar */}
        <div className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm"
              data-ocid="guide_detail.breadcrumb"
            >
              <Link
                to="/"
                data-ocid="guide_detail.breadcrumb.home_link"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Home size={13} />
                <span>Home</span>
              </Link>
              <ChevronRight
                size={13}
                className="text-muted-foreground/50 shrink-0"
              />
              <Link
                to="/guides"
                search={{
                  topic: undefined,
                  businessType: undefined,
                  keyword: undefined,
                }}
                data-ocid="guide_detail.breadcrumb.guides_link"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Guides
              </Link>
              {guide && (
                <>
                  <ChevronRight
                    size={13}
                    className="text-muted-foreground/50 shrink-0"
                  />
                  <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-[360px]">
                    {guide.title}
                  </span>
                </>
              )}
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <main className="flex-1 min-w-0">
              {isLoading ? (
                <GuideSkeleton />
              ) : guide ? (
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  data-ocid="guide_detail.article"
                >
                  {/* Topic + Author type badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <TopicBadge topic={guide.topic} />
                    {guide.authorType === AuthorType.admin ? (
                      <Badge
                        variant="secondary"
                        className="inline-flex items-center gap-1 text-xs font-medium"
                        data-ocid="guide_detail.admin_badge"
                      >
                        <Shield size={10} className="text-primary" />
                        Admin Expert
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-xs"
                        data-ocid="guide_detail.community_badge"
                      >
                        Community
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h1
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight text-balance"
                    data-ocid="guide_detail.title"
                  >
                    {guide.title}
                  </h1>

                  {/* Meta row */}
                  <div
                    className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-6"
                    data-ocid="guide_detail.meta"
                  >
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      <span className="font-medium text-foreground/80">
                        {guide.authorName}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {publishDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {readTime} min read
                    </span>
                  </div>

                  <Separator className="mb-8" />

                  {/* Google Maps priority banner */}
                  {isGoogleMaps && <GoogleMapsBanner />}

                  {/* Excerpt lead */}
                  <p className="text-lg text-muted-readable mb-8 leading-relaxed font-body">
                    {guide.excerpt}
                  </p>

                  {/* Markdown content */}
                  <div
                    className="prose prose-neutral max-w-none text-foreground/90 prose-headings:font-display prose-headings:text-foreground prose-headings:max-w-4xl prose-p:max-w-prose prose-li:max-w-prose prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-li:marker:text-primary"
                    data-ocid="guide_detail.content"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {guide.content}
                    </ReactMarkdown>
                  </div>

                  {/* Google Maps Taffer + Branding sections */}
                  {isGoogleMaps && (
                    <div className="mt-14 space-y-16">
                      <GoogleMapsTafferSection />
                      <GoogleMapsBrandingSection />
                    </div>
                  )}

                  {/* Social Media Taffer + Branding sections */}
                  {isSocialAds && (
                    <div className="mt-14 space-y-16">
                      <SocialMediaTafferSection />
                      <SocialMediaBrandingSection />
                    </div>
                  )}

                  {/* Recommended next: curated per-guide links persisted in
                      stable memory. Clickable cards navigate to the
                      referenced guide's detail view. */}
                  {recommendedNext.length > 0 && (
                    <section
                      className="mt-14"
                      data-ocid="guide_detail.recommended_next"
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <Sparkles size={18} className="text-primary" />
                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                          Recommended next
                        </h2>
                      </div>
                      <p className="text-sm text-muted-readable mb-5 max-w-prose">
                        Keep going with the guides our editors suggest reading
                        after this one.
                      </p>
                      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
                        {recommendedNext.map((next, i) => (
                          <li key={next.id.toString()}>
                            <Link
                              to="/guides/$id"
                              params={{ id: next.id.toString() }}
                              data-ocid={`guide_detail.recommended_next.item.${i + 1}`}
                              className="group block h-full rounded-xl border border-border/60 bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 no-underline"
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <TopicBadge topic={next.topic} />
                                  </div>
                                  <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                    {next.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1.5">
                                    <Clock size={11} />
                                    {Number(next.readTimeMinutes)} min read
                                  </p>
                                </div>
                                <ChevronRight
                                  size={16}
                                  className="flex-shrink-0 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 mt-1"
                                />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}

                  {/* Footer CTA */}
                  <div className="mt-12 p-6 rounded-xl bg-muted/40 border border-border/60 text-center">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Found this guide helpful?
                    </p>
                    <p className="text-sm text-muted-readable mb-4">
                      Explore more resources tailored for your business.
                    </p>
                    <Link
                      to="/guides"
                      search={{
                        topic: undefined,
                        businessType: undefined,
                        keyword: undefined,
                      }}
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-2"
                        data-ocid="guide_detail.explore_more_button"
                      >
                        <BookOpen size={14} />
                        Browse All Guides
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-24"
                  data-ocid="guide_detail.not_found"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <BookOpen size={28} className="text-muted-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Guide Not Found
                  </h2>
                  <p className="text-muted-readable mb-8 max-w-sm mx-auto">
                    This guide may have been removed or is not published yet.
                    Browse our full library to find what you need.
                  </p>
                  <Link
                    to="/guides"
                    search={{
                      topic: undefined,
                      businessType: undefined,
                      keyword: undefined,
                    }}
                  >
                    <Button data-ocid="guide_detail.back_button">
                      Browse All Guides
                    </Button>
                  </Link>
                </motion.div>
              )}
            </main>

            {/* Sidebar */}
            <aside
              className="w-full lg:w-80 shrink-0"
              data-ocid="guide_detail.sidebar"
            >
              <div className="lg:sticky lg:top-20">
                {/* Table of Contents */}
                {guide?.content &&
                  (() => {
                    const headings = Array.from(
                      guide.content.matchAll(/^#{1,3}\s+(.+)$/gm),
                    )
                      .slice(0, 8)
                      .map((m, i) => ({
                        id: `section-${i}`,
                        text: m[1].trim(),
                        level: m[0].match(/^(#{1,3})/)?.[1].length ?? 1,
                      }));
                    return headings.length > 1 ? (
                      <div
                        className="mb-6 rounded-xl border border-border/60 bg-card p-4"
                        data-ocid="guide_detail.toc"
                      >
                        <h2 className="font-display text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <List size={14} className="text-primary" />
                          In This Guide
                        </h2>
                        <ol className="space-y-1.5">
                          {headings.map((h, i) => (
                            <li
                              key={h.id}
                              className={h.level === 1 ? "" : "pl-3"}
                            >
                              <a
                                href={`#toc-${i}`}
                                data-ocid={`guide_detail.toc.item.${i + 1}`}
                                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 leading-snug block"
                              >
                                {i + 1}. {h.text}
                              </a>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null;
                  })()}

                {/* Related guides */}
                <div className="mb-8">
                  <h2 className="font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full" />
                    Related Guides
                  </h2>

                  {isLoading || isLoadingRelated ? (
                    <SidebarSkeleton />
                  ) : relatedGuides.length > 0 ? (
                    <div className="space-y-4">
                      {relatedGuides.map((related, i) => (
                        <motion.div
                          key={related.id.toString()}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.35 }}
                          data-ocid={`guide_detail.related.item.${i + 1}`}
                        >
                          <GuideCard guide={related} index={i} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="text-sm text-muted-readable py-6 text-center border border-dashed border-border/60 rounded-xl"
                      data-ocid="guide_detail.related.empty_state"
                    >
                      No related guides yet.
                    </div>
                  )}
                </div>

                {/* Tip card: always visible */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                    Get Updates for Your Business
                  </h3>
                  <p className="text-xs text-muted-readable leading-relaxed mb-4">
                    Sign in to get AI-powered business and technology updates
                    tailored specifically to your business type.
                  </p>
                  <Link to="/onboarding">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full text-xs"
                      data-ocid="guide_detail.personalize_button"
                    >
                      Login for business updates
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
