"use client";

import { logWhatsAppEnquiry, whatsAppHref, type WhatsAppSource } from "@/lib/whatsapp-lead";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * A WhatsApp CTA that always logs the enquiry.
 *
 * Four of the site's eight WhatsApp links sat inside server components
 * (`/lawyers/[city]/[slug]`, `/practice-areas/[slug]`, `/services/[slug]`,
 * `/courts/[slug]`), where an onClick handler is not possible — which is why
 * those clicks were never recorded anywhere. Wrapping the anchor in this small
 * client component makes the logging available on every page type, and makes it
 * hard to add a WhatsApp CTA later that quietly loses the lead.
 *
 * Fires both destinations: GA4 for reporting, Sheet 2 for the team to work.
 */
export default function WhatsAppLink({
  message,
  source,
  context,
  className,
  children,
  ariaLabel,
}: {
  /** Pre-filled chat text. Also written to Sheet 2 so the chat can be matched. */
  message: string;
  /** Which CTA placement this is. */
  source: WhatsAppSource;
  /** The city, matter or practice area the CTA sits on. */
  context?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={whatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Chat with NyaySevak on WhatsApp"}
      className={className}
      onClick={() => {
        trackWhatsAppClick(context ?? source);
        logWhatsAppEnquiry({ source, context, message });
      }}
    >
      {children}
    </a>
  );
}
