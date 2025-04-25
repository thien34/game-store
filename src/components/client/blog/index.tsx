import { cn } from '@/lib/utils'
import PostPreview from './PostPreview'
import { Post } from '@/types/post'

const PINNED_POST = 'the-2023-retrospective'

type TPostPreview = {
  slug: string
  title: string
  createdAt: string
  lang: string
  description: string
}
type BlogContentsProps = {
  posts: Post[]
}

function BlogContents({ posts }: Readonly<BlogContentsProps>) {
  let pinnedPost: TPostPreview | undefined
  const postsPreview: Array<TPostPreview> = []

  posts.forEach(({ slug, title, createdAt, lang, description }) => {
    const preview: TPostPreview = {
      slug,
      title,
      createdAt: createdAt.toISOString(),
      lang,
      description
    }

    if (slug === PINNED_POST) {
      pinnedPost = preview
    } else {
      postsPreview.push(preview)
    }
  })

  return (
    <div className={cn('content-wrapper')}>
      <div className={cn('flex flex-col gap-8', 'md:flex-row md:gap-8 lg:gap-24')}>
        <div className={cn('md:w-64')}>{/* TODO: Filter Posts */}</div>
        <div className={cn('flex-1')}>
          {pinnedPost && (
            <div className={cn('mb-8 flex items-start gap-4', 'md:mb-12 md:gap-6')}>
              <div className={cn('flex-1')}>
                <PostPreview
                  pinned
                  slug={pinnedPost.slug}
                  title={pinnedPost.title}
                  description={pinnedPost.description}
                  date={pinnedPost.createdAt}
                  lang={pinnedPost.lang}
                  views={0}
                  shares={0}
                />
              </div>
            </div>
          )}

          {postsPreview.map(({ slug, title, createdAt, lang, description }) => (
            <div
              key={slug}
              className={cn('mb-8 flex items-start gap-4', 'md:mb-4 md:gap-6')}
            >
              <div className={cn('mt-14 hidden w-8 -translate-y-1 border-b', 'md:mt-16 md:w-20 lg:block')} />
              <div className={cn('flex-1')}>
                <PostPreview
                  slug={slug}
                  title={title}
                  description={description}
                  date={createdAt}
                  lang={lang}
                  views={0}
                  shares={0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogContents
