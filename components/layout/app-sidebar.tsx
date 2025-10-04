"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export type NavItem = { href: string; label: string }

export function AppSidebar({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  return (
    <aside className="w-full sm:w-64 border-r bg-card">
      <nav className="p-4 grid gap-1">
        {items.map((it) => {
          const active = pathname === it.href
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
              )}
            >
              {it.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
