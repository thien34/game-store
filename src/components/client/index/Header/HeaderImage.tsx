'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avatarImage from '@public/images/avatar.png'
import { cn } from '@/lib/utils'

function HeaderImage() {
  return (
    <div className={cn('relative h-[590px] w-[603px]')}>
      <div className={cn('absolute right-0 bottom-0 overflow-hidden')}>
        <motion.div
          initial={{ x: 32, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{ delay: 0.2, duration: 0.15 }}
        >
          <Image
            alt='game-store'
            src={avatarImage.src}
            width={500}
            height={500}
            className={cn('hidden max-w-none', 'lg:block')}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HeaderImage
