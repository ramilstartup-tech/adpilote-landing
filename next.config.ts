// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'adpilote.com',
        defaultLocale: 'en',
      },
      {
        domain: 'adpilote.fr',
        defaultLocale: 'fr',
      },
    ],
  },
};

export default nextConfig;