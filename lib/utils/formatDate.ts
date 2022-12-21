import siteMetaData from '@/data/siteMetaData'
import { StringOBJ } from '@/constants/types'

const formatDate = (date: string) => {
  const options: StringOBJ = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetaData.locale, options)

  return now
}

export default formatDate
