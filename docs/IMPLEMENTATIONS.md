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

> Implementation **02** (brand disambiguation) was merged into **03** — disambiguation
> is won off-site (GBP, Wikidata, real social profiles, consistent NAP), not by adding
> more on-page schema. One open code follow-up: confirm the 4 `sameAs` social profiles
> in `src/app/layout.tsx` are real & owned; if not, drop/replace them.

---

## How to read each doc
Every implementation doc follows this structure:
1. **Problem** — what was wrong and how it was detected.
2. **Change** — exact files and edits.
3. **Why it helps** — SEO / AEO / GEO mechanism.
4. **Verification** — how to confirm it works in production.
5. **Expected impact & timeline** — honest expectation, not hype.
