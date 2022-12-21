import siteMetaData from '@/data/siteMetaData'
import headerNavLinks from '@/data/headerNavLinks'
import LogoSvg from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileGNB'
import ThemeSwitch from './ThemeSwitch'
import { Children, StringOBJ } from '@/constants/types'

const LayoutWrapper = ({ children }: Children) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetaData.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <LogoSvg /> */}</div>
                {typeof siteMetaData.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">{siteMetaData.headerTitle}</div>
                ) : (
                  siteMetaData.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link: StringOBJ) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
