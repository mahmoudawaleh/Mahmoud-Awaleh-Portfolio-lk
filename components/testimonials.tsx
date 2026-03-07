"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Sparkles } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const testimonials = [
    {
      name: "Ahmed Hassan",
      position: "Director General, Ministry of Information",
      content:
        "Mahmoud's strategic communication expertise has transformed how we engage with the public. His creative approach and professional execution have significantly improved our institutional image.",
      rating: 5,
      avatar: "/images/mahmoud-formal.jpg",
    },
    {
      name: "Fatima Ali",
      position: "Electoral Commissioner",
      content:
        "The voter ID design project was executed flawlessly. Mahmoud's attention to detail and understanding of our requirements resulted in a design that serves our democratic processes perfectly.",
      rating: 5,
      avatar: "/images/mahmoud-formal.jpg",
    },
    {
      name: "Mohamed Abdi",
      position: "Transport Ministry Official",
      content:
        "Working with Mahmoud on the vehicle tax sticker design was exceptional. He delivered innovative solutions that met all our technical and aesthetic requirements while staying within budget.",
      rating: 5,
      avatar: "/images/mahmoud-formal.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sand-50/30 to-white dark:from-sand-700/10 dark:via-sand-800/5 dark:to-sand-700/10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-sand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-sand-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-sand-400" />
            <span className="text-sm font-medium text-sand-400 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-700 dark:text-sand-100 mb-6">
            What People <span className="gold-gradient-text">Say</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-300 max-w-2xl mx-auto text-lg">
            What colleagues and partners say about working with me on transformative communication and design projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative glass border-sand-200/50 hover-lift overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
              
              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-sand-100 dark:bg-sand-600/30 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-sand-400" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sand-400 fill-sand-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sand-600 dark:text-sand-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-sand-200/50">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sand-200">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sand-700 dark:text-sand-100">{testimonial.name}</div>
                    <div className="text-sm text-sand-500">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
