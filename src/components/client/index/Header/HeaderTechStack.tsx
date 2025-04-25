'use client'

import {
  JavaIcon,
  JavaSpringIcon,
  MSSQLIcon,
  NextJsIcon,
  PGSQLIcon,
  TailwindCssIcon,
  TypeScriptIcon
} from '@/components/Icons'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
}

function HeaderTechStack() {
  return (
    <div>
      <motion.p
        className={cn('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </motion.p>
      <motion.ul
        className={cn('flex items-center gap-3.5 text-slate-500', 'dark:text-slate-500')}
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#3178C6]')}>
            <TypeScriptIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]')}>
            <NextJsIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#06B6D4]')}>
            <TailwindCssIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('h-3 w-[1px] bg-slate-300', 'dark:bg-slate-700')} />
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#F8981D]')}>
            <JavaIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#8bc34a]')}>
            <JavaSpringIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#0277bd]')}>
            <PGSQLIcon className={cn('size-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={cn('transition duration-200 hover:text-[#b71c1c]')}>
            <MSSQLIcon className={cn('size-6')} />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default HeaderTechStack
