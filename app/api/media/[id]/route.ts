import { db } from "@/lib/db"
import { media } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const mediaItem = await db.query.media.findFirst({
      where: eq(media.id, id),
    })

    if (!mediaItem) {
      return NextResponse.json(
        errorResponse("Media not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(successResponse(mediaItem))
  } catch (error) {
    console.error("[v0] Media GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch media"),
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
      .update(media)
      .set({
        altText: body.altText,
        caption: body.caption,
        tags: body.tags,
        metadata: body.metadata,
        updatedAt: new Date(),
      })
      .where(eq(media.id, id))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        errorResponse("Media not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(updated[0], "Media updated"),
    )
  } catch (error) {
    console.error("[v0] Media PUT error:", error)
    return NextResponse.json(
      errorResponse("Failed to update media"),
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
      .delete(media)
      .where(eq(media.id, id))
      .returning()

    if (deleted.length === 0) {
      return NextResponse.json(
        errorResponse("Media not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(deleted[0], "Media deleted"),
    )
  } catch (error) {
    console.error("[v0] Media DELETE error:", error)
    return NextResponse.json(
      errorResponse("Failed to delete media"),
      { status: 500 },
    )
  }
}
