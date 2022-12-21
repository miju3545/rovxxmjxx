import { escape } from '@/lib/utils/htmlEscaper'

import siteMetaData from '@/data/siteMetaData'

const generateRssItem = (post: any) => `
  <item>
    <guid>${siteMetaData.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetaData.siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetaData.email} (${siteMetaData.author})</author>
    ${post.tags && post.tags.map((t: string) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (posts: any[], page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetaData.title)}</title>
      <link>${siteMetaData.siteUrl}/blog</link>
      <description>${escape(siteMetaData.description)}</description>
      <language>${siteMetaData.language}</language>
      <managingEditor>${siteMetaData.email} (${siteMetaData.author})</managingEditor>
      <webMaster>${siteMetaData.email} (${siteMetaData.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetaData.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
export default generateRss
