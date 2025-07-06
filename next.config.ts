import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$primary-blue: #3164f4; $bg-gray: #ededed;`,
  },
};

export default nextConfig;
