import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { TopicBadge } from "@/components/TopicBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useGuides, usePersonalizedRecommendations } from "@/hooks/useGuides";
import {
  type ChecklistItem,
  getChecklistItems,
  setChecklistItem,
  useChecklistItems,
  useExtendedProfile,
  useProfile,
  useSavedGuides,
} from "@/hooks/useProfile";
import {
  GOAL_LABELS,
  Goal,
  INDUSTRY_LABELS,
  IndustryType,
  Topic,
} from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart2,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  Edit2,
  FileText,
  Map as MapIcon,
  MapPin,
  Megaphone,
  Scissors,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect } from "react";

// ── Industry-specific quick action overrides ──────────────────────────
const INDUSTRY_QUICK_ACTIONS: Partial<
  Record<
    IndustryType,
    {
      title: string;
      description: string;
      href: string;
      icon: React.ElementType;
    }
  >
> = {
  [IndustryType.deli]: {
    title: "Update Your Deli on Google Maps",
    description:
      "Daily indexing means your deli needs fresh photos, hours, and posts every week to stay at the top.",
    href: "/deli-guide",
    icon: MapPin,
  },
  [IndustryType.salon]: {
    title: "Get More Salon Reviews",
    description:
      "85% of people trust reviews as much as personal recommendations. Here is how to ask effectively.",
    href: "/salon-guide",
    icon: Scissors,
  },
  [IndustryType.restaurant]: {
    title: "Feature Your Chef's Special",
    description:
      "Turn your weekly special into a Google Maps post and Instagram reel: two birds, one stone.",
    href: "/restaurant-guide",
    icon: UtensilsCrossed,
  },
  [IndustryType.poolHall]: {
    title: "Host Your First League Night",
    description:
      "Leagues create belonging and repeat visits. Our Pool Hall Guide shows how to launch one that builds community.",
    href: "/pool-hall-guide",
    icon: MapPin,
  },
  [IndustryType.retail]: {
    title: "Plan Your Next VIP Event",
    description:
      "In-store events drive foot traffic and social content. Plan your next one with our Retail Guide.",
    href: "/retail-guide",
    icon: ShoppingBag,
  },
  [IndustryType.other]: {
    title: "Explore Your Industry Guide",
    description:
      "Fitness studios, bakeries, cleaning services, and boutiques each have unique strategies: find yours.",
    href: "/guides",
    icon: Sparkles,
  },
  [IndustryType.onlineServices]: {
    title: "Launch Your Online Service",
    description:
      "Build a digital-first business with proven online strategies and remote operations.",
    href: "/online-services-guide",
    icon: TrendingUp,
  },
  [IndustryType.newBusiness]: {
    title: "Start Your Business Right",
    description:
      "From formation to first customer: get a step-by-step roadmap for launching successfully.",
    href: "/start-your-business",
    icon: FileText,
  },
  [IndustryType.consulting]: {
    title: "Build Your Consulting Brand",
    description:
      "Position yourself as the go-to expert with branding and client acquisition strategies.",
    href: "/guides",
    icon: BookOpen,
  },
};

const GENERIC_QUICK_ACTIONS = [
  {
    topic: Topic.googleMaps,
    goalKey: Goal.googleMaps,
    icon: MapIcon,
    title: "Google Maps Optimization",
    description:
      "Boost your local search ranking: learn how daily indexing can make or break your visibility.",
    ocid: "dashboard.quickaction.googlemaps",
  },
  {
    topic: Topic.socialAds,
    goalKey: Goal.socialAds,
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Run targeted campaigns that actually convert: platforms, budgets, and creative tips.",
    ocid: "dashboard.quickaction.socialads",
  },
  {
    topic: Topic.businessPlanning,
    goalKey: Goal.businessPlanning,
    icon: FileText,
    title: "Business Planning",
    description:
      "Big Four-backed frameworks to build, stress-test, and pitch your business plan with confidence.",
    ocid: "dashboard.quickaction.businessplanning",
  },
];

