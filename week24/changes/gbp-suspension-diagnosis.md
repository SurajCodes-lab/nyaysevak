# Diagnosis: Google Business Profile Suspension

**Status:** 🔴 Open — owner action required · **Type:** off-page (entity / local)

## What happened
The Google Business Profile was reported suspended during this cycle.

## What did not cause it
No change from this cycle could have. Verified:
- **No commit or push occurred while it happened.** `git log origin/main..HEAD` returned 0; the Week 24 branch is still local-only.
- **No GBP credentials were ever held**, so no edit to the profile was possible.
- **The IndexNow `postbuild` hook was deliberately bypassed** — builds were run as `npx next build`, not `npm run build`. And the script's own header records that **Google does not support IndexNow**; it submits only to Bing, Yandex, Naver and Seznam.
- The only Google-adjacent actions were read-only fetches of two public URLs, both of which returned bot-blocked error pages. Viewing a public share link is not a suspension trigger.

## What is needed to diagnose it
Two inputs the owner holds:
1. **The suspension email.** A *soft* suspension leaves the listing publicly visible but removes management access; a *hard* suspension removes it from Maps and Search entirely. The recovery paths differ.
2. **The profile's current name, address, and primary category.**

## Most likely causes, ranked for this business model
1. **The address.** Google requires a service-area business to *hide* its address, and any displayed address to be a real location staffed during stated hours. A virtual office, co-working desk, registered-agent address, or a visible home address is the single most common suspension trigger for legal service-area businesses — and this business operates from one base with a team it deliberately does not showcase.
2. **Keywords in the business name.** Anything beyond plain "NyaySevak" is the second most common trigger.
3. **A recent edit.** Changes to name, address, category, or website URL trigger automated re-review — the moment a borderline listing flips.

## Context that matters
Legal services is one of Google's **high-scrutiny verticals**, alongside locksmiths and addiction treatment. Automated enforcement is more aggressive than in ordinary categories, and the threshold for suspension is correspondingly lower.

## Reinstatement path
File via the Business Redressal Complaint Form with: business registration (GST or incorporation certificate), a utility bill or lease for the address, and photographs of signage if a physical office exists.

## Why it matters
Every report since Week 18 has named the GBP the highest-leverage off-page lever available — it creates a verified real-world entity that separates the brand from `nyayasevak.com`, unlocks Maps visibility, and enables the genuine reviews the site has never had. It is now worse than missing; it is suspended. **This outranks everything else on the Week 24 checklist.**
