import { CardsDemo } from './components/cards/CardsDemo'
import { YandexPage } from './components/yandex'

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Композиция компонентов</h1>

        <h2 className="subtitle">Карточки</h2>
        <CardsDemo />

        <hr />

        <h2 className="subtitle">Декомпозиция</h2>
        <YandexPage />
      </div>
    </section>
  )
}

export default App
