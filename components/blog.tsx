"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  const posts = [
    {
      title: "Exploring Creative Possibilities with Google Gemini",
      excerpt:
        "Discover how I'm using Google Gemini to enhance creative workflows and explore new design possibilities in my professional projects.",
      image: "/images/blog/gemini-share-screenshot.jpeg",
      category: "AI Tools",
      date: "June 15, 2024",
      readTime: "4 min read",
      featured: true,
      link: "/blog/gemini-creative-exploration",
    },
    {
      title: "Exploring AI-Powered Design: My Experience with Google Gemini",
      excerpt:
        "In this post, I share my insights on using Google Gemini for creative design work and how AI tools are transforming the design landscape in government communications.",
      image: "/images/blog/ai-gemini-cover.jpeg",
      category: "Technology",
      date: "June 10, 2024",
      readTime: "5 min read",
      featured: true,
      link: "/blog/gemini-ai-design",
    },
    {
      title: "The Future of Government Communication in the Digital Age",
      excerpt:
        "Exploring how modern communication strategies can bridge the gap between government institutions and citizens through digital innovation and strategic engagement.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Communication",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      featured: true,
      link: "/blog/government-communication-digital-age",
    },
    {
      title: "My Complete Design Portfolio 2021 - A Journey Through 15 Years",
      excerpt:
        "Take a comprehensive look at my design evolution, featuring major projects, brand identities, and creative solutions developed over 15 years of professional experience.",
      image: "/images/mahmoud-formal.jpg",
      category: "Portfolio",
      date: "Dec 20, 2023",
      readTime: "10 min read",
      featured: false,
      link: "https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021",
    },
    {
      title: "Building Trust Through Visual Identity Design",
      excerpt: "How strategic design choices can enhance public trust and improve institutional credibility.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Design",
      date: "Dec 10, 2023",
      readTime: "7 min read",
    },
    {
      title: "From Private Sector to Public Service: A Journey",
      excerpt: "Lessons learned from transitioning from high-paying private sector roles to meaningful public service.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Career",
      date: "Dec 5, 2023",
      readTime: "6 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights and thoughts on communication strategy, design, public service, and the intersection of creativity
            and civic responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                {post.image.startsWith("/placeholder") ? (
                  <div className="w-full h-48 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-semibold">{post.category}</span>
                  </div>
                ) : (
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <Badge className={`${post.featured ? "bg-primary" : "bg-accent"} text-white`}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date} • {post.readTime}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-accent"
                  onClick={() => (post.link ? window.open(post.link, "_self") : undefined)}
                >
                  {post.link && post.link.startsWith("http") ? "View External Link" : "Read More"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
