import { GenerateMetadata } from '@/components/client/meta/Metadata'
import { getBaseUrl } from '@/lib/url'
import { Metadata } from 'next'
import ogImage from '@public/images/og-project.png'

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = GenerateMetadata({
  title: 'Projects',
  description: 'Showcase of my front-end related work.',
  keywords: 'lười dev, luoi dev, project, prjects',
  ogImage: ogImage.src,
  currentUrl: `${getBaseUrl()}/projects`
})

export default function Layout({ children }: Readonly<LayoutProps>) {
  return <div>{children}</div>
}
