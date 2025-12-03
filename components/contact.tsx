"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Loader2, CheckCircle } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Contact() {
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's discuss your Project</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your communication strategy? Get in touch to discuss how we can work together on
            meaningful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, creative projects, and ways to contribute to
                meaningful communication initiatives.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+252634706330"
                className="flex items-center space-x-4 group hover:bg-purple-50 dark:hover:bg-purple-900/20 p-3 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600">+252 63 4706330</div>
                </div>
              </a>

              <a
                href="mailto:info@cscsomaliland.org"
                className="flex items-center space-x-4 group hover:bg-purple-50 dark:hover:bg-purple-900/20 p-3 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600">
                    info@cscsomaliland.org
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-300">Hargeisa, Somaliland</div>
                </div>
              </div>
            </div>

            {/* Social Media - Updated with proper aria-labels */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/mahmoud.awaleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Facebook"
                  className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white text-purple-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/mahmoudawaleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (formerly Twitter)"
                  className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white text-purple-600 transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/m2awaleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white text-purple-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/mahmoudawaleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white text-purple-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Updated with proper labels and validation */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
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
                        className={errors.firstName ? "border-red-500" : ""}
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
                    className="w-full bg-purple-600 hover:bg-purple-700"
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
