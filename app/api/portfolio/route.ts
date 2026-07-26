import { db } from "@/lib/db"
import { portfolioItems } from "@/lib/db/schema"
import { createPortfolioItemSchema } from "@/lib/validators"
import { successResponse, errorResponse, ApiError } from "@/lib/api/response"
import { desc, eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status") || "published"
    const category = searchParams.get("category")
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = 12

    let query = db.select().from(portfolioItems)

    if (status) {
      query = query.where(eq(portfolioItems.status, status as any))
    }

    if (category) {
      query = query.where(eq(portfolioItems.category, category))
    }

    const allItems = await query.orderBy(desc(portfolioItems.publishedAt))
    const total = allItems.length
    const offset = (page - 1) * pageSize
    const items = allItems.slice(offset, offset + pageSize)

    return NextResponse.json(
      successResponse(items, `Retrieved ${items.length} portfolio items`),
    )
  } catch (error) {
    console.error("[v0] Portfolio GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch portfolio items"),
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = createPortfolioItemSchema.parse(body)

    // Check for duplicate slug
    const existing = await db.query.portfolioItems.findFirst({
      where: eq(portfolioItems.slug, validatedData.slug),
    })

    if (existing) {
      throw new ApiError(400, "Slug already exists")
    }

    const newItem = await db
      .insert(portfolioItems)
      .values({
        id: crypto.getRandomValues(new Uint8Array(16)).toString(),
        ...validatedData,
        author: body.authorId || "system",
      })
      .returning()

    return NextResponse.json(
      successResponse(newItem[0], "Portfolio item created"),
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Portfolio POST error:", error)
    if (error instanceof ApiError) {
      return NextResponse.json(errorResponse(error.message), {
        status: error.statusCode,
      })
    }
    return NextResponse.json(
      errorResponse("Failed to create portfolio item"),
      { status: 500 },
    )
  }
}
