"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Briefcase,
  Users,
  Calendar,
  TrendingUp,
  MapPin,
  FileText,
  CheckCircle,
  Clock,
  Star,
  Plus,
  Eye,
  MessageSquare,
  Download,
  BarChart3,
  PieChart,
  TrendingDown,
  Target
} from "lucide-react"

export default function RecruiterReports() {
  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp, active: true },
    ],
    [],
  )

  const reportData = {
    overview: {
      totalPostings: 12,
      activePostings: 8,
      totalApplicants: 245,
      interviewsScheduled: 23,
      offersExtended: 5,
      hiresCompleted: 3
    },
    conversionFunnel: [
      { stage: "Applied", count: 245, percentage: 100 },
      { stage: "Shortlisted", count: 78, percentage: 32 },
      { stage: "Interviewed", count: 23, percentage: 9 },
      { stage: "Offered", count: 5, percentage: 2 },
      { stage: "Hired", count: 3, percentage: 1 }
    ],
    topPositions: [
      { position: "Frontend Developer Intern", applicants: 45, conversion: 8.9 },
      { position: "Data Analyst Intern", applicants: 38, conversion: 7.9 },
      { position: "UX Design Intern", applicants: 32, conversion: 6.3 },
      { position: "Backend Developer Intern", applicants: 28, conversion: 10.7 }
    ],
    timeToHire: {
      average: 21,
      fastest: 12,
      slowest: 35
    },
    diversity: {
      gender: { male: 45, female: 52, other: 3 },
      universities: [
        { name: "State University", count: 45 },
        { name: "Tech Institute", count: 32 },
        { name: "Engineering University", count: 28 },
        { name: "Design College", count: 25 },
        { name: "Community College", count: 18 }
      ]
    }
  }

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Recruiter Portal</SidebarGroupLabel>
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
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-sidebar-border" />
            <h1 className="text-lg font-semibold">Reports & Analytics</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex gap-4 mb-4">
            <Select defaultValue="last-30-days">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-90-days">Last 90 days</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="diversity">Diversity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-blue-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.totalPostings}</p>
                        <p className="text-xs text-muted-foreground">Total Postings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.activePostings}</p>
                        <p className="text-xs text-muted-foreground">Active Postings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.totalApplicants}</p>
                        <p className="text-xs text-muted-foreground">Total Applicants</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.interviewsScheduled}</p>
                        <p className="text-xs text-muted-foreground">Interviews</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-red-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.offersExtended}</p>
                        <p className="text-xs text-muted-foreground">Offers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <div>
                        <p className="text-2xl font-bold">{reportData.overview.hiresCompleted}</p>
                        <p className="text-xs text-muted-foreground">Hires</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Top Performing Positions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reportData.topPositions.map((position, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{position.position}</p>
                            <p className="text-sm text-muted-foreground">{position.applicants} applicants</p>
                          </div>
                          <Badge variant="secondary">{position.conversion}% conversion</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Time to Hire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">{reportData.timeToHire.average}</p>
                        <p className="text-sm text-muted-foreground">Average days</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-xl font-semibold text-green-600">{reportData.timeToHire.fastest}</p>
                          <p className="text-xs text-muted-foreground">Fastest</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-semibold text-red-600">{reportData.timeToHire.slowest}</p>
                          <p className="text-xs text-muted-foreground">Slowest</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="conversion" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Conversion Funnel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reportData.conversionFunnel.map((stage, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{stage.stage}</span>
                          <div className="text-right">
                            <span className="font-bold">{stage.count}</span>
                            <span className="text-sm text-muted-foreground ml-2">({stage.percentage}%)</span>
                          </div>
                        </div>
                        <Progress value={stage.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recruitment Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Monthly Trends</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Applications</span>
                          <span className="font-bold">+12%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interview Rate</span>
                          <span className="font-bold">+8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Offer Rate</span>
                          <span className="font-bold">+5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time to Hire</span>
                          <span className="font-bold text-red-600">-3 days</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Quality Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Average Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold">4.2</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Retention Rate</span>
                          <span className="font-bold">89%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Satisfaction Score</span>
                          <span className="font-bold">4.6/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="diversity" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Gender Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Female</span>
                        <div className="flex items-center gap-2">
                          <Progress value={(reportData.diversity.gender.female / 100) * 100} className="w-20 h-2" />
                          <span className="font-bold w-8">{reportData.diversity.gender.female}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Male</span>
                        <div className="flex items-center gap-2">
                          <Progress value={(reportData.diversity.gender.male / 100) * 100} className="w-20 h-2" />
                          <span className="font-bold w-8">{reportData.diversity.gender.male}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Other</span>
                        <div className="flex items-center gap-2">
                          <Progress value={(reportData.diversity.gender.other / 100) * 100} className="w-20 h-2" />
                          <span className="font-bold w-8">{reportData.diversity.gender.other}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Top Universities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reportData.diversity.universities.map((university, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{university.name}</span>
                          <Badge variant="secondary">{university.count} applicants</Badge>
                        </div>
                      ))}
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