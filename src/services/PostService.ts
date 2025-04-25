import { postRepository, PostRepository } from '@/repositories/PostRepository'
import { Post } from '@/types/post'
import { PostgrestError } from '@supabase/supabase-js'

interface FindAllPostsOptions {
  limit?: number
  offset?: number
}

export class PostService {
  constructor(private readonly repository: PostRepository) {}

  /**
   * Gets all published posts, suitable for public blog listing.
   */
  async getPublishedPosts(options: FindAllPostsOptions = {}): Promise<{ data: Post[]; error: PostgrestError | null }> {
    // Future logic could be added here (e.g., caching)
    return this.repository.findAllPublished(options)
  }

  /**
   * Gets a single published post by its slug.
   */
  async getPostBySlug(slug: string): Promise<{ data: Post | null; error: PostgrestError | null }> {
    if (!slug) {
      return {
        data: null,
        error: { message: 'Slug is required', details: '', hint: '', code: 'SVC400' } as PostgrestError
      }
    }
    return this.repository.findBySlug(slug)
  }

  /**
   * Gets a post by its ID (can be published or draft).
   */
  async getPostById(id: string | number): Promise<{ data: Post | null; error: PostgrestError | null }> {
    if (!id) {
      return {
        data: null,
        error: { message: 'ID is required', details: '', hint: '', code: 'SVC400' } as PostgrestError
      }
    }
    // Add permission checks here if needed based on user context
    return this.repository.findById(id)
  }

  /**
   * Gets all posts including drafts, suitable for admin views.
   */
  async getAllPostsForAdmin(
    options: FindAllPostsOptions = {}
  ): Promise<{ data: Post[]; error: PostgrestError | null }> {
    // Add permission checks here (e.g., ensure user is admin)
    return this.repository.findAllAdmin(options)
  }

  /**
   * Creates a new post.
   */
  async createPost(
    postData: Post /* Use PostInsert type ideally */
  ): Promise<{ data: Post | null; error: PostgrestError | null }> {
    // Add validation logic here (using Zod, etc.) before calling repository
    // Add logic like generating slug if not provided
    // Check permissions
    console.warn('Creating post:', postData)
    // Ideally, use PostInsert type for postData
    return this.repository.create(postData)
  }

  /**
   * Updates an existing post.
   */
  async updatePost(
    id: string | number,
    postData: Partial<Post> /* Use PostUpdate type ideally */
  ): Promise<{ data: Post | null; error: PostgrestError | null }> {
    if (!id) {
      return {
        data: null,
        error: { message: 'ID is required for update', details: '', hint: '', code: 'SVC400' } as PostgrestError
      }
    }
    // Add validation logic
    // Check permissions (e.g., user owns the post or is admin)
    console.warn(`Updating post ${id}:`, postData)
    // Ideally, use PostUpdate type for postData
    return this.repository.update(id, postData)
  }

  /**
   * Deletes a post.
   */
  async deletePost(id: string | number): Promise<{ error: PostgrestError | null }> {
    if (!id) {
      return {
        error: { message: 'ID is required for delete', details: '', hint: '', code: 'SVC400' } as PostgrestError
      }
    }
    // Check permissions
    console.warn(`Deleting post ${id}`)
    return this.repository.delete(id)
  }

  /**
   * Gets all slugs for published posts (for getStaticPaths).
   */
  async getAllPublishedSlugs(): Promise<{ data: { slug: string }[]; error: PostgrestError | null }> {
    return this.repository.findAllSlugs()
  }
}

// Export a singleton instance, injecting the repository instance
export const postService = new PostService(postRepository)
