import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
  authRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
} from "./routes";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((request) => {
  const { nextUrl } = request;
  const isLogin = !!request.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute){
    return;
  }

  if(isAuthRoutes){
    if(isLogin){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }else{
        return;
    }
  }

  if(!isLogin && !isPublicRoutes){
    return Response.redirect(new URL("/login", nextUrl))
  }

  return;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
