import Page from '@/components/client/layouts/Page'
import ProjectsContents from '@/components/client/projects'
import HeaderImage from '@/components/client/projects/HeaderImage'

export default async function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my related work.'
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  )
}
