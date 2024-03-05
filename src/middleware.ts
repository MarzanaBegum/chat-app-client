import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: ["/dashboard/(.*)"],
};
