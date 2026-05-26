import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
          background: "#061139",
          color: "#FFFFFF",
          padding: "68px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-180px",
            top: "-110px",
            width: "720px",
            height: "720px",
            border: "1px solid rgba(159, 200, 255, 0.22)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "110px",
            width: "420px",
            height: "420px",
            border: "1px solid rgba(215, 161, 42, 0.32)",
            borderRadius: "50%",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontFamily: "Arial, Helvetica, sans-serif" }}>
          <div
            style={{
              width: "78px",
              height: "78px",
              borderRadius: "22px",
              background: "#0047FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            F
          </div>
          <div style={{ fontSize: "38px", fontWeight: 700, letterSpacing: "-0.04em" }}>Foglight</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9FC8FF",
            }}
          >
            Design-partner pilots
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "84px",
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: "-0.075em",
            }}
          >
            Pilot private flows on existing EVM rails.
          </div>
          <div
            style={{
              marginTop: "28px",
              maxWidth: "780px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "27px",
              lineHeight: 1.28,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Per-customer privacy pools for regulated EVM pilots with authorized compliance visibility.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
