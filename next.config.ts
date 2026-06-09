import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision", "@sanity/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
