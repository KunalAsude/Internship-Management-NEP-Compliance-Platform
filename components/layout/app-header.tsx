"use client"
import Link from "next/link"
import type React from "react"

import { useEffect, useState } from "react"
import type { Role } from "@/lib/roles"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function AppHeader({ leftSlot }: { leftSlot?: React.ReactNode }) {
  const [role, setRole] = useState<Role | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    setRole((localStorage.getItem("authRole") as Role) || null)
    setEmail(localStorage.getItem("authEmail"))
  }, [])

  function logout() {
    localStorage.removeItem("authRole")
    localStorage.removeItem("authEmail")
    router.push("/login")
  }

  return (
    <header className="w-full border-b bg-card">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {leftSlot}
          <Link href="/" className="font-semibold tracking-tight">
            NEP Internship Platform
          </Link>
        </div>
        <div className="flex items-center gap-3 text-sm">
          {role && (
            <span className="text-muted-foreground">
              Role: <strong className="text-foreground">{role}</strong>
            </span>
          )}
          {email && <span className="hidden sm:inline text-muted-foreground">• {email}</span>}
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
