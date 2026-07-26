import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { successResponse, errorResponse } from "@/lib/api/response"
import { desc } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = 20
    const role = searchParams.get("role")

    let query = db.select().from(users)

    if (role) {
      // Filter by role would require where clause with eq
    }

    const allUsers = await query.orderBy(desc(users.createdAt))
    const total = allUsers.length
    const offset = (page - 1) * pageSize
    const usersList = allUsers.slice(offset, offset + pageSize)

    // Remove sensitive data
    const sanitizedUsers = usersList.map(({ password, ...user }) => user)

    return NextResponse.json(
      successResponse(sanitizedUsers, `Retrieved ${sanitizedUsers.length} users`),
    )
  } catch (error) {
    console.error("[v0] Users GET error:", error)
    return NextResponse.json(
      errorResponse("Failed to fetch users"),
      { status: 500 },
    )
  }
}
