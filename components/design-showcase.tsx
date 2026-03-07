"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Palette, Monitor, FileText, Award, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function DesignShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const categories = [
    { id: "all", name: "All Work", icon: Palette },
    { id: "digital", name: "Digital Design", icon: Monitor },
    { id: "print", name: "Print & Publishing", icon: FileText },
    { id: "branding", name: "Corporate Branding", icon: Award },
  ]

  const projects = [
    {
      id: 1,
      title: "Portfolio Website Design",
      category: "digital",
      description: "Modern, responsive portfolio website showcasing professional experience and achievements.",
      images: [
        "/images/portfolio/macbook-mockup-1.png",
        "/images/portfolio/macbook-mockup-2.png",
        "/images/portfolio/macbook-front-view.png",
      ],
      tags: ["Web Design", "UI/UX", "Responsive"],
      featured: true,
    },
    {
      id: 2,
      title: "National Printing Agency Branding",
      category: "branding",
      description:
        "Complete corporate identity design for government printing agency including logo, stationery, and signage.",
      images: ["/images/portfolio/logo-mockup-1.png", "/images/portfolio/logo-office-mockup.png"],
      tags: ["Logo Design", "Corporate Identity", "Government"],
      featured: true,
    },
    {
      id: 3,
      title: "CSC Publication Design",
      category: "print",
      description: "Professional magazine layout and design for Civil Service Commission quarterly publication.",
      images: ["/images/portfolio/book-mockup.png"],
      tags: ["Editorial Design", "Layout", "Publishing"],
      featured: false,
    },
    {
      id: 4,
      title: "Corporate Merchandise Design",
      category: "branding",
      description: "Branded merchandise design including lanyards, pens, and promotional materials.",
      images: ["/images/portfolio/lanyard-mockup.jpeg", "/images/portfolio/pen-mockup.png"],
      tags: ["Merchandise", "Brand Application", "Corporate"],
      featured: false,
    },
    {
      id: 5,
      title: "Vehicle Graphics & Wraps",
      category: "branding",
      description: "Large-scale vehicle branding and graphics for government and institutional vehicles.",
      images: ["/images/portfolio/vehicle-mockup-1.png", "/images/portfolio/vehicle-mockup-2.png"],
      tags: ["Vehicle Graphics", "Large Format", "Branding"],
      featured: true,
    },
  ]

  // Initialize image indices
  useEffect(() => {
    const indices: Record<number, number> = {}
    projects.forEach((project) => {
      indices[project.id] = 0
    })
    setCurrentImageIndex(indices)
  }, [])

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  // Image navigation functions
  const nextImage = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId)
    if (!project) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.images.length,
    }))
  }

  const prevImage = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId)
    if (!project) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + project.images.length) % project.images.length,
    }))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Design Portfolio</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Design Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From digital experiences to print publications, corporate branding to large-scale applications - showcasing
            comprehensive design solutions across multiple mediums and platforms.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex[project.id]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.images[currentImageIndex[project.id] || 0] || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image navigation controls */}
                    {project.images.length > 1 && hoveredProject === project.id && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            prevImage(project.id)
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            nextImage(project.id)
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                        {project.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              index === currentImageIndex[project.id] ? "bg-white w-3" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Badge className="mb-2 bg-white/20 text-white border-white/30">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs transition-colors duration-300 hover:bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-accent hover:bg-primary/10 transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-primary hover:bg-accent shadow-md"
                  : "hover:bg-primary/10 hover:text-primary"
              } transition-all duration-300 transform hover:scale-105`}
            >
              <category.icon className={`w-4 h-4 mr-2 ${activeCategory === category.id ? "animate-pulse" : ""}`} />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* All Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex[project.id]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.images[currentImageIndex[project.id] || 0] || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image navigation controls */}
                    {project.images.length > 1 && hoveredProject === project.id && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            prevImage(project.id)
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            nextImage(project.id)
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                        {project.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              index === currentImageIndex[project.id] ? "bg-white w-3" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/50 text-white">+{project.images.length - 1} more</Badge>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                        <Badge
                          variant="outline"
                          className="text-xs transition-colors duration-300 hover:bg-primary/10"
                        >
                          {tag}
                        </Badge>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs transition-colors duration-300 hover:bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Design Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Capabilities</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive design solutions spanning digital platforms, print media, corporate identity, and
                  large-scale applications for government and institutional clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Monitor, title: "Digital Design", desc: "Websites, UI/UX, Digital Publications" },
                  { icon: FileText, title: "Print & Publishing", desc: "Magazines, Books, Editorial Design" },
                  { icon: Award, title: "Corporate Branding", desc: "Logos, Identity Systems, Guidelines" },
                  { icon: Palette, title: "Large Format", desc: "Vehicle Graphics, Signage, Environmental" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center p-4 hover:bg-white/50 rounded-xl transition-colors duration-300 transform hover:scale-105"
                  >
                    <div className="relative">
                    <div className="absolute -inset-1 bg-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-3 relative z-10" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
              className="bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            View Complete Portfolio
          </Button>
          <p className="text-gray-600 mt-4 text-sm">Explore the full range of design projects and creative solutions</p>
        </motion.div>
      </div>
    </section>
  )
}
