// Single source of truth for NAP (Name, Address, Phone), opening hours, and the
// brand's verified external profiles.
//
// Why this file exists:
//   The phone number, email, opening hours, and sameAs list were previously
//   duplicated between layout.tsx (Organization + LegalService) and
//   lawyers/[city]/page.tsx (per-city LocalBusiness). Local search treats NAP
//   consistency as a ranking and trust signal, and duplicated literals drift —
//   one gets updated, the other does not, and the site then emits two different
//   phone numbers for the same entity. Everything local lives here now.
//
// Entity-disambiguation note:
//   The brand competes on the SERP with a similarly spelled competitor
//   (nyayasevak.com). The strongest available signal for separating two
//   same-name entities is binding this site to the verified Google Business
//   Profile via sameAs, which is exactly what GOOGLE_BUSINESS_PROFILE_URL below
//   is for. See the comment on that constant before setting it.

export const BUSINESS = {
  name: "NyaySevak",
  legalName: "NyaySevak",

  /** E.164-style, used in schema.org telephone fields. */
  telephone: "+91-9868666715",
  /** Human-readable form, used in visible page copy. */
  telephoneDisplay: "+91 98686 66715",

  email: "nyaysevak@gmail.com",
  whatsapp: "https://wa.me/919868666715",

  /** Registered/operating locality. Must match the Google Business Profile exactly. */
  address: {
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },

  priceRange: "Free - ₹₹₹",
} as const;

/**
 * Opening hours in schema.org OpeningHoursSpecification form.
 *
 * These MUST match the hours published on the Google Business Profile. Google
 * cross-checks on-site structured data against the GBP, and a mismatch weakens
 * the association between the two rather than strengthening it.
 */
export const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "10:00",
    closes: "18:00",
  },
] as const;

/**
 * Canonical Google Business Profile URL.
 *
 * MUST be a stable, canonical profile link — one of:
 *   - a Maps share link:   https://maps.app.goo.gl/XXXXXXXX
 *   - a short name link:   https://g.page/XXXXXXXX
 *   - a CID link:          https://www.google.com/maps?cid=NNNNNNNNNNNNNNNNNNN
 *
 * Do NOT use a google.com/search?...&stick=... URL. Those are search-session
 * URLs: they are not stable, they are not the profile's canonical address, and
 * they are not resolvable by crawlers.
 *
 * Left empty deliberately until the canonical link is confirmed. sameAs() below
 * filters empty values, so an unset value emits nothing rather than a broken
 * URL — a sameAs pointing at a dead or non-canonical URL is a negative trust
 * signal and actively works against entity disambiguation.
 */
export const GOOGLE_BUSINESS_PROFILE_URL = "";

/**
 * Owned social profiles.
 *
 * Only include profiles confirmed to resolve (HTTP 200) and genuinely owned by
 * the brand. Week 15 removed twitter/x.com/nyaysevak and
 * linkedin.com/company/nyaysevak because both 404'd. Re-add them here once the
 * profiles actually exist.
 */
export const SOCIAL_PROFILES: readonly string[] = [
  "https://www.facebook.com/nyaysevak",
  "https://www.instagram.com/nyaysevak",
];

/**
 * The sameAs array for Organization / LegalService / LocalBusiness schema.
 *
 * The Google Business Profile is listed FIRST because it is the highest-trust
 * corroborating entity reference available — it is the one profile Google has
 * itself verified.
 */
export function sameAs(): string[] {
  return [GOOGLE_BUSINESS_PROFILE_URL, ...SOCIAL_PROFILES].filter(
    (url): url is string => Boolean(url && url.trim())
  );
}
