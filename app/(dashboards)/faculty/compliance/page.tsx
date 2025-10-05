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
  AlertTriangle,
  Shield,
  Check,
  X,
  Eye
} from "lucide-react"

export default function FacultyCompliance() {
  const menu = useMemo(
    () => [
      { href: "/faculty/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/faculty/students", label: "My Students", icon: Users },
      { href: "/faculty/mentorship", label: "Mentorship", icon: UserCheck },
      { href: "/faculty/logbooks", label: "Logbook Reviews", icon: BookOpen },
      { href: "/faculty/compliance", label: "NEP Compliance", icon: Award, active: true },
      { href: "/faculty/reports", label: "Reports", icon: FileText },
    ],
    [],
  )

  const complianceMetrics = [
    { id: 1, category: "Documentation", compliance: 92, total: 100, issues: 8 },
    { id: 2, category: "Assessment", compliance: 88, total: 95, issues: 7 },
    { id: 3, category: "Mentorship", compliance: 95, total: 98, issues: 3 },
    { id: 4, category: "Progress Tracking", compliance: 85, total: 90, issues: 5 },
  ]

  const complianceIssues = [
    { id: 1, student: "Alice Johnson", issue: "Missing weekly logbook entry", severity: "Medium", dueDate: "2025-01-22" },
    { id: 2, student: "Bob Smith", issue: "Incomplete assessment submission", severity: "High", dueDate: "2025-01-20" },
    { id: 3, student: "Carol Davis", issue: "Mentorship session not logged", severity: "Low", dueDate: "2025-01-25" },
    { id: 4, student: "David Wilson", issue: "Progress report overdue", severity: "High", dueDate: "2025-01-18" },
  ]

  const nepGuidelines = [
    { id: 1, guideline: "Regular Progress Monitoring", status: "Compliant", lastChecked: "2025-01-15" },
    { id: 2, guideline: "Mentorship Program Implementation", status: "Compliant", lastChecked: "2025-01-14" },
    { id: 3, guideline: "Assessment Framework", status: "Partial", lastChecked: "2025-01-16" },
    { id: 4, guideline: "Documentation Standards", status: "Compliant", lastChecked: "2025-01-17" },
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
            <h1 className="text-lg font-semibold">NEP Compliance</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Compliance</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90%</div>
                <Progress value={90} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">Above NEP standards</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{complianceIssues.length}</div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High Priority</CardTitle>
                <X className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{complianceIssues.filter(i => i.severity === "High").length}</div>
                <p className="text-xs text-muted-foreground">Critical issues</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Jan 15</div>
                <p className="text-xs text-muted-foreground">2025</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="metrics" className="w-full">
            <TabsList>
              <TabsTrigger value="metrics">Compliance Metrics</TabsTrigger>
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="guidelines">NEP Guidelines</TabsTrigger>
            </TabsList>
            <TabsContent value="metrics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {complianceMetrics.map((metric) => (
                      <div key={metric.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{metric.category}</p>
                            <p className="text-sm text-muted-foreground">{metric.compliance}% compliant ({metric.total - metric.issues}/{metric.total})</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Progress value={metric.compliance} className="w-24" />
                            <p className="text-sm text-muted-foreground mt-1">{metric.issues} issues</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="issues" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {complianceIssues.map((issue) => (
                      <div key={issue.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{issue.student}</p>
                            <p className="text-sm text-muted-foreground">{issue.issue}</p>
                            <p className="text-sm text-muted-foreground">Due: {issue.dueDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge variant={issue.severity === "High" ? "destructive" : issue.severity === "Medium" ? "default" : "secondary"}>
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Check className="h-4 w-4 mr-1" />
                              Resolve
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
            <TabsContent value="guidelines" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>NEP Guidelines Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nepGuidelines.map((guideline) => (
                      <div key={guideline.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{guideline.guideline}</p>
                            <p className="text-sm text-muted-foreground">Last checked: {guideline.lastChecked}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant={guideline.status === "Compliant" ? "default" : guideline.status === "Partial" ? "secondary" : "destructive"}>
                            {guideline.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Review
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