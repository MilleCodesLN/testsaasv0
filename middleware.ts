import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifier si l'utilisateur est authentifié
  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  // et essaie d'accéder à une page protégée
  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", encodeURI(pathname))
    return NextResponse.redirect(url)
  }

  // Rediriger vers le tableau de bord si l'utilisateur est déjà authentifié
  // et essaie d'accéder à la page de connexion ou d'inscription
  if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
}
