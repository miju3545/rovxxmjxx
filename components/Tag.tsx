import Link from '@/components/Link'
import kebabCase from '@/lib/utils/kebabCase'
import { AnyOBJ } from '@/constants/types'

const Tag = ({ text }: AnyOBJ) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-2 rounded-full border-gray-400 bg-purple-100 px-2 py-1 text-xs font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
