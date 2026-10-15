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
    authorized({ request }) {
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
