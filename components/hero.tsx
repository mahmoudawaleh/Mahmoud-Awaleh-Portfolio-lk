"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Star, Award, Users, Briefcase } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sand-300/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-28 pb-20 overflow-hidden mesh-bg min-h-screen flex items-center"
    >
      {/* Animated Background Elements */}
      <FloatingParticles />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sand-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand-400/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-sand-300/10 to-transparent rounded-full animate-pulse-glow" />
      
      {/* Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D9A441" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sand-300/50 animate-slide-down">
              <Sparkles className="w-4 h-4 text-sand-400" />
              <span className="text-sm font-medium text-sand-600">Available for Projects</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-sand-700 dark:text-sand-100 animate-slide-right" style={{ animationDelay: '0.1s' }}>
                  Hello, I'm
                </span>
                <span 
                  className="block gold-gradient-text text-shadow-gold animate-slide-right" 
                  style={{ animationDelay: '0.2s' }}
                >
                  Mahmoud Awaleh
                </span>
              </h1>
              
              {/* Animated Title */}
              <div className="flex items-center gap-3 animate-slide-right" style={{ animationDelay: '0.3s' }}>
                <div className="h-1 w-12 gold-gradient rounded-full" />
                <p className="text-xl font-medium text-sand-500">
                  PR & Communications Director
                </p>
              </div>
              
              <p className="text-lg text-sand-600/80 dark:text-sand-200/80 leading-relaxed max-w-xl animate-slide-right" style={{ animationDelay: '0.4s' }}>
                A seasoned communication and creative professional with over 15 years of experience in graphic
                design, marketing, and public relations. Currently serving at Somaliland Civil Service Commission.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                size="lg" 
                className="btn-gold h-14 px-8 text-lg font-semibold rounded-xl group"
                onClick={handleGetStarted}
              >
                <span>Let's Work Together</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold rounded-xl border-2 border-sand-300 hover:bg-sand-100 hover:border-sand-400 text-sand-700 group"
                onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
              >
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce-subtle" />
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Briefcase, value: 15, suffix: "+", label: "Years Experience" },
                { icon: Award, value: 200, suffix: "+", label: "Projects Done" },
                { icon: Users, value: 98, suffix: "%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative p-4 rounded-2xl glass hover:glow-gold transition-all duration-500 cursor-default"
                >
                  <div className="absolute inset-0 gold-gradient rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <stat.icon className="w-6 h-6 text-sand-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl lg:text-4xl font-bold gold-gradient-text">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-sand-500 dark:text-sand-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Profile Card */}
          <div className="relative perspective-2000">
            <div 
              className="relative w-full max-w-lg mx-auto preserve-3d transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 gold-gradient rounded-3xl blur-3xl opacity-30 animate-pulse-glow" />
              
              {/* Main Card */}
              <div className="relative glass rounded-3xl p-6 shadow-3d-lg border border-sand-200/50">
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-24 h-24 gold-gradient rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-sand-400/20 rounded-full blur-2xl" />
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-full gold-gradient animate-spin-slow opacity-50" style={{ padding: '3px' }}>
                      <div className="w-full h-full rounded-full bg-white dark:bg-sand-700" />
                    </div>
                    
                    {/* Image Container */}
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-sand-600 shadow-gold-lg">
                      <Image
                        src="/images/mahmoud-formal.jpg"
                        alt="Mahmoud Mohamed Awaleh - PR and Communications Director"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full gold-gradient text-white text-sm font-medium shadow-gold">
                      <Star className="w-4 h-4 fill-white" />
                      Top Rated
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-sand-700 dark:text-sand-100">
                    Mahmoud M. Awaleh
                  </h3>
                  <p className="text-sand-500 dark:text-sand-300">
                    Creative Director & Brand Strategist
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {["Brand Design", "UI/UX", "Marketing", "PR"].map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-sand-100 text-sand-600 dark:bg-sand-600/30 dark:text-sand-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Proof */}
                <div className="mt-6 pt-6 border-t border-sand-200/50 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sand-400 text-sand-400" />
                  ))}
                  <span className="ml-2 text-sm text-sand-500">4.9/5 Rating</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 p-3 glass rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Award className="w-8 h-8 text-sand-400" />
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 glass rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-8 h-8 text-sand-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="currentColor"
            className="text-white dark:text-sand-700/20"
          />
        </svg>
      </div>
    </section>
  )
}
