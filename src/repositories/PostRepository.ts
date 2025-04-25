import { createClient } from '@/lib/supabase/server'
import { Post } from '@/types/post'
import { PostgrestError } from '@supabase/supabase-js'

interface FindAllPostsOptions {
  limit?: number
  offset?: number
  // Add other options like category filtering if needed
}

export class PostRepository {
  async findAllPublished(options: FindAllPostsOptions = {}): Promise<{ data: Post[]; error: PostgrestError | null }> {
    const supabase = await createClient() // Use the server client
    let query = supabase
      .from('content_meta')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (options.limit) {
      query = query.limit(options.limit)
    }
    if (options.offset) {
      const from = options.offset
      const to = from + (options.limit ? options.limit - 1 : Infinity)
      query = query.range(from, to)
    }

    const { data, error } = await query

    // Transform snake_case to camelCase
    const transformedData = data
      ? data.map(item => ({
          id: item.id,
          type: item.type,
          title: item.title,
          slug: item.slug,
          published: item.published,
          createdAt: new Date(item.created_at),
          updatedAt: new Date(item.updated_at),
          content: item.content,
          lang: item.lang,
          description: item.description
        }))
      : []

    return { data: transformedData, error }
  }

  async findBySlug(slug: string): Promise<{ data: Post | null; error: PostgrestError | null }> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('content_meta')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle() // Returns one row or null, doesn't error if not found

    return { data, error }
  }

  // Method to get a post by ID (might be used in admin, could be published or draft)
  async findById(id: string | number): Promise<{ data: Post | null; error: PostgrestError | null }> {
    // Decide if admin client is needed here based on RLS policies
    const supabase = await createClient() // Or createSupabaseAdminClient()
    const { data, error } = await supabase
      .from('content_meta')
      .select('*') // Select all
      .eq('id', id)
      .maybeSingle()

    return { data, error }
  }

  // Method to get all posts (including drafts, for admin)
  async findAllAdmin(options: FindAllPostsOptions = {}): Promise<{ data: Post[]; error: PostgrestError | null }> {
    // Might require admin client depending on RLSD
    const supabase = await createClient() // Or createSupabaseAdminClient()
    let query = supabase
      .from('content_meta')
      .select('*') // Select all
      .order('created_at', { ascending: false })

    if (options.limit) {
      query = query.limit(options.limit)
    }

    if (options.offset) {
      const from = options.offset
      const to = from + (options.limit ? options.limit - 1 : Infinity)
      query = query.range(from, to)
    }

    const { data, error } = await query
    return { data: data || [], error }
  }

  // Method to create a new post
  async create(postData: Post): Promise<{ data: Post | null; error: PostgrestError | null }> {
    const supabase = await createClient() // Or createSupabaseAdminClient()
    const { data, error } = await supabase
      .from('content_meta')
      .insert(postData) // Insert the post data
      .select()
      .single()

    return { data, error }
  }

  // Method to update a post
  async update(
    id: string | number,
    postData: Partial<Post>
  ): Promise<{ data: Post | null; error: PostgrestError | null }> {
    const supabase = await createClient() // Or createSupabaseAdminClient()
    const { data, error } = await supabase
      .from('content_meta')
      .update(postData) // Update the post data
      .eq('id', id)
      .select()
      .single()

    return { data, error }
  }

  // Method to delete a post
  async delete(id: string | number): Promise<{ error: PostgrestError | null }> {
    const supabase = await createClient() // Or createSupabaseAdminClient()
    const { error } = await supabase
      .from('content_meta')
      .delete() // Delete the post
      .eq('id', id)

    return { error }
  }

  // Method to get all unique post slugs (for getStaticPaths)
  async findAllSlugs(): Promise<{ data: { slug: string }[]; error: PostgrestError | null }> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('content_meta')
      .select('slug') // Select the slug
      .eq('published', true) // Only generate paths for published posts

    return { data: data || [], error }
  }
}

export const postRepository = new PostRepository()
