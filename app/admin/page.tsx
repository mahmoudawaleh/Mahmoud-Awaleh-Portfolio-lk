"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface DashboardStats {
  totalPageViews: number
  totalPosts: number
  totalPortfolioItems: number
  totalUsers: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPageViews: 0,
    totalPosts: 0,
    totalPortfolioItems: 0,
    totalUsers: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        // In a real app, this would fetch from API endpoints
        setStats({
          totalPageViews: 1250,
          totalPosts: 15,
          totalPortfolioItems: 8,
          totalUsers: 5,
        })
      } catch (error) {
        console.error("[v0] Failed to fetch stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const chartData = [
    { name: "Jan", views: 400 },
    { name: "Feb", views: 300 },
    { name: "Mar", views: 500 },
    { name: "Apr", views: 450 },
    { name: "May", views: 600 },
    { name: "Jun", views: 700 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your portfolio management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Page Views</span>
            <span className="text-2xl font-bold text-foreground">{stats.totalPageViews.toLocaleString()}</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Blog Posts</span>
            <span className="text-2xl font-bold text-foreground">{stats.totalPosts}</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Portfolio Items</span>
            <span className="text-2xl font-bold text-foreground">{stats.totalPortfolioItems}</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Total Users</span>
            <span className="text-2xl font-bold text-foreground">{stats.totalUsers}</span>
          </div>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Page Views Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#3b82f6" name="Page Views" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
