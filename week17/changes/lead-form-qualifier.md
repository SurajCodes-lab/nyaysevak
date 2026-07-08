# Change: Lead-Form Buying-Intent Qualifier

**Status:** ✅ Shipped · **Type:** conversion / lead triage

## What was wrong
The lead form captured name, phone, city, matter type and a description — but nothing about **intent**. The team could not tell a ready-to-hire client from someone just seeking free information, so time was spent on low-intent enquiries.

## What we changed
Added a qualifier field to the lead form (`ContactModal.tsx`):

> **"Where are you in the process?"**
> - I'm ready to take action / hire a lawyer
> - I need a clear plan for my next steps
> - Just exploring my options for now

The selection is captured with the lead (`intent` field) so the team can **prioritise ready-to-hire matters** and triage the rest.

## Why it helps
It is the freebie-seeker filter — done through intent signalling rather than a price barrier (which keeps the offer BCI-safe; see `no-legal-pricing-bci.md`). Ready-to-act leads go to the front of the queue, which improves conversion on the leads already coming in.

## Files
`src/components/ContactModal.tsx` (state + select field; passed to the submit handler).

## Verification
`npm run build` ✓. The field submits with the rest of the form to the existing sheet/CRM flow.
