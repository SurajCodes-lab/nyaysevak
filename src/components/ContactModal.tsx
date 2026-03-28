"use client";

import { useState, useEffect } from "react";
import {
  X, User, Phone, MapPin, Briefcase, FileText, Send,
  ShieldCheck, Clock, Star, CheckCircle2, Loader2,
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { submitToSheet } from "@/lib/submitToSheet";

const legalIssueOptions = [
  "Property Dispute",
  "Criminal Matter",
  "Family / Divorce",
  "Business / Corporate",
  "Labour / Employment",
  "Consumer Complaint",
  "Bail Application",
  "Documentation / Notary",
  "Other",
];

const trustBadges = [
  { Icon: ShieldCheck, label: "100% Confidential" },
  { Icon: Clock, label: "Response within 24hrs" },
  { Icon: Star, label: "4.8/5 Client Rating" },
];

export default function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", city: "", legalIssue: "", description: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, closeContactModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToSheet(formData);
      setSubmitted(true);
      setFormData({ name: "", phone: "", city: "", legalIssue: "", description: "" });
      setTimeout(() => {
        setSubmitted(false);
        closeContactModal();
      }, 3000);
    } catch {
      alert("Something went wrong. Please try again or call us at +91 98686 66715.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={closeContactModal}
      />

      {/* Modal */}
      <div role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" className="relative z-10 w-[95%] max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-dark shadow-2xl shadow-black/50 animate-modalSlideUp">
        {/* Close button */}
        <button
          onClick={closeContactModal}
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Close"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-0 sm:px-8 sm:pt-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">
              Free Consultation
            </p>
          </div>
          <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white heading-glow">
            Request a Consultation
          </h3>
          <p className="mt-1.5 text-sm text-gray-500">
            Fill in the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          {submitted ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl icon-gold gold-glow-md">
                <CheckCircle2 className="h-10 w-10 text-black" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-heading font-bold text-white heading-glow">Thank You!</h4>
              <p className="mt-2 text-sm text-gray-400">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Name + Phone */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <User className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3 sm:py-3.5 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98686 66715"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3 sm:py-3.5 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                  />
                </div>
              </div>

              {/* Row 2: City + Legal Issue */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <MapPin className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    City / District
                  </label>
                  <input
                    type="text"
                    placeholder="Your city or district"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3 sm:py-3.5 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <Briefcase className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    Legal Issue
                  </label>
                  <div className="relative">
                    <select
                      value={formData.legalIssue}
                      onChange={(e) => setFormData({ ...formData, legalIssue: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3 sm:py-3.5 pr-10 text-sm text-gray-500 transition-all duration-300 appearance-none hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 [&>option]:bg-[#1a1a2e] [&>option]:text-white [&>option]:py-2"
                    >
                      <option value="">Select an issue type</option>
                      {legalIssueOptions.map((opt) => (
                        <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Description */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <FileText className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  Brief Description
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your legal matter briefly..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3 sm:py-3.5 text-sm text-white placeholder-gray-600 transition-all duration-300 resize-none hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold-shine rounded-xl w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    Submitting...
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                  </>
                ) : (
                  <>
                    Book Free Consultation
                    <Send className="h-4 w-4" strokeWidth={2} />
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1">
                {trustBadges.map((badge) => {
                  const BadgeIcon = badge.Icon;
                  return (
                    <div key={badge.label} className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gold/[0.08] flex items-center justify-center">
                        <BadgeIcon className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                        {badge.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
