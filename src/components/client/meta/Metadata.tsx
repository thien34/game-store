import { Metadata } from 'next'

interface MetadataProps {
  title: string
  description: string
  keywords: string
  ogImage: string
  overrideTitle?: boolean
  currentUrl: string
  structuredData?: Record<string, unknown>
}

export function GenerateMetadata({
  title,
  description,
  keywords,
  ogImage,
  overrideTitle = false,
  currentUrl,
  structuredData
}: MetadataProps): Metadata {
  const displayTitle = overrideTitle ? title : `${title} | Khanh · Fullstack Developer`

  return {
    title: displayTitle,
    description,
    keywords,
    authors: [{ name: 'Khanh', url: 'https://facebook.com/HoangDuyKhanhIT' }],
    alternates: {
      canonical: currentUrl
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico'
    },
    metadataBase: new URL('https://luoi.dev'),
    manifest: '/manifest.webmanifest',
    openGraph: {
      title: displayTitle,
      description,
      url: 'https://luoi.dev',
      type: 'website',
      locale: 'en_US',
      siteName: 'luoi dev',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Image with "${title}" text.`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@luoi_dev',
      creator: '@luoi_dev',
      title: displayTitle,
      description,
      images: [
        {
          url: ogImage,
          alt: `Image with "${title}" text.`
        }
      ]
    },
    ...(structuredData && {
      other: {
        'application/ld+json': JSON.stringify(structuredData)
      }
    })
  }
}
