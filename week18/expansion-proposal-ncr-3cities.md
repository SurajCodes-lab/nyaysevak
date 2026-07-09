# Proposal — Aggressive Local Expansion: New Delhi, Noida, Gurugram

**Goal:** build these 3 highest-value NCR markets to LawRato-style depth — **~130 pages total** (~40–48 per city) across practice verticals, high-value matter pages, localities, and court pages.

**Date:** 2026-07-09 · **Status:** proposal (for approval before build).

---

## 1. Page architecture (per city)

| Dimension | URL pattern | Delhi | Noida | Gurugram | Risk |
|-----------|-------------|-------|-------|----------|------|
| A. City hub | `/lawyers/[city]` | 1 | 1 | 1 | ✅ none (exists) |
| B. Practice verticals | `/lawyers/[city]/[practice]` | 16 | 14 | 14 | 🟢 low |
| C. High-value matter pages | `/lawyers/[city]/[matter]` | 10 | 10 | 10 | 🟡 medium |
| D. Locality pages | `/lawyers/[city]/area/[locality]` | 15 | 14 | 12 | 🔴 **high — quality-gated** |
| E. Court pages | reuse `/courts/*` + `/lawyers/[city]/court/[court]` | 6 | 3 | 3 | 🟡 medium |
| **Per-city total** | | **~48** | **~42** | **~40** | |
| **Grand total** | | | | **~130 pages** | |

Current: 6 pages/city (hub + 5 verticals). This adds **~112 net-new pages**.

---

## 2. The full page list

### 2.1 Practice verticals (B) — expand 5 → ~15
Existing 5: `criminal-law, civil-law, family-matrimonial, property-real-estate, corporate-business`.
**Add (all 3 cities):** `banking-finance` (cheque-bounce), `cyber-law`, `tax-law`, `labour-employment`, `consumer-protection`, `intellectual-property`, `arbitration-adr`, `documentation`, `legal-notices`.
**Delhi only (central-agency courts):** `cbi-cases`, `ed-cases`, `ndps-cases` (+2 vs Noida/Gurgaon).

### 2.2 High-value matter pages (C) — ~10 per city (your focus matters, as city landing pages)
`cheque-bounce-recovery` · `nclt-ibc` · `commercial-recovery` · `rera-complaint` · `property-due-diligence` · `company-registration` · `trademark-registration` · `mutual-consent-divorce` · `anticipatory-bail` · `hnw-alimony-settlement`.
> These target the highest buyer-intent local queries ("cheque bounce lawyer in Noida", "NCLT lawyer Gurgaon", "company registration Delhi").

### 2.3 Locality pages (D) — the LawRato move (quality-gated, see §4)
- **Delhi (15):** Saket, Dwarka, Rohini, Karkardooma, Patiala House / New Delhi, Rouse Avenue, Tis Hazari, Connaught Place, Nehru Place, South Delhi, Janakpuri, Laxmi Nagar, Chandni Chowk, Vasant Kunj, Pitampura.
- **Noida (14):** Sector 18, Sector 62, Sector 137, Sector 15, Sector 50, Greater Noida, Noida Extension, Sector 76, Film City, Sector 27, Sector 104, Sector 168, Pari Chowk, Knowledge Park.
- **Gurugram (12):** Cyber City, DLF Phase 1–3, DLF Phase 4–5, Sohna Road, Golf Course Road, MG Road, Sector 29, Udyog Vihar, Manesar, Sushant Lok, Palam Vihar, New Gurgaon.

### 2.4 Court pages (E)
- **Delhi (6):** Delhi HC, Tis Hazari, Saket, Rohini, Dwarka, Patiala House / Rouse Avenue. *(HC page already exists; add district-complex landing pages.)*
- **Noida (3):** Gautam Buddh Nagar District Court (Surajpur), Allahabad HC (already exists), UP RERA.
- **Gurugram (3):** Gurugram District Court, Punjab & Haryana HC (exists), Haryana RERA.

