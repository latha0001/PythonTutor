import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PythonPal: AI Python Tutor for Kids",
  description: "Learn Python coding with our friendly AI tutor!",
}

export default function RootLayout({
  children,
}: {

  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}