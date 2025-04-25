import { TPageFrontMatter } from '@/types'
import type { PropsWithChildren, ReactNode } from 'react'
import PageHeader from './PageHeader'
import { cn } from '@/lib/utils'
import SkipNavigation from '../navigations/SkipNavigation'

interface PageProps {
  frontMatter: TPageFrontMatter
  headerImage?: ReactNode
}

function Page({
  frontMatter: { title, description },
  children = null,
  headerImage = null
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <SkipNavigation skipTableOfContents={false} />
      <PageHeader
        title={title}
        description={description}
        headerImage={headerImage}
      />
      <div
        className={cn('scroll-mt-[86px]')}
        id='main-contents'
      >
        {children}
      </div>
    </>
  )
}

export default Page
