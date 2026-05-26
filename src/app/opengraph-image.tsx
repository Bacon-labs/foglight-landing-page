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
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #F4F2EC 0%, #EFEEE8 100%)",
          color: "#10100E",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(16,16,14,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(16,16,14,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "56px",
            top: "78px",
            width: "392px",
            height: "440px",
            border: "2px solid #10100E",
            background: "#EEF2F6",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "200px",
              borderBottom: "2px solid #10100E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "52px",
              fontWeight: 800,
              letterSpacing: "-0.08em",
              color: "#0047FF",
            }}
          >
            Foglight
          </div>
          {[
            ["Model", "Dedicated pool"],
            ["Public view", "Settlement surface"],
            ["Authorized", "Record produced"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                height: "58px",
                borderBottom: "2px solid #10100E",
                fontSize: "17px",
              }}
            >
              <div
                style={{
                  width: "142px",
                  borderRight: "2px solid #10100E",
                  padding: "16px 16px",
                  color: "rgba(16,16,14,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </div>
              <div style={{ padding: "16px 16px", fontWeight: 700 }}>{value}</div>
            </div>
          ))}
          <div
            style={{
              height: "66px",
              background: "#10100E",
              color: "#FBF7ED",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "19px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Existing EVM rails
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "56px",
            top: "52px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              background: "#0047FF",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.05em" }}>Foglight</div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "56px",
            top: "154px",
            width: "590px",
            fontSize: "18px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(16,16,14,0.58)",
          }}
        >
          Compliant privacy infrastructure for existing EVM chains
        </div>
        <div
          style={{
            position: "absolute",
            left: "52px",
            bottom: "58px",
            width: "595px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "88px",
            lineHeight: 0.84,
            letterSpacing: "-0.075em",
          }}
        >
          Private flows on public chains.
        </div>
      </div>
    ),
    size,
  );
}
