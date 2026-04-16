"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import { allServices } from "@/data/services";
import { highCourts } from "@/data/courts";
import ContactButton from "./ContactButton";
import { trackPhoneClick } from "@/lib/analytics";

// Top high courts by search volume
const topCourts = [
  highCourts.find(c => c.slug === "delhi-high-court"),
  highCourts.find(c => c.slug === "bombay-high-court"),
  highCourts.find(c => c.slug === "madras-high-court"),
  highCourts.find(c => c.slug === "calcutta-high-court"),
  highCourts.find(c => c.slug === "karnataka-high-court"),
  highCourts.find(c => c.slug === "allahabad-high-court"),
  highCourts.find(c => c.slug === "gujarat-high-court"),
  highCourts.find(c => c.slug === "punjab-haryana-high-court"),
  highCourts.find(c => c.slug === "telangana-high-court"),
  highCourts.find(c => c.slug === "rajasthan-high-court"),
].filter(Boolean) as typeof highCourts;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About NyaySevak", href: "/about" },
  { label: "Legal Services", href: "/services" },
  { label: "How It Works", href: "/platform" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Court Coverage", href: "/courts" },
  { label: "Platform Features", href: "/features" },
];

// High-traffic practice areas for SEO internal linking
const displayPracticeAreas = [
  practiceAreas.find(a => a.slug === "criminal-law"),
  practiceAreas.find(a => a.slug === "civil-law"),
  practiceAreas.find(a => a.slug === "family-matrimonial"),
  practiceAreas.find(a => a.slug === "property-real-estate"),
  practiceAreas.find(a => a.slug === "corporate-business"),
  practiceAreas.find(a => a.slug === "cyber-law"),
  practiceAreas.find(a => a.slug === "consumer-protection"),
  practiceAreas.find(a => a.slug === "tax-law"),
  practiceAreas.find(a => a.slug === "banking-finance"),
  practiceAreas.find(a => a.slug === "labour-employment"),
  practiceAreas.find(a => a.slug === "intellectual-property"),
  practiceAreas.find(a => a.slug === "arbitration-adr"),
  practiceAreas.find(a => a.slug === "cbi-cases"),
  practiceAreas.find(a => a.slug === "ed-cases"),
  practiceAreas.find(a => a.slug === "ndps-cases"),
].filter(Boolean) as typeof practiceAreas;

export default function Footer() {
  return (
    <>
      <footer className="relative bg-dark-deep overflow-hidden dark-section-depth" role="contentinfo" aria-label="Site footer">
        {/* Top gold gradient band */}
        <div className="section-separator" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8">
          {/* Brand */}
          <div className="mb-14 text-center">
            <Image
              src="/logo.png"
              alt="NyaySevak Logo"
              width={72}
              height={72}
              className="mx-auto mb-5 rounded-full shadow-lg shadow-gold/15 ring-2 ring-gold/20"
            />
            <h2 className="text-3xl font-heading font-bold tracking-[0.15em] gradient-text-gold lg:text-4xl">
              NYAYSEVAK
            </h2>
            <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
              Defending Your Rights
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
              India&apos;s first complete legal ecosystem. Connecting citizens, businesses, and legal
              professionals across the entire Indian judicial system.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12" />

          {/* 4-Column Grid - Maximum internal linking for SEO */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Quick Links + Contact Info */}
            <div>
              <h4 className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Quick Links
              </h4>
              <ul className="space-y-2.5 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white link-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ContactButton className="text-sm text-gray-400 transition-colors duration-200 hover:text-white link-underline cursor-pointer bg-transparent border-none p-0">
                    Contact Us
                  </ContactButton>
                </li>
              </ul>

              <h4 className="mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <a href="tel:+919868666715" onClick={() => trackPhoneClick()} className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>+91 98686 66715</span>
                </a>
                <a href="mailto:nyaysevak@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <Mail className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>nyaysevak@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Col 2: Practice Areas (top high-traffic areas) */}
            <div>
              <h4 className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Practice Areas
              </h4>
              <ul className="space-y-2.5">
                {displayPracticeAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/practice-areas/${area.slug}`} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white link-underline">
                      {area.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/practice-areas" className="inline-flex items-center gap-1.5 text-sm text-gold/70 font-semibold hover:text-gold transition-colors duration-200">
                    View All {practiceAreas.length} Areas
                    <ArrowRight className="h-3 w-3" strokeWidth={2} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Legal Services
              </h4>
              <ul className="space-y-2.5">
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white link-underline">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Top Courts - NEW for SEO internal linking */}
            <div>
              <h4 className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Top Courts
              </h4>
              <ul className="space-y-2.5">
                {topCourts.map((court) => (
                  <li key={court.slug}>
                    <Link href={`/courts/${court.slug}`} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white link-underline">
                      {court.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/courts" className="inline-flex items-center gap-1.5 text-sm text-gold/70 font-semibold hover:text-gold transition-colors duration-200">
                    View All Courts
                    <ArrowRight className="h-3 w-3" strokeWidth={2} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-600">
                &copy; 2026 NyaySevak. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="text-xs text-gray-600 transition-colors hover:text-gray-300">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-xs text-gray-600 transition-colors hover:text-gray-300">Terms of Service</Link>
                <Link href="/disclaimer" className="text-xs text-gray-600 transition-colors hover:text-gray-300">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Week 5: Floating WhatsApp+Call bar moved to FloatingContactBar.tsx and mounted globally in layout.tsx */}
    </>
  );
}
