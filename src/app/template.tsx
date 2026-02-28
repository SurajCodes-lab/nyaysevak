"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;

      // Instant scroll to top — no smooth animation
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      // Small delay then fade in
      const t = setTimeout(() => {
        setShow(true);
        // Restore smooth scroll for in-page anchor clicks
        document.documentElement.style.scrollBehavior = "smooth";
      }, 50);

      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
      }}
    >
      {children}
    </div>
  );
}
