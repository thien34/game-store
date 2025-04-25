import { FB_LINK, GH_LINK } from '@/constants'
import { Github, Facebook } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function FooterDescription() {
  return (
    <div className={cn('max-w-[348px]')}>
      <div className={cn('mb-3 text-[13px] text-slate-600', 'dark:text-slate-400')}>About Me</div>
      <p className={cn('mb-4 leading-relaxed font-normal')}>
        I&apos;m Khánh, passionate <strong>Fullstack Developer</strong> focused on building efficient, optimized, and
        scalable applications.
      </p>
      <ul className={cn('-ml-2 flex gap-1')}>
        <li>
          <Link
            href={FB_LINK}
            className={cn('flex size-9 items-center justify-center')}
            aria-label='My Facebook profile'
            title='My Facebook profile'
            target='_blank'
            rel='noreferrer nofollow'
          >
            <Facebook className={cn('size-5')} />
          </Link>
        </li>
        <li>
          <Link
            href={GH_LINK}
            className={cn('flex size-9 items-center justify-center')}
            aria-label='My GitHub profile'
            title='My GitHub profile'
            target='_blank'
            rel='noreferrer nofollow'
          >
            <Github className={cn('size-5')} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
