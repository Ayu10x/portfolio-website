import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

export const metadata: Metadata = {
  title: 'Ayush Pattnaik | Portfolio',
  description: 'Portfolio of Ayush Pattnaik - Computer Science Engineer',
  icons: [
    {
      url: '/favicon.ico',
      sizes: '32x32',
    }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}