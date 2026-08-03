import { createActor } from "@/backend";
import type { BusinessProfile, BusinessStage, ExtendedProfile } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EXTENDED_PROFILE_KEY = "aismallbiz_extended_profile";

function getExtendedProfileLocal(): ExtendedProfile {
  try {
    const raw = localStorage.getItem(EXTENDED_PROFILE_KEY);
    return raw ? (JSON.parse(raw) as ExtendedProfile) : {};
  } catch {
    return {};
  }
}

function saveExtendedProfileLocal(data: ExtendedProfile): void {
  localStorage.setItem(EXTENDED_PROFILE_KEY, JSON.stringify(data));
}

export function useProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBusinessProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useExtendedProfile() {
  return useQuery<ExtendedProfile>({
    queryKey: ["extendedProfile"],
    queryFn: () => getExtendedProfileLocal(),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSaveExtendedProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: ExtendedProfile) => {
      saveExtendedProfileLocal(data);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["extendedProfile"] });
    },
  });
}

export function useSaveProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (profile: BusinessProfile) => {
      if (!actor) throw new Error("Not connected");
      return actor.saveBusinessProfile(profile);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
      qc.invalidateQueries({ queryKey: ["guides", "personalized"] });
    },
  });
}

const SAVED_GUIDES_KEY = "aismallbiz_saved_guides";
const CHECKLIST_KEY = "aismallbiz_checklist";

export function getSavedGuides(): string[] {
  try {
    const raw = localStorage.getItem(SAVED_GUIDES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function toggleSavedGuide(slug: string): string[] {
  const current = getSavedGuides();
  const next = current.includes(slug)
    ? current.filter((s) => s !== slug)
    : [...current, slug];
  localStorage.setItem(SAVED_GUIDES_KEY, JSON.stringify(next));
  return next;
}

export interface ChecklistItem {
  guideSlug: string;
  guideTitle: string;
  itemIndex: number;
  itemText: string;
  done: boolean;
}

export function getChecklistItems(): ChecklistItem[] {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? (JSON.parse(raw) as ChecklistItem[]) : [];
  } catch {
    return [];
  }
}

export function setChecklistItem(
  item: Omit<ChecklistItem, "done">,
  done: boolean,
): void {
  const allItems = getChecklistItems();
  const key = `${item.guideSlug}-${item.itemIndex}`;
  const existing = allItems.findIndex(
    (i) => `${i.guideSlug}-${i.itemIndex}` === key,
  );
  if (existing >= 0) {
    allItems[existing] = { ...allItems[existing], done };
  } else {
    allItems.push({ ...item, done });
  }
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(allItems));
}

export function useSavedGuides() {
  return useQuery<string[]>({
    queryKey: ["savedGuides"],
    queryFn: () => getSavedGuides(),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useChecklistItems() {
  return useQuery<ChecklistItem[]>({
    queryKey: ["checklistItems"],
    queryFn: () => getChecklistItems(),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export type { BusinessStage };
