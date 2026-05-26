import type { Metadata } from "next";
import { Baskervville, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foglight.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foglight - Private flows on public chains",
  description:
    "Compliant privacy infrastructure for existing EVM chains, with dedicated customer pools and authorized visibility workflows.",
  openGraph: {
    title: "Foglight - Private flows on public chains",
    description:
      "Dedicated privacy pools for regulated EVM products, with authorized visibility for compliance, risk, and support teams.",
    url: siteUrl,
    siteName: "Foglight",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foglight - Private flows on public chains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foglight - Private flows on public chains",
    description:
      "Compliant privacy infrastructure for existing EVM chains, with dedicated customer pools and authorized visibility workflows.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${baskervville.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
