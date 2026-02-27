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
        <div className="flex flex-col justify-center bg-black px-6 py-20 lg:w-1/2 lg:px-16 lg:py-32">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/70">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight text-white lg:text-5xl">
            Get In Touch
          </h2>

          <div className="mt-4 h-px w-16 bg-gold" />

          <div className="mt-12 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-2">Phone</p>
              <p className="text-lg text-white font-medium">+91 XXXXX XXXXX</p>
              <p className="text-sm text-gray-500">Mon-Sat, 9:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-2">Email</p>
              <p className="text-lg text-white font-medium">info@nyaysevak.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-2">Office</p>
              <p className="text-lg text-white font-medium">New Delhi, India</p>
              <p className="text-sm text-gray-500">Pan-India legal services coverage</p>
            </div>
          </div>

          {/* Emergency banner */}
          <div className="mt-12 border border-gold/20 px-6 py-5">
            <p className="text-sm font-semibold text-gold">Available 24/7 for Emergencies</p>
            <p className="mt-1 text-xs text-gray-500">
              Urgent bail matters, arrest situations, and time-sensitive legal needs — we&apos;re here round the clock.
            </p>
          </div>
        </div>

        {/* Right half — Cream */}
        <div className="flex flex-col justify-center bg-cream px-6 py-20 lg:w-1/2 lg:px-16 lg:py-32">
          <h3 className="mb-8 text-2xl font-heading font-bold text-gray-900">
            Send Us a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center bg-gold/10">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="text-xl font-heading font-bold text-gray-900">Thank You!</h4>
              <p className="mt-2 text-gray-500">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">Service Type</label>
                  <select className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 transition-all duration-200 appearance-none hover:border-gray-400">
                    <option value="">Select a service</option>
                    <option value="civil">Civil Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family & Matrimonial</option>
                    <option value="property">Property & Real Estate</option>
                    <option value="corporate">Corporate & Business</option>
                    <option value="tax">Tax Law</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="consumer">Consumer Protection</option>
                    <option value="arbitration">Arbitration & ADR</option>
                    <option value="documentation">Documentation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your legal matter briefly..."
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none hover:border-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information is kept strictly confidential under attorney-client privilege.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
