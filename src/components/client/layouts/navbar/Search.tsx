'use client'

import { Search as SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const Search = () => {
  return (
    <div className='relative w-full max-w-sm'>
      <SearchIcon className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
      <Input
        type='search'
        placeholder='Tìm kiếm...'
        className={cn('bg-background w-full rounded-full pl-9', 'focus-visible:ring-primary focus-visible:ring-1')}
      />
    </div>
  )
}

export default Search
