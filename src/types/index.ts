export interface Navigation {
  id: number
  label: string
  href: string
  type: number
}

export type TBaseFrontMatter = {
  title: string
  description: string
  caption?: string
}

export type TPageFrontMatter = TBaseFrontMatter

export type TPageOgImage = Partial<Pick<TPageFrontMatter, 'title' | 'description'>>

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string
  lang: string
  tags?: Array<string>
  category?: string
}

export type TContentMeta = {
  meta: {
    views: number
    shares: number
  }
}

export type TTableOfContentsItem = {
  title: string
  depth: number
  slug: string
}

export type TTableOfContents = Array<TTableOfContentsItem>
