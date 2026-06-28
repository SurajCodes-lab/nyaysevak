# Corrections Log

Honest record of errors made during the Week-15 SEO work and how they were corrected.
Kept because trustworthy numbers matter more than looking right.

---

## C1 — City count miscount (root of several downstream errors)

**Error:** Used `grep -c "slug:"` on `src/data/cities.ts` and got **26**, concluding there
were 26 cities. The grep also counted each city's nested `highCourt.slug` (and some
`districtCourtsSlug`) fields.

**Truth:** **11 cities** (verified by counting top-level `name:` fields and cross-checking
`cityPracticeContent` keys): Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata,
Ahmedabad, Jaipur, Noida, Gurgaon.

**Downstream impact & fixes:**
- **Implementation 04** claimed it removed "75 soft-404 sitemap URLs." Reality: 11×5 = 55
  combos, **all have content (200)** → it removed **0**. The filter is kept as harmless
  future-proofing. → `docs/04` corrected with a banner.
- **Diagnosis Cause 4** ("75 thin/404 pages") **retracted** — no such problem exists; the
  city×practice section is fully populated and is a strength. → `docs/00` corrected.
- **"Item 2 — write the 75 missing city pages"** in the roadmap: **there are no missing
  pages.** Content expansion now means *net-new* cities or *new guides*, not filling gaps.

**Earlier in the same session** the count had already been wrong once in the *opposite*
direction — an initial estimate of "884 / 1,000+ pages" (a mis-read of the practice-slug
list as 34 instead of 5). The true total is **326 pages**.

---

## C2 — llms-full.txt "dead URLs" overstated

**Error:** Implementation 10 claimed it removed "~150 dead URLs."

**Truth:** The `/{practice}-lawyer-in-{city}` aliases mostly **308-redirect** to the real
`/lawyers/{city}/{practice}` pages (verified live: `/criminal-lawyer-in-delhi` → 308 →
200), via `next.config.ts` redirects. So most were not 404 (some extra verticals/cities
without a redirect would be). The change is still a genuine improvement — it now emits the
**canonical** URL, gated to the **55 live combos**, with corrected counts/schema and an
entity statement. → `docs/10` corrected.

---

## Lesson
Never derive entity counts from `grep -c "slug:"` on a nested data structure. Count
top-level discriminators (here `name:`) or the authoritative map keys, and **verify
against live HTTP** before asserting impact numbers in a doc.
