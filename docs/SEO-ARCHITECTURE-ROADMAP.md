# NyaySevak — SEO / AEO / GEO Architecture Roadmap

**Author role:** SEO Architect
**Date:** 2026-06-26 (Week 15)
**Status:** Plan of record. Specs below are implementation-ready. Owner deploys all at once.

---

## 0. The thesis in one paragraph

The site has **A-grade on-page SEO and F-grade off-page authority**, and was being
**structurally suppressed** by two now-fixed bugs (canonical host conflict + sitemap
404s). The roadmap therefore does three things, in order: **(1) finish removing
suppression signals** (done in code: 01, 04), **(2) build the internal-link mesh and
entity identity that let Google understand and trust the site** (Phase 2), and **(3)
earn the off-page authority that is the real traffic ceiling** (Phase 4, owner-led).
Content expansion (Phase 3) only pays off *after* 1–2 are in place. We do not add more
schema for its own sake — AEO is already mature.

---

## 1. Where we are (baseline, Week 15)

| Dimension | State |
|----------|-------|
| Technical SEO (schema, robots, sitemap, llms.txt, IndexNow) | ✅ Excellent |
| Rendering / indexability | ✅ SSG/SSR, pages indexed |
| **Canonical host consistency** | ✅ **Fixed (01)** — was the #1 suppressant |
| **Sitemap validity (no 404s)** | ✅ **Fixed (04)** |
| **Internal-link mesh** | 🔴 **Weak** — `RelatedLinks` on 2/30 page types; cross-links feed 1 page |
| AEO (FAQ/Article/HowTo/Speakable) | 🟢 Mature on money pages; minor hub gaps |
| GEO (llms.txt, AI-crawler allowlist, citable answers) | 🟢 Strong |
| Brand entity vs `nyayasevak.com` twin | 🔴 Conflated; needs on-site + off-site work |
| **Off-page authority (backlinks/GBP/citations)** | 🔴 **~Zero — the real ceiling** |
| Content coverage | 🟡 55/130 city×practice; good informational core |
| Core Web Vitals | ❓ Unaudited |

---

## 2. Guiding principles (how decisions get made)

1. **Remove suppression before adding signal.** A site Google distrusts can't be
   helped by more content. (Why 01/04 came first.)
2. **Mesh > star.** Every leaf page must be reachable from several relevant pages, not
   just the sitemap. Internal links are the cheapest ranking lever we fully control.
3. **Earn pages, don't template them.** Never auto-generate near-duplicate pages to
   inflate count — it recreates the doorway risk Google suppresses. Expand only with
   genuinely differentiated content.
4. **Win where we can win.** With zero authority, target informational long-tail and
   local intent SERPs that new domains can rank, not head commercial terms we can't.
5. **Entity consistency everywhere.** One brand spelling, one host (`www`), one NAP —
   on-site and off-site — to separate us from the name-twin competitor.
6. **AEO/GEO is a byproduct of good answers, not more `<script>` tags.** We have enough
   schema; we deepen extractable *answers*, not markup volume.

---

## 3. The phased plan

### ✅ Phase 1 — Stop the bleeding *(shipped in code, pending your deploy)*
| ID | Item | Doc |
|----|------|-----|
| 01 | Canonicalize all signals on `www` host | [01](./01-domain-canonicalization.md) |
| 04 | Remove 75 soft-404 URLs from sitemap | [04](./04-sitemap-soft-404-fix.md) |
| — | **Vercel checks** (unset `NEXT_PUBLIC_SITE_URL`, confirm 301/308 apex redirect) | [01 §4](./01-domain-canonicalization.md) |

### 🔨 Phase 2 — Architecture: mesh + identity *(in-code, highest leverage remaining)*
| ID | Item | Effort | Impact | Doc |
|----|------|--------|--------|-----|
| 05 | **Internal-linking architecture** (deploy `RelatedLinks` site-wide + cross-link data layer) | M | 🔥 High | [05](./05-internal-linking-architecture.md) |
| 06 | **Brand entity on-site hardening** (`sameAs` audit, `legalName`, AboutPage, disambiguation) | S | Med | [06](./06-brand-entity-onsite-hardening.md) |

