import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fontDir = join(process.cwd(), "src/app/fonts");
  const [baskervville, inter700, inter800] = await Promise.all([
    readFile(join(fontDir, "Baskervville-Regular.ttf")),
    readFile(join(fontDir, "Inter-700.ttf")),
    readFile(join(fontDir, "Inter-800.ttf")),
  ]);
  const scanline =
    "repeating-linear-gradient(0deg, rgba(16,22,26,0.07) 0 1px, rgba(255,255,255,0.05) 1px 2px, transparent 2px 7px)";

  const ledgerRows = [
    ["Public view", "Settlement surface only"],
    ["Customer pool", "Activity behind your boundary"],
    ["Team records", "Keys stay with your team"],
    ["Existing rails", "Supported EVM chains"],
  ];

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
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.28,
            background:
              "repeating-linear-gradient(0deg, rgba(238,243,247,0.035) 0 1px, transparent 1px 5px)",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "2px solid rgba(238,247,255,0.78)",
            borderRadius: 18,
            background: "#EEF3F7",
            color: "#10110F",
            boxShadow: "0 0 28px rgba(238,247,255,0.25)",
          }}
        >
          <div
            style={{
              position: "relative",
              height: 410,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "52px 52px 44px",
              borderBottom: "2px solid #10110F",
              background:
                "radial-gradient(circle at 22% 14%, rgba(255,255,255,0.94), transparent 220px), radial-gradient(circle at 76% 18%, rgba(0,71,255,0.10), transparent 300px), #EEF3F7",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.62,
                background: scanline,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 96,
                top: 118,
                width: 390,
                height: 160,
                border: "2px solid rgba(16,17,15,0.08)",
                transform: "rotate(-7deg)",
                boxShadow: "0 0 44px rgba(238,247,255,0.32)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 210,
                top: 260,
                width: 300,
                height: 92,
                border: "2px solid rgba(0,71,255,0.12)",
                transform: "rotate(6deg)",
                boxShadow: "0 0 42px rgba(238,247,255,0.24)",
              }}
            />
            <div
              style={{
                position: "relative",
                marginBottom: 28,
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "rgba(16,17,15,0.62)",
              }}
            >
              Privacy infrastructure for regulated operators
            </div>
            <div
              style={{
                position: "relative",
                width: 860,
                fontFamily: "Baskervville",
                fontSize: 87,
                lineHeight: 0.88,
                letterSpacing: -6.2,
                textShadow: "0 0 18px rgba(255,255,255,0.22)",
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
            {ledgerRows.map(([label, value]) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 10,
                  padding: "16px 24px",
                  borderRight: "2px solid rgba(238,243,247,0.44)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: 3.2,
                    textTransform: "uppercase",
                    color: "rgba(238,243,247,0.56)",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: 1.3,
                    lineHeight: 1.06,
                    textTransform: "uppercase",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Baskervville", data: baskervville, style: "normal", weight: 400 },
        { name: "Inter", data: inter700, style: "normal", weight: 700 },
        { name: "Inter", data: inter800, style: "normal", weight: 800 },
      ],
    },
  );
}
