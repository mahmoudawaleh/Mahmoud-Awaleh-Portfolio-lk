"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  featuredImage: string | null
  category: string | null
  views: number
  readingTime: number | null
  publishedAt: string | null
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blog?status=published")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setPosts(data.data || [])
      } catch (error) {
        console.error("[v0] Failed to fetch blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean)),
  ) as string[]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on design, communication, and digital innovation
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center text-muted-foreground">Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-muted-foreground">No posts found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    {post.category && (
                      <span className="text-xs font-semibold text-primary mb-2 uppercase">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt || ""}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex gap-4">
                        {post.readingTime && <span>{post.readingTime} min read</span>}
                        <span>{post.views || 0} views</span>
                      </div>
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
