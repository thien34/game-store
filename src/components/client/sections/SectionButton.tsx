import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionButtonProps {
  title: string
  description?: string
  icon?: ReactNode
  active?: boolean
  onClick?: () => void
}

export function SectionButton({
  title,
  description = '',
  icon = null,
  active = false,
  onClick = () => {}
}: Readonly<SectionButtonProps>) {
  return (
    <button
      type='button'
      className={cn(
        'flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left',
        'dark:bg-slate-900',
        active ? ['border-purple-400', 'dark:border-purple-400'] : ''
      )}
      onClick={onClick}
    >
      {icon && (
        <span
          className={cn(
            'hidden w-24 shrink-0 justify-center text-center text-7xl font-black',
            'xl:flex',
            active ? ['text-purple-600', 'dark:text-purple-400'] : ['text-slate-400', 'dark:text-slate-600']
          )}
        >
          {icon}
        </span>
      )}
      <span className={cn('flex-1')}>
        <span
          className={cn(
            'block font-bold',
            active ? ['text-purple-600', 'dark:text-purple-400'] : ['text-slate-700', 'dark:text-slate-200']
          )}
        >
          {title}
        </span>
        {description && (
          <span className={cn('mt-1 block text-sm text-slate-600', 'dark:text-slate-400')}>{description}</span>
        )}
      </span>
    </button>
  )
}

export function SectionButtonSmall({
  title,
  icon = null,
  active = false,
  onClick = () => {}
}: Readonly<Omit<SectionButtonProps, 'description'>>) {
  return (
    <button
      type='button'
      className={cn('flex flex-col items-center rounded-xl p-2 text-sm', [
        active ? ['text-purple-600', 'dark:text-purple-400'] : ['text-slate-400', 'dark:text-slate-600']
      ])}
      onClick={onClick}
    >
      <span className={cn('text-4xl font-black')}>{icon}</span>
      <span
        className={cn(
          'font-medium',
          active ? ['text-purple-600', 'dark:text-purple-400'] : ['text-slate-500', 'dark:text-slate-400']
        )}
      >
        {title}
      </span>
    </button>
  )
}
