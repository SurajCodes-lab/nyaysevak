import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Week 9: explicit AI-crawler allowlist for AEO/GEO discoverability.
// We want to be crawled by ChatGPT, Claude, Perplexity, Gemini and the wider
// generative-search ecosystem. The default "User-agent: *" allow rule is
// usually enough, but several AI crawlers respect ONLY a directive that
// names their user-agent explicitly (Google-Extended, OpenAI's two crawlers,
// Perplexity's two crawlers, Apple's separate AI crawler, etc). Naming each
// one removes ambiguity and is the form that the AI vendors document as the
// "opt-in" signal.
//
// The disallow list is the same on every rule: only Next.js internals
// (`/_next/`, `/_vercel/`) and the API route prefix. Everything else —
// including /llms.txt and /llms-full.txt — is allowed.
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/_next/", "/api/", "/_vercel/"];

  return {
    rules: [
      // Default — every other crawler.
      { userAgent: "*", allow: "/", disallow },

      // ── Classic search engines ──
      { userAgent: "Googlebot", allow: "/", disallow: ["/_next/", "/api/"] },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Googlebot-Video", allow: "/" },
      { userAgent: "Googlebot-News", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
      { userAgent: "Bingbot", allow: "/", disallow: ["/_next/", "/api/"] },
      { userAgent: "Slurp", allow: "/", disallow }, // Yahoo
      { userAgent: "DuckDuckBot", allow: "/", disallow },
      { userAgent: "YandexBot", allow: "/", disallow },
      { userAgent: "Baiduspider", allow: "/", disallow },
      { userAgent: "Applebot", allow: "/", disallow },

      // ── AI / generative-search crawlers (the GEO opt-in surface) ──
      // OpenAI runs three distinct crawlers. Naming each is the documented
      // way to grant training/answer-rendering access.
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow }, // on-demand fetch during a chat session
      { userAgent: "OAI-SearchBot", allow: "/", disallow }, // SearchGPT index crawler

      // Anthropic — two known user-agents.
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },
      { userAgent: "Claude-Web", allow: "/", disallow },

      // Google's separate AI-training opt-in token (distinct from Googlebot).
      // Allowing Google-Extended permits the page to be used in Gemini /
      // Bard / AI Overviews answer generation.
      { userAgent: "Google-Extended", allow: "/", disallow },

      // Perplexity — two known user-agents.
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Perplexity-User", allow: "/", disallow },

      // Apple's separate AI-training crawler.
      { userAgent: "Applebot-Extended", allow: "/", disallow },

      // Common Crawl (used as training corpus by many AI engines).
      { userAgent: "CCBot", allow: "/", disallow },

      // ByteDance / TikTok.
      { userAgent: "Bytespider", allow: "/", disallow },

      // Cohere.
      { userAgent: "cohere-ai", allow: "/", disallow },

      // You.com.
      { userAgent: "YouBot", allow: "/", disallow },

      // Meta / Facebook AI.
      { userAgent: "FacebookBot", allow: "/", disallow },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow },

      // Diffbot (powers several enterprise answer engines).
      { userAgent: "Diffbot", allow: "/", disallow },

      // Amazon's bot family.
      { userAgent: "Amazonbot", allow: "/", disallow },

      // Mistral.
      { userAgent: "MistralAI-User", allow: "/", disallow },

      // Allen Institute's AI2.
      { userAgent: "AI2Bot", allow: "/", disallow },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL,
  };
}
