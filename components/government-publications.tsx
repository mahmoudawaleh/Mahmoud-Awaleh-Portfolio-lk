"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function GovernmentPublications() {
  const [activeIndex, setActiveIndex] = useState(0)

  const publications = [
    {
      title: "Somaliland Constitution Design",
      description:
        "Official design for the Somaliland Constitution (Dastuurka Jamhuuriyadda Somaliland) featuring national colors and elegant typography in both red and green editions.",
      image: "/images/portfolio/constitution-design.jpeg",
      year: "2001",
      client: "Republic of Somaliland",
      category: "Government Publication",
    },
    {
      title: "Civil Service Commission ID Card Guidelines",
      description:
        "Comprehensive guidelines for the standardized employment ID card system, featuring bilingual design in Somali and English with official government branding.",
      image: "/images/portfolio/id-card-guidelines.png",
      year: "2022",
      client: "Civil Service Commission",
      category: "Government Publication",
    },
    {
      title: "CSC Annual Report Design",
      description:
        "Official annual report design for the Civil Service Commission featuring national colors, organizational achievements, and professional photography.",
      image: "/images/portfolio/csc-annual-report.png",
      year: "2022",
      client: "Civil Service Commission",
      category: "Government Publication",
    },
    {
      title: "CSC Branding System",
      description:
        "Comprehensive branding system for Civil Service Commission publications, including layout templates, color schemes, and typography guidelines.",
      image: "/images/portfolio/csc-branding-system.jpeg",
      year: "2019",
      client: "Civil Service Commission",
      category: "Branding System",
    },
  ]

  const nextPublication = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % publications.length)
  }

  const prevPublication = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + publications.length) % publications.length)
  }

  const activePublication = publications[activeIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Official Publications</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Government Publication Design</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional design for official government documents, publications, and branding systems that communicate
            authority, clarity, and national identity.
          </p>
        </div>

        {/* Featured Publication Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Publication Image */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[500px] flex items-center justify-center"
              >
                <Image
                  src={activePublication.image || "/placeholder.svg"}
                  alt={activePublication.title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevPublication}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              aria-label="Previous publication"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextPublication}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              aria-label="Next publication"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {publications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-purple-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Publication Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Badge className="mb-3">{activePublication.category}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{activePublication.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{activePublication.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">CLIENT</h4>
                      <p className="text-lg font-medium">{activePublication.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">YEAR</h4>
                      <p className="text-lg font-medium">{activePublication.year}</p>
                    </div>
                  </div>

                  <div className="space-y-6 mt-auto">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Design Approach</h4>
                      <p className="text-gray-600">
                        Each publication is designed with careful attention to official branding guidelines, cultural
                        context, and bilingual requirements. The designs balance authority and accessibility while
                        maintaining consistent national identity elements.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                        <Eye className="mr-2 w-4 h-4" />
                        View Details
                      </Button>
                      <Button variant="outline" className="transition-all duration-300 transform hover:scale-105">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        View More Publications
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Corporate Branding Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Corporate Identity</Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Institutional & Corporate Branding</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Professional branding and signage design for government institutions and corporate clients, creating
              memorable and impactful visual identities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/portfolio/csc-building-signage.jpeg"
                  alt="Civil Service Commission Building Signage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Badge className="mb-2 bg-white/20 text-white border-white/30">Government</Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Civil Service Commission Building Signage
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  3D signage design for the Civil Service Commission headquarters featuring the official logo and
                  bilingual text in the national colors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    Signage
                  </Badge>
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    3D Design
                  </Badge>
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    Government
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/portfolio/landnest-office-signage.png"
                  alt="Landnest General Trading Office Signage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Badge className="mb-2 bg-white/20 text-white border-white/30">Corporate</Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Landnest General Trading Office Signage
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Modern corporate identity and interior signage design for Landnest General Trading, featuring
                  contemporary typography and brand colors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    Corporate
                  </Badge>
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    Interior Design
                  </Badge>
                  <Badge variant="outline" className="text-xs transition-colors duration-300 hover:bg-purple-50">
                    Branding
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Design Process */}
        <Card className="bg-gradient-to-r from-gray-50 to-white border-none shadow-md overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Design Process</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Official Publication Design Approach</h3>
                <p className="text-gray-600 mb-6">
                  Creating effective government publications requires a careful balance of authority, accessibility, and
                  cultural sensitivity. My design process focuses on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">National Identity Integration</h4>
                      <p className="text-sm text-gray-600">
                        Incorporating national colors, symbols, and cultural elements that resonate with citizens.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Bilingual Excellence</h4>
                      <p className="text-sm text-gray-600">
                        Designing for both Somali and English text with appropriate typography and layout
                        considerations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Information Hierarchy</h4>
                      <p className="text-sm text-gray-600">
                        Creating clear visual hierarchies that make complex information accessible and navigable.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consistency & Systems</h4>
                      <p className="text-sm text-gray-600">
                        Developing comprehensive design systems that can be applied across multiple publications.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/portfolio/csc-branding-system.jpeg"
                  alt="Publication Design Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-lg font-bold mb-2">CSC Publication Design System</h4>
                    <p className="text-sm text-white/80">
                      Comprehensive design system for Civil Service Commission publications with consistent branding
                      elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
