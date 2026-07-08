# NyaySevak — Full-Site Content & Design Audit (all 313 pages)

**Date:** 2026-07-07 · **Method:** word-count of the rendered HTML for every prerendered page in the production build (`.next/server/app`), tags/scripts stripped, grouped by page type. FAQ = FAQPage schema present.

> **Reading the numbers:** every page includes the shared **nav + footer ≈ 280–330 words** of boilerplate (links, contact, etc.). So **real editorial content ≈ raw count − ~300**. A "750-word" glossary page is ~450 words of real content.

---

## 1. Verdict (read this first)

**This is a content-rich site, not a thin one.** Distribution across 313 pages:

| Band (raw words) | Pages | Meaning |
|---|---|---|
| < 450 (**THIN**) | 7 | 3 system pages + **4 orphan 404s** (fixable) |
| 450–750 (light) | 10 | mostly light hubs |
| 750–1300 (ok) | 158 | glossary, courts, services, city hubs |
| 1300–2600 (**good**) | 124 | city×practice, guides, practice areas |
| 2600+ (**deep**) | 14 | flagship guides + big hubs |

**Money pages are strong:** practice-area pages median **2,235**, insight guides median **2,199** (up to 3,367), city×practice median **~1,588**. That is comparable to competitor depth — **your gap vs LawRato/Vakilsearch is authority/reviews, not content depth.** Design is a single consistent template system per page type; there is **no thin-design or inconsistency problem**.

**Only 3 things genuinely need action** (Section 3): the 4 orphan pages, and — optionally — the glossary and service page types (the lightest *real* content).

---

## 2. By page type — n / min / median / max (raw words)

| Page type | n | min | median | max | FAQ | Assessment |
|---|---|---|---|---|---|---|
| **insights/[slug]** | 30 | 1,835 | **2,199** | 3,367 | ✅ all | 🟢 Strong — flagship depth |
| **practice-areas/[slug]** | 30 | 1,835 | **2,235** | 2,768 | ✅ all | 🟢 Strong |
| **lawyers/[city]/[practice]** | 65 | 291* | 1,588 | 1,980 | ✅ | 🟢 Good (*4 orphans, §3.1) |
| **best-\* landing** | 5 | 1,764 | 1,880 | 2,030 | ✅ all | 🟢 Good |
| **courts/[slug]** | 68 | 991 | 1,165 | 1,301 | ✅ all | 🟡 OK (programmatic; tribunals lightest) |
| **lawyers/[city]** (hub) | 13 | 965 | 1,115 | 1,158 | ✅ | 🟡 OK |
| **services/[slug]** | 12 | 918 | **956** | 1,191 | ✅ all | 🟠 Light — money pages, deepen |
| **glossary/[slug]** | 57 | 725 | **776** | 842 | ✅ all | 🟠 Lightest real content (definitional) |
| **features/[slug]** | 6 | 835 | 863 | 954 | ✅ | 🟡 Light (supporting) |
| **authors/[slug]** | 5 | 805 | 1,030 | 2,389 | – | 🟡 OK (E-E-A-T) |
| **static/hub** | 22 | 8 | 1,263 | 7,994 | mixed | 🟡 Mixed (§3.4) |

---

## 3. What actually needs action (prioritised)

### 3.1 🔴 Fix the 4 orphan pages (do first — quick)
These render at **291 words** because they are `notFound()` pages — the two new NCR cities lack content for these two verticals:
- `/lawyers/ghaziabad/civil-law` · `/lawyers/ghaziabad/corporate-business`
- `/lawyers/faridabad/civil-law` · `/lawyers/faridabad/corporate-business`

They are currently correct **404s**, gated out of the sitemap and hub links — so they do **no SEO harm**. But given your **corporate/commercial focus** and that these are **industrial cities**, the right move is to **write the civil + corporate content** for both (4 entries) — completing the 5-practice NCR base and turning 4 dead routes into 4 money pages. *(I can do this next.)*

