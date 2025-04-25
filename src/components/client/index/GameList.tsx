import GameCard from './GameCard'
import { gameService } from '@/services/GameService'

export default async function GameList() {
  const { data: games } = await gameService.getAllGames()

  return (
    <div className='content-wrapper-max'>
      <div className='mx-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {games.map(game => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  )
}
