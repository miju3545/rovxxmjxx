import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetaData from '@/data/siteMetaData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import PageTitle from '@/components/PageTitle'
import { AnyOBJ } from '@/constants/types'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: AnyOBJ) {
  return (
    <>
      <PageSEO title={siteMetaData.title} description={siteMetaData.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>최근 게시물</PageTitle>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">{siteMetaData.description}</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && <p>아직 작성된 게시물이 없습니다.</p>}
          {posts?.slice(0, MAX_DISPLAY).map((frontMatter: AnyOBJ) => {
            const { slug, date, title, summary, tags } = frontMatter

            return (
              <li key={slug} className="py-10">
                <Link
                  href={`/blog/${slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read "${title}"`}
                >
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dd className="text-sm font-medium leading-6 text-gray-400 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className=" mb-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              {title}
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag: string) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-base text-gray-500 dark:text-gray-400">{summary}</div>
                        </div>
                        <div className="text-base font-medium leading-6"></div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetaData.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
