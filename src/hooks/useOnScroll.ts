'use client'

import { useEffect, useState } from 'react'

export default function useScroll(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }
    onScroll()

    document.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return isScrolled
}
