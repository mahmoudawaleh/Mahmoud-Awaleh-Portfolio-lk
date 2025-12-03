"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm
                <br />
                <span className="text-purple-600">Mahmoud Awaleh</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a seasoned communication and creative professional with over 15 years of experience in graphic
                design, marketing, and public relations. Currently serving as PR & Communications Director at Somaliland
                Civil Service Commission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStarted}>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
              >
                <Download className="mr-2 w-4 h-4" />
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 shadow-2xl">
                <Image
                  src="/images/mahmoud-formal.jpg"
                  alt="Mahmoud Mohamed Awaleh - PR and Communications Director"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
