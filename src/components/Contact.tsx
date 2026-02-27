"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left half — Dark */}
        <div className="flex flex-col justify-center bg-black px-4 sm:px-6 py-16 sm:py-20 lg:w-1/2 lg:px-12 xl:px-16 lg:py-28 xl:py-32">
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70">
            Let&apos;s Connect
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-white">
            Get In Touch
          </h2>

          <div className="mt-4 h-px w-12 sm:w-16 bg-gold" />

          <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold/60 mb-1.5 sm:mb-2">Phone</p>
                <p className="text-base sm:text-lg text-white font-medium">+91 XXXXX XXXXX</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Mon-Sat, 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold/60 mb-1.5 sm:mb-2">Email</p>
                <p className="text-base sm:text-lg text-white font-medium">info@nyaysevak.com</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">We respond within 24 hours</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold/60 mb-1.5 sm:mb-2">Office</p>
                <p className="text-base sm:text-lg text-white font-medium">New Delhi, India</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Pan-India legal services coverage</p>
              </div>
            </div>
          </div>

          {/* Emergency banner */}
          <div className="mt-10 sm:mt-12 rounded-2xl bg-gold/5 border border-gold/20 p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gold">Available 24/7 for Emergencies</p>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-500">
                  Urgent bail matters, arrest situations, and time-sensitive legal needs — we&apos;re here round the clock.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right half — Cream */}
        <div className="flex flex-col justify-center bg-cream px-4 sm:px-6 py-16 sm:py-20 lg:w-1/2 lg:px-12 xl:px-16 lg:py-28 xl:py-32">
          <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-heading font-bold text-gray-900">
            Send Us a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
              <div className="mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gold/10">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900">Thank You!</h4>
              <p className="mt-2 text-sm text-gray-500">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">Service Type</label>
                  <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-3.5 text-sm text-gray-500 transition-all duration-300 appearance-none hover:border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20">
                    <option value="">Select a service</option>
                    <option value="civil">Civil Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family &amp; Matrimonial</option>
                    <option value="property">Property &amp; Real Estate</option>
                    <option value="corporate">Corporate &amp; Business</option>
                    <option value="tax">Tax Law</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="consumer">Consumer Protection</option>
                    <option value="arbitration">Arbitration &amp; ADR</option>
                    <option value="documentation">Documentation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 sm:mb-2 block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your legal matter briefly..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 sm:py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 resize-none hover:border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl w-full bg-gold px-6 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-widest text-black hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-center text-[11px] sm:text-xs text-gray-400">
                Your information is kept strictly confidential under attorney-client privilege.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
