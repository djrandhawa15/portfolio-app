import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  console.log("🔍 Middleware called for:", request.nextUrl.pathname);
  const response = await auth0.middleware(request);
  console.log("✅ Middleware response status:", response?.status);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
