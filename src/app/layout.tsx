import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Serif_Display, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  style: "normal",
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

const siteUrl = "https://foglight.xyz";

const siteTitle = "Foglight — Private by default, compliant by design";
const siteDescription =
  "Onchain privacy that's user-friendly and legally compliant. Plug-and-play with existing apps & EVM networks. Lightning fast, zero fees.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Foglight",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      className={`${dmSerifDisplay.variable} ${playfairDisplay.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
