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
  title: "Foglight - The privacy of a financial account, on public chains",
  description:
    "Privacy infrastructure for regulated operators, with customer-specific privacy pools on existing EVM chains.",
  openGraph: {
    title: "Foglight - The privacy of a financial account, on public chains",
    description:
      "Your users get bank-account privacy. Your compliance team keeps the keys. Runs on the EVM chains you already support.",
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
    title: "Foglight - The privacy of a financial account, on public chains",
    description:
      "Privacy infrastructure for regulated operators, with customer-specific privacy pools on existing EVM chains.",
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
