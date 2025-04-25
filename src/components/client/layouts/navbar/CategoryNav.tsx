'use client'

import { Category } from '@/types/category'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface CategoryNavProps {
  categories: Category[]
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
  const pathname = usePathname()

  return (
    <div className='w-full border-b bg-red-600 font-bold text-white'>
      <div className='content-wrapper-max'>
        <nav className='flex justify-center'>
          <ul className='flex items-center space-x-8'>
            <li>
              <Link
                href='/'
                className={cn(
                  'hover:text-primary block py-4 text-sm transition-colors',
                  pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                Home
              </Link>
            </li>
            {categories.map(category => (
              <li key={category.id}>
                <Link
                  href={`/${category.slug}`}
                  className={cn(
                    'hover:text-primary block py-4 text-sm transition-colors',
                    pathname === `/${category.slug}` ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default CategoryNav
