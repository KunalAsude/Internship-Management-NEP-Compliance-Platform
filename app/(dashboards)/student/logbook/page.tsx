"use client"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  Plus,
  Edit,
  Save,
  Timer
} from "lucide-react"

export default function StudentLogbook() {
  const [newEntry, setNewEntry] = useState({
    date: "",
    hours: "",
    activity: "",
    description: "",
    skills: ""
  })

  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search },
      { href: "/student/applications", label: "My Applications", icon: FileText },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen, active: true },
      { href: "/student/mentorship", label: "Mentorship", icon: Users },
      { href: "/student/resources", label: "Resources", icon: Target },
    ],
    [],
  )

  const logEntries = [
    {
      id: 1,
      date: "2025-01-15",
      hours: 8,
      activity: "Frontend Development",
      description: "Worked on implementing responsive design for the user dashboard. Used React hooks for state management and CSS Grid for layout.",
      skills: ["React", "CSS", "JavaScript"],
      supervisorFeedback: "Great progress on the dashboard layout. Code is clean and well-documented.",
      status: "Approved"
    },
    {
      id: 2,
      date: "2025-01-14",
      hours: 6,
      activity: "Team Meeting & Planning",
      description: "Participated in sprint planning meeting. Discussed upcoming features and assigned tasks for the week.",
      skills: ["Communication", "Planning"],
      supervisorFeedback: "Active participation in the meeting. Good understanding of project requirements.",
      status: "Approved"
    },
    {
      id: 3,
      date: "2025-01-13",
      hours: 7,
      activity: "Database Optimization",
      description: "Optimized database queries for better performance. Implemented indexing and query optimization techniques.",
      skills: ["SQL", "Database Design"],
      supervisorFeedback: "Significant improvement in query performance. Well-researched approach.",
      status: "Pending"
    },
    {
      id: 4,
      date: "2025-01-12",
      hours: 8,
      activity: "API Development",
      description: "Developed RESTful API endpoints for user management. Implemented authentication and authorization.",
      skills: ["Node.js", "Express", "JWT"],
      supervisorFeedback: null,
      status: "Draft"
    }
  ]

  const totalHours = logEntries.reduce((sum, entry) => sum + entry.hours, 0)
  const approvedHours = logEntries.filter(entry => entry.status === "Approved").reduce((sum, entry) => sum + entry.hours, 0)
  const requiredHours = 400 // Example requirement

  const handleAddEntry = () => {
    // In a real app, this would submit to an API
    console.log("Adding new entry:", newEntry)
    setNewEntry({ date: "", hours: "", activity: "", description: "", skills: "" })
  }

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
            <h1 className="text-lg font-semibold">Internship Logbook</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Hours Logged</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalHours}</div>
                <p className="text-xs text-muted-foreground">
                  of {requiredHours} required hours
                </p>
                <Progress value={(totalHours / requiredHours) * 100} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Approved Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{approvedHours}</div>
                <p className="text-xs text-muted-foreground">
                  {((approvedHours / requiredHours) * 100).toFixed(1)}% of requirement
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">21</div>
                <p className="text-xs text-muted-foreground">
                  hours logged this week
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="entries" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="entries">Log Entries</TabsTrigger>
              <TabsTrigger value="add">Add New Entry</TabsTrigger>
            </TabsList>
            <TabsContent value="entries" className="space-y-4">
              {logEntries.map((entry) => (
                <Card key={entry.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{entry.activity}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {entry.date}
                          <Timer className="h-4 w-4 ml-2" />
                          {entry.hours} hours
                        </p>
                      </div>
                      <Badge variant={
                        entry.status === "Approved" ? "default" :
                        entry.status === "Pending" ? "secondary" : "outline"
                      }>
                        {entry.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Description:</p>
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Skills Developed:</p>
                      <div className="flex flex-wrap gap-2">
                        {entry.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {entry.supervisorFeedback && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">Supervisor Feedback:</p>
                        <p className="text-sm text-blue-800">{entry.supervisorFeedback}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="add" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Add New Log Entry
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEntry.date}
                        onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hours">Hours Worked</Label>
                      <Input
                        id="hours"
                        type="number"
                        placeholder="8"
                        value={newEntry.hours}
                        onChange={(e) => setNewEntry({...newEntry, hours: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="activity">Activity Type</Label>
                    <Select value={newEntry.activity} onValueChange={(value) => setNewEntry({...newEntry, activity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                        <SelectItem value="Backend Development">Backend Development</SelectItem>
                        <SelectItem value="Database Management">Database Management</SelectItem>
                        <SelectItem value="Testing & QA">Testing & QA</SelectItem>
                        <SelectItem value="Documentation">Documentation</SelectItem>
                        <SelectItem value="Meetings">Meetings</SelectItem>
                        <SelectItem value="Research">Research</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what you worked on today..."
                      rows={4}
                      value={newEntry.description}
                      onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills Developed (comma-separated)</Label>
                    <Input
                      id="skills"
                      placeholder="React, JavaScript, CSS"
                      value={newEntry.skills}
                      onChange={(e) => setNewEntry({...newEntry, skills: e.target.value})}
                    />
                  </div>
                  <Button onClick={handleAddEntry} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Entry
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