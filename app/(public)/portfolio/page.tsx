"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PortfolioItem {
  id: string
  title: string
  slug: string
  description: string | null
  thumbnail: string | null
  category: string | null
  publishedAt: string | null
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/portfolio?status=published")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setItems(data.data || [])
      } catch (error) {
        console.error("[v0] Failed to fetch portfolio items:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items

  const categories = Array.from(
    new Set(items.map((item) => item.category).filter(Boolean)),
  ) as string[]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore my selected projects and case studies
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

        {/* Portfolio Grid */}
        {loading ? (
          <div className="text-center text-muted-foreground">Loading projects...</div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center text-muted-foreground">No projects found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
                  {item.thumbnail && (
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    {item.category && (
                      <span className="text-xs font-semibold text-primary mb-2 uppercase">
                        {item.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">
                      {item.description || ""}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {item.publishedAt && (
                        <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
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
