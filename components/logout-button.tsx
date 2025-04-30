"use client"

import { signOut } from "@/auth"
import { Button, type ButtonProps } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface LogoutButtonProps extends ButtonProps {
  showIcon?: boolean
}

export function LogoutButton({ showIcon = true, children, ...props }: LogoutButtonProps) {
  return (
    <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })} {...props}>
      {showIcon && <LogOut className="h-4 w-4 mr-2" />}
      {children || "Déconnexion"}
    </Button>
  )
}
