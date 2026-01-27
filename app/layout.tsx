import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://combstruct.com";

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Combstruct | Patented Building Technology",
    template: "%s | Combstruct",
  },
  description:
    "Patented comb-beam technology. Build homes 45% cheaper, 5x faster, with passive house performance (U=0.09) and 4x lower CO2 footprint.",
  keywords: [
    "modular construction",
    "prefab homes",
    "sustainable building",
    "comb-beam technology",
    "passive house",
    "fast construction",
    "eco-friendly homes",
    "affordable housing",
  ],
  authors: [{ name: "Combstruct" }],
  creator: "Combstruct",
  publisher: "Combstruct",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pl_PL", "de_DE"],
    url: siteUrl,
    siteName: "Combstruct",
    title: "Combstruct | Patented Building Technology",
    description:
      "Patented comb-beam technology. Build homes 45% cheaper, 5x faster, with passive house performance (U=0.09) and 4x lower CO2 footprint.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Combstruct - Sustainable modular building technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Combstruct | Patented Building Technology",
    description:
      "Build homes 45% cheaper, 5x faster, with passive house performance. Patented comb-beam technology.",
    images: ["/images/og-image.jpg"],
    creator: "@combstruct",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
