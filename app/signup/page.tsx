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
import { isRoleSignupAllowed, roleToPath, type Role } from "@/lib/roles"
import Link from "next/link"
import Image from "next/image"
import { GraduationCap, MapPin, Users, TrendingUp } from "lucide-react"

export default function SignupPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState<Role>("student")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!isRoleSignupAllowed(role)) {
      toast({
        title: "Signup not allowed",
        description: "This role is not allowed to sign up yet.",
      })
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match.",
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

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Join Our Community</h2>
            <p className="text-blue-100 leading-relaxed">
              Connect with top companies, gain valuable experience, and build your career with NEP-compliant internships.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <span>15,000+ Students</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span>500+ Companies</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <span>Nationwide Opportunities</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-blue-100">
          © 2025 NEP Internship Platform. All rights reserved.
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
            <CardDescription>
              Join the NEP Internship Platform and start your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>I am a:</Label>
                <RoleSelect value={role} onValueChange={setRole} />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/login" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}