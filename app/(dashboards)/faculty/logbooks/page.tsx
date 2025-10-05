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
  Edit,
  Check,
  X
} from "lucide-react"

export default function FacultyLogbooks() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/faculty/students", label: "My Students", icon: Users },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen, active: true },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award },
      { href: "/faculty/reports", label: "Reports", icon: FileText },
    ],
    [],
  )

  const pendingReviews = [
    { id: 1, student: "Alice Johnson", type: "Weekly Logbook", dueDate: "2025-01-20", status: "Pending", submittedDate: "2025-01-18" },
    { id: 2, student: "Bob Smith", type: "Monthly Report", dueDate: "2025-01-18", status: "Overdue", submittedDate: "2025-01-15" },
    { id: 3, student: "Carol Davis", type: "Final Assessment", dueDate: "2025-01-25", status: "Pending", submittedDate: "2025-01-19" },
    { id: 4, student: "David Wilson", type: "Weekly Logbook", dueDate: "2025-01-22", status: "Pending", submittedDate: "2025-01-20" },
  ]

  const completedReviews = [
    { id: 5, student: "Eva Brown", type: "Weekly Logbook", reviewedDate: "2025-01-16", status: "Approved", feedback: "Excellent work on the project milestones." },
    { id: 6, student: "Alice Johnson", type: "Monthly Report", reviewedDate: "2025-01-10", status: "Approved", feedback: "Good progress, focus on documentation." },
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
            <h1 className="text-lg font-semibold">Logbook Reviews</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingReviews.length}</div>
                <p className="text-xs text-muted-foreground">Awaiting your review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                <X className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingReviews.filter(r => r.status === "Overdue").length}</div>
                <p className="text-xs text-muted-foreground">Past due date</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedReviews.length}</div>
                <p className="text-xs text-muted-foreground">Reviews completed</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="pending" className="w-full">
            <TabsList>
              <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
              <TabsTrigger value="completed">Completed Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Logbook Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingReviews.map((review) => (
                      <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{review.student}</p>
                            <p className="text-sm text-muted-foreground">{review.type}</p>
                            <p className="text-sm text-muted-foreground">Submitted: {review.submittedDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge variant={review.status === "Overdue" ? "destructive" : "default"}>
                              {review.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">Due: {review.dueDate}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              Review
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {completedReviews.map((review) => (
                      <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{review.student}</p>
                            <p className="text-sm text-muted-foreground">{review.type}</p>
                            <p className="text-sm text-muted-foreground">Reviewed: {review.reviewedDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge variant="secondary">
                              {review.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1 max-w-xs truncate">{review.feedback}</p>
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