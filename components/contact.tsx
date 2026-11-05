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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const subject = encodeURIComponent(formData.subject || "Project enquiry")
    const body = encodeURIComponent(
      "Name: " + formData.firstName + " " + formData.lastName + "\nEmail: " + formData.email + "\nPhone: " + formData.phone + "\n\n" + formData.message
    )
    window.location.href = "mailto:mahmoudawaleh@gmail.com?subject=" + subject + "&body=" + body
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
                href="https://linkedin.com/in/mahmoudawaleh" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-4 group hover:bg-purple-50 dark:hover:bg-purple-900/20 p-3 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600">
                    linkedin.com/in/mahmoudawaleh
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
              <div className="space-y-5 py-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Start a conversation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For professional enquiries, connect with me through LinkedIn. The website does not collect or transmit form data.
                </p>
                <a href="https://linkedin.com/in/mahmoudawaleh" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#171A1C] hover:bg-[#E2C45D]">
                  Message on LinkedIn
                </a>
              </div>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
