/** Нижняя часть карточки с действиями/ссылками. */
import type React from 'react'

export type CardFooterProps = React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>

export function CardFooter({ className, children, ...rest }: CardFooterProps) {
  return (
    <footer className={['card-footer', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </footer>
  )
}
