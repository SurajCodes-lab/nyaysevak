# Implementation 12 — Hub-page FAQs (AEO coverage completion)

**Phase:** 4 (AEO) · **Effort:** Small · **Impact:** Medium · **Status:** ✅ Implemented (build passes; awaiting batch deploy)
**Date:** 2026-06-26 · Completes Spec 08 item 8A.

---

## 1. Problem

`FAQPage` schema + visible FAQ existed on most money/content pages, but the **hub pages
with genuine query intent had none**: `/courts`, `/legal-tools`, and
`/legal-industry-statistics-india` (the city hub `/lawyers/[city]` was fixed earlier in
Implementation 08A). Missing FAQ = missing eligibility for FAQ rich results and weaker
AI-Overview / answer-engine extraction on pages that answer real questions
("which courts…", "are these calculators free…", "how current is this data…").

---

## 2. Change

### New reusable component — `src/components/FaqBlock.tsx`
Renders **both** the visible `<details>` accordion **and** the matching `FAQPage`
JSON-LD from one `faqs` array (uses the existing `faqPageJsonLd` helper) — so the visible
text and the schema are always a 1:1 match (a Google requirement for FAQ rich results).
Props: `faqs`, `heading`, `variant: "dark" | "cream"`.

### Wired into 3 hubs (4–question genuine FAQs each)
| Page | FAQ theme |
|------|-----------|
| `/courts` | which courts are covered, finding a lawyer per court, SC/HC matters, cost |
| `/legal-tools` | tools are free, accuracy, no-signup, lawyer help interpreting results |
| `/legal-industry-statistics-india` | what the page is, citation guidance, currency, sources |

All answers are factual and derived from existing page scope — **no fabricated numbers**
(important on the statistics page especially).

> The city hub (`/lawyers/[city]`, 26 pages) already got its FAQ in Implementation 08A
> with an inline block; it can optionally be refactored to use `FaqBlock` later (cosmetic).

Build passes (326 pages).

---

## 3. Why it helps
- **AEO:** these hubs are now eligible for FAQ rich results and give AI Overviews a clean,
  structured Q&A to extract — on pages that target real informational queries.
- **GEO:** the statistics-page FAQ explicitly invites correct citation of NyaySevak +
  the original source, reinforcing the cite-magnet strategy (Spec 07C).
- **Reuse:** `FaqBlock` makes adding compliant FAQs to any future page a one-liner.

---

## 4. Acceptance criteria
- [x] `/courts`, `/legal-tools`, `/legal-industry-statistics-india` each render a visible
      FAQ + valid `FAQPage` JSON-LD.
- [x] Visible text mirrors schema 1:1 (via `FaqBlock`).
- [x] `npm run build` passes.

## 5. Verification
Google Rich Results Test (FAQ) on each of the 3 hub URLs post-deploy.

## 6. Remaining (optional)
- Refactor the city-hub inline FAQ to `FaqBlock` for consistency.
- Consider FAQs on `/services`, `/practice-areas`, `/lawyers` index hubs if they develop
  query intent.
