"use client";

// Week 11: ExitIntentModal — a single-field phone-capture shown on the first
// exit-intent of a session.
//
// Why this exists:
//   Week 9 shipped the `exit_intent` GA4 signal but took no action on it. The
//   funnel-abandonment problem it surfaced is real: a meaningful share of
//   organic visitors read a page, get the answer they came for, and leave
//   without ever opening the multi-field contact modal. This component
//   intercepts that exit with the lowest-friction possible ask — just a phone
//   number and a "we'll call you in 5 minutes" promise — so a visitor who
//   wasn't going to fill the full form still becomes a lead.
//
// Behaviour / guardrails (deliberately conservative so it never nags):
//   - Shows at most once per browser session (sessionStorage flag).
//   - Suppressed permanently for ~30 days once a visitor submits or dismisses
//     (localStorage flag) so returning visitors aren't re-prompted.
//   - Armed only after the visitor has been engaged for ENGAGE_MS *and* has
//     scrolled at least once — never fires on an instant bounce.
//   - Desktop: triggers on a genuine top-of-viewport mouse-out (the classic
//     exit-intent heuristic). Mobile (no reliable mouse-out): triggers on a
//     fast upward scroll toward the address bar after the engage delay.
//   - Never shows while the main contact modal is open.
//
// All event firing goes through lib/analytics.ts (single GA4 source of truth).

import { useEffect, useRef, useState } from "react";
import { Phone, X, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { submitToSheet } from "@/lib/submitToSheet";
import {
  trackExitCaptureShown,
  trackExitCaptureSubmit,
  trackExitCaptureDismiss,
} from "@/lib/analytics";

const SESSION_KEY = "ns_exit_capture_shown";   // once per tab session
const SUPPRESS_KEY = "ns_exit_capture_done";    // ~30 days after submit/dismiss
const SUPPRESS_DAYS = 30;
const ENGAGE_MS = 12_000;                        // minimum engaged time before arming

function isSuppressed(): boolean {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true;
    const raw = localStorage.getItem(SUPPRESS_KEY);
    if (!raw) return false;
    const until = Number(raw);
    if (Number.isFinite(until) && Date.now() < until) return true;
    localStorage.removeItem(SUPPRESS_KEY);
    return false;
  } catch {
    return false;
  }
}

function markDone() {
  try {
    localStorage.setItem(
      SUPPRESS_KEY,
      String(Date.now() + SUPPRESS_DAYS * 24 * 60 * 60 * 1000),
    );
  } catch {
    /* storage unavailable — best-effort only */
  }
}

export default function ExitIntentModal() {
  const { isOpen: contactOpen } = useContactModal();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const armed = useRef(false);          // engage delay elapsed + scrolled
  const scrolled = useRef(false);
  const shown = useRef(false);          // this component instance has fired
  const lastScrollY = useRef(0);

  // Arm the trigger only after real engagement.
  useEffect(() => {
    if (isSuppressed()) return;

    const onScroll = () => {
      scrolled.current = true;
      // Mobile fallback: a fast upward fling once armed.
      if (armed.current && !shown.current) {
        const y = window.scrollY;
        if (lastScrollY.current - y > 80 && y < 240) trigger();
      }
      lastScrollY.current = window.scrollY;
    };

    const timer = window.setTimeout(() => {
      if (scrolled.current) armed.current = true;
    }, ENGAGE_MS);

    function onMouseOut(e: MouseEvent) {
      if (!armed.current || shown.current) return;
      if (e.relatedTarget) return;
      if (e.clientY > 0) return;
      trigger();
    }

    function trigger() {
      if (shown.current || isSuppressed()) return;
      shown.current = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
      trackExitCaptureShown();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  // Never overlay on top of the primary contact modal.
  useEffect(() => {
    if (contactOpen && open) setOpen(false);
  }, [contactOpen, open]);

  // Lock body scroll while shown.
  useEffect(() => {
    if (open && !done) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, done]);

  function dismiss() {
    setOpen(false);
    markDone();
    trackExitCaptureDismiss();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await submitToSheet({
        name: "",
        phone: phone.trim(),
        city: "",
        legalIssue: "exit-intent-callback",
        description: `Exit-intent quick callback request from ${window.location.pathname}`,
      });
      trackExitCaptureSubmit();
      markDone();
      setDone(true);
      window.setTimeout(() => setOpen(false), 2600);
    } catch {
      alert("Something went wrong. Please call us directly at +91 98686 66715.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-capture-title"
        className="relative z-10 w-full max-w-md rounded-2xl border border-gold/20 bg-dark shadow-2xl shadow-black/50 animate-modalSlideUp"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="px-6 py-8 sm:px-8">
          {done ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center text-center py-4">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl icon-gold gold-glow-md">
                <CheckCircle2 className="h-8 w-8 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white heading-glow">Got it — talk soon!</h3>
              <p className="mt-2 text-sm text-gray-400">A NyaySevak advisor will call you back shortly.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold/50" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  Before You Go
                </p>
              </div>
              <h3 id="exit-capture-title" className="text-xl sm:text-2xl font-heading font-bold text-white heading-glow">
                Get a free call back in 5 minutes
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Leave your number and a verified lawyer will call you for a paid case assessment — a nominal fee, no obligation to proceed.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label htmlFor="exit-phone" className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    Phone Number
                  </label>
                  <input
                    id="exit-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 98686 66715"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-shine rounded-xl w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Requesting…
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                    </>
                  ) : (
                    <>
                      Call Me Back
                      <Phone className="h-4 w-4" strokeWidth={2} />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold/50" strokeWidth={1.5} />
                  100% confidential · We never share your number
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
