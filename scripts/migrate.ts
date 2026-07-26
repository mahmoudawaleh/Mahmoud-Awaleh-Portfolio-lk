import { migrate } from "drizzle-orm/postgres-js/migrator"
import { db } from "@/lib/db"
import postgres from "postgres"
import path from "path"

async function main() {
  console.log("[v0] Running migrations...")

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error("DATABASE_URL is required")
  }

  const client = postgres(connectionString)
  const dbMigrate = {
    execute: async (sql: string) => {
      await client.unsafe(sql)
    },
  }

  try {
    // Run migrations from drizzle folder
    await migrate(db, dbMigrate as any)
    console.log("[v0] Migrations completed successfully")
  } catch (error) {
    console.error("[v0] Migration failed:", error)
    process.exit(1)
  } finally {
    await client.end()
  }
}

main()
