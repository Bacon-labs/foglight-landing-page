import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foglight.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foglight - Compliant Privacy Infrastructure for EVM Chains",
  description:
    "Per-customer privacy pools that let regulated wallets, chains, and neobanks offer bank-level user privacy without launching a new L1.",
  openGraph: {
    title: "Foglight - Compliant Privacy Infrastructure for EVM Chains",
    description:
      "Per-customer privacy pools for regulated wallets, chains, and neobanks on existing EVM chains.",
    url: siteUrl,
    siteName: "Foglight",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foglight - Compliant Privacy Infrastructure for Existing EVM Chains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foglight - Compliant Privacy Infrastructure for EVM Chains",
    description:
      "Per-customer privacy pools for regulated wallets, chains, and neobanks on existing EVM chains.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
