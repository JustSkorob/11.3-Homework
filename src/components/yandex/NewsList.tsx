/** Список новостей в верхнем блоке. */
import { NewsItem, type NewsItemProps } from './NewsItem'

export type NewsListProps = {
  items: NewsItemProps[]
}

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="box">
      <p className="title is-6 mb-3">Сейчас в СМИ</p>
      <ul>
        {items.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </ul>
    </div>
  )
}
