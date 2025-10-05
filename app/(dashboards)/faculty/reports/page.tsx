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
  Download,
  Eye,
  Plus
} from "lucide-react"

export default function FacultyReports() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/faculty/students", label: "My Students", icon: Users },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award },
      { href: "/faculty/reports", label: "Reports", icon: FileText, active: true },
    ],
    [],
  )

  const recentReports = [
    { id: 1, title: "Monthly Progress Report - January 2025", type: "Progress", generatedDate: "2025-01-15", status: "Generated" },
    { id: 2, title: "Student Performance Analysis", type: "Performance", generatedDate: "2025-01-12", status: "Generated" },
    { id: 3, title: "Mentorship Program Report", type: "Mentorship", generatedDate: "2025-01-10", status: "Generated" },
    { id: 4, title: "NEP Compliance Summary", type: "Compliance", generatedDate: "2025-01-08", status: "Generated" },
  ]

  const reportTemplates = [
    { id: 1, name: "Student Progress Report", description: "Individual student progress tracking", frequency: "Weekly" },
    { id: 2, name: "Mentorship Activity Report", description: "Mentorship sessions and outcomes", frequency: "Monthly" },
    { id: 3, name: "Compliance Audit Report", description: "NEP compliance status", frequency: "Quarterly" },
    { id: 4, name: "Performance Analytics", description: "Overall program performance metrics", frequency: "Monthly" },
  ]

  const scheduledReports = [
    { id: 1, name: "Weekly Progress Summary", nextRun: "2025-01-22", recipients: 5 },
    { id: 2, name: "Monthly Compliance Report", nextRun: "2025-02-01", recipients: 3 },
    { id: 3, name: "End-of-Semester Review", nextRun: "2025-01-30", recipients: 8 },
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
            <h1 className="text-lg font-semibold">Reports</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentReports.length}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{scheduledReports.length}</div>
                <p className="text-xs text-muted-foreground">Active schedules</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Report Templates</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reportTemplates.length}</div>
                <p className="text-xs text-muted-foreground">Available templates</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="recent" className="w-full">
            <TabsList>
              <TabsTrigger value="recent">Recent Reports</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            </TabsList>
            <TabsContent value="recent" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Reports</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate New Report
                </Button>
              </div>
              <Card>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                        <div className="flex items-center space-x-4">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{report.title}</p>
                            <p className="text-sm text-muted-foreground">Generated: {report.generatedDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary">
                            {report.type}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Report Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reportTemplates.map((template) => (
                      <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{template.name}</p>
                            <p className="text-sm text-muted-foreground">{template.description}</p>
                            <p className="text-sm text-muted-foreground">Frequency: {template.frequency}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm">
                            Generate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scheduled" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scheduledReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{report.name}</p>
                            <p className="text-sm text-muted-foreground">Next run: {report.nextRun}</p>
                            <p className="text-sm text-muted-foreground">Recipients: {report.recipients}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Run Now
                          </Button>
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