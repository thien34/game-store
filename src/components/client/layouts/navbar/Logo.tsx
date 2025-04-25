import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href='/'
      className={cn('rounded-xl px-2 py-1')}
      aria-label='Home'
    >
      <div className={cn('flex items-center gap-1.5 font-bold')}>
        <div
          className={cn(
            'flex size-8 items-center justify-center rounded-xl border-2 border-purple-600 bg-purple-600',
            'sm:h-6 sm:w-6 sm:rounded-lg'
          )}
        >
          <div className={cn('h-3.5 w-0.5 rotate-12 rounded-full bg-white', 'sm:h-3')} />
        </div>
        <div className={cn('hidden text-xl', 'sm:block')}>
          <span className={cn('text-slate-900')}>luoi</span>
          <span className={cn('text-purple-600')}>dev</span>
        </div>
      </div>
    </Link>
  )
}

export default Logo
