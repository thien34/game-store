import type { Metadata } from 'next'
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ogImage from '@public/images/og.png'
import { cn } from '@/lib/utils'
import { getBaseUrl } from '@/lib/url'
import { GenerateMetadata } from '@/components/client/meta/Metadata'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = GenerateMetadata({
  title: 'Lười Dev',
  description: 'Một blog về phát triển web, kỹ thuật phần mềm và các chủ đề liên quan đến công nghệ và đời sống.',
  keywords:
    'lười dev, luoi dev, blog, phát triển web, kỹ thuật phần mềm, công nghệ, web development, software engineering',
  ogImage: ogImage.src,
  currentUrl: `${getBaseUrl()}`,
  overrideTitle: true
})

export const revalidate = 86400 // One day (ISR)

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi'>
      <body className={cn('font-sans antialiased', plusJakartaSans.variable, jetbrainsMono.variable)}>{children}</body>
    </html>
  )
}
