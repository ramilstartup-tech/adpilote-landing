// app/page.tsx
import { headers } from 'next/headers';
import { LandingPage } from './LandingPage';
import { landingContent } from './landingContent';
import type { Metadata } from 'next';

// Force dynamic rendering to read host header
export const dynamic = 'force-dynamic';

// Generate metadata dynamically based on domain
export async function generateMetadata(): Promise<Metadata> {
  const host = headers().get('host') || '';
  const lang = host.includes('.fr') ? 'fr' : 'en';

  return {
    title: landingContent[lang].meta.title,
    description: landingContent[lang].meta.description,
  };
}

export default function RootPage() {
  const host = headers().get('host') || '';

  // For .fr domain, render French version
  if (host.includes('.fr')) {
    return <LandingPage lang="fr" />;
  }

  // For all other domains (.com, localhost, etc.), render English version
  return <LandingPage lang="en" />;
}
