import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const user = await db.query.users.findFirst({
      where: eq(users.id, id),
    })

    if (!user) {
      return NextResponse.json(
        errorResponse("User not found"),
        { status: 404 },
      )
    }

    // Remove sensitive data
    const { password, ...sanitizedUser } = user
    return NextResponse.json(successResponse(sanitizedUser))
  } catch (error) {
    console.error("[v0] Users GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch user"),
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
      .update(users)
      .set({
        name: body.name,
        role: body.role,
        isActive: body.isActive,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        errorResponse("User not found"),
        { status: 404 },
      )
    }

    const { password, ...sanitizedUser } = updated[0]
    return NextResponse.json(
      successResponse(sanitizedUser, "User updated"),
    )
  } catch (error) {
    console.error("[v0] Users PUT error:", error)
    return NextResponse.json(
      errorResponse("Failed to update user"),
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
      .delete(users)
      .where(eq(users.id, id))
      .returning()

    if (deleted.length === 0) {
      return NextResponse.json(
        errorResponse("User not found"),
        { status: 404 },
      )
    }

    return NextResponse.json(
      successResponse(null, "User deleted"),
    )
  } catch (error) {
    console.error("[v0] Users DELETE error:", error)
    return NextResponse.json(
      errorResponse("Failed to delete user"),
      { status: 500 },
    )
  }
}
