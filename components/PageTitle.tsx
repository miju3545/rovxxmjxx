import { Children } from '@/constants/types'

export default function PageTitle({ children }: Children) {
  return (
    <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
      {children}
    </h1>
  )
}
