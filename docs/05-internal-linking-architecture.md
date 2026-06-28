# Spec 05 — Internal-Linking Architecture (the crawl-equity mesh)

**Phase:** 2 · **Effort:** Medium · **Impact:** 🔥 High · **Status:** ✅ Implemented (build passes; awaiting batch deploy)

---

## ✅ As-built (2026-06-26)

- New data layer **`src/data/internal-links.ts`** — 100% derived from existing data
  (`articles.relatedPracticeAreaSlugs/relatedServiceSlugs/relatedCitySlugs`,
  `glossary.relatedPracticeAreaSlugs`, `practiceAreaToServices`,
  `practiceAreaToCityPracticeSlug`, `cityPracticeContent`). Six builders:
  `relatedGroupsForPractice / Service / Insight / Glossary / City / CityPractice`.
  All city×practice links gated on `cityPracticeContent` presence → **only 200 pages
  linked** (no links to the 75 notFound combos).
- `<RelatedLinks>` now renders on **11 templates** (~280+ pages):
  `practice-areas/[slug]`, `services/[slug]`, `insights/[slug]`,
  `legal-glossary/[slug]` (replaced the old hand-built block), `lawyers/[city]`,
  `lawyers/[city]/[slug]`, and the 5 `best-*-lawyers-in-india` landing pages.
- `npm run build` passes.

### Not yet done (follow-ups, tracked)
- `courts/[slug]` mesh (needs a courts builder) — deferred.
- In-body contextual `linkifyTerms()` (Spec 05 §3.3) — deferred to a content pass.
- Orphan-crawl audit (Screaming Frog) — do after deploy.

---

---

## 1. Problem

Internal linking is the cheapest ranking lever we fully control, and it is the most
under-used asset on the site:

- `RelatedLinks` (a purpose-built mesh component — its own header comment says it
  "turns the site's star topology into a mesh so PageRank flows to leaves") is rendered
  on **only 2 of 30+ page types**: `authors/[slug]` and `legal-glossary/[slug]`.
- `practice-area-cross-links.ts` (rich contextual link data) feeds **only 1 page**:
  `practice-areas/[slug]`.
- Result: insights, services, city hubs, city×practice pages, courts, the 5 "best …
  lawyers in India" landing pages, and all hubs are **link dead-ends**. On a young
  domain these land in GSC's **"Discovered – currently not indexed"** bucket because
  no internal signal says "this page matters."

**Goal:** every page is reachable from ≥3 relevant pages, organised into **topical
clusters** (practice ↔ city ↔ glossary ↔ insight ↔ service) so Google understands the
site's structure and flows authority to leaves.

---

## 2. Architecture: the topical cluster model

Four entity types, fully cross-linked both directions:

```
            ┌──────────────┐
            │ PRACTICE AREA │  (pillar: /practice-areas/criminal-law)
            └──────┬───────┘
        ┌──────────┼───────────┬──────────────┐
        ▼          ▼           ▼              ▼
  ┌──────────┐ ┌────────┐ ┌──────────┐  ┌──────────────┐
  │  CITY ×  │ │SERVICE │ │ GLOSSARY │  │   INSIGHT    │
  │ PRACTICE │ │        │ │  TERMS   │  │  (guides)    │
  └──────────┘ └────────┘ └──────────┘  └──────────────┘
   /lawyers/    /services/  /legal-      /insights/
   delhi/       lawyer-     glossary/    anticipatory-
   criminal-law consultation anticipatory- bail-...
                              bail
```

Every node links **up** (to its pillar), **across** (to siblings), and **down/related**
(to supporting nodes). Reciprocity is the key: if A links to B, B links back to A where
relevant.

---

## 3. Implementation

### 3.1 New data layer — `src/data/internal-links.ts`
A single typed map describing each entity's related links. Centralising avoids drift and
makes the mesh auditable.

```ts
// Maps a practice-area slug to its full cluster.
export const practiceCluster: Record<string, {
  services: string[];          // service slugs (extend existing practiceAreaToServices)
  glossary: string[];          // glossary term slugs that define this area's concepts
  insights: string[];          // insight article slugs covering this area
  cities: string[];            // city slugs that have a hand-written page for this practice
}> = {
  "criminal-law": {
    services: ["lawyer-consultation", "find-hire-lawyers", "e-filing-assistance"],
    glossary: ["anticipatory-bail", "fir", "bail", "quashing"],
    insights: ["anticipatory-bail-india-section-482-bnss-guide-2026",
               "filing-fir-india-procedure-rights-2026"],
    cities: ["delhi", "mumbai", "bangalore", /* …the 11 covered cities */],
  },
  // …one entry per practice area
};
```

