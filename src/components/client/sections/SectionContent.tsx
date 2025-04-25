import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

function SectionContent({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className={cn('background-grid background-grid--fade-out mt-20 border-t')}>
      <div className={cn('content-wrapper pb-20')}>{children}</div>
    </div>
  )
}

export default SectionContent
