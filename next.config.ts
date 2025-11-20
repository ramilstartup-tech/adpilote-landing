// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // пока без i18n — используем обычные маршруты /en и /fr
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;