const TOPIC_ICONS: Record<Topic, React.ElementType> = {
  [Topic.googleMaps]: MapIcon,
  [Topic.socialAds]: Megaphone,
  [Topic.businessPlanning]: FileText,
  [Topic.branding]: Sparkles,
  [Topic.techUpgrades]: TrendingUp,
};

const GOAL_COLORS: Record<Goal, string> = {
  [Goal.googleMaps]: "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20",
  [Goal.socialAds]: "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20",
  [Goal.businessPlanning]: "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20",
};

const CHALLENGE_GUIDE_MAP: Record<
  string,
  Array<{ label: string; href: string }>
> = {
  "Getting found online": [
    { label: "Google Maps Guide", href: "/guides" },
    { label: "NYC Deli Guide", href: "/deli-guide" },
  ],
  "Managing social media": [
    { label: "Social Ads Guide", href: "/guides" },
    { label: "Salon Guide", href: "/salon-guide" },
  ],
  "Writing a business plan": [
    { label: "Business Planning", href: "/guides" },
    { label: "Online Services", href: "/online-services-guide" },
  ],
  "Branding & design": [
    { label: "Appreciated Branding", href: "/branding" },
    { label: "Retail Guide", href: "/retail-guide" },
  ],
  "Cash flow & profitability": [
    { label: "Business Rescue", href: "/taffer-advice" },
    { label: "Restaurant Guide", href: "/restaurant-guide" },
  ],
  "Building a customer base": [
    { label: "Social Ads Guide", href: "/guides" },
    { label: "Branding Guide", href: "/branding" },
  ],
  "Standing out from competitors": [
    { label: "Appreciated Branding", href: "/branding" },
    { label: "Business Rescue", href: "/taffer-advice" },
  ],
  "Tech & tools setup": [
    { label: "Online Services", href: "/online-services-guide" },
    { label: "Tech Upgrades", href: "/guides" },
  ],
  "Marketing on a budget": [
    { label: "Social Ads Guide", href: "/guides" },
    { label: "Google Maps Guide", href: "/guides" },
  ],
  "Hiring and team building": [
    { label: "Business Planning", href: "/guides" },
    { label: "Online Services", href: "/online-services-guide" },
  ],
};

const STARTUP_STEPS = [
  {
    step: 1,
    label: "Business Planning",
    href: "/guides",
    time: "~30 min read",
  },
  {
    step: 2,
    label: "Register Your Business",
    href: "/online-services-guide",
    time: "~20 min read",
  },
  {
    step: 3,
    label: "Build Your Brand",
    href: "/branding",
    time: "~25 min read",
  },
  {
    step: 4,
    label: "Your Industry Guide",
    href: "/guides",
    time: "~45 min read",
  },
  {
    step: 5,
    label: "Marketing & Growth",
    href: "/guides",
    time: "~30 min read",
  },
];

const SAVED_GUIDE_SLUGS: Record<string, { title: string; href: string }> = {
  "guides/googlemaps": { title: "Google Maps Optimization", href: "/guides" },
  "guides/socialads": { title: "Social Media Advertising", href: "/guides" },
  "guides/businessplanning": {
    title: "Business Planning Framework",
    href: "/guides",
  },
  "deli-guide": { title: "NYC Deli Guide", href: "/deli-guide" },
  "salon-guide": { title: "Salon Guide", href: "/salon-guide" },
  "restaurant-guide": { title: "Restaurant Guide", href: "/restaurant-guide" },
  "retail-guide": { title: "Retail Guide", href: "/retail-guide" },
  "online-services-guide": {
    title: "Online Services Guide",
    href: "/online-services-guide",
  },
  branding: { title: "Appreciated Branding", href: "/branding" },
  "taffer-advice": { title: "Business Rescue", href: "/taffer-advice" },
};

function WelcomeSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-9 w-72" />
      <Skeleton className="h-5 w-48" />
      <div className="flex gap-2 pt-1">
        <Skeleton className="h-7 w-32 rounded-full" />
        <Skeleton className="h-7 w-36 rounded-full" />
      </div>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-xl border border-border/60 bg-card p-5 space-y-3"
        >
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <div className="flex justify-between pt-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  children,
  subtitle,
  action,
}: {
  children: React.ReactNode;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div>
        <span className="inline-block bg-primary/8 rounded-xl px-4 py-2">
          <h2 className="font-display text-2xl font-bold text-foreground">
            {children}
          </h2>
        </span>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0 pt-1">{action}</div>}
    </div>
  );
}

function ChecklistRow({
  item,
  qc,
  ocid,
}: {
  item: ChecklistItem;
  qc: ReturnType<typeof useQueryClient>;
  ocid: string;
}) {
  return (
    <div
      data-ocid={ocid}
      className="flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-card"
    >
      <Checkbox
        checked={item.done}
        aria-label={item.itemText}
        onCheckedChange={(checked) => {
          setChecklistItem(
            {
              guideSlug: item.guideSlug,
              guideTitle: item.guideTitle,
              itemIndex: item.itemIndex,
              itemText: item.itemText,
            },
            !!checked,
          );
          qc.invalidateQueries({ queryKey: ["checklistItems"] });
        }}
      />
      <p
        className={`text-sm flex-1 min-w-0 ${item.done ? "line-through text-muted-foreground" : "text-foreground"}`}
      >
        {item.itemText}
      </p>
      {item.done && (
        <CheckCircle2 size={14} className="text-success ml-auto shrink-0" />
      )}
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { isAuthenticated, loginStatus, login } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: extendedProfile } = useExtendedProfile();
  const { data: recommendations, isLoading: recsLoading } =
    usePersonalizedRecommendations();
  const { data: allGuides } = useGuides();
  const { data: savedGuideSlugs = [] } = useSavedGuides();
  const { data: checklistItems = [] } = useChecklistItems();

  useEffect(() => {
    if (
      !profileLoading &&
      loginStatus === "success" &&
      isAuthenticated &&
      profile === null
    ) {
      navigate({ to: "/onboarding" });
    }
  }, [profile, profileLoading, isAuthenticated, loginStatus, navigate]);

  const isLoading = profileLoading || recsLoading;
  const isStartup = extendedProfile?.businessStage === "startup";
  const userChallenges = extendedProfile?.challenges ?? [];
  const userGoals = profile?.goals ?? [];
  const industryType = profile?.industryType;

  const profileFields = [
    !!profile?.businessName,
    !!profile?.industryType,
    !!profile?.location,
    !!profile?.teamSize,
    (profile?.goals.length ?? 0) > 0,
  ];
  const profileComplete = profileFields.every(Boolean);
  const profileProgress = Math.round(
    (profileFields.filter(Boolean).length / profileFields.length) * 100,
  );

  const latestGuides = allGuides ? [...allGuides].slice(0, 2) : [];

  const savedGuideDetails = savedGuideSlugs
    .map((slug) => SAVED_GUIDE_SLUGS[slug])
    .filter((g): g is { title: string; href: string } => !!g);

  const checklistByGuide = checklistItems.reduce<
    Record<string, { title: string; items: ChecklistItem[] }>
  >((acc, item) => {
    if (!acc[item.guideSlug])
      acc[item.guideSlug] = { title: item.guideTitle, items: [] };
    acc[item.guideSlug].items.push(item);
    return acc;
  }, {});

  const industryAction = industryType
    ? INDUSTRY_QUICK_ACTIONS[industryType]
    : undefined;

  const genericActions = [...GENERIC_QUICK_ACTIONS].sort((a, b) => {
    const aM = userGoals.includes(a.goalKey) ? 0 : 1;
    const bM = userGoals.includes(b.goalKey) ? 0 : 1;
    return aM - bM;
  });

  if (
    loginStatus !== "idle" &&
    loginStatus !== "logging-in" &&
    !isAuthenticated
  ) {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center py-32 px-4 text-center"
          data-ocid="dashboard.unauthenticated_state"
        >
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <BarChart2 size={28} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Get Business &amp; Technology Updates for Your Business
          </h1>
          <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
            Login to get personalized AI recommendations, technology tips, and
            business guides matched to your industry and goals.
          </p>
          <Button
            size="lg"
            onClick={() => login()}
            data-ocid="dashboard.login_button"
          >
            Login for business updates
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Welcome Banner */}
      <section className="bg-card border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {isLoading ? (
            <WelcomeSkeleton />
          ) : profile ? (
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-display text-3xl font-bold text-foreground">
                    Welcome back,{" "}
                    <span className="text-primary">{profile.businessName}</span>
                    !
                  </h1>
                  {isStartup && (
                    <Badge
                      data-ocid="dashboard.startup_badge"
                      className="bg-success/15 text-success border-success/25 font-semibold text-xs px-2.5 py-0.5"
                    >
                      🌱 Startup
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on your{" "}
                  <span className="font-medium text-foreground">
                    {INDUSTRY_LABELS[profile.industryType]}
                  </span>{" "}
                  business, here is where we recommend starting:
                </p>
                {recommendations && recommendations.length > 0 && (
                  <Link
                    to="/guides"
                    search={{
                      topic: recommendations[0].topic as string,
                      businessType: undefined,
                      keyword: undefined,
                    }}
                    data-ocid="dashboard.top_recommendation_card"
                    className="mt-3 flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/25 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-smooth group max-w-lg"
                  >
                    <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                        {recommendations[0].title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {Number(recommendations[0].readTimeMinutes)} min read
                      </p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                    />
                  </Link>
                )}
                {profile.goals.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {profile.goals.map((goal) => (
                      <span
                        key={goal}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${GOAL_COLORS[goal]}`}
                        data-ocid={`dashboard.goal.chip.${goal}`}
                      >
                        {GOAL_LABELS[goal]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/onboarding"
                data-ocid="dashboard.edit_profile_link"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 shrink-0"
              >
                <Edit2 size={13} />
                Update profile
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {/* Profile completion */}
      {profile && !profileComplete && (
        <section className="bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div
              data-ocid="dashboard.profile_completion_banner"
              className="bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <CheckCircle2
                size={22}
                className="text-secondary shrink-0 hidden sm:block"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Complete your profile to unlock fully personalized
                  recommendations
                </p>
                <div className="mt-2 h-2 w-full bg-[#6366F1]/15 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6366F1] rounded-full transition-all duration-500"
                    style={{ width: `${profileProgress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {profileProgress}% complete
                </p>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                data-ocid="dashboard.finish_setup_button"
                className="shrink-0"
              >
                <Link to="/onboarding">Finish Setup</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Startup Launch Roadmap */}
      {isStartup && (
        <section className="bg-[#EEF2FF] border-b border-[#6366F1]/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader subtitle="Follow these 5 steps to launch your business successfully">
              🚀 Your Launch Roadmap
            </SectionHeader>
            <div
              className="grid grid-cols-1 sm:grid-cols-5 gap-3"
              data-ocid="dashboard.startup_roadmap.list"
            >
              {STARTUP_STEPS.map(({ step, label, href, time }, idx) => {
                const isActive = idx === 0;
                return (
                  <Link
                    key={step}
                    to={
                      href as "/guides" | "/online-services-guide" | "/branding"
                    }
                    data-ocid={`dashboard.startup_roadmap.item.${step}`}
                  >
                    <div
                      className={`relative rounded-xl border p-4 flex flex-col gap-2 h-full transition-smooth hover:-translate-y-0.5 ${
                        isActive
                          ? "border-[#6366F1]/50 bg-[#EEF2FF] shadow-elevated"
                          : "border-border/60 bg-card hover:border-[#6366F1]/30 hover:bg-[#EEF2FF]/60"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute -top-2 left-4 text-xs font-bold bg-[#6366F1] text-white px-2 py-0.5 rounded-full">
                          Start Here
                        </span>
                      )}
                      <span
                        className={`text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center ${
                          isActive
                            ? "bg-[#6366F1] text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step}
                      </span>
                      <p
                        className={`font-semibold text-sm leading-tight ${isActive ? "text-foreground" : "text-foreground/80"}`}
                      >
                        {label}
                      </p>
                      <p className="text-xs text-muted-foreground">{time}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Personalized recommendations */}
      {!isStartup && (
        <section className="bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader subtitle="Tailored to your industry and goals">
              Guides Picked For You
            </SectionHeader>
            {isLoading ? (
              <RecommendationsSkeleton />
            ) : recommendations && recommendations.length > 0 ? (
              <div
                data-ocid="dashboard.recommendations.list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {recommendations.slice(0, 5).map((guide, i) => (
                  <GuideCard
                    key={guide.id.toString()}
                    guide={guide}
                    index={i}
                  />
                ))}
              </div>
            ) : (
              <div
                data-ocid="dashboard.recommendations.empty_state"
                className="flex flex-col items-center justify-center py-16 text-center rounded-xl border border-dashed border-border bg-muted/30"
              >
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  No personalized matches yet
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mb-5">
                  We will surface guides as you refine your profile and goals.
                </p>
                <Button asChild data-ocid="dashboard.browse_all_button">
                  <Link
                    to="/guides"
                    search={{
                      topic: undefined,
                      businessType: undefined,
                      keyword: undefined,
                    }}
                  >
                    Browse all our guides
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Challenge Tags */}
      {userChallenges.length > 0 && (
        <section className="bg-muted/20 border-t border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader subtitle="Content suggestions matched to your specific challenges">
              Your Challenge Areas
            </SectionHeader>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-ocid="dashboard.challenges.list"
            >
              {userChallenges.map((challenge, idx) => {
                const links = CHALLENGE_GUIDE_MAP[challenge] ?? [];
                return (
                  <div
                    key={challenge}
                    data-ocid={`dashboard.challenges.item.${idx + 1}`}
                    className="rounded-xl border border-border/60 bg-card p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <p className="font-semibold text-sm text-foreground">
                        {challenge}
                      </p>
                    </div>
                    {links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {links.map((link) => (
                          <Link
                            key={link.href + link.label}
                            to={
                              link.href as
                                | "/guides"
                                | "/branding"
                                | "/deli-guide"
                                | "/salon-guide"
                                | "/restaurant-guide"
                                | "/retail-guide"
                                | "/taffer-advice"
                                | "/online-services-guide"
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 hover:bg-primary/15 transition-colors duration-200"
                          >
                            <BookOpen size={11} />
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Industry-specific Quick Action */}
      {industryAction && (
        <section className="bg-background border-t border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <Link
              to={
                industryAction.href as
                  | "/deli-guide"
                  | "/salon-guide"
                  | "/restaurant-guide"
                  | "/retail-guide"
              }
              data-ocid="dashboard.industry_quickaction_card"
            >
              <div className="flex items-center gap-4 p-5 rounded-xl border border-[#6366F1]/25 bg-[#EEF2FF] hover:bg-[#dde7ff] hover:border-[#6366F1]/45 transition-smooth group">
                <div className="p-3 rounded-lg bg-[#6366F1]/15 text-[#6366F1] shrink-0">
                  <industryAction.icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-base text-foreground group-hover:text-[#6366F1] transition-colors duration-200">
                    {industryAction.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {industryAction.description}
                  </p>
                </div>
                <ChevronRight size={18} className="text-[#6366F1] shrink-0" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Explore by Topic */}
      <section className="bg-muted/30 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <SectionHeader
            subtitle={
              userGoals.length > 0
                ? "Sorted by your selected goals"
                : "Browse all topic areas"
            }
          >
            Explore by Topic
          </SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {genericActions.map(
              ({ topic, goalKey, icon: Icon, title, description, ocid }) => {
                const isPriority = userGoals.includes(goalKey);
                return (
                  <Link
                    key={topic}
                    to="/guides"
                    search={{
                      topic: topic as string,
                      businessType: undefined,
                      keyword: undefined,
                    }}
                    data-ocid={ocid}
                  >
                    <Card
                      className={`group h-full shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-0.5 border cursor-pointer ${
                        isPriority
                          ? "border-primary/40 bg-primary/4 ring-1 ring-primary/15"
                          : "border-border/60 bg-card"
                      }`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div
                            className={`p-2.5 rounded-lg transition-colors duration-200 shrink-0 ${
                              isPriority
                                ? "bg-primary/20 text-primary"
                                : "bg-primary/10 text-primary group-hover:bg-primary/20"
                            }`}
                          >
                            <Icon size={20} />
                          </div>
                          <div className="flex items-center gap-2">
                            {isPriority && (
                              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                                Your Goal
                              </span>
                            )}
                            <TopicBadge topic={topic} size="sm" />
                          </div>
                        </div>
                        <h3 className="font-display font-semibold text-base text-foreground mt-2 group-hover:text-primary transition-colors duration-200">
                          {title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* My Saved Guides */}
      {savedGuideDetails.length > 0 && (
        <section className="bg-background border-t border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader
              subtitle="Guides you have bookmarked for quick access"
              action={
                <Link
                  to="/guides"
                  search={{
                    topic: undefined,
                    businessType: undefined,
                    keyword: undefined,
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Browse more
                </Link>
              }
            >
              My Saved Guides
            </SectionHeader>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              data-ocid="dashboard.saved_guides.list"
            >
              {savedGuideDetails.map((guide, i) => (
                <div
                  key={guide.href + guide.title}
                  data-ocid={`dashboard.saved_guides.item.${i + 1}`}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:bg-primary/3 transition-smooth group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Star size={16} />
                    </div>
                    <p className="font-medium text-sm text-foreground truncate">
                      {guide.title}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="shrink-0"
                    data-ocid={`dashboard.saved_guides.continue.${i + 1}`}
                  >
                    <Link
                      to={
                        guide.href as
                          | "/guides"
                          | "/branding"
                          | "/deli-guide"
                          | "/salon-guide"
                          | "/restaurant-guide"
                          | "/retail-guide"
                          | "/taffer-advice"
                          | "/online-services-guide"
                      }
                    >
                      Continue
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* My Action Items */}
      {Object.keys(checklistByGuide).length > 0 && (
        <section className="bg-muted/20 border-t border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader subtitle="Track your progress across guides">
              My Action Items
            </SectionHeader>
            <div
              className="flex flex-col gap-6"
              data-ocid="dashboard.action_items.list"
            >
              {Object.entries(checklistByGuide).map(([slug, group], gi) => (
                <div
                  key={slug}
                  data-ocid={`dashboard.action_items.group.${gi + 1}`}
                >
                  <p className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item, ii) => (
                      <ChecklistRow
                        key={`${item.guideSlug}-${item.itemIndex}`}
                        item={item}
                        qc={qc}
                        ocid={`dashboard.action_items.item.${gi + 1}.${ii + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What is New */}
      {latestGuides.length > 0 && (
        <section className="bg-background border-t border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <SectionHeader subtitle="Fresh content added to the platform">
              What is New
            </SectionHeader>
            <div
              data-ocid="dashboard.latest_guides.list"
              className="flex flex-col gap-4"
            >
              {latestGuides.map((guide, i) => {
                const TopicIcon = TOPIC_ICONS[guide.topic] ?? BookOpen;
                return (
                  <div
                    key={guide.id.toString()}
                    data-ocid={`dashboard.latest_guides.item.${i + 1}`}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:bg-primary/3 transition-smooth group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-200 shrink-0">
                      <TopicIcon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors duration-200">
                        {guide.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {guide.excerpt}
                      </p>
                    </div>
                    <TopicBadge topic={guide.topic} size="sm" />
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="shrink-0 hidden sm:flex"
                      data-ocid={`dashboard.latest_guides.open.${i + 1}`}
                    >
                      <Link
                        to="/guides"
                        search={{
                          topic: guide.topic as string,
                          businessType: undefined,
                          keyword: undefined,
                        }}
                      >
                        Open Guide
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
