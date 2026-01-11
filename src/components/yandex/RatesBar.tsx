/** Блок котировок/курсов рядом с новостями. */
import { RateItem, type RateItemProps } from './RateItem'

export type RatesBarProps = {
  items: RateItemProps[]
}

export function RatesBar({ items }: RatesBarProps) {
  return (
    <div className="box">
      <p className="title is-6 mb-3">Курсы</p>
      <div>
        {items.map((item, index) => (
          <RateItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
