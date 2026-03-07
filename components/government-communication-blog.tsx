"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft, Globe, MessageSquare, Smartphone, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GovernmentCommunicationBlog() {
  const post = {
    title: "The Future of Government Communication in the Digital Age",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Communication",
    author: "Mahmoud Mohamed Awaleh",
    authorImage: "/images/mahmoud-formal.jpg",
    featuredImage: "/placeholder.svg?height=400&width=800",
    excerpt:
      "Exploring how modern communication strategies can bridge the gap between government institutions and citizens through digital innovation and strategic engagement.",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-[400px] w-full bg-gradient-to-r from-primary to-accent">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <h1 className="text-4xl font-bold mb-2">Digital Government</h1>
                <p className="text-xl opacity-90">Communication in the Modern Era</p>
              </div>
            </div>
          </div>

          {/* Post Header */}
          <div className="p-8">
            <div className="mb-6">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                In today's interconnected world, the relationship between governments and their citizens is being
                reshaped by digital innovation. As someone working at the forefront of public communication in
                Somaliland, I've witnessed firsthand how strategic use of digital tools can transform not only outreach
                but also trust, transparency, and service delivery.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      🛰️ From One-Way Broadcast to Two-Way Dialogue
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Gone are the days when government communication meant occasional press releases and state media
                      broadcasts. Today's citizens expect real-time updates, interactive platforms, and responsive
                      engagement. Social media has become the town hall, and mobile-friendly websites are now the
                      digital face of public institutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      At the <strong>Civil Service Commission (CSC) of Somaliland</strong>, we've embraced this
                      shift—creating unified brand guidelines, redesigning our web platforms, and automating content
                      workflows through AI-powered tools. These aren't just tech upgrades; they're strategic moves to
                      connect better with the people we serve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      📲 Embracing Digital Tools: Not Just Trends, But Transformation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      AI, chatbots, and automation are revolutionizing how we communicate. For CSC, I led the
                      development of an AI-driven content system using Notion to generate daily, multilingual posts
                      across platforms—making our outreach more consistent, inclusive, and efficient.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We're also building internal dashboards that track real-time public sentiment, social media
                      performance, and digital policy impact—ensuring decisions are informed by data, not assumptions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded-r-lg">
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Local Voice, Global Standards</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Somaliland's government institutions have a unique story to tell. By applying international
                      standards—like those from South Africa's government UX models—and blending them with local
                      cultural relevance, we ensure that our content speaks authentically to citizens while meeting
                      global best practices.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Whether it's a public holiday announcement or a civil service reform policy, we focus on clear,
                      citizen-first communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
                <div className="flex items-start">
                  <Rocket className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      🚀 What's Next: A Digital Ecosystem for Good Governance
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Looking ahead, the future of government communication lies in:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Seamless cross-platform integration (mobile money, e-services, government apps)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Voice-powered service bots in Somali</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Centralized communication hubs for agencies and ministries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Youth engagement through digital storytelling</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We're not just building content—we're shaping how government is perceived, accessed, and trusted.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">💭 Final Thought:</h3>
                <p className="text-gray-700 leading-relaxed italic">
                  As Director of PR & Communications at CSC Somaliland and a creative strategist, I believe the digital
                  age is not a threat to public institutions—it's an opportunity. An opportunity to listen more, serve
                  smarter, and lead with transparency.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                {[
                  "Digital Government",
                  "Communication Strategy",
                  "Public Service",
                  "Digital Transformation",
                  "Somaliland",
                ].map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">Share this post</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Content */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Related Work</h3>
            <p className="text-gray-600 mb-4">
              Explore how these communication strategies are implemented in practice through our government publications
              and digital initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.open("/#portfolio", "_self")} className="bg-primary hover:bg-accent">
                View Government Projects
              </Button>
              <Button variant="outline" onClick={() => window.open("/portfolio/magazine", "_self")}>
                CSC Magazine Collection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Author Bio */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                <p className="text-gray-600 mb-4">
                  Mahmoud Mohamed Awaleh serves as PR & Communications Director at the Somaliland Civil Service
                  Commission, where he leads digital transformation initiatives and strategic communication efforts.
                  With over 15 years of experience in design and communications, he specializes in bridging the gap
                  between government institutions and citizens through innovative digital solutions.
                </p>
                <Link href="/#about" className="text-primary hover:text-accent font-medium">
                  Learn more about Mahmoud
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
