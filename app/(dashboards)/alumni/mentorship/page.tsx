"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  FileText,
  Video,
  Mail,
  Clock,
  CheckCircle
} from "lucide-react"

export default function AlumniMentorship() {
  const menu = useMemo(
    () => [
      { href: "/alumni/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/alumni/profile", label: "My Profile", icon: GraduationCap },
      { href: "/alumni/mentorship", label: "Mentorship", icon: Users, active: true },
      { href: "/alumni/network", label: "Network", icon: Network },
      { href: "/alumni/resources", label: "Resources", icon: BookOpen },
      { href: "/alumni/success-stories", label: "Success Stories", icon: Award },
    ],
    [],
  )

  const mentees = [
    {
      id: 1,
      name: "Alex Chen",
      university: "State University",
      major: "Computer Science",
      year: "Junior",
      avatar: "/placeholder-user.jpg",
      mentorshipGoal: "Career guidance in software engineering",
      sessionsCompleted: 3,
      nextSession: "2025-01-25",
      status: "Active"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      university: "Tech Institute",
      major: "Data Science",
      year: "Senior",
      avatar: "/placeholder-user.jpg",
      mentorshipGoal: "Interview preparation and job search",
      sessionsCompleted: 2,
      nextSession: "2025-01-28",
      status: "Active"
    },
    {
      id: 3,
      name: "James Wilson",
      university: "Engineering University",
      major: "Software Engineering",
      year: "Sophomore",
      avatar: "/placeholder-user.jpg",
      mentorshipGoal: "Technical skills development",
      sessionsCompleted: 1,
      nextSession: null,
      status: "Active"
    }
  ]

  const pastSessions = [
    {
      id: 1,
      mentee: "Alex Chen",
      date: "2025-01-15",
      duration: "60 min",
      topic: "Resume Review and Career Planning",
      type: "Video Call",
      notes: "Discussed Alex's career goals and reviewed his resume. Provided feedback on project descriptions and suggested additional experiences.",
      outcome: "Alex will update his resume and prepare for upcoming career fair."
    },
    {
      id: 2,
      mentee: "Maria Rodriguez",
      date: "2025-01-12",
      duration: "45 min",
      topic: "Data Science Interview Tips",
      type: "Video Call",
      notes: "Covered common data science interview questions, SQL queries, and statistical concepts. Practiced behavioral questions.",
      outcome: "Maria feels more confident about her upcoming interviews."
    },
    {
      id: 3,
      mentee: "James Wilson",
      date: "2025-01-10",
      duration: "50 min",
      topic: "Introduction to React Development",
      type: "Video Call",
      notes: "Walked through React fundamentals, component lifecycle, and state management. Shared resources for further learning.",
      outcome: "James started building his first React project."
    }
  ]

  const mentorshipRequests = [
    {
      id: 1,
      name: "Lisa Park",
      university: "Community College",
      major: "Information Technology",
      year: "Junior",
      message: "I'm interested in transitioning to software development. Could you help me with learning resources and career advice?",
      receivedDate: "2025-01-20"
    },
    {
      id: 2,
      name: "David Kim",
      university: "State University",
      major: "Computer Engineering",
      year: "Senior",
      message: "Looking for guidance on graduate school applications and industry job search.",
      receivedDate: "2025-01-18"
    }
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
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-sidebar-border" />
            <h1 className="text-lg font-semibold">Mentorship Program</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Tabs defaultValue="mentees" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mentees">My Mentees ({mentees.length})</TabsTrigger>
              <TabsTrigger value="requests">Requests ({mentorshipRequests.length})</TabsTrigger>
              <TabsTrigger value="sessions">Past Sessions</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
            </TabsList>
            <TabsContent value="mentees" className="space-y-4">
              {mentees.map((mentee) => (
                <Card key={mentee.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentee.avatar} alt={mentee.name} />
                        <AvatarFallback>{mentee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{mentee.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {mentee.major} • {mentee.year} • {mentee.university}
                            </p>
                          </div>
                          <Badge variant="secondary">{mentee.status}</Badge>
                        </div>

                        <p className="text-sm"><strong>Goal:</strong> {mentee.mentorshipGoal}</p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Sessions completed:</span>
                            <span className="font-medium ml-1">{mentee.sessionsCompleted}</span>
                          </div>
                          {mentee.nextSession && (
                            <div>
                              <span className="text-muted-foreground">Next session:</span>
                              <span className="font-medium ml-1">{mentee.nextSession}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm">
                            <Video className="h-4 w-4 mr-1" />
                            Schedule Session
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View Progress
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {mentees.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No mentees yet</h3>
                    <p className="text-muted-foreground mb-4">Check the requests tab to accept new mentorship requests.</p>
                    <Button>View Requests</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="requests" className="space-y-4">
              {mentorshipRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{request.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {request.major} • {request.year} • {request.university}
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground">Received: {request.receivedDate}</span>
                        </div>

                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">{request.message}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Accept Request
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {mentorshipRequests.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No new requests</h3>
                    <p className="text-muted-foreground">Mentorship requests will appear here when students reach out.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="sessions" className="space-y-4">
              {pastSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{session.topic}</h3>
                        <p className="text-sm text-muted-foreground">with {session.mentee}</p>
                      </div>
                      <Badge variant="outline">{session.type}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {session.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {session.duration}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-1">Session Notes:</p>
                        <p className="text-sm text-muted-foreground">{session.notes}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Outcome:</p>
                        <p className="text-sm text-muted-foreground">{session.outcome}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4 mr-1" />
                        Rate Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="availability" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Mentorship Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Weekly Availability</p>
                        <p className="text-sm text-muted-foreground">How many hours per week can you dedicate to mentoring?</p>
                      </div>
                      <select className="border rounded px-3 py-1">
                        <option>2-4 hours</option>
                        <option>5-8 hours</option>
                        <option>9-12 hours</option>
                        <option>12+ hours</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Preferred Session Types</p>
                        <p className="text-sm text-muted-foreground">Video calls, in-person meetings, etc.</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Video Call</Badge>
                        <Badge variant="outline">In-Person</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Maximum Mentees</p>
                        <p className="text-sm text-muted-foreground">How many students can you mentor simultaneously?</p>
                      </div>
                      <select className="border rounded px-3 py-1">
                        <option>1-2 mentees</option>
                        <option>3-5 mentees</option>
                        <option>6-8 mentees</option>
                        <option>8+ mentees</option>
                      </select>
                    </div>
                  </div>

                  <Button className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Update Availability
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}