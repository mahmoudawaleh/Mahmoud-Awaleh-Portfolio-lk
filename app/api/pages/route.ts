import { db } from "@/lib/db"
import { pages } from "@/lib/db/schema"
import { createPageSchema } from "@/lib/validators"
import { successResponse, errorResponse, ApiError } from "@/lib/api/response"
import { desc, eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    let query = db.select().from(pages)

    if (status) {
      query = query.where(eq(pages.status, status as any))
    }

    const allPages = await query.orderBy(desc(pages.createdAt))

    return NextResponse.json(
      successResponse(allPages, `Retrieved ${allPages.length} pages`),
    )
  } catch (error) {
    console.error("[v0] Pages GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch pages"),
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = createPageSchema.parse(body)

    // Check for duplicate slug
    const existing = await db.query.pages.findFirst({
      where: eq(pages.slug, validatedData.slug),
    })

    if (existing) {
      throw new ApiError(400, "Slug already exists")
    }

    const newPage = await db
      .insert(pages)
      .values({
        id: crypto.getRandomValues(new Uint8Array(16)).toString(),
        ...validatedData,
        author: body.authorId || "system",
      })
      .returning()

    return NextResponse.json(
      successResponse(newPage[0], "Page created"),
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Pages POST error:", error)
    if (error instanceof ApiError) {
      return NextResponse.json(errorResponse(error.message), {
        status: error.statusCode,
      })
    }
    return NextResponse.json(
      errorResponse("Failed to create page"),
      { status: 500 },
    )
  }
}
