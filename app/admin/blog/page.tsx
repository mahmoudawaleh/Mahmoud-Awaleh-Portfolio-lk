"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  category: string | null
  status: string
  views: number
  publishedAt: string | null
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch blog posts
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blog?status=all")
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

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    try {
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete")
      setPosts(posts.filter((post) => post.id !== id))
    } catch (error) {
      console.error("[v0] Failed to delete blog post:", error)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground">Manage your blog posts</p>
        </div>
        <Link href="/admin/blog/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Blog Posts Table */}
      <Card>
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No blog posts yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Views</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Published</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{post.title}</td>
                    <td className="px-6 py-4 text-muted-foreground">{post.category || "-"}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          post.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{post.views || 0}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "-"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/blog/${post.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
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
