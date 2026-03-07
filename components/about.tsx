"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Palette, Target, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation, useMouseTilt } from "@/hooks/use-scroll-animation"

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 })
  const { ref: imageRef, tilt } = useMouseTilt(5)

  const skills = [
    { icon: Users, title: "Team Leadership", desc: "Strategic Management", color: "from-sand-300 to-sand-400" },
    { icon: Palette, title: "Creative Design", desc: "Brand Development", color: "from-sand-400 to-sand-500" },
    { icon: Target, title: "Strategic Planning", desc: "Goal-Oriented", color: "from-sand-500 to-sand-600" },
    { icon: Lightbulb, title: "Innovation", desc: "Creative Solutions", color: "from-sand-300 to-sand-500" },
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-sand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sand-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image with 3D Effect */}
          <div 
            ref={imageRef}
            className={`relative perspective-2000 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          >
            <div 
              className="preserve-3d transition-transform duration-300 ease-out"
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 blur-2xl animate-pulse-glow" />
                <div className="relative rounded-3xl overflow-hidden shadow-3d-lg border-2 border-sand-200/50">
                  <Image
                    src="/images/mahmoud-office.jpg"
                    alt="Mahmoud Mohamed Awaleh in his office"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sand-700/40 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Floating Experience Card */}
              <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 shadow-gold border border-sand-200/50 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center shadow-gold">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold gold-gradient-text">15+</div>
                    <div className="text-sm text-sand-500">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Projects Card */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 shadow-lg border border-sand-200/50 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sand-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-sand-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-sand-700">200+</div>
                    <div className="text-xs text-sand-500">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <div className="h-px w-8 gold-gradient" />
              <span className="text-sm font-medium text-sand-400 uppercase tracking-wider">About Me</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-sand-700 dark:text-sand-100 leading-tight">
                I am a Professional
                <br />
                <span className="gold-gradient-text">Experience Designer</span>
              </h2>
              
              <div className="space-y-4 text-sand-600 dark:text-sand-300 leading-relaxed">
                <p>
                  Before joining the civil service, I built a successful career in the private sector, working as a
                  Creative Designer and Marketing Manager since 2011. I earned some of the highest salaries in Somaliland,
                  including significant sales commissions, which reflected my marketing skills and business acumen.
                </p>
                <p>
                  I never joined the government for status or financial gain. Like many Somalilanders, I often criticized
                  the government's weak public services and lack of effective communication. However, I challenged myself
                  to move beyond criticism and contribute actively to my country's development.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card 
                  key={index}
                  className={`group hover-lift glass border-sand-200/50 overflow-hidden transition-all duration-500 delay-${(index + 1) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <CardContent className="p-5 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sand-700 dark:text-sand-100">{skill.title}</div>
                        <div className="text-sm text-sand-500">{skill.desc}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="btn-gold h-14 px-8 text-lg font-semibold rounded-xl group"
              onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
            >
              View Complete Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
