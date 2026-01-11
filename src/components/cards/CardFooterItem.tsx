/** Элемент футера карточки. */
import type React from 'react'

export type CardFooterItemProps = React.PropsWithChildren<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>

export function CardFooterItem({ className, children, href = '#', ...rest }: CardFooterItemProps) {
  return (
    <a className={['card-footer-item', className].filter(Boolean).join(' ')} href={href} {...rest}>
      {children}
    </a>
  )
}