Helper to build `RelatedLinksGroup[]` from the cluster (reuses existing data files for
labels/urls so there is one source of truth):

```ts
import { glossaryTerms } from "./legal-glossary";
import { articlesBySlug } from "./insights";
import { allServices } from "./services";

export function relatedGroupsForPractice(slug: string): RelatedLinksGroup[] { /* … */ }
export function relatedGroupsForCity(citySlug: string): RelatedLinksGroup[] { /* … */ }
export function relatedGroupsForInsight(slug: string): RelatedLinksGroup[] { /* … */ }
export function relatedGroupsForService(slug: string): RelatedLinksGroup[] { /* … */ }
export function relatedGroupsForGlossary(slug: string): RelatedLinksGroup[] { /* … */ }
```

### 3.2 Render `RelatedLinks` on every leaf template
Add `<RelatedLinks groups={…} />` near the bottom (above `<LeadCTA/>`) of:

| Template | Groups to render |
|----------|------------------|
| `practice-areas/[slug]` | Related services · Key terms · Guides · Lawyers by city |
| `services/[slug]` | Related practice areas · Related services · Relevant guides |
| `lawyers/[city]/[slug]` | Other practices in this city · Same practice other cities · Relevant guides · Glossary |
| `lawyers/[city]` (hub) | All practices in this city · Nearby cities · Local courts · Top guides |
| `insights/[slug]` | Related guides · Related practice area · Glossary terms used · Relevant service |
| `legal-glossary/[slug]` | *(already has it — extend groups: related terms + practice + guide)* |
| `courts/[slug]` | Practices heard here · Cities under this court · Related courts |
| `best-*-lawyers-in-india` (×5) | Matching practice area · Cities for this practice · Relevant guides |

### 3.3 In-body contextual links (highest-value link type)
Editorial links inside prose carry more weight than footer link lists. In
`insights` article bodies and `city-practice-content` `landscape`/`faqs`, link the
first mention of a defined term to its glossary page and the first mention of a
practice to its pillar. Implement as a lightweight `linkifyTerms(text)` helper applied
at render, keyed off `glossaryTerms` slugs (cap at ~3 links/section to stay natural).

### 3.4 Breadcrumbs — confirm completeness
Breadcrumb schema is on 31 files; verify every leaf has both the **visual** breadcrumb
and `breadcrumbJsonLd`. Visual breadcrumbs are also internal links Google follows.

---

## 4. Why it helps (SEO / AEO / GEO)

- **SEO:** moves leaf pages out of "Discovered – not indexed" by giving them internal
  links; distributes PageRank from strong hubs to deep pages; defines topical clusters
  that boost relevance for the whole group (topical authority).
- **AEO:** clustered, cross-linked content helps Google assemble entity relationships
  for AI Overviews ("lawyers for X" → related procedures, costs, courts).
- **GEO:** AI crawlers follow internal links to discover and contextualise pages; a mesh
  means they ingest the supporting guides/glossary alongside the money page.

---

## 5. Acceptance criteria
- [ ] `RelatedLinks` renders on all 8 template types above with ≥2 groups, ≥3 links each.
- [ ] Every link target returns 200 (no links to the 75 notFound combos — reuse the
      `cityPracticeContent` presence check from Spec 04).
- [ ] No orphan pages: every URL in the sitemap is linked from ≥1 non-sitemap page
      (audit with a crawl, e.g. Screaming Frog free tier ≤500 URLs).
- [ ] `npm run build` passes; no broken `Link` hrefs.

## 6. Verification
- Build, then crawl the local/preview build with Screaming Frog → "Inlinks" column ≥3
  for every indexable URL; "Crawl Depth" ≤4 for all leaves.
- Post-deploy: in GSC, watch "Discovered – currently not indexed" fall over 2–4 weeks.

## 7. Expected impact
- **Timeline:** indexation improvements in **2–4 weeks**; ranking lift for clustered
  terms in **4–8 weeks** as topical authority registers.
- This is the highest-leverage *in-code* work remaining after Phase 1.
