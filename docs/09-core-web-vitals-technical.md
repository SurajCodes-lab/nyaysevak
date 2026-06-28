# Spec 09 — Core Web Vitals & Technical Hygiene

**Phase:** 5 · **Effort:** Medium · **Impact:** Medium · **Status:** 🔎 Audit-gated — common fixes already in place

---

## ✅ Findings (2026-06-26) — several assumed fixes are already done
- **GA is already optimal:** `GoogleAnalytics.tsx` uses `next/script` with
  `strategy="afterInteractive"` (9D ✅ — no change needed).
- **Logo is fine:** `public/logo.png` exists (330 KB) and schema references resolve
  (9A logo mismatch was a false alarm — corrected).
- **OG image route exists:** `src/app/opengraph-image.tsx` already generates an OG image
  (9A OG ✅). Optionally verify it renders 1200×630.

So the remaining Phase-5 work is **genuinely measurement-gated** (LCP/CLS/INP), not
guessable. Run the audit (§2) before changing anything else. The `chrome-devtools` MCP
(`lighthouse_audit`, `performance_start_trace`) can do this against a local
`next start`. Likely-still-useful: compressing `hero-bg.jpg` (1.3 MB) and
`courts-image.jpg` (1.7 MB), and auditing unused font weights.

---

---

## 1. Context

Page experience is a real (if secondary) ranking factor and a hard UX/conversion factor.
This stack (Next.js 16, App Router, SSG, Tailwind v4, `next/font`) starts from a good
baseline, but it has **not been measured**. This spec is **audit-then-fix** — do not
optimise blind.

---

## 2. Audit (do this first)

Run on the production/preview deploy, mobile profile:
1. **Lighthouse** (Chrome DevTools) on: `/`, a practice-area pillar, a city×practice
   page, an insight article. Record LCP, CLS, INP, TBT, performance score.
2. **PageSpeed Insights** (field + lab data) on the same URLs.
3. **GSC → Core Web Vitals** report once enough field data exists.

> The `chrome-devtools` MCP (`performance_start_trace`, `lighthouse_audit`) can automate
> this against a local `next start` build when you're ready to measure.

Record results in `docs/PROGRESS-LOG.md`. Only implement §3 items that the audit flags.

---

## 3. Likely fixes (confirm via audit before doing)

### 9A — Images
- `logo.jpeg` is ~57 KB and referenced as `/logo.png` in schema — **reconcile the
  filename mismatch** (schema points to `logo.png`; verify it exists in `public/`).
- Serve a proper-sized, compressed logo; use `next/image` for any content images with
  explicit width/height to prevent CLS.
- Provide a real 1200×630 OG image (currently the 800×800 logo is used for OG/Twitter —
  a true landscape OG image improves social/AI-preview CTR).

### 9B — Fonts
- Two Google fonts (Playfair + Inter) with many weights via `next/font` (good — self-
  hosted, `display: swap`). Audit whether all weights are used; drop unused weights to
  cut payload.

### 9C — Client JS / hydration
- Several always-on client components (`ExitIntentModal`, `EngagementTracker`,
  `FloatingContactBar`, `NavigationProgress`, `ScrollToTop`). Verify they're lazy/non-
  blocking and don't hurt INP. Defer non-critical ones.

### 9D — Third-party scripts
- Google Analytics: ensure it loads via `next/script` with `strategy="afterInteractive"`
  (or `lazyOnload`) so it doesn't block LCP.

### 9E — Metadata/render hygiene
- Confirm no layout shift from late-loading nav/hero; reserve space for above-the-fold.

---

## 4. Why it helps
- **SEO:** passing CWV removes a (minor) ranking handicap and is part of Google's page-
  experience signals; faster pages are crawled more efficiently.
- **Conversion:** for a lead-gen site, LCP/INP directly affect the consult-form
  completion rate — every abandoned slow page is a lost lead.
- **AEO/GEO:** faster, stable pages are crawled and rendered more reliably by all bots.

---

## 5. Acceptance criteria
- [ ] Lighthouse mobile Performance ≥ 90 on the 4 sampled templates.
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms (field data, GSC "Good").
- [ ] Logo filename/schema mismatch resolved; real 1200×630 OG image shipped.
- [ ] No render-blocking third-party JS.

## 6. Expected impact
- **Timeline:** technical fixes land immediately; CWV field data (GSC) updates over
  **28 days**. Secondary to Phases 1–3 for traffic, but compounding and conversion-positive.
