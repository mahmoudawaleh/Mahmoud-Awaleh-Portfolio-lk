import type React from "react"
import { AdminNav } from "@/components/admin/nav"
import { AdminHeader } from "@/components/admin/header"

export const metadata = {
  title: "Admin Dashboard | Mahmoud Awaleh",
  description: "Content management and administration dashboard",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AdminNav />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
