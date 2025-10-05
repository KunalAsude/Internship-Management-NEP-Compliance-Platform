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
  Plus,
  Eye,
  Edit
} from "lucide-react"

export default function FacultyMentorship() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/faculty/students", label: "My Students", icon: Users },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck, active: true },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award },
      { href: "/faculty/reports", label: "Reports", icon: FileText },
    ],
    [],
  )

  const mentorshipPrograms = [
    { id: 1, title: "Tech Mentorship Program", mentor: "Dr. Sarah Johnson", mentees: 12, status: "Active", progress: 75 },
    { id: 2, title: "Business Development", mentor: "Prof. Michael Chen", mentees: 8, status: "Active", progress: 60 },
    { id: 3, title: "Research Skills", mentor: "Dr. Emily Davis", mentees: 6, status: "Planning", progress: 20 },
  ]

  const mentorshipSessions = [
    { id: 1, title: "Career Guidance Session", mentor: "Dr. Sarah Johnson", mentee: "Alice Johnson", date: "2025-01-20", status: "Scheduled" },
    { id: 2, title: "Project Review", mentor: "Prof. Michael Chen", mentee: "Bob Smith", date: "2025-01-18", status: "Completed" },
    { id: 3, title: "Skill Development", mentor: "Dr. Emily Davis", mentee: "Carol Davis", date: "2025-01-22", status: "Scheduled" },
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
            <h1 className="text-lg font-semibold">Mentorship</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex justify-between items-center">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mentorshipPrograms.filter(p => p.status === "Active").length}</div>
                  <p className="text-xs text-muted-foreground">Ongoing mentorship programs</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Mentees</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mentorshipPrograms.reduce((sum, p) => sum + p.mentees, 0)}</div>
                  <p className="text-xs text-muted-foreground">Students in mentorship</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mentorshipSessions.filter(s => s.status === "Scheduled").length}</div>
                  <p className="text-xs text-muted-foreground">Sessions this week</p>
                </CardContent>
              </Card>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Program
            </Button>
          </div>
          <Tabs defaultValue="programs" className="w-full">
            <TabsList>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
            </TabsList>
            <TabsContent value="programs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentorshipPrograms.map((program) => (
                      <div key={program.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{program.title}</p>
                            <p className="text-sm text-muted-foreground">Mentor: {program.mentor}</p>
                            <p className="text-sm text-muted-foreground">Mentees: {program.mentees}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge variant={program.status === "Active" ? "default" : "secondary"}>
                              {program.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">Progress: {program.progress}%</p>
                            <Progress value={program.progress} className="w-20 mt-1" />
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sessions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentorshipSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{session.title}</p>
                            <p className="text-sm text-muted-foreground">Mentor: {session.mentor}</p>
                            <p className="text-sm text-muted-foreground">Mentee: {session.mentee}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge variant={session.status === "Scheduled" ? "default" : "secondary"}>
                              {session.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">Date: {session.date}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}