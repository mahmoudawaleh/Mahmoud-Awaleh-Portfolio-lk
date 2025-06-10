"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, ExternalLink, BookOpen, Calendar, Users, FileText, Award } from "lucide-react"
import Image from "next/image"

export default function MagazineSection() {
  const magazines = [
    {
      title: "CSC Somaliland Magazine - Q1 2023",
      description:
        "Featuring CSI & GIMPA Trainings, National Awards 2022, HRMIS benefits, and Health & Safety at the Workplace.",
      coverImage: "/images/magazines/csc-q1-2023.png",
      date: "Q1 2023",
      highlights: [
        "CSI & GIMPA Training Success",
        "National Civil Service Awards",
        "HRMIS System Implementation",
        "Health & Safety Guidelines",
      ],
      pages: 56,
      language: "English & Somali",
    },
    {
      title: "CSC Somaliland Magazine - Q2 2023",
      description:
        "Covering Upgraded Government Employee ID Cards, Ministry of Health Staff Examination, and Pay & Grading Policy Validation.",
      coverImage: "/images/magazines/csc-q2-2023.png",
      date: "Q2 2023",
      highlights: [
        "Upgraded Employee ID Cards",
        "Health Ministry Examinations",
        "Pay & Grading Policy",
        "Performance Management",
      ],
      pages: 54,
      language: "English & Somali",
    },
    {
      title: "CSC Somaliland Magazine - Q3 2023",
      description:
        "Special edition on Pension Policy & Bill approval, World Bank mission, and civil service strengthening initiatives.",
      coverImage: "/images/magazines/csc-q3-2023.png",
      date: "Q3 2023",
      highlights: ["Pension Policy Approval", "World Bank Partnership", "Civil Service Reforms", "Strategic Planning"],
      pages: 52,
      language: "English & Somali",
    },
    {
      title: "CSC Somaliland Magazine - Q4 2023",
      description:
        "Featuring PMIS launch, President's meeting with Director Generals, and Archives Department transformation.",
      coverImage: "/images/magazines/csc-q4-2023.png",
      date: "Q4 2023",
      highlights: ["PMIS System Launch", "Presidential Meetings", "Archives Department", "HRMIS Training"],
      pages: 56,
      language: "English & Somali",
    },
  ]

  const stats = [
    { icon: FileText, label: "Issues Published", value: "4+" },
    { icon: Users, label: "Articles Written", value: "100+" },
    { icon: Book, label: "Pages Published", value: "200+" },
    { icon: Award, label: "Success Stories", value: "25+" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Official Publication</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">CSC Somaliland Magazine Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As PR & Communications Director at the Somaliland Civil Service Commission, I lead the development and
            publication of our quarterly magazine, showcasing government initiatives, reforms, and achievements
            throughout 2023.
          </p>
        </div>

        {/* Featured Magazine Collection */}
        <Card className="mb-16 overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50 border-none shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 space-y-6">
                <Badge className="bg-purple-600">Complete 2023 Collection</Badge>
                <h3 className="text-3xl font-bold text-gray-900">CSC Quarterly Magazine Series</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access the complete 2023 collection of CSC Somaliland Magazines, featuring comprehensive coverage of
                  civil service reforms, policy implementations, training programs, and institutional achievements. Each
                  issue is published in both English and Somali.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>Quarterly Publication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Bilingual Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span>200+ Pages Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span>Professional Design</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() =>
                      window.open("https://drive.google.com/drive/folders/1dI1-QKDL5cmFDz-hvdxCBxF7vNUvxffr", "_blank")
                    }
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Access Complete Collection
                  </Button>
                  <Button variant="outline" onClick={() => window.open("/portfolio/magazine", "_self")}>
                    <BookOpen className="mr-2 w-4 h-4" />
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] bg-gradient-to-r from-purple-100 to-blue-100 p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-lg p-2 transform rotate-3 hover:rotate-0 transition-transform">
                      <Image
                        src="/images/magazines/csc-q1-2023.png"
                        alt="Q1 2023 Magazine"
                        width={120}
                        height={160}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-xs font-semibold text-center mt-1">Q1 2023</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-2 transform -rotate-2 hover:rotate-0 transition-transform">
                      <Image
                        src="/images/magazines/csc-q3-2023.png"
                        alt="Q3 2023 Magazine"
                        width={120}
                        height={160}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-xs font-semibold text-center mt-1">Q3 2023</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white rounded-lg shadow-lg p-2 transform -rotate-3 hover:rotate-0 transition-transform">
                      <Image
                        src="/images/magazines/csc-q2-2023.png"
                        alt="Q2 2023 Magazine"
                        width={120}
                        height={160}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-xs font-semibold text-center mt-1">Q2 2023</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-2 transform rotate-2 hover:rotate-0 transition-transform">
                      <Image
                        src="/images/magazines/csc-q4-2023.png"
                        alt="Q4 2023 Magazine"
                        width={120}
                        height={160}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-xs font-semibold text-center mt-1">Q4 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Magazine Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {magazines.map((magazine, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={magazine.coverImage || "/placeholder.svg"}
                  alt={magazine.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="text-sm font-semibold">{magazine.pages} Pages</p>
                    <p className="text-xs">{magazine.language}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {magazine.date}
                  </Badge>
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{magazine.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{magazine.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-1">Key Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {magazine.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {magazine.highlights.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{magazine.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-center text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    onClick={() => window.open("/portfolio/magazine", "_self")}
                  >
                    <BookOpen className="mr-2 w-4 h-4" />
                    Read Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Magazine Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-purple-50 rounded-xl">
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Editorial Highlights */}
        <Card className="mb-16 bg-gray-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Editorial Highlights from 2023</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Major Achievements Covered</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Implementation of HRMIS (Human Resource Management Information System)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Launch of PMIS (Pension Management Information System)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Approval of Pension Policy & Bill by Cabinet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pay & Grading Policy validation and implementation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Design Excellence</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional photography and layout design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consistent CSC brand identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bilingual publication (English & Somali)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-quality government event coverage</span>
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
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => window.open("/portfolio/magazine", "_self")}
          >
            <Book className="mr-2 w-5 h-5" />
            Explore Complete Magazine Gallery
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            View all quarterly issues with detailed coverage and professional photography
          </p>
        </div>
      </div>
    </section>
  )
}
