import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkSession } from './lib/api/serverApi';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if (!accessToken && refreshToken) {
    try {
      const sessionResponse = await checkSession();

      if (sessionResponse && sessionResponse.status === 200 && sessionResponse.data) {
        const response = NextResponse.next();
        const setCookieHeader = sessionResponse.headers['set-cookie'];

        if (setCookieHeader) {
          setCookieHeader.forEach(cookie => {
            response.headers.append('Set-Cookie', cookie);
          });
        }

        accessToken = 'updated';

        if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
          const redirect = NextResponse.redirect(new URL('/', request.url));
          setCookieHeader?.forEach(c => redirect.headers.append('Set-Cookie', c));
          return redirect;
        }

        return response;
      }
    } catch (error) {
      console.error('Proxy session refresh error:', error);
    }
  }

  const isPrivatePage = pathname.startsWith('/profile') || pathname.startsWith('/notes');
  if (!accessToken && isPrivatePage) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  const isAuthPage = pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up');
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};
