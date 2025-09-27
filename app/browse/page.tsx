"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, Download, Eye, Star, User, Clock } from "lucide-react"
import Link from "next/link"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Algebra",
      description:
        "Master the fundamentals of algebra with step-by-step lessons, practice problems, and real-world applications.",
      teacher: "Sarah Johnson",
      teacherVerified: true,
      subject: "Mathematics",
      gradeLevel: "Grade 8-9",
      difficulty: "Beginner",
      duration: "6 weeks",
      views: 1250,
      downloads: 340,
      rating: 4.8,
      tags: ["algebra", "equations", "problem-solving", "mathematics"],
      uploadDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      description:
        "Develop your creative writing skills through engaging exercises, storytelling techniques, and peer feedback.",
      teacher: "Michael Chen",
      teacherVerified: true,
      subject: "English",
      gradeLevel: "Grade 6-8",
      difficulty: "Intermediate",
      duration: "4 weeks",
      views: 890,
      downloads: 210,
      rating: 4.6,
      tags: ["writing", "creativity", "storytelling", "english"],
      uploadDate: "2024-01-20",
    },
    {
      id: 3,
      title: "Basic Chemistry Lab Experiments",
      description: "Safe and engaging chemistry experiments that can be done at home with common materials.",
      teacher: "Dr. Emily Rodriguez",
      teacherVerified: true,
      subject: "Science",
      gradeLevel: "Grade 9-10",
      difficulty: "Intermediate",
      duration: "8 weeks",
      views: 2100,
      downloads: 580,
      rating: 4.9,
      tags: ["chemistry", "experiments", "lab", "science"],
      uploadDate: "2024-01-10",
    },
    {
      id: 4,
      title: "World History: Ancient Civilizations",
      description:
        "Explore the rise and fall of ancient civilizations through interactive lessons and primary sources.",
      teacher: "Robert Thompson",
      teacherVerified: true,
      subject: "History",
      gradeLevel: "Grade 7-9",
      difficulty: "Beginner",
      duration: "10 weeks",
      views: 1680,
      downloads: 420,
      rating: 4.7,
      tags: ["history", "ancient", "civilizations", "culture"],
      uploadDate: "2024-01-05",
    },
    {
      id: 5,
      title: "Introduction to Programming with Python",
      description: "Learn programming fundamentals using Python with hands-on projects and coding exercises.",
      teacher: "Lisa Park",
      teacherVerified: true,
      subject: "Computer Science",
      gradeLevel: "Grade 9-12",
      difficulty: "Beginner",
      duration: "12 weeks",
      views: 3200,
      downloads: 890,
      rating: 4.9,
      tags: ["programming", "python", "coding", "computer-science"],
      uploadDate: "2024-01-25",
    },
    {
      id: 6,
      title: "Art Fundamentals: Drawing and Sketching",
      description: "Master basic drawing techniques, shading, perspective, and composition through guided practice.",
      teacher: "Maria Gonzalez",
      teacherVerified: true,
      subject: "Art",
      gradeLevel: "Grade 6-12",
      difficulty: "Beginner",
      duration: "8 weeks",
      views: 950,
      downloads: 280,
      rating: 4.5,
      tags: ["art", "drawing", "sketching", "creativity"],
      uploadDate: "2024-01-18",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesSubject = selectedSubject === "all" || course.subject.toLowerCase() === selectedSubject
    const matchesGrade = selectedGrade === "all" || course.gradeLevel.includes(selectedGrade)

    return matchesSearch && matchesSubject && matchesGrade
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "newest":
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
      case "rating":
        return b.rating - a.rating
      case "downloads":
        return b.downloads - a.downloads
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">EduShare</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-foreground font-medium">
              Browse Courses
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
          </nav>
          <Button asChild>
            <Link href="/register">Join as Teacher</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">Discover Free Courses</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Explore thousands of high-quality courses created by certified teachers worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Subject:</span>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="computer science">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Grade:</span>
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="K-2">K-2</SelectItem>
                  <SelectItem value="3-5">3-5</SelectItem>
                  <SelectItem value="6-8">6-8</SelectItem>
                  <SelectItem value="9-12">9-12</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="downloads">Most Downloaded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {sortedCourses.length} of {courses.length} courses
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{course.subject}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Teacher Info */}
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.teacher}</span>
                    {course.teacherVerified && (
                      <Badge variant="outline" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Course Details */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span>{course.gradeLevel}</span>
                    <Badge variant="outline" size="sm">
                      {course.difficulty}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {course.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {course.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {course.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {course.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button className="w-full" asChild>
                    <Link href={`/course/${course.id}`}>View Course</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find more courses.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedSubject("all")
                setSelectedGrade("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {sortedCourses.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
