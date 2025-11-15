// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Корневой путь "/"
  if (url.pathname === '/') {
    // Прод: .com → EN
    if (hostname === 'adpilote.com' || hostname === 'www.adpilote.com') {
      url.pathname = '/en';
      return NextResponse.rewrite(url);
    }

    // Прод: .fr → FR
    if (hostname === 'adpilote.fr' || hostname === 'www.adpilote.fr') {
      url.pathname = '/fr';
      return NextResponse.rewrite(url);
    }

    // Dev: localhost → EN
    if (hostname.startsWith('localhost')) {
      url.pathname = '/en';
      return NextResponse.rewrite(url);
    }
  }

  // Всё остальное отдаём как есть
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/en/:path*', '/fr/:path*'],
};