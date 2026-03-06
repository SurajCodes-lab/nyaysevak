"use client";

import { useContactModal } from "@/context/ContactModalContext";

interface ContactButtonProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ContactButton({ className, children, style }: ContactButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={openContactModal}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
