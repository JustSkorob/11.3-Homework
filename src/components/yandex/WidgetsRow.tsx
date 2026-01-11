/** Нижний ряд виджетов (погода, посещаемое, эфир и т.п.). */
import { LinkList } from './LinkList'
import { Widget } from './Widget'

export function WidgetsRow() {
  return (
    <div className="columns is-variable is-4">
      <div className="column">
        <Widget title="Погода">
          <p className="mb-2">
            <strong>+17°</strong> утром +17, днём +20
          </p>
        </Widget>
      </div>
      <div className="column">
        <Widget title="Посещаемое">
          <LinkList
            items={[
              { title: 'Недвижимость', description: 'о сталинках' },
              { title: 'Маркет', description: 'люстры и светильники' },
              { title: 'Авто.ру', description: 'привод 4x4 до 500 000' },
            ]}
          />
        </Widget>
      </div>
      <div className="column">
        <Widget title="Эфир">
          <LinkList
            items={[
              { title: 'Управление как искусство', description: 'Успех' },
              { title: 'Ночь. Мир в это время', description: 'earthTV' },
              { title: 'Андрей Возн...', description: 'Совершенно секретно' },
            ]}
          />
        </Widget>
      </div>
    </div>
  )
}