### 3.2 🟠 Deepen the glossary (57 pages, the lightest real content)
At ~776 raw (~450 real) words, the glossary pages are your thinnest *real* content. They already rank (pos 5–9 per GSC), so this is opportunity not crisis. To lift them: add a short "**How it applies in practice**" paragraph, a worked example, and a "related matters + which lawyer" block to each. Biggest volume lever, but a large lift — do the **highest-impression terms first** (compoundable offence, PIL, etc.).

### 3.3 🟠 Deepen the 12 service pages (money pages at ~956 words)
Services are conversion pages but the lightest of the money-page types. Add a "**what's included / process / who it's for**" section and 1–2 more FAQs each to push them toward ~1,400+.

### 3.4 🟡 Light hubs (minor)
`/contact` (441, no FAQ), `/legal-tools` (531), `/features` (747, no FAQ), `/platform` (898), `/about` (978). These are navigational; low priority. Adding a short FAQ to `/contact` and `/features` is a quick AEO win. `_global-error` (8) and `_not-found` (351) are system pages — ignore.

### 3.5 🟡 New-city city×practice run slightly light
`ghaziabad/*` and `faridabad/*` are 1,426–1,494 vs metro 1,600–1,980 — because they (correctly, BCI) omit the fee section. Acceptable; if you want parity, add another local paragraph (landmarks/court process) to each.

---

## 4. Design audit

- **No thin-design problem.** Every page type uses one consistent, considered template (hero → AEO answer → sections → FAQ → related links → CTA), on a coherent dark-gold system with schema, breadcrumbs, and Speakable.
- **Consistent conversion furniture** — `AnswerBlock`, `TrustStrip`, `RelatedLinks`, `ContactButton` appear across templates.
- **One cosmetic note:** the 4 orphan 404s render the not-found UI (correct, but a user who deep-links there sees a dead end — fixed by §3.1).
- **No layout/CLS red flags** found structurally; the measured CWV pass (Spec 09) is still the place to confirm.

---

## 5. The honest bottom line

You do **not** have a thin-content or thin-design problem. Money pages are 2,000–2,800 words with full schema and FAQ — genuinely competitive depth. The site's ceiling is **authority (backlinks) + reviews**, not content quality. So "expansion" here means **completing gaps (the 4 orphans), lifting the two lightest page-types (glossary, services), and adding new winnable guides** — not fixing a thin site.

**Recommended order:** (1) the 4 NCR orphans → (2) deepen top glossary terms + service pages → (3) keep adding winnable long-tail guides → and in parallel, the real lever: **off-page authority + GMB reviews.**

---

## Appendix — Full page-wise listing (all 313, by type, raw words · F = has FAQ)

### insights/[slug] (30) — 🟢 strong
```
3367 F property-title-verification-india-checklist-2026
2992 F anticipatory-bail-india-section-482-bnss-guide-2026
2964 F mutual-consent-divorce-india-procedure-2026
2810 F filing-fir-india-procedure-rights-2026
2648 F section-138-ni-act-cheque-bounce-procedure-2026
2535 F legal-heir-certificate-vs-succession-certificate-india
2410 F bailable-vs-non-bailable-cognizable-offences-india
2359 F lawyer-fees-india-benchmarks-2026
2354 F private-limited-company-incorporation-india-2026
2316 F how-to-file-consumer-complaint-online-edaakhil-india-2026
2302 F patent-registration-filing-india-process-2026            [NEW]
2244 F high-net-worth-alimony-settlement-india-2026             [NEW]
2216 F nclt-ibc-insolvency-recovery-india-2026                  [NEW]
2211 F rera-complaint-procedure-buyer-guide-2026
2199 F co-founders-agreement-india-guide-2026                   [NEW]
2174 F cheque-bounce-legal-notice-format-section-138-india-2026 [NEW]
2165 F money-recovery-commercial-suit-india-2026                [NEW]
2145 F private-limited-vs-llp-vs-opc-vs-partnership-india-2026
2140 F how-to-quash-fir-india-section-528-bnss-2026
2133 F how-to-register-a-will-in-india-procedure-2026
2131 F wrongful-termination-full-final-settlement-rights-india-2026
2102 F posh-act-india-workplace-harassment-complaint-2026
2057 F rent-agreement-india-11-month-rule-registration-2026
2033 F gst-registration-india-documents-process-threshold-2026
2008 F how-to-send-legal-notice-india-format-procedure-2026
2000 F domestic-violence-act-india-reliefs-how-to-file-2026
1994 F trademark-registration-india-process-cost-classes-2026
1987 F anticipatory-bail-rejected-what-next-india-2026
1957 F documents-required-company-registration-india-2026       [NEW]
1835 F report-cyber-crime-online-fraud-india-procedure-2026
```

