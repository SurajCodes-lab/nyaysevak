# Reposition — "Free Consultation" → Paid "Case Assessment"

**Date:** 2026-07-07 (Week 17) · **Status:** ✅ Shipped (code, build-verified) · **Trigger:** owner report — "every lead takes the free consultation and vanishes."

---

## 1. The problem (business, not traffic)

GSC shows the site earns real impressions; the failure is at the **lead stage**: the
few who convert take the **free consultation**, get their answer, and never come back.
The entire site led with "Free First Consultation" (341 references), which is a magnet
for **free-advice-seekers with no intent to hire**. The offer *solved* the problem for
free instead of *diagnosing* it and prescribing a paid engagement.

Owner decision: **remove the free hook; attract quality, paying-intent leads.** Chosen
replacement: a **paid "Case Assessment"** (a nominal-fee diagnosis + written next-step
plan), full site-wide, in one batch.

> Honest SEO note: "free consultation" queries were among the *few* earning clicks — but
> those are exactly the freebie-seekers we want gone. Losing that micro-traffic is the
> point, not a cost.

## 2. What changed

- **Positioning everywhere:** "Free (First) Consultation" → "Paid Case Assessment" across
  ~40 files — hero, modal, floating bar, exit-intent, `LeadCTA`, `TrustStrip`, all page
  copy, metadata titles/descriptions, city×practice / practice / service / court pages.
  CTAs: "Get Free Consultation" → **"Book Your Assessment."**
- **Schema / pricing (`layout.tsx`, 5 offer pages):** the free Offer (`price: "0"`,
  `priceRange: "Free - ₹₹₹"`, `lowPrice: "0"`, serviceType "Free Lawyer Consultation")
  → **Case Assessment, `price: "499"`, `priceRange: "₹499 – ₹₹₹"`, `lowPrice: "499"`.**
  (The genuinely-free **calculators** keep `price: "0"` — those are legit lead magnets.)
- **URL rename:** `/free-legal-consultation` → **`/case-assessment`** (a URL with "free"
  contradicts a paid offer). All internal refs repointed; **301 redirect** added in
  `next.config.ts` (`/free-legal-consultation` → `/case-assessment`). Sitemap + `llms`
  files updated.
- **GEO files (`llms.txt` / `llms-full.txt`):** offer, pricing reference, and FAQ answers
  repositioned to the paid assessment (₹499) so AI engines stop advertising a free offer.
- **Contradiction sweep:** removed every "no fees / no charge / no cost / completely
  free / — free." that now conflicts with a paid model, **while preserving** the things
  that are legitimately free: **matching is free**, **educational content/guides/glossary
  are free**, **legal aid** (for eligible users), and the **calculators**.

## 3. The framing (why "assessment", not "consultation")

A *consultation* invites "give me free advice." An **assessment** is a **paid
deliverable**: it diagnoses the matter and hands over a written next-step plan. The
nominal fee (₹499) is itself the filter — a free-advice-seeker won't pay it, a real
client will. The landing page + FAQs now say this explicitly ("serious matters only; a
real deliverable; mutual fit").

## 4. Verification
- `npm run build` → ✓ compiled, 326 static pages, `/case-assessment` generated, no errors.
- Final grep confirms no residual free-consultation *promise* (only the intentional
  "matching is free" and free educational content/calculators remain).

## 5. Recommended follow-ups (next)
1. **Qualify the form** — add "what outcome do you want / ready to hire?" fields to the
   `ContactModal` so hot leads are flagged and freeloaders self-select out.
2. **Set the fee deliberately** — ₹499 is a placeholder nominal; confirm the right price
   (it is centralised in the schema offers + copy; a find-replace of "499"/"₹499").
3. **Follow-up capture** — ensure phone + consent are required (not optional) so
   non-closers can be nurtured on WhatsApp.
4. **Off-page (Week 18)** — the position-20 ceiling still needs authority; this change
   fixes *lead quality*, not rank.

## 6. Honest limit
This repositions the **on-site offer** to attract the right leads. Whether a lead becomes
a paying client still depends on the **off-site** step — how the matched lawyer runs the
paid assessment and follows up. No code closes a sale; this makes sure the people who
arrive are worth closing.
