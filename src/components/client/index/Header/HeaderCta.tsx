'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import { RESUME } from '@/constants'
import { cn } from '@/lib/utils'

const animation = {
  hide: {
    x: -16,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

function ButtonContactMe() {
  return (
    <Link
      href='/work/contact'
      className={cn('button button--solid')}
    >
      Get in Touch
    </Link>
  )
}

function ButtonResume() {
  return (
    <Link
      target='_blank'
      rel='noreferrer nofollow'
      href={RESUME}
      className={cn('button button--ghost px-2', 'md:px-2')}
    >
      <FileText className={cn('size-5')} />
      RESUME
    </Link>
  )
}

function HeaderCta() {
  return (
    <motion.div
      className={cn('flex gap-2')}
      initial='hide'
      animate='show'
    >
      <motion.div
        className={cn('relative z-20')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </motion.div>
      <motion.div
        variants={animation}
        transition={{ delay: 0.5 }}
      >
        <ButtonResume />
      </motion.div>
    </motion.div>
  )
}

export default HeaderCta
