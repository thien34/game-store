import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private/', '/admin/']
      },
      {
        userAgent: 'Twitterbot',
        allow: ['/']
      },
      {
        userAgent: 'facebookexternalhit',
        allow: ['/']
      },
      {
        userAgent: 'LinkedInBot',
        allow: ['/']
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  }
}
