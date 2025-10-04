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
  MessageSquare,
  BookOpen,
  Award,
  TrendingUp,
  Heart,
  Calendar,
  Star,
  Network,
  GraduationCap,
  Briefcase,
  FileText
} from "lucide-react"

export default function AlumniDashboard() {
  const menu = useMemo(
    () => [
      { href: "/alumni/dashboard", label: "Dashboard", icon: TrendingUp, active: true },
      { href: "/alumni/profile", label: "My Profile", icon: GraduationCap },
      { href: "/alumni/mentorship", label: "Mentorship", icon: Users },
      { href: "/alumni/network", label: "Network", icon: Network },
      { href: "/alumni/resources", label: "Resources", icon: BookOpen },
      { href: "/alumni/success-stories", label: "Success Stories", icon: Award },
    ],
    [],
  )

  const mentorshipRequests = [
    { id: 1, student: "Alice Johnson", request: "Career guidance in tech", date: "2025-01-15" },
    { id: 2, student: "Bob Smith", request: "Interview preparation", date: "2025-01-14" },
    { id: 3, student: "Carol Davis", request: "Industry insights", date: "2025-01-13" },
  ]

  const myMentees = [
    { id: 1, name: "David Wilson", progress: "85%", meetings: 8, status: "Active" },
    { id: 2, name: "Eva Brown", progress: "92%", meetings: 12, status: "Active" },
    { id: 3, name: "Frank Miller", progress: "78%", meetings: 6, status: "Active" },
  ]

  const sharedResources = [
    { id: 1, title: "Tech Interview Tips", type: "Guide", downloads: 45, rating: 4.8 },
    { id: 2, title: "Resume Building Workshop", type: "Video", downloads: 67, rating: 4.9 },
    { id: 3, title: "Career Transition Stories", type: "Article", downloads: 89, rating: 4.7 },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Alumni Portal</SidebarGroupLabel>
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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Alumni Dashboard</h1>
                <p className="text-indigo-100">Give back to the community through mentorship and knowledge sharing</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-indigo-100">Active Mentees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-sm text-indigo-100">Resources Shared</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards
            items={[
              {
                title: "Active Mentees",
                value: 12,
                hint: "Students you're guiding",
                icon: Users,
                color: "blue"
              },
              {
                title: "Mentorship Requests",
                value: 8,
                hint: "Pending responses",
                icon: MessageSquare,
                color: "orange"
              },
              {
                title: "Resources Shared",
                value: 89,
                hint: "Downloads this month",
                icon: BookOpen,
                color: "green"
              },
              {
                title: "Impact Score",
                value: "4.8/5",
                hint: "Mentee satisfaction",
                icon: Star,
                color: "purple"
              },
            ]}
          />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Recent Mentorship Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Mentorship Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mentorshipRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{request.student}</div>
                          <div className="text-sm text-muted-foreground">{request.request}</div>
                          <div className="text-xs text-muted-foreground mt-1">{request.date}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Accept</Button>
                          <Button size="sm" variant="ghost">Decline</Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Requests</Button>
                  </CardContent>
                </Card>

                {/* My Mentees */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      My Mentees
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {myMentees.map((mentee) => (
                      <div key={mentee.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{mentee.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {mentee.meetings} meetings • Progress: {mentee.progress}
                          </div>
                        </div>
                        <Badge variant="outline">{mentee.status}</Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">Manage All Mentees</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Impact Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">156</div>
                      <div className="text-sm text-blue-600">Students Helped</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">4.8</div>
                      <div className="text-sm text-green-600">Average Rating</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700">89</div>
                      <div className="text-sm text-purple-600">Resources Created</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700">24</div>
                      <div className="text-sm text-orange-600">Hours Mentored</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Mentoring Sessions
                    </Button>
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Career Advice
                    </Button>
                    <Button className="w-full" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Share Learning Resources
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Network className="h-4 w-4 mr-2" />
                      Connect with Industry Contacts
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      Best practices for effective mentorship:
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• Set clear goals and expectations</li>
                      <li>• Schedule regular check-ins</li>
                      <li>• Provide constructive feedback</li>
                      <li>• Share real-world experiences</li>
                      <li>• Help with networking opportunities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>My Shared Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sharedResources.map((resource) => (
                      <div key={resource.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{resource.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {resource.type} • {resource.downloads} downloads
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{resource.rating}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Create New Resource</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Write an Article
                    </Button>
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Record a Video
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Create a Guide
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Share Interview Tips
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="network" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Alumni Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Network className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Connect with fellow alumni and expand your professional network</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">1,247</div>
                        <div className="text-sm text-blue-600">Total Alumni</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">89</div>
                        <div className="text-sm text-green-600">Your Connections</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-700">156</div>
                        <div className="text-sm text-purple-600">Events This Year</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-700">42</div>
                        <div className="text-sm text-orange-600">Job Opportunities</div>
                      </div>
                    </div>
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
