# Implementation 01 — Domain Canonicalization to a Single Host (`www`)

**Status:** ✅ Shipped (code) · ⚠️ One Vercel dashboard check required (below)
**Date:** 2026-06-26
**Severity addressed:** 🔴 Critical — the single biggest cause of "indexed but ~0 impressions".

---

## 1. Problem

Live inspection of production:

```
$ curl -sI https://nyaysevak.com
HTTP/1.1 307 Temporary Redirect
Location: https://www.nyaysevak.com/

$ curl -sI https://www.nyaysevak.com
HTTP/1.1 200 OK

$ curl -s https://www.nyaysevak.com | grep canonical
rel="canonical" href="https://nyaysevak.com"      ← points at the host that 307s away
```

So the live, indexed, served host is **www**, but **every** on-site signal —
`rel=canonical`, sitemap URLs, robots `host`, all schema `@id`s, OpenGraph/Twitter
URLs, `metadataBase` — pointed at the **non-www** host, which only 307-redirects.

**128 hardcoded `https://nyaysevak.com` strings across 22 files** plus the
`SITE_URL` default and the IndexNow script all emitted the wrong host.

### Why it suppresses impressions
- **Contradictory canonical:** a canonical that resolves to a redirect is an
  invalid self-reference. Google distrusts the canonicalization and may suppress
  both hosts.
- **307 = temporary:** signals "do not consolidate hosts", so link equity never
  merges. Host canonicalization must be **301/308 permanent**.
- **Split authority:** the domain's (already tiny) authority is divided between
  `nyaysevak.com` and `www.nyaysevak.com`.

---

## 2. Change

**Decision:** standardize on **`https://www.nyaysevak.com`** — the host Vercel
already serves and Google already indexed — so the fix is **zero-infrastructure**
and requires no re-indexing of a host swap.

| File(s) | Edit |
|---------|------|
| `src/lib/site.ts` | `SITE_URL` default → `https://www.nyaysevak.com` |
| `src/app/layout.tsx` | `metadataBase`, all schema `@id`s, org/website/professionalService URLs → www |
| 20 other `src/app/**` page files + `src/components/Testimonials.tsx` | every hardcoded `https://nyaysevak.com` self-reference → `https://www.nyaysevak.com` |
| `scripts/indexnow.mjs` | `SITE_URL` default + usage comment → www |

Mechanism: a guarded prefix replace of the exact string `https://nyaysevak.com` →
`https://www.nyaysevak.com` (safe — there were zero pre-existing `www.` strings and
every match was a self-reference). **128 occurrences** updated; **0** non-www
self-references remain.

Files that already derived their URL from `SITE_URL` (sitemap, robots, llms.txt,
llms-full.txt, glossary/insights/courts dynamic routes — 25 files) were corrected
automatically by the single `SITE_URL` change.

### Verification that nothing broke
`npm run build` completes successfully — full route tree prerenders (SSG pages for
practice-areas, services, glossary, insights, city pages), no type errors.

---

## 3. Why it helps (SEO / AEO / GEO)

- **SEO:** every page now self-references the host that actually serves `200 OK`.
  Google can consolidate all signals onto one host and stop suppressing the pair.
  The split authority merges into a single, stronger profile.
- **AEO:** AI Overviews / featured snippets resolve a single canonical entity URL
  instead of a contradictory pair — increases eligibility.
- **GEO:** `llms.txt`, `llms-full.txt`, and every schema `@id` now resolve to one
  stable, non-redirecting entity URL, so AI engines (ChatGPT/Claude/Perplexity/
  Gemini) cite a consistent canonical address.

---

## 4. Required follow-up (owner — Vercel dashboard, 2 minutes)

The code fix aligns all on-site signals to **www**. Two infrastructure checks make
it airtight:

1. **Confirm `www.nyaysevak.com` is the Primary Domain** in
   Vercel → Project → Settings → Domains. (It already serves 200, so this is
   almost certainly set — just confirm.)
2. **Ensure the apex→www redirect is 301/308, not 307.** We observed a **307**.
   Vercel issues 308 for primary-domain redirects by default; a 307 suggests an
   override or stale edge cache. After redeploy, re-check:
   ```
   curl -sI https://nyaysevak.com | grep -i "HTTP\|location"
   # want: HTTP/1.1 308 Permanent Redirect  →  Location: https://www.nyaysevak.com/
   ```
3. **Check no env var overrides the host:** ensure `NEXT_PUBLIC_SITE_URL` is
   **unset** in Vercel (or set to `https://www.nyaysevak.com`). If it is set to the
   non-www value it will override the new default and re-break canonicals.

---

## 5. Post-deploy verification checklist

After deploying:

```bash
# 1. Canonical now matches served host
curl -s https://www.nyaysevak.com | grep -o 'rel="canonical"[^>]*'
# expect: rel="canonical" href="https://www.nyaysevak.com"

# 2. Sitemap emits www URLs
curl -s https://www.nyaysevak.com/sitemap.xml | grep -m1 "<loc>"
# expect: <loc>https://www.nyaysevak.com...</loc>

# 3. robots host is www
curl -s https://www.nyaysevak.com/robots.txt | grep -i host
```

Then in **Google Search Console**:
- Use **URL Inspection** on `https://www.nyaysevak.com/` → "Test live URL" →
  confirm Google-selected canonical = user-declared canonical (both www).
- Submit the sitemap again (it now lists www URLs).
- Request indexing for the homepage + 3–4 top money/informational pages.

---

## 6. Expected impact & timeline

- **Mechanism:** removes a sitewide contradictory signal — this is a *prerequisite*
  for ranking, not a ranking boost by itself.
- **Timeline:** Google must re-crawl and re-evaluate canonicals; expect impression
  recovery to begin **2–6 weeks** after redeploy + sitemap resubmission.
- **Honest caveat:** this unblocks the site, but clicks still require off-page
  authority (Implementation 03). Do not expect traffic to jump from this fix alone
  — expect *impressions* to start appearing where there were ~0.
