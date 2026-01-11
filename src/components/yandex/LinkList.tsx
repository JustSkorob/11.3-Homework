/** Список ссылок для виджетов (посещаемое, эфир и т.п.). */
export type LinkListItem = {
  title: string
  description?: string
  href?: string
}

export type LinkListProps = {
  items: LinkListItem[]
}

export function LinkList({ items }: LinkListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a href={item.href ?? '#'}>
            <strong>{item.title}</strong>
            {item.description ? <span className="has-text-grey"> — {item.description}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  )
}
