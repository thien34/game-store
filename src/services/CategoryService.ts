import { categoryRepository, CategoryRepository } from '@/repositories/CategoryRepository'
import { Category } from '@/types/category'
import { PostgrestError } from '@supabase/supabase-js'

export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async getAllCategories(): Promise<{ data: Category[]; error: PostgrestError | null }> {
    return this.repository.findAll()
  }
}

export const categoryService = new CategoryService(categoryRepository)
