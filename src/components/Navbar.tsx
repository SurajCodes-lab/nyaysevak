"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactButton from "./ContactButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How\u00A0It\u00A0Works", href: "/platform" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Courts", href: "/courts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-deep/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/logo.png"
              alt="NyaySevak Logo"
              width={56}
              height={56}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-gold/20"
            />
            <span className="text-xl font-heading font-bold tracking-[0.15em] text-gold transition-colors duration-300 group-hover:text-gold-light lg:text-2xl">
              NYAYSEVAK
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <ContactButton
            className="btn-gold-shine hidden lg:inline-flex items-center rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
          >
            Get Consultation
          </ContactButton>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold translate-y-2 rotate-45" : "bg-gold"}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold opacity-0 scale-0" : "bg-gold"}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold -translate-y-2 -rotate-45" : "bg-gold"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — dramatic full-screen */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-dark-deep/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-4xl font-heading font-bold tracking-wide transition-all duration-300 ${
                pathname === link.href ? "text-gold" : "text-gray-300 hover:text-gold"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <ContactButton
            className="mt-6 border border-gold/40 px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10 cursor-pointer"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Get Consultation
          </ContactButton>
        </div>
      </div>
    </>
  );
}
