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

        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
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
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
              }}
            >
              India&apos;s Premier Legal Platform
            </span>
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(201,168,76,0.6), transparent)",
              }}
            />
          </div>

          {/* Brand name */}
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

          {/* Tagline */}
          <p
            style={{
              fontSize: "28px",
              color: "#ffffff",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Defending Your Rights
          </p>

          {/* Diamond divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#C9A84C",
                transform: "rotate(45deg)",
              }}
            />
            <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
          </div>

          {/* Description */}
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

        {/* Bottom stats bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            padding: "20px 40px",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            background: "rgba(8,19,37,0.8)",
          }}
        >
          {[
            "B2B + B2C Services",
            "Verified Lawyers",
            "Pan-India Coverage",
            "24/7 Support",
          ].map((stat) => (
            <span
              key={stat}
              style={{
                fontSize: "13px",
                color: "rgba(201,168,76,0.7)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "40px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          nyaysevak.com
        </div>
      </div>
    ),
    { ...size }
  );
}
