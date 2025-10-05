"use client"
import { useMemo, useState } from "react"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
  Filter,
  Briefcase,
  DollarSign,
  Globe
} from "lucide-react"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function StudentSearch() {
  const { data: opportunities } = useSWR("/api/map/opportunities", fetcher)
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [industry, setIndustry] = useState("")
  const [type, setType] = useState("")
  const [remote, setRemote] = useState(false)

  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search, active: true },
      { href: "/student/applications", label: "My Applications", icon: FileText },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen },
      { href: "/student/mentorship", label: "Mentorship", icon: Users },
      { href: "/student/resources", label: "Resources", icon: Target },
    ],
    [],
  )

  const sampleOpportunities = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "New York, NY",
      type: "Summer Internship",
      salary: "$25-30/hr",
      description: "Join our team to build modern web applications using React and TypeScript.",
      skills: ["React", "TypeScript", "CSS"],
      postedDate: "2025-01-10",
      deadline: "2025-02-15",
      remote: true
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "DataSys Analytics",
      location: "San Francisco, CA",
      type: "Co-op",
      salary: "$28-35/hr",
      description: "Analyze large datasets and create insightful reports for business decisions.",
      skills: ["Python", "SQL", "Tableau"],
      postedDate: "2025-01-08",
      deadline: "2025-02-10",
      remote: false
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "DesignHub",
      location: "Austin, TX",
      type: "Summer Internship",
      salary: "$22-28/hr",
      description: "Design user-centered interfaces and conduct user research.",
      skills: ["Figma", "Sketch", "User Research"],
      postedDate: "2025-01-12",
      deadline: "2025-02-20",
      remote: true
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Year-round",
      salary: "$30-40/hr",
      description: "Develop scalable backend services using Node.js and cloud technologies.",
      skills: ["Node.js", "AWS", "MongoDB"],
      postedDate: "2025-01-05",
      deadline: "2025-02-05",
      remote: false
    }
  ]

  const filteredOpportunities = sampleOpportunities.filter(opp => {
    return (
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (location === "" || opp.location.toLowerCase().includes(location.toLowerCase())) &&
    (industry === "" || opp.skills.some(skill => skill.toLowerCase().includes(industry.toLowerCase()))) &&
    (type === "" || opp.type === type) &&
    (!remote || opp.remote)
  })

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
            <h1 className="text-lg font-semibold">Find Internships</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search & Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <Input
                    placeholder="Job title, company, or keywords"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    placeholder="City, State"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Industry</label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Type</label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Summer Internship">Summer Internship</SelectItem>
                      <SelectItem value="Co-op">Co-op</SelectItem>
                      <SelectItem value="Year-round">Year-round</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remote"
                  checked={remote}
                  onCheckedChange={setRemote}
                />
                <label htmlFor="remote" className="text-sm font-medium">
                  Remote work only
                </label>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {opportunity.company}
                      </p>
                    </div>
                    <Badge variant="secondary">{opportunity.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {opportunity.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Deadline: {opportunity.deadline}
                    </div>
                    {opportunity.remote && (
                      <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        Remote
                      </div>
                    )}
                  </div>
                  <p className="text-sm">{opportunity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Apply Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No internships found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}