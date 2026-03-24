import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ContactModal from "@/components/ContactModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ContactModalProvider } from "@/context/ContactModalContext";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService"],
  "@id": "https://nyaysevak.com/#organization",
  name: "NyaySevak",
  alternateName: "NyaySevak Legal Services",
  description:
    "India's first complete legal ecosystem. Access Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://nyaysevak.com",
  logo: {
    "@type": "ImageObject",
    url: "https://nyaysevak.com/logo.png",
    width: 800,
    height: 800,
  },
  image: "https://nyaysevak.com/logo.png",
  areaServed: {
    "@type": "Country",
    name: "India",
    "@id": "https://en.wikipedia.org/wiki/India",
  },
  serviceType: [
    "Legal Consultation",
    "Lawyer Hiring",
    "Document Services",
    "Corporate Legal Advisory",
    "Compliance Management",
    "Contract Management",
    "IP Management",
    "Litigation Management",
    "Arbitration & ADR",
    "E-filing Assistance",
    "Legal Aid",
  ],
  knowsAbout: [
    "Indian Law",
    "Supreme Court of India",
    "High Courts of India",
    "District Courts",
    "Tribunals",
    "Arbitration",
    "Corporate Law",
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Property Law",
    "Intellectual Property",
  ],
  slogan: "Defending Your Rights",
  sameAs: [
    "https://www.facebook.com/nyaysevak",
    "https://www.twitter.com/nyaysevak",
    "https://www.linkedin.com/company/nyaysevak",
    "https://www.instagram.com/nyaysevak",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9868666715",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nyaysevak.com/#website",
  name: "NyaySevak",
  alternateName: "NyaySevak - Defending Your Rights",
  url: "https://nyaysevak.com",
  publisher: { "@id": "https://nyaysevak.com/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nyaysevak.com/practice-areas?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nyaysevak.com"),
  title: {
    default: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
    template: "%s | NyaySevak",
  },
  description:
    "India's first complete legal ecosystem. Get access to Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses. B2B + B2C legal services platform.",
  keywords:
    "legal services India, lawyer consultation online, find lawyer India, Supreme Court advocate, High Court lawyer, legal services platform, corporate legal advisory, compliance management, arbitration India, NyaySevak, legal aid India, property lawyer, criminal lawyer, family lawyer, divorce lawyer India, NCLT lawyer, tax lawyer, IP lawyer India, best lawyer near me, online legal consultation, affordable lawyer India, verified advocate India, legal help online, hire lawyer online India, court representation India, bail lawyer India, business lawyer India",
  authors: [{ name: "NyaySevak" }],
  creator: "NyaySevak",
  publisher: "NyaySevak",
  alternates: {
    canonical: "https://nyaysevak.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nyaysevak.com",
    siteName: "NyaySevak",
    title: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
    description:
      "India's first complete legal ecosystem offering A-Z legal services across all courts, tribunals & arbitration centres. B2B + B2C platform for individuals and businesses.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "NyaySevak - Defending Your Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nyaysevak",
    creator: "@nyaysevak",
    title: "NyaySevak - India's Premier Legal Services Platform",
    description:
      "Complete A-Z legal services across Supreme Court, High Courts, District Courts, Tribunals & Arbitration centres.",
    images: ["/logo.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
      "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    },
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#080704" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-dark-deep text-white font-body`}
      >
        <ContactModalProvider>
          {/* Skip to content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-gold focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg"
          >
            Skip to main content
          </a>
          <ScrollToTop />
          <NavigationProgress />
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
