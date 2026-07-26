"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface Page {
  id: string
  title: string
  slug: string
  status: string
  publishedAt: string | null
}

export default function PagesAdminPage() {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch("/api/pages")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setPages(data.data || [])
      } catch (error) {
        console.error("[v0] Failed to fetch pages:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPages()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this page?")) return

    try {
      const res = await fetch(`/api/pages/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete")
      setPages(pages.filter((page) => page.id !== id))
    } catch (error) {
      console.error("[v0] Failed to delete page:", error)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pages</h1>
          <p className="text-muted-foreground">Manage your site pages</p>
        </div>
        <Link href="/admin/pages/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Page
          </Button>
        </Link>
      </div>

      {/* Pages Table */}
      <Card>
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading...</div>
        ) : pages.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No pages yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Slug</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Published</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr
                    key={page.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{page.title}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">/{page.slug}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          page.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">
                      {page.publishedAt ? new Date(page.publishedAt).toLocaleDateString() : "-"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/pages/${page.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(page.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
