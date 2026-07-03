import { ImageResponse } from "next/og";

export const alt = "AURA Hub — Smart Home Hub cho lối sống lành mạnh";
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
          background: "linear-gradient(135deg, #0f2e22 0%, #163d2c 55%, #1f5a3e 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 60,
            background: "#2f9e6f",
            marginBottom: 40,
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 20c8 0 12-6 12-16-10 0-16 5-16 12 0 2 1 4 4 4Z"
              fill="white"
            />
            <path d="M6 20c3-6 6-9 12-12" stroke="#0f2e22" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: -1,
          }}
        >
          AURA Hub
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#bfe8d4",
            marginTop: 20,
          }}
        >
          Smart Home Hub cho lối sống lành mạnh
        </div>
      </div>
    ),
    { ...size }
  );
}
