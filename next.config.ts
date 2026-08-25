import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "localhost:2026",
    "127.0.0.1:2026",
  ],
};

export default withPWA(nextConfig);
