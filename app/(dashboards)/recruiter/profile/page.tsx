"use client"
import { useMemo } from "react"
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
  Building,
  Mail,
  Phone,
  Globe,
  Edit,
  Save,
  Upload
} from "lucide-react"

export default function RecruiterProfile() {
  const menu = useMemo(
    () => [
      { href: "/recruiter/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/recruiter/postings", label: "Job Postings", icon: Briefcase },
      { href: "/recruiter/applicants", label: "Applicants", icon: Users },
      { href: "/recruiter/interviews", label: "Interviews", icon: Calendar },
      { href: "/recruiter/profile", label: "Company Profile", icon: FileText, active: true },
      { href: "/recruiter/reports", label: "Reports", icon: TrendingUp },
    ],
    [],
  )

  const companyProfile = {
    name: "TechCorp Solutions",
    industry: "Technology",
    size: "500-1000 employees",
    website: "https://techcorp.com",
    email: "hr@techcorp.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    description: "TechCorp Solutions is a leading technology company specializing in innovative software solutions for businesses worldwide. We are committed to fostering talent development through our comprehensive internship programs.",
    founded: "2010",
    specialties: ["Software Development", "Data Analytics", "Cloud Computing", "AI/ML"],
    benefits: ["Competitive Salary", "Mentorship Program", "Flexible Hours", "Professional Development"],
    culture: "We believe in creating an inclusive environment where innovation thrives and employees can grow both personally and professionally."
  }

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      email: "sarah.johnson@techcorp.com",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      email: "michael.chen@techcorp.com",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Talent Acquisition Lead",
      email: "emily.rodriguez@techcorp.com",
      avatar: "/placeholder-user.jpg"
    }
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
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-sidebar-border" />
            <h1 className="text-lg font-semibold">Company Profile</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="company">Company Info</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="company" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" defaultValue={companyProfile.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue={companyProfile.industry}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="size">Company Size</Label>
                      <Select defaultValue={companyProfile.size}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                          <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                          <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                          <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                          <SelectItem value="500-1000 employees">500-1000 employees</SelectItem>
                          <SelectItem value="1000+ employees">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founded">Founded</Label>
                      <Input id="founded" defaultValue={companyProfile.founded} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" type="url" defaultValue={companyProfile.website} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Contact Email</Label>
                      <Input id="email" type="email" defaultValue={companyProfile.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={companyProfile.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue={companyProfile.location} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      rows={4}
                      defaultValue={companyProfile.description}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Specialties</Label>
                    <div className="flex flex-wrap gap-2">
                      {companyProfile.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Benefits Offered</Label>
                    <div className="flex flex-wrap gap-2">
                      {companyProfile.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline">{benefit}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="culture">Company Culture</Label>
                    <Textarea
                      id="culture"
                      rows={3}
                      defaultValue={companyProfile.culture}
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Company Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Team Members
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="new-applications" defaultChecked />
                        <label htmlFor="new-applications" className="text-sm">New applications</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="interview-reminders" defaultChecked />
                        <label htmlFor="interview-reminders" className="text-sm">Interview reminders</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="weekly-reports" />
                        <label htmlFor="weekly-reports" className="text-sm">Weekly reports</label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="privacy">Privacy Settings</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="profile-visibility" defaultChecked />
                        <label htmlFor="profile-visibility" className="text-sm">Make company profile visible to students</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="contact-info" defaultChecked />
                        <label htmlFor="contact-info" className="text-sm">Show contact information</label>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
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