import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black">
        {/* Top gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">
          {/* Large brand */}
          <div className="mb-20 text-center">
            <Image
              src="/logo.jpeg"
              alt="NyaySevak Logo"
              width={100}
              height={100}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="text-5xl font-heading font-bold tracking-[0.2em] text-white lg:text-6xl">
              NYAYSEVAK
            </h2>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold/70">
              Defending Your Rights
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-500">
              India&apos;s first complete legal ecosystem. Connecting citizens, businesses, and legal
              professionals across the entire Indian judicial system.
            </p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Quick Links */}
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: All 26 Practice Areas */}
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                Practice Areas
              </h4>
              <ul className="space-y-3">
                {practiceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/practice-areas/${area.slug}`} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: All 12 Services */}
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                Services
              </h4>
              <ul className="space-y-3">
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                Contact Us
              </h4>
              <div className="space-y-5 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>info@nyaysevak.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-20 border-t border-white/5 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-600">
                &copy; 2026 NyaySevak. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="text-xs text-gray-600 transition-colors hover:text-white">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-xs text-gray-600 transition-colors hover:text-white">Terms of Service</Link>
                <Link href="/disclaimer" className="text-xs text-gray-600 transition-colors hover:text-white">Disclaimer</Link>
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
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
