import { db } from "@/lib/db"
import { blogPosts } from "@/lib/db/schema"
import { createBlogPostSchema } from "@/lib/validators"
import { successResponse, errorResponse, ApiError } from "@/lib/api/response"
import { desc, eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status") || "published"
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = 10

    let query = db.select().from(blogPosts)

    if (status) {
      query = query.where(eq(blogPosts.status, status as any))
    }

    if (category) {
      query = query.where(eq(blogPosts.category, category))
    }

    const allPosts = await query.orderBy(desc(blogPosts.publishedAt))

    let filteredPosts = allPosts
    if (search) {
      filteredPosts = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(search.toLowerCase()),
      )
    }

    const total = filteredPosts.length
    const offset = (page - 1) * pageSize
    const posts = filteredPosts.slice(offset, offset + pageSize)

    return NextResponse.json(
      successResponse(posts, `Retrieved ${posts.length} blog posts`),
    )
  } catch (error) {
    console.error("[v0] Blog GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch blog posts"),
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = createBlogPostSchema.parse(body)

    // Check for duplicate slug
    const existing = await db.query.blogPosts.findFirst({
      where: eq(blogPosts.slug, validatedData.slug),
    })

    if (existing) {
      throw new ApiError(400, "Slug already exists")
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = validatedData.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    const newPost = await db
      .insert(blogPosts)
      .values({
        id: crypto.getRandomValues(new Uint8Array(16)).toString(),
        ...validatedData,
        readingTime,
        author: body.authorId || "system",
      })
      .returning()

    return NextResponse.json(
      successResponse(newPost[0], "Blog post created"),
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Blog POST error:", error)
    if (error instanceof ApiError) {
      return NextResponse.json(errorResponse(error.message), {
        status: error.statusCode,
      })
    }
    return NextResponse.json(
      errorResponse("Failed to create blog post"),
      { status: 500 },
    )
  }
}
