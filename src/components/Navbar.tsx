"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How\u00A0It\u00A0Works", href: "/platform" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Courts", href: "/courts" },
  { label: "Contact", href: "/contact" },
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
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0 -ml-[30px]">
            <Image
              src="/logo.jpeg"
              alt="NyaySevak Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-lg font-heading font-bold tracking-[0.15em] text-gold transition-colors duration-300 group-hover:text-gold-light lg:text-xl">
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
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center border border-gold/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold"
          >
            Get Consultation
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold translate-y-2 rotate-45" : "bg-gold"}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold opacity-0 scale-0" : "bg-gold"}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "bg-gold -translate-y-2 -rotate-45" : "bg-gold"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — dramatic full-screen */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
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
          <Link
            href="/contact"
            className="mt-6 border border-gold/40 px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
