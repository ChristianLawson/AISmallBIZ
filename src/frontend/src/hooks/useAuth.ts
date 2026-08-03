import { createActor } from "@/backend";
import { useIpSubnet } from "@/hooks/useIpSubnet";
import { UserRole } from "@/types";
import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

// Safe wrapper around useInternetIdentity that returns no-op defaults
// if the provider is unavailable (e.g. env vars are undefined/missing).
function useSafeInternetIdentity() {
  return useInternetIdentity();
}

export function useAuth() {
  const { identity, login, clear, loginStatus, isAuthenticated } =
    useSafeInternetIdentity();
  const { actor, isFetching } = useActor(createActor);
  const { isDifferentSubnet } = useIpSubnet();

  const { data: role } = useQuery({
    queryKey: ["auth", "role", identity?.getPrincipal().toText()],
    queryFn: async () => {
      if (!actor) return UserRole.guest;
      try {
        return await actor.getCallerUserRole();
      } catch {
        return UserRole.guest;
      }
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });

  const isAdmin = role === UserRole.admin;
  const isUser = role === UserRole.user || isAdmin;

  return {
    identity,
    login,
    logout: clear,
    loginStatus,
    isAuthenticated,
    isAdmin,
    isUser,
    role: role ?? UserRole.guest,
    isDifferentSubnet,
  };
}
