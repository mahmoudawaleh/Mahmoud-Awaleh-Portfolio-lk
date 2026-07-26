import { db } from "@/lib/db"
import { blogPosts } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const post = await db.query.blogPosts.findFirst({
      where: eq(blogPosts.id, id),
      with: {
        author: true,
        comments: true,
      },
    })

    if (!post) {
      return NextResponse.json(
        errorResponse("Blog post not found"),
        { status: 404 },
      )
    }

    // Increment view count
    await db
      .update(blogPosts)
      .set({ views: (post.views || 0) + 1 })
      .where(eq(blogPosts.id, id))

    return NextResponse.json(successResponse(post))
  } catch (error) {
    console.error("[v0] Blog GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch blog post"),
      { status: 500 },
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const body = await request.json()

    const updated = await db
      .update(blogPosts)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        errorResponse("Blog post not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(updated[0], "Blog post updated"),
    )
  } catch (error) {
    console.error("[v0] Blog PUT error:", error)
    return NextResponse.json(
      errorResponse("Failed to update blog post"),
      { status: 500 },
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params

    const deleted = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id))
      .returning()

    if (deleted.length === 0) {
      return NextResponse.json(
        errorResponse("Blog post not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(deleted[0], "Blog post deleted"),
    )
  } catch (error) {
    console.error("[v0] Blog DELETE error:", error)
    return NextResponse.json(
      errorResponse("Failed to delete blog post"),
      { status: 500 },
    )
  }
}
