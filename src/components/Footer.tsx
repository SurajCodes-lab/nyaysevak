import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import { allServices } from "@/data/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/platform" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Courts", href: "/courts" },
  { label: "Contact", href: "/contact" },
];

const displayPracticeAreas = practiceAreas.slice(0, 12);

export default function Footer() {
  return (
    <>
      <footer className="relative bg-dark-deep overflow-hidden dark-section-depth">
        {/* Top gold gradient band */}
        <div className="section-separator" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8">
          {/* Brand */}
          <div className="mb-14 text-center">
            <Image
              src="/logo.jpeg"
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

          {/* 3-Column Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              </ul>

              <h4 className="mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <Phone className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>+91 XXXXX XXXXX</span>
                </a>
                <a href="mailto:info@nyaysevak.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <Mail className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>info@nyaysevak.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg icon-box-dark flex items-center justify-center shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                  </div>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Col 2: Practice Areas (top 12 + View All) */}
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
                    View All 26 Areas
                    <ArrowRight className="h-3 w-3" strokeWidth={2} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/70">
                Services
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
