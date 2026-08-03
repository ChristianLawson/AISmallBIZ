import {
  AuthorType,
  ContributionStatus,
  Goal,
  IndustryType,
  type OutageFilter,
  type OutageRecord,
  type ProviderHealthStatus,
  type ProviderStats,
  TeamSize,
  Topic,
  UserRole,
} from "@/backend";
import type {
  AdminStats,
  BusinessProfile,
  Contribution,
  ContributionInput,
  Guide,
  GuideFilter,
  GuideInput,
  UserApprovalInfo,
} from "@/backend";

export type {
  Guide,
  BusinessProfile,
  Contribution,
  GuideFilter,
  GuideInput,
  ContributionInput,
  AdminStats,
  UserApprovalInfo,
};

export {
  AuthorType,
  ContributionStatus,
  Goal,
  IndustryType,
  TeamSize,
  Topic,
  UserRole,
};

/** Frontend-only profile extensions (stored in localStorage) */
export type BusinessStage = "startup" | "growing" | "scaling" | "established";

export interface ExtendedProfile {
  businessStage?: BusinessStage;
  challenges?: string[];
}

/** A real business owner scenario used on the UX Scenarios page */
export interface UserScenario {
  initial: string;
  name: string;
  businessType: string;
  age: number;
  location: string;
  goal: string;
  challenge: string;
  action: string;
  result: string;
  resultHighlight: string;
  guides: Array<{ label: string; href: string }>;
  keyFeature: string;
  color: string;
}

export const TOPIC_LABELS: Record<Topic, string> = {
  [Topic.googleMaps]: "Google Maps",
  [Topic.socialAds]: "Social Ads",
  [Topic.businessPlanning]: "Business Planning",
  [Topic.branding]: "Branding",
  [Topic.techUpgrades]: "Tech Upgrades",
};

export const TOPIC_COLORS: Record<
  Topic,
  { bg: string; text: string; dot: string }
> = {
  [Topic.googleMaps]: {
    bg: "bg-primary/15",
    text: "text-primary",
    dot: "bg-primary",
  },
  [Topic.socialAds]: {
    bg: "bg-secondary/20",
    text: "text-secondary",
    dot: "bg-secondary",
  },
  [Topic.businessPlanning]: {
    bg: "bg-accent/25",
    text: "text-accent-foreground",
    dot: "bg-accent",
  },
  [Topic.branding]: {
    bg: "bg-primary/15",
    text: "text-primary",
    dot: "bg-primary/80",
  },
  [Topic.techUpgrades]: {
    bg: "bg-foreground/10",
    text: "text-foreground",
    dot: "bg-foreground/60",
  },
};

export const INDUSTRY_LABELS: Record<IndustryType, string> = {
  [IndustryType.deli]: "Deli",
  [IndustryType.salon]: "Salon",
  [IndustryType.retail]: "Retail",
  [IndustryType.restaurant]: "Restaurant",
  [IndustryType.consulting]: "Consulting",
  [IndustryType.other]: "Other",
  [IndustryType.onlineServices]: "Online Services",
  [IndustryType.newBusiness]: "Start New Business",
  [IndustryType.poolHall]: "Pool Hall",
};

/** All 9 business types used across the frontend (guides, QA, search, etc.) */
export const ALL_BUSINESS_TYPES = [
  { key: "deli", label: "Deli" },
  { key: "salon", label: "Salon" },
  { key: "restaurant", label: "Restaurant" },
  { key: "pool-hall", label: "Pool Hall" },
  { key: "retail", label: "Retail" },
  { key: "fitness-studio", label: "Fitness Studio" },
  { key: "bakery", label: "Bakery & Café" },
  { key: "cleaning-service", label: "Cleaning Service" },
  { key: "online-schooling", label: "Online Schooling" },
  { key: "boutique", label: "Boutique Clothing Store" },
  { key: "pizza-shop", label: "Pizza Shop" },
] as const;

/** Map frontend business type keys to backend IndustryType for profile storage */
export function businessKeyToIndustryType(key: string): IndustryType {
  switch (key) {
    case "deli":
      return IndustryType.deli;
    case "salon":
      return IndustryType.salon;
    case "restaurant":
      return IndustryType.restaurant;
    case "pool-hall":
      return IndustryType.poolHall;
    case "retail":
    case "boutique":
      return IndustryType.retail;
    case "fitness-studio":
    case "bakery":
    case "cleaning-service":
    case "pizza-shop":
      return IndustryType.other;
    case "online-schooling":
      return IndustryType.onlineServices;
    default:
      return IndustryType.other;
  }
}

/** Map backend IndustryType to frontend business key for display */
export function industryTypeToBusinessKey(type: IndustryType): string {
  switch (type) {
    case IndustryType.deli:
      return "deli";
    case IndustryType.salon:
      return "salon";
    case IndustryType.restaurant:
      return "restaurant";
    case IndustryType.poolHall:
      return "pool-hall";
    case IndustryType.retail:
      return "retail";
    case IndustryType.onlineServices:
      return "online-services";
    case IndustryType.newBusiness:
      return "new-business";
    case IndustryType.consulting:
      return "consulting";
    default:
      return "other";
  }
}

export const TEAM_SIZE_LABELS: Record<TeamSize, string> = {
  [TeamSize.solo]: "Just me",
  [TeamSize.small]: "2-10 people",
  [TeamSize.medium]: "11-50 people",
};

export const GOAL_LABELS: Record<Goal, string> = {
  [Goal.googleMaps]: "Google Maps Visibility",
  [Goal.socialAds]: "Social Media Advertising",
  [Goal.businessPlanning]: "Business Planning",
};

export const BUSINESS_STAGE_LABELS: Record<BusinessStage, string> = {
  startup: "Startup",
  growing: "Growing",
  scaling: "Scaling",
  established: "Established",
};

export const CHALLENGE_OPTIONS = [
  "Getting found online",
  "Building a customer base",
  "Managing social media",
  "Writing a business plan",
  "Branding & design",
  "Hiring and team building",
  "Cash flow & profitability",
  "Standing out from competitors",
  "Tech & tools setup",
  "Marketing on a budget",
];

// ─── Outage Tracker Types ────────────────────────────────────────────────────

export type { OutageRecord, ProviderStats, ProviderHealthStatus, OutageFilter };
