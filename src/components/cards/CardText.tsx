/** Текст/описание карточки. */
import type React from 'react'

export type CardTextProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export function CardText({ className, children, ...rest }: CardTextProps) {
  return (
    <div className={['content', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
}
