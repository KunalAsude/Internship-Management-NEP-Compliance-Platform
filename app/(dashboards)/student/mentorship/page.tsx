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
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Bell,
  Search,
  FileText,
  MessageCircle,
  Target,
  Building,
  User,
  Star,
  Video,
  Mail,
  Phone
} from "lucide-react"

export default function StudentMentorship() {
  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search },
      { href: "/student/applications", label: "My Applications", icon: FileText },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen },
      { href: "/student/mentorship", label: "Mentorship", icon: Users, active: true },
      { href: "/student/resources", label: "Resources", icon: Target },
    ],
    [],
  )

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "TechCorp",
      expertise: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessionsCompleted: 45,
      availability: "Available",
      bio: "Passionate about helping students navigate their tech careers. 8+ years in full-stack development.",
      image: "/placeholder-user.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "InnovateLabs",
      expertise: ["Product Strategy", "Agile", "UX Design"],
      rating: 4.8,
      sessionsCompleted: 32,
      availability: "Busy",
      bio: "Former startup founder turned PM. Love mentoring aspiring product managers and designers.",
      image: "/placeholder-user.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Data Scientist",
      company: "DataSys Analytics",
      expertise: ["Python", "Machine Learning", "Statistics"],
      rating: 4.7,
      sessionsCompleted: 28,
      availability: "Available",
      bio: "PhD in Statistics with 6 years in data science. Excited to help students break into the field.",
      image: "/placeholder-user.jpg"
    },
    {
      id: 4,
      name: "David Kim",
      title: "UX Designer",
      company: "DesignHub",
      expertise: ["Figma", "User Research", "Prototyping"],
      rating: 4.9,
      sessionsCompleted: 51,
      availability: "Available",
      bio: "Creative designer with a passion for user-centered design. Always happy to share design insights.",
      image: "/placeholder-user.jpg"
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      mentor: "Sarah Johnson",
      date: "2025-01-25",
      time: "2:00 PM - 3:00 PM",
      topic: "Career Planning in Tech",
      type: "Video Call",
      status: "Confirmed"
    },
    {
      id: 2,
      mentor: "Michael Chen",
      date: "2025-01-28",
      time: "10:00 AM - 11:00 AM",
      topic: "Product Management Interview Prep",
      type: "Video Call",
      status: "Pending"
    }
  ]

  const pastSessions = [
    {
      id: 3,
      mentor: "Emily Rodriguez",
      date: "2025-01-15",
      time: "3:00 PM - 4:00 PM",
      topic: "Introduction to Machine Learning",
      type: "Video Call",
      status: "Completed",
      feedback: "Very helpful session! Learned a lot about ML fundamentals."
    },
    {
      id: 4,
      mentor: "David Kim",
      date: "2025-01-10",
      time: "1:00 PM - 2:00 PM",
      topic: "UX Design Portfolio Review",
      type: "Video Call",
      status: "Completed",
      feedback: "Great feedback on my portfolio. Really appreciate the detailed suggestions."
    }
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="p-2">
            <SidebarGroupLabel className="mb-3 px-2">Student Portal</SidebarGroupLabel>
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
          <Tabs defaultValue="mentors" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="past">Past Sessions</TabsTrigger>
            </TabsList>
            <TabsContent value="mentors" className="space-y-4">
              <div className="grid gap-4">
                {mentors.map((mentor) => (
                  <Card key={mentor.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={mentor.image} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground">{mentor.title} at {mentor.company}</p>
                          </div>
                          <p className="text-sm">{mentor.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {mentor.rating}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {mentor.sessionsCompleted} sessions
                            </div>
                            <Badge variant={mentor.availability === "Available" ? "default" : "secondary"}>
                              {mentor.availability}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <Video className="h-4 w-4 mr-1" />
                              Schedule Session
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            <Button variant="outline" size="sm">
                              <User className="h-4 w-4 mr-1" />
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{session.topic}</h3>
                        <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {session.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {session.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            {session.type}
                          </div>
                        </div>
                      </div>
                      <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                        {session.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Video className="h-4 w-4 mr-1" />
                        Join Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message Mentor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {upcomingSessions.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No upcoming sessions</h3>
                    <p className="text-muted-foreground mb-4">Schedule a session with a mentor to get started.</p>
                    <Button>Find a Mentor</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="past" className="space-y-4">
              {pastSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{session.topic}</h3>
                        <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {session.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {session.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            {session.type}
                          </div>
                        </div>
                        {session.feedback && (
                          <div className="bg-green-50 p-3 rounded-lg mt-3">
                            <p className="text-sm font-medium mb-1">Your Feedback:</p>
                            <p className="text-sm text-green-800">{session.feedback}</p>
                          </div>
                        )}
                      </div>
                      <Badge variant="outline">{session.status}</Badge>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View Notes
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4 mr-1" />
                        Rate Session
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Follow Up
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}