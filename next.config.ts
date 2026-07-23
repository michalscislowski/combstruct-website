import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smallest), fall back to WebP, for all next/image assets.
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