### practice-areas/[slug] (30) — 🟢 strong (all 1,835–2,768, FAQ)
Top: legal-notices 2768 · criminal-law 2705 · corporate-business 2705 · property-real-estate 2703 · arbitration-adr 2690 · family-matrimonial 2675 · documentation 2570 · banking-finance 2557 · civil-law 2536 · cyber-law 2502 · intellectual-property 2470 · consumer-protection 2450 · labour-employment 2398. Lightest: additional-services 1835 · environmental-law 1882 · tax-law 1902.

### lawyers/[city]/[practice] (65) — 🟢 good, except 4 orphans
```
 291   ghaziabad/civil-law            ← ORPHAN 404 (no content) §3.1
 291   ghaziabad/corporate-business   ← ORPHAN 404
 291   faridabad/civil-law            ← ORPHAN 404
 291   faridabad/corporate-business   ← ORPHAN 404
1426–1980 F  the other 61 (metros 1,600–1,980; new NCR cities 1,426–1,494)
```

### courts/[slug] (68) — 🟡 ok, all FAQ
High Courts 1,065–1,154 · District-court state pages 1,154–1,301 · Tribunal groups 991–1,054 (lightest).

### glossary/[slug] (57) — 🟠 lightest real content (725–842, all FAQ)
Thinnest 10: suo-moto-cognizance 725 · public-interest-litigation 741 · cognizable-offence 743 · indian-contract-act 744 · specific-performance 744 · stay-order 745 · khata-bbmp 747 · rera-real-estate-regulation 751 · written-statement 751 · execution-decree 753.

### services/[slug] (12) — 🟠 light money pages (918–1,191, all FAQ)
contract-management 918 · ip-management 922 · legal-knowledge 925 · litigation-management 929 · mergers-acquisitions-support 937 · e-filing-assistance 952 · corporate-legal-advisory 956 · compliance-management 973 · document-services 1050 · legal-aid 1072 · lawyer-consultation 1179 · find-hire-lawyers 1191.

### lawyers/[city] hubs (13) — 🟡 ok
faridabad 965 · ghaziabad 975 (new, lightest — 3 practice cards) · ahmedabad 1082 · hyderabad 1091 · pune 1099 · gurgaon 1101 · bangalore 1115 · chennai 1116 · kolkata 1122 · noida 1141 · jaipur 1146 · delhi 1151 · mumbai 1158.

### best-\* landing (5) — 🟢 civil 2030 · corporate 1971 · property 1880 · criminal 1796 · divorce 1764.

### features/[slug] (6) — 🟡 lawyer-directory 954 · court-tribunal-information 884 · service-booking 863 · faq-sections 847 · legal-guides-resources 845 · whatsapp-integration 835.

### authors/[slug] (5) — nyaysevak-legal-team 2389 · corporate-commercial-desk 1179 · criminal-law-desk 1030 · property-real-estate-desk 894 · matrimonial-family-desk 805.

### static / hub (22)
legal-glossary 7994 · index(home) 3377 · insights 2814 · practice-areas 2054 · terms-of-service 1837 · disclaimer 1575 · privacy-policy 1573 · site-index 1548 · case-assessment 1373 · legal-industry-statistics 1302 · court-fee-calculator 1263 · services 1143 · courts 1119 · lawyers 1111 · about 978 · platform 898 · features 747 · authors 641 · legal-tools 531 · contact 441 · _not-found 351 · _global-error 8.
