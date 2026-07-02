import { ImageResponse } from "next/og";

// Required for `output: "export"` — the image is generated at build time.
export const dynamic = "force-static";

export const alt = "Jangara Bliss — AI systems for the physical world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0d12",
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "96px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#94a0b4",
            }}
          >
            COMPUTER ENGINEERING · AI SYSTEMS · PHYSICAL WORLD
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "72px",
              fontWeight: 600,
              color: "#e7eaf0",
            }}
          >
            Jangara Bliss
          </div>
          <div
            style={{
              marginTop: "18px",
              fontSize: "34px",
              color: "#7aa5ff",
            }}
          >
            Building AI systems for the physical world.
          </div>
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#5d6a80",
          }}
        >
          janga786.github.io
        </div>
      </div>
    ),
    { ...size },
  );
}
