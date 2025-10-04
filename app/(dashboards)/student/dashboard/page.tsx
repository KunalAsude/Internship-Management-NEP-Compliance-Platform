"use client"
import { useMemo } from "react"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { MapPanel } from "@/components/dashboard/map-panel"
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Bell,
  Search,
  FileText,
  MessageCircle,
  Target,
  Building
} from "lucide-react"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function StudentDashboard() {
  const { data: recs } = useSWR("/api/recommended", fetcher)
  const { data: mapPoints } = useSWR("/api/map/opportunities", fetcher)

  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp, active: true },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search },
      { href: "/student/applications", label: "My Applications", icon: FileText },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen },
      { href: "/student/mentorship", label: "Mentorship", icon: Users },
      { href: "/student/resources", label: "Resources", icon: Target },
    ],
    [],
  )

  const recentApplications = [
    { id: 1, title: "Frontend Developer Intern", company: "TechCorp", status: "Interview Scheduled", date: "2025-01-15" },
    { id: 2, title: "Data Analyst Intern", company: "DataSys", status: "Applied", date: "2025-01-12" },
    { id: 3, title: "UX Design Intern", company: "DesignHub", status: "Shortlisted", date: "2025-01-10" },
  ]

  const skillGaps = [
    { skill: "React.js", current: 75, target: 90 },
    { skill: "Python", current: 60, target: 85 },
    { skill: "Data Analysis", current: 45, target: 80 },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Student Portal</SidebarGroupLabel>
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

      <SidebarInset className="pt-16">
        <div className="p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Welcome back, Student!</h1>
                <p className="text-blue-100">Track your internship journey and build your career</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-blue-100">NEP Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-blue-100">Profile Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards
            items={[
              {
                title: "Profile Completion",
                value: "85%",
                hint: "Complete your profile for better matches",
                icon: GraduationCap,
                color: "blue"
              },
              {
                title: "Active Applications",
                value: 3,
                hint: "1 interview scheduled",
                icon: FileText,
                color: "green"
              },
              {
                title: "NEP Credits Earned",
                value: 12,
                hint: "Keep progressing!",
                icon: Award,
                color: "purple"
              },
              {
                title: "Notifications",
                value: 4,
                hint: "Check your updates",
                icon: Bell,
                color: "orange"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Recent Applications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Recent Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{app.title}</div>
                          <div className="text-sm text-muted-foreground">{app.company}</div>
                          <div className="text-xs text-muted-foreground mt-1">{app.date}</div>
                        </div>
                        <Badge
                          variant={
                            app.status === "Interview Scheduled" ? "default" :
                            app.status === "Shortlisted" ? "secondary" : "outline"
                          }
                        >
                          {app.status}
                        </Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Applications</Button>
                  </CardContent>
                </Card>

                {/* Opportunities Map */}
                <MapPanel title="Nearby Opportunities" points={mapPoints?.points ?? []} heightClass="h-[400px]" />
              </div>

              {/* Skill Development */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Skill Development Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGaps.map((skill) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.skill}</span>
                        <span>{skill.current}% → {skill.target}%</span>
                      </div>
                      <Progress value={skill.current} className="h-2" />
                    </div>
                  ))}
                  <Button variant="outline" size="sm">View Full Skill Assessment</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Application tracking interface will be implemented here</p>
                    <Button className="mt-4">Browse Opportunities</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Logbook & Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Submit weekly updates and track approvals. Auto-generate NEP-compliant reports and certificates.
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weekly Submissions</span>
                        <span>3/4 completed</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <Button variant="outline" size="sm">Submit Logbook Entry</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      NEP Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Track your progress towards NEP requirements and earn certificates.
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-medium text-green-700">12</div>
                        <div className="text-green-600">Credits Earned</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-medium text-blue-700">8</div>
                        <div className="text-blue-600">Credits Needed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Internships</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    {(recs?.items ?? []).slice(0, 5).map((r: any) => (
                      <div key={r.id} className="flex items-center justify-between border rounded-md p-3 hover:bg-accent transition-colors">
                        <div className="flex-1">
                          <div className="font-medium">{r.title}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                            <span>{r.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {r.location}
                            </span>
                            <span>•</span>
                            <span>{r.mode}</span>
                          </div>
                        </div>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    ))}
                    <Button variant="outline">View All Opportunities</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Search</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Find internships that match your skills and interests.
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Search className="h-4 w-4 mr-2" />
                        Search by Skills
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="h-4 w-4 mr-2" />
                        Search by Location
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Building className="h-4 w-4 mr-2" />
                        Search by Company
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
