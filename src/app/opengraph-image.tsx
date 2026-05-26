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
  const [baskervville, inter700, geistMono800] = await Promise.all([
    readFile(join(fontDir, "Baskervville-Regular.ttf")),
    readFile(join(fontDir, "Inter-700.ttf")),
    readFile(join(fontDir, "GeistMono-800.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 38,
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
            opacity: 0.24,
            background:
              "repeating-linear-gradient(0deg, rgba(238,247,255,0.07) 0 1px, transparent 1px 4px), radial-gradient(circle at 74% 38%, rgba(0,71,255,0.28), transparent 360px)",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            border: "2px solid rgba(238,247,255,0.78)",
            borderRadius: 28,
            background:
              "linear-gradient(180deg, rgba(248,251,255,0.96), rgba(220,232,243,0.84))",
            color: "#10110F",
            boxShadow: "0 0 42px rgba(238,247,255,0.22), 0 0 90px rgba(0,71,255,0.18)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.55,
              background:
                "repeating-linear-gradient(0deg, rgba(7,10,8,0.24) 0 1px, rgba(255,255,255,0.14) 1px 2px, transparent 2px 5px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 62,
              left: 66,
              right: 66,
              display: "flex",
              justifyContent: "space-between",
              color: "rgba(16,17,15,0.62)",
              fontFamily: "Geist Mono",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 3.2,
              textTransform: "uppercase",
            }}
          >
            <span>Compliant Privacy Infrastructure</span>
            <span>EVM Rails</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: 66,
              top: 142,
              width: 720,
              fontFamily: "Baskervville",
              fontSize: 82,
              lineHeight: 1.04,
              letterSpacing: -3.2,
              textShadow: "0 0 18px rgba(255,255,255,0.28)",
            }}
          >
            The privacy of a financial account, on public chains.
          </div>
          <div
            style={{
              position: "absolute",
              left: 66,
              bottom: 72,
              width: 720,
              color: "rgba(16,17,15,0.72)",
              fontSize: 25,
              lineHeight: 1.34,
              letterSpacing: -0.4,
            }}
          >
            Per-customer privacy pools. Operator-held viewing keys. Existing EVM chains.
          </div>
          <div
            style={{
              position: "absolute",
              right: 54,
              bottom: 44,
              width: 220,
              height: 220,
              borderRadius: 999,
              border: "2px solid rgba(238,247,255,0.85)",
              background: "rgba(5,6,4,0.92)",
              boxShadow: "0 0 34px rgba(0,71,255,0.28), inset 0 0 28px rgba(238,247,255,0.16)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Baskervville", data: baskervville, style: "normal", weight: 400 },
        { name: "Inter", data: inter700, style: "normal", weight: 700 },
        { name: "Geist Mono", data: geistMono800, style: "normal", weight: 800 },
      ],
    },
  );
}
