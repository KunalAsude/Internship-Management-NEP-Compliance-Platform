"use client"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
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
  Search,
  Filter,
  Download,
  Mail,
  Phone
} from "lucide-react"

export default function RecruiterApplicants() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [positionFilter, setPositionFilter] = useState("all")

  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users, active: true },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp },
    ],
    [],
  )

  const applicants = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      phone: "+1 (555) 123-4567",
      position: "Frontend Developer Intern",
      status: "Shortlisted",
      appliedDate: "2025-01-15",
      rating: 4.5,
      university: "State University",
      major: "Computer Science",
      gpa: "3.8",
      skills: ["React", "JavaScript", "CSS", "TypeScript"],
      experience: "2 years of web development projects",
      resumeUrl: "#",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@email.com",
      phone: "+1 (555) 234-5678",
      position: "Data Analyst Intern",
      status: "Interview Scheduled",
      appliedDate: "2025-01-12",
      rating: 4.2,
      university: "Tech Institute",
      major: "Data Science",
      gpa: "3.9",
      skills: ["Python", "SQL", "Tableau", "Statistics"],
      experience: "Research assistant in data analysis",
      resumeUrl: "#",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.davis@email.com",
      phone: "+1 (555) 345-6789",
      position: "UX Design Intern",
      status: "Applied",
      appliedDate: "2025-01-10",
      rating: 4.0,
      university: "Design College",
      major: "Graphic Design",
      gpa: "3.7",
      skills: ["Figma", "Sketch", "User Research", "Prototyping"],
      experience: "Freelance design projects",
      resumeUrl: "#",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "+1 (555) 456-7890",
      position: "Backend Developer Intern",
      status: "Under Review",
      appliedDate: "2025-01-08",
      rating: 4.3,
      university: "Engineering University",
      major: "Software Engineering",
      gpa: "3.6",
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
      experience: "Full-stack web application development",
      resumeUrl: "#",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 5,
      name: "Eva Martinez",
      email: "eva.martinez@email.com",
      phone: "+1 (555) 567-8901",
      position: "Frontend Developer Intern",
      status: "Rejected",
      appliedDate: "2025-01-05",
      rating: 3.8,
      university: "Community College",
      major: "Web Development",
      gpa: "3.5",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      experience: "Personal projects and online courses",
      resumeUrl: "#",
      avatar: "/placeholder-user.jpg"
    }
  ]

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.university.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || applicant.status.toLowerCase().replace(" ", "-") === statusFilter
    const matchesPosition = positionFilter === "all" || applicant.position === positionFilter

    return matchesSearch && matchesStatus && matchesPosition
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Shortlisted": return "bg-green-100 text-green-800"
      case "Interview Scheduled": return "bg-blue-100 text-blue-800"
      case "Under Review": return "bg-yellow-100 text-yellow-800"
      case "Applied": return "bg-gray-100 text-gray-800"
      case "Rejected": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const positions = [...new Set(applicants.map(a => a.position))]
  const statuses = ["all", "applied", "under-review", "shortlisted", "interview-scheduled", "rejected"]

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
            <h1 className="text-lg font-semibold">Applicants</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search applicants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="interview-scheduled">Interview Scheduled</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                {positions.map(position => (
                  <SelectItem key={position} value={position}>{position}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="grid gap-4">
            {filteredApplicants.map((applicant) => (
              <Card key={applicant.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={applicant.avatar} alt={applicant.name} />
                      <AvatarFallback>{applicant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{applicant.name}</h3>
                          <p className="text-sm text-muted-foreground">{applicant.position}</p>
                          <p className="text-sm text-muted-foreground">{applicant.university} • {applicant.major} • GPA: {applicant.gpa}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(applicant.status)}>
                            {applicant.status}
                          </Badge>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{applicant.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {applicant.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">{applicant.experience}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {applicant.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {applicant.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied: {applicant.appliedDate}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        {applicant.status === "Applied" && (
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Shortlist
                          </Button>
                        )}
                        {applicant.status === "Shortlisted" && (
                          <Button size="sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            Schedule Interview
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredApplicants.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No applicants found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}