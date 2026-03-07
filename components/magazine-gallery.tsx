"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, Download, Calendar, FileText, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MagazineGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const magazines = [
    {
      title: "CSC Somaliland Magazine - Q1 2023",
      description:
        "Featuring CSI & GIMPA Trainings, National Awards 2022, HRMIS benefits, Health & Safety at the Workplace, and Disciplinary Procedures (Part 3).",
      coverImage: "/images/magazines/csc-q1-2023.png",
      date: "Q1 2023",
      highlights: [
        "CSI & GIMPA Training Success",
        "National Civil Service Awards 2022",
        "HRMIS System Benefits",
        "Health & Safety Guidelines",
        "Disciplinary Procedures (Part 3)",
      ],
      pages: 56,
      language: "English & Somali",
      articles: [
        "Training Programs Excellence",
        "Award Ceremony Coverage",
        "Digital Transformation Benefits",
        "Workplace Safety Initiatives",
        "Disciplinary Framework Implementation",
      ],
    },
    {
      title: "CSC Somaliland Magazine - Q2 2023",
      description:
        "Covering Upgraded Government Employee ID Cards, Pension Policy & Bill, 16 Policies & Procedures, and Commission Members Meeting.",
      coverImage: "/images/magazines/csc-q2-2023.png",
      date: "Q2 2023",
      highlights: [
        "Upgraded Government Employee ID Cards",
        "16 New Policies & Procedures",
        "Pension Policy & Bill Development",
        "Commission Members Strategic Meeting",
        "Government Officials Collaboration",
      ],
      pages: 54,
      language: "English & Somali",
      articles: [
        "ID Card System Modernization",
        "Policy Framework Development",
        "Pension System Reform",
        "Strategic Planning Sessions",
        "Inter-departmental Coordination",
      ],
    },
    {
      title: "CSC Somaliland Magazine - Q3 2023",
      description:
        "Special edition featuring Presidential Meeting with Director Generals, HRMIS Launch, Pay & Grading Policy Validation, and SERP Project Launch.",
      coverImage: "/images/magazines/csc-q3-2023.png",
      date: "Q3 2023",
      highlights: [
        "Presidential Meeting with Director Generals",
        "HRMIS System Official Launch",
        "Pay & Grading Policy Validation",
        "SERP Project Implementation",
        "Archives Department Success Story",
      ],
      pages: 52,
      language: "English & Somali",
      articles: [
        "High-Level Government Meetings",
        "Digital System Implementation",
        "Policy Validation Process",
        "Project Launch Coverage",
        "Departmental Success Stories",
      ],
    },
    {
      title: "CSC Somaliland Magazine - Q4 2023",
      description:
        "Year-end edition featuring Pension Management Information System, CSC Cup Finals 2023, and comprehensive review of annual achievements.",
      coverImage: "/images/magazines/csc-q4-2023.png",
      date: "Q4 2023",
      highlights: [
        "Pension Management Information System",
        "Presidential Engagement Continuation",
        "CSC Cup Finals 2023",
        "Annual Achievement Review",
        "Strategic Planning for 2024",
      ],
      pages: 56,
      language: "English & Somali",
      articles: [
        "PMIS System Implementation",
        "Sports and Recreation Programs",
        "Annual Performance Review",
        "Future Strategic Initiatives",
        "Year-end Celebrations",
      ],
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % magazines.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + magazines.length) % magazines.length)
  }

  const activeMagazine = magazines[activeIndex]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/#portfolio" className="inline-flex items-center text-primary hover:text-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Official Publication</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CSC Somaliland Magazine Collection</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Quarterly publication showcasing civil service reforms, achievements, and institutional developments
            throughout 2023. Each issue features comprehensive coverage of government initiatives and success stories.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Magazine Cover Display */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <div className="relative w-[400px] h-[550px] transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={activeMagazine.coverImage || "/placeholder.svg"}
                  alt={activeMagazine.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {magazines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                  aria-label={`Go to issue ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Magazine Details */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeMagazine.title}</h2>
              <p className="text-gray-600 mb-6">{activeMagazine.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">PUBLICATION DATE</h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <p className="text-lg font-medium">{activeMagazine.date}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">PAGES</h3>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <p className="text-lg font-medium">{activeMagazine.pages}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">LANGUAGE</h3>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="text-lg font-medium">{activeMagazine.language}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                  <div className="space-y-2">
                    {activeMagazine.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Featured Articles</h3>
                  <div className="space-y-2">
                    {activeMagazine.articles.map((article, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{article}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="bg-primary hover:bg-accent"
                    onClick={() =>
                      window.open("https://drive.google.com/drive/folders/1dI1-QKDL5cmFDz-hvdxCBxF7vNUvxffr", "_blank")
                    }
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Read Online
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Issues Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All 2023 Issues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {magazines.map((magazine, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  index === activeIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <CardContent className="p-4">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={magazine.coverImage || "/placeholder.svg"}
                      alt={magazine.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{magazine.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{magazine.pages} pages</p>
                  <Badge variant="outline" className="text-xs">
                    {magazine.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Editorial Information */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Publication</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Editorial Mission</h3>
                <p className="text-gray-600 mb-4">
                  The CSC Somaliland Magazine serves as the official publication of the Civil Service Commission,
                  documenting institutional progress, policy implementations, and success stories across government
                  departments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly publication schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bilingual content (English & Somali)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional photography and design</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consistent CSC brand identity with green and red color scheme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-quality photography of government events and officials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern layout design with clear information hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bilingual typography and cultural sensitivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strategic use of infographics and visual elements</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
              className="bg-primary hover:bg-accent"
            onClick={() =>
              window.open("https://drive.google.com/drive/folders/1dI1-QKDL5cmFDz-hvdxCBxF7vNUvxffr", "_blank")
            }
          >
            <ExternalLink className="mr-2 w-4 h-4" />
            Access Complete Collection
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Download and read all quarterly issues from the official Google Drive archive
          </p>
        </div>
      </div>
    </div>
  )
}
