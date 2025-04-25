import { createClient } from '@/lib/supabase/server'
import { Game } from '@/types/game'
import { PostgrestError } from '@supabase/supabase-js'

export class GameRepository {
  async findAll(): Promise<{ data: Game[]; error: PostgrestError | null }> {
    const supabase = await createClient()

    const { data: games, error: gameError } = await supabase
      .from('game')
      .select('*')
      .order('created_at', { ascending: false })

    if (gameError) {
      return { data: [], error: gameError }
    }

    const transformedData = await Promise.all(
      games?.map(async game => {
        const { data: images, error: imageError } = await supabase
          .from('image')
          .select('img')
          .eq('game_id', game.id)
          .limit(2)
        if (imageError) {
          return null
        }

        return {
          id: game.id,
          name: game.name,
          slug: game.slug,
          linkGame: game.link_game,
          descriptionShort: game.description_short,
          descriptionLong: game.description_long,
          createdAt: new Date(game.created_at),
          thumbnail: images?.map((image: { img: string }) => image.img) || []
        }
      }) || []
    )

    const finalData = transformedData.filter(item => item !== null)

    return { data: finalData, error: null }
  }

  async findById(id: number): Promise<{ data: Game | null; error: PostgrestError | null }> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('game')
      .select(
        `
        *,
        image(url)
      `
      )
      .eq('id', id)
      .single()

    if (error) return { data: null, error }

    const transformedData: Game = {
      id: data.id,
      name: data.name,
      slug: data.slug,
      linkGame: data.link_game,
      descriptionShort: data.description_short,
      descriptionLong: data.description_long,
      createdAt: new Date(data.created_at),
      thumbnail: data.image?.map((img: { url: string }) => img.url) || []
    }

    return { data: transformedData, error }
  }
}

export const gameRepository = new GameRepository()
