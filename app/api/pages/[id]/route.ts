import { db } from "@/lib/db"
import { pages } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const page = await db.query.pages.findFirst({
      where: eq(pages.id, id),
      with: {
        author: true,
        blocks: true,
      },
    })

    if (!page) {
      return NextResponse.json(
        errorResponse("Page not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(successResponse(page))
  } catch (error) {
    console.error("[v0] Pages GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch page"),
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
      .update(pages)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(pages.id, id))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        errorResponse("Page not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(updated[0], "Page updated"),
    )
  } catch (error) {
    console.error("[v0] Pages PUT error:", error)
    return NextResponse.json(
      errorResponse("Failed to update page"),
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
      .delete(pages)
      .where(eq(pages.id, id))
      .returning()

    if (deleted.length === 0) {
      return NextResponse.json(
        errorResponse("Page not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(deleted[0], "Page deleted"),
    )
  } catch (error) {
    console.error("[v0] Pages DELETE error:", error)
    return NextResponse.json(
      errorResponse("Failed to delete page"),
      { status: 500 },
    )
  }
}
