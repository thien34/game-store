import Page from '@/components/client/layouts/Page'
// import SkillsAndTools from '@/contents/work/skills-and-tools.mdx'

export default async function SkillsAndToolsPage() {
  return (
    <Page
      frontMatter={{
        title: 'Skills and Tools',
        description: "A look at all the programming languages, libraries, and tools I've worked with."
      }}
    >
      {/* <SkillsAndTools /> */}
    </Page>
  )
}
