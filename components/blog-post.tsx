"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPost() {
  const post = {
    title: "Exploring AI-Powered Design: My Experience with Google Gemini",
    date: "June 10, 2024",
    readTime: "5 min read",
    category: "Technology",
    author: "Mahmoud Mohamed Awaleh",
    authorImage: "/images/mahmoud-formal.jpg",
    featuredImage: "/images/blog/ai-gemini-cover.jpeg",
    excerpt:
      "In this post, I share my insights on using Google Gemini for creative design work and how AI tools are transforming the design landscape in government communications.",
    content: `
      <p>As a design professional with over 15 years of experience, I've witnessed numerous technological shifts in our industry. Today, I want to share my recent exploration of Google Gemini and how AI tools are reshaping creative processes in government communications.</p>
      
      <h2>The Potential of AI in Design</h2>
      <p>AI tools like Google Gemini are opening new possibilities for designers, especially those working in government and public sector communications. These tools can help streamline workflows, generate initial concepts, and provide creative inspiration when facing tight deadlines.</p>
      
      <p>I recently experimented with Google Gemini for a project, which you can explore here: <a href="https://g.co/gemini/share/93e5022cdb2a" target="_blank" rel="noopener noreferrer">Gemini Project Link</a></p>
      
      <h2>Balancing AI and Human Creativity</h2>
      <p>While AI tools offer exciting capabilities, I believe the most effective approach is to view them as collaborators rather than replacements. The human element—understanding cultural context, emotional resonance, and strategic objectives—remains irreplaceable in design work.</p>
      
      <p>In my government communication projects, I've found that AI can help with:</p>
      <ul>
        <li>Generating initial concepts and variations</li>
        <li>Streamlining repetitive design tasks</li>
        <li>Providing alternative perspectives on design challenges</li>
        <li>Assisting with content creation and editing</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>As these technologies continue to evolve, I'm excited about the possibilities they present for government communications. By embracing these tools while maintaining our creative judgment and expertise, we can deliver more impactful and efficient design solutions.</p>
      
      <p>I'd love to hear your thoughts and experiences with AI design tools. Have you experimented with Google Gemini or similar platforms? How do you see these technologies shaping the future of design in public sector communications?</p>
    `,
    tags: ["AI", "Design", "Google Gemini", "Government Communications", "Technology"],
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
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
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
            <h3 className="text-lg font-semibold mb-2">Explore the Google Gemini Project</h3>
            <p className="text-gray-600 mb-4">
              Check out my experiment with Google Gemini's AI capabilities for design work.
            </p>
            <Button
              onClick={() => window.open("https://g.co/gemini/share/93e5022cdb2a", "_blank")}
              className="bg-primary hover:bg-accent"
            >
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
                  Communications Director at the Somaliland Civil Service Commission.
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
