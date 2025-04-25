import { gameRepository, GameRepository } from '@/repositories/GameRepository'
import { Game } from '@/types/game'
import { PostgrestError } from '@supabase/supabase-js'

export class GameService {
  constructor(private readonly repository: GameRepository) {}

  async getAllGames(): Promise<{ data: Game[]; error: PostgrestError | null }> {
    return this.repository.findAll()
  }

  async getGameById(id: number): Promise<{ data: Game | null; error: PostgrestError | null }> {
    return this.repository.findById(id)
  }
}

export const gameService = new GameService(gameRepository)
