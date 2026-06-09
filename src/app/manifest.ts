import type { MetadataRoute } from "next";

// Week 7: PWA manifest — fuller field coverage for installability and
// improved indexing signal. Categories tell store-listing-style indexers
// what kind of site this is; lang/dir are accessibility signals.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NyaySevak — India's Legal Services Platform",
    short_name: "NyaySevak",
    description:
      "India's complete legal ecosystem. A-Z legal services across Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals, Arbitration centres, and the entire 8-city geographic legal landscape.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#080704",
    theme_color: "#080704",
    lang: "en-IN",
    dir: "ltr",
    categories: ["business", "productivity", "legal", "lifestyle"],
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Find a lawyer",
        short_name: "Lawyers",
        description: "Get matched with a verified lawyer by city",
        url: "/lawyers",
        icons: [{ src: "/logo.png", sizes: "192x192" }],
      },
      {
        name: "Practice areas",
        short_name: "Practice",
        description: "30 practice areas across Indian law",
        url: "/practice-areas",
        icons: [{ src: "/logo.png", sizes: "192x192" }],
      },
      {
        name: "Legal insights",
        short_name: "Insights",
        description: "Long-form Indian-law guides",
        url: "/insights",
        icons: [{ src: "/logo.png", sizes: "192x192" }],
      },
      {
        name: "Get consultation",
        short_name: "Contact",
        description: "Free first consultation",
        url: "/contact",
        icons: [{ src: "/logo.png", sizes: "192x192" }],
      },
    ],
  };
}
