import { useEffect, useState } from "react";

/**
 * Detects whether the user's IP address is on a "different subnet" from the
 * app's server.  This is used to decide whether to show a login prompt on the
 * Cloud Outage Tracker page.
 *
 * Approach:
 * 1. Fetch the user's public IP from a free API (ipify).
 * 2. Derive the "server subnet" from `window.location.hostname`.
 *    - If the hostname is a bare IPv4 address (e.g. 192.168.1.10), use its
 *      first two octets as the server subnet.
 *    - If the hostname is a domain (e.g. aismallbiz.org), we cannot know the
 *      real server subnet, so we fall back to a configurable default.
 * 3. Compare the first two octets of the user's IP with the server subnet.
 * 4. If the fetch fails or is blocked, default to `true` (different subnet)
 *    so the login prompt is shown as a fail-safe.
 */

const IPIFY_URL = "https://api.ipify.org?format=json";
const FALLBACK_SERVER_SUBNET = "192.168"; // configurable default

function getServerSubnet(): string {
  const hostname = window.location.hostname;

  // If the hostname looks like an IPv4 address, extract the first two octets.
  const ipv4Match = hostname.match(/^(\d{1,3})\.(\d{1,3})\.\d{1,3}\.\d{1,3}$/);
  if (ipv4Match) {
    return `${ipv4Match[1]}.${ipv4Match[2]}`;
  }

  // For domain names we cannot derive the subnet, so return the fallback.
  return FALLBACK_SERVER_SUBNET;
}

function getFirstTwoOctets(ip: string): string | null {
  const match = ip.match(/^(\d{1,3})\.(\d{1,3})\.\d{1,3}\.\d{1,3}$/);
  if (!match) return null;
  return `${match[1]}.${match[2]}`;
}

export function useIpSubnet() {
  const [isDifferentSubnet, setIsDifferentSubnet] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      try {
        const response = await fetch(IPIFY_URL, {
          method: "GET",
          // No credentials needed; ipify is a simple public endpoint.
        });

        if (!response.ok) {
          throw new Error(`ipify returned ${response.status}`);
        }

        const data = (await response.json()) as { ip?: string };
        const userIp = data.ip;

        if (!userIp) {
          throw new Error("ipify response missing ip field");
        }

        const userSubnet = getFirstTwoOctets(userIp);
        const serverSubnet = getServerSubnet();

        if (userSubnet === null) {
          // Could not parse the IP; fail-safe → show login prompt.
          if (!cancelled) setIsDifferentSubnet(true);
          return;
        }

        const different = userSubnet !== serverSubnet;
        if (!cancelled) setIsDifferentSubnet(different);
      } catch {
        // Fetch failed (network error, CORS, blocked by extension, etc.)
        // Fail-safe: assume different subnet so login prompt is shown.
        if (!cancelled) setIsDifferentSubnet(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    detect();

    return () => {
      cancelled = true;
    };
  }, []);

  return { isDifferentSubnet, isLoading };
}
