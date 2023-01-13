
import { NextResponse } from 'next/server'

export default function middleware(req) {
  const { cookies } = req;
  const token = cookies.get('nextToken');
  const authRoutes = ['/login', '/register'];

  if (token && authRoutes.some(r => req.nextUrl.pathname.startsWith(r))) {
    /** If user is logged in, don't let them visit auth pages */
    return NextResponse.redirect(new URL('/dashboard', req.url));
  } else if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else NextResponse.next();
}

/** Route paths to match - Middleware will only run on these paths only */
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}