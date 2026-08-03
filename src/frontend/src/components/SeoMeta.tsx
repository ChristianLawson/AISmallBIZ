/**
 * Runtime SEO meta tag injection for AISmallBiz (TM).
 *
 * Mounted once inside the root route so it stays alive across every client side
 * navigation. On each route change it resolves the current path (substituting
 * dynamic params like /guides/$id and /workflows/$slug), looks up the matching
 * ROUTE_META entry, and updates document.title plus the description, canonical,
 * Open Graph, Twitter, and JSON-LD tags via DOM APIs.
 *
 * Titles and descriptions come from seo.ts and already avoid em dashes, en
 * dashes, and contractions. This file never rewrites that copy.
 */

import {
  getCanonicalUrl,
  getPageJsonLd,
  getRouteMeta,
  getSocialCardUrl,
} from "@/lib/seo";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Selector helpers grouped by tag shape for find-or-create logic. */
type MetaKind = "name" | "property";

function upsertMeta(kind: MetaKind, key: string, content: string): void {
  const selector =
    kind === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (kind === "name") el.setAttribute("name", key);
    else el.setAttribute("property", key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(jsonLd: string): void {
  const existing = document.head.querySelectorAll(
    'script[type="application/ld+json"][data-aisb-route]',
  );
  for (const node of existing) node.remove();

  if (!jsonLd) return;

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonLd);
  } catch {
    return;
  }

  const schemas: unknown[] = Array.isArray(parsed) ? parsed : [parsed];
  for (const schema of schemas) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-aisb-route", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

/**
 * Resolves the current router location to a path that matches a ROUTE_META key.
 * Static routes pass through unchanged. Dynamic routes substitute the actual
 * param value into the pattern so /guides/$id and /workflows/$slug resolve to
 * their template entries. getRouteMeta also handles these prefixes as a
 * fallback, but resolving here keeps the canonical URL and JSON-LD keyed to the
 * template path so they stay stable across dynamic param values.
 */
function resolveMetaPath(pathname: string): string {
  if (pathname.startsWith("/guides/")) return "/guides/$id";
  if (pathname.startsWith("/workflows/")) return "/workflows/$slug";
  return pathname;
}

export default function SeoMeta() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    const metaPath = resolveMetaPath(pathname);
    const meta = getRouteMeta(metaPath);

    document.title = meta.title;

    upsertMeta("name", "description", meta.description);
    upsertCanonical(getCanonicalUrl(metaPath));

    upsertMeta("property", "og:title", meta.ogTitle);
    upsertMeta("property", "og:description", meta.ogDescription);
    upsertMeta("property", "og:type", meta.ogType);
    upsertMeta("property", "og:url", getCanonicalUrl(metaPath));
    upsertMeta("property", "og:image", getSocialCardUrl());
    upsertMeta("property", "og:image:alt", meta.ogTitle);

    upsertMeta("name", "twitter:title", meta.ogTitle);
    upsertMeta("name", "twitter:description", meta.ogDescription);
    upsertMeta("name", "twitter:image", getSocialCardUrl());
    upsertMeta("name", "twitter:image:alt", meta.ogTitle);

    upsertJsonLd(getPageJsonLd(metaPath));
  }, [pathname]);

  return null;
}
