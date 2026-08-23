# Change: Hyderabad → Matter Parity with Delhi

**Status:** ✅ Shipped · **Commit:** `4838cc8` · **Type:** content (transactional depth)

## What was wrong
Hyderabad is the strongest-performing city in Search Console per the owner — and it carried **one** matter page (mutual-consent divorce) against Delhi's six. The city with proven demand had the thinnest deep-page coverage on the site. Every high-buyer-intent transactional query in that market — "anticipatory bail lawyer in Hyderabad", "cheque bounce lawyer Hyderabad", "NCLT lawyer Hyderabad" — had no page to rank.

## What we changed
Added 5 matter pages, taking Hyderabad to **6/6 — exact parity with Delhi, Noida, Gurgaon and Faridabad**: anticipatory bail, cheque bounce (S.138 NI Act), RERA complaint, company registration, and NCLT/IBC. Entries added to `src/data/city-matter-content.ts` in the existing shape, so gating, mesh, and sitemap picked them up automatically.

Content is written against Telangana specifics rather than generic national procedure: the **NCLT Hyderabad Bench** (covering Telangana and Andhra Pradesh, with appeals to **NCLAT Chennai**), **TG RERA** and the ORR corridor projects (Kokapet, Financial District, Tellapur, Kollur), **TS-iPASS** single-window industrial clearance with its statutory deemed-approval timeline, and the three district complexes (Nampally, Ranga Reddy at L. B. Nagar, Medchal-Malkajgiri).

## Why it helps
- **Depth compounds faster than breadth where traction already exists.** A new matter page in Hyderabad inherits the topical authority the existing Hyderabad cluster has accumulated; a new hub in a cold region starts from zero.
- **These are buyer-intent queries.** Someone searching "anticipatory bail lawyer in Hyderabad" is ready to engage, not seeking free advice — the exact lead quality the Week 18 repositioning targeted.
- **It closes the gap the console itself pointed at.** Data chose this sprint, not intuition.

## Verification & timeline
`next build` ✓ — pages average **1,536–1,660 rendered words**. Expect movement in **4–8 weeks**, faster than the new-city pages because the cluster already has history.

