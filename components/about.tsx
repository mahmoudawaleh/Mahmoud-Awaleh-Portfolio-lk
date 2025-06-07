"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Palette } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative">
              <Image
                src="/images/mahmoud-office.jpg"
                alt="Mahmoud Mohamed Awaleh in his office"
                width={500}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">15+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                I am Professional User
                <br />
                <span className="text-purple-600">Experience Designer</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Before joining the civil service, I built a successful career in the private sector, working as a
                Creative Designer and Marketing Manager since 2011. I earned some of the highest salaries in Somaliland,
                including significant sales commissions, which reflected my marketing skills and business acumen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I never joined the government for status or financial gain. Like many Somalilanders, I often criticized
                the government's weak public services and lack of effective communication. However, I challenged myself
                to move beyond criticism and contribute actively to my country's development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Team Leadership</div>
                      <div className="text-sm text-gray-600">Strategic Management</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Creative Design</div>
                      <div className="text-sm text-gray-600">Brand Development</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
            >
              View Complete Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
