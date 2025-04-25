'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
}

interface PageHeaderProps {
  title: string
  description: string
  caption?: string
  headerImage?: React.ReactNode
}

function PageHeader({ title, description, caption = '', headerImage = null }: Readonly<PageHeaderProps>) {
  return (
    <header
      id='page-header'
      className={cn(
        'background-grid background-grid--fade-out z-[900] mb-10 border-b pt-32 pb-10',
        'md:mb-0 md:border-none md:pt-40 md:pb-20'
      )}
    >
      {headerImage && (
        <div className={cn('content-wrapper absolute inset-0 overflow-hidden')}>
          <div
            className={cn(
              'background-image--fade-out pointer-events-none absolute inset-0 hidden select-none',
              'lg:block'
            )}
          >
            <div className={cn('content-wrapper relative h-full')}>
              <div className={cn('absolute -top-24 right-0 bottom-0')}>{headerImage}</div>
            </div>
          </div>
        </div>
      )}
      <div className={cn('content-wrapper')}>
        {caption && (
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={cn(
                'mb-1 block text-lg leading-none font-extrabold text-purple-600 capitalize',
                'md:mb-0 md:text-2xl'
              )}
            >
              {caption}
            </span>
          </motion.div>
        )}
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={cn(
              'text-[2.5rem] leading-tight font-extrabold text-slate-700',
              'md:text-7xl md:leading-snug',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          <p
            className={cn(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </header>
  )
}

export default PageHeader
