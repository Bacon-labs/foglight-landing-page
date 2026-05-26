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
          background: "radial-gradient(circle at 76% 18%, rgba(0,71,255,0.35), transparent 330px), radial-gradient(circle at 12% 86%, rgba(215,161,42,0.18), transparent 280px), linear-gradient(145deg, #0D1110, #121815)",
          color: "#F3EBDD",
          padding: "62px",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "84px",
            top: "130px",
            width: "430px",
            height: "270px",
            border: "1px solid rgba(159, 200, 255, 0.22)",
            borderRadius: "999px",
            background: "rgba(243,235,221,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "248px",
            top: "225px",
            width: "96px",
            height: "96px",
            borderRadius: "26px",
            background: "#0047FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: "48px",
            fontWeight: 800,
            letterSpacing: "-0.08em",
            boxShadow: "0 22px 70px rgba(0,71,255,0.42)",
          }}
        >
          F
        </div>
        <div
          style={{
            position: "absolute",
            right: "108px",
            top: "278px",
            width: "250px",
            height: "2px",
            background: "linear-gradient(90deg, rgba(159,200,255,0), rgba(159,200,255,0.9), rgba(159,200,255,0))",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "20px",
              background: "#0047FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "38px",
              fontWeight: 800,
              letterSpacing: "-0.08em",
              boxShadow: "0 22px 70px rgba(0,71,255,0.28)",
            }}
          >
            F
          </div>
          <div style={{ fontSize: "35px", fontWeight: 700, letterSpacing: "-0.045em" }}>Foglight</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "820px" }}>
          <div
            style={{
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9FC8FF",
            }}
          >
            Privacy infrastructure for regulated EVM products
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "78px",
              lineHeight: 0.96,
              fontWeight: 400,
              letterSpacing: "-0.058em",
            }}
          >
            The privacy of a financial account, on public chains.
          </div>
          <div
            style={{
              marginTop: "26px",
              maxWidth: "760px",
              fontSize: "26px",
              lineHeight: 1.35,
              color: "rgba(243,235,221,0.64)",
            }}
          >
            Dedicated privacy pools for regulated EVM products, with authorized visibility for compliance, risk, and support teams.
          </div>
        </div>

        <div style={{ display: "flex", gap: "34px", color: "rgba(243,235,221,0.48)", fontSize: "19px" }}>
          <span>Dedicated pools</span>
          <span>Existing EVM rails</span>
          <span>Authorized visibility</span>
        </div>
      </div>
    ),
    size,
  );
}
