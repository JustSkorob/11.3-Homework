/** Контейнер карточки. */
import type React from 'react'

export type CardProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div className={['card', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
}
