import { GenerateMetadata } from '@/components/client/meta/Metadata'
import { getBaseUrl } from '@/lib/url'
import { Metadata } from 'next'

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = GenerateMetadata({
  title: 'Skills and Tools',
  description: "A look at all the programming languages, libraries, and tools I've worked with.",
  keywords: 'skills, tools, programming languages, typescript, react, frontend',
  ogImage: 'image.default',
  currentUrl: `${getBaseUrl()}/work/skills-and-tools`
})

export default function Layout({ children }: Readonly<LayoutProps>) {
  return <div>{children}</div>
}
