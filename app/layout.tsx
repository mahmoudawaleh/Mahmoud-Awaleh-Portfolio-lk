import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://m2awaleh.vercel.app"),
  title: "Mahmoud Awaleh | Independent Strategic Consultant & Governance Architect",
  description:
    "Independent strategic consultant focused on governance architecture, institutional strategy, and practical digital systems.",
  keywords: [
    "Mahmoud Awaleh",
    "governance architecture",
    "strategic consulting",
    "digital systems",
    "Somaliland",
    "branding",
    "public relations",
  ],
  authors: [{ name: "Mahmoud Mohamed Awaleh" }],
  creator: "Mahmoud Mohamed Awaleh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://m2awaleh.vercel.app",
    title: "Mahmoud Awaleh | Independent Strategic Consultant",
    description:
      "Governance architecture, institutional strategy, and practical digital systems.",
    siteName: "Mahmoud Awaleh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Awaleh | Independent Strategic Consultant",
    description: "Governance architecture, institutional strategy, and practical digital systems.",
    creator: "@mahmoudawaleh",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
