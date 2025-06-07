import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Palette, Users, Megaphone, Camera, BarChart } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: "Strategic Communications",
      description:
        "Comprehensive communication strategies that build trust and engagement between institutions and stakeholders.",
    },
    {
      icon: Palette,
      title: "Brand Development",
      description:
        "Creating compelling visual identities and brand systems that reflect organizational values and mission.",
    },
    {
      icon: Users,
      title: "Public Relations",
      description:
        "Managing public perception and building positive relationships with media, stakeholders, and communities.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Leveraging digital platforms and social media to amplify messages and reach target audiences effectively.",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description:
        "Developing engaging content across multiple formats including copywriting, photography, and multimedia.",
    },
    {
      icon: BarChart,
      title: "Campaign Management",
      description:
        "Planning and executing integrated campaigns that deliver measurable results and drive organizational goals.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I do?</h2>
              <p className="text-gray-600 leading-relaxed">
                I combine creative vision with strategic communication to build meaningful connections between
                organizations and their audiences. My expertise spans traditional and digital media, with a focus on
                government communication and public service excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Experience (UX)</h3>
                <p className="text-gray-600">
                  Designing intuitive experiences that make government services more accessible and user-friendly for
                  citizens.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Interface (UI)</h3>
                <p className="text-gray-600">
                  Creating clean, modern interfaces that enhance digital communication and improve user engagement.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-600">
                  Building responsive, accessible websites and digital platforms that serve diverse audiences
                  effectively.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Image
                src="/images/mahmoud-working.jpg"
                alt="Mahmoud Mohamed Awaleh working at his desk"
                width={500}
                height={350}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                    <service.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
