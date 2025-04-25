import { QuoteIcon } from '@/components/Icons'
import { cn } from '@/lib/utils'

function Quote() {
  return (
    <blockquote
      className={cn(
        'flex gap-2 pt-2 text-3xl text-slate-500',
        'md:text-4xl lg:pt-0 lg:text-5xl',
        'dark:text-slate-400'
      )}
    >
      <QuoteIcon className={cn('-mt-1 h-10 text-slate-300', 'md:-mt-3 md:h-16 lg:h-24', 'dark:text-slate-800')} />
      <span className={cn('flex flex-col')}>
        <span className={cn('leading-[1.15]')}>
          <em>Beautiful</em>
        </span>
        <span className={cn('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}>
          <span className={cn('mt-1 h-0.5 w-8 rounded-full bg-slate-400', 'lg:h-1 lg:w-24', 'dark:bg-slate-600')} />
          <span>
            <strong className={cn('font-extrabold text-slate-600', 'dark:text-slate-300')}>inside</strong> and{' '}
            <strong className={cn('font-extrabold text-slate-600', 'dark:text-slate-300')}>out </strong>
          </span>
          <span className={cn('mt-1 h-0.5 w-6 rounded-full bg-slate-400', 'lg:h-1 lg:w-14', 'dark:bg-slate-600')} />
        </span>
        <span className={cn('leading-[1.15]')}>
          is a{' '}
          <strong
            className={cn('relative rounded-md bg-slate-100 px-1 font-extrabold text-slate-600', 'dark:text-slate-300')}
          >
            must.
          </strong>
        </span>
      </span>
    </blockquote>
  )
}

export default Quote
