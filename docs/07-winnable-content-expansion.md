# Spec 07 — Winnable Content Expansion (target impressions a new domain can get)

**Phase:** 3 · **Effort:** Large (content) · **Impact:** 🔥 High · **Status:** ⚙️ Infra-ready — content production pending (see note)

---

## ⚠️ Honest scope note (2026-06-26)

Phase 3 is **content production**, and this is YMYL (legal) content where accuracy is a
ranking *and* liability factor. The existing 55 city×practice pages are clearly
hand-researched (real local courts, BNSS sections, fee bands). **Auto-generating
plausible-but-unverified legal specifics for 15 more cities would be exactly the
low-quality scaled content Google suppresses** — and could be wrong. So it was **not**
machine-written in this session.

**What IS ready (the system absorbs new content with zero extra wiring):**
- `sitemap.ts` auto-includes a city×practice combo the moment its `cityPracticeContent`
  entry exists (Spec 04 filter).
- `internal-links.ts` auto-meshes any new combo/guide into related pages (Spec 05).
- New insight guides inherit FAQ/Article/HowTo schema + Quick Answer patterns already.

**So the remaining work is writing, by a human/SME (or a focused, reviewed content
session):** the 75 combos + new guides per the authoring kit below. Produce, review for
legal accuracy, commit — they go live correctly on the next deploy.

### Authoring kit (per new city×practice combo)
Fill every field in `CityPracticeContent` with genuinely city-specific facts:
`lead` (80w), `landscape` (2–3 paras naming real local court complexes), `courtsForThisMatter`,
`caseTypes` (5–6), `feeRange` (local bands), 6 unique `faqs`, `localNotes`. Cite current
statutes (BNSS/BNS/BSA 2023). No copy-paste with name swaps.

---

---

## 1. Principle

A zero-authority YMYL domain **cannot** rank for head commercial terms ("divorce lawyer
Delhi") yet. It **can** rank for:
- **Informational long-tail** ("how to file anticipatory bail in BNSS 2026", "cheque
  bounce notice format", "RERA complaint process") — low competition, winnable, and
  doubles as AEO/GEO cite-bait.
- **Specific local intent** where a genuinely differentiated page exists.

So expansion = more *winnable, differentiated* pages, never more *templated* pages.

---

## 2. Workstreams

### 7A — Complete the 75 missing city×practice combos *(do RIGHT, not fast)*
15 cities currently lack content (the route 404s them; Spec 04 removed them from the
sitemap). Add them **at the quality bar of the existing 55** — each needs distinct
`lead`, `landscape`, `courtsForThisMatter`, `caseTypes`, `feeRange`, 6 unique `faqs`,
`localNotes` in `src/data/city-practice-content.ts`.

- **Prioritise by demand:** do the highest-population / highest-search cities first
  (e.g. lucknow, chandigarh, indore, nagpur, bhopal, patna, chandigarh, surat…).
- **Acceptance:** a combo may be added to the sitemap (auto, via Spec 04 filter) **only**
  when its content entry exists and is genuinely city-specific (mentions real local
  courts, bar, neighbourhoods, fee bands). No copy-paste with name swaps.
- **Cadence:** 5 combos/week is sustainable and keeps quality high.

### 7B — New informational guides (the impression engine)
Extend `src/data/insights.ts` with guides targeting winnable, high-intent long-tail.
Each guide = hand-authored "Quick Answer" (for AEO) + H2 sections + FAQ + `HowTo` where
procedural. Candidate topics (validate volume in GSC/Keyword Planner first):

| Cluster | Example guides |
|---------|----------------|
| Procedure | "How to file a consumer complaint online (2026)", "Mutual divorce documents checklist", "How to check FIR status online" |
| Format/template | "Legal notice format for cheque bounce", "Rent agreement clauses that matter", "Power of Attorney format India" |
| Cost/decision | "Court fees by state (2026)", "Lawyer fees in India explained", "Stamp duty calculator by state" |
| Rights | "Tenant rights in India", "Rights during arrest (BNSS)", "Consumer rights & timelines" |

Target **2 new guides/week**; interlink each into its practice cluster (Spec 05).

### 7C — Turn `/legal-industry-statistics-india` into a true cite-magnet
This page is designed to earn links. Make it the best free, **sourced**, current dataset
on Indian legal stats (case pendency from NJDG, court counts, fee benchmarks, disposal
rates). Add: data tables, last-updated date, a "cite this page" block, and source links.
Stat pages earn editorial backlinks — feed Playbook 03 outreach with it.

### 7D — Expand calculators (`/legal-tools`)
Free tools earn links and rank for "[x] calculator" intent. Candidates: stamp-duty-by-
state, alimony/maintenance estimator, cheque-bounce-timeline, EMI-vs-legal-cost. Each is
a `WebApplication`-schema page (helper already exists: `webApplicationJsonLd`).

---

## 3. Content quality bar (every new page)
- Hand-written, India-specific, current statute names (BNSS/BNS/BSA where relevant).
- One extractable **direct answer** in the first 320 chars (AEO).
- ≥1 FAQ block with `faqPageJsonLd`; `HowTo` if procedural.
- Plugged into the internal-link mesh (Spec 05) on publish.
- Author attributed (E-E-A-T) via existing `authors` data.

---

## 4. Why it helps
- **SEO:** informational long-tail is the only organic traffic a no-authority YMYL site
  can capture in months; builds topical authority that later lifts commercial pages.
- **AEO/GEO:** procedural + definitional + statistical content is exactly what AI engines
  extract and cite; cite-magnet + tools earn the backlinks that raise the whole domain.

---

## 5. Acceptance criteria
- [ ] No new page ships without distinct, India-specific content + a Quick Answer + FAQ.
- [ ] New city combos appear in sitemap only after content exists (Spec 04 filter).
- [ ] Every new page linked into ≥3 cluster pages (Spec 05).

## 6. Expected impact
- **Timeline:** first impressions on new guides in **2–6 weeks**; compounding as the
  library and internal links grow. This is the primary lever for *growing* impressions
  once Phase 1–2 remove suppression.
