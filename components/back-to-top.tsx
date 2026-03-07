"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 gold-gradient rounded-full shadow-gold-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-gold group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full gold-gradient opacity-50 animate-ping-slow" />
    </button>
  )
}
