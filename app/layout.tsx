import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Cairo } from "next/font/google"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "أبو خليفة العالمية للسفر والسياحة | خدمات التأشيرات",
  description: "خدمات تأشيرات موثوقة وسريعة، دعوات رسمية، وتصديق المستندات من أبو خليفة العالمية للسفر والسياحة",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Abu-_logo-1.png",
        type: "image/png",
      },
      {
        url: "/Abu-_logo-1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Abu-_logo-1.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/Abu-_logo-1.png",
    shortcut: "/Abu-_logo-1.png",
  },
  openGraph: {
    title: "أبو خليفة العالمية للسفر والسياحة | خدمات التأشيرات",
    description: "خدمات تأشيرات موثوقة وسريعة، دعوات رسمية، وتصديق المستندات من أبو خليفة العالمية للسفر والسياحة",
    images: [
      {
        url: "/Abu-_logo-1.png",
        width: 1200,
        height: 630,
        alt: "أبو خليفة العالمية للسفر والسياحة",
      },
    ],
    type: "website",
    locale: "ar",
  },
  twitter: {
    card: "summary_large_image",
    title: "أبو خليفة العالمية للسفر والسياحة | خدمات التأشيرات",
    description: "خدمات تأشيرات موثوقة وسريعة، دعوات رسمية، وتصديق المستندات من أبو خليفة العالمية للسفر والسياحة",
    images: ["/Abu-_logo-1.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-cairo antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
