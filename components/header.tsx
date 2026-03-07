"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  const handleHireMe = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass border-b border-sand-200/50 shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">MA</span>
              </div>
              <div className="absolute -inset-1 gold-gradient rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-sand-700 dark:text-sand-100">Mahmoud Awaleh</span>
              <span className="block text-xs text-sand-500">Creative Director</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "text-sand-700 dark:text-sand-100" 
                      : "text-sand-500 hover:text-sand-700 dark:text-sand-300 dark:hover:text-sand-100"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 gold-gradient rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-xl hover:bg-sand-100 dark:hover:bg-sand-600/30"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5 text-sand-400" /> : <Moon className="w-5 h-5 text-sand-500" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl border-sand-300 text-sand-600 hover:bg-sand-100 hover:border-sand-400"
              onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
            >
              View Portfolio
            </Button>
            <Button 
              size="sm" 
              className="btn-gold rounded-xl group"
              onClick={handleHireMe}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-xl"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5 text-sand-400" /> : <Moon className="w-5 h-5 text-sand-500" />}
            </Button>
            <button
              ref={menuButtonRef}
              className="p-2 rounded-xl hover:bg-sand-100 dark:hover:bg-sand-600/30 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} className="text-sand-600" /> : <Menu size={24} className="text-sand-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            ref={menuRef}
            id="mobile-menu"
            className="pt-4 pb-6"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? "gold-gradient text-white shadow-gold" 
                        : "text-sand-600 hover:bg-sand-100 dark:text-sand-300 dark:hover:bg-sand-600/30"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              })}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-sand-200/50">
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-sand-300 text-sand-600"
                  onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
                >
                  View Portfolio
                </Button>
                <Button 
                  className="w-full btn-gold rounded-xl"
                  onClick={handleHireMe}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
