import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mahmoud Mohamed Awaleh | PR & Communications Director | Graphic Designer",
  description:
    "Strategic communication and creative design professional with 15+ years of experience. PR & Communications Director at Somaliland Civil Service Commission. Expertise in branding, public relations, and digital marketing.",
  keywords: [
    "Mahmoud Awaleh",
    "graphic designer",
    "PR director",
    "communications",
    "Somaliland",
    "branding",
    "public relations",
  ],
  authors: [{ name: "Mahmoud Mohamed Awaleh" }],
  creator: "Mahmoud Mohamed Awaleh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmoudawaleh.com",
    title: "Mahmoud Mohamed Awaleh | PR & Communications Director",
    description:
      "Strategic communication and creative design professional with 15+ years of experience in graphic design, marketing, and public relations.",
    siteName: "Mahmoud Awaleh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Mohamed Awaleh | PR & Communications Director",
    description: "Strategic communication and creative design professional with 15+ years of experience.",
    creator: "@mahmoudawaleh",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
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
