"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  Eye,
  Edit,
  X
} from "lucide-react"

export default function StudentApplications() {
  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search },
      { href: "/student/applications", label: "My Applications", icon: FileText, active: true },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen },
      { href: "/student/mentorship", label: "Mentorship", icon: Users },
      { href: "/student/resources", label: "Resources", icon: Target },
    ],
    [],
  )

  const applications = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "New York, NY",
      appliedDate: "2025-01-15",
      status: "Interview Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
      nextStep: "Technical Interview - Jan 25, 2025",
      notes: "Submitted portfolio and code samples"
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "DataSys Analytics",
      location: "San Francisco, CA",
      appliedDate: "2025-01-12",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800",
      nextStep: "Waiting for response",
      notes: "Strong match with required skills"
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "DesignHub",
      location: "Austin, TX",
      appliedDate: "2025-01-10",
      status: "Shortlisted",
      statusColor: "bg-green-100 text-green-800",
      nextStep: "Portfolio Review - Jan 28, 2025",
      notes: "Design portfolio impressed the team"
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      company: "CloudTech",
      location: "Seattle, WA",
      appliedDate: "2025-01-08",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      nextStep: "Position filled",
      notes: "Good experience, will apply for future roles"
    },
    {
      id: 5,
      title: "Marketing Intern",
      company: "BrandCo",
      location: "Chicago, IL",
      appliedDate: "2025-01-05",
      status: "Applied",
      statusColor: "bg-gray-100 text-gray-800",
      nextStep: "Application under initial review",
      notes: "Submitted with updated resume"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return <Calendar className="h-4 w-4" />
      case "Under Review":
        return <Clock className="h-4 w-4" />
      case "Shortlisted":
        return <CheckCircle className="h-4 w-4" />
      case "Rejected":
        return <X className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const activeApplications = applications.filter(app => app.status !== "Rejected")
  const archivedApplications = applications.filter(app => app.status === "Rejected")

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
            <h1 className="text-lg font-semibold">My Applications</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">Active Applications ({activeApplications.length})</TabsTrigger>
              <TabsTrigger value="archived">Archived ({archivedApplications.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {activeApplications.map((application) => (
                <Card key={application.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{application.title}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {application.company}
                        </p>
                      </div>
                      <Badge className={application.statusColor}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1">{application.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {application.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Applied: {application.appliedDate}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Next Step:</p>
                      <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Notes:</p>
                      <p className="text-sm text-muted-foreground">{application.notes}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Update
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="archived" className="space-y-4">
              {archivedApplications.map((application) => (
                <Card key={application.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{application.title}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {application.company}
                        </p>
                      </div>
                      <Badge className={application.statusColor}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1">{application.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {application.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Applied: {application.appliedDate}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Reason:</p>
                      <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Notes:</p>
                      <p className="text-sm text-muted-foreground">{application.notes}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
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