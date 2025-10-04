"use client"
import { useRouter } from "next/navigation"
import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { RoleSelect } from "@/components/auth/role-select"
import { isRoleAllowedToLogin, roleToPath, isRoleSignupAllowed, type Role } from "@/lib/roles"
import Link from "next/link"
import Image from "next/image"
import { GraduationCap, MapPin, Users, TrendingUp } from "lucide-react"

export default function LoginPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<Role>("student")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isRoleAllowedToLogin(role)) {
      toast({
        title: "Role not enabled",
        description: "This role is visible but not enabled for login yet.",
      })
      return
    }
    // Persist a lightweight auth state (frontend only)
    localStorage.setItem("authRole", role)
    localStorage.setItem("authEmail", email)
    router.push(roleToPath(role))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-12 flex-col justify-between text-white">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-3 rounded-xl">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">NEP Internship Platform</h1>
            <p className="text-blue-100">Bridging Education & Industry</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to the Future of Internships</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Connect students with industry opportunities, track progress, and ensure NEP compliance
              through our comprehensive management platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm">Location-based<br />Opportunities</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-sm">Multi-role<br />Collaboration</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-sm">Real-time<br />Analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-sm">NEP<br />Compliance</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-blue-100">
          © 2025 NEP Internship Platform. Empowering the next generation.
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">NEP Internship Platform</h1>
              <p className="text-gray-600">Bridging Education & Industry</p>
            </div>
          </div>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-8">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center text-base">
                Sign in to access your personalized dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email or Username</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Select Your Role</Label>
                  <RoleSelect value={role} onValueChange={(r) => setRole(r as Role)} />
                  {!isRoleAllowedToLogin(role) && (
                    <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded-md">
                      ⚠️ This role is currently visible but disabled for login.
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                  Sign In
                </Button>

                <div className="flex items-center justify-between text-sm">
                  <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                    Forgot password?
                  </Link>
                  {isRoleSignupAllowed(role) ? (
                    <Link href="/signup" className="text-purple-600 hover:text-purple-800 hover:underline font-medium">
                      New User? Sign Up
                    </Link>
                  ) : (
                    <span className="text-gray-500 text-xs">Sign Up disabled for this role</span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-gray-600">
            <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
