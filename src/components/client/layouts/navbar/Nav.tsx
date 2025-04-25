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
    </ul>
  )
}

export default Nav
