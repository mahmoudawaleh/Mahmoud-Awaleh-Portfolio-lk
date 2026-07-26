import { db } from "@/lib/db"
import { media } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { desc } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get("tag")
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = 20

    let query = db.select().from(media)

    // Filter by tag if provided
    if (tag) {
      const allMedia = await query.orderBy(desc(media.createdAt))
      const filtered = allMedia.filter((item) => item.tags?.includes(tag))
      const total = filtered.length
      const offset = (page - 1) * pageSize
      const items = filtered.slice(offset, offset + pageSize)

      return NextResponse.json(
        successResponse(items, `Retrieved ${items.length} media items`),
      )
    }

    const allMedia = await query.orderBy(desc(media.createdAt))
    const total = allMedia.length
    const offset = (page - 1) * pageSize
    const items = allMedia.slice(offset, offset + pageSize)

    return NextResponse.json(
      successResponse(items, `Retrieved ${items.length} media items`),
    )
  } catch (error) {
    console.error("[v0] Media GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch media"),
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newMedia = await db
      .insert(media)
      .values({
        id: crypto.getRandomValues(new Uint8Array(16)).toString(),
        fileName: body.fileName,
        originalName: body.originalName,
        mimeType: body.mimeType,
        size: body.size,
        width: body.width,
        height: body.height,
        url: body.url,
        thumbnailUrl: body.thumbnailUrl,
        uploadedBy: body.uploadedBy || "system",
        metadata: body.metadata || {},
        tags: body.tags || [],
        altText: body.altText,
        caption: body.caption,
      })
      .returning()

    return NextResponse.json(
      successResponse(newMedia[0], "Media uploaded successfully"),
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Media POST error:", error)
    return NextResponse.json(
      errorResponse("Failed to upload media"),
      { status: 500 },
    )
  }
}
