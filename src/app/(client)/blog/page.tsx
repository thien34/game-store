import BlogContents from '@/components/client/blog'
import HeaderImage from '@/components/client/blog/HeaderImage'
import Page from '@/components/client/layouts/Page'
import { postService } from '@/services/PostService'

export const revalidate = 60

export default async function Blog() {
  const { data: posts, error } = await postService.getPublishedPosts()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Page
      frontMatter={{
        title: 'Personal Blog',
        description: 'Web development thoughts and stories.'
      }}
      headerImage={<HeaderImage />}
    >
      <BlogContents posts={posts || []} />
    </Page>
  )
}
