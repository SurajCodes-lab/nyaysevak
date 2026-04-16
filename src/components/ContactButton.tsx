"use client";

import { useContactModal } from "@/context/ContactModalContext";
import { trackContactModalOpen, trackCTAClick } from "@/lib/analytics";

interface ContactButtonProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** Week 5: optional source label for analytics (e.g. "hero", "navbar", "footer", "practice-area-cta") */
  source?: string;
}

export default function ContactButton({ className, children, style, source }: ContactButtonProps) {
  const { openContactModal } = useContactModal();

  const handleClick = () => {
    trackContactModalOpen(source || "unknown");
    if (source) trackCTAClick("contact", source);
    openContactModal();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
