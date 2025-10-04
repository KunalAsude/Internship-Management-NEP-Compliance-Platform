export const ROLES = ["student", "faculty", "recruiter", "admin", "alumni", "super-admin", "government"] as const

export type Role = (typeof ROLES)[number]

const ENABLED_LOGIN: Record<Role, boolean> = {
  student: true,
  faculty: true,
  recruiter: true,
  admin: true,
  alumni: true,
  "super-admin": true,
  government: true,
}

const SIGNUP_ALLOWED: Record<Role, boolean> = {
  student: true,
  faculty: true,
  recruiter: true,
  admin: false,
  alumni: true,
  "super-admin": false,
  government: false,
}

export function isRoleAllowedToLogin(role: Role) {
  return ENABLED_LOGIN[role]
}

export function isRoleSignupAllowed(role: Role) {
  return SIGNUP_ALLOWED[role]
}

export function roleToPath(role: Role) {
  switch (role) {
    case "student":
      return "/student/dashboard"
    case "faculty":
      return "/faculty/dashboard"
    case "recruiter":
      return "/recruiter/dashboard"
    case "admin":
      return "/admin/dashboard"
    case "alumni":
      return "/alumni/dashboard"
    case "super-admin":
      return "/super-admin/dashboard"
    case "government":
      return "/government/dashboard"
    default:
      return "/login"
  }
}
