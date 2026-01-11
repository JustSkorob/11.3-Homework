/** Демонстрация вариантов карточек. */
import { Card, CardContent, CardFooter, CardFooterItem, CardImage, CardText, CardTitle } from '.'

const placeholder =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#7a7a7a" font-family="Arial" font-size="24">Image</text>
    </svg>`,
  )

export function CardsDemo() {
  return (
    <div className="columns is-multiline">
      <div className="column is-one-third">
        <Card>
          <CardImage src={placeholder} alt="Пример изображения" />
          <CardContent>
            <CardTitle>Карточка с картинкой</CardTitle>
            <CardText>
              <p>Собирается через <code>props.children</code> и отдельные подкомпоненты.</p>
            </CardText>
          </CardContent>
          <CardFooter>
            <CardFooterItem href="#">Действие 1</CardFooterItem>
            <CardFooterItem href="#">Действие 2</CardFooterItem>
          </CardFooter>
        </Card>
      </div>

      <div className="column is-one-third">
        <Card>
          <CardContent>
            <CardTitle>Только контент</CardTitle>
            <CardText>
              <p>Вариант без изображения и футера.</p>
              <p className="is-size-7 has-text-grey">Базовое оформление — без логики.</p>
            </CardText>
          </CardContent>
        </Card>
      </div>

      <div className="column is-one-third">
        <Card>
          <CardImage src={placeholder} alt="Пример изображения" ratioClassName="is-16by9" />
          <CardContent>
            <CardTitle>Другая пропорция</CardTitle>
            <CardText>
              <p>Картинка задаётся через props, пропорция — через класс Bulma.</p>
            </CardText>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
