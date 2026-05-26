import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foglight.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foglight - Pilot private flows on existing EVM rails",
  description:
    "Per-customer privacy-pool infrastructure for regulated wallets, chains, stablecoin issuers, and neobanks testing private EVM flows with authorized compliance visibility.",
  openGraph: {
    title: "Foglight - Pilot private flows on existing EVM rails",
    description:
      "Per-customer privacy-pool infrastructure for regulated EVM pilots.",
    url: siteUrl,
    siteName: "Foglight",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foglight - Pilot private flows on existing EVM rails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foglight - Pilot private flows on existing EVM rails",
    description:
      "Per-customer privacy-pool infrastructure for regulated EVM pilots.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
