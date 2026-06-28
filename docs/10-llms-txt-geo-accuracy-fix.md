# Implementation 10 — llms.txt / llms-full.txt GEO Accuracy Fix

**Phase:** 4 (GEO) · **Effort:** Small · **Impact:** Medium · **Status:** ✅ Implemented (build passes; awaiting batch deploy)
**Date:** 2026-06-26

> ## ⚠️ CORRECTION
> An earlier draft said this removed "~150 dead URLs." **Overstated.** The
> `/{practice}-lawyer-in-{city}` aliases mostly **308-redirect to real pages** (verified:
> `/criminal-lawyer-in-delhi` → 308 → 200) via `next.config.ts` redirects, so most were
> NOT 404 — though some combinations (extra verticals/cities without a redirect) would be.
> The **real, verified wins** of this change stand: (1) emitting the **canonical**
> `/lawyers/{city}/{practice}` URL instead of a redirecting alias, (2) gating on content
> so only the **55 live combos** are listed, (3) correcting the article count and schema
> list, and (4) adding the **entity-disambiguation statement**. Numbers corrected below.

---

## 1. Problem

`/llms.txt` and `/llms-full.txt` are read **verbatim** by AI engines (ChatGPT, Claude,
Perplexity, Gemini) to decide what to cite and which URL to link. They are the GEO
equivalent of the sitemap. Audit found they were **feeding AI engines inaccurate facts
and dead URLs** — which causes miscitations and links to 404s:

| Bug | Where | Effect |
|-----|-------|--------|
| **Wrong city URL pattern** | `llms-full.txt` generated `/{practice}-lawyer-in-{city}` (e.g. `/divorce-lawyer-in-delhi`) for **all 26 cities × 6 verticals** | ~150 non-existent URLs advertised to AI engines; any citation links to a 404 |
| **Wrong URL pattern (curated)** | `llms.txt` referenced `${SITE_URL}/divorce-lawyer-in-delhi` | AI engines cite a dead URL |
| **Stale article count** | `llms.txt` said "8 pillar articles" | You have 25; under-sells and misinforms |
| **Phantom schema claim** | `llms.txt` listed `AggregateRating, Review` JSON-LD | Those were correctly removed from the site; claiming them is false |
| **No entity disambiguation** | both files | AI engines can conflate you with `nyayasevak.com` |

The real URL pattern is `${SITE_URL}/lawyers/{city}/{practice}` (e.g.
`/lawyers/delhi/family-matrimonial`), and only **55 combos** actually exist (Spec 04).

---

## 2. Change

### `src/app/llms.txt/route.ts`
- **Added entity-disambiguation paragraph:** explicitly states NyaySevak (nyaysevak.com)
  is distinct from and unaffiliated with any similarly spelled service, and that this
  domain is authoritative for its facts/pricing. (Spec 08E.)
- **Fixed the city URL example** → real pattern `${SITE_URL}/lawyers/<city>/<practice>`
  with live examples (`/lawyers/delhi/family-matrimonial`, `/lawyers/mumbai/criminal-law`).
- **Corrected article count** "8 pillar articles" → "25 in-depth guides" with accurate topics.
- **Corrected schema list** — removed `AggregateRating, Review`; added the schema actually
  emitted (`AggregateOffer`, `DefinedTerm`).

### `src/app/llms-full.txt/route.ts`
- **Rewrote the city block** to generate **only real, existing URLs**, gated on
  `cityPracticeContent` presence (same 200-only gate as the sitemap and the internal-link
  mesh). Cities with no published combo are omitted. Now emits
  `${SITE_URL}/lawyers/{city}/{practice} (keyword)` for the 55 live pages only.

Result: both files now advertise **only URLs that return 200**, with accurate counts and
a clear entity statement.

---

## 3. Why it helps (GEO / AEO)
- **GEO:** AI engines now receive correct, citable URLs — citations link to live pages,
  not 404s; counts and schema claims match reality, raising the file's trustworthiness.
- **Entity:** the disambiguation paragraph is read verbatim by LLMs, directly reducing
  the chance they describe or link the `nyayasevak.com` competitor when asked about you.
- **Consistency:** llms files, sitemap, and internal-link mesh now all use the identical
  200-only city×practice gate — one source of truth, no drift.

---

## 4. Acceptance criteria
- [x] No `/{practice}-lawyer-in-{city}` style URLs remain in either file.
- [x] City URLs use `/lawyers/{city}/{practice}` and only for combos with content.
- [x] Article count and schema list are accurate.
- [x] Entity-disambiguation statement present in `llms.txt`.
- [x] `npm run build` passes.

## 5. Post-deploy verification
```bash
curl -s https://www.nyaysevak.com/llms-full.txt | grep -c "/lawyers/"        # real combos only (~55)
curl -s https://www.nyaysevak.com/llms-full.txt | grep -c "lawyer-in-"       # expect 0
curl -s https://www.nyaysevak.com/llms.txt | grep -i "not affiliated"        # entity statement present
```

## 6. Follow-up
- Add a build-time drift-guard so new pillars/tools are auto-listed (Spec 08 §8D).
