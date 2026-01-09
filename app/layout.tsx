import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Combstruct | Build Fast. Build to Last.",
  description:
    "Revolutionary modular building system for faster, sustainable, and affordable construction. Build your dream home in 30 days.",
  keywords: [
    "modular construction",
    "prefab homes",
    "sustainable building",
    "fast construction",
    "comb-beam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
