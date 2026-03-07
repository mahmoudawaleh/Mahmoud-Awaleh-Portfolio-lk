"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Palette, Users, Megaphone, Camera, BarChart, Sparkles, ArrowRight, Monitor, Layout, Code } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Services() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const services = [
    {
      icon: MessageSquare,
      title: "Strategic Communications",
      description: "Comprehensive communication strategies that build trust and engagement between institutions and stakeholders.",
      color: "from-sand-300 to-sand-400",
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Creating compelling visual identities and brand systems that reflect organizational values and mission.",
      color: "from-sand-400 to-sand-500",
    },
    {
      icon: Users,
      title: "Public Relations",
      description: "Managing public perception and building positive relationships with media, stakeholders, and communities.",
      color: "from-sand-500 to-sand-600",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Leveraging digital platforms and social media to amplify messages and reach target audiences effectively.",
      color: "from-sand-300 to-sand-500",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Developing engaging content across multiple formats including copywriting, photography, and multimedia.",
      color: "from-sand-400 to-sand-600",
    },
    {
      icon: BarChart,
      title: "Campaign Management",
      description: "Planning and executing integrated campaigns that deliver measurable results and drive organizational goals.",
      color: "from-sand-500 to-sand-700",
    },
  ]

  const specialties = [
    { icon: Monitor, title: "User Experience (UX)", desc: "Designing intuitive experiences that make government services more accessible and user-friendly for citizens." },
    { icon: Layout, title: "User Interface (UI)", desc: "Creating clean, modern interfaces that enhance digital communication and improve user engagement." },
    { icon: Code, title: "Web Development", desc: "Building responsive, accessible websites and digital platforms that serve diverse audiences effectively." },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-white to-sand-50 dark:from-sand-700/10 dark:via-sand-800/5 dark:to-sand-700/10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sand-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-sand-400" />
            <span className="text-sm font-medium text-sand-400 uppercase tracking-wider">What I Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-700 dark:text-sand-100 mb-6">
            My <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-sand-600 dark:text-sand-300 max-w-2xl mx-auto text-lg">
            I combine creative vision with strategic communication to build meaningful connections between
            organizations and their audiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Specialties */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Specialties Cards */}
            <div className="space-y-4">
              {specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="group flex gap-4 p-5 glass rounded-2xl border border-sand-200/50 hover-lift cursor-default"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                      <specialty.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sand-700 dark:text-sand-100 mb-1 group-hover:text-sand-500 transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-sand-600 dark:text-sand-300 text-sm leading-relaxed">
                      {specialty.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image with overlay */}
            <div className="relative mt-8 group">
              <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden shadow-3d">
                <Image
                  src="/images/mahmoud-working.jpg"
                  alt="Mahmoud Mohamed Awaleh working at his desk"
                  width={500}
                  height={350}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-700/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Dedicated to excellence in every project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass border-sand-200/50 overflow-hidden hover-lift"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <CardContent className="p-6 relative">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-sand-700 dark:text-sand-100 mb-2 group-hover:text-sand-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sand-600 dark:text-sand-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-2 text-sand-400 group-hover:text-sand-500 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
