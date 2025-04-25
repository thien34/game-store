'use client'

import { Game } from '@/types/game'
import Image from 'next/image'
import { useState } from 'react'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: Readonly<GameCardProps>) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={game.linkGame}
      className='cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative aspect-[16/9] overflow-hidden rounded-lg'>
        <Image
          src={game.thumbnail[isHovered ? 1 : 0]}
          alt={game.name}
          fill
          className='transform object-cover transition-all duration-1000 ease-in-out'
        />
      </div>
      <div className='mt-2 space-y-1'>
        <h3 className='font-medium text-gray-900'>{game.name}</h3>
      </div>
    </a>
  )
}
