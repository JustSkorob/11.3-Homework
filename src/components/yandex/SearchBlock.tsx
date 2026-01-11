/** Поисковый блок: логотип, поле ввода и кнопка. */
export function SearchBlock() {
  return (
    <div className="box">
      <div className="columns is-vcentered">
        <div className="column is-narrow">
          <p className="title is-4 mb-0">Яндекс</p>
        </div>
        <div className="column">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" placeholder="Найдётся всё" />
            </div>
            <div className="control">
              <button className="button is-warning">Найти</button>
            </div>
          </div>
          <p className="is-size-7 has-text-grey">Подсказка: здесь может быть пример запроса.</p>
        </div>
      </div>
    </div>
  )
}
