/** Элемент курса/котировки с названием и значением. */
export type RateItemProps = {
  name: string
  value: string
  delta?: string
}

export function RateItem({ name, value, delta }: RateItemProps) {
  return (
    <span className="mr-4 is-size-7">
      <strong>{name}</strong> {value}{' '}
      {delta ? <span className="has-text-grey">{delta}</span> : null}
    </span>
  )
}
