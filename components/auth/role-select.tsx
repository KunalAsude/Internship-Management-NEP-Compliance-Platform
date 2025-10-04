"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { isRoleAllowedToLogin, type Role, ROLES } from "@/lib/roles"
import { GraduationCap, Users, Building, UserCheck, Crown, Shield, BookOpen } from "lucide-react"

const roleIcons: Record<Role, React.ComponentType<{ className?: string }>> = {
  student: GraduationCap,
  faculty: BookOpen,
  recruiter: Building,
  admin: UserCheck,
  alumni: Users,
  "super-admin": Crown,
  government: Shield,
}

const roleDescriptions: Record<Role, string> = {
  student: "Access internships, track progress, and build your career",
  faculty: "Mentor students and manage academic oversight",
  recruiter: "Post opportunities and find top talent",
  admin: "Manage institution operations and compliance",
  alumni: "Network and mentor the next generation",
  "super-admin": "Full system administration and oversight",
  government: "Policy monitoring and national analytics",
}

export function RoleSelect({
  value,
  onValueChange,
}: {
  value: Role
  onValueChange: (v: Role) => void
}) {
  return (
    <Select value={value} onValueChange={(v) => onValueChange(v as Role)}>
      <SelectTrigger className="h-11" aria-label="Role">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        {ROLES.map((r) => {
          const Icon = roleIcons[r]
          const isEnabled = isRoleAllowedToLogin(r)
          return (
            <SelectItem
              key={r}
              value={r}
              disabled={!isEnabled}
              className="cursor-pointer"
            >
              <div className="flex items-center space-x-3 py-2">
                <div className={`p-2 rounded-lg ${isEnabled ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">
                    {r === "recruiter"
                      ? "Recruiter / Industry Partner"
                      : r === "admin"
                        ? "College / Institution Admin"
                        : r === "government"
                          ? "Government Education Dept."
                          : r === "super-admin"
                            ? "Super Admin"
                            : r.charAt(0).toUpperCase() + r.slice(1)}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {roleDescriptions[r]}
                  </div>
                </div>
                {!isEnabled && (
                  <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    Coming Soon
                  </div>
                )}
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
