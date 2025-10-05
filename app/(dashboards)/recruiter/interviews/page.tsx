"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  Video,
  User,
  Save,
  X
} from "lucide-react"

export default function RecruiterInterviews() {
  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar, active: true },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp },
    ],
    [],
  )

  const interviews = [
    {
      id: 1,
      candidate: {
        name: "Alice Johnson",
        position: "Frontend Developer Intern",
        avatar: "/placeholder-user.jpg",
        university: "State University"
      },
      date: "2025-01-25",
      time: "2:00 PM - 3:00 PM",
      type: "Video Call",
      interviewers: ["Sarah Johnson", "Michael Chen"],
      status: "Scheduled",
      notes: "Technical interview focusing on React and JavaScript fundamentals.",
      feedback: null
    },
    {
      id: 2,
      candidate: {
        name: "Bob Smith",
        position: "Data Analyst Intern",
        avatar: "/placeholder-user.jpg",
        university: "Tech Institute"
      },
      date: "2025-01-28",
      time: "10:00 AM - 11:00 AM",
      type: "In-Person",
      interviewers: ["Emily Rodriguez"],
      status: "Pending",
      notes: "Behavioral interview and data analysis case study.",
      feedback: null
    },
    {
      id: 3,
      candidate: {
        name: "Carol Davis",
        position: "UX Design Intern",
        avatar: "/placeholder-user.jpg",
        university: "Design College"
      },
      date: "2025-01-20",
      time: "3:00 PM - 4:00 PM",
      type: "Video Call",
      interviewers: ["David Kim"],
      status: "Completed",
      notes: "Portfolio review and design thinking assessment.",
      feedback: "Excellent portfolio with strong design fundamentals. Good understanding of user-centered design principles. Recommended for offer."
    },
    {
      id: 4,
      candidate: {
        name: "David Wilson",
        position: "Backend Developer Intern",
        avatar: "/placeholder-user.jpg",
        university: "Engineering University"
      },
      date: "2025-01-18",
      time: "1:00 PM - 2:00 PM",
      type: "Video Call",
      interviewers: ["Sarah Johnson", "Michael Chen"],
      status: "Completed",
      notes: "Technical interview covering Node.js, databases, and system design.",
      feedback: "Strong technical skills with good problem-solving approach. Solid understanding of backend concepts. Proceed to final round."
    }
  ]

  const upcomingInterviews = interviews.filter(i => i.status === "Scheduled" || i.status === "Pending")
  const completedInterviews = interviews.filter(i => i.status === "Completed")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled": return "bg-blue-100 text-blue-800"
      case "Pending": return "bg-yellow-100 text-yellow-800"
      case "Completed": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
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
            <h1 className="text-lg font-semibold">Interviews</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming ({upcomingInterviews.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedInterviews.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <Card key={interview.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={interview.candidate.avatar} alt={interview.candidate.name} />
                        <AvatarFallback>{interview.candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{interview.candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">{interview.candidate.position}</p>
                            <p className="text-sm text-muted-foreground">{interview.candidate.university}</p>
                          </div>
                          <Badge className={getStatusColor(interview.status)}>
                            {interview.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.interviewers.length} interviewer{interview.interviewers.length > 1 ? 's' : ''}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-1">Interview Notes:</p>
                          <p className="text-sm text-muted-foreground">{interview.notes}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm">
                            <Video className="h-4 w-4 mr-1" />
                            Join Interview
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Send Reminder
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {upcomingInterviews.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No upcoming interviews</h3>
                    <p className="text-muted-foreground">Schedule interviews with shortlisted candidates.</p>
                    <Button className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule Interview
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              {completedInterviews.map((interview) => (
                <Card key={interview.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={interview.candidate.avatar} alt={interview.candidate.name} />
                        <AvatarFallback>{interview.candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{interview.candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">{interview.candidate.position}</p>
                            <p className="text-sm text-muted-foreground">{interview.candidate.university}</p>
                          </div>
                          <Badge className={getStatusColor(interview.status)}>
                            {interview.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{interview.interviewers.join(", ")}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-1">Interview Notes:</p>
                          <p className="text-sm text-muted-foreground">{interview.notes}</p>
                        </div>

                        {interview.feedback && (
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm font-medium mb-2">Interview Feedback:</p>
                            <p className="text-sm text-blue-800">{interview.feedback}</p>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            Generate Report
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Make Decision
                          </Button>
                        </div>
                      </div>
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