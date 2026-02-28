import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService"],
  name: "NyaySevak",
  description:
    "India's first complete legal ecosystem. Access Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://nyaysevak.com",
  logo: "https://nyaysevak.com/logo.jpeg",
  image: "https://nyaysevak.com/logo.jpeg",
  areaServed: {
    "@type": "Country",
    name: "India",
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
  sameAs: [
    "https://www.facebook.com/nyaysevak",
    "https://www.twitter.com/nyaysevak",
    "https://www.linkedin.com/company/nyaysevak",
    "https://www.instagram.com/nyaysevak",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nyaysevak.com"),
  title: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
  description:
    "India's first complete legal ecosystem. Get access to Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses. B2B + B2C legal services platform.",
  keywords:
    "legal services India, lawyer consultation online, find lawyer India, Supreme Court advocate, High Court lawyer, legal services platform, corporate legal advisory, compliance management, arbitration India, NyaySevak, legal aid India, property lawyer, criminal lawyer, family lawyer, divorce lawyer India, NCLT lawyer, tax lawyer, IP lawyer India",
  authors: [{ name: "NyaySevak" }],
  creator: "NyaySevak",
  publisher: "NyaySevak",
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
    siteName: "NyaySevak",
    title: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
    description:
      "India's first complete legal ecosystem offering A-Z legal services across all courts, tribunals & arbitration centres. B2B + B2C platform for individuals and businesses.",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "NyaySevak - Defending Your Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NyaySevak - India's Premier Legal Services Platform",
    description:
      "Complete A-Z legal services across Supreme Court, High Courts, District Courts, Tribunals & Arbitration centres.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpeg" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-black text-white font-body`}
      >
        <NavigationProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
