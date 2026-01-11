/** Заголовок карточки. */
import type React from 'react'

export type CardTitleProps = React.PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>

export function CardTitle({ className, children, ...rest }: CardTitleProps) {
  return (
    <p className={['title', 'is-5', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </p>
  )
}
