import { Children } from '@/constants/types'

export default function SectionContainer({ children }: Children) {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
}
