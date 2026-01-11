/** Элемент новости: иконка, ссылка и текст. */
export type NewsItemProps = {
  iconText: string
  text: string
  href?: string
}

export function NewsItem({ iconText, text, href = '#' }: NewsItemProps) {
  return (
    <li className="mb-2">
      <a className="is-flex is-align-items-center" href={href}>
        <span className="tag is-light mr-2">{iconText}</span>
        <span>{text}</span>
      </a>
    </li>
  )
}
