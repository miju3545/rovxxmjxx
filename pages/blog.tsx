import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetaData from '@/data/siteMetaData'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { AnyOBJ } from '@/constants/types'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }: AnyOBJ) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetaData.author}`} description={siteMetaData.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts" />
    </>
  )
}
