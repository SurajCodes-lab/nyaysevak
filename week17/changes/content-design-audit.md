# Analysis: Full-Site Content & Design Audit

**Type:** audit · **Full report:** [`week18/content-design-audit.md`](../../week18/content-design-audit.md)

## Method
Word count of the rendered HTML for every prerendered page in the production build (313 pages), tags/scripts stripped, grouped by page type. (Each page includes ~300 words of shared nav/footer, so real content ≈ raw − 300.)

## Verdict
**Not a thin-content site.** 296 of 313 pages are 750+ words; money pages run 2,000–2,800 (comparable to competitors' 3,000). Design is one consistent template per page type — **no thin-design or duplicate-template penalty risk** (Google penalises duplicate *content*, not shared layout; our per-page content is genuinely distinct).

## By-type snapshot (raw median words)
- insights/[slug] **2,199** · practice-areas/[slug] **2,235** · city×practice **~1,588** · best-* **1,880** — 🟢 strong
- courts/[slug] **1,165** · city hubs **1,115** — 🟡 ok
- services/[slug] **956** · glossary/[slug] **776** · features **863** — 🟠 lightest real content

## Action items (from the audit)
1. ✅ **Fixed:** the 4 orphan 404s (Ghaziabad/Faridabad civil + corporate) now have full content — all 65 city×practice pages are real.
2. 🟠 Deepen the **glossary** (57 pages, thinnest real content) — add a "how it applies" + example block; highest-impression terms first.
3. 🟠 Deepen the **12 service pages** (money pages ~956 words) — add "what's included / process / who it's for" + FAQs.
4. 🟡 Minor: FAQ on `/contact` and `/features`.

## Bottom line
Content and design are competitive; the site's ceiling is authority/reviews, not content quality. "Expansion" here means completing gaps and lifting the two lightest page-types — not fixing a thin site.
