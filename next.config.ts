import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "@tailwindcss/postcss": {},
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
