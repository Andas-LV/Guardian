import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'],weight:"400" })

export const metadata: Metadata = {
  title: 'Guardian API',
  description: 'Web application with usage of Guardian API and realized with stacks like Next js, Typescript, axios etc...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
