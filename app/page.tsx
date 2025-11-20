// app/page.tsx
import { headers } from 'next/headers';
import HomeEnPage from './en/page';
import HomeFrPage from './fr/page';

// Force dynamic rendering to read host header
export const dynamic = 'force-dynamic';

export default function RootPage() {
  const host = headers().get('host') || '';

  // For .fr domain, render French version
  if (host.includes('.fr')) {
    return <HomeFrPage />;
  }

  // For all other domains (.com, localhost, etc.), render English version
  return <HomeEnPage />;
}
