import { GenerateMetadata } from '@/components/client/meta/Metadata'
import { getBaseUrl } from '@/lib/url'
import { Metadata } from 'next'
import ogImage from '@public/images/og-blog.png'

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = GenerateMetadata({
  title: 'Personal Blog',
  description: 'Web development thoughts and stories.',
  keywords: 'lười dev, luoi dev, personal blog, blog, blogs',
  ogImage: ogImage.src,
  currentUrl: `${getBaseUrl()}/blog`
})

export default function Layout({ children }: Readonly<LayoutProps>) {
  return <div>{children}</div>
}
