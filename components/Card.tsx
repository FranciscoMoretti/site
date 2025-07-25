import Image from './Image'
import Link from './Link'

export function Card({ title, description, imgSrc, href }) {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className={`${imgSrc && 'h-full'}  overflow-hidden rounded-md border-2 border-border`}>
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="aspect-[calc(1200/630)] object-cover object-center "
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3  max-w-none text-muted-foreground dark:prose-invert">
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary hover:text-primary/90"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
