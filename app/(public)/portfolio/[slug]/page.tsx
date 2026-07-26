"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  slug: string
  description: string | null
  content: string | null
  images: Array<{ url: string; caption?: string }> | null
  thumbnail: string | null
  category: string | null
  tags: string[] | null
  links: Record<string, string> | null
  publishedAt: string | null
}

export default function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [item, setItem] = useState<PortfolioItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState<string>("")

  useEffect(() => {
    params.then((p) => setSlug(p.slug))
  }, [params])

  useEffect(() => {
    if (!slug) return

    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/portfolio?status=published&search=${slug}`)
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        const foundItem = data.data?.find((p: PortfolioItem) => p.slug === slug)
        if (!foundItem) throw new Error("Item not found")
        setItem(foundItem)
      } catch (error) {
        console.error("[v0] Failed to fetch portfolio item:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchItem()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 max-w-2xl">
          {item.category && (
            <span className="text-sm font-semibold text-primary uppercase mb-2 block">
              {item.category}
            </span>
          )}
          <h1 className="text-4xl font-bold text-foreground mb-4">{item.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{item.description}</p>

          {/* Links */}
          {item.links && Object.entries(item.links).length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(item.links).map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="outline">
                    <span className="capitalize">{label}</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail */}
        {item.thumbnail && (
          <Card className="mb-12 overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Content */}
            {item.content && (
              <Card className="p-8 mb-8">
                <div
                  className="text-foreground leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Card>
            )}

            {/* Images Gallery */}
            {item.images && item.images.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.images.map((img, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption || `Project image ${idx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                      {img.caption && (
                        <p className="p-3 text-sm text-muted-foreground">{img.caption}</p>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Meta Info */}
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Project Details</h3>
              {item.category && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase mb-1">Category</p>
                  <p className="text-sm text-foreground">{item.category}</p>
                </div>
              )}
              {item.publishedAt && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Date</p>
                  <p className="text-sm text-foreground">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </Card>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link href="/portfolio">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
