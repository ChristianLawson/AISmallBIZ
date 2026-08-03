import { createActor } from "@/backend";
import type { ContributionInput } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useMyContributions() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["contributions", "mine"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyContributions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePendingContributions() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["contributions", "pending"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listPendingContributions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContribution() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ContributionInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContribution(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contributions"] }),
  });
}

export function useApproveContribution() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.approveContribution(id);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contributions"] });
      qc.invalidateQueries({ queryKey: ["guides"] });
    },
  });
}

export function useRejectContribution() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      reason,
    }: { id: bigint; reason: string | null }) => {
      if (!actor) throw new Error("Not connected");
      return actor.rejectContribution(id, reason);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contributions"] }),
  });
}
