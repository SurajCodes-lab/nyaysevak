// GA4 Custom Event Tracking for NyaySevak
// Tracks key conversions: CTA clicks, form submissions, WhatsApp, phone calls

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// ── Conversion Events ──

export function trackContactFormSubmit(formType: string = "contact") {
  trackEvent({
    action: "form_submit",
    category: "conversion",
    label: formType,
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
  });
}

export function trackPhoneClick() {
  trackEvent({
    action: "phone_click",
    category: "conversion",
    label: "header_phone",
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
