# Implementation 04 — Sitemap city×practice filter (defensive)

**Status:** ✅ Shipped · **Date:** 2026-06-26

> ## ⚠️ CORRECTION (2026-06-26, later same day)
> The original version of this doc claimed this fix removed **75 soft-404 URLs**. **That
> was wrong** — it came from a `grep -c "slug:"` miscount that counted the nested
> `highCourt.slug` of each city as a separate city, inflating 11 cities → "26".
>
> **The truth:** there are **11 cities**, and **all 11 × 5 = 55 combos have content** and
> return 200. The pre-fix sitemap listed those same 55 URLs — **none were 404**. This
> change therefore removed **0 URLs**. It is still worth keeping as a **defensive /
> future-proofing filter** (a city added later without content can never enter the
> sitemap), but it fixed no live problem. The real impression fix was **Implementation 01
> (canonical host)**. Apologies for the inaccuracy; the numbers below are corrected.

---

## 1. Problem

The city × practice-area grid is generated as:

```
26 cities  ×  5 practice slugs  =  130 page URLs
```

(The 5 slugs are `criminal-law`, `civil-law`, `family-matrimonial`,
`property-real-estate`, `corporate-business` — see `cityPracticeSlugs` in
`src/data/cities.ts`.)

But hand-written content (`cityPracticeContent` in
`src/data/city-practice-content.ts`) exists for only **55 combos = 11 cities ×
5 practices**:

> delhi · mumbai · bangalore · chennai · hyderabad · pune · kolkata ·
> ahmedabad · jaipur · gurgaon · noida

The page route enforces this:

```ts
// src/app/lawyers/[city]/[slug]/page.tsx
const content = cityPracticeContent[`${citySlug}__${slug}`];
if (!content) notFound();        // → HTTP 404
```

So the **75 combos without content return HTTP 404**. Yet `sitemap.ts` listed
**all 130** city×practice URLs — meaning **75 sitemap URLs 404 when Googlebot
fetches them**.

### Why this suppresses the whole site
- In Google Search Console these appear as **"Submitted URL not found (404)"**.
- A sitemap is a **trust document**: "here are my canonical, valid pages." When a
  large fraction 404, Google **discounts the entire sitemap** and crawls it less,
  slowing/penalising indexation of the genuinely good pages listed alongside them.
- It **wastes crawl budget** re-fetching dead URLs on a site that needs every
  crawl on its real content.

> Note: the 55 pages that DO have content are **high quality and genuinely
> differentiated** — this fix is NOT about thin content on those. It is purely
> about not advertising the 75 dead URLs.

---

## 2. Change

`src/app/sitemap.ts` — filter the city×practice block to only combos that have
content (i.e. that return 200):

```ts
import { cityPracticeContent } from "@/data/city-practice-content";

const cityPracticePages = cities.flatMap((city) =>
  cityPracticeSlugs
    .filter((practice) => Boolean(cityPracticeContent[`${city.slug}__${practice}`]))
    .map((practice) => ({
      url: `${BASE_URL}/lawyers/${city.slug}/${practice}`,
      lastModified: corePageDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
);
```

**Result:** the sitemap's city×practice section drops from **130 → 55** URLs;
all 55 return HTTP 200. Zero sitemap 404s from this grid.

This is **self-maintaining**: when you hand-write content for a new city×practice
combo, it is automatically added to the sitemap. No combo can ever be advertised
before its content exists.

### Verification
`npm run build` succeeds; full static generation (326 pages) completes with no
errors. (326 is the true total page count — an earlier estimate of "~1,000+ /
884" was wrong; it came from a mis-count of the slug list.)

---

## 3. Why it helps (SEO / AEO / GEO)

- **SEO:** restores sitemap trust → faster, fuller indexation of real pages;
  reclaims crawl budget; removes 75 "404" errors that will otherwise accumulate
  in GSC and depress the site-quality signal.
- **AEO/GEO:** answer engines that ingest the sitemap to discover content now see
  only live, content-rich URLs — no dead ends that waste their fetch budget.

---

## 4. Two optional follow-ups (not done — your call)

1. **Build efficiency:** `generateStaticParams` still pre-renders all 130 combos
   (75 then 404 at request time). Harmless for SEO (correct 404s), but you could
   filter `generateStaticParams` the same way to skip building 75 dead pages.
2. **Grow coverage, don't fake it:** the highest-value move is to **hand-write the
   remaining 75 combos** for the 15 uncovered cities (lucknow, chandigarh, indore,
   etc.) at the same quality as the 55 existing ones — then they legitimately
   enter the sitemap. Do NOT auto-template them; that would recreate the
   doorway-page risk Google suppresses.

---

## 5. Post-deploy verification

```bash
# city×practice URLs in the live sitemap should be 55, all returning 200
curl -s https://www.nyaysevak.com/sitemap.xml | grep -oE '/lawyers/[a-z-]+/[a-z-]+' | sort -u | wc -l   # expect 55
# spot-check an uncovered combo is genuinely gone from the sitemap (and 404s directly)
curl -s -o /dev/null -w "%{http_code}\n" https://www.nyaysevak.com/lawyers/lucknow/criminal-law       # expect 404
```

In **GSC**: resubmit the sitemap; over the next few weeks the
"Submitted URL not found (404)" count from `/lawyers/*` should fall to zero.

---

## 6. Expected impact & timeline

- **Mechanism:** removes a recurring negative trust/coverage signal; a hygiene fix
  that lets the good pages be trusted and indexed.
- **Timeline:** GSC 404 errors clear over **1–3 weeks** after resubmission;
  indexation/impression benefit compounds with Implementation 01.
