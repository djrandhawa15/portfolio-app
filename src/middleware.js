import { auth0 } from "./lib/auth0";
import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("🔍 Middleware called for:", request.nextUrl.pathname);

  try {
    const response = await auth0.middleware(request);
    console.log("✅ Middleware response status:", response?.status);
    return response;
  } catch (error) {
    // Handle JWE errors (invalid/old session cookies)
    if (error.code === "ERR_JWE_INVALID" || error.message?.includes("JWE")) {
      console.log("⚠️ Invalid session cookie, clearing it");
      // Clear the invalid session cookie and allow the request to proceed
      const response = NextResponse.next();
      response.cookies.delete("appSession");
      return response;
    }
    throw error;
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
