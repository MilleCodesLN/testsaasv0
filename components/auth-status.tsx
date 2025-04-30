import { auth } from "@/auth"

export async function getAuthStatus() {
  const session = await auth()
  return {
    isAuthenticated: !!session,
    user: session?.user,
  }
}
