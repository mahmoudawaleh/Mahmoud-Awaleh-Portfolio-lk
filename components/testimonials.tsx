import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonial</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What colleagues and partners say about working with me on transformative communication and design projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-purple-200" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
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
