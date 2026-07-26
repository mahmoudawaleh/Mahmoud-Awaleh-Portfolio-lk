"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const pageViewsData = [
  { date: "Mon", views: 240 },
  { date: "Tue", views: 320 },
  { date: "Wed", views: 280 },
  { date: "Thu", views: 350 },
  { date: "Fri", views: 420 },
  { date: "Sat", views: 290 },
  { date: "Sun", views: 180 },
]

const topPagesData = [
  { page: "Homepage", views: 1200 },
  { page: "Portfolio", views: 890 },
  { page: "Blog", views: 720 },
  { page: "Contact", views: 340 },
  { page: "About", views: 280 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">View your website analytics and statistics</p>
      </div>

      <div className="mt-8 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Page Views</span>
              <span className="text-3xl font-bold text-foreground">3,680</span>
              <span className="text-xs text-green-600">+12% from last week</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Unique Visitors</span>
              <span className="text-3xl font-bold text-foreground">1,240</span>
              <span className="text-xs text-green-600">+8% from last week</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Avg Session Duration</span>
              <span className="text-3xl font-bold text-foreground">3:45</span>
              <span className="text-xs text-green-600">+2% from last week</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Bounce Rate</span>
              <span className="text-3xl font-bold text-foreground">34%</span>
              <span className="text-xs text-red-600">-2% from last week</span>
            </div>
          </Card>
        </div>

        {/* Page Views Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Page Views</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pageViewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#3b82f6"
                name="Page Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Pages */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Top Pages</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topPagesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="page" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#3b82f6" name="Views" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-sm">Blog post "AI Design Trends" published</span>
              <span className="text-xs text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-sm">Portfolio project "Magazine Design" updated</span>
              <span className="text-xs text-muted-foreground">5 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-sm">New user "John Doe" registered</span>
              <span className="text-xs text-muted-foreground">1 day ago</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm">Site settings updated</span>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
