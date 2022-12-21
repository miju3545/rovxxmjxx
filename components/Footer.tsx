import Link from './Link'
import siteMetaData from '@/data/siteMetaData'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetaData.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetaData.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetaData.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetaData.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetaData.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetaData.twitter} size="6" />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetaData.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetaData.title}</Link>
        </div>
      </div>
    </footer>
  )
}
