import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Award, Users, Palette, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const skills = [
    "Strategic Communications",
    "Media Relations",
    "Brand Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Creation",
    "Leadership",
    "Adobe Creative Suite",
  ]

  const projects = [
    "Somaliland National ID Card Design",
    "Somaliland Voter ID Design",
    "Somaliland Visa Sticker Design System",
    "First Somaliland Vehicle Tax Sticker Design",
    "Somaliland Regional Sports Logos Redesign (2020)",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/images/mahmoud-photo.jpg"
              alt="Mahmoud Mohamed Awaleh"
              fill
              className="rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Mahmoud Mohamed Awaleh</h1>
          <p className="text-xl text-slate-600 mb-4">
            PR & Communications Director | Creative Strategist | Graphic Designer
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Somaliland</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">About Me</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                I am a seasoned communication and creative professional with over 15 years of experience in graphic
                design, marketing, and public relations. Since October 2021, I have proudly served as the PR &
                Communications Director at the Somaliland Civil Service Commission, where I lead strategic
                communications and national branding initiatives.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why I Joined Civil Service */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">Why I Joined Civil Service</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="leading-relaxed mb-4">
                Before joining the civil service, I built a successful career in the private sector, working as a
                Creative Designer and Marketing Manager since 2011. I earned some of the highest salaries in Somaliland,
                including significant sales commissions, which reflected my marketing skills and business acumen.
              </p>
              <p className="leading-relaxed mb-4">
                I never joined the government for status or financial gain. Like many Somalilanders, I often criticized
                the government's weak public services and lack of effective communication. However, I challenged myself
                to move beyond criticism and contribute actively to my country's development.
              </p>
              <p className="leading-relaxed">
                When I was given the opportunity to serve my nation, I embraced it fully, applying my skills to major
                national projects that I am proud to have led.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Major Projects */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">Major National Projects</h2>
            </div>
            <div className="grid gap-3">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="font-medium text-slate-700">{project}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Approach */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">My Approach</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              I combine creative vision with strategic communication to build meaningful connections between government
              institutions and the public. My work blends design innovation with clear messaging, fostering trust and
              engagement.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500">Ready to collaborate on meaningful projects that make a difference.</p>
        </div>
      </div>
    </div>
  )
}
