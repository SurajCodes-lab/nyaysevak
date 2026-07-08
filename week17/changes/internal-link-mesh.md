# Change: Internal-Link Mesh — Court Pages

**Status:** ✅ Shipped · **Commit:** `aad4d14` · **Type:** on-page (crawl equity)

## What was wrong
The court pages — High Courts, tribunal groups, and district courts (the largest single group of pages) — were link dead-ends, reachable only from the sitemap. On a young domain, leaf pages with no internal links sit in Google's "not indexed" bucket because nothing signals they matter.

## What we changed
Added a builder, `relatedGroupsForCourt(slug)` in `src/data/internal-links.ts`, that is 100% derived from existing data (no hand-maintained lists). It renders a "related pages" block on every court page linking to:
- **High Court:** the cities under that court, the practice pillars, sibling High Courts, and relevant guides.
- **Tribunal / district-court pages:** practice pillars, sibling courts, and guides.

The mesh now covers **all 12 leaf-page templates** — every page on the site is reachable from several related pages.

## Why it helps
- Internal links signal a page's importance and distribute PageRank from strong hubs to deep pages.
- They define topical clusters (court ↔ city ↔ practice ↔ guide) that raise relevance for the whole group.
- AI crawlers follow the links to ingest surrounding context alongside a court page.

## Verification & timeline
`npm run build` ✓. Expect court-page indexation to improve over **2–4 weeks**. (Court pages are informational — they build topical authority more than direct commercial clicks.)
