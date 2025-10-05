"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  Download,
  ExternalLink,
  Play,
  Book,
  Code,
  Briefcase,
  Lightbulb
} from "lucide-react"

export default function StudentResources() {
  const menu = useMemo(
    () => [
      { href: "/student/dashboard", label: "Dashboard", icon: TrendingUp },
      { href: "/student/profile", label: "Profile", icon: GraduationCap },
      { href: "/student/search", label: "Find Internships", icon: Search },
      { href: "/student/applications", label: "My Applications", icon: FileText },
      { href: "/student/logbook", label: "Logbook", icon: BookOpen },
      { href: "/student/mentorship", label: "Mentorship", icon: Users },
      { href: "/student/resources", label: "Resources", icon: Target, active: true },
    ],
    [],
  )

  const resources = {
    guides: [
      {
        id: 1,
        title: "Resume Writing Guide for Internships",
        description: "Complete guide to crafting an effective internship resume that stands out to employers.",
        type: "Guide",
        category: "Career Preparation",
        readTime: "15 min",
        downloads: 1250,
        icon: FileText
      },
      {
        id: 2,
        title: "Technical Interview Preparation",
        description: "Master the most common technical interview questions and learn problem-solving strategies.",
        type: "Guide",
        category: "Interview Prep",
        readTime: "25 min",
        downloads: 2100,
        icon: Code
      },
      {
        id: 3,
        title: "Networking Strategies for Students",
        description: "Build meaningful professional connections and leverage your network for opportunities.",
        type: "Guide",
        category: "Networking",
        readTime: "12 min",
        downloads: 890,
        icon: Users
      }
    ],
    videos: [
      {
        id: 4,
        title: "How to Ace Your Internship Interview",
        description: "Expert tips from industry professionals on interview preparation and performance.",
        type: "Video",
        category: "Interview Prep",
        duration: "18 min",
        views: 3400,
        icon: Play
      },
      {
        id: 5,
        title: "Building a Professional Online Presence",
        description: "Create compelling LinkedIn and GitHub profiles that attract employers.",
        type: "Video",
        category: "Career Preparation",
        duration: "22 min",
        views: 2800,
        icon: Play
      },
      {
        id: 6,
        title: "Understanding Company Culture",
        description: "Learn how to research and adapt to different workplace environments.",
        type: "Video",
        category: "Professional Development",
        duration: "15 min",
        views: 1950,
        icon: Play
      }
    ],
    tools: [
      {
        id: 7,
        title: "Resume Builder Tool",
        description: "Interactive tool to create professional resumes with customizable templates.",
        type: "Tool",
        category: "Career Preparation",
        icon: Briefcase
      },
      {
        id: 8,
        title: "Interview Practice Platform",
        description: "Practice common interview questions with AI-powered feedback.",
        type: "Tool",
        category: "Interview Prep",
        icon: MessageCircle
      },
      {
        id: 9,
        title: "Skill Assessment Tests",
        description: "Test your knowledge in various technical and soft skills areas.",
        type: "Tool",
        category: "Skill Development",
        icon: Target
      }
    ],
    articles: [
      {
        id: 10,
        title: "The Future of Work: Trends to Watch",
        description: "Explore emerging trends in the job market and how to prepare for them.",
        type: "Article",
        category: "Industry Insights",
        readTime: "8 min",
        icon: Lightbulb
      },
      {
        id: 11,
        title: "Work-Life Balance as an Intern",
        description: "Strategies for maintaining balance while maximizing your internship experience.",
        type: "Article",
        category: "Professional Development",
        readTime: "6 min",
        icon: Book
      },
      {
        id: 12,
        title: "From Intern to Full-Time: Making the Transition",
        description: "Tips for converting your internship into a permanent position.",
        type: "Article",
        category: "Career Advancement",
        readTime: "10 min",
        icon: TrendingUp
      }
    ]
  }

  const categories = ["All", "Career Preparation", "Interview Prep", "Networking", "Professional Development", "Skill Development", "Industry Insights", "Career Advancement"]

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
            <h1 className="text-lg font-semibold">Resources & Learning</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input placeholder="Search resources..." className="w-full" />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Featured Resources</h3>
                <div className="grid gap-4">
                  {[...resources.guides.slice(0, 1), ...resources.videos.slice(0, 1), ...resources.tools.slice(0, 1)].map((resource) => (
                    <Card key={resource.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <resource.icon className="h-8 w-8 text-blue-500 mt-1" />
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                            <p className="text-muted-foreground mb-3">{resource.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <Badge variant="secondary">{resource.category}</Badge>
                              {resource.readTime && <span>{resource.readTime} read</span>}
                              {resource.duration && <span>{resource.duration}</span>}
                              {resource.downloads && <span>{resource.downloads} downloads</span>}
                              {resource.views && <span>{resource.views} views</span>}
                            </div>
                            <Button>
                              {resource.type === "Video" ? (
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  Watch Now
                                </>
                              ) : resource.type === "Tool" ? (
                                <>
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Use Tool
                                </>
                              ) : (
                                <>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                      <h4 className="font-semibold">Resume Templates</h4>
                      <p className="text-sm text-muted-foreground">Professional templates</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <Code className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <h4 className="font-semibold">Code Samples</h4>
                      <p className="text-sm text-muted-foreground">Practice projects</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <Briefcase className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                      <h4 className="font-semibold">Interview Prep</h4>
                      <p className="text-sm text-muted-foreground">Practice questions</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <Book className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                      <h4 className="font-semibold">Career Guides</h4>
                      <p className="text-sm text-muted-foreground">Industry insights</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="guides" className="space-y-4">
              <div className="grid gap-4">
                {resources.guides.map((guide) => (
                  <Card key={guide.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <guide.icon className="h-6 w-6 text-blue-500 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{guide.title}</h4>
                          <p className="text-muted-foreground mb-3">{guide.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <Badge variant="secondary">{guide.category}</Badge>
                            <span>{guide.readTime} read</span>
                            <span>{guide.downloads} downloads</span>
                          </div>
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Download Guide
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos" className="space-y-4">
              <div className="grid gap-4">
                {resources.videos.map((video) => (
                  <Card key={video.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <video.icon className="h-6 w-6 text-red-500 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{video.title}</h4>
                          <p className="text-muted-foreground mb-3">{video.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <Badge variant="secondary">{video.category}</Badge>
                            <span>{video.duration}</span>
                            <span>{video.views} views</span>
                          </div>
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Watch Video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="space-y-4">
              <div className="grid gap-4">
                {resources.tools.map((tool) => (
                  <Card key={tool.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <tool.icon className="h-6 w-6 text-purple-500 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{tool.title}</h4>
                          <p className="text-muted-foreground mb-3">{tool.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <Badge variant="secondary">{tool.category}</Badge>
                          </div>
                          <Button>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Use Tool
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="articles" className="space-y-4">
              <div className="grid gap-4">
                {resources.articles.map((article) => (
                  <Card key={article.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <article.icon className="h-6 w-6 text-green-500 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                          <p className="text-muted-foreground mb-3">{article.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <Badge variant="secondary">{article.category}</Badge>
                            <span>{article.readTime} read</span>
                          </div>
                          <Button>
                            <Book className="h-4 w-4 mr-2" />
                            Read Article
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}