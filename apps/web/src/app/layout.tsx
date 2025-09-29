import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Local-Roots | Community Supported Agriculture Marketplace',
  description: 'Discover and subscribe to fresh, local produce from trusted community farms. Supporting local agriculture, one share at a time.',
  keywords: ['CSA', 'local farms', 'organic produce', 'community agriculture', 'farm share'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}