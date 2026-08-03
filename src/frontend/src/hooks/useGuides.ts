import { createActor } from "@/backend";
import type { Guide, GuideInput } from "@/backend";
import { AuthorType, Topic } from "@/backend";
import type { GuideFilter } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Static seed guides: mirrors backend seedSampleGuides so the UI renders
// immediately on first load before the actor round-trip completes.
const SEED_GUIDES: Guide[] = [
  {
    id: BigInt(0),
    title: "Google Maps Optimization: The #1 Secret Most SMBs Miss",
    topic: Topic.googleMaps,
    content: "",
    isPublished: true,
    businessTypeTags: [
      "all",
      "deli",
      "salon",
      "retail",
      "restaurant",
      "consulting",
    ],
    authorName: "AISmallBiz Editorial Team",
    authorType: AuthorType.admin,
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    excerpt:
      "Most SMBs do not know their Google Maps listing is indexed daily: and penalised for inactivity. Here is how to stay at the top.",
    readTimeMinutes: BigInt(7),
    recommendedNext: [BigInt(1), BigInt(3), BigInt(4)],
  },
  {
    id: BigInt(1),
    title:
      "Social Media Advertising: A Practical Playbook for Small Businesses",
    topic: Topic.socialAds,
    content: "",
    isPublished: true,
    businessTypeTags: ["all", "retail", "restaurant", "salon"],
    authorName: "AISmallBiz Editorial Team",
    authorType: AuthorType.admin,
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    excerpt:
      "A step-by-step social ads playbook for SMBs: from pixel setup to scaling winning campaigns.",
    readTimeMinutes: BigInt(8),
    recommendedNext: [BigInt(3), BigInt(0), BigInt(4)],
  },
  {
    id: BigInt(2),
    title: "Writing a Business Plan: The Big Four Framework Approach",
    topic: Topic.businessPlanning,
    content: "",
    isPublished: true,
    businessTypeTags: ["all", "deli", "restaurant", "retail", "consulting"],
    authorName: "AISmallBiz Editorial Team",
    authorType: AuthorType.admin,
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    excerpt:
      "Apply Deloitte, PwC, EY, and KPMG frameworks to write a business plan that stands up to professional scrutiny.",
    readTimeMinutes: BigInt(10),
    recommendedNext: [BigInt(3), BigInt(4), BigInt(0)],
  },
  {
    id: BigInt(3),
    title:
      "Branding Fundamentals: How to Make Your Business Instantly Recognisable",
    topic: Topic.branding,
    content: "",
    isPublished: true,
    businessTypeTags: ["all", "salon", "retail", "restaurant", "deli"],
    authorName: "AISmallBiz Editorial Team",
    authorType: AuthorType.admin,
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    excerpt:
      "Branding is consistency and emotional connection. Here are the techniques that build lasting recognition for SMBs.",
    readTimeMinutes: BigInt(6),
    recommendedNext: [BigInt(0), BigInt(1), BigInt(2)],
  },
  {
    id: BigInt(4),
    title: "Technology Upgrades Every SMB Should Consider in 2025",
    topic: Topic.techUpgrades,
    content: "",
    isPublished: true,
    businessTypeTags: ["all", "retail", "restaurant", "salon", "consulting"],
    authorName: "AISmallBiz Editorial Team",
    authorType: AuthorType.admin,
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    excerpt:
      "The technology upgrades with the highest ROI for SMBs in 2025: from POS systems to AI customer service.",
    readTimeMinutes: BigInt(8),
    recommendedNext: [BigInt(0), BigInt(2), BigInt(1)],
  },
];

export function useGuides(filter: GuideFilter = {}) {
  const { actor, isFetching } = useActor(createActor);

  const seedFiltered = SEED_GUIDES.filter((g) => {
    if (filter.topic && g.topic !== filter.topic) return false;
    if (
      filter.businessTypeTag &&
      !g.businessTypeTags.includes(filter.businessTypeTag)
    )
      return false;
    if (filter.keyword) {
      const kw = filter.keyword.toLowerCase();
      if (
        !g.title.toLowerCase().includes(kw) &&
        !g.excerpt.toLowerCase().includes(kw)
      )
        return false;
    }
    return true;
  });

  return useQuery<Guide[]>({
    queryKey: ["guides", filter],
    queryFn: async () => {
      if (!actor) return seedFiltered;
      try {
        const result = await actor.listGuides(filter);
        return result.length > 0 ? result : seedFiltered;
      } catch {
        return seedFiltered;
      }
    },
    enabled: !isFetching,
    initialData: seedFiltered,
    staleTime: 30_000,
  });
}

export function useFeaturedGuides() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Guide[]>({
    queryKey: ["guides", "featured"],
    queryFn: async () => {
      if (!actor) return SEED_GUIDES.slice(0, 5);
      try {
        const result = await actor.getFeaturedGuides();
        return result.length > 0 ? result : SEED_GUIDES.slice(0, 5);
      } catch {
        return SEED_GUIDES.slice(0, 5);
      }
    },
    enabled: !isFetching,
    initialData: SEED_GUIDES.slice(0, 5),
    staleTime: 30_000,
  });
}

export function useGuide(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  const seedGuide =
    id !== undefined ? (SEED_GUIDES.find((g) => g.id === id) ?? null) : null;
  return useQuery<Guide | null>({
    queryKey: ["guide", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return seedGuide;
      const result = await actor.getGuide(id);
      return result ?? seedGuide;
    },
    enabled: !isFetching && id !== undefined,
    initialData: seedGuide,
    staleTime: 30_000,
  });
}

export function usePersonalizedRecommendations() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Guide[]>({
    queryKey: ["guides", "personalized"],
    queryFn: async () => {
      if (!actor) return SEED_GUIDES.slice(0, 3);
      try {
        const result = await actor.getPersonalizedRecommendations();
        return result.length > 0 ? result : SEED_GUIDES.slice(0, 3);
      } catch {
        return SEED_GUIDES.slice(0, 3);
      }
    },
    enabled: !isFetching,
    initialData: SEED_GUIDES.slice(0, 3),
    staleTime: 30_000,
  });
}

export function useCreateGuide() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: GuideInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.createGuide(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["guides"] }),
  });
}

export function useUpdateGuide() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: bigint; input: GuideInput }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateGuide(id, input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["guides"] }),
  });
}

export function useDeleteGuide() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteGuide(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["guides"] }),
  });
}

export function useSetGuidePublished() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      published,
    }: { id: bigint; published: boolean }) => {
      if (!actor) throw new Error("Not connected");
      return actor.setGuidePublished(id, published);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["guides"] }),
  });
}

export function useAdminStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["admin", "stats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getAdminStats();
    },
    enabled: !!actor && !isFetching,
  });
}
