import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: ['@svgr/webpack'], // Use SVGR loader
    });
    return config;
  },
};

export default nextConfig;
