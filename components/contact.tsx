"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Loader2, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-white to-sand-50 dark:from-sand-700/10 dark:via-sand-800/5 dark:to-sand-700/10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sand-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-sand-400" />
            <span className="text-sm font-medium text-sand-400 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-700 dark:text-sand-100 mb-6">
            Let's Discuss Your <span className="gold-gradient-text">Project</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-300 max-w-2xl mx-auto text-lg">
            Ready to transform your communication strategy? Get in touch to discuss how we can work together on
            meaningful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-bold text-sand-700 dark:text-sand-100 mb-4">Get in Touch</h3>
              <p className="text-sand-600 dark:text-sand-300 leading-relaxed">
                I'm always interested in discussing new opportunities, creative projects, and ways to contribute to
                meaningful communication initiatives.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+252634706330"
                className="group flex items-center gap-4 p-4 glass rounded-2xl border border-sand-200/50 hover-lift"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sand-700 dark:text-sand-100">Phone</div>
                  <div className="text-sand-500 group-hover:text-sand-400 transition-colors">+252 63 4706330</div>
                </div>
                <ArrowRight className="w-5 h-5 text-sand-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:info@cscsomaliland.org"
                className="group flex items-center gap-4 p-4 glass rounded-2xl border border-sand-200/50 hover-lift"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sand-700 dark:text-sand-100">Email</div>
                  <div className="text-sand-500 group-hover:text-sand-400 transition-colors">info@cscsomaliland.org</div>
                </div>
                <ArrowRight className="w-5 h-5 text-sand-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-sand-200/50">
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center shadow-gold">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sand-700 dark:text-sand-100">Location</div>
                  <div className="text-sand-500">Hargeisa, Somaliland</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-semibold text-sand-700 dark:text-sand-100 mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://facebook.com/mahmoud.awaleh", label: "Facebook" },
                  { icon: XIcon, href: "https://twitter.com/mahmoudawaleh", label: "X" },
                  { icon: Instagram, href: "https://www.instagram.com/m2awaleh", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com/in/mahmoudawaleh", label: "LinkedIn" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.label}`}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-sand-500 hover:gold-gradient hover:text-white hover:shadow-gold transition-all duration-300 border border-sand-200/50"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`glass border-sand-200/50 shadow-3d overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Top accent */}
            <div className="h-1 gold-gradient" />
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mb-6 shadow-gold animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-sand-700 dark:text-sand-100 mb-2">Message Sent!</h3>
                  <p className="text-sand-600 dark:text-sand-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-sand-700 dark:text-sand-200 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        className={`bg-sand-50/50 border-sand-200 focus:border-sand-400 focus:ring-sand-400/20 rounded-xl ${errors.firstName ? "border-red-500" : ""}`}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-gold h-14 text-lg font-semibold rounded-xl group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
