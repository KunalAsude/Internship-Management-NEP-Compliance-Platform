"use client"
import { useMemo } from "react"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { ConversionChart } from "@/components/dashboard/charts"
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
  MessageSquare
} from "lucide-react"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function RecruiterDashboard() {
  const { data: applicantsMap } = useSWR("/api/map/applicants", fetcher)

  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp, active: true },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp },
    ],
    [],
  )

  const conversion = [
    { stage: "Applied", value: 120 },
    { stage: "Shortlisted", value: 38 },
    { stage: "Interviewed", value: 22 },
    { stage: "Hired", value: 9 },
  ]

  const activePostings = [
    { id: 1, title: "Frontend Developer Intern", applicants: 45, status: "Active", deadline: "2025-02-15" },
    { id: 2, title: "Data Analyst Intern", applicants: 32, status: "Active", deadline: "2025-02-20" },
    { id: 3, title: "UX Design Intern", applicants: 28, status: "Active", deadline: "2025-02-10" },
  ]

  const recentApplicants = [
    { id: 1, name: "Alice Johnson", position: "Frontend Developer", status: "Shortlisted", rating: 4.5 },
    { id: 2, name: "Bob Smith", position: "Data Analyst", status: "Interview Scheduled", rating: 4.2 },
    { id: 3, name: "Carol Davis", position: "UX Design", status: "Applied", rating: 4.0 },
  ]

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
        <SidebarFooter className="text-xs text-muted-foreground">
          <div className="px-2">NEP Internship Platform v1.0</div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="pt-16">
        <div className="p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative flex items-center justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live Dashboard
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Recruiter Dashboard
                </h1>
                <p className="text-purple-100 text-lg max-w-md">
                  Discover exceptional talent and build your next generation workforce
                </p>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30">
                    <Plus className="h-4 w-4 mr-2" />
                    New Posting
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    View Analytics
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[120px]">
                  <div className="text-3xl font-bold mb-1">6</div>
                  <div className="text-sm text-purple-100">Active Postings</div>
                  <div className="text-xs text-purple-200 mt-1">2 nearing deadline</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[120px]">
                  <div className="text-3xl font-bold mb-1">156</div>
                  <div className="text-sm text-purple-100">Total Applicants</div>
                  <div className="text-xs text-purple-200 mt-1">24 new today</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[120px]">
                  <div className="text-3xl font-bold mb-1">7.5%</div>
                  <div className="text-sm text-purple-100">Conversion Rate</div>
                  <div className="text-xs text-purple-200 mt-1">Above average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-150">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-1">Active Postings</p>
                    <p className="text-3xl font-bold text-blue-900">6</p>
                    <p className="text-xs text-blue-600 mt-1">2 nearing deadline</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-150">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600 mb-1">New Applicants</p>
                    <p className="text-3xl font-bold text-green-900">24</p>
                    <p className="text-xs text-green-600 mt-1">12 shortlisted</p>
                  </div>
                  <div className="h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-150">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600 mb-1">Pending Interviews</p>
                    <p className="text-3xl font-bold text-orange-900">7</p>
                    <p className="text-xs text-orange-600 mt-1">Next: Tomorrow 2 PM</p>
                  </div>
                  <div className="h-12 w-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-150">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600 mb-1">Hires This Month</p>
                    <p className="text-3xl font-bold text-purple-900">9</p>
                    <p className="text-xs text-purple-600 mt-1">15% conversion rate</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-xl h-12">
              <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Overview</TabsTrigger>
              <TabsTrigger value="postings" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Postings</TabsTrigger>
              <TabsTrigger value="applicants" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Applicants</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Active Postings */}
                <Card className="shadow-sm border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      Active Internship Postings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activePostings.map((posting) => (
                      <div key={posting.id} className="group flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-white">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">{posting.title}</div>
                          <div className="text-sm text-gray-600 flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {posting.applicants} applicants
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {posting.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {posting.status}
                          </Badge>
                          <Button size="sm" variant="outline" className="hover:bg-blue-50 hover:border-blue-200">
                            Manage
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Posting
                    </Button>
                  </CardContent>
                </Card>

                {/* Conversion Funnel */}
                <ConversionChart data={conversion} />
              </div>

              {/* Applicants Map */}
              <MapPanel title="Applicants by Location" points={applicantsMap?.points ?? []} heightClass="h-[400px]" />
            </TabsContent>

            <TabsContent value="postings" className="space-y-6">
              <Card className="shadow-sm border-0 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto h-16 w-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Manage Your Postings</CardTitle>
                  <p className="text-muted-foreground">Create, edit, and track your internship opportunities</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-200">
                          <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Plus className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-blue-900 mb-2">Create New Posting</h3>
                          <p className="text-sm text-blue-700 mb-4">Post a new internship opportunity</p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Get Started
                          </Button>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-200">
                          <div className="h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Eye className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-green-900 mb-2">View All Postings</h3>
                          <p className="text-sm text-green-700 mb-4">Manage existing opportunities</p>
                          <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                            View Postings
                          </Button>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-muted-foreground">
                          Full posting management interface coming soon with advanced analytics and bulk operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applicants" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="shadow-sm border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="h-10 w-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      Recent Applicants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentApplicants.map((applicant) => (
                      <div key={applicant.id} className="group flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-md transition-all duration-200 bg-white">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">{applicant.name}</div>
                          <div className="text-sm text-gray-600 mb-2">{applicant.position}</div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-700">{applicant.rating}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Badge
                            variant={
                              applicant.status === "Shortlisted" ? "default" :
                              applicant.status === "Interview Scheduled" ? "secondary" : "outline"
                            }
                            className={
                              applicant.status === "Shortlisted" ? "bg-green-100 text-green-800 border-green-200" :
                              applicant.status === "Interview Scheduled" ? "bg-blue-100 text-blue-800 border-blue-200" :
                              "bg-gray-100 text-gray-800 border-gray-200"
                            }
                          >
                            {applicant.status}
                          </Badge>
                          <Button size="sm" variant="outline" className="hover:bg-green-50 hover:border-green-200">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="shadow-sm border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="h-10 w-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-purple-600" />
                      </div>
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 border border-blue-200 text-blue-700 hover:border-blue-300 transition-all duration-200">
                      <Users className="h-4 w-4 mr-3" />
                      Browse All Applicants
                    </Button>
                    <Button className="w-full justify-start bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-150 border border-green-200 text-green-700 hover:border-green-300 transition-all duration-200">
                      <MessageSquare className="h-4 w-4 mr-3" />
                      Send Bulk Messages
                    </Button>
                    <Button className="w-full justify-start bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-150 border border-orange-200 text-orange-700 hover:border-orange-300 transition-all duration-200">
                      <Calendar className="h-4 w-4 mr-3" />
                      Schedule Interviews
                    </Button>
                    <Button className="w-full justify-start bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-150 border border-purple-200 text-purple-700 hover:border-purple-300 transition-all duration-200">
                      <FileText className="h-4 w-4 mr-3" />
                      Export Applicant Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="shadow-sm border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-blue-600 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Application Conversion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-3 text-blue-900">7.5%</div>
                    <Progress value={7.5} className="h-3 mb-3 bg-blue-100" />
                    <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">
                      Industry average: 5-8%
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm border-0 bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-green-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Time to Hire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-3 text-green-900">12 days</div>
                    <p className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md inline-block">
                      From application to offer
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Applicant Quality Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">4.2/5</div>
                    <Progress value={84} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">Based on ratings</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-sm border-0 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    Hiring Funnel Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {conversion.map((stage, index) => (
                      <div key={stage.stage} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-blue-500 text-white' :
                            index === 1 ? 'bg-green-500 text-white' :
                            index === 2 ? 'bg-orange-500 text-white' :
                            'bg-purple-500 text-white'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">{stage.stage}</span>
                            {index < conversion.length - 1 && (
                              <div className="text-xs text-gray-500 mt-1">
                                {Math.round((stage.value / conversion[0].value) * 100)}% of applicants
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{stage.value}</div>
                          <div className="text-xs text-gray-500">candidates</div>
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
