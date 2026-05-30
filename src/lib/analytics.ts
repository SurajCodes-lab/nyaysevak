// GA4 Custom Event Tracking for NyaySevak
// Tracks key conversions: CTA clicks, form submissions, WhatsApp, phone calls,
// plus (Week 9) engagement signals — scroll depth, time on page, exit intent
// and qualified-lead heuristics. Engagement signals let us answer the question
// "of the traffic Week 1-8 SEO brought in, who is *actually* leaving as a
// lead?" — the input GA4 needs to optimise Ads + bid algorithms, and the
// signal we need to attribute enquiry growth to specific SEO surfaces.

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  /** Arbitrary GA4 event params (passes through to gtag) */
  params?: Record<string, unknown>;
};

export function trackEvent({ action, category, label, value, params }: GTagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...(params ?? {}),
  });
}

// ── Conversion Events ──

export function trackContactFormSubmit(formType: string = "contact") {
  trackEvent({
    action: "form_submit",
    category: "conversion",
    label: formType,
    value: 10,
  });
}

export function trackCTAClick(ctaName: string, page?: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: `${ctaName}${page ? ` | ${page}` : ""}`,
  });
}

export function trackWhatsAppClick(page?: string) {
  trackEvent({
    action: "whatsapp_click",
    category: "conversion",
    label: page || window.location.pathname,
    value: 8,
  });
}

export function trackPhoneClick() {
  trackEvent({
    action: "phone_click",
    category: "conversion",
    label: "header_phone",
    value: 8,
  });
}

export function trackContactModalOpen(source?: string) {
  trackEvent({
    action: "contact_modal_open",
    category: "engagement",
    label: source || "unknown",
  });
}

export function trackServiceView(serviceSlug: string) {
  trackEvent({
    action: "service_view",
    category: "engagement",
    label: serviceSlug,
  });
}

export function trackPracticeAreaView(areaSlug: string) {
  trackEvent({
    action: "practice_area_view",
    category: "engagement",
    label: areaSlug,
  });
}

export function trackCourtView(courtSlug: string) {
  trackEvent({
    action: "court_view",
    category: "engagement",
    label: courtSlug,
  });
}

// ── Week 9: Engagement signals ──

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  trackEvent({
    action: "scroll_depth",
    category: "engagement",
    label: `${percent}%`,
    value: percent,
    params: { scroll_pct: percent, page_path: window.location.pathname },
  });
}

export function trackTimeOnPage(seconds: 15 | 30 | 60 | 180) {
  trackEvent({
    action: "time_on_page",
    category: "engagement",
    label: `${seconds}s`,
    value: seconds,
    params: { engaged_seconds: seconds, page_path: window.location.pathname },
  });
}

export function trackExitIntent() {
  trackEvent({
    action: "exit_intent",
    category: "engagement",
    label: window.location.pathname,
    params: { page_path: window.location.pathname },
  });
}

/**
 * Fire when the user has demonstrated multiple lead-indicating behaviours on
 * the same page (e.g., 60s+ engaged AND scrolled 75%+, or 30s engaged AND
 * opened the contact modal). GA4 conversion-modelling weights this much
 * higher than a raw page_view.
 */
export function trackQualifiedLead(reason: string) {
  trackEvent({
    action: "qualified_lead",
    category: "conversion",
    label: reason,
    value: 5,
    params: { qual_reason: reason, page_path: window.location.pathname },
  });
}

// ── Week 11: Exit-intent capture ──

/**
 * Fire when the exit-intent phone-capture modal is shown to a visitor. Paired
 * with `exit_capture_submit` / `exit_capture_dismiss` so we can compute the
 * modal's true capture rate (submits ÷ shows) per page in GA4 Explorations.
 */
export function trackExitCaptureShown(page?: string) {
  trackEvent({
    action: "exit_capture_shown",
    category: "engagement",
    label: page || window.location.pathname,
    params: { page_path: window.location.pathname },
  });
}

/**
 * Fire when a visitor submits their phone number in the exit-intent modal.
 * This is a hard conversion (a lead we would otherwise have lost to the exit)
 * so it carries the same value weight as a primary form submit.
 */
export function trackExitCaptureSubmit(page?: string) {
  trackEvent({
    action: "exit_capture_submit",
    category: "conversion",
    label: page || window.location.pathname,
    value: 10,
    params: { page_path: window.location.pathname },
  });
}

/** Fire when the visitor dismisses the exit-intent modal without converting. */
export function trackExitCaptureDismiss(page?: string) {
  trackEvent({
    action: "exit_capture_dismiss",
    category: "engagement",
    label: page || window.location.pathname,
    params: { page_path: window.location.pathname },
  });
}

/** Fire when a user reaches a key practice-area or city-intent page from organic search. */
export function trackOrganicLanding(slug: string) {
  trackEvent({
    action: "organic_landing",
    category: "acquisition",
    label: slug,
    params: { page_path: window.location.pathname, referrer: document.referrer || "(direct)" },
  });
}

// ── GA4 Type Declaration ──
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}
