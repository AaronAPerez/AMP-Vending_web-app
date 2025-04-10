// middleware.ts
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // DEVELOPMENT ONLY: Bypass authentication checks
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.next();
    }

    const token = req.nextauth.token;
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
    
    // Check if the route requires admin access
    if (isAdminRoute) {
      // Redirect to login if not authenticated for admin routes
      if (!token) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }
      
      // Redirect non-admin users to an unauthorized page
      if (token.role !== 'admin') {
        return NextResponse.redirect(
          new URL('/unauthorized', req.url)
        );
      }
    }
    
    return NextResponse.next();
  },
  {
    callbacks: {
      // Skip auth check in development mode
      authorized: ({ token }) => {
        return process.env.NODE_ENV === 'development' ? true : !!token;
      },
    },
  }
);
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/admin')) {
//       const isAuthenticated = request.cookies.has('auth_token');
//       if (!isAuthenticated) {
//         return NextResponse.redirect(new URL('/login', request.url));
//       }
//     }
//     return NextResponse.next();
//   }