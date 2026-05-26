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
          background: "#0047FF",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "82px",
              height: "82px",
              borderRadius: "24px",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0047FF",
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            F
          </div>
          <div style={{ fontSize: "44px", fontWeight: 700, letterSpacing: "-0.06em" }}>Foglight</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "21px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Existing EVM chains
          </div>
          <div
            style={{
              marginTop: "28px",
              maxWidth: "930px",
              fontSize: "76px",
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: "-0.075em",
            }}
          >
            Compliant Privacy Infrastructure
          </div>
          <div style={{ marginTop: "30px", maxWidth: "830px", fontSize: "30px", lineHeight: 1.28, opacity: 0.78 }}>
            Per-customer privacy pools for regulated wallets, chains, and neobanks.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
