import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NyaySevak - Defending Your Rights",
    short_name: "NyaySevak",
    description:
      "India's first complete legal ecosystem. A-Z legal services across Supreme Court, High Courts, District Courts, Tribunals & Arbitration centres.",
    start_url: "/",
    display: "standalone",
    background_color: "#080704",
    theme_color: "#080704",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
