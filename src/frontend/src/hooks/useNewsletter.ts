import { createActor } from "@/backend";
import type { Frequency, NewsletterContent } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface NewsletterTopic {
  id: bigint;
  name: string;
}

export interface NewsletterSubscriber {
  email: string;
  verified: boolean;
}

export function useSubscribeToNewsletter() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      firstName,
      email,
      frequency,
    }: {
      firstName: string;
      email: string;
      frequency: Frequency;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.subscribeToNewsletter(firstName, email, frequency);
    },
  });
}

export function useNewsletterTopics() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<NewsletterTopic[]>({
    queryKey: ["newsletter", "topics"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listNewsletterTopics();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsletterContent(topicId: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<NewsletterContent | null>({
    queryKey: ["newsletter", "content", topicId?.toString()],
    queryFn: async () => {
      if (!actor || topicId === undefined) return null;
      return actor.getNewsletterContent(topicId);
    },
    enabled: !!actor && !isFetching && topicId !== undefined,
  });
}

export function useNewsletterSubscribers(topicId: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<NewsletterSubscriber[]>({
    queryKey: ["newsletter", "subscribers", topicId?.toString()],
    queryFn: async () => {
      if (!actor || topicId === undefined) return [];
      const rows = await actor.listNewsletterSubscribers(topicId);
      return rows.map(([email, verified]) => ({ email, verified }));
    },
    enabled: !!actor && !isFetching && topicId !== undefined,
  });
}

export function useSetNewsletterContent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      topicId,
      subject,
      htmlBody,
    }: {
      topicId: bigint;
      subject: string;
      htmlBody: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.setNewsletterContent(topicId, subject, htmlBody);
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({
        queryKey: ["newsletter", "content", vars.topicId.toString()],
      });
    },
  });
}

export function useAddNewsletterTopic() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.addNewsletterTopic(name);
    },
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["newsletter", "topics"] }),
  });
}

export function useRenameNewsletterTopic() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      topicId,
      newName,
    }: {
      topicId: bigint;
      newName: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.renameNewsletterTopic(topicId, newName);
    },
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["newsletter", "topics"] }),
  });
}

export function useRemoveNewsletterTopic() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (topicId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.removeNewsletterTopic(topicId);
    },
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["newsletter", "topics"] }),
  });
}
