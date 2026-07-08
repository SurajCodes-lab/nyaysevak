# Change: Offer Positioning — Free Case Assessment

**Status:** ✅ Shipped · **Type:** conversion / lead quality

## What was wrong
Every lead was taking the "free consultation" and disappearing. Leading with **"Free (First) Consultation"** (used in ~40 files) attracted free-advice-seekers with no intent to hire — the offer solved the problem for free instead of diagnosing it and pointing to a paid engagement.

## What we changed
The primary offer is now a **free Case Assessment**, framed as *"we assess your matter, match you with a verified advocate, and give you a next-step plan"* — a diagnosis and matching step, **not** "free legal advice".
- Site-wide wording: "Free (First) Consultation" → **"Case Assessment"**; CTAs → **"Book Your Assessment" / "Get Free Assessment"** (hero, modal, floating bar, exit-intent, `LeadCTA`, `TrustStrip`, metadata, page copy).
- URL: `/free-legal-consultation` → **`/case-assessment`**, with a **301 redirect** so no equity is lost; sitemap, `llms.txt`/`llms-full.txt`, and internal links repointed.
- Genuinely-free items are unchanged and clearly labelled: matching, educational content/guides/glossary, legal aid, and the calculators.

## Why it helps
The "assessment = diagnosis" framing (plus the lead-form qualifier — see `lead-form-qualifier.md`) attracts and surfaces higher-intent leads, without relying on price to filter them.

## Honest limit
This improves **lead quality**, not close rate. Whether a lead becomes a client still depends on the off-site step — how the matched advocate runs the assessment and follows up.

## Verification
`npm run build` ✓, `/case-assessment` generated, redirect live. Grep-verified no residual "free consultation" promise remains.
