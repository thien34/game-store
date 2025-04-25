'use client'

import { Navigation } from '@/types'
import Logo from './Logo'
import Nav from './Nav'
import SocialLinks from './SocialLinks'
import useOnScroll from '@/hooks/useOnScroll'
import { cn } from '@/lib/utils'

const navs: Navigation[] = [
  { id: 1, label: 'Projects', href: '/projects', type: 0 },
  { id: 2, label: 'Blog', href: '/blog', type: 0 },
  { id: 3, label: 'T.I.L', href: '/project', type: 0 },
  { id: 4, label: 'Skills & Tools', href: '/work/skills-and-tools', type: 1 },
  { id: 5, label: 'Experience', href: '/work/experience', type: 1 },
  { id: 6, label: 'Contact', href: '/work/contact', type: 1 }
]

const Header = () => {
  const isScrolled = useOnScroll(0)

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-[1000] bg-transparent transition-colors duration-300',
        isScrolled ? 'border-divider-light border-b bg-white/70 backdrop-blur' : ''
      )}
    >
      <div className={cn('content-wrapper-max')}>
        <div className={cn('relative z-50 flex h-16 items-center justify-between px-2 text-sm', 'md:px-4')}>
          <nav className={cn('flex', 'md:gap-2')}>
            <Logo />
            <Nav navs={navs} />
          </nav>
          <SocialLinks />
        </div>
      </div>
    </header>
  )
}

export default Header
