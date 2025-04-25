'use client'

import { Navigation } from '@/types'
import Logo from './Logo'
import Nav from './Nav'
import useOnScroll from '@/hooks/useOnScroll'
import { cn } from '@/lib/utils'
import UserAction from './UserAction'
import Search from './Search'
import CategoryNav from './CategoryNav'
import { Category } from '@/types/category'

const navs: Navigation[] = []

interface HeaderProps {
  categories: Category[]
}

const Header = ({ categories }: HeaderProps) => {
  const isScrolled = useOnScroll(0)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-[1000] bg-transparent transition-colors duration-300',
          isScrolled ? 'border-divider-light border-b bg-white/70 backdrop-blur' : ''
        )}
      >
        <div className={cn('content-wrapper-max')}>
          <div className={cn('relative z-50 flex h-16 items-center justify-between px-2 text-sm', 'md:px-4')}>
            <nav className={cn('flex items-center gap-4', 'md:gap-6')}>
              <Logo />
              <Nav navs={navs} />
            </nav>
            <div className='flex items-center gap-4'>
              <Search />
              <UserAction />
            </div>
          </div>
        </div>
      </header>
      <div className='h-16' />
      <CategoryNav categories={categories} />
    </>
  )
}

export default Header
