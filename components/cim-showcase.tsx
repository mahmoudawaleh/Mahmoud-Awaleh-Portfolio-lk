"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Star, Eye, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CIMShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projectImages = [
    {
      src: "/images/cim/cim-logo-main.png",
      title: "CIM Presidential Special Force Logo - Primary Version",
      description:
        "Main logo design featuring the golden eagle, crossed rifles, and presidential insignia with full color treatment.",
    },
    {
      src: "/images/cim/cim-logo-alt.png",
      title: "CIM Presidential Special Force Logo - Alternative Version",
      description: "Clean alternative version of the logo maintaining all key elements with refined execution.",
    },
    {
      src: "/images/cim/cim-vehicle-branding.jpeg",
      title: "CIM Vehicle Branding Application",
      description:
        "Comprehensive vehicle branding system showing logo application on military vehicles with camouflage integration.",
    },
  ]

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectImages.length)
  }

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length)
  }

  const activeImage = projectImages[activeIndex]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/#portfolio" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Government Security</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Somaliland Presidential Special Force (CIM) Logo Design
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional logo design for Ciidanka Ilaalada Madaxtooyada JSL (CIM) - the Presidential Special Force of
            Somaliland. A comprehensive branding system that embodies authority, security, and national pride.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Display */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <Image
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-red-600" : "bg-gray-300"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeImage.title}</h2>
              <p className="text-gray-600 mb-6">{activeImage.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">PROJECT DATE</h3>
                  <p className="text-lg font-medium">September 2023</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">CLIENT</h3>
                  <p className="text-lg font-medium">Somaliland Presidency</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">CATEGORY</h3>
                  <p className="text-lg font-medium">Security Branding</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">SCOPE</h3>
                  <p className="text-lg font-medium">Logo & Vehicle Branding</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Design Elements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>Golden eagle symbolizing strength and vigilance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>Crossed rifles representing military readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>Five-pointed star for national identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>CIM acronym in bold, authoritative typography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span>National colors: Black, Red, and Gold</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Security Considerations</h3>
                  <p className="text-gray-600">
                    The design balances public recognition with operational security requirements, creating a
                    professional identity that commands respect while maintaining appropriate discretion for a
                    presidential protection unit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Design Process */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Approach & Symbolism</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Symbolic Elements</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-semibold text-sm">🦅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Golden Eagle</h4>
                      <p className="text-sm">
                        Symbol of power, vigilance, and protection - representing the unit's role in safeguarding the
                        presidency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-semibold text-sm">⚔️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Crossed Rifles</h4>
                      <p className="text-sm">
                        Military readiness and defensive capability, emphasizing the unit's tactical preparedness.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-semibold text-sm">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Five-Pointed Star</h4>
                      <p className="text-sm">
                        National symbol representing Somaliland's sovereignty and the unit's allegiance to the state.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Color Psychology</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-semibold text-xs">B</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Black</h4>
                      <p className="text-sm">
                        Authority, professionalism, and the serious nature of security operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-semibold text-xs">R</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Red</h4>
                      <p className="text-sm">
                        Courage, sacrifice, and the blood shed for national independence and security.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-semibold text-xs">G</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Gold</h4>
                      <p className="text-sm">
                        Excellence, honor, and the prestigious nature of presidential protection duties.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Official Documentation</h3>
                <p className="text-sm text-gray-600">Letterheads, certificates, and official correspondence</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Star className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Vehicle Branding</h3>
                <p className="text-sm text-gray-600">Fleet identification and tactical vehicle markings</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Eye className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Uniform Insignia</h3>
                <p className="text-sm text-gray-600">Patches, badges, and ceremonial applications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            This project represents the highest level of government security branding, requiring careful balance between
            public recognition and operational discretion.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <Shield className="mr-2 w-5 h-5" />
            View More Government Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
