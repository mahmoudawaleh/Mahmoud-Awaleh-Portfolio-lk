"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  id: string
  fileName: string
  originalName: string | null
  mimeType: string | null
  size: number
  url: string
  thumbnailUrl: string | null
  createdAt: string
}

export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch("/api/media")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setItems(data.data || [])
      } catch (error) {
        console.error("[v0] Failed to fetch media:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMedia()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this media?")) return

    try {
      const res = await fetch(`/api/media/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete")
      setItems(items.filter((item) => item.id !== id))
    } catch (error) {
      console.error("[v0] Failed to delete media:", error)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Media Library</h1>
          <p className="text-muted-foreground">Manage your uploaded files and images</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="text-center text-muted-foreground">Loading...</div>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No media items yet</p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted relative group">
                {item.mimeType?.startsWith("image/") ? (
                  <Image
                    src={item.thumbnailUrl || item.url}
                    alt={item.originalName || "Media"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{item.mimeType}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium truncate">{item.originalName || item.fileName}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(item.size)}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
