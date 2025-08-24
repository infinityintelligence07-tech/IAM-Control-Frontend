// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Lê o token do NextAuth (cookies ou Authorization)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isHome = req.nextUrl.pathname === "/";

  if (isHome && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    url.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // protege apenas a home; adicione outras rotas se quiser
};
