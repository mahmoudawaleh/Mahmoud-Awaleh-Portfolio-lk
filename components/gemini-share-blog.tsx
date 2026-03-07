"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft, ExternalLink, Sparkles, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GeminiShareBlog() {
  const post = {
    title: "Exploring Creative Possibilities with Google Gemini",
    date: "June 15, 2024",
    readTime: "4 min read",
    category: "AI Tools",
    author: "Mahmoud Mohamed Awaleh",
    authorImage: "/images/mahmoud-formal.jpg",
    featuredImage: "/images/blog/gemini-share-screenshot.jpeg",
    geminiLink: "https://g.co/gemini/share/ab30a1f48618",
    excerpt:
      "Discover how I'm using Google Gemini to enhance creative workflows and explore new design possibilities in my professional projects.",
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
          <div className="relative h-[400px] w-full">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className="mb-4 bg-primary text-white">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
              </div>
            </div>
          </div>

          {/* Post Header */}
          <div className="p-8">
            <div className="mb-6">
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
              <p>
                As a design professional constantly looking for new tools to enhance my creative process, I've been
                exploring Google Gemini's capabilities for various aspects of my work. I'd like to share a specific
                project I've been developing with Gemini that demonstrates its potential for creative professionals.
              </p>

              <div className="my-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Gemini Project</h3>
                    <p className="text-gray-700 mb-4">
                      I've created an interactive project with Google Gemini that explores new approaches to design
                      thinking and creative problem-solving. Click the link below to explore the full project:
                    </p>
                    <Button
                      className="bg-primary hover:bg-accent"
                      onClick={() => window.open(post.geminiLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Gemini Project
                    </Button>
                  </div>
                </div>
              </div>

              <h2>How I'm Using Gemini in My Creative Process</h2>

              <p>
                Google Gemini has become an invaluable tool in my creative workflow, helping me explore new ideas and
                approaches to design challenges. Here are some of the ways I'm incorporating it into my process:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                    <h3 className="font-bold text-gray-900">Ideation & Brainstorming</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Using Gemini to generate diverse creative concepts and explore different directions for projects
                    before committing to a specific approach.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Code className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <h3 className="font-bold text-gray-900">Design Iteration</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Refining design concepts through collaborative iteration with Gemini, which helps identify potential
                    improvements and alternative solutions.
                  </p>
                </div>
              </div>

              <h2>The Future of AI in Creative Design</h2>

              <p>
                As AI tools like Google Gemini continue to evolve, I believe they'll become increasingly valuable
                partners in the creative process. Rather than replacing human creativity, these tools amplify our
                capabilities by helping us explore more possibilities and overcome creative blocks.
              </p>

              <p>
                I invite you to explore my Gemini project and share your thoughts on how AI tools might enhance your own
                creative or professional work. I'm particularly interested in how these technologies can be applied in
                government communications and public sector design challenges.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      AI tools like Gemini are most effective when used to enhance human creativity, not replace it
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrating AI into creative workflows can help explore more possibilities in less time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      The future of design likely involves collaborative processes between human designers and AI tools
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                {["Google Gemini", "AI Tools", "Creative Process", "Design", "Innovation"].map((tag, index) => (
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

        {/* Featured Link Card */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Explore My Gemini Project</h3>
            <p className="text-gray-600 mb-4">
              Check out my interactive project created with Google Gemini to see how I'm using AI in my creative
              process.
            </p>
            <Button onClick={() => window.open(post.geminiLink, "_blank")} className="bg-primary hover:bg-accent">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Gemini Project
            </Button>
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
                  Mahmoud Mohamed Awaleh is a seasoned communication and creative professional with over 15 years of
                  experience in graphic design, marketing, and public relations. He currently serves as the PR &
                  Communications Director at the Somaliland Civil Service Commission and is exploring innovative ways to
                  incorporate AI tools into government communications.
                </p>
                <Link href="/#about" className="text-primary hover:text-accent font-medium">
                  Learn more
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
