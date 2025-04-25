'use client'

import { Button } from '@/components/ui/button'
import { LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'

const UserAction = () => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='ghost'
        size='sm'
        asChild
      >
        <Link href='/login'>
          <LogIn className='mr-2 h-4 w-4' />
          Đăng nhập
        </Link>
      </Button>
      <Button
        variant='default'
        size='sm'
        asChild
      >
        <Link href='/register'>
          <UserPlus className='mr-2 h-4 w-4' />
          Đăng ký
        </Link>
      </Button>
    </div>
  )
}

export default UserAction
