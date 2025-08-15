import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Sophia Plank - Fascial Stretch Therapy & Wellness",
  description:
    "Transform your well-being through breathwork, fascial stretch therapy, and neuro-linguistic programming with certified therapist Sophia Plank.",
  keywords:
    "fascial stretch therapy, breathwork, neuro-linguistic programming, wellness, holistic health, Sophia Plank",
  authors: [{ name: "Sophia Plank" }],
  creator: "Sophia Plank",
  openGraph: {
    title: "Sophia Plank - Fascial Stretch Therapy & Wellness",
    description:
      "Transform your well-being through breathwork, fascial stretch therapy, and neuro-linguistic programming.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
