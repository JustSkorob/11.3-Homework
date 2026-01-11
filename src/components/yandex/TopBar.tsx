/** Верхняя строка: новости слева, курсы справа. */
import { NewsList } from './NewsList'
import { RatesBar } from './RatesBar'

export function TopBar() {
  return (
    <div className="columns is-variable is-4">
      <div className="column is-two-thirds">
        <NewsList
          items={[
            { iconText: 'N', text: 'Заголовок новости номер один', href: '#' },
            { iconText: 'N', text: 'Ещё одна новость с коротким текстом', href: '#' },
            { iconText: 'N', text: 'Третья новость — пример повторяющегося элемента', href: '#' },
          ]}
        />
      </div>
      <div className="column">
        <RatesBar
          items={[
            { name: 'USD', value: '63,52', delta: '+0,09' },
            { name: 'EUR', value: '70,86', delta: '+0,14' },
            { name: 'НЕФТЬ', value: '64,90', delta: '+1,63%' },
          ]}
        />
      </div>
    </div>
  )
}
