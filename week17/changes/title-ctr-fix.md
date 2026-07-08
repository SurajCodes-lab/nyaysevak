# Change: Title / CTR Fix

**Status:** ✅ Shipped · **Commit:** `e4a8b48` · **Type:** on-page (click-through)

## What was wrong
GSC (3 months) showed pages ranking but almost nobody clicking — overall CTR ~1.1%, and one page at **position 5 with just 0.9% CTR** (position 5 should earn ~5%). A good rank with a terrible CTR points to a broken search snippet, not a ranking problem. Live inspection found every page title carried a **duplicated brand** and ran past Google's ~60-character limit, so the useful keywords were truncated. Examples (rendered in Google, before):
- `/courts/bombay-high-court` → `… | NyaySevak | NyaySevak.com` = **134 chars**
- `/services/lawyer-consultation` → `… | NyaySevak.com | NyaySevak.com`

## What we changed
Every page title is now **keyword-first, single-brand, and ≤60 characters**. High-Court titles expand "HC" → "High Court". Applied across 12+ templates and the static hubs (practice areas, services, glossary, courts, city hubs, city×practice, about, courts hub, etc.).
- Before: `Best Divorce Lawyer in Ahmedabad — Free Consultation | NyaySevak.com` (67)
- After: `Best Divorce Lawyer in Ahmedabad` (48, brand added once by the layout)

## Why it helps
A clean, keyword-first, untruncated title is more clickable at any position → lifts CTR directly on the impressions the site already earns, fastest on page-1 terms. It also puts the full keyword inside the visible title (stronger relevance) and gives AI engines a clean citation anchor.

## Verification & timeline
`npm run build` ✓. Expect CTR to move within **1–3 weeks** of deploy on pages that already rank.
