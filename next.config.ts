import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "localhost:3005", "127.0.0.1:3005"],
};

export default nextConfig;