### 📝 Phase 3 — Win impressions with content *(content work, after Phase 2)*
| ID | Item | Effort | Impact | Doc |
|----|------|--------|--------|-----|
| 07 | **Winnable content expansion** (75 missing city combos done right + long-tail guides + cite-magnet) | L | 🔥 High | [07](./07-winnable-content-expansion.md) |

### 🧠 Phase 4 — Deepen AEO/GEO + earn authority
| ID | Item | Effort | Impact | Doc |
|----|------|--------|--------|-----|
| 08 | **AEO/GEO deepening** (hub FAQs, speakable, llms.txt sync, answer blocks) | S | Med | [08](./08-aeo-geo-deepening.md) |
| 03 | **Off-page authority & brand playbook** (GBP, citations, links — owner-led) | L (ongoing) | 🔥🔥 Highest ceiling | [03](./03-offpage-authority-and-brand-playbook.md) |

### 🩺 Phase 5 — Technical hygiene
| ID | Item | Effort | Impact | Doc |
|----|------|--------|--------|-----|
| 09 | **Core Web Vitals & technical audit** | M | Med | [09](./09-core-web-vitals-technical.md) |

---

## 4. Sequencing & dependencies

```
Phase 1 (done) ──► DEPLOY ──► resubmit sitemap in GSC
                                  │
        ┌─────────────────────────┼───────────────────────────┐
        ▼                         ▼                            ▼
   Phase 2 (05,06)          Phase 4-03 (off-page)        Phase 5 (09)
   in-code, deploy w/ 1     starts immediately,          audit, then fix
   next batch              runs continuously
        │
        ▼
   Phase 3 (07) content ──► Phase 4-08 (AEO on new content)
```

- **05 and 06 ship together** in the next deploy batch (you asked to deploy all at once).
- **03 (off-page) starts now** in parallel — it's the long pole and owner-led.
- **07 (content) depends on 05** (new pages must plug into the mesh as they're created).

---

## 5. KPIs & review cadence (the "reanalyse" loop)

Re-pull these from GSC every **2 weeks**; record in `docs/PROGRESS-LOG.md` (create on
first review):

| KPI | Wk15 baseline | 6-wk target | Source |
|-----|---------------|-------------|--------|
| Total impressions / week | ~0 | rising into hundreds | GSC Performance |
| Indexed pages (valid) | ? | ≥ 95% of sitemap | GSC Pages |
| Sitemap "404 / not found" | 75 | 0 | GSC Pages |
| Avg. position (informational queries) | — | < 30 | GSC Performance |
| "Discovered – not indexed" count | ? | falling | GSC Pages |
| Referring domains | ~0 | 15–25 | Ahrefs/GSC Links |
| Branded SERP "nyaysevak" = us #1 | no | yes | manual |

**Reanalyse → reimplement rule:** at each 2-week review, the page type with the most
"Discovered/Crawled – not indexed" gets the next internal-link + content pass. Let the
data choose the next sprint, not guesswork.

---

## 6. Out of scope / explicitly rejected

- ❌ More schema types for their own sake (diminishing returns; AEO already mature).
- ❌ Auto-templating the 75 missing city pages (doorway risk).
- ❌ Paid links / directories blasts / fake reviews (YMYL-toxic).
- ❌ Chasing head commercial terms ("divorce lawyer") before authority exists.

---

## 7. Implementation specs index

| Spec | File |
|------|------|
| 05 Internal-linking architecture | [05-internal-linking-architecture.md](./05-internal-linking-architecture.md) |
| 06 Brand entity on-site hardening | [06-brand-entity-onsite-hardening.md](./06-brand-entity-onsite-hardening.md) |
| 07 Winnable content expansion | [07-winnable-content-expansion.md](./07-winnable-content-expansion.md) |
| 08 AEO/GEO deepening | [08-aeo-geo-deepening.md](./08-aeo-geo-deepening.md) |
| 09 Core Web Vitals & technical | [09-core-web-vitals-technical.md](./09-core-web-vitals-technical.md) |
| 03 Off-page & brand playbook (owner-led) | [03-offpage-authority-and-brand-playbook.md](./03-offpage-authority-and-brand-playbook.md) |
| 00 Diagnosis | [00-diagnosis.md](./00-diagnosis.md) |
