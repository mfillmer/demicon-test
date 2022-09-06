export const CountrySelector = ({
  value,
  setValue,
  items,
}: {
  value: string
  items: string[]
  setValue: (v: string) => void
}) => {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      name='country'>
      <option value='' disabled>
        Choose a Country
      </option>
      {items.map((name) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  )
}
