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
  title: "Foglight - Compliant privacy for existing EVM rails",
  description:
    "Foglight lets wallets, chains, stablecoin issuers, and neobanks add private balances and transactions without launching a new network or losing compliance visibility.",
  openGraph: {
    title: "Foglight - Compliant privacy for existing EVM rails",
    description:
      "Private account infrastructure for existing EVM chains, wallets, stablecoin issuers, and neobanks.",
    url: siteUrl,
    siteName: "Foglight",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foglight - Privacy for existing EVM rails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foglight - Compliant privacy for existing EVM rails",
    description:
      "Private account infrastructure for existing EVM chains, wallets, stablecoin issuers, and neobanks.",
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
