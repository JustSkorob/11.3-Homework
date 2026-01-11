/** Блок изображения карточки. */
import type React from 'react'

export type CardImageProps = {
  src: string
  alt: string
  ratioClassName?: string
  imgClassName?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export function CardImage({
  src,
  alt,
  ratioClassName = 'is-4by3',
  imgClassName,
  className,
  ...rest
}: CardImageProps) {
  return (
    <div className={['card-image', className].filter(Boolean).join(' ')} {...rest}>
      <figure className={['image', ratioClassName].filter(Boolean).join(' ')}>
        <img className={imgClassName} src={src} alt={alt} />
      </figure>
    </div>
  )
}
