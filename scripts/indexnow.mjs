#!/usr/bin/env node
// IndexNow submitter.
//
// What it does: fetches the deployed sitemap.xml, extracts every <loc>, and
// POSTs the full URL list to the IndexNow API. IndexNow is the open protocol
// that lets Bing, Yandex, Naver and Seznam crawl new/changed URLs within
// minutes instead of waiting for an organic crawl.
//
// Why it matters for THIS site: Bing's index powers ChatGPT Search and Copilot,
// so fast Bing indexing is a direct AEO/GEO lever. (Note: Google does NOT
// support IndexNow — Google indexing still relies on the HTML sitemap, the
// internal-link mesh, and manual "Request indexing" in Search Console.)
//
// Usage:
//   node scripts/indexnow.mjs                 # uses SITE_URL default
//   SITE_URL=https://www.nyaysevak.com node scripts/indexnow.mjs
// Runs automatically after a production build via the guarded "postbuild" script.

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.nyaysevak.com").replace(/\/+$/, "");
const KEY = "9f2c7b1e4a6d8c3f5e0b7a9d1c4f6e83";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const HOST = new URL(SITE_URL).host;

async function main() {
  // When invoked as the post-build hook (`--auto`), only run on production
  // deploys — preview/local builds must not spam IndexNow with staging URLs.
  if (process.argv.includes("--auto") && process.env.VERCEL_ENV !== "production") {
    console.log("[indexnow] skipped (not a production build)");
    process.exit(0);
  }

  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  console.log(`[indexnow] fetching ${sitemapUrl}`);

  let xml;
  try {
    const res = await fetch(sitemapUrl, { headers: { "User-Agent": "NyaySevak-IndexNow/1.0" } });
    if (!res.ok) throw new Error(`sitemap responded ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.error(`[indexnow] could not fetch sitemap: ${err.message}`);
    process.exit(0); // non-fatal: never fail a deploy because of IndexNow
  }

  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => u.startsWith(SITE_URL));

  if (urlList.length === 0) {
    console.warn("[indexnow] no <loc> URLs found in sitemap — nothing to submit");
    process.exit(0);
  }

  console.log(`[indexnow] submitting ${urlList.length} URLs to api.indexnow.org`);

  // IndexNow caps a single submission at 10,000 URLs — chunk to be safe.
  const CHUNK = 10000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const chunk = urlList.slice(i, i + CHUNK);
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: chunk }),
      });
      console.log(`[indexnow] chunk ${i / CHUNK + 1}: HTTP ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`[indexnow] submission error: ${err.message}`);
    }
  }

  console.log("[indexnow] done");
}

main();
