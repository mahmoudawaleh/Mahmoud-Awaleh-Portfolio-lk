"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SportsLogosGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const logos = [
    {
      name: "WAXOOL FC",
      image: "/images/sports-logos/waxool-logo.webp",
      description:
        "Football club logo featuring a red and gold shield with a soccer ball and camel silhouette. The text 'NAADIGA WASAARADA XANAANADA XOOLAHA' represents the Ministry of Livestock.",
      year: "2002",
      colors: ["Red", "Gold", "White"],
      region: "Hargeisa",
    },
    {
      name: "DHC Ceerigaabo",
      image: "/images/sports-logos/dhc-logo.png",
      description:
        "Dawlada Hoose Ceerigaabo (DHC) logo with a circular burgundy and gold design featuring mountain imagery, representing the mountainous Ceerigaabo region.",
      year: "2005",
      colors: ["Burgundy", "Gold"],
      region: "Ceerigaabo",
    },
    {
      name: "DP World Berbera FC",
      image: "/images/sports-logos/berbera-logo.png",
      description:
        "Professional football club logo featuring the DP World corporate branding with a shield design, representing the port city of Berbera.",
      year: "2010",
      colors: ["Blue", "White", "Gold"],
      region: "Berbera",
    },
    {
      name: "Goodir FC",
      image: "/images/sports-logos/goodir-logo.png",
      description:
        "Football club logo with a blue and gold shield featuring a gazelle silhouette and the Somaliland map outline, representing the Goodir region.",
      year: "1999",
      colors: ["Blue", "Gold"],
      region: "Goodir",
    },
    {
      name: "Somaliland League Collection",
      image: "/images/sports-logos/all-logos.webp",
      description:
        "Complete collection of redesigned logos for the Somaliland Football League (JSL), featuring all regional teams with consistent design language while maintaining unique regional identities.",
      year: "2020",
      colors: ["Various"],
      region: "National",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
  }

  const activeLogo = logos[activeIndex]

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
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Sports Branding</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Somaliland Regional Sports Logos Redesign</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive redesign project for Somaliland's regional sports teams, creating modern, professional logos
            that reflect local identity while maintaining consistent design language across the league.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Logo Display */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <Image
                src={activeLogo.image || "/placeholder.svg"}
                alt={activeLogo.name}
                width={350}
                height={350}
                className="object-contain max-h-[350px]"
              />
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
              {logos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Logo Details */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeLogo.name}</h2>
              <p className="text-gray-600 mb-6">{activeLogo.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">ESTABLISHED</h3>
                  <p className="text-lg font-medium">{activeLogo.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">REGION</h3>
                  <p className="text-lg font-medium">{activeLogo.region}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">COLORS</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeLogo.colors.map((color, index) => (
                      <Badge key={index} variant="outline">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Design Approach</h3>
                  <p className="text-gray-600">
                    Each logo was carefully crafted to balance modern sports branding standards with cultural elements
                    specific to each region. The designs incorporate consistent elements like shield shapes and gold
                    accents while featuring unique regional symbols.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Impact</h3>
                  <p className="text-gray-600">
                    This redesign elevated the visual identity of Somaliland's sports teams, creating professional
                    branding that represents the nation's growing sports culture while honoring regional heritage and
                    identity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Team Logos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-4 cursor-pointer transition-all ${
                  index === activeIndex ? "ring-2 ring-primary" : "hover:shadow-md"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-24 mb-2">
                  <Image src={logo.image || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
                </div>
                <p className="text-xs font-medium text-center truncate">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Research into regional cultural symbols and heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Development of consistent design language across all logos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integration of modern sports branding principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Color selection based on regional significance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Stakeholder feedback and iterative refinement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Elements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Shield and crest shapes for traditional sports identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gold accents representing excellence and achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regional wildlife and geographical features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Establishment years to honor team history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Somaliland map outlines for national identity</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-accent">
            <ExternalLink className="mr-2 w-4 h-4" />
            View Full Project
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Explore the complete collection of redesigned sports logos and their applications
          </p>
        </div>
      </div>
    </div>
  )
}
