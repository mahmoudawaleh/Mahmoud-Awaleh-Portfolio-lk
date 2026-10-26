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
                I work at the intersection of governance, institutional strategy, and digital systems—helping
                organizations turn complex challenges into clear operating models, communication, and practical
                digital solutions.
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
                <div className="text-2xl font-bold text-purple-600">GovTech</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Governance architecture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Systems</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Digital product design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Strategy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Institutional advisory</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 shadow-2xl">
                <Image
                  src="/images/mahmoud-formal.jpg"
                  alt="Mahmoud Awaleh"
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
