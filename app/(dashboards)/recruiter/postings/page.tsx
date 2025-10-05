"use client"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  Edit,
  Trash2,
  Search,
  Filter
} from "lucide-react"

export default function RecruiterPostings() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase, active: true },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp },
    ],
    [],
  )

  const jobPostings = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      location: "New York, NY",
      type: "Summer Internship",
      status: "Active",
      applicants: 45,
      deadline: "2025-02-15",
      salary: "$25-30/hr",
      description: "Join our team to build modern web applications using React and TypeScript.",
      requirements: ["React", "JavaScript", "CSS", "Git"],
      postedDate: "2025-01-10"
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      location: "San Francisco, CA",
      type: "Co-op",
      status: "Active",
      applicants: 32,
      deadline: "2025-02-20",
      salary: "$28-35/hr",
      description: "Analyze large datasets and create insightful reports for business decisions.",
      requirements: ["Python", "SQL", "Excel", "Statistics"],
      postedDate: "2025-01-08"
    },
    {
      id: 3,
      title: "UX Design Intern",
      location: "Austin, TX",
      type: "Summer Internship",
      status: "Draft",
      applicants: 0,
      deadline: "2025-02-10",
      salary: "$22-28/hr",
      description: "Design user-centered interfaces and conduct user research.",
      requirements: ["Figma", "Sketch", "User Research", "Prototyping"],
      postedDate: "2025-01-12"
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      location: "Seattle, WA",
      type: "Year-round",
      status: "Closed",
      applicants: 67,
      deadline: "2025-01-30",
      salary: "$30-40/hr",
      description: "Develop scalable backend services using Node.js and cloud technologies.",
      requirements: ["Node.js", "AWS", "MongoDB", "REST APIs"],
      postedDate: "2024-12-15"
    }
  ]

  const filteredPostings = jobPostings.filter(posting =>
    posting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    posting.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800"
      case "Draft": return "bg-yellow-100 text-yellow-800"
      case "Closed": return "bg-red-100 text-red-800"
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
            <h1 className="text-lg font-semibold">Job Postings</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search postings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Posting
            </Button>
          </div>

          {showCreateForm && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Create New Job Posting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" placeholder="e.g. Frontend Developer Intern" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, State" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Internship Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summer">Summer Internship</SelectItem>
                        <SelectItem value="coop">Co-op</SelectItem>
                        <SelectItem value="year-round">Year-round</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary Range</Label>
                    <Input id="salary" placeholder="e.g. $25-30/hr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" placeholder="e.g. Engineering" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Describe the role, responsibilities, and what the intern will learn..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements (one per line)</Label>
                  <Textarea
                    id="requirements"
                    rows={3}
                    placeholder="React&#10;JavaScript&#10;CSS&#10;Git"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                  <Button className="flex-1">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Publish Posting
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Active ({jobPostings.filter(p => p.status === "Active").length})</TabsTrigger>
              <TabsTrigger value="draft">Drafts ({jobPostings.filter(p => p.status === "Draft").length})</TabsTrigger>
              <TabsTrigger value="closed">Closed ({jobPostings.filter(p => p.status === "Closed").length})</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {filteredPostings.filter(p => p.status === "Active").map((posting) => (
                <Card key={posting.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{posting.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {posting.location} • {posting.type}
                        </p>
                      </div>
                      <Badge className={getStatusColor(posting.status)}>
                        {posting.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{posting.applicants}</div>
                        <div className="text-xs text-muted-foreground">Applicants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{posting.salary}</div>
                        <div className="text-xs text-muted-foreground">Salary</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{posting.deadline}</div>
                        <div className="text-xs text-muted-foreground">Deadline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{posting.postedDate}</div>
                        <div className="text-xs text-muted-foreground">Posted</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{posting.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {posting.requirements.map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Applicants
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Close
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="draft" className="space-y-4">
              {filteredPostings.filter(p => p.status === "Draft").map((posting) => (
                <Card key={posting.id} className="border-dashed">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{posting.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {posting.location} • {posting.type}
                        </p>
                      </div>
                      <Badge className={getStatusColor(posting.status)}>
                        {posting.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{posting.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Publish
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="closed" className="space-y-4">
              {filteredPostings.filter(p => p.status === "Closed").map((posting) => (
                <Card key={posting.id} className="opacity-75">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{posting.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {posting.location} • {posting.type}
                        </p>
                      </div>
                      <Badge className={getStatusColor(posting.status)}>
                        {posting.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{posting.applicants}</div>
                        <div className="text-xs text-muted-foreground">Total Applicants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{posting.salary}</div>
                        <div className="text-xs text-muted-foreground">Salary</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{posting.deadline}</div>
                        <div className="text-xs text-muted-foreground">Deadline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{posting.postedDate}</div>
                        <div className="text-xs text-muted-foreground">Posted</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Results
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Reopen
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