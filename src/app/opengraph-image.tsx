import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const scanline =
    "repeating-linear-gradient(0deg, rgba(16,17,15,0.13) 0 1px, transparent 1px 6px)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 42,
          position: "relative",
          overflow: "hidden",
          background: "#050604",
          color: "#EEF3F7",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.34,
            background: scanline,
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "2px solid rgba(238,243,247,0.78)",
            borderRadius: 18,
            background: "#EEF3F7",
            color: "#10110F",
          }}
        >
          <div
            style={{
              position: "relative",
              height: 410,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "40px 48px 42px",
              borderBottom: "2px solid #10110F",
              background: scanline,
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 42,
                top: 34,
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(16,17,15,0.22)",
                background: "#FFFFFF",
                color: "#0047FF",
                fontSize: 42,
                fontWeight: 800,
                letterSpacing: -5,
              }}
            >
              F
            </div>
            <div
              style={{
                position: "absolute",
                left: 46,
                top: 34,
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              Foglight
            </div>
            <div
              style={{
                marginBottom: 26,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "rgba(16,17,15,0.62)",
              }}
            >
              Privacy infrastructure for regulated operators
            </div>
            <div
              style={{
                width: 900,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 83,
                lineHeight: 0.84,
                letterSpacing: -7,
              }}
            >
              The privacy of a financial account, on public chains.
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              background: "#050604",
              color: "#EEF3F7",
            }}
          >
            {[
              ["Report", "Foglight"],
              ["Switch", "Public graph → privacy pool"],
              ["Outcome", "Records your team can produce"],
            ].map(([label, value], index) => (
              <div
                key={label}
                style={{
                  flex: index === 0 ? 0.75 : index === 1 ? 1.4 : 1.25,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 16,
                  padding: "24px 30px",
                  borderRight: "2px solid rgba(238,243,247,0.48)",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "rgba(238,243,247,0.56)",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
