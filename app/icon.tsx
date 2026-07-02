import { ImageResponse } from "next/og";

// Required for `output: "export"` — the icon is generated at build time.
export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#11161e",
          border: "1px solid rgba(148,163,184,0.3)",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#7aa5ff",
        }}
      >
        JB
      </div>
    ),
    { ...size },
  );
}
