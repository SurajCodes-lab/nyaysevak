"use client";

// Week 9: EngagementTracker — site-wide GA4 engagement-signal emitter.
//
// Mounts once in the root layout. On every page it watches:
//   1. Scroll depth — fires `scroll_depth` events at 25/50/75/100% milestones,
//      once each, per page.
//   2. Time on page — fires `time_on_page` at 15s/30s/60s/180s milestones,
//      once each, per page. Timers reset when the user navigates to a new
//      pathname (since the App Router does not unmount the root layout).
//   3. Exit intent — fires `exit_intent` the first time the mouse leaves the
//      viewport from the top, per page (a heuristic for "user about to
//      abandon"; useful for triggering exit-CTAs and for funnel modelling).
//   4. Qualified-lead heuristic — when a single page sees >=60s engaged AND
//      >=75% scroll depth, emit a `qualified_lead` event ("deep-engagement").
//      Conversion-modelling treats this much more strongly than a raw
//      pageview and gives Ads + GSC a richer ranking signal of which pages
//      actually convert organic traffic.
//
// All event firing goes through `lib/analytics.ts`; there is no direct
// `window.gtag` use here so the analytics module stays the single source of
// truth and GA4 absence (e.g. local dev without a measurement ID) is handled
// in one place.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackScrollDepth,
  trackTimeOnPage,
  trackExitIntent,
  trackQualifiedLead,
} from "@/lib/analytics";

type Milestone = 25 | 50 | 75 | 100;
type TimeMilestone = 15 | 30 | 60 | 180;

export default function EngagementTracker() {
  const pathname = usePathname();
  const firedScroll = useRef<Set<Milestone>>(new Set());
  const firedTime = useRef<Set<TimeMilestone>>(new Set());
  const firedExit = useRef(false);
  const firedQualified = useRef(false);
  const startTs = useRef<number>(Date.now());
  const maxScrollPct = useRef<number>(0);

  // Reset per-page state on route change.
  useEffect(() => {
    firedScroll.current = new Set();
    firedTime.current = new Set();
    firedExit.current = false;
    firedQualified.current = false;
    startTs.current = Date.now();
    maxScrollPct.current = 0;
  }, [pathname]);

  // Scroll depth.
  useEffect(() => {
    function getScrollPct(): number {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const winH = window.innerHeight || doc.clientHeight;
      const docH = Math.max(doc.scrollHeight, doc.offsetHeight, document.body.scrollHeight);
      const denom = docH - winH;
      if (denom <= 0) return 100;
      return Math.min(100, Math.round(((scrollTop + winH) / docH) * 100));
    }

    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const pct = getScrollPct();
        if (pct > maxScrollPct.current) maxScrollPct.current = pct;
        ([25, 50, 75, 100] as Milestone[]).forEach((m) => {
          if (pct >= m && !firedScroll.current.has(m)) {
            firedScroll.current.add(m);
            trackScrollDepth(m);
            checkQualified();
          }
        });
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Time on page.
  useEffect(() => {
    const checkpoints: TimeMilestone[] = [15, 30, 60, 180];
    const timers = checkpoints.map((s) =>
      window.setTimeout(() => {
        if (document.visibilityState === "visible" && !firedTime.current.has(s)) {
          firedTime.current.add(s);
          trackTimeOnPage(s);
          checkQualified();
        }
      }, s * 1000),
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [pathname]);

  // Exit intent — mouseleave from top of viewport.
  useEffect(() => {
    function onMouseOut(e: MouseEvent) {
      if (firedExit.current) return;
      if (e.relatedTarget) return;
      if (e.clientY > 0) return;
      firedExit.current = true;
      trackExitIntent();
    }
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [pathname]);

  function checkQualified() {
    if (firedQualified.current) return;
    const engaged = firedTime.current.has(60);
    const deepScroll = maxScrollPct.current >= 75;
    if (engaged && deepScroll) {
      firedQualified.current = true;
      trackQualifiedLead("deep-engagement: 60s + 75% scroll");
    }
  }

  return null;
}
