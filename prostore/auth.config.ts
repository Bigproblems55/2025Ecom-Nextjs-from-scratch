import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

const authConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [],
  callbacks: {
    authorized({ request, auth }) {
      // Array of regex patterns of paths we want to protect
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];
      // Get pathname from the req url object
      const {pathname} = request.nextUrl;
      // Check if user is not authenticated and accessing a protected path
      if (!auth && protectedPaths.some((path) => path.test(pathname))) return false;
      if (request.cookies.has("sessionCartId")) {
        return true;
      }

      const response = NextResponse.next();
      response.cookies.set("sessionCartId", crypto.randomUUID(), {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;
