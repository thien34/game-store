import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/types'
import { ChevronRightIcon } from '@/components/Icons'
import { cn } from '@/lib/utils'

type Props = {
  navs: Navigation[]
}

const Nav = ({ navs }: Props) => {
  return (
    <ul className={cn('flex items-center', 'md:gap-1')}>
      {navs
        .filter(nav => nav.type === 0)
        .map(nav => (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={cn('nav-link p-2 text-purple-600')}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      <li className='relative'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className={cn('nav-link ml-2 bg-blue-600/[0.08] text-blue-600', 'lg:pointer-events-none')}
            >
              Work
              <ChevronRightIcon className={cn('!w-[13px] rotate-90', 'lg:rotate-0')} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              'absolute top-0 -left-11 w-[150px] rounded-xl border border-slate-300 bg-white/70 p-2 backdrop-blur'
            )}
          >
            {navs
              .filter(nav => nav.type === 1)
              .map(nav => (
                <DropdownMenuItem key={nav.id}>
                  <Link
                    href={nav.href}
                    className={cn('nav-link text-blue-600')}
                  >
                    {nav.label}
                  </Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      {navs
        .filter(nav => nav.type === 1)
        .map(nav => (
          <li
            className={cn('hidden', 'lg:block')}
            key={nav.id}
          >
            <Link
              href={nav.href}
              className={cn('nav-link p-2 text-blue-600')}
            >
              {nav.label}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Nav
