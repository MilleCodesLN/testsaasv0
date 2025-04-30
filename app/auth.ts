import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail, verifyPassword } from "@/lib/user-service"

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Récupérer l'utilisateur par email
        const user = await getUserByEmail(credentials.email)
        if (!user) {
          return null
        }

        // Vérifier le mot de passe avec bcrypt
        const isPasswordValid = await verifyPassword(user, credentials.password)
        if (!isPasswordValid) {
          return null
        }

        // Retourner l'utilisateur sans le mot de passe
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
