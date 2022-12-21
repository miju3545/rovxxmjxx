import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { AnyOBJ } from '@/constants/types'

type ImageProps = NextImageProps & AnyOBJ

// eslint-disable-next-line jsx-a11y/alt-text
const Image = (rest: ImageProps) => <NextImage {...rest} />

export default Image
