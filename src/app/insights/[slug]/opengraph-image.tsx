import { ImageResponse } from "next/og";
import { articles, articlesBySlug, isArticleSlug } from "@/data/insights";
import { authorsBySlug } from "@/data/authors";

// Week 7: Per-article OG image — improves social-share CTR by giving each
// article a custom "headline card" instead of the generic site OG.
// Uses Node runtime + generateStaticParams so each article OG is prerendered.
export const alt = "NyaySevak — Indian Legal Insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  if (!isArticleSlug(params.slug)) {
    return fallback();
  }
  const article = articlesBySlug[params.slug];
  const author = authorsBySlug[article.authorSlug];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #081325 0%, #0a0a0a 50%, #081325 100%)",
          padding: "60px 70px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #C9A84C, #e8c55a, #C9A84C, transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "60%",
            width: "500px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              background: "linear-gradient(135deg, #C9A84C, #e8c55a)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NYAYSEVAK
          </div>
          <div
            style={{
              width: "1px",
              height: "26px",
              background: "rgba(201,168,76,0.35)",
            }}
          />
          <div
            style={{
              fontSize: "13px",
              color: "rgba(201,168,76,0.75)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {article.category}
          </div>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "rgba(201,168,76,0.85)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            {article.hero.eyebrow}
          </div>
          <h1
            style={{
              fontSize: article.title.length > 70 ? "48px" : "58px",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {article.title}
          </h1>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid rgba(201,168,76,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              By
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              {author?.name ?? "NyaySevak Legal Team"}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "rgba(201,168,76,0.7)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {article.readTimeMinutes} min read
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#C9A84C",
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.1em",
              }}
            >
              nyaysevak.com/insights
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

function fallback() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080704",
          color: "#C9A84C",
          fontSize: "48px",
          fontWeight: 700,
        }}
      >
        NyaySevak Insights
      </div>
    ),
    { ...size }
  );
}
