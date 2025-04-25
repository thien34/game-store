import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luoi.dev - Portfolio & Blog',
    short_name: 'Luoi.dev',
    description: 'A blog about web development, software engineering, and other tech-related topics.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f1f5f9 ',
    theme_color: 'rgb(124, 58, 237)',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
