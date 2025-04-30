import type React from "react"
import { redirect } from "next/navigation"
import { getAuthStatus } from "@/components/auth-status"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = await getAuthStatus()

  if (!isAuthenticated) {
    redirect("/login")
  }

  return <>{children}</>
}
