import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

export default function WorkProcess() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Research",
      description:
        "I conduct thorough research to understand your brand, audience, and market positioning for effective communication strategies.",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Creating visually compelling designs that align with your brand identity and communicate your message effectively.",
    },
    {
      icon: Code,
      title: "Develop",
      description:
        "Implementing comprehensive communication strategies and developing materials that engage your target audience.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "Executing campaigns and initiatives with precision, ensuring maximum impact and measurable results.",
    },
  ]

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My systematic approach to delivering exceptional communication and design solutions that drive results and
            build meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
