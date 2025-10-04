"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCards } from "@/components/dashboard/summary-cards"
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
  BarChart3,
  FileText,
  Download,
  TrendingUp,
  MapPin,
  Award,
  Users,
  Building,
  Target,
  CheckCircle,
  AlertCircle,
  Globe
} from "lucide-react"

export default function GovernmentDashboard() {
  const menu = useMemo(
    () => [
      { href: "/government/dashboard", label: "Policy Dashboard", icon: BarChart3, active: true },
      { href: "/government/compliance", label: "NEP Compliance", icon: CheckCircle },
      { href: "/government/analytics", label: "National Analytics", icon: TrendingUp },
      { href: "/government/regional", label: "Regional Reports", icon: MapPin },
      { href: "/government/exports", label: "Data Exports", icon: Download },
      { href: "/government/policies", label: "Policy Management", icon: FileText },
    ],
    [],
  )

  const nationalStats = [
    { region: "Maharashtra", institutions: 245, students: 45600, participation: 78.5 },
    { region: "Karnataka", institutions: 189, students: 38900, participation: 82.1 },
    { region: "Tamil Nadu", institutions: 167, students: 41200, participation: 75.8 },
    { region: "Delhi", institutions: 98, students: 18900, participation: 85.2 },
    { region: "West Bengal", institutions: 134, students: 35600, participation: 71.4 },
  ]

  const nepMetrics = [
    { metric: "Credit System Adoption", value: 89.5, target: 95 },
    { metric: "Skill-Based Learning", value: 76.8, target: 85 },
    { metric: "Industry Integration", value: 68.4, target: 80 },
    { metric: "Assessment Reform", value: 72.1, target: 90 },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Government Portal</SidebarGroupLabel>
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
          <div className="bg-gradient-to-r from-green-700 to-teal-700 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Government Policy Dashboard</h1>
                <p className="text-green-100">Monitor NEP implementation and national internship programs</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-green-100">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">89.5%</div>
                  <div className="text-sm text-green-100">NEP Compliance</div>
                </div>
              </div>
            </div>
          </div>

          {/* National Overview */}
          <SummaryCards
            items={[
              {
                title: "Total Institutions",
                value: "1,247",
                hint: "Registered colleges",
                icon: Building,
                color: "blue"
              },
              {
                title: "Student Enrollment",
                value: "245,600",
                hint: "In internship programs",
                icon: Users,
                color: "green"
              },
              {
                title: "National Participation",
                value: "78.5%",
                hint: "Students engaged",
                icon: Target,
                color: "purple"
              },
              {
                title: "NEP Compliance",
                value: "89.5%",
                hint: "Implementation progress",
                icon: Award,
                color: "orange"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">National Overview</TabsTrigger>
              <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
              <TabsTrigger value="compliance">NEP Compliance</TabsTrigger>
              <TabsTrigger value="reports">Reports & Exports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Key Performance Indicators */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Key Performance Indicators
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-700">245,600</div>
                        <div className="text-sm text-blue-600">Students in Programs</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-700">1,247</div>
                        <div className="text-sm text-green-600">Institutions</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-700">15,600</div>
                        <div className="text-sm text-purple-600">Industry Partners</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-700">89.5%</div>
                        <div className="text-sm text-orange-600">Compliance Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Program Effectiveness */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Program Effectiveness
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Employment Rate (Post-Internship)</span>
                          <span>72.4%</span>
                        </div>
                        <Progress value={72.4} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Skill Development Index</span>
                          <span>68.9%</span>
                        </div>
                        <Progress value={68.9} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Industry Satisfaction</span>
                          <span>84.2%</span>
                        </div>
                        <Progress value={84.2} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Student Satisfaction</span>
                          <span>91.7%</span>
                        </div>
                        <Progress value={91.7} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sector-wise Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Sector-wise Internship Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { sector: "Technology", count: 45200, percentage: 18.4 },
                      { sector: "Healthcare", count: 38900, percentage: 15.8 },
                      { sector: "Finance", count: 35600, percentage: 14.5 },
                      { sector: "Manufacturing", count: 41200, percentage: 16.8 },
                      { sector: "Education", count: 28900, percentage: 11.8 },
                      { sector: "Retail", count: 26700, percentage: 10.9 },
                      { sector: "Consulting", count: 19800, percentage: 8.1 },
                      { sector: "Others", count: 8300, percentage: 3.4 },
                    ].map((item) => (
                      <div key={item.sector} className="text-center p-3 border rounded-lg">
                        <div className="text-lg font-bold">{item.count.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{item.sector}</div>
                        <div className="text-xs text-blue-600">{item.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regional" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nationalStats.map((region) => (
                      <div key={region.region} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{region.region}</div>
                          <div className="text-sm text-muted-foreground">
                            {region.institutions} institutions • {region.students.toLocaleString()} students
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{region.participation}%</div>
                          <div className="text-xs text-muted-foreground">Participation Rate</div>
                        </div>
                        <div className="ml-4">
                          <Progress value={region.participation} className="h-8 w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>NEP Implementation Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {nepMetrics.map((metric) => (
                      <div key={metric.metric} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{metric.metric}</span>
                          <span>{metric.value}% / {metric.target}%</span>
                        </div>
                        <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          {metric.target - metric.value > 0 ?
                            `${(metric.target - metric.value).toFixed(1)}% to target` :
                            "Target achieved"
                          }
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Compliance Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Compliance Report
                    </Button>
                    <Button className="w-full" variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Audit Institution Compliance
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Award className="h-4 w-4 mr-2" />
                      Update NEP Guidelines
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Flag Non-Compliance
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      National Internship Report (PDF)
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Regional Performance Data (Excel)
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      NEP Compliance Dashboard (PDF)
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Industry Partnership Analysis (Excel)
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Export Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      Choose date range and format for your export
                    </div>
                    <div className="space-y-2">
                      <select className="w-full p-2 border rounded">
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                        <option>Custom range</option>
                      </select>
                      <div className="flex gap-2">
                        <Button className="flex-1" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          PDF
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Excel
                        </Button>
                      </div>
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
