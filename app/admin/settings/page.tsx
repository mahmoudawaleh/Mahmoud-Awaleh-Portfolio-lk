"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteTitle: "Mahmoud Awaleh Portfolio",
    siteDescription: "Strategic communication and creative design professional",
    siteUrl: "https://mahmoudawaleh.com",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    accentColor: "#808080",
    analyticsEnabled: true,
    maintenanceMode: false,
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSave = async () => {
    // In a real app, this would save to the API
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure your site settings</p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6">
        {/* Site Information */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Site Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Site Title
              </label>
              <Input
                name="siteTitle"
                value={settings.siteTitle}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Site Description
              </label>
              <Textarea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Site URL
              </label>
              <Input
                name="siteUrl"
                value={settings.siteUrl}
                onChange={handleChange}
                type="url"
              />
            </div>
          </div>
        </Card>

        {/* Colors */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Primary Color
                </label>
                <Input
                  name="primaryColor"
                  type="color"
                  value={settings.primaryColor}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Secondary Color
                </label>
                <Input
                  name="secondaryColor"
                  type="color"
                  value={settings.secondaryColor}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Accent Color
                </label>
                <Input
                  name="accentColor"
                  type="color"
                  value={settings.accentColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Features</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="analyticsEnabled"
                checked={settings.analyticsEnabled}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="font-medium">Enable Analytics</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="font-medium">Maintenance Mode</span>
            </label>
          </div>
        </Card>

        {/* Save Button */}
        <Button onClick={handleSave} className="w-full">
          Save Settings
        </Button>

        {saved && (
          <div className="p-4 bg-green-100 text-green-800 rounded">
            Settings saved successfully!
          </div>
        )}
      </div>
    </div>
  )
}
