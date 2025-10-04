"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { Badge } from "@/components/ui/badge"
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
  Shield,
  Users,
  Building,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Activity,
  Database,
  Key,
  FileText,
  BarChart3
} from "lucide-react"

export default function SuperAdminDashboard() {
  const menu = useMemo(
    () => [
      { href: "/super-admin/dashboard", label: "System Overview", icon: BarChart3, active: true },
      { href: "/super-admin/users", label: "User Management", icon: Users },
      { href: "/super-admin/institutions", label: "Institutions", icon: Building },
      { href: "/super-admin/roles", label: "Role Management", icon: Key },
      { href: "/super-admin/system", label: "System Settings", icon: Settings },
      { href: "/super-admin/audit", label: "Audit & Logs", icon: FileText },
      { href: "/super-admin/analytics", label: "Platform Analytics", icon: TrendingUp },
    ],
    [],
  )

  const systemAlerts = [
    { id: 1, type: "Security", message: "Unusual login attempts detected", severity: "high", time: "2 minutes ago" },
    { id: 2, type: "Performance", message: "API response time above threshold", severity: "medium", time: "15 minutes ago" },
    { id: 3, type: "System", message: "Database backup completed successfully", severity: "low", time: "1 hour ago" },
  ]

  const systemMetrics = [
    { metric: "Active Users", value: "12,847", change: "+5.2%", trend: "up" },
    { metric: "Total Institutions", value: "156", change: "+2.1%", trend: "up" },
    { metric: "API Uptime", value: "99.9%", change: "0.0%", trend: "stable" },
    { metric: "Data Storage", value: "2.4 TB", change: "+120 GB", trend: "up" },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Super Admin</SidebarGroupLabel>
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
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Super Admin Panel</h1>
                <p className="text-red-100">Complete system oversight and management</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-red-100">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12.8K</div>
                  <div className="text-sm text-red-100">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <SummaryCards
            items={[
              {
                title: "Total Users",
                value: "15,432",
                hint: "Across all roles",
                icon: Users,
                color: "blue"
              },
              {
                title: "Active Institutions",
                value: 156,
                hint: "Registered colleges",
                icon: Building,
                color: "green"
              },
              {
                title: "System Health",
                value: "98.5%",
                hint: "All services operational",
                icon: Activity,
                color: "purple"
              },
              {
                title: "Security Alerts",
                value: 3,
                hint: "Require attention",
                icon: AlertTriangle,
                color: "orange"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">System Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* System Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      System Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{alert.type}: {alert.message}</div>
                          <div className="text-xs text-muted-foreground">{alert.time}</div>
                        </div>
                        <Badge
                          variant={
                            alert.severity === "high" ? "destructive" :
                            alert.severity === "medium" ? "secondary" : "outline"
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Alerts</Button>
                  </CardContent>
                </Card>

                {/* System Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Key Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {systemMetrics.map((metric) => (
                      <div key={metric.metric} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{metric.metric}</div>
                          <div className="text-sm text-muted-foreground">{metric.change}</div>
                        </div>
                        <div className="text-lg font-bold">{metric.value}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Platform Statistics */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">User Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Students</span>
                        <span className="font-medium">8,945</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Faculty</span>
                        <span className="font-medium">1,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recruiters</span>
                        <span className="font-medium">567</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Admins</span>
                        <span className="font-medium">156</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>API Response Time</span>
                        <span className="font-medium">245ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Database Queries/sec</span>
                        <span className="font-medium">1,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Error Rate</span>
                        <span className="font-medium">0.02%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Sessions</span>
                        <span className="font-medium">3,456</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Compliance Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>NEP Compliance</span>
                        <span className="font-medium text-green-600">98.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data Privacy</span>
                        <span className="font-medium text-green-600">Compliant</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Security Audits</span>
                        <span className="font-medium text-green-600">Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backup Status</span>
                        <span className="font-medium text-green-600">Healthy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Monitor and manage platform security
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Failed Login Attempts</span>
                        <span className="font-medium">23 (last 24h)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Active Security Policies</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Encrypted Data</span>
                        <span className="font-medium">99.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Run Security Audit
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Key className="h-4 w-4 mr-2" />
                      Manage Access Controls
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Security Logs
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Update Security Policies
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>System Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Performance monitoring and optimization tools</p>
                    <Button className="mt-4">View Performance Dashboard</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="management" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Manage User Accounts
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Key className="h-4 w-4 mr-2" />
                      Role & Permission Management
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Building className="h-4 w-4 mr-2" />
                      Institution Management
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Data Management
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      System Settings
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Backup & Recovery
                    </Button>
                    <Button className="w-full" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Analytics Configuration
                    </Button>
                    <Button className="w-full" variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Compliance Settings
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
