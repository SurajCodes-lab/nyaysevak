# Implementation 13 — Image optimization (Core Web Vitals)

**Phase:** 5 (CWV) · **Effort:** Small · **Impact:** Medium–High (LCP) · **Status:** ✅ Implemented (assets re-encoded; awaiting batch deploy)
**Date:** 2026-06-26

---

## 1. Problem

Audit of `public/` found the two largest assets were **PNG data wearing a `.jpg`
extension** — i.e. lossless PNG encoding of photographic images, which is the worst
case for file size:

| File | Before | Actual format | Used by |
|------|--------|---------------|---------|
| `hero-bg.jpg` | **1,263 KB** | PNG, 1376×768 | `Hero.tsx` (likely the homepage **LCP** element) |
| `courts-image.jpg` | **1,728 KB** | PNG, 1024×1024 | `Courts.tsx` |
| `contact-image.png` | **427 KB** | PNG, 400×600 (alpha) | contact section |

A ~1.3 MB hero image directly inflates **Largest Contentful Paint** on mobile — the most
visible Core Web Vital — and wastes bandwidth on every visit.

---

## 2. Change

Re-encoded in place with `sharp` (already a dependency via Next.js), keeping filenames so
no references change:

| File | After | Reduction | Method |
|------|-------|-----------|--------|
| `hero-bg.jpg` | **74 KB** | **−94%** | → real JPEG, mozjpeg q80, width≤1376 |
| `courts-image.jpg` | **166 KB** | **−90%** | → real JPEG, mozjpeg q80 |
| `contact-image.png` | **94 KB** | **−78%** | PNG re-compress (palette, effort 10, alpha kept) |

**Total saved: ~2.9 MB.** `hero-bg.jpg` and `courts-image.jpg` are now genuine JPEG (the
extension finally matches the content). Quality 80 mozjpeg is visually lossless for
background/photo use.

---

## 3. Why it helps
- **CWV / SEO:** dramatically lighter LCP image → faster mobile LCP, the Core Web Vital
  most likely to have been failing; faster crawls; less bandwidth.
- **Conversion:** for a lead-gen site, faster above-the-fold load lifts form-completion.
- **All bots:** lighter pages render more reliably for search + AI crawlers.

---

## 4. Acceptance criteria
- [x] `hero-bg.jpg`, `courts-image.jpg` are real JPEG and < 200 KB each.
- [x] `contact-image.png` < 100 KB, alpha preserved.
- [x] `npm run build` passes.
- [ ] (Post-deploy) verify no visible quality regression on homepage hero / courts /
      contact sections.

## 5. Follow-ups (still audit-gated — Spec 09)
- Run a real **Lighthouse / PageSpeed** pass (mobile) on `/`, a practice pillar, a
  city×practice page, an insight article to confirm LCP < 2.5s / CLS < 0.1 / INP < 200ms.
  The `chrome-devtools` MCP can drive this against a local `next start`.
- Consider migrating these images to `next/image` (responsive `srcset` + lazy-loading)
  and/or serving WebP/AVIF for further gains.
- `logo.png` (330 KB) left as-is to preserve brand-asset crispness; optimize only if a
  smaller crisp version is verified.
