"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { ParticipationChart } from "@/components/dashboard/charts"
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
  UserCheck
} from "lucide-react"

export default function FacultyDashboard() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3, active: true },
      { href: "/faculty/students", label: "My Students", icon: Users },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award },
      { href: "/faculty/reports", label: "Reports", icon: FileText },
    ],
    [],
  )

  const participation = [
    { month: "Apr", participating: 32, notParticipating: 12 },
    { month: "May", participating: 44, notParticipating: 9 },
    { month: "Jun", participating: 51, notParticipating: 8 },
  ]

  const assignedStudents = [
    { id: 1, name: "Alice Johnson", progress: 75, status: "Active", lastSubmission: "2025-01-15" },
    { id: 2, name: "Bob Smith", progress: 60, status: "Active", lastSubmission: "2025-01-12" },
    { id: 3, name: "Carol Davis", progress: 90, status: "Active", lastSubmission: "2025-01-14" },
  ]

  const pendingReviews = [
    { id: 1, student: "Alice Johnson", type: "Weekly Logbook", dueDate: "2025-01-20", status: "Pending" },
    { id: 2, student: "Bob Smith", type: "Monthly Report", dueDate: "2025-01-18", status: "Overdue" },
    { id: 3, student: "Carol Davis", type: "Final Assessment", dueDate: "2025-01-25", status: "Pending" },
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

      <SidebarInset className="pt-16">
        <div className="p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Faculty Dashboard</h1>
                <p className="text-teal-100">Guide students through their internship journey</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm text-teal-100">Assigned Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-teal-100">Pending Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards
            items={[
              {
                title: "Assigned Students",
                value: 18,
                hint: "3 pending mentor requests",
                icon: Users,
                color: "blue"
              },
              {
                title: "Pending Reviews",
                value: 5,
                hint: "2 overdue",
                icon: Clock,
                color: "orange"
              },
              {
                title: "Approved This Week",
                value: 12,
                hint: "Logbooks & reports",
                icon: CheckCircle,
                color: "green"
              },
              {
                title: "Notifications",
                value: 6,
                hint: "New submissions",
                icon: MessageSquare,
                color: "purple"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Pending Reviews */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Pending Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pendingReviews.map((review) => (
                      <div key={review.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{review.student}</div>
                          <div className="text-sm text-muted-foreground">{review.type}</div>
                          <div className="text-xs text-muted-foreground mt-1">Due: {review.dueDate}</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant={review.status === "Overdue" ? "destructive" : "secondary"}>
                            {review.status}
                          </Badge>
                          <Button size="sm" variant="outline">Review</Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Reviews</Button>
                  </CardContent>
                </Card>

                {/* Participation Chart */}
                <ParticipationChart data={participation} />
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button className="h-auto p-4 flex flex-col items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-sm">Approve Logbooks</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                      <UserCheck className="h-6 w-6" />
                      <span className="text-sm">Assign Mentors</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                      <FileText className="h-6 w-6" />
                      <span className="text-sm">Download Reports</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                      <Calendar className="h-6 w-6" />
                      <span className="text-sm">Schedule Meetings</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Assigned Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assignedStudents.map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Last submission: {student.lastSubmission}
                          </div>
                          <div className="mt-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{student.status}</Badge>
                          <Button size="sm" variant="outline">View Profile</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Review Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">87</div>
                      <div className="text-sm text-green-600">Reviews Completed</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">5</div>
                      <div className="text-sm text-blue-600">Pending Reviews</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700">2</div>
                      <div className="text-sm text-orange-600">Overdue Reviews</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Review Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Review Logbooks
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Assess Reports
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Award className="h-4 w-4 mr-2" />
                      Issue Certificates
                    </Button>
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Provide Feedback
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Guide students through their internship experience and ensure NEP compliance.
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Active Mentorship Sessions</span>
                        <span>12</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Completed Sessions</span>
                        <span>45</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Student Satisfaction</span>
                        <span>4.6/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule 1-on-1 Meetings
                    </Button>
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Guidance Messages
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Track Student Progress
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Award className="h-4 w-4 mr-2" />
                      Provide Recommendations
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
