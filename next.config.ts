import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "localhost:2026",
    "127.0.0.1:2026",
  ],
};

export default nextConfig;
