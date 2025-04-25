import Link from 'next/link'
import { Github, Facebook, Layers } from 'lucide-react'
import { FB_LINK, GH_LINK } from '@/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SocialLinks = () => {
  return (
    <ul className={cn('flex items-center')}>
      <li className={cn('hidden', 'sm:block')}>
        <Link
          href={FB_LINK}
          className={cn('flex rounded-xl p-2', 'hover:bg-slate-200')}
          aria-label='My Facebook profile'
          title='My Facebook profile'
          target='_blank'
          rel='noreferrer nofollow'
        >
          <Facebook className='h-5 w-5' />
        </Link>
      </li>
      <li className={cn('hidden', 'sm:block')}>
        <Link
          href={GH_LINK}
          className={cn('flex rounded-xl p-2', 'hover:bg-slate-200')}
          aria-label='My GitHub profile'
          title='My GitHub profile'
          target='_blank'
          rel='noreferrer nofollow'
        >
          <Github className='h-5 w-5' />
        </Link>
      </li>
      <li className={cn('hidden', 'sm:block')}>
        <div className={cn('mr-4 ml-2 h-4 w-[1px] bg-slate-200', 'dark:bg-slate-700')}></div>
      </li>
      <li className='mr-2'>
        <Button
          variant='outline'
          size='icon'
          className={cn(
            'rounded-xl bg-slate-300/50 text-slate-800',
            'sm:ml-0 xl:w-auto xl:px-3',
            'dark:bg-slate-800/50 dark:text-slate-100',
            'hover:bg-slate-300/70 dark:hover:bg-slate-700/50'
          )}
          aria-label='Open Quick Access'
          title='Open Quick Access'
        >
          <Layers className='h-5 w-5' />
          <span className={cn('hidden items-center gap-2 text-xs font-bold', 'xl:flex')}>
            Quick Access{' '}
            <kbd
              className={cn(
                'rounded-[4px] border border-b-[3px] border-slate-400 bg-slate-300 px-1 py-0.5 font-serif',
                'dark:border-slate-300 dark:bg-transparent'
              )}
            >
              Q
            </kbd>
          </span>
        </Button>
      </li>
    </ul>
  )
}

export default SocialLinks
