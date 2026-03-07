"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, Book, ArrowRight, Sparkles, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const categories = ["All", "Government", "Branding", "Editorial", "Sports"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

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

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.tags.some(tag => 
        tag.toLowerCase().includes(activeCategory.toLowerCase()) ||
        p.category.toLowerCase().includes(activeCategory.toLowerCase())
      ))

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sand-50/50 to-white dark:from-sand-700/20 dark:via-sand-800/10 dark:to-sand-700/20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-sand-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-sand-400" />
            <span className="text-sm font-medium text-sand-400 uppercase tracking-wider">My Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-700 dark:text-sand-100 mb-6">
            Featured <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-300 max-w-2xl mx-auto text-lg">
            Showcasing major national projects and design initiatives that have shaped Somaliland's visual identity and
            public communication.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'gold-gradient text-white shadow-gold'
                    : 'bg-sand-100 text-sand-600 hover:bg-sand-200 dark:bg-sand-600/30 dark:text-sand-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Portfolio */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="gold-gradient text-white overflow-hidden shadow-gold-lg border-0 card-3d">
            <CardContent className="p-8 md:p-12 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="featured-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#featured-pattern)" />
                </svg>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-6">
                  <div>
                    <Badge className="bg-white/20 text-white border-white/30 mb-4">Featured Portfolio</Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">Complete Design Portfolio 2021</h3>
                    <p className="text-sand-100 leading-relaxed text-lg">
                      Explore my comprehensive graphic design portfolio showcasing 15+ years of creative work, including
                      branding projects, government communications, and visual identity designs.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-sand-600 hover:bg-sand-100 h-12 px-6 font-semibold group"
                      onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
                    >
                      <ExternalLink className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                      View Complete Portfolio
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-sand-600 h-12 px-6 font-semibold"
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
                  <div className="glass-dark rounded-2xl p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-sand-200">Portfolio Stats</span>
                        <span className="text-xs text-sand-300">2021 Edition</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "50+", label: "Design Projects" },
                          { value: "15+", label: "Years Experience" },
                          { value: "25+", label: "Brand Identities" },
                          { value: "4+", label: "Magazine Issues" },
                        ].map((stat, i) => (
                          <div key={i} className="text-center p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-sand-200">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden hover-lift glass border-sand-200/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index % 6) * 100 + 300}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                {project.image.startsWith("/placeholder") ? (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{
                        filter: project.title === "Somaliland Visa Sticker Design" ? "blur(2px)" : "none",
                      }}
                    />
                    {project.title === "Somaliland Visa Sticker Design" && (
                      <div className="absolute inset-0 bg-sand-700/30 flex items-center justify-center backdrop-blur-sm">
                        <div className="glass px-4 py-2 rounded-lg border border-sand-300/50">
                          <p className="text-sm font-semibold text-sand-700">Security Blurred</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sand-700/90 via-sand-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      size="sm"
                      className="bg-white text-sand-700 hover:bg-sand-100 shadow-lg"
                      onClick={() => {
                        if (project.link) {
                          window.location.href = project.link
                        }
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      className="gold-gradient text-white shadow-gold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="gold-gradient text-white border-0 shadow-lg">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sand-700 dark:text-sand-100 mb-2 group-hover:text-sand-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sand-600 dark:text-sand-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-sand-300 text-sand-500 hover:bg-sand-100 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="btn-gold h-14 px-8 text-lg font-semibold rounded-xl group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
