import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { AnyOBJ } from '@/constants/types'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }: AnyOBJ) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer layout={frontMatter.layout || DEFAULT_LAYOUT} mdxSource={mdxSource} frontMatter={frontMatter} />
  )
}
