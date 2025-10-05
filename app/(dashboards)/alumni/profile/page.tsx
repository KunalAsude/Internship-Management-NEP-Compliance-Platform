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
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  Plus,
  Building
} from "lucide-react"

export default function AlumniProfile() {
  const menu = useMemo(
    () => [
      { href: "/alumni/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/alumni/profile", label: "My Profile", icon: GraduationCap, active: true },
      { href: "/alumni/mentorship", label: "Mentorship", icon: Users },
      { href: "/alumni/network", label: "Network", icon: Network },
      { href: "/alumni/resources", label: "Resources", icon: BookOpen },
      { href: "/alumni/success-stories", label: "Success Stories", icon: Award },
    ],
    [],
  )

  const alumniProfile = {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@alumni.edu",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    graduationYear: "2015",
    degree: "PhD in Computer Science",
    university: "State University",
    currentPosition: "Senior Software Engineer",
    company: "TechCorp Solutions",
    industry: "Technology",
    linkedin: "linkedin.com/in/sarahjohnson",
    bio: "Passionate about bridging the gap between academia and industry. Love mentoring the next generation of engineers and contributing to open-source projects.",
    skills: ["Software Engineering", "Machine Learning", "Leadership", "Mentoring", "Python", "JavaScript"],
    achievements: [
      "Published 15+ research papers in top-tier conferences",
      "Led a team of 20+ engineers at TechCorp",
      "Open-source contributor with 50+ projects",
      "Received 'Mentor of the Year' award 2023"
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        duration: "2018 - Present",
        description: "Leading development of AI-powered applications serving millions of users."
      },
      {
        title: "Research Scientist",
        company: "AI Research Lab",
        duration: "2015 - 2018",
        description: "Conducted cutting-edge research in machine learning and computer vision."
      }
    ],
    mentorshipStats: {
      menteesHelped: 45,
      hoursMentored: 120,
      successRate: 92
    }
  }

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
            <h1 className="text-lg font-semibold">My Profile</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={alumniProfile.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={alumniProfile.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={alumniProfile.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue={alumniProfile.location} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue={alumniProfile.linkedin} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduation">Graduation Year</Label>
                      <Input id="graduation" defaultValue={alumniProfile.graduationYear} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue={alumniProfile.bio}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Skills & Expertise</Label>
                    <div className="flex flex-wrap gap-2">
                      {alumniProfile.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Personal Info
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="professional" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="position">Current Position</Label>
                      <Input id="position" defaultValue={alumniProfile.currentPosition} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" defaultValue={alumniProfile.company} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue={alumniProfile.industry}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Consulting">Consulting</SelectItem>
                          <SelectItem value="Research">Research</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree</Label>
                      <Input id="degree" defaultValue={alumniProfile.degree} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Input id="university" defaultValue={alumniProfile.university} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Work Experience</h4>
                    {alumniProfile.experience.map((exp, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <h5 className="font-medium">{exp.title}</h5>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-sm">{exp.description}</p>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Professional Info
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="mentorship" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Mentorship Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{alumniProfile.mentorshipStats.menteesHelped}</div>
                      <p className="text-sm text-muted-foreground">Mentees Helped</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{alumniProfile.mentorshipStats.hoursMentored}</div>
                      <p className="text-sm text-muted-foreground">Hours Mentored</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{alumniProfile.mentorshipStats.successRate}%</div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="availability">Mentorship Availability</Label>
                      <Select defaultValue="available">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available for mentoring</SelectItem>
                          <SelectItem value="limited">Limited availability</SelectItem>
                          <SelectItem value="unavailable">Not available</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mentoring-interests">Mentoring Interests</Label>
                      <Textarea
                        id="mentoring-interests"
                        rows={3}
                        placeholder="e.g., Career guidance, Technical skills, Interview preparation, Networking..."
                        defaultValue="Career guidance, Technical skills development, Interview preparation, Industry insights, Networking opportunities"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mentoring-style">Mentoring Style</Label>
                      <Textarea
                        id="mentoring-style"
                        rows={3}
                        placeholder="Describe your mentoring approach..."
                        defaultValue="I believe in personalized mentoring that adapts to each individual's needs and goals. I focus on building confidence, developing technical skills, and providing real-world insights from my industry experience."
                      />
                    </div>
                  </div>

                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Update Mentorship Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Achievements & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {alumniProfile.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <p className="text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Achievement
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Certifications & Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">AWS Certified Solutions Architect</p>
                        <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <p className="font-medium">Mentor of the Year 2023</p>
                      <p className="text-sm text-muted-foreground">State University Alumni Association</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Certification
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