import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Serif_Display, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/Inter-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Inter-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Inter-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Inter-700.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Inter-800.ttf", weight: "800", style: "normal" },
  ],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  display: "swap",
  src: [
    { path: "./fonts/GeistMono-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/GeistMono-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/GeistMono-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/GeistMono-700.ttf", weight: "700", style: "normal" },
    { path: "./fonts/GeistMono-800.ttf", weight: "800", style: "normal" },
  ],
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
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} ${playfairDisplay.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
