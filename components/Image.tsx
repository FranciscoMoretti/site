import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => (
  <div className="m-0 w-full rounded-xl bg-muted/80 p-2">
    <NextImage src={`${basePath || ''}${src}`} className="m-0 w-full rounded-lg" {...rest} />
  </div>
)

export default Image
