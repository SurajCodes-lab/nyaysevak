// Single source of truth for the canonical site URL.
// Override per-environment with NEXT_PUBLIC_SITE_URL (e.g. on staging or preview deploys)
// to avoid emitting bad canonical/sitemap/robots URLs.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyaysevak.com"
).replace(/\/+$/, "");
