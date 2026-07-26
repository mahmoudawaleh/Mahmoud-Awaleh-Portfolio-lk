import { db } from "@/lib/db"
import { portfolioItems } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const item = await db.query.portfolioItems.findFirst({
      where: eq(portfolioItems.id, id),
    })

    if (!item) {
      return NextResponse.json(
        errorResponse("Portfolio item not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(successResponse(item))
  } catch (error) {
    console.error("[v0] Portfolio GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch portfolio item"),
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
      .update(portfolioItems)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(portfolioItems.id, id))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        errorResponse("Portfolio item not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(updated[0], "Portfolio item updated"),
    )
  } catch (error) {
    console.error("[v0] Portfolio PUT error:", error)
    return NextResponse.json(
      errorResponse("Failed to update portfolio item"),
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
      .delete(portfolioItems)
      .where(eq(portfolioItems.id, id))
      .returning()

    if (deleted.length === 0) {
      return NextResponse.json(
        errorResponse("Portfolio item not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(deleted[0], "Portfolio item deleted"),
    )
  } catch (error) {
    console.error("[v0] Portfolio DELETE error:", error)
    return NextResponse.json(
      errorResponse("Failed to delete portfolio item"),
      { status: 500 },
    )
  }
}
