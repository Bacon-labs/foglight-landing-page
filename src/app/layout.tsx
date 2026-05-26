import type { Metadata } from "next";
import { Baskervville, Inter } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foglight.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foglight - Privacy for regulated EVM products",
  description:
    "Privacy infrastructure for regulated EVM products, with dedicated customer pools and authorized visibility workflows.",
  openGraph: {
    title: "Foglight - The privacy of a financial account, on public chains",
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
        alt: "Foglight - The privacy of a financial account, on public chains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foglight - Privacy for regulated EVM products",
    description:
      "Dedicated privacy pools on existing EVM rails, with authorized visibility workflows.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${baskervville.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
