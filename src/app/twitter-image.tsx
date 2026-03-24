import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "NyaySevak - India's Premier Legal Services Platform | Defending Your Rights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #081325 0%, #0a0a0a 50%, #081325 100%)",
          position: "relative",
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #C9A84C, #e8c55a, #C9A84C, transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            India&apos;s Premier Legal Platform
          </span>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #C9A84C, #e8c55a, #C9A84C)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "8px",
              lineHeight: 1.1,
            }}
          >
            NYAYSEVAK
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#ffffff",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            Defending Your Rights
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Supreme Court &bull; 25 High Courts &bull; 700+ District Courts &bull; All Tribunals &bull; 29 Practice Areas
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
