"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Download, Eye, Star, User, Clock, Award, FileText, Target, BookMarked } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CoursePage() {
  const params = useParams()
  const courseId = params.id

  // Mock course data - in real app, fetch based on courseId
  const course = {
    id: 1,
    title: "Introduction to Algebra",
    description:
      "Master the fundamentals of algebra with step-by-step lessons, practice problems, and real-world applications. This comprehensive course covers linear equations, quadratic functions, polynomials, and more.",
    teacher: "Sarah Johnson",
    teacherBio: "Certified mathematics teacher with 12 years of experience teaching middle and high school students.",
    teacherVerified: true,
    subject: "Mathematics",
    gradeLevel: "Grade 8-9",
    difficulty: "Beginner",
    duration: "6 weeks",
    views: 1250,
    downloads: 340,
    rating: 4.8,
    reviewCount: 89,
    tags: ["algebra", "equations", "problem-solving", "mathematics"],
    uploadDate: "2024-01-15",
    learningObjectives: [
      "Solve linear equations and inequalities",
      "Graph linear functions and understand slope",
      "Factor polynomials and solve quadratic equations",
      "Apply algebraic concepts to real-world problems",
    ],
    prerequisites: ["Basic arithmetic operations", "Understanding of fractions and decimals", "Pre-algebra concepts"],
    materials: ["Calculator (scientific or graphing)", "Graph paper", "Ruler and pencil"],
    courseContent: [
      {
        title: "Introduction to Variables and Expressions",
        duration: "Week 1",
        files: ["lesson-1-notes.pdf", "practice-problems-1.pdf"],
      },
      {
        title: "Solving Linear Equations",
        duration: "Week 2",
        files: ["lesson-2-notes.pdf", "practice-problems-2.pdf", "answer-key-2.pdf"],
      },
      {
        title: "Graphing Linear Functions",
        duration: "Week 3",
        files: ["lesson-3-notes.pdf", "graphing-worksheet.pdf"],
      },
      {
        title: "Systems of Equations",
        duration: "Week 4",
        files: ["lesson-4-notes.pdf", "systems-practice.pdf"],
      },
      {
        title: "Quadratic Functions",
        duration: "Week 5",
        files: ["lesson-5-notes.pdf", "quadratic-problems.pdf"],
      },
      {
        title: "Final Project and Assessment",
        duration: "Week 6",
        files: ["final-project.pdf", "assessment-rubric.pdf"],
      },
    ],
  }

  const [downloadStarted, setDownloadStarted] = useState(false)

  const handleDownload = () => {
    setDownloadStarted(true)
    // Mock download - in real app, trigger actual download
    setTimeout(() => {
      setDownloadStarted(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">EduShare</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Browse
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{course.subject}</Badge>
                <Badge variant="outline">{course.gradeLevel}</Badge>
                <Badge variant="outline">{course.difficulty}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-balance">{course.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">{course.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{course.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>{course.downloads.toLocaleString()} downloads</span>
                </div>
              </div>
            </div>

            {/* Teacher Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  About the Teacher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{course.teacher}</span>
                      {course.teacherVerified && (
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{course.teacherBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5" />
                  Course Content
                </CardTitle>
                <CardDescription>
                  {course.courseContent.length} modules • {course.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.courseContent.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{module.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {module.duration}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span>{module.files.length} files included:</span>
                        <ul className="mt-1 ml-4">
                          {module.files.map((file, fileIndex) => (
                            <li key={fileIndex} className="flex items-center gap-2">
                              <FileText className="h-3 w-3" />
                              {file}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.materials.map((material, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{material}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-center">Get This Course</CardTitle>
                <CardDescription className="text-center">Download all materials for free</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">FREE</div>
                  <p className="text-sm text-muted-foreground">Complete course materials</p>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration} of content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>All lesson materials included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span>Lifetime access</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={handleDownload} disabled={downloadStarted}>
                  {downloadStarted ? (
                    "Preparing Download..."
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download Course
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By downloading, you agree to use these materials for educational purposes only.
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share This Course</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Copy Link
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
