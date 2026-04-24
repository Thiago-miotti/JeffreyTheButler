import type { Metadata } from 'next'
import { Geist, Geist_Mono, Quicksand } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const quicksSand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jeffrey',
  description: 'Jeffrey The Butler your own home fixer',
  icons: '/JeffreyIconOnly.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="lemonade"
      className={`${geistSans.variable} ${geistMono.variable} ${quicksSand.variable} antialiased`}
    >
      <body className="overflow-hidden h-screen">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
