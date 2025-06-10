"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, Book } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Somaliland National ID Card Design",
      category: "Government Branding",
      description: "Complete design and branding for Somaliland's national identification system.",
      image: "/images/mahmoud-office.jpg",
      tags: ["Branding", "Government", "Identity Design"],
    },
    {
      title: "Somaliland Visa Sticker Design",
      category: "Government Security",
      description:
        "Comprehensive visa sticker design system featuring multiple visa types with advanced security features and professional government branding.",
      image: "/images/visa-design.jpeg",
      tags: ["Security Design", "Government", "Document Design"],
    },
    {
      title: "Somaliland Presidential Special Force (CIM) Logo",
      category: "Government Security",
      description:
        "Professional logo design for Ciidanka Ilaalada Madaxtooyada JSL (CIM) - the Presidential Special Force, featuring military symbolism and national identity elements.",
      image: "/images/cim/cim-logo-main.png",
      tags: ["Security Design", "Government", "Military Branding"],
      link: "/portfolio/cim-special-force",
    },
    {
      title: "Somaliland Voter ID Design",
      category: "Electoral Design",
      description: "Comprehensive voter identification card design for democratic processes.",
      image: "/images/mahmoud-formal.jpg",
      tags: ["Electoral", "Design", "Democracy"],
    },
    {
      title: "Vehicle Tax Sticker Design",
      category: "Public Service",
      description: "First-ever vehicle tax sticker design for Somaliland transportation system.",
      image: "/images/mahmoud-working.jpg",
      tags: ["Transportation", "Tax", "Public Service"],
    },
    {
      title: "CSC Somaliland Magazine Collection",
      category: "Editorial & Publishing",
      description:
        "Quarterly magazine publication showcasing civil service reforms, achievements, and institutional developments throughout 2023.",
      image: "/images/magazines/csc-q1-2023.png",
      tags: ["Publishing", "Editorial", "Communications"],
      link: "/portfolio/magazine",
    },
    {
      title: "Regional Sports Logos Redesign",
      category: "Sports Branding",
      description:
        "Complete redesign of Somaliland regional sports logos and branding, creating professional identities for football clubs across the country.",
      image: "/images/sports-logos/all-logos.webp",
      tags: ["Sports", "Regional", "Logo Design"],
      link: "/portfolio/sports-logos",
    },
    {
      title: "Civil Service Commission Branding",
      category: "Corporate Identity",
      description: "Comprehensive branding and communication strategy for the Civil Service Commission.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Corporate", "Government", "Strategy"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing major national projects and design initiatives that have shaped Somaliland's visual identity and
            public communication.
          </p>
        </div>

        {/* Featured Portfolio */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <Badge className="bg-white/20 text-white mb-4">Featured Portfolio</Badge>
                    <h3 className="text-3xl font-bold mb-4">Complete Design Portfolio 2021</h3>
                    <p className="text-purple-100 leading-relaxed">
                      Explore my comprehensive graphic design portfolio showcasing 15+ years of creative work, including
                      branding projects, government communications, and visual identity designs.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-purple-600 hover:bg-gray-100"
                      onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Complete Portfolio
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-purple-600"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1dI1-QKDL5cmFDz-hvdxCBxF7vNUvxffr",
                          "_blank",
                        )
                      }
                    >
                      <Book className="mr-2 w-4 h-4" />
                      CSC Magazine Collection
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-100">Portfolio Stats</span>
                        <span className="text-xs text-purple-200">2021 Edition</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">50+</div>
                          <div className="text-xs text-purple-200">Design Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">15+</div>
                          <div className="text-xs text-purple-200">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">25+</div>
                          <div className="text-xs text-purple-200">Brand Identities</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">4+</div>
                          <div className="text-xs text-purple-200">Magazine Issues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden h-64">
                {project.image.startsWith("/placeholder") ? (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: project.title === "Somaliland Visa Sticker Design" ? "blur(2px)" : "none",
                      }}
                    />
                    {project.title === "Somaliland Visa Sticker Design" && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="bg-white/90 px-4 py-2 rounded-lg">
                          <p className="text-sm font-semibold text-gray-800">Security Blurred</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        if (project.link) {
                          window.open(project.link, "_blank")
                        }
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
