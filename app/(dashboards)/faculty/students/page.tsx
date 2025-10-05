"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {
  Users,
  BookOpen,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  MessageSquare,
  Award,
  Calendar,
  BarChart3,
  UserCheck,
  Eye,
  Mail
} from "lucide-react"

export default function FacultyStudents() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/faculty/students", label: "My Students", icon: Users, active: true },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award },
      { href: "/faculty/reports", label: "Reports", icon: FileText },
    ],
    [],
  )

  const assignedStudents = [
    { id: 1, name: "Alice Johnson", progress: 75, status: "Active", lastSubmission: "2025-01-15", email: "alice.johnson@university.edu", department: "Computer Science" },
    { id: 2, name: "Bob Smith", progress: 60, status: "Active", lastSubmission: "2025-01-12", email: "bob.smith@university.edu", department: "Information Technology" },
    { id: 3, name: "Carol Davis", progress: 90, status: "Active", lastSubmission: "2025-01-14", email: "carol.davis@university.edu", department: "Software Engineering" },
    { id: 4, name: "David Wilson", progress: 45, status: "At Risk", lastSubmission: "2025-01-10", email: "david.wilson@university.edu", department: "Data Science" },
    { id: 5, name: "Eva Brown", progress: 80, status: "Active", lastSubmission: "2025-01-16", email: "eva.brown@university.edu", department: "Cybersecurity" },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Faculty Portal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {menu.map((it) => (
                  <SidebarMenuItem key={it.href}>
                    <Link href={it.href}>
                      <SidebarMenuButton isActive={it.active} className="w-full justify-start h-10 px-3">
                        <it.icon className="h-4 w-4 mr-3" />
                        {it.label}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-xs text-muted-foreground">
          <div className="px-2">NEP Internship Platform v1.0</div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-sidebar-border" />
            <h1 className="text-lg font-semibold">My Students</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{assignedStudents.length}</div>
                <p className="text-xs text-muted-foreground">Assigned to you</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{assignedStudents.filter(s => s.status === "Active").length}</div>
                <p className="text-xs text-muted-foreground">Currently active</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">At Risk</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{assignedStudents.filter(s => s.status === "At Risk").length}</div>
                <p className="text-xs text-muted-foreground">Need attention</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Student List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignedStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                        <p className="text-sm text-muted-foreground">{student.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge variant={student.status === "Active" ? "default" : "destructive"}>
                          {student.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">Progress: {student.progress}%</p>
                        <Progress value={student.progress} className="w-20 mt-1" />
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}