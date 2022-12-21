/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
import { AnyOBJ } from '@/constants/types'

const Link = ({ href, ...rest }: AnyOBJ) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href} legacyBehavior>
        <a {...rest} />
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return (
      <NextLink href={href} legacyBehavior>
        <a {...rest} />
      </NextLink>
    )
  }

  return (
    <NextLink href={href} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" {...rest} />
    </NextLink>
  )
}

export default Link
