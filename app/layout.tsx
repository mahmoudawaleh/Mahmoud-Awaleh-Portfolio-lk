import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://m2awaleh.vercel.app"),
  title: "Mahmoud Awaleh | Digital Architect & Sovereign Innovation Strategist",
  description:
    "Independent strategic consultant designing governance systems, digital public infrastructure, institutional workflows and trustworthy digital products in the Republic of Somaliland.",
  keywords: [
    "Mahmoud Awaleh",
    "Digital Architect",
    "Sovereign Innovation Strategist",
    "GovTech",
    "Digital public infrastructure",
    "Governance systems",
    "Institutional design",
    "Quality engineering",
    "Republic of Somaliland",
    "Hargeisa",
  ],
  authors: [{ name: "Mahmoud Awaleh" }],
  creator: "Mahmoud Awaleh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://m2awaleh.vercel.app",
    title: "Mahmoud Awaleh | Digital Architect",
    description:
      "Governance, institutional design and trustworthy digital infrastructure.",
    siteName: "Mahmoud Awaleh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Awaleh | Digital Architect",
    description: "Governance, institutional design and trustworthy digital infrastructure.",
    creator: "@mahmoudawaleh",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F3E3" },
    { media: "(prefers-color-scheme: dark)", color: "#171A1C" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#D4AF37] focus:px-4 focus:py-2 focus:text-[#171A1C]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
