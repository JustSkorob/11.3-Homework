/** Универсальный виджет правой/нижней колонки с заголовком и содержимым. */
import type React from 'react'

export type WidgetProps = React.PropsWithChildren<{ title: string }>

export function Widget({ title, children }: WidgetProps) {
  return (
    <div className="box">
      <p className="title is-6 mb-3">{title}</p>
      {children}
    </div>
  )
}
