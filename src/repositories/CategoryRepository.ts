import { createClient } from '@/lib/supabase/server'
import { Category } from '@/types/category'
import { PostgrestError } from '@supabase/supabase-js'

export class CategoryRepository {
  async findAll(): Promise<{ data: Category[]; error: PostgrestError | null }> {
    const supabase = await createClient()
    const query = supabase
      .from('category') //
      .select('*')
      .order('order', { ascending: true })
    const { data, error } = await query

    // Transform data
    const transformedData = data
      ? data.map(item => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          order: item.order,
          createdAt: new Date(item.created_at)
        }))
      : []

    return { data: transformedData, error }
  }
}

export const categoryRepository = new CategoryRepository()
