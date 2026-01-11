/** Навигация по сервисам (видео, картинки, новости и т.п.). */
export function ServicesNav() {
  return (
    <div className="box">
      <div className="tags are-medium">
        {['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'].map(
          (label) => (
            <a key={label} className="tag" href="#">
              {label}
            </a>
          ),
        )}
      </div>
    </div>
  )
}
