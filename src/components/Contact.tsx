"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Siren, MessageSquare, UserCheck, Scale, Phone, Mail,
  User, MapPin, Briefcase, FileText, Send, ShieldCheck, CheckCircle2,
  Clock, Star, Loader2,
} from "lucide-react";
import { submitToSheet } from "@/lib/submitToSheet";
import { trackContactFormSubmit, trackPhoneClick } from "@/lib/analytics";

const processSteps = [
  { Icon: MessageSquare, label: "Tell us your concern", desc: "Share your legal matter in confidence" },
  { Icon: UserCheck, label: "Get matched with a specialist", desc: "We find the right expert for your case" },
  { Icon: Scale, label: "Receive expert guidance", desc: "Get clear, actionable legal advice" },
];

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", city: "", legalIssue: "", description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToSheet(formData);
      trackContactFormSubmit("contact_section");
      setSubmitted(true);
      setFormData({ name: "", phone: "", city: "", legalIssue: "", description: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      alert("Something went wrong. Please try again or call us at +91 98686 66715.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact NyaySevak for legal consultation">
      {/* Emergency banner — full width */}
      <div className="relative bg-dark-deep border-y border-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.04] via-transparent to-gold/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-8 w-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 gold-glow-sm">
              <Siren className="h-4 w-4 text-gold" strokeWidth={2} />
            </div>
            <p className="text-sm sm:text-base text-gold font-semibold">
              Available 24/7 for Emergencies
            </p>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              href="tel:+91 98686 66715"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
              Call Now: +91 98686 66715
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left side (45%) */}
        <div className="relative flex flex-col justify-center bg-dark-deep px-4 sm:px-6 py-16 sm:py-20 lg:w-[45%] lg:px-10 xl:px-16 lg:py-24 overflow-hidden dark-section-depth">
          <div className="absolute inset-0 z-0">
            <Image
              src="/contact-image.png"
              alt="Legal consultation and professional lawyer services in India"
              fill
              quality={75}
              className="object-cover opacity-[0.3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/90 to-dark-deep/70" />
          </div>

          {/* Glow orb */}
          <div className="glow-pulse pointer-events-none absolute top-[20%] right-[-15%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_65%)]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">
                Free Consultation
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-white heading-glow">
              Get Expert Legal Help
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
              Connect with verified legal professionals and get the guidance you deserve. Your first consultation is completely free.
            </p>

            {/* Process steps */}
            <div className="mt-10 sm:mt-12 space-y-1">
              {processSteps.map((step, i) => (
                <div key={step.label} className="relative">
                  <div className="flex items-start gap-4 py-4">
                    <div className="relative z-10">
                      <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-xl icon-box-dark flex items-center justify-center shrink-0">
                        <step.Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="pt-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold/50 font-bold">
                        Step {i + 1}
                      </span>
                      <p className="text-sm sm:text-base text-white font-semibold mt-0.5">{step.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-6 top-[68px] w-px h-4 bg-gradient-to-b from-gold/25 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* Compact contact info */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/[0.08] space-y-3.5">
              <a href="tel:+919868666715" onClick={() => trackPhoneClick()} className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">+91 98686 66715</span>
              </a>
              <a href="mailto:nyaysevak@gmail.com" className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">nyaysevak@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right side (55%) — Form */}
        <div className="relative flex flex-col justify-center bg-dark px-4 sm:px-6 py-16 sm:py-20 lg:w-[55%] lg:px-10 xl:px-16 lg:py-24 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10">
            <h3 className="mb-2 text-xl sm:text-2xl font-heading font-bold text-white heading-glow">
              Request a Consultation
            </h3>
            <p className="mb-8 sm:mb-10 text-sm text-gray-500">
              Fill in the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl icon-gold gold-glow-md">
                  <CheckCircle2 className="h-10 w-10 text-black" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-heading font-bold text-white heading-glow">Thank You!</h4>
                <p className="mt-2 text-sm text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" aria-label="Legal consultation request form">
                {/* Row 1: Name + Phone */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <User className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 sm:py-4 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98686 66715"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 sm:py-4 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                    />
                  </div>
                </div>

                {/* Row 2: City + Legal Issue */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <MapPin className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      City / District
                    </label>
                    <input
                      type="text"
                      placeholder="Your city or district"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 sm:py-4 text-sm text-white placeholder-gray-600 transition-all duration-300 hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <Briefcase className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      Legal Issue
                    </label>
                    <div className="relative">
                      <select
                        value={formData.legalIssue}
                        onChange={(e) => setFormData({ ...formData, legalIssue: e.target.value })}
                        className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 sm:py-4 pr-10 text-sm text-gray-500 transition-all duration-300 appearance-none hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 [&>option]:bg-[#1a1a2e] [&>option]:text-white [&>option]:py-2"
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
                  <label className="mb-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <FileText className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                    Brief Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your legal matter briefly..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.1] bg-dark-card px-4 py-3.5 sm:py-4 text-sm text-white placeholder-gray-600 transition-all duration-300 resize-none hover:border-gold/20 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 focus:bg-dark-card/80"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-shine rounded-xl w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-6 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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

                {/* Trust badges row */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
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
    </section>
  );
}
