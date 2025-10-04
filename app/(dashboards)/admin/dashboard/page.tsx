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
  UserCheck,
  Building,
  TrendingUp,
  FileText,
  CheckCircle,
  AlertCircle,
  MapPin,
  GraduationCap,
  Award,
  BarChart3,
  Settings,
  Download
} from "lucide-react"

const fetcher = (u: string) => fetch(u).then((r) => r.json())

export default function AdminDashboard() {
  const { data: mapPoints } = useSWR("/api/map/opportunities", fetcher)

  const menu = useMemo(
    () => [
      { href: "/admin/dashboard", label: "Dashboard", icon: BarChart3, active: true },
      { href: "/admin/students", label: "Student Management", icon: Users },
      { href: "/admin/faculty", label: "Faculty Oversight", icon: UserCheck },
      { href: "/admin/partners", label: "Industry Partners", icon: Building },
      { href: "/admin/approvals", label: "Approvals", icon: CheckCircle },
      { href: "/admin/compliance", label: "NEP Compliance", icon: Award },
      { href: "/admin/reports", label: "Reports", icon: FileText },
      { href: "/admin/settings", label: "Settings", icon: Settings },
    ],
    [],
  )

  const pendingApprovals = [
    { id: 1, type: "Student Registration", name: "John Doe", date: "2025-01-15", status: "pending" },
    { id: 2, type: "Internship Posting", name: "TechCorp - Frontend Intern", date: "2025-01-14", status: "pending" },
    { id: 3, type: "Faculty Assignment", name: "Dr. Smith → 5 students", date: "2025-01-13", status: "pending" },
  ]

  const facultyActivity = [
    { name: "Dr. Sarah Johnson", students: 12, active: 10, pending: 2 },
    { name: "Prof. Michael Chen", students: 8, active: 7, pending: 1 },
    { name: "Dr. Emily Davis", students: 15, active: 13, pending: 2 },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Institution Admin</SidebarGroupLabel>
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Institution Dashboard</h1>
                <p className="text-green-100">Manage students, faculty, and industry partnerships</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">312</div>
                  <div className="text-sm text-green-100">Active Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-sm text-green-100">Participation Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards
            items={[
              {
                title: "Students in Internships",
                value: 312,
                hint: "Current academic year",
                icon: Users,
                color: "green"
              },
              {
                title: "Students Not Placed",
                value: 94,
                hint: "Need placement assistance",
                icon: AlertCircle,
                color: "orange"
              },
              {
                title: "Active Partnerships",
                value: 28,
                hint: "Industry collaborators",
                icon: Building,
                color: "blue"
              },
              {
                title: "NEP Compliance",
                value: "94%",
                hint: "On track for requirements",
                icon: Award,
                color: "purple"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Pending Approvals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Pending Approvals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pendingApprovals.map((approval) => (
                      <div key={approval.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{approval.type}</div>
                          <div className="text-sm text-muted-foreground">{approval.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{approval.date}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Review</Button>
                          <Badge variant="secondary">Pending</Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Approvals</Button>
                  </CardContent>
                </Card>

                {/* Institution Map */}
                <MapPanel title="Internship Distribution" points={mapPoints?.points ?? []} heightClass="h-[400px]" />
              </div>

              {/* Quick Stats */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Participation Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">76.8%</div>
                    <Progress value={76.8} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">Target: 80%</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Average Internship Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">4.2 months</div>
                    <p className="text-xs text-muted-foreground">NEP recommended: 4-6 months</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Placement Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">68%</div>
                    <Progress value={68} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">+5% from last year</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-green-800">In Internships</div>
                        <div className="text-sm text-green-600">Currently active</div>
                      </div>
                      <div className="text-2xl font-bold text-green-800">312</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <div className="font-medium text-orange-800">Not Placed</div>
                        <div className="text-sm text-orange-600">Need assistance</div>
                      </div>
                      <div className="text-2xl font-bold text-orange-800">94</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium text-blue-800">Completed</div>
                        <div className="text-sm text-blue-600">Past internships</div>
                      </div>
                      <div className="text-2xl font-bold text-blue-800">156</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Department-wise Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { dept: "Computer Science", placed: 45, total: 50 },
                      { dept: "Information Technology", placed: 38, total: 45 },
                      { dept: "Electronics", placed: 32, total: 40 },
                      { dept: "Mechanical", placed: 28, total: 35 },
                    ].map((item) => (
                      <div key={item.dept} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.dept}</span>
                          <span>{item.placed}/{item.total}</span>
                        </div>
                        <Progress value={(item.placed / item.total) * 100} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faculty" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Mentorship Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {facultyActivity.map((faculty) => (
                      <div key={faculty.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{faculty.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {faculty.active} active, {faculty.pending} pending assignments
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{faculty.students}</div>
                          <div className="text-xs text-muted-foreground">Total Students</div>
                        </div>
                        <div className="ml-4">
                          <Progress value={(faculty.active / faculty.students) * 100} className="h-8 w-16" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partners" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Industry Partners</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { name: "TechCorp", internships: 12, students: 15 },
                      { name: "DataSys", internships: 8, students: 10 },
                      { name: "DesignHub", internships: 6, students: 8 },
                    ].map((partner) => (
                      <div key={partner.name} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{partner.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {partner.internships} active internships
                          </div>
                        </div>
                        <Badge variant="outline">{partner.students} students</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Building className="h-4 w-4 mr-2" />
                      Add New Partner
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Review Applications
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Reports
                    </Button>
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
