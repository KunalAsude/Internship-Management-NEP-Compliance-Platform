"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type SummaryCard = {
  title: string
  value: string | number
  hint?: string
  icon?: LucideIcon
  color?: "blue" | "green" | "purple" | "orange" | "red"
}

const colorClasses = {
  blue: "border-blue-200 bg-blue-50 hover:bg-blue-100",
  green: "border-green-200 bg-green-50 hover:bg-green-100",
  purple: "border-purple-200 bg-purple-50 hover:bg-purple-100",
  orange: "border-orange-200 bg-orange-50 hover:bg-orange-100",
  red: "border-red-200 bg-red-50 hover:bg-red-100",
}

export function SummaryCards({ items }: { items: SummaryCard[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => {
        const Icon = it.icon
        return (
          <Card
            key={it.title}
            className={cn(
              "transition-all duration-200 hover:shadow-md",
              it.color && colorClasses[it.color]
            )}
          >
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4" />}
                {it.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold mb-1">{it.value}</div>
              {it.hint && <p className="text-xs text-muted-foreground">{it.hint}</p>}
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}
