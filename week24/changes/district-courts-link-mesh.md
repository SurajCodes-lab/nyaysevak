# Change: `districtCourtsSlug` — Dead Data → Live Link Mesh

**Status:** ✅ Shipped · **Commit:** `4838cc8` · **Type:** on-page (crawl equity)

## What was wrong
The `City` type carried a `districtCourtsSlug` field with two independent defects:

1. Its stored values were in the **wrong format** — `gujarat-district-courts`, where `courts.ts` generates slugs as `district-courts-gujarat`. Every value would have produced a 404.
2. It was **never read anywhere in the codebase.** Grep-confirmed: the field was declared, populated on 8 of 13 cities, and consumed by nothing.

The consequence was that district-court pages — the thinnest programmatic pages on the site — had **no internal inlink at all** besides the sitemap. That is precisely the profile that parks pages in Google's *"Discovered — currently not indexed"* bucket, and Week 17's mesh work had not reached them.

## What we changed
- Corrected the format on all existing values.
- Backfilled the 5 cities that had no value at all (Jaipur, Noida, Ghaziabad, Faridabad, Gurgaon) and set it on all 9 new cities.
- Added `districtCourtItem()` to `src/data/internal-links.ts` and wired it into `relatedGroupsForCity`, so every city hub now links to its state's district-courts page under "Local courts".

The link is **gated on the slug resolving to a real district-courts page**, so a bad or missing value renders nothing rather than a 404 — the same 200-only discipline the rest of the mesh uses.

## Why it helps
- District-court pages finally receive a relevant inlink from a stronger page, which is what signals to Google that they matter.
- It strengthens the court ↔ city topical cluster in both directions.
- The fix is derived, not hand-maintained, so it stays correct as cities are added.

## Verification & timeline
`next build` ✓ — verified in the rendered HTML (`/lawyers/jodhpur` links to `/courts/district-courts-rajasthan`). All 22 hubs now carry the link. Expect indexation improvement over **3–6 weeks**.

