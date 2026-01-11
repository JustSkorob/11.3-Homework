/** Контентная часть карточки. */
import type React from 'react'

export type CardContentProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export function CardContent({ className, children, ...rest }: CardContentProps) {
  return (
    <div className={['card-content', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
}
