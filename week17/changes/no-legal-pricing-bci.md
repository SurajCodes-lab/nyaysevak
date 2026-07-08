# Change: No Legal Pricing Displayed (BCI-safe)

**Status:** ✅ Shipped · **Type:** compliance

## Why
The Bar Council of India (Rule 36) restricts advertising and soliciting of legal work, and displaying legal/advocate fees is the riskiest element for a platform operating near that line. BCI has actively scrutinised legal-tech platforms in 2024–25. The compliant posture for NyaySevak is **platform matching + a free Case Assessment, with no advocate fees advertised and no advocate profiles ranked**. *(This is a considered non-lawyer view; the final model should be confirmed with a practising advocate.)*

## What we changed
- **No legal pricing is displayed anywhere.** The offer is a free Case Assessment (schema `price: "0"`, `priceRange: "Free - ₹₹₹"`).
- **`CityPracticeContent.feeRange` is now optional**, and the city×practice page **renders the "typical fees" section only when fee data is present**. New cities (Ghaziabad, Faridabad) omit it entirely — so they show **no advocate fees**.
- Wording that implied fees was removed while keeping genuinely-free items clearly labelled (matching, educational content, legal aid, calculators).

## Effect
Removes the main BCI exposure while keeping the free-assessment lead funnel intact. Making `feeRange` optional also future-proofs a full removal of fee displays across all city pages — a single decision away.

## Note / follow-up
Legacy service price ranges (document/corporate) still exist in **schema only** (not visible on any page) — flagged for the owner to strip if a fully price-free schema is wanted.

## Verification
`npm run build` ✓. New city×practice pages confirmed to render no fee section.
