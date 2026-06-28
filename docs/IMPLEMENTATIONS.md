# NyaySevak — SEO / AEO / GEO Implementation Log

This is the master index of every implementation. Each entry links to a detailed
MD file documenting **what changed, why, the exact files touched, and the
SEO/AEO/GEO benefit**, per the project rule that every implementation is logged.

> AEO = Answer Engine Optimization (Google AI Overviews, featured snippets).
> GEO = Generative Engine Optimization (ChatGPT, Claude, Perplexity, Gemini citing you).

---

## Session: Week 15 — Diagnostic-driven overhaul (2026-06-26)

**Trigger:** Site at week 15 receiving only 4–5 organic users/day despite ~1,000
pages and advanced on-page SEO. Google Search Console state confirmed by owner:
**pages indexed but ~0 impressions**, and **zero off-page authority** built so far.

**Root-cause diagnosis (see [00-diagnosis.md](./00-diagnosis.md)):**

| # | Finding | Severity | In-code fixable |
|---|---------|----------|-----------------|
| 1 | Self-contradicting www/non-www canonical (impression-killer) | 🔴 Critical | ✅ |
| 2 | Brand entity collision with competitor `nyayasevak.com` | 🔴 High | ⚠️ Partial |
| 3 | Zero off-page authority (no backlinks/GBP/citations) | 🔴 High | 📄 Playbook |
| 4 | Sitemap advertises 75 URLs that 404 (trust drag) | ⚠️ Medium | ✅ |

### Implementations

| ID | Title | Status | Doc |
|----|-------|--------|-----|
| 01 | Domain canonicalization → single host (`www`) | ✅ Shipped (code) | [01-domain-canonicalization.md](./01-domain-canonicalization.md) |
| 04 | Sitemap: drop 75 soft-404 city×practice URLs | ✅ Shipped (code) | [04-sitemap-soft-404-fix.md](./04-sitemap-soft-404-fix.md) |
| 03 | Off-page authority + brand-disambiguation playbook (incl. old #02) | ✅ Delivered (owner executes off-site) | [03-offpage-authority-and-brand-playbook.md](./03-offpage-authority-and-brand-playbook.md) |

> Implementation **02** (brand disambiguation) was merged into **06** (on-site) + **03**
> (off-site). One open code follow-up blocking a clean batch deploy: confirm the 4
> `sameAs` social profiles in `src/app/layout.tsx` are real & owned; if not, drop/replace.

---

## Next-phase plan (SEO Architect) — specs ready, awaiting batch implementation + deploy

See **[SEO-ARCHITECTURE-ROADMAP.md](./SEO-ARCHITECTURE-ROADMAP.md)** for the full phased
plan, sequencing, KPIs, and the bi-weekly reanalyse→reimplement loop.

| Spec | Title | Phase | Effort | Impact | Status |
|------|-------|-------|--------|--------|--------|
| [05](./05-internal-linking-architecture.md) | Internal-linking architecture (crawl-equity mesh) | 2 | M | 🔥 High | ✅ Implemented (11 templates) |
| [06](./06-brand-entity-onsite-hardening.md) | Brand entity on-site hardening | 2 | S | Med | ✅ Implemented (1 open: `sameAs`) |
| [07](./07-winnable-content-expansion.md) | Winnable content expansion | 3 | L | 🔥 High | ⚙️ Infra-ready, content pending |
| [08](./08-aeo-geo-deepening.md) | AEO/GEO deepening | 4 | S | Med | 🟡 City-hub FAQ done; hubs pending |
| [09](./09-core-web-vitals-technical.md) | Core Web Vitals & technical hygiene | 5 | M | Med | 🔎 Audit-gated (common fixes already in place) |

### Batch deploy contents (this session, in-code, build-verified)
- **Spec 05** — `src/data/internal-links.ts` (new) + `<RelatedLinks>` on 11 templates.
- **Spec 06** — `layout.tsx` org entity hardening (`legalName`, `disambiguatingDescription`, `brand`, `knowsLanguage`).
- **Spec 08 (8A)** — `FAQPage` + visible FAQ on the city hub (26 pages).
- **[Impl 10](./10-llms-txt-geo-accuracy-fix.md)** — `llms.txt`/`llms-full.txt` GEO accuracy fix: canonical city URLs, correct counts/schema, entity statement.
- **[Impl 11](./11-sameas-dead-link-fix.md)** — `sameAs` dead-link cleanup (removed 404 Twitter/X + LinkedIn; kept live FB + IG).
- **[Impl 12](./12-hub-faqs.md)** — reusable `FaqBlock` + `FAQPage` on `/courts`, `/legal-tools`, statistics hub.
- **[Impl 13](./13-image-optimization.md)** — re-encoded heavy PNG-as-jpg assets → real JPEG; **~2.9 MB saved** (hero −94%, courts −90%, contact −78%).

### ⚠️ Corrections this session (see [CORRECTIONS.md](./CORRECTIONS.md))
- City count was miscounted (26 → **actually 11**). Consequences: **Impl 04 removed 0 URLs, not 75** (kept as defensive filter); **Diagnosis Cause 4 retracted** (no thin/404 city pages exist — all 55 combos have content); **"75 missing city pages" do not exist** — content expansion = net-new cities/guides, not gap-filling. Total site = **326 pages**.

**Open decision before deploy:** confirm the 4 `sameAs` social handles are real & owned (Spec 06).
**Not code (run after):** 07 content production, 09 Lighthouse audit, 03 off-page (owner-led).

---

## How to read each doc
Every implementation doc follows this structure:
1. **Problem** — what was wrong and how it was detected.
2. **Change** — exact files and edits.
3. **Why it helps** — SEO / AEO / GEO mechanism.
4. **Verification** — how to confirm it works in production.
5. **Expected impact & timeline** — honest expectation, not hype.
