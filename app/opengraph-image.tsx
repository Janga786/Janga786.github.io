import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Required for `output: "export"` — the image is generated at build time.
export const dynamic = "force-static";

export const alt = "Jangara Bliss — building and evaluating autonomous robots";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const background = await readFile(
    path.join(process.cwd(), "public/og/robotics-evidence-social.png"),
  );
  const backgroundSrc = `data:image/png;base64,${background.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0d12",
          overflow: "hidden",
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(7,10,15,0.98) 0%, rgba(7,10,15,0.92) 34%, rgba(7,10,15,0.42) 60%, rgba(7,10,15,0.08) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginTop: "88px",
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
            COMPUTER ENGINEERING · ROBOT LEARNING · AUTONOMY
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "70px",
              fontWeight: 600,
              color: "#e7eaf0",
            }}
          >
            Jangara Bliss
          </div>
          <div
            style={{
              marginTop: "18px",
              maxWidth: "620px",
              fontSize: "31px",
              color: "#7aa5ff",
            }}
          >
            Building and evaluating autonomous robots.
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            fontSize: "20px",
            color: "#7d899c",
          }}
        >
          RESEARCH · SYSTEMS · EVIDENCE
        </div>
      </div>
    ),
    { ...size },
  );
}
