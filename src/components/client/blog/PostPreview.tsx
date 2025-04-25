'use client'

import { cn, formatDateRelative } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { TPostFrontMatter } from '@/types'
import { ChevronRightIcon, InsightIcon, PinIcon } from '@/components/Icons'
import CountUp from '@/components/CountUp'

type PostPreviewProps = TPostFrontMatter & {
  slug: string
  views: number
  shares: number
  pinned?: boolean
}

function PostPreview({ title, description, date, slug, lang, views, shares, pinned = false }: PostPreviewProps) {
  return (
    <article lang={lang}>
      <Link
        key={slug}
        href={`blog/${slug}`}
        className={cn(
          'group relative mb-6 block overflow-hidden bg-gradient-to-t',
          'sm:mb-0 sm:rounded-2xl',
          pinned ? ['sm:border sm:p-4 md:mt-6 md:p-6'] : ['sm:p-4 md:p-6']
        )}
      >
        {/* shine effect */}
        {pinned && (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0, 0] }}
            transition={{
              delay: 1.4,
              duration: 1.84,
              ease: [0.85, 0, 0.15, 1]
            }}
            className='absolute -inset-x-64 inset-y-0 z-[-1]'
          >
            <div
              className={cn(
                'absolute inset-y-0 w-10 scale-[4] -rotate-45 bg-black opacity-[0.08]',
                'dark:bg-white dark:opacity-[0.14]'
              )}
            />
          </motion.div>
        )}
        {pinned && (
          <div
            className={cn(
              'relative mb-4 flex items-center gap-2 font-semibold text-slate-500',
              'sm:text-slate-500',
              'dark:sm:text-accent-400 dark:text-slate-400'
            )}
          >
            <PinIcon className={cn('h-5 w-5')} />
            Pinned Post
          </div>
        )}
        <div
          className={cn('text-slate mb-2 flex flex-col gap-2 text-xs text-slate-500', 'md:mb-1 dark:text-slate-400')}
        >
          <div className={cn('flex gap-1')}>
            <time
              dateTime={date}
              className={cn('first-letter:uppercase')}
            >
              {formatDateRelative(date)}
            </time>
            <span>&middot;</span>
            <span>{lang}</span>
          </div>
        </div>
        <div className={cn('mb-2')}>
          <h2 className={cn('text-xl font-extrabold text-slate-700', 'md:text-2xl', 'dark:text-slate-300')}>{title}</h2>
        </div>
        <p className={cn('mb-3 block leading-relaxed text-slate-600', 'dark:text-slate-400')}>{description}</p>
        <div
          className={cn(
            'flex items-center gap-2 text-xs text-slate-600',
            'dark:text-slate-400',
            pinned ? ['mb-4', 'sm:mb-1'] : 'mb-4'
          )}
        >
          <InsightIcon className={cn('-mt-0.5 h-4 w-4')} />
          <span className={cn('flex gap-1.5')}>
            <span
              className={cn('flex items-center gap-1.5')}
              title='Number of view(s)'
            >
              <CountUp
                from={0}
                to={views}
              />{' '}
              Views
            </span>
            <span>&middot;</span>
            <span
              className={cn('flex items-center gap-1.5')}
              title='Number of share(s)'
            >
              <CountUp
                from={0}
                to={shares}
              />{' '}
              Shares
            </span>
          </span>
        </div>
        <div
          className={cn(
            'items-center gap-1 text-sm font-semibold text-purple-600',
            'dark:text-purple-400',
            pinned ? ['flex', 'sm:hidden'] : 'flex'
          )}
        >
          read more <ChevronRightIcon className='group-hover:animate-bounce-x mt-1 h-3 w-3 transition' />
        </div>
      </Link>
    </article>
  )
}

export default PostPreview
