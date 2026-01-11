/** Собирает страницу-агрегатор из крупных блоков. */
import { PromoBanner } from './PromoBanner'
import { SearchBlock } from './SearchBlock'
import { ServicesNav } from './ServicesNav'
import { TopBar } from './TopBar'
import { WidgetsRow } from './WidgetsRow'

export function YandexPage() {
  return (
    <div>
      <TopBar />
      <ServicesNav />
      <SearchBlock />
      <PromoBanner />
      <WidgetsRow />
    </div>
  )
}
