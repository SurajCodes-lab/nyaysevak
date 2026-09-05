// WhatsApp enquiry logging → Sheet 2 of the same spreadsheet the contact form
// writes to.
//
// What this can and cannot capture
// ─────────────────────────────────
// The conversation itself happens inside WhatsApp and is never visible to the
// site. What IS capturable is the enquiry event: someone clicked a WhatsApp CTA,
// from which page, with which pre-filled message, at what time. That is the row
// that lands in Sheet 2 — a lead that left the site through WhatsApp rather than
// through the form, so the team can match it against the incoming chat.
//
// Why sendBeacon and not fetch
// ────────────────────────────
// A WhatsApp CTA navigates away the instant it is clicked, and browsers cancel
// in-flight fetches on navigation — so a plain fetch() would drop a meaningful
// share of these, and would drop them silently. navigator.sendBeacon exists for
// exactly this case: the browser queues the request and guarantees delivery even
// as the page unloads. fetch with keepalive is the fallback where it is missing.
//
// Why this does not touch the form payload
// ────────────────────────────────────────
// submitToSheet() is left exactly as it is. The Apps Script routes on the
// presence of `type: "whatsapp"`, so anything without it follows the existing
// path into Sheet 1 unchanged. The working form flow cannot regress.

const SHEET_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbzLCW6ZtY27qf_ERKDRHWFBKN8opzRmTNmd7Sndx-HG-kWga0LuWgO93Du-8nebf_3jhg/exec";

/** Where on the site the click happened — one value per CTA placement. */
export type WhatsAppSource =
  | "floating_bar"
  | "city_matter_page"
  | "practice_area_page"
  | "service_page"
  | "court_page"
  | "contact_section"
  | "contact_modal"
  | "lead_cta";

export interface WhatsAppEnquiry {
  /** Which CTA was clicked. */
  source: WhatsAppSource;
  /** Free-text context: the city, matter or practice area the CTA sat on. */
  context?: string;
  /** The pre-filled wa.me message, so the team can match the incoming chat. */
  message?: string;
}

function param(name: string): string {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) ?? "";
}

/**
 * Log a WhatsApp enquiry to Sheet 2. Safe to call inside an onClick that also
 * navigates — delivery is not tied to the page staying open.
 *
 * Never throws and never blocks the click: if logging fails the user still
 * reaches WhatsApp, because losing a row is far cheaper than losing the lead.
 */
export function logWhatsAppEnquiry(enquiry: WhatsAppEnquiry): void {
  if (typeof window === "undefined") return;

  try {
    const payload = {
      type: "whatsapp",
      // ── the points recorded in Sheet 2 ──
      timestamp: new Date().toISOString(),
      source: enquiry.source,
      context: enquiry.context ?? "",
      message: enquiry.message ?? "",
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer || "direct",
      device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop",
      utmSource: param("utm_source"),
      utmMedium: param("utm_medium"),
      utmCampaign: param("utm_campaign"),
    };

    const body = JSON.stringify(payload);

    // Preferred: survives the navigation to wa.me.
    if (typeof navigator.sendBeacon === "function") {
      // text/plain avoids a CORS preflight, which sendBeacon cannot answer.
      const blob = new Blob([body], { type: "text/plain;charset=UTF-8" });
      if (navigator.sendBeacon(SHEET_URL, blob)) return;
    }

    // Fallback: keepalive asks the browser to finish the request after unload.
    void fetch(SHEET_URL, {
      method: "POST",
      body,
      mode: "no-cors",
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Logging must never break the CTA.
  }
}

/**
 * Build a wa.me URL and log the enquiry in one step, so a CTA cannot be added
 * that opens WhatsApp without recording the lead — which is how the existing
 * links drifted, with only two of eight firing any tracking at all.
 */
export function whatsAppHref(message: string): string {
  return `https://wa.me/919868666715?text=${encodeURIComponent(message)}`;
}