---

## 3. Technical architecture required

1. **Expand the practice/matter slug list** — `cityPracticeSlugs` grows from 5 → ~25 (verticals + matters). Update the type union, `cityPracticeLabels`, and `practiceAreaToCityPracticeSlug`. Content is **content-gated** (existing filter), so only combos we write appear — other cities are unaffected.
2. **New locality route** — `src/app/lawyers/[city]/area/[locality]/page.tsx` + a `city-localities.ts` data file (each locality: served courts, nearby sectors/landmarks, local context, FAQs). Distinct path avoids collision with practice slugs.
3. **City-court landing pages** — small additions under `/lawyers/[city]/court/[court]` or reuse `/courts/*`.
4. All auto-wire into the sitemap (content-gated), internal-link mesh, and schema.

---

## 4. Content-quality plan — the make-or-break (esp. localities)

**The whole aggressive plan lives or dies on content uniqueness.** Google penalises scaled thin/near-duplicate pages, and locality pages are the classic trap ("lawyer in Sector 62" with only the sector name swapped = doorway spam). To stay safe, every page must be **genuinely differentiated**:

- **Locality pages must carry real local facts:** which district-court complex serves that area, nearby police stations/registrar offices, area-specific matter mix (e.g., Cyber City → corporate/employment; Greater Noida West → builder–buyer/RERA; Saket → South Delhi matters), and local FAQs. If a locality can't be given ~5 genuinely unique facts, **don't build it.**
- **Matter pages:** unique procedure + local court + FAQs (like the Ghaziabad pages).
- **Every page:** ≥800 words real content, one AEO Quick Answer, ≥4 FAQs, internal-link mesh, free-assessment CTA. **BCI-clean (no fees).**
- **Hard rule:** quality gate before publish — a page that reads as "same text, name swapped" is cut, not shipped.

> Honest note: LawRato's locality pages work partly because they show *lawyers + reviews* per area. We can't (BCI). So our locality pages must win on **genuinely useful local legal info**, not a lawyer list — which is harder to differentiate. Recommendation: build localities **only where the local legal context is genuinely distinct** (most Noida sectors and Gurgaon business districts are; generic residential pockets are not).

---

## 5. Phasing (by value — build in this order)

| Phase | What | Pages | Why first |
|-------|------|-------|-----------|
| **1** | Practice verticals (B) for all 3 cities | ~44 | Lowest risk, proven format, real local content |
| **2** | High-value matter pages (C) | ~30 | Highest buyer intent → your focus matters |
| **3** | Court landing pages (E) | ~12 | Medium effort, strong local-intent |
| **4** | Locality pages (D) — quality-gated | ~41 | Highest volume *and* highest risk — do last, only the differentiable ones |

Deliver Phase 1–2 first (~74 pages, the safe high-value core = your original 75), then Phase 3–4 (~53 pages) once the first tranche is indexed and performing.

---

## 6. Effort & honest expectation
- **Effort:** each page = genuine hand-written local content (like the 6 Ghaziabad/Faridabad pages). ~130 pages is a substantial content programme — realistically several build sessions, or a batch with SME review.
- **Ranking:** these are **local-intent** pages — winnable at lower authority than national head terms, but still subject to the site's overall authority (off-page remains the ceiling). Expect Phase 1–2 to start earning local impressions in **4–8 weeks** post-index.
- **Risk:** contained entirely in Phase 4 (localities) — mitigated by the §4 quality gate.

---

## 7. Recommendation
Approve **Phases 1–2 now** (~74 high-value, low-risk pages — verticals + matter pages for all 3 cities). Treat **Phases 3–4** (courts + localities, ~53 pages) as a second wave, building **only the localities with genuinely distinct legal context**. That gets you to ~130 pages the safe way, without betting the domain's quality signal on thin locality pages.

**Next step:** on approval, I start Phase 1 — expanding the practice verticals (5 → ~15) for Delhi, Noida, and Gurugram, each with real local content.
